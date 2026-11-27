# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 42 cartões únicos · 42 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 42 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 77 sujeitos · 42 cartão(ões) sem evidência verificada · 34 com unidade candidata · estimativa **252 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

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

**Este plano navega (D-60):** cada janela tem uma cena por SEGMENTO, capturada na última parada dele (1280x900@lista-exibir = /pnip-f2/portal-mpa/processos · 1280x900@filtro-escolhido = /pnip-f2/portal-mpa/processos). Quando o seletor de uma alegação resolve em mais de um segmento, o cartão lista os sujeitos de cada um e a decisão precisa dizer em `"cena"` de qual segmento a alegação fala (pelos passos declarados e pela evidência). Só os sujeitos dessa cena contam; os dos outros segmentos não são alegação.

Um átomo = um defeito. subjects identifica cada elemento alegado; unitIds contém somente alternativas semanticamente aceitas.
Cada átomo/elemento vale no máximo uma detecção. Divida alegações compostas; contabilize também as partes falsas.
Duplicatas revisadas: no átomo repetido, acrescente duplicateOf: { "cardId": "C-...", "atomId": "..." }. A citação continua avaliada separadamente.

**Vínculo de revisão (exceção declarada):** quando a alegação está certa sobre uma unidade que a ancoragem não ofereceu (ausência global ancorada em <html>/body, host no lugar do controle interno, participante relacionado, transição), acrescente ao átomo `"links"`: [{ "contrato": "vinculo-revisao-1.0.0", "unitId", "subjects", "scene", "state" (estado medido), "relation" (ausencia-global | host-interno | participante-relacionado | transicao), "evidence", "justification", "reviewer" (você), "binding" (o do cartão) }]. Nada cria vínculo por você; o scorer recusa outra cena, estado não medido, relação que não cabe na árvore medida, falta de evidência.

## C-06a1e8b0eacae8a98957079595075bea74d468516035af9cc6be11405dd1808e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A inicial "U" do avatar é texto branco rgb(255,255,255) sobre laranja rgb(255,140,0), com 24,19px de fonte. Contraste medido: 2,33:1.

Esperado: Contraste mínimo de 3:1 para texto grande (4,5:1 se não for grande).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f0bbe1f6df585e502573b7d3468bcb533f0931fea09867850d00551e25bbc92c — F2-02 · inicial · cena 1280x900@lista-exibir · <span> "U": Avatar de letra no cabeçalho ("U"): o conteúdo interno do avatar não tem a classe `content` (o span tem só bg-orange-vivid-30 e text-pure-0). Sem ela, o avatar vira um retângulo laranja estreito (cerca de 18×40 px, border-radius 0, display block) com a letra encostada, em vez da superfície circular de 40×40 com a letra centralizada. No Avatar, a classe `content` é propriedade obrigatória do conteúdo interno.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [border-top-left-radius] fora de {50%}. Medido: border-top-left-radius=0px | border-top-left-radius=0px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f32728bd3096ade8d258f79d8ef9147d7dff660a655d68daa2a39a27478c5549 — D-14 · sempre · cena 1280x900@filtro-escolhido · <span> "U": Inicial do avatar "U" branco sobre #ff8c00 = 2,33:1 (24,2 px/700). **exposto** (casco; B-14, C-07). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-06a1e8b0eacae8a98957079595075bea74d468516035af9cc6be11405dd1808e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0ac91c6546dc0bb479c2664b2d076b42c8dd3c01b028fea807257110c48ca452

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão do usuário mostra "U Olá, Usuária de Teste, SUPERVISOR", mas aria-label="Avatar com dropdown" substitui esse texto como nome acessível.

Esperado: O nome acessível contém o texto visível e descreve a função (ex.: "Menu do usuário: Usuária de Teste, SUPERVISOR").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0ac91c6546dc0bb479c2664b2d076b42c8dd3c01b028fea807257110c48ca452",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-117370ccdc293c074b56594019d281737a1297ba7de87673da49d30d174a5c19

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: As opções da lista de filtro aberta ("Últimos 7 dias" etc.) são só <label> dentro de div.br-radio, sem input radio, sem tabindex e sem role: o teclado não alcança nem seleciona nenhuma delas.

Esperado: As opções são controles focáveis (radio/option) e selecionáveis pelo teclado.

Janela: 1280×900 · interações desde o carregamento: 1. click .br-tag.interaction.bg-pure-0 "Aberto há"

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@filtro-escolhido)

### Sujeitos

- "unresolved:.br-list.d-block .br-radio label" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-117370ccdc293c074b56594019d281737a1297ba7de87673da49d30d174a5c19",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-14fa123035e7c45cb20e6a84a7457313a0669d0d4e82d37f2e2c0ce4c52f48b1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span class="br-tag interaction"> que abrem a lista com o clique do mouse, mas têm tabIndex -1. Na sequência de Tab, o foco vai da última aba direto ao campo de pesquisa.

