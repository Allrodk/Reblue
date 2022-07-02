console.clear();
const prompt = require("prompt-sync")();

const salario = +prompt("Digite o salário do colaborador: ");
let percentual = 5;
if (salario <= 280) {
  percentual = 20;
} else if (salario <= 700) {
  percentual = 15;
} else if (salario <= 1500) {
  percentual = 10;
}

const aumento = (salario * percentual) / 100;
const salarioFinal = salario + aumento;
console.log(`Salário inicial: R$ ${salario.toFixed(2)}`);
console.log(`Percentual de aumento: ${percentual}%`);
console.log(`Valor do aumento: R$ ${aumento.toFixed(2)}`);
console.log(`Salário com aumento: R$ ${salarioFinal.toFixed(2)}`);
