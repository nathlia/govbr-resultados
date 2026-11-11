# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 48 cartões únicos · 48 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 48 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 65 sujeitos · 48 cartão(ões) sem evidência verificada · 40 com unidade candidata · estimativa **288 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 13 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-04f95d133cd6c49ed7157ac942c324c2a5615b58c34d6e7840a2fa92ae9729a7

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
  "cardId": "C-04f95d133cd6c49ed7157ac942c324c2a5615b58c34d6e7840a2fa92ae9729a7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-06d3c0ee979f360a515816334e1de1797d0cfcf240849b010ee2822289e616ac

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O conteúdo da mensagem de alerta usa o elemento obsoleto <font color="#333333">, e o contêiner usa o atributo obsoleto align="left": apresentação embutida no HTML.

Esperado: HTML conforme os padrões web, sem elementos/atributos de apresentação obsoletos; cor e alinhamento via CSS do componente br-message.

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

- `DOM: <div class="content" role="alert" align="left"><font color="#333333">` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-06d3c0ee979f360a515816334e1de1797d0cfcf240849b010ee2822289e616ac",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0dca95f4edf1f7ddff06a1a7fe7f2687081c39c8800074c1cde0bcf939fcbdb8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A regra de página ".etapas-requerimento .etapa-decisao::before { visibility: hidden }" esconde o marcador numerado da etapa 3 (Decisão): as outras três etapas mostram o círculo 40×40 com o número (1, 2, 4) e a Decisão aparece só como texto, sem marcador e sem o número no nome acessível ("Decisão" × "4 Conclusão").

Esperado: Todas as etapas do componente Step com o mesmo marcador numerado (o número da etapa visível e no nome, como nas demais).

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
- `captura de tela do navegador` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0dca95f4edf1f7ddff06a1a7fe7f2687081c39c8800074c1cde0bcf939fcbdb8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-16124cae1486cac788035554016ad70540571927601ad931fa05538020d29a73

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Antes do envio, o campo informa apenas "Você também pode arrastar o arquivo até a área acima."; o input não tem accept; um .exe é aceito sem aviso. A restrição "O arquivo deve estar em PDF, JPG ou PNG e ter até 5 MB." só aparece depois de enviar.

Esperado: Formatos e tamanho máximo aceitos informados no texto de apoio antes do preenchimento.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click #aba-documentos 3. upload programa.exe (application/x-msdownload, 1 MiB) em #arquivo-documento

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `P-05` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-16124cae1486cac788035554016ad70540571927601ad931fa05538020d29a73",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1636151184a01d2f6ec535b1d7ef48295a1e6dfa37125e886c1c317e15e7c113

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
  "cardId": "C-1636151184a01d2f6ec535b1d7ef48295a1e6dfa37125e886c1c317e15e7c113",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1dfec3102faed64585853e4c7e035dd061c65e45b28a8283aa43cc5fd7866d8c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <meta http-equiv="refresh" content="300"> recarrega a página a cada 300 s, sem controle do usuário; a recarga desfaz aba, formulário e mensagens.

Esperado: Nenhuma atualização automática periódica; atualização apenas sob controle do usuário.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html

Regra declarada: emag:2.3

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
  "cardId": "C-1dfec3102faed64585853e4c7e035dd061c65e45b28a8283aa43cc5fd7866d8c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1eaf55d0b7fcdc98ee0421d5789d0f59e94b3f3c1dfb51718c97180259a1d07f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset que agrupa "Todos os avisos" e os switches de e-mail e SMS não tem legend nem nome acessível; o título visual "Avisos sobre o requerimento" é um <p> fora do fieldset, não associado ao grupo.

Esperado: Grupo identificado programaticamente: <legend> com "Avisos sobre o requerimento" (ou aria-labelledby).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click #aba-documentos

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
  "cardId": "C-1eaf55d0b7fcdc98ee0421d5789d0f59e94b3f3c1dfb51718c97180259a1d07f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2f229d04708cfba3df6fb0b02598053a39fb9af0fbba08edf6c69d3eaaf98373

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: ul[role="tablist"] tem filhos <li class="tab-item"> sem role="presentation"/"none"; os botões role="tab" ficam sem o pai tablist exigido (aria-required-children, aria-required-parent) e os li ficam com pai sem papel de lista (listitem).

