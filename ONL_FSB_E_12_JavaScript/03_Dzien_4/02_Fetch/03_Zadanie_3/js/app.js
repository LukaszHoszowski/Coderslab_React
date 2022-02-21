const list = document.querySelector(".list")

function fetchHolidays(key='e92601251-c0a2-4s63-v73f-54041195480f', country='PL') {
    const url = `https://fer-api.coderslab.pl/v1/holidays?key=${key}&country=${country}`
    return fetch(url)
        .then(response => response.json())
        .then( resp => (resp.holidays))
}

function showHoliday(data) {
    list.innerHTML = "";
    data.forEach((ele) => {
        const holidayName = ele.name;
        const holidayDate = ele.date
        const newH3 = document.createElement("h3");
        newH3.innerText = holidayName;
        newH3.className = "holiday-name"
        const newDiv = document.createElement("div");
        newDiv.innerText = holidayDate;
        newDiv.className = "holiday-date"
        list.appendChild(newH3);
        list.appendChild(newDiv);
    })
}

fetchHolidays()
    .then(showHoliday)
    .catch( err => {
        console.log('Błąd: ', err)
    })
