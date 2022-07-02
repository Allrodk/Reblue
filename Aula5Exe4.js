console.clear();
const prompt = require("prompt-sync")();

let aleatorio = Math.floor(Math.random() * 11);
let num = +prompt("Escolha um numero de 0 a 10: ");
let cont = 0;

while (aleatorio !== num) {
  if (num < aleatorio) {
    console.log("É um número maior...");
  } else if (num > aleatorio) {
    console.log("É um número menor...");
  }
  num = +prompt("Escolha um numero de 0 a 10: ");
  cont++;
}

console.log(`Acertou miserável! É o numero ${aleatorio}`);
console.log(`Errou ${cont} vezes pra depois acertar`);
