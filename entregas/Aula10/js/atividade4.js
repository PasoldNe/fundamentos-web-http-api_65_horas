// Os dois botões alteram o mesmo parágrafo, localizado pelo ID status.
var aviso = document.getElementById("status");
var botaoEncerrar = document.getElementById("encerrar");
var botaoReabrir = document.getElementById("reabrir");

botaoEncerrar.addEventListener("click", function () {
    aviso.textContent = "Inscrições encerradas";
    aviso.style.color = "red";
});

botaoReabrir.addEventListener("click", function () {
    aviso.textContent = "Inscrições abertas";
    aviso.style.color = "green";
});
