# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 45 cartões únicos · 45 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 45 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 62 sujeitos · 45 cartão(ões) sem evidência verificada · 37 com unidade candidata · estimativa **270 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

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

## C-00418baefedcbda67ef491d33df3094f20d47e0a3ac9736782f7104a6a99d032

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os <li class="tab-item"> mantêm o papel listitem dentro de <ul role="tablist">: o tablist tem filhos não permitidos (aria-required-children), os role=tab ficam sem o tablist como pai (aria-required-parent) e os li ficam sem lista como pai (listitem)

Esperado: Os li em role="presentation"/"none" (ou as tabs como filhos diretos do tablist), para os botões role=tab ficarem dentro do tablist

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
- `FAM-808fe18aed14` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-110075716c7a` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-5e21e4847da0` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-00418baefedcbda67ef491d33df3094f20d47e0a3ac9736782f7104a6a99d032",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-03117072f5b6a7f5d13c3b9644ca255185ab7bceefa2eff19b8d36db38997a21

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O div .content da mensagem de pendência usa o atributo obsoleto align="left"

Esperado: Alinhamento via CSS, sem atributos de apresentação obsoletos

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
  "cardId": "C-03117072f5b6a7f5d13c3b9644ca255185ab7bceefa2eff19b8d36db38997a21",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-061c4b44dda72aa7e5331c73dc2ea7936e9b0359d9f596382985e4ba6a4fe68e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <meta http-equiv="refresh" content="300"> recarrega a página automaticamente a cada 300 s (5 min), sem controle do usuário; o recarregamento perde o estado da aba e do formulário.

Esperado: Nenhuma atualização automática periódica; se precisar atualizar, oferecer um mecanismo controlado pelo usuário.

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
- `F-013` → identificador devolvido por ferramenta (sem arquivo)
- `F-021` → identificador devolvido por ferramenta (sem arquivo)
- `F-028` → identificador devolvido por ferramenta (sem arquivo)
- `F-035` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-061c4b44dda72aa7e5331c73dc2ea7936e9b0359d9f596382985e4ba6a4fe68e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

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

## C-0e79958d2763e1a8ed2e64c0af2ec10b134103b7361a63387c0279e54695f43e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O conteúdo da mensagem de alerta usa o elemento obsoleto <font color="#333333">, dentro de <div class="content" align="left"> (atributo align obsoleto).