Esperado: Os elementos intermediários entre tablist e tab devem ter role="presentation" (ou os tabs devem ser filhos diretos do tablist).

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
- `V-008 (confirmed)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2f229d04708cfba3df6fb0b02598053a39fb9af0fbba08edf6c69d3eaaf98373",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-319e778fe7b4e22d381f3469267489d697f5f33a100e35d4ce3be9465408fba1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O ícone decorativo <i class="fa fa-trash"> do botão "apagar arquivo" na lista do upload não tem aria-hidden="true" (os demais ícones da tela têm).

Esperado: Ícone decorativo dentro do botão com aria-hidden="true".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click #aba-documentos 3. upload programa.exe em #arquivo-documento

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:#upl-documento .upload-list button i.fa-trash" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-319e778fe7b4e22d381f3469267489d697f5f33a100e35d4ce3be9465408fba1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-345fbbe4f8e4f244ef3a5368f46982c18d2745db63eb9209659480dee191daa2

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
  "cardId": "C-345fbbe4f8e4f244ef3a5368f46982c18d2745db63eb9209659480dee191daa2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3db467c137d79b5f0e8e4ca17f31d47fcd0f6f436c93e1fe0f47d2b3259cfa80

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os inputs checkbox role="switch" têm aria-checked="false" fixo: depois de ligar o switch, input.checked=true e aria-checked continua "false" (estado ARIA contraditório com o estado nativo).

Esperado: aria-checked acompanhar o estado (ou ser removido, deixando o estado nativo checked ser exposto).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba #aba-documentos 2. clicar no rótulo label[for="aviso-email"] (idem label[for="aviso-sms"])

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

- `V-001 (fato não desmentido: checked=true × aria-checked="false")` → identificador devolvido por ferramenta (sem arquivo)
- `V-002 (idem #aviso-sms)` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3db467c137d79b5f0e8e4ca17f31d47fcd0f6f436c93e1fe0f47d2b3259cfa80",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-40c58ed6e690a92b7fc81b93344901e40072b234d2f55bf795aa77c39ff92c6c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset do grupo de avisos não tem <legend>; o título "Avisos sobre o requerimento" é um <p> fora do fieldset. O grupo é exposto sem nome (role group sem nome no snapshot).

Esperado: O título do grupo associado programaticamente (legend no fieldset ou aria-labelledby).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba #aba-documentos

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
- `snapshot do navegador: group sem nome` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-40c58ed6e690a92b7fc81b93344901e40072b234d2f55bf795aa77c39ff92c6c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-42f9d22e00e66a6e2a05ce64ce78fd4c29591eb6e3941dfe606b0409d4c485ec

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão Fechar da mensagem de erro é um <div class="br-button" role="button" tabindex="0">, enquanto a mensagem de pendência e a de sucesso usam <button>. Funciona com Enter e com Espaço.

Esperado: Usar o elemento <button> para o botão Fechar (cada elemento HTML para o fim a que se destina).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click #aba-documentos 3. click .acao-enviar

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>div:nth-of-type(3)>div:nth-of-type(1)" — <div> "Fechar"

### Unidades candidatas (não são crédito)

- U-d65d33743a008a7f5d119878bc6ad4968ada1c800c1a8db19698898903af8e1f — U-11 · S2 · cena 1280x900 · <div> "Fechar": Estrato G · variante fechar-div. O botão Fechar da mensagem de retorno é <div class="br-button circle small" role="button" tabindex="0"> com Enter e Espaço tratados, no lugar do <button> do exemplo oficial; continua operável por teclado e nomeado — o defeito é só o elemento. O Fechar da mensagem de pendência é <button>. Mesma variante da A-06 da tela A (ver E-03).
  - estados em que a unidade existe: S2
  - predicado de aceitação: classe-no-elemento sustenta em S2 — o próprio <div> carrega a classe .br-button. Medido: <div class="br-button circle small fechar-mensagem">
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
  "cardId": "C-42f9d22e00e66a6e2a05ce64ce78fd4c29591eb6e3941dfe606b0409d4c485ec",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4503f934728262280c9e5c0e6645c993a82df90511600a77bd64a2cac0704227

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
  "cardId": "C-4503f934728262280c9e5c0e6645c993a82df90511600a77bd64a2cac0704227",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-481f71b80fbc54f775ce4637d96302ed092d36382e74fa897e71d018c14a6048

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões mostram os rótulos visíveis "Ajuda sobre o NUP" e "Ajuda sobre o prazo", mas aria-labelledby aponta para os tooltips, então os nomes acessíveis passam a ser "Use o NUP para consultar" e "Prazo em dias corridos". Esses nomes não contêm o texto visível, e o aria-label foi sobrescrito.

Esperado: O nome acessível deve conter o texto visível do rótulo (por exemplo, "Ajuda sobre o NUP"); o tooltip pode ficar como descrição (aria-describedby).

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
  "cardId": "C-481f71b80fbc54f775ce4637d96302ed092d36382e74fa897e71d018c14a6048",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-563b6dc18f08ae45fdb2f90265c1aebff02e516f1c9bc2488852d369b2ea9ef1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao acionar um item do acordeão, o conteúdo (#acc-duvidas-N) passa a display:block, mas o aria-expanded do botão continua "false" (medido nos itens 1 e 2).

Esperado: aria-expanded="true" no botão enquanto o painel controlado estiver expandido e "false" quando recolhido.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click button[aria-controls="acc-duvidas-1"]

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-563b6dc18f08ae45fdb2f90265c1aebff02e516f1c9bc2488852d369b2ea9ef1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5737909272a8d8f5a04e3ee5252a6e57412c4b6bc3d867f6f4eee725a6f84051

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os itens da Tab usam font-size 14px.

Esperado: Especificação do componente Tab: rótulo em --font-size-scale-up-02 (20.16px) ([regra citada], unidade de especificação).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html

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
- `V-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5737909272a8d8f5a04e3ee5252a6e57412c4b6bc3d867f6f4eee725a6f84051",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-590e4c839694962f2b9f539ac9076058aa072bd5831fc03c36b8cf0aa7807003

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar sem tipo de documento, o campo só recebe a classe danger (borda vermelha); não há mensagem de erro em texto para o campo nem aria-invalid (nome "Tipo de documento", descrição vazia, invalid=false). A mensagem geral diz apenas "Corrija os campos indicados".

Esperado: O campo em erro deve ser identificado e o erro descrito em texto, associado ao campo (como ocorre no upload com #arquivo-retorno).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click #aba-documentos 3. click .acao-enviar

Regra declarada: [regra citada]

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
- `V-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-590e4c839694962f2b9f539ac9076058aa072bd5831fc03c36b8cf0aa7807003",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5c977f038b51af5acc633dcfa0474ed385d920d8a883ffd984dd62e638828005

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: h2 "Dúvidas Frequentes" com font-size 16px declarado pela página, fora da escala Minor Third (passo mais próximo 16.8px); o outro h2 da tela ("Enviar Documento Pendente") usa 34.832px.

Esperado: Tamanho de fonte de um passo da escala do DS (ex.: 16.8px, 20.16px, ...).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html

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
- `V-005` → identificador devolvido por ferramenta (sem arquivo)
- `O-01` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5c977f038b51af5acc633dcfa0474ed385d920d8a883ffd984dd62e638828005",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5da391111210bd51ccfcbe7f9bd3074a33884e14ee9bdd9fd3ff2564cf837caa

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
  "cardId": "C-5da391111210bd51ccfcbe7f9bd3074a33884e14ee9bdd9fd3ff2564cf837caa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5fb60834f5e8350614db0f803c2a5e7cf7ab8a51ba812bfef43fa5db7062a71e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O conteúdo da mensagem de pendência usa marcação de apresentação no HTML: <div class="content" align="left"><font color="#333333">...</font>.

Esperado: Apresentação feita por CSS, separada da camada de conteúdo (sem <font> nem align).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html

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
  "cardId": "C-5fb60834f5e8350614db0f803c2a5e7cf7ab8a51ba812bfef43fa5db7062a71e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-655a2cbf8e36a8f152d2e1c833d8c84d2c386115801dd4a9547e7fb601d6449a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar com "Tipo de documento" vazio e arquivo selecionado, a mensagem geral manda corrigir "os campos indicados", mas o campo só ganha borda vermelha (classe danger, borda 2px rgb(229,34,7)). Não há texto de erro no campo, nem aria-invalid, nem aria-describedby. Já o campo de arquivo, em erro, recebe o texto "Selecione o arquivo do documento.".

Esperado: O campo com erro deve ser identificado e descrito em texto (mensagem de feedback junto ao campo, associada por aria-describedby, com aria-invalid="true"), não apenas pela cor.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos 2. anexar comprovante.pdf ao campo de arquivo 3. clicar em Enviar Documento sem escolher o tipo

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

- `#sel-tipo-documento .br-input.danger; #sel-tipo-documento .feedback = 0` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-655a2cbf8e36a8f152d2e1c833d8c84d2c386115801dd4a9547e7fb601d6449a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-680405c27a9f694c15c3e2a8c1b7df6ab40b9e1b2da7991abe75eba926a04783

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao expandir um item do acordeão (por clique ou Enter), o conteúdo aparece (display:block, ícone fa-angle-up), mas aria-expanded continua "false" nos três cabeçalhos.

Esperado: aria-expanded="true" no cabeçalho cujo painel está aberto e "false" nos fechados.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em "Como envio o documento pendente?" 2. clicar em "Quanto tempo leva a análise?" 3. focar "Como recebo os avisos do requerimento?" e pressionar Enter

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

- `estado medido: [aria-expanded=false, display=block] no item aberto` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-680405c27a9f694c15c3e2a8c1b7df6ab40b9e1b2da7991abe75eba926a04783",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-688d5501e011bec219e485ff14588e5e0de832be500fde856ce36d0918481459

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão visível e focável "Selecione o arquivo" tem aria-hidden="true"; o input file rotulado "Envio de documento" tem display:none. O controle de upload recebe foco pelo Tab, mas fica sem nome nem papel para a tecnologia assistiva ([ferramenta citada] aria-hidden-focus).

Esperado: O controle focável de seleção de arquivo deve estar exposto à tecnologia assistiva, com nome e papel (sem aria-hidden em elemento focável).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click #aba-documentos

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
- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-045` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-688d5501e011bec219e485ff14588e5e0de832be500fde856ce36d0918481459",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7115a834c3f2d6609cdca54c579a66fbd0f95167d6233591c47d63a33de7fa4e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões exibem o texto visível "Ajuda sobre o NUP" / "Ajuda sobre o prazo" (span.rotulo-botao dentro do botão, visível, 16,8px), mas aria-labelledby aponta para o tooltip, e o nome acessível calculado é "Use o NUP para consultar" / "Prazo em dias corridos", que não contém o rótulo visível.

Esperado: O nome acessível deve conter o texto do rótulo visível (ex.: nome "Ajuda sobre o NUP"; o texto do tooltip como descrição via aria-describedby).

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

- `snapshot do navegador: button "Use o NUP para consultar" contendo texto "Ajuda sobre o NUP"` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7115a834c3f2d6609cdca54c579a66fbd0f95167d6233591c47d63a33de7fa4e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-719fce6cfdf72d0e71ab7861ac8db6010e78d9e8701cde15bd3204e8401c44cc

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
  "cardId": "C-719fce6cfdf72d0e71ab7861ac8db6010e78d9e8701cde15bd3204e8401c44cc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-727ad7864317105c901d58919e1f8443587fca735caed62344c600a48577a19e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O input type=file (#arquivo-documento), único associado ao rótulo "Envio de documento", está com display:none. O único controle que recebe foco, o botão "Selecione o arquivo", tem aria-hidden="true" e tabIndex 0. Resultado: um controle focável e operável fica fora da árvore de acessibilidade, sem nome nem papel, e o rótulo aponta para um campo inalcançável.

Esperado: O controle de seleção de arquivo que recebe o foco deve estar exposto à tecnologia assistiva, com papel e nome ("Envio de documento"/"Selecione o arquivo"), e associado ao rótulo e ao texto de apoio.

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

- `.upload-button: aria-hidden="true", tabIndex 0; #arquivo-documento display:none` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-727ad7864317105c901d58919e1f8443587fca735caed62344c600a48577a19e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-85807e39e44f1b13db4c80d099e050cbb3bdf0cf88c397ae88e5de4ca4dbaf6e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset que agrupa "Todos os avisos" e os dois switches não tem legend. O título visual "Avisos sobre o requerimento" é um <p> fora do fieldset, sem ligação programática com o grupo (o grupo aparece sem nome na árvore).

Esperado: O grupo deve ter nome programático: legend "Avisos sobre o requerimento" (ou aria-labelledby apontando para o título).

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

- `árvore: group [ref=e163] sem nome` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-85807e39e44f1b13db4c80d099e050cbb3bdf0cf88c397ae88e5de4ca4dbaf6e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-87000cc516eb7ac781bfd36474c1abdea5b134d6ed4d329891eeb7929d6a9b27

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No estado desligado, o switch tem trilho com borda rgb(204,204,204) sobre fundo branco e botão (::after) rgb(204,204,204) sobre trilho branco: contraste de 1,61:1.

Esperado: Contraste de pelo menos 3:1 para as partes visuais que identificam o switch e seu estado.

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

- `label::before border rgb(204,204,204), bg rgb(255,255,255); label::after bg rgb(204,204,204)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-87000cc516eb7ac781bfd36474c1abdea5b134d6ed4d329891eeb7929d6a9b27",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-89a14b5231160b8852384e18cc238864db327e005508a1bd3d6d3fb53a1e909b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <meta http-equiv="refresh" content="300"> recarrega a página a cada 5 minutos sem aviso nem forma de desativar/estender. Observado: às 08:01:06 (300 s após o carregamento) a página recarregou sozinha (performance navigation type="reload"), desfazendo a aba Documentos selecionada, o tipo e o arquivo escolhidos no formulário e a mensagem de pendência fechada.

Esperado: Sem atualização automática temporizada; ou o usuário pode desligar, ajustar ou estender o limite antes que ele expire.

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
- `V-006 (confirmed)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-89a14b5231160b8852384e18cc238864db327e005508a1bd3d6d3fb53a1e909b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8abbaf28b7a2b8fb51b48692bff1363c09dbb44f41fa98e2c303de7b1282fa9c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <meta http-equiv="refresh" content="300"> recarrega a página a cada 300 s sem controle do usuário. Medido: após ~5 min a navegação passou a type "reload"; a aba Documentos selecionada, a mensagem fechada e o formulário em edição voltaram ao estado inicial.

Esperado: Nenhuma atualização automática periódica; se necessária, o usuário deve poder desligar, ajustar ou estender o tempo, sem perda do que já preencheu.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:2.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "head>meta:nth-of-type(3)" — <meta> · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-03bd1dc9d2fbeab7ae978c8648dcb43b852aa1d342169243f85f89febf0e92ec — U-10 · sempre · cena 1280x900 · <meta>: Estrato G · variante recarga-periodica. O head tem <meta http-equiv="refresh" content="300">, sem url e sem aviso: a página se recarrega sozinha a cada 300 s (observado aos 300,1 s numa janela de 360 s em contexto próprio, plano § 14.5). A recarga devolve a página ao estado inicial (aba Andamento, select vazio, switch desligado). A âncora é o próprio meta; a existência dele é o defeito. Sem predicado na referência; medido em tela-a2/auditoria/observar-360.mjs e tela-a2/conferir-construcao.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `performance.getEntriesByType("navigation")[0].type === "reload" às 08:28:50Z (carga às 08:23:40Z)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8abbaf28b7a2b8fb51b48692bff1363c09dbb44f41fa98e2c303de7b1282fa9c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-90cf4c1e647b4110fc63b75167e1d37f64be19f838edf97f184ba07cea65386d

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
  "cardId": "C-90cf4c1e647b4110fc63b75167e1d37f64be19f838edf97f184ba07cea65386d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-90e12e33de9bdcea43c11f524a44c7e00426d7fa16b30979889bc1c34e73e607

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
  "cardId": "C-90e12e33de9bdcea43c11f524a44c7e00426d7fa16b30979889bc1c34e73e607",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-90fe0a5d8c186fadb782177976091bb79069675eebb79db84f453d0032a221a2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os dois h2 da página têm estilos diferentes: "Enviar Documento Pendente" usa 34,832px/400 (escala do DS para h2), e "Dúvidas Frequentes" usa 16px/700, menor até que títulos que não são cabeçalho (ex.: "Avisos sobre o requerimento", 16,8px/600).

Esperado: Cabeçalhos do mesmo nível com o mesmo estilo tipográfico do Design System, preservando a hierarquia visual.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos

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

- `computed font-size/weight medidos` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-90fe0a5d8c186fadb782177976091bb79069675eebb79db84f453d0032a221a2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-961a301f7e51de632d16b187dd482495b1a49c64f9cb1e5a83b8006ca1da5742

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões exibem o texto visível "Ajuda sobre o NUP" e "Ajuda sobre o prazo", mas aria-labelledby aponta para o tooltip e o nome acessível passa a ser "Use o NUP para consultar" e "Prazo em dias corridos" (o aria-label é ignorado).

Esperado: O nome acessível deve conter o texto visível do rótulo (ex.: "Ajuda sobre o NUP"); o texto do tooltip pode ir em aria-describedby.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html

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
  "cardId": "C-961a301f7e51de632d16b187dd482495b1a49c64f9cb1e5a83b8006ca1da5742",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a1f2045d631d443b1323a8cbf08d9f68c05642e8c6bc883619fa303813e9446a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Antes do envio o campo mostra só "Envio de documento" e "Você também pode arrastar o arquivo até a área acima."; o input não tem accept. A restrição "O arquivo deve estar em PDF, JPG ou PNG e ter até 5 MB." só aparece depois de enviar um arquivo recusado (.exe).

Esperado: Formatos aceitos e tamanho máximo informados antes da seleção do arquivo e associados ao campo.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba #aba-documentos 2. escolher Comprovante de residência 3. selecionar arquivo programa.exe 4. clicar em Enviar Documento

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

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `V-004 (sem predicado para 3.3.2; P-02 resolvida)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a1f2045d631d443b1323a8cbf08d9f68c05642e8c6bc883619fa303813e9446a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b1106f40cae08dbd681418e0e052710ba07f59fb8a909340d7950be6b6d244de

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de ativar o switch, input.checked=true, mas aria-checked continua "false" (a tecnologia assistiva anuncia o estado desligado).

Esperado: aria-checked="true" quando ativado e "false" quando desativado, acompanhando o estado nativo.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click #aba-documentos 3. click label[for="aviso-email"] (ou label[for="aviso-sms"])

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b1106f40cae08dbd681418e0e052710ba07f59fb8a909340d7950be6b6d244de",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c22de650be8c9655316859745733e26639a741904a1eab321ae46c62b1858377

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na etapa 3 ("Decisão"), o ::before com o número "3" está com visibility:hidden: o círculo numerado não aparece e o nome acessível é só "Decisão". As outras instâncias mostram o círculo de 40x40 px com o número ("1 Envio", "2 Análise", "4 Conclusão").

Esperado: Todas as etapas do br-step devem exibir o indicador numerado de forma consistente, inclusive a etapa 3.

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

- `getComputedStyle(.etapa-decisao,"::before").visibility = "hidden"; nas demais = "visible"` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c22de650be8c9655316859745733e26639a741904a1eab321ae46c62b1858377",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c9608313266274e4925c2bbcb5b36b83fcd63901a1664d8d12d8d8f915c80980

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar o formulário sem tipo de documento, o campo só ganha borda vermelha (classe danger, border rgb(229,34,7)); não há texto de erro junto ao campo, nem aria-invalid nem aria-describedby; a mensagem geral diz apenas "Corrija os campos indicados" sem nomear o campo. O campo de arquivo, ao contrário, recebe texto de erro.

Esperado: Identificar o campo em erro e descrever o erro em texto (ex.: "Selecione o tipo do documento"), associado ao campo (aria-describedby/aria-invalid).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba #aba-documentos 2. clicar em Enviar Documento (.acao-enviar) com o formulário vazio

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
- `V-003 (fato não desmentido)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c9608313266274e4925c2bbcb5b36b83fcd63901a1664d8d12d8d8f915c80980",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d37014c01cdb4788dd5beba0313acdf592c9616e56e0725d0cc5714ec825a6ee

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: ul[role=tablist] tem como filhos li (role listitem implícito) entre o tablist e os botões role=tab; [ferramenta citada]: aria-required-children no ul, aria-required-parent em #aba-andamento/#aba-documentos e listitem nos li.

Esperado: Os elementos role=tab devem ser filhos (owned) diretos do tablist; os li devem ter role="presentation"/"none" ou ser removidos.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html

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
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d37014c01cdb4788dd5beba0313acdf592c9616e56e0725d0cc5714ec825a6ee",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-db4f644efad0d0ffa6007aaccfc433b0a5629c3bde2b31955f7b03b113a29873

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A regra de página ".titulo-duvidas { font-size: 16px }" deixa o h2 "Dúvidas Frequentes" com 16px/700, menor que o título do card (div 20,16px) e quase igual ao texto do corpo, enquanto o outro h2 da tela ("Enviar Documento Pendente") tem 34,8px/400 pela tipografia do DS.

Esperado: Títulos do mesmo nível com a mesma escala tipográfica do DS (h2 como em h2.titulo-formulario).

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

- `captura de tela do navegador` → identificador devolvido por ferramenta (sem arquivo)
- `estilos calculados` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-db4f644efad0d0ffa6007aaccfc433b0a5629c3bde2b31955f7b03b113a29873",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dc220d22f99fbf284bcf7297ed95a3f40b5b8ad74e73272458fd87b3af0c0e5f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cada role="option" da lista "Tipo de documento" contém um input radio focável (nested-interactive). Com Tab o foco entra no radio dentro da opção, onde Espaço e Enter não selecionam a opção.

Esperado: Opções de listbox sem descendentes focáveis/interativos.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba #aba-documentos 2. clicar no botão Exibir lista

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
- `V-009 (confirmed)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dc220d22f99fbf284bcf7297ed95a3f40b5b8ad74e73272458fd87b3af0c0e5f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e64c3f86c8cd3c1f26eb56446e9a609d44e2eea6a9d2a94929b8b699a57e4542

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
  "cardId": "C-e64c3f86c8cd3c1f26eb56446e9a609d44e2eea6a9d2a94929b8b699a57e4542",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ef10ea854d25b470293de98ea7b345abdccb314cbac6d616eb780ee27c929c5d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na etapa 3 "Decisão", o indicador (::before com conteúdo "3", 40×40 px) tem visibility:hidden: não aparece o círculo numerado. As etapas 1, 2 e 4 exibem o indicador (visibility:visible).

Esperado: Indicador (parte obrigatória do Step) presente e visível em cada etapa, como nas demais instâncias.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html

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
- `V-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ef10ea854d25b470293de98ea7b345abdccb314cbac6d616eb780ee27c929c5d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f2571fbea592b630c094d31a42bd5c3c4ee9e4ea9bf4187549bbe90d3ae30a7a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao ativar um cabeçalho do acordeão (clique ou Enter), o painel controlado passa a display:block e o ícone muda para fa-angle-up, mas o botão mantém aria-expanded="false".

Esperado: aria-expanded="true" no cabeçalho enquanto o painel controlado estiver visível (e "false" quando fechado).

Janela: 1280×900 · interações desde o carregamento: 1. clicar em button[aria-controls="acc-duvidas-1"]

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

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `V-005 (fato não desmentido)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f2571fbea592b630c094d31a42bd5c3c4ee9e4ea9bf4187549bbe90d3ae30a7a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f89c979079deb5b42c1015eb1473721ce68dfcb41097b26e5626e4b615ae5c1f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O conteúdo da mensagem de pendência usa marcação de apresentação obsoleta: <div class="content" role="alert" align="left"><font color="#333333">…</font>.

Esperado: Marcação conforme os padrões web, sem elementos/atributos de apresentação obsoletos (cor e alinhamento via CSS do DS).

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

- `DOM do navegador` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f89c979079deb5b42c1015eb1473721ce68dfcb41097b26e5626e4b615ae5c1f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fb326fefe1be3e6ada3382125bf47a942f0d52f4d83531ceff3f450ccb5eed67

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Selecione o arquivo" tem aria-hidden="true" mas é focável (tabIndex 0) e é o único controle operável do campo de arquivo; o input#arquivo-documento está com display:none. Leitores de tela recebem foco num elemento oculto da árvore de acessibilidade, sem nome nem papel.

Esperado: Controle focável não pode ter aria-hidden="true"; o botão que abre a seleção de arquivo deve ser exposto com nome e papel (ou o input file acessível deve receber o foco).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba #aba-documentos

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
- `V-007 (confirmed)` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009 F-057` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fb326fefe1be3e6ada3382125bf47a942f0d52f4d83531ceff3f450ccb5eed67",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fb7749514b59717f10e0d69260f70bb73cd6df8f059a935c29ec1f58b15a1b17

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A caixa de seleção desmarcada de "Todos os avisos" (label::before, 24x24) tem borda de 1px rgb(204,204,204) sobre fundo branco: contraste de 1,61:1.

Esperado: A borda que identifica a caixa de seleção deve ter contraste de pelo menos 3:1 com o fundo.

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

- `label[for=avisos-todos]::before border 1px solid rgb(204,204,204)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fb7749514b59717f10e0d69260f70bb73cd6df8f059a935c29ec1f58b15a1b17",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
