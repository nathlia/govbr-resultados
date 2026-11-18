# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 41 cartões únicos · 41 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 41 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 63 sujeitos · 41 cartão(ões) sem evidência verificada · 32 com unidade candidata · estimativa **246 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

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

## C-03054cf1e93e793a690e1f9c465a212cde9abf59a4eb070cffadbbd0f291a15b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo 'Código do país (opcional)' (rótulo, input e texto de apoio) usa font-family: Arial, Helvetica, sans-serif; os demais campos usam Rawline, Raleway.

Esperado: Tipografia do DS: Rawline, com Raleway como alternativa (--font-family-base).

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
- `V-001 confirmed` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-03054cf1e93e793a690e1f9c465a212cde9abf59a4eb070cffadbbd0f291a15b",
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

## C-1363f75db6872a2b6a746d3ff9afc0dbac2646574bd4576c9e299791f655eb7e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cada elemento role=option da lista de continentes contém um input type=radio focável (continente-op0…op5): controle interativo aninhado dentro de outro.

Esperado: Opções de listbox sem descendentes focáveis; o estado de seleção exposto por aria-selected na própria opção.

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão 'Exibir lista' do campo Continente

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
  "cardId": "C-1363f75db6872a2b6a746d3ff9afc0dbac2646574bd4576c9e299791f655eb7e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1d1a2d6c221e6cbc707e88ff9d7c122908ae215fdacb8be57efe5d069230b3ae

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo obrigatório 'Nome do país' é carregado com readonly. O clique do mouse remove o atributo, mas ao chegar pelo teclado (Tab/Shift+Tab) ele continua readOnly=true: digitar 'B' e 'r' deixou value=''. Quem usa só o teclado não consegue preencher o campo e, por isso, não consegue salvar o cadastro.

Esperado: O campo deve ser editável por qualquer forma de foco (teclado ou mouse); readonly não deve ser usado em campo que a pessoa precisa preencher.

Janela: 1280×900 · interações desde o carregamento: 1. Tab até #nome-pais (ou Shift+Tab a partir de #codigo-pais) 2. digitar 'Br'

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção no navegador: readOnly=true e value='' após digitar` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1d1a2d6c221e6cbc707e88ff9d7c122908ae215fdacb8be57efe5d069230b3ae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-25d624fc401a31b76db4deb04dead92e0c8a420ce225a02f2c5c52b7bc942b87

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de orientação diz 'Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta.' — jargão técnico de implementação que não orienta como cadastrar.

Esperado: Texto em linguagem simples, voltado à pessoa usuária, explicando como preencher e salvar o cadastro.

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
  "cardId": "C-25d624fc401a31b76db4deb04dead92e0c8a420ce225a02f2c5c52b7bc942b87",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2e951128beb3add5b3ddb2005b2bec4f19849c232ff4d5a94f7dddfd48c59e11

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro do conteúdo da mensagem de erro há um ícone de confirmação (fas fa-check) antes de 'Não foi possível salvar o país.', ícone que sinaliza sucesso e contradiz o erro (o ícone de erro fa-times-circle já existe na área .icon).

Esperado: Nenhum ícone de sucesso em mensagem de erro; só o ícone de erro do componente.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em 'Salvar País' com o formulário vazio

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
  "cardId": "C-2e951128beb3add5b3ddb2005b2bec4f19849c232ff4d5a94f7dddfd48c59e11",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-319e6d6e1ce6a7d09e436ea76f3ccf61b3961b2cac1576be853e2d527cb2ea01

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A orientação 'Como cadastrar.' diz: 'Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta.' O texto usa jargão técnico (persistidos, commit, transação, cache, endpoint) e não orienta como cadastrar.

Esperado: Texto em linguagem simples, sem termos técnicos, que oriente a pessoa sobre o preenchimento.

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
  "cardId": "C-319e6d6e1ce6a7d09e436ea76f3ccf61b3961b2cac1576be853e2d527cb2ea01",
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

## C-37ddc34e4f32b4504c1a819686f16d7de075ed5dc52bad8d6a3b36106db4c772

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: \#btn-limpar tem CSS order:1. A ordem visual fica Cancelar (x=239), Salvar País (primário, x=376), Limpar Campos (secundário, x=525), enquanto o DOM e a ordem do Tab são Cancelar → Limpar Campos → Salvar País. O botão primário não fica à direita, e o foco salta da esquerda para a direita e depois volta ao meio.

Esperado: A ação de maior ênfase (primária, Salvar País) deve ficar à direita, e a ordem visual deve coincidir com a ordem do DOM e do foco.

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
- `P-12 violada` → identificador devolvido por ferramenta (sem arquivo)
- `registro de foco por Tab: btn-cancelar(239) → btn-limpar(525) → btn-salvar(376)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-37ddc34e4f32b4504c1a819686f16d7de075ed5dc52bad8d6a3b36106db4c772",
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

