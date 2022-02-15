// Zadanie 2
// Stwórz obiekt slider, taki jak poniżej:
//
//     const slider = {
//         type: "infinite",
//         numberOfItems: 10,
//         center: true,
//         autoStart: true
//     }
// Podstaw do zmiennych type oraz autoStart odpowiednie wartości z obiektu slider.

const slider = {
        type: "infinite",
        numberOfItems: 10,
        center: true,
        autoStart: true
    }

let {type, autoStart} = slider

console.log(type, autoStart)
