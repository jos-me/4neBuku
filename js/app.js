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
