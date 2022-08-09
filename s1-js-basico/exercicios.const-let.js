/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
*/

const nome = 'Hélio';
const sobrenome = 'Lopes';
const idade = 22;
const peso = 75;
const alturaEmM = 1.80;
const fezAniversario = false;

let imc = peso / (alturaEmM * alturaEmM); // peso / (altura * altura)
let anoNascimento = fezAniversario ? 2022 - idade: 2022 - idade - 1;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg\ntem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);