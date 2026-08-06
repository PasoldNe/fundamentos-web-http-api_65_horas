# Aula 06 — Layout com Flexbox

**Módulo:** Fundamentos de Arquitetura Web, Protocolo HTTP, Conceitos de API REST, HTML, CSS e JavaScript
**Carga horária da aula:** 4 horas
**Professor(a):** @karizeviecelli

---

## 🎯 Objetivos da Aula

Ao final desta aula, você será capaz de:

- Ativar o Flexbox com `display: flex` e entender o eixo principal e o eixo cruzado.
- Distribuir espaço entre itens com `justify-content` e `align-items`.
- Controlar quebra de linha com `flex-wrap` e espaçamento com `gap`.
- Ajustar o comportamento individual de um item com `flex`, `flex-grow`, `flex-shrink`, `align-self` e `order`.
- Construir uma barra de navegação e uma grade de cards usando Flexbox.

---

## 🖼️ Analogia Inicial: os móveis da sala se ajustam ao espaço

Até agora, cada caixa (Aula 5) era um quadro fixo na parede, com tamanho e posição definidos manualmente. O Flexbox muda essa lógica: é como **organizar os móveis de uma sala com um decorador inteligente**.

Você diz ao decorador (o `display: flex` no elemento pai) qual é a "direção da sala" — os móveis ficam em fila (`row`) ou empilhados (`column`). Depois, você dá instruções gerais, e ele se vira para encaixar tudo:

- **`justify-content`:** "Encoste os móveis à esquerda", "distribua com espaço igual entre eles", "centralize tudo".
- **`align-items`:** "Alinhe todos pela base", "centralize na altura da parede".
- **`flex-wrap`:** "Se não couber tudo na fila, pode continuar numa segunda fileira".
- **`gap`:** "Deixe sempre esse tanto de espaço entre um móvel e outro".

E cada móvel também pode ter uma personalidade própria: um sofá pode "crescer" para ocupar o espaço sobrante (`flex-grow`), uma poltrona pode pedir para "encolher" se faltar espaço (`flex-shrink`), e você pode pedir para um quadro específico ficar centralizado mesmo que os outros estejam alinhados embaixo (`align-self`).

O Flexbox tira de você o trabalho manual de calcular posição — você descreve a intenção, e o navegador organiza.

---

## 📚 Conteúdo Teórico

### 1. Ativando o Flexbox e os dois eixos

```css
/* O display:flex é aplicado no elemento PAI (o "container") */
.container {
  display: flex;

  /* flex-direction define o EIXO PRINCIPAL (main axis) */
  flex-direction: row; /* padrão: itens em fila, da esquerda para a direita */
  /* outras opções: column, row-reverse, column-reverse */
}
```

Assim que um elemento vira `display: flex`, todos os seus **filhos diretos** (não os netos) passam a ser "itens flexíveis" e se organizam automaticamente em fila (ou coluna), sem precisar de `float` ou de truques antigos de posicionamento.

Dois eixos importantes:

- **Eixo principal (main axis):** a direção da fila — horizontal se `flex-direction: row`.
- **Eixo cruzado (cross axis):** perpendicular ao principal — vertical se `flex-direction: row`.

`justify-content` trabalha no eixo principal. `align-items` trabalha no eixo cruzado. Essa é a maior fonte de confusão de quem está começando — decore essa regra.

### 2. Distribuindo espaço: `justify-content` e `align-items`

```css
.navbar {
  display: flex;

  /* JUSTIFY-CONTENT: como distribuir os itens no eixo PRINCIPAL (horizontal aqui) */
  justify-content: space-between; /* primeiro item na ponta esquerda, último na direita, resto espaçado igual */
  /* outras opções: flex-start, flex-end, center, space-around, space-evenly */

  /* ALIGN-ITEMS: como alinhar os itens no eixo CRUZADO (vertical aqui) */
  align-items: center; /* centraliza verticalmente, mesmo que os itens tenham alturas diferentes */
  /* outras opções: flex-start, flex-end, stretch, baseline */

  padding: 16px 24px;
  background-color: #1e293b;
}
```

### 3. `flex-wrap` e `gap`: quando os móveis não cabem na fila

```css
.grade-de-cards {
  display: flex;
  flex-wrap: wrap; /* se não couber tudo numa linha, continua na próxima */

  gap: 16px; /* espaço entre os itens, tanto na horizontal quanto na vertical */
  /* gap é muito mais simples do que usar margin em cada item */
}
```

Sem `flex-wrap: wrap` (o padrão é `nowrap`), os itens tentam encolher para caber todos na mesma linha — o que pode espremer o conteúdo de forma feia. Com `wrap`, o excesso simplesmente "desce" para uma nova linha, como texto que quebra ao chegar na margem da página.

### 4. Propriedades dos itens: `flex`, `flex-grow`, `flex-shrink`, `align-self`, `order`

