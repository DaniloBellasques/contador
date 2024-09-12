const input = document.querySelector('.numero')

function maisUm(){
    let ValorAtual = Number(input.innerText);
    ValorAtual += 1;
    input.innerText = ValorAtual
}

function menosUm(){
    let ValorAtual = Number(input.innerText);
    ValorAtual -= 1;
    input.innerText = ValorAtual
    
}