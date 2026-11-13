const prompt = require('prompt-sync')();

let velocidade = Number(prompt("Digite a velocidade: "));

switch (true) {
    case velocidade < 0:
        console.log("Digite uma velocidade válida");
        break;

    case velocidade <= 40:
        console.log("Velocidade baixa");
        break;

    case velocidade >= 41 && velocidade < 61:
        console.log("Velocidade normal");
        break;

    case velocidade >= 61 && velocidade <= 80:
        console.log("Velocidade alta");
        break;

    default:
        console.log("Multado por excesso de velocidade");
        break;
}

