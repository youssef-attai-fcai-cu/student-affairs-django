
function isEmpty() {
    alert("Please fill out the required fields!");
}

function entered_data() {
    confirm("Are you sure you want to assign this department?");
}


assignBtn = document.getElementById("optionsForm");

assignBtn.addEventListener("submit", function (e) {
    e.preventDefault();
});

document.getElementById("assign-btn").onclick = function () {

    let nameField = document.querySelector(`#student-name`).value;

    let idField = document.querySelector(`#student-id`).value;

    // get the value of the selected department
    let selectedDept = document
        .getElementById("selected-dept")
        .getAttribute("value");

    // the if statement checks if text field is empty OR selectedDept is false (undefined or empty)
    if (nameField.length == 0 || idField.length == 0 || !selectedDept) {
        console.log(selectedDept);

        isEmpty();
    } else {
        alert(selectedDept);
        confirm("Are you sure you want to assign this department?");
        return;
    }

};
