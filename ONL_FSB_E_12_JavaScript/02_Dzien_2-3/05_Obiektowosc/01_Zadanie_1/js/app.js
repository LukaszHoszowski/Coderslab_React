class Duck {
    constructor () {
        this.type = "zwykła"
    }
    quack() {
        console.log("kwa kwa")
        return "kwa kwa"
    }
    swim() {
        console.log("plyne...")
        return "plyne..."
    }
    print() {
        console.log(`Wyglada jak ${this.type} kaczka`)
        return `Wyglada jak ${this.type} kaczka`
    }
}

let duck = new Duck()
duck.quack()
duck.swim()
duck.print()

class WildDuck extends Duck {
    constructor () {
        this.type = "zwykła"
    }
    print() {
        console.log(`Wyglada jak dzika kaczka`)
        return `Wyglada jak dzika kaczka`
    }
}


let wildDuck = new WildDuck()
duck.quack()
duck.swim()
duck.print()
