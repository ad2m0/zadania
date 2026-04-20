alert('Cześć! Za chwilę utworzysz swoją wizytówkę.');

let imie = prompt("Podaj swoje imię:");
let nazwisko = prompt("Podaj swoje nazwisko:");


let decyzja = confirm(imie + " " + nazwisko + ", teraz już znamy Twoje imię jak i nazwisko. Podaj nam teraz adres i nr telefonu do skompletowania wizytówki.");

if (decyzja) {
    adres = prompt("Podaj nam teraz adres zamieszkania...");
    alert("Super I ostatnia prosta — podaj nr telefonu :)");
    telefon = prompt("Podaj nr telefonu...");
    alert("Okej, teraz wyświetlimy Twoją wizytówkę!");
} else {
}
document.write(
    "=== Twoja wizytówka ===\n" +
     "Imię: " + imie + "\n" +
    "Nazwisko: " + nazwisko + "\n" +
    "Adres: " + adres + "\n" +
    "Telefon: " + telefon + "\n" +
    "-----------------------------"
);
