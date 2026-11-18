# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 45 cartões únicos · 45 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 45 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 74 sujeitos · 45 cartão(ões) sem evidência verificada · 33 com unidade candidata · estimativa **270 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 8 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-07dc71644e1542c0e977b91ca80d6efa264d7bdaa0f914cfb46cfbec40cd22c4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro (br-message danger) aparece com fundo azul sólido rgb(38,112,232) e texto e ícone brancos. Essa cor é diferente do padrão de mensagem de erro e se aproxima da cor informativa. A mensagem de sucesso da mesma tela usa o padrão do DS: fundo rgb(227,245,225) com ícone verde.

Esperado: A mensagem de erro deve usar a cor semântica de perigo do Design System (fundo claro avermelhado com ícone vermelho), de forma coerente com as outras instâncias de br-message.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. focar #btn-ajuda e pressionar Tab até #nome-pais 3. pressionar Enter em #nome-pais (envio do formulário vazio)

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
  "cardId": "C-07dc71644e1542c0e977b91ca80d6efa264d7bdaa0f914cfb46cfbec40cd22c4",
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

## C-112510da768867058348b2ef4f2448317b252616f27d813eb5eb1ddd73b4c71a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Mensagem de orientação "Como cadastrar." diz: "Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta." São jargões técnicos (persistidos, commit, transação, cache, endpoint) e não orientam como cadastrar.

Esperado: Texto em linguagem simples, sem jargão técnico, que explique ao usuário como preencher o cadastro.

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
  "cardId": "C-112510da768867058348b2ef4f2448317b252616f27d813eb5eb1ddd73b4c71a",
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

## C-147cb469afab12bf24e1dc9349795945c8acbf0e65324b6aaa86d17cd5d33f18

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O círculo dos radios de "Situação do cadastro" (label::before) tem borda rgb(204,204,204) sobre fundo branco, com contraste de 1,61:1 no estado não marcado. As bordas dos inputs de texto usam #888, com 3,54:1.

Esperado: O limite visual do controle deve ter contraste de pelo menos 3:1 com o fundo adjacente.

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
  "cardId": "C-147cb469afab12bf24e1dc9349795945c8acbf0e65324b6aaa86d17cd5d33f18",
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

## C-346690b482cf3089791b6c8edefb863f0038a4d9babdf938a57739ca54e75dc6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ícone fas fa-check (marca de sucesso) visível antes do título "Não foi possível salvar o país." dentro da mensagem de erro.

Esperado: Mensagem de erro sem símbolo de sucesso; apenas o ícone de erro.

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
  "cardId": "C-346690b482cf3089791b6c8edefb863f0038a4d9babdf938a57739ca54e75dc6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-365ee85fce8e6f95cbdeb1eac0babbbd91f6992043335b0568a4539ba6940489

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo "Nome do país" é carregado com readonly. Ele só se torna editável depois de um clique do mouse. Ao chegar nele por Tab e digitar "U" ou "a", o valor continua vazio e readOnly continua true.

Esperado: O campo de texto deve aceitar digitação quando recebe o foco pelo teclado, sem depender do mouse.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. focar #btn-ajuda e pressionar Tab até #nome-pais 3. pressionar a tecla U

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
  "cardId": "C-365ee85fce8e6f95cbdeb1eac0babbbd91f6992043335b0568a4539ba6940489",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3c96319c1a5a58d59ea895044d72cc8e27ba0d37ef53dd119d624e8e24b47ec1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os textos das opções da lista de continentes (África … Oceania) têm a cor rgb(170,170,170) sobre fundo branco, em 14px e peso 500. O contraste é de 2,32:1.

Esperado: Contraste mínimo de 4,5:1 para texto de tamanho normal.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. focar #btn-ajuda e pressionar Tab até #nome-pais 3. pressionar Enter em #nome-pais (envio do formulário vazio) 4. clicar no botão "Exibir lista"

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3c96319c1a5a58d59ea895044d72cc8e27ba0d37ef53dd119d624e8e24b47ec1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3d4b2d2110c8aa0d48d3af7af9b693a2e33e181a79fda9ab332339f3961f8135

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com a lista aberta, as setas levam o foco às opções. Ao escolher uma opção com Enter, a lista fecha e o foco vai para o BODY (document.activeElement = BODY). Ele não volta para o campo Continente.

