import { createTableData, fetchData } from "./index.js";
const tableBody = document.querySelector("#geeks");
async function placeitems() {
  const {
    orn: { Items },
    ornData: { Items: productItems },
  } = await fetchData("orans");
  let Idnumber = 456;
  for (let j = 0; j < Items.length; j++) {
    const tablerow = document.createElement("tr");
    tablerow.title = "Click to expand/collapse";
    tablerow.classList.add("parent");
    const id = !j ? `row${Idnumber}` : `row${(Idnumber += 333)}`;
    tablerow.id = id;
    tablerow.style.cursor = "pointer";
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
    LastUpdate.innerText = Items[j].LastUpdate;
    const Status = document.createElement("td");
    Status.innerText = Items[j].Status;
    const ReleaseDate = document.createElement("td");
    ReleaseDate.innerText = Items[j]["Release Date"];
    const NumOfItems = document.createElement("td");
    NumOfItems.innerText = Items[j]["Number of items"];
    const testenv = document.createElement("td");
    testenv.innerText = Items[j]["Test Env"];
    const ReleaseNote = document.createElement("td");
    ReleaseNote.innerText = Items[j]["Release Note"];
    tablerow.append(version, LastUpdate, Status, ReleaseDate, NumOfItems, testenv, ReleaseNote);
    const childTableRow1 = document.createElement("tr");
    childTableRow1.classList.add(`child-${id}`);
    childTableRow1.style.display = "none";
    const childTableRow1Data = [
      "Products Name	",
      "Vendor",
      "Last Update",
      "Label",
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
      childTableRow2.style.display = "none";
      childTableRow2.append(
        createTableData(i.ProductName),
        createTableData(i.vendor),
        createTableData(i.LastUpdate),
        createTableData(i.Label),
        createTableData(i.Description)
      );
      tableBody.append(childTableRow2);
    });
  }

  $(document).ready(function () {
    console.log($("tr.parent"));
    $("tr.parent")
      .css("cursor", "pointer")
      .attr("title", "Click to expand/collapse")
      .click(function () {
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
placeitems();
