// Localiza o campo de quantidade, o botão Calcular e a saída do total.
var campoQuantidade = document.getElementById("quantidade");
var botaoCalcular = document.getElementById("calcular");
var total = document.getElementById("total");

botaoCalcular.addEventListener("click", function () {
    var quantidade = Number(campoQuantidade.value);
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        total.textContent = "Informe uma quantidade inteira maior que zero.";
        campoQuantidade.focus();
    } else {
        var valorCompra = quantidade * 15;
        total.textContent = "Total da compra: R$ " + valorCompra.toFixed(2).replace(".", ",");
    }
});
