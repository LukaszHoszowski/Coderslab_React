import React from "react";
import ReactDOM from "react-dom";

function genNumber() {
  return Math.round(Math.random() * 9 + 1);
}

ReactDOM.render(
  <h1>Hello, World!</h1>,
  document.getElementById("app")
);
