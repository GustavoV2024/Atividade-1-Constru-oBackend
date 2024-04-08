//O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo 
//de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor

const prompt = require('prompt-sync')();

// Importando módulo 'readline' para obter entrada do usuário
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular o custo final ao consumidor
function calcularCustoFinal(custoFabrica, percentualDistribuidor, percentualImposto) {
  const custoDistribuidor = custoFabrica * (percentualDistribuidor / 100);
  const custoImposto = custoFabrica * (percentualImposto / 100);

  const custoFinal = custoFabrica + custoDistribuidor + custoImposto;
  return custoFinal;
}

// Obtendo entrada do usuário
rl.question('Digite o custo de fábrica do carro: ', (custoFabrica) => {
  custoFabrica = parseFloat(custoFabrica);

  rl.question('Digite a porcentagem do distribuidor: ', (percentualDistribuidor) => {
    percentualDistribuidor = parseFloat(percentualDistribuidor);

    rl.question('Digite a porcentagem do imposto: ', (percentualImposto) => {
      percentualImposto = parseFloat(percentualImposto);

      // Verificar se as entradas são válidas
      if (isNaN(custoFabrica) || isNaN(percentualDistribuidor) || isNaN(percentualImposto)) {
        console.log('Por favor, insira valores numéricos válidos.');
      } else {
        // Calcular e exibir o custo final ao consumidor
        const custoFinal = calcularCustoFinal(custoFabrica, percentualDistribuidor, percentualImposto);
        console.log('O custo final ao consumidor é:', custoFinal.toFixed(2));
      }

      rl.close();
    });
  });
});
