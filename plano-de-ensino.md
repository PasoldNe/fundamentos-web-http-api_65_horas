# Plano de Ensino — Arquitetura Web, HTTP, API REST, HTML, CSS e JavaScript

**Curso:** Técnico em Desenvolvimento de Sistemas

**Módulo:** Fundamentos de Arquitetura Web, Protocolo HTTP, Conceitos de API REST, HTML, CSS e JavaScript

**Carga Horária:** 65 horas

**Professor(a):** @karizeviecelli

**Data de elaboração:** 05 de agosto de 2026

---

## Ementa

*Fundamentos de arquitetura da Web (cliente-servidor, DNS, hospedagem) e do protocolo HTTP (métodos, status codes, headers, ciclo requisição-resposta). 

Construção de páginas web com HTML: estrutura, elementos semânticos, formulários, tabelas e multimídia. Linguagem CSS: seletores, propriedades, box model, flexbox, grid, responsividade. Linguagem JavaScript: lógica de programação, manipulação do DOM, eventos e, na etapa de aprofundamento, Conceitos de API REST (recursos, verbos, JSON) e consumo de dados reais via `fetch`. Projeto final: painel/aplicação web funcional, integrando HTML, CSS, JavaScript e consumo de uma API REST.

---

## Objetivos Pedagógicos

### Objetivo Geral

Capacitar o estudante a compreender a arquitetura da Web e o protocolo HTTP, e a projetar e desenvolver interfaces web completas com HTML e CSS, dinamizadas com JavaScript, incluindo o consumo de dados de APIs REST.

### Objetivos Específicos

1. Compreender o modelo cliente-servidor e o funcionamento da internet.
2. Entender o protocolo HTTP: métodos, headers, status codes e ciclo de vida da requisição.
3. Utilizar elementos HTML para estruturar texto, imagens, tabelas, formulários e conteúdo multimídia.
4. Aplicar estilos CSS para controlar aparência, espaçamento, cores e tipografia.
5. Construir layouts flexíveis e responsivos com Flexbox e CSS Grid.
6. Programar lógica e interatividade com JavaScript, manipulando o DOM e tratando eventos.
7. Compreender Conceitos de API REST (recursos, verbos, JSON, autenticação básica).
8. Consumir APIs REST com `fetch`, tratando respostas, erros e status codes.
9. Desenvolver um projeto final funcional que integre todos os conceitos do módulo.

---

## Fases do Curso

| Fase | Tema | Aulas | Conteúdo |
|---|---|---|---|
| 1 | Fundamentos de Arquitetura Web e HTTP | 1 | Cliente-servidor, DNS, hospedagem, métodos HTTP, headers, status codes |
| 2 | HTML | 2–3 | Estrutura básica, semântica, formulários, tabelas, multimídia |
| 3 | CSS | 4–6 | Seletores, box model, Flexbox, Grid, responsividade |
| 4 | JavaScript — Fundamentos | 7–10 | Lógica, variáveis, funções, DOM, eventos |
| 5 | JavaScript — Aprofundamento e API REST | 11–14 | Conceitos de API REST, JSON, `fetch`, autenticação, tratamento de erros |
| 6 | Projeto Final | 15–17 | Integração HTML+CSS+JS+API, publicação no GitHub, apresentação |

---

## Conteúdo Programático (Ementa Detalhada)

### 1. Fundamentos de Arquitetura Web
- Modelo cliente-servidor e funcionamento da internet
- DNS, URLs, domínios e hospedagem
- Arquitetura de aplicações web (front-end, back-end, banco de dados)

### 2. Protocolo HTTP
- Ciclo de vida da requisição e resposta
- Métodos HTTP: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`
- Headers e códigos de status (2xx, 3xx, 4xx, 5xx)
- Ferramentas de inspeção: DevTools, Postman/Thunder Client

### 3. HTML — Estrutura e Semântica
- Estrutura básica: `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`
- Tags de título (`<h1>` a `<h6>`), parágrafo (`<p>`), quebra de linha (`<br>`)
- Ênfase e destaque com `<strong>` e `<em>`
- Hiperligações (`<a>`) e caminhos absolutos/relativos
- Imagens (`<img>`) e atributos `src`, `alt`, `width`, `height`
- Listas ordenadas (`<ol>`) e não ordenadas (`<ul>`)
- Elementos semânticos: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Tabelas: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<td>`, `<th>`
- Formulários: `<form>`, `<input>`, `<label>`, `<textarea>`, `<select>`, `<button>`, atributos `action`, `method`, `name`
- Multimídia: `<video>`, `<audio>`, `<iframe>`

