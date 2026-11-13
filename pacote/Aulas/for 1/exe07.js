const prompt = require("prompt-sync")();

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt("Digite o " + i + "º número: "));
    soma = soma + numero;
}

console.log("A soma é: " + soma);

