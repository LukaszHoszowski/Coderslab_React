![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

Stwórz klasę `Vehicle`. Ma ona w swoim konstruktorze, zapisywać:

- typ,
- nazwę,
- ilość koni mechanicznych.

Klasa ta ma również posiadać metodę `printInfo`. Jej zadaniem będzie wypisanie informacji o konkretnym pojeździe.

Następnie stwórz trzy obiekty `boat`, `car` i `plane` na podstawie klasy `Vehicle`.


## Zadanie 2

### Część 1

Utwórz konstruktor obiektu `Client` przyjmujący argument `name`.

Obiekt ma mieć atrybuty:
- `name`
- `orders` - tablica do przechowywania jego zamówień

i metodę:
- `addOrder(order)` - metoda służąca do dodawania zamówień do tablicy


### Część 2

Utwórz konstruktor dla obiektu `Order` przyjmujący argumenty `client` i `number`

Obiekt ma mieć atrybuty:

- `client` - powiązany obiekt z klientem
- `number` - numer zamówienia


### Część 3

Po stworzeniu tych dwóch klas wklej kod znajdujący się poniżej w celu przetestowania rozwiązania.

```js
const client1 = new Client("John");
const order1 = new Order(client1, "1");
const order2 = new Order(client1, "2");

client1.addOrder(order1);
client1.addOrder(order2);

console.table(client1.orders);
```