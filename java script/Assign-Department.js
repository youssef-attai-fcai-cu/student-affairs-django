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
function isEmpty() {
    alert("Please fill out the required fields!");
}

function entered_data(){
    confirm("Are you sure you want to assign this department?");
}

function assignFunction()
{
    let nameField = document.querySelector(`#student-name`).value;

    let idField = document.querySelector(`#student-id`).value;

    //let falsefield = document.getElementsByClassName("selected").value;

    //let radioFields = document.querySelectorAll(`.radio`).value;

    if (nameField.length == 0 || idField.length == 0)
    {
        isEmpty();
        return false;
        /*if(falsefield == radioFields)
        {
            isEmpty();
            return false;
        }
        else {
        entered_data();
        return true; }*/
    }
    else 
    {
        entered_data();
        return true; 
    }
}
