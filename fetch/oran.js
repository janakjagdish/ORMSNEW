import { createTableData, fetchData } from "./index.js";
const tabelBody = document.querySelector("#geeks");

async function placeitems() {
  let {
    solutions: { Items },
  } = await fetchData("oran");
  //Items = Items.filter((i) => Boolean(i.Label.match("ORAN")));
  for (let index = 0; index < Items.length; index++) {
    const tableRow = document.createElement("tr");
    tableRow.append(
      createTableData(Items[index].name),
      createTableData(Items[index].Last_Update),
      createTableData(Items[index]["Released customers"]),
      createTableData(Items[index].Label),
      createTableData(Items[index].Description),
      createTableData(
        `<input type="checkbox" class="checkbox" data-date="${Items[index].Last_Update}"/>`
      )
    );
    tabelBody.append(tableRow);
  }
  $(document).ready(function () {
    let arr = [];
    $("tr.parent")
      .css("cursor", "pointer")
      .attr("title", "Click to expand/collapse")
      .click(function () {
        $(this)
          .siblings(".child-" + this.id)
          .toggle();
      });
    $("tr[class=child-]").hide().children("td");
    $("input.checkbox").click(function () {
      const findindex = arr.findIndex((i) => i === $(this).attr("data-date"));
      if (findindex === -1 && $(this).is(":checked")) {
        arr.push($(this).attr("data-date"));
        console.log("checked");
        console.log(arr);
      } else if (findindex != -1 && !$(this).is(":checked")) {
        arr = arr.filter((i, ind) => ind != findindex);
        console.log("removed");
        console.log(arr);
        $("dialog.modal label").remove(
          `:has(input[data-date="${$(this).attr("data-date")}"])`
        );
      } else {
        arr = arr.filter((i, ind) => ind != findindex);
        console.log("removed");
        console.log(arr);
      }
    });
    const modal = document.querySelector("dialog.modal");
    $(".view-modal").click(() => {
      console.log("viewed");
      console.log(arr);
      arr.map((i) => {
        console.log(arr);
        const isthere = document.querySelector(
          `dialog.modal label input[data-date="${i}"]`
        );
        if (!isthere) {
          const label = document.createElement("label");
          label.append(i);
          const input = document.createElement("input");
          input.type = "checkbox";
          input.classList.add("checkbox");
          input.setAttribute("data-date", i);
          input.checked = true;
          label.append(input);
          modal.append(label);
        }
      });
      $("dialog input.checkbox").click(function () {
        if (!$(this).is(":checked")) {
          arr = arr.filter((i) => i !== $(this).attr("data-date"));
          $("dialog label").remove(
            `:has(input[data-date="${$(this).attr("data-date")}"])`
          );
          $(
            `table input.checkbox[data-date="${$(this).attr("data-date")}"]`
          ).prop("checked", this.checked);
        }
      });
      modal.showModal();
    });
    $(".close-modal").click(() => {
      modal.close();
    });
  });
}
placeitems();
