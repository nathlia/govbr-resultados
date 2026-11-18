# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 42 cartões únicos · 42 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 42 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 60 sujeitos · 42 cartão(ões) sem evidência verificada · 31 com unidade candidata · estimativa **252 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 17 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-05c00d92626fd30de9f9707b7ec62c727dd7701f365e61924fa4c1a66f777a95

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao escolher uma opção pelo teclado (ArrowDown até a opção e Enter ou Espaço), a lista fecha e document.activeElement passa a ser <body>; o foco não volta ao campo #continente (Esc, por outro lado, devolve o foco a #continente).

Esperado: Após selecionar uma opção, o foco deve retornar ao campo/combobox de continente, preservando o ponto de navegação.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. foco em #continente 3. ArrowDown (abre lista e foca 1ª opção) 4. ArrowDown 5. ArrowDown 6. Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)" — <div#list-855> "Lista de Opções"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `inspeção no navegador: activeElement=body após Enter e após Espaço` → identificador devolvido por ferramenta (sem arquivo)
- `V-003 trace passo 4: active=null após seleção por clique` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-05c00d92626fd30de9f9707b7ec62c727dd7701f365e61924fa4c1a66f777a95",
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

## C-190b27c97c0a73c72b1e0b6459d6a294c18951c75537e8620e272c5954521787

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cada elemento role="option" da lista de continentes contém um input type="radio" focável (descendente interativo dentro de option).

Esperado: Elementos com papel option não devem conter controles focáveis aninhados.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #sel-continente > div:nth-of-type(1) > button (Exibir lista)

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

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-012` → identificador devolvido por ferramenta (sem arquivo)
- `V-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-190b27c97c0a73c72b1e0b6459d6a294c18951c75537e8620e272c5954521787",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-21266444d7be9d0704c2462ae2d7b98a992a39bfc4c0fca07f2ad37d105484e2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão circular de 40×40 px focável ao lado do h1, sem ícone nem texto visível (só span.sr-only "Ajuda sobre o cadastro"; ::before/::after content none). Na tela não aparece nada; no hover só um círculo vazio.

Esperado: Botão com ícone/rótulo visível que comunique sua função (ex.: ícone de ajuda), de modo que usuários que enxergam percebam e entendam o controle.

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
- `captura do .titulo-cadastro em hover` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-21266444d7be9d0704c2462ae2d7b98a992a39bfc4c0fca07f2ad37d105484e2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2a99255c1a02f0d0628eff261753138ae247243a6ab123cbc634bfdf09f0ed3f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na tela, #btn-limpar tem CSS order:1. A ordem visual fica Cancelar (x=239), Salvar País (x=376), Limpar Campos (x=525). A ordem do DOM e do Tab é Cancelar → Limpar Campos → Salvar País, e o foco salta de x=239 para x=525 e volta para x=376.

Esperado: A ordem de foco e de leitura deve corresponder à ordem visual dos botões de ação.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(5)>button:nth-of-type(2)" — <button#btn-limpar> "Limpar Campos"

### Unidades candidatas (não são crédito)

- U-61ac25c5bc7e16b6e55c1166fe6ac0d1cbb0decd0b57b9c5f656f76f87060a1b — U-01 · sempre · cena 1280x900 · <button#btn-limpar> "Limpar Campos": Estrato semeada · classe DS · variante secundario-a-direita-do-primario · sorteada (a2-2ac598dc24db). Limpar Campos (secundário) aparece à direita de Salvar País (primário) na barra de ações: `order: 1` na folha da página; DOM e ordem de Tab inalterados (Cancelar → Limpar → Salvar). Medido: x do Limpar 525,1 > borda direita do Salvar 509,1.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [order] em {1}. Medido: order=1 | order=1 | order=1
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2a99255c1a02f0d0628eff261753138ae247243a6ab123cbc634bfdf09f0ed3f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3172c79bcaa7c1df4042a22c8dfc26d6b07a50149bde48724469e098c24b11b8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de selecionar 'América do Norte' e acionar 'Limpar Campos', #continente fica vazio, mas a opção 'América do Norte' continua com aria-selected=true, classe selected e o radio interno marcado.

Esperado: Ao limpar o formulário, o estado selecionado da opção deve ser removido, de forma coerente com o valor vazio do campo.

Janela: 1280×900 · interações desde o carregamento: 1. click 'Exibir lista' 2. ArrowDown 3. ArrowDown 4. Enter (seleciona 'América do Norte') 5. click #btn-limpar

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:#list-5099 .br-item:nth-child(2)" — Seletor não resolvido

