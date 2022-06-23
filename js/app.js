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
          accordionHeader.lastElementChild.firstElementChild.classList.remove(
            "rotate"
          );
        });
      }
    });

    accordionHeader.lastElementChild.firstElementChild.classList.toggle(
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

// Search contacts: filter by name

let filter = document.querySelector("#search");

filter.addEventListener("keyup", (e) => {
  let listItems = document.querySelectorAll("#item");

  listItems.forEach((item) => {
    itemName =
      item.firstElementChild.firstElementChild.textContent.toLowerCase();
    filterText = e.target.value.toLowerCase();

    if (itemName.indexOf(filterText) != -1) {
      item.classList.remove("d-none");
    } else {
      item.classList.add("d-none");
    }
  });
});

// Window

window.onclick = (e) => {
  let excludes =
    "#accordion-body, #accordion-body>*, #accordion-body>*>*, #accordion-body>*>*>*, #accordion-body>*>*>*>*";
  if (!e.target.matches("#accordion-header") && !e.target.matches(excludes)) {
    accordionsHeader.forEach((accordionHeader) => {
      accordionHeader.nextElementSibling.classList.add("d-none");
      accordionHeader.lastElementChild.firstElementChild.classList.remove(
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

// TODO: Sort contacts: order by name or date

// TODO: CRUD: create contacts

let form = document.querySelector(".contact-form");
let text = document.querySelector("#name");
let tel = document.querySelector("#tel");
let alert = document.querySelector("#submit-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // getValueOnSubmission();
  console.log(getValueOnSubmission());
});

function getValueOnSubmission() {
  alertOnSubmission(text, tel);

  setTimeout(() => {
    text.value = "";
    tel.value = "";
  }, 3000);

  // get name and phone from the submitted form
  return { names: text.value, phone: tel.value };
}

function alertOnSubmission(text, tel) {
  if (text.value == "" && tel.value == "") {
    alert.classList.add("alert-danger");
    alert.textContent = "fields are empty!";
  } else if (text.value == "") {
    alert.classList.add("alert-danger");
    alert.textContent = "name is empty!";
  } else if (tel.value == "") {
    alert.classList.add("alert-danger");
    alert.textContent = "phone is empty!";
  } else {
    alert.classList.remove();
    alert.classList.remove("alert-danger");
    alert.classList.add("alert-success");
    alert.textContent = "Contact saved!";
  }

  setTimeout(() => {
    alert.classList.remove("alert-danger");
    alert.classList.remove("alert-success");
    alert.textContent = "";
  }, 3000);
}

// TODO: CRUD: read, update,delete contacts

// TODO: localStorage: store contacts locally on browser

// TODO: Recycle bin:
