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
  region: "eu-west-2",
  endpoint: "https://s3.eu-west-2.amazonaws.com",
  accessKeyId: "AKIAZ4L4W27ZJZZM7W5H",
  secretAccessKey: "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",
});
(async () => {
  const {
    solutions: { Items: Solutions },
  } = await (
    await fetch(
      "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/solution"
    )
  ).json();
  Solutions?.map(async ({ name }) => {
    const option = document.createElement("option");
    option.append(name);
    solutionOptgroup.append(option);
    const { Items: solutionVersions } = await (
      await fetch(
        "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/solutionPage",
        {
          method: "GET",
          headers: {
            id: name,
          },
        }
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
  endpoint: "https://s3.eu-west-2.amazonaws.com",
  params: { Bucket: "neccp-release-mng-solution" },
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
      Bucket: "neccp-release-mng-solution",
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
          "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/product",
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