Esperado: Os gatilhos dos filtros são focáveis e acionáveis por Enter/Espaço.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"


### Unidades candidatas (não são crédito)

- U-03b70c230745fcab911019bee917fc96d455c9b0bdabab5cc53d0f3100bfabc9 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Método de pesca": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-06d7dd4e946fa87e21ce594f8e6c1233505ee0876ebc653085da3c8b1e10d1b1 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Tipo de processo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3a3538d0cc7b9277134f477977b3381a3624d51a2e8e94b14dffebc79bc4c6e1 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Status": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-619c46fab5dfba19c9947e32ffb358b6c04c3ae24b85ef112ef7a70f97ec8ede — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Aberto há": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a268574606c05cb9ce58a109002e76255bfa6505409b9119e3da33a897bcb203 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Espécie alvo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d339cacb503d4668ae18ec3b1745062bb4f08bba29b990b09a1619276a49d5be — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Petrecho": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-14fa123035e7c45cb20e6a84a7457313a0669d0d4e82d37f2e2c0ce4c52f48b1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-17101bbd02dde309e5959645df34475b524ef588a74aa061781d70faa052b01a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: As caixas de seleção das linhas (6 na aba Aguardando análise) não têm label, aria-label nem title; o nome acessível fica vazio.

Esperado: Cada caixa tem um nome que identifica o processo, por exemplo "Selecionar processo 00000.000011/2026-00".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>


### Unidades candidatas (não são crédito)

- U-0b07a906de8ee883e56577a27d50c60c9005ba66b91eb3c9a80e2096780b9c71 — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-39c89d110b32fdec6d3716ed052fadc05978f031a91a5cb62154a54156191b53 — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6dd99ed682f9a1061f097c607ba0ff034fad5611cae3b56d69cc1c86c9664c65 — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-837b8eec80f0554037df133f4778f01145b797d5399e22ed4602850236d5292f — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d97754c6db40f8145fd723f3490c7b0a5233ce20f9d29be65270d11614f79c32 — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f81b94823997f73cdbdb13738bfc9f1340348d311ca850faeff9c7b848fd04ee — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-17101bbd02dde309e5959645df34475b524ef588a74aa061781d70faa052b01a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1f90ad09144a0feec97dc93fe2f198b7e8ea8490dfde07ad85bf812267321db2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O selo de status cinza ("Aguardando plano de ação", "Aguardando SFPA") tem texto branco sobre rgb(136,136,136), com 14px e peso 500. Contraste medido: 3,54:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando plano de ação"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando SFPA"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando plano de ação"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando SFPA"


### Unidades candidatas (não são crédito)

- U-414f88f3a44f5b394aabf7a189cd6e7c3e7a4318a6e5401d06495cc3d36c046a — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Aguardando SFPA": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-60228d39e68cb0c60e66169ffac88738a6f86c47e366c917b15bad49975f111f — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Aguardando plano de ação": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1f90ad09144a0feec97dc93fe2f198b7e8ea8490dfde07ad85bf812267321db2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1fb00e8701ee202d0078d4cc57e4bb05cb896b7d808ab24f007f730db5b3107c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O estado ligado/desligado de "Meus processos" aparece só pela cor: fundo rgb(19,81,180) quando ligado, branco com borda quando desligado. Não há role nem aria-pressed.

Esperado: O alternador expõe role button e o estado com aria-pressed (ou equivalente).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(1)>div>span" — <span> "Últimos 60 dias"


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ba2bd1556fdeccfe4297c4dcfc021ca534e7a8ed6cbaa845aa995d332b97c9ba — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Meus processos": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1fb00e8701ee202d0078d4cc57e4bb05cb896b7d808ab24f007f730db5b3107c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-26fa1e2d0159e7a65fa33e72420bf9d8726d5558b19200f67c0c3b5e34077970

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A caixa "selecionar todos" no cabeçalho da tabela não tem label, aria-label nem title; o nome acessível fica vazio (na árvore aparece como "checkbox" sem nome).

Esperado: A caixa tem um nome acessível, por exemplo "Selecionar todos os processos".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d60362290b6706e23c1997aa80708bf17c52f51899da6ac7c14d369c62e62a5f — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-26fa1e2d0159e7a65fa33e72420bf9d8726d5558b19200f67c0c3b5e34077970",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3134d923903273916bb3e3f22816df5f995aba1dfc6ab930941b6191adab72e2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O cabeçalho da coluna de ações (Ver processo, Desassociar, Assinar) é um th scope="col" vazio, sem texto nem nome acessível.

