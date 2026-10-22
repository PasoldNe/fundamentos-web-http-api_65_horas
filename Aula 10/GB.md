## 11. Gabarito completo e comentado

### 11.1. `cadastro.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <!-- Define a codificação dos caracteres. -->
  <meta charset="UTF-8">
  <!-- Permite que o layout se adapte a telas menores. -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inscrição na oficina</title>

  <!-- Liga a folha de estilos ao documento. -->
  <link rel="stylesheet" href="cadastro.css">
  <!-- Garante a execução após a análise do HTML. -->
  <script src="cadastro.js" defer></script>
</head>
<body>
  <main class="container">
    <h1>Inscrição na oficina</h1>
    <p>Preencha os campos para testar a validação.</p>
    <p id="orientacao">Protótipo didático: os dados não serão enviados ou salvos.</p>

    <!-- novalidate permite que o JS controle as mensagens no submit. -->
    <form id="form-cadastro" novalidate aria-describedby="orientacao">
      <div class="grupo">
        <!-- for associa o rótulo ao campo que tem esse id. -->
        <label for="nome">Nome (obrigatório)</label>
        <!-- name identifica o campo em um eventual envio real. -->
        <input type="text" id="nome" name="nome" required
               autocomplete="name" aria-describedby="erro-nome">
        <!-- O parágrafo começa vazio e receberá a mensagem de erro. -->
        <p id="erro-nome" class="erro" aria-live="polite"></p>
      </div>

      <div class="grupo">
        <label for="email">E-mail (obrigatório)</label>
        <!-- type=email disponibiliza a regra de formato do navegador. -->
        <input type="email" id="email" name="email" required
               autocomplete="email" aria-describedby="erro-email">
        <p id="erro-email" class="erro" aria-live="polite"></p>
      </div>

      <div class="grupo">
        <label for="senha">Senha de demonstração (obrigatória)</label>
        <!-- password mascara a exibição; isso não criptografa o valor. -->
        <input type="password" id="senha" name="senha" required minlength="6"
               autocomplete="new-password"
               aria-describedby="ajuda-senha erro-senha">
        <small id="ajuda-senha">Use pelo menos 6 caracteres fictícios.</small>
        <p id="erro-senha" class="erro" aria-live="polite"></p>
      </div>

      <div class="acoes">
        <!-- Dispara a tentativa de envio do formulário. -->
        <button type="submit">Validar inscrição</button>
        <!-- Não envia o formulário; sua ação será definida no JS. -->
        <button type="button" id="btn-limpar" class="secundario">Limpar</button>
      </div>

      <!-- Região persistente para anunciar o resultado geral. -->
      <p id="sucesso" role="status" aria-live="polite"></p>
    </form>
  </main>
</body>
</html>
```

`id` permite selecionar e associar rótulos. `name` é a identificação utilizada na construção dos dados de um envio. Eles têm papéis diferentes, mesmo quando usamos valores iguais.

`aria-describedby` liga o campo ao texto de ajuda ou erro. Mais adiante, `aria-invalid` comunicará se identificamos um erro. A mensagem escrita acompanha a borda vermelha, para não depender somente de cor.

### 11.2. `cadastro.css`

```css
/* Inclui padding e borda no cálculo de tamanho dos elementos. */
* {
  box-sizing: border-box;
}

/* Estabelece a aparência geral da página. */
body {
  margin: 0;
  padding: 24px;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  color: #172033;
  background-color: #f1f5f9;
}

/* Centraliza o formulário sem fixar uma largura maior que a tela. */
.container {
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
}

/* Separa visualmente os grupos de campos. */
.grupo {
  margin-bottom: 16px;
}

/* Coloca o rótulo acima do campo. */
label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}

/* Mantém os campos dentro da largura disponível. */
input {
  width: 100%;
  padding: 10px;
  border: 2px solid #64748b;
  border-radius: 6px;
  font: inherit;
}

/* Mantém uma indicação visível de foco para navegação por teclado. */
input:focus-visible, button:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}

/* O JavaScript aplica esta classe quando encontra um erro. */
.campo-invalido {
  border-color: #b91c1c;
  background-color: #fff7f7;
}

