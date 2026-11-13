const prompt= require("prompt-sync")();
// Lê três notas do aluno
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

// Calcula a média aritmética
let media = (nota1 + nota2 + nota3) / 3;

// Mostra a média
console.log("Média = " + media);