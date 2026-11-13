
const prompt = require('prompt-sync')();

const funcionario = {
    nome: prompt("Nome do funcionário: "),
    cargo: prompt("Cargo: "),
    salario: Number(prompt("Salário atual: "))
};

funcionario.aumento = funcionario.salario * 0.10;
funcionario.novoSalario = funcionario.salario + funcionario.aumento;

console.log("\n--- DADOS DO FUNCIONÁRIO ---");
console.log("Nome:", funcionario.nome);
console.log("Cargo:", funcionario.cargo);
console.log("Salário atual: R$", funcionario.salario.toFixed(2));
console.log("Aumento: R$", funcionario.aumento.toFixed(2));
console.log("Novo salário: R$", funcionario.novoSalario.toFixed(2));
