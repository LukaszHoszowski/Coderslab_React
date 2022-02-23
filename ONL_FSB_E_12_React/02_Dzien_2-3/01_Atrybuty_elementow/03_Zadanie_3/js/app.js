import React from "react";
import ReactDOM from "react-dom";

const style = {
  height: "100px",
  backgroundColor: "red"
}

const redDiv = <div style={style}/>;
const greenDiv = <div style={{height: "100px", backgroundColor: "green"}}/>;
const blueDiv = <div style={{height: "100px", backgroundColor: "blue"}}/>;

ReactDOM.render(
  <>
    {redDiv}{greenDiv}{blueDiv}
  </>,
  document.getElementById("app")
);
