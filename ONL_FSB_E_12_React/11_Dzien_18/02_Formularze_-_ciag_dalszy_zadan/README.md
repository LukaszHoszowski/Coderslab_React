![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

Stwórz komponent o nazwie `PESELInput`.

Ma on wyświetlać w elemencie `form` elementy `input` oraz drugi `div`.

`input` ma być kontrolowanym elementem formularza. Podczas wpisywania sprawdzaj czy wpisany tekst ma 11 znaków i czy są to same cyfry:

- Jeżeli tak, to w wewnętrznym elemencie `div` wyświetl `input type="submit"` z napisem "Prześlij" (póki co nie ma nic robić);

- Jeżeli nie, to w wewnętrznym elemencie `div` wyświetl informację "Niepoprawny numer PESEL".



## Zadanie 2

Stwórz komponent `AdultStuff` oraz `AdultStuffBox`.

Komponent `AdultStuff` renderuje w elemencie `form` element `input type="number"`, który jest kontrolowanym elementem formularza, a użytkownik podaje w nim swój wiek.

Renderuje również komponent `AdultStuffBox`, przekazując mu przez `props` atrybut `age`, który jest aktualnym wiekiem wpisanym w `input`.

Komponent `AdultStuffBox` wyświetla "Lorem ipsum, treść dla pełnoletnich.". Jeżeli natomiast okaże się, że wartość przekazana w `props` jako `age` jest mniejsza niż 18, to blokuje swoje wyświetlanie.



## Zadanie 3

Stwórz komponent `DynamicLego`, który renderuje w elemencie `form` element `input type="number"`, który jest kontrolowanym elementem formularza, a użytkownik podaje w nim ilość klocków do wyświetlania.

Renderuje również element `ul`. W elemencie `ul` ma się znajdować dokładnie tyle elementów `li`, ile aktualnie podał użytkownik w `input`. **Pamiętaj o wybraniu odpowiedniego klucza.**

Każdy element `li` ma mieć następujący styl:

- Kolor tła: czerwony,

- Wysokość: 50px,

- Szerokość: numer elementu * 50px (przykładowo, pierwszy klocek będzie miał 50px, drugi 100px, trzeci 150px itd).

Wyrenderuj i przetestuj swój komponent. Zauważ, jak zachowują się aktualizacje, kiedy zmieniasz liczbę elementów - czy działa to prawidłowo (nie ma niepotrzebnych aktualizacji)?

