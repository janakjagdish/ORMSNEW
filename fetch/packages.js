import { createTableData, fetchData } from "./index.js";
const tableBody = document.querySelector("#geeks");
async function placeitems() {
  const {
    Oran: { Items },
    productData: { Items: productItems },
  } = await fetchData("product");
  let Idnumber = 123;
  for (let j = 0; j < Items.length; j++) {
    const id = !j ? `row${Idnumber}` : `row${(Idnumber += 333)}`;
    const tablerow = document.createElement("tr");
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
    const link = document.createElement("a");
    link.href = "solution_oran_version.html";
    link.innerText = Items[j].Version;
    const iTag = document.createElement("i");
    iTag.classList.add("fa");
    iTag.classList.add("fa-angle-down");
    button.append(iTag);
    version.append(button);
    version.append(link);
    version.setAttribute("data-tableKey", j);
    version.setAttribute("data-name", "Version");
    // version.append(Items[j]["Version"]);
    const LastUpdate = document.createElement("td");
    LastUpdate.innerText = Items[j].LastUpdate;
    LastUpdate.setAttribute("data-tableKey", j);
    LastUpdate.setAttribute("data-name", "LastUpdate");
    const Status = document.createElement("td");
    const Option = document.createElement("select");
    Option.classList.add("statusDropdown");
    Option.style.width = "fit-content";
    Option.innerHTML = `<optgroup>
    <option value="${Items[j].Status}"selected style="font-size: 14px">
    ${Items[j].Status}
            </option>
            ${
              Items[j].Status === "All product not stored or released      " ||
              '<option value="All product not stored or released      ">All product not stored or released</option>'
            }
            ${
              Items[j].Status === "Solution DQA is not started" ||
              '<option value="Solution DQA is not started">Solution DQA is not started</option>'
            }
            ${
              Items[j].Status === "Solution DQA is in progress" ||
              '<option value="Solution DQA is in progress">Solution DQA is in progress</option>'
            }
            ${
              Items[j].Status === "Solution DQA is completed" ||
              '<option value="Solution DQA is completed">Solution DQA is completed</option>'
            }
            ${
              Items[j].Status === "Wait for DQA Approve" ||
              '<option value="Wait for DQA Approve">Wait for DQA Approve</option>'
            }
            ${
              Items[j].Status === "Released" ||
              '<option value="Released">Released</option>'
            }
    </optgroup>`;
    Status.classList.add("status");
    Status.append(Option);
    console.log();
    Status.setAttribute("data-tableKey", j);
    Status.setAttribute("data-key", Option.value);
    Status.setAttribute("data-name", "Status");
    const ReleaseDate = document.createElement("td");
    ReleaseDate.innerText = Items[j]["Release Date"];
    ReleaseDate.setAttribute("data-tableKey", j);
    ReleaseDate.setAttribute("data-name", "Release Date");
    const testenv = document.createElement("td");
    testenv.innerText = Items[j]["Test Env"];
    testenv.setAttribute("data-tableKey", j);
    testenv.setAttribute("data-name", "Test Env");
    const ReleaseNote = document.createElement("td");
    ReleaseNote.innerText = Items[j]["Release Note"];
    const NumOfItems = document.createElement("td");
    NumOfItems.innerText = Items[j]["Number of items"];
    NumOfItems.setAttribute("data-tableKey", j);
    NumOfItems.setAttribute("data-name", "Number of items");
    tablerow.append(
      version,
      LastUpdate,
      Status,
      ReleaseDate,
      NumOfItems,
      testenv,
      ReleaseNote
    );
    const HeadTableRow = document.createElement("tr");
    HeadTableRow.classList.add(`child-${id}`);
    HeadTableRow.classList.add("none");
    const HeadTableRowData = [
      "Products Name	",
      "Vendor",
      "Last Update",
      "Label",
      "Description",
    ];
    HeadTableRowData.map((i) => {
      const tableHead = document.createElement("th");
      tableHead.innerText = i;
      HeadTableRow.append(tableHead);
    });
    tableBody.append(tablerow, HeadTableRow);
    for (let i = 0; i < productItems.length; i++) {
      const index = productItems[i];
      if (index.ParentName !== Items[j].Version) continue;
      const childTableRow = document.createElement("tr");
      childTableRow.classList.add(`child-${id}`);
      childTableRow.classList.toggle(`none`);
      childTableRow.append(
        createTableData(index.ProductName, true, i, "ProductName"),
        createTableData(index.Vendor, true, i, "Vendor"),
        createTableData(index.LastUpdate, true, i, "LastUpdate"),
        createTableData(index.Label, true, i, "Label"),
        createTableData(index.Description, true, i, "Description")
      );
      tableBody.append(childTableRow);
    }
  }
  const AllTdElements = document.querySelectorAll(
    "td:not([data-name='Version'])"
  );
  console.log(AllTdElements);
  AllTdElements.forEach((i) => {
    i.contentEditable = true;
    i.setAttribute("data-key", i?.firstChild?.value || i.textContent);
  });
  const updatebtn = document.querySelector("button.btn:last-of-type");
  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: {},
  };
  const ProductTableArr = [...productItems];
  const OranTableArr = [...Items];
  const forEachCallback = (i) => {
    if ((i?.firstChild?.value || i.textContent) === i.getAttribute("data-key"))
      return;
    const table = i.parentElement.classList.contains("parent")
      ? OranTableArr
      : ProductTableArr;
    table[Number(i.getAttribute("data-tableKey"))][
      i.getAttribute("data-name")
    ] = i?.firstChild?.value || i.textContent;
    params.body = JSON.stringify({
      TableName: i.parentElement.classList.contains("parent")
        ? "ORAN1"
        : "Products1",
      Item: table[Number(i.getAttribute("data-tableKey"))],
    });
    fetch(
      "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/product/",
      params
    ).then(async (res) => {
      const {
        Oran: { Items },
        productData: { Items: productItems },
      } = await res.json();
      params.body = {};
      i.setAttribute(
        "data-key",
        (i.parentElement.classList.contains("parent") ? Items : productItems)[
          Number(i.getAttribute("data-tableKey"))
        ][i.getAttribute("data-name")]
      );
    });
  };
  updatebtn.onclick = () => AllTdElements.forEach(forEachCallback);
}
placeitems();
