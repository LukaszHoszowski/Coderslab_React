import React from "react";
import ReactDOM from "react-dom";
import animals from './data/animals';

function AnimalsList({animals}) {
    return (
        <section>
            {animals.length}: {animals.join(', ')}
        </section>
    )
}

ReactDOM.render(
    <AnimalsList animals={animals}/>,
    document.getElementById("app")
);
