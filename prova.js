let num1 = parseInt(prompt("Inserisci il primo numero:"));
let num2 = parseInt(prompt("Inserisci il secondo numero:"));

let vincitore

if (num1 > num2) {
    vincitore = num1
} else {
    vincitore = num2
}

alert("Il numero più grande è : " + vincitore);

