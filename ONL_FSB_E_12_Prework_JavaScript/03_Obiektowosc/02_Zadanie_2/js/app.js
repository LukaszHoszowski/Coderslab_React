class Client {
    constructor(name) {
        this.name = name;
        this.orders = [];
    };

    addOrder(order) {
        this.orders.push(order)
    }
}

class Order {
    constructor(client, number) {
        this.client = client;
        this.number = number
    }
}

const client1 = new Client("John");
const order1 = new Order(client1, "1");
const order2 = new Order(client1, "2");

client1.addOrder(order1);
client1.addOrder(order2);

console.table(client1.orders);
