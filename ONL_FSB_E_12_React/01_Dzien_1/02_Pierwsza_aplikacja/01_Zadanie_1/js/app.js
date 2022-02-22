import React from "react";
import ReactDOM from "react-dom";

const appRoot = document.getElementById("app");

const hello = <h1>Powitanie z React</h1>;

function App() {
    return <h1>Powitanie z React</h1>;
}

// ReactDOM.render(hello,appRoot)
ReactDOM.render((
    <React.StrictMode>
        <App/>
    </React.StrictMode>
), appRoot);