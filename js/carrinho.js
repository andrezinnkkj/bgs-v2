 function adicionarAoCarrinho() {

        quantidade++;

        document.getElementById("contador").innerHTML = quantidade;

        document.getElementById("mensagem-carrinho").innerHTML =
        "Produto adicionado ao carrinho!";

    }

let quantidade = 0;

// Segurança: valida elementos antes de atualizar
function atualizarVisuais() {
    const contador = document.getElementById("contador");
    if (contador) contador.innerHTML = quantidade;

    const mensagem = document.getElementById("mensagem-carrinho");
    if (mensagem) mensagem.innerHTML = "Produto adicionado ao carrinho!";
}

function adicionarAoCarrinho() {
    quantidade++;
    atualizarVisuais();
}