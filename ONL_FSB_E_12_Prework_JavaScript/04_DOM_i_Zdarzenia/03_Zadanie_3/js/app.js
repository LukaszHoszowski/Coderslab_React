const inputs = document.querySelectorAll(".form-group input")
const btn = document.querySelector(".btn-primary")
const table = document.querySelector("tbody")

function addEle(event) {
    event.preventDefault()
    if (!(inputs[0].value == inputs[2].value) && inputs[1].value >= 0 && inputs[3].value >= 0) {

        const row = table.insertRow(0);

        let team1 = row.insertCell(0);
        let team2 = row.insertCell(1);
        let result = row.insertCell(2);

        team1.innerHTML = inputs[0].value;
        team2.innerHTML = inputs[2].value;
        result.innerHTML = inputs[1].value + ' - ' + inputs[3].value

        table.appendChild(row)
    }
    if (inputs[0].value == inputs[2].value){
        window.alert("Wprowadzone drużyny są takie same, wprowadź różne nazwy druzyn");
    } else if (inputs[1].value <= 0 || inputs[3].value <= 0) {
        window.alert("Nie możesz wprowadzić ujemnych wyników, wprowadz wynik w zakresie od 0 do nieskończoności");
    }
}

btn.addEventListener("click", addEle)
