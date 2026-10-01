
function tabuada(numero) {
  for (var i = 1; i <= 10; i = i + 1) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}

// 2. Array de frutas
var frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];
for (var i = 0; i < 5; i = i + 1) {
  console.log(frutas[i]);
}

// 3. Maior número
var numerosFacil = [10, 45, 2, 89, 23];
var maiorNumero = numerosFacil[0];

for (var i = 0; i < 5; i = i + 1) {
  var numeroAtual = numerosFacil[i];
  if (numeroAtual > maiorNumero) {
    maiorNumero = numeroAtual;
  }
}
console.log("Maior número: " + maiorNumero);



var nomes = ["Ana", "Pedro", "Lucas", "Mariana"];

function contarNomes(arrayDeNomes) {
  var contador = 0;
  for (var i = 0; i < arrayDeNomes.length; i = i + 1) {
    contador = contador + 1;
  }
  return contador;
}

// 2. Filtrar números pares
var numerosMedio = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < numerosMedio.length; i = i + 1) {
  var numeroAtual = numerosMedio[i];
  var restoDaDivisao = numeroAtual % 2;
  
  if (restoDaDivisao == 0) {
    console.log("Par: " + numeroAtual);
  }
}

// 3. Média dos números
function calcularMediaArray(numeros) {
  var soma = 0;
  var quantidade = numeros.length;
  
  for (var i = 0; i < quantidade; i = i + 1) {
    var numeroAtual = numeros[i];
    soma = soma + numeroAtual;
  }
  
  var media = soma / quantidade;
  return media;
}

// 4. Objeto aluno
var notasDoCarlos = [7, 8, 9];

var aluno = { 
  nome: "Carlos", 
  idade: 20, 
  notas: notasDoCarlos 
};

var somaNotasAluno = 0;
somaNotasAluno = somaNotasAluno + aluno.notas[0];
somaNotasAluno = somaNotasAluno + aluno.notas[1];
somaNotasAluno = somaNotasAluno + aluno.notas[2];

var mediaAlunoCarlos = somaNotasAluno / 3;
console.log("Média do " + aluno.nome + ": " + mediaAlunoCarlos);

// 5. Sistema de aprovação
function verificarSituacao(media) {
  if (media >= 7) {
    console.log("Aprovado");
  } else {
    if (media >= 5) {
      console.log("Recuperação");
    } else {
      console.log("Reprovado");
    }
  }
}

// 6. Inverter array
function inverterArray(array) {
  var tamanho = array.length;
  
  for (var i = tamanho - 1; i >= 0; i = i - 1) {
    console.log(array[i]);
  }
}

// 7. Contador de vogais
function contarVogais(palavra) {
  var contador = 0;
  
  for (var i = 0; i < palavra.length; i = i + 1) {
    var letra = palavra[i];
    
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ||
        letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
      contador = contador + 1;
    }
  }
  return contador;
}



var produto1 = { nome: "Notebook", preco: 3500, estoque: 5 };
var produto2 = { nome: "Mouse", preco: 150, estoque: 0 };
var produto3 = { nome: "Teclado", preco: 300, estoque: 2 };

var produtos = [produto1, produto2, produto3];

for (var i = 0; i < produtos.length; i = i + 1) {
  var produtoAtual = produtos[i];
  
  if (produtoAtual.estoque > 0) {
    console.log("Em estoque: " + produtoAtual.nome);
  }
}

// 2. Carrinho de compras
var item1 = { nome: "Camiseta", preco: 50, quantidade: 2 };
var item2 = { nome: "Calça", preco: 120, quantidade: 1 };
var carrinho = [item1, item2];

function calcularTotalCompra(itens) {
  var total = 0;
  
  for (var i = 0; i < itens.length; i = i + 1) {
    var itemAtual = itens[i];
    var valorDesteItem = itemAtual.preco * itemAtual.quantidade;
    total = total + valorDesteItem;
  }
  
  return total;
}

// 3. Maior e menor preço
var p1 = { nome: "Monitor", preco: 800 };
var p2 = { nome: "Cabo HDMI", preco: 30 };
var p3 = { nome: "Cadeira", preco: 1200 };
var listaProdutos = [p1, p2, p3];

var produtoMaisCaro = listaProdutos[0];
var produtoMaisBarato = listaProdutos[0];

for (var i = 0; i < listaProdutos.length; i = i + 1) {
  var produtoAtual = listaProdutos[i];
  
  if (produtoAtual.preco > produtoMaisCaro.preco) {
    produtoMaisCaro = produtoAtual;
  }
  
  if (produtoAtual.preco < produtoMaisBarato.preco) {
    produtoMaisBarato = produtoAtual;
  }
}

// 4. Sistema de notas
var aluno1 = { nome: "Ana", notas: [8, 7, 9] };
var aluno2 = { nome: "João", notas: [4, 5, 4] };
var aluno3 = { nome: "Maria", notas: [6, 6, 5] };
var listaAlunos = [aluno1, aluno2, aluno3];

for (var i = 0; i < listaAlunos.length; i = i + 1) {
  var alunoAtual = listaAlunos[i];
  
  var soma = 0;
  for (var j = 0; j < alunoAtual.notas.length; j = j + 1) {
    var notaAtual = alunoAtual.notas[j];
    soma = soma + notaAtual;
  }
  
  var media = soma / alunoAtual.notas.length;
  
  var situacao = "";
  if (media >= 7) {
    situacao = "Aprovado";
  } else {
    if (media >= 5) {
      situacao = "Recuperação";
    } else {
      situacao = "Reprovado";
    }
  }
  
  console.log("Aluno: " + alunoAtual.nome + " | Média: " + media + " | Situação: " + situacao);
}

// 5. Contador de palavras
function contarOcorrenciaPalavras(frase) {
  var palavras = frase.split(" ");
  var contagem = {};

  for (var i = 0; i < palavras.length; i = i + 1) {
    var palavraAtual = palavras[i];
    
    // Se a palavra ainda não existe no objeto contagem
    if (contagem[palavraAtual] == undefined) {
      contagem[palavraAtual] = 1;
    } else {
      // Se já existe, soma mais um
      contagem[palavraAtual] = contagem[palavraAtual] + 1;
    }
  }
  
  return contagem;
}

// 6. Sistema completo de funcionários
var f1 = { nome: "João", cargo: "Desenvolvedor", salario: 5000 };
var f2 = { nome: "Maria", cargo: "Designer", salario: 4500 };
var f3 = { nome: "Carlos", cargo: "Gerente", salario: 9000 };
var f4 = { nome: "Ana", cargo: "Estagiária", salario: 1500 };

var funcionarios = [f1, f2, f3, f4];

function listarFuncionarios(lista) {
  var i = 0;
  while (i < lista.length) {
    var funcionarioAtual = lista[i];
    console.log("Nome: " + funcionarioAtual.nome + ", Cargo: " + funcionarioAtual.cargo);
    i = i + 1;
  }
}

function calcularSalarioMedio(lista) {
  var soma = 0;
  var i = 0;
  
  while (i < lista.length) {
    var funcionarioAtual = lista[i];
    soma = soma + funcionarioAtual.salario;
    i = i + 1;
  }
  
  var media = soma / lista.length;
  return media;
}

function encontrarMaiorSalario(lista) {
  var maiorFuncionario = lista[0];
  
  for (var i = 0; i < lista.length; i = i + 1) {
    var funcionarioAtual = lista[i];
    if (funcionarioAtual.salario > maiorFuncionario.salario) {
      maiorFuncionario = funcionarioAtual;
    }
  }
  return maiorFuncionario;
}

function encontrarMenorSalario(lista) {
  var menorFuncionario = lista[0];
  
  for (var i = 0; i < lista.length; i = i + 1) {
    var funcionarioAtual = lista[i];
    if (funcionarioAtual.salario < menorFuncionario.salario) {
      menorFuncionario = funcionarioAtual;
    }
  }
  return menorFuncionario;
}

function aplicarAumento(lista, percentual) {
  for (var i = 0; i < lista.length; i = i + 1) {
    var funcionarioAtual = lista[i];
    var valorDoAumento = funcionarioAtual.salario * (percentual / 100);
    funcionarioAtual.salario = funcionarioAtual.salario + valorDoAumento;
  }
}

function listarAcimaDaMedia(lista) {
  var media = calcularSalarioMedio(lista);
  
  for (var i = 0; i < lista.length; i = i + 1) {
    var funcionarioAtual = lista[i];
    
    if (funcionarioAtual.salario > media) {
      console.log(funcionarioAtual.nome + " tem salário maior que a média: " + funcionarioAtual.salario);
    }
  }
}