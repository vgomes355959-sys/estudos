const prompt = require("prompt-sync")();

let maior = 0;

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt("Digite o " + i + "º número: "));

    if (numero > maior) {
        maior = numero;
    }
}

console.log("O maior número digitado foi: " + maior);
