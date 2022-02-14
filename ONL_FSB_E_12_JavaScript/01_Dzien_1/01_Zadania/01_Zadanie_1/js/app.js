const numbers = [4, 12, 23, 76, 4];

Array.prototype.customReduce = function(callback, initial){
    if(typeof callback !== "function"){
        throw new Error("callback is not a function, found: ",callback)
    }
    let acc = initial ? initial : this[0]
    for (let i = initial ? 0 : 1; i < this.length; i++) {
        acc = callback(acc, this[i]);
    }
    return acc
}

console.log(numbers.customReduce(function(acc, curr){return acc + curr}, 4)); // 123

console.log(numbers.customReduce(function(acc, curr){return acc * curr}, 2)); // 671232

console.log(numbers.customReduce("paprochy")); // Error