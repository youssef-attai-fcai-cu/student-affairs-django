
var nameinput = document.querySelector(".search-btn").value;

function alert_empty() {
  alert("Please enter a name")
}
function alert_no_s() {
  alert("the student you searched about does not exist")
}

function validation() {
  if (nameinput == "") {
    alert_empty()
  }
}