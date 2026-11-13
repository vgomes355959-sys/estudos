const prompt = require("prompt-sync")();

let numeroEscolhido = Number(prompt("Digite um numero: "));

console.log("numero:");

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= numeroEscolhido);