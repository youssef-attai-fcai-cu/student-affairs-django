let validKeyCodes = [8, 9, 37, 38, 39, 40, 46];
function alert_empty() {
  alert("Please enter a name");
}
function validation() {
  var nameinput = document.querySelector("#name-entered").value;
  if (nameinput == "") {
    alert_empty();
  }
}
function onlyLetterKey(evt) {
  let ASCIICode = evt.which;
  for (let i = 0; i < validKeyCodes.length; i++) {
    if (ASCIICode == validKeyCodes[i]) {
      return;
    }
  }
  if ((ASCIICode >= 33 && ASCIICode <= 57) || ASCIICode == 192) {
    evt.preventDefault();
  } else if (ASCIICode >= 96 && ASCIICode <= 105) {
    evt.preventDefault();
  }
}
let searchInput = document.getElementById("name-entered");
searchInput.addEventListener("keydown", onlyLetterKey);

var el = document.getElementById("name-entered");
el.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
