window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("LoggedIn")) {
    window.location.href = `${window.location.origin}/login.html`;
  }
});
const S3TableBody = document.querySelector("table > tbody#S3Body");
let id = 2;
AWS.config.update({
  region: "us-east-1",
  endpoint: "https://s3.us-east-1.amazonaws.com",
  accessKeyId: "AKIAYX72S4DQCTZ3P7IV",
  secretAccessKey: "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",
});
const PackageFileInput = document.getElementById("fileUpload");
const med5sumFileInput = document.getElementById("med5sumUpload");
const bucket = document.getElementById("ddlViewBy");
const add = document.getElementById("add");
const PackagesUl = document.querySelector("#product ul");
const NameUl = document.getElementById("nameUl");
const productsOptgroup = document.querySelector("#products optgroup");
const productVersionOptgroup = document.querySelector(
  "#productVersion optgroup"
);
const submitBtn = document.getElementById("submitBtn");
const products = {};
const productVersions = {};
(async () => {
  const {
    productData: { Items: ProductItems },
  } = await (
    await fetch(
      "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/product"
    )
  ).json();
  products.data = ProductItems;
  ProductItems.map(async ({ productName }) => {
    const { Items } = await (
      await fetch(
        `https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/productPage/${productName}`
      )
    ).json();
    if (!Items?.length) return;
    productVersions[productName] = Items;
    const option = document.createElement("option");
    option.append(productName);
    productsOptgroup.append(option);
  });
})();
const packages = [];
productsOptgroup.parentElement.onchange = ({ target: { value } }) => {
  const allOptions = document.querySelectorAll(
    "#productVersion optgroup option:not([disabled])"
  );
  allOptions.forEach((ele) => ele.remove());
  productVersions[value]?.map((i) => {
    const option = document.createElement("option");
    option.append(i.version || i["Name "]);
    productVersionOptgroup.append(option);
  });
  packages.length = 0;
  PackagesUl.childNodes.forEach((ele) => ele.remove());
  NameUl.childNodes.forEach((ele) => ele.remove());
  const SelectedProduct = products.data.filter(
    (i) => i.productName === value
  )[0];
  const packagesArr = SelectedProduct.includedPackages?.split(",");
  console.log(packagesArr);
  console.log(products);

  packagesArr.map((i) => {
    id++;
    const Li = document.createElement("li");
    Li.classList.add("package");
    const downloadLabel = document.createElement("label");
    downloadLabel.htmlFor = `download${id}`;
    downloadLabel.append("please insert the download file");
    const downloadInput = document.createElement("input");
    downloadInput.type = "file";
    downloadInput.id = `download${id}`;
    const med5sumLabel = document.createElement("label");
    med5sumLabel.htmlFor = `med5sum${id}`;
    med5sumLabel.append("please insert the med5sum file");
    const med5sumInput = document.createElement("input");
    med5sumInput.type = "file";
    med5sumInput.id = `med5sum${id}`;
    const packageNameLabel = document.createElement("label");
    packageNameLabel.htmlFor = `packageName${id}`;
    packageNameLabel.append("Insert Package Name");
    Li.append(downloadLabel, downloadInput, med5sumLabel, med5sumInput);
    const NameLi = document.createElement("li");
    NameLi.append(i);
    NameUl.append(NameLi);
    PackagesUl.append(Li);
    packages.push({
      med5sumFileLocation: "",
      med5sumFileBlob: {},
      DownloadFileLocation: "",
      DownloadFileBlob: {},
      packageName: i,
      id,
    });
  });
};
add.onclick = () => {
  id++;
  const Li = document.createElement("li");
  Li.classList.add("package");
  const downloadLabel = document.createElement("label");
  downloadLabel.htmlFor = `download${id}`;
  downloadLabel.append("please insert the download file");
  const downloadInput = document.createElement("input");
  downloadInput.type = "file";
  downloadInput.id = `download${id}`;
  const med5sumLabel = document.createElement("label");
  med5sumLabel.htmlFor = `med5sum${id}`;
  med5sumLabel.append("please insert the med5sum file");
  const med5sumInput = document.createElement("input");
  med5sumInput.type = "file";
  med5sumInput.id = `med5sum${id}`;
  const packageNameLabel = document.createElement("label");
  packageNameLabel.htmlFor = `packageName${id}`;
  packageNameLabel.append("Insert Package Name");
  const packageNameInput = document.createElement("input");
  packageNameInput.type = "text";
  packageNameInput.id = `packageName${id}`;
  packageNameInput.placeholder = "insert the package Name";
  Li.append(downloadLabel, downloadInput, med5sumLabel, med5sumInput);
  const NameLi = document.createElement("li");
  NameLi.append(packageNameLabel, packageNameInput);
  NameUl.append(NameLi);
  PackagesUl.append(Li);
  packages.push({
    med5sumFileLocation: "",
    med5sumFileBlob: {},
    DownloadFileLocation: "",
    DownloadFileBlob: {},
    packageName: "",
    id,
  });
};
async function s3upload() {
  const IsAllPackagesInputsFilledValue = IsAllPackagesInputsFilled(packages);
  if (
    !IsAllPackagesInputsFilledValue ||
    !productVersionOptgroup.parentElement.value
  ) {
    alert("please fill out all the fields");
    return;
  }
  const {
    productData: { Items: Products },
  } = await (
    await fetch(
      "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/product"
    )
  ).json();
  const selectedProduct = Products.filter(
    (index) => index.productName === productsOptgroup.parentElement.value
  );
  if (!selectedProduct.length) {
    alert("non existing product name");
    return;
  }
  const FolderName = `${selectedProduct[0].Vendor?.toLowerCase()}1234`;
  const s3 = new AWS.S3({
    apiVersion: "2012-10-17",
    endpoint: "https://s3.us-east-1.amazonaws.com",
    params: { Bucket: "productpackage" },
  });
  packages.map((index, ind) => {
    let download = "",
      med5sum = "";
    s3.upload(
      {
        Bucket: "productpackage",
        Body: index.DownloadFileBlob,
        Key: FolderName + "/" + index.DownloadFileBlob.name,
      },
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        submitBtn.setAttribute("disabled", true);
        const { Location } = data;
        download = Location;
      }
    );

    s3.upload(
      {
        Bucket: "productpackage",
        Body: index.med5sumFileBlob,
        Key: FolderName + "/" + index.med5sumFileBlob.name,
      },
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        const { Location } = data;
        med5sum = Location;
      }
    );

    const interval = setInterval(async () => {
      if (!med5sum || !download) return;
      clearInterval(interval);
      const { Items: packages } = await (
        await fetch(
          "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/Packages"
        )
      ).json();
      const selectedItem = packages?.filter(
        ({ parentProduct, productVersionName }) =>
          parentProduct === productsOptgroup.parentElement.value &&
          productVersionName === productVersionOptgroup.parentElement.value
      )?.[0];
      const payloadObj = {
        Id: packages?.length + 1,
        packageName: index.packageName,
        parentProduct: productsOptgroup.parentElement.value,
        productVersionName: productVersionOptgroup.parentElement.value,
      };
      console.log("selected Item", selectedItem);
      console.log({
        ...(typeof selectedItem === "object" && Object.keys(selectedItem).length
          ? selectedItem
          : payloadObj),
        med5sumFileName: index.med5sumFileBlob.name,
        downloadFileName: index.DownloadFileBlob.name,
        med5sum,
        download,
      });

      const data = await (
        await fetch(
          "https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/uploadPackage",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...(typeof selectedItem === "object" &&
              Object.keys(selectedItem).length
                ? selectedItem
                : payloadObj),
              med5sumFileName: index.med5sumFileBlob.name,
              downloadFileName: index.DownloadFileBlob.name,
              med5sum,
              download,
            }),
          }
        )
      ).json();
      submitBtn.removeAttribute("disabled", true);
      if (data?.Items) {
        alert(`data was sent successfully for package ${index.packageName}`);
        return;
      }
      alert("failed to send data");
    }, 1000);
  });
}
function IsAllPackagesInputsFilled(array) {
  for (let index = 0; index < array.length; index++) {
    const downloadFileInput = document.getElementById(
      `download${array[index].id}`
    );
    const med5sumFileInput = document.getElementById(
      `med5sum${array[index].id}`
    );

    if (!(downloadFileInput || med5sumFileInput).files.length) return false;
    array[index].med5sumFileBlob = med5sumFileInput.files[0];
    array[index].DownloadFileBlob = downloadFileInput.files[0];
    const packageNameInput = document.getElementById(
      `packageName${array[index].id}`
    );
    console.log(array[index]);
    if (!packageNameInput) continue;
    if (!packageNameInput.value) return false;
    array[index].packageName = packageNameInput.value;
  }
  return true;
}
