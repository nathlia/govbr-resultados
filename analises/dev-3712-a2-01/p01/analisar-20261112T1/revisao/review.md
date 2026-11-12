# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 49 cartões únicos · 49 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 49 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 70 sujeitos · 49 cartão(ões) sem evidência verificada · 40 com unidade candidata · estimativa **294 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

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

## C-044eeb55c1a3395733800bc7763ef33d479ac53be60c696712321f3a309de331

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: ARIA hidden element must not be focusable or contain focusable elements

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:aria-hidden-focus

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div>button" — <button> "Selecione o arquivo" · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-41d6f65ee0ca25c55b323cd4c12ddf75c27d151d4c39bb9e36d5cf0ef31857bc — U-02 · S1 · cena 1280x900 · <button> "Selecione o arquivo": Estrato DS · variante borda-sem-feedback · sorteada (a2-caf6bc80cb4b) · coincide com o core 3.7.0. Arrastar um arquivo válido (PDF) sobre a área do upload liga o estado Dropzone ativo da página (fundo de interação, cursor copy) mas a borda continua na cor de interação rgb(19, 81, 180); a norma pede borda verde. Sem predicado na referência (o observável pede arrasto sintético dentro de S1); medido em tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-044eeb55c1a3395733800bc7763ef33d479ac53be60c696712321f3a309de331",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0b24600aabb3aecb099fc70d245ab7e84faace5a6c9f1705b4ec446d0d66b133

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: <li> elements must be contained in a <ul> or <ol>

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:listitem

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(2)" — <li> "Documentos"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0b24600aabb3aecb099fc70d245ab7e84faace5a6c9f1705b4ec446d0d66b133",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0be11564355e5b9b08c09f8e486d04a2a4e2b2acb9f78cd5fd1c1b3766003acc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar o formulário vazio, o campo "Tipo de documento" só ganha borda vermelha (.br-input.danger; borda rgb(229,34,7)). Não há mensagem de erro em texto para o campo, nem aria-invalid ou aria-describedby; a mensagem geral diz "Corrija os campos indicados". O campo de arquivo, por sua vez, recebe texto de erro.

Esperado: O erro do campo identificado e descrito em texto junto dele, associado programaticamente (aria-describedby/aria-invalid).

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos 2. click .acao-enviar

Regra declarada: wcag:3.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>input" — <input#tipo-documento> "Selecione o tipo do documento pendente"

### Unidades candidatas (não são crédito)

- U-bca12251136dab4326f7e6410c56662fa4e3456dce17341d7d440cef99fbf9e5 — U-09 · S2 · cena 1280x900 · <input#tipo-documento> "Selecione o tipo do documento pendente": Estrato G · variante erro-so-borda. Depois de Enviar documento com o formulário vazio, o campo 'Tipo de documento' só ganha a borda de erro (--danger, 2 px): nenhum texto identifica e descreve o erro, nada o liga ao campo (sem aria-describedby, sem aria-invalid), e a mensagem de retorno diz que há campos com problema sem nomeá-lo. O upload inválido, na mesma tela, tem texto de erro ligado por aria-describedby. O predicado cobre a parte da associação; a ausência de texto está medida em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: atributos-ausentes sustenta em S0, S1, S2 — nenhum destes atributos presente: aria-describedby, aria-invalid. Medido: ausentes: aria-describedby, aria-invalid | ausentes: aria-describedby, aria-invalid | ausentes: aria-describedby, aria-invalid
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `V-002 (undetermined, fato não desmentido)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0be11564355e5b9b08c09f8e486d04a2a4e2b2acb9f78cd5fd1c1b3766003acc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0bfb1ca6eb466556764ced060bd6f2cc56baad17978809dfa77b1161cd98e7fb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar com "Tipo de documento" vazio, o campo recebe apenas borda vermelha (classe danger, border 2px #E52207). Não há mensagem de erro em texto para o campo, nem aria-invalid ou aria-describedby. Só o arquivo ganha a mensagem "Selecione o arquivo do documento.", e a mensagem geral pede para corrigir "os campos indicados".

Esperado: O erro do campo é identificado e descrito em texto, junto ao campo e associado a ele programaticamente.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos 2. clicar em "Enviar Documento" sem preencher nada

Regra declarada: wcag:3.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>input" — <input#tipo-documento> "Selecione o tipo do documento pendente"

### Unidades candidatas (não são crédito)

- U-bca12251136dab4326f7e6410c56662fa4e3456dce17341d7d440cef99fbf9e5 — U-09 · S2 · cena 1280x900 · <input#tipo-documento> "Selecione o tipo do documento pendente": Estrato G · variante erro-so-borda. Depois de Enviar documento com o formulário vazio, o campo 'Tipo de documento' só ganha a borda de erro (--danger, 2 px): nenhum texto identifica e descreve o erro, nada o liga ao campo (sem aria-describedby, sem aria-invalid), e a mensagem de retorno diz que há campos com problema sem nomeá-lo. O upload inválido, na mesma tela, tem texto de erro ligado por aria-describedby. O predicado cobre a parte da associação; a ausência de texto está medida em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: atributos-ausentes sustenta em S0, S1, S2 — nenhum destes atributos presente: aria-describedby, aria-invalid. Medido: ausentes: aria-describedby, aria-invalid | ausentes: aria-describedby, aria-invalid | ausentes: aria-describedby, aria-invalid
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `.campo-tipo-documento innerText = "Tipo de documento" (sem feedback); input sem aria-invalid; captura mostrando apenas a borda vermelha` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0bfb1ca6eb466556764ced060bd6f2cc56baad17978809dfa77b1161cd98e7fb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-116d302705a9367edda1635cffcf89f70be50152faa66ee3a24153252a9e6208

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: br-button aplicado a <div>

Esperado: Elemento <button>

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>div:nth-of-type(3)>div:nth-of-type(1)" — <div> "Fechar"

### Unidades candidatas (não são crédito)

- U-d65d33743a008a7f5d119878bc6ad4968ada1c800c1a8db19698898903af8e1f — U-11 · S2 · cena 1280x900 · <div> "Fechar": Estrato G · variante fechar-div. O botão Fechar da mensagem de retorno é <div class="br-button circle small" role="button" tabindex="0"> com Enter e Espaço tratados, no lugar do <button> do exemplo oficial; continua operável por teclado e nomeado — o defeito é só o elemento. O Fechar da mensagem de pendência é <button>. Mesma variante da A-06 da tela A (ver E-03).
  - estados em que a unidade existe: S2
  - predicado de aceitação: classe-no-elemento sustenta em S2 — o próprio <div> carrega a classe .br-button. Medido: <div class="br-button circle small fechar-mensagem">
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-116d302705a9367edda1635cffcf89f70be50152faa66ee3a24153252a9e6208",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-177424bb599baf2d2c0557ca177e2eb60d6565d0f10fa6e5ef77a8846f58be47

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No step (Andamento), o marcador numérico da etapa 3 "Decisão" (::before, content "3") tem visibility:hidden: não aparece círculo nem número, e a linha do conector passa direto. As demais etapas, inclusive a 4 (também desabilitada), mostram o círculo com o número (visibility:visible).

Esperado: Todas as etapas do componente Step com o mesmo marcador visível (círculo numerado), como nas etapas 1, 2 e 4.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(1)>nav>div>button:nth-of-type(3)" — <button> "Decisão" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-e02504efd11f88bedcc58b64eed4f3658f42c91c05fb6e214cd87eeaf6ba15fe — U-04 · S0 · cena 1280x900 · <button> "Decisão": Estrato DS · variante sem-indicador · sorteada (a2-52ea5c58a080). O indicador da 3ª etapa ('Decisão') — o ::before do .step-progress-btn com o número — fica visibility:hidden; rótulo e linha do tempo continuam. As etapas 1, 2 e 4 mostram o indicador (40×40, número). Sem predicado na referência (o observável é um pseudo-elemento); medido em tela-a2/auditoria/conferir-auditoria.mjs e tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `medida getComputedStyle(.etapa-decisao,"::before").visibility=hidden vs .etapa-conclusao visible` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-177424bb599baf2d2c0557ca177e2eb60d6565d0f10fa6e5ef77a8846f58be47",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1c2142006bd61a998deb05ae7b827dbec4d4a32ddc183c8c3261a013541884bf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O conteúdo da mensagem usa marcação de apresentação no HTML: <div class="content" role="alert" align="left"><font color="#333333">…</font>.

Esperado: Apresentação na camada CSS; sem elemento <font> nem atributo align (obsoletos).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(1)>div:nth-of-type(2)>font" — <font> "Documento pendente. Envie o comprovante de resid"

### Unidades candidatas (não são crédito)

- U-471a20be6fcde83c2257a723949b55ad0515e99d96e292cfe0587a3e84d6de5f — U-13 · sempre · cena 1280x900 · <div> "Documento pendente. Envie o comprovante de resid": Estrato G · variante apresentacao-no-html. A cor e o alinhamento do texto da mensagem de pendência vêm de atributos de apresentação no HTML — <div class="content" align="left"> e o texto dentro de <font color="#333333"> — com os mesmos valores que o CSS já dá. Nenhum font/align no card nem na mensagem de retorno. Uma unidade com dois participantes. Sem predicado na referência; a âncora só resolve com o defeito presente.
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
  "cardId": "C-1c2142006bd61a998deb05ae7b827dbec4d4a32ddc183c8c3261a013541884bf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-251531b1b56b762e329fee5d7b3391f636ace758cb42591b002bc289b3f173a2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset dos avisos (checkbox "Todos os avisos" e os interruptores de e-mail e SMS) não tem legend nem nome acessível. O título visível "Avisos sobre o requerimento" é um <p> fora do fieldset, sem associação ao grupo.

Esperado: O grupo nomeado pelo título visível (legend dentro do fieldset, ou aria-labelledby).

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos (aba Documentos)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset" — <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe"

### Unidades candidatas (não são crédito)

- U-c31afe8654b526d2a35407e9018b933e68eb99c05e650328414cc03978628b7c — U-14 · S1 · cena 1280x900 · <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe": Estrato G · variante grupo-sem-legend. O fieldset dos avisos (checkbox principal e os dois switches) não tem legend; 'Avisos sobre o requerimento' é um p logo antes dele, sem ligação programática. Sem predicado na referência (as espécies existentes não medem ausência de filho); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-251531b1b56b762e329fee5d7b3391f636ace758cb42591b002bc289b3f173a2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2bf14585dd75189a7075e9163ee2f11daa486bf8a64a7e2cd769abf46ad00cd5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar vazio, o campo "Tipo de documento" só recebe borda vermelha (classe danger); não há texto de erro junto a ele, aria-invalid nem aria-describedby (nome "Tipo de documento", descrição vazia). A mensagem geral diz apenas "Corrija os campos indicados", sem nomear o campo. O campo de arquivo, ao contrário, recebe "Selecione o arquivo do documento.".

Esperado: Campo em erro identificado e o erro descrito em texto, associado ao campo (ex.: "Selecione o tipo de documento."), sem depender só da cor.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Documentos" (#aba-documentos) 2. clicar em "Enviar Documento" (.acao-enviar) com o formulário vazio

Regra declarada: wcag:3.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>input" — <input#tipo-documento> "Selecione o tipo do documento pendente"

### Unidades candidatas (não são crédito)

- U-bca12251136dab4326f7e6410c56662fa4e3456dce17341d7d440cef99fbf9e5 — U-09 · S2 · cena 1280x900 · <input#tipo-documento> "Selecione o tipo do documento pendente": Estrato G · variante erro-so-borda. Depois de Enviar documento com o formulário vazio, o campo 'Tipo de documento' só ganha a borda de erro (--danger, 2 px): nenhum texto identifica e descreve o erro, nada o liga ao campo (sem aria-describedby, sem aria-invalid), e a mensagem de retorno diz que há campos com problema sem nomeá-lo. O upload inválido, na mesma tela, tem texto de erro ligado por aria-describedby. O predicado cobre a parte da associação; a ausência de texto está medida em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: atributos-ausentes sustenta em S0, S1, S2 — nenhum destes atributos presente: aria-describedby, aria-invalid. Medido: ausentes: aria-describedby, aria-invalid | ausentes: aria-describedby, aria-invalid | ausentes: aria-describedby, aria-invalid
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `V-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2bf14585dd75189a7075e9163ee2f11daa486bf8a64a7e2cd769abf46ad00cd5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2f6f1d83c9b1fed12afc7b611c8dd903419378fe55911a5cb98633f8122c59ab

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: ul[role="tablist"] tem filhos li sem role (papel listitem); as abas role="tab" ficam dentro de listitem, sem pai tablist válido ([ferramenta citada] aria-required-children, aria-required-parent, listitem).

