import React, {Component} from "react";
import ReactDOM from "react-dom";


const App = () => {
  return (
    <div>
      <h1>Test okna modalnego</h1>
      <Modal heading="Zapisz się do newslettera"/>
    </div>
  );
};


ReactDOM.render(<App/>, document.getElementById("app"));
