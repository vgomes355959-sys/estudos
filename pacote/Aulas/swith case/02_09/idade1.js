const prompt = require('prompt-sync')();

let idade = Number(prompt("Digite a idade: "));

switch (true) {
    case idade < 0:
        console.log("Digite uma idade válida");
        break;

    case idade < 12:
        console.log("Criança");
        break;

    case idade >= 12 && idade < 18:
        console.log("Adolescente");
        break;

    case idade >= 18 && idade < 59:
        console.log("Adulto");
        break;

    default:
        console.log("Idoso");
        break;
}
