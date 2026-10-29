// getElementById localiza o campo nome, o botão e o parágrafo da saudação.
var campoNome = document.getElementById("nome");
var botaoCumprimentar = document.getElementById("cumprimentar");
var saudacao = document.getElementById("saudacao");

botaoCumprimentar.addEventListener("click", function () {
    var nome = campoNome.value.trim();
    if (nome === "") {
        saudacao.textContent = "Digite seu nome para continuar.";
        campoNome.focus();
    } else {
        saudacao.textContent = "Olá, " + nome + "! Que bom ter você aqui.";
    }
});
