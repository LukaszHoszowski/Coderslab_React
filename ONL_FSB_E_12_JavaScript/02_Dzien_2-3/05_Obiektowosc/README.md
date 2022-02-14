![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 



### Część 1

Stwórz klasę `Duck`.
Będzie to klasa abstrakcyjna, z której będą dziedziczyć inne kaczki.
Stwórz wewnątrz tej klasy konstruktor i metody:
- `constuctor` - którego zadaniem będzie ustawienie typu kaczki na “zwykła kaczka” np. `this.type = “zwykla”`
- `quack()` - wypisuje “kwa kwa”
- `swim()` - wypisuje “płynę…"”
- `print()` - wypisuje "Wygląda jak zwykla kaczka". Skorzystaj z ustawienia type do wypisania typu kaczki.

Stwórz obiekt `duck`. Wywołaj dla niego wszystkie metody.

---

### Część 2

Na bazie klasy `Duck` stwórz kolejną o nazwie `WildDuck`.

Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody `print()` typ kaczki zmienił się na "dzika".
Stwórz obiekt `wildDuck`.

Wywołaj dla niego wszystkie metody.

---

### Część 3

Z klasy Duck mogą dziedziczyć wszytkie kaczki.
Twoim zadaniem teraz jest dodanie do odpowiedniej klasy metody `fly()`.
Metoda ma wypisywać w konsoli tekst `Kaczka ${type} leci`.