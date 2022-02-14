![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

Stwórz komponent `AnotherColor`, który przechowuje kolor do wyświetlenia jako **stan lokalny**. Niech kolor będzie domyślnie nastawiony na "yellow".

Komponent ma wyrenderować ten element `div` z tłem ustawionym na to ze stanu lokalnego.

Dodaj do swojego komponentu timer, który po 5 sekundach zmieni ten kolor na "blue". **Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**



## Zadanie 2

> To zadanie pozwoli Ci stworzyć grę matematyczną.
> Do wykonania zadania będzie Ci potrzebne kilka rzeczy.
> Losowanie dowolnego elementu z tablicy:
> ```JavaScript
> items[Math.floor(Math.random()*items.length)]
> ```
>
> Losowanie losowej liczby całkowitej z przedziału:
> ```JavaScript
> Math.floor(Math.random() * (max - min) + min )
> ```
>
> Funkcja do losowego układania kolejności w tablicy (shuffle):
> ```JavaScript
> function shuffle(a) {
>   for (let i = a.length; i; i--) {
>     let j = Math.floor(Math.random() * i);
>     [a[i - 1], a[j]] = [a[j], a[i - 1]];
>   }
> }
> ```
> Użycie: przekazujesz tablicę, zostanie ona zmodyfikowana - elementy będą w losowych miejscach.


Stwórz komponent **funkcyjny** `MathQuestionGame`.

Na początku wylosuj jedno z działań: **dodawanie, odejmowanie lub mnożenie**. Wylosuj również **dwie liczby całkowite z przedziału 1-10**. Wykonaj wylosowane działanie matematyczne pomiędzy dwoma wylosowanymi liczbami, przechowaj wynik.

Wygeneruj 4 przyciski które będą osobnymi komponentami `Button`, w tym 3 z losowymi liczbami **innymi niż poprawny wynik** (możesz użyć np. pętli while by upewnić się, że nie zostanie wysolowany poprawny wynik) oraz 1 przycisk z poprawną odpowiedzią. Przyciski przechowuj w formie tablicy, którą następnie przetasujesz (zob. wyżej funkcję shuffle) i wyrenderujesz w komponencie.

Pamiętaj o przekazaniu do komponentu `Button` odpowiedniej funkcji dzięki której rozpoznasz co nacisnął użytkownik!

Gra wyświetlać się ma w takiej strukturze (przykład):
```HTML
<div>
  <h1>2 * 3 =</h1>
  <div>
    <button>3</button>
    <button>6</button>
    <button>8</button>
    <button>7</button>
  </div>
  <h3>00:08</h3>
</div>
```

Gracz ma mieć 10 sekund na udzielenie prawidłowej odpowiedzi. Uruchom timer / interval. **Pamiętaj, aby zrobić to w odpowiedniej metodzie cyklu życia, a także aby zwolnić zasoby.**

Zasady:
- Po kliknięciu na prawidłowy przycisk element `h1` zamieni napis na "Gratulacje!";
- Po kliknięciu na nieprawidłowy przycisk element `h1` zamieni napis na "Błędna odpowiedź :(";
- Jeśli czas minie zanim zostanie kliknięty jakiś przycisk, element `h1` zamieni napis na "Czas minął!". Zabezpiecz też przyciski aby nie można ich było klikać po czasie.


