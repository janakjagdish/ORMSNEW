window.addEventListener("load", () => {
  let params = new URL(document.location).searchParams;

  const name = params.get("show_items[]");
  document.getElementById("opt_name").innerHTML = name;
});
