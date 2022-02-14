class Vehicle {
    constructor(type, name, bhp) {
        this.type = type;
        this.name = name;
        this.bhp = bhp;
    };

    printInfo() {
        return console.log('Typ: ' + this.type, 'Nazwa: ' + this.name, 'Ilosc koni mechanicznych: ' + this.bhp);
    }
}

boat = new Vehicle("Łódź", "Titanic", "1000");
car = new Vehicle("Samochód", "Golf", "75");
plane = new Vehicle("Samolot", "737", "1200");


boat.printInfo()
car.printInfo()
plane.printInfo()
