const prompt = require("prompt-sync")();

let soma = 0;
let i = 1;

while (i <= 4) {
    let nota = Number(prompt("Digite a nota " + i + ": "));
    soma = soma + nota;
    i++;
}

let media = soma / 4;

console.log("Média final: " + media);
