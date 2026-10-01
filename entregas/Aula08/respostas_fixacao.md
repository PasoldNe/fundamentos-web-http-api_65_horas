# Respostas - Perguntas de Fixação (Aula 07 e Aula 08)

## Aula 07
1. **Qual a principal diferença entre Flexbox e CSS Grid, em termos de dimensões controladas?**
   O Flexbox controla apenas uma dimensão por vez (ou linha ou coluna), sendo ideal para alinhar itens. Já o CSS Grid controla duas dimensões simultaneamente (linhas e colunas juntas), sendo a ferramenta ideal para a estruturação e o layout geral da página.

2. **O que representa a unidade `fr`, e como ela se comporta quando misturada com valores fixos?**
   A unidade `fr` (fração) representa uma fração do espaço disponível no contêiner. Quando misturada com valores fixos (ex.: `200px 1fr 1fr`), o navegador primeiro reserva o tamanho fixo (200px) e, em seguida, divide o espaço restante nas proporções definidas pelas unidades `fr` (neste caso, metades iguais).

3. **O que significa repetir o mesmo nome de área duas vezes seguidas dentro de `grid-template-areas`?**
   Significa que o elemento correspondente àquela área irá se "esticar" para ocupar as múltiplas células ou colunas em que o nome se repete. Exemplo: "cabecalho cabecalho" faz o cabeçalho ocupar o espaço de duas colunas.

4. **Dê um exemplo de situação em que você usaria Flexbox DENTRO de um item posicionado por Grid.**
   Ao posicionar a área de "menu" com CSS Grid, posso usar `display: flex` dentro do "menu" para organizar os links (por exemplo, na horizontal com `gap` ou alinhados verticalmente de forma distribuída).

---

## Aula 08
1. **Qual a diferença entre `max-width` e `min-width` em uma media query? Em que situação cada uma é mais indicada?**
   - `max-width`: Aplica o CSS a telas até aquela largura máxima (ex: <= 768px). É mais indicada ao fazer responsividade "Desktop First".
   - `min-width`: Aplica o CSS a telas a partir daquela largura mínima (ex: >= 768px). É mais indicada na abordagem "Mobile First".

2. **Por que `px` é considerado um valor "fixo" e `rem`/`vw` são considerados "relativos"? Dê um exemplo prático da diferença.**
   O `px` é uma medida absoluta, fixa na tela (16px serão sempre 16px). Já o `rem` se baseia no tamanho da fonte base do navegador, e o `vw` se baseia na largura da tela (viewport). Exemplo: `width: 50vw` significa que a largura ocupará exatamente a metade da tela do dispositivo em uso, independentemente do seu tamanho, ao contrário de `width: 500px`.

3. **O que significa a abordagem "mobile first", e por que ela costuma resultar em CSS mais enxuto?**
   A abordagem "Mobile First" começa escrevendo o CSS pensando na tela do celular por padrão, sem media queries, e depois adiciona media queries (geralmente com `min-width`) para adaptar para telas maiores. O CSS fica mais enxuto pois evita ter que desfazer e sobrescrever muitos estilos complexos, aplicando regras de complexidade crescente sob demanda.

4. **Um breakpoint de 768px "quebrou" mal em um layout específico. É correto usar um valor diferente, como 820px? Justifique.**
   Sim, é perfeitamente correto. Os breakpoints tradicionais não são regras absolutas. Se o conteúdo ou layout de uma página "quebra" ou não se acomoda bem em 820px, é recomendado definir o breakpoint exatamente no valor necessário para melhorar a apresentação visual e usabilidade, priorizando a fluidez do próprio design.
