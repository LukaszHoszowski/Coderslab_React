import React from "react";
import ReactDOM from "react-dom";
import person from './data/person';

function UserCard({title,firstName,lastName,age}){
    return  (
        <ul>
            <li>{title}</li>
            <li>{firstName}</li>
            <li>{lastName}</li>
            <li>{age}</li>
        </ul>
    );
}

ReactDOM.render(
    <UserCard {...person}/>,
    document.getElementById("app")
);
