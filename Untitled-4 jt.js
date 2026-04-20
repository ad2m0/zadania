// pytanie o imie
const imie = prompt("jak masz na imie?");


//pytanie o wiek
const wiek =Number(prompt("ile masz lat?"));


//sprawdzanie wieku
if (wiek <18 ){ 
    alert('cześć, ${imie}!\n Jesteś jeszcze nie pełnoletni');
} else{
    alert('cześć, ${imie}!\n Jesteś osoba pełnoletnia');
}