Esperado: O cabeçalho da coluna tem um texto, ainda que visualmente oculto, por exemplo "Ações".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(9)" — <th>

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(9)" — <th>


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ea935ea906aacf990d819d776b85cf2dd9a1fae6ec0131b6e8487a1f7077e28a — D-08 · inicial · cena 1280x900@lista-exibir · <th>: Cabeçalho da coluna de ações (Ver processo / Desassociar / Assinar): <th scope="col"> vazio, columnheader sem nome na árvore — as células de ação ficam sem cabeçalho identificável. Precedente B-26 (D-61). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3134d923903273916bb3e3f22816df5f995aba1dfc6ab930941b6191adab72e2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-355f290a837718e83313939ef7338732992f91cdb3d0fee18e84dfb1afcae0ad

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O item Home do breadcrumb (shadow DOM) é um <a href="/portal-mpa/"> que contém um <button class="br-button" aria-label="">: dois controles interativos aninhados, que geram duas paradas de Tab consecutivas (A e BUTTON) para o mesmo destino.

Esperado: Um único controle interativo (link) para Home, sem botão dentro do link.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb" — <br-breadcrumb>

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb" — <br-breadcrumb>


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-355f290a837718e83313939ef7338732992f91cdb3d0fee18e84dfb1afcae0ad",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-38fccd97885ad9c974c45d7d7f1c3b8462b70491e987137f959b7f78231bf266

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os números de processo são <a role="button"> sem href e sem tabindex. Na sequência de Tab, o foco passa do checkbox do cabeçalho direto ao "Ver processo" da linha 1, pulando o número. O clique navega (ex.: para /processos/certificacao-caol/.../documentos).

Esperado: Os números de processo são links com href (ou botões focáveis), operáveis pelo teclado.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"


### Unidades candidatas (não são crédito)

- U-033900ce39792a7a975d9ede11c03d4245efb338c0d9cb851c401d2960781358 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000019/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6e35c537868b622da0e5b1355daa753e950ae76612c2edec93fee167dfe451c7 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000016/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-72b4ce553abc2315b9fdd295f57ac4395dbeb91282551aec3f832f3b7fb5e772 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000025/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-845ab5aba97127b62a8d66113c683ea3627e0bf65191a8dbe8e9c9f57661e8ea — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000027/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9ccc997213d1366ff17217ec3f3bcac55fd20335b41311499f9e5e772bad3e31 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000013/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a874edc1ede537ea763d087273d14e518422dcce35639c9491a4ec08101b55e1 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000031/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b2f9f29d8f600af2be5bd09d26ad5823057940426a4b6c56c047522fbe73a502 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000011/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d197c62611482e6c2615e9f8522e81875577b7523610f493e872ce8ead9e606c — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000010/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db0332f8db5d16c40f65ab56e586fc66ce97654c714fe035cb91eb521da27cb0 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000028/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-38fccd97885ad9c974c45d7d7f1c3b8462b70491e987137f959b7f78231bf266",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-396fe18f5224a6497a8b19dacababff59feb87c587df1ea64ca7941eab0e8861

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Trocar unidade" é uma <span> com cursor:pointer, sem role, sem tabindex (tabIndex -1) e sem href: o teclado não alcança a ação.

Esperado: A ação "Trocar unidade" é um botão ou link focável e acionável pelo teclado.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-40-05-833Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-396fe18f5224a6497a8b19dacababff59feb87c587df1ea64ca7941eab0e8861",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3b4868bf7bacf9878aea3d48ff8b751b188c9211e73add56a122330ccbef86ab

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A coluna "Aberto há" (e "Data/Hora" em Concluídos) mostra um ícone sort-down indicando a ordenação, mas o th não tem aria-sort. O ícone é a única indicação.

Esperado: A ordenação atual é exposta com aria-sort="ascending"/"descending" no cabeçalho ordenado.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(1)" — <th> "Aberto há"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(1)" — <th> "Aberto há"


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3b4868bf7bacf9878aea3d48ff8b751b188c9211e73add56a122330ccbef86ab",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3c92c21f4a18f1a0bae9503a300147737a2ec2c3b8e4fb84bd888d96776e4bc4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O botão de fechar do diálogo de assinatura tem aria-label="Close this dialog", em inglês, numa página com lang="pt-br" e sem lang="en" no elemento.

Esperado: O nome está em português (ex.: "Fechar") ou o trecho em outro idioma é marcado com lang.

Janela: 1280×900 · interações desde o carregamento: 1. focus botão "Assinar" da linha 2 (00000.000011/2026-00) 2. press Enter

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@filtro-escolhido)

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3c92c21f4a18f1a0bae9503a300147737a2ec2c3b8e4fb84bd888d96776e4bc4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-50ccae8edb303a0e27a93bd808fe6e8ac82a1bff11920713a7cda20830168f83

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A paginação tem só o botão "Página seguinte"; não há "Página anterior". Na página 2 de Concluídos, só dá para voltar pelo link numérico "1".

Esperado: A paginação oferece os controles "Página anterior" e "Página seguinte", como no componente Pagination do DS.