Esperado: Depois de escolher uma opção, o foco deve voltar ao campo #continente ou continuar no componente, preservando a posição na ordem de foco.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. focar #btn-ajuda e pressionar Tab até #nome-pais 3. pressionar Enter em #nome-pais (envio do formulário vazio) 4. clicar no botão "Exibir lista" 5. ArrowDown 6. ArrowDown 7. Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3d4b2d2110c8aa0d48d3af7af9b693a2e33e181a79fda9ab332339f3961f8135",
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

## C-473a9767a2e476af30aeb487f2bd51f946d23e444626b4cec3d06175ffd33ed7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão circular 40x40 ao lado do título contém apenas span.sr-only; sem ícone, fundo transparente e sem pseudo-elemento: não há nada visível, embora seja focável e acionável (nome "Ajuda sobre o cadastro").

Esperado: Botão de ícone do DS com ícone visível que indique a ação de ajuda.

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
  "cardId": "C-473a9767a2e476af30aeb487f2bd51f946d23e444626b4cec3d06175ffd33ed7",
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

## C-4fb181a79c932f23556690827fe5745471786125f7402b813cafc443b7f4d853

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O elemento com role="combobox" (div.br-input que envolve o label, o input e o botão) não tem aria-label nem aria-labelledby. Na árvore de acessibilidade aparece como "combobox" sem nome. O nome "Continente" fica só no input interno.

Esperado: O combobox deve ter nome acessível, por exemplo "Continente", por meio de aria-labelledby ou com o papel aplicado ao próprio input rotulado.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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
  "cardId": "C-4fb181a79c932f23556690827fe5745471786125f7402b813cafc443b7f4d853",
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

## C-5979cb33867f89b5de8f24f288eeb53e6803cd850ac812a2c118bb654fc86351

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Antes do envio, a mensagem de sucesso "País salvo. Os dados do país foram registrados." não existe no DOM. Ela é inserida já com o texto, junto com o próprio contêiner role="status". Não há região viva preexistente onde o texto seja injetado.

