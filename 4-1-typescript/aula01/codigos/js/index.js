"use strict";
let nome = "Vem Ser";
let edicao = 11;
let array = ["João", "Maria", "Ana"];
let arrayOutraSintaxe = ["João", "Maria", "Ana"];
let arrayDeNumeros = [10, 5, 7];
// Tupla
let endereco = ["Tv. São José", 455, 902];
// enum
var Meses;
(function (Meses) {
  Meses[(Meses["Janeiro"] = 0)] = "Janeiro";
  Meses[(Meses["Fevereiro"] = 1)] = "Fevereiro";
  Meses[(Meses["Marco"] = 2)] = "Marco";
  Meses[(Meses["Abril"] = 3)] = "Abril";
  Meses[(Meses["Maio"] = 4)] = "Maio";
  Meses[(Meses["Junho"] = 5)] = "Junho";
  Meses[(Meses["Julho"] = 6)] = "Julho";
  Meses[(Meses["Agosto"] = 7)] = "Agosto";
  Meses[(Meses["Setembro"] = 8)] = "Setembro";
  Meses[(Meses["Outubro"] = 9)] = "Outubro";
  Meses[(Meses["Novembro"] = 10)] = "Novembro";
  Meses[(Meses["Dezembro"] = 11)] = "Dezembro";
})(Meses || (Meses = {}));
const mesAtual = Meses.Marco;
console.log(mesAtual);
function ehMaiorQueDez(numero) {
  if (numero > 10) {
    return true;
  } else {
    return false;
  }
}
const resultado = ehMaiorQueDez(12);
console.log(resultado);
const printaODiaAtual = () => {
  console.log(new Date().getDate());
};
printaODiaAtual();
let animal = {
  raca: "Dálmata",
  nome: "Alvaro",
  idade: 12,
};
console.log(animal.raca);
let animalDois = {
  raca: "Dálmata",
  nome: "Alvaro",
  idade: 12,
};
let animais = {
  cachorro: { raca: "Vira-lata", nome: "Cachorro", idade: 2 },
  gato: { raca: "Vira-lata", nome: "Gato", idade: 7 },
};
console.log(animais.cachorro.nome);
let genero = "F";
let idade = "Vinte e dois";
class Turma {
  stack;
}
const vemSer11 = new Turma();

vemSer11.stack = "Frontend";

console.log(vemSer11);
