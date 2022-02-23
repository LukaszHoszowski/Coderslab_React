import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import person from "./data/person";

function People() {
    return (<Fragment>
        <h1>{person.title + person.firstName + person.lastName}</h1>
        <span>{person.age}</span>
    </Fragment>)
}

ReactDOM.render(
    <React.StrictMode>
        <People/>
    </React.StrictMode>,
    document.getElementById("app")
);
