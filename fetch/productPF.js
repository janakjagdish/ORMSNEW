import { createTableData, fetchData } from "./index.js";
const tableBody = document.querySelector("#geeks");
async function placeitems() {
  const {
    pfpkg: { Items },
    pData: { Items: productItems },
  } = await fetchData("package");
  const {
    S3TableData: { Items: necItems },
  } = await fetchData("s3Bucket", {
    method: "GET",
    headers: {
      id: "nec124",
    },
  });
  const {
    S3TableData: { Items: alioItems },
  } = await fetchData("s3Bucket", {
    method: "GET",
    headers: {
      id: "aliostar124",
    },
  });
  const {
    S3TableData: { Items: rakutenItems },
  } = await fetchData("s3Bucket", {
    method: "GET",
    headers: {
      id: "rakuten124",
    },
  });
  console.log(necItems);
  console.log(alioItems);
  console.log(rakutenItems);
  let Idnumber = 123;
  for (let j = 0; j < Items.length; j++) {
    const id = !j ? `row${Idnumber}` : `row${(Idnumber += 333)}`;
    const tablerow = document.createElement("tr");
    tablerow.classList.add("parent");
    tablerow.title = "Click to expand/collapse";
    tablerow.classList.add("parent");
    tablerow.id = id;
    tablerow.style.cursor = "pointer";
    tablerow.onclick = () => {
      const siblings = document.querySelectorAll(`#geeks tr.child-${id}`);
      tablerow.classList.toggle("rotate");
      siblings.forEach((i) => i.classList.toggle("none"));
    };
    const version = document.createElement("td");
    const button = document.createElement("button");
    const iTag = document.createElement("i");
    iTag.classList.add("fa");
    iTag.classList.add("fa-angle-down");
    button.append(iTag);
    version.append(button);
    version.append(Items[j]['Name ']);
    const LastUpdate = document.createElement("td");
    const vendor = document.createElement("td");
    vendor.innerText = Items[j].Vendor;
    LastUpdate.innerText = Items[j]["LastUpdate"];
    const Status = document.createElement("td");
    Status.innerText = Items[j].Status;
    const ReleaseDate = document.createElement("td");
    ReleaseDate.innerText = Items[j]["Released Date"];
    const NumOfItems = document.createElement("td");
    NumOfItems.innerText = Items[j]["N0. of Items"];
    const ReleaseNote = document.createElement("td");
    ReleaseNote.innerText = Items[j]["ReleaseNote"];
    tablerow.append(
      version,
      LastUpdate,
      Status,
      ReleaseDate,
      NumOfItems,
      ReleaseNote
    );
    const FilteredVendor = Items[j].Vendor.replace(/\s.+/, "");
    console.log(FilteredVendor);
    const childHeadRow = document.createElement("tr");
    childHeadRow.classList.add(`child-${id}`);
    childHeadRow.classList.add("none");
    const HeadChildRowData = ["Type	", "version", "med5sum", "Download"];
    HeadChildRowData.map((i) => {
      const tableHead = document.createElement("th");
      tableHead.innerText = i;
      childHeadRow.append(tableHead);
    });
    tableBody.append(tablerow, childHeadRow);
    const VendorArr = [
      ...(FilteredVendor === "NEC"
        ? necItems
        : FilteredVendor === "Rakuten"
        ? rakutenItems
        : FilteredVendor === "Aliostar"
        ? alioItems
        : []),
    ].filter((i) => i.Name === Items[j].Name);
    VendorArr.map((i) => {
      const ChildTableRow = document.createElement("tr");
      ChildTableRow.classList.add(`child-${id}`);
      ChildTableRow.classList.add("none");
      ChildTableRow.append(
        createTableData(i.type),
        createTableData(i.version),
        createTableData(i.md5sum),
        createTableData(`<a href="${i.Download}">Download</a>`)
      );
      tableBody.append(ChildTableRow);
    });
  }
}
placeitems();
/* productItems.map((i) => {
  const childTableRow2 = document.createElement("tr");
  childTableRow2.classList.add(`child-${id}`);
  childTableRow2.classList.add("none");
  childTableRow2.append(
    createTableData(i.type),
    createTableData(i.version),
    createTableData(i.md5sum),
    createTableData(i.description)
  );
  tableBody.append(childTableRow2);
}); */