Esperado: Os li entre tablist e tab com role="presentation"/"none" (ou as abas como filhos diretos do tablist).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(1)" — <li> "Andamento"
- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(2)" — <li> "Documentos"

### Unidades candidatas (não são crédito)

- U-d52bfa4da50d0d340109384148635b30570aa1f201639717f326962788ba5680 — U-01 · sempre · cena 1280x900 · <button#aba-andamento> "Andamento": Estrato DS · variante rotulo-aba-pequeno · sorteada (a2-10aee59f9c1b). Os rótulos das duas abas (Andamento, Documentos) computam 14 px (--font-size-scale-base, posto pela folha da tela); a tabela de Tipografia da Tab pede --font-size-scale-up-02 (20,16 px), peso medium. Só o tamanho muda. A auditoria cega não tinha a tabela no universo dela; a medida é da conferência de construção e o predicado a refaz.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-size] fora de {20.16px}. Medido: font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-003 F-014..F-018` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2f6f1d83c9b1fed12afc7b611c8dd903419378fe55911a5cb98633f8122c59ab",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-33181744301c2ae7697a1412324abec55ea5ab8e7944664668e6ac3695bd9508

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset que agrupa "Todos os avisos", "Receber avisos por e-mail" e "Receber avisos por SMS" não tem legend nem aria-label/labelledby: o group fica sem nome. O título visível "Avisos sobre o requerimento" é um <p class="titulo-avisos"> fora do fieldset, sem associação programática.

Esperado: O grupo tem nome acessível igual ao título visível (legend "Avisos sobre o requerimento" ou aria-labelledby).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Documentos" (#aba-documentos)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset" — <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe"

### Unidades candidatas (não são crédito)

- U-c31afe8654b526d2a35407e9018b933e68eb99c05e650328414cc03978628b7c — U-14 · S1 · cena 1280x900 · <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe": Estrato G · variante grupo-sem-legend. O fieldset dos avisos (checkbox principal e os dois switches) não tem legend; 'Avisos sobre o requerimento' é um p logo antes dele, sem ligação programática. Sem predicado na referência (as espécies existentes não medem ausência de filho); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `árvore de acessibilidade: group sem nome; paragraph "Avisos sobre o requerimento" separado` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-33181744301c2ae7697a1412324abec55ea5ab8e7944664668e6ac3695bd9508",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-349d79f6ec190b28426f3293a4ab6f42965505bb32300f4ce58ae2b385ac2702

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao escolher uma opção pelo teclado (foco no campo, seta para baixo, Enter), a lista fecha e o foco vai para <body>: a opção focada some e o usuário perde a posição.

Esperado: Depois da seleção, o foco volta ao campo (ou ao botão) do select.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Documentos" (#aba-documentos) 2. clicar no campo "Tipo de documento" (#tipo-documento) 3. pressionar ArrowDown 4. pressionar Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)" — <div> "Comprovante de residência" · **oculto**: nao-renderizado
- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)" — <div> "Documento de identidade" · **oculto**: nao-renderizado
- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(3)" — <div> "Procuração" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-bca12251136dab4326f7e6410c56662fa4e3456dce17341d7d440cef99fbf9e5 — U-09 · S2 · cena 1280x900 · <input#tipo-documento> "Selecione o tipo do documento pendente": Estrato G · variante erro-so-borda. Depois de Enviar documento com o formulário vazio, o campo 'Tipo de documento' só ganha a borda de erro (--danger, 2 px): nenhum texto identifica e descreve o erro, nada o liga ao campo (sem aria-describedby, sem aria-invalid), e a mensagem de retorno diz que há campos com problema sem nomeá-lo. O upload inválido, na mesma tela, tem texto de erro ligado por aria-describedby. O predicado cobre a parte da associação; a ausência de texto está medida em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: atributos-ausentes sustenta em S0, S1, S2 — nenhum destes atributos presente: aria-describedby, aria-invalid. Medido: ausentes: aria-describedby, aria-invalid | ausentes: aria-describedby, aria-invalid | ausentes: aria-describedby, aria-invalid
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-349d79f6ec190b28426f3293a4ab6f42965505bb32300f4ce58ae2b385ac2702",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3701beebdbcbff6d863b680f5892ea8255d36f1c23d1a6d4c0040ed4d7f07914

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Selecione o arquivo" é focável (tabIndex 0, recebe foco por Tab) mas tem aria-hidden="true". O input file real (#arquivo-documento) está com display:none, então o controle focado não expõe nome, papel nem o rótulo "Envio de documento" às tecnologias assistivas.

