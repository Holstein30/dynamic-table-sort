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
  console.log(dataHtml);
}
