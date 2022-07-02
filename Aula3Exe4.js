console.clear();
const prompt = require("prompt-sync")({ sigint: true });

let num1 = +prompt("Digite um número inteiro: ");
let num2 = +prompt("Digite outro número inteiro: ");

if (num1 % num2 == 0 || num2 % num1 == 0)
  console.log(`${num1} e ${num2} são múltiplos`);
else {
  console.log(`${num1} e ${num2} NÃO são múltiplos`);
}
