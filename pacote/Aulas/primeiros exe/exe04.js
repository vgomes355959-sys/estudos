// Lê o preço do produto
let preco = Number(prompt("Digite o preço do produto:"));

// Lê a quantidade comprada
let quantidade = Number(prompt("Digite a quantidade:"));

// Calcula o valor total
let total = preco * quantidade;

// Mostra o resultado
console.log("Total = R$ " + total.toFixed(2));