Esperado: Marcação HTML conforme, sem elementos/atributos de apresentação obsoletos; a cor e o alinhamento vêm do CSS do componente br-message.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html

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
  "cardId": "C-0e79958d2763e1a8ed2e64c0af2ec10b134103b7361a63387c0279e54695f43e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0ec458b901c5fed09d02285f3ddb4fbeec5b9aee4ee73636daa09c8f6cf18287

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao ativar cada cabeçalho do accordion, o conteúdo (#acc-duvidas-1/2/3) passa a display:block, mas aria-expanded continua "false" nos três botões, aberto ou fechado

Esperado: aria-expanded="true" quando o painel controlado está aberto e "false" quando fechado

Janela: 1280×900 · interações desde o carregamento: 1. click #acc-duvidas .header[aria-controls="acc-duvidas-1"]

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
  "cardId": "C-0ec458b901c5fed09d02285f3ddb4fbeec5b9aee4ee73636daa09c8f6cf18287",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-14617cf1f4f92ec74eb05f44cac68869dda9183c7094cec85d1a412620c3460a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os switches input[type=checkbox][role=switch] têm aria-checked="false" estático: depois de ligados (checked=true), aria-checked continua "false". O Chromium expõe o estado nativo (checked), mas o atributo contradiz o estado

Esperado: aria-checked acompanha o estado nativo, ou é removido para valer o checked nativo

Janela: 1280×900 · interações desde o carregamento: 1. click #aba-documentos 2. click label[for="aviso-email"] 3. click label[for="aviso-sms"]

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

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
- `V-003` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-14617cf1f4f92ec74eb05f44cac68869dda9183c7094cec85d1a412620c3460a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1b422ab831fb2f079ce8bc916d56e047dea0c83d94a064d0ddaf43ab36a2ab22

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O conteúdo da mensagem usa o elemento obsoleto <font color="#333333">, e o div.content usa o atributo obsoleto align="left" (marcação de apresentação no HTML).

Esperado: HTML conforme os padrões web, sem elementos/atributos de apresentação obsoletos; a cor e o alinhamento vêm do CSS/tokens do DS.

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
  "cardId": "C-1b422ab831fb2f079ce8bc916d56e047dea0c83d94a064d0ddaf43ab36a2ab22",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2b19647b6791659423dcfab567837c59b4298ea6500800c26115e2b4b9fada97

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cada opção role="option" da lista de tipos de documento contém um input radio focável ([ferramenta citada] nested-interactive: Element has focusable descendants)

Esperado: Opções de listbox sem descendentes interativos focáveis

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
- `FAM-ed25fd578afc` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2b19647b6791659423dcfab567837c59b4298ea6500800c26115e2b4b9fada97",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-32a2e7e239d720970248f05b77ef0236adadb86cba20be82a4744cde85c55c73

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de ligar o switch "Receber avisos por e-mail", input.checked=true, mas o atributo aria-checked continua "false" (estático). O Chrome expõe o estado nativo (checked), e o atributo fica contraditório.

Esperado: Remover aria-checked do input checkbox nativo ou mantê-lo sincronizado com o estado checked.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click #aba-documentos 3. click label[for=aviso-email]

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

- `evaluate: email {checked:true, ariaChecked:"false"}` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-32a2e7e239d720970248f05b77ef0236adadb86cba20be82a4744cde85c55c73",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3b489bda07a5dbb11c664f481520dd0d7ed338ac0681e11dd4072edd5ee45069

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao clicar em um cabeçalho da sanfona, o painel correspondente abre (display:block, ícone muda para angle-up, item recebe [active]), mas o aria-expanded do botão continua "false" nos três itens.

Esperado: aria-expanded="true" no cabeçalho cujo painel está aberto e "false" nos fechados.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em 'Como envio o documento pendente?' (button[aria-controls=acc-duvidas-1])

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
  "cardId": "C-3b489bda07a5dbb11c664f481520dd0d7ed338ac0681e11dd4072edd5ee45069",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-43aea308b709b5f862d54c7065b518b854ad7ab76ccc60ce8cc03108d38cd71a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset #fs-avisos não tem <legend>; o título visível "Avisos sobre o requerimento" é um <p> fora do fieldset, e o grupo é exposto como "group" sem nome.

Esperado: Fieldset com <legend> "Avisos sobre o requerimento" (ou grupo nomeado programaticamente).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos (#aba-documentos)

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
  "cardId": "C-43aea308b709b5f862d54c7065b518b854ad7ab76ccc60ce8cc03108d38cd71a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-450134f45a74e3e372c70a6fe6fa076f58e56e038fe5db28cdd8e89b320b50a8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao abrir um item do acordeão "Dúvidas Frequentes", o painel aparece (display:block) e o ícone muda para angle-up, mas aria-expanded continua "false" nos três cabeçalhos.

Esperado: aria-expanded="true" no cabeçalho do item aberto e "false" nos fechados.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click "Como envio o documento pendente?" 3. click "Quanto tempo leva a análise?"

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

- `evaluate: [{exp:"false",cdisp:"none"},{exp:"false",cdisp:"block",icon:"fa-angle-up"},{exp:"false",cdisp:"none"}]` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-450134f45a74e3e372c70a6fe6fa076f58e56e038fe5db28cdd8e89b320b50a8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4f1ec823da38665461bbbb7405ebd82111f889e896b55b4536b3ed8d640a211e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões exibem o rótulo visível "Ajuda sobre o NUP" / "Ajuda sobre o prazo" (span.rotulo-botao visível ao lado do ícone), mas o aria-labelledby aponta para o tooltip e sobrescreve o aria-label: o nome acessível passa a ser "Use o NUP para consultar" / "Prazo em dias corridos", que não contém o rótulo visível.

Esperado: O nome acessível contém o texto visível do rótulo (ex.: aria-label/texto 'Ajuda sobre o NUP') e o texto do tooltip é associado como descrição (aria-describedby).

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
  "cardId": "C-4f1ec823da38665461bbbb7405ebd82111f889e896b55b4536b3ed8d640a211e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-525c721c23c88da319bcc3555f7a671412eb4a481576a7a3f6e2565bed78bb75

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O indicador da etapa 3 "Decisão" (::before com o número "3", 40×40) está com visibility:hidden; as etapas 1, 2 e 4 exibem o círculo numerado. O nome acessível da opção fica só "Decisão", e o das outras é "1 Envio…", "2 Análise", "4 Conclusão".

Esperado: Indicador (parte obrigatória do Step) presente e visível em todas as etapas, igual nas quatro instâncias.

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
  "cardId": "C-525c721c23c88da319bcc3555f7a671412eb4a481576a7a3f6e2565bed78bb75",
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

## C-8d75aad6cc7dbbebf26ef782f69fb5f9a1437d1e56d0ca22a66ad497b2c9d702

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de pendência usa o elemento obsoleto <font color="#333333"> para estilizar o texto

Esperado: Marcação conforme os padrões web, sem elementos de apresentação obsoletos (estilo via CSS)

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
  "cardId": "C-8d75aad6cc7dbbebf26ef782f69fb5f9a1437d1e56d0ca22a66ad497b2c9d702",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9caa5d62d98a5597961bbbd10abc80ac93ad66949b7791ab41a275f2387abf85

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões de ajuda mostram o rótulo visível "Ajuda sobre o NUP" / "Ajuda sobre o prazo" (span .rotulo-botao visível, 16,8px), mas aria-labelledby aponta para o tooltip e sobrepõe o aria-label: o nome acessível calculado é "Use o NUP para consultar" / "Prazo em dias corridos", e não contém o texto visível.

Esperado: O nome acessível de cada botão contém o rótulo visível (ex.: "Ajuda sobre o NUP"); o texto do tooltip pode ir em aria-describedby.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html

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

- `playwright snapshot page-2026-11-10T06-42-25-882Z.yml: button "Use o NUP para consultar" > "Ajuda sobre o NUP"` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9caa5d62d98a5597961bbbd10abc80ac93ad66949b7791ab41a275f2387abf85",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9cdbd22ad93442091a73a51c483cd64ce7a20af51f36e5bc30ffaa2c56f0d999

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar o formulário vazio, o campo Tipo de documento só ganha borda vermelha (classe danger em .br-input): não há texto de erro para ele nem aria-invalid; o campo de arquivo recebe a mensagem "Selecione o arquivo do documento." e a mensagem geral só diz "Corrija os campos indicados"

Esperado: O erro do campo Tipo de documento identificado e descrito em texto associado ao campo

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
- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9cdbd22ad93442091a73a51c483cd64ce7a20af51f36e5bc30ffaa2c56f0d999",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a09465730fc26b7cf41cd669dd3782be19fdb7e04d70563aaee66850eb56464d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset dos avisos (checkbox Todos os avisos e switches de e-mail e SMS) não tem legend; o título visual "Avisos sobre o requerimento" é um <p class="titulo-avisos"> fora do fieldset e o grupo é exposto sem nome

Esperado: O título do grupo associado programaticamente (legend do fieldset ou aria-labelledby)

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
  "cardId": "C-a09465730fc26b7cf41cd669dd3782be19fdb7e04d70563aaee66850eb56464d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a14666ece7359cf0f56d3aaeaf1a451a06b67c301e60d80b0a756aaf2bedbf82

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar o formulário vazio, o campo "Tipo de documento" só ganha borda vermelha (.br-input.danger, rgb(229,34,7)); não há mensagem de erro em texto para ele, nem aria-invalid/aria-describedby. O campo de arquivo recebe o texto "Selecione o arquivo do documento."; o resumo diz apenas "Corrija os campos indicados".

Esperado: O campo em erro é identificado e o erro é descrito em texto associado ao campo (mensagem de feedback + aria-describedby/aria-invalid).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos (#aba-documentos) 2. clicar em Enviar Documento (.acao-enviar) sem preencher

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
  "cardId": "C-a14666ece7359cf0f56d3aaeaf1a451a06b67c301e60d80b0a756aaf2bedbf82",
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

## C-aafc42814042b4adf3037ccb9e46973bafe0eb2cfe16ce0fab6ac95bae6a464e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: ul[role=tablist] tem filhos <li> sem role="presentation"/"none": a árvore de acessibilidade expõe listitem entre o tablist e os tabs ([ferramenta citada] aria-required-children no ul, aria-required-parent nos tabs, listitem nos li).

Esperado: Os elementos role="tab" são filhos diretos (na árvore de acessibilidade) do tablist; os <li> intermediários levam role="presentation".

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
  "cardId": "C-aafc42814042b4adf3037ccb9e46973bafe0eb2cfe16ce0fab6ac95bae6a464e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ad40a991758df023c43b1fdcf95e3a81b9633e170a5b8932a759d3dbcf7090fa

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão Fechar da mensagem de erro é <div class="br-button circle small fechar-mensagem" role="button" tabindex="0">; nas mensagens de pendência e de sucesso o mesmo controle é um <button type="button">.

Esperado: br-button implementado com o elemento nativo <button>.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos (#aba-documentos) 2. clicar em Enviar Documento (.acao-enviar) sem preencher

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
- `V-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ad40a991758df023c43b1fdcf95e3a81b9633e170a5b8932a759d3dbcf7090fa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b420042aef062de6133b693a9fe93361f9bf598b35d7e185649eceba84cae3cb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os <li class="tab-item"> estão dentro de <ul role="tablist"> sem role="presentation". Na árvore de acessibilidade aparecem como listitem filhos do tablist (tablist > listitem > tab), e os listitem ficam sem lista pai.

Esperado: Os li recebem role="presentation"/"none" para o tablist ter os tabs como filhos diretos na árvore de acessibilidade.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(1)" — <li> "Andamento"
- "body>main>div>div:nth-of-type(3)>nav>ul>li:nth-of-type(2)" — <li> "Documentos"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `snapshot page-2026-11-10T06-42-25-882Z.yml: tablist [ref=e62] > listitem [ref=e63] > tab "Andamento"` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b420042aef062de6133b693a9fe93361f9bf598b35d7e185649eceba84cae3cb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b693ec00892318ddd2c3810ecf08ba47ca8349e957d92ace01c79c819e112269

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O fieldset que agrupa "Todos os avisos" e os dois switches não tem legend (0 elementos); o título visível "Avisos sobre o requerimento" é um <p> fora do fieldset, e o grupo é exposto sem nome.

Esperado: O título do grupo está associado programaticamente ao fieldset (legend ou aria-labelledby).

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

- `querySelectorAll("#fs-avisos legend").length=0; snapshot: group [ref=e172] sem nome` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b693ec00892318ddd2c3810ecf08ba47ca8349e957d92ace01c79c819e112269",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bf0aaf4cd6439df192be21a14473357ae34e92018909e4c91c0143cea1bfbd3e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No step, o marcador numerado (::before, content "3") do passo Decisão está com visibility:hidden; os outros passos mostram o círculo com o número (1, 2, 4). Decisão aparece sem círculo, e o nome acessível também perde o "3" ("Decisão" × "4 Conclusão")

Esperado: Todos os passos com o marcador numerado visível, como nas outras instâncias do mesmo componente

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
  "cardId": "C-bf0aaf4cd6439df192be21a14473357ae34e92018909e4c91c0143cea1bfbd3e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c3efa1da90622ce96e506263d2ed46bc2b55472fd64cef7ccb78a7241ef97adc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O pseudo-elemento ::before da etapa 3 "Decisão" (marcador circular com o número "3") tem visibility:hidden. As etapas 1, 2 e 4 mostram o marcador (visibility:visible); na tela, a etapa 3 aparece sem círculo nem número, e o nome acessível é só "Decisão" (as outras são "1 Envio", "2 Análise", "4 Conclusão").

Esperado: Todas as etapas do componente step mostram o marcador numérico de forma igual, como no padrão do DS.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html

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

- `getComputedStyle(.etapa-decisao,"::before").visibility=hidden; screenshot page-2026-11-10T06-43-11-050Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c3efa1da90622ce96e506263d2ed46bc2b55472fd64cef7ccb78a7241ef97adc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c9e6af6c8d7e7a981a340a2208169e217091384685e9504af289606d054527b1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Selecione o arquivo" é focável pelo Tab (tabindex 0) mas tem aria-hidden="true"; o input file #arquivo-documento está com display:none. O único controle de upload alcançável fica sem papel/nome para tecnologia assistiva ([ferramenta citada] aria-hidden-focus).

Esperado: O controle focável de seleção de arquivo é exposto à tecnologia assistiva com papel de botão e nome (sem aria-hidden), ou o input file acessível permanece alcançável.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos (#aba-documentos)

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
  "cardId": "C-c9e6af6c8d7e7a981a340a2208169e217091384685e9504af289606d054527b1",
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

## C-d546e4dfd767299d114c05cb26b55b66214acf4b2ac85eaf6b753f9056ce21d6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar o formulário com "Tipo de documento" vazio, o campo só ganha borda vermelha (rgb(229,34,7)): não aparece mensagem de erro em texto para ele nem aria-invalid. O campo de arquivo, por outro lado, recebe a mensagem "Selecione o arquivo do documento.".

Esperado: O campo com erro é identificado em texto (mensagem feedback associada) e marcado programaticamente (aria-invalid), não só pela cor.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click #aba-documentos 3. click .acao-enviar

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

- `screenshot page-2026-11-10T06-47-23-353Z.png` → não encontrado na evidência preservada da execução
- `evaluate: feedbacks só #arquivo-retorno; atributos do input sem aria-invalid` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d546e4dfd767299d114c05cb26b55b66214acf4b2ac85eaf6b753f9056ce21d6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dd25e7d4458c78230592c0bd2afd203b72771c4e84fbf99612bb4c9ab615caad

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões mostram o texto visível "Ajuda sobre o NUP" / "Ajuda sobre o prazo" (span.rotulo-botao dentro do botão), mas aria-labelledby aponta para o tooltip; o nome acessível calculado é "Use o NUP para consultar" / "Prazo em dias corridos", que não contém o rótulo visível

Esperado: O nome acessível contém o texto visível do rótulo (por exemplo nome "Ajuda sobre o NUP", com o tooltip em aria-describedby)

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
  "cardId": "C-dd25e7d4458c78230592c0bd2afd203b72771c4e84fbf99612bb4c9ab615caad",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-de48ceea13044df180853617af7809eff21466b63664065afc3e38d9667a21f5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao escolher uma opção da lista "Tipo de documento" pelo teclado (ArrowDown e Enter), a lista fecha e o foco vai para BODY (document.activeElement=BODY). Fechar a lista com Esc devolve o foco ao input. Reproduzido duas vezes.

Esperado: Depois da escolha, o foco volta ao campo "Tipo de documento" (ou fica no componente).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click #aba-documentos 3. click #tipo-documento 4. press ArrowDown 5. press Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>main>div>div:nth-of-type(3)>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>input" — <input#tipo-documento> "Selecione o tipo do documento pendente"

### Unidades candidatas (não são crédito)

- U-bca12251136dab4326f7e6410c56662fa4e3456dce17341d7d440cef99fbf9e5 — U-09 · S2 · cena 1280x900 · <input#tipo-documento> "Selecione o tipo do documento pendente": Estrato G · variante erro-so-borda. Depois de Enviar documento com o formulário vazio, o campo 'Tipo de documento' só ganha a borda de erro (--danger, 2 px): nenhum texto identifica e descreve o erro, nada o liga ao campo (sem aria-describedby, sem aria-invalid), e a mensagem de retorno diz que há campos com problema sem nomeá-lo. O upload inválido, na mesma tela, tem texto de erro ligado por aria-describedby. O predicado cobre a parte da associação; a ausência de texto está medida em tela-a2/auditoria/conferir-auditoria.mjs.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: atributos-ausentes sustenta em S0, S1, S2 — nenhum destes atributos presente: aria-describedby, aria-invalid. Medido: ausentes: aria-describedby, aria-invalid | ausentes: aria-describedby, aria-invalid | ausentes: aria-describedby, aria-invalid
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `evaluate: {value:"Comprovante de residência", active:"BODY"}` → identificador devolvido por ferramenta (sem arquivo)
- `evaluate: {value:"Documento de identidade", active:"BODY"}` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-de48ceea13044df180853617af7809eff21466b63664065afc3e38d9667a21f5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e535af7bf9614dd5cd92c90ffb7aea9e18d42d0b1828a8e5360cf4ed1d806899

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O trilho do switch (label::before) tem borda rgb(204,204,204) sobre fundo branco, e o pino no estado desligado (label::after) é rgb(204,204,204) sobre o trilho branco: contraste de 1,61:1 na borda do componente e no indicador de estado.

Esperado: A borda do componente e o indicador de estado do switch têm contraste mínimo de 3:1 com as cores adjacentes.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click #aba-documentos

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

- `getComputedStyle(label[for=aviso-sms],"::before").border=1px solid rgb(204,204,204); ::after background rgb(204,204,204)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e535af7bf9614dd5cd92c90ffb7aea9e18d42d0b1828a8e5360cf4ed1d806899",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e56d5ff0cf228a994394d08629e1f5504da89157e077171af939f988749d3eea

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Selecione o arquivo" tem aria-hidden="true", mas é focável pelo Tab e abre o seletor de arquivos. O input file #arquivo-documento está em display:none, então o controle operável fica sem nome nem papel para tecnologia assistiva ([ferramenta citada] aria-hidden-focus)

Esperado: O controle focável não fica oculto da árvore de acessibilidade e expõe nome e papel (por exemplo, botão sem aria-hidden e associado ao rótulo "Envio de documento")

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
- `FAM-9f83cc777c0b` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-014` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e56d5ff0cf228a994394d08629e1f5504da89157e077171af939f988749d3eea",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eb6129128b4c1be94dac1c1cb5fee78e6274755a608641420b78504f04aaf104

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão visível "Selecione o arquivo" do upload recebe foco pelo teclado (tabIndex 0, alcançado com Tab), mas tem aria-hidden="true": a árvore de acessibilidade o expõe como botão sem nome. O input type=file rotulado por "Envio de documento" está com display:none.

Esperado: O controle focável que abre a seleção de arquivo não fica oculto da tecnologia assistiva e tem nome acessível que inclua o rótulo "Envio de documento".

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

- `snapshot page-2026-11-10T06-47-06-024Z.yml: button [ref=e157] sem nome` → identificador devolvido por ferramenta (sem arquivo)
- `focusin log: BUTTON upload-button após Tab` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-eb6129128b4c1be94dac1c1cb5fee78e6274755a608641420b78504f04aaf104",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f040fe6005d3a81ce92bb2a5f6508098cb82bfed27aa9487a4f7e755f8f7ac55

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <meta http-equiv="refresh" content="300">: a página recarrega sozinha a cada 5 minutos, sem controle para desligar, ajustar ou estender (o [ferramenta citada] meta-refresh acusou em todos os estados). A recarga descarta o formulário preenchido.

Esperado: Nenhuma atualização temporizada, ou uma forma de o usuário desligar, ajustar ou estender o limite

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
- `FAM-006f736eb27e` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f040fe6005d3a81ce92bb2a5f6508098cb82bfed27aa9487a4f7e755f8f7ac55",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f1d11551748a5adb123af55bae87c759c8bf8da7bff63a82ae1b202a0589cc0c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O h2 "Dúvidas Frequentes" usa font-size 16px, peso 700, line-height 18.4px, fora da escala tipográfica usada na tela (16.8/20.16/34.832px...). O outro h2 da tela ("Enviar Documento Pendente") usa 34.832px, peso 400; o h2 de Dúvidas fica menor que o título do card (20.16px) e que o parágrafo "Avisos sobre o requerimento" (16.8px, 600)

Esperado: Títulos do mesmo nível com o mesmo estilo tipográfico do padrão (escala de títulos do DS)

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
  "cardId": "C-f1d11551748a5adb123af55bae87c759c8bf8da7bff63a82ae1b202a0589cc0c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fad7036297f8b3bf7324faa30dd915834d280a0247b43e4d1b90f52d61a8e881

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de ativar o switch (checked=true; o texto "Preferência salva." aparece), o atributo aria-checked continua "false".

Esperado: aria-checked="true" quando o switch está ativado e "false" quando desativado.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba Documentos (#aba-documentos) 2. clicar no rótulo label[for=aviso-email] (e, para o SMS, label[for=aviso-sms])

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

- `V-002` → identificador devolvido por ferramenta (sem arquivo)
- `V-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fad7036297f8b3bf7324faa30dd915834d280a0247b43e4d1b90f52d61a8e881",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fb6654d26271970e951530e6a9c3ee747c069e20d34d2b123a9d53d02a06a081

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com a aba Documentos ativa, o link "Ver andamento detalhado" (href="#tab-requerimento") só rola até o componente de abas: a aba Documentos continua selecionada (aba-andamento aria-selected=false) e o andamento não aparece.

Esperado: O link leva ao conteúdo que anuncia e ativa a aba Andamento (ou o texto descreve o destino real).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/acompanhamento.html 2. click #aba-documentos 3. click .detalhe-resumo

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>main>div>div:nth-of-type(2)>div:nth-of-type(3)>a" — <a> "Ver andamento detalhado"

### Unidades candidatas (não são crédito)

- U-d52bfa4da50d0d340109384148635b30570aa1f201639717f326962788ba5680 — U-01 · sempre · cena 1280x900 · <button#aba-andamento> "Andamento": Estrato DS · variante rotulo-aba-pequeno · sorteada (a2-10aee59f9c1b). Os rótulos das duas abas (Andamento, Documentos) computam 14 px (--font-size-scale-base, posto pela folha da tela); a tabela de Tipografia da Tab pede --font-size-scale-up-02 (20,16 px), peso medium. Só o tamanho muda. A auditoria cega não tinha a tabela no universo dela; a medida é da conferência de construção e o predicado a refaz.
  - estados em que a unidade existe: S0, S1, S2
  - predicado de aceitação: estilo-computado sustenta em S0, S1, S2 — alguma propriedade de [font-size] fora de {20.16px}. Medido: font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px | font-size=14px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `evaluate: url #tab-requerimento; sel ["aba-andamento:false","aba-documentos:true"]` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fb6654d26271970e951530e6a9c3ee747c069e20d34d2b123a9d53d02a06a081",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
