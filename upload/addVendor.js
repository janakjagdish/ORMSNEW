window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("LoggedIn")) {
    window.location.href = `${window.location.origin}/login.html`;
  }
});
const Vendor = document.getElementById("name");
const shortNAME = document.getElementById("aname");
async function UploadVendor() {
  if (!(Vendor || shortNAME).value) {
    alert("please fill out all the input fields");
    return;
  }
  console.log("test");
  const { Items: Vendors } = await (
    await fetch(
      `https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/vendor`
    )
  ).json();
  if (Vendors?.filter(({ VendorName }) => Vendor.value === VendorName)[0]) {
    alert("alert vendor name is already existing");
    return;
  }
  try {
    const Data = await (
      await fetch(
        `https://5k5z2pk02f.execute-api.eu-west-2.amazonaws.com/staging/api/product`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            TableName: "Vendor",
            Item: {
              ID: String(Vendors?.length + 1),
              VendorName: Vendor.value,
              VendorAbbrName: shortNAME.value,
            },
          }),
        }
      )
    ).json();
    console.log("data", Data);
    alert("Data was uploaded Successfully");
  } catch {
    alert("failed to upload Data please Try Again");
  }
}
const submitBtn = document.querySelector("#submitBtn");
console.log(submitBtn);
submitBtn.onclick = UploadVendor;
