const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));
let soma = 0;
let i = 1;

while (i <= numero) {
    soma = soma + i;
    i++;
}

console.log("A soma é: " + soma);
