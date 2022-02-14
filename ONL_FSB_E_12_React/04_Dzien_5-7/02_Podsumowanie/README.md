![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie

### Część 1
W pliku `js/data/products.js` znajduje się tablica z obiektami przykładowych zakupów. Zaimportuj ją do pliku `js/app.js`.

Stwórz komponent o nazwie `Receipt`. Niech przyjmuje on w props tablicę obiektów z elementami rachunku (`items`).

Obiekty są w takiej formie:
```js
const obj = {
  code: 123, // Kod produktu
  single_price: 100.00, // Cena jednostkowa
  qty: 2, // Ilość
  name: "MacBook" // Nazwa towaru
}
```

Wyświetl całość w formie takiej tabelki (tabelka powinna dostać klasę CSS `table`):

Nazwa | Cena | Ilość | Łączna cena
--- | --- | --- | ---
Masło | 4.00 zł| 1 | 4.00 zł
Chleb | 3.50 zł| 2 | 7.00 zł  
Jabłka | 2.99 zł | 1.5 | 4.49 zł
RAZEM | - | - | 15.49 zł

Pamiętaj o odpowiednich obliczeniach. Na końcu wyświetl całkowitą sumę rachunku. Wyrenderuj swój komponent rachunku z tymi zaimportowanymi danymi (łączna cena produktów z dostarczonej tablicy to w przybliżeniu `33.52`).

Może Ci się przydać metoda [toFixed()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Number/toFixed).

### Część 2
Podziel komponent `Receipt` tak, by składał się z komponentów:

- `ReceiptHeader`
- `ReceiptItems`
- `ReceiptItem`
- `ReceiptFooter`
- `Receipt`

Zastanów się, gdzie wykonywać obliczenia i w jaki sposób przekazać je do subkomponentów.

Pamiętajcie aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.

Zadanie wykonaj z komponentami w wersji **funkcyjnej**.
