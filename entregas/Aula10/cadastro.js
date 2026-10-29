// Cada variável guarda um elemento que será usado na validação.
var formulario = document.getElementById("form-cadastro");
var campoNome = document.getElementById("nome");
var campoEmail = document.getElementById("email");
var campoSenha = document.getElementById("senha");
var erroNome = document.getElementById("erro-nome");
var erroEmail = document.getElementById("erro-email");
var erroSenha = document.getElementById("erro-senha");
var sucesso = document.getElementById("sucesso");
var botaoLimpar = document.getElementById("limpar");

function limparSucesso() {
    sucesso.textContent = "";
}

function limparMensagens() {
    // Remove os avisos da tentativa anterior antes de verificar tudo de novo.
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroSenha.textContent = "";
    campoNome.classList.remove("erro");
    campoEmail.classList.remove("erro");
    campoSenha.classList.remove("erro");
    campoNome.removeAttribute("aria-invalid");
    campoEmail.removeAttribute("aria-invalid");
    campoSenha.removeAttribute("aria-invalid");
    limparSucesso();
}

function mostrarErro(campo, mensagem, texto) {
    mensagem.textContent = texto;
    campo.classList.add("erro");
    campo.setAttribute("aria-invalid", "true");
}

formulario.addEventListener("submit", function (evento) {
    // Intercepta também o envio feito com Enter, sem recarregar a página.
    evento.preventDefault();
    limparMensagens();

    var nome = campoNome.value.trim();
    var email = campoEmail.value.trim();
    // A senha fica exatamente como foi digitada, sem usar trim.
    var senha = campoSenha.value;
    var primeiroErro = null;

    if (nome === "") {
        mostrarErro(campoNome, erroNome, "Informe seu nome.");
        primeiroErro = campoNome;
    }

    if (email === "") {
        mostrarErro(campoEmail, erroEmail, "Informe seu e-mail.");
        if (primeiroErro === null) {
            primeiroErro = campoEmail;
        }
    } else if (campoEmail.validity.typeMismatch) {
        mostrarErro(campoEmail, erroEmail, "Digite um e-mail em formato válido.");
        if (primeiroErro === null) {
            primeiroErro = campoEmail;
        }
    }

    if (senha.length < 6) {
        mostrarErro(campoSenha, erroSenha, "Use pelo menos 6 caracteres na senha.");
        if (primeiroErro === null) {
            primeiroErro = campoSenha;
        }
    }

    // As três condições acima executam, mostrando todos os erros de uma vez.
    if (primeiroErro !== null) {
        primeiroErro.focus();
        return;
    }
    sucesso.textContent = "Validação concluída! Os dados da inscrição estão corretos.";
});

// Uma confirmação antiga não vale mais depois de editar os dados.
formulario.addEventListener("input", limparSucesso);

botaoLimpar.addEventListener("click", function () {
    formulario.reset();
    limparMensagens();
    campoNome.focus();
});
