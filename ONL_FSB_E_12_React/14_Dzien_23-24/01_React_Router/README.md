![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

Upewnij się, że masz już zainstalowaną paczkę `react-router-dom` i prawidłowo skonfigurowany webpack (zobacz szczegóły w prezentacji "Konfiguracja").

Aby zainstalować React Router z npm wykonaj w katalogu projektu tę komendę:

`npm i react-router-dom --save`


Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka renderuje komponent `Main`, w którym jest `h1` z napisem "Witaj na stronie";
- `/about/us` - ścieżka renderuje komponent `AboutUs`, w którym jest `p` z napisem "Trochę więcej o nas...";
- `/about/company` - ścieżka renderuje komponent `AboutCompany`, w którym jest `p` z napisem "Trochę więcej na temat firmy...".

Wszystkie ścieżki korzystają z szablonu głównego, który zawiera w `div` element `h1` z napisem "Aplikacja React z React Router" i treść renderowaną przez dzieci.
 
Dodatkowo, ścieżki zaczynające się od `/about` mają dodatkowy, własny szablon, który zawiera w `div` element `h2` z napisem "O nas" i treść renderowaną przez dzieci.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki.



## Zadanie 2

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka renderuje komponent `Home`, w którym jest `h1` z napisem "Witaj na stronie";
- `/blog` - ścieżka renderuje komponent `Blog`, w którym jest `h1` z napisem "Blog";
- `/pricing` - ścieżka renderuje komponent `Pricing`, w którym jest `h1` z napisem "Cennik".

Wszystkie ścieżki korzystają z szablonu głównego, który zawiera w `div` element `h1` z napisem "Aplikacja React z React Router" i element `ul` z linkami do każdej z podstron oraz treść renderowaną przez dzieci.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki.



## Zadanie 3

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka główna, z powitaniem;
- `/hello/:name` - ścieżka renderuje komponent `HelloYou`, w którym jest `h1` z napisem "Witaj, {name}", gdzie `{name}` to imię wpisane w ścieżkę;
- `/checkage/:age` - ścieżka renderuje komponent `CheckAge`, w którym jest `h1` z napisem "Pełnoletni", jeżeli w `age` podano wiek min. 18, w przeciwnym wypadku renderuje napis "Niepełnoletni".

Na każdej podstronie wyświetl menu, do 3 przykładowych ścieżek (`/`, `/hello/Jan`, `/checkage/50`). Zaznaczone linki mają być pogrubione.



## Zadanie 4

Przerób zadanie 2 tak, aby każdy zaznaczony link miał zieloną ramkę.

Stosuj `NavLink`, zamiast `Link`, żeby ominąć możliwe kłopoty z kolorowaniem linków, które nie są dokładnie takie, jakie powinny być.
Pamiętaj o parametrze `exact`.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki i ich wygląd.
