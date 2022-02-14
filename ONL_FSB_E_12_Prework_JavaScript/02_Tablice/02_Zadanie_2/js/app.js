const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

const charLengthCities = cities.map(function(ele, index, array) {
    return ele.length;
});
console.log(charLengthCities);