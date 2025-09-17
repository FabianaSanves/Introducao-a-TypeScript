const prompt = require('prompt-sync')();

const n1 = Number(prompt('Digite a primeira nota: '));
const n2 = Number(prompt('Digite a segunda nota: '));
const media: number = (n1 + n2) / 2;

console.log(`A média é: ${media}`);

    if (media >= 7.0) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }