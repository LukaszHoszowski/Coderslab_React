const numbers = [4, 4, 1, 2, 5, 40];
const sum = numbers.reduce((a, b) => a + b, 0);
console.log((sum / numbers.length).toFixed(3))