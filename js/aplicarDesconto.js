function aplicarDesconto (listaLivros) {
    let desconto = 0.1;
    let livrosNovos = listaLivros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosNovos;
}