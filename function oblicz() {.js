function oblicz() {
    let a = document.getElementById("liczba1").value;
    let b = document.getElementById("liczba2").value;
    let dzialanie = document.getElementById("dzialanie").value;

    let wynikPole = document.getElementById("wynik");
    let komunikat = document.getElementById("komunikat");
    let obrazek = document.getElementById("obrazek");

    a = Number(a);
    b = Number(b);

    // Sprawdzenie poprawności
    if (isNaN(a) || isNaN(b)) {
        komunikat.innerText = "Podaj poprawne liczby!";
        wynikPole.innerText = "Wynik: -";
        obrazek.src = "error.png";
        return;
    }

    let wynik;

    switch (dzialanie) {
        case "+":
            wynik = a + b;
            break;
        case "-":
            wynik = a - b;
            break;
        case "*":
            wynik = a * b;
            break;
        case "/":
            wynik = b !== 0 ? a / b : "Nie dziel przez 0!";
            break;
    }

    wynikPole.innerText = "Wynik: " + wynik;

    // Jeśli wynik nie jest liczbą (np. dzielenie przez 0)
    if (typeof wynik !== "number") {
        komunikat.innerText = wynik;
        obrazek.src = "error.png";
        return;
    }

    // Parzystość
    if (wynik % 2 === 0) {
        komunikat.innerText = "Wynik jest parzysty";
        obrazek.src = "parzysta.png";
    } else {
        komunikat.innerText = "Wynik jest nieparzysty";
        obrazek.src = "nieparzysta.png";
    }
}