### 4. Introdução ao CSS
- Formas de inclusão: inline, interno (`<style>`) e externo (`<link>`)
- Seletores: de tag, classe (`.`), id (`#`), universal (`*`), descendente, filho (`>`)
- Propriedades básicas: `color`, `background-color`, `font-family`, `font-size`, `text-align`
- Unidades: `px`, `%`, `em`, `rem`, `vh`, `vw`

### 5. Box Model e Espaçamento
- Conceito de box model: `content`, `padding`, `border`, `margin`
- Propriedades: `width`, `height`, `padding`, `margin`, `border`
- `box-sizing: border-box;`
- `display`: `block`, `inline`, `inline-block`, `none`

### 6. Layout com Flexbox
- Propriedades do container: `display: flex`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`, `gap`
- Propriedades dos itens: `flex`, `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`, `order`
- Exemplos práticos: centralização, barra de navegação, grade de cards

### 7. Layout com CSS Grid
- Definição: `display: grid`, `grid-template-columns`, `grid-template-rows`, `gap`
- Posicionamento: `grid-column`, `grid-row`, `grid-area`
- Áreas nomeadas: `grid-template-areas`
- Comparação entre Flexbox e Grid

### 8. Responsividade e Media Queries
- Conceito de design responsivo
- Sintaxe de media queries: `@media (max-width: 768px) { ... }`
- Breakpoints comuns (480px, 768px, 1024px)
- Imagens fluídas, unidades relativas e mobile first

### 9. JavaScript — Lógica e Fundamentos
- Variáveis (`let`, `const`) e tipos de dados
- Operadores e estruturas condicionais
- Estruturas de repetição (`for`, `while`)
- Funções: declaração, parâmetros, retorno

### 10. JavaScript — DOM e Eventos
- Seleção de elementos: `querySelector`, `getElementById`
- Manipulação de elementos: `innerHTML`, `classList`, `style`
- Eventos: `click`, `submit`, `input`, `addEventListener`

### 11. Conceitos de API REST
- Recursos, endpoints e verbos HTTP (`GET`, `POST`, `PUT`, `DELETE`)
- Formato JSON: estrutura, tipos de dados, `JSON.parse`/`JSON.stringify`
- Autenticação básica (API keys, tokens)

### 12. Consumindo APIs com JavaScript
- `fetch`, Promises e `async`/`await`
- Tratamento de erros (`try/catch`, verificação de status codes)
- Integração dos dados da API com o DOM (renderização dinâmica)

### 13. Integração com Projeto Final
- Planejamento e wireframe do projeto
- Integração HTML + CSS + JavaScript + API REST
- Estilização temática e boas práticas de organização do código

---

## Cronograma das Aulas

| Aula | Data | Tema | Conteúdo | Atividade |
|---|---|---|---|---|
| 1 | [a definir] | Arquitetura Web e HTTP | Cliente-servidor, DNS, métodos HTTP, status codes | Mapear o ciclo de uma requisição real com DevTools |
| 2 | [a definir] | HTML — Estrutura básica | Tags essenciais, links, imagens, listas | Construir uma página HTML simples |
| 3 | [a definir] | HTML Semântico | Elementos estruturais, tabelas, formulários | Estruturar uma landing page semântica *(checkpoint 1)* |
| 4 | [a definir] | CSS — Fundamentos | Seletores, cores, tipografia | Estilizar a landing page da aula 3 |
| 5 | [a definir] | Box Model | Padding, margin, border, display | Criar cards com espaçamento correto |
| 6 | [a definir] | Flexbox | display:flex, justify-content, align-items | Barra de navegação e grade de cards *(checkpoint 2)* |
| 7 | [a definir] | CSS Grid | grid-template, grid-area, gap | Layout de dashboard com áreas nomeadas |
| 8 | [a definir] | Responsividade | Media queries, unidades relativas, mobile first | Tornar o dashboard responsivo |
| 9 | [a definir] | JavaScript — Lógica | Variáveis, operadores, condicionais, laços | Exercícios de lógica de programação |
| 10 | [a definir] | JavaScript — DOM e Eventos | querySelector, addEventListener, formulários | Interface interativa (validação de formulário) *(checkpoint 3)* |
| 11 | [a definir] | Conceitos de API REST | Recursos, verbos, JSON | Explorar uma API pública com Postman |
| 12 | [a definir] | HTTP na prática | DevTools, headers, autenticação básica | Testar requisições reais com ferramentas de inspeção |
| 13 | [a definir] | `fetch` e consumo de API | Promises, async/await | Exibir dados de uma API na página |
| 14 | [a definir] | Tratamento de erros | try/catch, status codes | Tratar falhas de requisição *(checkpoint 4)* |
| 15 | [a definir] | Projeto Final — Integração | HTML + CSS + JS + API | Desenvolvimento guiado do projeto |
| 16 | [a definir] | Projeto Final — Refinamento | Testes, organização, publicação | Publicar o projeto no GitHub *(checkpoint 5)* |
| 17 | [a definir] | Apresentação do Projeto Final | — | Apresentação para a turma |

---

## Avaliação

| Instrumento | Peso | Observação |
|---|---|---|
| Atividades práticas | 40% | Entregues ao final de cada aula |
| Checkpoints do projeto final | 30% | Aulas 3, 6, 10, 14 e 16 |
| Apresentação e entrega final | 30% | Entrega na aula 17 |

**Critérios de avaliação do projeto final:**

- Estrutura HTML correta e semântica (15%)
- Estilização CSS completa e responsiva (20%)
- Lógica e interatividade em JavaScript (20%)
- Consumo correto de API REST, com tratamento de erros (25%)
- Organização do código e publicação no GitHub (10%)
- Apresentação e clareza na comunicação (10%)

---

## Recursos Necessários

- Computador com navegador atualizado (Chrome, Firefox ou Edge)
- Editor de código (VS Code, Sublime Text ou editor online)
- Acesso à internet para pesquisas e exemplos
- Conta no GitHub para versionamento e publicação
- Ferramenta de teste de API (Postman ou Thunder Client)
- Projetor multimídia para aulas expositivas

---

## Referências

1. **Mozilla Developer Network (MDN).** *HTML: Linguagem de Marcação de Hipertexto*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/HTML>
2. **Mozilla Developer Network (MDN).** *CSS: Folhas de Estilo em Cascata*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/CSS>
3. **Mozilla Developer Network (MDN).** *HTTP*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/HTTP>
4. **Mozilla Developer Network (MDN).** *JavaScript*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript>
5. **FREEMAN, Eric; ROBSON, Elisabeth.** *Use a Cabeça! HTML e CSS*. 2ª ed. Rio de Janeiro: Alta Books, 2012.
6. **DUCKETT, Jon.** *HTML e CSS: Projete e Construa Websites*. Rio de Janeiro: Alta Books, 2012.
7. **FLANAGAN, David.** *JavaScript: O Guia Definitivo*. Rio de Janeiro: Alta Books.
8. **W3Schools.** *Tutoriais de HTML, CSS e JavaScript*. Disponível em: <https://www.w3schools.com/>
9. **REST API Tutorial.** Disponível em: <https://restfulapi.net>

---

**Elaborado por:** @karizeviecelli
**Data:** 05 de agosto de 2026

---

## Publicação no GitHub

O **GitHub Pages** é gratuito, permite personalizar o domínio e é amplamente usado para publicar materiais de curso.

### Passo a passo

1. Crie uma conta em <https://github.com>, caso ainda não tenha.
2. Crie um repositório novo → nome sugerido: **fundamentos-web-http-api**.
3. Marque **Add a README file** → clique em **Create repository**.
4. Faça o upload deste `plano-de-ensino.md`, do `README.md` do curso e dos arquivos de aula (`.md`).
5. Vá em **Settings** → **Pages** → **Branch: main** → **Save**.

Em cerca de 1 minuto, o material estará disponível em:

**https://karizeviecelli.github.io/fundamentos-web-http-api/**

**Vantagem:** link permanente e profissional, que pode ser atualizado sempre que novas aulas forem publicadas.
