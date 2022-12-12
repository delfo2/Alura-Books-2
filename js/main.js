const secaoLivros = document.querySelector('[data-section]');
let livros = [];
const endPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivros();

async function getBuscarLivros () {
    let resposta = await fetch(endPoint);
    livros = await resposta.json();
    console.log(livros);
    acrescentarLivros(livros);
}

function acrescentarLivros (listalivros) {
    listalivros.forEach(livro => {
        secaoLivros.innerHTML += `
            <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>
        `
    })
}