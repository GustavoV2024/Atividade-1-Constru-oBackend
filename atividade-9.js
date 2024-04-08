const readline = require('readline-sync');

// Função para somar dois números
function somar(a, b) {
  return a + b;
}

// Função para multiplicar um número por outro
function multiplicar(a, b) {
  return a * b;
}

// Obter os dois números do usuário
const num1 = readline.questionFloat('Digite o primeiro número: ');
const num2 = readline.questionFloat('Digite o segundo número: ');

// Somar os dois números
const soma = somar(num1, num2);

// Multiplicar o resultado pelo primeiro número
const resultado = multiplicar(soma, num1);

// Exibir o resultado para o usuário
console.log(`O resultado da operação é ${resultado}.`);
