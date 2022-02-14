![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

Stwórz komponent `WhoIsPresent`. Ma on renderować w elemencie `form` elementy `select` oraz listę `ul`.

`ul` ma być na początku pusty.

`select` ma zawierać do wyboru pozycje z tej tablicy:

```JavaScript

['Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa'];

```

Po wybraniu dowolnego elementu z `select` zostaje on przeniesiony do listy `ul`, tzn. pojawia się jako `li` w `ul`, natomiast przestaje być widoczny w elemencie `select`.



## Zadanie 2

Stwórz komponent `Notes`. Ma on renderować w elemencie `form` elementy `textarea`, `button` oraz `span`.

`textarea` ma być kontrolowanym elementem formularza. Ma wyświetlać to, co wpisuje użytkownik. Dodatkowo, treść wpisana przez użytkownika pokazuje się również w elemencie `span`.

Kliknięcie na `button` ma wyczyścić wpisywany tekst.



## Zadanie 3

Stwórz komponent `Register`. Komponent ma składać się z formularza `form`, przycisku `Zapisz` i szeregu pól:

Dane osobowe

- Imię i Nazwisko `input[text]` (min. 5 znaków)

- Email `input[email]` (min. 3 znaki i znak `@`)

- Hasło `input[password]` (min. 4 znaki)

- Powtórz hasło `input[password]` (min. 4 znaki, takie samo jak pierwsze hasło)

- Płeć `select`

Dane do wysyłki

- Adres `input[text]` (min. 3 znaki)

- Kod pocztowy `input[text]` (5 znaków (bez myślnika - wtedy same cyfry) lub 6 znaków z myślnikiem jako trzecim znakiem)

- Miasto `input[text]` (min. 2 znaki)

Każde z tych pól należy zwalidować po kliknięciu Wyślij zgodnie z regułami, które są podane.

Jeżeli nie ma błędów, należy wyświetlić podsumowanie wszystkich danych pod lub obok formularza.

Jeżeli pojawiły się błędy, należy je wyświetlić użytkownikowi na ekranie (nie w konsoli) i nie renderować podsumowania.

