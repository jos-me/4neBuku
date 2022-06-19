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

let accordionsHeader = document.querySelectorAll("#accordion-header");
let accordionsBody = document.querySelectorAll("#accordion-body");

accordionsHeader.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (e) => {
    accordionsBody.forEach((accordionBody) => {
      if (
        e.target.nextElementSibling !== accordionBody &&
        accordionBody.classList.contains("d-none")
      ) {
        //TODO: Fix to make only one accordion item to open
        accordionBody.classList.remove("d-none");
      }
    });

    accordionHeader.firstElementChild.firstElementChild.classList.toggle(
      "rotate"
    );
    accordionHeader.nextElementSibling.classList.toggle("d-none");
  });
});
