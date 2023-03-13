let nome: string = "Vem Ser";

let edicao: number = 11;

let array: string[] = ["João", "Maria", "Ana"];
let arrayOutraSintaxe: Array<string> = ["João", "Maria", "Ana"];

let arrayDeNumeros: number[] = [10, 5, 7];

// Tupla

let endereco: [string, number, number] = ["Tv. São José", 455, 902];

// enum

enum Meses {
  Janeiro,
  Fevereiro,
  Marco,
  Abril,
  Maio,
  Junho,
  Julho,
  Agosto,
  Setembro,
  Outubro,
  Novembro,
  Dezembro,
}

const mesAtual = Meses.Marco;

console.log(mesAtual);

function ehMaiorQueDez(numero: number): boolean {
  if (numero > 10) {
    return true;
  } else {
    return false;
  }
}

const resultado = ehMaiorQueDez(12);

console.log(resultado);

const printaODiaAtual = (): void => {
  console.log(new Date().getDate());
};

printaODiaAtual();

let animal: { raca: string; nome: string; idade: number } = {
  raca: "Dálmata",
  nome: "Alvaro",
  idade: 12,
};

console.log(animal.raca);

type Animal = {
  raca: string;
  nome: string;
  idade: number;
};

let animalDois: Animal = {
  raca: "Dálmata",
  nome: "Alvaro",
  idade: 12,
};

let animais: Record<string, Animal> = {
  cachorro: { raca: "Vira-lata", nome: "Cachorro", idade: 2 },
  gato: { raca: "Vira-lata", nome: "Gato", idade: 7 },
};

console.log(animais.cachorro.nome);

let genero: "F" | "M" | "Outros" = "F";

let idade: string | number = "Vinte e dois";

class Turma {
  stack: "Backend" | "Frontend" | "QA";

  constructor(stack: "Backend" | "Frontend" | "QA") {
    this.stack = stack;
  }
}

const vemSer11 = new Turma("Frontend");

class TurmaAbreviada {
  constructor(protected stack: "Backend" | "Frontend" | "QA") {}
}

const vemSer11Dois = new TurmaAbreviada("Frontend");

class AnimalDois {
  constructor(protected tipo: string) {}
}

class Cachorro extends AnimalDois {
  printaTipo(): void {
    console.log(this.tipo);
  }
}

const doguinho = new Cachorro("Dálmata");

doguinho.printaTipo();
