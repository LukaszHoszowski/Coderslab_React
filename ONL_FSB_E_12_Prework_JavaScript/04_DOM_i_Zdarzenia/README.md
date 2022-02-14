![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

* Stwórz funkcję ```getTags(elements)```, do której przekaż jako argument zmienną ```childElements``` (pamiętaj o tym, że jest to pseudotablica)
* stwórz w funkcji nową tablicę i wypełnij ją nazwami tagów pobranymi z elementów znajdujących się w ```childElements```
* zwróć tę tablicę.

## Zadanie 2

Na stronie znajdują się trzy elementy `div`. Napisz **jeden** wspólny event dla nich wszystkich, który będzie zmieniał kolor tła tylko w klikniętym **divie**. Użyj do tego słowa kluczowego ```this```.

**Hint**: Żeby uzyskać losowy kolor, użyj poniższego kodu:
```JavaScript
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```

## Zadanie 3

Na stronie znajduje się tabela z wynikami w lokalnych mistrzostwach piłkarskich. Poniżej znajduje się formularz, który wypełniają wszyscy sędziowie po ukończonych rozgrywkach.

Napisz kod JavaScript w taki sposób, żeby po wybraniu odpowiednich drużyn nastąpiła walidacja:

1. Obie drużyny **muszą być różne**.
2. Liczba goli **powinna być nieujemna**.

Jeżeli formularz zostanie zweryfikowany poprawnie, odpowiednia informacja o wyniku spotkania powinna pojawić się w tabeli jako kolejny wiersz.