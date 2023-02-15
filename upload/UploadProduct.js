//Bucket Configurations
const S3TableBody = document.querySelector("table > tbody#S3Body");
let id = 123;
AWS.config.update({
  region: "eu-west-2",
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "eu-west-2:06502587-7909-4d15-865f-778bff643ebd",
  }),
});
const ProductNameInput = document.getElementById("Product Name");
const NumOFitemsInput = document.getElementById("NumOFitems");
const LastUpdateInput = document.getElementById("LastUpdate");
const statusInput = document.getElementById("status");
const releaseDateInput = document.getElementById("Release Date");
const ReleaseNoteFileInput = document.getElementById("releaseUpload");
const docClient = new AWS.DynamoDB.DocumentClient();
console.log(docClient);
async function s3upload() {
  const s3 = new AWS.S3({
    apiVersion: "2012-10-17",
    params: { Bucket: "upload-package" },
  });
  if (
    !(
      ProductNameInput ||
      NumOFitemsInput ||
      LastUpdateInput ||
      statusInput ||
      releaseDateInput
    ).value ||
    !ReleaseNoteFileInput.files.length
  ) {
    console.log(ProductNameInput.value);
    console.log(NumOFitemsInput.value);
    console.log(LastUpdateInput.value);
    console.log(statusInput.value);
    console.log(releaseDateInput.value);
    alert("please fill out all the fields");
    return;
  }
  const ReleaseNoteFile = ReleaseNoteFileInput.files[0];
  const ReleaseNoteFileInputName = ReleaseNoteFile.name;
  const params = {
    Bucket: "upload-package",
    Body: ReleaseNoteFile,
    Key: ReleaseNoteFileInputName,
  };
  const data = await s3
    .putObject(params, async (err, data) => {
      if (err) {
        console.log("err", err);
        return;
      }
      const { Location } = data;
      try {
        const {
          S3TableData: { Items },
        } = await (
          await fetch(
            "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/s3Bucket",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                TableName: "Products1",
                Item: {
                  Name: ProductNameInput.value,
                  LastUpdate: LastUpdateInput.value,
                  Status: statusInput.value,
                  "Released Date": releaseDateInput.value,
                  "N0. of Items": NumOFitemsInput.value,
                  ReleaseNote: Location,
                },
              }),
            }
          )
        ).json();
        console.log("data", Items);
      } catch (error) {
        console.log("err", error);
      }
      document.querySelector("progress").value = 0;
    })
    .on("httpUploadProgress", function (progress) {
      const uploaded = parseInt((progress.loaded * 100) / progress.total);
      document.querySelector("progress").value = uploaded;
    });
}
