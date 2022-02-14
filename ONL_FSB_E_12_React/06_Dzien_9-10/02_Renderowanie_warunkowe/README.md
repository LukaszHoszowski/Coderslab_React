![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

Stwórz komponent `MyButton`.

Ma on zawierać jeden przycisk, który wyświetla na początku "NIE". Po jego kliknięciu napis ma się zmienić na "TAK", po następnym kliknięciu z powrotem na "NIE" itd. **Aby wyświetlić odpowiedni tekst, użyj operatora trójargumentowego bezpośrednio wewnątrz JSX.**



## Zadanie 2

Stwórz komponent `NumberRandomInfo`, który co sekundę losuje liczbę od 0 do 5. Do losowania liczby skorzystaj ze wzoru:

```js
Math.ceil(Math.random() * 5);
```

W metodzie render zrób warunek, który sprawdzi wylosowaną liczbę. Jeżeli jest ona większa lub równa 3, to wyrenderuj tę liczbę oraz napis: "Większa lub równa 3". W przeciwnym wypadku wyrenderuj tę liczbę oraz napis: "Mniejsza od 3".


## Zadanie 3

Stwórz komponent `NumberInfo`, który przez props przyjmuje `number`.

Następnie, bezpośrednio wewnątrz JSX, korzystając z operatora trójargumentowego i operatora logicznego `&& ` wyrenderuj w elemencie `ul` następujące elementy listy:

- Liczba
- Parzysta / nieparzysta
- Liczba pierwsza (nie pojawia się jeżeli to nieprawda)
- Potęga liczby 2 (nie pojawia się jeżeli to nieprawda)

Wyrenderuj i przetestuj swój komponent kilka razy dla atrybutu `number`:

- 1
- 2
- 5
- 7
- 10
- 16
