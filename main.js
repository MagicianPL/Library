const titleInput = document.querySelector("#book-title");
const authorInput = document.querySelector("#author");
const priorityInput = document.querySelector("#priority");
const categorySelect = document.querySelector("#category");

const booksTable = document.querySelector("table");

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

const handleSubmitForm = (e) => {
  e.preventDefault();

  addBook();
};

document.querySelector("form").addEventListener("submit", handleSubmitForm);
