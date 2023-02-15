import fetchData from "../fetch/fetchDataFunction.js";
const Vendor = document.getElementById("vendor");
const ParentName = document.getElementById("SolutionName");
const SolutionType = document.getElementById("Solution");
const ProductName = document.getElementById("pname");
const Description = document.getElementById("Description");
const ReleaseDate = document.getElementById("releaseDate");
const Label = document.getElementById("LabelInput");
async function Upload() {
  if (
    !(
      Vendor ||
      ParentName ||
      SolutionType ||
      ProductName ||
      Description ||
      ReleaseDate
    ).value
  ) {
    alert("please fill out all the input fields");
    return;
  }
  console.log("test");
  try {
    const Data = await fetchData(
      SolutionType === "ORAN" ? "product" : "version",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          TableName: "Products1",
          Item: {
            ParentName: ParentName.value,
            ProductName: ProductName.value,
            Vendor: Vendor.value,
            LastUpdate: ReleaseDate.value,
            Label: Label.value,
            Description: Description.value,
          },
        }),
      }
    );
    console.log("data", Data);
    alert("updated Data Successfully");
  } catch {
    alert("failed to update Data please Try Again");
  }
}
const SubmitBtn = document.querySelector("#four");
SubmitBtn.onclick = Upload;
