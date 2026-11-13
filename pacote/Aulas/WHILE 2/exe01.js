
const prompt = require("prompt-sync")();

let continuar = "s";

while (continuar === "s") {
    let soma = 0;

    for (let i = 1; i <= 3; i++) {
        let numero = Number(prompt("Digite o " + i + "º número: "));
        soma += numero;
    }

    console.log("A soma dos três números é: " + soma);

    continuar = prompt("Deseja realizar outra operação? (s/n): ")
        .toLowerCase();
}

console.log("Programa encerrado!");