/* As mensagens são texto, além da indicação visual por cor. */
.erro {
  color: #b91c1c;
  margin: 4px 0 0;
  font-size: 0.9rem;
}

/* Organiza os botões e permite quebra em telas estreitas. */
.acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* Estilo padrão dos botões. */
button {
  border: 0;
  border-radius: 6px;
  padding: 12px 16px;
  font: inherit;
  cursor: pointer;
  background-color: #1d4ed8;
  color: #ffffff;
}

/* Diferencia a ação secundária. */
.secundario {
  background-color: #334155;
}

/* Só é aplicada quando a validação passa. */
.sucesso {
  padding: 12px;
  background-color: #dcfce7;
  color: #14532d;
  border-radius: 6px;
}
```

### 11.3. `cadastro.js`

```javascript
// ============================================================
// 1. SELEÇÃO: guarda referências aos elementos usados na página.
// Estas instruções executam quando o script é carregado.
// ============================================================
const formulario = document.querySelector("#form-cadastro");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#senha");

const erroNome = document.querySelector("#erro-nome");
const erroEmail = document.querySelector("#erro-email");
const erroSenha = document.querySelector("#erro-senha");

const mensagemSucesso = document.querySelector("#sucesso");
const botaoLimpar = document.querySelector("#btn-limpar");

// ============================================================
// 2. FUNÇÕES AUXILIARES: agrupam tarefas que serão repetidas.
// Declarar uma função não significa executá-la agora.
// ============================================================

function mostrarErro(campo, elementoMensagem, texto) {
  // Escreve texto simples no parágrafo correspondente.
  elementoMensagem.textContent = texto;

  // Ativa a aparência de erro definida no CSS.
  campo.classList.add("campo-invalido");

  // Comunica o estado inválido às tecnologias assistivas.
  campo.setAttribute("aria-invalid", "true");
}

function limparErro(campo, elementoMensagem) {
  // Apaga a mensagem anterior desse campo.
  elementoMensagem.textContent = "";

  // Remove apenas a classe de erro; preserva as demais classes.
  campo.classList.remove("campo-invalido");

  // Remove o estado de erro anteriormente informado.
  campo.removeAttribute("aria-invalid");
}

function limparSucesso() {
  // Evita manter uma confirmação que pertence a dados anteriores.
  mensagemSucesso.textContent = "";
  mensagemSucesso.classList.remove("sucesso");
}

function limparMensagens() {
  // Reutiliza a mesma função para os três campos.
  limparErro(campoNome, erroNome);
  limparErro(campoEmail, erroEmail);
  limparErro(campoSenha, erroSenha);
  limparSucesso();
}

// ============================================================
// 3. ENVIO: executa a validação em cada tentativa de submit.
// ============================================================
formulario.addEventListener("submit", function (evento) {
  // Cancela o envio padrão. O protótipo não envia dados.
  evento.preventDefault();

  // Começa esta tentativa sem mensagens da tentativa anterior.
  limparMensagens();

  // Lê os valores atuais, não os valores do carregamento da página.
  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const senha = campoSenha.value;

  // Atualiza o e-mail com o valor tratado antes de consultar validity.
  campoEmail.value = email;

  // Assume validade inicialmente. Qualquer erro mudará para false.
  // É let porque a variável pode receber outro valor nesta execução.
  let valido = true;

  // REGRA 1: nome vazio, inclusive quando composto apenas por espaços.
  if (nome === "") {
    mostrarErro(campoNome, erroNome, "Informe seu nome.");
    valido = false;
  }

  // REGRA 2: primeiro trata a ausência do e-mail.
  if (email === "") {
    mostrarErro(campoEmail, erroEmail, "Informe seu e-mail.");
    valido = false;
  } else if (campoEmail.validity.typeMismatch) {
    // true indica incompatibilidade com o formato de type="email".
    mostrarErro(campoEmail, erroEmail, "Digite um e-mail em formato válido.");
    valido = false;
  }

  // REGRA 3: verifica o comprimento sem modificar a senha.
  if (senha.length < 6) {
    mostrarErro(campoSenha, erroSenha, "Use pelo menos 6 caracteres na senha.");
    valido = false;
  }

  // As regras são independentes: todos os erros já foram apresentados.
  if (!valido) {
    // !valido significa "não válido".
    // Localiza o primeiro campo marcado, na ordem do formulário.
    const primeiroInvalido = formulario.querySelector(".campo-invalido");

    // Direciona a navegação para a primeira correção necessária.
    primeiroInvalido.focus();

    // Encerra esta tentativa para não mostrar a confirmação.
    return;
  }

  // Só executa quando nenhuma regra marcou valido como false.
  mensagemSucesso.textContent = "Dados válidos! Inscrição simulada; nada foi enviado ou salvo.";
  mensagemSucesso.classList.add("sucesso");
});

