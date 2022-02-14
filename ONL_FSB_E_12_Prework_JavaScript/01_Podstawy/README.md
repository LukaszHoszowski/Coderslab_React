![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

Stwórz zmienną `numberOfUsers` i podstaw pod nią dowolną liczbę. Następnie stwórz nową zmienną `result` i podstaw pod nią wynik dzielenia `numberOfUsers` przez 2. Zaokrąglij wynik w dół i wypisz w konsoli.

## Zadanie 2

Wylosuj liczbę z zakresu 5 - 100 i wypisz ją w konsoli.

Skorzystaj ze wzoru:
```js
Math.floor(Math.random() * (max - min + 1) + min)
```

> Pod `max` i `min` wstaw odpowiednie wartości, albo stwórz zmienne o takiej nazwie, które będą miały określone wartości.

## Zadanie 3

Zapisz do zmiennej `mail`, dowolny adres email. Następnie za pomocą odpowiedniej metody dla stringów sprawdź, czy znajduje się w nim znak `@`.

## Zadanie 4

Wylosuj liczbę z zakresu 1 - 10 i zapisz do zmiennej. Za pomocą metody `prompt()` poproś użytkownika o wpisanie liczby od 1 do 10. Jeśli użytkownik wpisał liczbę taką samą, jaką wylosował komputer - wypisz w konsoli informacje "Brawo!", jeśli inną - "Spróbuj jeszcze raz!".

## Zadanie 5

Napisz funkcję `rockPaperScissors(player1, player2)`, która będzie pobierać dwa napisy i na ich podstawie zwracać informacje, kto wygrał. Poprawne napisy przyjmowane przez funkcję to: papier, nożyce, kamień.

Funkcja ma zwracać jeden z czterech napisów:
* "Gracz 1 wygrał",
* "Gracz 2 wygrał",
* "Remis",
* "Błędne informacje".

Przykład:
```JavaScript
input -> "papier", "nożyce"
output -> "Gracz 2 wygrał"
```