window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("LoggedIn")) {
    window.location.href = `${window.location.origin}/login.html`;
  }
});
const solutionOptgroup = document.querySelector("select#Solution optgroup");
const solutionVersionOptgroup = document.querySelector(
  "select#svname optgroup"
);
const fileInput = document.querySelector("#fileUpload");
const submitBtn = document.querySelector("button#four");
const solutionVersionsObj = {};
AWS.config.update({
  region: "us-east-1",
  endpoint: "https://s3.us-east-1.amazonaws.com",
  accessKeyId: "AKIAYX72S4DQCTZ3P7IV",
  secretAccessKey: "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",
});
(async () => {
  const {
    solutions: { Items: Solutions },
  } = await (
    await fetch(
      "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/solution"
    )
  ).json();
  Solutions?.map(async ({ name }) => {
    const option = document.createElement("option");
    option.append(name);
    solutionOptgroup.append(option);
    const { Items: solutionVersions } = await (
      await fetch(
        `https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/solutionPage/${name}`
      )
    ).json();
    solutionVersionsObj[name] = solutionVersions;
    console.log("solutionVersionsObj", solutionVersionsObj);
  });
})();
solutionOptgroup.parentElement.onchange = ({ target: { value } }) => {
  document
    .querySelectorAll("select#svname optgroup option:not([disabled])")
    .forEach((element) => element.remove());
  solutionVersionsObj[value]?.map(({ version }) => {
    const option = document.createElement("option");
    option.append(version);
    solutionVersionOptgroup.append(option);
  });
};
submitBtn.onclick = UploadReport;
const s3 = new AWS.S3({
  apiVersion: "2012-10-17",
  endpoint: "https://s3.us-east-1.amazonaws.com",
  params: { Bucket: "ormsolution" },
});
function UploadReport() {
  if (!solutionOptgroup.parentElement.value) {
    alert("please select a solution");
    return;
  }
  if (!solutionVersionOptgroup.parentElement.value) {
    alert("please select a solution version");
    return;
  }
  if (!fileInput.files.length) {
    alert("please upload a csv");
  }
  const file = fileInput.files[0];
  submitBtn.disabled = true;
  s3.upload(
    {
      Bucket: "ormsolution",
      Key: file.name,
      Body: file,
    },
    async (err, data) => {
      submitBtn.disabled = false;
      if (err) {
        alert("failed to upload file");
        return;
      }
      const { Location } = data;
      const solutionVersionObj = solutionVersionsObj[
        solutionOptgroup.parentElement.value
      ]?.filter(
        ({ version }) => version === solutionVersionOptgroup.parentElement.value
      )[0];
      if (!solutionVersionObj) return;
      const uploadData = await (
        await fetch(
          "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/product",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              TableName: solutionOptgroup.parentElement.value,
              Item: {
                ...solutionVersionObj,
                dqaReport: {
                  Link: Location,
                  Name: file.name,
                },
              },
            }),
          }
        )
      ).json();
      if (uploadData?.success) {
        alert("failed to upload data");
        return;
      }
      alert("data was uploaded successfully");
    }
  );
}
