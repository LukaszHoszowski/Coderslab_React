function getNegativeNumbers(array){
    const negativeNums = array.filter(function(ele, index, array) {
        return ele < 0;
    });
    console.log(negativeNums);
}

getNegativeNumbers([4, -5, 0, 2, -67, 8, 10, -34 ])