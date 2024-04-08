//Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.

const readline = require('readline-sync');

// Função para calcular o volume da caixa d'água
function calcularVolume(raio, altura) {
  const PI = Math.PI;
  return PI * raio * raio * altura;
}

// Obter raio e altura da caixa d'água do usuário
const raio = readline.questionFloat('Digite o raio da caixa d\'água: ');
const altura = readline.questionFloat('Digite a altura da caixa d\'água: ');

// Calcular o volume da caixa d'água
const volume = calcularVolume(raio, altura);

// Exibir o resultado para o usuário
console.log(`O volume da caixa d'água é de ${volume.toFixed(2)} metros cúbicos.`);
