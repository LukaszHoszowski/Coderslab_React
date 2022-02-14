![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

Stwórz tablicę z dowolnymi liczbami. Następnie oblicz średnią arytmetyczną z liczb znajdujących się w tej tablicy i wypisz ją w konsoli.

```JavaScript
const numbers = [4, 4, 1, 2, 5, 40];
Wynik w konsoli: 9.333
```

## Zadanie 2

Mając do dyspozycji tablicę z nazwami miast, zwróć i wypisz nową tablicę z ilością liter każdego miasta.

Na przykład dla tablicy miast:
```JavaScript
const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
```
Wynik powinien być następujący:

```JavaScript
[6, 7, 8, 19];
```


## Zadanie 3

Napisz funkcje ```getNegativeNumbers(array)```, która jako argument przyjmuje tablicę. Tablica może zawierać liczby ujemne. Funkcja **ma zwrócić** nową tablicę wypełnioną tylko ujemnymi liczbami.

Przykład:
```JavaScript
const numbers = [4, -5, 0, 2, -67, 8, 10, -34 ];
console.log(getNegativeNumbers(numbers));
Wynik w consoli: [-5, -67, -34]
```

## Zadanie 4

Mając do dyspozycji tablicę z latami, stwórz nową tablicę, która będzie zawierała wiek osoby urodzonej danego roku. Wyświetl nową tablicę.

```JavaScript
const years = [1995, 1856, 2014, 1987];
```

## Zadanie 5

Napisz funkcje ```getSecondMaxNumber(array)```, która jako argument przyjmuje tablicę. Funkcja **ma zwrócić** drugą co do wielkości liczbę w tablicy.

Przykład:
```JavaScript
const numbers = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(numbers));
Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku
```

## Zadanie 6: Tablice z imionami

### Część 1

Zdefiniujcie tablicę w zmiennej `names1` zawierającą kolejne imiona: `Jan, Maria, Kasia, Wojtek, Zosia`

Na koniec wypiszcie w terminalu w kolejnych liniach:

- drugi element
- piąty element
- długość tablicy


### Część 2

Zdefiniujcie pustą tablicę w zmiennej `names2`, a następnie **pojedynczo** dodajcie do niej następujące imiona:

```
Jan, Maria, Kasia, Wojtek, Zosia, Grzesiek
```

Na koniec wypiszcie w terminalu:

- pierwszy element
- trzeci element
- długość tablicy


## Zadanie 7: Tablice 2D

### Część 1

Utwórzcie tablicę dwuwymiarową - 3 wiersze na 4 kolumny (w zmiennej `arrayOfNumbers`).

W kolejnych kolumnach mają wystąpić kolejne liczby całkowite, czyli powinno to wyglądać następująco:
```
1,2,3,4
5,6,7,8
9,10,11,12
```

Wyświetlcie:
- drugi element z pierwszego wiersza
- drugi wiersz (drugi element z pierwszego wymiaru)
- długość trzeciego elementu z pierwszego wymiaru


### Część 2

Utwórzcie tablicę dwuwymiarową (w zmiennej `mixedArray`) odpowiednio składającą się z:

- tablicy z imionami: `Maria`, `Jan`, `Piotr`
- tablicy z wartościami liczbowymi: `1, 2, 3, 4, 5, 6`

Wyświetlcie:

- trzeci element z pierwszego wiersza
- piąty element z pierwszego wiersza
- długość drugiego elementu z pierwszego wymiaru
