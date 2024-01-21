//definindo raviaveis
let vitorias = 200 
let derrotas = 50
let verRanking = true

function saldo(v, d){
    let resultado = v - d
    return resultado
}

let saldoDeVitorias = saldo(vitorias, derrotas)

while(verRanking){
    let ranking
    if(saldoDeVitorias <= 10){
        ranking = "FERRO"
    }else if(saldoDeVitorias >= 11 && saldoDeVitorias <= 20){
        ranking = "bronze"
    }else if(saldoDeVitorias >= 21 && saldoDeVitorias <= 50){
        ranking = "PRATA"
    }else if(saldoDeVitorias >= 51 && saldoDeVitorias <= 80){
        ranking = "OURO"
    }else if(saldoDeVitorias >= 81 && saldoDeVitorias <= 90){
        ranking = "DIAMANTE"
    }else if(saldoDeVitorias >= 91 && saldoDeVitorias <= 100){
        ranking = "LENDÁRIO"
    }else if(saldoDeVitorias >= 101){
        ranking = "IMORTAL"
    }
    console.log("O seu saldo de vitórias é " + saldoDeVitorias + " e seu Ranking é " + ranking)
    const pergunta = "Deseja ver seu Ramking novamente? (s/n)"
    console.log(pergunta)
    const resposta = 'n'
    if(resposta !== 's'){
        verRanking = false
    }
}