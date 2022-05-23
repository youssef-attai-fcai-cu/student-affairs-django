let validKeyCodes = [8, 9, 37, 38, 39, 40, 46];

let addBtn = document.getElementById("add-btn");

let addStudent = document.getElementById("add_student_form");

let inputFields = document.querySelectorAll(`input`);

let phoneFields = document.querySelectorAll(`input[type='tel']`);

let selectFields = document.querySelectorAll(`select`);

let dateFields = document.querySelectorAll(`input[type="date"]`);

let gpaInput = document.querySelector(`input[name="gpa"]`);

let phoneInput = document.getElementById("phone");

let emailText = document.getElementById("email");

function successfulAdd(e) {
  if (validateFields()) {
    if (confirm("Are you sure you want to add this student?")) {
      if (ValidateEmail(emailText)) {
        addStudent.submit();
      } else {
        e.preventDefault();
      }
    } else {
      e.preventDefault();
    }
  }
}

function ValidateEmail(inputText) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

function validateFields() {
  if (!checkEmptyFields()) {
    alert("Please fill out the required forms");
    return false;
  }
  if (!checkGpa(gpaInput)) {
    alert("GPA values between 0 and 4 only");
    return false;
  }
  if (phoneInput.value.length < 11 || phoneInput.value.length > 11) {
    alert("Phone number can only have 11 characters");
    return false;
  }

  return true;
}

function checkEmptyFields() {
  for (i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value == "") {
      return false;
    }
  }
  for (i = 0; i < selectFields.length; i++) {
    if (selectFields[i].value == "Empty") {
      return false;
    }
  }

  if (dateFields.value == "mm/dd/yyyy") {
    return false;
  }
  return true;
}

function checkGpa(gpaInput) {
  if (gpaInput.value < 0 || gpaInput.value > 4) {
    return false;
  }
  return true;
}

function phoneNumKey(evt) {
  var ASCIICode = evt.which;
  for (let i = 0; i < validKeyCodes.length; i++) {
    if (ASCIICode == validKeyCodes[i]) {
      return;
    }
  }
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    // if (ASCIICode == 189) {
    //   return;
    // } else if (ASCIICode >= 96 && ASCIICode <= 105) {
    //   return;
    // }
    if (ASCIICode >= 96 && ASCIICode <= 105) {
      return;
    }
    evt.preventDefault();
  }
}

//force number input but make an exception for "."

function gpaNumbers(evt) {
  let ASCIICode = evt.which;
  for (let i = 0; i < validKeyCodes.length; i++) {
    if (ASCIICode == validKeyCodes[i]) {
      return;
    }
  }
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 52)) {
    if (ASCIICode == 190) {
      return;
    } else if (ASCIICode >= 96 && ASCIICode <= 105) {
      return;
    }
    evt.preventDefault();
  }
}

//force letter only input

let inputName = document.querySelector(`input[name="name"]`);

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

inputName.addEventListener("keydown", onlyLetterKey); // force letter input for name

gpaInput.addEventListener("keydown", gpaNumbers); // force number input for gpa

phoneInput.addEventListener("keydown", phoneNumKey); // force number input for phone field

addBtn.addEventListener("click", successfulAdd); // validate fields, send data to server

let selectLevel = document.getElementById("level");
let selectDepartment = document.getElementById("department");
let departmentSelectOptions = document.querySelectorAll(`#department option`);

//change display of departments depending on selected level
selectLevel.addEventListener("change", function (ev) {
  let value = selectLevel.value;
  selectDepartment.value = "Empty";
  if (value === "lvl1" || value === "lvl2") {
    departmentSelectOptions.forEach(function (option) {
      if (option.value !== "General" && option.value !== "Empty") {
        option.style.display = "none";
      }
    });
  } else {
    departmentSelectOptions.forEach(function (option) {
      option.style.display = "inline";
    });
  }
});
