import React from "react";
import ReactDOM from "react-dom";
const yearOfBirth = parseFloat(prompt("Podaj rok urodzenia"));
function CalculateAge({userInput}){
    const currentYear = new Date().getFullYear();

    return <h1>{currentYear - userInput}</h1>
}

ReactDOM.render(
    <CalculateAge userInput={yearOfBirth}/>,
    document.getElementById("app")
);


import React from "react";
import ReactDOM from "react-dom";


const yearOfBirth = parseFloat(prompt("Podaj rok urodzenia"));
const currentYear = new Date().getFullYear();


ReactDOM.render(
    <h1>{currentYear - yearOfBirth}</h1>,
    document.getElementById("app")
);