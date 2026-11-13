const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

let i = 1;

while (i <= 10) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    i++;
}
