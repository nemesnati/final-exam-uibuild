const rootElement = document.getElementById("root");

const header = document.createElement("header");
header.textContent = "NEW YORK TIMES BESTSELLERS";
header.id = header;
rootElement.appendChild(header);

books.forEach((book, index) =>
  rootElement.insertAdjacentHTML(
    "beforeend",
    `
        <div class="book">
             <h2>${book.sub.toUpperCase()}</h2>
              <h1>${book.title}</h1>
               <p>${book.text}</p>
               <div class="number">${index + 1}</div>
              <button>read more</button>
        </div>
`
  )
);
