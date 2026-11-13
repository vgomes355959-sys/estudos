const prompt = require("prompt-sync")();

let a = Number(prompt("Digite o valor de A: "));
let b = Number(prompt("Digite o valor de B: "));

let c = a;
a = b;
b = c;

console.log("A =", a);
console.log("B =", b);