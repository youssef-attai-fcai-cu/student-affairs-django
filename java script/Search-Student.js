const names = [];
const IDs = []
const dates = []
const rows = []

for (var i = 0, j = i + 1; i < dummyData.length; i++, j++) {
  names[i] = dummyData[i].data[1]
  IDs[i] = dummyData[i].data[0]
  dates[i] = dummyData[i].data[2]
  var row = document.createElement("tr")
  row.setAttribute("id", `row${j + 1}`)
  rows[i] = row
}



for (var i = 0; i < dummyData.length; i++) {
  var tabledata_n = document.createElement("td")
  tabledata_n.innerHTML = names[i]
  rows[i].appendChild(tabledata_n)
  var tabledata_ID = document.createElement("td")
  tabledata_ID.innerHTML = IDs[i]
  rows[i].appendChild(tabledata_ID)
  var tabledata_date = document.createElement("td")
  tabledata_date.innerHTML = dates[i]
  rows[i].appendChild(tabledata_date)
  document.querySelector("#SS-tbody").appendChild(rows[i])
}


function hide()
{
  for (var i = 0; i < dummyData.length + 1; i++) {
    document.getElementById(`row${i + 1}`).style.display = "none";
  }
}

hide()

function alert_empty() {
  alert("Please enter a name")
}
function alert_no_s() {
  alert("the student you searched about does not exist")
}

function show() {
  hide()

  var nameinput = document.querySelector("#name-entered").value;
  var found = true

  if (nameinput == "") {
    found = false
    alert_empty()
  }
  else {
    for (var i = 0, j = 2; i < names.length; i++, j++) {
      if (nameinput.toString().toLowerCase() == names[i].toString().toLowerCase()) {
        found = false
        document.getElementById("row1").style.display = "table-row";
        document.getElementById(`row${j}`).style.display = "table-row";
        document.getElementById(`row${j}`).onclick = function(){assignDepartment()};

      }
    }
  }
  if (found) {
    alert_no_s()
  }
}

function assignDepartment()
{
  window.location.href="student-department-assignment.html";
}