## C-54c25c91820063d5f181e2102ba678c0a6771a23a5dff5a6bcb11a4968fb7bde

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com a lista de continentes aberta, os rótulos das 6 opções (África … Oceania) têm cor #aaaaaa sobre fundo #ffffff, 14px peso 400: contraste 2,32:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal (cor de texto do DS, ex.: #333333).

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão 'Exibir lista' do campo Continente

Regra declarada: wcag-1.4.3

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
- `FAM-e9c4a7b1145e` → identificador devolvido por ferramenta (sem arquivo)
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
  "cardId": "C-54c25c91820063d5f181e2102ba678c0a6771a23a5dff5a6bcb11a4968fb7bde",
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

## C-5d4addd9d4388678eecbd7887b13121ba5db51058ce49ab614108b38e6c2552a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo 'Código do país (opcional)' (rótulo, input e texto de ajuda) usa font-family Arial, Helvetica, sans-serif, enquanto o resto da página e o campo Nome do país usam Rawline, Raleway.

Esperado: Fonte padrão do DS (Rawline) em todos os campos do formulário.

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
  "cardId": "C-5d4addd9d4388678eecbd7887b13121ba5db51058ce49ab614108b38e6c2552a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-635b805964d963c182f6c01a0b12d7126b4489d80bc561275c7787b1423d74b7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro (br-message danger) é exibida com fundo azul rgb(38,112,232) e texto branco, sem a cor de perigo. As outras instâncias do componente seguem suas variantes: sucesso com fundo rgb(227,245,225) e ícone verde, e informação com fundo rgb(212,229,255).

