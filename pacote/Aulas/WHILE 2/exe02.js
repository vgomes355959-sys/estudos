
const prompt = require("prompt-sync")();

let continuar = "s";

while (continuar === "s") {
    let quantidade = Number(prompt("Quantos números deseja analisar? "));
    let soma = 0;

    for (let i = 1; i <= quantidade; i++) {
        let numero = Number(prompt("Digite o " + i + "º número: "));
        soma += numero;
    }

    let media = soma / quantidade;

    console.log("Soma dos números: " + soma);
    console.log("Média dos números: " + media);

    continuar = prompt("Deseja realizar uma nova análise? (s/n): ")
        .toLowerCase();
}

console.log("Programa encerrado!");
