![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)

# Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

## Jak zacząć?

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj fork repozytorium (stworzony w punkcie 1) na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres możesz znaleźć na stronie forka repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

### Poszczególne zadania rozwiązuj w odpowiednich plikach.

**Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.**


<img src="http://coderslab.pl/img/coderslab-logo.png" align="right" width="400"/>

# Projekt - Weather App

Celem warsztatu, jest przygotowanie aplikacji pogodowej, pozyskującej dane z ogólnodostępnych API. Pierwszym krokiem powinno być zapoznanie się ze strukturą projektu, układem plików, dokumentacjami API a także plikiem HTML.

![](images/screenshot.png)

### Struktura projektu:

```
css
  -- style.css (plik ze stylami)
js
  app.js (plik główny)

assets
  -- icons (ikony dla projektu)

index.html (plik główny aplikacji)
```



## Założenia
W aplikacji powinniśmy mieć możliwość odnalezienia współrzędnych konkretnego miejsca i na podstawie tych danych, wyświetlić aktualną i prognozowaną pogodę. Chcemy wyświetlać wszystkie niezbędne informacje:

- Aktualna temperatura
- Wilgotność
- Ciśnienie
- Prędkość wiatru
- Prognoza pogody na 5 dni w przód


W warsztacie tym należy korzystać z wszystkich udogodnień ES6, takich jak deklaracje zmiennych przez `const`, `let`, klasowość `class`, funkcje strzałkowe, `import/export`, `async/await`, `fetch` itd.

## Zasady działania

### Wejście na stronę
Po wejściu na stronę powinniśmy wysłać zapytanie do `Weather API` aby pobrać pogodę dla naszej aktualnej lokalizacji (parametr `q` musi mieć wartość `auto:ip` - jest to opisane niżej) i wyświetlić ją użytkownikowi.

![](images/weather-app-1.gif)


### Dodanie nowego miasta
Na stronie znajduje się przycisk "Dodaj miasto". Po jego kliknięciu powinniśmy wyświetlić ukryta sekcję z formularzem. Po wpisaniu przez użytkownika miasta czy całego adresu należy wykonać zapytanie do `Weather API`, aby pobrać aktualną pogodę i wyświetlić ją użytkownikowi (pole formularza nie może mieć polskich znaków - jest to ograniczenie API). Po pobraniu danych formularz powinien zniknąć.

![](images/weather-app-2.gif)


### Ukrywanie/Usuwanie modułu
Po kliknięciu przycisku "x" w prawym górnym rogu każdego modułu powinniśmy go ukryć. Jeżeli jest to moduł pogodowy, możemy go usunąć ze struktury HTML.

![](images/weather-app-3.gif)


## Przydatne informacje

### Efekt ładowania strony
Wystarczy, że dodacie do elementu `body` klasę `loading` a pojawi się na całym ekranie spinner który możecie zauważyć na nagraniach wyżej. Aby się go pozbyć, wystarczy usunąć klasę `loading` z elementu `body`.


### Ikony
W projekcie mamy zainstalowane ikony pogodowe które znajdziecie w folderze `assets/icons`.  

Dodatkowo możecie używać ikon Material-Icons. Listę tych ikon możecie znaleźć tutaj: [https://material.io/tools/icons](https://material.io/tools/icons).  
Używamy ich za pomocą:

```html
<i class="material-icons">nazwa_ikony</i>
```

## API

### Weather API

**Wymagany jest klucz API!**

API odpowiedzialne za dostarczenie nam aktualnej i prognozowanej pogody.

Należy się zarejestrować, **wygenerować swój klucz** i zapisać go w projekcie.

Pobranie klucza: [https://www.weatherapi.com](https://www.weatherapi.com)  

Pobranie aktualnej pogody i prognozy na 5 dni: 

```
http://api.weatherapi.com/v1/forecast.json?key=twoj_klucz&q=nazwa_miasta_lub_auto:ip&days=5
```

- Pod wartość `twoj_klucz` podstawiamy nasz klucz wygenerowany przez Weather API
- Pod wartość `nazwa_miasta_lub_auto:ip` podstawiamy wartość z pola wyszukiwarki (bez polskich znaków!) lub `auto:ip` aby otrzymać pogodę dla naszej aktualnej lokalizacji


