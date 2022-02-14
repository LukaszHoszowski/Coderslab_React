![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

Stwórz komponent `SecretStuff`. Przyjmuje on z props `password`, `correctPassword` oraz `secret`.

Jeżeli atrybuty `password` i `correctPassword` były takie same, to wyświetlany jest `div`, a w nim to, co znajduje się w `secret`. W przeciwnym wypadku zablokuj renderowanie.

**PS. To jedynie przykład. NIGDY nie stosuj w ten sposób blokowania ani sprawdzania poufnych informacji. Jak łatwo się domyślić, takie dane NIE są ukryte.**



## Zadanie 2 - rozwiązywane z wykładowcą

Stwórz komponent `AccountData`. Niech przechowuje w stanie wewnętrznym pod nazwą `data` wartość `false`.

W pliku `js/data/fakeAPI.js` znajduje się obiekt pozwalający udawać zapytanie do zewnętrznego API. Zaimportujcie go do pliku `js/AccountData.js`:

```js
import FakeAPI from "./data/fakeAPI.js";
```

Jego użycie wygląda następująco:
```js
FakeAPI.then( data => {
  // w zmiennej data mamy dostęp do konkretnych danych
});
```

Wywołanie to potrwa kilka sekund, następnie zostanie wywołana funkcja `callback`, przekazana jako parametr do metody `then()`. Jako argument zostanie do callback przekazana tablica z danymi. Sprawdźcie w konsoli, jak wyglądają te dane żeby wiedzieć, jak je później wyrenderować.

Zaraz po zamontowaniu komponentu wywołaj `FakeAPI.then( callback )`. W callbacku daj funkcję, która zmieni stan wewnętrzny data na dane otrzymane z API.

Dopóki w stanie `data` mamy wartość `false`, **zablokuj renderowanie komponentu**.

Jeżeli posiadasz dane, to wygeneruj je w formie tabeli 3 kolumny na 12 wierszy.
