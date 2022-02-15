// Zadanie 1
// W folderze z zadaniem znajdziesz 3 pliki:
//
//     Polygon.js - zawierający klasę opisującą figurę geometryczną (wielokąt)
// Square.js - zawierający klasę dziedziczącą po klasie polygon
// app.js - w którym tworzony jest obiekt na bazie klasy Square.
//     Twoim zadaniem jest połączenie plików w taki sposób, aby Square widział Polygon, a plik app.js widział klasę Square.


import {Square} from "./Square.js"

const square = new Square(2);
square.sayName();
console.log(square.area());
console.log(new Square().area());

