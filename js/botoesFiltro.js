const botoes = document.querySelectorAll('.btn');
botoes.forEach(botao => {
    botao.addEventListener('click', filtrarLivro);
})

function filtrarLivro () {
    let livrosFiltrados = this.value == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == this.value);
    exibirLivros(livrosFiltrados);
    if (this.value == 'disponivel') {
        let valorTotal = calcularTotal(livrosFiltrados);
        mostraValorTotal (valorTotal);
    }
}

function mostraValorTotal (valor) {
    secaoTotalValorLivros.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
        </div>
    `
}