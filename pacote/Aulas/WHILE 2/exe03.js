
const prompt = require("prompt-sync")();

let continuar = "s";

while (continuar === "s") {
    let quantidade = Number(
        prompt("Quantos números deseja analisar? ")
    );

    while (!Number.isInteger(quantidade) || quantidade <= 0) {
        console.log("Digite uma quantidade inteira maior que zero!");
        quantidade = Number(
            prompt("Quantos números deseja analisar? ")
        );
    }

    let soma = 0;
    let maior;
    let menor;

    for (let i = 1; i <= quantidade; i++) {
        let numero = Number(
            prompt("Digite o " + i + "º número: ")
        );

        soma += numero;

        if (i === 1) {
            maior = numero;
            menor = numero;
        } else {
            if (numero > maior) {
                maior = numero;
            }

            if (numero < menor) {
                menor = numero;
            }
        }
    }

    let media = soma / quantidade;

    console.log("\n--- RESULTADOS DA ANÁLISE ---");
    console.log("Soma: " + soma);
    console.log("Média: " + media);
    console.log("Maior número: " + maior);
    console.log("Menor número: " + menor);

    continuar = prompt(
        "\nDeseja realizar uma nova análise? (s/n): "
    ).toLowerCase();
}

console.log("Programa encerrado!");