Esperado: O controle focável de envio exposto com papel e nome (sem aria-hidden), associado ao rótulo e às instruções.

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos (aba Documentos)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div>button" — <button> "Selecione o arquivo" · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-41d6f65ee0ca25c55b323cd4c12ddf75c27d151d4c39bb9e36d5cf0ef31857bc — U-02 · S1 · cena 1280x900 · <button> "Selecione o arquivo": Estrato DS · variante borda-sem-feedback · sorteada (a2-caf6bc80cb4b) · coincide com o core 3.7.0. Arrastar um arquivo válido (PDF) sobre a área do upload liga o estado Dropzone ativo da página (fundo de interação, cursor copy) mas a borda continua na cor de interação rgb(19, 81, 180); a norma pede borda verde. Sem predicado na referência (o observável pede arrasto sintético dentro de S1); medido em tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-013 (axe aria-hidden-focus)` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-005 F-027` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-007 F-044` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3701beebdbcbff6d863b680f5892ea8255d36f1c23d1a6d4c0040ed4d7f07914",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-404dadd15a5b59126573d9407384371c391123295fe8741c98faf7a7ff5301bf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A caixa do checkbox "Todos os avisos" (label::before, 24×24) tem borda 1px #CCCCCC sobre fundo branco: contraste 1,61:1.

Esperado: Contraste de pelo menos 3:1 para o limite visual que identifica o controle.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Documentos" (#aba-documentos)

Regra declarada: wcag:1.4.11

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset>div:nth-of-type(1)>div>label" — <label> "Todos os avisos"

### Unidades candidatas (não são crédito)

- U-c31afe8654b526d2a35407e9018b933e68eb99c05e650328414cc03978628b7c — U-14 · S1 · cena 1280x900 · <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe": Estrato G · variante grupo-sem-legend. O fieldset dos avisos (checkbox principal e os dois switches) não tem legend; 'Avisos sobre o requerimento' é um p logo antes dele, sem ligação programática. Sem predicado na referência (as espécies existentes não medem ausência de filho); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `getComputedStyle(label[for=avisos-todos],"::before").border = "1px solid rgb(204, 204, 204)", fundo rgb(255,255,255)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-404dadd15a5b59126573d9407384371c391123295fe8741c98faf7a7ff5301bf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4a6fb46a5159a0ea20b62fb75834c864370514fd93bf3af76d5a26abcaf3644f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os switches têm aria-checked="false" fixo. Depois de ligar o e-mail (checked=true) e depois "Todos os avisos" (os dois checked=true), aria-checked continuou "false" nos dois, contradizendo o estado nativo.

Esperado: O estado exposto é coerente com o estado do controle: aria-checked atualizado a cada mudança, ou removido para valer o checked nativo.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos 2. clicar no rótulo "Receber avisos por e-mail" 3. clicar no rótulo "Todos os avisos"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset>div:nth-of-type(2)>div>input" — <input#aviso-email>
- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset>div:nth-of-type(3)>div>input" — <input#aviso-sms>

### Unidades candidatas (não são crédito)

- U-9de9f00a68a00e1bad77ffb10bc1b13c56081187154b5b10b3476d3c4acd342f — U-07 · S1 · cena 1280x900 · <input#aviso-email>: Estrato DS · variante aria-checked-fixo · COMPARTILHADA pelos dois switches (e-mail, SMS) · coincide com o core 3.7.0 (o pacote não mantém aria-checked; os exemplos oficiais do Switch não trazem o atributo). A marcação traz aria-checked="false" e nada o atualiza: ligado o switch (Space, clique no rótulo ou checkbox principal), checked=true e aria-checked continua "false". Sem predicado na referência (o observável pede ligar o switch); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c31afe8654b526d2a35407e9018b933e68eb99c05e650328414cc03978628b7c — U-14 · S1 · cena 1280x900 · <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe": Estrato G · variante grupo-sem-legend. O fieldset dos avisos (checkbox principal e os dois switches) não tem legend; 'Avisos sobre o requerimento' é um p logo antes dele, sem ligação programática. Sem predicado na referência (as espécies existentes não medem ausência de filho); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c4846fcc9168ca2f4331dddfea6afa1149c689b85ffa4a0106df366444712957 — U-07 · S1 · cena 1280x900 · <input#aviso-sms>: Estrato DS · variante aria-checked-fixo · COMPARTILHADA pelos dois switches (e-mail, SMS) · coincide com o core 3.7.0 (o pacote não mantém aria-checked; os exemplos oficiais do Switch não trazem o atributo). A marcação traz aria-checked="false" e nada o atualiza: ligado o switch (Space, clique no rótulo ou checkbox principal), checked=true e aria-checked continua "false". Sem predicado na referência (o observável pede ligar o switch); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `#aviso-email: checked=true, aria-checked="false"; #aviso-sms: checked=true, aria-checked="false"` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4a6fb46a5159a0ea20b62fb75834c864370514fd93bf3af76d5a26abcaf3644f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4d0ad9023c1344c86e7c579db3ec1741045177d31a51c05ccb14b26dcb062054

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao abrir um item do acordeão (por clique ou Enter), o conteúdo passa a display:block, o item recebe o atributo active e o ícone vira angle-up, mas o botão continua com aria-expanded="false". Isso ocorreu nos três itens.

Esperado: aria-expanded="true" no cabeçalho do item aberto e "false" nos fechados.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em "Como envio o documento pendente?" 2. focar "Quanto tempo leva a análise?" e pressionar Enter

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>section>div>div:nth-of-type(1)>button" — <button> "Como envio o documento pendente?"
- "body>main>div>section>div>div:nth-of-type(3)>button" — <button> "Quanto tempo leva a análise?"
- "body>main>div>section>div>div:nth-of-type(5)>button" — <button> "Como recebo os avisos do requerimento?"

### Unidades candidatas (não são crédito)

- U-cf513c2ed433a13137fcd66c5b1e96e63521b41d27f28bea0e7832c59d94b16b — U-08 · S0 · cena 1280x900 · <button> "Como envio o documento pendente?": Estrato G · variante item-expandido-sem-estado · coincide com o core 3.7.0 (o BRAccordion só alterna [active] e o ícone; os exemplos oficiais não trazem aria-expanded). Os três cabeçalhos do accordion trazem aria-expanded="false" na marcação e nada o atualiza: aberto o item (clique, Enter ou Espaço), o painel aparece e aria-expanded continua "false". As abas, ao contrário, atualizam aria-selected. Uma unidade (um único conserto repara os três). Sem predicado na referência; medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `estado medido: [{exp:false,active:false,disp:none},{exp:false,active:true,disp:block},{exp:false,active:false,disp:none}]` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4d0ad9023c1344c86e7c579db3ec1741045177d31a51c05ccb14b26dcb062054",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4d1c38aecf7b33026e1018e7f81bde1a870ab3fea5116ec1532f4014a3536192

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Selecione o arquivo" tem aria-hidden="true", mas é focável e é o único controle de upload alcançável (o input file está display:none): leitor de tela não recebe nome nem papel ao focá-lo ([ferramenta citada] aria-hidden-focus).

Esperado: Controle focável exposto à tecnologia assistiva, com nome (ex.: "Envio de documento"), sem aria-hidden.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Documentos" (#aba-documentos)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div>button" — <button> "Selecione o arquivo" · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-41d6f65ee0ca25c55b323cd4c12ddf75c27d151d4c39bb9e36d5cf0ef31857bc — U-02 · S1 · cena 1280x900 · <button> "Selecione o arquivo": Estrato DS · variante borda-sem-feedback · sorteada (a2-caf6bc80cb4b) · coincide com o core 3.7.0. Arrastar um arquivo válido (PDF) sobre a área do upload liga o estado Dropzone ativo da página (fundo de interação, cursor copy) mas a borda continua na cor de interação rgb(19, 81, 180); a norma pede borda verde. Sem predicado na referência (o observável pede arrasto sintético dentro de S1); medido em tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-013` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-021` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4d1c38aecf7b33026e1018e7f81bde1a870ab3fea5116ec1532f4014a3536192",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-520a76894ea90b3191a93e9cc33dae1347e688c8b7b3583c6a20c5d7079e4e54

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: <li> elements must be contained in a <ul> or <ol>

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:listitem

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(1)" — <li> "Andamento"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-520a76894ea90b3191a93e9cc33dae1347e688c8b7b3583c6a20c5d7079e4e54",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-53d9c303bb03cc8382826c2de4a2d95c0caf182bcbc19e1efb2f0007be890a3e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões exibem o texto visível "Ajuda sobre o NUP" e "Ajuda sobre o prazo" (span.rotulo-botao, visível), mas aria-labelledby aponta para o tooltip e sobrepõe o aria-label: os nomes acessíveis calculados são "Use o NUP para consultar" e "Prazo em dias corridos", que não contêm o rótulo visível.

