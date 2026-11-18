# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 44 cartões únicos · 44 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 44 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 62 sujeitos · 44 cartão(ões) sem evidência verificada · 34 com unidade candidata · estimativa **264 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 0 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

## Como decidir

Escreva `decisao` em cada átomo, com uma destas cinco palavras:

| `decisao` | Quer dizer |
|---|---|
| `defeito-do-gabarito` | a alegação acertou um defeito que o gabarito cataloga (nomeie a unidade em `unitIds`) |
| `defeito-novo-correto` | está certa, mas o defeito não está no gabarito: vai para a próxima referência |
| `incorreta` | a alegação está errada |
| `duplicada` | é a mesma afirmação de outro átomo já decidido (aponte `duplicateOf`) |
| `evidencia-insuficiente` | não dá para decidir com o que está aqui |

A contabilidade (`reference`/`novel`/`false`/`unresolved`) é derivada disso; você não precisa escrevê-la.

Este pacote inclui todas as alegações selecionadas, inclusive as que casariam por regra.
Candidatos são sugestões de âncora, não vereditos. Você continua sendo a adjudicadora.
Edite reviews.json; depois gere uma NOVA saída com score. Não edite package.json.

Evidência da execução (achado-2) aponta para a cópia preservada do que as ferramentas gravaram durante a execução; confira-a antes das reconstruções.
As capturas scene-* são reconstruções no momento de preparar o pacote, não prova de que o agente observou o mesmo estado.
Confira também reportedEvidence, inclusive as limitações declaradas. Use unresolved quando não houver suporte.

Cartões de linha de base (origem determinística) são revisados como os do agente: é o que permite dizer o que o agente acrescenta ou perde em relação à ferramenta.
Cena = janela do plano de estados. Uma unidade só pode ser creditada por cartão da mesma cena.

Um átomo = um defeito. subjects identifica cada elemento alegado; unitIds contém somente alternativas semanticamente aceitas.
Cada átomo/elemento vale no máximo uma detecção. Divida alegações compostas; contabilize também as partes falsas.
Duplicatas revisadas: no átomo repetido, acrescente duplicateOf: { "cardId": "C-...", "atomId": "..." }. A citação continua avaliada separadamente.

**Vínculo de revisão (exceção declarada):** quando a alegação está certa sobre uma unidade que a ancoragem não ofereceu (ausência global ancorada em <html>/body, host no lugar do controle interno, participante relacionado, transição), acrescente ao átomo `"links"`: [{ "contrato": "vinculo-revisao-1.0.0", "unitId", "subjects", "scene", "state" (estado medido), "relation" (ausencia-global | host-interno | participante-relacionado | transicao), "evidence", "justification", "reviewer" (você), "binding" (o do cartão) }]. Nada cria vínculo por você; o scorer recusa outra cena, estado não medido, relação que não cabe na árvore medida, falta de evidência.

## C-00a233ac4b4f1c9f21bb156e894b27be03c9dd325e2b708a6426549a26c67c6e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro do conteúdo da mensagem de erro aparece um ícone de check (fas fa-check, 24px, x=120) antes de 'Não foi possível salvar o país.', sinal de sucesso numa mensagem de falha. A mensagem de sucesso não tem esse ícone no conteúdo (filhos: título, corpo).

