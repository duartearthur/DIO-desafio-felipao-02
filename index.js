// segundo desafio Felipão

let resultadoVitorias
let nivelrankeado

function saldoVitorias(vitorias,derrotas){
    return vitorias - derrotas
}

resultadoVitorias = saldoVitorias(200,1)

function nivel(resultadoVitorias){
    if (resultadoVitorias <10)
    return "Ferro"
    else if (resultadoVitorias >= 11 && resultadoVitorias <= 20)
    return "Bronze"
    else if (resultadoVitorias >= 21 && resultadoVitorias <= 50)
    return "Prata"
    else if (resultadoVitorias >= 51 && resultadoVitorias <= 80)
    return "Ouro"
    else if (resultadoVitorias >= 81 && resultadoVitorias <= 90)
    return "Diamante"
    else if (resultadoVitorias >= 91 && resultadoVitorias <= 100)
    return "Lendário"
    else if (resultadoVitorias >= 101)
    return "Imortal"
}

nivelrankeado = nivel(resultadoVitorias)

console.log("O herói tem de saldo de " + resultadoVitorias + " vitórias rankeadas e está no nível de " + nivelrankeado)