const prompt= require("prompt-sync")();
// Lê três notas do aluno
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));


// Calcula a SOMA
let soma = nota1 + nota2;

// Mostra a SOMA
console.log("Soma = " + soma);