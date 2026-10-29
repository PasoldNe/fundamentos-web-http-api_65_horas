// Localiza o título pelo ID e altera somente seu texto.
var titulo = document.getElementById("titulo");
titulo.textContent = "Bem-vindo à casa interativa!";

// querySelector devolve o primeiro elemento encontrado.
var campoVisitante = document.querySelector("#visitante");
var primeiroCard = document.querySelector(".card");
var primeiroParagrafo = document.querySelector("p");
var tituloPainel = document.querySelector("#painel h2");

// querySelectorAll encontra os dois painéis.
var cards = document.querySelectorAll(".card");
console.log("JavaScript conectado ao laboratório!");
console.log(primeiroCard, primeiroParagrafo, tituloPainel);
console.log("Quantidade de cards:", cards.length);
cards.forEach(function (card) {
    console.log(card);
});

var saida = document.querySelector("#saudacao");
var botaoSaudacao = document.querySelector("#btn-saudacao");
saida.textContent = "Aguardando seu nome...";

botaoSaudacao.addEventListener("click", function () {
    // Lê o nome no momento do clique e trata espaços como campo vazio.
    var nome = campoVisitante.value.trim();
    if (nome === "") {
        saida.textContent = "Digite seu nome antes de continuar.";
        campoVisitante.focus();
        return;
    }
    saida.textContent = "Olá, " + nome + "! Seja bem-vindo(a).";
});

var painel = document.querySelector("#painel");
var botaoDestaque = document.querySelector("#btn-destaque");
botaoDestaque.addEventListener("click", function () {
    var destacado = painel.classList.toggle("destaque");
    botaoDestaque.setAttribute("aria-pressed", String(destacado));
});

var contador = document.querySelector("#contador");
campoVisitante.addEventListener("input", function () {
    contador.textContent = "Caracteres digitados: " + campoVisitante.value.length;
});

campoVisitante.addEventListener("change", function () {
    console.log("Nome confirmado:", campoVisitante.value);
});
