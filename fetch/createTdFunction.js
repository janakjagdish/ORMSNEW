const createTableData = (data, bool, tableKey, tableName) => {
  const td = document.createElement("td");
  td.innerHTML = data || "-";
  td.contentEditable = Boolean(bool);
  if (tableKey !== undefined && typeof tableKey == "number" && tableName) {
    td.setAttribute("data-tableKey", tableKey);
    td.setAttribute("data-name", tableName);
  }
  return td;
};

export default createTableData;
