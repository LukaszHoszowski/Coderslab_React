let randomNum = Math.floor((Math.random() * 10) + 1);
let userNum = parseInt(prompt("Enter integer from 1 to 10"));

if (randomNum == userNum){
    console.log("Brawo")
} else {
    console.log("Spróbuj jeszcze raz!")
};