const randomize = (param1, param2, callback) => {
        if (typeof callback !== "function") {
            throw new Error("callback is not a function, found: ", callback)
        }
        callback(Math.floor((Math.random() * param2) + param1))
    }
;

randomize(1, 10, (rand) => console.log(rand))