### Unidades candidatas (não são crédito)

- U-61ac25c5bc7e16b6e55c1166fe6ac0d1cbb0decd0b57b9c5f656f76f87060a1b — U-01 · sempre · cena 1280x900 · <button#btn-limpar> "Limpar Campos": Estrato semeada · classe DS · variante secundario-a-direita-do-primario · sorteada (a2-2ac598dc24db). Limpar Campos (secundário) aparece à direita de Salvar País (primário) na barra de ações: `order: 1` na folha da página; DOM e ordem de Tab inalterados (Cancelar → Limpar → Salvar). Medido: x do Limpar 525,1 > borda direita do Salvar 509,1.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [order] em {1}. Medido: order=1 | order=1 | order=1
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3172c79bcaa7c1df4042a22c8dfc26d6b07a50149bde48724469e098c24b11b8",
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

## C-3fd99c445b447cd00acc5518005c2ae72eee20976ec24eeeb7df2fa80cdf2edf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A legenda "Situação do cadastro" tem text-align:center e aparece centralizada (≈x 296–464) sobre as opções, enquanto os demais rótulos de campo e as opções de rádio estão alinhados à esquerda (x=60).

Esperado: Rótulo do grupo alinhado à esquerda, junto das opções, como os demais rótulos do formulário.

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
  "cardId": "C-3fd99c445b447cd00acc5518005c2ae72eee20976ec24eeeb7df2fa80cdf2edf",
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

## C-490a3c32dcd6be60f062d0d0112f634a321e6c6e24bf79191c9b57986cc942d0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Texto das 6 opções da lista de continentes #aaaaaa sobre #ffffff, 14px peso normal: contraste 2,32:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #sel-continente > div:nth-of-type(1) > button (Exibir lista)

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

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `V-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-490a3c32dcd6be60f062d0d0112f634a321e6c6e24bf79191c9b57986cc942d0",
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

## C-53feebc2cf4d5074d7f6aa72bbf53d4e207afe76d2c116286b2288fafd32037c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo "Código do país (opcional)" (rótulo, input e texto de apoio) usa font-family: Arial, Helvetica, sans-serif (regra local ".campo-codigo .br-input"). Os demais campos usam Rawline, Raleway.

Esperado: Família tipográfica do DS (Rawline, com Raleway como alternativa).

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `V-001 (confirmed)` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-002/F-002` → não encontrado na evidência preservada da execução
- `S-page-003/F-015` → não encontrado na evidência preservada da execução
- `S-page-004/F-016` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-53feebc2cf4d5074d7f6aa72bbf53d4e207afe76d2c116286b2288fafd32037c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5551bec9edf2d1ff35fd030325557e92986930dcb32667174c132f037162de34

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A regra local ".acoes-formulario .acao-limpar { order: 1 }" põe "Limpar Campos" (secundário) em x=525, à direita de "Salvar País" (primário, x=376). Ordem visual: Cancelar, Salvar País, Limpar Campos; ordem do DOM e do Tab: Cancelar → Limpar Campos → Salvar País, então o foco salta da esquerda para a direita e depois volta.

Esperado: Botão primário à direita dos secundários, com a ordem visual igual à do DOM e à do foco (Cancelar, Limpar Campos, Salvar País).

Janela: 1280×900 · interações desde o carregamento: 1. Tab sucessivos a partir de #nome-pais até #certificado-automatico

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
- `focusin log: btn-cancelar x=239, btn-limpar x=525, btn-salvar x=376` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5551bec9edf2d1ff35fd030325557e92986930dcb32667174c132f037162de34",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-56913f4a9655478c23901e4e46468424bcb0888c2a770d2440140d2fe719af00

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: \#btn-limpar tem CSS order:1; ordem visual (x): Cancelar 239, Salvar País 376, Limpar Campos 525; ordem do DOM e do Tab: Cancelar → Limpar Campos → Salvar País. O foco salta do botão da esquerda para o da direita e volta ao do meio.

Esperado: A ordem de foco por teclado deve seguir a ordem visual dos botões (sem reordenação visual por CSS order).

