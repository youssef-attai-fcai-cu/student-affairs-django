let addbutton = document.querySelector(".add-btn");

let inputFields = document.querySelectorAll(`input`);

let selectFields = document.querySelectorAll(`select`);

let dateFields = document.querySelectorAll(`input[type="date"]`);

let gpaInput = document.querySelector(`input[name="gpa"]`);

let phoneInput = document.getElementById("phone");

function validateFields() {
  if (!checkEmptyFields()) {
    return false;
  }
  if (!checkGpa(gpaInput)) {
    return false;
  }

  return true;
}

function checkEmptyFields() {
  for (i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value == "") {
      alert("Please fill out the required forms");
      return false;
    }
  }
  for (i = 0; i < selectFields.length; i++) {
    if (selectFields[i].value == "Empty") {
      alert("Please fill out the required forms");
      return false;
    }
  }
  if (dateFields.value == "mm/dd/yyyy") {
    alert("Please fill out the required forms");
    return false;
  }
  return true;
}

function checkGpa(gpaInput) {
  console.log(gpaInput.value);
  if (gpaInput.value < 0 || gpaInput.value > 4) {
    alert("GPA values between 0 and 4 only");
    return false;
  }
}
function onlyNumberKey(evt) {
  var ASCIICode = evt.which;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    if (ASCIICode == 189) {
      return;
    }
    console.log(evt);
    evt.preventDefault();
  }
}
function gpaNumbers(evt) {
  var ASCIICode = evt.which;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 52)) {
    if (ASCIICode == 190) {
      return;
    }
    console.log(evt);
    evt.preventDefault();
  }
}

gpaInput.addEventListener("keydown", gpaNumbers);
phoneInput.addEventListener("keydown", onlyNumberKey);
addbutton.addEventListener("click", validateFields);
