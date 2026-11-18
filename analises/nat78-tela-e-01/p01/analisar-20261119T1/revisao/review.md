# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 40 cartões únicos · 40 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 40 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 60 sujeitos · 40 cartão(ões) sem evidência verificada · 33 com unidade candidata · estimativa **240 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

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

## C-01fb93a24470484c92800358828c0085ae5b6ec7f5a9a6ba61dde4b65923345f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro (.br-message.danger, "Não foi possível salvar o país") aparece com fundo azul rgb(38,112,232) e texto branco, a mesma família de cor da informação, e não com a cor semântica de erro.

Esperado: Mensagem de erro com a cor semântica de erro (danger) do DS.

Janela: 1280×900 · interações desde o carregamento: 1. click em "Salvar País" com o formulário vazio

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-01fb93a24470484c92800358828c0085ae5b6ec7f5a9a6ba61dde4b65923345f",
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

## C-0f471587c32c19a54e07744429299600168cc57c161f8811a8756b2594842f6c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A legenda "Situação do cadastro" está centralizada (text-align:center, texto em x≈296–464) sobre as opções de rádio alinhadas à esquerda (x=62), enquanto todos os outros rótulos do formulário são alinhados à esquerda.

Esperado: Legenda do grupo alinhada à esquerda, junto das opções, como os demais rótulos de campo do padrão.

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

- `getComputedStyle(legend).textAlign = center` → identificador devolvido por ferramenta (sem arquivo)
- `screenshot inicial` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0f471587c32c19a54e07744429299600168cc57c161f8811a8756b2594842f6c",
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

## C-157fbedacff39eef10bae390f9ea4acb36cac6544aee77e6ac76fbff89958db9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com a lista de continentes aberta, os rótulos das 6 opções têm color #aaaaaa sobre fundo #ffffff, 14px, peso 500: contraste de 2,32:1.

Esperado: Contraste mínimo de 4,5:1 para o texto das opções.

