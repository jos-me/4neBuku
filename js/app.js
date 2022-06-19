// Modal form

let addBtn = document.querySelector("#addBtn");
let closeBtn = document.querySelector("#btn-close");
let modalContainer = document.querySelector(".modal-container");

addBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);

function showModal() {
  modalContainer.classList.remove("d-none");
}

function closeModal() {
  modalContainer.classList.add("d-none");
}

// Accordion

let accordions = document.querySelectorAll("#contact__accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", accordionToggler);
});

function accordionToggler(e) {
  let accordionElement = e.target.nextElementSibling;
  let accordionIcon = e.target.firstElementChild.firstElementChild;

  accordionElement.classList.toggle("d-none");
  accordionIcon.classList.toggle("rotate");
}
