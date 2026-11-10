# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 46 cartões únicos · 46 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 46 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 61 sujeitos · 46 cartão(ões) sem evidência verificada · 39 com unidade candidata · estimativa **276 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 24 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-09b45440b8143b33f6bbd3591d3a97d4c4a5d8522e3b4f39ab0d260e5d6e4966

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
  "cardId": "C-09b45440b8143b33f6bbd3591d3a97d4c4a5d8522e3b4f39ab0d260e5d6e4966",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0a57c6a815f0545ff0a27a790609c422f0836eb6cf94b276e67f71ad2ad58f19

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O input file #arquivo-documento tem display:none e o único controle operável é button.upload-button com aria-hidden="true" e tabIndex 0: recebe o foco pelo Tab, mas não é exposto às tecnologias assistivas ([ferramenta citada]: aria-hidden-focus).

Esperado: Controle focável exposto à árvore de acessibilidade, com nome e papel (sem aria-hidden), ou input file acessível com o rótulo.

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
- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-015` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0a57c6a815f0545ff0a27a790609c422f0836eb6cf94b276e67f71ad2ad58f19",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0c1a2e2ffa7533210296a4a75fe132d41d757279e517fafa9b48e6a6ea6c9c90

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de pendência usa marcação de apresentação obsoleta: <font color="#333333"> e atributo align="left" em div.content.

Esperado: Código conforme os padrões web, sem elementos/atributos obsoletos; apresentação via CSS.

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

- `DOM inicial` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0c1a2e2ffa7533210296a4a75fe132d41d757279e517fafa9b48e6a6ea6c9c90",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0d874d59ccfa626b3e1e4ab6cfbd72720ad1351463bc1b20b68172785cfdc538

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na mensagem de erro do envio, o botão Fechar é <div class="br-button" role="button" tabindex="0">; nas mensagens de alerta e de sucesso ele é <button type="button">.

Esperado: br-button aplicado ao elemento nativo <button>, como nas outras instâncias da mensagem.

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos 2. click .acao-enviar

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
- `FAM-064da2142c1e` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0d874d59ccfa626b3e1e4ab6cfbd72720ad1351463bc1b20b68172785cfdc538",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2007dce06e5a24d2c41ebe0d5ae0ee3ac181d2a07087aabe678b64013e9e2e45

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A caixa do checkbox 'Todos os avisos' (label::before 24x24) tem fundo branco e borda 1px rgb(204,204,204) sobre fundo branco: contraste 1,61:1 no estado desmarcado.

Esperado: Limite do componente com contraste de pelo menos 3:1 com as cores adjacentes.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos

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

- `computed ::before border 1px solid rgb(204,204,204), bg #fff` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2007dce06e5a24d2c41ebe0d5ae0ee3ac181d2a07087aabe678b64013e9e2e45",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-35363630cf4a308ab0feec3737f10d9ec45aab9a5b7325c214d01ffe85475cd0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <meta http-equiv="refresh" content="300"> recarrega a página a cada 300 s sem controle do usuário; medido: carregada às 07:34:20.8Z, recarregada às 07:39:20.97Z, descartando o estado (mensagem fechada reapareceu, aba e interruptores voltaram ao inicial).

Esperado: Sem atualização automática periódica, ou com meio de o usuário desligar, ajustar ou estender o tempo.

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
  "cardId": "C-35363630cf4a308ab0feec3737f10d9ec45aab9a5b7325c214d01ffe85475cd0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-396bad4e1507259d1d405fcbf27c45ad163ced27c8bda86eb57e68e44655442a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset que agrupa 'Todos os avisos' e os dois switches não tem legend; o título visual 'Avisos sobre o requerimento' é um <p> fora do fieldset, sem associação programática ao grupo.

Esperado: O grupo tem nome programático, p. ex. <legend>Avisos sobre o requerimento</legend> dentro do fieldset.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos

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

- `snapshot Playwright: group sem nome; paragraph 'Avisos sobre o requerimento'` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-396bad4e1507259d1d405fcbf27c45ad163ced27c8bda86eb57e68e44655442a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-42238a2bd1a117b234ba8fe71fc57e245cfcfa63cb4efd54ceb0a341c8caa3a9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O ul com role=tablist tem filhos li que mantêm papel listitem (expostos como listitem dentro de tablist) e os tabs ficam dentro deles; listitem não é filho permitido de tablist e os li ficam fora de uma lista.

