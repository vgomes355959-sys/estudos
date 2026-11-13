const prompt = require("prompt-sync")();

let positivos = 0;
let negativos = 0;
let zeros = 0;
let i = 1;

while (i <= 10) {
    let numero = Number(prompt("Digite o número " + i + ": "));

    if (numero > 0) {
        positivos++;
    } else if (numero < 0) {
        negativos++;
    } else {
        zeros++;
    }

    i++;
}

console.log("Números positivos: " + positivos);
console.log("Números negativos: " + negativos);
console.log("Números iguais a zero: " + zeros);
