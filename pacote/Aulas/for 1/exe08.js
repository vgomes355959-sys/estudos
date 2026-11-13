
const prompt = require("prompt-sync")();

let soma = 0;

for (let i = 1; i <= 4; i++) {
    let nota = Number(prompt("Digite a nota " + i + ": "));
    soma = soma + nota;
}

let media = soma / 4;

console.log("Média final: " + media);