// 1)
let idade = 20; // Pode alterar este valor para testar
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// 2)
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 3)
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4)
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

// 5)
function classificarNota(media) {
  if (media >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

// 6)
let contador = 10;
while (contador >= 0) {
  console.log(contador);
  contador--;
}