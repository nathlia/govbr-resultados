# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 46 cartões únicos · 46 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 46 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 61 sujeitos · 46 cartão(ões) sem evidência verificada · 36 com unidade candidata · estimativa **276 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 12 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-0820e9ff575b594589b0df4ffbeeebdf13c9d29509235a23e359f5b066ed1566

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com a lista de tipos aberta pelo teclado (foco no campo, ArrowDown), ao escolher uma opção com Enter a lista se fecha e o foco vai para <body> (document.activeElement = body), perdendo a posição do usuário.

Esperado: Após a seleção, o foco deve voltar ao campo "Tipo de documento" (ou permanecer em elemento visível do componente).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos 2. clicar no campo Tipo de documento 3. ArrowDown 4. Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:#list-7644 .br-item" — Seletor não resolvido

### Unidades candidatas (não são crédito)

- U-bca12251136dab4326f7e6410c56662fa4e3456dce17341d7d440cef99fbf9e5 — U-09 · S2 · cena 1280x900 · <input#tipo-documento> "Selecione o tipo do documento pendente": Estrato G · variante erro-so-borda. Depois de Enviar documento com o formulário vazio, o campo 'Tipo de documento' só ganha a borda de erro (--danger, 2 px): nenhum texto identifica e descreve o erro, nada o liga ao campo (sem aria-describedby, sem aria-invalid), e a mensagem de retorno diz que há campos com problema sem nomeá-lo. O upload inválido, na mesma tela, tem texto de erro ligado por aria-describedby. O predicado cobre a parte da associação; a ausência de texto está medida em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: atributos-ausentes sustenta em S0, S1, S2 — nenhum destes atributos presente: aria-describedby, aria-invalid. Medido: ausentes: aria-describedby, aria-invalid | ausentes: aria-describedby, aria-invalid | ausentes: aria-describedby, aria-invalid
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `evaluate após Enter: value "Comprovante de residência", lista display none, activeElement = BODY` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0820e9ff575b594589b0df4ffbeeebdf13c9d29509235a23e359f5b066ed1566",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0893bac333c32b21e3d6f6e51dcef83d62a985f7ff4e261c2b3d7c177a707339

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
  "cardId": "C-0893bac333c32b21e3d6f6e51dcef83d62a985f7ff4e261c2b3d7c177a707339",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-091574b4f7786fd81587ff09ad899bb8fdb9fbfea279475baaa14d0debfb4201

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na mensagem de erro do envio, o botão Fechar é <div class="br-button circle small" role="button" tabindex="0">; nas mensagens de pendência e de sucesso o mesmo controle é <button type="button">.

Esperado: br-button aplicado a elemento <button> nativo, como nas demais instâncias de mensagem.

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos (aba Documentos) 2. click .acao-enviar (Enviar Documento com campos vazios)

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-014` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-091574b4f7786fd81587ff09ad899bb8fdb9fbfea279475baaa14d0debfb4201",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0f84a3d29a220e1c80c10773b15d0f64e41391a46c53f4ea9472f408fe09c4ea

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O conteúdo da mensagem de pendência usa marcação de apresentação no HTML: atributo align="left" e elemento obsoleto <font color="#333333">.

Esperado: Separação de camadas: apresentação via CSS, sem <font> nem atributos de apresentação obsoletos.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(1)>div:nth-of-type(2)" — <div> "Documento pendente. Envie o comprovante de resid"

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
  "cardId": "C-0f84a3d29a220e1c80c10773b15d0f64e41391a46c53f4ea9472f408fe09c4ea",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-169ffd6ff6d25940e0f4f0b8422343ae663579177702b6a675d0eda139c4c3fd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao ligar os switches (clique no rótulo), input.checked=true mas o atributo aria-checked permanece "false" em ambos (também ao marcar "Todos os avisos").

Esperado: aria-checked="true" quando o switch está ligado e "false" quando desligado, acompanhando o estado.

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos (aba Documentos) 2. click label[for=aviso-email] e label[for=aviso-sms] (ligar os switches)

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
- `V-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-169ffd6ff6d25940e0f4f0b8422343ae663579177702b6a675d0eda139c4c3fd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-179ca033c05b2e8cca026e43235208cd7be7722d4d3a87d19926faf5753c4c46

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O ul com role="tablist" tem como filhos li sem role de apresentação; a árvore de acessibilidade expõe tablist > listitem > tab, ou seja, listitems fora de lista e tablist sem tabs como filhos diretos.