Esperado: A mensagem de erro deve usar o estilo da variante danger do componente Mensagem do gov.br DS, com fundo e ícone na cor de perigo, para comunicar visualmente o erro.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em "Salvar País" (#btn-salvar) com o formulário vazio

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

- `getComputedStyle(#msg-erro).backgroundColor = rgb(38, 112, 232)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-635b805964d963c182f6c01a0b12d7126b4489d80bc561275c7787b1423d74b7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-694fad9b9a5322654c975b0eae98f68383a896eda363d6d642e9393c00817086

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A legenda "Situação do cadastro" está com text-align:center e aparece centralizada (texto em torno de x≈296 a 464). Os rótulos dos demais campos (Nome do país, Código, Continente) e as opções do grupo estão alinhados à esquerda em x=60, o que afasta a legenda visualmente de suas opções.

Esperado: A legenda do grupo deve ficar alinhada à esquerda, como os demais rótulos de campo do formulário.

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

- `getComputedStyle(legend).textAlign = center; captura de tela inicial` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-694fad9b9a5322654c975b0eae98f68383a896eda363d6d642e9393c00817086",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6da1093ac109c04a24e0fe22f3f102f58d96efdb7ad7f9ec4cc440f48a0fbe76

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os textos das opções da lista de continentes estão em rgb(170,170,170) (#aaa) sobre fundo branco, com 14 px e peso 500: contraste de ≈2,3:1.

Esperado: Contraste mínimo de 4,5:1 para texto de tamanho normal.

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

- `getComputedStyle(label).color = rgb(170, 170, 170); fundo do .br-item rgb(255, 255, 255)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6da1093ac109c04a24e0fe22f3f102f58d96efdb7ad7f9ec4cc440f48a0fbe76",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-718152be477d8358a6ac612b3d0e51a04629da11f143ceb01785555f1cae01b2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os textos das opções do select de continente (África … Oceania) aparecem em #aaaaaa sobre #ffffff, 14px normal: contraste de 2,32:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. click no botão 'Exibir lista' do select de continente

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
- `F-003..F-008 (FAM-a1a0c3eb4cac)` → identificador devolvido por ferramenta (sem arquivo)
- `V-002 confirmed` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-718152be477d8358a6ac612b3d0e51a04629da11f143ceb01785555f1cae01b2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-72bbea860183d90e8e982052564dfa98984e1188bca6b4f15dfa1a50219f187a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O texto do resumo de erro é fixo: com o nome "P" e o continente "América do Sul" preenchidos e só a situação faltando, a mensagem continua dizendo "Preencha o nome do país, o continente e a situação do cadastro". Só #situacao-erro aparece como erro de campo.

Esperado: O resumo de erro deve indicar somente os campos que realmente estão com erro.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em #nome-pais e digitar "P" 2. abrir a lista de continentes e escolher "América do Sul" 3. clicar em "Salvar País"

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

- `innerText de #msg-erro comparado com os .retorno-campo visíveis` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-72bbea860183d90e8e982052564dfa98984e1188bca6b4f15dfa1a50219f187a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-74d5c166d401962c7910cf0b4dda7a381c69ea2eaee20eb05d95d550e5e430e6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro (classe br-message danger) aparece com fundo sólido azul rgb(38,112,232) e texto/ícone brancos, cor que não é a do tipo 'danger' (as outras instâncias usam o fundo do próprio tipo: info rgb(212,229,255), success rgb(227,245,225)).

Esperado: Mensagem do tipo erro com as cores de 'danger' do DS (fundo claro avermelhado e ícone vermelho), distinguindo-se de uma mensagem informativa.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em 'Salvar País' com o formulário vazio

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
  "cardId": "C-74d5c166d401962c7910cf0b4dda7a381c69ea2eaee20eb05d95d550e5e430e6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-751433e08aa83ea5d553fdee4a6d75a8b2e642d9d78aa0dc114ba7a6f835c257

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Ajuda sobre o cadastro" (40×40 px, ao lado do h1) não tem ícone nem texto visível: seu único filho é span.sr-only, ::before/::after com content:none, fundo transparente e sem borda. Na tela aparece só um espaço vazio; só ao passar o mouse surge um círculo sem conteúdo.

Esperado: O botão circular deve exibir um ícone ou rótulo visível que identifique a ação de ajuda.

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

- `computed style de #btn-ajuda e pseudo-elementos; captura de tela após clique` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-751433e08aa83ea5d553fdee4a6d75a8b2e642d9d78aa0dc114ba7a6f835c257",
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

## C-80c6569e3aa1aae7d7eca8fc4c2c04fc0a567c60ff4b4bb5237f340c333997d7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: \#btn-limpar tem CSS order:1 e aparece visualmente por último (x=525), depois de "Salvar País" (x=376), mas no DOM e na ordem de Tab vem antes dele: o foco vai Cancelar (x=239) → Limpar Campos (x=525) → Salvar País (x=376), saltando para a direita e voltando.

Esperado: A ordem visual dos botões de ação deve coincidir com a ordem do DOM e do foco, com o botão primário "Salvar País" na posição final.

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

- `getComputedStyle(#btn-limpar).order = "1"; sequência de focusin registrada via Tab` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-80c6569e3aa1aae7d7eca8fc4c2c04fc0a567c60ff4b4bb5237f340c333997d7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-86f62ff88f072cff15af4530919e298ed918c2025a7f570c7bba465b35f16d0a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A legenda 'Situação do cadastro' tem text-align:center. O texto começa em x=296 (caixa de 636 px), enquanto os itens do radio começam em x=62 e os rótulos dos outros campos em x=60.

Esperado: O rótulo do grupo de radio deve ficar no topo e alinhado à esquerda, como os demais rótulos.

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `P-21 violada` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-86f62ff88f072cff15af4530919e298ed918c2025a7f570c7bba465b35f16d0a",
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

## C-9fbf34d174c82d6b4cc22bb269e25c22b003eb3dcb0dfa9191cee1b81bb5f0b1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O elemento div.br-input com role="combobox" não tem nome acessível: não há aria-label nem aria-labelledby, e o <label for="continente"> nomeia só o input interno. A árvore de acessibilidade expõe "combobox" sem nome.

Esperado: O elemento com papel combobox deve ter nome acessível, por exemplo "Continente".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(1)" — <div> "Continente Exibir lista"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `snapshot de acessibilidade do Playwright: "combobox [ref=e66]" sem nome` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9fbf34d174c82d6b4cc22bb269e25c22b003eb3dcb0dfa9191cee1b81bb5f0b1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a17a675d8b76daae4a6d238df121a09225616ea886cf6dca64b31f63c0cf759b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A legenda 'Situação do cadastro' tem text-align:center num legend de 636 px: o texto fica em x=296–464, enquanto os rádios e os demais rótulos do formulário começam em x≈60–62.

Esperado: Rótulo do grupo alinhado à esquerda, como os demais rótulos de campo do formulário.

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
  "cardId": "C-a17a675d8b76daae4a6d238df121a09225616ea886cf6dca64b31f63c0cf759b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a78bb5f8b874750c834e35a95fa1fc22d0065dc35bcc052336f89823ee7cb247

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro do conteúdo da mensagem de erro há um ícone fa-check (marca de sucesso), visível em (120,29) antes do título 'Não foi possível salvar o país.', ao lado do ícone semântico times-circle.

Esperado: Os ícones de uma mensagem devem corresponder ao estado semântico; uma mensagem de erro não deve exibir a marca de sucesso (check).

Janela: 1280×900 · interações desde o carregamento: 1. click #btn-salvar com o formulário vazio

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
  "cardId": "C-a78bb5f8b874750c834e35a95fa1fc22d0065dc35bcc052336f89823ee7cb247",
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

## C-b37cc636446d4f65a56ca53d008fbd1f3f40b5567bacf62ffb6c8b13a288c27a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro do conteúdo da mensagem de erro há um ícone extra fa-check (marca de sucesso), visível em branco (24×16 px) antes do título "Não foi possível salvar o país.". A mensagem de sucesso não tem esse filho.

Esperado: A mensagem de erro não deve exibir um ícone de confirmação ou sucesso, que contradiz o conteúdo.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em "Salvar País" (#btn-salvar) com o formulário vazio

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

- `outerHTML de #msg-erro; captura de tela do estado de erro` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b37cc636446d4f65a56ca53d008fbd1f3f40b5567bacf62ffb6c8b13a288c27a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ba7f4fe301a86af0a87a6398bc70dfdf670fa04ccec93aebdd97abbf16dd103f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão circular 'Ajuda sobre o cadastro' (br-button circle) não tem ícone (nenhum i/svg/img, ::before/::after com content none), só um span.sr-only. Em repouso, a área de 40×40 px em (570,304) não mostra nada; só aparece um círculo vazio no hover.

Esperado: Um botão circular deve exibir um ícone que transmita a ação (por exemplo, um ícone de ajuda/interrogação), além do aria-label.

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
- `V-003 (unverifiable: sem predicado)` → identificador devolvido por ferramenta (sem arquivo)
- `P-11 violada` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ba7f4fe301a86af0a87a6398bc70dfdf670fa04ccec93aebdd97abbf16dd103f",
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

## C-e3ccb3a1d2c7dde99dada77c83f2178a7162ffa62e96d0cd8b20595753f66fee

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao abrir a lista de continentes, navegar com ArrowDown e escolher uma opção com Enter, o valor é preenchido e a lista fecha, mas document.activeElement passa a ser <body>: o foco se perde.

Esperado: Após a seleção pelo teclado, o foco volta ao campo Continente (ou ao botão que abriu a lista).

Janela: 1280×900 · interações desde o carregamento: 1. clicar no campo Nome do país e digitar 2. clicar em 'Exibir lista' do Continente 3. clicar no campo Continente 4. ArrowDown 5. ArrowDown 6. ArrowDown 7. Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)" — <div#list-2613> "Lista de Opções"

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
  "cardId": "C-e3ccb3a1d2c7dde99dada77c83f2178a7162ffa62e96d0cd8b20595753f66fee",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e768a81e8b7e029db3817886f4163dd7834c668fc555ad01b4dd6e64bf3df8b5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro de envio (br-message danger) aparece com fundo azul rgb(38,112,232) e texto branco, cor de informação. A mensagem de sucesso do mesmo formulário usa o verde semântico rgb(227,245,225).

Esperado: Uma mensagem de erro deve usar as cores semânticas de erro (danger) do DS, não azul.

Janela: 1280×900 · interações desde o carregamento: 1. click #btn-salvar com o formulário vazio

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e768a81e8b7e029db3817886f4163dd7834c668fc555ad01b4dd6e64bf3df8b5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f043d35603dbfc7c8d7c8b198dc5e8ec11a9a7f74ee06d9fdee48374380032a8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A orientação "Como cadastrar." diz: "Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta". É jargão técnico (commit, transação, cache, endpoint) sem instrução útil ao usuário.

Esperado: Texto de orientação em linguagem simples, voltado ao usuário e explicando como cadastrar, sem termos técnicos de implementação.

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

- `texto da árvore de acessibilidade` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f043d35603dbfc7c8d7c8b198dc5e8ec11a9a7f74ee06d9fdee48374380032a8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f5bb65f68142e0fdede2a80688641199aaea02495cea7120ae630faa4e609a8b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão circular 'Ajuda sobre o cadastro' (40×40 px, ao lado do h1) não tem ícone nem texto visível: seu único conteúdo é um span .sr-only, sem fundo, sem borda e sem pseudo-elementos; na tela aparece como espaço vazio (só o contorno de foco aparece ao receber o foco). O clique também não produziu mudança observável.

Esperado: Botão circular do DS com ícone visível (ex.: fa-question-circle) que identifique a ação para quem enxerga a tela.

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
  "cardId": "C-f5bb65f68142e0fdede2a80688641199aaea02495cea7120ae630faa4e609a8b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f5c96e9b2a3ab6d7a7a4d71c4839262c7a90c43215ea171e2c5aa75fd303e2d9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: \#btn-limpar tem CSS order:1; a ordem visual é Cancelar (x=239), Salvar País (x=376), Limpar Campos (x=525), mas a ordem do DOM e do Tab é Cancelar → Limpar Campos → Salvar País, fazendo o foco saltar para a direita e depois voltar.

Esperado: Ordem de foco/leitura coincidente com a ordem visual (sem reordenação por CSS order), com o botão primário na posição prevista pelo DS.

Janela: 1280×900 · interações desde o carregamento: 1. pressionar Tab a partir do campo Continente até os botões de ação

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f5c96e9b2a3ab6d7a7a4d71c4839262c7a90c43215ea171e2c5aa75fd303e2d9",
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
