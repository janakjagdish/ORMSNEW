window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("LoggedIn")) {
    window.location.href = `${window.location.origin}/login.html`;
  }
});
const productOptGroup = document.querySelector("select#Product optgroup");
const productVersionOptGroup = document.querySelector("select#pvname optgroup");
const fileInput = document.querySelector("input#fileUpload");
const submitBtn = document.querySelector("button#four");
const productVersionsObj = {};
AWS.config.update({
  region: "us-east-1",
  endpoint: "https://s3.us-east-1.amazonaws.com",
  accessKeyId: "AKIAYX72S4DQCTZ3P7IV",
  secretAccessKey: "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",
});
(async () => {
  const {
    productData: { Items: Products },
  } = await (
    await fetch(
      "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/product"
    )
  ).json();
  Products?.map(async ({ productName }) => {
    appendOption(productName, productOptGroup);
    const { Items: productVersions } = await (
      await fetch(
        `https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/productPage/${productName}`
      )
    ).json();
    productVersionsObj[productName] = productVersions;
  });
})();

productOptGroup.parentElement.onchange = ({ target: { value } }) => {
  document
    .querySelectorAll("select#pvname optgroup option:not([disabled])")
    .forEach((element) => element.remove());
  productVersionsObj[value]?.map(({ version }) =>
    appendOption(version, productVersionOptGroup)
  );
};
submitBtn.onclick = uploadData;
const s3 = new AWS.S3({
  apiVersion: "2012-10-17",
  endpoint: "https://s3.us-east-1.amazonaws.com",
  params: { Bucket: "ormsolution" },
});
function uploadData() {
  if (!productOptGroup.parentElement.value) {
    alert("please select a solution");
    return;
  }
  if (!productVersionOptGroup.parentElement.value) {
    alert("please select a solution version");
    return;
  }
  if (!fileInput.files.length) {
    alert("please upload a csv");
  }
  const file = fileInput.files[0];
  s3.upload(
    {
      Bucket: "ormsolution",
      Key: file.name,
      Body: file,
    },
    async (err, data) => {
      if (err) {
        alert("failed to upload the file");
        return;
      }
      const { Location } = data;
      const productVersionObj = productVersionsObj[
        productOptGroup.parentElement.value
      ]?.filter(
        ({ version }) => version === productVersionOptGroup.parentElement.value
      )[0];
      if (!productVersionObj) return;
      const uploadData = await (
        await fetch(
          "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/product",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              TableName: productOptGroup.parentElement.value,
              Item: {
                ...productVersionObj,
                ReleaseNote: {
                  Link: Location,
                  Name: file.name,
                },
              },
            }),
          }
        )
      ).json();
      console.log(uploadData);
      if (uploadData?.success) {
        alert("failed to upload data please try again");
        return;
      }
      alert("data was sent successfully");
    }
  );
}
function appendOption(appendedText, parent) {
  const option = document.createElement("option");
  option.append(appendedText);
  parent.append(option);
}
