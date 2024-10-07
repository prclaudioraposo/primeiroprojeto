"use strict";
const message = "Hello Word";
console.log(message);
const idade = [33, 18, 20, 18];
const cadastro = [
    { nome: "Claudio", idade: 33 },
    { nome: "José", idade: 93 }
];
console.log(cadastro);
var Color;
(function (Color) {
    Color["Red"] = "Vermelho";
    Color["Green"] = "Verde";
    Color["Blue"] = "Azul";
})(Color || (Color = {}));
console.log(Color.Green);