Esperado: Os li dentro do tablist devem ter role="presentation"/"none" (ou o tablist deve possuir diretamente os elementos role="tab").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(1)" — <li> "Andamento"
- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(2)" — <li> "Documentos"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `snapshot: tablist [ref=e62] > listitem [ref=e63] > tab "Andamento"` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-179ca033c05b2e8cca026e43235208cd7be7722d4d3a87d19926faf5753c4c46",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1c01f4317ae76d06c88f22d6536b7f8438789541a33b649859d4bffb3c78414d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Selecione o arquivo" é focável (tabindex 0, abre o seletor de arquivo com Enter) mas tem aria-hidden="true"; o input file #arquivo-documento está com display:none. O único controle de envio de arquivo fica sem papel/nome na árvore de acessibilidade.

Esperado: Controle focável não pode ter aria-hidden; o controle de seleção de arquivo deve ser exposto com papel e nome (ex.: rótulo Envio de documento).

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

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-015` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-022` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1c01f4317ae76d06c88f22d6536b7f8438789541a33b649859d4bffb3c78414d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-20ae16a17027b3998d56b74fd60d13f5e608f70502052621936a131bce2cc117

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página recarrega sozinha a cada 300 s (cargas observadas em 06:08:19, 06:13:19, 06:18:19 e 06:23:19 UTC; navigation type "reload"), mesmo com interação do usuário no intervalo e sem nenhum aviso prévio (MutationObserver não registrou mudança antes do beforeunload). A recarga descarta o tipo selecionado, o arquivo, as preferências de aviso e a mensagem fechada.

Esperado: Não atualizar a página automaticamente; se houver limite de tempo, permitir desligar, ajustar ou estender antes de expirar, sem perda de dados.

Janela: 1280×900 · interações desde o carregamento: 1. aguardar 300 s após o carregamento