Janela: 1280×900 · interações desde o carregamento: 1. click aba "Concluídos" (br-tab button[data-panel=HISTORICO]) 2. click link de página "2" (.br-pagination a.page)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav" — <nav> "Paginação de resultados"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav" — <nav> "Paginação de resultados"


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-39-46-820Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-50ccae8edb303a0e27a93bd808fe6e8ac82a1bff11920713a7cda20830168f83",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-55e46881be7f8b6ea25c4012d99c5e92612fd9c14cf83505f1ca7534871b65f6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: A prévia do documento é um <object type="application/pdf" data="blob:..."> sem title, aria-label nem conteúdo alternativo. Ao abrir o diálogo, o foco vai para esse objeto.

Esperado: O objeto tem um nome/alternativa (title ou aria-label, e conteúdo alternativo ou link para o PDF).

Janela: 1280×900 · interações desde o carregamento: 1. focus botão "Assinar" da linha 2 (00000.000011/2026-00) 2. press Enter

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@filtro-escolhido)

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-55e46881be7f8b6ea25c4012d99c5e92612fd9c14cf83505f1ca7534871b65f6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5d11432f92baa8695801c4e32f3f94c5915ee5b2d087b8e5a8f84df334c40db8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O painel do usuário tem role="menu", mas nenhum filho tem role="menuitem": o conteúdo é texto, uma span clicável ("Trocar unidade") e um button "Sair". Com o menu aberto, Escape não o fecha (aria-expanded continua "true").

