const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

let i = 1;

do {
    console.log(`${numero} x ${i} = ${numero * i}`);
    i++;
} while (i <= 10);