Esperado: A região de status (role="status" ou aria-live) deve existir antes da atualização para que a mensagem seja anunciada de forma confiável por tecnologias assistivas.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. clicar em #nome-pais 3. digitar "Uruguai" 4. clicar em "Exibir lista" 5. clicar em "América do Sul" 6. clicar em "Habilitado" 7. clicar em "Salvar País"

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:.br-message.success .content[role=\"status\"]" — Seletor não resolvido

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
  "cardId": "C-5979cb33867f89b5de8f24f288eeb53e6803cd850ac812a2c118bb654fc86351",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5c74146523a2117db58d1e05de1d8399ad2861eb534e043c627cbf5eff4a39a0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A ordem no DOM e no foco é Cancelar → Limpar Campos → Salvar País. Como #btn-limpar tem CSS order:1, a ordem visual fica Cancelar (x=239) → Salvar País (x=376) → Limpar Campos (x=525). Com Tab, o foco salta de x=239 para x=525 e depois volta para x=376.

Esperado: A ordem de foco deve seguir a ordem visual dos botões de ação.

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
  "cardId": "C-5c74146523a2117db58d1e05de1d8399ad2861eb534e043c627cbf5eff4a39a0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-61c4e27147eb06428d771acc09325f5a61e06e1a868f5511adac79756a5a7c37

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com a lista aberta, os rótulos das opções (África, América do Norte, América do Sul, Ásia, Europa, Oceania) têm cor #aaaaaa sobre fundo #ffffff, 14px peso normal: contraste 2.32:1. Os outros rótulos de radio usam #333333.

Esperado: Contraste mínimo de 4.5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar no botão "Exibir lista" do campo Continente (#sel-continente .br-input > button)

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

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-a1a0c3eb4cac` → identificador devolvido por ferramenta (sem arquivo)
- `F-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-008` → identificador devolvido por ferramenta (sem arquivo)
- `V-002 (unverifiable: id da lista muda a cada carga; fato medido no navegador)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-61c4e27147eb06428d771acc09325f5a61e06e1a868f5511adac79756a5a7c37",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6efbe4812ef63dbee0a1a50a9d4e21a7e91ce92e7ed610b5cf6e701f85d1461e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Legenda "Situação do cadastro" com text-align:center (texto em ~x=296..464) e 16,8px, enquanto os demais rótulos do formulário são alinhados à esquerda (start) com 14px; a legenda fica afastada das opções.

Esperado: Rótulo do grupo alinhado e dimensionado como os demais rótulos, próximo às opções.

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
  "cardId": "C-6efbe4812ef63dbee0a1a50a9d4e21a7e91ce92e7ed610b5cf6e701f85d1461e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-72768386f4058c0af13822d38c8bcee8110054876e20d48849dd2d81a7c435be

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo tem readonly no carregamento; o atributo só é removido por clique do mouse. Alcançado por Tab, continua readOnly=true e a tecla "x" não insere texto (value vazio).

Esperado: Campo obrigatório editável por teclado (sem readonly ou com readonly removido também no foco por teclado).

Janela: 1280×900 · interações desde o carregamento: 1. load 2. Tab x9 até #nome-pais 3. press x

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-72768386f4058c0af13822d38c8bcee8110054876e20d48849dd2d81a7c435be",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7bbaed10d77bcf767ba7c33b5e2aa9d7f1a835be44a1dc43a230139ddc80b2d6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: CSS order:1 em #btn-limpar: ordem visual Cancelar (x=239), Salvar País (x=376), Limpar Campos (x=525); ordem do DOM e do Tab é Cancelar, Limpar Campos, Salvar País.

Esperado: Ordem de foco/leitura igual à ordem visual dos botões de ação.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. Tab até as ações do formulário

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
  "cardId": "C-7bbaed10d77bcf767ba7c33b5e2aa9d7f1a835be44a1dc43a230139ddc80b2d6",
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

## C-82677fa7ff9bcad0c4740a3dc43403305c40253c2ca22c0ab9690a37ea70d179

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Orientação "Como cadastrar." usa jargão técnico: "persistidos no banco após o commit da transação", "renderizada a partir do cache do endpoint de consulta"; não explica como cadastrar.

Esperado: Texto de orientação claro e compreensível para o público do serviço.

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
  "cardId": "C-82677fa7ff9bcad0c4740a3dc43403305c40253c2ca22c0ab9690a37ea70d179",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8630b2e0b3a88ac20f3237f0e40224f721f3956399945f37f55c4610adf56dfa

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O atalho "Ir para o rodapé" usa accesskey="2".

Esperado: Pela convenção do e-MAG, as teclas de acesso são 1 para conteúdo, 2 para menu, 3 para busca e 4 para rodapé. O link do rodapé deve usar accesskey="4".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.5

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>nav>a:nth-of-type(2)" — <a> "Ir para o rodapé (2/2)"

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
  "cardId": "C-8630b2e0b3a88ac20f3237f0e40224f721f3956399945f37f55c4610adf56dfa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8976afe063a81d1cb64155ee9899a891859715efc6ddba822eb84c9d57ff1e9c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A legenda "Situação do cadastro" tem text-align:center e aparece centralizada (x≈296 em uma largura de 636 px). Os outros rótulos de campo estão alinhados à esquerda (x=60), e as opções do grupo também.

Esperado: O rótulo do grupo de radios deve estar alinhado à esquerda, como os demais rótulos de campo do formulário.

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
  "cardId": "C-8976afe063a81d1cb64155ee9899a891859715efc6ddba822eb84c9d57ff1e9c",
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

## C-9810c4f7cf4bb5778572afd44ce44ece44abe291bb0fbe02c59ee7b87be5c004

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo "Código do país (opcional)" (rótulo, input #codigo-pais e texto auxiliar #codigo-pais-apoio) é renderizado com font-family: Arial, Helvetica, sans-serif, enquanto os demais campos usam Rawline, Raleway.

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
- `F-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-015` → identificador devolvido por ferramenta (sem arquivo)
- `F-016` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9810c4f7cf4bb5778572afd44ce44ece44abe291bb0fbe02c59ee7b87be5c004",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a079f5c3a25f15b1f7eaddd4f525f948b3874becce962455c4828a34e5b93a0f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com Nome do país preenchido ("Peru") e sem continente e situação, o resumo continua dizendo "Preencha o nome do país, o continente e a situação do cadastro"; texto fixo, não reflete os campos em erro (só continente e situação ficaram aria-invalid).

Esperado: Resumo de erro que cite apenas os campos efetivamente em erro.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click #nome-pais 3. type Peru 4. click #codigo-pais 5. type 12 6. click #btn-salvar

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

### Sujeitos

- "body>main>div:nth-of-type(2)>form>div:nth-of-type(1)>div:nth-of-type(2)>span:nth-of-type(2)" — <span> "Faltam informações obrigatórias. Preencha o nome"

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
  "cardId": "C-a079f5c3a25f15b1f7eaddd4f525f948b3874becce962455c4828a34e5b93a0f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a90aa70a403da434a9eab428b9d53bcde0451e52464f65ae82b5d9aecdf7adbf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O aviso "Como cadastrar." diz: "Os dados do país são persistidos no banco após o commit da transação, e a listagem abaixo é renderizada a partir do cache do endpoint de consulta". O texto usa jargão técnico (persistidos, commit, transação, cache, endpoint) sem explicação e não orienta o cadastro.

Esperado: Texto em linguagem simples, voltado ao cidadão ou servidor, que explique como cadastrar, sem termos técnicos ou com eles explicados.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:3.12

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
  "cardId": "C-a90aa70a403da434a9eab428b9d53bcde0451e52464f65ae82b5d9aecdf7adbf",
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

## C-b55bbd89eb0c8ebb713292ff4818a7f0f5f315d92d40a81302b4cb19929e0d04

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Rótulos das opções de continente em #aaaaaa sobre #ffffff, 14px peso 500: contraste 2,32:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click botão Exibir lista do continente

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

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
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
  "cardId": "C-b55bbd89eb0c8ebb713292ff4818a7f0f5f315d92d40a81302b4cb19929e0d04",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b55da4f083511f8fdda8c95afaf56e5fd4e3449a5b75446afd888e1bcf05f142

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cada div role=option contém um input type=radio focável ([ferramenta citada] nested-interactive: Element has focusable descendants).

Esperado: Controles interativos não aninhados dentro de role=option.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. click botão Exibir lista do continente

Regra declarada: wcag:4.1.2

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
  "cardId": "C-b55da4f083511f8fdda8c95afaf56e5fd4e3449a5b75446afd888e1bcf05f142",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bca9b38a4d963fcca697c52242a820678eb09802acd4ee62bd472997195a4b1d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão circular "Ajuda sobre o cadastro" (40×40 px, ao lado do h1) não contém ícone nem texto visível: só um span.sr-only; ::before sem conteúdo, fundo transparente, sem borda. Na tela aparece uma área vazia, notada só no hover/foco.

Esperado: Botão do tipo circular com ícone visível (ex.: ícone de ajuda/question-circle) que transmita a ação, mantendo o nome acessível.

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
- `screenshot viewport após hover mostra círculo vazio` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bca9b38a4d963fcca697c52242a820678eb09802acd4ee62bd472997195a4b1d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c1045b53bc0b6b20b495cf18bbb8d1735b9c44adb79fa9f436237134a6fb0b08

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão circular "Ajuda sobre o cadastro" (40×40 px, ao lado do h1) contém apenas um span .sr-only. Não tem ícone, borda nem fundo (border 0, fundo transparente), por isso fica invisível. Só mostra um círculo de fundo no hover. Mesmo assim é focável e, ao ser acionado, reexibe o aviso informativo.

Esperado: Um botão circular do Design System deve exibir um ícone ou rótulo visível que identifique a ação de ajuda.

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
  "cardId": "C-c1045b53bc0b6b20b495cf18bbb8d1735b9c44adb79fa9f436237134a6fb0b08",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ca2baf4606817c1bb6463ae9af6258ada35c9d6d92161db0f4e1fe83b1c1897d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro do conteúdo da mensagem de erro "Não foi possível salvar o país." há um ícone fa-check (visto de sucesso), visível antes do título, além do ícone de erro fa-times-circle. A mensagem de sucesso não tem esse ícone extra.

Esperado: Ícones coerentes com o estado semântico da mensagem de erro, sem o ícone de sucesso.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em "Salvar País" (#btn-salvar) com o formulário vazio

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
  "cardId": "C-ca2baf4606817c1bb6463ae9af6258ada35c9d6d92161db0f4e1fe83b1c1897d",
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

## C-d7d593c4ab72b121b602dd48deecbee65ce5010a44f80798e3343b7a6455f715

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro de envio (.br-message.danger) aparece com fundo rgb(38,112,232) (#2670e8, --blue-warm-vivid-50, cor de destaque/seleção) e texto branco. É azul, como uma informação, e não a cor semântica de erro. Na mesma tela, a mensagem de sucesso usa o verde claro correto.

Esperado: Cores semânticas de erro: superfície --red-vivid-10, ícone --red-vivid-50 e texto --gray-80 (especificação [regra citada]).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em "Salvar País" (#btn-salvar) com o formulário vazio

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
  "cardId": "C-d7d593c4ab72b121b602dd48deecbee65ce5010a44f80798e3343b7a6455f715",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e0fd673862a055e56c732c233523dcb6f2e3b4d42806ec7461dfc4ba1e373b24

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O rótulo, o input e o texto de apoio do campo "Código do país (opcional)" usam font-family Arial, Helvetica. As outras instâncias de br-input (Nome do país, Continente) usam Rawline, Raleway.

Esperado: Todos os campos devem usar a família tipográfica padrão do Design System (Rawline), de forma coerente entre as instâncias do mesmo componente.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e0fd673862a055e56c732c233523dcb6f2e3b4d42806ec7461dfc4ba1e373b24",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e2129e84f62b432ce12c505d6f0b6149634cf2bdc2e3d5b55bb7796776eda765

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A legenda "Situação do cadastro" tem text-align:center; o texto começa em x=296 px, enquanto as opções de radio ficam alinhadas à esquerda em x=62 px.

Esperado: Rótulo do grupo de radio no topo do componente, alinhado à esquerda.

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
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e2129e84f62b432ce12c505d6f0b6149634cf2bdc2e3d5b55bb7796776eda765",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e82a61687d7c0fff310e1e2c71717cf2ed7dc386ec97a7cb6b4ae60d4d9b5d3b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: .acoes-formulario: #btn-limpar tem order:1 e fica à direita (x=525) do botão primário #btn-salvar (x=376); ordem visual Cancelar, Salvar País, Limpar Campos. A ordem no DOM e do Tab é Cancelar → Limpar Campos → Salvar País, então o foco salta para a direita e volta para o meio.

Esperado: Botão primário (Salvar País) posicionado à direita dos botões secundários, e ordem de foco coerente com a ordem visual.

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
- `registro de Tab: btn-cancelar(239) → btn-limpar(525) → btn-salvar(376)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e82a61687d7c0fff310e1e2c71717cf2ed7dc386ec97a7cb6b4ae60d4d9b5d3b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ec3ce04d1896be6c4086c4971a63cd43c16a16a4f1440b717bc8c1ce225336e8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Dentro da mensagem de erro, antes do título "Não foi possível salvar o país.", aparece um ícone de check (fa-check), que é o símbolo de sucesso. As mensagens info e success da tela não têm esse ícone extra no conteúdo.

Esperado: A mensagem de erro não deve exibir um ícone de sucesso. A iconografia deve corresponder ao tipo de mensagem.

Janela: 1280×900 · interações desde o carregamento: 1. load 2. focar #btn-ajuda e pressionar Tab até #nome-pais 3. pressionar Enter em #nome-pais (envio do formulário vazio)

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
  "cardId": "C-ec3ce04d1896be6c4086c4971a63cd43c16a16a4f1440b717bc8c1ce225336e8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fca6b163510a3d56844a0d28ab57f60705a1e367a873e8162351b33c358f09e3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Mensagem br-message danger exibida com fundo azul rgb(38,112,232) e texto branco, paleta próxima da mensagem informativa (azul) e não da variante de erro do DS.

Esperado: Mensagem de erro com as cores da variante danger do gov.br DS, distinguível da mensagem informativa.

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
  "cardId": "C-fca6b163510a3d56844a0d28ab57f60705a1e367a873e8162351b33c358f09e3",
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
