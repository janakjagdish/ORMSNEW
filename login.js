let form = document.querySelector("form");
const passwordInput = document.querySelector("input#Password");
const userNameInput = document.querySelector("input#Username");
console.log(form, passwordInput, userNameInput);
form.onsubmit = async (e) => {
  e.preventDefault();
  const LoginReq = await (
    await fetch(
      `https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userNameInput.value,
          password: passwordInput.value,
        }),
      }
    )
  ).json();
  if (!LoginReq.success) {
    alert(LoginReq.error);
    return;
  }
  localStorage.setItem("LoggedIn", true);
  alert("logged in successfully");
  window.location.href = `${location.origin}/Home.html`;
};
