const secaoLivros = document.querySelector('[data-section]');
let livros = [];
const endPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivros();

async function getBuscarLivros () {
    let resposta = await fetch(endPoint);
    livros = await resposta.json();
    console.log(livros);
    let livrosComDesconto = aplicarDesconto(livros);
    acrescentarLivros(livrosComDesconto);
}