function criarCartao('quimica',
    'qual é a principal caracteristica dos alcanos?',
     'possuiram apenas ligações simples entre os átomos de carbono') {
    let container = document.getElementById('container');
cartao.className = ` <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
     `
    let respostaEstaVisivel = false

function viraCartao() {
respostaEstaVisivel = !respostaEstaVisivel
cartao.classList.toggle('active', respostaEstaVisivel)
}
cartao.addEventListener('click', viraCartao)


container.appendChild(cartao)
     }