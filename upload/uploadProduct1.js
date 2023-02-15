window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("LoggedIn")) {
    window.location.href = `${window.location.origin}/login.html`;
  }
});
(async () => {
  const { Items: Vendors } = await (
    await fetch(
      `https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/vendor`
    )
  ).json();
  const VendorOptgroup = document.querySelector("#vendor optgroup");
  Vendors?.map(({ VendorName }) => {
    const optionElement = document.createElement("option");
    optionElement.value = VendorName;
    optionElement.append(VendorName);
    VendorOptgroup.append(optionElement);
  });
})();
const VendorSelect = document.getElementById("vendor");
const ProductNameInput = document.getElementById("Pnmae");
const DescriptionInput = document.getElementById("metadata2");
const LabelInput = document.getElementById("label");
const confirmationDialog = document.querySelector("dialog");
const addPackageButton = document.querySelector("button#add");
const packagesUl = document.querySelector("#product ul");
addPackageButton.onclick = () => {
  const li = document.createElement("li");
  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = "please insert package name";
  textInput.classList.add("packages");
  li.append(textInput);
  packagesUl.append(li);
};
async function submit_data() {
  const {
    productData: { Items },
  } = await (
    await fetch(
      "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/product/"
    )
  ).json();

  const isAllPackageInputFilledValue = isAllPackageInputFilled();
  if (
    !(VendorSelect || ProductNameInput || DescriptionInput || LabelInput)
      .value ||
    !isAllPackageInputFilledValue
  ) {
    alert("please fill out all the fields");
    return;
  }
  if (Items.filter((i) => i.productName === ProductNameInput.value).length) {
    alert("this product name is already there");
    return;
  }
  confirmationDialog.innerHTML = `
    <button id ="cancelBtn">Cancel</button>
    <button id="confirmBtn">Confirm</button>`;
  confirmationDialog.innerHTML =
    `
  <p>Vendor is :${VendorSelect.value}</p>
  <br/>
  <p>Product Name is :${ProductNameInput.value}</p>
  <br/>
  <p>Product Packages are :${isAllPackageInputFilledValue.join(",")}</p>
  <br/>
  <p>Product Description is :${DescriptionInput.value}</p>
  <br/>
  <p>Product Label is :${LabelInput.value}</p>
  ` + confirmationDialog.innerHTML;
  const confirmBtn = document.querySelector("dialog button#confirmBtn");
  const cancelBtn = document.querySelector("dialog button#cancelBtn");
  confirmationDialog.showModal();
  cancelBtn.onclick = () => confirmationDialog.close();
  confirmBtn.onclick = () => {
    confirmationDialog.close();
    uploadData(isAllPackageInputFilledValue.join(","));
  };
}
function isAllPackageInputFilled() {
  const textArr = [];
  const allPackageTextInputs = document.querySelectorAll("input.packages");
  for (const { value } of allPackageTextInputs) {
    console.log("triggered");
    if (!value) return false;
    textArr.push(value);
  }
  return textArr;
}

async function uploadData(includedPackages) {
  const UploadData = await (
    await fetch(
      "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/uploadProduct",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Vendor: VendorSelect.value,
          productName: ProductNameInput.value,
          Status: "Wait for a Product stored",
          Label: LabelInput.value,
          Description: DescriptionInput.value,
          includedPackages,
          Release_Date: new Date()
            .toLocaleDateString("en-GB")
            .split("/")
            .reverse()
            .join("-"),
        }),
      }
    )
  ).json();
  if (!UploadData?.success) {
    alert("try again failed to send data");
    return;
  }
  alert("data was sent successfully");
}
