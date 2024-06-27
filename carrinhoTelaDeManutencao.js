function adicionarAoCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let item = { nome: nome, preco: preco };
    carrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinhoDropdown();
}

function atualizarCarrinhoDropdown() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let listaCarrinho = document.getElementById('lista-carrinho-dropdown');
    let totalCarrinho = 0;
    listaCarrinho.innerHTML = '';

    carrinho.forEach((item, index) => {
        let divItem = document.createElement('div');
        divItem.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add('btn', 'btn-sm', 'btn-danger', 'ml-2');
        btnRemover.onclick = () => removerDoCarrinho(index);

        divItem.appendChild(btnRemover);
        listaCarrinho.appendChild(divItem);
        totalCarrinho += item.preco;
    });

    document.getElementById('total-carrinho-dropdown').textContent = totalCarrinho.toFixed(2);
}

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinhoDropdown();
}

function limparCarrinho() {
    localStorage.removeItem('carrinho');
    atualizarCarrinhoDropdown();
}

document.addEventListener('DOMContentLoaded', () => {
    atualizarCarrinhoDropdown();
});
