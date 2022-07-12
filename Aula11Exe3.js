console.clear();

const prompt = require("prompt-sync")();

const temp = +prompt("Qual a temperatura? ");
const escala = prompt("Em Celsius(C), Kelvin(K) ou Fahrenheit(F)? ");

function conversao(t, e) {
  let c = 0;
  let k = 0;
  let f = 0;
  if (e.toLowerCase() == "c") {
    c = t;
    k = t + 273.15;
    f = 32 + (t * 9) / 5;
  } else if (e.toLowerCase() == "k") {
    k = t;
    c = t - 273.15;
    f = ((t - 273.15) * 9) / 5 + 32;
  } else {
    f = t;
    c = ((30 - 32) * 5) / 9;
    k = ((t - 32) * 5) / 9 + 273.15;
  }

  console.log(`
  ${c.toFixed(0)}°C
  ${k.toFixed(0)}K
  ${f.toFixed(0)}°F
  `);

  const retorno = prompt(
    "Deseja exibir em Celsius(C), Kelvin(K) ou Fahrenheit(F)? "
  );

  if (retorno.toLowerCase() == "c") {
    return `${c.toFixed(0)}°C`;
  } else if (retorno.toLowerCase() == "k") {
    return `${k.toFixed(0)}K`;
  } else {
    return `${f.toFixed(0)}°F`;
  }
}

let tempNova = conversao(temp, escala);
console.log(tempNova);
