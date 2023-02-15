window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("LoggedIn")) {
    window.location.href = `${window.location.origin}/login.html`;
  }
});

AWS.config.update({
  region: "eu-west-2",
  endpoint: "https://s3.eu-west-2.amazonaws.com",
  accessKeyId: "AKIAZ4L4W27ZJZZM7W5H",
  secretAccessKey: "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",
});
const s3 = new AWS.S3({
  apiVersion: "2012-10-17",
  endpoint: "https://s3.eu-west-2.amazonaws.com",
  params: { Bucket: "neccp-release-mng-solution" },
});
const VendorData = {
  data: {},
};
const vendorOptgroup = document.querySelector("#vendor optgroup");
const releaseNoteInput = document.querySelector("#fileUpload");
const ProductOptgroup = document.querySelector("#productSelect optgroup");
const ProductVersionInput = document.querySelector("#metadata2");
const ReleaseDateInput = document.querySelector("#I1");
const ReleaseNoteInput = document.querySelector("#ReleaseNoteFile");
const confirmationDialog = document.querySelector("dialog#confirmationDialog");
console.log(confirmationDialog);

(async () => {
  const data = await (
    await fetch(
      "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/solution"
    )
  ).json();
  if (!data?.productData) return;
  const {
    productData: { Items: productItems },
  } = data;
  VendorData.data = productItems;
  const AutoPopulateCallback = (key, docElement) => {
    return (element) => {
      if (docElement.textContent.match(element[key])) return;
      const option = document.createElement("option");
      option.append(element[key] || "-");
      docElement.append(option);
    };
  };
  productItems.forEach(AutoPopulateCallback("Vendor", vendorOptgroup));
})();
vendorOptgroup.parentElement.onchange = (e) => {
  if (!VendorData.data?.length) return;
  document
    .querySelectorAll("#productSelect option:not([disabled])")
    .forEach((element) => element.remove());
  const { data } = VendorData;
  const MatchingProducts = data.filter((i) => i.Vendor === e.target.value);
  MatchingProducts.map((i) => {
    const option = document.createElement("option");
    option.textContent = i.productName || "-";
    ProductOptgroup.append(option);
  });
};
const NumOfProductsSelected = (object) => {
  let numOfItems = 0;
  for (const key in object) {
    if (!object[key].length) continue;
    numOfItems += object[key].length;
  }
  return numOfItems;
};

async function uploadData() {
  if (
    !(
      ProductVersionInput ||
      ReleaseDateInput ||
      ProductOptgroup.parentElement ||
      vendorOptgroup.parentElement
    ).value
  ) {
    alert("please fill out the fields");
    return;
  }
  const DateFormat = new Date()
    .toLocaleDateString("en-GB")
    .split("/")
    .reverse()
    .join("-");
  confirmationDialog.innerHTML = `
    <button id ="cancelBtn">Cancel</button>
    <button id="confirmBtn">Confirm</button>`;
  confirmationDialog.innerHTML =
    `
    <p>Your Product Name is ${ProductOptgroup.parentElement.value}</p>
    <br/>
    <p>Your Product Version is ${ProductVersionInput.value}</p>
    <br/>
    <p>Your Product Version Status is "Wait for a Product stored"</p>
    <br/>
    <p>Your Release Date is ${ReleaseDateInput.value}</p>
    <br/>
    <p>Your Last Update is ${DateFormat}</p>
    <br/>
    <p>Your Product Vendor is ${vendorOptgroup.parentElement.value}</p>
  ` + confirmationDialog.innerHTML;
  const cancelBtn = document.querySelector(
    "dialog#confirmationDialog  button#cancelBtn"
  );
  const confirmationBtn = document.querySelector(
    "dialog#confirmationDialog button#confirmBtn"
  );
  confirmationDialog.showModal();
  cancelBtn.onclick = () => confirmationDialog.close();
  confirmationBtn.onclick = () => {
    confirmationDialog.close();
    uploadDataToDb(DateFormat);
  };
}

function uploadDataToDb(DateFormat) {
  let isThereIsAReleaseNoteFile = false;
  const payloadObj = {
    TableName: ProductOptgroup.parentElement.value,
    Item: {
      version: ProductVersionInput.value,
      Status: "Wait for a Product stored",
      numOfItems: 1,
      Release_Date: ReleaseDateInput.value,
      LastUpdate: DateFormat,
      Vendor: vendorOptgroup.parentElement.value,
      ReleaseNote: null,
    },
  };
  if (releaseNoteInput.files.length) {
    console.log(releaseNoteInput.files);
    const releaseNoteFile = releaseNoteInput.files[0];
    isThereIsAReleaseNoteFile = true;
    s3.upload(
      {
        Bucket: "neccp-release-mng-solution",
        Body: releaseNoteFile,
        Key: releaseNoteFile.name,
      },
      (err, data) => {
        if (err) {
          console.log(err);
          isThereIsAReleaseNoteFile = false;
          return;
        }
        const { Location } = data;
        payloadObj.Item.ReleaseNote = {
          Link: Location,
          Name: releaseNoteFile.name,
        };
      }
    );
  }
  const interval = setInterval(async () => {
    if (isThereIsAReleaseNoteFile && !payloadObj.Item.ReleaseNote) return;
    console.log(payloadObj);
    clearInterval(interval);
    const uploadData = await (
      await fetch(
        "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/createProductVersion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payloadObj),
        }
      )
    ).json();
    if (uploadData?.productData) {
      alert("data was sent successfully");
      return;
    }
    alert("failed to send data");
  }, 500);
}