Esperado: O nome acessível de cada botão contém o texto do rótulo visível (por exemplo, nome "Ajuda sobre o NUP", com o texto do tooltip associado como descrição).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(1)>button" — <button#tip-protocolo-gatilho> "Ajuda sobre o NUP"
- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(4)>button" — <button#tip-prazo-gatilho> "Ajuda sobre o prazo"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `árvore de acessibilidade: button "Use o NUP para consultar" com filho de texto "Ajuda sobre o NUP"; button "Prazo em dias corridos" com filho "Ajuda sobre o prazo"` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-53d9c303bb03cc8382826c2de4a2d95c0caf182bcbc19e1efb2f0007be890a3e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-56ca40d509c43c4df4cc50e77e9fde5a5c54ef4e9515b84ab4ded9a12c4f4c2c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <meta http-equiv="refresh" content="300">: a página recarrega sozinha a cada 300 s sem aviso nem controle. Durante a avaliação o recarregamento ocorreu e desfez o estado (aba Documentos voltou para Andamento, mensagem fechada reapareceu, formulário limpo).

Esperado: Sem atualização automática temporizada, ou com meio de desligar/ajustar/estender o limite de tempo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.2.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "head>meta:nth-of-type(3)" — <meta> · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-03bd1dc9d2fbeab7ae978c8648dcb43b852aa1d342169243f85f89febf0e92ec — U-10 · sempre · cena 1280x900 · <meta>: Estrato G · variante recarga-periodica. O head tem <meta http-equiv="refresh" content="300">, sem url e sem aviso: a página se recarrega sozinha a cada 300 s (observado aos 300,1 s numa janela de 360 s em contexto próprio, plano § 14.5). A recarga devolve a página ao estado inicial (aba Andamento, select vazio, switch desligado). A âncora é o próprio meta; a existência dele é o defeito. Sem predicado na referência; medido em tela-a2/auditoria/observar-360.mjs e tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-006 (axe meta-refresh)` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-003 F-019` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-56ca40d509c43c4df4cc50e77e9fde5a5c54ef4e9515b84ab4ded9a12c4f4c2c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6c99758a0b449f45b294e763286b7ce3665bae0b5aeb9782a203e09feed93aa0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao clicar em "Como envio o documento pendente?", o conteúdo #acc-duvidas-1 passa a display:block e o ícone muda para angle-up, mas aria-expanded continua "false".

Esperado: aria-expanded="true" no cabeçalho enquanto o painel estiver aberto e "false" quando fechado.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em "Como envio o documento pendente?" (button[aria-controls="acc-duvidas-1"])

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>section>div>div:nth-of-type(1)>button" — <button> "Como envio o documento pendente?"
- "body>main>div>section>div>div:nth-of-type(3)>button" — <button> "Quanto tempo leva a análise?"
- "body>main>div>section>div>div:nth-of-type(5)>button" — <button> "Como recebo os avisos do requerimento?"

### Unidades candidatas (não são crédito)

- U-cf513c2ed433a13137fcd66c5b1e96e63521b41d27f28bea0e7832c59d94b16b — U-08 · S0 · cena 1280x900 · <button> "Como envio o documento pendente?": Estrato G · variante item-expandido-sem-estado · coincide com o core 3.7.0 (o BRAccordion só alterna [active] e o ícone; os exemplos oficiais não trazem aria-expanded). Os três cabeçalhos do accordion trazem aria-expanded="false" na marcação e nada o atualiza: aberto o item (clique, Enter ou Espaço), o painel aparece e aria-expanded continua "false". As abas, ao contrário, atualizam aria-selected. Uma unidade (um único conserto repara os três). Sem predicado na referência; medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6c99758a0b449f45b294e763286b7ce3665bae0b5aeb9782a203e09feed93aa0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6cf779a396ef51170f21f77c1051c0108967a608b586d802751ab317ff7a13b7

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Certain ARIA roles must contain particular children

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:aria-required-children

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>nav>ul" — <ul> "Andamento Documentos"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6cf779a396ef51170f21f77c1051c0108967a608b586d802751ab317ff7a13b7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6f5e63e058e0cfa5dd7337966215dea1591d0baf9ba1eb7882516f65d5e7087b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na lista aberta de "Tipo de documento", cada role="option" contém um input radio focável (descendente interativo dentro de option).

Esperado: As opções da listbox sem controles interativos aninhados (o estado selecionado exposto por aria-selected na própria option).

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos 2. click #sel-tipo-documento button[data-trigger]

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)" — <div> "Comprovante de residência" · **oculto**: nao-renderizado
- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)" — <div> "Documento de identidade" · **oculto**: nao-renderizado
- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(3)" — <div> "Procuração" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-034` → identificador devolvido por ferramenta (sem arquivo)
- `F-035` → identificador devolvido por ferramenta (sem arquivo)
- `F-036 (axe nested-interactive)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6f5e63e058e0cfa5dd7337966215dea1591d0baf9ba1eb7882516f65d5e7087b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6f74ecc51c17c45ae3a8597a51bf11e4ea439e614a779c0bada5ce891db41642

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os dois h2 da tela têm estilos diferentes: "Enviar Documento Pendente" (.titulo-formulario) tem 34,832px e peso 400 (estilo de h2 do padrão), e "Dúvidas Frequentes" tem 16px e peso 700. Fica menor que o título do card (20,16px) e próximo do título da tabela (16,8px).

Esperado: Títulos do mesmo nível com a mesma apresentação tipográfica do Design System (h2 em 34,832px/400), mantendo a hierarquia visual.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Documentos" (#aba-documentos)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div>section>h2" — <h2#titulo-duvidas> "Dúvidas Frequentes"

### Unidades candidatas (não são crédito)

- U-aba5c1553aa2b8ca9531786c9f8f2f95d5797866428a77aff73210be2d4d2e07 — U-03 · sempre · cena 1280x900 · <h2#titulo-duvidas> "Dúvidas Frequentes": Estrato DS · variante titulo-fora-da-tabela · sorteada (a2-329f74d7646c). O h2 'Dúvidas Frequentes' computa 16px / 700 — valor fora da tabela de estilos tipográficos (e fora da escala Minor Third); o outro h2 da página ('Enviar Documento Pendente') segue a tabela (34,832 px, regular).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-size] em {16px}. Medido: font-size=16px | font-size=16px | font-size=16px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `getComputedStyle: h2.titulo-formulario 34.832px/400; h2#titulo-duvidas 16px/700` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6f74ecc51c17c45ae3a8597a51bf11e4ea439e614a779c0bada5ce891db41642",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7935b6ea508a71353c8dc8cdcee06ddd1147a998320d518cbc34e9c2306cfb4c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <meta http-equiv="refresh" content="300">: a página recarrega sozinha a cada 300 s, sem aviso nem controle; durante a avaliação o recarregamento desfez a aba aberta e o formulário preenchido.

