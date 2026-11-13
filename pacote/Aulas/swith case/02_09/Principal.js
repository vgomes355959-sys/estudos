const prompt = require("prompt-sync")();

console.log("===== ESCOLHA UMA SITUAÇÃO =====");
console.log("");
console.log("1 - Cálculo de idade");
console.log("");
console.log("2 - Cálculo de velocidade");
console.log("");
console.log("3 - Preço do produto");
console.log("");
console.log("4 - Conversão de temperatura");
console.log("");

let opcao = prompt("Digite uma opção: ");

switch (opcao) {
    case "1":
        require("./idade1.js");
        break;

    case "2":
        require("./velocidade.js");
        break;

    case "3":
        require("./precoproduto.js");
        break;

    case "4":
        require("./temperatura.js");
        break;

    default:
        console.log("Opção inválida!");
}