```css
.item {
  /* FLEX-GROW: o quanto este item "cresce" para ocupar espaço sobrando (proporção) */
  flex-grow: 1; /* todos os itens com grow:1 dividem o espaço restante igualmente */

  /* FLEX-SHRINK: o quanto este item "encolhe" quando falta espaço */
  flex-shrink: 1; /* padrão — o item pode encolher se necessário */

  /* FLEX-BASIS: o tamanho "de partida" do item, antes de crescer/encolher */
  flex-basis: 200px;

  /* Atalho comum: flex: grow shrink basis; */
  flex: 1 1 200px;
}

.item-especial {
  /* ALIGN-SELF: sobrescreve o align-items só para ESTE item */
  align-self: flex-end;

  /* ORDER: muda a ordem visual sem mudar a ordem no HTML */
  order: -1; /* itens com order menor aparecem primeiro (padrão de todos é 0) */
}
```

Pense em `flex-grow` como "quantas partes deste espaço sobrando eu quero" — se um item tem `flex-grow: 2` e os outros `flex-grow: 1`, ele fica com o dobro do espaço extra disponível.

---

<a id="atividade"></a>
## 💻 Atividade Prática

**Duração sugerida:** 90 minutos
**Formato:** individual, com apoio em dupla
**⭐ Checkpoint 2 do projeto final**

### Parte 1 — Barra de navegação com Flexbox

Crie uma página `navbar.html` com uma barra de navegação no topo, contendo:

1. Um logotipo/nome do site à esquerda e uma lista de links (`<a>`) à direita, usando `display: flex` e `justify-content: space-between`.
2. Todos os itens alinhados verticalmente ao centro com `align-items: center`.
3. Espaçamento consistente entre os links usando `gap` (não use `margin` em cada link).

### Parte 2 — Grade de cards responsiva

Na mesma página (ou em uma nova seção), crie uma **grade de pelo menos 6 cards** (produtos, artigos, hobbies — sua escolha):

1. Container dos cards com `display: flex` e `flex-wrap: wrap`.
2. Cada card com `flex: 1 1 200px` (ou valores parecidos), para que cresçam/encolham e quebrem linha quando necessário.
3. Use `gap` para o espaçamento entre os cards.
4. Escolha **um card** para se destacar: aplique `order: -1` para ele aparecer primeiro, mesmo estando no meio do HTML.
5. Redimensione a janela do navegador e observe os cards se reorganizando automaticamente.

### Parte 3 — Perguntas de fixação

1. Qual a diferença entre o eixo principal (main axis) e o eixo cruzado (cross axis)? O que muda quando `flex-direction` é `column`?
2. Qual propriedade você usaria para distribuir itens com espaço igual entre eles, mas SEM espaço nas pontas? E para ter espaço igual também nas pontas?
3. Para que serve o `flex-wrap: wrap`, e o que acontece por padrão sem ele?
4. Se um item tem `flex-grow: 3` e os outros três itens têm `flex-grow: 1` cada, como o espaço sobrando é dividido entre eles?

Quando terminar, confira sua resposta no gabarito.

[Ver Gabarito »](#gabarito)

---

<a id="gabarito"></a>
## ✅ Gabarito

### Parte 1 — Barra de navegação com Flexbox

```html
<nav class="navbar">
  <div class="logo">MeuSite</div>
  <ul class="nav-links">
    <li><a href="#">Início</a></li>
    <li><a href="#">Sobre</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between; /* 1) logo à esquerda, links à direita */
  align-items: center;             /* 2) tudo alinhado verticalmente ao centro */
  padding: 16px 24px;
  background-color: #1e293b;
  color: white;
}

.nav-links {
  display: flex;      /* a lista de links também vira um container flex */
  gap: 20px;           /* 3) espaçamento entre os links, sem precisar de margin individual */
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
}
```

### Parte 2 — Grade de cards responsiva

```css
.grade-de-cards {
  display: flex;      /* 1) */
  flex-wrap: wrap;     /* 1) permite quebrar linha */
  gap: 16px;            /* 3) */
}

.card {
  flex: 1 1 200px;      /* 2) cresce, encolhe, começa com 200px */
  padding: 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}

.card-destaque {
  order: -1;             /* 4) aparece primeiro visualmente, mesmo estando no meio do HTML */
  border-color: #3b82f6;
}
```

### Parte 3 — Perguntas de fixação

1. O eixo principal é a direção em que os itens fluem (definida por `flex-direction`); o eixo cruzado é perpendicular a ele. Com `flex-direction: row` (padrão), o principal é horizontal e o cruzado é vertical. Com `flex-direction: column`, isso se inverte: o principal passa a ser vertical (`justify-content` passa a controlar o alinhamento vertical) e o cruzado horizontal (`align-items` passa a controlar o alinhamento horizontal).
2. `justify-content: space-between` distribui espaço igual apenas entre os itens, sem espaço nas pontas (o primeiro encosta no início, o último no fim). `justify-content: space-evenly` distribui espaço igual entre todos os itens E também nas pontas.
3. `flex-wrap: wrap` permite que os itens continuem em uma nova linha quando não cabem todos na mesma fileira. Por padrão (`flex-wrap: nowrap`), os itens tentam encolher (respeitando `flex-shrink`) para caber todos na mesma linha, o que pode espremer o conteúdo.
4. O espaço sobrando é dividido em partes proporcionais aos valores de `flex-grow`: neste caso há 3+1+1+1 = 6 "partes" no total. O item com `flex-grow: 3` recebe 3/6 (metade) do espaço extra, e cada um dos outros três recebe 1/6.

[« Voltar para a Atividade](#atividade)
