import React from "react";
import ReactDOM from "react-dom";

const redDiv = <div/>;
const greenDiv = <div/>;
const blueDiv = <div/>;

ReactDOM.render(
  <>
    {redDiv}{greenDiv}{blueDiv}
  </>,
  document.getElementById("app")
);
