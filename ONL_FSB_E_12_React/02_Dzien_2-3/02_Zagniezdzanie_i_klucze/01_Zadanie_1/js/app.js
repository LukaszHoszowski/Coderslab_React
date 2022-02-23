import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import people from "./data/people";

function People() {
    const pplLst = people.map(person => {
        return <div key={person.id}>{person.name} {person.surname}</div>
    })
    return pplLst
}

ReactDOM.render(
    <React.StrictMode>
        <People/>
    </React.StrictMode>,
    document.getElementById("app")
);
