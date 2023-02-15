import { fetchData, createTableData } from "./index.js";

const tableBody = document.querySelector("#geeks");
async function placeItems() {
  let {
    solutions: { Items },
  } = await fetchData("5gc");
  Items = Items.filter((i) =>  Boolean(i.Label.match("5G")));
  for (let index = 0; index < Items.length; index++) {
    const tableRow = document.createElement("tr");
    tableRow.append(
      createTableData(Items[index].name),
      createTableData(Items[index].Last_Update),
      createTableData(Items[index]["Released customers"]),
      createTableData(Items[index].Label),
      createTableData(Items[index].Description)
    );
    tableBody.append(tableRow);
  }
}
placeItems();