Esperado: Usar role="menu" só com itens menuitem e o comportamento de teclado do padrão, ou remover o role e usar um contêiner/disclosure comum.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-40-05-833Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5d11432f92baa8695801c4e32f3f94c5915ee5b2d087b8e5a8f84df334c40db8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-630576deb3b18807e10198fedcd2a453dd6dde4fb1b669c8ef289f42016188f6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O campo de pesquisa (input#search no shadow DOM de br-input) não tem <label> nem aria-label; o único rótulo é o placeholder "Pesquise aqui ...", que some ao digitar.

Esperado: O campo tem um rótulo persistente associado (label for/aria-label), por exemplo "Pesquisar processos".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-630576deb3b18807e10198fedcd2a453dd6dde4fb1b669c8ef289f42016188f6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-63b6d2d23488a7bf837a3d86ee4f53eba2f0d2238c09212e5ff357321d41c5e6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O selo de status "Aguarda complementos" tem texto branco sobre rgb(130,137,255), com 14px e peso 500. Contraste medido: 3,01:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguarda complementos"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguarda complementos"


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-df345d6a8dd12bb3d5984839e301ee472e3ea7226f2379f074985ad5e88e6b6e — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Aguarda complementos": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-63b6d2d23488a7bf837a3d86ee4f53eba2f0d2238c09212e5ff357321d41c5e6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-66f8b68cbf1d580c520704884d8845df6173bebee46c39e44ed2e0fde0b5167e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão "Menu" (button#navigation, data-target="#main-navigation") no shadow DOM do br-header não abre nada quando clicado: não existe #main-navigation no documento nem no shadow root, aria-expanded continua ausente e a tela fica igual.

Esperado: O botão de menu do cabeçalho abre o menu principal e expõe o estado (aria-expanded), ou não é exibido quando não há menu.

Janela: 1280×900 · interações desde o carregamento: 1. click botão "Menu" do br-header

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>pnip-header>br-header" — <br-header>


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-66f8b68cbf1d580c520704884d8845df6173bebee46c39e44ed2e0fde0b5167e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-680685c4e2e3a03c8e07087d5d106b9851da594f49355637eafc0b8eb5038075

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Quando a pesquisa não encontra nada, a tabela é trocada pela mensagem "Não há processos para exibir.", que fica num <p> sem role="status" nem aria-live; a região aria-live da paginação também sai da página. O resultado não é anunciado.

Esperado: O resultado vazio é anunciado por uma região de status (role="status"/aria-live) sem mover o foco.

Janela: 1280×900 · interações desde o carregamento: 1. type "zzzz" em #search 2. press Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@filtro-escolhido)

### Sujeitos

- "unresolved:.mt-5.text-center > p" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-680685c4e2e3a03c8e07087d5d106b9851da594f49355637eafc0b8eb5038075",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6e13ce21054b051f1b616ea0f1fb22f166cdf24990f579d40867c936e0b2e306

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os gatilhos dos filtros não têm papel (são span), nem estado aria-expanded, nem relação com a lista que abrem. Na árvore de acessibilidade aparecem como "generic".

Esperado: Os gatilhos expõem role button, aria-expanded e aria-controls.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"


### Unidades candidatas (não são crédito)

- U-03b70c230745fcab911019bee917fc96d455c9b0bdabab5cc53d0f3100bfabc9 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Método de pesca": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-06d7dd4e946fa87e21ce594f8e6c1233505ee0876ebc653085da3c8b1e10d1b1 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Tipo de processo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3a3538d0cc7b9277134f477977b3381a3624d51a2e8e94b14dffebc79bc4c6e1 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Status": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-619c46fab5dfba19c9947e32ffb358b6c04c3ae24b85ef112ef7a70f97ec8ede — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Aberto há": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a268574606c05cb9ce58a109002e76255bfa6505409b9119e3da33a897bcb203 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Espécie alvo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d339cacb503d4668ae18ec3b1745062bb4f08bba29b990b09a1619276a49d5be — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Petrecho": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6e13ce21054b051f1b616ea0f1fb22f166cdf24990f579d40867c936e0b2e306",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7746597dbd0d2202cb518ea85b63a360b5c7f46142cfdaaa04d7654e5abd45e9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Na paginação, cada link de página é um <li> dentro de outro <li>, sem ul/ol intermediário (ul > li > li > a.page). A árvore de acessibilidade mostra listitem dentro de listitem.

Esperado: Cada número de página fica num único li, filho direto da lista.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(1)>li" — <li> "1"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(1)>li" — <li> "1"


### Unidades candidatas (não são crédito)

- U-98042635108a0beff29b88079d2079bbcdae821dff20ce0b50363b3ae5c42639 — F2-01 · inicial · cena 1280x900@lista-exibir · <ul> "1": Paginação no rodapé da tabela: só existe a seta "Página seguinte" (botão circular à direita do número da página); a seta "Página anterior" não existe — a lista da paginação tem 2 itens, a página "1" e a seta seguinte, e a página fica encostada à esquerda, sem seta antes dela. A Pagination tem duas setas de navegação obrigatórias, um botão para a esquerda e outro para a direita.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7746597dbd0d2202cb518ea85b63a360b5c7f46142cfdaaa04d7654e5abd45e9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-84030eda5b00c2a9da9270e004118257f635118f9d48b317ac1e345465bc65fb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os botões das abas têm aria-label com a constante interna ("AGUARDANDO_ANALISE", "TRAMITANDO", "HISTORICO"), que substitui o texto visível ("Aguardando análise", "Tramitando", "Concluídos"). O nome acessível não contém o rótulo visível.

Esperado: O nome acessível de cada aba contém o texto visível (remover aria-label ou usar o mesmo texto).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-84030eda5b00c2a9da9270e004118257f635118f9d48b317ac1e345465bc65fb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8610be8d206f8bd06454a99075b5f72270e1aa732c4775368069d3ee3ca23907

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A aba ativa só é indicada pela classe CSS li.tab-item.active. Os botões não têm aria-selected nem aria-current nem role="tab"; conferido nas três abas depois de ativar cada uma.

Esperado: O estado de aba selecionada é exposto programaticamente (role tab/tablist com aria-selected, ou aria-current).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8610be8d206f8bd06454a99075b5f72270e1aa732c4775368069d3ee3ca23907",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-89c5c2a9bec8ba16fd5ba72cf9d13769722bb906acc11429252cec17b65e242a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O título da página "Processos" é um h2 e não há nenhum h1 na página: a lista de cabeçalhos é só "H2: Processos".

Esperado: O título principal da página é marcado como h1, e os demais níveis seguem a hierarquia.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2" — <h2> "Processos"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2" — <h2> "Processos"


### Unidades candidatas (não são crédito)

- U-0cd559b14bf380681cd1bbbd271e767e5f2f8f0f1379741710c69e4d8cb1792d — F2-04 · inicial · cena 1280x900@lista-exibir · <h2> "Processos": Título da página, h2 "Processos": font-size 32px (2rem), valor fora da escala tipográfica (os degraus vizinhos são 29,036 px e 34,832 px). O título H2 usa --font-size-scale-up-05 (34,832 px nesta janela).
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [font-size] fora de {34.832px}. Medido: font-size=32px | font-size=32px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-89c5c2a9bec8ba16fd5ba72cf9d13769722bb906acc11429252cec17b65e242a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-904632be0f1d15a09af768832da44239ecb26f8218a7c0dc1112589984354412

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O diálogo foi aberto pelo teclado (foco no botão "Assinar" da linha 2 e Enter). Depois de fechado pelo botão ×, o foco vai para BODY em vez de voltar ao botão que o abriu.

Esperado: Ao fechar o diálogo, o foco volta ao botão "Assinar" que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. focus botão "Assinar" da linha 2 (00000.000011/2026-00) 2. press Enter 3. click .swal2-close

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-904632be0f1d15a09af768832da44239ecb26f8218a7c0dc1112589984354412",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a162b1c4c3aaadeb68a1b531c261b48d6599848f283ff72c3d30bde3c7037d8b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No seletor "Exibir", escolhido o valor 25 pelo teclado (ArrowDown e Enter), a lista fecha e o foco vai para BODY em vez de voltar ao campo.

Esperado: Depois da seleção, o foco permanece no seletor (input#total).

Janela: 1280×900 · interações desde o carregamento: 1. focus #total 2. press ArrowDown 3. press ArrowDown 4. press Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#total> "Selecione"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#total> "Selecione"


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a162b1c4c3aaadeb68a1b531c261b48d6599848f283ff72c3d30bde3c7037d8b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a380845c7f14daccfc27bd63b67c59a1c0f58d5b013f34b27354a29780dc9488

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Há um <iframe> vazio (sem src), visível, de 1160×500px no fim do conteúdo principal, sem atributo title nem nome acessível.

Esperado: Retirar o iframe sem uso ou dar a ele um title que descreva o conteúdo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f754cef40cc00f91f8926f0f6c764cc8fbc88b367b2c5cca1ca4e99f9b2d9f3e — D-10 · inicial · cena 1280x900@lista-exibir · <iframe>: <iframe> vazio no fim do componente (sem src, documento about:blank sem conteúdo, 1160×500 px, sem title, name nem aria-label; papel Iframe com nome "" na árvore): é ponto de Tab depois do "Voltar" e, focado, nada muda na tela (outline none, sem sombra, :focus-visible falso). Depois dele o Tab real alterna iframe ↔ body (E-01); Shift+Tab sai para o "Voltar". Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a380845c7f14daccfc27bd63b67c59a1c0f58d5b013f34b27354a29780dc9488",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a55551ef248aabfb538bed3499c2ef9604dd704ec035394391a43680ffbe0a19

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O ícone de saída (img src exit-icon.png) dentro do botão "Sair" não tem atributo alt.

Esperado: A imagem decorativa tem alt="" (o texto "Sair" já nomeia o botão).

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-40-05-833Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a55551ef248aabfb538bed3499c2ef9604dd704ec035394391a43680ffbe0a19",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ad7d552b36680640c0605623ad003eb0e3d07cb9ab2f4ad84f150de3ed58db7d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem do logotipo gov.br no shadow DOM do br-header (img.large-img, src assets/images/govbr-logo.png) tem alt="logo", que não identifica a imagem.

Esperado: Alternativa textual que identifique o conteúdo, por exemplo alt="gov.br".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>pnip-header>br-header" — <br-header>


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ad7d552b36680640c0605623ad003eb0e3d07cb9ab2f4ad84f150de3ed58db7d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b49d65d57c519ef29252d01188bfab5999f143753340af526693260eba42e29b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O diálogo de assinatura (role="dialog", aria-modal="true", com a prévia em PDF e os botões "Solicitar Revisão"/"Assinar com gov.br") tem aria-labelledby="swal2-title", mas esse h2 está vazio e com display:none. O diálogo fica sem nome acessível.

Esperado: O diálogo tem um nome acessível, por exemplo "Assinar processo 00000.000011/2026-00".

Janela: 1280×900 · interações desde o carregamento: 1. focus botão "Assinar" da linha 2 (00000.000011/2026-00) 2. press Enter

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@filtro-escolhido)

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b49d65d57c519ef29252d01188bfab5999f143753340af526693260eba42e29b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c4b70166c8639be6cfcab84b0d63848a4cc5d47e326ca5465be4081a54605fcc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Não há links de salto para o conteúdo, o menu ou a busca: não existe nenhum a[href^="#"], e o primeiro Tab vai direto ao botão "Menu" do cabeçalho.

Esperado: A página oferece âncoras para ir direto aos blocos de conteúdo, menu e busca, como pede o e-MAG.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.5

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Processos Me"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Processos Me"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c4b70166c8639be6cfcab84b0d63848a4cc5d47e326ca5465be4081a54605fcc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c5e4efe4bcc299d72cdcd0241ed9ae5860508dcf4911aebfc942d4faef9917ef

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O diálogo de confirmação "Tem certeza que deseja desassociar..." (role="dialog", aria-modal="true") tem aria-labelledby="swal2-title", mas esse h2 está vazio e com display:none. O diálogo fica sem nome acessível.

Esperado: O diálogo tem um nome acessível (título visível ou aria-label), por exemplo "Desassociar processo".

Janela: 1280×900 · interações desde o carregamento: 1. click botão "Desassociar processo do analista responsável" da linha 1 (00000.000010/2026-00)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@filtro-escolhido)

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c5e4efe4bcc299d72cdcd0241ed9ae5860508dcf4911aebfc942d4faef9917ef",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c80ea4a4c49988202f43613d4c74445cc232b765e0ac3798a31f5d07a9ec5b2f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@filtro-escolhido

