var checkList = document.getElementById("filter");
checkList.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList.classList.contains("visible"))
    checkList.classList.remove("visible");
  else checkList.classList.add("visible");
};
class student {
  constructor(
    ID,
    name,
    date,
    gpa,
    gender,
    level,
    departement,
    Email,
    mobile,
    status
  ) {
    this.data = [
      ID,
      name,
      date,
      gpa,
      gender,
      level,
      departement,
      Email,
      mobile,
      status,
    ];
  }
}
var dummyData=[];
dummyData[0]=new student(20200,"ahmed mohamed","10-5-2000",4,"male",1,"computer science","ahmed@","00000000",true);
dummyData[1]=new student(20200,"mohamed","10-5-2000",4,"male",1,"computer science","mohamed@","00000000",true);
dummyData[2]=new student(20200,"sherif","10-5-2000",4,"male",1,"computer science","sherif@","00000000",false);
function displayStudent(student) {
  var row = document.createElement("tr");
  for (var i = 0; i < 10; i++) {
    var data = document.createElement("td");
    data.setAttribute("class", `col${i + 1}`);
    data.innerHTML = student.data[i];
    row.appendChild(data);
    if (i == 9) {
      data.innerText = student.data[i] ? "active" : "inactive";
      var status = document.createElement("button");
      status.onclick = function () {
        data.innerText = data.innerText == "inactive" ? "active" : "inactive";
      };
      status.setAttribute("name", "change status");
      status.innerHTML = "change status";
      data.parentNode.appendChild(status);
      console.log(data.parentNode);
    }
  }
  document.getElementById("content").appendChild(row);
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
for (var i = 0; i < 3; i++) {
  displayStudent(dummyData[i]);
}
