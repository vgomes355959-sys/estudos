const prompt = require("prompt-sync")();

let maior = 0;
let i = 1;

while (i <= 5) {
    let numero = Number(prompt("Digite o " + i + "º número: "));

    if (numero > maior) {
        maior = numero;
    }

    i++;
}

console.log("O maior número digitado foi: " + maior);