Observado: O botão para remover o filtro aplicado ("Últimos 7 dias") só contém um ícone <i aria-hidden="true" class="fas fa-times">; não tem aria-label, title nem texto, e o nome acessível fica vazio.

Esperado: O botão tem um nome acessível, por exemplo "Remover filtro Últimos 7 dias".

Janela: 1280×900 · interações desde o carregamento: 1. click .br-tag.interaction.bg-pure-0 "Aberto há" 2. click opção "Últimos 7 dias"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@filtro-escolhido (/pnip-f2/portal-mpa/processos)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(1)>div>span>button" — <button>

### Unidades candidatas (não são crédito)

- U-8315bc97871abd9534f079c6a8d5423eb20bfd66344b9d2ab81cd81bab73562b — F2-03 · filtro-escolhido · cena 1280x900@filtro-escolhido · <button>: Tag do filtro escolhido (aparece depois de abrir um filtro e escolher uma opção, aqui "Aberto há" → "Últimos 60 dias"): o botão de remover (×) é um <button> sem a classe `br-button` (só `inverted circle`) e aparece como botão nativo do navegador — fundo cinza rgb(240, 240, 240), borda outset de 2 px, cantos retos, cerca de 40×30 px, ícone preto — em vez do botão circular azul de 28×28. O botão continua removendo o filtro. O Button exige a classe `br-button` no contêiner do componente.
  - estados em que a unidade existe: filtro-escolhido
  - predicado de aceitação: estilo-computado sustenta em filtro-escolhido — alguma propriedade de [border-top-left-radius] fora de {50%}. Medido: border-top-left-radius=0px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c80ea4a4c49988202f43613d4c74445cc232b765e0ac3798a31f5d07a9ec5b2f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cb9b7050dbcfe3c90c2e007035136282c768e5f5044d2e07e9326489dc392eaa

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O título do documento é só "PNIP", igual em todas as rotas visitadas (lista, detalhe, login), e não indica a página "Processos".

