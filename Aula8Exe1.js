console.clear();

const prompt = require("prompt-sync")();

const linhas = prompt("Quantas linhas? ");
const colunas = prompt("Quantas colunas? ");
let lista = [];
let listaLinha = [];

for (let i = 0; i < colunas; i++) {
  for (let j = 0; j < linhas; j++) {
    listaLinha.push(j + i);
  }
  lista.push(listaLinha);
  listaLinha = [];
}

console.log(lista);