Regra declarada: emag:2.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body" — <body> "Ir para o conteúdo (1/2) 1 Ir para o rodapé (2/2"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `performance.getEntriesByType("navigation") = reload; performance.now ~3,5 s às 06:23:22` → identificador devolvido por ferramenta (sem arquivo)
- `sessionStorage mut: "06:23:19.352Z beforeunload" sem mutações anteriores` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-20ae16a17027b3998d56b74fd60d13f5e608f70502052621936a131bce2cc117",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-22e065d79d04801e0f220ec32dd8ffa39e00e26051eaafdbebfc3ebc975ff53a

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
  "cardId": "C-22e065d79d04801e0f220ec32dd8ffa39e00e26051eaafdbebfc3ebc975ff53a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-23da57cf3199db683ffe11a569c8d5ba4699da1155c1eb3421c3bfdef41118cf

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
  "cardId": "C-23da57cf3199db683ffe11a569c8d5ba4699da1155c1eb3421c3bfdef41118cf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2ccde6bfc1775b87e145995b40f7c863cd1da5953dd44b69ad6216287dd18c07

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O marcador numerado da etapa 3 (::before "3") está com visibility:hidden: a etapa Decisão aparece sem círculo/número e seu nome acessível perde o "3", diferente das etapas 1, 2 e 4.

Esperado: Todas as etapas do br-step exibem o marcador numerado.

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2ccde6bfc1775b87e145995b40f7c863cd1da5953dd44b69ad6216287dd18c07",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3015b5e861ea8cad2a27d441ade7767a1480aafa75ee680cfa22e2ddbb04cb68

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar vazio, o campo Tipo de documento fica só com borda vermelha (.br-input.danger); não há mensagem em texto nem aria-invalid/aria-describedby para ele (só o campo de arquivo recebe "Selecione o arquivo do documento.").

Esperado: Campo em erro identificado e o erro descrito em texto, associado ao campo.

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
- `V-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3015b5e861ea8cad2a27d441ade7767a1480aafa75ee680cfa22e2ddbb04cb68",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-306d50f4a0edacc6f2445bd7fbefd8c260f94f9f6c791fc42aec8e0c3d12ab44

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: ul[role="tablist"] tem filhos <li> sem role="presentation"; os botões role="tab" ficam dentro de listitem e não são filhos de tablist ([ferramenta citada]: aria-required-children, aria-required-parent, listitem).

Esperado: Os <li> da tablist devem ter role="presentation"/"none" para que os role="tab" sejam filhos diretos da tablist na árvore de acessibilidade.

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-306d50f4a0edacc6f2445bd7fbefd8c260f94f9f6c791fc42aec8e0c3d12ab44",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-34c54b0ab90031d77ae7627f2b1cdd8f3c8020412317326a8877f0081ca7fbc9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: ul role="tablist" tem filhos li sem role (listitem); os botões role="tab" não têm tablist como pai na árvore de acessibilidade e os li ficam com pai não-list ([ferramenta citada] aria-required-children, aria-required-parent, listitem).

Esperado: Os li dentro do tablist devem ter role="presentation"/"none" (ou os tabs serem filhos diretos), para que tablist possua apenas tabs.

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
  "cardId": "C-34c54b0ab90031d77ae7627f2b1cdd8f3c8020412317326a8877f0081ca7fbc9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-38a72c9650378a70d373b59f0c362c73ad6a9dbe9b3ee3b92c80da258884aaf1

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
  "cardId": "C-38a72c9650378a70d373b59f0c362c73ad6a9dbe9b3ee3b92c80da258884aaf1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-473bd44297e313863e7e09e952658581008081405780c61a7bf6722d55268c32

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao abrir um item do acordeão "Dúvidas Frequentes", o conteúdo é exibido (display block, ícone muda para angle-up, item recebe active) mas o botão mantém aria-expanded="false"; o estado nunca é atualizado.

Esperado: aria-expanded deve ser "true" no cabeçalho do item aberto e "false" nos fechados.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em "Como envio o documento pendente?"

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

- `evaluate: item 1 conteúdo display block, aria-expanded false; repetido no item 2` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-473bd44297e313863e7e09e952658581008081405780c61a7bf6722d55268c32",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4cc45811dbd95fffeeee72ec277eeac388fd63f8c3b162b8af43931a19347cfa

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
  "cardId": "C-4cc45811dbd95fffeeee72ec277eeac388fd63f8c3b162b8af43931a19347cfa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-57eb6218668969237df1804f2e4f89b5fec6410fbc0559d8a848326ae3de58fa

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
  "cardId": "C-57eb6218668969237df1804f2e4f89b5fec6410fbc0559d8a848326ae3de58fa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5b59c0e05f3b620eb65334e4873feda10c2089770a4d8bcfd678f15662081531

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na mensagem de erro, o controle Fechar é <div role="button" tabindex="0">, enquanto nas mensagens de pendência e de sucesso é <button type="button"> (opera com Enter/Espaço).

Esperado: Mesma estrutura do componente br-message em todas as instâncias: botão nativo <button>.

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos 2. click .acao-enviar

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5b59c0e05f3b620eb65334e4873feda10c2089770a4d8bcfd678f15662081531",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5e76bc420cb107a650b86a4a21952f4b932d236cfd94928d917e17ec1ea7c68c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: fieldset dos avisos sem legend nem nome acessível (group sem nome); o título visual "Avisos sobre o requerimento" é um <p> fora do fieldset.

Esperado: O grupo deve ser nomeado pelo seu título (legend).

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos

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

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5e76bc420cb107a650b86a4a21952f4b932d236cfd94928d917e17ec1ea7c68c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5f62d8b4c73845e9e56b03cc45367b4cc900ae049bdbd175404b2afb6e367366

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset dos avisos (checkbox Todos os avisos e dois switches) não tem <legend> nem nome (group sem nome); o título "Avisos sobre o requerimento" é um <p class="titulo-avisos"> fora do fieldset.

Esperado: Agrupamento descrito por <legend> (ex.: Avisos sobre o requerimento) dentro do fieldset.

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos (aba Documentos)

Regra declarada: emag:6.7

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset" — <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe"

### Unidades candidatas (não são crédito)

- U-c31afe8654b526d2a35407e9018b933e68eb99c05e650328414cc03978628b7c — U-14 · S1 · cena 1280x900 · <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe": Estrato G · variante grupo-sem-legend. O fieldset dos avisos (checkbox principal e os dois switches) não tem legend; 'Avisos sobre o requerimento' é um p logo antes dele, sem ligação programática. Sem predicado na referência (as espécies existentes não medem ausência de filho); medido em tela-a2/auditoria/conferir-auditoria.mjs.
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
  "cardId": "C-5f62d8b4c73845e9e56b03cc45367b4cc900ae049bdbd175404b2afb6e367366",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-639387a06064ca33d2bf1c085c9f63de89aa8a9d39708d46e4b24d4771fed0d3

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
  "cardId": "C-639387a06064ca33d2bf1c085c9f63de89aa8a9d39708d46e4b24d4771fed0d3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-690446bacaa0f599e5a1ad523aa3968b43911346d9014d27c704bc15d4af4c42

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Selecione o arquivo" é focável (tabindex 0, único controle de teclado do upload, pois o input file está display:none) mas tem aria-hidden="true"; leitores de tela recebem foco num elemento sem nome nem papel.

Esperado: Controle focável não pode estar em aria-hidden; o botão deve ser exposto com nome (ou o input file acessível).

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos

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

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-014` → identificador devolvido por ferramenta (sem arquivo)
- `F-024` → identificador devolvido por ferramenta (sem arquivo)
- `F-037` → identificador devolvido por ferramenta (sem arquivo)
- `F-044` → identificador devolvido por ferramenta (sem arquivo)
- `F-051` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-690446bacaa0f599e5a1ad523aa3968b43911346d9014d27c704bc15d4af4c42",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6a363f432f294b47a31331a9ad2413ee8286c75e29533e907b921ea78deae1e3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões de ajuda exibem ao lado o rótulo visível "Ajuda sobre o NUP" / "Ajuda sobre o prazo" (span.rotulo-botao visível, posição absoluta), mas aria-labelledby aponta para o tooltip e sobrepõe o aria-label: o nome acessível calculado é "Use o NUP para consultar" / "Prazo em dias corridos", que não contém o texto visível.

Esperado: O nome acessível de cada botão deve conter o rótulo visível (ex.: "Ajuda sobre o NUP"); o texto do tooltip pode ser associado como descrição (aria-describedby).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(1)>button" — <button#tip-protocolo-gatilho> "Ajuda sobre o NUP"
- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(4)>button" — <button#tip-prazo-gatilho> "Ajuda sobre o prazo"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `snapshot: button "Use o NUP para consultar" contendo texto "Ajuda sobre o NUP"` → identificador devolvido por ferramenta (sem arquivo)
- `getComputedStyle(.rotulo-botao): display block, visibility visible, x=519 y=433 149x24` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6a363f432f294b47a31331a9ad2413ee8286c75e29533e907b921ea78deae1e3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6ad58d7e8963a1087c5fff85aa3a052644989a939a3ad466eaaf462a3673e19d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O conteúdo da mensagem usa marcação de apresentação obsoleta: <font color="#333333"> e atributo align="left" em div.content.

Esperado: Apresentação feita por CSS, sem elementos/atributos de apresentação obsoletos.

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6ad58d7e8963a1087c5fff85aa3a052644989a939a3ad466eaaf462a3673e19d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-751b95cf10b088afb8cdda52573f9f5d676b0ec132a92624969ae9afafcf5fff

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset que agrupa "Todos os avisos" e os switches de e-mail/SMS não tem legend; o título visual "Avisos sobre o requerimento" é um <p class="titulo-avisos"> (16,8px, semibold) fora do fieldset, sem associação programática ao grupo (o group é exposto sem nome).

Esperado: O grupo deve ter nome acessível: usar <legend>Avisos sobre o requerimento</legend> dentro do fieldset (ou aria-labelledby).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos

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

- `document.querySelector("#fs-avisos legend") = null` → identificador devolvido por ferramenta (sem arquivo)
- `snapshot: group [ref=e166] sem nome` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-751b95cf10b088afb8cdda52573f9f5d676b0ec132a92624969ae9afafcf5fff",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-91dec2c6da571fefab2c2424be90aa8057cf31ed20b8e5797fa919b13114f436

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O h2 "Dúvidas Frequentes" tem font-size 16px (fora da escala Minor Third do DS; passo mais próximo 16.8px), enquanto o outro h2 da tela ("Enviar Documento Pendente") usa 34.832px.

Esperado: Tamanho de fonte dentro da escala tipográfica do DS e consistente entre títulos do mesmo nível.

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

- `S-page-001 observation n=1` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-91dec2c6da571fefab2c2424be90aa8057cf31ed20b8e5797fa919b13114f436",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-954962c1e0b05495d4bca6d3d6e4f310e697954a5fc43667682b6d804a4014c5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Após enviar vazio, o campo Tipo de documento recebe apenas borda vermelha (.br-input.danger); não há mensagem de erro em texto para ele, nem aria-invalid nem aria-describedby (nome AX "Tipo de documento", invalid=false). A mensagem geral diz só "Corrija os campos indicados". O campo de arquivo, ao contrário, ganha texto "Selecione o arquivo do documento."

Esperado: O campo em erro identificado e o erro descrito em texto junto ao campo, associado programaticamente (aria-describedby) e com aria-invalid=true.

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos (aba Documentos) 2. click .acao-enviar (Enviar Documento com campos vazios)

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-954962c1e0b05495d4bca6d3d6e4f310e697954a5fc43667682b6d804a4014c5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-99396d014f879596c7ff4aafb4e3bad5170e8e144a6e47960cc123d141e364a5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O conteúdo da mensagem de pendência usa marcação de apresentação obsoleta: <font color="#333333"> envolvendo o texto e atributo align="left" no div.content.

Esperado: Separar conteúdo e apresentação: remover <font> e align e aplicar cor/alinhamento via CSS (classes do Design System).

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

- `DOM: <div class="content" role="alert" align="left"><font color="#333333">...` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-99396d014f879596c7ff4aafb4e3bad5170e8e144a6e47960cc123d141e364a5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9bc013894cff11972f02e55ae5e329b8ce6850d35868c60abbc1dfc65aece25c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No botão Fechar da mensagem de pendência o ícone fica no canto superior esquerdo (deslocamento 0,0 num botão de 32x32; justify-content/align-items flex-start), enquanto na mensagem de sucesso o mesmo ícone fica centralizado (4,8).

Esperado: Ícone centralizado no botão circular, como nas demais instâncias do componente.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div>div:nth-of-type(1)>div:nth-of-type(3)>button" — <button> "Fechar"

### Unidades candidatas (não são crédito)

- U-fbf0f6a2ec10e6005ba71ae379cd56f76e7c3e8c0518c53b2c2c3a327dd68638 — U-05 · sempre · cena 1280x900 · <button> "Fechar": Estrato DS · variante icone-descentralizado · sorteada (a2-5f85eeafe863). No botão Fechar da mensagem de pendência (32×32) o ícone fica no canto superior esquerdo (justify-content/align-items flex-start): o centro do ícone desvia 8 px do centro do botão. Os outros botões só de ícone da página (gatilhos das tooltips, do select, Fechar da mensagem de retorno) têm o ícone centrado (≤ 1 px).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [justify-content, align-items] em {flex-start}. Medido: justify-content=flex-start, align-items=flex-start | justify-content=flex-start, align-items=flex-start | justify-content=flex-start, align-items=flex-start
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9bc013894cff11972f02e55ae5e329b8ce6850d35868c60abbc1dfc65aece25c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a0186d76b7bfb075fb4f0ab5e417ce314efe6d85febcaef535c84a0b4dbf690d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com a lista aberta, cada role="option" contém um input radio focável (controles interativos aninhados).

Esperado: option sem descendentes focáveis.

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos 2. click #sel-tipo-documento [data-trigger]

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)" — <div> "Comprovante de residência" · **oculto**: nao-renderizado
- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)" — <div> "Documento de identidade" · **oculto**: nao-renderizado
- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(3)" — <div> "Procuração" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-021` → identificador devolvido por ferramenta (sem arquivo)
- `F-022` → identificador devolvido por ferramenta (sem arquivo)
- `F-023` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a0186d76b7bfb075fb4f0ab5e417ce314efe6d85febcaef535c84a0b4dbf690d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a03b618fce17bf84e63a44f0324f2f895a5da4bc6e854679aeca9e9afa376f49

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A etapa 3 "Decisão" não exibe o indicador: o ::before (conteúdo "3", 40×40) tem visibility:hidden, enquanto as etapas 1, 2 e 4 mostram o círculo numerado; o nome acessível também perde o número ("Decisão" x "4 Conclusão").

