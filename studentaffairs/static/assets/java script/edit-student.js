let validKeyCodes = [8, 9, 37, 38, 39, 40, 46];

let updateBtn = document.getElementById("update-btn");

let deleteBtn = document.getElementById("delete-btn");

let fetchBtn = document.getElementById("fetch-btn");

let editStudent = document.getElementById("edit_student_form");

let inputFields = document.querySelectorAll(`input[type = "text"]`);

let phoneFields = document.querySelectorAll(`input[type='tel']`);

let selectFields = document.querySelectorAll(`select`);

let dateFields = document.querySelectorAll(`input[type="date"]`);

let emailFields = document.querySelectorAll(`input[type="email"]`);

let gpaInput = document.querySelector(`input[name="gpa"]`);

let phoneInput = document.getElementById("phone");

let inputID = document.querySelector(`input[name="studentID"]`);

let inputName = document.querySelector(`input[name="name"]`);

let checkID = document.querySelectorAll(`input[name="studentID"]`);

function fetchStudent(e) {
  e.preventDefault();
  let studentID = document.getElementById("studID").value;
  if (!studentID) {
    alert("Please enter a student ID to fetch");
    return false;
  }
  window.location.href = "?studID=" + studentID;
}

function successfulUpdate(e) {
  document.getElementById("actionType").setAttribute("value", "update");
  if (validateFields()) {
    if (confirm("Confirm changes?")) {
      editStudent.submit();
    } else {
      e.preventDefault();
      // alert("Request cancelled");
    }
  }
}

function successfulDelete(e) {
  document.getElementById("actionType").setAttribute("value", "delete");
  if (validateID()) {
    if (
      confirm(
        "Are you sure you want to delete this student? \nThis action cannot be undone"
      )
    ) {
      editStudent.submit();
    } else {
      e.preventDefault();
      // alert("Request cancelled");
    }
  }
}

function validateID() {
  console.log(checkID.length);
  for (i = 0; i < checkID.length; i++) {
    if (checkID[i].value == "") {
      alert("Please fill out the ID form to delete a student");
      return false;
    }
  }
  return true;
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
  for (i = 0; i < emailFields.length; i++) {
    if (emailFields[i].value == "") {
      alert("Please fill out the required forms");
      return false;
    }
  }
  for (i = 0; i < phoneFields.length; i++) {
    if (phoneFields[i].value == "") {
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
// special input for phone number
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
// special input for gpa (allows ".")
function gpaNumbers(evt) {
  var ASCIICode = evt.which;
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

// force user to only input letters

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

inputName.addEventListener("keydown", onlyLetterKey); // force letter input only

gpaInput.addEventListener("keydown", gpaNumbers); // force number input for gpa

phoneInput.addEventListener("keydown", phoneNumKey); // force number input for phone

inputID.addEventListener("keydown", onlyNumberKey); // force number input for ID

updateBtn.addEventListener("click", successfulUpdate); // validate fields after clicking Update

deleteBtn.addEventListener("click", successfulDelete); // validate fields after clicking Delete

fetchBtn.addEventListener("click", fetchStudent); // display student info after clicking Fetch
