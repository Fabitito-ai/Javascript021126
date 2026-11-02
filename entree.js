// Entrée : récupérer un valeur fournie par un utilisateur / un dispositif
// Une seule instruction : prompt 

// Affiche avec un pop up avec un message
alert ("un pop-up");

prompt("Quel est votre nom");

// Récupérer les valeurs saisies par l'utilisateur
let nom = prompt("Quel est votre nom ?");
console.log(nom);

// prompt retourne toujours une string
let nombre1 = prompt("Veuillez entrer un nombre");
console.log(typeof nombre1);   // "string"

let nombre2 = Number(prompt("Veuillez entrer un nombre"));
console.log(typeof nombre2);   // "number"