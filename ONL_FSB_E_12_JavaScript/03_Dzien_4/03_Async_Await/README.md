![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - do wykonania z wykładowcą

Wykorzystując `async/await` i `fetch` wykonaj zapytanie na adres otwartego API:

```plain
https://jsonplaceholder.typicode.com/todos/1
```

W odpowiedzi otrzymasz obiekt zawierający klucze `userId`, `id`, `title` i `completed`.

Na podstawie tej odpowiedzi i klucza `userId` pobierz wszystkie informacje o użytkowniku, który stworzył dane todo:

```plain
https://jsonplaceholder.typicode.com/users/:userId
```

Do odpowiednich elementów w HTML dodaj następujące informacje na podstawie pobranych danych:

- `title` - dodaj jako tekst do `$title`
- `completed` - na podstawie wartości (`true`/`false`) do elementu `$completed` wpisz tekst "Zrobione" lub "Nie zrobione" a także dodaj klasę `badge-success` lub `badge-danger`
- `name` z obiektu użytkownika dodaj jako tekst elementu `$author`


## Zadanie 2

W pliku jest stworzona funkcja `asyncAction` która zwraca obiekt typu `Promise`. Twoim zadaniem jest z użyciem `async/await` uruchomić tego Promisa i obsłużyć błędy, które może on generować. 

Wartość powinna zostać wpisana do elementu HTML `#random-value` a w przypadku błędu, informacja o tym ma zostać wpisana do elementu `#message`.

## Zadanie 3

Skorzystaj z API:

```plain
https://randomuser.me/api/
```

i na podstawie jego wyniku wypisz kilka informacji o danej osobie:

- Zdjęcie (`.card-img-top`)
- Imię i Nazwisko (`.card-title`)
- Email (`.card-text`)

