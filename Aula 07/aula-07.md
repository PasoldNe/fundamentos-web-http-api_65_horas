# Aula 07 — Layout com CSS Grid

**Módulo:** Fundamentos de Arquitetura Web, Protocolo HTTP, Conceitos de API REST, HTML, CSS e JavaScript
**Carga horária da aula:** 4 horas
**Professor(a):** @karizeviecelli

---

## 🎯 Objetivos da Aula

Ao final desta aula, você será capaz de:

- Ativar o CSS Grid com `display: grid` e definir colunas e linhas.
- Posicionar itens manualmente com `grid-column` e `grid-row`.
- Criar layouts nomeando áreas com `grid-template-areas`.
- Reconhecer quando usar Grid em vez de Flexbox (e vice-versa).
- Construir um layout de dashboard com áreas nomeadas.

---

## 🖼️ Analogia Inicial: a planta baixa da casa

Se o Flexbox organiza os móveis em uma única fila, o CSS Grid é a **planta baixa completa da casa** — o arquiteto desenha uma grade no papel, divide o terreno em linhas e colunas, e diz exatamente onde fica cada cômodo: "a sala ocupa da coluna 1 à coluna 3, na linha 1"; "a cozinha fica na coluna 3, linhas 1 e 2".

Enquanto o Flexbox pensa em **uma dimensão** (uma fila, horizontal ou vertical), o Grid pensa em **duas dimensões ao mesmo tempo** (linhas E colunas juntas). É a ferramenta certa quando você precisa controlar a página inteira — um dashboard, uma home page, um layout de jornal — e não apenas alinhar alguns itens em fila.

- **`display: grid`:** "este terreno agora é uma planta baixa quadriculada."
- **`grid-template-columns` / `grid-template-rows`:** o tamanho de cada coluna e linha do terreno.
- **`grid-column` / `grid-row`:** "este cômodo específico ocupa estas coordenadas."
- **`grid-template-areas`:** dar nome a cada cômodo e desenhar a planta usando os nomes, como um mapa visual direto no CSS.

---

## 📚 Conteúdo Teórico

### 1. Ativando o Grid e definindo colunas/linhas

```css
.dashboard {
  display: grid;

  /* grid-template-columns define quantas colunas existem e o tamanho de cada uma */
  grid-template-columns: 200px 1fr 1fr; /* 1ª coluna fixa, as outras duas dividem o espaço restante */

  /* grid-template-rows define quantas linhas existem e a altura de cada uma */
  grid-template-rows: 80px auto 60px; /* cabeçalho, conteúdo (altura automática), rodapé */

  gap: 12px; /* espaço entre linhas E colunas, como no Flexbox */
}
```

A unidade `fr` (fraction) é exclusiva do Grid: representa "uma fração do espaço disponível". Se você tem `1fr 1fr`, cada coluna recebe metade do espaço sobrando, depois de descontar os tamanhos fixos.

### 2. Posicionando itens manualmente: `grid-column` e `grid-row`

```css
.item-menu {
  /* grid-column: linha-inicial / linha-final das colunas */
  grid-column: 1 / 2; /* ocupa só a coluna 1 */
  grid-row: 1 / 3;    /* ocupa da linha 1 até a linha 3 (ou seja, 2 linhas) */
}

.item-destaque {
  grid-column: 2 / 4; /* ocupa da coluna 2 até a coluna 4 (2 colunas de largura) */
  /* Atalho: grid-column: span 2; também funciona, e é mais fácil de ler */
}
```

Pense nas linhas da grade como as linhas de um caderno quadriculado: elas ficam **entre** as colunas/linhas de conteúdo, numeradas a partir de 1. Um item que ocupa da linha 1 até a 3 está "esticado" por duas células.

### 3. `grid-template-areas`: nomeando os cômodos

```css
.dashboard {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 70px 1fr 50px;
  gap: 12px;

  /* Desenha a planta baixa usando nomes — cada "linha" de texto = uma linha da grade */
  grid-template-areas:
    "cabecalho cabecalho"
    "menu      conteudo"
    "rodape    rodape";
}

.cabecalho { grid-area: cabecalho; }
.menu      { grid-area: menu; }
.conteudo  { grid-area: conteudo; }
.rodape    { grid-area: rodape; }
```

Repetir o mesmo nome em células vizinhas faz o elemento "ocupar" aquele espaço todo — como `cabecalho cabecalho`, que estica o cabeçalho pelas duas colunas. Essa é, de longe, a forma mais legível de descrever um layout complexo: só de olhar o CSS, já se enxerga o desenho da página.

### 4. Flexbox x Grid: quando usar cada um

```css
/* FLEXBOX: uma fila de itens (1 dimensão) */
.navbar { display: flex; }         /* itens numa linha */
.lista-de-tags { display: flex; flex-wrap: wrap; } /* itens que quebram linha */

/* GRID: a estrutura da página inteira (2 dimensões) */
.pagina-inteira { display: grid; grid-template-areas: "..."; } /* cabeçalho, menu, conteúdo, rodapé juntos */
.galeria-fotos { display: grid; grid-template-columns: repeat(4, 1fr); } /* grade fixa de colunas */
```