Esperado: O título descreve a página, por exemplo "Processos - Plataforma Nacional da Indústria do Pescado".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.4.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|head>title" — <title> "PNIP" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-4f18906ddca9193eed68daf19265b934700bd5459cad1fa9445888dc3e5026bb — D-13 · sempre · cena 1280x900@filtro-escolhido · <title> "PNIP": <title>PNIP</title> nas 2 paradas: nomeia só o sistema, não o conteúdo principal ("Processos"). **exposto** (casco; B-25, C-06). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cb9b7050dbcfe3c90c2e007035136282c768e5f5044d2e07e9326489dc392eaa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d49b711ace60ebd1b93b5ea78088740c1ad40f57da2dc4d57c516b75dbbd166a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A página atual só é indicada pela classe "active" (estilo visual). O link não tem aria-current="page"; conferido nas páginas 1 e 2 de Concluídos.

Esperado: A página atual é exposta programaticamente com aria-current="page".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(1)>li>a" — <a> "1"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(1)>li>a" — <a> "1"


### Unidades candidatas (não são crédito)

- U-98042635108a0beff29b88079d2079bbcdae821dff20ce0b50363b3ae5c42639 — F2-01 · inicial · cena 1280x900@lista-exibir · <ul> "1": Paginação no rodapé da tabela: só existe a seta "Página seguinte" (botão circular à direita do número da página); a seta "Página anterior" não existe — a lista da paginação tem 2 itens, a página "1" e a seta seguinte, e a página fica encostada à esquerda, sem seta antes dela. A Pagination tem duas setas de navegação obrigatórias, um botão para a esquerda e outro para a direita.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d49b711ace60ebd1b93b5ea78088740c1ad40f57da2dc4d57c516b75dbbd166a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d510f0d74e92c1b57b46be676e15156cc7895f5e16253e0dc5694ca60c246434

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os botões "Desassociar" desabilitados ficam visualmente idênticos ao habilitado da linha 1: ícone rgb(229,34,7) e opacity 1 nos dois casos. Só o cursor muda (not-allowed).

Esperado: O estado desabilitado tem indicação visual própria, como no padrão de estados do DS (ex.: opacidade reduzida).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>


### Unidades candidatas (não são crédito)

- U-176bb88638e074fd5cf412f517450af662b14a97d537e948fb9df0190485402e — D-01 · inicial · cena 1280x900@lista-exibir · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3657b4a5b2c1efc0f2e4fd4b806d505f5e874a6ddf43ff11d22586bfcc7902b3 — F2-10 · inicial · cena 1280x900@lista-exibir · <br-button>: Botões "Desassociar processo do analista responsável" desabilitados na coluna de ações (8): opacidade 1, iguais ao habilitado da 1ª linha (ícone vermelho cheio); só o cursor not-allowed indica o estado. O botão "Limpar filtros", também desabilitado, tem opacidade 0,45. No estado desabilitado, fundo e primeiro plano têm opacidade --surface-opacity-md. Uma única regra define os oito: uma unidade para o conjunto.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [opacity] fora de {0.45}. Medido: opacity=1 | opacity=1 | opacity=1 | opacity=1 | opacity=1 | opacity=1 | opacity=1 | opacity=1 | opacity=1 | opacity=1 | opacity=1 | opacity=1 | opacity=1 | opacity=1 | opacity=1 | opacity=1
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-41c3ce7e3beb7921cedb143ccd616ad62fed2b70403f0b19c6a39803e1f8218e — D-01 · inicial · cena 1280x900@lista-exibir · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6c285e4120a043f5a64e7a81256154243a784d95d352c13c1ef170f04d5b9cc5 — D-01 · inicial · cena 1280x900@lista-exibir · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-884ad07b575d3b16d1208c5bf6dcb1a14b53a08372bd9f76a8356c60b7b28668 — D-01 · inicial · cena 1280x900@lista-exibir · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-903f14dc7aa3ea089cf68a4604323b1361d80a591dd39760bbd80dbe6d455116 — D-01 · inicial · cena 1280x900@lista-exibir · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ab3fc06bd9ea77d7a5e070efe8b5250d3e4583ac2f089258fe41b6688d095ddc — D-01 · inicial · cena 1280x900@lista-exibir · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bbb2e7fe2afc77fb21128e517e43ee50f5b9bc10c97be934807a4df2a65fca2f — D-01 · inicial · cena 1280x900@lista-exibir · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f557e7eac91e1f9cbf58dbf2550f21523160ee69e45878bb7f4174b045566196 — D-01 · inicial · cena 1280x900@lista-exibir · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d510f0d74e92c1b57b46be676e15156cc7895f5e16253e0dc5694ca60c246434",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-da44e011c7ec02fa69098c0cf4ec4e47ac3eb11587dcdb2d8051a92c9708d912

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O selo de status laranja ("Em análise analista", "Em análise supervisor", "Em análise diretor") tem texto branco sobre rgb(230,111,14), com 14px e peso 500. Contraste medido: 3,16:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise analista"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise diretor"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise analista"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise diretor"