Esperado: Os li recebem role="presentation"/"none" (ou os tabs são filhos diretos) para que o tablist contenha apenas tabs.

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

- `snapshot Playwright: tablist > listitem > tab` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-42238a2bd1a117b234ba8fe71fc57e245cfcfa63cb4efd54ceb0a341c8caa3a9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4c5a6b12442361c5f16da6e44d8fbebb6804474b27b66186f385e39613049d7a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: ul[role=tablist] tem filhos li sem papel (li.tab-item), então as abas [role=tab] não ficam diretamente na tablist: [ferramenta citada] aria-required-children (ul), aria-required-parent (#aba-andamento, #aba-documentos) e listitem (li.tab-item).

Esperado: A tablist deve possuir diretamente os tabs (li com role="presentation"/"none" ou tabs como filhos diretos), sem li órfãos de lista.

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
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
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
  "cardId": "C-4c5a6b12442361c5f16da6e44d8fbebb6804474b27b66186f385e39613049d7a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-519be9d95659f384d3dc9070a9d86b0b2d480ef542cad95d3bd1eda4b4ceeb59

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No indicador de etapas, o marcador numérico da etapa 3 'Decisão' (::before com content "3") tem visibility:hidden: não aparece círculo nem número, e o nome acessível é só 'Decisão', enquanto as outras etapas mostram '1', '2' e '4'.

Esperado: Todas as etapas exibem o marcador numérico de forma consistente (1-4), como no componente Step do DS.

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

- `computed ::before visibility: .etapa-decisao hidden; demais visible` → identificador devolvido por ferramenta (sem arquivo)
- `screenshot inicial` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-519be9d95659f384d3dc9070a9d86b0b2d480ef542cad95d3bd1eda4b4ceeb59",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-527410899cf0d504c2633ee75d9709d88e1441aa3c467d8aa8f4d8303036fbe5

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
  "cardId": "C-527410899cf0d504c2633ee75d9709d88e1441aa3c467d8aa8f4d8303036fbe5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-530cffbf8a20154cc7a058dc59f3a9c7d88b7e0de4c51ce1340f929c02e745fe

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
  "cardId": "C-530cffbf8a20154cc7a058dc59f3a9c7d88b7e0de4c51ce1340f929c02e745fe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-53e52d273e00603f30611a382f4be0fed129216b3275f00f51f59513f12dd96d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Switches desligados: trilho (label::before 52x30) branco com borda 1px rgb(204,204,204) e botão (::after 22x22) rgb(204,204,204) sobre branco, contraste 1,61:1.

Esperado: Trilho e indicador de estado com contraste de pelo menos 3:1 com as cores adjacentes.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos

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

- `computed ::before border #ccc; ::after bg #ccc` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-53e52d273e00603f30611a382f4be0fed129216b3275f00f51f59513f12dd96d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-585f74ff81d5cf178930dc8ad156271ec534200db10676df440ab4f4ac76d051

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
  "cardId": "C-585f74ff81d5cf178930dc8ad156271ec534200db10676df440ab4f4ac76d051",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5aac0820d912d5e761ab38e369a8619b81e47488ffa4447e769b4e706c298b5f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões exibem o texto visível 'Ajuda sobre o NUP' / 'Ajuda sobre o prazo', mas aria-labelledby aponta para o tooltip, então o nome acessível é 'Use o NUP para consultar' / 'Prazo em dias corridos' (aria-label ignorado). O nome não contém o rótulo visível.

Esperado: O nome acessível contém o texto visível do rótulo (ex.: 'Ajuda sobre o NUP'); o tooltip pode servir de descrição (aria-describedby).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(1)>button" — <button#tip-protocolo-gatilho> "Ajuda sobre o NUP"
- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(4)>button" — <button#tip-prazo-gatilho> "Ajuda sobre o prazo"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `snapshot Playwright: button "Use o NUP para consultar" com texto 'Ajuda sobre o NUP'` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5aac0820d912d5e761ab38e369a8619b81e47488ffa4447e769b4e706c298b5f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5df0a50eb0600c59ae97c96a31ffc342d7c4e747734f13b9dcc0467ed5020403

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O h2 "Dúvidas Frequentes" usa font-size 16px, fora da escala tipográfica do DS (passo mais próximo 16.8px); o outro h2 da tela ("Enviar Documento Pendente") usa 34.832px, um passo da escala.

Esperado: Tamanho de fonte de um passo da escala Minor Third do DS (por exemplo, 16.8px ou o mesmo nível dos outros h2).

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
- `observation n=1 (token-font-size-off-scale)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5df0a50eb0600c59ae97c96a31ffc342d7c4e747734f13b9dcc0467ed5020403",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5f899354b97e8fa1d6bd923e0f70864682ec81900a053285ebf5e63cec273cee

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar vazio, o campo Tipo de documento só recebe a borda vermelha (.br-input.danger); não há mensagem de erro em texto para ele, nem aria-invalid/aria-describedby. A mensagem geral diz "Corrija os campos indicados" sem nomear o campo; só o campo de arquivo recebe texto de erro.

Esperado: Identificar o campo em erro e descrever o erro em texto, associado ao campo.

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos 2. click .acao-enviar (formulário vazio)

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
- `V-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5f899354b97e8fa1d6bd923e0f70864682ec81900a053285ebf5e63cec273cee",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-623cf009338e267bb546bf53fdfde35c827b560b4e5a4963efb1558369beb4f4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões exibem o texto visível "Ajuda sobre o NUP" / "Ajuda sobre o prazo" (span .rotulo-botao visível, 16.8px), mas aria-labelledby aponta para o tooltip e o nome acessível passa a ser "Use o NUP para consultar" / "Prazo em dias corridos" (o aria-label é ignorado).

Esperado: O nome acessível contém o texto do rótulo visível (o tooltip como descrição, por exemplo aria-describedby).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(1)>button" — <button#tip-protocolo-gatilho> "Ajuda sobre o NUP"
- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(4)>button" — <button#tip-prazo-gatilho> "Ajuda sobre o prazo"

### Unidades candidatas (não são crédito)

- U-11f7df60e6dde66c51322ae71c62272d222ca2512e03a0cb34911ebff70a89d0 — U-06 · sempre · cena 1280x900 · <span> "Ajuda sobre o NUP": Estrato DS · variante texto-alternativo-visivel · COMPARTILHADA pelos dois gatilhos de ajuda do card (NUP e prazo). O texto alternativo do botão só de ícone é um span.rotulo-botao sem a ocultação visual: aparece escrito ao lado do ícone ('Ajuda sobre o NUP', 'Ajuda sobre o prazo', clip auto, largura > 20 px). Os spans dos dois Fechar estão ocultos visualmente (sr-only, 1×1, clip rect(0px, 0px, 0px, 0px)). O nome acessível dos gatilhos continua vindo do balão (aria-labelledby).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [clip] fora de {rect(0px, 0px, 0px, 0px)}. Medido: clip=auto | clip=auto | clip=auto | clip=auto | clip=auto | clip=auto
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d339337e41795ba3e74387a1b20f627317109810cb2fe83ef6b054744b6fb3af — U-06 · sempre · cena 1280x900 · <span> "Ajuda sobre o prazo": Estrato DS · variante texto-alternativo-visivel · COMPARTILHADA pelos dois gatilhos de ajuda do card (NUP e prazo). O texto alternativo do botão só de ícone é um span.rotulo-botao sem a ocultação visual: aparece escrito ao lado do ícone ('Ajuda sobre o NUP', 'Ajuda sobre o prazo', clip auto, largura > 20 px). Os spans dos dois Fechar estão ocultos visualmente (sr-only, 1×1, clip rect(0px, 0px, 0px, 0px)). O nome acessível dos gatilhos continua vindo do balão (aria-labelledby).
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [clip] fora de {rect(0px, 0px, 0px, 0px)}. Medido: clip=auto | clip=auto | clip=auto | clip=auto | clip=auto | clip=auto
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-623cf009338e267bb546bf53fdfde35c827b560b4e5a4963efb1558369beb4f4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-66a86ce6a887708826b108ebb48927a027061ff014f005be0175971128c76d45

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botões de ajuda exibem o rótulo visível "Ajuda sobre o NUP" / "Ajuda sobre o prazo" (span.rotulo-botao visível), mas aria-labelledby aponta para o tooltip e o nome acessível calculado é "Use o NUP para consultar" / "Prazo em dias corridos", que não contém o texto visível.

Esperado: O nome acessível deve conter o texto do rótulo visível (ex.: nome "Ajuda sobre o NUP", com o tooltip como descrição).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(1)>button" — <button#tip-protocolo-gatilho> "Ajuda sobre o NUP"
- "body>main>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(4)>button" — <button#tip-prazo-gatilho> "Ajuda sobre o prazo"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `árvore de acessibilidade: button "Use o NUP para consultar" / button "Prazo em dias corridos"` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-66a86ce6a887708826b108ebb48927a027061ff014f005be0175971128c76d45",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6c971840cbbc674eefca7ba2c840f2f4e06b5c0e72327491953b98e191e880ce

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Input checkbox com role=switch e aria-checked="false" fixo: após ligar o switch, checked=true mas aria-checked continua "false" (estado declarado contradiz o real).

Esperado: Sem aria-checked em input checkbox (ARIA in HTML) ou aria-checked sincronizado com o estado.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos 2. clicar em 'Receber avisos por e-mail'

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>fieldset>div:nth-of-type(2)>div>input" — <input#aviso-email>

### Unidades candidatas (não são crédito)

- U-9de9f00a68a00e1bad77ffb10bc1b13c56081187154b5b10b3476d3c4acd342f — U-07 · S1 · cena 1280x900 · <input#aviso-email>: Estrato DS · variante aria-checked-fixo · COMPARTILHADA pelos dois switches (e-mail, SMS) · coincide com o core 3.7.0 (o pacote não mantém aria-checked; os exemplos oficiais do Switch não trazem o atributo). A marcação traz aria-checked="false" e nada o atualiza: ligado o switch (Space, clique no rótulo ou checkbox principal), checked=true e aria-checked continua "false". Sem predicado na referência (o observável pede ligar o switch); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c31afe8654b526d2a35407e9018b933e68eb99c05e650328414cc03978628b7c — U-14 · S1 · cena 1280x900 · <fieldset#fs-avisos> "Todos os avisos Receber avisos por e-mail Recebe": Estrato G · variante grupo-sem-legend. O fieldset dos avisos (checkbox principal e os dois switches) não tem legend; 'Avisos sobre o requerimento' é um p logo antes dele, sem ligação programática. Sem predicado na referência (as espécies existentes não medem ausência de filho); medido em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `computed: checked=true, aria-checked=false` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6c971840cbbc674eefca7ba2c840f2f4e06b5c0e72327491953b98e191e880ce",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-72be1aca01eb32139f4c50378ed1bd38dfe17d1c5a2dd9544a3d3c137e5ce3d3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cada opção [role=option] da lista do select contém um input radio focável (controle interativo aninhado).

Esperado: Opções de listbox não devem conter descendentes focáveis.

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-028` → identificador devolvido por ferramenta (sem arquivo)
- `F-029` → identificador devolvido por ferramenta (sem arquivo)
- `F-030` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-72be1aca01eb32139f4c50378ed1bd38dfe17d1c5a2dd9544a3d3c137e5ce3d3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-740375d7b3c7d72eb0650ac845ab088149fc8e9ae2b8ece4ceaa9c001f0d04f4

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
  "cardId": "C-740375d7b3c7d72eb0650ac845ab088149fc8e9ae2b8ece4ceaa9c001f0d04f4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-744aa177edc6743537c8cf6696377a43f52dc31bc2f18e2a0d3ab291ce15b87d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de pendência usa o elemento obsoleto <font color="#333333"> e o atributo obsoleto align="left" no div .content para apresentação.

Esperado: Marcação HTML válida, com apresentação apenas em CSS.

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

- `outerHTML de #msg-pendencia` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-744aa177edc6743537c8cf6696377a43f52dc31bc2f18e2a0d3ab291ce15b87d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7bc738c5909419d9e2df22724473f677c030b56b11aa93da0e557e4694287e31

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <meta http-equiv="refresh" content="300"> recarrega a página a cada 5 minutos sem opção de desligar, ajustar ou estender; dados do formulário de envio se perdem.

Esperado: Nenhuma atualização automática periódica, ou controle do usuário para desligar/ajustar/estender o limite.

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

- `document.head: meta http-equiv=refresh content=300` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7bc738c5909419d9e2df22724473f677c030b56b11aa93da0e557e4694287e31",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7d8ecf545368538adaf2e9b367ca4c35f36503c9ee5d31dd34a5034a06402a1b

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
  "cardId": "C-7d8ecf545368538adaf2e9b367ca4c35f36503c9ee5d31dd34a5034a06402a1b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7e289401b0fc13dd9dae99ecb29341c9c3975bff0b421018a5cedef838945aa3

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
  "cardId": "C-7e289401b0fc13dd9dae99ecb29341c9c3975bff0b421018a5cedef838945aa3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8ac06e381c854fedd8b4ef6ece91f3215212aa9acdc46a09bcd297a491618ea4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Selecione o arquivo" tem aria-hidden="true" mas é focável pelo Tab (recebe foco visível); o input file #arquivo-documento está display:none. Leitor de tela encontra um controle focado sem nome nem papel.

Esperado: Controle focável não pode estar em aria-hidden; o acionador do upload deve ser exposto com nome e papel.

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
- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-014` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-021` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-031` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8ac06e381c854fedd8b4ef6ece91f3215212aa9acdc46a09bcd297a491618ea4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9054d917b35c140786e9bcff7129a22c132845888d75c363e9249237b81e074c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de ligar cada switch, checked=true, mas aria-checked continua "false".

Esperado: aria-checked="true" quando o switch está ativado e "false" quando desativado.

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos 2. click label[for=aviso-email] 3. click label[for=aviso-sms]

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
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9054d917b35c140786e9bcff7129a22c132845888d75c363e9249237b81e074c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9c01885d6f34b148a4183d239a707b4c843d43ebfe3ea2f7e7ef27fda6ccea51

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na mensagem de erro do envio, o botão Fechar é um <div role="button" tabindex="0">, enquanto nas mensagens de pendência e de sucesso é <button type="button">. Funciona com Enter e Espaço.

Esperado: Usar o elemento nativo <button> como nas demais instâncias do componente Message.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos 2. clicar em Enviar Documento sem preencher

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

- `outerHTML de #msg-retorno` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9c01885d6f34b148a4183d239a707b4c843d43ebfe3ea2f7e7ef27fda6ccea51",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9d06dfaf1f806f512b1f3b123787dc8cbfa487de8eb9cc8ed13b6d8fb2134239

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao ligar os switches (clique no label), checked passa a true mas aria-checked permanece "false" (#aviso-email e #aviso-sms).

Esperado: aria-checked deve acompanhar o estado (ou ser removido, deixando o estado nativo).

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos 2. click label[for="aviso-email"] / label[for="aviso-sms"]

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

- `V-002` → identificador devolvido por ferramenta (sem arquivo)
- `V-003` → identificador devolvido por ferramenta (sem arquivo)
- `P-02` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9d06dfaf1f806f512b1f3b123787dc8cbfa487de8eb9cc8ed13b6d8fb2134239",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a14005f63e2cb582e040c40a1df6ae2d183c0647159ff68f3e5d703702eea9b0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset dos avisos não tem legend (grupo sem nome na árvore de acessibilidade); o título visual "Avisos sobre o requerimento" é um <p class="titulo-avisos"> fora do fieldset.

Esperado: Agrupar com fieldset + legend contendo o título do grupo.

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

- `árvore de acessibilidade: group sem nome` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a14005f63e2cb582e040c40a1df6ae2d183c0647159ff68f3e5d703702eea9b0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a4c086bf057904fd0356d1deaa51f5e9cb33ce9cf71002aa33de49902f921cfd

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
  "cardId": "C-a4c086bf057904fd0356d1deaa51f5e9cb33ce9cf71002aa33de49902f921cfd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ae3f1dd7e1c854cc947c594ee46be94675009ea0d903ecb4424939663e2304be

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na etapa 3 (Decisão) o marcador numérico do Step (::before content "3") está com visibility:hidden: o círculo com o número não aparece e o nome acessível fica só "Decisão", enquanto a etapa 4, também desabilitada, mostra o marcador "4" (borda rgba(19,81,180,.45)).

Esperado: Todas as etapas do br-step exibem o marcador numérico de forma consistente.

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

- `getComputedStyle(.etapa-decisao,"::before").visibility = hidden` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ae3f1dd7e1c854cc947c594ee46be94675009ea0d903ecb4424939663e2304be",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b0d9a321f9e6b4facfdbc10c066f9be5f739ab0f5e1b3a3a838c08374d969146

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O conteúdo da mensagem usa marcação de apresentação obsoleta: atributo align="left" na div e elemento <font color="#333333"> em volta do texto.

Esperado: HTML conforme o padrão, sem elementos e atributos de apresentação obsoletos; a apresentação fica na CSS.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.1

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
  "cardId": "C-b0d9a321f9e6b4facfdbc10c066f9be5f739ab0f5e1b3a3a838c08374d969146",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b70078421879a3ae999234bf2e97de96a4443db51398a9b7c027cb97187a4a35

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao abrir um item do acordeão (clique ou Enter), o painel fica visível (item com atributo active, ícone angle-up, conteúdo display:block) mas aria-expanded permanece "false".

Esperado: aria-expanded="true" no cabeçalho enquanto o painel controlado está aberto.

Janela: 1280×900 · interações desde o carregamento: 1. click #acc-duvidas .header[aria-controls="acc-duvidas-2"]

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

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `V-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b70078421879a3ae999234bf2e97de96a4443db51398a9b7c027cb97187a4a35",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c4822a6fcf1c2e407e64d5c161deba3fcf8a32ae8d0a6fb163127c2cf79e7bcf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O indicador da etapa 3 "Decisão" (::before com o número "3") tem visibility:hidden; as etapas 1, 2 e 4 exibem o círculo numerado (visibility:visible). Na tela, "Decisão" aparece sem indicador.

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

- `V-003` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c4822a6fcf1c2e407e64d5c161deba3fcf8a32ae8d0a6fb163127c2cf79e7bcf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cc7de0e1caf18a7c4d22433d23f210f2e55842f3feb57fcc5f8cab96001d2508

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar com o Tipo de documento vazio, o campo só ganha a borda vermelha (.br-input.danger, rgb(229,34,7)). Não aparece mensagem de texto do campo e não há aria-invalid nem aria-describedby; o campo de arquivo recebe texto ("Selecione o arquivo do documento."). A mensagem geral só diz "Corrija os campos indicados".

Esperado: Campo em erro identificado e erro descrito em texto, associado ao campo (feedback de erro + aria-invalid/aria-describedby).

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `V-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cc7de0e1caf18a7c4d22433d23f210f2e55842f3feb57fcc5f8cab96001d2508",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cf0cc82e9f13233e6dd433f890bc42aa6558f8806c6e336f45de9c367851643a

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
  "cardId": "C-cf0cc82e9f13233e6dd433f890bc42aa6558f8806c6e336f45de9c367851643a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d2489aed29a4230b2872b81e24af3d0c85570b1a6fd3e191e56e795ae649031d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Enviando sem tipo de documento (obrigatório), a mensagem geral diz 'Corrija os campos indicados', mas o campo Tipo de documento não recebe mensagem de erro nem aria-invalid; com arquivo anexado e tipo vazio, nenhum campo é indicado.

Esperado: O campo obrigatório vazio é identificado e o erro descrito em texto junto a ele, associado programaticamente.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos 2. anexar arquivo no campo Envio de documento 3. clicar em Enviar Documento sem escolher o tipo

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

- `retorno: .retorno-campo vazio; #tipo-documento sem aria-invalid/aria-describedby` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d2489aed29a4230b2872b81e24af3d0c85570b1a6fd3e191e56e795ae649031d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d6689960402f6be39a9565ae37b3cb9f07d796b6810abff51a6529127bfde720

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O h2 "Dúvidas Frequentes" tem font-size 16px/700, valor fora da escala tipográfica do DS e menor que o outro h2 da página (.titulo-formulario 34.832px/400) e até que o título da tabela (16.8px/600).

Esperado: Títulos do mesmo nível com o estilo de h2 da escala tipográfica do gov.br DS.

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

- `getComputedStyle medido` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d6689960402f6be39a9565ae37b3cb9f07d796b6810abff51a6529127bfde720",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e5f5d10da4ad7b738ab262f765115c04821081c7147c54043f16d3f34738cd2f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao abrir um item do accordion o conteúdo fica visível (display:block) e o ícone muda para fa-angle-up, mas aria-expanded continua "false" em todos os cabeçalhos.

Esperado: aria-expanded="true" no cabeçalho do item aberto e "false" nos fechados.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em 'Como envio o documento pendente?'

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

- `computed após clique: aria-expanded=false, #acc-duvidas-1 display:block` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e5f5d10da4ad7b738ab262f765115c04821081c7147c54043f16d3f34738cd2f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e66dc26026dc6aebf60859cfbab50da33547e335d7f61add6cf4b212ca854648

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O ul role="tablist" tem filhos li sem role (papel listitem); as abas role="tab" ficam sem o pai tablist imediato e os li ficam sem pai list ([ferramenta citada]: aria-required-children, aria-required-parent, listitem).

Esperado: Os elementos de apresentação entre tablist e tab com role="presentation"/"none" (ou as abas filhas diretas do tablist).

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
  "cardId": "C-e66dc26026dc6aebf60859cfbab50da33547e335d7f61add6cf4b212ca854648",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ea14f31451e93787294c855f0903260bde2c9f83acebd4ad7be6aa8edf03360d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <meta http-equiv="refresh" content="300">: a página recarrega sozinha a cada 5 minutos, sem controle do usuário (perde dados do formulário de envio).

Esperado: Sem atualização automática periódica, ou com meio de desligar/ajustar/estender o tempo.

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
  "cardId": "C-ea14f31451e93787294c855f0903260bde2c9f83acebd4ad7be6aa8edf03360d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ee9529daf03e33a43052b8f783be5904df1176d17501b23a66e391b9af139d62

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset do grupo de avisos não tem legend nem nome acessível; o título visual "Avisos sobre o requerimento" é um <p> fora do fieldset (16.8px, 600). Na árvore, o "group" fica sem nome.

Esperado: Grupo nomeado pelo título: legend no fieldset (ou aria-labelledby apontando o título).

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
  "cardId": "C-ee9529daf03e33a43052b8f783be5904df1176d17501b23a66e391b9af139d62",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f2d89da5a8873ede03d02ea452e93445687f908121de76ab30cab7ec79b5d362

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão visível 'Selecione o arquivo' tem aria-hidden="true" e continua focável (tabIndex 0, alcançado por Tab). O input file com o rótulo 'Envio de documento' tem display:none, então nenhum controle exposto à tecnologia assistiva representa o upload.

Esperado: Controle focável de upload exposto na árvore de acessibilidade com nome, papel e estado (sem aria-hidden em elemento focável), associado ao rótulo 'Envio de documento'.

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

- `computed: .upload-button aria-hidden=true tabIndex=0; #arquivo-documento display:none` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f2d89da5a8873ede03d02ea452e93445687f908121de76ab30cab7ec79b5d362",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f844e8ba19e0c5b8980781a2423e0e367520765bab1ac168567237c6194e0bf4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao expandir um item do acordeão, o conteúdo aparece (display:block) e o ícone vira angle-up, mas aria-expanded fica "false" no botão expandido.

Esperado: aria-expanded="true" no cabeçalho do item expandido e "false" nos recolhidos.

Janela: 1280×900 · interações desde o carregamento: 1. click #acc-duvidas .item:nth-of-type(1) .header (Como envio o documento pendente?) 2. click 'Quanto tempo leva a análise?'

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f844e8ba19e0c5b8980781a2423e0e367520765bab1ac168567237c6194e0bf4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
