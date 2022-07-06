console.clear();
const prompt = require("prompt-sync")();

const lancamentos = prompt("Quantas vezes quer lançar o dado?");

let lista = [];

let cont = 0;
while (lancamentos > cont) {
  let aleatorio = Math.ceil(Math.random() * 6);
  lista.push(aleatorio);
  cont++;
}

cont = 0;
contSoma = 1;
soma = 0;
listaSoma = [];
while (contSoma <= 6) {
  while (lista.length > cont) {
    if (contSoma == lista[cont]) {
      soma++;
    }
    cont++;
  }
  listaSoma.push(soma);
  soma = 0;
  cont = 0;
  contSoma++;
}
console.log(lista);

cont = 0;
while (listaSoma.length > cont) {
  console.log(`O valor ${cont + 1} foi conseguido ${listaSoma[cont]} vezes`);
  cont++;
}
