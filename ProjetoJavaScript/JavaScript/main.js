let button = document.querySelector('input#Button')

function calcular() {
    var PrimeiroValor = document.querySelector('input#One-value')
    var SegundoValor = document.querySelector('input#Two-value')
    var TerceiroValor = document.querySelector('input#Three-value')
    let P_valor = Number(PrimeiroValor.value)
    let S_valor = Number(SegundoValor.value)
    let T_valor = Number(TerceiroValor.value)
    let conta = (P_valor + S_valor + T_valor)/3;

    var Resposta = document.querySelector('span#Resultado')
    Resposta.innerHTML = conta.toFixed(2)
}