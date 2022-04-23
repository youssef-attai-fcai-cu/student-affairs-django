const names = [];
for (var i = 0; i < 9; i += 3) {
  names.push(document.getElementsByTagName("td")[i].innerHTML);
}

document.getElementById("row1").style.display = "none";
document.getElementById("row2").style.display = "none";
document.getElementById("row3").style.display = "none";
document.getElementById("row4").style.display = "none";
function alert_empty()
{
  alert("Please enter a name")
}
function alert_no_s()
{
  alert("the student you searched about does not exist")
}

function show() {
  var nameinput = document.querySelector("#name-entered").value;
  switch (nameinput.toLowerCase()) {
    case names[0].toLowerCase():
      document.getElementById("row1").style.display = "table-row";
      document.getElementById("row2").style.display = "table-row";
      document.getElementById("row3").style.display = "none";
      document.getElementById("row4").style.display = "none";
      break;
    case names[1].toLowerCase():
      document.getElementById("row1").style.display = "table-row";
      document.getElementById("row3").style.display = "table-row";
      document.getElementById("row2").style.display = "none";
      document.getElementById("row4").style.display = "none";
      break;
    case names[2].toLowerCase():
      document.getElementById("row1").style.display = "table-row";
      document.getElementById("row4").style.display = "table-row";
      document.getElementById("row2").style.display = "none";
      document.getElementById("row3").style.display = "none";
      break;
    case "":
      document.getElementById("row1").style.display = "none";
      document.getElementById("row2").style.display = "none";
      document.getElementById("row3").style.display = "none";
      document.getElementById("row4").style.display = "none";
      alert_empty()
      break;
    default:
      document.getElementById("row1").style.display = "none";
      document.getElementById("row2").style.display = "none";
      document.getElementById("row3").style.display = "none";
      document.getElementById("row4").style.display = "none";
      alert_no_s()
  }
}
