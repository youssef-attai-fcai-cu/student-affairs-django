// let generalBtn = document.querySelector(".btn-add");

let updateBtn = document.getElementById("update-btn");
let deleteBtn = document.getElementById("delete-btn");
let fetchBtn = document.getElementById("fetch-btn");

let inputFields = document.querySelectorAll(`input[type = "text"]`);

let selectFields = document.querySelectorAll(`select`);

let dateFields = document.querySelectorAll(`input[type="date"]`);
let emailFields = document.querySelectorAll(`input[type="email"]`);
let gpaInput = document.querySelector(`input[name="gpa"]`);

let phoneInput = document.getElementById("phone");

function fetchStudent(e) {
  e.preventDefault();
  let studentID = document.getElementById("studID").value;
  if (!studentID) {
    alert("Please enter a student ID to fetch");
    return false;
  }
  window.location.href = "?studID=" + studentID;
}

function successfulUpdate() {
  if (validateFields()) {
    console.log("edit success");
  }
}

function successfulDelete() {
  if (validateFields()) {
    if (confirm("Are you sure you want to delete this student?")) {
      console.log("successful deletion");
    }
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
  for (i = 0; i < emailFields.length; i++) {
    if (emailFields[i].value == "") {
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
// special input for phone number ("-" is allowed)
function phoneNumKey(evt) {
  var ASCIICode = evt.which;
  console.log(ASCIICode);
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    if (ASCIICode == 189) {
      return;
    } else if (ASCIICode >= 96 && ASCIICode <= 105) {
      return;
    }
    evt.preventDefault();
  }
}
// special input for id (only numbers)
function onlyNumberKey(evt) {
  var ASCIICode = evt.which;
  console.log(ASCIICode);
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    if (ASCIICode == 189) {
      return;
    } else if (ASCIICode >= 96 && ASCIICode <= 105) {
      return;
    }
    evt.preventDefault();
  }
}
// special input for gpa (allows ".")
function gpaNumbers(evt) {
  var ASCIICode = evt.which;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 52)) {
    if (ASCIICode == 190) {
      return;
    } else if (ASCIICode >= 96 && ASCIICode <= 105) {
      return;
    }
    evt.preventDefault();
  }
}
let inputID = document.querySelector(`input[name="studentID"]`);
gpaInput.addEventListener("keydown", gpaNumbers);
phoneInput.addEventListener("keydown", phoneNumKey);
inputID.addEventListener("keydown", onlyNumberKey);
// generalBtn.addEventListener("click", validateFields);

updateBtn.addEventListener("click", successfulUpdate);
deleteBtn.addEventListener("click", successfulDelete);
fetchBtn.addEventListener("click", fetchStudent);

// force user to only input letters
let inputName = document.querySelector(`input[name="name"]`);

function onlyLetterKey(evt) {
  let ASCIICode = evt.which;
  if ((ASCIICode >= 33 && ASCIICode <= 57) || ASCIICode == 192) {
    evt.preventDefault();
  } else if (ASCIICode >= 96 && ASCIICode <= 105) {
    evt.preventDefault();
  }
}

inputName.addEventListener("keydown", onlyLetterKey);

// let selectLevel = document.getElementById("level");
// let selectDepartment = document.getElementById("department");
// let departmentSelectOptions = document.querySelectorAll(`#department option`);

// selectLevel.addEventListener("change", function (ev) {
//   let value = selectLevel.value;
//   selectDepartment.value = "Empty";
//   if (value === "lvl1" || value === "lvl2") {
//     departmentSelectOptions.forEach(function (option) {
//       if (option.value !== "Gen" && option.value !== "Empty") {
//         option.style.display = "none";
//       }
//     });
//   } else {
//     departmentSelectOptions.forEach(function (option) {
//       option.style.display = "inline";
//     });
//   }
// });
