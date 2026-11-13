const prompt = require("prompt-sync")();


function calcularIdade() {
    let idade = Number(prompt("Digite a idade: "));
    if (idade < 0) console.log("Digite uma idade válida");
    else if (idade < 12) console.log("Criança");
    else if (idade < 18) console.log("Adolescente");
    else if (idade < 59) console.log("Adulto");
    else console.log("Idoso");
}

function calcularVelocidade() {
    let d = Number(prompt("Distância (km): "));
    let t = Number(prompt("Tempo (h): "));
    console.log(`Velocidade: ${t > 0 ? (d/t).toFixed(2) : "Tempo inválido"} km/h`);
}

function calcularPreco() {
    let compra = Number(prompt("Valor do produto: "));
    let desc = compra > 200 ? 0.3 : compra > 100 ? 0.2 : compra > 50 ? 0.1 : 0;
    let final = compra - (compra * desc);
    console.log(`Desconto de ${desc * 100}% | Valor final: R$ ${final.toFixed(2)}`);
}

function verificarTemperatura() {
    let temperatura = Number(prompt("Digite a temperatura: "));

    switch (true) {
        case temperatura < 10:
            console.log("temperatura muito fria");
            break;
        case temperatura >= 10 && temperatura <= 19:
            console.log("temperatura fria");
            break;
        case temperatura >= 20 && temperatura <= 29:
            console.log("temperatura agradável");
            break;
        case temperatura >= 30 && temperatura <= 39:
            console.log("temperatura quente");
            break;
        default:
            console.log("temperatura muito quente");
    }
}

console.log("===== ESCOLHA UMA SITUAÇÃO =====");
console.log("");
console.log("1 - Cálculo de idade");
console.log("2 - Cálculo de velocidade");
console.log("3 - Preço do produto");
console.log("4 - Classificação de temperatura");
console.log("");

let opcao = prompt("Digite uma opção: ");

switch (opcao) {
    case "1":
        calcularIdade();
        break;

    case "2":
        calcularVelocidade();
        break;

    case "3":
        calcularPreco();
        break;

    case "4":
        verificarTemperatura();
        break;

    default:
        console.log("Opção inválida!");
}