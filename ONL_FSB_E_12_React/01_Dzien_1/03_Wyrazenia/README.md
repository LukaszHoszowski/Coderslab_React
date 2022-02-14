![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

Po załadowaniu się strony wyświetl użytkownikowi dwa razy `prompt()`, zachęcając do podania liczby A i B. Odpowiedzi przechowuj w zmiennych. Nie zapomnij o użyciu `parseFloat(str)` aby zmienić wartość typu string w zmienną typu number.

Następnie za pomocą React wyrenderuj w elemencie o id app element div, w którym będzie się wyświetlał wynik dodawania liczby A i B. Dodawanie wykonaj bezpośrednio w wyrażeniu w tagu JSX.



## Zadanie 2 - rozwiązywane z wykładowcą

Za pomocą `prompt()` przyjmij rok urodzenia użytkownika. Odpowiedź przechowuj w zmiennej. Nie zapomnij o użyciu `parseFloat(str)` aby zmienić wartość typu string w zmienną typu `number`.

Następnie za pomocą metody `new Date().getFullYear()` pobierz aktualny rok.

Za pomocą JSX wyświetl tag `h1`, w którym wypiszesz wiek użytkownika. Odejmowanie wykonaj bezpośrednio w wyrażeniu w tagu JSX.



## Zadanie 3 - rozwiązywane z wykładowcą

W pliku `js/data/person.js` znajduje się obiekt reprezentujący osobę. Zaimportuj go do pliku `js/app.js`, np. za pomocą:

```js
import person from './data/person';
```

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `ul`, w którym będzie się wyświetlał tytuł, imię, nazwisko oraz wiek tej osoby. Każda z tych wartości niech będzie umieszczona w osobnym elemencie `li` (na koniec powinniśmy mieć 4 elementy `li`). Nazwy tych właściwości obiektu znajdziesz w importowanym pliku.



## Zadanie 4

Stwórz prosty kalkulator, który liczy wynik dodawania, odejmowania, mnożenia lub dzielenia.

Możesz skorzystać z kodu zadania w wykładowcą. Zmodyfikuj je w taki sposób aby wyświetlać jeszcze jeden `prompt()`, który ma pobierać jeden ze znaków: `+`, `-`, `*` lub `/` - odpowiada on operacjom matematycznym, jakie zostaną wykonane na liczbach A i B.

Zadanie wykonaj w taki sposób aby w zależności od operacji był renderowany inny element: dla dodawania element `h1`, dla odejmowania element `h2`, dla mnożenia element `h3`, a dla dzielenia element `h4`. Operacje matematyczne wykonuj bezpośrednio w wyrażeniu w danym tagu JSX.



## Zadanie 5

Skopiuj działający wynik **Zadania 4** do pliku `app.js` w aktualnym zadaniu.

Przerób to zadanie w taki sposób aby powstała funkcja `calc(a, b, operation)`, która za argumenty przyjmuje liczbę A, B i operację do wykonania jako string (jeden ze znaków: `+`, `-`, `*` lub `/`). Funkcja ta ma zwracać gotowy tag JSX ```h1```...```h4```.

Następnie przerób miejsce, w którym korzystasz z ```ReactDOM.render()``` w taki sposób aby renderował element ```div```, a w nim bezpośrednio wynik działania funkcji ```calc()```.



## Zadanie 6

W pliku `js/data/animals.js` znajduje się tablica reprezentująca spis zwierząt. Zaimportuj ją do pliku `js/app.js` np. za pomocą:

```js
import animals from './data/animals';
```

Następnie za pomocą React wyrenderuj w elemencie o id `app` element section, w którym będzie się wyświetlała łączna liczba zwierząt oraz zostaną one wypisane. Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX.

Przyda Ci się właściwość `length` oraz metoda `join(separator)`.

