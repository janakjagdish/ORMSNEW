import { fetchData, createTableData } from "./index.js";
const tableBody = document.querySelector("#detail_table tbody");
async function placingtable() {
  const {
    Oran,
    productData: { Items: productItems },
  } = await fetchData("product");
  let Idnumber = 123;
  const { Items } = Oran;
  for (let j = 0; j < Items.length; j++) {
    const tablerow = document.createElement("tr");
    tablerow.title = "Click to expand/collapse";
    tablerow.classList.add("parent");
    const id = !j ? `row${Idnumber}` : `row${(Idnumber += 333)}`;
    tablerow.id = id;
    tablerow.style.cursor = "pointer";
    const version = document.createElement("td");
    const link = document.createElement("a");
    link.href = "Product_CloudPF.html";
    link.innerText = "CloudPF_OpenShift ";
    const button = document.createElement("button");
    const iTag = document.createElement("i");
    iTag.classList.add("fa");
    iTag.classList.add("fa-angle-down");
    button.append(iTag);
    version.append(button);
    version.append(link);
    const Vendor = document.createElement("td");
    const VendorLink = document.createElement("a");
    VendorLink.innerText = Items[j].Vendor;
    VendorLink.href = "Vendor_NEC.html";
    Vendor.append(VendorLink);
    const LastUpdate = document.createElement("td");
    LastUpdate.innerText = Items[j]["Last Update"];
    const Status = document.createElement("td");
    Status.innerText = Items[j].Status;
    const ReleaseDate = document.createElement("td");
    ReleaseDate.innerText = Items[j]["Release Date"];
    const NumOfItems = document.createElement("td");
    NumOfItems.innerText = Items[j]["Number of items"];
    const ReleaseNote = document.createElement("td");
    const ReleaseNoteLink = document.createElement("a");
    ReleaseNoteLink.href = "Solution_oran.html";
    ReleaseNote.append(ReleaseNoteLink);
    ReleaseNote.innerText = `  ${Items[j]["Release Note"]}`;
    tablerow.append(
      version,
      Vendor,
      LastUpdate,
      Status,
      ReleaseDate,
      NumOfItems,
      ReleaseNote
    );
    const childTableHead = document.createElement("tr");
    childTableHead.classList.add(`child-${id}`);
    childTableHead.style.display = "none";
    const childTableHeadData = [
      "Name",
      "vendor",
      "Label",
      "Description",
      "Last Update",
    ];
    childTableHeadData.map((i) => {
      const tableHead = document.createElement("th");
      tableHead.innerText = i;
      childTableHead.append(tableHead);
    });
    tableBody.append(tablerow, childTableHead);
    productItems.map((i) => {
      const tableRow = document.createElement("tr");
      tableRow.classList.add(`child-${id}`);
      tableRow.style.display = "none";
      tableRow.append(
        createTableData(i.ProductName),
        createTableData(i.vendor),
        createTableData(i.Label),
        createTableData(i.LastUpdate),
        createTableData(i.Description)
      );
      tableBody.append(tableRow);
    });
  }
  $(document).ready(function () {
    $("tr.parent").click(function () {
      $(this)
        .siblings(".child-" + this.id)
        .toggle();
    });
    $("tr[class=child-]").hide().children("td");
  });
  $(document).ready(function () {
    $("#checkbox").change(function () {
      if (!this.checked) $("#row").fadeIn("slow");
      else $("#row").fadeOut("slow");
    });
  });
}
placingtable();
