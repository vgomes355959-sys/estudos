const prompt = require("prompt-sync")();
let numeroEscolhido = Number(prompt("Digite um numero: "));
console.log("numero:")

for (let i = 1; i <= numeroEscolhido; i++) {
    console.log(i);
}
