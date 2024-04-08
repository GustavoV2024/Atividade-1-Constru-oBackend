//Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas,
// o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.


const prompt = require('prompt-sync')();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular o salário final do vendedor
function calcularSalarioFinal(numCarrosVendidos, valorTotalVendas, salarioFixo, comissaoPorCarro) {
  const comissaoFixa = numCarrosVendidos * comissaoPorCarro;
  const comissaoPorVendas = valorTotalVendas * 0.05;
  const salarioFinal = salarioFixo + comissaoFixa + comissaoPorVendas;
  return salarioFinal;
}

// Obtendo entrada do usuário
rl.question('Digite o número de carros vendidos: ', (numCarrosVendidos) => {
  numCarrosVendidos = parseInt(numCarrosVendidos);

  rl.question('Digite o valor total das vendas: ', (valorTotalVendas) => {
    valorTotalVendas = parseFloat(valorTotalVendas);

    rl.question('Digite o salário fixo do vendedor: ', (salarioFixo) => {
      salarioFixo = parseFloat(salarioFixo);

      rl.question('Digite o valor que o vendedor recebe por carro vendido: ', (comissaoPorCarro) => {
        comissaoPorCarro = parseFloat(comissaoPorCarro);

        // Verificar se as entradas são válidas
        if (isNaN(numCarrosVendidos) || isNaN(valorTotalVendas) || isNaN(salarioFixo) || isNaN(comissaoPorCarro)) {
          console.log('Por favor, insira valores numéricos válidos.');
        } else {
          // Calcular e exibir o salário final do vendedor
          const salarioFinal = calcularSalarioFinal(numCarrosVendidos, valorTotalVendas, salarioFixo, comissaoPorCarro);
          console.log('O salário final do vendedor é:', salarioFinal.toFixed(2));
        }

        rl.close();
      });
    });
  });
});

