const prompt = require("prompt-sync")();

let continuar;

do {
    let soma=0;

for (let i=1; i <=5;i++) {
let valor=

Number (prompt("Digite o "+i+" ° valor: "));
soma = soma + valor;
}

console.log("A soma dos valores é " + soma);

continuar=
Number(prompt("Digite 1 para continuar ou qualquer outro número para sair: "));

} while (continuar ==1);