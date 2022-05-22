var checkList = document.getElementById("filter");
checkList.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList.classList.contains("visible"))
    checkList.classList.remove("visible");
  else checkList.classList.add("visible");
};

//change ID 
function change(id)
{
  var student_Id=document.getElementById(id).parentNode.parentNode.firstChild.nextSibling.innerText;
  if(document.getElementById(id).parentNode.previousSibling.previousSibling.innerText=="Active"|| document.getElementById(id).parentNode.previousSibling.previousSibling.innerText=="active" )
  { 
    document.getElementById(id).parentNode.previousSibling.previousSibling.innerText="Inactive";
    document.getElementById("selected_status").setAttribute('value','Inactive');
    document.getElementById("studentId").setAttribute('value',student_Id);
    
  }
  else
  {
    document.getElementById(id).parentNode.previousSibling.previousSibling.innerText="Active";
    document.getElementById("selected_status").setAttribute('value','Active');
    document.getElementById("studentId").setAttribute('value',student_Id);
  }

}
function showhide(obj, name) {
  var elements = document.getElementsByClassName(name);
  if (obj.checked == 0) {
    for (var i = 0; i < elements.length; i += 1) {
      elements[i].style.display = "none";
    }
  }
  if (obj.checked == 1) {
    for (var i = 0; i < elements.length; i += 1) {
      elements[i].style.display = "table-cell";
    }
  }
}