Esperado: Indicador (obrigatório) presente e visível em todas as etapas do Step.

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
- `V-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a03b618fce17bf84e63a44f0324f2f895a5da4bc6e854679aeca9e9afa376f49",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a21732d0b31f53eecf0f7b7546cd2d6fdbe441fa8013c5a409759a4e1644c27e

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
  "cardId": "C-a21732d0b31f53eecf0f7b7546cd2d6fdbe441fa8013c5a409759a4e1644c27e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a67f6d50c71c1e34f17cfb66d13aeca295b2291ef2baa67cd1fb17a63920648a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao abrir um item do acordeão o conteúdo fica visível (display:block, ícone angle-up, item[active]), mas o botão continua com aria-expanded="false"; isso ocorre nos três itens.

Esperado: aria-expanded="true" quando o painel controlado está aberto.

Janela: 1280×900 · interações desde o carregamento: 1. click #acc-duvidas button[aria-controls="acc-duvidas-1"]

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `V-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a67f6d50c71c1e34f17cfb66d13aeca295b2291ef2baa67cd1fb17a63920648a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-aa6b7849f3f0edb70002fe7f350f50cc2f8bf30b3f8a051d21caf764356af76b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O único controle operável do upload é button.upload-button, que recebe foco pelo teclado (tabIndex 0) e abre o seletor de arquivo, mas tem aria-hidden="true"; o input file rotulado ("Envio de documento") está com display:none. Assim o controle focável não expõe nome nem papel a tecnologias assistivas.

