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

const bodyTable = document.querySelector("tbody");

let booksArr = [];

class Book {
  constructor(title, author, priority, category) {
    this.title = title;
    this.author = author;
    this.priority = priority;
    this.category = category;
  }
}

/* Displaying books on the table */
// Iterating through array
const showBooks = () => {
  booksArr.forEach((obj) => {
    const tr = document.createElement("tr");

    const title = document.createElement("td");
    title.innerText = obj.title;

    const author = document.createElement("td");
    author.innerText = obj.author;

    const priority = document.createElement("td");
    priority.innerText = obj.priority;

    const category = document.createElement("td");
    category.innerText = obj.category;

    tr.append(title, author, priority, category);
    bodyTable.append(tr);
  });
};

const addBook = () => {
  const bookTitle = titleInput.value;
  const bookAuthor = authorInput.value;
  const bookPriority = priorityInput.value;
  const bookCategory =
    categorySelect.options[categorySelect.selectedIndex].text;

  //creating new object and pushing to an array
  const newBook = new Book(bookTitle, bookAuthor, bookPriority, bookCategory);
  booksArr.push(newBook);
  bodyTable.innerHTML = "";
  showBooks();
};

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

localStorageSave = () => {
  localStorage.setItem("arrayOfBooks", JSON.stringify(booksArr));
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
document.addEventListener("DOMContentLoaded", () => {
  /* Checking if localStorage has an array */
  // If it's true - show books
  if (localStorage.getItem("arrayOfBooks")) {
    const arrFromStorage = JSON.parse(localStorage.getItem("arrayOfBooks"));
    booksArr = [...arrFromStorage];
    showBooks();
  }
});
