const prompt = require("prompt-sync")();

let soma = 0;
let i = 1;

do {
    let numero = Number(prompt("Digite o " + i + "º número: "));

    soma = soma + numero;
    i++;
} while (i <= 5);

console.log("A soma é: " + soma);