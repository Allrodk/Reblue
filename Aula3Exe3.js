console.clear();
const prompt = require("prompt-sync")({ sigint: true });

let num = prompt("Digite um número inteiro: ");

if (num % 2 == 0) {
  console.log(`${num} é par`);
} else {
  console.log(`${num} é imppar`);
}