// ============================================================
// 4. EDIÇÃO: retira confirmações antigas quando os dados mudam.
// ============================================================
formulario.addEventListener("input", function () {
  // O evento dos campos se propaga até o formulário.
  // Isso permite observar a edição dos três campos com um ouvinte.
  limparSucesso();

  // Neste projeto, os erros são reavaliados no próximo submit.
  // Não afirmamos que um campo ficou válido só porque foi editado.
});

// ============================================================
// 5. LIMPEZA: restaura valores e remove estados visuais.
// ============================================================
botaoLimpar.addEventListener("click", function () {
  // reset restaura os valores iniciais definidos no HTML.
  // Como os campos deste HTML começam vazios, voltam a ficar vazios.
  formulario.reset();

  // reset não apaga mensagens ou classes adicionadas pelo JS.
  limparMensagens();

  // Deixa a interface pronta para um novo preenchimento.
  campoNome.focus();
});
```

---

## 12. Entendendo as decisões do gabarito

### 12.1. Por que criar funções auxiliares?

Nome, e-mail e senha precisam da mesma sequência: escrever mensagem, adicionar classe e informar estado inválido. A função `mostrarErro` descreve essa tarefa uma vez.

Na chamada `mostrarErro(campoNome, erroNome, "Informe seu nome.")`, os três argumentos ocupam os parâmetros `campo`, `elementoMensagem` e `texto`. É como uma ordem de manutenção que informa **onde agir**, **onde registrar o aviso** e **qual aviso escrever**.

Não estamos passando strings com os nomes das variáveis. Estamos passando referências reais aos elementos, além do texto da mensagem.

### 12.2. Por que usar vários `if`?

Nome, e-mail e senha podem estar errados ao mesmo tempo. Por isso, as verificações dos campos são independentes. Um único encadeamento `if / else if / else if` entre os três campos mostraria apenas um dos erros por tentativa.

Dentro da regra do e-mail, usamos `else if`: quando ele está vazio, preferimos a mensagem de obrigatoriedade. A avaliação de formato fica para um valor preenchido.

### 12.3. Por que `valido` começa como `true` a cada envio?

Cada tentativa precisa ser avaliada novamente. Começamos supondo que passará; qualquer regra descumprida muda o resultado para `false`. Um campo correto não pode restaurar `true` depois que outro campo já encontrou um erro.

| Momento | Dados | Valor de `valido` |
| --- | --- | --- |
| Início da tentativa | Ainda não avaliados | `true` |
| Nome | Vazio | `false` |
| E-mail | Correto | Continua `false` |
| Senha | Correta | Continua `false` |
| Resultado | Há erro no nome | Não mostra sucesso |

### 12.4. Por que limpar a interface também?

Apagar o valor de um campo não apaga automaticamente o parágrafo de erro. São elementos diferentes. Da mesma forma, `reset()` não remove classes nem mensagens personalizadas.

O estado da interface inclui **valores**, **mensagens**, **classes** e **atributos**. Limpar a atividade significa cuidar de todos esses elementos.

### 12.5. Por que a confirmação some durante a edição?

Se o usuário validou os dados e depois apagou o nome, a confirmação anterior não descreve mais os valores atuais. O evento `input` remove essa confirmação. Os erros serão recalculados no próximo envio.

Neste exemplo, escutamos `input` no formulário porque esse evento se propaga a partir dos campos. Essa propagação é chamada de **bubbling**. Se precisássemos saber qual campo foi editado, poderíamos consultar `evento.target`.

**Verificação:** o que aconteceria se `limparMensagens()` não fosse chamado no início de uma nova tentativa?

---
