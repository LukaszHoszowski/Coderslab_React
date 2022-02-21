const form = document.querySelector("form.jumbotron")
const section = document.querySelector("section.book-info")

function fetchBookTitle(userInput) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${userInput}`
    return fetch(url).then(response=> response.json())
}

function showTitle(data) {
    section.innerHTML = "";

    const bookTitle = data.items[0].volumeInfo.title;
    const newH2 = document.createElement("h2");
    newH2.innerText = bookTitle;

    section.appendChild(newH2);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = e.target[0].value;

    fetchBookTitle(userInput).then(showTitle)
})