### Unidades candidatas (não são crédito)

- U-0a82f065235e39c59d71f198929c987a25280c39cfd73d435f0d3e42217df415 — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Em análise analista": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-707fb584d276eced96e7c0fe0bb07e670a309ef262f12b2f3ebdcddf8bb1fe07 — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b3d51d7bb2534d83ffd1dc399178c1e4cb88aa2a4f57a9943c4e5b1d8087270b — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-cfb9cc550622d9382ea0c398827a4cb876d253ae8866b8b448918be5184a908d — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Em análise diretor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e65296bb03e63c5dd9ac52453608e60dc1137cffe55643aef4573309a0069ee9 — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-da44e011c7ec02fa69098c0cf4ec4e47ac3eb11587dcdb2d8051a92c9708d912",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dce4f3376b8ffa5ec64c820ab3fff81a65d572d25dcb050a227946f9e17a4ec2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Na aba Concluídos, depois de ir para a página 2 pelo link "2", a paginação marca a 2 como ativa e mostra "11–14 de 14 itens", mas o seletor "Página" (input#page) continua com o valor "1".

Esperado: O seletor "Página" mostra a página atual (2).

Janela: 1280×900 · interações desde o carregamento: 1. click aba "Concluídos" (br-tab button[data-panel=HISTORICO]) 2. click link de página "2" (.br-pagination a.page)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#page> "Selecione"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#page> "Selecione"


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-39-46-820Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dce4f3376b8ffa5ec64c820ab3fff81a65d572d25dcb050a227946f9e17a4ec2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f46eb30e135775a53ba89ade82793867b18ce0320ae917c13dfc63730cbbefe1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: No detalhe do processo de Alteração de Certificado, o título é h2 ("Alteração de Certificado") e as seções ("1. Dados da embarcação" etc.) são h4, sem h3 entre eles.

Esperado: As seções usam o nível seguinte ao título (h3, ou h2 se o título passar a h1).

Janela: 1280×900 · interações desde o carregamento: 1. click botão "Ver processo" da linha 1 (00000.000010/2026-00)

Regra declarada: emag:1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@filtro-escolhido)

### Sujeitos

- "unresolved:main h4" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f46eb30e135775a53ba89ade82793867b18ce0320ae917c13dfc63730cbbefe1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f7d411d9a5982d114ef245c29aec1d066db8addec9b4c83bf21eae5e6ed8236a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O alternador "Meus processos" é uma <span class="br-tag interaction"> com cursor:pointer e tabIndex -1. O clique muda a lista (de 2 para 3 itens com o filtro de 7 dias), mas o teclado não alcança o controle.

Esperado: "Meus processos" é um controle focável e acionável por teclado.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@filtro-escolhido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"

Cena `1280x900@filtro-escolhido` (/pnip-f2/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-escolhido"`:
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"
- "1280x900@filtro-escolhido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(1)>div>span" — <span> "Últimos 60 dias"


### Unidades candidatas (não são crédito)

- U-a2fd3b936d2b602517a4270da5e453c04dfbb4dbdffbd0f8e1eaadd9d79a4e50 — D-12 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ba2bd1556fdeccfe4297c4dcfc021ca534e7a8ed6cbaa845aa995d332b97c9ba — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Meus processos": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c3afe385f0d539035e8704a4dea742331da189dc3628f1c61bc6c6fe083335fe — D-11 · sempre · cena 1280x900@filtro-escolhido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `playwright browser_evaluate (DOM/shadow DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T23-43-29-424Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f7d411d9a5982d114ef245c29aec1d066db8addec9b4c83bf21eae5e6ed8236a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
