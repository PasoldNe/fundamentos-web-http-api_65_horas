// Localiza o parágrafo da mensagem e o botão Entrar pelos seus IDs.
var mensagem = document.getElementById("mensagem");
var botaoEntrar = document.getElementById("entrar");

botaoEntrar.addEventListener("click", function () {
    mensagem.textContent = "Seja bem-vindo à nossa escola!";
});
