window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("LoggedIn")) {
    window.location.href = `${window.location.origin}/login.html`;
  }
});
const VendorData = { data: {} };
const VendorObjects = {};
let customersArr = [];
const vendorOption = document.querySelector("#vendor optgroup");
const SubmitButton = document.querySelector("#four");
const customerUl = document.querySelector("#customer ul");
(async () => {
  const data = await (
    await fetch(
      "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/product"
    )
  ).json();
  if (!data?.productData) return;
  const { Items: Customers } = await (
    await fetch(
      `https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/customers`
    )
  ).json();
  const {
    productData: { Items },
  } = data;
  Items.forEach((element) => {
    if (vendorOption.textContent.match(element.Vendor)) return;
    const option = document.createElement("option");
    option.append(element.Vendor || "-");
    VendorObjects[element.Vendor] = [];
    vendorOption.append(option);
  });
  Customers?.map(({ Name }) => {
    const li = document.createElement("li");
    const checkboxInput = document.createElement("input");
    const label = document.createElement("label");
    checkboxInput.type = "checkbox";
    checkboxInput.onclick = ({ target: { checked, value } }) => {
      if (!checked) {
        customersArr = customersArr.filter((i) => i !== value);
        return;
      }
      customersArr = [...customersArr, value];
    };
    checkboxInput.value = Name;
    checkboxInput.id = Name;
    label.htmlFor = Name;
    label.append(Name);
    li.append(checkboxInput, label);
    customerUl.append(li);
  });
  VendorData.data = Items;
})();
const solutionNameInput = document.getElementById("name");
const descriptionInput = document.getElementById("desc");
const LabelInput = document.getElementById("label");
const ReleasedCustomerInput = document.getElementById("Released Customer");
const VendorSelectElement = document.getElementById("vendor");
const productOption = document.querySelector("#product");
const customerOption = document.querySelector("#customer");
const productUl = document.querySelector("#product ul");
const confirmationDialog = document.querySelector("dialog#confirmationDialog");
const toggleView = ({ target: { classList } }) => {
  classList.contains("view") ? classList.remove("view") : classList.add("view");
};
customerOption.onclick = toggleView;
productOption.onclick = toggleView;
VendorSelectElement.onchange = (e) => {
  if (!VendorData.data?.length) return;
  const { data } = VendorData;
  const MatchingProducts = data.filter((i) => i.Vendor === e.target.value);
  productUl.innerHTML = "";
  MatchingProducts.map((i) => {
    const inputElement = document.createElement("input");
    const Label = document.createElement("label");
    Label.htmlFor = i.productName || "-";
    Label.append(i.productName || "-");
    const Li = document.createElement("li");
    inputElement.type = "checkbox";
    inputElement.dataset.vendor = i.Vendor;
    inputElement.onclick = ({ target: e }) => {
      if (!e.checked) {
        VendorObjects[e.dataset.vendor] = VendorObjects[
          e.dataset.vendor
        ].filter((index) => index !== e.value);
        return;
      }
      VendorObjects[e.dataset.vendor] = [
        ...VendorObjects[e.dataset.vendor],
        e.value,
      ];
    };
    inputElement.checked = !!VendorObjects[i.Vendor]?.find(
      (index) => index === i.productName
    );
    inputElement.value = i.productName || "-";
    Li.append(inputElement);
    Li.append(Label);
    productUl.append(Li);
  });
};
async function submit_data() {
  const isProductsSelectedValue = isProductsSelected(VendorObjects);
  if (
    !(solutionNameInput || descriptionInput || LabelInput).value ||
    !isProductsSelectedValue ||
    !customersArr.length ||
    solutionNameInput.value.length <= 3
  ) {
    alert("please fill out the form correctly");
    return;
  }
  confirmationDialog.innerHTML = `
    <button id ="cancelBtn">Cancel</button>
    <button id="confirmBtn">Confirm</button>`;
  confirmationDialog.innerHTML =
    `
  <p>Your Solution Name is ${solutionNameInput.value}</p>
  <br/>
  <p>Tour solution descriptions is ${descriptionInput.value}</p>
  <br/>
  <p>Your Labels are ${LabelInput.value}</p>
  <br/>
  <p>Your release Customers are ${customersArr.join(", ")}</p>
  <br/>
  ` + confirmationDialog.innerHTML;
  const confirmBtn = document.querySelector(
    "dialog#confirmationDialog button#confirmBtn"
  );
  const cancelBtn = document.querySelector(
    "dialog#confirmationDialog button#cancelBtn"
  );
  confirmationDialog.showModal();
  cancelBtn.onclick = () => confirmationDialog.close();
  confirmBtn.onclick = () => {
    confirmationDialog.close();
    UploadData();
  };
}
function isProductsSelected(object) {
  for (const key in object) {
    if (object[key].length) return true;
  }
  return false;
}
async function UploadData() {
  const CreateSolution = await (
    await fetch(
      "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/createSolution",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: solutionNameInput.value,
          Description: descriptionInput.value,
          Label: LabelInput.value,
          Last_Update: new Date()
            .toLocaleDateString("en-GB")
            .split("/")
            .reverse()
            .join("-"),
          Released_Customer: customersArr.join(", "),
        }),
      }
    )
  ).json();
  alert("data was sent success fully");
  for (const key in VendorObjects) {
    VendorObjects[key].map(async (index) => {
      const UploadData = await (
        await fetch(
          "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/createSolution",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productName: index,
              parentName: solutionNameInput.value,
            }),
          }
        )
      ).json();
    });
  }
}
