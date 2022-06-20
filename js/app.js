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
        !(
          e.target.nextElementSibling !== accordionBody &&
          accordionBody.classList.contains("d-none")
        )
      ) {
        accordionBody.classList.add("d-none");
        accordionsHeader.forEach((accordionHeader) => {
          accordionHeader.nextElementSibling.classList.add("d-none");
          accordionHeader.firstElementChild.firstElementChild.classList.remove(
            "rotate"
          );
        });
      }
    });

    accordionHeader.firstElementChild.firstElementChild.classList.toggle(
      "rotate"
    );
    accordionHeader.nextElementSibling.classList.toggle("d-none");
  });
});

// Copy to Clipboard

let btnCopy = document.querySelectorAll(".copy_icon");

btnCopy.forEach((btn) => {
  btn.addEventListener("mousedown", (e) => {
    accordionsBody.forEach((body) => {
      let tel = body.lastElementChild.firstElementChild.lastElementChild;
      let phone =
        e.target.parentElement.parentElement.parentElement.firstElementChild
          .lastElementChild;
      let toolTip = e.target.parentElement.lastElementChild.firstElementChild;

      if (tel === phone) {
        toolTip.classList.remove("visually-hidden");

        setTimeout(() => {
          toolTip.classList.add("visually-hidden");
        }, 2000);

        navigator.clipboard.writeText(phone.textContent);
      }
    });
  });
});

// Window

window.onclick = (e) => {
  let excludes =
    "#accordion-body, #accordion-body>*, #accordion-body>*>*, #accordion-body>*>*>*, #accordion-body>*>*>*>*";
  if (!e.target.matches("#accordion-header") && !e.target.matches(excludes)) {
    accordionsHeader.forEach((accordionHeader) => {
      accordionHeader.nextElementSibling.classList.add("d-none");
      accordionHeader.firstElementChild.firstElementChild.classList.remove(
        "rotate"
      );
    });
  }

  if (
    e.target.matches(".modal-container") &&
    !e.target.matches(".modal-form")
  ) {
    closeModal();
  }
};

// TODO: Search contacts: filter by name

// TODO: Sort contacts: order by name or date

// TODO: CRUD: create, read, update,delete contacts

// TODO: localStorage: store contacts locally on browser

// TODO: Recycle bin:
