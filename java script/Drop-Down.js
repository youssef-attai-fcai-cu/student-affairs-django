const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;

    //put the actual value (cs,it,etc) inside "selected"
    selected.setAttribute("value", o.querySelector("input").value);
    console.log(o.querySelector("input").value); // for kareem's eyes only
    optionsContainer.classList.remove("active");
  });
});
