![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - Do wykonania z wykładowcą

Napisz implementację metody `reduce` ale pod nazwą `customReduce()`.
Zasada działania ma być taka sama jak metody `reduce`.

Następnie wykorzystaj nową metodę i mając do dyspozycji tablicę z liczbami:

```js
const numbers = [4, 12, 23, 76, 4];
```

Zwróć i wyświetl:
- wynik dodawania wszystkich liczb z tablicy (suma liczb z tablicy: **119**)
- wynik mnożenia wszystkich liczb z tablicy (iloczyn liczb z tablicy: **335616**)

## Zadanie 2

W pliku `js/app.js` znajdują się funkcje napisane w standardowy sposób. Twoim zadaniem jest przerobienie ich na **funkcje strzałkowe**, tak aby ich wywołania nie powodowały błędów.

## Zadanie 3

Stwórz funkcję strzałkową `randomize`, która jako parametry przyjmuje:
* Dowolne dwie liczby (`param1`, `param2`) -  określające przedział między jakim będziemy losować liczbę
* funkcje anonimową (`callback`, której zadaniem jest wypisanie wylosowanej liczby.
* niech funkcja `randomize()` sprawdza przed wywołaniem czy `callback` rzeczywiście jest funkcją.