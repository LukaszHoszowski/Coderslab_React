import React from "react";
import ReactDOM from "react-dom";

function PromptUser() {
  const numA = genNumber()
  const numB = genNumber()

  const promptScore = prompt(`Jaki jest wynik dodawania ${numA} i ${numB}`)
  if (parseInt(numA + numB) === parseInt(promptScore)) {
    return (
        <div style={{backgroundColor: "green"}}>
          Odpowiedź poprawna
        </div>)
  } else {
    return (
        <div style={{backgroundColor: "red"}}>
          Odpowiedź błędna
        </div>)
  }
}

function genNumber() {
  return Math.round(Math.random() * 9 + 1);
}

ReactDOM.render(
    <React.StrictMode>
      <PromptUser/>
    </React.StrictMode>,
  document.getElementById("app")
);