Esperado: Sem atualização automática periódica, ou com mecanismo para o usuário desligar, ajustar ou estender o tempo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.2.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "head>meta:nth-of-type(3)" — <meta> · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-03bd1dc9d2fbeab7ae978c8648dcb43b852aa1d342169243f85f89febf0e92ec — U-10 · sempre · cena 1280x900 · <meta>: Estrato G · variante recarga-periodica. O head tem <meta http-equiv="refresh" content="300">, sem url e sem aviso: a página se recarrega sozinha a cada 300 s (observado aos 300,1 s numa janela de 360 s em contexto próprio, plano § 14.5). A recarga devolve a página ao estado inicial (aba Andamento, select vazio, switch desligado). A âncora é o próprio meta; a existência dele é o defeito. Sem predicado na referência; medido em tela-a2/auditoria/observar-360.mjs e tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-92a521650ed3` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7935b6ea508a71353c8dc8cdcee06ddd1147a998320d518cbc34e9c2306cfb4c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7938a716196de9f51241df461120f2649dde4a18e1cb3f7c614d4e01b5ae45ef

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O input type=file #arquivo-documento tem display:none, e o único controle operável é button.upload-button, que tem aria-hidden="true" e recebe foco pelo Tab (tabIndex 0, foco confirmado). Para a tecnologia assistiva, o foco cai num elemento oculto, sem papel nem nome; o rótulo "Envio de documento" fica associado ao input oculto.

Esperado: O controle focável de envio de arquivo é exposto à tecnologia assistiva com papel e nome (sem aria-hidden em elemento focável, ou input file focável e rotulado).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Documentos" (#aba-documentos)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div>button" — <button> "Selecione o arquivo" · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-41d6f65ee0ca25c55b323cd4c12ddf75c27d151d4c39bb9e36d5cf0ef31857bc — U-02 · S1 · cena 1280x900 · <button> "Selecione o arquivo": Estrato DS · variante borda-sem-feedback · sorteada (a2-caf6bc80cb4b) · coincide com o core 3.7.0. Arrastar um arquivo válido (PDF) sobre a área do upload liga o estado Dropzone ativo da página (fundo de interação, cursor copy) mas a borda continua na cor de interação rgb(19, 81, 180); a norma pede borda verde. Sem predicado na referência (o observável pede arrasto sintético dentro de S1); medido em tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `document.activeElement após Tab = <button class="upload-button" aria-hidden="true">` → identificador devolvido por ferramenta (sem arquivo)
- `snapshot: button [ref] sem nome` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7938a716196de9f51241df461120f2649dde4a18e1cb3f7c614d4e01b5ae45ef",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7b694cd609b8afe85e457ed83119253ec56a1ba322040ee953382e7dfcd26f2c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de ligar o switch (checked=true), aria-checked continua "false".

Esperado: aria-checked="true" quando ativado e "false" quando desativado, acompanhando o estado.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Documentos" (#aba-documentos) 2. clicar no rótulo "Receber avisos por e-mail" (label[for="aviso-email"]) / "Receber avisos por SMS" (label[for="aviso-sms"])

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset>div:nth-of-type(2)>div>input" — <input#aviso-email>
- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset>div:nth-of-type(3)>div>input" — <input#aviso-sms>

### Unidades candidatas (não são crédito)

- U-9de9f00a68a00e1bad77ffb10bc1b13c56081187154b5b10b3476d3c4acd342f — U-07 · S1 · cena 1280x900 · <input#aviso-email>: Estrato DS · variante aria-checked-fixo · COMPARTILHADA pelos dois switches (e-mail, SMS) · coincide com o core 3.7.0 (o pacote não mantém aria-checked; os exemplos oficiais do Switch não trazem o atributo). A marcação traz aria-checked="false" e nada o atualiza: ligado o switch (Space, clique no rótulo ou checkbox principal), checked=true e aria-checked continua "false". Sem predicado na referência (o observável pede ligar o switch); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c31afe8654b526d2a35407e9018b933e68eb99c05e650328414cc03978628b7c — U-14 · S1 · cena 1280x900 · <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe": Estrato G · variante grupo-sem-legend. O fieldset dos avisos (checkbox principal e os dois switches) não tem legend; 'Avisos sobre o requerimento' é um p logo antes dele, sem ligação programática. Sem predicado na referência (as espécies existentes não medem ausência de filho); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c4846fcc9168ca2f4331dddfea6afa1149c689b85ffa4a0106df366444712957 — U-07 · S1 · cena 1280x900 · <input#aviso-sms>: Estrato DS · variante aria-checked-fixo · COMPARTILHADA pelos dois switches (e-mail, SMS) · coincide com o core 3.7.0 (o pacote não mantém aria-checked; os exemplos oficiais do Switch não trazem o atributo). A marcação traz aria-checked="false" e nada o atualiza: ligado o switch (Space, clique no rótulo ou checkbox principal), checked=true e aria-checked continua "false". Sem predicado na referência (o observável pede ligar o switch); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `V-001` → identificador devolvido por ferramenta (sem arquivo)
- `V-002` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7b694cd609b8afe85e457ed83119253ec56a1ba322040ee953382e7dfcd26f2c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7d88c2a7c419dc4ba965db64a99060a9c26ead2917f731f431489d9fa7bd3e83

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Certain ARIA roles must be contained by particular parents

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:aria-required-parent

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(2)>button" — <button#aba-documentos> "Documentos"

### Unidades candidatas (não são crédito)

- U-d52bfa4da50d0d340109384148635b30570aa1f201639717f326962788ba5680 — U-01 · sempre · cena 1280x900 · <button#aba-andamento> "Andamento": Estrato DS · variante rotulo-aba-pequeno · sorteada (a2-10aee59f9c1b). Os rótulos das duas abas (Andamento, Documentos) computam 14 px (--font-size-scale-base, posto pela folha da tela); a tabela de Tipografia da Tab pede --font-size-scale-up-02 (20,16 px), peso medium. Só o tamanho muda. A auditoria cega não tinha a tabela no universo dela; a medida é da conferência de construção e o predicado a refaz.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-size] fora de {20.16px}. Medido: font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7d88c2a7c419dc4ba965db64a99060a9c26ead2917f731f431489d9fa7bd3e83",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7e49f61079976e31fccb7a4491e6beaf6dbea6f3049ba99d3105d0aa898a8226

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Antes do envio, o campo informa só "Envio de documento" e "Você também pode arrastar o arquivo até a área acima." (sem atributo accept). A restrição "O arquivo deve estar em PDF, JPG ou PNG e ter até 5 MB." só aparece como erro depois de enviar um arquivo fora do padrão (programa.exe).

Esperado: Formatos aceitos e tamanho máximo informados nas instruções do campo antes da entrada.

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos 2. upload programa.exe em #arquivo-documento 3. click .acao-enviar

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div>input" — <input#arquivo-documento> · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-430153a3769408741540a8b7a86dafd2cd6db78b07a5484a8d6d48279267c7b5 — U-12 · S1 · cena 1280x900 · <p#arquivo-apoio> "Você também pode arrastar o arquivo até a área a": Estrato G · variante sem-formato. O campo de envio só aceita PDF, JPG ou PNG, com no máximo 5 MB (o envio de um .txt é recusado com essa restrição), mas a instrução junto do campo (texto de apoio ligado por aria-describedby) só diz que se pode arrastar o arquivo: formatos e tamanho máximo não são informados antes do envio. Sem predicado na referência (o observável é o conteúdo do texto); medido em tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `V-003 (P-02)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7e49f61079976e31fccb7a4491e6beaf6dbea6f3049ba99d3105d0aa898a8226",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-89c152304a4fb08722a7089bbef0ff607050f1744a7e2fa9f4e97a8acfb1ad50

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O conteúdo da mensagem de pendência usa marcação de apresentação obsoleta: <font color="#333333"> envolvendo o texto e align="left" no div.content.

Esperado: Apresentação feita por CSS, sem elementos ou atributos obsoletos do HTML (separação conteúdo/apresentação, padrões W3C).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(1)>div:nth-of-type(2)>font" — <font> "Documento pendente. Envie o comprovante de resid"

### Unidades candidatas (não são crédito)

- U-471a20be6fcde83c2257a723949b55ad0515e99d96e292cfe0587a3e84d6de5f — U-13 · sempre · cena 1280x900 · <div> "Documento pendente. Envie o comprovante de resid": Estrato G · variante apresentacao-no-html. A cor e o alinhamento do texto da mensagem de pendência vêm de atributos de apresentação no HTML — <div class="content" align="left"> e o texto dentro de <font color="#333333"> — com os mesmos valores que o CSS já dá. Nenhum font/align no card nem na mensagem de retorno. Uma unidade com dois participantes. Sem predicado na referência; a âncora só resolve com o defeito presente.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001 (DOM)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-89c152304a4fb08722a7089bbef0ff607050f1744a7e2fa9f4e97a8acfb1ad50",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8b33822a4202f85c66ebc5f3a24bdd9e0a5290fb496b3d38b7e467b388b87e32

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O ul com role="tablist" contém li sem role="presentation"/"none"; na árvore de acessibilidade cada tab fica dentro de um listitem (tablist > listitem > tab), e a tablist não possui as tabs como filhas diretas.

Esperado: Os elementos tab são filhos de acessibilidade diretos da tablist (li com role="presentation" ou sem lista intermediária).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(1)" — <li> "Andamento"
- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(2)" — <li> "Documentos"

### Unidades candidatas (não são crédito)