Esperado: O controle focável que seleciona o arquivo não pode estar oculto da árvore de acessibilidade e deve ter nome que inclua "Envio de documento"/"Selecione o arquivo".

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos

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

- `DOM: <button class="upload-button" type="button" aria-hidden="true">` → identificador devolvido por ferramenta (sem arquivo)
- `foco por teclado + Enter disparou click no input file (1 clique)` → identificador devolvido por ferramenta (sem arquivo)
- `snapshot: button [ref=e160] sem nome` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-aa6b7849f3f0edb70002fe7f350f50cc2f8bf30b3f8a051d21caf764356af76b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-aa9f89becbfe5e4369fb7a44051186ecd34abdf9adfa83cc4abf6345954654ec

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao expandir um item de Dúvidas Frequentes, o conteúdo (#acc-duvidas-2) passa a display:block e o ícone muda para angle-up, mas aria-expanded do botão continua "false" (nenhum controle com aria-expanded=true no estado).

Esperado: aria-expanded="true" no botão do item expandido e "false" nos recolhidos.

Janela: 1280×900 · interações desde o carregamento: 1. click #acc-duvidas [aria-controls="acc-duvidas-2"] (Quanto tempo leva a análise?)

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-aa9f89becbfe5e4369fb7a44051186ecd34abdf9adfa83cc4abf6345954654ec",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b2d29f32f604f7e2dfda452391dd0465a1d1fba4e367790b5c62003ec7ab29a9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O h2 "Dúvidas Frequentes" usa font-size fixo de 16px (bold), enquanto o outro h2 da tela ("Enviar Documento Pendente") usa a escala tipográfica do DS (34,83px).

Esperado: Títulos do mesmo nível com o token tipográfico do DS para h2.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b2d29f32f604f7e2dfda452391dd0465a1d1fba4e367790b5c62003ec7ab29a9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bb04714718c4ff60355c329c004a65d545e2bdd6700828115305d34098054ac3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os dois títulos h2 da tela têm estilos divergentes: "Dúvidas Frequentes" (h2.titulo-duvidas) é sobrescrito para 16px/700, enquanto "Enviar Documento Pendente" (h2) usa 34,8px/400 do padrão; o h2 fica menor que o título do card (20,16px), invertendo a hierarquia visual.

Esperado: Títulos de mesmo nível devem seguir a tipografia de h2 do Design System gov.br de modo consistente.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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

- `getComputedStyle: .titulo-duvidas 16px/700; .titulo-formulario 34.832px/400; card header 20.16px` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bb04714718c4ff60355c329c004a65d545e2bdd6700828115305d34098054ac3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bc6d612ce58140c49683b472eb0d9a3316023b2811927aa99ffe0ed849670efe

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões de ajuda mostram o rótulo visível "Ajuda sobre o NUP" / "Ajuda sobre o prazo", mas aria-labelledby aponta para o tooltip e o nome acessível vira "Use o NUP para consultar" / "Prazo em dias corridos" (aria-label ignorado).

Esperado: O nome acessível deve conter o texto do rótulo visível; o texto do tooltip deve ser descrição (aria-describedby), não nome.

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
  "cardId": "C-bc6d612ce58140c49683b472eb0d9a3316023b2811927aa99ffe0ed849670efe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c371ec5db7191ee2d79a8240b335ba085f378e2c3848da8bea84a0c4777fd34c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <meta http-equiv="refresh" content="300">: a página recarrega sozinha a cada 5 minutos, sem controle do usuário (perde aba ativa, formulário preenchido e posição).

Esperado: Nenhuma atualização automática periódica; atualização apenas por ação do usuário ou com mecanismo para desativar/ajustar.

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c371ec5db7191ee2d79a8240b335ba085f378e2c3848da8bea84a0c4777fd34c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cc7edaab88a4abcaa54b372ec7fd36cd6c3d69ff0384804e0d6ca986f9822765

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
  "cardId": "C-cc7edaab88a4abcaa54b372ec7fd36cd6c3d69ff0384804e0d6ca986f9822765",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d37cf701a5c5402ec5cfd68066d1c8bf77bec50d3108ed9a1c4b9a85d5aec443

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar o formulário vazio, o campo "Tipo de documento" é marcado como erro apenas pela borda vermelha (br-input.danger, borda rgb(229,34,7)); não há mensagem de erro textual para o campo nem aria-invalid/aria-describedby (o campo de arquivo, ao contrário, recebe "Selecione o arquivo do documento.").

Esperado: O campo com erro deve ser identificado e descrito em texto, associado ao campo (mensagem de feedback do DS + aria-invalid/aria-describedby).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos 2. clicar em Enviar Documento sem preencher

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

- `DOM após envio: br-input danger sem span.feedback; #tipo-documento aria-invalid=null` → identificador devolvido por ferramenta (sem arquivo)
- `captura de tela do estado de erro` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d37cf701a5c5402ec5cfd68066d1c8bf77bec50d3108ed9a1c4b9a85d5aec443",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-de979956b2720536cdfe1a3473725a6fed71ec79603d195c1c2d594e40a5902e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <meta http-equiv="refresh" content="300">: a página se recarrega sozinha a cada 5 minutos, sem controle do usuário (perde aba ativa, seleções e arquivo anexado).

Esperado: Nenhuma atualização temporizada, ou meio de desligar/ajustar/estender o tempo.

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-de979956b2720536cdfe1a3473725a6fed71ec79603d195c1c2d594e40a5902e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ead0dfeae1e54e739bd346aa0eb5b3520b4a967e9ce77bf86d58fa410bfc93e3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões exibem o rótulo visível "Ajuda sobre o NUP"/"Ajuda sobre o prazo" (span .rotulo-botao visível ao lado do ícone), mas aria-labelledby aponta para o tooltip e o nome acessível vira "Use o NUP para consultar"/"Prazo em dias corridos", sem o texto visível.

Esperado: O nome acessível contém o rótulo visível (usar o tooltip como aria-describedby).

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
  "cardId": "C-ead0dfeae1e54e739bd346aa0eb5b3520b4a967e9ce77bf86d58fa410bfc93e3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ec698b0dac5e93a8702b5154af071d280e8dc03995d283c4153f7a74e8ad786c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao ligar cada switch, checked=true, mas aria-checked permanece "false" (atributo nunca atualizado).

Esperado: aria-checked coerente com o estado nativo (ou removido do input checkbox).

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

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `V-002` → identificador devolvido por ferramenta (sem arquivo)
- `V-003` → identificador devolvido por ferramenta (sem arquivo)
- `V-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ec698b0dac5e93a8702b5154af071d280e8dc03995d283c4153f7a74e8ad786c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fe530400c43728bc006e8b1431546f5fdf93db617abe90ca1608e49e0a84ea75

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na instância do componente Step, a etapa 3 "Decisão" não mostra o círculo numerado: ::before tem visibility:hidden (regra .etapas-requerimento .etapa-decisao::before), enquanto as etapas 1, 2 e 4 exibem o marcador numerado de 40px.

Esperado: Todas as etapas do Step devem exibir o mesmo indicador numerado do padrão gov.br, inclusive a etapa 3.

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

- `getComputedStyle(.etapa-decisao,"::before").visibility = hidden; demais = visible` → identificador devolvido por ferramenta (sem arquivo)
- `captura de tela inicial: etapa Decisão sem círculo` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fe530400c43728bc006e8b1431546f5fdf93db617abe90ca1608e49e0a84ea75",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
