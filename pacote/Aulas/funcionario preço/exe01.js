
const prompt = require('prompt-sync')();

const produto = {
    nome: prompt("Nome do produto: "),
    preco: Number(prompt("Preço unitário: ")),
    quantidade: Number(prompt("Quantidade em estoque: "))
};

produto.valorTotal = produto.preco * produto.quantidade;

console.log("\n--- DADOS DO PRODUTO ---");
console.log("Nome:", produto.nome);
console.log("Preço: R$", produto.preco.toFixed(2));
console.log("Quantidade:", produto.quantidade);
console.log("Valor total em estoque: R$", produto.valorTotal.toFixed(2));