- U-d52bfa4da50d0d340109384148635b30570aa1f201639717f326962788ba5680 — U-01 · sempre · cena 1280x900 · <button#aba-andamento> "Andamento": Estrato DS · variante rotulo-aba-pequeno · sorteada (a2-10aee59f9c1b). Os rótulos das duas abas (Andamento, Documentos) computam 14 px (--font-size-scale-base, posto pela folha da tela); a tabela de Tipografia da Tab pede --font-size-scale-up-02 (20,16 px), peso medium. Só o tamanho muda. A auditoria cega não tinha a tabela no universo dela; a medida é da conferência de construção e o predicado a refaz.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-size] fora de {20.16px}. Medido: font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `árvore de acessibilidade: tablist > listitem > tab "Andamento" / tab "Documentos"` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8b33822a4202f85c66ebc5f3a24bdd9e0a5290fb496b3d38b7e467b388b87e32",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8c61957070a2c1545a8cd4378929278ab77e687c4513bb3c83a50db10e555911

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Rótulo das abas com font-size 14px (a página declara var(--font-size-scale-base)).

Esperado: Especificação do Tab ([regra citada]): rótulo com --font-size-scale-up-02 (20.16px).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(1)>button" — <button#aba-andamento> "Andamento"
- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(2)>button" — <button#aba-documentos> "Documentos"

### Unidades candidatas (não são crédito)

- U-d52bfa4da50d0d340109384148635b30570aa1f201639717f326962788ba5680 — U-01 · sempre · cena 1280x900 · <button#aba-andamento> "Andamento": Estrato DS · variante rotulo-aba-pequeno · sorteada (a2-10aee59f9c1b). Os rótulos das duas abas (Andamento, Documentos) computam 14 px (--font-size-scale-base, posto pela folha da tela); a tabela de Tipografia da Tab pede --font-size-scale-up-02 (20,16 px), peso medium. Só o tamanho muda. A auditoria cega não tinha a tabela no universo dela; a medida é da conferência de construção e o predicado a refaz.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-size] fora de {20.16px}. Medido: font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `V-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8c61957070a2c1545a8cd4378929278ab77e687c4513bb3c83a50db10e555911",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8c871eedf39ca8416b978ca666b135dca4fc8ae0344ff52acf3e858b75bc0087

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Certain ARIA roles must be contained by particular parents

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:aria-required-parent

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(1)>button" — <button#aba-andamento> "Andamento"

### Unidades candidatas (não são crédito)

- U-d52bfa4da50d0d340109384148635b30570aa1f201639717f326962788ba5680 — U-01 · sempre · cena 1280x900 · <button#aba-andamento> "Andamento": Estrato DS · variante rotulo-aba-pequeno · sorteada (a2-10aee59f9c1b). Os rótulos das duas abas (Andamento, Documentos) computam 14 px (--font-size-scale-base, posto pela folha da tela); a tabela de Tipografia da Tab pede --font-size-scale-up-02 (20,16 px), peso medium. Só o tamanho muda. A auditoria cega não tinha a tabela no universo dela; a medida é da conferência de construção e o predicado a refaz.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-size] fora de {20.16px}. Medido: font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8c871eedf39ca8416b978ca666b135dca4fc8ae0344ff52acf3e858b75bc0087",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-931bd3711c820e367976d40e3ba8e2144d77fb34d0205be3d6a9b2acbda3a701

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões mostram o rótulo visível "Ajuda sobre o NUP" e "Ajuda sobre o prazo", mas aria-labelledby aponta para o tooltip e sobrepõe o aria-label: o nome acessível é "Use o NUP para consultar" e "Prazo em dias corridos", que não contêm o texto visível.

Esperado: O nome acessível deve conter o rótulo visível (ex.: nome "Ajuda sobre o NUP", com o tooltip como descrição via aria-describedby).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(1)>button" — <button#tip-protocolo-gatilho> "Ajuda sobre o NUP"
- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(4)>button" — <button#tip-prazo-gatilho> "Ajuda sobre o prazo"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-931bd3711c820e367976d40e3ba8e2144d77fb34d0205be3d6a9b2acbda3a701",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9998b88edde1a24281105e47220f0164e1e8108e99fcce1aa3415751ff69d735

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao abrir um item do acordeão Dúvidas Frequentes, o painel controlado fica visível (display:block) e o ícone muda para angle-up, mas o botão mantém aria-expanded="false". Conferido nos itens 1 e 2.

Esperado: aria-expanded="true" no cabeçalho enquanto o painel está aberto, e "false" quando fechado.

Janela: 1280×900 · interações desde o carregamento: 1. click button[aria-controls="acc-duvidas-1"]

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>section>div>div:nth-of-type(1)>button" — <button> "Como envio o documento pendente?"
- "body>main>div>section>div>div:nth-of-type(3)>button" — <button> "Quanto tempo leva a análise?"
- "body>main>div>section>div>div:nth-of-type(5)>button" — <button> "Como recebo os avisos do requerimento?"

### Unidades candidatas (não são crédito)

- U-cf513c2ed433a13137fcd66c5b1e96e63521b41d27f28bea0e7832c59d94b16b — U-08 · S0 · cena 1280x900 · <button> "Como envio o documento pendente?": Estrato G · variante item-expandido-sem-estado · coincide com o core 3.7.0 (o BRAccordion só alterna [active] e o ícone; os exemplos oficiais não trazem aria-expanded). Os três cabeçalhos do accordion trazem aria-expanded="false" na marcação e nada o atualiza: aberto o item (clique, Enter ou Espaço), o painel aparece e aria-expanded continua "false". As abas, ao contrário, atualizam aria-selected. Uma unidade (um único conserto repara os três). Sem predicado na referência; medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `V-001 (no-predicate; fato medido)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9998b88edde1a24281105e47220f0164e1e8108e99fcce1aa3415751ff69d735",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a4625facbb5814928c0dca05bb35ccb6d7f110ef24aed631c91fe6506d33324f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset dos avisos não tem legend; o título visível "Avisos sobre o requerimento" é um <p> fora do fieldset, e o grupo fica sem nome.

Esperado: fieldset com <legend>Avisos sobre o requerimento</legend> (ou o grupo rotulado programaticamente pelo título).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Documentos" (#aba-documentos)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset" — <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe"

### Unidades candidatas (não são crédito)

- U-c31afe8654b526d2a35407e9018b933e68eb99c05e650328414cc03978628b7c — U-14 · S1 · cena 1280x900 · <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe": Estrato G · variante grupo-sem-legend. O fieldset dos avisos (checkbox principal e os dois switches) não tem legend; 'Avisos sobre o requerimento' é um p logo antes dele, sem ligação programática. Sem predicado na referência (as espécies existentes não medem ausência de filho); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a4625facbb5814928c0dca05bb35ccb6d7f110ef24aed631c91fe6506d33324f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a6a51b229a8883f5433d8a8b739d341696acbcbe2089a087b2bdb7bb30055a7c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na etapa 3 "Decisão" o ::before que desenha o círculo numerado (content "3") tem visibility:hidden; as etapas 1, 2 e 4 mostram o círculo com o número (visibility:visible). Visualmente a etapa 3 aparece só com o texto, sem marcador nem número, e o nome acessível é "Decisão", enquanto as outras etapas são "1 Envio…", "2 Análise" e "4 Conclusão".

Esperado: Todas as instâncias da etapa no step exibem o marcador numerado de forma consistente (círculo com "3" na etapa Decisão).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(1)>nav>div>button:nth-of-type(3)" — <button> "Decisão" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-e02504efd11f88bedcc58b64eed4f3658f42c91c05fb6e214cd87eeaf6ba15fe — U-04 · S0 · cena 1280x900 · <button> "Decisão": Estrato DS · variante sem-indicador · sorteada (a2-52ea5c58a080). O indicador da 3ª etapa ('Decisão') — o ::before do .step-progress-btn com o número — fica visibility:hidden; rótulo e linha do tempo continuam. As etapas 1, 2 e 4 mostram o indicador (40×40, número). Sem predicado na referência (o observável é um pseudo-elemento); medido em tela-a2/auditoria/conferir-auditoria.mjs e tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `getComputedStyle(.etapa-decisao,"::before").visibility = "hidden"; outras etapas = "visible"` → identificador devolvido por ferramenta (sem arquivo)
- `captura de tela inicial: falta o círculo 3 entre 2 e 4` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a6a51b229a8883f5433d8a8b739d341696acbcbe2089a087b2bdb7bb30055a7c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a6faaba845157a01257399dc09d9a95b5a863d1c524d6ca522df1f3666220179

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na etapa 3 (Decisão) o indicador (::before com o número "3") tem visibility:hidden: a etapa aparece só com o rótulo, sem círculo nem número, enquanto as etapas 1, 2 e 4 mostram o indicador; o nome acessível da opção também fica sem o "3".

Esperado: Indicador presente e visível em todas as etapas do Step (parte obrigatória da anatomia).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(1)>nav>div>button:nth-of-type(3)" — <button> "Decisão" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-e02504efd11f88bedcc58b64eed4f3658f42c91c05fb6e214cd87eeaf6ba15fe — U-04 · S0 · cena 1280x900 · <button> "Decisão": Estrato DS · variante sem-indicador · sorteada (a2-52ea5c58a080). O indicador da 3ª etapa ('Decisão') — o ::before do .step-progress-btn com o número — fica visibility:hidden; rótulo e linha do tempo continuam. As etapas 1, 2 e 4 mostram o indicador (40×40, número). Sem predicado na referência (o observável é um pseudo-elemento); medido em tela-a2/auditoria/conferir-auditoria.mjs e tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `V-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a6faaba845157a01257399dc09d9a95b5a863d1c524d6ca522df1f3666220179",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ae032c346ab4500bd82cf8dddeea84660454c8cc4de63bf2bdc8b86ca9651654

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: h2 "Dúvidas Frequentes" com font-size 16px declarado pela página (fora da escala; passo mais próximo 16.8px); o outro h2 da tela ("Enviar Documento Pendente") usa ~29px.

