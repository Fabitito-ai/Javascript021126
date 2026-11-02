let prix = parseFloat(prompt("Prix ?"));
let quantite = parseFloat(prompt("Nombre d'articles ?"));

let total = prix * quantite;

if (total > 50) {
    total = total * 0.9;
}

alert(`Total à payer : ${total} €`);