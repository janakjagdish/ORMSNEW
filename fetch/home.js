window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("LoggedIn")) {
    window.location.href = `${window.location.origin}/login.html`;
  }
});
import { createTableData, fetchData } from "./index.js";
const logoutBtn = document.querySelector("#logoutBtn");
const SolutionTableBody = document.querySelector(".geeks");
const ProductTableBody = document.querySelector("#geeks");
logoutBtn.onclick = () => localStorage.removeItem("LoggedIn");

async function placeData() {
  const {
    solutions: { Items },
    productData: { Items: productItems },
  } = await fetchData("solution");
  console.log(productItems);
  for (let i = 0; i < Items.length; i++) {
    const tablerow = document.createElement("tr");
    tablerow.append(
      createTableData(
        `<a href="/solutions/${Items[i].name}">${Items[i].name}</a>`
      ),
      createTableData(Items[i].Last_Update),
      createTableData(Items[i]["Released_Customer"]),
      createTableData(Items[i].Label),
      createTableData(Items[i].Description)
    );
    SolutionTableBody.append(tablerow);
  }

  for (let index = 0; index < productItems.length; index++) {
    const tablerow = document.createElement("tr");
    tablerow.append(
      createTableData(
        `<a href="/products/${productItems[index].productName}">${productItems[index].productName}</a>`
      ),
      createTableData(productItems[index].Vendor),
      createTableData(productItems[index].Release_Date),
      createTableData(productItems[index].label),
      createTableData(productItems[index].Description)
    );
    ProductTableBody.append(tablerow);
  }
}
placeData();
