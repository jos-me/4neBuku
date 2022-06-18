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

let accordion = document.querySelector("#contact__accordion");
let accordionInfo = document.querySelector("#contact__accordion-info");
let chevron = document.querySelector(".fa-chevron-down");

accordion.addEventListener("click", displayContacts);

function displayContacts() {
  accordionInfo.classList.toggle("d-none");
  chevron.classList.toggle("rotate");
}