Janela: 1280×900 · interações desde o carregamento: 1. load 2. Tab repetido até #certificado-automatico

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
- `registro focusin: btn-cancelar(239) → btn-limpar(525) → btn-salvar(376)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-56913f4a9655478c23901e4e46468424bcb0888c2a770d2440140d2fe719af00",
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

## C-62e4c42f78e6977b5e1a075d71bcd6ff7ae4f74c0277848d9bad630124cf9c36

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O rótulo do grupo de radios "Situação do cadastro" tem text-align: center e width: 100% (regra ".grupo-situacao .rotulo-situacao"): o texto aparece centralizado (x≈296 a 464), enquanto as opções e os rótulos dos outros campos começam em x=60.

Esperado: Rótulo do grupo de radios no topo do componente, alinhado à esquerda.

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-62e4c42f78e6977b5e1a075d71bcd6ff7ae4f74c0277848d9bad630124cf9c36",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-66b58d8bf99f94b4325e12e4bd3bdfd1b3112cbf82a6bd0bf95ea05ff2f3ec02

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo 'Código do país' e o texto de apoio usam font-family Arial, Helvetica, sans-serif. Os demais campos e textos da tela usam Rawline, Raleway, sans-serif.

Esperado: Os textos e campos devem usar a família tipográfica do DS (Rawline), como os outros campos do formulário.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(3)>div>input" — <input#codigo-pais>
- "body>main>div:nth-of-type(2)>form>div:nth-of-type(3)>div>p" — <p#codigo-pais-apoio> "Três letras, como ARG para Argentina."

### Unidades candidatas (não são crédito)

- U-815feaaa7541159f8b60496efec2e8d5f3ab0051b936ca8f9e4656169e35893a — U-04 · sempre · cena 1280x900 · <div#inp-codigo> "Código do país (opcional) Três letras, como ARG ": Estrato semeada · classe DS · variante fonte-do-sistema · sorteada (a2-a39f3ad397d4). O campo do código usa Arial (`font-family: Arial, Helvetica, sans-serif` na raiz .br-input pela folha da página): rótulo, campo e texto de apoio com Arial declarada e usada, não Rawline.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-family] fora de {Rawline, Raleway, sans-serif}. Medido: font-family=Arial, Helvetica, sans-serif | font-family=Arial, Helvetica, sans-serif | font-family=Arial, Helvetica, sans-serif
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-66b58d8bf99f94b4325e12e4bd3bdfd1b3112cbf82a6bd0bf95ea05ff2f3ec02",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6fddef7c5de3c4784fec3d74a68866f397daa45e69602d4f6215e977a75e106d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Ajuda sobre o cadastro' (40×40 px, ao lado do h1) não tem ícone nem texto visível. Só tem um span sr-only, com fundo transparente, borda 0 e ::before/::after sem conteúdo. Na tela aparece apenas um círculo claro ao passar o mouse ou ao focar.

Esperado: O botão circular deve mostrar um ícone ou rótulo visível que indique a função de ajuda, como no padrão br-button circle do DS.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(2)>div>button" — <button#btn-ajuda> "Ajuda sobre o cadastro"

### Unidades candidatas (não são crédito)

- U-c3d79f20da1c14fd3c59a21585b1068328fbfa43670d281d8e4db42573dd26be — U-03 · sempre · cena 1280x900 · <button#btn-ajuda> "Ajuda sobre o cadastro": Estrato semeada · classe DS · variante circular-sem-icone · sorteada (a2-5b47246a41c1). Botão circular de ajuda (40×40) sem ícone: só o texto oculto; nome acessível mantido. Medido: 0 ícone visível, 0 pixel não branco em repouso.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6fddef7c5de3c4784fec3d74a68866f397daa45e69602d4f6215e977a75e106d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-744c241dec1c3cfa6eb12791049cf6297f42933fcf0ca29ebaf1d02ae116ed90

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O círculo de cada rádio (label::before, 24×24 px) tem borda 1px rgb(204, 204, 204) sobre fundo branco, contraste de 1,61:1. Não há outro contorno visual que identifique o controle.

Esperado: O indicador visual do rádio deve ter contraste de pelo menos 3:1 com o fundo adjacente.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.11

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(2)>form>fieldset>div>div:nth-of-type(1)>label" — <label> "Habilitado"
- "body>main>div:nth-of-type(2)>form>fieldset>div>div:nth-of-type(2)>label" — <label> "Suspenso"
- "body>main>div:nth-of-type(2)>form>fieldset>div>div:nth-of-type(3)>label" — <label> "Em análise"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-744c241dec1c3cfa6eb12791049cf6297f42933fcf0ca29ebaf1d02ae116ed90",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-77aa8ff5389bfa18c2f1bd5db3cc9a4e46b54e0ed1f73cc1528d7e195e351491

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo tem o atributo readonly no carregamento. Com foco por teclado (Tab a partir de #btn-ajuda) e digitação de 'U' e 'Uru', o valor continua vazio e readOnly continua true. O readonly só sai com um clique de mouse no campo; depois do envio com erro, o atributo volta.

Esperado: O campo obrigatório 'Nome do país' deve aceitar digitação quando recebe foco pelo teclado, sem depender do mouse.

Janela: 1280×900 · interações desde o carregamento: 1. focar #btn-ajuda 2. Tab (foco em #nome-pais) 3. digitar 'Uru'

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(2)>div>input" — <input#nome-pais>

### Unidades candidatas (não são crédito)

- U-6353869de8ad60ea5ed4964e61b1aae6231b49d2d4ce13856fd1935b3ef6b969 — U-08 · sempre · cena 1280x900 · <input#nome-pais>: Estrato semeada · classe G · variante campo-readonly-ate-clique · sorteada (a2-328f62cfe4ce). O campo Nome do país é `readonly` até receber um clique de ponteiro (script da página): com foco por Tab o texto digitado não entra (valor vazio).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-77aa8ff5389bfa18c2f1bd5db3cc9a4e46b54e0ed1f73cc1528d7e195e351491",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7889c5f683796b8747f6af2291bab2cb21984d859327f1f626c64775fcb0bfe3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: button.br-button.circle "Ajuda sobre o cadastro" (40x40 em x=570,y=304) não contém ícone: o único filho é span.sr-only; na tela aparece só um círculo vazio (sem ícone e sem rótulo visível). O nome acessível existe (aria-label), mas usuários videntes não percebem a função do controle.

Esperado: Botão circular com ícone visível que transmita a ação (ex.: fas fa-question-circle com aria-hidden="true"), mantendo o aria-label.

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
- `V-003 (unverifiable: sem predicado; fato medido por inspeção do DOM e captura)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7889c5f683796b8747f6af2291bab2cb21984d859327f1f626c64775fcb0bfe3",
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

