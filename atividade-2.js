//Função para calcular percentual
function CalcularPercentual(valor, total) {
    return(valor / total) * 100
}

const prompt = require('prompt-sync')();

//Função principal
function CalcularPercentualVotos() {
    let totalEleitores = prompt("Informe o total de Eleitors")

    let votosBrancos = parseIntprompt("Informe o total de votos em branco")

    let totalNulos = parseInt(prompt("Informe o total de votos nulos"))

    let totalValidos = parseInt(prompt("Informe o total de votos validos"))

    const persentualBrancos = CalcularPercentual(votosBrancos, totalEleitores)
    const persentualNulos = CalcularPercentual(totalNulos, totalEleitores)
    const persentualValidos = CalcularPercentual(totalValidos, totalEleitores)

    console.log("Percentual de votos Brancos: " + persentualBrancos.toFixed(2) + "%")
    console.log("Percentual de votos Nulos: " + persentualNulos.toFixed(2) + "%")
    console.log("Percentual de votos Validos: " + persentualValidos.toFixed(2) + "%")

}

CalcularPercentual();