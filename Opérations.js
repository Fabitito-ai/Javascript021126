// Les 5 opérations arithmétiques + - / * % (modulo)

let n1 = 12;
let n2 = 45;
let n3 = 2.3;

console.log(n1 + n2);
console.log(n3 - n2);
console.log(n1 * n2);
console.log(n2 / n3);
console.log(n2 % n1);

console.log("n1 vaut " + n1);

// L'addition des différents cas
console.log(12 + 12);     // 24     : number + number = number
console.log("12" + 12);   // "1212" : le number est converti en string + concaténation
console.log("5" * 6);     // 30     : le string est converti en nombre car c'est une multiplication

// concaténation = collage de 2 strings
console.log("Bonjour " + "les amis");

// Gabarit de chaîne 
console.log('la valeur de n1 est ${n1}')
console.log("la valeur de n1 est " + n1); 