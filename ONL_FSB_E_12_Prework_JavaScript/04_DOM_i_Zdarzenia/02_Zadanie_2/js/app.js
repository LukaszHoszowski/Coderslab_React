document.addEventListener("DOMContentLoaded", function () {
    const divSelected = document.querySelectorAll("div")

    divSelected.forEach(function (div) {
        div.addEventListener("click", function (event) {
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        });
    });
});

