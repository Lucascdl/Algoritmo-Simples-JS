let nome = prompt("Por favor, insira seu nome:");

console.log("Olá, " + nome + "!");

let numeroEntrada = prompt("Por favor, insira um número:");
let numero = parseFloat(numeroEntrada);
let numeroArmazenado = 10;
let resultadoSoma = numero + numeroArmazenado;

console.log("A soma do seu número com " + numeroArmazenado + " é: " + resultadoSoma);

let texto1 = prompt("Digite um texto:");
let texto2 = prompt("Digite outro texto:");
let textoConcatenado = texto1 + " " + texto2;

alert("" + textoConcatenado);