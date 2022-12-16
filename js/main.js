const secaoLivros = document.querySelector('[data-section]');
const secaoTotalValorLivros = document.querySelector('#valor_total_livros_disponiveis');
let livros = [];
const endPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivros();

async function getBuscarLivros () {
    let resposta = await fetch(endPoint);
    livros = await resposta.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivros(livrosComDesconto);
}