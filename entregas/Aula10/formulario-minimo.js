var formulario = document.querySelector("#form-minimo");
var campoApelido = document.querySelector("#apelido");
var resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
    // Evita navegar para outra página ao enviar o formulário.
    evento.preventDefault();
    resultado.textContent = "Apelido informado: " + campoApelido.value;
});
