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