Esperado: A mensagem de erro não deve exibir ícone de sucesso; apenas o ícone de erro na área .icon.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. Tab até #certificado-automatico e Espaço (liga o switch) 3. click #btn-ajuda 4. click #sel-continente [data-trigger] 5. ArrowDown x3 e Enter (América do Sul) 6. Tab 7. click #btn-salvar

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(1)>div:nth-of-type(2)>i" — <i> · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-bc86778b2805b82d6d968dba284abbce20356b099be563b972de226d952e8d15 — U-06 · S1 · cena 1280x900 · <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info": Estrato semeada · classe DS · variante mensagem-com-visual-selecionado · sorteada (a2-ef29db5bb4ac). Em S1, a mensagem de erro (classe danger, ícone times-circle) recebe o visual do estado Selecionado: fundo --blue-warm-vivid-50 (#2670e8), ícone e texto --pure-0, e um ícone fa-check antes do título.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [background-color] em {rgb(38, 112, 232)}. Medido: background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `DOM: <i class='fas fa-check marca-retorno'> visível (display inline-block, cor branca) no #msg-erro .content` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-00a233ac4b4f1c9f21bb156e894b27be03c9dd325e2b708a6426549a26c67c6e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-09cd8063b8f056c7c9935cc556ecc3a2b314186ef80f053c140c9cfe607c2dda

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Interactive controls must not be nested

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:nested-interactive

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(3)" — <div> "América do Sul"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-09cd8063b8f056c7c9935cc556ecc3a2b314186ef80f053c140c9cfe607c2dda",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-122d1d78ab2cbdf6446081b2bacf2a6d5f727db69f0f9f59b474b0f7fd988469

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Interactive controls must not be nested

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:nested-interactive

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(4)" — <div> "Ásia"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-122d1d78ab2cbdf6446081b2bacf2a6d5f727db69f0f9f59b474b0f7fd988469",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-14c97ad13d32d17d8391db097e3f1101a885aa64b7daa43fa917331c210ee850

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Mensagem br-message danger ("Não foi possível salvar o país.") exibida com fundo rgb(38,112,232), azul de informação, e texto branco; a mensagem de orientação (info) também é azul.

Esperado: Mensagem de erro com as cores do estado danger do DS (tons de vermelho), sem se confundir com mensagem informativa

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #btn-salvar (formulário vazio)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(1)" — <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info"

### Unidades candidatas (não são crédito)

- U-bc86778b2805b82d6d968dba284abbce20356b099be563b972de226d952e8d15 — U-06 · S1 · cena 1280x900 · <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info": Estrato semeada · classe DS · variante mensagem-com-visual-selecionado · sorteada (a2-ef29db5bb4ac). Em S1, a mensagem de erro (classe danger, ícone times-circle) recebe o visual do estado Selecionado: fundo --blue-warm-vivid-50 (#2670e8), ícone e texto --pure-0, e um ícone fa-check antes do título.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [background-color] em {rgb(38, 112, 232)}. Medido: background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-14c97ad13d32d17d8391db097e3f1101a885aa64b7daa43fa917331c210ee850",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1b62fb7008fdff63078fff78eabfaa24e55a555be657f935e0cfde46794c643b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O elemento com role='combobox' (div .br-input que envolve rótulo, input e botão) não tem nome acessível: a árvore de acessibilidade mostra 'combobox' sem nome; o rótulo 'Continente' está associado só ao input interno, que tem papel textbox.

Esperado: O combobox deve ter nome acessível ('Continente'), p.ex. com o papel combobox no próprio input rotulado ou aria-labelledby.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(1)" — <div> "Continente Exibir lista"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `browser_snapshot: 'combobox [ref=e66]' sem nome; 'textbox "Continente"' dentro dele` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1b62fb7008fdff63078fff78eabfaa24e55a555be657f935e0cfde46794c643b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-27239bf77850ab6ccce3bae137f00627c5f64848cfabc401ffdb0a2574b810af

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro (br-message danger) aparece com fundo rgb(38,112,232) (azul) e texto branco. A mensagem de sucesso da mesma tela usa o verde semântico rgb(227,245,225).

Esperado: Mensagem de erro com a cor semântica de erro (danger) do DS, não azul.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #btn-salvar

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(1)" — <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info"

### Unidades candidatas (não são crédito)

- U-bc86778b2805b82d6d968dba284abbce20356b099be563b972de226d952e8d15 — U-06 · S1 · cena 1280x900 · <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info": Estrato semeada · classe DS · variante mensagem-com-visual-selecionado · sorteada (a2-ef29db5bb4ac). Em S1, a mensagem de erro (classe danger, ícone times-circle) recebe o visual do estado Selecionado: fundo --blue-warm-vivid-50 (#2670e8), ícone e texto --pure-0, e um ícone fa-check antes do título.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [background-color] em {rgb(38, 112, 232)}. Medido: background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção getComputedStyle backgroundColor` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-27239bf77850ab6ccce3bae137f00627c5f64848cfabc401ffdb0a2574b810af",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2a5cd88e162dc95aae2cc5a9fd978323571d02a2ad5a74ae58e4792fef57c0f8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: \#btn-limpar tem CSS order:1. Posição na tela: Cancelar x=239, Salvar País (primário) x=376, Limpar Campos x=525. Ordem no DOM e do Tab: Cancelar → Limpar Campos → Salvar País. O botão primário não fica à direita e o foco salta de x=239 para x=525 e volta para x=376.

Esperado: Botão primário à direita dos secundários e ordem visual igual à ordem do DOM e do foco (sem reordenação por CSS).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(5)>button:nth-of-type(2)" — <button#btn-limpar> "Limpar Campos"

### Unidades candidatas (não são crédito)

- U-61ac25c5bc7e16b6e55c1166fe6ac0d1cbb0decd0b57b9c5f656f76f87060a1b — U-01 · sempre · cena 1280x900 · <button#btn-limpar> "Limpar Campos": Estrato semeada · classe DS · variante secundario-a-direita-do-primario · sorteada (a2-2ac598dc24db). Limpar Campos (secundário) aparece à direita de Salvar País (primário) na barra de ações: `order: 1` na folha da página; DOM e ordem de Tab inalterados (Cancelar → Limpar → Salvar). Medido: x do Limpar 525,1 > borda direita do Salvar 509,1.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [order] em {1}. Medido: order=1 | order=1 | order=1
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção no navegador: getBoundingClientRect e registro de focusin por Tab` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2a5cd88e162dc95aae2cc5a9fd978323571d02a2ad5a74ae58e4792fef57c0f8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-32ff223f0952ee706d979a27f3bb86ef1d3601179d87b375a2bd0f110c0d20ae

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(6)>div>label" — <label> "Oceania"

### Unidades candidatas (não são crédito)

- U-cad4c1640d6a6e5410e48bb3800db9c4cb324e8d624c4671c5fa9d1c694e34f0 — U-07 · S2 · cena 1280x900 · <label> "África": Estrato semeada · classe G · variante opcoes-texto-claro · sorteada (a2-7348bce34289). Em S2 (lista aberta), os rótulos das 6 opções do select ficam #AAAAAA sobre branco: 2,32:1 (texto 14 px, peso 500); o item selecionado mantém a cor do core.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [color] em {rgb(170, 170, 170)}. Medido: color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-32ff223f0952ee706d979a27f3bb86ef1d3601179d87b375a2bd0f110c0d20ae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3499f433d4c28f2448a0e1f71780dbfedfcd6eaedab1956d57e9e5226f699075

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O rótulo, o campo e o texto de apoio do Código do país usam font-family Arial, Helvetica; os demais campos usam Rawline, Raleway.

Esperado: Tipografia padrão do DS (Rawline) em todos os campos do formulário

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(3)>div>input" — <input#codigo-pais>
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(3)>div>label" — <label> "Código do país (opcional)"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(3)>div>p" — <p#codigo-pais-apoio> "Três letras, como ARG para Argentina."

### Unidades candidatas (não são crédito)

- U-6353869de8ad60ea5ed4964e61b1aae6231b49d2d4ce13856fd1935b3ef6b969 — U-08 · sempre · cena 1280x900 · <input#nome-pais>: Estrato semeada · classe G · variante campo-readonly-ate-clique · sorteada (a2-328f62cfe4ce). O campo Nome do país é `readonly` até receber um clique de ponteiro (script da página): com foco por Tab o texto digitado não entra (valor vazio).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-815feaaa7541159f8b60496efec2e8d5f3ab0051b936ca8f9e4656169e35893a — U-04 · sempre · cena 1280x900 · <div#inp-codigo> "Código do país (opcional) Três letras, como ARG ": Estrato semeada · classe DS · variante fonte-do-sistema · sorteada (a2-a39f3ad397d4). O campo do código usa Arial (`font-family: Arial, Helvetica, sans-serif` na raiz .br-input pela folha da página): rótulo, campo e texto de apoio com Arial declarada e usada, não Rawline.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-family] fora de {Rawline, Raleway, sans-serif}. Medido: font-family=Arial, Helvetica, sans-serif | font-family=Arial, Helvetica, sans-serif | font-family=Arial, Helvetica, sans-serif
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3499f433d4c28f2448a0e1f71780dbfedfcd6eaedab1956d57e9e5226f699075",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3b465041ab47e80c3717a3b068cdb2a37f83e017f85c36a97328df6e7bf114c1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A orientação 'Como cadastrar.' diz: 'Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta.' É jargão técnico (persistidos, commit, transação, cache, endpoint) e não explica como cadastrar.

Esperado: Texto de orientação em linguagem simples, voltado à pessoa usuária, explicando como fazer o cadastro.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:3.11

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(1)>div:nth-of-type(2)>span:nth-of-type(2)" — <span> "Os dados do país são persistidos no banco após o"

### Unidades candidatas (não são crédito)

- U-b213bbf031e5c46981a77d139ec8dffab139dfc393616cf038c60dded0e39d23 — U-02 · sempre · cena 1280x900 · <span> "Os dados do país são persistidos no banco após o": Estrato semeada · classe DS · variante mensagem-jargao-tecnico · sorteada (a2-d6b3f0e36943). O corpo da mensagem informativa de orientação usa jargão de sistema (persistidos, banco, commit, transação, renderizada, cache, endpoint), sem explicação, no mesmo assunto do cadastro. Medido: 7 termos técnicos.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `texto do DOM em #msg-orientacao .message-body` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3b465041ab47e80c3717a3b068cdb2a37f83e017f85c36a97328df6e7bf114c1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3b73961da8ca7c0fa2533c4c395aad904bba5900168aeb06a2ce1939c36eb12f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: \#btn-limpar tem CSS order:1. Ordem visual medida: Cancelar (x=239), Salvar País (x=376), Limpar Campos (x=525). Ordem de Tab: Cancelar → Limpar Campos → Salvar País, ou seja, o foco salta para a direita e depois volta.

Esperado: Ordem de foco igual à ordem visual dos botões de ação (sem reordenação por CSS order)

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(5)>button:nth-of-type(2)" — <button#btn-limpar> "Limpar Campos"

### Unidades candidatas (não são crédito)

- U-61ac25c5bc7e16b6e55c1166fe6ac0d1cbb0decd0b57b9c5f656f76f87060a1b — U-01 · sempre · cena 1280x900 · <button#btn-limpar> "Limpar Campos": Estrato semeada · classe DS · variante secundario-a-direita-do-primario · sorteada (a2-2ac598dc24db). Limpar Campos (secundário) aparece à direita de Salvar País (primário) na barra de ações: `order: 1` na folha da página; DOM e ordem de Tab inalterados (Cancelar → Limpar → Salvar). Medido: x do Limpar 525,1 > borda direita do Salvar 509,1.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [order] em {1}. Medido: order=1 | order=1 | order=1
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `V-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3b73961da8ca7c0fa2533c4c395aad904bba5900168aeb06a2ce1939c36eb12f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3f38caf68445d0a79465aac696d1a4a4e96904bfc9dfaec9993e8588194e6167

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: \#btn-limpar tem CSS order:1. Ordem visual: Cancelar (x=239), Salvar País (x=376), Limpar Campos (x=525); ordem do DOM e do Tab: Cancelar → Limpar Campos → Salvar País (foco salta para a direita e volta à esquerda). O botão primário fica entre os secundários.

Esperado: A ordem visual dos botões deve coincidir com a ordem do DOM/foco, com o botão primário (Salvar País) na posição final das ações.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. Tab x16 a partir do início (passa por Cancelar, Limpar, Salvar)

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(5)>button:nth-of-type(2)" — <button#btn-limpar> "Limpar Campos"

### Unidades candidatas (não são crédito)

- U-61ac25c5bc7e16b6e55c1166fe6ac0d1cbb0decd0b57b9c5f656f76f87060a1b — U-01 · sempre · cena 1280x900 · <button#btn-limpar> "Limpar Campos": Estrato semeada · classe DS · variante secundario-a-direita-do-primario · sorteada (a2-2ac598dc24db). Limpar Campos (secundário) aparece à direita de Salvar País (primário) na barra de ações: `order: 1` na folha da página; DOM e ordem de Tab inalterados (Cancelar → Limpar → Salvar). Medido: x do Limpar 525,1 > borda direita do Salvar 509,1.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [order] em {1}. Medido: order=1 | order=1 | order=1
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `focusin log: btn-cancelar x=239, btn-limpar x=525, btn-salvar x=376` → identificador devolvido por ferramenta (sem arquivo)
- `computed order: #btn-limpar 1, demais 0` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3f38caf68445d0a79465aac696d1a4a4e96904bfc9dfaec9993e8588194e6167",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4343d0a368e867872737a506291bd6b9738eeb23126e4d315a67f002ef7ea3f8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A legenda "Situação do cadastro" tem text-align:center (texto centralizado sobre 636 px, perto de x=380) e font-size 16.8px; os rótulos dos outros campos estão alinhados à esquerda (x=60) com 14px.

Esperado: Rótulo do grupo de radios alinhado à esquerda e com o mesmo estilo dos demais rótulos de campo

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div:nth-of-type(2)>form>fieldset>legend" — <legend> "Situação do cadastro"

### Unidades candidatas (não são crédito)

- U-bd3044bb5ff04df88b37b7687d50f60b515af7b7a53705a67b3e19bf8e0dc799 — U-05 · sempre · cena 1280x900 · <legend> "Situação do cadastro": Estrato semeada · classe DS · variante legenda-centralizada · sorteada (a2-f838b54da560). A legenda do grupo de opções fica centralizada (legend com `width: 100%; text-align: center`): o texto começa em 296,1 px, centrado no grupo, enquanto as opções começam em 62 px. A caixa da legend continua em 62 px; o desvio é do texto. A 1ª auditoria cega deu a frase como conforme medindo a caixa (EC-062); o 2º auditor cego, no pedido neutro, mediu o texto em 296,09 px e decidiu viola (R-05).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [text-align] em {center}. Medido: text-align=center | text-align=center | text-align=center
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4343d0a368e867872737a506291bd6b9738eeb23126e4d315a67f002ef7ea3f8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4504154d46e6f21e7c4d5bff0b8afdd7a0dc6fe9e6b95043f142a89a7f8d37ff

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro da mensagem de erro, antes do título, há um ícone de "check" de sucesso (i.fas.fa-check.marca-retorno), além do ícone de erro (fa-times-circle).

Esperado: Mensagem de erro sem ícone de sucesso: só o ícone do estado danger

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #btn-salvar (formulário vazio)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(1)>div:nth-of-type(2)>i" — <i> · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-bc86778b2805b82d6d968dba284abbce20356b099be563b972de226d952e8d15 — U-06 · S1 · cena 1280x900 · <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info": Estrato semeada · classe DS · variante mensagem-com-visual-selecionado · sorteada (a2-ef29db5bb4ac). Em S1, a mensagem de erro (classe danger, ícone times-circle) recebe o visual do estado Selecionado: fundo --blue-warm-vivid-50 (#2670e8), ícone e texto --pure-0, e um ícone fa-check antes do título.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [background-color] em {rgb(38, 112, 232)}. Medido: background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4504154d46e6f21e7c4d5bff0b8afdd7a0dc6fe9e6b95043f142a89a7f8d37ff",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-45d3acae4f348df20a0c57d84a2a2dc3eced4648fcaa02271424e8cf9c693207

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Interactive controls must not be nested

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:nested-interactive

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(1)" — <div> "África"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-45d3acae4f348df20a0c57d84a2a2dc3eced4648fcaa02271424e8cf9c693207",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-47e8e53d6e5adc30a6743f94690a73b133b43cb7f1de7e7aa5cbf9a4314a27d9

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Interactive controls must not be nested

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:nested-interactive

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(6)" — <div> "Oceania"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-47e8e53d6e5adc30a6743f94690a73b133b43cb7f1de7e7aa5cbf9a4314a27d9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4cd3969d1fa7c3a680098c8aa0dc9f94ad57eddecb3f372dbf9dfa280c1e5dd7

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(4)>div>label" — <label> "Ásia"

### Unidades candidatas (não são crédito)

- U-cad4c1640d6a6e5410e48bb3800db9c4cb324e8d624c4671c5fa9d1c694e34f0 — U-07 · S2 · cena 1280x900 · <label> "África": Estrato semeada · classe G · variante opcoes-texto-claro · sorteada (a2-7348bce34289). Em S2 (lista aberta), os rótulos das 6 opções do select ficam #AAAAAA sobre branco: 2,32:1 (texto 14 px, peso 500); o item selecionado mantém a cor do core.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [color] em {rgb(170, 170, 170)}. Medido: color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4cd3969d1fa7c3a680098c8aa0dc9f94ad57eddecb3f372dbf9dfa280c1e5dd7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4eaa323b7f9ee9679739500d0f6a04a74903976dc5b380cd6a1b3da1a4bd89cb

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(3)>div>label" — <label> "América do Sul"

### Unidades candidatas (não são crédito)

- U-cad4c1640d6a6e5410e48bb3800db9c4cb324e8d624c4671c5fa9d1c694e34f0 — U-07 · S2 · cena 1280x900 · <label> "África": Estrato semeada · classe G · variante opcoes-texto-claro · sorteada (a2-7348bce34289). Em S2 (lista aberta), os rótulos das 6 opções do select ficam #AAAAAA sobre branco: 2,32:1 (texto 14 px, peso 500); o item selecionado mantém a cor do core.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [color] em {rgb(170, 170, 170)}. Medido: color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4eaa323b7f9ee9679739500d0f6a04a74903976dc5b380cd6a1b3da1a4bd89cb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5743c6270b1688b7d13734880b37d2eeba60b744e9b09688664c8b30f6f2169a

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Interactive controls must not be nested

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:nested-interactive

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(5)" — <div> "Europa"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5743c6270b1688b7d13734880b37d2eeba60b744e9b09688664c8b30f6f2169a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5aba712dbbcdaf89ef4dae8911baad5fd885dffffe8ed57e4492ff6739e7589f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de escolher "América do Sul" e acionar Limpar Campos, #continente fica vazio, mas a opção continua com class selected, aria-selected=true, radio checked e fundo rgb(38,112,232) quando a lista é reaberta

Esperado: Limpar Campos também limpa a seleção da lista, e o estado da opção corresponde ao valor do campo

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #sel-continente > div:nth-of-type(1) > button 3. click label[for=continente-op2] 4. click #btn-limpar 5. click #sel-continente > div:nth-of-type(1) > button

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "unresolved:#sel-continente .br-item.selected" — Seletor não resolvido

### Unidades candidatas (não são crédito)

- U-61ac25c5bc7e16b6e55c1166fe6ac0d1cbb0decd0b57b9c5f656f76f87060a1b — U-01 · sempre · cena 1280x900 · <button#btn-limpar> "Limpar Campos": Estrato semeada · classe DS · variante secundario-a-direita-do-primario · sorteada (a2-2ac598dc24db). Limpar Campos (secundário) aparece à direita de Salvar País (primário) na barra de ações: `order: 1` na folha da página; DOM e ordem de Tab inalterados (Cancelar → Limpar → Salvar). Medido: x do Limpar 525,1 > borda direita do Salvar 509,1.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [order] em {1}. Medido: order=1 | order=1 | order=1
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5aba712dbbcdaf89ef4dae8911baad5fd885dffffe8ed57e4492ff6739e7589f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-60f2a0d1a05111a960cf8350439a03cd93d25727eb7c060eb6d7df29254c7f8b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão circular 'Ajuda sobre o cadastro' (40×40 em x=570, y=304) não tem ícone. O único filho é span.sr-only, sem ::before/::after, borda nem fundo, e nada aparece na tela; só há nome acessível (aria-label).

Esperado: Botão circular com ícone visível que represente a ação de ajuda.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>div>button" — <button#btn-ajuda> "Ajuda sobre o cadastro"

### Unidades candidatas (não são crédito)

- U-c3d79f20da1c14fd3c59a21585b1068328fbfa43670d281d8e4db42573dd26be — U-03 · sempre · cena 1280x900 · <button#btn-ajuda> "Ajuda sobre o cadastro": Estrato semeada · classe DS · variante circular-sem-icone · sorteada (a2-5b47246a41c1). Botão circular de ajuda (40×40) sem ícone: só o texto oculto; nome acessível mantido. Medido: 0 ícone visível, 0 pixel não branco em repouso.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `V-003 (unverifiable: sem predicado; fato medido no navegador)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-60f2a0d1a05111a960cf8350439a03cd93d25727eb7c060eb6d7df29254c7f8b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-67d3c0135bd2d8d1b3aff72f720715239fc6f28f13ab6a75398e956d22bb699b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro do conteúdo da mensagem de erro 'Não foi possível salvar o país.' há um ícone fa-check (marca de sucesso, branco), além do ícone fa-times-circle da área de ícone.

Esperado: Na mensagem de erro, só ícones da categoria do estado semântico de erro; nada de ícone de confirmação.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #btn-salvar

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(1)>div:nth-of-type(2)>i" — <i> · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-bc86778b2805b82d6d968dba284abbce20356b099be563b972de226d952e8d15 — U-06 · S1 · cena 1280x900 · <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info": Estrato semeada · classe DS · variante mensagem-com-visual-selecionado · sorteada (a2-ef29db5bb4ac). Em S1, a mensagem de erro (classe danger, ícone times-circle) recebe o visual do estado Selecionado: fundo --blue-warm-vivid-50 (#2670e8), ícone e texto --pure-0, e um ícone fa-check antes do título.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [background-color] em {rgb(38, 112, 232)}. Medido: background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-67d3c0135bd2d8d1b3aff72f720715239fc6f28f13ab6a75398e956d22bb699b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-69d6f299019d2150b2ed84b450bae941b83bd647f3b8c3e25510be9ad0cc71f1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem "Como cadastrar." diz: "Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta". É jargão técnico e não explica como cadastrar.

Esperado: Texto em linguagem simples, voltado ao usuário, que oriente o cadastro como o título promete

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:3.11

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(1)>div:nth-of-type(2)>span:nth-of-type(2)" — <span> "Os dados do país são persistidos no banco após o"

### Unidades candidatas (não são crédito)

- U-b213bbf031e5c46981a77d139ec8dffab139dfc393616cf038c60dded0e39d23 — U-02 · sempre · cena 1280x900 · <span> "Os dados do país são persistidos no banco após o": Estrato semeada · classe DS · variante mensagem-jargao-tecnico · sorteada (a2-d6b3f0e36943). O corpo da mensagem informativa de orientação usa jargão de sistema (persistidos, banco, commit, transação, renderizada, cache, endpoint), sem explicação, no mesmo assunto do cadastro. Medido: 7 termos técnicos.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-69d6f299019d2150b2ed84b450bae941b83bd647f3b8c3e25510be9ad0cc71f1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6a4caba7a3c96dcb1f507f119d4b17f43ddab1c2c45af2c8287e51a461e2c95c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com a lista do select Continente aberta, os rótulos das 6 opções aparecem em #aaaaaa sobre #ffffff, contraste 2,32:1 (14px, peso normal).

Esperado: Contraste mínimo de 4,5:1 para o texto das opções.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #sel-continente button[data-trigger]

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(1)>div>label" — <label> "África"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(2)>div>label" — <label> "América do Norte"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(3)>div>label" — <label> "América do Sul"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(4)>div>label" — <label> "Ásia"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(5)>div>label" — <label> "Europa"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(6)>div>label" — <label> "Oceania"

### Unidades candidatas (não são crédito)

- U-cad4c1640d6a6e5410e48bb3800db9c4cb324e8d624c4671c5fa9d1c694e34f0 — U-07 · S2 · cena 1280x900 · <label> "África": Estrato semeada · classe G · variante opcoes-texto-claro · sorteada (a2-7348bce34289). Em S2 (lista aberta), os rótulos das 6 opções do select ficam #AAAAAA sobre branco: 2,32:1 (texto 14 px, peso 500); o item selecionado mantém a cor do core.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [color] em {rgb(170, 170, 170)}. Medido: color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-009` → identificador devolvido por ferramenta (sem arquivo)
- `V-002 (confirmed)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6a4caba7a3c96dcb1f507f119d4b17f43ddab1c2c45af2c8287e51a461e2c95c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-727c23c03d530d696e7b682eccc1c89e900a7c1f889053ee72c6adedc0cd2516

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com a lista aberta, ArrowDown, ArrowDown e Enter selecionam 'América do Norte' e fecham a lista. O foco vai para o body (document.activeElement=BODY) e não volta para o campo #continente nem para o botão do select.

Esperado: Depois de selecionar por teclado, o foco deve voltar ao controle do select (campo ou botão) e manter a sequência de navegação.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #sel-continente button[data-trigger] 3. press ArrowDown 4. press ArrowDown 5. press Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(2)" — <div> "América do Norte"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `inspeção no navegador: activeElement BODY após Enter` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-727c23c03d530d696e7b682eccc1c89e900a7c1f889053ee72c6adedc0cd2516",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-72c95d72082327195cbf013c4fecdc504bf90febced5f9bff38f2ed3696a7b30

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão circular de 40x40 px ao lado do h1, sem ícone nem texto visível (só span.sr-only), com fundo transparente, borda 0 e ::before/::after sem conteúdo. Para quem enxerga ele é invisível, e clique e hover não produzem nada visível.

Esperado: Botão de ajuda com ícone visível (ex.: ponto de interrogação) e uma ação perceptível

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div:nth-of-type(2)>div>button" — <button#btn-ajuda> "Ajuda sobre o cadastro"

### Unidades candidatas (não são crédito)

- U-c3d79f20da1c14fd3c59a21585b1068328fbfa43670d281d8e4db42573dd26be — U-03 · sempre · cena 1280x900 · <button#btn-ajuda> "Ajuda sobre o cadastro": Estrato semeada · classe DS · variante circular-sem-icone · sorteada (a2-5b47246a41c1). Botão circular de ajuda (40×40) sem ícone: só o texto oculto; nome acessível mantido. Medido: 0 ícone visível, 0 pixel não branco em repouso.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-72c95d72082327195cbf013c4fecdc504bf90febced5f9bff38f2ed3696a7b30",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7c988536051a68b1c2bc698e54a141e3964ef1636c9fc1845af69cdf97697bd7

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: font-family: Arial, Helvetica, sans-serif

Esperado: Família contendo Rawline/Raleway (token --font-family-base: Rawline, Raleway, sans-serif)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(3)>div" — <div#inp-codigo> "Código do país (opcional) Três letras, como ARG "

### Unidades candidatas (não são crédito)

- U-815feaaa7541159f8b60496efec2e8d5f3ab0051b936ca8f9e4656169e35893a — U-04 · sempre · cena 1280x900 · <div#inp-codigo> "Código do país (opcional) Três letras, como ARG ": Estrato semeada · classe DS · variante fonte-do-sistema · sorteada (a2-a39f3ad397d4). O campo do código usa Arial (`font-family: Arial, Helvetica, sans-serif` na raiz .br-input pela folha da página): rótulo, campo e texto de apoio com Arial declarada e usada, não Rawline.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-family] fora de {Rawline, Raleway, sans-serif}. Medido: font-family=Arial, Helvetica, sans-serif | font-family=Arial, Helvetica, sans-serif | font-family=Arial, Helvetica, sans-serif
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7c988536051a68b1c2bc698e54a141e3964ef1636c9fc1845af69cdf97697bd7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7cc02390cc39bbf7207eb4133d9ce02c6b1e67fb50518d78b3c9180b461a3450

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo 'Código do país' (rótulo, input e texto de apoio) usa font-family Arial, Helvetica, sans-serif, enquanto os outros campos usam Rawline.

Esperado: Família tipográfica do DS (Rawline/Raleway).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(3)>div" — <div#inp-codigo> "Código do país (opcional) Três letras, como ARG "

### Unidades candidatas (não são crédito)

- U-815feaaa7541159f8b60496efec2e8d5f3ab0051b936ca8f9e4656169e35893a — U-04 · sempre · cena 1280x900 · <div#inp-codigo> "Código do país (opcional) Três letras, como ARG ": Estrato semeada · classe DS · variante fonte-do-sistema · sorteada (a2-a39f3ad397d4). O campo do código usa Arial (`font-family: Arial, Helvetica, sans-serif` na raiz .br-input pela folha da página): rótulo, campo e texto de apoio com Arial declarada e usada, não Rawline.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-family] fora de {Rawline, Raleway, sans-serif}. Medido: font-family=Arial, Helvetica, sans-serif | font-family=Arial, Helvetica, sans-serif | font-family=Arial, Helvetica, sans-serif
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `V-001 (confirmed)` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7cc02390cc39bbf7207eb4133d9ce02c6b1e67fb50518d78b3c9180b461a3450",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7ed9263014967246968869c91c69b17409bee0f6414312aaf9ac450889bc2cf9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro (class 'br-message danger') é exibida com fundo azul rgb(38,112,232) e texto branco, aparência de mensagem informativa; a mensagem de sucesso da mesma tela usa o fundo de feedback do padrão (rgb(227,245,225)) com texto escuro.

Esperado: Mensagem do tipo danger deve usar as cores de feedback de erro do padrão gov.br (tom vermelho), distinguindo-se visualmente da mensagem informativa.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. Tab até #certificado-automatico e Espaço (liga o switch) 3. click #btn-ajuda 4. click #sel-continente [data-trigger] 5. ArrowDown x3 e Enter (América do Sul) 6. Tab 7. click #btn-salvar

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(1)" — <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info"

### Unidades candidatas (não são crédito)

- U-bc86778b2805b82d6d968dba284abbce20356b099be563b972de226d952e8d15 — U-06 · S1 · cena 1280x900 · <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info": Estrato semeada · classe DS · variante mensagem-com-visual-selecionado · sorteada (a2-ef29db5bb4ac). Em S1, a mensagem de erro (classe danger, ícone times-circle) recebe o visual do estado Selecionado: fundo --blue-warm-vivid-50 (#2670e8), ícone e texto --pure-0, e um ícone fa-check antes do título.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [background-color] em {rgb(38, 112, 232)}. Medido: background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `computed #msg-erro background rgb(38,112,232); .confirmacao-envio background rgb(227,245,225)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7ed9263014967246968869c91c69b17409bee0f6414312aaf9ac450889bc2cf9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8aa76e51b18970e47e2d3101ef944e0817675d9b79c6e1220952c11c0251ead5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O componente do campo 'Código do país' (rótulo, input e texto de apoio) usa font-family 'Arial, Helvetica, sans-serif', enquanto os demais campos usam 'Rawline, Raleway, sans-serif'.

Esperado: Usar a família tipográfica do padrão gov.br (Rawline) em todos os campos do formulário.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(3)>div" — <div#inp-codigo> "Código do país (opcional) Três letras, como ARG "

### Unidades candidatas (não são crédito)

- U-815feaaa7541159f8b60496efec2e8d5f3ab0051b936ca8f9e4656169e35893a — U-04 · sempre · cena 1280x900 · <div#inp-codigo> "Código do país (opcional) Três letras, como ARG ": Estrato semeada · classe DS · variante fonte-do-sistema · sorteada (a2-a39f3ad397d4). O campo do código usa Arial (`font-family: Arial, Helvetica, sans-serif` na raiz .br-input pela folha da página): rótulo, campo e texto de apoio com Arial declarada e usada, não Rawline.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-family] fora de {Rawline, Raleway, sans-serif}. Medido: font-family=Arial, Helvetica, sans-serif | font-family=Arial, Helvetica, sans-serif | font-family=Arial, Helvetica, sans-serif
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `computed font-family: #inp-codigo, label, #codigo-pais, #codigo-pais-apoio = Arial; .campo-nome/.campo-continente/#rad-situacao = Rawline` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8aa76e51b18970e47e2d3101ef944e0817675d9b79c6e1220952c11c0251ead5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9594324f723060c5fb0f5d7d9fd405bcf4086372d1fc191fba6ac952f4b646c4

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Interactive controls must not be nested

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:nested-interactive

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(2)" — <div> "América do Norte"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9594324f723060c5fb0f5d7d9fd405bcf4086372d1fc191fba6ac952f4b646c4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a99dc6c6b04de33fd06f8bbcd9a4852e952885f1cbbc5d183418e3addc42c03c

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(1)>div>label" — <label> "África"

### Unidades candidatas (não são crédito)

- U-cad4c1640d6a6e5410e48bb3800db9c4cb324e8d624c4671c5fa9d1c694e34f0 — U-07 · S2 · cena 1280x900 · <label> "África": Estrato semeada · classe G · variante opcoes-texto-claro · sorteada (a2-7348bce34289). Em S2 (lista aberta), os rótulos das 6 opções do select ficam #AAAAAA sobre branco: 2,32:1 (texto 14 px, peso 500); o item selecionado mantém a cor do core.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [color] em {rgb(170, 170, 170)}. Medido: color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a99dc6c6b04de33fd06f8bbcd9a4852e952885f1cbbc5d183418e3addc42c03c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b6a99e7964b3c9d02da81baabb21b7e31dff7947e5a6f3bf6d6f4ddea0d13db0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O rótulo do grupo 'Situação do cadastro' tem text-align:center. O texto começa em x=296, enquanto o fieldset e as opções começam em x=62 e os demais rótulos do formulário em x=60.

Esperado: Rótulo no topo do grupo, alinhado à esquerda.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>fieldset>legend" — <legend> "Situação do cadastro"

### Unidades candidatas (não são crédito)

- U-bd3044bb5ff04df88b37b7687d50f60b515af7b7a53705a67b3e19bf8e0dc799 — U-05 · sempre · cena 1280x900 · <legend> "Situação do cadastro": Estrato semeada · classe DS · variante legenda-centralizada · sorteada (a2-f838b54da560). A legenda do grupo de opções fica centralizada (legend com `width: 100%; text-align: center`): o texto começa em 296,1 px, centrado no grupo, enquanto as opções começam em 62 px. A caixa da legend continua em 62 px; o desvio é do texto. A 1ª auditoria cega deu a frase como conforme medindo a caixa (EC-062); o 2º auditor cego, no pedido neutro, mediu o texto em 296,09 px e decidiu viola (R-05).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [text-align] em {center}. Medido: text-align=center | text-align=center | text-align=center
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `P-14 (pendingResolved violada em S-page-006)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b6a99e7964b3c9d02da81baabb21b7e31dff7947e5a6f3bf6d6f4ddea0d13db0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ba69725d889e68fa1a1e38759bf6757e2b17dcc2d55d4cfb21602bec8cbb9373

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cada role=option da lista do Continente contém um input radio focável (tabIndex 0)

Esperado: Opções de listbox sem controles interativos aninhados

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #sel-continente > div:nth-of-type(1) > button

Regra declarada: nested-interactive

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(1)" — <div> "África"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(2)" — <div> "América do Norte"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(3)" — <div> "América do Sul"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(4)" — <div> "Ásia"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(5)" — <div> "Europa"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(6)" — <div> "Oceania"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-012` → identificador devolvido por ferramenta (sem arquivo)
- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ba69725d889e68fa1a1e38759bf6757e2b17dcc2d55d4cfb21602bec8cbb9373",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-be245ccce589be3f4d4f1a0fa5a4bec30e93437a2b334327e8d80a2b851f3e4c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo obrigatório 'Nome do país' carrega com readonly. O atributo só é removido por clique de mouse: ao chegar por Tab (a partir de #btn-ajuda) o foco fica em #nome-pais, readOnly continua true e as teclas 'U' e 'y' não inserem nada (value vazio).

Esperado: O campo deve aceitar digitação quando focado pelo teclado (sem readonly ou com remoção no foco), permitindo concluir o cadastro só com teclado.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. focus #btn-ajuda 3. press Tab (foco em #nome-pais) 4. press U 5. press y

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(2)>div>input" — <input#nome-pais>

### Unidades candidatas (não são crédito)

- U-6353869de8ad60ea5ed4964e61b1aae6231b49d2d4ce13856fd1935b3ef6b969 — U-08 · sempre · cena 1280x900 · <input#nome-pais>: Estrato semeada · classe G · variante campo-readonly-ate-clique · sorteada (a2-328f62cfe4ce). O campo Nome do país é `readonly` até receber um clique de ponteiro (script da página): com foco por Tab o texto digitado não entra (valor vazio).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3d79f20da1c14fd3c59a21585b1068328fbfa43670d281d8e4db42573dd26be — U-03 · sempre · cena 1280x900 · <button#btn-ajuda> "Ajuda sobre o cadastro": Estrato semeada · classe DS · variante circular-sem-icone · sorteada (a2-5b47246a41c1). Botão circular de ajuda (40×40) sem ícone: só o texto oculto; nome acessível mantido. Medido: 0 ícone visível, 0 pixel não branco em repouso.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `inspeção no navegador: document.activeElement=#nome-pais, readOnly=true, value=''` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-be245ccce589be3f4d4f1a0fa5a4bec30e93437a2b334327e8d80a2b851f3e4c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-caa725e7df38c2cdb37e010613b9c6d62d596687e14f9e31a163af6880c7829e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os rótulos dos botões 'Limpar Campos' e 'Salvar País' têm a inicial de cada palavra em maiúscula.

Esperado: Só a primeira letra do rótulo em maiúscula: 'Limpar campos', 'Salvar país'.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(5)>button:nth-of-type(2)" — <button#btn-limpar> "Limpar Campos"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(5)>button:nth-of-type(3)" — <button#btn-salvar> "Salvar País"

### Unidades candidatas (não são crédito)

- U-61ac25c5bc7e16b6e55c1166fe6ac0d1cbb0decd0b57b9c5f656f76f87060a1b — U-01 · sempre · cena 1280x900 · <button#btn-limpar> "Limpar Campos": Estrato semeada · classe DS · variante secundario-a-direita-do-primario · sorteada (a2-2ac598dc24db). Limpar Campos (secundário) aparece à direita de Salvar País (primário) na barra de ações: `order: 1` na folha da página; DOM e ordem de Tab inalterados (Cancelar → Limpar → Salvar). Medido: x do Limpar 525,1 > borda direita do Salvar 509,1.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [order] em {1}. Medido: order=1 | order=1 | order=1
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-caa725e7df38c2cdb37e010613b9c6d62d596687e14f9e31a163af6880c7829e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cabcd85871a6fb75f7315cc8b5dc8047736dd30a656835f2678567781193f6e8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo obrigatório 'Nome do país' carrega com readonly. Pelo teclado (foco por Shift+Tab a partir de #codigo-pais) as teclas 'B','r' e Enter não inserem texto: value='' e readOnly=true; Enter apenas envia o formulário, que exibe 'Informe o nome do país.'. O readonly só é removido com clique do mouse (após clique, value='B', readOnly=false).

Esperado: O campo deve aceitar digitação por teclado, sem depender do mouse, como os demais campos de texto.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. focus #codigo-pais 3. Shift+Tab (#nome-pais) 4. press B 5. press r 6. press Enter

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(2)>div>input" — <input#nome-pais>

### Unidades candidatas (não são crédito)

- U-6353869de8ad60ea5ed4964e61b1aae6231b49d2d4ce13856fd1935b3ef6b969 — U-08 · sempre · cena 1280x900 · <input#nome-pais>: Estrato semeada · classe G · variante campo-readonly-ate-clique · sorteada (a2-328f62cfe4ce). O campo Nome do país é `readonly` até receber um clique de ponteiro (script da página): com foco por Tab o texto digitado não entra (valor vazio).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser_evaluate: {val:'',ro:true,active:'nome-pais'} após B/r/Enter` → não encontrado na evidência preservada da execução
- `browser_evaluate após clique do mouse: {val:'B',ro:false}` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cabcd85871a6fb75f7315cc8b5dc8047736dd30a656835f2678567781193f6e8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d02eec2961516ef88f287e93db456bcc749d5cefe1f65339767d376f95459b55

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Rótulos das opções do Continente (habilitadas, não selecionadas) com cor #aaaaaa sobre #ffffff, 14px, peso normal: contraste 2,32:1

Esperado: Contraste mínimo de 4,5:1

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #sel-continente > div:nth-of-type(1) > button

Regra declarada: color-contrast

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(1)>div>label" — <label> "África"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(2)>div>label" — <label> "América do Norte"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(3)>div>label" — <label> "América do Sul"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(4)>div>label" — <label> "Ásia"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(5)>div>label" — <label> "Europa"
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(6)>div>label" — <label> "Oceania"

### Unidades candidatas (não são crédito)

- U-cad4c1640d6a6e5410e48bb3800db9c4cb324e8d624c4671c5fa9d1c694e34f0 — U-07 · S2 · cena 1280x900 · <label> "África": Estrato semeada · classe G · variante opcoes-texto-claro · sorteada (a2-7348bce34289). Em S2 (lista aberta), os rótulos das 6 opções do select ficam #AAAAAA sobre branco: 2,32:1 (texto 14 px, peso 500); o item selecionado mantém a cor do core.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [color] em {rgb(170, 170, 170)}. Medido: color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `V-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d02eec2961516ef88f287e93db456bcc749d5cefe1f65339767d376f95459b55",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d4b06f38e6753ad9c43ca45743677faa231c86842da1f940d5edf3c437b01805

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem 'Como cadastrar.' diz: 'Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta.' É jargão técnico (persistidos, commit, transação, cache, endpoint) e não orienta como cadastrar.

Esperado: Texto em linguagem simples, compreensível por quem não é da área técnica, e com orientação útil ao usuário.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(1)>div:nth-of-type(2)>span:nth-of-type(2)" — <span> "Os dados do país são persistidos no banco após o"

### Unidades candidatas (não são crédito)

- U-b213bbf031e5c46981a77d139ec8dffab139dfc393616cf038c60dded0e39d23 — U-02 · sempre · cena 1280x900 · <span> "Os dados do país são persistidos no banco após o": Estrato semeada · classe DS · variante mensagem-jargao-tecnico · sorteada (a2-d6b3f0e36943). O corpo da mensagem informativa de orientação usa jargão de sistema (persistidos, banco, commit, transação, renderizada, cache, endpoint), sem explicação, no mesmo assunto do cadastro. Medido: 7 termos técnicos.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d4b06f38e6753ad9c43ca45743677faa231c86842da1f940d5edf3c437b01805",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d67c422d00fb67b2b5ca760c0dd127d053d0beac73aabd5b91e3e93190c17060

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(2)>div>label" — <label> "América do Norte"

### Unidades candidatas (não são crédito)

- U-cad4c1640d6a6e5410e48bb3800db9c4cb324e8d624c4671c5fa9d1c694e34f0 — U-07 · S2 · cena 1280x900 · <label> "África": Estrato semeada · classe G · variante opcoes-texto-claro · sorteada (a2-7348bce34289). Em S2 (lista aberta), os rótulos das 6 opções do select ficam #AAAAAA sobre branco: 2,32:1 (texto 14 px, peso 500); o item selecionado mantém a cor do core.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [color] em {rgb(170, 170, 170)}. Medido: color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d67c422d00fb67b2b5ca760c0dd127d053d0beac73aabd5b91e3e93190c17060",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-db12416000ead7e28949f40b9ce5619bef9b6a8884017a3e310e08289ae4745c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com a lista de continentes aberta, os rótulos das opções (África, América do Norte, ...) têm cor rgb(170,170,170) sobre fundo rgb(255,255,255), 14px peso 500: contraste 2,32:1.

Esperado: Contraste mínimo de 4,5:1 para o texto das opções.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #sel-continente [data-trigger] (Exibir lista)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:#list-3390 .br-item label" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `computed: color rgb(170,170,170), bg rgb(255,255,255), razão 2.32` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-db12416000ead7e28949f40b9ce5619bef9b6a8884017a3e310e08289ae4745c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dd226339f249cfc40b7de7996d7c0bd18cbaf7deaf31a9b5449d5d83c333a38a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Ajuda sobre o cadastro' (40×40 px, ao lado do H1) contém apenas <span class='sr-only'>, sem ícone, texto, borda (border 0) nem fundo (transparent): fica invisível em repouso; só aparece um círculo ao foco/hover. Ao acioná-lo, ele reexibe a mensagem informativa e foca seu botão Fechar.

Esperado: Botão circular do padrão gov.br deve exibir um ícone visível (p.ex. ponto de interrogação) que identifique visualmente o controle e sua finalidade.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div:nth-of-type(2)>div>button" — <button#btn-ajuda> "Ajuda sobre o cadastro"

### Unidades candidatas (não são crédito)

- U-c3d79f20da1c14fd3c59a21585b1068328fbfa43670d281d8e4db42573dd26be — U-03 · sempre · cena 1280x900 · <button#btn-ajuda> "Ajuda sobre o cadastro": Estrato semeada · classe DS · variante circular-sem-icone · sorteada (a2-5b47246a41c1). Botão circular de ajuda (40×40) sem ícone: só o texto oculto; nome acessível mantido. Medido: 0 ícone visível, 0 pixel não branco em repouso.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `computed: border '0px none', background rgba(0,0,0,0), innerHTML só sr-only, ::before/::after content none` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dd226339f249cfc40b7de7996d7c0bd18cbaf7deaf31a9b5449d5d83c333a38a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e8ad3526ef48b55e8ad9619c36a9ea7482bf9805555d1aee59a39e459dc07723

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A legenda 'Situação do cadastro' tem text-align:center numa caixa de 636px; o texto começa em x=296, enquanto os rótulos dos demais campos e as opções de rádio estão alinhados à esquerda em x=60–62.

Esperado: O rótulo do grupo deve ficar alinhado à esquerda, junto das opções, como os demais rótulos do formulário.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div:nth-of-type(2)>form>fieldset>legend" — <legend> "Situação do cadastro"

### Unidades candidatas (não são crédito)

- U-bd3044bb5ff04df88b37b7687d50f60b515af7b7a53705a67b3e19bf8e0dc799 — U-05 · sempre · cena 1280x900 · <legend> "Situação do cadastro": Estrato semeada · classe DS · variante legenda-centralizada · sorteada (a2-f838b54da560). A legenda do grupo de opções fica centralizada (legend com `width: 100%; text-align: center`): o texto começa em 296,1 px, centrado no grupo, enquanto as opções começam em 62 px. A caixa da legend continua em 62 px; o desvio é do texto. A 1ª auditoria cega deu a frase como conforme medindo a caixa (EC-062); o 2º auditor cego, no pedido neutro, mediu o texto em 296,09 px e decidiu viola (R-05).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [text-align] em {center}. Medido: text-align=center | text-align=center | text-align=center
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `computed legend text-align center; range x=296, width 168` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e8ad3526ef48b55e8ad9619c36a9ea7482bf9805555d1aee59a39e459dc07723",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ffce7de1ad038fdd934c2bd800197d09f73e0feb69f4715f6382b905d31e96fe

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(5)>div>label" — <label> "Europa"

### Unidades candidatas (não são crédito)

- U-cad4c1640d6a6e5410e48bb3800db9c4cb324e8d624c4671c5fa9d1c694e34f0 — U-07 · S2 · cena 1280x900 · <label> "África": Estrato semeada · classe G · variante opcoes-texto-claro · sorteada (a2-7348bce34289). Em S2 (lista aberta), os rótulos das 6 opções do select ficam #AAAAAA sobre branco: 2,32:1 (texto 14 px, peso 500); o item selecionado mantém a cor do core.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [color] em {rgb(170, 170, 170)}. Medido: color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170) | color=rgb(170, 170, 170)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ffce7de1ad038fdd934c2bd800197d09f73e0feb69f4715f6382b905d31e96fe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
