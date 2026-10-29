# Respostas - Aula 10

## Planejamento do cadastro

No envio, vou impedir que a página recarregue e limpar as mensagens anteriores. Depois vou ler os campos e verificar se o nome foi preenchido, se o e-mail tem um formato válido e se a senha tem pelo menos 6 caracteres. Se houver erros, vou mostrar todos e colocar o foco no primeiro campo inválido. Se estiver tudo certo, vou mostrar a confirmação de validação.

Ao clicar em Limpar, vou apagar os valores, as mensagens, as bordas de erro e a confirmação. Depois o foco volta para o nome.

## Perguntas de fixação

1. **O que é o DOM e como ele se relaciona com o HTML?**
   O DOM é a representação do documento em uma árvore de elementos. O navegador monta essa estrutura a partir do HTML e o JavaScript pode acessar e alterar seus elementos. Essas mudanças aparecem na página, mas não alteram o arquivo HTML salvo.

2. **Qual a diferença entre `querySelector` e `querySelectorAll`?**
   O `querySelector` retorna o primeiro elemento que combina com o seletor. O `querySelectorAll` retorna uma coleção com todos os elementos encontrados, que pode ser percorrida com `forEach`.

3. **Por que `getElementById("nome")` não usa `#`, mas `querySelector("#nome")` usa?**
   O `getElementById` já procura especificamente um ID. O `querySelector` recebe um seletor CSS, então o `#` indica que estamos procurando pelo ID, e não por uma tag.

4. **Qual propriedade lê o conteúdo digitado em um campo?**
   A propriedade `value`. Por exemplo, `campoNome.value` pega o texto que está no campo naquele momento.

5. **Quando usar `textContent` em vez de `innerHTML`?**
   Quando quero mostrar apenas um texto, como uma saudação ou mensagem de erro. O `innerHTML` interpreta tags HTML, enquanto o `textContent` mostra o conteúdo como texto, inclusive se a pessoa digitar uma tag.

6. **O que `classList.toggle()` faz em dois cliques seguidos?**
   Se a classe não existe, o primeiro clique adiciona e o segundo remove. Se ela já existe, acontece o contrário. Isso permite ligar e desligar o destaque de um painel.

7. **Qual a diferença entre `input` e `change` em um campo de texto?**
   O `input` acontece a cada edição, como digitar, colar ou apagar. O `change` acontece quando a mudança é confirmada, normalmente ao sair do campo depois de alterar o texto.

8. **O que `preventDefault()` cancela no formulário? Ele encerra a função?**
   Cancela o envio padrão, que poderia navegar para outra página ou recarregar a atual. Ele não encerra a função. Para parar a execução naquele ponto, usamos `return`.

9. **Por que escutar `submit` no formulário, em vez de apenas `click` no botão?**
   Porque o formulário também pode ser enviado pelo teclado, usando Enter. Escutar o `submit` faz os dois jeitos passarem pela mesma validação.

10. **Para que serve `novalidate` neste projeto?**
    Para desativar o bloqueio automático do navegador no envio e deixar o JavaScript mostrar as mensagens da atividade. Ainda podemos consultar `validity.typeMismatch` para verificar o formato do e-mail.

11. **Por que `reset()` sozinho não limpa toda a interface?**
    Porque ele restaura os valores dos campos, mas não remove os textos das mensagens, as classes de erro nem os atributos adicionados pelo JavaScript. Precisamos limpar essas partes também.

12. **Mostrar uma mensagem de sucesso significa que os dados foram salvos?**
    Não. Nesta atividade a mensagem só confirma que os dados passaram pelas regras. Nenhuma conta é criada e os dados não são enviados nem salvos.

## Para pensar - Atividades

1. Os IDs diferenciam letras maiúsculas e minúsculas. Procurar `Mensagem` quando o HTML usa `mensagem` retorna `null`.
2. O `value` guarda o valor do campo. O `textContent` muda o texto do parágrafo que mostra a resposta.
3. Não aceitamos `2.5` porque a compra é de cadernos inteiros, sem fração de unidade.
4. A mensagem escrita permite entender se as inscrições estão abertas ou encerradas sem depender somente da cor.
5. Três acertos e uma perda resultam em 25 pontos. A mensagem será “Continue tentando!”.

## Bilhete de saída

O clique em Validar inscrição dispara o evento `submit`, que é interceptado pelo JavaScript.
O programa lê o `value` de cada campo e verifica cada condição.
Quando encontra um erro, altera o `textContent` da mensagem e usa `classList` para adicionar a borda de erro.
Depois coloca o foco no primeiro campo inválido para facilitar a correção.
