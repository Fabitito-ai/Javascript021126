let prix = Number(prompt("Quel est le prix unitaire (en €) ?"));
let quantite = Number(prompt("Quelle quantité ?"));

let total = prix * quantite;

if (total > 50) {
    total = total * 0.9;   // réduction de 10 %
}

alert("Total à payer : " + total + " €");