window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("LoggedIn")) {
    window.location.href = `${window.location.origin}/login.html`;
  }
});
const Customer = document.getElementById("name");
const shortName = document.getElementById("aname");
async function Upload() {
  if (!(Customer || shortName).value) {
    alert("please fill out all the input fields");
    return;
  }
  const { Items: Customers } = await (
    await fetch(
      `https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/customers`
    )
  ).json();
  if (Customers?.filter(({ Name }) => Name === Customer.value)[0]) {
    alert("this customer name is already there");
    return;
  }
  try {
    const Data = await (
      await fetch(
        `https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/product`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            TableName: "Customer",
            Item: {
              Id: String(Customers?.length + 1),
              Name: Customer.value,
              AbbrName: shortName.value,
            },
          }),
        }
      )
    ).json();
    console.log("data", Data);
    alert("updated Data Successfully");
  } catch {
    alert("failed to update Data please Try Again");
  }
}
const SubmitBtn = document.getElementById("SubmitBtn");
console.log(SubmitBtn);
SubmitBtn.onclick = Upload;
