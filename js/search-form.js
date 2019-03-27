var link = document.querySelector(".btn");
var foundForm = document.querySelector(".found-form");
var dateComing = foundForm.querySelector("#date-coming");
var form = document.querySelector("form");
var dateDeparture = foundForm.querySelector("#date-departure");
var children = foundForm.querySelector("#found-child");
var adults = foundForm.querySelector("#found-adults");

link.addEventListener("click", function(event){
  event.preventDefault();
  if (foundForm.classList.contains("form-visible")) {
    foundForm.classList.add("form-invisible");
    foundForm.classList.remove("form-visible");
    foundForm.classList.remove("form-error");
  } else {
    foundForm.classList.add("form-visible");
    foundForm.classList.remove("form-invisible");
  };
  dateComing.focus();
});

form.addEventListener("submit", function(event) {
  if (!dateComing.value || !dateDeparture.value || !children.value || !adults.value) {
    event.preventDefault();
    foundForm.classList.remove("form-error");
    foundForm.offsetWidth = foundForm.offsetWidth;
    foundForm.classList.add("form-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (foundForm.classList.contains("form-visible")) {
      foundForm.classList.remove("form-visible");
      foundForm.classList.add("form-invisible");
      foundForm.classList.remove("form-error");
    }
  }
});
