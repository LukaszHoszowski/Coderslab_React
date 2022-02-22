import React from "react";
import ReactDOM from "react-dom";

function Calc() {
    const valueA = parseFloat(prompt("Podaj liczbę: "))
    const valueB = parseFloat(prompt("Podaj liczbę: "))
    const operator = String(prompt("Wyierz dzialanie: "))

    const mathOperation = {
        '+': function (x, y) { return <h1> {x + y} </h1> },
        '-': function (x, y) { return <h2> {x - y} </h2> },
        '*': function (x, y) { return <h3> {x * y} </h3> },
        '/': function (x, y) { return <h4> {x / y} </h4> },
    };
    return mathOperation[operator](valueA, valueB);
}

ReactDOM.render(
    <React.StrictMode>
        <Calc/>
    </React.StrictMode>,
    document.getElementById("app")
);
