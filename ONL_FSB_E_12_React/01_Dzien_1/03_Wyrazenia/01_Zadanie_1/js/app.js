import React from "react";
import ReactDOM from "react-dom";

function GetTwoNumbersAndShowResult(props) {
    const valueA = parseFloat(prompt("Podaj liczbę: "))
    const valueB = parseFloat(prompt("Podaj liczbę: "))

    function handleClick() {
        console.log(props)
    }

    return <div className={"col btn"} onClick={handleClick}>{valueA + valueB}</div>
}

ReactDOM.render(
    <React.StrictMode>
        <GetTwoNumbersAndShowResult/>
    </React.StrictMode>,
document.getElementById("app")
);

