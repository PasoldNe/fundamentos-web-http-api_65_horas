var pontuacao = 0;

function atualizarPainel() {
    // Localiza os dois parágrafos pelo ID e atualiza a tela após cada clique.
    document.getElementById("pontos").textContent = pontuacao;
    var mensagem = document.getElementById("mensagem");
    if (pontuacao >= 30) {
        mensagem.textContent = "Parabéns! Meta alcançada!";
    } else {
        mensagem.textContent = "Continue tentando!";
    }
}

// Localiza cada botão para registrar sua ação.
document.getElementById("acertou").addEventListener("click", function () {
    pontuacao = pontuacao + 10;
    atualizarPainel();
});

document.getElementById("perdeu").addEventListener("click", function () {
    pontuacao = pontuacao - 5;
    if (pontuacao < 0) {
        pontuacao = 0;
    }
    atualizarPainel();
});

document.getElementById("reiniciar").addEventListener("click", function () {
    pontuacao = 0;
    atualizarPainel();
});
