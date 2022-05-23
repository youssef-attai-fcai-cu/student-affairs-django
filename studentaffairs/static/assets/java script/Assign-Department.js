let validKeyCodes = [8, 9, 37, 38, 39, 40, 46];

assignBtn = document.getElementById("optionsForm");

// assignBtn.addEventListener("submit", function (e) {
//   e.preventDefault();
// });

document.getElementById("assign-btn").onclick = function (e) {
  let nameField = document.querySelector(`#student-name`).value;

  let idField = document.querySelector(`#student-id`).value;

  // get the value of the selected department
  let selectedDept = document
    .getElementById("selected-dept")
    .getAttribute("value");

  // the if statement checks if text field is empty OR selectedDept is false (undefined or empty)
  if (nameField.length == 0 || idField.length == 0 || !selectedDept) {
    alert("Please fill out the required fields!");
    e.preventDefault(); //prevent refresh
  } else {
    if (confirm("Are you sure you want to assign this department?")) {
      assignBtn.submit();
    } else {
      e.preventDefault();
    }
    return;
  }
};

let idEntered = document.querySelector(`input[id="student-id"]`);

// special input for id (only numbers)
function onlyNumberKey(evt) {
  var ASCIICode = evt.which;
  for (let i = 0; i < validKeyCodes.length; i++) {
    if (ASCIICode == validKeyCodes[i]) {
      return;
    }
  }
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    if (ASCIICode >= 96 && ASCIICode <= 105) {
      return;
    }
    evt.preventDefault();
  }
}

idEntered.addEventListener("keydown", onlyNumberKey);

let nameEntered = document.querySelector(`input[id="student-name"]`);

// special input for letters
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

nameEntered.addEventListener("keydown", onlyLetterKey);
