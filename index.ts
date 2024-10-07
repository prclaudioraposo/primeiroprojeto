const message: string = "Hello Word";

console.log(message)

const idade: Array<number> = [33, 18, 20, 18];

interface Pessoa {
    nome: string,
    idade: number,
}

const cadastro: Pessoa[] = [
    { nome: "Claudio", idade: 33 },
    { nome: "José", idade: 93 }
];

console.log(cadastro)

enum Color {
    Red = "Vermelho",
    Green = "Verde",
    Blue = "Azul"
}

console.log(Color.Green)