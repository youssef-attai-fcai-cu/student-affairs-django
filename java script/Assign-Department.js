/*let nameField = document.querySelector(`#student-name`).value;

let idField = document.querySelector(`#student-id`).value;

let radioFields = document.querySelectorAll(`.radio`).value;

// let selectFields = document.querySelectorAll(`select`);

function isEmpty() {
    alert("Please fill out the required fields!");
}

function entered_data(){
    alert("Department Assigned Successfully!");
}

function assignFunction() {
    
    if(nameField == "" || idField == ""){
        isEmpty()
    }
    else {
        entered_data()
    }

}*/

// let emptyOption = document.getElementById("Empty");
// console.log(emptyOption.value);
// emptyOption.style.visibility = "hidden";
function isEmpty() {
  alert("Please fill out the required fields!");
}

function entered_data() {
  confirm("Are you sure you want to assign this department?");
}

/*function assignFunction()
{
    let nameField = document.querySelector(`#student-name`).value;

    let idField = document.querySelector(`#student-id`).value;

    let falsefield = document.getElementsByClassName("selected").value;

    let radioFields = document.querySelector(".radio").value;

    var deptData = [];
    deptData[0] = document.querySelector("#CS").value;
    deptData[1] = document.querySelector("#AI").value;
    deptData[2] = document.querySelector("#IT").value;
    deptData[3] = document.querySelector("#IS").value;
    deptData[4] = document.querySelector("#DS").value;

    let department

    for(var i = 0 ; i < deptData.length ; i++)
    {
        if(deptData[i] != "")
        {
            department = deptData[i];
        }
    }

    if (nameField.length == 0 || idField.length == 0)
    {
        isEmpty();    
    }
    else if (radioFields != "Computer Science" && radioFields != "Artificial Intelligence" && radioFields != "Information Technology" && radioFields != "Information Systems" && radioFields != "Decision Support")
    {
        isEmpty();
    }
    else{
        entered_data();
        return true; 
    }

    if(radioFields == "Computer Science")
    {
        isEmpty();
    }
    else 
    {
        entered_data();
        return true; 
    }
}*/
assignBtn = document.getElementById("optionsForm");

assignBtn.addEventListener("submit", function (e) {
  e.preventDefault();
});

document.getElementById("assign-btn").onclick = function () {
  //   var radios = document.getElementsByName("dept_choice"); no need for this anymore

  let nameField = document.querySelector(`#student-name`).value;

  let idField = document.querySelector(`#student-id`).value;
  // get the value of the selected department
  let selectedDept = document
    .getElementById("selected-dept")
    .getAttribute("value");
  // the if statement checks if text field is empty OR selectedDept is falsy (undefined or empty)
  if (nameField.length == 0 || idField.length == 0 || !selectedDept) {
    console.log(selectedDept);

    isEmpty();
  } else {
    alert(selectedDept);
    confirm("Are you sure you want to assign this department?");
    return;
  }

  /*for (var radio of radios)
        {
            if (nameField.length != 0 && idField.length != 0 && radio.checked) {
                alert("Department selected: ", radio.value);
                confirm("Are you sure you want to assign this department?");
                break;
            }
        }*/
};