Esperado: Tamanho de fonte da escala tipográfica do DS (Minor Third), coerente com o nível de título.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>section>h2" — <h2#titulo-duvidas> "Dúvidas Frequentes"

### Unidades candidatas (não são crédito)

- U-aba5c1553aa2b8ca9531786c9f8f2f95d5797866428a77aff73210be2d4d2e07 — U-03 · sempre · cena 1280x900 · <h2#titulo-duvidas> "Dúvidas Frequentes": Estrato DS · variante titulo-fora-da-tabela · sorteada (a2-329f74d7646c). O h2 'Dúvidas Frequentes' computa 16px / 700 — valor fora da tabela de estilos tipográficos (e fora da escala Minor Third); o outro h2 da página ('Enviar Documento Pendente') segue a tabela (34,832 px, regular).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-size] em {16px}. Medido: font-size=16px | font-size=16px | font-size=16px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `O-01` → identificador devolvido por ferramenta (sem arquivo)
- `V-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ae032c346ab4500bd82cf8dddeea84660454c8cc4de63bf2bdc8b86ca9651654",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b1546617b5c5129c0eeef8e393f5e83124693c30a445d0eeeccac239057d73fd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: ul com role="tablist" tem filhos li sem role ([ferramenta citada] aria-required-children); os botões role="tab" ficam sem pai tablist na árvore (aria-required-parent) e os li ficam sem lista (listitem).

Esperado: Os itens entre tablist e tab devem ter role="presentation"/"none" (ou o tablist deve ser o pai direto das abas) para que as abas sejam expostas dentro do tablist.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>nav>ul" — <ul> "Andamento Documentos"

### Unidades candidatas (não são crédito)

- U-d52bfa4da50d0d340109384148635b30570aa1f201639717f326962788ba5680 — U-01 · sempre · cena 1280x900 · <button#aba-andamento> "Andamento": Estrato DS · variante rotulo-aba-pequeno · sorteada (a2-10aee59f9c1b). Os rótulos das duas abas (Andamento, Documentos) computam 14 px (--font-size-scale-base, posto pela folha da tela); a tabela de Tipografia da Tab pede --font-size-scale-up-02 (20,16 px), peso medium. Só o tamanho muda. A auditoria cega não tinha a tabela no universo dela; a medida é da conferência de construção e o predicado a refaz.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-size] fora de {20.16px}. Medido: font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b1546617b5c5129c0eeef8e393f5e83124693c30a445d0eeeccac239057d73fd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c72871f5fa5d0863878ccbcea7189f11d31effb40a1697a7bd4c73329c6533a7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Nos switches desligados, a trilha (label::before 52×30) tem fundo branco e borda 1px #CCCCCC, e o indicador (label::after) tem fundo #CCCCCC: contraste de 1,61:1 com o fundo branco.

Esperado: Contraste de pelo menos 3:1 para a trilha e o indicador que mostram o controle e seu estado.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Documentos" (#aba-documentos)

Regra declarada: wcag:1.4.11

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset>div:nth-of-type(2)>div>label" — <label> "Receber avisos por e-mail"
- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset>div:nth-of-type(3)>div>label" — <label> "Receber avisos por SMS (mensagem de texto no cel"

### Unidades candidatas (não são crédito)

- U-c31afe8654b526d2a35407e9018b933e68eb99c05e650328414cc03978628b7c — U-14 · S1 · cena 1280x900 · <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe": Estrato G · variante grupo-sem-legend. O fieldset dos avisos (checkbox principal e os dois switches) não tem legend; 'Avisos sobre o requerimento' é um p logo antes dele, sem ligação programática. Sem predicado na referência (as espécies existentes não medem ausência de filho); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `::before border rgb(204,204,204), bg rgb(255,255,255); ::after bg rgb(204,204,204)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c72871f5fa5d0863878ccbcea7189f11d31effb40a1697a7bd4c73329c6533a7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dd9780eb0d160711265e9ea39c86c938d1f64fbd819d5a512c365f6fde6aa920

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões de ajuda mostram o texto visível "Ajuda sobre o NUP" e "Ajuda sobre o prazo" (span.rotulo-botao visível), mas aria-labelledby aponta para o tooltip e o nome acessível vira "Use o NUP para consultar" e "Prazo em dias corridos". O aria-label com o texto visível é ignorado.

Esperado: O nome acessível contém o texto visível do rótulo (por exemplo "Ajuda sobre o NUP"); o tooltip pode entrar como descrição (aria-describedby).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(1)>button" — <button#tip-protocolo-gatilho> "Ajuda sobre o NUP"
- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(4)>button" — <button#tip-prazo-gatilho> "Ajuda sobre o prazo"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `V-006 (no-predicate; fato medido na árvore de acessibilidade)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dd9780eb0d160711265e9ea39c86c938d1f64fbd819d5a512c365f6fde6aa920",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dffe12686c10707a2a34dde17cd7920693f807fef7c6517d741424783a08cfe0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O <head> contém <meta http-equiv="refresh" content="300">. Cerca de 5 min após o carregamento (18:27:08Z → 18:32:07Z) a página recarregou sozinha (performance navigation type "reload"), voltando para a aba Andamento, desfazendo a seleção da aba Documentos, o tipo de documento escolhido e as preferências de avisos, e levando o foco ao início da página.

Esperado: Nenhuma atualização automática periódica; ou o usuário pode desligar, ajustar ou estender o limite de tempo antes que ele ocorra.

Janela: 1280×900 · interações desde o carregamento: 1. carregar a página 2. clicar na aba Documentos 3. preencher Tipo de documento e marcar avisos 4. aguardar ~300 s sem navegar

Regra declarada: wcag:2.2.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "head>meta:nth-of-type(3)" — <meta> · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-03bd1dc9d2fbeab7ae978c8648dcb43b852aa1d342169243f85f89febf0e92ec — U-10 · sempre · cena 1280x900 · <meta>: Estrato G · variante recarga-periodica. O head tem <meta http-equiv="refresh" content="300">, sem url e sem aviso: a página se recarrega sozinha a cada 300 s (observado aos 300,1 s numa janela de 360 s em contexto próprio, plano § 14.5). A recarga devolve a página ao estado inicial (aba Andamento, select vazio, switch desligado). A âncora é o próprio meta; a existência dele é o defeito. Sem predicado na referência; medido em tela-a2/auditoria/observar-360.mjs e tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `document.head: <meta http-equiv="refresh" content="300">` → identificador devolvido por ferramenta (sem arquivo)
- `performance.getEntriesByType("navigation")[0].type = "reload" sem ação do usuário` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dffe12686c10707a2a34dde17cd7920693f807fef7c6517d741424783a08cfe0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e3cc42eabb8a786cf4a496eb1586ddbebdd764166badc7fb31689c63387485ce

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O tooltip aparece ao passar o mouse no botão de ajuda, mas some assim que o ponteiro sai do botão em direção ao próprio tooltip. Ao tentar posicionar o mouse sobre o tooltip "Prazo em dias corridos", ele foi ocultado e o ponto passou a atingir div.dado-resumo "Situação: Em análise"; com mouseleave no botão e mouseenter no tooltip, ambos os tooltips ficam com visibility:hidden e o atributo hidden.

