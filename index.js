let sortDirection = false;
let personData = [
  { name: "Yoda", age: 900 },
  { name: "Han", age: 35 },
  { name: "Luke", age: 23 },
  { name: "Leia", age: 23 },
  { name: "Vader", age: 46 }
];

loadTableData(personData);

function loadTableData(personData) {
  const tableBody = document.getElementById("tableData");
  let dataHtml = "";

  for (let person of personData) {
    dataHtml += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`;
  }

  tableBody.innerHTML = dataHtml;
}

function sortColumn(columnName) {
  const dataType = typeof personData[0][columnName];
  sortDirection = !sortDirection;

  switch (dataType) {
    case "number":
      sortNumberColumn(sortDirection, columnName);
      break;
  }
  loadTableData(personData);
}

function sortNumberColumn(sort, columnName) {
  personData = personData.sort((p1, p2) => {
    return sort
      ? p1[columnName] - p2[columnName]
      : p2[columnName] - p1[columnName];
  });
}
