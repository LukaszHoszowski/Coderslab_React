![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

Dołącz polyfill `fetch()`.

Stwórz komponent `BookInfo`, który przez props przyjmuje ISBN książki (`isbn`).

Za pomocą `fetch()` wykonaj zapytanie na adres otwartego API:
 > `https://www.googleapis.com/books/v1/volumes?q=isbn:{numerISBN}`

gdzie zamiast `numerISBN` podasz ISBN przekazany w props.

Otrzymasz w odpowiedzi JSON, a z niego obiekt, w którym interesuje Cię tablica pod kluczem `items`, a w niej pierwszy element - obiekt z informacją o książce.

Niech komponent wyrenderuje w `div` element `h1` z tytułem (jest w tym obiekcie pod kluczem `volumeInfo.title`.

Pamiętaj o zablokowaniu wyświetlania komponentu dopóki nie otrzymasz odpowiedzi z serwera.

Przetestuj swój komponent w ten sposób:

```JS
<BookInfo isbn="0747532699" />
```



## Zadanie 2 - rozwiązywane z wykładowcą

Zadanie polega na wczytaniu danych z adresu: `https://pokeapi.co/api/v2/pokemon`
Przejdź przez zadanie korzystając z **debuggera**. Zwróć uwagę na to kiedy dane zostają wczytane?

Przydatne informacje:
* użyj odpowiedniej metody HTTP, jeśli jest potrzebna,
* użyj odpowiednich metod informujących użytkownika o statusie żądania (metody ```then()```, ```catch()```),
* sprawdź w konsoli, jak wyglądają wczytywane dane, czy jest to tablica, string, JSON?
* jeśli dane zostaną poprawnie wczytane, to wywołaj odpowiednią funkcję zmieniającą stan komponentu do której jako argument przekaż wczytane dane,
* komponent ma renderować w pętli elementy **li** do którego wstawisz nazwę pokemona 
* lista `ul` ma mieć klasę CSS: `.list`



## Zadanie 3

Stwórz komponent `Holidays`.

Pod adresem `https://fer-api.coderslab.pl/v1/holidays` jest przechowywana baza świąt państwowych różnych krajów.
Aby z niej skorzystać, należy przesłać specjalny klucz (`key`): `e92601251-c0a2-4s63-v73f-54041195480f`. API wymaga również podania kodu kraju (`country`). Do dyspozycji mamy trzy: 

- Polska (`PL`)
- Wielka Brytania (`GB`)
- Stany Zjednoczone (`US`)

| Zasób | Metoda | Dane | Opis |
| ----- | ------ | ---- | ---- |
| `/holidays` | `GET` | `key`, `country` | Pobranie świąt w danym kraju |
                       

Za pomocą funkcji ```fetch()``` wczytaj do elementu **ul** (o klasie `list`) wszystkie daty świąt (jako elementy li).
Aby poprawnie wczytać dane w funkcji ```fetch()``` trzeba w odpowiedni sposób skonstruować adres URL naszego żądania, np,: `https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL`.

Każdą nazwę święta wczytaj do elementu **li** jako element **h3.holiday-name**, a jego datę wczytaj do elementu **li** jako element **div.holiday-date**.

Podpowiedzi:
* Wczytaj dane i zobacz w konsoli jak wyglądają, pozwoli Ci to ustalić czego należy użyć, aby dostać się do nazw i dat świąt. Możesz tutaj wykorzystać też zakładkę Network.


### Dodatkowe

Niech komponent renderuje element `select` w którym będzie można wybrać z którego kraju mają pojawiać się święta. Wybór jakiegoś elementu `option` ma spowodować ponowne wysłanie zapytania i przerenderowanie komponentu. Domyślnie wybraną opcją ma być `PL`.

---
Dane pochodzą z serwisu: [https://holidayapi.com](https://holidayapi.com).
