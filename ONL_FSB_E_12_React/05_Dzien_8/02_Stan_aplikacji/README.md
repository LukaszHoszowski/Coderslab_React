![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

Stwórz komponent `TextTyper` (w odpowiednim pliku). Przyjmuje on przez `props` wartość `text`.

Komponent ma wyrenderować pierwszą literę tego napisu w elemencie `h1`. Pamiętaj, aby do przechowywania znaków, które mają być wyświetlone, skorzystać ze `state`.

Dodaj do komponentu dwa przyciski: `+` i `-`. Po kliknięciu w `+` na stronie powinna pojawić się kolejna litera z tekstu przesłanego przez `props`.

Po kliknięciu `-` ma nastąpić odwrotna sytuacja, czyli ostatni znak ma zniknąć.

Efekt może wyglądać tak dla `text` ustawionego na "Witaj!":

- brak kliknięć: "W"
- kliknięcie +: "Wi"
- kliknięcie +: "Wit"
- kliknięcie -: "Wi"
- kliknięcie +: "Wit"
- kliknięcie +: "Wita"
- kliknięcie -: "Wit"

Oczywiście metody tego komponentu muszą być odpowiednio zabezpieczone, żeby nie generować żadnych błędów.

Zajrzyj do narzędzi deweloperskich React. Klikając na swój komponent, zobaczysz jego `props`, aktualne `state` oraz podświetlenia aktualizacji.

Pamiętaj, aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.



## Zadanie 2

Stwórz komponent `CurrentDate` który ma za zadanie wyświetlać aktualną datę wraz z godziną w formacie: "Godziny:Minuty:Sekundy, Dzień/Miesiąc/Rok" ([CheatSheet dla obiektu Date](https://devhints.io/js-date)).

Ma on również renderować przycisk "Zaktualizuj datę". Po jego kliknięciu, ma zostać zaktualizowany `state` komponentu i wyrenderowana aktualna data i godzina.

Pamiętaj, aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.



## Zadanie 3

Stwórz komponent `RandomNumbers` który na początek w swoim stanie będzie przechowywał pustą tablicę pod kluczem `numbers`. 

Komponent ten ma renderować przycisk "Wylosuj liczbę". Po jego kliknięciu, należy:
 
- wylosować wartość z przedziału 100 - 999, 
- wstawić ją do tablicy w stanie aplikacji jako kolejny jej element,
- wyświetlić wszystkie elementy tablicy w formie listy `ul` na stronie (należy użyć metody tablicowej `map`)



## Zadanie 4

Stwórz komponent `MagicBox` który ma w swoim stanie przechowywać klucz `color` z wartością `#000`.
 
Powinien renderować `div` o wymiarach `200x200px` a także z kolorem tła takim jak klucz `colors` w `state`.

Po **najechaniu myszą** na tego `diva` należy wygenerować nowy kolor i zapisać go do stanu aplikacji. Box powinien po każdym najechaniu na niego myszą zmienić swój kolor tła.

Ta linijka kodu generuje losowy kolor, możesz z niej skorzystać:
```js
const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
```
