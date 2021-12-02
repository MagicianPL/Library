const titleInput = document.querySelector("#book-title");
const authorInput = document.querySelector("#author");
const priorityInput = document.querySelector("#priority");
const categorySelect = document.querySelector("#category");

/* Error paragraphs ******/
const titleErr = document.querySelector(".title-error");
const authorErr = document.querySelector(".author-error");
const priorityErr = document.querySelector(".priority-error");
const categoryErr = document.querySelector(".category-error");
/************************ */

const booksTable = document.querySelector("table");

/* Checking if tableContent is true in localStorage */
if (localStorage.getItem("tableContent") !== null) {
  const tableContent = localStorage.getItem("tableContent");
  document.querySelector("table").innerHTML = tableContent;
}

/* Validation functions ****************************************************** */
const titleIsValid = () => {
  if (!titleInput.value.trim()) {
    titleErr.style.display = "block";
  } else {
    titleErr.style.display = "none";
    return true;
  }
};

const authorIsValid = () => {
  if (authorInput.value.trim().length < 3) {
    authorErr.style.display = "block";
  } else {
    authorErr.style.display = "none";
    return true;
  }
};

const priorityIsValid = () => {
  if (+priorityInput.value < 1 || +priorityInput.value > 5) {
    priorityErr.style.display = "block";
  } else {
    priorityErr.style.display = "none";
    return true;
  }
};

const categoryIsValid = () => {
  if (!categorySelect.options[categorySelect.selectedIndex].value) {
    categoryErr.style.display = "block";
  } else {
    categoryErr.style.display = "none";
    return true;
  }
};
/*********************************************************************************** */

//creating elements for the table
const addBook = () => {
  const tr = document.createElement("tr");
  const title = document.createElement("td");
  title.innerText = titleInput.value;

  const author = document.createElement("td");
  author.innerText = authorInput.value;

  const priority = document.createElement("td");
  priority.innerText = priorityInput.value;

  const category = document.createElement("td");
  category.innerText =
    categorySelect.options[categorySelect.selectedIndex].text;

  tr.append(title, author, priority, category);
  booksTable.append(tr);
};

localStorageSave = () => {
  const content = booksTable.innerHTML;
  localStorage.setItem("tableContent", content);
};

const handleSubmitForm = (e) => {
  e.preventDefault();

  // Inputs validation
  titleIsValid();
  authorIsValid();
  priorityIsValid();
  categoryIsValid();

  if (
    titleIsValid() &&
    authorIsValid() &&
    priorityIsValid() &&
    categoryIsValid()
  ) {
    addBook();
    //saving data on local storage
    localStorageSave();
    titleInput.value = "";
    authorInput.value = "";
    priorityInput.value = "";
    categorySelect.value = "";
  }
};

document.querySelector("form").addEventListener("submit", handleSubmitForm);
