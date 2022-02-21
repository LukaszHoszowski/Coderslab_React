const section = document.querySelector("#app")

function fetchPokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    return fetch(url)
        .then(response => response.json())
        .then( resp => (resp.results))
}

function showTitle(data) {
    section.innerHTML = "";
    data.forEach((ele) => {
        const name = ele.name;
        const newH2 = document.createElement("li");
        newH2.innerText = name;
        section.appendChild(newH2);
    })
}

fetchPokemons()
    .then(showTitle)
    .catch( err => {
        console.log('Błąd: ', err)
    })