Janela: 1280×900 · interações desde o carregamento: 1. click no botão "Exibir lista" (#sel-continente button)

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
- `FAM-a1a0c3eb4cac` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-157fbedacff39eef10bae390f9ea4acb36cac6544aee77e6ac76fbff89958db9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1b40b9e6c7736f316931bd9e89d2da86a238493cd7c2bd684312d4637d8bdcc2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A orientação "Como cadastrar." diz: "Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta." É jargão técnico (persistidos, commit, transação, cache, endpoint) e não orienta como cadastrar.

Esperado: Texto curto, claro e objetivo, em linguagem simples, que oriente o cadastro.

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
  "cardId": "C-1b40b9e6c7736f316931bd9e89d2da86a238493cd7c2bd684312d4637d8bdcc2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-24ad5e41087cea35ac4850a7aa2a80018fb4cf896b829356c8adec96ae013391

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: \#btn-limpar (secundário) tem CSS order:1 e aparece à direita do primário: Salvar País em x=376..509, Limpar Campos em x=525..700. A ordem visual (Cancelar, Salvar, Limpar) difere da ordem do DOM e do Tab (Cancelar, Limpar, Salvar).

Esperado: O botão de maior ênfase (primário Salvar País) deve ficar à direita, e a ordem visual deve coincidir com a ordem de foco.

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
- `V-003` → identificador devolvido por ferramenta (sem arquivo)
- `P-12` → identificador devolvido por ferramenta (sem arquivo)
- `browser: focusin log Tab` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-24ad5e41087cea35ac4850a7aa2a80018fb4cf896b829356c8adec96ae013391",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2d61abc4f75105dee2d386d0c7e2fe3d0653e13665605e6196e1d0f644f6ae80

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com continente (América do Sul) e situação (Suspenso) preenchidos e só o nome vazio, o resumo de erro continua dizendo "Preencha o nome do país, o continente e a situação do cadastro e salve novamente". Só #nome-pais está aria-invalid, e só #nome-pais-erro aparece.

Esperado: O resumo de erro deve citar apenas os campos que de fato estão com erro.

Janela: 1280×900 · interações desde o carregamento: 1. clicar "Exibir lista" 2. clicar label[for=continente-op2] (América do Sul) 3. clicar label[for=situacao-suspenso] 4. clicar #btn-salvar

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(1)>div:nth-of-type(2)>span:nth-of-type(2)" — <span> "Faltam informações obrigatórias. Preencha o nome"

### Unidades candidatas (não são crédito)

- U-bc86778b2805b82d6d968dba284abbce20356b099be563b972de226d952e8d15 — U-06 · S1 · cena 1280x900 · <div#msg-erro> "Erro Não foi possível salvar o país. Faltam info": Estrato semeada · classe DS · variante mensagem-com-visual-selecionado · sorteada (a2-ef29db5bb4ac). Em S1, a mensagem de erro (classe danger, ícone times-circle) recebe o visual do estado Selecionado: fundo --blue-warm-vivid-50 (#2670e8), ícone e texto --pure-0, e um ícone fa-check antes do título.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [background-color] em {rgb(38, 112, 232)}. Medido: background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232) | background-color=rgb(38, 112, 232)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2d61abc4f75105dee2d386d0c7e2fe3d0653e13665605e6196e1d0f644f6ae80",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2f7c898ad36da8bba393486535d4ac95d497ea5d5b48744948ab0fa2020195e9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo "Nome do país" (obrigatório) carrega com readonly. O atributo só é removido no clique do mouse; ao receber foco por Tab ele continua readonly=true e as teclas digitadas ("U", "r", "a", Espaço) não entram (value permanece ""). Enter apenas envia o formulário. Pelo teclado não há como preencher o campo, e a tecnologia assistiva o anuncia como somente leitura.

Esperado: O campo editável precisa aceitar digitação quando operado só pelo teclado (sem atributo readonly ou com readonly removido também no foco/teclado).

Janela: 1280×900 · interações desde o carregamento: 1. load 2. Tab até #nome-pais (a partir de #btn-ajuda) 3. digitar "Ur" 4. Enter 5. Espaço 6. digitar "a"

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

- `browser: focusin log nome-pais ro:true; value="" após digitação` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2f7c898ad36da8bba393486535d4ac95d497ea5d5b48744948ab0fa2020195e9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-320cab99650b40f2a3d54bc0fc5a4073ad00706cca8299d71cf36b6df2908022

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro do envio (br-message danger) é exibida com fundo azul sólido rgb(38,112,232) e texto branco, igual a um destaque informativo/primário; as demais mensagens da tela usam fundos de feedback claros (info rgb(212,229,255), sucesso rgb(227,245,225)).

Esperado: Mensagem de erro com a aparência do estado "danger" do componente Message do gov.br DS (cor de feedback de erro), distinguível da mensagem informativa.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em "Salvar País" com o formulário vazio

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

- `getComputedStyle(#msg-erro).backgroundColor = rgb(38,112,232)` → identificador devolvido por ferramenta (sem arquivo)
- `screenshot do estado de erro` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-320cab99650b40f2a3d54bc0fc5a4073ad00706cca8299d71cf36b6df2908022",
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

## C-4791bb4730debfa5424f03c05a71cfe04d0c14d2b1ce81995a862eb33b244a5a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão circular "Ajuda sobre o cadastro" (.br-button.circle, 40x40, fundo transparente, sem borda) não tem nenhum ícone (<i>/svg); só um span.sr-only. Na tela, ao lado do h1, não aparece nada (só um círculo claro no hover).

Esperado: Botão circular com ícone visível que transmita a ação (ex.: ícone de ajuda), além do aria-label.

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
- `V-002` → identificador devolvido por ferramenta (sem arquivo)
- `P-11` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4791bb4730debfa5424f03c05a71cfe04d0c14d2b1ce81995a862eb33b244a5a",
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

## C-4a894ef3742378bd22aeb16b9f92311c739358250d0952c706080296760b66ad

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão circular "Ajuda sobre o cadastro" (40×40 px ao lado do h1) contém apenas um span .sr-only: não tem ícone, texto visível, fundo nem borda (background transparente, border 0, ::before/::after none). Na tela é uma área vazia, percebida apenas pelo contorno de foco.

Esperado: Botão circular do DS com ícone visível (ex.: fa-question-circle) que identifique a ação para usuários que enxergam.

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
- `browser: computedStyle #btn-ajuda; screenshot` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4a894ef3742378bd22aeb16b9f92311c739358250d0952c706080296760b66ad",
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

## C-5047b1bd490a3744a4f2ad2390b7e63d92589cc0c2ab1d6b64ace1940a7fec69

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão "Ajuda sobre o cadastro" (40x40 px, ao lado do h1) não tem ícone nem texto visível: contém apenas span.sr-only; fundo transparente e sem borda em repouso, ficando invisível na tela (só aparece um círculo claro no hover). O nome acessível existe apenas para tecnologia assistiva.

Esperado: O botão de ajuda deve ter conteúdo visível que o identifique (ex.: ícone de ajuda do DS em br-button circle) para usuários que enxergam.

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

- `DOM: <button class="br-button circle acao-ajuda" id="btn-ajuda" aria-label="Ajuda sobre o cadastro"><span class="sr-only">…</span></button>` → não encontrado na evidência preservada da execução
- `estilo calculado: bg rgba(0,0,0,0), 40x40 em x=570,y=304` → identificador devolvido por ferramenta (sem arquivo)
- `screenshot inicial sem elemento visível ao lado do título` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5047b1bd490a3744a4f2ad2390b7e63d92589cc0c2ab1d6b64ace1940a7fec69",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-552cbb8578aac61923389e6eeb0d1f1046f6de0c669ea2dc44743347bb9a7ed7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro (.br-message.danger) aparece com fundo azul vivo rgb(38,112,232) e texto branco: visualmente parecida com uma mensagem informativa e diferente do padrão de erro. A mensagem info #msg-orientacao e a de sucesso usam o fundo claro do DS (rgb(212,229,255) e rgb(227,245,225)) com texto escuro.

Esperado: Mensagem danger com o estilo de erro do DS (fundo claro na cor de perigo/vermelho, texto escuro), distinguível de mensagens informativas.

Janela: 1280×900 · interações desde o carregamento: 1. clicar #btn-salvar com formulário vazio

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
- `browser: computedStyle #msg-erro backgroundColor rgb(38,112,232)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-552cbb8578aac61923389e6eeb0d1f1046f6de0c669ea2dc44743347bb9a7ed7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5541be62e8615c299b656d36768dc1ffdf723496f35a86092d94132e9c9ab0c6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Mensagem "Como cadastrar." usa jargão técnico sem explicação: "persistidos no banco após o commit da transação", "renderizada a partir do cache do endpoint de consulta"; não orienta como cadastrar.

Esperado: Texto de orientação em linguagem simples, compreensível ao público do serviço, sem termos técnicos de implementação (commit, cache, endpoint).

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

- `texto lido do DOM e da árvore de acessibilidade` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5541be62e8615c299b656d36768dc1ffdf723496f35a86092d94132e9c9ab0c6",
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

## C-68b088672fd1eb5ecc3555c0ec240f550676b9b9c133c63feb1886aa0dafc8eb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cada elemento role="option" da lista de continentes contém um input type="radio" focável (continente-op0…op5), ou seja, controle interativo aninhado dentro de outro.

Esperado: Opções do listbox sem descendentes focáveis (o radio não deve ficar exposto como controle dentro da opção).

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão "Exibir lista" (#sel-continente > div:nth-of-type(1) > button)

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
- `FAM-3bb25f27ac98` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-012` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-68b088672fd1eb5ecc3555c0ec240f550676b9b9c133c63feb1886aa0dafc8eb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6915d1085964a71870f9027281242815de1f8291fcc5542a2199ce2bbdb64204

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A legend "Situação do cadastro" tem text-align:center; o texto começa em x=296, enquanto o grupo e os radios começam em x=62. Os rótulos dos outros campos do formulário estão alinhados à esquerda.

Esperado: Rótulo do grupo de radios no topo e alinhado à esquerda.

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
- `V-004` → identificador devolvido por ferramenta (sem arquivo)
- `P-33` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6915d1085964a71870f9027281242815de1f8291fcc5542a2199ce2bbdb64204",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7bfa6967cd8425771108998431d8930fdab65b082a469feca956270e5acdbcd7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro do conteúdo da mensagem de erro aparece um ícone de confirmação (fa-check, branco, visível) antes de "Não foi possível salvar o país.", contradizendo o ícone de erro (fa-times-circle) da mesma mensagem.

Esperado: Ícones da mensagem coerentes com o estado de erro; sem ícone de sucesso/confirmação numa mensagem de falha.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em "Salvar País" com o formulário vazio

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

- `DOM: <i class="fas fa-check marca-retorno" aria-hidden="true"> em #msg-erro .content; display inline-block, cor rgb(255,255,255)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7bfa6967cd8425771108998431d8930fdab65b082a469feca956270e5acdbcd7",
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

## C-81872f3b7b2a5b8a4a1f9f9d758570d8b42c125d678276dbf98e299814ac6b56

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo "Nome do país" é carregado com readonly="" e só perde o readonly com clique do mouse. Chegando por Tab (a partir de #btn-ajuda), document.activeElement=#nome-pais mas readOnly=true; as teclas U, y, Enter, Espaço e a não inserem nada (value=""); o Enter apenas envia o formulário e exibe o erro "Informe o nome do país". Leitores de tela também anunciam o campo obrigatório como somente leitura.

Esperado: O campo obrigatório deve aceitar digitação pelo teclado, sem depender do mouse (sem readonly ou com readonly removido também no foco por teclado).

Janela: 1280×900 · interações desde o carregamento: 1. load 2. foco por Tab até #nome-pais (Tab a partir de #btn-ajuda) 3. digitar "Uy", Enter, Espaço, "a"

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

- `browser: readOnly=true e value="" após teclas` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-81872f3b7b2a5b8a4a1f9f9d758570d8b42c125d678276dbf98e299814ac6b56",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8b5ac05d076ba03362448dbab4b20c41328bb9d2620b7fee5f74cab2d9427344

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo "Nome do país" é carregado com o atributo readonly (exposto como somente leitura) e só se torna editável depois de receber foco; ferramenta que preenche sem focar o campo falhou ("element is not editable") e o preenchimento automático (autocomplete=country-name) fica bloqueado enquanto readonly.

Esperado: Campo editável exposto sem estado de somente leitura desde o carregamento, com estado programático igual ao comportamento real.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(2)>div>input" — <input#nome-pais>

### Unidades candidatas (não são crédito)

- U-6353869de8ad60ea5ed4964e61b1aae6231b49d2d4ce13856fd1935b3ef6b969 — U-08 · sempre · cena 1280x900 · <input#nome-pais>: Estrato semeada · classe G · variante campo-readonly-ate-clique · sorteada (a2-328f62cfe4ce). O campo Nome do país é `readonly` até receber um clique de ponteiro (script da página): com foco por Tab o texto digitado não entra (valor vazio).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `DOM inicial: <input id="nome-pais" … required readonly>` → identificador devolvido por ferramenta (sem arquivo)
- `Playwright fill sem foco: TimeoutError element is not editable` → identificador devolvido por ferramenta (sem arquivo)
- `após click: readOnly=false` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8b5ac05d076ba03362448dbab4b20c41328bb9d2620b7fee5f74cab2d9427344",
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

## C-980746a8e5326e6f00bf2ea67b7995a8554b153f35dff3c770ae1a438c259122

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com a lista de continentes aberta, os rótulos das 6 opções (África … Oceania) têm cor #aaaaaa sobre #ffffff, 14px peso normal: contraste 2.32:1.

Esperado: Contraste mínimo de 4,5:1 para o texto das opções.

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão "Exibir lista" (#sel-continente > div:nth-of-type(1) > button)

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
- `FAM-e9c4a7b1145e` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-980746a8e5326e6f00bf2ea67b7995a8554b153f35dff3c770ae1a438c259122",
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

## C-aa08ebccf95ed0f34281240136e9751f1d2b30030565494e45abff795fa24aa5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo "Código do país" (label, input e texto auxiliar) usa font-family: Arial, Helvetica, sans-serif; os demais campos usam Rawline, Raleway, sans-serif.

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
- `V-001` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-4c13fe4b35ba` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-aa08ebccf95ed0f34281240136e9751f1d2b30030565494e45abff795fa24aa5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-acbe03ce816d489aec9d1d2789adf8633c90c7ffdb52faca9f860486eea6c3c9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na ordem do DOM e do foco os botões são Cancelar → Limpar Campos → Salvar País, mas #btn-limpar tem CSS order:1 e aparece à direita (x=525), após Salvar País (x=376). O foco vai de Cancelar (x=239) para o botão mais à direita e então volta ao do meio.

Esperado: Ordem visual dos botões de ação igual à ordem do DOM e do foco (sem reordenar com CSS order).

Janela: 1280×900 · interações desde o carregamento: 1. Tab sequencial a partir de #continente

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

- `browser: focusin log btn-cancelar(239) → btn-limpar(525) → btn-salvar(376); getComputedStyle order` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-acbe03ce816d489aec9d1d2789adf8633c90c7ffdb52faca9f860486eea6c3c9",
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

## C-e9a0a2d54c664576f1168bbb656fe60d5e8bdd6d7fd3b05a7e6adfc62960930b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de orientação intitulada "Como cadastrar." diz: "Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta". O texto usa jargão técnico (persistidos, commit, transação, cache, endpoint) e não explica ao usuário como cadastrar.

Esperado: Texto em linguagem simples para o cidadão/servidor, explicando como cadastrar (e, se for o caso, que o novo país pode demorar a aparecer na lista).

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
- `browser: texto de #msg-orientacao` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e9a0a2d54c664576f1168bbb656fe60d5e8bdd6d7fd3b05a7e6adfc62960930b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ea940b367c68383977fdb015bed4060ccd5b608e98ad24e3fd3bc6666257bade

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro do conteúdo da mensagem de erro há um ícone fa-check visível (24x16, branco) antes do título "Não foi possível salvar o país.", ou seja, um sinal de sucesso numa mensagem de erro (o ícone semântico de erro times-circle também está presente à esquerda).

Esperado: Ícones correspondentes ao estado semântico de erro; nenhum ícone de sucesso numa mensagem de erro.

Janela: 1280×900 · interações desde o carregamento: 1. click em "Salvar País" com o formulário vazio

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
  "cardId": "C-ea940b367c68383977fdb015bed4060ccd5b608e98ad24e3fd3bc6666257bade",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f257f956f2be4f2836692139b39a26f550f1eae1865404bd5558388ce6ff21bb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro do conteúdo da mensagem de erro há um ícone fa-check (marca de sucesso, branco, 24×16 px) antes do título "Não foi possível salvar o país.", além do ícone de erro fa-times-circle.

Esperado: A mensagem de erro não deve exibir o ícone de sucesso (check); apenas o ícone de erro do DS.

Janela: 1280×900 · interações desde o carregamento: 1. clicar #btn-salvar com formulário vazio

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
- `browser: screenshot do estado de erro` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f257f956f2be4f2836692139b39a26f550f1eae1865404bd5558388ce6ff21bb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f39e0105b4267fbf1839fd38be9f8ffe19a74074b70bdc273235363db835ad8d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: \#btn-limpar tem CSS order:1; ordem visual é Cancelar (x=239), Salvar País (x=376), Limpar Campos (x=525), mas a ordem do DOM e de tabulação é Cancelar → Limpar Campos → Salvar País. O foco salta da esquerda para a direita e volta ao centro.

Esperado: Ordem de foco e de leitura coerente com a ordem visual dos botões (sem reordenação por CSS order), com a ação primária na posição prevista pelo padrão.

Janela: 1280×900 · interações desde o carregamento: 1. Tab repetido a partir do carregamento até os botões de ação

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
- `getComputedStyle(#btn-limpar).order = 1` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f39e0105b4267fbf1839fd38be9f8ffe19a74074b70bdc273235363db835ad8d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f55f73ebe3ee50e1046f9720b6639b83a9ba3f4590141031d1b5f1c89d7dc56a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com a lista de continentes aberta, os textos das opções (África … Oceania) têm cor rgb(170,170,170) sobre fundo branco, 14px peso 500: contraste 2,32:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão "Exibir lista" do campo Continente

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

- `getComputedStyle(label).color = rgb(170,170,170); fundo .br-item rgb(255,255,255); razão calculada 2.32` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f55f73ebe3ee50e1046f9720b6639b83a9ba3f4590141031d1b5f1c89d7dc56a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fba9a76f2400907e2821c8b676204b018d57eedd4f05ce48864d85b9e71f2f41

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A legenda "Situação do cadastro" tem text-align:center numa largura de 636 px; o texto fica centralizado (~x 296–464), afastado dos radios alinhados à esquerda (x=62). Os demais rótulos do formulário (ex.: label[for=nome-pais]) ficam alinhados à esquerda, em x=60.

Esperado: Legenda do grupo de radios alinhada à esquerda, junto das opções, como os demais rótulos de campo do DS.

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
- `browser: computedStyle legend textAlign=center width=636px` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fba9a76f2400907e2821c8b676204b018d57eedd4f05ce48864d85b9e71f2f41",
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
