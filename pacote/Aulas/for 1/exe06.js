const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));
let soma = 0;

for (let i = 1; i <= numero; i++) {
    soma = soma + i;
}

console.log("A soma é: " + soma);
