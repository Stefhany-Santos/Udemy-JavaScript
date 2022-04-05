/* EXERCÍCIOS DE CONST E LET  */



const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let indiceMassaCorporal = peso / (altura * altura);
let anoNascimento = 2022 - 30; /* para descobrir a idade */


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`Tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} nasceu em ${anoNascimento}`);