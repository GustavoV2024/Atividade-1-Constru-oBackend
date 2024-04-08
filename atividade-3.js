//3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

const prompt = require('prompt-sync')();

// Função para calcular o novo salário
function calcularNovoSalario(salarioAtual, percentualReajuste) {
  const novoSalario = salarioAtual * (1 + percentualReajuste / 100);
  return novoSalario;
}

// Obter entrada do usuário
const salarioAtual = parseFloat(prompt('Digite o salário mensal atual: '));
const percentualReajuste = parseFloat(prompt('Digite o percentual de reajuste: '));

// Verificar se as entradas são válidas
if (isNaN(salarioAtual) || isNaN(percentualReajuste)) {
  console.log('Por favor, insira valores numéricos válidos.');
} else {
  // Calcular e exibir o novo salário
  const novoSalario = calcularNovoSalario(salarioAtual, percentualReajuste);
  console.log('O novo salário é:', novoSalario.toFixed(2));
}
