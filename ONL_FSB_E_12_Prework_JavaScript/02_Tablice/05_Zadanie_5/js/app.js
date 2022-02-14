function getSecondMaxNumber(array){
    console.log(array.sort(function(a, b){return b - a})[1])
}

getSecondMaxNumber([2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ])
