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

  let contacts = getValueOnSubmission();

  if (contacts.names != "" && contacts.phone != "") {
    names = contacts.names;
    phone = contacts.phone;

    addNewContact(names, phone);
  }
});

function addNewContact(text, tel) {
  //Create new Element
  let ul = document.createElement("ul");
  let li = document.createElement("li");

  let header = document.createElement("div");
  let spanName = document.createElement("span");
  let spanIcon = document.createElement("span");
  let iconChevron = document.createElement("i");

  let body = document.createElement("div");
  let content = document.createElement("div");

  let contentFirstDiv = document.createElement("div");
  let iconPhone = document.createElement("i");
  let anchorPhone = document.createElement("a");

  let contentLastDiv = document.createElement("div");
  let firstDiv = document.createElement("div");
  let copyDiv = document.createElement("div");
  let iconCopy = document.createElement("i");
  let toolTip = document.createElement("div");
  let toolTipSpan = document.createElement("span");

  let lastDiv = document.createElement("div");
  let iconInfo = document.createElement("i");

  // Add attributes (classes, ids)
  ul.id = "accordion";
  ul.className = "list-group list-group-flush";

  li.id = "item";
  li.className =
    "list-group-item fs-6 p-0 d-flex flex-wrap justify-content-between align-items-center";

  header.id = "accordion-header";
  header.className =
    "w-100 d-flex justify-content-between align-items-center p-2 bg-light";

  spanIcon.className = "badge text-secondary";
  iconChevron.className = "fa-solid fa-chevron-down";

  body.id = "accordion-body";
  body.className = "pt-2 pb-1 shadow-sm rounded-bottom w-100 d-none";
  content.id = "content";
  content.className = "ps-3 pe-2 d-flex justify-content-between";

  contentFirstDiv.className = "text-secondary small";
  iconPhone.className = "fa-solid fa-blender-phone";
  anchorPhone.href = "tel:"; // TODO: add numbers implicitly
  anchorPhone.className = "text-secondary text-decoration-none ms-1";

  contentLastDiv.className = "d-flex small position-relative";
  firstDiv.id = "copy_icon";
  firstDiv.className = "copy_icon text-secondary p-1 me-3";
  copyDiv.id = "copy_icon";
  copyDiv.className = "copy_icon text-secondary p-1 me-3";
  iconCopy.className = "fa-solid fa-copy";
  toolTip.className = "d-inline-block position-absolute tool-tip";
  toolTipSpan.className =
    "visually-hidden bg-secondary text-white px-2 pb-1 small rounded-1 position-absolute tool-tip_text";

  lastDiv.className = "info_icon text-primary p-1 me-2";
  iconInfo.id = "info_icon";
  iconInfo.className = "fa-solid fa-circle-info";

  // Create TextNodes
  ul.appendChild(li);

  li.appendChild(header);
  li.appendChild(body);

  header.appendChild(spanName);
  spanName.appendChild(document.createTextNode(`${text}`));
  header.appendChild(spanIcon);
  spanIcon.appendChild(iconChevron);

  body.appendChild(content);
  content.appendChild(contentFirstDiv);
  content.appendChild(contentLastDiv);

  contentFirstDiv.appendChild(iconPhone);
  contentFirstDiv.appendChild(anchorPhone);
  anchorPhone.appendChild(document.createTextNode(`${tel}`));

  contentLastDiv.appendChild(firstDiv);

  firstDiv.appendChild(copyDiv);
  copyDiv.appendChild(iconCopy);
  copyDiv.appendChild(toolTip);
  toolTip.appendChild(toolTipSpan);
  toolTipSpan.appendChild(document.createTextNode("copied"));

  contentLastDiv.appendChild(lastDiv);
  lastDiv.appendChild(iconInfo);

  // insert to dom
  let container = document.querySelector(".contact-section > .container");
  let reference = document.querySelector("#reference");
  container.insertBefore(ul, reference);
}

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
