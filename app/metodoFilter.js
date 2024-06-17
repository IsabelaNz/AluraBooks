const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(event) {
    const elementoBtn = event.target;
    const categoria = elementoBtn.value;
    console.log('Botão clicado:', elementoBtn);
    console.log('Categoria:', categoria);

    let livrosFiltrados = categoria === 'disponivel' ? 
        livros.filter(livro => livro.quantidade > 0) : 
        livros.filter(livro => livro.categoria === categoria);

    console.log('Livros filtrados:', livrosFiltrados);
    exibirOsLivrosNaTela(livrosFiltrados);
}
