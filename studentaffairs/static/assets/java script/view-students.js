var checkList = document.getElementById("filter");
checkList.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList.classList.contains("visible"))
    checkList.classList.remove("visible");
  else checkList.classList.add("visible");
};

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

