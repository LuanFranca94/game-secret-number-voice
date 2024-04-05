let tentativas = 0;

function verificarSeChuteVale(chute) {
    const numero = +chute;

    if (chute) {
        tentativas++;
    }

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if (verificarSeNumeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}.</div>`;
        return
    }

    dicasMaiorOuMenorQueOChute(numero);

    acertoDoNumeroSecreto(numero);

    elementoChute.innerHTML += `<br>Tentativas:  ${tentativas}`;
}


function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function verificarSeNumeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function dicasMaiorOuMenorQueOChute(numero) {
    if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div> O número secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>`;
    } 
    
    if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div> O número secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>`;
    } 
}

function acertoDoNumeroSecreto(numero) {
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <h3>Você acertou após ${tentativas} tentativas </h3>
        <button id="btn-jogar" class="jogar-novamente">Jogar Novamente</button>
        `
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'btn-jogar') {
        window.location.reload();
    }
})



