// Modal form

let addBtn = document.querySelector("#addBtn");
let closeBtn = document.querySelector("#btn-close");
let modalContainer = document.querySelector(".modal-container");

addBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);

function showModal(e) {
  e.preventDefault();
  modalContainer.classList.remove("d-none");
}

function closeModal() {
  modalContainer.classList.add("d-none");
}

// Accordion

let accordion = document.querySelectorAll("#contact__accordion");

accordion.forEach((element) => {
  element.addEventListener("click", () => {
    element.nextElementSibling.classList.toggle("d-none");
    element.firstElementChild.firstElementChild.classList.toggle("rotate");
  });
});

// let accordionDisplay = function (element) {
//   element.nextElementSibling.classList.toggle("d-none");
//   element.firstElementChild.firstElementChild.classList.toggle("rotate");
// };

// accordion.forEach((element) => {
//   element.addEventListener("click", accordionDisplay(element), false);
//   element.addEventListener("touchstart", accordionDisplay(element), false);
// });

let events = ["click", "touchstart"];

events.forEach((evnt) => {
  accordion.forEach((element) => {
    element.addEventListener(evnt, accordionToggler(element));
  });
});

function accordionToggler(element) {
  element.nextElementSibling.classList.toggle("d-none");
  element.firstElementChild.firstElementChild.classList.toggle("rotate");
}