Regra prática: se você está alinhando itens **em fila** (uma navbar, uma lista de botões), pense em Flexbox primeiro. Se você está desenhando **a estrutura geral da página** ou uma grade fixa (galeria, dashboard, formulário com colunas), pense em Grid primeiro. Nada impede usar os dois juntos — Grid para a página, Flexbox dentro de um card específico.

---

<a id="atividade"></a>
## 💻 Atividade Prática

**Duração sugerida:** 90 minutos
**Formato:** individual, com apoio em dupla

### Parte 1 — Layout de dashboard com áreas nomeadas

Crie uma página `dashboard.html` representando o painel de um sistema (pode ser fictício: painel de vendas, painel de estudos, painel de um app), contendo:

1. Um container principal com `display: grid` e `grid-template-columns` + `grid-template-rows` definidos.
2. Uso de `grid-template-areas` para nomear pelo menos 4 áreas: `cabecalho`, `menu`, `conteudo` e `rodape`.
3. Cada área associada ao seu elemento HTML via `grid-area`.
4. O `cabecalho` deve ocupar a largura toda (esticado pelas colunas).
5. Dentro da área `conteudo`, crie uma sub-grade (`display: grid` novamente) com pelo menos 3 cards de estatísticas, usando `grid-template-columns: repeat(3, 1fr)`.

### Parte 2 — Perguntas de fixação

Responda com suas palavras:

1. Qual a principal diferença entre Flexbox e CSS Grid, em termos de dimensões controladas?
2. O que representa a unidade `fr`, e como ela se comporta quando misturada com valores fixos (ex.: `200px 1fr 1fr`)?
3. O que significa repetir o mesmo nome de área duas vezes seguidas dentro de `grid-template-areas`?
4. Dê um exemplo de situação em que você usaria Flexbox DENTRO de um item posicionado por Grid.

Quando terminar, confira sua resposta no gabarito.

[Ver Gabarito »](#gabarito)

---

<a id="gabarito"></a>
## ✅ Gabarito

### Parte 1 — Layout de dashboard com áreas nomeadas

```html
<div class="dashboard">
  <header class="cabecalho">Meu Painel</header>
  <nav class="menu">Menu lateral</nav>
  <main class="conteudo">
    <div class="cards-stats">
      <div class="stat-card">Vendas: 120</div>
      <div class="stat-card">Clientes: 45</div>
      <div class="stat-card">Ticket médio: R$80</div>
    </div>
  </main>
  <footer class="rodape">© 2026</footer>
</div>
```

```css
.dashboard {
  display: grid;                              /* 1) */
  grid-template-columns: 200px 1fr;             /* 1) */
  grid-template-rows: 70px 1fr 50px;             /* 1) */
  gap: 12px;
  grid-template-areas:                            /* 2) */
    "cabecalho cabecalho"                          /* 4) cabeçalho esticado pelas 2 colunas */
    "menu      conteudo"
    "rodape    rodape";
}

.cabecalho { grid-area: cabecalho; }   /* 3) */
.menu      { grid-area: menu; }         /* 3) */
.conteudo  { grid-area: conteudo; }     /* 3) */
.rodape    { grid-area: rodape; }       /* 3) */

.cards-stats {
  display: grid;                             /* 5) sub-grade dentro da área conteudo */
  grid-template-columns: repeat(3, 1fr);      /* 5) 3 colunas iguais */
  gap: 10px;
}

.stat-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}
```

### Parte 2 — Perguntas de fixação

1. Flexbox controla apenas uma dimensão de cada vez — os itens são organizados ao longo de um único eixo (linha ou coluna). CSS Grid controla duas dimensões simultaneamente — linhas E colunas ao mesmo tempo — o que o torna ideal para a estrutura geral de uma página.
2. `fr` representa uma "fração" do espaço disponível no container. Quando misturada com valores fixos, o navegador primeiro reserva o espaço fixo (`200px`) e depois divide o espaço RESTANTE entre as unidades `fr` — em `200px 1fr 1fr`, as duas últimas colunas dividem igualmente o que sobrou após os 200px.
3. Repetir o mesmo nome em células vizinhas (na mesma linha ou coluna) faz aquele elemento "esticar" e ocupar todas as células repetidas como uma área única — por exemplo, `"cabecalho cabecalho"` faz o cabeçalho ocupar as duas colunas daquela linha.
4. Um exemplo comum: dentro da área `menu` (posicionada pelo Grid na estrutura geral), usar `display: flex; flex-direction: column; gap: 8px;` para organizar os links do menu em uma lista vertical bem espaçada — Grid cuida da posição do menu na página, Flexbox cuida da organização interna dos itens do menu.

[« Voltar para a Atividade](#atividade)