Esperado: O conteúdo adicional exibido por hover permanece visível enquanto o ponteiro está sobre ele (hoverable), até ser dispensado ou deixar de ser relevante.

Janela: 1280×900 · interações desde o carregamento: 1. passar o mouse sobre o botão "Ajuda sobre o prazo" 2. mover o ponteiro para o tooltip

Regra declarada: wcag:1.4.13

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(1)>div" — <div#tip-protocolo> · **oculto**: nao-renderizado, atributo hidden
- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(4)>div" — <div#tip-prazo> · **oculto**: nao-renderizado, atributo hidden

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `Playwright hover em tooltip "Prazo em dias corridos": "<div class=dado-resumo>Situação: Em análise</div> intercepts pointer events" e depois "element is not visible"` → não encontrado na evidência preservada da execução
- `teste por eventos: tip-prazo e tip-protocolo visible → hidden` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e3cc42eabb8a786cf4a496eb1586ddbebdd764166badc7fb31689c63387485ce",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f1a7d24ce22aab1add4a50f33ddd497f2a23c20dd7d2575d12815597699adb9d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O conteúdo da mensagem de pendência usa marcação de apresentação obsoleta: <div class="content" role="alert" align="left"><font color="#333333">…</font>.

Esperado: Apresentação feita por CSS, sem elementos e atributos obsoletos de HTML (font, align).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(1)>div:nth-of-type(2)>font" — <font> "Documento pendente. Envie o comprovante de resid"

### Unidades candidatas (não são crédito)

- U-471a20be6fcde83c2257a723949b55ad0515e99d96e292cfe0587a3e84d6de5f — U-13 · sempre · cena 1280x900 · <div> "Documento pendente. Envie o comprovante de resid": Estrato G · variante apresentacao-no-html. A cor e o alinhamento do texto da mensagem de pendência vêm de atributos de apresentação no HTML — <div class="content" align="left"> e o texto dentro de <font color="#333333"> — com os mesmos valores que o CSS já dá. Nenhum font/align no card nem na mensagem de retorno. Uma unidade com dois participantes. Sem predicado na referência; a âncora só resolve com o defeito presente.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `DOM: <font color="#333333"> dentro de #msg-pendencia .content[align=left]` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f1a7d24ce22aab1add4a50f33ddd497f2a23c20dd7d2575d12815597699adb9d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f36a6bbb974c7cb935fcd98c30ef53d17741115910109c5b673012a0966d409d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na mensagem de erro do envio, o botão Fechar é <div class="br-button …" role="button" tabindex="0">; nas mensagens de pendência e de sucesso o mesmo botão é <button type="button">.

Esperado: br-button aplicado a <button> (elemento nativo).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Documentos" (#aba-documentos) 2. clicar em "Enviar Documento" (.acao-enviar) com o formulário vazio

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>div:nth-of-type(3)>div:nth-of-type(1)" — <div> "Fechar"

### Unidades candidatas (não são crédito)

- U-d65d33743a008a7f5d119878bc6ad4968ada1c800c1a8db19698898903af8e1f — U-11 · S2 · cena 1280x900 · <div> "Fechar": Estrato G · variante fechar-div. O botão Fechar da mensagem de retorno é <div class="br-button circle small" role="button" tabindex="0"> com Enter e Espaço tratados, no lugar do <button> do exemplo oficial; continua operável por teclado e nomeado — o defeito é só o elemento. O Fechar da mensagem de pendência é <button>. Mesma variante da A-06 da tela A (ver E-03).
  - estados em que a unidade existe: S2
  - predicado de aceitação: classe-no-elemento sustenta em S2 — o próprio <div> carrega a classe .br-button. Medido: <div class="br-button circle small fechar-mensagem">
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-fbf0f6a2ec10e6005ba71ae379cd56f76e7c3e8c0518c53b2c2c3a327dd68638 — U-05 · sempre · cena 1280x900 · <button> "Fechar": Estrato DS · variante icone-descentralizado · sorteada (a2-5f85eeafe863). No botão Fechar da mensagem de pendência (32×32) o ícone fica no canto superior esquerdo (justify-content/align-items flex-start): o centro do ícone desvia 8 px do centro do botão. Os outros botões só de ícone da página (gatilhos das tooltips, do select, Fechar da mensagem de retorno) têm o ícone centrado (≤ 1 px).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [justify-content, align-items] em {flex-start}. Medido: justify-content=flex-start, align-items=flex-start | justify-content=flex-start, align-items=flex-start | justify-content=flex-start, align-items=flex-start
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-020` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f36a6bbb974c7cb935fcd98c30ef53d17741115910109c5b673012a0966d409d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f378fe210976a63938721699bbcf4d67f8eca8d6ff7e6e7ebbad5223d0d2c955

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao ligar os interruptores, input.checked=true mas o atributo aria-checked continua "false" (#aviso-email e #aviso-sms). O Chromium expõe o estado nativo, mas o atributo ARIA declarado contradiz o estado real.

Esperado: aria-checked acompanhando o estado (ou removido, deixando o estado nativo do checkbox).

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos 2. click label[for="aviso-email"]

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset>div:nth-of-type(2)>div>input" — <input#aviso-email>
- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset>div:nth-of-type(3)>div>input" — <input#aviso-sms>

### Unidades candidatas (não são crédito)

- U-9de9f00a68a00e1bad77ffb10bc1b13c56081187154b5b10b3476d3c4acd342f — U-07 · S1 · cena 1280x900 · <input#aviso-email>: Estrato DS · variante aria-checked-fixo · COMPARTILHADA pelos dois switches (e-mail, SMS) · coincide com o core 3.7.0 (o pacote não mantém aria-checked; os exemplos oficiais do Switch não trazem o atributo). A marcação traz aria-checked="false" e nada o atualiza: ligado o switch (Space, clique no rótulo ou checkbox principal), checked=true e aria-checked continua "false". Sem predicado na referência (o observável pede ligar o switch); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c31afe8654b526d2a35407e9018b933e68eb99c05e650328414cc03978628b7c — U-14 · S1 · cena 1280x900 · <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe": Estrato G · variante grupo-sem-legend. O fieldset dos avisos (checkbox principal e os dois switches) não tem legend; 'Avisos sobre o requerimento' é um p logo antes dele, sem ligação programática. Sem predicado na referência (as espécies existentes não medem ausência de filho); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c4846fcc9168ca2f4331dddfea6afa1149c689b85ffa4a0106df366444712957 — U-07 · S1 · cena 1280x900 · <input#aviso-sms>: Estrato DS · variante aria-checked-fixo · COMPARTILHADA pelos dois switches (e-mail, SMS) · coincide com o core 3.7.0 (o pacote não mantém aria-checked; os exemplos oficiais do Switch não trazem o atributo). A marcação traz aria-checked="false" e nada o atualiza: ligado o switch (Space, clique no rótulo ou checkbox principal), checked=true e aria-checked continua "false". Sem predicado na referência (o observável pede ligar o switch); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `V-004` → identificador devolvido por ferramenta (sem arquivo)
- `V-005 (P-05; divergência medida)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f378fe210976a63938721699bbcf4d67f8eca8d6ff7e6e7ebbad5223d0d2c955",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f67b22bc3f1dde5e86c5d41bfb326425ee0e27d23281f5c0aa4cec95f268ac2f

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>div:nth-of-type(3)>div:nth-of-type(2)>span" — <span> "Fechar"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f67b22bc3f1dde5e86c5d41bfb326425ee0e27d23281f5c0aa4cec95f268ac2f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f997879ef137d43c7313677aaf1f250829b1c7d6ffffd90c5294ca1f54b6c665

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Delayed refresh under 20 hours must not be used

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:meta-refresh

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "head>meta:nth-of-type(3)" — <meta> · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-03bd1dc9d2fbeab7ae978c8648dcb43b852aa1d342169243f85f89febf0e92ec — U-10 · sempre · cena 1280x900 · <meta>: Estrato G · variante recarga-periodica. O head tem <meta http-equiv="refresh" content="300">, sem url e sem aviso: a página se recarrega sozinha a cada 300 s (observado aos 300,1 s numa janela de 360 s em contexto próprio, plano § 14.5). A recarga devolve a página ao estado inicial (aba Andamento, select vazio, switch desligado). A âncora é o próprio meta; a existência dele é o defeito. Sem predicado na referência; medido em tela-a2/auditoria/observar-360.mjs e tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f997879ef137d43c7313677aaf1f250829b1c7d6ffffd90c5294ca1f54b6c665",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
