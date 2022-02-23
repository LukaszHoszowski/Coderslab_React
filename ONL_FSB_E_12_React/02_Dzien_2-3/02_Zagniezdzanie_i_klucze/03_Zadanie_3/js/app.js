import React from "react";
import ReactDOM from "react-dom";
import people from "./data/people";

function People() {
    const pplLst = people.map(person => {
        return <div className="person" key={person.id}>
                    <img src={person.avatar}/>
                    <div className="info">
                        <h1>{person.title} {person.name} {person.surname}</h1>
                        <p>{person.bio}</p>
                    </div>
                </div>
    })
    return <>{pplLst}</>
}

    ReactDOM.render(
        <React.StrictMode>
            <People/>
        </React.StrictMode>,
        document.getElementById("app")
    );