## C-8a5af66d7442fd8334680e05317301141fa305deba14e93ba871fe19d6acfcb9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No estado desligado, o trilho do switch (label::before, 52×30 px) tem fundo branco e borda 1px rgb(204, 204, 204), e o botão deslizante (::after) é rgb(204, 204, 204). Ambos têm contraste de 1,61:1 com o branco.

Esperado: Os limites e o indicador do switch devem ter contraste de pelo menos 3:1 com o fundo adjacente.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.11

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(2)>section:nth-of-type(1)>div>label" — <label> "Emitir certificado sanitário automaticamente par"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8a5af66d7442fd8334680e05317301141fa305deba14e93ba871fe19d6acfcb9",
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

## C-a72871cddf255a5864574726a5acc6133886b6c8f6bcf2919ed4cb27131bf82c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: As opções da lista de continentes (África, América do Norte, América do Sul, Ásia, Europa, Oceania) têm cor #aaaaaa sobre #ffffff (14px, normal), contraste de 2,32:1. A cor vem da sobrescrita local ".campo-continente .br-item { --text-color: #aaa }".

Esperado: Contraste mínimo de 4,5:1 para o texto das opções.

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em "Exibir lista" (#sel-continente [data-trigger])

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

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-a1a0c3eb4cac` → identificador devolvido por ferramenta (sem arquivo)
- `F-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-008` → identificador devolvido por ferramenta (sem arquivo)
- `V-002 (confirmed, 6 de 6 elementos)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a72871cddf255a5864574726a5acc6133886b6c8f6bcf2919ed4cb27131bf82c",
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

## C-b41b2455b8ec13820482cfe7462b17e4c15504892203eb748eafb7abc9af7c36

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro da mensagem de erro "Não foi possível salvar o país." aparece um ícone de check (fas fa-check, branco, 24×16 px) antes do título, contraditório com o ícone de erro (times-circle) da mesma mensagem.

Esperado: A mensagem de erro não deve exibir ícone de sucesso/confirmação; apenas o ícone do estado danger.

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b41b2455b8ec13820482cfe7462b17e4c15504892203eb748eafb7abc9af7c36",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bed09e12687974bc3f7e0aa8200e3c0f930ef4f086bb58e8d279148290a5289c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro (classe br-message danger) aparece com fundo rgb(38, 112, 232), um azul. A mensagem info da mesma tela usa rgb(212, 229, 255) e a success usa rgb(227, 245, 225), ambas nos tons do DS.

Esperado: A mensagem do tipo danger deve usar a cor semântica de erro do DS (tom de vermelho), e não um azul próximo ao de informação.

Janela: 1280×900 · interações desde o carregamento: 1. click #btn-salvar com o formulário vazio

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(1)" — <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info"

### Unidades candidatas (não são crédito)

- U-bc86778b2805b82d6d968dba284abbce20356b099be563b972de226d952e8d15 — U-06 · S1 · cena 1280x900 · <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info": Estrato semeada · classe DS · variante mensagem-com-visual-selecionado · sorteada (a2-ef29db5bb4ac). Em S1, a mensagem de erro (classe danger, ícone times-circle) recebe o visual do estado Selecionado: fundo --blue-warm-vivid-50 (#2670e8), ícone e texto --pure-0, e um ícone fa-check antes do título.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [background-color] em {rgb(38, 112, 232)}. Medido: background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bed09e12687974bc3f7e0aa8200e3c0f930ef4f086bb58e8d279148290a5289c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bffd5ad88b3b2c41bb7df6ccc59ad4f0d3014eaf0cc80ad75df0db4219432fc6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de orientação "Como cadastrar." diz: "Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta". Usa jargão técnico (persistidos, banco, commit, transação, cache, endpoint) e não explica como cadastrar.

Esperado: Linguagem simples, sem termos técnicos, que oriente a pessoa usuária sobre o preenchimento.

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
  "cardId": "C-bffd5ad88b3b2c41bb7df6ccc59ad4f0d3014eaf0cc80ad75df0db4219432fc6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c04d0aab8737691e322da68cc107cd9d89af1a57cba5cfa06164baf1638fd055

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro geral (br-message danger, "Não foi possível salvar o país.") aparece com fundo rgb(38,112,232) (blue-warm-vivid-50) e texto branco, porque a regra local ".formulario-pais .retorno-envio" sobrescreve --message-background. Essa é uma cor de informação, não a semântica de erro. A mensagem de sucesso (.confirmacao-envio) usa o verde do DS.

Esperado: Mensagem de erro com a cor semântica de erro (danger) do DS.

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em "Salvar País" (#btn-salvar) com o formulário vazio

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004 (comparação com a mensagem de sucesso)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c04d0aab8737691e322da68cc107cd9d89af1a57cba5cfa06164baf1638fd055",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c455a04d7960acd1d6ab9da96d3c833a96cf75c89e49a4ae4bed0e7b3466d869

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem 'Como cadastrar.' diz: 'Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta.' É jargão técnico de sistema e não explica como cadastrar.

Esperado: A orientação ao usuário deve usar linguagem clara e explicar como fazer o cadastro, sem termos técnicos internos.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:3.11

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(1)>div:nth-of-type(2)>span:nth-of-type(2)" — <span> "Os dados do país são persistidos no banco após o"

### Unidades candidatas (não são crédito)

- U-b213bbf031e5c46981a77d139ec8dffab139dfc393616cf038c60dded0e39d23 — U-02 · sempre · cena 1280x900 · <span> "Os dados do país são persistidos no banco após o": Estrato semeada · classe DS · variante mensagem-jargao-tecnico · sorteada (a2-d6b3f0e36943). O corpo da mensagem informativa de orientação usa jargão de sistema (persistidos, banco, commit, transação, renderizada, cache, endpoint), sem explicação, no mesmo assunto do cadastro. Medido: 7 termos técnicos.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c455a04d7960acd1d6ab9da96d3c833a96cf75c89e49a4ae4bed0e7b3466d869",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c90641edbe34eff939b542a5a7869f4b6d90d0d6281bb8fb1631ec287afbc4fe

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Mensagem br-message danger exibida após envio inválido com fundo rgb(38,112,232) (azul) e texto branco, em vez do esquema de cor de perigo; visualmente igual a uma mensagem de destaque informativa.

Esperado: Mensagem de erro (br-message danger) com as cores do estado de perigo do Design System (fundo danger claro, ícone vermelho), distinguível de informação.

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c90641edbe34eff939b542a5a7869f4b6d90d0d6281bb8fb1631ec287afbc4fe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cf0f688e1488e2f9e59be51c6cfbd43f147f536ae13a9ba3bb44e7c350b66d7c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro da mensagem de erro 'Não foi possível salvar o país.' aparece um ícone de check (fas fa-check, branco, 24×16 px) antes do título. Na mensagem de sucesso não existe esse ícone.

Esperado: Uma mensagem de erro não deve mostrar o ícone de confirmação ou sucesso. O ícone deve ser removido ou ser coerente com o erro.

Janela: 1280×900 · interações desde o carregamento: 1. click #btn-salvar com o formulário vazio

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(1)>div:nth-of-type(2)>i" — <i> · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-bc86778b2805b82d6d968dba284abbce20356b099be563b972de226d952e8d15 — U-06 · S1 · cena 1280x900 · <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info": Estrato semeada · classe DS · variante mensagem-com-visual-selecionado · sorteada (a2-ef29db5bb4ac). Em S1, a mensagem de erro (classe danger, ícone times-circle) recebe o visual do estado Selecionado: fundo --blue-warm-vivid-50 (#2670e8), ícone e texto --pure-0, e um ícone fa-check antes do título.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [background-color] em {rgb(38, 112, 232)}. Medido: background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cf0f688e1488e2f9e59be51c6cfbd43f147f536ae13a9ba3bb44e7c350b66d7c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cff27f695d49a74db59bf2ed566cec329605243c91fad651fd1680867a932612

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Texto de orientação "Como cadastrar." diz: "Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta." — jargão técnico (persistidos, commit, transação, cache, endpoint) que não orienta o cadastro.

Esperado: Orientação em linguagem simples e compreensível para o público do serviço, explicando como cadastrar.

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
  "cardId": "C-cff27f695d49a74db59bf2ed566cec329605243c91fad651fd1680867a932612",
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

## C-e5dbb17639386a9fe15dde3a8e2d6a3b357344c072903f717c13a27e1d1a6c62

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O elemento com role=combobox (div que envolve o label, o input e o botão) não tem nome acessível: não tem aria-label nem aria-labelledby. A árvore de acessibilidade mostra 'combobox [expanded]' sem nome.

Esperado: O combobox deve ter nome acessível ('Continente'), por exemplo com aria-labelledby apontando para o rótulo.

Janela: 1280×900 · interações desde o carregamento: 1. click 'Exibir lista'

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(1)" — <div> "Continente Exibir lista"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e5dbb17639386a9fe15dde3a8e2d6a3b357344c072903f717c13a27e1d1a6c62",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e8c1beaa79dcafd76571023c2b6029d86506ac8fd8d2a318a6aed309ba52d33a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A legenda 'Situação do cadastro' tem text-align:center em uma largura de 636 px e aparece em x≈296. As opções de rádio ficam alinhadas à esquerda (x=62), longe do próprio rótulo.

Esperado: O rótulo do grupo deve ficar alinhado à esquerda, junto às opções, como nos demais rótulos de campo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(2)>form>fieldset>legend" — <legend> "Situação do cadastro"

### Unidades candidatas (não são crédito)

- U-bd3044bb5ff04df88b37b7687d50f60b515af7b7a53705a67b3e19bf8e0dc799 — U-05 · sempre · cena 1280x900 · <legend> "Situação do cadastro": Estrato semeada · classe DS · variante legenda-centralizada · sorteada (a2-f838b54da560). A legenda do grupo de opções fica centralizada (legend com `width: 100%; text-align: center`): o texto começa em 296,1 px, centrado no grupo, enquanto as opções começam em 62 px. A caixa da legend continua em 62 px; o desvio é do texto. A 1ª auditoria cega deu a frase como conforme medindo a caixa (EC-062); o 2º auditor cego, no pedido neutro, mediu o texto em 296,09 px e decidiu viola (R-05).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [text-align] em {center}. Medido: text-align=center | text-align=center | text-align=center
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e8c1beaa79dcafd76571023c2b6029d86506ac8fd8d2a318a6aed309ba52d33a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f336983f2a8317b73abfc990396b3750e1daeff6486bcfe5d0cace36fe2cf064

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro do conteúdo da mensagem de erro há um ícone de "check" (i.fas.fa-check.marca-retorno) visível antes do título "Não foi possível salvar o país.", junto com o ícone times-circle à esquerda. O check indica sucesso e contradiz o estado de erro.

Esperado: Só o ícone correspondente ao estado semântico de erro (times-circle); nenhum ícone de sucesso numa mensagem de erro.

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em "Salvar País" (#btn-salvar) com o formulário vazio

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f336983f2a8317b73abfc990396b3750e1daeff6486bcfe5d0cace36fe2cf064",
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
