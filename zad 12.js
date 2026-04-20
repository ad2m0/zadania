<script>
// pytanie o imię
const imie = prompt("Jak masz na imię?");

// pytanie o wiek
const wiek = Number(prompt("Ile masz lat?"));

// sprawdzanie wieku
if (wiek < 18) { 
    alert(`Cześć, ${imie}!\nJesteś jeszcze niepełnoletni.`);
} else {
    alert(`Cześć, ${imie}!\nJesteś pełnoletni.`);
}
</script>
