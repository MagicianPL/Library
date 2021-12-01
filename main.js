const booksTable = document.querySelector("table");

const booksArr = [
  {
    title: "tiitle",
    author: "Michałek",
    priority: 6,
    category: "Romance",
  },
];

class Book {
  constructor(title, author, priority, category) {
    this.title = title;
    this.author = author;
    this.priority = priority;
    this.category = category;
  }
}

booksArr.map((obj) => {
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
  booksTable.append(tr);
});
