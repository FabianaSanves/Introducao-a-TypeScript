const prompt = require('prompt-sync')();

const valor: number = Number(prompt('Digite um valor em R$: '));
const cotacao: number = Number(prompt('Digite a cotação do Dólar: '));
const valorEmDolar: number = valor/cotacao;

console.log(`Valor em Dólar é: U$ ${valorEmDolar.toFixed(2)}`);