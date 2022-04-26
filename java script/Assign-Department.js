let nameField = document.querySelector(`#student-name`).value;

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

}

/*let nameField = document.querySelector(`#student-name`).value;

let idField = document.querySelector(`#student-id`).value;

function assignFunction()
{

if (nameField.length == 0 || idField.length == 0)
{
    alert("Please input a Value");
    return false;
}
else 
{
    alert('Code has accepted : you can try another');
    return true; 
}
}*/
