import React from "react";
import ReactDOM from "react-dom";

function ColorFrame() {
    const frameColor = prompt("wybierz kolor ramki: ")

    console.log(frameColor)

    if (["red", "green", "blue"].includes(frameColor)) {
        return (
            <div style={{
                width: "100px",
                height: "100px",
                border: "5px",
                borderStyle: "solid",
                borderColor: frameColor
            }}></div>
        )
    } else {
        return (
            <div>
                Nieprawidlowy kolor
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <ColorFrame/>
    </React.StrictMode>,
    document.getElementById("app")
);
