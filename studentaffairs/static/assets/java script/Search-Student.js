

function alert_empty() {
  alert("Please enter a name")
}
function validation() {
  var nameinput = document.querySelector("#name-entered").value;
  if (nameinput == "") {
    alert_empty()
  }
}

var el = document.getElementById("name-entered");
    el.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });





