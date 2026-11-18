# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 142 cartões únicos · 142 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 142 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 231 sujeitos · 142 cartão(ões) sem evidência verificada · 110 com unidade candidata · estimativa **852 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 74 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-05f48300e8a3b3201166f068f1a1a94ca39cca5bf4d665de7fceff6fda1ea2b3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual (link "1", class "page active", href="javascript:void(0)") não tem aria-current; o estado atual só é transmitido visualmente. Igual na aba Concluídos ao ir para a página 2.

Esperado: Identificador da página atual com aria-current="page".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-05f48300e8a3b3201166f068f1a1a94ca39cca5bf4d665de7fceff6fda1ea2b3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-06ba51df19931701de0f3df5abb21874e447f9820ec7729d6509004862ae6028

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Diálogos usam SweetAlert2 com estilos fora dos tokens do DS: texto #545454, ícone de alerta #f8bb86/#facea8, padding 10px, botões com radius 20px, botão fechar com fonte monospace.

Esperado: Diálogos com o componente br-modal / tokens de cor, espaçamento, raio e tipografia do DS.

Janela: 1280×900 · interações desde o carregamento: 1. click table tbody tr:nth-child(1) br-button[title^='Desassociar'] (botão interno)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-134` → identificador devolvido por ferramenta (sem arquivo)
- `F-135` → identificador devolvido por ferramenta (sem arquivo)
- `F-136` → identificador devolvido por ferramenta (sem arquivo)
- `F-137` → identificador devolvido por ferramenta (sem arquivo)
- `F-138` → identificador devolvido por ferramenta (sem arquivo)
- `F-139` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-100` → identificador devolvido por ferramenta (sem arquivo)
- `F-101` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-06ba51df19931701de0f3df5abb21874e447f9820ec7729d6509004862ae6028",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-07f274af191b11899c30998c711617c59459facbdc84e02b44200100378ca718

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: aria-label='Avatar com dropdown'; o texto visível é 'Olá, Usuária de Teste, SUPERVISOR'.

Esperado: O nome acessível contém o texto visível do rótulo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-07f274af191b11899c30998c711617c59459facbdc84e02b44200100378ca718",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0b6162113a6e8d680d198c7616d84c2cd1dce7ecb02b2a97f97133c8a38bd166

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A imagem do logotipo gov.br (no shadow root de br-header, img.large-img) tem alt='logo', que não identifica a marca.

Esperado: O texto alternativo deve identificar o logotipo, ex.: 'gov.br'.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>br-header" — <br-header>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser: shadowRoot de br-header` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0b6162113a6e8d680d198c7616d84c2cd1dce7ecb02b2a97f97133c8a38bd166",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0ce678b37de578fb929a4a7b6c5112f18d5dbc592c2dce1f13935e5172d50a0e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo de busca (input#search no shadow DOM) tem só placeholder='Pesquise aqui ...', sem label visível nem associado.

Esperado: Rótulo associado ao campo, visível ou ao menos programático além do placeholder.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-0ce678b37de578fb929a4a7b6c5112f18d5dbc592c2dce1f13935e5172d50a0e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0f92ba4fe79d79e1d3ccec573f5d0ed340f2adf3cdf1ae7dc9daa603f511f7e5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: iframe (500px de altura, sem borda) sem title, aria-label ou aria-labelledby.

Esperado: iframe com title descritivo, ou removido/oculto se não tiver conteúdo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-86eae2a2c2b01c4ad114ed3a5e181244e2f37ce9548444905ea96c4f193f4f1c — D-10 · inicial · cena 1280x900 · <iframe>: <iframe> vazio no fim do componente (sem src, documento about:blank sem conteúdo, 1160×500 px, sem title, name nem aria-label; papel Iframe com nome "" na árvore): é ponto de Tab depois do "Voltar" e, focado, nada muda na tela (outline none, sem sombra, :focus-visible falso). Depois dele o Tab real alterna iframe ↔ body (E-01); Shift+Tab sai para o "Voltar". Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-020` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0f92ba4fe79d79e1d3ccec573f5d0ed340f2adf3cdf1ae7dc9daa603f511f7e5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1697a460390dfe2ed9bee661194cf099fb5a9d01dcf274d2b51d0dbe08e8ab2e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selo 'Vistoria agendada': #fff de 14px sobre rgb(79,151,209) = 3,14:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em 'Meus processos' (desativa)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:pnip-status-solicitacao-utils .bg-blue-40 > .text-secondary-01" — Seletor não resolvido

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
  "cardId": "C-1697a460390dfe2ed9bee661194cf099fb5a9d01dcf274d2b51d0dbe08e8ab2e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1a78331e4d26b138e589fd20086325db168a77ced9a6a48b0e9d5fdb96e4ae2a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Tags de status cinza ("Aguardando plano de ação", "Aguardando SFPA"; também as 9 tags "Aguardando análise" da aba Aguardando análise): #ffffff sobre #888888, 14px = 3.54:1.

Esperado: Contraste mínimo 4.5:1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando plano de ação"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando SFPA"

### Unidades candidatas (não são crédito)

- U-2a31c652c1de15ddca1e64fbcf431a95e403b5fed0a267279beb5e376abb3a19 — D-06 · inicial · cena 1280x900 · <div> "Aguardando SFPA": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ffa2c82ff6e2dd53e7e93f117cc3ebea7778b7172fc04853bba8da04f3a8ec19 — D-06 · inicial · cena 1280x900 · <div> "Aguardando plano de ação": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-8ca4e6c1ccf1` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-bdde35afd807` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1a78331e4d26b138e589fd20086325db168a77ced9a6a48b0e9d5fdb96e4ae2a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1adc25b329a323841bac4b799d2106c9d47a9a9edc7f8ae35ada2f58ac46d662

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Não há link de salto para o conteúdo: o primeiro link da página é o "Home" do breadcrumb (href="/portal-mpa/"), e a ordem de tabulação começa no botão Menu do cabeçalho.

Esperado: Primeiro link da página deve ser âncora interna "Ir para o conteúdo" apontando para o main.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Processos Me"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-008` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-175` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1adc25b329a323841bac4b799d2106c9d47a9a9edc7f8ae35ada2f58ac46d662",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1c5dbf278ff39c501bea7ad059f2f7f4e6dfd6d0906f6c7c1380e4236d27f82a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de fechar (×) do diálogo 'Assinar' tem aria-label 'Close this dialog', em inglês, numa página com lang='pt-br'.

Esperado: Nome acessível em português (ex.: 'Fechar') ou idioma da expressão identificado.

Janela: 1280×900 · interações desde o carregamento: 1. clicar 'Assinar' da linha 2 (tr:nth-child(2) br-button[title='Assinar'] button)

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `browser: atributos de .swal2-close` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1c5dbf278ff39c501bea7ad059f2f7f4e6dfd6d0906f6c7c1380e4236d27f82a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1ccbb0646c2c6d7f9a882f08f54ec8e434c8a535b7076fd00b32a6deffe094e5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Diálogo de confirmação "Tem certeza que deseja desassociar…" com aria-labelledby apontando para h2#swal2-title vazio e oculto: sem nome acessível.

Esperado: Diálogo com título visível referenciado por aria-labelledby.

Janela: 1280×900 · interações desde o carregamento: 1. click table tbody tr:nth-child(1) br-button[title^='Desassociar'] (botão interno)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-167` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1ccbb0646c2c6d7f9a882f08f54ec8e434c8a535b7076fd00b32a6deffe094e5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1fdb0a0e1fe1bc664f755847e79702cc380b211a6cb3c499c64539e5cf5166e8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Há um <iframe> vazio (about:blank) de 1160×500 px após o botão 'Voltar', sem title, aria-label nem aria-labelledby; ele recebe foco por Tab.

Esperado: Todo iframe deve ter nome acessível que descreva o conteúdo (ou ser removido/ocultado se não tiver função).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-86eae2a2c2b01c4ad114ed3a5e181244e2f37ce9548444905ea96c4f193f4f1c — D-10 · inicial · cena 1280x900 · <iframe>: <iframe> vazio no fim do componente (sem src, documento about:blank sem conteúdo, 1160×500 px, sem title, name nem aria-label; papel Iframe com nome "" na árvore): é ponto de Tab depois do "Voltar" e, focado, nada muda na tela (outline none, sem sombra, :focus-visible falso). Depois dele o Tab real alterna iframe ↔ body (E-01); Shift+Tab sai para o "Voltar". Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-011` → identificador devolvido por ferramenta (sem arquivo)
- `axe: frame-title` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1fdb0a0e1fe1bc664f755847e79702cc380b211a6cb3c499c64539e5cf5166e8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2175eedd20bda8bc028a77fcf2f2ae3e4e0ccc12c5464eee04836adb423b3935

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Letra 'U' branca (#fff) sobre laranja rgb(255,140,0), 24,19px em negrito: contraste de 2,33:1.

Esperado: Contraste mínimo de 3:1 para texto grande.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

### Unidades candidatas (não são crédito)

- U-1ac8052cfe1c39b4b3381840f05aa8e8dcafb71f7e686a5aedc803c49f04ca5f — D-14 · sempre · cena 1280x900 · <span> "U": Inicial do avatar "U" branco sobre #ff8c00 = 2,33:1 (24,2 px/700). **exposto** (casco; B-14, C-07). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-2175eedd20bda8bc028a77fcf2f2ae3e4e0ccc12c5464eee04836adb423b3935",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-264d255e93359475325ff14af0467be0bd86bad2af7273a23628163db52bd51a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Após aplicar o filtro, a tag "Últimos 7 dias" tem botão de remover só com ícone fa-times (aria-hidden) e sem aria-label/title: botão sem nome.

Esperado: Botão de remover com nome acessível (ex.: "Remover filtro Últimos 7 dias").

Janela: 1280×900 · interações desde o carregamento: 1. click span.br-tag.interaction 'Aberto há' 2. click .br-select .br-radio label 'Últimos 7 dias'

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:span.br-tag.interaction button.br-button.inverted" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-088` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-264d255e93359475325ff14af0467be0bd86bad2af7273a23628163db52bd51a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-288989c3e31e55ac033d0e56ac5f4c12fa4148d03bfc8474e006a32826fce147

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e4ff37ae90a166a7c11436fdc7352e655c47743c51c246d382fb0c1d0868a617 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-288989c3e31e55ac033d0e56ac5f4c12fa4148d03bfc8474e006a32826fce147",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-293821d62f0bedbb926d5e8197697af2aa7d84f8cd42c7f8bcc9d043d642f7a2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selos de status laranja ('Em análise analista', 'Em análise supervisor', 'Em análise diretor'): texto #ffffff sobre #e66f0e, 14px normal, contraste 3,16:1.

Esperado: Contraste mínimo de 4,5:1 para texto de 14px normal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise analista"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise diretor"

### Unidades candidatas (não são crédito)

- U-020360fe0ac1b486fa68bac1572f06684b64bbf0c16f9ef7e3d693f04d91b193 — D-06 · inicial · cena 1280x900 · <div> "Em análise diretor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3c66d06d47da9d6aebd54badb845e759d860a849387bb82a5e07b2babaf38bba — D-06 · inicial · cena 1280x900 · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6763ffe4580f2ad1994fcc30e57f9150a339c4712a140efc2e1b36d12b6e7d95 — D-06 · inicial · cena 1280x900 · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9dd81451556dbc7f29befcae53eae0c7ce1e85a77dbeccb2d65ef8aaeb3695b0 — D-06 · inicial · cena 1280x900 · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-fb523b557a9d56f6bd3017d3732e1897e798ea879716c2a1b40f8562925702d1 — D-06 · inicial · cena 1280x900 · <div> "Em análise analista": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `axe: color-contrast` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-293821d62f0bedbb926d5e8197697af2aa7d84f8cd42c7f8bcc9d043d642f7a2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2a7fdaa04509964899208fbdd977b7792f90905d140abbabb070d5d096799a9c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os 7 checkboxes da tabela (1 de 'selecionar todos' no cabeçalho e 6 nas linhas) não têm <label>, aria-label nem aria-labelledby: nome acessível vazio.

Esperado: Cada checkbox deve ter nome acessível (ex.: 'Selecionar todos', 'Selecionar processo 00000.000011/2026-00').

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-16ce15d8175e4756ef820d81558aece5a59a9ea1d13ccaca64c1dc3402b3011b — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3c28a6367e12995224e7f5afd5dac15ee7762ca60ee48e0d4abf5ce893006b35 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-885c785a6047277f435510cb1ae5246d4f5381011391963a9250f8fef05ab39e — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c96c837a2701b44257407074bbea0d85ca61fee2e884d1b7859fcc3269629e80 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e08a3e942e8cd8379ea128937536b24217ce2e0b5927f7896b915beb7616baa0 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e4ff37ae90a166a7c11436fdc7352e655c47743c51c246d382fb0c1d0868a617 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-fd4e5154c03b2c4b76298d61f50564b378b25f235f0a23ba868b5ee394dc14a5 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-012` → identificador devolvido por ferramenta (sem arquivo)
- `F-013` → identificador devolvido por ferramenta (sem arquivo)
- `F-014` → identificador devolvido por ferramenta (sem arquivo)
- `F-015` → identificador devolvido por ferramenta (sem arquivo)
- `F-016` → identificador devolvido por ferramenta (sem arquivo)
- `F-017` → identificador devolvido por ferramenta (sem arquivo)
- `F-018` → identificador devolvido por ferramenta (sem arquivo)
- `axe: label` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2a7fdaa04509964899208fbdd977b7792f90905d140abbabb070d5d096799a9c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2c9386f3d1ee5e916dc94f0db7ddf801e4b30fa3805aee84f4189ac1688dda60

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A aba ativa ('Tramitando' ao carregar) só é indicada pela classe CSS 'active' e pelo sublinhado; os botões não têm role='tab' nem aria-selected/aria-current, e os painéis não têm role='tabpanel'.

Esperado: Expor programaticamente qual aba está selecionada (role tablist/tab/tabpanel com aria-selected, ou aria-current).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser: shadowRoot de br-tab (li.tab-item.active, botões sem aria-selected)` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2c9386f3d1ee5e916dc94f0db7ddf801e4b30fa3805aee84f4189ac1688dda60",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2e3f65c8089cc75e62adc6db9ce82e669167fda7b0b499cc9149008dcbdb7a0c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No menu do avatar, 'Trocar unidade' é um <span> com cursor:pointer, sem tabindex nem role; ao clicar navega para /pnip-d/portal-mpa. Não recebe foco pelo teclado.

Esperado: A ação 'Trocar unidade' deve ser um botão ou link focável e acionável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. clicar #avatar-dropdown-trigger

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `browser: clique em 'Trocar unidade' navegou para /pnip-d/portal-mpa` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2e3f65c8089cc75e62adc6db9ce82e669167fda7b0b499cc9149008dcbdb7a0c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3064f66a2abe60a5a71186971377e79ecaf26756945b1b9f296a4bb128b07004

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ligado = fundo azul; desligado = classes bg-pure-0/text-gray-50. Nenhum aria-pressed ou equivalente expõe o estado.

Esperado: Estado do alternador exposto programaticamente (aria-pressed).

Janela: 1280×900 · interações desde o carregamento: 1. clicar em 'Meus processos' (desativa)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-79657b3151bf5b8cb46fd0b12e12ce95a8ad43a073581d780e1a85b0d0c987b3 — D-03 · inicial · cena 1280x900 · <span> "Meus processos": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-3064f66a2abe60a5a71186971377e79ecaf26756945b1b9f296a4bb128b07004",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-30cda7c060da7031c64e20078e3218e667ab39f1e0481a284826013670bb904e

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando SFPA"

### Unidades candidatas (não são crédito)

- U-2a31c652c1de15ddca1e64fbcf431a95e403b5fed0a267279beb5e376abb3a19 — D-06 · inicial · cena 1280x900 · <div> "Aguardando SFPA": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-30cda7c060da7031c64e20078e3218e667ab39f1e0481a284826013670bb904e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-31e6a2dc2b6b24d3a589547a471809caa32b68101afb914c3db86d475295d199

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Menu do avatar tem role="menu" mas seus filhos são div/span/button sem role="menuitem".

Esperado: role="menu" só com itens menuitem, ou remover o role menu.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-036` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-177` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-31e6a2dc2b6b24d3a589547a471809caa32b68101afb914c3db86d475295d199",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-32f3b3c88f74675f4c0f70d5d597ec905d099c372e9422f1f44912772fd67449

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e08a3e942e8cd8379ea128937536b24217ce2e0b5927f7896b915beb7616baa0 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-32f3b3c88f74675f4c0f70d5d597ec905d099c372e9422f1f44912772fd67449",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-338084afbbd45365149e5fbbbd7d0dddf4b083b6559c8e355691fb994097093f

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-885c785a6047277f435510cb1ae5246d4f5381011391963a9250f8fef05ab39e — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-338084afbbd45365149e5fbbbd7d0dddf4b083b6559c8e355691fb994097093f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-345aa0e9eef2e6a1db3a6c376584e8bd5b2b3663085b4313d871dfebd01725a9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A trilha é div.br-breadcrumb > ul, sem nav nem aria-label; o item atual 'Processos' não tem aria-current.

Esperado: nav com aria-label (por exemplo 'Breadcrumbs') e aria-current='page' no item atual, como no componente Breadcrumb do gov.br DS.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb" — <br-breadcrumb>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-345aa0e9eef2e6a1db3a6c376584e8bd5b2b3663085b4313d871dfebd01725a9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-34930c34ad0fd8c7dd3eb41bf17b9dab8670337a3ec8dec9aedfcd80b197094b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A direção da ordenação só aparece no ícone; o th não tem aria-sort.

Esperado: aria-sort='ascending'/'descending' no cabeçalho ordenado.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(1)" — <th> "Aberto há"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-34930c34ad0fd8c7dd3eb41bf17b9dab8670337a3ec8dec9aedfcd80b197094b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-35bb3b5054b61001aaaf9eaf9442c9cafda8ed8b69c69fc3b233174c61311a60

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Após uma busca sem resultados, a mensagem 'Não há processos para exibir.' aparece num <p> sem role=status/alert nem aria-live (o contador aria-live da paginação é removido); o foco fica no campo de busca.

Esperado: Mensagem de status exposta programaticamente (role='status' ou aria-live='polite').

Janela: 1280×900 · interações desde o carregamento: 1. preencher a busca (br-input#search input) com 'zzzz' 2. pressionar Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:div.mt-5.text-center > p" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `V-001 (confirmed)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-35bb3b5054b61001aaaf9eaf9442c9cafda8ed8b69c69fc3b233174c61311a60",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-38774bb95a8b5ea657b43d98fe01987caed049a0c08294c51baf8024fbb4ca9e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os números de processo são <a role='button'> sem href nem tabindex; focus() falha e o Tab os pula, embora abram o processo no clique.

Esperado: Controle focalizável e acionável por teclado (a com href ou button).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

### Unidades candidatas (não são crédito)

- U-16587e5724c056f29fe33943930669657ec273dcb3bd7349ef147e80d1af7d5f — D-02 · inicial · cena 1280x900 · <a> "00000.000025/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-37858e2151578bd4ff0dca0cb9559a7dc172a56a044224e019de39a59d37aff3 — D-02 · inicial · cena 1280x900 · <a> "00000.000027/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4f94d655cc862f1c8a5f9338fc2c4210ba46f5a31ba55b8409e495b39e0f83d5 — D-02 · inicial · cena 1280x900 · <a> "00000.000019/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-7d2cf902c45b0559e4b2210c1710fb9dac0efd83d2b044b09d5c92a5ef8ef6c3 — D-02 · inicial · cena 1280x900 · <a> "00000.000011/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-91ef1685d704c227f32101c5cdc87e8e5dc09f1e984fbeb60510a75bf9d86620 — D-02 · inicial · cena 1280x900 · <a> "00000.000031/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-928ba4729490dc3a41573f5873e3d22a6de57b584e9e4b6de679d1e5c667fcc6 — D-02 · inicial · cena 1280x900 · <a> "00000.000016/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a9848e27dad674353bc3fa8b958bf4bd1eb5baea6dc72bd3f1055d94b1b68630 — D-02 · inicial · cena 1280x900 · <a> "00000.000010/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bfafdfea6f580770d791decf888d3910a7a76b1373b694775cf5863252a8234a — D-02 · inicial · cena 1280x900 · <a> "00000.000028/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-deccf40361c7fb31a7736820b08843908d7433455bc4053d9ac56eec445bbdaf — D-02 · inicial · cena 1280x900 · <a> "00000.000013/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-38774bb95a8b5ea657b43d98fe01987caed049a0c08294c51baf8024fbb4ca9e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3992e3f4769f8486600cd162a29f7e3525204fce75693ccdf7c3dd935477fed0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O documento PDF é incorporado num <object type='application/pdf'> sem nome acessível nem conteúdo alternativo (no ambiente, o PDF não carregou: 'Failed to load PDF document').

Esperado: O <object> deve ter nome acessível (aria-label/title) e conteúdo alternativo, como um link para baixar o documento.

Janela: 1280×900 · interações desde o carregamento: 1. clicar 'Assinar' da linha 2 (tr:nth-child(2) br-button[title='Assinar'] button)

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-109` → identificador devolvido por ferramenta (sem arquivo)
- `axe: object-alt` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3992e3f4769f8486600cd162a29f7e3525204fce75693ccdf7c3dd935477fed0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3a553a0f1dab417441e81709b7e286435a516c5695ba3ec7df7f1d4995f229f5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão "Sair" (br-item) com border-radius 20px, fora da escala do DS.

Esperado: Raio da escala do DS.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>button" — <button> "Sair" · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-032` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-168` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3a553a0f1dab417441e81709b7e286435a516c5695ba3ec7df7f1d4995f229f5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3b67ba5460c8a20d76882915b3c7abc82469a16249fbee465862969e1d16d3d8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No diálogo 'Solicitar Revisão', o campo de texto do motivo (#swal2-textarea) não tem label, aria-label nem aria-labelledby; o texto 'Informe no campo abaixo, o(s) motivo(s) da revisão.' não está associado ao campo.

Esperado: O campo deve ter rótulo associado programaticamente (ex.: 'Motivo da revisão').

Janela: 1280×900 · interações desde o carregamento: 1. clicar 'Assinar' da linha 2 2. no diálogo, clicar 'Solicitar Revisão' (.swal2-cancel)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:#swal2-textarea" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-118` → identificador devolvido por ferramenta (sem arquivo)
- `axe: label` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3b67ba5460c8a20d76882915b3c7abc82469a16249fbee465862969e1d16d3d8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3d0d69e013da1ae3253fbd5df73676ab364cdbbbd90f794e6ed633be677bed1f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: document.title = "PNIP" — não identifica a página (Processos); o mesmo título é usado na rota de detalhe.

Esperado: Título do documento descritivo da página, ex.: "Processos - PNIP".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "head>title" — <title> "PNIP" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-196de7f5a70f95d1ff6f4b669419f8dc1118b5412e85636b5576fb02de1e175c — D-13 · sempre · cena 1280x900 · <title> "PNIP": <title>PNIP</title> nas 2 paradas: nomeia só o sistema, não o conteúdo principal ("Processos"). **exposto** (casco; B-25, C-06). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `P-01` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3d0d69e013da1ae3253fbd5df73676ab364cdbbbd90f794e6ed633be677bed1f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3dcfe02cef89cf9c8f1db69a3f409d89b73220c17c4e59a5ca7719e3af4de50c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões das abas (no shadow root de br-tab) têm aria-label 'AGUARDANDO_ANALISE', 'TRAMITANDO' e 'HISTORICO', enquanto o texto visível é 'Aguardando análise', 'Tramitando' e 'Concluídos'; 'HISTORICO' nem contém 'Concluídos'.

Esperado: O nome acessível de cada aba deve conter o texto visível (de preferência, ser igual a ele).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser: shadowRoot de br-tab` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3dcfe02cef89cf9c8f1db69a3f409d89b73220c17c4e59a5ca7719e3af4de50c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3e8f1036564470b3fc639024106c7aac1dcc1de3f90130835e9aa896f9a7d92a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selos cinza ('Aguardando plano de ação', 'Aguardando SFPA'; na aba 'Aguardando análise', os 9 selos 'Aguardando análise'): texto #ffffff sobre #888888, 14px normal, contraste 3,54:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando plano de ação"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando SFPA"

### Unidades candidatas (não são crédito)

- U-2a31c652c1de15ddca1e64fbcf431a95e403b5fed0a267279beb5e376abb3a19 — D-06 · inicial · cena 1280x900 · <div> "Aguardando SFPA": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ffa2c82ff6e2dd53e7e93f117cc3ebea7778b7172fc04853bba8da04f3a8ec19 — D-06 · inicial · cena 1280x900 · <div> "Aguardando plano de ação": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-008` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004 F-065..F-073` → identificador devolvido por ferramenta (sem arquivo)
- `axe: color-contrast` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3e8f1036564470b3fc639024106c7aac1dcc1de3f90130835e9aa896f9a7d92a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3ec3f2389fb2166b619bbf206acdfed76e5864fc2fae086b31e98c3d8e5b8bda

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: iframe vazio (sem src) com 1160×500 px no fim da página, focalizável (tabIndex 0) e sem title.

Esperado: Remover o iframe vazio ou dar a ele um title descritivo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-86eae2a2c2b01c4ad114ed3a5e181244e2f37ce9548444905ea96c4f193f4f1c — D-10 · inicial · cena 1280x900 · <iframe>: <iframe> vazio no fim do componente (sem src, documento about:blank sem conteúdo, 1160×500 px, sem title, name nem aria-label; papel Iframe com nome "" na árvore): é ponto de Tab depois do "Voltar" e, focado, nada muda na tela (outline none, sem sombra, :focus-visible falso). Depois dele o Tab real alterna iframe ↔ body (E-01); Shift+Tab sai para o "Voltar". Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-3ec3f2389fb2166b619bbf206acdfed76e5864fc2fae086b31e98c3d8e5b8bda",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-44f512cc633084f647632a2c02b7411f1580b36255113bb007ce43f309d8b06e

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando plano de ação"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ffa2c82ff6e2dd53e7e93f117cc3ebea7778b7172fc04853bba8da04f3a8ec19 — D-06 · inicial · cena 1280x900 · <div> "Aguardando plano de ação": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-44f512cc633084f647632a2c02b7411f1580b36255113bb007ce43f309d8b06e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-46d8172ca5b50702b648210ef485e5d171119fb7c426c44360021197410d969f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Tag de status "Aguarda complementos": texto #ffffff sobre #8289ff, 14px normal = 3.01:1.

Esperado: Contraste mínimo 4.5:1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguarda complementos"

### Unidades candidatas (não são crédito)

- U-039cdeb0126715207688cb7da2f3306eef77199fc525db06185fbad80f0e6b4a — D-06 · inicial · cena 1280x900 · <div> "Aguarda complementos": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-012` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-46d8172ca5b50702b648210ef485e5d171119fb7c426c44360021197410d969f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-49212e76d38081ceb6bca0cc924bda0b1bc4eee36024d92b93998bdc5d361fc3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Checkbox de cabeçalho com margin 0 0 4px 5px (5px fora da escala) e transform scale(1.5) inline.

Esperado: Espaçamentos da escala do DS (componente br-checkbox).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c96c837a2701b44257407074bbea0d85ca61fee2e884d1b7859fcc3269629e80 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-49212e76d38081ceb6bca0cc924bda0b1bc4eee36024d92b93998bdc5d361fc3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4a3b65ba5449033739d7dda5f2eb9919346e2c8c040f2f7486064443106a14fa

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-fd4e5154c03b2c4b76298d61f50564b378b25f235f0a23ba868b5ee394dc14a5 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4a3b65ba5449033739d7dda5f2eb9919346e2c8c040f2f7486064443106a14fa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4e52b820400889e8da2eb6d49df0c7d687aef8937d18c72cccfed2e151bd0f6b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O título do documento é apenas 'PNIP' (o mesmo na tela de login e no detalhe de processo), sem indicar a página 'Processos'.

Esperado: O título deve descrever o tópico/propósito da página, ex.: 'Processos - Plataforma Nacional da Indústria do Pescado'.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.4.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "head>title" — <title> "PNIP" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-196de7f5a70f95d1ff6f4b669419f8dc1118b5412e85636b5576fb02de1e175c — D-13 · sempre · cena 1280x900 · <title> "PNIP": <title>PNIP</title> nas 2 paradas: nomeia só o sistema, não o conteúdo principal ("Processos"). **exposto** (casco; B-25, C-06). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser: document.title = 'PNIP' em /processos, /login e /processos/habilitacao-tr/...` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4e52b820400889e8da2eb6d49df0c7d687aef8937d18c72cccfed2e151bd0f6b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4f3e4b70513e6d6ea56a47f71b11c0e00ee519169c30c2e7d85c2e3e81b60dd6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O menu do avatar aberto fica fora de qualquer landmark (o banner está no shadow do br-header; o avatar está fora dele).

Esperado: Todo conteúdo dentro de landmarks (ex.: área do usuário dentro do header/banner).

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-199` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4f3e4b70513e6d6ea56a47f71b11c0e00ee519169c30c2e7d85c2e3e81b60dd6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-519f2c6ff76b2f38416bdceca69e5b161f5c8f1f2bd75ecee262470cd1e2eb06

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O cabeçalho da coluna de ações (Ver processo, Desassociar, Assinar) não tem texto.

Esperado: Cabeçalho com texto (pode ser visualmente oculto), por exemplo 'Ações'.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(9)" — <th>

### Unidades candidatas (não são crédito)

- U-363bdf4381c77703f774b72a5877ca17949f173db8c08082a901a38bbac9a542 — D-08 · inicial · cena 1280x900 · <th>: Cabeçalho da coluna de ações (Ver processo / Desassociar / Assinar): <th scope="col"> vazio, columnheader sem nome na árvore — as células de ação ficam sem cabeçalho identificável. Precedente B-26 (D-61). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-519f2c6ff76b2f38416bdceca69e5b161f5c8f1f2bd75ecee262470cd1e2eb06",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5223ba38698cd0355b26862c369605cc4deb5d7c5ea39504cf36754c367c8826

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Frames must have an accessible name

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:frame-title

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-86eae2a2c2b01c4ad114ed3a5e181244e2f37ce9548444905ea96c4f193f4f1c — D-10 · inicial · cena 1280x900 · <iframe>: <iframe> vazio no fim do componente (sem src, documento about:blank sem conteúdo, 1160×500 px, sem title, name nem aria-label; papel Iframe com nome "" na árvore): é ponto de Tab depois do "Voltar" e, focado, nada muda na tela (outline none, sem sombra, :focus-visible falso). Depois dele o Tab real alterna iframe ↔ body (E-01); Shift+Tab sai para o "Voltar". Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5223ba38698cd0355b26862c369605cc4deb5d7c5ea39504cf36754c367c8826",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-52588aa0439af4b3aca46a4b10791ee0d2c29b765cb4db3d0d68b5a223bec31c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ícone do botão Sair com margin 0 0 10px (10px fora da escala de espaçamento).

Esperado: Espaçamento da escala do DS.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-033` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-52588aa0439af4b3aca46a4b10791ee0d2c29b765cb4db3d0d68b5a223bec31c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-52823887d0a7d098e67039f861d8f88bb2ef712f684543136b354fa0c0e72825

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Tabela de dados de processos sem caption, aria-label, aria-labelledby ou title.

Esperado: Tabela com título (caption) que descreva seu conteúdo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table" — <table> "Aberto há Nº Processo Tipo de Processo Solicitan"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `P-02` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-52823887d0a7d098e67039f861d8f88bb2ef712f684543136b354fa0c0e72825",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5621efb3fdd295c68781227d7bbff4d498e43c9f0298c2e95235bc28d92e7595

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de fechar dos diálogos tem aria-label='Close this dialog' (inglês) numa página lang='pt-br', sem lang próprio; o mesmo ocorre no diálogo de Desassociar.

Esperado: Rótulo em português (por exemplo 'Fechar') ou lang='en' no trecho.

Janela: 1280×900 · interações desde o carregamento: 1. focar e acionar 'Assinar' na linha 00000.000011/2026-00

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

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
  "cardId": "C-5621efb3fdd295c68781227d7bbff4d498e43c9f0298c2e95235bc28d92e7595",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5849e17b2e10a2e72b1745e0e73e9d468700f8c6e87810e8bada6e7b0ec3f2b7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão "Sair" com atributo href (não permitido em button) e filho <p> (conteúdo não fraseado).

Esperado: Marcação HTML válida: button só com conteúdo fraseado e atributos admitidos.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>button" — <button> "Sair" · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `P-08` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5849e17b2e10a2e72b1745e0e73e9d468700f8c6e87810e8bada6e7b0ec3f2b7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-58b0ed28076711c06fc64175c69ac1cdec729b5443a7572502a188060cd13f5e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O alternador 'Meus processos' é um span com cursor:pointer, sem tabindex nem papel; não recebe foco e o Tab o pula.

Esperado: Controle operável por teclado (button).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-79657b3151bf5b8cb46fd0b12e12ce95a8ad43a073581d780e1a85b0d0c987b3 — D-03 · inicial · cena 1280x900 · <span> "Meus processos": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-58b0ed28076711c06fc64175c69ac1cdec729b5443a7572502a188060cd13f5e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5903f78557e7b18d32e9777b5a188faf114974f11ffbab576bac74301e413426

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"

### Unidades candidatas (não são crédito)

- U-3c66d06d47da9d6aebd54badb845e759d860a849387bb82a5e07b2babaf38bba — D-06 · inicial · cena 1280x900 · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5903f78557e7b18d32e9777b5a188faf114974f11ffbab576bac74301e413426",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5b6069396c7830bc18a884ed06eafbdd3e23058149d18e2230012755bc2b07a2

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: margin: 0px 0px 4px 5px (fora da escala: 5px)

Esperado: Múltiplos de 4px

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c96c837a2701b44257407074bbea0d85ca61fee2e884d1b7859fcc3269629e80 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5b6069396c7830bc18a884ed06eafbdd3e23058149d18e2230012755bc2b07a2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5b98256c9dc7aa2c7b24f863e1bbe477465aebd9c95ae5c2447af3383cda5390

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os 6 filtros ('Aberto há', 'Tipo de processo', 'Status', 'Espécie alvo', 'Método de pesca', 'Petrecho') são span com cursor:pointer, sem tabindex nem papel; focus() falha e o Tab os pula.

Esperado: Gatilhos de filtro são button focalizáveis e acionáveis por teclado.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"

### Unidades candidatas (não são crédito)

- U-01e80a2eb4ce514b18658e4073987ecfb0173dd8e278288d92545b18543b0627 — D-03 · inicial · cena 1280x900 · <span> "Espécie alvo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-0c81c397cb1d1c741f9fb64bf7e105e51e276fc0831a57cc0f1ddab0c60d5c94 — D-03 · inicial · cena 1280x900 · <span> "Método de pesca": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-51c16a6d58b7d61079ba46d663436c170ade0d75cdc72a10206ff97d5e721261 — D-03 · inicial · cena 1280x900 · <span> "Status": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-5def87815edf9637eab419a181953e5b548ca49ce5bd67e9376469888793ddf4 — D-03 · inicial · cena 1280x900 · <span> "Petrecho": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c9e78975b757da79ded168f83fe826c77665508c9b4be565e81821ef5a1a5c5e — D-03 · inicial · cena 1280x900 · <span> "Tipo de processo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-cf21a45fc327ab9b4603940caabb92502ee5624304613715223199851164f304 — D-03 · inicial · cena 1280x900 · <span> "Aberto há": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-5b98256c9dc7aa2c7b24f863e1bbe477465aebd9c95ae5c2447af3383cda5390",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5c527a1a00b32783da236e756eaf892e828cfcc12d755f624979419e821e6e78

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No shadow DOM, o item Home é <a href='/portal-mpa/'> contendo <button aria-label=''>: um controle interativo aninhado em outro, que gera duas paradas de Tab.

Esperado: Um único elemento interativo (link) no item Home.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb" — <br-breadcrumb>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-5c527a1a00b32783da236e756eaf892e828cfcc12d755f624979419e821e6e78",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-625c47f198c7e3a7d57121db835b4399a55860c5d9ba571aedfe5347c3a026b4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Separador do menu do avatar com border-top-color #bbbbbb, que não é token do DS.

Esperado: Cor de borda de token do DS (divider).

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>hr" — <hr> · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-031` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-172` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-625c47f198c7e3a7d57121db835b4399a55860c5d9ba571aedfe5347c3a026b4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-62a03ec3a05eccd88efc85f5e5c51ec8e3fb13dfab13ec2ac3abd59066ac8e0e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Imagem do botão "Sair" (exit-icon.png) sem atributo alt.

Esperado: alt="" (decorativa, o botão já tem texto "Sair").

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-037` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-189` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-62a03ec3a05eccd88efc85f5e5c51ec8e3fb13dfab13ec2ac3abd59066ac8e0e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6447a305230e70d17babff7dc1359ff1ecaff1f44a13e51fd91451617af14fb4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O menu aberto do avatar tem role='menu', mas os filhos não são menuitem (há <div>, <span> e um <button> comum); o foco permanece no gatilho ao abrir.

Esperado: Usar papéis coerentes: role='menu' só com itens role='menuitem' e navegação por setas, ou remover role='menu' e usar lista/botões comuns.

Janela: 1280×900 · interações desde o carregamento: 1. clicar #avatar-dropdown-trigger

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-042` → identificador devolvido por ferramenta (sem arquivo)
- `axe: aria-required-children` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6447a305230e70d17babff7dc1359ff1ecaff1f44a13e51fd91451617af14fb4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6545a8960e60f10130b6b813424a715b8011ca29e056c4c19f87bc745463551e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os 9 números de processo são <a role='button'> sem href nem tabindex; são pulados pela navegação por Tab (do checkbox do cabeçalho o foco vai direto para 'Ver processo'). Clicados com o mouse, navegam (no ambiente, para /pnip-d/login).

Esperado: O número do processo, apresentado como controle clicável, deve ser focável e acionável por teclado (link com href ou botão).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

### Unidades candidatas (não são crédito)

- U-16587e5724c056f29fe33943930669657ec273dcb3bd7349ef147e80d1af7d5f — D-02 · inicial · cena 1280x900 · <a> "00000.000025/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-37858e2151578bd4ff0dca0cb9559a7dc172a56a044224e019de39a59d37aff3 — D-02 · inicial · cena 1280x900 · <a> "00000.000027/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4f94d655cc862f1c8a5f9338fc2c4210ba46f5a31ba55b8409e495b39e0f83d5 — D-02 · inicial · cena 1280x900 · <a> "00000.000019/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-7d2cf902c45b0559e4b2210c1710fb9dac0efd83d2b044b09d5c92a5ef8ef6c3 — D-02 · inicial · cena 1280x900 · <a> "00000.000011/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-91ef1685d704c227f32101c5cdc87e8e5dc09f1e984fbeb60510a75bf9d86620 — D-02 · inicial · cena 1280x900 · <a> "00000.000031/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-928ba4729490dc3a41573f5873e3d22a6de57b584e9e4b6de679d1e5c667fcc6 — D-02 · inicial · cena 1280x900 · <a> "00000.000016/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a9848e27dad674353bc3fa8b958bf4bd1eb5baea6dc72bd3f1055d94b1b68630 — D-02 · inicial · cena 1280x900 · <a> "00000.000010/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bfafdfea6f580770d791decf888d3910a7a76b1373b694775cf5863252a8234a — D-02 · inicial · cena 1280x900 · <a> "00000.000028/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-deccf40361c7fb31a7736820b08843908d7433455bc4053d9ac56eec445bbdaf — D-02 · inicial · cena 1280x900 · <a> "00000.000013/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser: registro de focusin após Tab` → identificador devolvido por ferramenta (sem arquivo)
- `browser: clique no número navegou para /pnip-d/login` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6545a8960e60f10130b6b813424a715b8011ca29e056c4c19f87bc745463551e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-68dd527bb0d69822b47756f84002cc8315b3b600bb42abba8295b28aa73710f9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: img src='exit-icon.png' no botão 'Sair', sem atributo alt.

Esperado: alt='' (decorativa, ao lado do texto 'Sair').

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão do avatar (#avatar-dropdown-trigger)

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-68dd527bb0d69822b47756f84002cc8315b3b600bb42abba8295b28aa73710f9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-69b51d6876eb13d286bc79783b9495044324d8a5d444292a87d4e436d1e3f86e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No shadow DOM de br-header, img src='assets/images/govbr-logo.png' tem alt='logo' (nome acessível 'logo').

Esperado: O texto alternativo identifica a marca, por exemplo alt='gov.br'.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>pnip-header>br-header" — <br-header>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-69b51d6876eb13d286bc79783b9495044324d8a5d444292a87d4e436d1e3f86e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-69da6001e7c31f8fe5a970b60f27ff455b4e22f3dedc759cca6080b718cfddcb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: 'Trocar unidade' é um span com cursor:pointer, sem tabindex nem papel; focus() não o focaliza e ele fica fora da ordem de Tab.

Esperado: Controle operável por teclado (button ou link).

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão do avatar (#avatar-dropdown-trigger)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-69da6001e7c31f8fe5a970b60f27ff455b4e22f3dedc759cca6080b718cfddcb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6a32c6e490d681f0b0b1b9c7fc1911b873418f24094fe75e434d3ab625fb70cb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os itens de página são <li> dentro de outro <li> (ul > li > li > a); a estrutura de lista é inválida.

Esperado: Cada li filho direto de ul/ol.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li" — <li> "1"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-6a32c6e490d681f0b0b1b9c7fc1911b873418f24094fe75e434d3ab625fb70cb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6c8782cac2649a3f455fc3ce14a8c74f8477a1d470b09691d14367cbb8428cbf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Meus processos" (alterna filtro) e os 6 filtros (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span class="br-tag interaction"> com click e cursor:pointer, sem tabindex nem role; span.focus() não recebe foco e a tabulação passa de Abas direto para a pesquisa. O estado ativo de "Meus processos" também não é exposto (sem aria-pressed).

Esperado: Controles operáveis por teclado, como button com nome e estado (aria-expanded nos filtros, aria-pressed no alternador).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"

### Unidades candidatas (não são crédito)

- U-01e80a2eb4ce514b18658e4073987ecfb0173dd8e278288d92545b18543b0627 — D-03 · inicial · cena 1280x900 · <span> "Espécie alvo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-0c81c397cb1d1c741f9fb64bf7e105e51e276fc0831a57cc0f1ddab0c60d5c94 — D-03 · inicial · cena 1280x900 · <span> "Método de pesca": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-51c16a6d58b7d61079ba46d663436c170ade0d75cdc72a10206ff97d5e721261 — D-03 · inicial · cena 1280x900 · <span> "Status": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-5def87815edf9637eab419a181953e5b548ca49ce5bd67e9376469888793ddf4 — D-03 · inicial · cena 1280x900 · <span> "Petrecho": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-79657b3151bf5b8cb46fd0b12e12ce95a8ad43a073581d780e1a85b0d0c987b3 — D-03 · inicial · cena 1280x900 · <span> "Meus processos": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c9e78975b757da79ded168f83fe826c77665508c9b4be565e81821ef5a1a5c5e — D-03 · inicial · cena 1280x900 · <span> "Tipo de processo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-cf21a45fc327ab9b4603940caabb92502ee5624304613715223199851164f304 — D-03 · inicial · cena 1280x900 · <span> "Aberto há": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-6c8782cac2649a3f455fc3ce14a8c74f8477a1d470b09691d14367cbb8428cbf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6f86b48bbe9823b070d30842f03cbc3cd6f1306183167261e7d37a6f8dd10ced

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com o filtro 'Em análise supervisor' aplicado, o botão de remover o filtro (ícone ×, button.br-button.inverted.circle) não tem nome acessível.

Esperado: O botão deve ter nome acessível, ex.: 'Remover filtro Em análise supervisor'.

Janela: 1280×900 · interações desde o carregamento: 1. clicar no filtro 'Status' 2. clicar na opção 'Em análise supervisor' (.br-item:nth-child(8) label)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.br-tag.interaction > button.inverted" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-119` → identificador devolvido por ferramenta (sem arquivo)
- `axe: button-name` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6f86b48bbe9823b070d30842f03cbc3cd6f1306183167261e7d37a6f8dd10ced",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-70ca97f73c05f92667a1c7f6882cd6681d209c7b0913ffd041514ca816c500b2

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: margin: -38px 4px 0px 0px (fora da escala: -38px)

Esperado: Múltiplos de 4px

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>button" — <button> "Buscar"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-70ca97f73c05f92667a1c7f6882cd6681d209c7b0913ffd041514ca816c500b2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-71a0150ef7db83d10be3e8a9046d4b8b98bf34f0bd45c2bbc902d54242345a8b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O ícone de ordenação de 'Aberto há' alterna sort-down/sort-up com o clique, mas não é focalizável nem tem papel ou nome.

Esperado: Botão de ordenação focalizável e acionável por teclado.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(1)>br-icon-base" — <br-icon-base>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-71a0150ef7db83d10be3e8a9046d4b8b98bf34f0bd45c2bbc902d54242345a8b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-71ba6c022ed79752ebfb432a39fa20fe3f39611485a751bf8211af075aa7cc5f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os 9 números de processo são <a role="button"> sem href e sem tabindex: não recebem foco (a.focus() não altera activeElement) e não entram na ordem de tabulação.

Esperado: Controle focalizável e acionável por teclado (button nativo ou link com href).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

### Unidades candidatas (não são crédito)

- U-16587e5724c056f29fe33943930669657ec273dcb3bd7349ef147e80d1af7d5f — D-02 · inicial · cena 1280x900 · <a> "00000.000025/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-37858e2151578bd4ff0dca0cb9559a7dc172a56a044224e019de39a59d37aff3 — D-02 · inicial · cena 1280x900 · <a> "00000.000027/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4f94d655cc862f1c8a5f9338fc2c4210ba46f5a31ba55b8409e495b39e0f83d5 — D-02 · inicial · cena 1280x900 · <a> "00000.000019/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-7d2cf902c45b0559e4b2210c1710fb9dac0efd83d2b044b09d5c92a5ef8ef6c3 — D-02 · inicial · cena 1280x900 · <a> "00000.000011/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-91ef1685d704c227f32101c5cdc87e8e5dc09f1e984fbeb60510a75bf9d86620 — D-02 · inicial · cena 1280x900 · <a> "00000.000031/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-928ba4729490dc3a41573f5873e3d22a6de57b584e9e4b6de679d1e5c667fcc6 — D-02 · inicial · cena 1280x900 · <a> "00000.000016/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a9848e27dad674353bc3fa8b958bf4bd1eb5baea6dc72bd3f1055d94b1b68630 — D-02 · inicial · cena 1280x900 · <a> "00000.000010/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bfafdfea6f580770d791decf888d3910a7a76b1373b694775cf5863252a8234a — D-02 · inicial · cena 1280x900 · <a> "00000.000028/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-deccf40361c7fb31a7736820b08843908d7433455bc4053d9ac56eec445bbdaf — D-02 · inicial · cena 1280x900 · <a> "00000.000013/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-71ba6c022ed79752ebfb432a39fa20fe3f39611485a751bf8211af075aa7cc5f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-72c0c3c9d0f3eb79032723696227a9966d6b003690c21e35331c7265ea23bffa

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual só é indicada pela classe 'active'; não há aria-current, nem em 'Concluídos' página 2.

Esperado: aria-current='page' no item da página atual.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-72c0c3c9d0f3eb79032723696227a9966d6b003690c21e35331c7265ea23bffa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-731123050455c3d700055d4c00b013b952ad85fc66632432083c4e0876c9c673

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na paginação, o item de página é <li> aninhado diretamente dentro de outro <li> (sem ul/ol).

Esperado: Itens de lista com pai ul/ol válido.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li" — <li> "1"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-028` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-6aceabe8b307` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-731123050455c3d700055d4c00b013b952ad85fc66632432083c4e0876c9c673",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7936659598631a012a0ebf4d6df194ebef5c9f61fcb47670846457243371f2b9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: As opções ('Últimos 7 dias' etc.) são div.br-item > label sem input, sem tabindex nem papel; só respondem ao clique.

Esperado: Opções focalizáveis e selecionáveis por teclado, com papel adequado (radio/option).

Janela: 1280×900 · interações desde o carregamento: 1. clicar no filtro 'Aberto há'

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:pnip-multiple-search-table-utils .br-select .br-item" — Seletor não resolvido

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
  "cardId": "C-7936659598631a012a0ebf4d6df194ebef5c9f61fcb47670846457243371f2b9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7b6044dd87c22108374b700bbefc2eba6f0942bd738bbc377544081a78d05703

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selo 'Aguarda complementos': texto #ffffff sobre #8289ff, 14px normal, contraste 3,01:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguarda complementos"

### Unidades candidatas (não são crédito)

- U-039cdeb0126715207688cb7da2f3306eef77199fc525db06185fbad80f0e6b4a — D-06 · inicial · cena 1280x900 · <div> "Aguarda complementos": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-003` → identificador devolvido por ferramenta (sem arquivo)
- `axe: color-contrast` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7b6044dd87c22108374b700bbefc2eba6f0942bd738bbc377544081a78d05703",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7c059bfd669ccac19d56627782e20109b4b4ecd050e8d1c8d87dba52e4e45f67

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6763ffe4580f2ad1994fcc30e57f9150a339c4712a140efc2e1b36d12b6e7d95 — D-06 · inicial · cena 1280x900 · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7c059bfd669ccac19d56627782e20109b4b4ecd050e8d1c8d87dba52e4e45f67",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7c95c5e97477a7d70e2085feb46ad5f0c1664c3fd62c71ef667c01af644ce004

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9dd81451556dbc7f29befcae53eae0c7ce1e85a77dbeccb2d65ef8aaeb3695b0 — D-06 · inicial · cena 1280x900 · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7c95c5e97477a7d70e2085feb46ad5f0c1664c3fd62c71ef667c01af644ce004",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7cc93cddcb20941a0e29ee40c0cce9d727613e7bd6d8c6dea4ae6bdd0aa10b90

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botões das abas (shadow do br-tab) com aria-label "AGUARDANDO_ANALISE", "TRAMITANDO", "HISTORICO", enquanto o texto visível é "Aguardando análise", "Tramitando", "Concluídos" — o nome acessível não contém o rótulo visível (ex.: "Concluídos" ≠ "HISTORICO").

Esperado: Nome acessível que contenha o texto visível (remover aria-label ou igualá-lo ao rótulo).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab>br-tab-item:nth-of-type(1)" — <br-tab-item#AGUARDANDO_ANALISE>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab>br-tab-item:nth-of-type(2)" — <br-tab-item#TRAMITANDO>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab>br-tab-item:nth-of-type(3)" — <br-tab-item#HISTORICO>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-7cc93cddcb20941a0e29ee40c0cce9d727613e7bd6d8c6dea4ae6bdd0aa10b90",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7cf1efc24144a8e2e6226beab01b59b7f9ce40bcbbd0030722d2090654fcfbc3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual da paginação ('1') só é indicada pela classe 'active' (estilo visual); o link usa href='javascript:void(0)' e não tem aria-current='page'.

Esperado: Indicar programaticamente a página atual (aria-current='page').

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser: atributos de a.page.active` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7cf1efc24144a8e2e6226beab01b59b7f9ce40bcbbd0030722d2090654fcfbc3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7d42192260a59f4f2da2b57fdb4fabf185469d9216739b3e3ef53282d22b478b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página não tem <h1>; o único cabeçalho é <h2> 'Processos'.

Esperado: O título principal do conteúdo deve ser marcado como h1, com hierarquia de cabeçalhos a partir dele.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Processos Me"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-020` → identificador devolvido por ferramenta (sem arquivo)
- `axe: page-has-heading-one` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7d42192260a59f4f2da2b57fdb4fabf185469d9216739b3e3ef53282d22b478b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7e6625ce72743e4156af4be2a2f6926a23142b2a500607c85253fd5bc904972d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão '×' que remove o filtro aplicado 'Últimos 7 dias' não tem aria-label, title nem texto (o ícone tem aria-hidden): nome acessível vazio.

Esperado: Nome acessível, por exemplo 'Remover filtro Últimos 7 dias'.

Janela: 1280×900 · interações desde o carregamento: 1. clicar no filtro 'Aberto há' 2. clicar na opção 'Últimos 7 dias'

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:pnip-multiple-search-table-utils .br-tag .br-button.inverted" — Seletor não resolvido

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
  "cardId": "C-7e6625ce72743e4156af4be2a2f6926a23142b2a500607c85253fd5bc904972d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-80a020a4bb1553ed42bd0859b11e0f00e41ffb469c6ef105f1c38b364449fdad

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cabeçalhos de coluna vazios: coluna de seleção (contém só o checkbox) e coluna de ações (sem texto).

Esperado: Cada th com texto acessível que identifique a coluna (ex.: "Selecionar", "Ações").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:3.10

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)" — <th>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(9)" — <th>

### Unidades candidatas (não são crédito)

- U-363bdf4381c77703f774b72a5877ca17949f173db8c08082a901a38bbac9a542 — D-08 · inicial · cena 1280x900 · <th>: Cabeçalho da coluna de ações (Ver processo / Desassociar / Assinar): <th scope="col"> vazio, columnheader sem nome na árvore — as células de ação ficam sem cabeçalho identificável. Precedente B-26 (D-61). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-248f7b3fa69f` → identificador devolvido por ferramenta (sem arquivo)
- `F-018` → identificador devolvido por ferramenta (sem arquivo)
- `F-019` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-80a020a4bb1553ed42bd0859b11e0f00e41ffb469c6ef105f1c38b364449fdad",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-85b8009d3b274e5aece58cc191e405ee23094fde1ee9acd2e370fb10b1a22422

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise analista"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-fb523b557a9d56f6bd3017d3732e1897e798ea879716c2a1b40f8562925702d1 — D-06 · inicial · cena 1280x900 · <div> "Em análise analista": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-85b8009d3b274e5aece58cc191e405ee23094fde1ee9acd2e370fb10b1a22422",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-87866b838e44b7104c1ee9a6f38a4bbd031d0fad6d574ac24d854a6fa453f0c8

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Table header text should not be empty

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:empty-table-header

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(9)" — <th>

### Unidades candidatas (não são crédito)

- U-363bdf4381c77703f774b72a5877ca17949f173db8c08082a901a38bbac9a542 — D-08 · inicial · cena 1280x900 · <th>: Cabeçalho da coluna de ações (Ver processo / Desassociar / Assinar): <th scope="col"> vazio, columnheader sem nome na árvore — as células de ação ficam sem cabeçalho identificável. Precedente B-26 (D-61). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-87866b838e44b7104c1ee9a6f38a4bbd031d0fad6d574ac24d854a6fa453f0c8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8991af336622e9704f7bdf40456f018a601dccda660b350b23e82d8da6cb5300

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c96c837a2701b44257407074bbea0d85ca61fee2e884d1b7859fcc3269629e80 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8991af336622e9704f7bdf40456f018a601dccda660b350b23e82d8da6cb5300",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8a0c80fd88a070ad081d562c5d3d85b097f2b8c78cbaa2889f72155f81c04845

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host <br-input> não recebeu label/aria-label da página: o placeholder faz o papel do rótulo

Esperado: Um rótulo associado ao campo (<label for>/<label> ancestral, aria-labelledby ou aria-label); o placeholder não substitui o rótulo

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: emag:6.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input >>> div>input" — <input#search> "Pesquise aqui ..." [shadow]

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-93607525233aaca9343595c8648d3f04f1015368c2db23d70efe75d565d78089 — D-05 · inicial · cena 1280x900 · <input#search> "Pesquise aqui ..." [shadow]: Campo de pesquisa da lista: o <br-input> recebeu `placeholder="Pesquise aqui ..."` mas não `label`, e o input interno (id search) fica com labels.length = 0, sem aria-label nem aria-labelledby; o nome acessível é o placeholder. Os seletores "Exibir" e "Página" da mesma tela têm rótulo associado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8a0c80fd88a070ad081d562c5d3d85b097f2b8c78cbaa2889f72155f81c04845",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8c864f97ae074d9be3701f3736943936861facd89dded4cd9ca20038447747a4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: document.title = 'PNIP' na lista de processos e também nas rotas de detalhe e exportação; não identifica a página.

Esperado: Título que descreva a página, por exemplo 'Processos - Plataforma Nacional da Indústria do Pescado'.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.4.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "head>title" — <title> "PNIP" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-196de7f5a70f95d1ff6f4b669419f8dc1118b5412e85636b5576fb02de1e175c — D-13 · sempre · cena 1280x900 · <title> "PNIP": <title>PNIP</title> nas 2 paradas: nomeia só o sistema, não o conteúdo principal ("Processos"). **exposto** (casco; B-25, C-06). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-8c864f97ae074d9be3701f3736943936861facd89dded4cd9ca20038447747a4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8d252c17ae547aeab7b5aea5b3fc5638fc3a79419d5c84c73df8167771cecb6d

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Nenhum elemento .br-footer nem web component <br-footer> no documento (DOM claro e shadow roots abertos).

Esperado: Uma Área de Rodapé com o componente Footer (.br-footer ou <br-footer>), como o modelo de página do DS exige.

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Processos Me"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8d252c17ae547aeab7b5aea5b3fc5638fc3a79419d5c84c73df8167771cecb6d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8da5357e6729b6712e83dc0e24eec307b2d011da26632fbc39cb77da34a16672

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguarda complementos"

### Unidades candidatas (não são crédito)

- U-039cdeb0126715207688cb7da2f3306eef77199fc525db06185fbad80f0e6b4a — D-06 · inicial · cena 1280x900 · <div> "Aguarda complementos": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8da5357e6729b6712e83dc0e24eec307b2d011da26632fbc39cb77da34a16672",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8e434ea3b19b0689c6eb7a961b8e4602b48d3605652835203a359782fef7b179

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Inicial "U" do avatar: #ffffff sobre #ff8c00, 24.19px bold = 2.33:1.

Esperado: Contraste mínimo 3:1 para texto grande.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

### Unidades candidatas (não são crédito)

- U-1ac8052cfe1c39b4b3381840f05aa8e8dcafb71f7e686a5aedc803c49f04ca5f — D-14 · sempre · cena 1280x900 · <span> "U": Inicial do avatar "U" branco sobre #ff8c00 = 2,33:1 (24,2 px/700). **exposto** (casco; B-14, C-07). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `P-05` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8e434ea3b19b0689c6eb7a961b8e4602b48d3605652835203a359782fef7b179",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8fc84812cd6b5ff5c20ab3379de2e974dd0e6d522e3d617a7cf82848a1a10f4b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O ícone de saída (exit-icon.png) do botão 'Sair' não tem atributo alt.

Esperado: Imagem decorativa deve ter alt=''.

Janela: 1280×900 · interações desde o carregamento: 1. clicar #avatar-dropdown-trigger

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-054` → identificador devolvido por ferramenta (sem arquivo)
- `axe: image-alt` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8fc84812cd6b5ff5c20ab3379de2e974dd0e6d522e3d617a7cf82848a1a10f4b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-91b4bd10ddd9bd8379e52b714bcd974b513e9ac1688d25dfa4bbedb3153e9303

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.

Esperado: O primeiro link da página é o salto para o conteúdo: âncora interna cujo alvo existe (e-MAG 1.5).

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Processos Me"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-91b4bd10ddd9bd8379e52b714bcd974b513e9ac1688d25dfa4bbedb3153e9303",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-91e319b3a6b4ce39ca21c646023b688b3c7cd29bfa3f8a6276233ca0da4954ee

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão fechar dos diálogos com aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang próprio.

Esperado: Nome em português (ex.: "Fechar") ou parte marcada com lang="en".

Janela: 1280×900 · interações desde o carregamento: 1. click table tbody tr:nth-child(1) br-button[title^='Desassociar'] (botão interno)

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-91e319b3a6b4ce39ca21c646023b688b3c7cd29bfa3f8a6276233ca0da4954ee",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-994305e18a7a7fdff7b2807e9a054ee269693a1029e285c0f6d155ce4861976d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Tab a partir de #total leva o foco à lista .br-list (tabindex=0); o Tab seguinte deixa o foco em BODY (a lista some), e só o próximo vai para #page. O mesmo ocorre com #page antes de 'Voltar'. O console registra 'TypeError: Cannot read properties of null (reading focus)' em _handleKeydownOnInput.

Esperado: O foco segue para o próximo controle sem cair no body.

Janela: 1280×900 · interações desde o carregamento: 1. Tab até o campo 'Exibir' (#total) 2. Tab (foco vai para a lista .br-list) 3. Tab

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(2)" — <div> "10 25 50 100"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(2)" — <div> "1" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-994305e18a7a7fdff7b2807e9a054ee269693a1029e285c0f6d155ce4861976d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-99662cdf59fcf32d50053ab584bd9f6e7ea769b81bed89f1d699c0985a252b94

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Tags de status ("Em análise analista/supervisor/diretor"): texto #ffffff sobre #e66f0e, 14px normal = 3.16:1.

Esperado: Contraste mínimo 4.5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise analista"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise diretor"

### Unidades candidatas (não são crédito)

- U-020360fe0ac1b486fa68bac1572f06684b64bbf0c16f9ef7e3d693f04d91b193 — D-06 · inicial · cena 1280x900 · <div> "Em análise diretor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3c66d06d47da9d6aebd54badb845e759d860a849387bb82a5e07b2babaf38bba — D-06 · inicial · cena 1280x900 · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6763ffe4580f2ad1994fcc30e57f9150a339c4712a140efc2e1b36d12b6e7d95 — D-06 · inicial · cena 1280x900 · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9dd81451556dbc7f29befcae53eae0c7ce1e85a77dbeccb2d65ef8aaeb3695b0 — D-06 · inicial · cena 1280x900 · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-fb523b557a9d56f6bd3017d3732e1897e798ea879716c2a1b40f8562925702d1 — D-06 · inicial · cena 1280x900 · <div> "Em análise analista": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-409bdd382fe8` → identificador devolvido por ferramenta (sem arquivo)
- `F-010` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-99662cdf59fcf32d50053ab584bd9f6e7ea769b81bed89f1d699c0985a252b94",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9a4ad93032dd1e2b8169da1948ab59b75dbe64d151c442b82404daebc38a430a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os 7 chips de filtro ('Meus processos', 'Aberto há', 'Tipo de processo', 'Status', 'Espécie alvo', 'Método de pesca', 'Petrecho') são <span> com cursor:pointer, sem tabindex nem role; ao percorrer com Tab o foco vai das abas direto para o campo de busca, pulando todos os chips. Por mouse, o clique abre listas e filtra a tabela.

Esperado: Todo filtro operável pelo mouse deve ser alcançável e acionável por teclado (Tab + Enter/Espaço).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"

### Unidades candidatas (não são crédito)

- U-01e80a2eb4ce514b18658e4073987ecfb0173dd8e278288d92545b18543b0627 — D-03 · inicial · cena 1280x900 · <span> "Espécie alvo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-0c81c397cb1d1c741f9fb64bf7e105e51e276fc0831a57cc0f1ddab0c60d5c94 — D-03 · inicial · cena 1280x900 · <span> "Método de pesca": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-51c16a6d58b7d61079ba46d663436c170ade0d75cdc72a10206ff97d5e721261 — D-03 · inicial · cena 1280x900 · <span> "Status": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-5def87815edf9637eab419a181953e5b548ca49ce5bd67e9376469888793ddf4 — D-03 · inicial · cena 1280x900 · <span> "Petrecho": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-79657b3151bf5b8cb46fd0b12e12ce95a8ad43a073581d780e1a85b0d0c987b3 — D-03 · inicial · cena 1280x900 · <span> "Meus processos": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c9e78975b757da79ded168f83fe826c77665508c9b4be565e81821ef5a1a5c5e — D-03 · inicial · cena 1280x900 · <span> "Tipo de processo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-cf21a45fc327ab9b4603940caabb92502ee5624304613715223199851164f304 — D-03 · inicial · cena 1280x900 · <span> "Aberto há": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser: registro de focusin após Tab (Menu → Avatar → Home → Exportar → abas → busca)` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9a4ad93032dd1e2b8169da1948ab59b75dbe64d151c442b82404daebc38a430a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9b7eac68a6aa62ba940faf795d389edbc298291bb23991dbfd99f47a220b4772

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Nenhum .br-footer nem <br-footer> no documento (DOM claro e shadow roots).

Esperado: modelo de página do DS com região de rodapé (footer) obrigatória.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Processos Me"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9b7eac68a6aa62ba940faf795d389edbc298291bb23991dbfd99f47a220b4772",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9dd96cad9f50f01d0f23add36f0160a5610a699b5d0719bb16a7e76f0ef8c235

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <object type='application/pdf'> (visualizador do documento a assinar) sem title, aria-label nem conteúdo alternativo.

Esperado: Nome ou alternativa textual para o objeto (title/aria-label e conteúdo de fallback com link para o documento).

Janela: 1280×900 · interações desde o carregamento: 1. focar e acionar 'Assinar' na linha 00000.000011/2026-00

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

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
  "cardId": "C-9dd96cad9f50f01d0f23add36f0160a5610a699b5d0719bb16a7e76f0ef8c235",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9e923799dc2352be907312b07c0333009a2e64406981cdb21e789c08b5c1c09d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: 7 checkboxes (o 'selecionar todos' do cabeçalho e os das linhas) sem label, aria-label nem title: nome acessível vazio.

Esperado: Nome acessível, por exemplo 'Selecionar todos' e 'Selecionar processo 00000.000011/2026-00'.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-16ce15d8175e4756ef820d81558aece5a59a9ea1d13ccaca64c1dc3402b3011b — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3c28a6367e12995224e7f5afd5dac15ee7762ca60ee48e0d4abf5ce893006b35 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-885c785a6047277f435510cb1ae5246d4f5381011391963a9250f8fef05ab39e — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c96c837a2701b44257407074bbea0d85ca61fee2e884d1b7859fcc3269629e80 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e08a3e942e8cd8379ea128937536b24217ce2e0b5927f7896b915beb7616baa0 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e4ff37ae90a166a7c11436fdc7352e655c47743c51c246d382fb0c1d0868a617 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-fd4e5154c03b2c4b76298d61f50564b378b25f235f0a23ba868b5ee394dc14a5 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-9e923799dc2352be907312b07c0333009a2e64406981cdb21e789c08b5c1c09d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a0cfd08356a1191b0890a1a380a5305022a6fa8d5857df03d6da0d1949ac799e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Sair' tem atributo href='javascript:void(0)' (não permitido em <button>) e contém um <p> (só se admite conteúdo de fraseado).

Esperado: Marcação válida: <button> sem href e com conteúdo de fraseado (ex.: <span>).

Janela: 1280×900 · interações desde o carregamento: 1. clicar #avatar-dropdown-trigger

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>button" — <button> "Sair" · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `P-03 (button-html)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a0cfd08356a1191b0890a1a380a5305022a6fa8d5857df03d6da0d1949ac799e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a254cd53a9127e21d88bd38e39093a6311691d87f765c081f711c161a02cdced

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Após a busca sem resultado aparece 'Não há processos para exibir.' em um p comum; a região aria-live da paginação é removida e nenhuma região live ou status existe na página.

Esperado: Mensagem de status anunciada por tecnologia assistiva (role='status' ou aria-live).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba 'Concluídos' 2. digitar 'zzzz' em 'Pesquise aqui ...' e pressionar Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:pnip-mpa-processos .mt-5.text-center > p" — Seletor não resolvido

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
  "cardId": "C-a254cd53a9127e21d88bd38e39093a6311691d87f765c081f711c161a02cdced",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a2c6b6c260c967a3479ee2165ae354122b4de2a0db66282e842d3c09b388d445

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Campo de pesquisa (input#search no shadow do br-input) tem apenas placeholder "Pesquise aqui ..."; sem label, aria-label ou aria-labelledby.

Esperado: Rótulo associado ao campo; placeholder não substitui o rótulo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:6.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-009` → identificador devolvido por ferramenta (sem arquivo)
- `V-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a2c6b6c260c967a3479ee2165ae354122b4de2a0db66282e842d3c09b388d445",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a3ed483e2d256e20f09d5a26eea24bfb5b19db0eff1fa02010ab0258223c7500

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Menu' (#navigation no shadow DOM de br-header) tem data-target='#main-navigation', mas esse elemento não existe na página; o clique não abre nada e o botão não tem aria-expanded.

Esperado: O botão abre o menu de navegação e expõe o estado (aria-expanded), ou não é exibido quando não há menu.

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão 'Menu' do cabeçalho

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

### Sujeitos

- "body>pnip-root>pnip-header>br-header" — <br-header>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-a3ed483e2d256e20f09d5a26eea24bfb5b19db0eff1fa02010ab0258223c7500",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a598e21733be83aac854cb91f0ebc7fd860087732cad7a7640886a798e80c4b0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os seletores 'Exibir' e 'Página' da paginação são <input type='text'> que abrem uma lista por seta/clique, mas não expõem role='combobox' nem aria-expanded; o botão 'Exibir lista' tem tabindex='-1' e também não tem aria-expanded.

Esperado: Expor o papel de combobox/lista e o estado expandido/recolhido.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#total> "Selecione"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#page> "Selecione"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser: ArrowDown em #total abriu a lista sem mudança de aria-expanded` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-012` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a598e21733be83aac854cb91f0ebc7fd860087732cad7a7640886a798e80c4b0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a5cd7d1f52554d56394646ba9e796422afca5f71e206f2224a93ac2e1a4d794f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex nem role (tabIndex -1): inacessível por teclado.

Esperado: Ação como button ou link focalizável.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-a5cd7d1f52554d56394646ba9e796422afca5f71e206f2224a93ac2e1a4d794f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-adf27fef99cf04217da11b001d79fcf50bdfe2f47e2ca6684487a8c592d01040

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O cabeçalho da coluna de ações (Ver processo, Desassociar, Assinar) é um <th scope='col'> vazio; o mesmo ocorre nas abas 'Aguardando análise' (th:nth-child(6)) e 'Concluídos' (th:nth-child(8)).

Esperado: O cabeçalho da coluna deve ter texto (visível ou para leitor de tela), ex.: 'Ações'.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(9)" — <th>

### Unidades candidatas (não são crédito)

- U-363bdf4381c77703f774b72a5877ca17949f173db8c08082a901a38bbac9a542 — D-08 · inicial · cena 1280x900 · <th>: Cabeçalho da coluna de ações (Ver processo / Desassociar / Assinar): <th scope="col"> vazio, columnheader sem nome na árvore — as células de ação ficam sem cabeçalho identificável. Precedente B-26 (D-61). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-010` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004 F-074` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-005 F-078` → identificador devolvido por ferramenta (sem arquivo)
- `axe: empty-table-header` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-adf27fef99cf04217da11b001d79fcf50bdfe2f47e2ca6684487a8c592d01040",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b16b9bcb158ed2f0d8a987bf761dfbbda8ca1700e28d7b4097611e11375a47ef

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Page should contain a level-one heading

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:page-has-heading-one

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "unresolved:iframe html" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b16b9bcb158ed2f0d8a987bf761dfbbda8ca1700e28d7b4097611e11375a47ef",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b1b17274887a64619ddc2b48e1e42ca27ef5a0edc528bd14c612554e2c28741e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na paginação, o item da página '1' é um <li> aninhado diretamente em outro <li> (sem <ul>/<ol> pai).

Esperado: Os itens de lista devem estar contidos em <ul>/<ol>.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li" — <li> "1"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-019` → identificador devolvido por ferramenta (sem arquivo)
- `axe: listitem` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b1b17274887a64619ddc2b48e1e42ca27ef5a0edc528bd14c612554e2c28741e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b1becb5f7c85326a88f3bf444d77fe264e4276b6854b1a7b5fd17bd25a491172

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A aba ativa só é indicada pela classe li.tab-item.active; os botões não têm role='tab', aria-selected nem aria-current.

Esperado: Estado selecionado exposto programaticamente (role tab + aria-selected, ou aria-current).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-b1becb5f7c85326a88f3bf444d77fe264e4276b6854b1a7b5fd17bd25a491172",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b6de22e635ce1ccfb5f0610e5a9ebdcf51080d62315608aa0c463641f598bd66

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-16ce15d8175e4756ef820d81558aece5a59a9ea1d13ccaca64c1dc3402b3011b — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b6de22e635ce1ccfb5f0610e5a9ebdcf51080d62315608aa0c463641f598bd66",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b9247213144c10bb01fed4d99ecddf728dac6efb9bac1a599674f111c5692832

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-3c28a6367e12995224e7f5afd5dac15ee7762ca60ee48e0d4abf5ce893006b35 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b9247213144c10bb01fed4d99ecddf728dac6efb9bac1a599674f111c5692832",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ba962bf7000b082d5808de485a14be34774cc425b044c7a946fc0f066f8f85f5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selos 'Em análise analista/supervisor/diretor': texto #fff de 14px (peso 500) sobre rgb(230,111,14) = 3,16:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise analista"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise diretor"

### Unidades candidatas (não são crédito)

- U-020360fe0ac1b486fa68bac1572f06684b64bbf0c16f9ef7e3d693f04d91b193 — D-06 · inicial · cena 1280x900 · <div> "Em análise diretor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3c66d06d47da9d6aebd54badb845e759d860a849387bb82a5e07b2babaf38bba — D-06 · inicial · cena 1280x900 · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6763ffe4580f2ad1994fcc30e57f9150a339c4712a140efc2e1b36d12b6e7d95 — D-06 · inicial · cena 1280x900 · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9dd81451556dbc7f29befcae53eae0c7ce1e85a77dbeccb2d65ef8aaeb3695b0 — D-06 · inicial · cena 1280x900 · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-fb523b557a9d56f6bd3017d3732e1897e798ea879716c2a1b40f8562925702d1 — D-06 · inicial · cena 1280x900 · <div> "Em análise analista": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-ba962bf7000b082d5808de485a14be34774cc425b044c7a946fc0f066f8f85f5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bac49e74ab5f43778089fa4b4fdae8b11c7420a679fa7812b51633ae5101aa3f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os campos 'Exibir' e 'Página' abrem uma lista de opções, mas são input type=text sem role='combobox', aria-expanded nem aria-controls; os radios internos não têm name.

Esperado: Papel e estado expostos (combobox com aria-expanded), ou um select nativo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#total> "Selecione"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#page> "Selecione"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-bac49e74ab5f43778089fa4b4fdae8b11c7420a679fa7812b51633ae5101aa3f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bb7e6b64c05ec2dc4ee47df512a9a124c5e47025993ead62afe21ea127aa2022

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao acionar 'Página seguinte' para chegar à última página (Concluídos, página 2), o botão fica disabled e o foco vai para BODY.

Esperado: Foco mantido em um elemento lógico (por exemplo, a página atual ou o botão 'Página anterior').

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba 'Concluídos' 2. clicar em 'Página seguinte'

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(3)>button" — <button> "Página seguinte"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-bb7e6b64c05ec2dc4ee47df512a9a124c5e47025993ead62afe21ea127aa2022",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bb996ffca13ab9057728bab1e13f4a5caa16ffca3d2577b53b56e8818613b521

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com foco no botão Assinar (ou Desassociar), Enter abre o diálogo; ao fechá-lo (× ou Esc no de Desassociar), o foco vai para BODY e não volta ao botão.

Esperado: Ao fechar o diálogo, o foco retorna ao controle que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. focar e acionar 'Assinar' na linha 00000.000011/2026-00

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"

### Unidades candidatas (não são crédito)

- U-042482e5872b90476bf7f95c11ccf1c1379f8904b33c6d44f550fcfa64c8a721 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-bb996ffca13ab9057728bab1e13f4a5caa16ffca3d2577b53b56e8818613b521",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bcd6777d5e569f80fc45028a9ddabee20d6671687022d0a8c4aacf7c5e58090c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O único cabeçalho da página é h2 'Processos'; não existe h1.

Esperado: Hierarquia de cabeçalhos iniciada por h1 no título principal da página.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2" — <h2> "Processos"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-bcd6777d5e569f80fc45028a9ddabee20d6671687022d0a8c4aacf7c5e58090c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bd2d02cd7becb6e84ba68d2168b641222eb7eeff5a08a83c2d0d2eaf6cd073e5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os chips são <span> sem role nem estado: os chips de lista não expõem aria-expanded (o estado aberto só aparece na troca do ícone caret-down/caret-up) e 'Meus processos' é um alternador cujo estado ativo/inativo só aparece pela cor (fundo azul vs. branco), sem aria-pressed.

Esperado: Cada chip deve expor papel de botão e o estado (aria-expanded para os que abrem lista; aria-pressed para o alternador 'Meus processos').

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"

### Unidades candidatas (não são crédito)

- U-01e80a2eb4ce514b18658e4073987ecfb0173dd8e278288d92545b18543b0627 — D-03 · inicial · cena 1280x900 · <span> "Espécie alvo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-0c81c397cb1d1c741f9fb64bf7e105e51e276fc0831a57cc0f1ddab0c60d5c94 — D-03 · inicial · cena 1280x900 · <span> "Método de pesca": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-51c16a6d58b7d61079ba46d663436c170ade0d75cdc72a10206ff97d5e721261 — D-03 · inicial · cena 1280x900 · <span> "Status": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-5def87815edf9637eab419a181953e5b548ca49ce5bd67e9376469888793ddf4 — D-03 · inicial · cena 1280x900 · <span> "Petrecho": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-79657b3151bf5b8cb46fd0b12e12ce95a8ad43a073581d780e1a85b0d0c987b3 — D-03 · inicial · cena 1280x900 · <span> "Meus processos": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c9e78975b757da79ded168f83fe826c77665508c9b4be565e81821ef5a1a5c5e — D-03 · inicial · cena 1280x900 · <span> "Tipo de processo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-cf21a45fc327ab9b4603940caabb92502ee5624304613715223199851164f304 — D-03 · inicial · cena 1280x900 · <span> "Aberto há": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser: atributos dos chips antes/depois do clique` → não encontrado na evidência preservada da execução
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bd2d02cd7becb6e84ba68d2168b641222eb7eeff5a08a83c2d0d2eaf6cd073e5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-be3cdcd8eba7f7b99b03103a4e53d8ca1449e5bd610cdb48e39f28e521e91a68

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão do usuário mostra 'Olá, Usuária de Teste, SUPERVISOR', mas o nome acessível é o aria-label 'Avatar com dropdown', que não contém o texto visível.

Esperado: O nome acessível deve conter o texto visível (ex.: 'Olá, Usuária de Teste, SUPERVISOR - menu do usuário').

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser: atributos de #avatar-dropdown-trigger` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-be3cdcd8eba7f7b99b03103a4e53d8ca1449e5bd610cdb48e39f28e521e91a68",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c408ae2d11823b22979085cb493db5ce896c43b3e05eb87c6ecbe29db12cadcf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao fechar o diálogo de assinatura com Escape, o foco vai para BODY e não volta ao botão Assinar que o abriu.

Esperado: Foco devolvido ao controle que abriu o diálogo.

Janela: 1280×900 · interações desde o carregamento: 1. click table tbody tr:nth-child(2) br-button[title='Assinar'] (botão interno) 2. press Escape

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c408ae2d11823b22979085cb493db5ce896c43b3e05eb87c6ecbe29db12cadcf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c5b5849315ccd83e1885687a4bbe575150547c5ce630ba306dde0a141c64b77e

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Page should contain a level-one heading

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:page-has-heading-one

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Processos Me"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c5b5849315ccd83e1885687a4bbe575150547c5ce630ba306dde0a141c64b77e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c88d9d1593fa1df7762093f45915497526af6444ff9f194e787a214819e9711c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: As opções dos filtros (ex.: "Últimos 7 dias"…"Últimos 90 dias"; o mesmo em Tipo de processo, Status, Petrecho) são só <label> dentro de .br-radio, sem input radio associado, sem role/estado e sem foco; só funcionam por clique. O select de paginação usa input type=radio corretamente.

Esperado: Cada opção com input radio (ou role option) rotulado, selecionável pelo teclado e com estado exposto, como no padrão br-select/br-radio.

Janela: 1280×900 · interações desde o carregamento: 1. click span.br-tag.interaction 'Aberto há'

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.br-select > .br-list.d-block .br-radio > label" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c88d9d1593fa1df7762093f45915497526af6444ff9f194e787a214819e9711c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cad4d79adb02325832a97eab5adc20f60cff9351895427c712812b070ee79f55

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Diálogo de assinatura (role='dialog'): aria-labelledby='swal2-title', mas o h2#swal2-title está vazio e com display:none; o diálogo fica sem nome acessível.

Esperado: Diálogo com nome acessível (título visível ou aria-label, por exemplo 'Assinar documento').

Janela: 1280×900 · interações desde o carregamento: 1. focar e acionar 'Assinar' na linha 00000.000011/2026-00

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

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
  "cardId": "C-cad4d79adb02325832a97eab5adc20f60cff9351895427c712812b070ee79f55",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cd06077215d5ba66208dd487667b79ab3d3f221b149b31d1db936c67fade2a1c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: PDF exibido em <object type="application/pdf"> sem title, aria-label ou conteúdo alternativo.

Esperado: object com nome/alternativa textual (ex.: title "Documento para assinatura" e link de download como fallback).

Janela: 1280×900 · interações desde o carregamento: 1. click table tbody tr:nth-child(2) br-button[title='Assinar'] (botão interno)

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-133` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cd06077215d5ba66208dd487667b79ab3d3f221b149b31d1db936c67fade2a1c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cd8f09c31fe44c8b72e2b20db01b21bdc552371e0c4e22acfb79eb7a826ce4eb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com o filtro 'Status' aberto, as 18 opções são <div class='br-item'> contendo só <label> (sem input, sem tabindex, sem role); o contêiner .br-list.d-block com rolagem também não é focável. As opções só podem ser escolhidas com o mouse.

Esperado: As opções do filtro devem ser focáveis e selecionáveis por teclado, com papel de opção/radio/checkbox.

Janela: 1280×900 · interações desde o carregamento: 1. clicar no filtro 'Status' (.row.align-items-center.pl-2 > div:nth-child(3) > span.br-tag)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.br-list.d-block .br-item" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-041 (axe scrollable-region-focusable em .d-block)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cd8f09c31fe44c8b72e2b20db01b21bdc552371e0c4e22acfb79eb7a826ce4eb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d23ac3ea3bec01d1a0eef6ae9cb6671ab3f6069355af74fe5c40aa0fbd122ce4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os 7 checkboxes da tabela (selecionar todos no cabeçalho e 6 de linha) não têm nome acessível (sem label, aria-label ou aria-labelledby).

Esperado: Cada checkbox com nome acessível (ex.: "Selecionar todos", "Selecionar processo 00000.000011/2026-00").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-16ce15d8175e4756ef820d81558aece5a59a9ea1d13ccaca64c1dc3402b3011b — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3c28a6367e12995224e7f5afd5dac15ee7762ca60ee48e0d4abf5ce893006b35 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-885c785a6047277f435510cb1ae5246d4f5381011391963a9250f8fef05ab39e — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c96c837a2701b44257407074bbea0d85ca61fee2e884d1b7859fcc3269629e80 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e08a3e942e8cd8379ea128937536b24217ce2e0b5927f7896b915beb7616baa0 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e4ff37ae90a166a7c11436fdc7352e655c47743c51c246d382fb0c1d0868a617 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-fd4e5154c03b2c4b76298d61f50564b378b25f235f0a23ba868b5ee394dc14a5 — D-04 · inicial · cena 1280x900 · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-aa92a64c3c90` → identificador devolvido por ferramenta (sem arquivo)
- `F-021` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d23ac3ea3bec01d1a0eef6ae9cb6671ab3f6069355af74fe5c40aa0fbd122ce4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d3d4367afdaea0ababad10c01aa7f1bc03034e9d2e286134c89da15bfa62ea75

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com 9 linhas, a tabela vai de x=92 a x=1242 (largura 1150); o contêiner .br-table e as abas terminam em x=1188. A tabela ultrapassa a grade em 54px (overflow visible). Com poucas linhas, ela fica dentro (x=1188/1198).

Esperado: Tabela contida na largura da área de conteúdo, alinhada às abas e à divisória.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table" — <table> "Aberto há Nº Processo Tipo de Processo Solicitan"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-d3d4367afdaea0ababad10c01aa7f1bc03034e9d2e286134c89da15bfa62ea75",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d844b8e44d9b712b046183789100c944b93e4bc1ce7a4501f16c841d2282fce7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão de busca posicionado com margin -38px 4px 0 0 (inline), fora da escala de espaçamento.

Esperado: Espaçamentos da escala do DS (usar o padrão br-input com ação interna).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>button" — <button> "Buscar"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d844b8e44d9b712b046183789100c944b93e4bc1ce7a4501f16c841d2282fce7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dadb37dcb8c7d813836d34f6b7a38d00f2b2dafd5f8b1acc4239d1a86b018087

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: <li> elements must be contained in a <ul> or <ol>

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:listitem

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li" — <li> "1"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dadb37dcb8c7d813836d34f6b7a38d00f2b2dafd5f8b1acc4239d1a86b018087",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-db66573b9523410c4d4e1d49246376ef713c7345d7de33baff3d9bfab126b5d1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Inicial 'U' do avatar: #ffffff sobre #ff8c00, 24,19px bold (texto grande), contraste 2,33:1.

Esperado: Contraste mínimo de 3:1 para texto grande.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

### Unidades candidatas (não são crédito)

- U-1ac8052cfe1c39b4b3381840f05aa8e8dcafb71f7e686a5aedc803c49f04ca5f — D-14 · sempre · cena 1280x900 · <span> "U": Inicial do avatar "U" branco sobre #ff8c00 = 2,33:1 (24,2 px/700). **exposto** (casco; B-14, C-07). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001 P-01 (.content 2.33)` → identificador devolvido por ferramenta (sem arquivo)
- `V-002 (unverifiable: sem predicado; fato medido no navegador)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-db66573b9523410c4d4e1d49246376ef713c7345d7de33baff3d9bfab126b5d1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dcc1116c88c523ba6aeac8602fb6210d3d73b9563143533b501042d95b26cf5e

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Table header text should not be empty

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:empty-table-header

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)" — <th>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dcc1116c88c523ba6aeac8602fb6210d3d73b9563143533b501042d95b26cf5e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-df60dab71d0a5289608ded1f4748d9451efb1361d193a18b9ce5f5499366ccef

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selos 'Aguardando SFPA', 'Aguardando plano de ação' e 'Aguardando análise' (esta na aba Aguardando análise): #fff de 14px sobre rgb(136,136,136) = 3,54:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando plano de ação"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando SFPA"

### Unidades candidatas (não são crédito)

- U-2a31c652c1de15ddca1e64fbcf431a95e403b5fed0a267279beb5e376abb3a19 — D-06 · inicial · cena 1280x900 · <div> "Aguardando SFPA": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ffa2c82ff6e2dd53e7e93f117cc3ebea7778b7172fc04853bba8da04f3a8ec19 — D-06 · inicial · cena 1280x900 · <div> "Aguardando plano de ação": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-df60dab71d0a5289608ded1f4748d9451efb1361d193a18b9ce5f5499366ccef",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-df91504eb036f73e4e238e1680bf4af13fde182d3fe0e83dcc2d07e5aaddec69

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (2 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise diretor"

### Unidades candidatas (não são crédito)

- U-020360fe0ac1b486fa68bac1572f06684b64bbf0c16f9ef7e3d693f04d91b193 — D-06 · inicial · cena 1280x900 · <div> "Em análise diretor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-df91504eb036f73e4e238e1680bf4af13fde182d3fe0e83dcc2d07e5aaddec69",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e12e0a36f21d2992e42531f79674df4c96c20a95e6b60483438a32c8ae777f5e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A aba ativa (Tramitando, li.tab-item.active) só é indicada visualmente (borda 4px #0c326f); os botões não têm role="tab", aria-selected nem aria-current.

Esperado: Estado selecionado da aba exposto programaticamente (role tab + aria-selected="true", ou aria-current).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-e12e0a36f21d2992e42531f79674df4c96c20a95e6b60483438a32c8ae777f5e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e6eac0b07cec4a505c85f7de52ea334a4876011d33fffd22ec77a4401ea78ebc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No breadcrumb, o item 'Home' é um <a href='/portal-mpa/'> que contém um <button>: dois pontos de foco seguidos (link e botão) para o mesmo item, e conteúdo interativo aninhado (inválido em HTML).

Esperado: Usar um único elemento interativo (o link) para o item 'Home'.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb" — <br-breadcrumb>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser: Tab a partir do <a> focou o <button> interno` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e6eac0b07cec4a505c85f7de52ea334a4876011d33fffd22ec77a4401ea78ebc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e88c2841348b88c88744bf679608de55282210e3619fc3fd7e2752f6fa5bf522

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com foco na aba "Aguardando análise", ArrowRight não move o foco nem muda a aba (foco permaneceu em AGUARDANDO_ANALISE; aba ativa continuou TRAMITANDO).

Esperado: Navegação entre abas pelas setas esquerda/direita além de Tab.

Janela: 1280×900 · interações desde o carregamento: 1. focus aba Aguardando análise 2. press ArrowRight

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-e88c2841348b88c88744bf679608de55282210e3619fc3fd7e2752f6fa5bf522",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e9870f31955649cef2ec7d679a1483c9f0d94f049ae063b8d868b72826f7e431

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao fechar o diálogo 'Confirma a assinatura de 1 processo(s)?' por 'Cancelar' (ou Esc), o foco vai para <body> em vez de voltar ao botão 'Assinar selecionados' que o abriu.

Esperado: Ao fechar o diálogo, o foco deve voltar ao controle que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. marcar checkbox da linha 2 2. focar o botão 'Assinar selecionados' e pressionar Enter 3. no diálogo, focar 'Cancelar' e pressionar Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:br-button[label=\"Assinar selecionados\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `browser: document.activeElement = BODY após o fechamento` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-006 (estado do diálogo aberto)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e9870f31955649cef2ec7d679a1483c9f0d94f049ae063b8d868b72826f7e431",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eb538dd1629822b487f6eb1a4de990218da9bb4e491ac7ee15789c3aef0825e3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O diálogo de confirmação de 'Desassociar processo' (role='dialog', aria-labelledby='swal2-title') tem o título vazio: o diálogo não tem nome acessível.

Esperado: O diálogo deve ter nome acessível (título visível referenciado por aria-labelledby ou aria-label).

Janela: 1280×900 · interações desde o carregamento: 1. clicar 'Desassociar processo do analista responsável' da linha 1 (tr:nth-child(1) br-button[title='Desassociar processo do analista responsável'] button)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-091` → identificador devolvido por ferramenta (sem arquivo)
- `axe: aria-dialog-name` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-eb538dd1629822b487f6eb1a4de990218da9bb4e491ac7ee15789c3aef0825e3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ecc43052c6961e2bcba01677729b187cca1f25cc37fbf36c4c22a2505a708ae5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Menu' (button#navigation, data-target='#main-navigation') não abre nada: o alvo #main-navigation não existe na página e o clique não muda o DOM; o botão também não tem aria-expanded/aria-controls válidos.

Esperado: O botão 'Menu' deve abrir o menu principal do DS (e expor aria-expanded), ou ser removido se não houver menu.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>pnip-root>pnip-header>br-header" — <br-header>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `browser: clique real em 'Menu' sem efeito; #main-navigation ausente` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ecc43052c6961e2bcba01677729b187cca1f25cc37fbf36c4c22a2505a708ae5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ecf865f87255ce6375d54aa686fb9b019b35cabae9d47275a40808a86e3da8f7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: div role='menu' sem nenhum descendente role='menuitem'; contém texto, span clicável e um button comum.

Esperado: Papel menu só com itens menuitem, ou remoção de role='menu' (padrão disclosure).

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão do avatar (#avatar-dropdown-trigger)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-ecf865f87255ce6375d54aa686fb9b019b35cabae9d47275a40808a86e3da8f7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ed5835ffb6286c1969f0410d6f07f8fbe54f071c6168b4e58d1225ef9c449ed0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Não há link de atalho para o conteúdo; o primeiro Tab vai direto ao botão 'Menu' do cabeçalho.

Esperado: Atalhos (âncoras) no início da página, por exemplo 'Ir para o conteúdo'.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.5

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>pnip-header" — <pnip-header> "U Olá, Usuária de Teste, SUPERVISOR"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-ed5835ffb6286c1969f0410d6f07f8fbe54f071c6168b4e58d1225ef9c449ed0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-efae7dd81b59767b7520a79ac3603161e11954d8f7ae8bf15fbbd01dd3f48f2c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Diálogo de confirmação 'Tem certeza que deseja desassociar…' (role='dialog'): aria-labelledby aponta para o h2#swal2-title vazio e oculto; o diálogo fica sem nome acessível.

Esperado: Diálogo com nome acessível (título).

Janela: 1280×900 · interações desde o carregamento: 1. focar e acionar 'Desassociar processo do analista responsável' (habilitado) na linha 00000.000010/2026-00

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

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
  "cardId": "C-efae7dd81b59767b7520a79ac3603161e11954d8f7ae8bf15fbbd01dd3f48f2c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f01c8191855bfe08ee4d43851d3c6adec94e998cf04f51844619a5fc35d57c25

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O diálogo de 'Assinar' (visualização do PDF com 'Solicitar Revisão' e 'Assinar com gov.br') tem o h2#swal2-title vazio e oculto: o diálogo não tem nome acessível.

Esperado: O diálogo deve ter nome acessível, ex.: 'Assinar processo 00000.000011/2026-00'.

Janela: 1280×900 · interações desde o carregamento: 1. clicar 'Assinar' da linha 2 (tr:nth-child(2) br-button[title='Assinar'] button)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-100` → identificador devolvido por ferramenta (sem arquivo)
- `axe: aria-dialog-name` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f01c8191855bfe08ee4d43851d3c6adec94e998cf04f51844619a5fc35d57c25",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f4048169871138d0df166d381e7cea4dd2374d6e5792d8af15c44aec749dac1c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A ordenação da coluna "Aberto há" é acionada por clique no ícone (sort-down→sort-up), que não é focalizável; o th não tem aria-sort.

Esperado: Controle de ordenação como botão focalizável, com estado de ordenação exposto (aria-sort no th).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(1)>br-icon-base" — <br-icon-base>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-f4048169871138d0df166d381e7cea4dd2374d6e5792d8af15c44aec749dac1c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f8c600c24affb202886054f5874286acb6086685341fe9e0042684f4d5bac151

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selo 'Aguarda complementos': #fff de 14px sobre rgb(130,137,255) = 3,01:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguarda complementos"

### Unidades candidatas (não são crédito)

- U-039cdeb0126715207688cb7da2f3306eef77199fc525db06185fbad80f0e6b4a — D-06 · inicial · cena 1280x900 · <div> "Aguarda complementos": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db87ddaea80ca56d7d31915094c308e4eb36d78cb66725de0de4e90227e5aa9c — D-07 · inicial · cena 1280x900 · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-f8c600c24affb202886054f5874286acb6086685341fe9e0042684f4d5bac151",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fa74a261db8b93a21d5ae3570c877f503ea3f79929a99da99baea79a82c1c321

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões das abas têm aria-label 'AGUARDANDO_ANALISE', 'TRAMITANDO' e 'HISTORICO'; os textos visíveis são 'Aguardando análise', 'Tramitando' e 'Concluídos'.

Esperado: O nome acessível das abas corresponde ao texto visível.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-fa74a261db8b93a21d5ae3570c877f503ea3f79929a99da99baea79a82c1c321",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fc2ffc9a57bb99b10fdc93197e4625d3b62b4ad8d78e323c353615d5d38d3cd6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Não há links de atalho (ex.: 'Ir para o conteúdo'): o primeiro elemento focável por Tab é o botão 'Menu' do cabeçalho.

Esperado: Fornecer âncoras/atalhos no início da página para ir direto ao conteúdo principal, menu e busca.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.5

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Processos Me"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `browser: primeiro Tab focou button#navigation 'Menu'` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fc2ffc9a57bb99b10fdc93197e4625d3b62b4ad8d78e323c353615d5d38d3cd6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fefa75672ed4ac5e8eff470de72890f1babea697a310acfd4f9a216b5cd91150

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Diálogo de assinatura (SweetAlert2, role=dialog, aria-modal) com aria-labelledby="swal2-title" apontando para h2 vazio e oculto: diálogo sem nome acessível.

Esperado: Diálogo com título visível referenciado por aria-labelledby.

Janela: 1280×900 · interações desde o carregamento: 1. click table tbody tr:nth-child(2) br-button[title='Assinar'] (botão interno)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-124` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fefa75672ed4ac5e8eff470de72890f1babea697a310acfd4f9a216b5cd91150",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ff0078c8489367bc89e2cfb4ad322611226da7f2ff0dfa18db9259335b8c2627

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página não tem h1; o título principal "Processos" é h2 (único heading da página).

Esperado: Título principal da página marcado como h1, iniciando a hierarquia.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2" — <h2> "Processos"

### Unidades candidatas (não são crédito)

- U-604beea52fc35cbe54811ba49805a30537d1dfc84a37da78bd87ec306a401164 — D-12 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8ffdcc00bb9198205a176a85d3f06e9c3e263d67bb04b0bbc5413090e872e223 — D-11 · sempre · cena 1280x900 · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-029` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ff0078c8489367bc89e2cfb4ad322611226da7f2ff0dfa18db9259335b8c2627",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
