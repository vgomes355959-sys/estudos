const prompt = require("prompt-sync")();


function calcularDesconto(compra) {
    let desconto10 = 0.10;
    let desconto20 = 0.20;
    let desconto30 = 0.30;
    let valorFinal;
    let mensagem;

    switch (true) {
        case compra > 50 && compra <= 100:
            valorFinal = compra - (compra * desconto10);
            mensagem = "Tem desconto de 10%!";
            break;

        case compra > 100 && compra <= 200:
            valorFinal = compra - (compra * desconto20);
            mensagem = "Tem desconto de 20%!";
            break;

        case compra > 200:
            valorFinal = compra - (compra * desconto30);
            mensagem = "Tem desconto de 30%!";
            break;

        default:
            valorFinal = compra;
            mensagem = "Não houve desconto.";
            break;
    }

    return { valorFinal, mensagem };
}


function main() {
    let compra = Number(prompt("Digite o valor do produto: "));
    
    let resultado = calcularDesconto(compra);
    
    console.log(resultado.mensagem);
    console.log("Valor final da compra: R$ " + resultado.valorFinal.toFixed(2));
}

main();