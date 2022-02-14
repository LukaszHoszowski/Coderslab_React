![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

Przechowaj adres zdjęcia w zmiennej, dodając poniższy kod:

```js
const imageUrl = "https://fer-api.coderslab.pl/assets/pexels-photo-4974914.jpeg";
```

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `img`, którego atrybut `src` ustawisz w JSX na wartość zmiennej `imageUrl`.

Pamiętaj o zamknięciu tagu `img`.


## Zadanie 2 - rozwiązywane z wykładowcą

W pliku `js/app.js` znajduje się funkcja `genNumber()`, która generuje pseudolosowe liczby z zakresu 1-10. Za jej pomocą wygeneruj liczbę A i liczbę B.

Następnie za pomocą funkcji `prompt()` zapytaj użytkownika, jaki jest wynik dodawania tych dwóch liczb. **Wyświetl w komunikacie prompt-a obie liczby żeby użytkownik miał szansę je zobaczyć.**

Za pomocą React wyrenderuj w elemencie o id `app` element `div`. Jeżeli odpowiedź użytkownika była poprawna, w nowo utworzonym elemencie `div` wyświetl informację `Odpowiedź poprawna` i ustaw styl tła na **zielony**. Jeżeli odpowiedź była niepoprawna, to element `div` ma zawierać informację `Odpowiedź błędna` oraz ma mieć styl tła **czerwony**.



## Zadanie 3

W pliku do tego zadania, znajdują się trzy zmienne (`redDiv`, `greenDiv`, `blueDiv`) zawierające strukturę JSX pustych elementów `div`.

Ustaw wszystkim trzem div-om wysokość na ```100px```, a każdemu z nich ustaw kolor tła odpowiadający jego nazwie. **Pamiętaj o użyciu odpowiedniej nazwy stylu**.

Spróbuj wykonać to zadanie z pomocniczą zmienną (po jednej dla każdego z div-ów), a następnie skrótowym zapisem bezpośrednio w każdym tagu JSX.



## Zadanie 4

Za pomocą `prompt()` zapytaj użytkownika o kolor ramki i przechowaj odpowiedź w zmiennej.

Sprawdź czy odpowiedź to `red`, `green` lub `blue` (możesz wykorzystać metodę `indexOf()`). Jeżeli odpowiedź nie zgadza się z naszym warunkiem, to wyrenderuj w elemencie o id `app` element `div` z napisem "Nieprawidłowy kolor".

Jeżeli podany kolor był poprawny, to za pomocą React wyrenderuj w elemencie o id `app` element `div`, ze stylami ustawionymi na:

- Szerokość: `100px`
- Wysokość: `100px`
- Grubość ramki: `5px`
- Styl ramki: `solid`
- Kolor ramki: **ten podany przez użytkownika**
