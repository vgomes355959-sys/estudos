const prompt = require('prompt-sync')();

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

verificarTemperatura();