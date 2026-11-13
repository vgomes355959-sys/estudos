const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

let soma = 0;
let i = 1;

do {
    soma = soma + i;
    i++;
} while (i <= numero);

console.log("A soma é: " + soma);