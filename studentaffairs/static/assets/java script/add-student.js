// let generalBtn = document.querySelector(".btn-add");
let addBtn = document.getElementById("add-btn");
// let updateBtn = document.getElementById("update-btn");
// let deleteBtn = document.getElementById("delete-btn");

let inputFields = document.querySelectorAll(`input`);

let selectFields = document.querySelectorAll(`select`);

let dateFields = document.querySelectorAll(`input[type="date"]`);

let gpaInput = document.querySelector(`input[name="gpa"]`);

let phoneInput = document.getElementById("phone");

function successfulAdd() {
  if (validateFields()) {
    console.log("added");
  }
}

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
  return true;
}
function onlyNumberKey(evt) {
  var ASCIICode = evt.which;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    if (ASCIICode == 189) {
      return;
    }
    evt.preventDefault();
  }
}
function gpaNumbers(evt) {
  let ASCIICode = evt.which;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 52)) {
    if (ASCIICode == 190) {
      return;
    }
    evt.preventDefault();
  }
}

gpaInput.addEventListener("keydown", gpaNumbers);
phoneInput.addEventListener("keydown", onlyNumberKey);
// generalBtn.addEventListener("click", validateFields);
addBtn.addEventListener("click", successfulAdd);

let selectLevel = document.getElementById("level");
let selectDepartment = document.getElementById("department");
let departmentSelectOptions = document.querySelectorAll(`#department option`);

selectLevel.addEventListener("change", function (ev) {
  let value = selectLevel.value;
  selectDepartment.value = "Empty";
  if (value === "lvl1" || value === "lvl2") {
    departmentSelectOptions.forEach(function (option) {
      if (option.value !== "Gen" && option.value !== "Empty") {
        option.style.display = "none";
      }
    });
  } else {
    departmentSelectOptions.forEach(function (option) {
      option.style.display = "inline";
    });
  }
});

let inputName = document.querySelector(`input[name="name"]`);

function onlyLetterKey(evt) {
  let ASCIICode = evt.which;
  if ((ASCIICode >= 33 && ASCIICode <= 57) || ASCIICode == 192) {
    evt.preventDefault();
  }
}

inputName.addEventListener("keydown", onlyLetterKey);
