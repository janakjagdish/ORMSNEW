import fetchData from "./fetchDataFunction.js";
window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("LoggedIn")) {
    window.location.href = `${window.location.origin}/login.html`;
  }
});
(async () => {
  const tbody = document.querySelector("tbody.geeks");
  const { Items: Customers } = await fetchData("customers");
  
  Customers?.map(({ Name, AbbrName }, ind) => {
    tbody.innerHTML =
      tbody.innerHTML + `<tr><td>Customer ${ind + 1} </td><td> ${Name}</td><td> ${AbbrName} </td></tr>`;
  });
})();
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.onclick = () => localStorage.removeItem("LoggedIn");
