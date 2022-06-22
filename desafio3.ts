// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal: number = 0
if(campoSaldo) {
    campoSaldo.innerHTML = saldoTotal.toString();
}

function somarAoSaldo(soma: number) {
    if(campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparInputSoma();
    }
}

function limparInputSoma() {
    soma.value = '';
}

function limparSaldo() {
    if(campoSaldo) {
        saldoTotal = 0
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

botaoAtualizar?.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', () => {
    limparSaldo();
});