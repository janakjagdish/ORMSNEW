window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("LoggedIn")) {
    window.location.href = `${window.location.origin}/login.html`;
  }
});
AWS.config.update({
  region: "us-east-1",
  endpoint: "https://s3.us-east-1.amazonaws.com",
  accessKeyId: "AKIAYX72S4DQCTZ3P7IV",
  secretAccessKey: "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",
});
const s3 = new AWS.S3({
  apiVersion: "2012-10-17",
  endpoint: "https://s3.us-east-1.amazonaws.com",
  params: { Bucket: "ormsolution" },
});
const solutionOptgroup = document.querySelector("#Solution optgroup");
const vendorOptgroup = document.querySelector("#vendor optgroup");
const VendorSelectElement = document.getElementById("vendor");
const productOption = document.getElementById("product");
const productOptgroup = document.querySelector("#pname optgroup");
const ProductVersionSelect = document.querySelector("#pname");
const ProductVersionUl = document.querySelector("#product ul");
const SubmitButton = document.querySelector("#four");
const dqaReportInput = document.querySelector("#fileUpload");
const customerOption = document.querySelector("#customer");
const customersUl = document.querySelector("#customer ul");
const majorInput = document.getElementById("major");
const minorInput = document.getElementById("minor");
const patchInput = document.getElementById("patch");
const confirmationDialog = document.querySelector("dialog#confirmationDialog");
const ProductObjects = {};
const VendorData = {
  data: {},
};
let customerArr = [];
let selectedProducts = [];
console.log(ProductVersionUl);
const toggleView = ({ target: { classList } }) =>
  classList.contains("view") ? classList.remove("view") : classList.add("view");
productOption.onclick = toggleView;
customerOption.onclick = toggleView;
(async () => {
  const data = await (
    await fetch(
      "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/solution"
    )
  ).json();
  if (!data?.solutions) return;
  const { Items: Customers } = await (
    await fetch(
      `https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/customers`
    )
  ).json();
  Customers?.map(({ Name }) => {
    const li = document.createElement("li");
    const checkboxInput = document.createElement("input");
    const label = document.createElement("label");
    checkboxInput.type = "checkbox";
    checkboxInput.onclick = ({ target: { checked, value } }) => {
      if (!checked) {
        customerArr = customerArr.filter((i) => i !== value);
        return;
      }
      customerArr = [...customerArr, value];
    };
    checkboxInput.value = Name;
    checkboxInput.id = Name;
    label.htmlFor = Name;
    label.append(Name);
    li.append(checkboxInput, label);
    customersUl.append(li);
  });
  const {
    solutions: { Items: solutionsItems },
    productData: { Items: productItems },
  } = data;
  VendorData.data = productItems;
  productItems.map(async (i) => {
    ProductObjects[i.productName] = [];
    const data = await (
      await fetch(
        `https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/productPage/${i.productName}`
      )
    ).json();
    ProductObjects[`${i.productName}Versions`] = data?.Items || [];
  });
  const AutoPopulateCallback = (key, docElement) => {
    return (element) => {
      const option = document.createElement("option");
      option.append(element[key] || "-");
      docElement.append(option);
    };
  };
  solutionsItems.forEach(AutoPopulateCallback("name", solutionOptgroup));
})();
solutionOptgroup.parentElement.onchange = ({ target: { value } }) => {
  customerArr = [];
  const customerCheckboxes = document.querySelectorAll("#customer input");
  customerCheckboxes.forEach((element) => (element.checked = false));
  ProductVersionUl.innerHTML = "";
  const filteredProducts = VendorData.data.filter(
    (i) => i.parentName === value
  );
  filteredProducts.forEach((element) => {
    ProductObjects[`${element.productName}Versions`]?.forEach((i) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      const input = document.createElement("input");
      label.htmlFor = i.version || i["Name "];
      label.innerText = i.version || i["Name "];
      input.type = "checkbox";
      input.onclick = ({ target: { checked, value } }) => {
        if (!checked) {
          selectedProducts = selectedProducts.filter((elem) => elem !== value);
          return;
        }
        selectedProducts = [...selectedProducts, value];
      };
      input.value = i.version || i["Name "];
      input.id = i.version || i["Name "];
      li.append(input, label);
      ProductVersionUl.append(li);
    });
  });
};
SubmitButton.onclick = async (e) => {
  console.log(customerArr);
  if (
    !(solutionOptgroup.parentElement || majorInput || minorInput || patchInput)
      .value ||
    !selectedProducts.length ||
    !customerArr.length
  ) {
    alert("please fill all the fields");
    return;
  }
  const solutionVersion = `${solutionOptgroup.parentElement.value}.${majorInput.value}.${minorInput.value}.${patchInput.value}`;
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
  <p>Your Targeted Solution is ${solutionOptgroup.parentElement.value}</p>
  <br/>
  <p>Your Solution Version ${solutionVersion}</p>
  <br/>
  <p>Your Released Customers are ${customerArr.join(", ")}</p>
  <br/>
  <p>Your Selected Product Versions are ${selectedProducts.join(", ")}</p>
  <br/>
  ` + confirmationDialog.innerHTML;
  const cancelBtn = document.querySelector(
    "dialog#confirmationDialog button#cancelBtn"
  );
  const confirmationBtn = document.querySelector(
    "dialog#confirmationDialog button#confirmBtn"
  );
  cancelBtn.onclick = () => confirmationDialog.close();
  confirmationBtn.onclick = () => {
    confirmationDialog.close();
    UploadData(solutionVersion, DateFormat);
  };
  confirmationDialog.showModal();
};
async function UploadData(solutionVersion, DateFormat) {
  const payloadObj = {
    TableName: solutionOptgroup.parentElement.value,
    Item: {
      release_date: DateFormat,
      lastUpdate: DateFormat,
      Release_Customer: customerArr.join(", "),
      products: selectedProducts.join(", "),
      version: solutionVersion,
      numOfItems: selectedProducts.length,
      dqaReport: null,
      status: "All product not stored or released",
    },
  };
  let isThereIsADqaReport = false;
  if (dqaReportInput.files.length) {
    console.log(dqaReportInput.files);
    const dqaReport = dqaReportInput.files[0];
    isThereIsADqaReport = true;
    s3.upload(
      {
        Bucket: "ormsolution",
        Body: dqaReport,
        Key: dqaReport.name,
      },
      (err, data) => {
        if (err) {
          console.log(err);
          isThereIsADqaReport = false;
          return;
        }
        const { Location } = data;
        payloadObj.Item.dqaReport = {
          Link: Location,
          Name: dqaReport.name,
        };
      }
    );
  }
  const interval = setInterval(async () => {
    if (isThereIsADqaReport && !payloadObj.Item.dqaReport) return;
    clearInterval(interval);
    const UploadData = await (
      await fetch(
        "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/createSolutionVersion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payloadObj),
        }
      )
    ).json();
    if (UploadData.success) {
      alert("data was sent successfully");
      return;
    }
    alert("data was not sent success fully");
  }, 500);
}
