

function alert_empty() {
  alert("Please enter a name")
}
function validation() {
  var nameinput = document.querySelector("#name-entered").value;
  console.log(nameinput);
  if (nameinput == "") {
    alert_empty()
  }
}


