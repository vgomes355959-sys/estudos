const prompt = require("prompt-sync")();

let compra = Number(prompt("Digite o valor do produto: "));
let desconto10 = 0.10;
let desconto20 = 0.20;
let desconto30 = 0.30;
let valorFinal;

switch (true) {
    case compra > 50 && compra <= 100:
        valorFinal = compra - (compra * desconto10);
        console.log("Tem desconto de 10%!");
        break;

    case compra > 100 && compra <= 200:
        valorFinal = compra - (compra * desconto20);
        console.log("Tem desconto de 20%!");
        break;

    case compra > 200:
        valorFinal = compra - (compra * desconto30);
        console.log("Tem desconto de 30%!");
        break;

    default:
        valorFinal = compra;
        console.log("Não houve desconto.");
}

console.log("Valor final da compra: R$ " + valorFinal);
