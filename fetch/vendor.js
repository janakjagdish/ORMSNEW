import fetchData from "./fetchDataFunction.js";
window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("LoggedIn")) {
    window.location.href = `${window.location.origin}/login.html`;
  }
});
(async () => {
  const tbody = document.querySelector("tbody.geeks");
  const { Items: Vendors } = await fetchData("vendor");
  Vendors?.map(({ VendorName,VendorAbbrName }, ind) => {
    tbody.innerHTML =
      tbody.innerHTML + `<tr> <td>Vendor ${ind + 1}  </td> <td> ${VendorName}  </td> <td> ${VendorAbbrName} </td> </tr>`;
  });
})();
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.onclick = () => localStorage.removeItem("LoggedIn");
