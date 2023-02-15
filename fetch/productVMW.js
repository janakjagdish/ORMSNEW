import { createTableData, fetchData } from "./index.js";
const tableBody = document.querySelector("#geeks");
async function placeitems() {
  const {
    vmw: { Items },
    pkg: { Items: productItems },
  } = await fetchData("vmw");
  let Idnumber = 123;
  for (let j = 0; j < Items.length; j++) {
    const id = !j ? `row${Idnumber}` : `row${(Idnumber += 333)}`;
    const tablerow = document.createElement("tr");
    tablerow.title = "Click to expand/collapse";
    tablerow.classList.add("parent");
    tablerow.id = id;
    tablerow.style.cursor = "pointer";
    tablerow.onclick = () => {
      const siblings = document.querySelectorAll(`#geeks tr.child-${id}`);
      tablerow.classList.toggle('rotate')
      siblings.forEach((i) => i.classList.toggle("none"));
    };
    const version = document.createElement("td");
    const button = document.createElement("button");
    const iTag = document.createElement("i");
    iTag.classList.add("fa");
    iTag.classList.add("fa-angle-down");
    button.append(iTag);
    version.append(button);
    version.append(Items[j].Name);
    const LastUpdate = document.createElement("td");
    console.log(Items[j].LastUpdate);
    const vendor = document.createElement("td");
    vendor.innerText = Items[j].Vendor;
    LastUpdate.innerText = Items[j]["Last Update"];
    const Status = document.createElement("td");
    Status.innerText = Items[j].Status;
    const ReleaseDate = document.createElement("td");
    ReleaseDate.innerText = Items[j]["Release Date"];
    const NumOfItems = document.createElement("td");
    NumOfItems.innerText = Items[j]["Number of items"];
    const ReleaseNote = document.createElement("td");
    ReleaseNote.innerText = Items[j]["Release Note"];
    tablerow.append(version, vendor, LastUpdate, Status, ReleaseDate, NumOfItems, ReleaseNote);
    const childTableRow1 = document.createElement("tr");
    childTableRow1.classList.add(`child-${id}`);
    childTableRow1.classList.add('none')
    const childTableRow1Data = [
      "Type	",
      "Version",
      "md5sum",
      "Description",
    ];
    childTableRow1Data.map((i) => {
      const tableHead = document.createElement("th");
      tableHead.innerText = i;
      childTableRow1.append(tableHead);
    });
    tableBody.append(tablerow, childTableRow1);
    productItems.map((i) => {
      const childTableRow2 = document.createElement("tr");
      childTableRow2.classList.add(`child-${id}`);
      childTableRow2.classList.add('none')
      childTableRow2.append(
        createTableData(i.type),
        createTableData(i.version),
        createTableData(i.md5sum),
        createTableData(i.description)
      );
      tableBody.append(childTableRow2);
    });
  }
}
placeitems();
