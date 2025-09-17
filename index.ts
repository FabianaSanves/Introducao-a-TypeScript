let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

//Tipos primitivos
let nome: string = "Fabiana";
let idade: number = 28;
let ativo: boolean = true;
let notas: number[] = [7, 8, 9];

//Inferência de tipos
let cidade = "Florianópolis";
// TS infere automaticamente: string
// cidade = 123 -> erro!