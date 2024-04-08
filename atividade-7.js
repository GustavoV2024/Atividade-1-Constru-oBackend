//


const prompt = require('prompt-sync')();

// Função para calcular a média ponderada
function calcularMedia(nota1, nota2) {
    // Definindo os pesos das notas
    const pesoNota1 = 4;
    const pesoNota2 = 6;

    // Calculando a média ponderada
    const media = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);

    return media;
}

// Função para ler as notas do usuário
function lerNotas() {
    // Pedindo ao usuário para inserir as notas
    const nota1 = parseFloat(prompt("Digite a primeira nota:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota:"));

    // Verificando se as notas são válidas
    if (isNaN(nota1) || isNaN(nota2)) {
        console.log("Por favor, insira notas válidas.");
        return;
    }

    // Chamando a função calcularMedia e armazenando o resultado
    const mediaFinal = calcularMedia(nota1, nota2);

    // Exibindo a média final
    console.log("A média final do aluno é: " + mediaFinal.toFixed(2));
}

// Chamando a função lerNotas para começar a execução do programa
lerNotas();

