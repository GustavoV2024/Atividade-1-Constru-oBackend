//4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos 
//(aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

const prompt = require('prompt-sync')();

// Função para calcular o custo final ao consumidor
function calcularCustoFinal(custoFabrica) {
  const percentualDistribuidor = 0.28; // 28%
  const percentualImpostos = 0.45; // 45%

  const custoDistribuidor = custoFabrica * percentualDistribuidor;
  const custoImpostos = custoFabrica * percentualImpostos;

  const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;
  return custoFinal;
}

// Importando módulo 'readline' para obter entrada do usuário
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Obtendo entrada do usuário
rl.question('Digite o custo de fábrica do carro: ', (custoFabrica) => {
  custoFabrica = parseFloat(custoFabrica);

  // Verificar se a entrada é válida
  if (isNaN(custoFabrica)) {
    console.log('Por favor, insira um valor numérico válido para o custo de fábrica.');
  } else {
    // Calcular e exibir o custo final ao consumidor
    const custoFinal = calcularCustoFinal(custoFabrica);
    console.log('O custo final ao consumidor é:', custoFinal.toFixed(2));
  }

  rl.close();
});

  