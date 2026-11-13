const prompt = require("prompt-sync")();

let positivos = 0;
let negativos = 0;
let zeros = 0;

for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt("Digite o número " + i + ": "));

    if (numero > 0) {
        positivos++;
    } else if (numero < 0) {
        negativos++;
    } else {
        zeros++;
    }
}

console.log("Números positivos: " + positivos);
console.log("Números negativos: " + negativos);
console.log("Números iguais a zero: " + zeros);