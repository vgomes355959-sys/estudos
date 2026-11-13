const prompt = require('prompt-sync')();

function classificarIdade(idade) {
    switch (true) {
        case idade < 0:
            return "Digite uma idade válida";
        case idade < 12:
            return "Criança";
        case idade >= 12 && idade < 18:
            return "Adolescente";
        case idade >= 18 && idade < 59:
            return "Adulto";
        default:
            return "Idoso";
    }
}

function main() {
    let idade = Number(prompt("Digite a idade: "));
    let resultado = classificarIdade(idade);
    console.log(resultado);
}


main();