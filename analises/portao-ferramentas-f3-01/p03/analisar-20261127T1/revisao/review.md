# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 33 cartões únicos · 33 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 33 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 76 sujeitos · 33 cartão(ões) sem evidência verificada · 26 com unidade candidata · estimativa **198 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

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

**Este plano navega (D-60):** cada janela tem uma cena por SEGMENTO, capturada na última parada dele (1280x900@lista-exibir = /pnip-f3/portal-mpa/processos · 1280x900@assinatura-cancelada = /pnip-f3/portal-mpa/processos · 1280x900@pagina-2 = /pnip-f3/portal-mpa/processos · 1280x900@exibir-25 = /pnip-f3/portal-mpa/processos · 1280x900@filtro-removido = /pnip-f3/portal-mpa/processos). Quando o seletor de uma alegação resolve em mais de um segmento, o cartão lista os sujeitos de cada um e a decisão precisa dizer em `"cena"` de qual segmento a alegação fala (pelos passos declarados e pela evidência). Só os sujeitos dessa cena contam; os dos outros segmentos não são alegação.

Um átomo = um defeito. subjects identifica cada elemento alegado; unitIds contém somente alternativas semanticamente aceitas.
Cada átomo/elemento vale no máximo uma detecção. Divida alegações compostas; contabilize também as partes falsas.
Duplicatas revisadas: no átomo repetido, acrescente duplicateOf: { "cardId": "C-...", "atomId": "..." }. A citação continua avaliada separadamente.

**Vínculo de revisão (exceção declarada):** quando a alegação está certa sobre uma unidade que a ancoragem não ofereceu (ausência global ancorada em <html>/body, host no lugar do controle interno, participante relacionado, transição), acrescente ao átomo `"links"`: [{ "contrato": "vinculo-revisao-1.0.0", "unitId", "subjects", "scene", "state" (estado medido), "relation" (ausencia-global | host-interno | participante-relacionado | transicao), "evidence", "justification", "reviewer" (você), "binding" (o do cartão) }]. Nada cria vínculo por você; o scorer recusa outra cena, estado não medido, relação que não cabe na árvore medida, falta de evidência.

## C-048a896497b4ae1d3800bfa1f764b19679bd38c64ec8f014f3015f87334daef7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: 7 caixas de seleção da tabela (1 no cabeçalho, 6 nas linhas) sem label, aria-label nem aria-labelledby; nome acessível vazio

Esperado: Cada checkbox com nome acessível (ex.: "Selecionar todos", "Selecionar processo 00000.000011/2026-00")

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>


### Unidades candidatas (não são crédito)

- U-0b07a906de8ee883e56577a27d50c60c9005ba66b91eb3c9a80e2096780b9c71 — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d60362290b6706e23c1997aa80708bf17c52f51899da6ac7c14d369c62e62a5f — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-012` → identificador devolvido por ferramenta (sem arquivo)
- `F-013` → identificador devolvido por ferramenta (sem arquivo)
- `F-014` → identificador devolvido por ferramenta (sem arquivo)
- `F-015` → identificador devolvido por ferramenta (sem arquivo)
- `F-016` → identificador devolvido por ferramenta (sem arquivo)
- `F-017` → identificador devolvido por ferramenta (sem arquivo)
- `F-018` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-048a896497b4ae1d3800bfa1f764b19679bd38c64ec8f014f3015f87334daef7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-096e1068ae61bb2918c6f3b90e62d18fb2a5b5fb6235cc535a25df167aad8829

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Diálogo de "Assinar" (role=dialog, aria-modal) com aria-labelledby="swal2-title", que está oculto e vazio: sem nome acessível

Esperado: Diálogo com nome acessível (título visível referenciado)

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[title='Assinar']

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido)

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-013` → identificador devolvido por ferramenta (sem arquivo)
- `F-088` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-096e1068ae61bb2918c6f3b90e62d18fb2a5b5fb6235cc535a25df167aad8829",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0b14c1306a58bf01346d2432bddea02c46362f19187510600b6ef273530c9dde

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Botão fechar do diálogo de assinatura tem aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang próprio

Esperado: Rótulo em português (ex.: "Fechar") ou lang="en" na parte

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[title='Assinar']

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido)

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-013` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0b14c1306a58bf01346d2432bddea02c46362f19187510600b6ef273530c9dde",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1649a8284a6d25cf5afeb5305ddb6714e99d8b3bf2bc3f7edb4a1ac0453790ae

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No detalhe de Habilitação para mercados específicos (uniao-europeia, Deferida), a[role=button] vazio, sem nome acessível

Esperado: Controle com nome acessível

Janela: 1280×900 · interações desde o carregamento: 1. click br-tab button[data-panel=HISTORICO] (aba Concluídos) 2. click tbody tr:nth-child(1) br-button[title='Ver processo'] (00000.000033/2026-00, Deferida)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>a" — <a> "00000.000043/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>a" — <a> "00000.000044/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>a" — <a> "00000.000045/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>a" — <a> "00000.000046/2026-00"

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>a" — <a> "00000.000033/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(2)>a" — <a> "00000.000042/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(11)>td:nth-of-type(2)>a" — <a> "00000.000043/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(12)>td:nth-of-type(2)>a" — <a> "00000.000044/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(13)>td:nth-of-type(2)>a" — <a> "00000.000045/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(14)>td:nth-of-type(2)>a" — <a> "00000.000046/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>a" — <a> "00000.000034/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>a" — <a> "00000.000035/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>a" — <a> "00000.000036/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(2)>a" — <a> "00000.000037/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>a" — <a> "00000.000038/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>a" — <a> "00000.000039/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(2)>a" — <a> "00000.000040/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>a" — <a> "00000.000041/2026-00"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"


### Unidades candidatas (não são crédito)

- U-033900ce39792a7a975d9ede11c03d4245efb338c0d9cb851c401d2960781358 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000019/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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

- `S-page-017` → identificador devolvido por ferramenta (sem arquivo)
- `F-133` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1649a8284a6d25cf5afeb5305ddb6714e99d8b3bf2bc3f7edb4a1ac0453790ae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-17ad551bbdd29414638d2d8d31a00b02eae162e82b1f23ad98713260f448cc89

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Inicial "U" do avatar: texto branco #ffffff sobre #ff8c00, 24,19px bold (texto grande): contraste 2,33:1

Esperado: Contraste mínimo de 3:1 para texto grande

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag-1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-1e437f24be5e43f36a21441850c4ca80dd8b8ecbf74a212aaf2509122e57cfcd — D-14 · sempre · cena 1280x900@filtro-removido · <span> "U": Inicial do avatar "U" branco sobre #ff8c00 = 2,33:1 (24,2 px/700). **exposto** (casco; B-14, C-07). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8379bc34307fd944040aa375ee2f97cc7b10d83972a585f4f8b49eeea1e75bd6 — F3-02 · inicial · cena 1280x900@lista-exibir · <span> "U": Avatar de letra no cabeçalho ("U"): o conteúdo interno do avatar não tem a classe `content` (o span tem só bg-orange-vivid-30 e text-pure-0). Sem ela, o avatar vira um retângulo laranja estreito (cerca de 18×40 px, border-radius 0, display block) com a letra encostada, em vez da superfície circular de 40×40 com a letra centralizada. No Avatar, a classe `content` é propriedade obrigatória do conteúdo interno.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [border-top-left-radius] fora de {50%}. Medido: border-top-left-radius=0px | border-top-left-radius=0px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `P-01` → identificador devolvido por ferramenta (sem arquivo)
- `V-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-17ad551bbdd29414638d2d8d31a00b02eae162e82b1f23ad98713260f448cc89",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1f374648f4e2154a78374803c629bb5c292cd8ebdc619c2a042d7ad31bfbb3fe

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No detalhe de CAOL, a[role=button] vazio na tabela de resumo, sem nome acessível

Esperado: Controle com nome acessível

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[title='Ver processo'] (registro 00000.000011/2026-00, Em análise supervisor)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>a" — <a> "00000.000043/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>a" — <a> "00000.000044/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>a" — <a> "00000.000045/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>a" — <a> "00000.000046/2026-00"

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>a" — <a> "00000.000033/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(2)>a" — <a> "00000.000042/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(11)>td:nth-of-type(2)>a" — <a> "00000.000043/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(12)>td:nth-of-type(2)>a" — <a> "00000.000044/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(13)>td:nth-of-type(2)>a" — <a> "00000.000045/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(14)>td:nth-of-type(2)>a" — <a> "00000.000046/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>a" — <a> "00000.000034/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>a" — <a> "00000.000035/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>a" — <a> "00000.000036/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(2)>a" — <a> "00000.000037/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>a" — <a> "00000.000038/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>a" — <a> "00000.000039/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(2)>a" — <a> "00000.000040/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>a" — <a> "00000.000041/2026-00"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"


### Unidades candidatas (não são crédito)

- U-033900ce39792a7a975d9ede11c03d4245efb338c0d9cb851c401d2960781358 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000019/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-069` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1f374648f4e2154a78374803c629bb5c292cd8ebdc619c2a042d7ad31bfbb3fe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-283b6371be82080e9213f916aef34c5aa9c97b8484dd3e0ec916c60089d44581

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Números de processo são a[role=button] sem href nem tabindex; focus() não os foca e a navegação por Tab os ignora

Esperado: Elemento focável e operável por teclado (button ou link com href)

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>a" — <a> "00000.000043/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>a" — <a> "00000.000044/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>a" — <a> "00000.000045/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>a" — <a> "00000.000046/2026-00"

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>a" — <a> "00000.000033/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(2)>a" — <a> "00000.000042/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(11)>td:nth-of-type(2)>a" — <a> "00000.000043/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(12)>td:nth-of-type(2)>a" — <a> "00000.000044/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(13)>td:nth-of-type(2)>a" — <a> "00000.000045/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(14)>td:nth-of-type(2)>a" — <a> "00000.000046/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>a" — <a> "00000.000034/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>a" — <a> "00000.000035/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>a" — <a> "00000.000036/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(2)>a" — <a> "00000.000037/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>a" — <a> "00000.000038/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>a" — <a> "00000.000039/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(2)>a" — <a> "00000.000040/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>a" — <a> "00000.000041/2026-00"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"


### Unidades candidatas (não são crédito)

- U-033900ce39792a7a975d9ede11c03d4245efb338c0d9cb851c401d2960781358 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000019/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-283b6371be82080e9213f916aef34c5aa9c97b8484dd3e0ec916c60089d44581",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2f2e1fd495fc72a8ed547a253292da965ed8a64f3426112bd993870b6f1f188a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Logotipo do cabeçalho (img no shadow root de br-header) com alt="logo"

Esperado: Texto alternativo que identifique o logotipo (ex.: "gov.br")

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>pnip-header>br-header" — <br-header>


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
  "cardId": "C-2f2e1fd495fc72a8ed547a253292da965ed8a64f3426112bd993870b6f1f188a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-31c59d206e9f30274eb94bf2945c1bff360db9b400cc145695aae2a07dbe9d9c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Etiquetas "Aguardando plano de ação" e "Aguardando SFPA": texto branco sobre #888888, 14px normal: contraste 3,54:1

Esperado: Contraste mínimo de 4,5:1

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando plano de ação"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando SFPA"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando plano de ação"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando SFPA"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando plano de ação"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando SFPA"


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-414f88f3a44f5b394aabf7a189cd6e7c3e7a4318a6e5401d06495cc3d36c046a — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Aguardando SFPA": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-60228d39e68cb0c60e66169ffac88738a6f86c47e366c917b15bad49975f111f — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Aguardando plano de ação": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-008` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-31c59d206e9f30274eb94bf2945c1bff360db9b400cc145695aae2a07dbe9d9c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-33bcdbf60fbcc5f07f84d29e2ac23e51016802e9252305545043d4fc7da1dd90

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Cabeçalho da coluna de ações (Ver processo/Desassociar/Assinar) é um th vazio

Esperado: Cabeçalho de coluna com texto (ex.: "Ações"), ainda que visualmente oculto

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(9)" — <th>

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(9)" — <th>

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(8)" — <th>

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(8)" — <th>

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(9)" — <th>


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ea935ea906aacf990d819d776b85cf2dd9a1fae6ec0131b6e8487a1f7077e28a — D-08 · inicial · cena 1280x900@lista-exibir · <th>: Cabeçalho da coluna de ações (Ver processo / Desassociar / Assinar): <th scope="col"> vazio, columnheader sem nome na árvore — as células de ação ficam sem cabeçalho identificável. Precedente B-26 (D-61). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-010` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-33bcdbf60fbcc5f07f84d29e2ac23e51016802e9252305545043d4fc7da1dd90",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-37b1ee804c0ac5b2b8d89ffd97fbd2715ea6ebed1b34b2783e1a174795fc0665

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Imagem exit-icon.png do botão "Sair" sem atributo alt

Esperado: alt="" (decorativa, o botão já tem o texto "Sair")

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-035` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-37b1ee804c0ac5b2b8d89ffd97fbd2715ea6ebed1b34b2783e1a174795fc0665",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-384f086106bc8d43cb71cec559487e9ffd7e64592e434e8e70f723a035998278

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Não há link de salto para o conteúdo: o primeiro Tab vai para o botão Menu do cabeçalho

Esperado: Âncora "Ir para o conteúdo" no início da página apontando para main

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.5

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>pnip-header>br-header" — <br-header>


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
  "cardId": "C-384f086106bc8d43cb71cec559487e9ffd7e64592e434e8e70f723a035998278",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-38d0089d2ab4a16064a704bcdabcb4130b40249ef2efecf406a8efbd4256e4f7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A aba ativa é indicada só pela classe CSS li.tab-item.active; os botões das abas não têm role="tab", aria-selected nem aria-current

Esperado: Estado selecionado da aba exposto programaticamente (role tab + aria-selected="true" ou aria-current)

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
  "cardId": "C-38d0089d2ab4a16064a704bcdabcb4130b40249ef2efecf406a8efbd4256e4f7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-391362eb160b132086b3ff7dfac76b130a5e9a9c33cadcbf2fec9f17d4beef6d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Pré-visualização do PDF (object type=application/pdf) sem title, aria-label nem conteúdo alternativo

Esperado: object com nome/alternativa textual (ex.: title="Prévia do documento a assinar")

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[title='Assinar']

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido)

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-013` → identificador devolvido por ferramenta (sem arquivo)
- `F-097` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-391362eb160b132086b3ff7dfac76b130a5e9a9c33cadcbf2fec9f17d4beef6d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3a66a4cf0abe1e695d2ca24cc29ded7e140211581be2fac5f89332d5847bd8dc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Etiqueta "Aguarda complementos": texto branco sobre #8289ff, 14px normal: contraste 3,01:1

Esperado: Contraste mínimo de 4,5:1

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguarda complementos"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguarda complementos"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguarda complementos"


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-df345d6a8dd12bb3d5984839e301ee472e3ea7226f2379f074985ad5e88e6b6e — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Aguarda complementos": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3a66a4cf0abe1e695d2ca24cc29ded7e140211581be2fac5f89332d5847bd8dc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-40811fa65c417017c812adec6e107c69e0bcd538863e73b8167f0c519b67f691

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Botões das abas (no shadow root de br-tab) têm aria-label com identificadores técnicos "AGUARDANDO_ANALISE", "TRAMITANDO", "HISTORICO", enquanto o texto visível é "Aguardando análise", "Tramitando", "Concluídos"

Esperado: Nome acessível que contenha o texto visível de cada aba (remover o aria-label ou igualá-lo ao rótulo)

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
  "cardId": "C-40811fa65c417017c812adec6e107c69e0bcd538863e73b8167f0c519b67f691",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4f1e34f7440671530a681be0c2d8cf084461ea7aef57101fffb154423152bc6a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: iframe (about:blank, 1160x500px) sem title, aria-label ou aria-labelledby

Esperado: iframe com título que descreva seu conteúdo, ou removido se não tiver conteúdo

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f754cef40cc00f91f8926f0f6c764cc8fbc88b367b2c5cca1ca4e99f9b2d9f3e — D-10 · inicial · cena 1280x900@lista-exibir · <iframe>: <iframe> vazio no fim do componente (sem src, documento about:blank sem conteúdo, 1160×500 px, sem title, name nem aria-label; papel Iframe com nome "" na árvore): é ponto de Tab depois do "Voltar" e, focado, nada muda na tela (outline none, sem sombra, :focus-visible falso). Depois dele o Tab real alterna iframe ↔ body (E-01); Shift+Tab sai para o "Voltar". Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-011` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4f1e34f7440671530a681be0c2d8cf084461ea7aef57101fffb154423152bc6a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5c52bfd16793408b11e4ed2735f0d4d9eb559861c3dfeb804f384955876f998a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Menu do usuário aberto tem role="menu", mas os filhos não são menuitem (div, span e button "Sair")

Esperado: Papel e filhos coerentes: role menu com menuitem, ou sem role menu

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-023` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5c52bfd16793408b11e4ed2735f0d4d9eb559861c3dfeb804f384955876f998a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6c637ba697f211a67ad741d219a0b120de62690319d7ae3539d32ddcad5a17fc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: 13 ícones decorativos (ícones e setas dos filtros, relógio de "Última atualização") sem aria-hidden; aparecem na árvore de acessibilidade como caracteres de uso privado

Esperado: Ícones decorativos com aria-hidden="true"

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>i" — <i>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>span:nth-of-type(2)" — <span>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>i" — <i>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>span:nth-of-type(2)" — <span>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>i" — <i>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>span:nth-of-type(2)" — <span>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>i" — <i>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>span:nth-of-type(2)" — <span>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>i" — <i>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>span:nth-of-type(2)" — <span>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>i" — <i>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>span:nth-of-type(2)" — <span>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(1)>i" — <i>

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>i" — <i>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>span:nth-of-type(2)" — <span>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>i" — <i>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>span:nth-of-type(2)" — <span>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>i" — <i>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>span:nth-of-type(2)" — <span>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>i" — <i>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>span:nth-of-type(2)" — <span>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>i" — <i>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>span:nth-of-type(2)" — <span>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>i" — <i>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>span:nth-of-type(2)" — <span>
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(1)>i" — <i>

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>i" — <i>
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>span:nth-of-type(2)" — <span>
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>i" — <i>
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>span:nth-of-type(2)" — <span>
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>i" — <i>
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>span:nth-of-type(2)" — <span>
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>i" — <i>
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>span:nth-of-type(2)" — <span>
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>i" — <i>
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>span:nth-of-type(2)" — <span>
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>i" — <i>
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>span:nth-of-type(2)" — <span>
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>i" — <i>

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>i" — <i>
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>span:nth-of-type(2)" — <span>
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>i" — <i>
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>span:nth-of-type(2)" — <span>
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>i" — <i>
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>span:nth-of-type(2)" — <span>
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>i" — <i>
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>span:nth-of-type(2)" — <span>
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>i" — <i>
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>span:nth-of-type(2)" — <span>
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>i" — <i>
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>span:nth-of-type(2)" — <span>
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>i" — <i>

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>i" — <i>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>span:nth-of-type(2)" — <span>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>i" — <i>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>span:nth-of-type(2)" — <span>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>i" — <i>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>span:nth-of-type(2)" — <span>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>i" — <i>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>span:nth-of-type(2)" — <span>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>i" — <i>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>span:nth-of-type(2)" — <span>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>i" — <i>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>span:nth-of-type(2)" — <span>
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(1)>i" — <i>


### Unidades candidatas (não são crédito)

- U-03b70c230745fcab911019bee917fc96d455c9b0bdabab5cc53d0f3100bfabc9 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Método de pesca": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-06d7dd4e946fa87e21ce594f8e6c1233505ee0876ebc653085da3c8b1e10d1b1 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Tipo de processo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d339cacb503d4668ae18ec3b1745062bb4f08bba29b990b09a1619276a49d5be — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Petrecho": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
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
  "cardId": "C-6c637ba697f211a67ad741d219a0b120de62690319d7ae3539d32ddcad5a17fc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-76099fdadc2eea106fe18551f7a0c1101fdf96a0a10d4a75effb529df9fea798

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No detalhe de Alteração de Certificado (00000.000028/2026-00, Em análise diretor), a[role=button] vazio na célula Protocolo, sem nome acessível

Esperado: Controle com nome acessível

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(8) br-button[title='Ver processo'] (registro 00000.000028/2026-00, Em análise diretor)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>a" — <a> "00000.000043/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>a" — <a> "00000.000044/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>a" — <a> "00000.000045/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>a" — <a> "00000.000046/2026-00"

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>a" — <a> "00000.000033/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(2)>a" — <a> "00000.000042/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(11)>td:nth-of-type(2)>a" — <a> "00000.000043/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(12)>td:nth-of-type(2)>a" — <a> "00000.000044/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(13)>td:nth-of-type(2)>a" — <a> "00000.000045/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(14)>td:nth-of-type(2)>a" — <a> "00000.000046/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>a" — <a> "00000.000034/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>a" — <a> "00000.000035/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>a" — <a> "00000.000036/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(2)>a" — <a> "00000.000037/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>a" — <a> "00000.000038/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>a" — <a> "00000.000039/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(2)>a" — <a> "00000.000040/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>a" — <a> "00000.000041/2026-00"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"


### Unidades candidatas (não são crédito)

- U-033900ce39792a7a975d9ede11c03d4245efb338c0d9cb851c401d2960781358 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000019/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-080` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-76099fdadc2eea106fe18551f7a0c1101fdf96a0a10d4a75effb529df9fea798",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-90460e717b22572803f62410469df1368d02600d675f5b6d7592d4db95012335

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Link "Home" da trilha aponta para /portal-mpa/ (fetch: HTTP 404) e o item "Processos" usa href relativo "portal-mpa/processos" (resolve para /pnip-f3/portal-mpa/portal-mpa/processos)

Esperado: Links da trilha apontando para rotas válidas da aplicação (/pnip-f3/portal-mpa/...)

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb" — <br-breadcrumb>

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb" — <br-breadcrumb>

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb" — <br-breadcrumb>

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb" — <br-breadcrumb>

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb" — <br-breadcrumb>


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
  "cardId": "C-90460e717b22572803f62410469df1368d02600d675f5b6d7592d4db95012335",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-968db07b9547e47d399748831f2b500e82b93d61dd4269a28ea053abe1e60844

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Na paginação, o li do número de página está aninhado diretamente em outro li (li > li), sem ul/ol pai

Esperado: Itens de lista como filhos diretos de ul/ol

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(1)>li" — <li> "1"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(1)>li" — <li> "1"

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(1)>li" — <li> "1"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li" — <li> "2"

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(1)>li" — <li> "1"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(1)>li" — <li> "1"


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2d1dd9740eef2ed91827d80c090fce19feb5c171fc9ad5871969bdb4df52947f — F3-01 · sempre · cena 1280x900@filtro-removido · <ul> "1": Paginação no rodapé da tabela: só existe a seta "Página seguinte" (botão à direita dos números de página); a seta "Página anterior" não existe em nenhuma página da lista. Na carga, o número "1" fica sem seta antes dele; na página 2 (por exemplo na aba "Concluídos", 14 itens, depois de "Página seguinte") também não há seta para voltar, só o número "1". O defeito vale em qualquer página e em qualquer aba. A Pagination tem duas setas de navegação obrigatórias, um botão para a esquerda e outro para a direita.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-019` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-968db07b9547e47d399748831f2b500e82b93d61dd4269a28ea053abe1e60844",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a0528e7a3dade798f0a3816c4c6e37fb80b8664558e20ef88e11bed99d9ce7e4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O título principal "Processos" é h2; a página não tem nenhum h1

Esperado: Título principal do conteúdo marcado como h1 e hierarquia de cabeçalhos a partir dele

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2" — <h2> "Processos"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2" — <h2> "Processos"

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2" — <h2> "Processos"

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2" — <h2> "Processos"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2" — <h2> "Processos"


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
  "cardId": "C-a0528e7a3dade798f0a3816c4c6e37fb80b8664558e20ef88e11bed99d9ce7e4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-abb61a14977050184b3b3bd465854a185d8c1315a7320635d67c504ba24c856f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Título da página é apenas "PNIP"

Esperado: Título que descreva a página (ex.: "Processos - PNIP")

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.4.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|head>title" — <title> "PNIP" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-56084060f7ef2c4bd8d8c71323d20a2713cab998a0e511d90a605ece66dbc7ef — D-13 · sempre · cena 1280x900@filtro-removido · <title> "PNIP": <title>PNIP</title> nas 2 paradas: nomeia só o sistema, não o conteúdo principal ("Processos"). **exposto** (casco; B-25, C-06). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
  "cardId": "C-abb61a14977050184b3b3bd465854a185d8c1315a7320635d67c504ba24c856f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b576fdf06e33015b69147ffde31bac47337d7614d1446c4dda6ac7e96fb17951

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Diálogo de confirmação "Desassociar" (role=dialog) com aria-labelledby apontando para swal2-title oculto e vazio: sem nome acessível

Esperado: Diálogo com nome acessível

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[title^='Desassociar']

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido)

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-014` → identificador devolvido por ferramenta (sem arquivo)
- `F-098` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b576fdf06e33015b69147ffde31bac47337d7614d1446c4dda6ac7e96fb17951",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c03cb450565c48a7f4dd52b4959be1cf63531c3675fb6bd5fe09ac275acdc2eb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Trocar unidade" é span com cursor:pointer, sem tabindex nem role (tabIndex -1)

Esperado: Controle focável e operável por teclado (button)

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
  "cardId": "C-c03cb450565c48a7f4dd52b4959be1cf63531c3675fb6bd5fe09ac275acdc2eb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c0729fdfd2b3ed591ff02d7aa4cea53781af9162aaa64f80847f7480bc2227fb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Ícones clicáveis de Ofício e Certificado (cursor:pointer) no detalhe de Alteração de Certificado sem role, nome nem foco (tabIndex -1)

Esperado: Botões ou links focáveis e com nome

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[title='Ver processo'] (registro 00000.000010/2026-00, Em análise analista)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido)

### Sujeitos

- "unresolved:tbody br-icon-base[icon-name^=\"file\"]" — Seletor não resolvido

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
  "cardId": "C-c0729fdfd2b3ed591ff02d7aa4cea53781af9162aaa64f80847f7480bc2227fb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c1a9abdd849608da410892bc899576d987d70766327144644aaed1943c52a853

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: No detalhe de Desvínculo (Cancelada), botão da coluna Ofício TR (shadow de br-button) com aria-label="" e sem texto: sem nome acessível

Esperado: Botão com nome acessível (ex.: "Baixar ofício")

Janela: 1280×900 · interações desde o carregamento: 1. click br-tab button[data-panel=HISTORICO] (aba Concluídos) 2. click tbody tr:nth-child(3) br-button[title='Ver processo'] (00000.000035/2026-00, Cancelada)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido)

### Sujeitos

- "unresolved:td:nth-child(6) > br-button" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-019` → identificador devolvido por ferramenta (sem arquivo)
- `F-138` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c1a9abdd849608da410892bc899576d987d70766327144644aaed1943c52a853",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cdf4c49a393d7549a146698b2dc19efb2a0b6e6cb6751f7ebc7e5723abf2a053

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No detalhe de Alteração de Certificado (00000.000010/2026-00), a célula Protocolo tem a[role=button] vazio, sem nome acessível

Esperado: Controle com nome acessível ou removido quando sem conteúdo

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[title='Ver processo'] (registro 00000.000010/2026-00, Em análise analista)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>a" — <a> "00000.000043/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>a" — <a> "00000.000044/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>a" — <a> "00000.000045/2026-00"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>a" — <a> "00000.000046/2026-00"

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>a" — <a> "00000.000033/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(2)>a" — <a> "00000.000042/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(11)>td:nth-of-type(2)>a" — <a> "00000.000043/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(12)>td:nth-of-type(2)>a" — <a> "00000.000044/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(13)>td:nth-of-type(2)>a" — <a> "00000.000045/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(14)>td:nth-of-type(2)>a" — <a> "00000.000046/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>a" — <a> "00000.000034/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>a" — <a> "00000.000035/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>a" — <a> "00000.000036/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(2)>a" — <a> "00000.000037/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>a" — <a> "00000.000038/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>a" — <a> "00000.000039/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(2)>a" — <a> "00000.000040/2026-00"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>a" — <a> "00000.000041/2026-00"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"


### Unidades candidatas (não são crédito)

- U-033900ce39792a7a975d9ede11c03d4245efb338c0d9cb851c401d2960781358 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000019/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-066` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cdf4c49a393d7549a146698b2dc19efb2a0b6e6cb6751f7ebc7e5723abf2a053",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d3b9039dbb4d5abdcf1a72f497f76115a953ac681f1417480c0ca4da4b290ce3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Opções do filtro Status aberto: div.br-item > div.br-radio > label sem input, sem tabindex nem role; lista rolável sem foco

Esperado: Opções focáveis e operáveis por teclado, com papel e estado (radio/option)

Janela: 1280×900 · interações desde o carregamento: 1. click div.row.align-items-center.pl-2 > div:nth-child(3) > span.br-tag (filtro Status)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido)

### Sujeitos

- "unresolved:.br-list.d-block .br-item" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-015` → identificador devolvido por ferramenta (sem arquivo)
- `F-127` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d3b9039dbb4d5abdcf1a72f497f76115a953ac681f1417480c0ca4da4b290ce3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f1e6493503e805b8f4096c7572ab92c4176f58d1bb9757941ed37536ea692e0f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Botão do usuário com aria-label="Avatar com dropdown"; o texto visível é "Olá, Usuária de Teste, SUPERVISOR"

Esperado: Nome acessível que comece com o texto visível do botão

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"


### Unidades candidatas (não são crédito)

- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f1e6493503e805b8f4096c7572ab92c4176f58d1bb9757941ed37536ea692e0f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f4c6b8bb6bbb0b24e4f292bd14d6c770335f70820203fff347eed7cc7faff623

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Etiquetas de status (Em análise analista/supervisor/diretor) com texto branco #ffffff sobre #e66f0e, 14px normal: contraste 3,16:1

Esperado: Contraste mínimo de 4,5:1 para texto de 14px normal

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise analista"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise diretor"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise analista"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise diretor"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise analista"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise diretor"


### Unidades candidatas (não são crédito)

- U-0a82f065235e39c59d71f198929c987a25280c39cfd73d435f0d3e42217df415 — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Em análise analista": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-707fb584d276eced96e7c0fe0bb07e670a309ef262f12b2f3ebdcddf8bb1fe07 — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f4c6b8bb6bbb0b24e4f292bd14d6c770335f70820203fff347eed7cc7faff623",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f92bd6cd8c87a3c78c802fd748cf88b6bf704c29e759db7ea7228abae5e57bcc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Filtros "Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são span com cursor:pointer e clique, sem tabindex nem role; tabIndex -1 e ignorados na navegação por Tab (foco vai da aba para a busca)

Esperado: Controles focáveis e operáveis por teclado (button) com papel e estado (aria-expanded/aria-pressed)

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@assinatura-cancelada, 1280x900@pagina-2, 1280x900@exibir-25, 1280x900@filtro-removido; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam · estado-nao-declarado: F3-03 só existe(m) em filtro-removido, e a alegação não declara passo nenhum

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"

Cena `1280x900@assinatura-cancelada` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@assinatura-cancelada"`:
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div>span" — <span> "Meus processos"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "1280x900@assinatura-cancelada|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"

Cena `1280x900@pagina-2` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@pagina-2"`:
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "1280x900@pagina-2|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"

Cena `1280x900@exibir-25` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@exibir-25"`:
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "1280x900@exibir-25|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"

Cena `1280x900@filtro-removido` (/pnip-f3/portal-mpa/processos) — escolha com `"cena": "1280x900@filtro-removido"`:
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(1)>div>span" — <span> "Últimos 60 dias"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "1280x900@filtro-removido|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"


### Unidades candidatas (não são crédito)

- U-01636d1117252410648c56fdb7841f601e9c64b1eb05090172b9fad0d2ca1a64 — F3-03 · filtro-removido · cena 1280x900@filtro-removido · <span> "Últimos 60 dias": Tag do filtro escolhido (aparece acima da barra de filtros depois de abrir o filtro "Aberto há" e escolher "Últimos 60 dias"): o botão × da tag aparece e recebe foco como o botão circular do DS (classe br-button, 28×28, azul), mas clicar nele, ou focá-lo e apertar Enter, não remove o filtro — depois do clique a tag "Últimos 60 dias" continua visível e o filtro continua aplicado ("Limpar filtros" segue habilitado e é o que tira o filtro). Uma Tag interativa dispensável apresenta o botão que permite ao usuário excluí-la.
  - estados em que a unidade existe: filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-03b70c230745fcab911019bee917fc96d455c9b0bdabab5cc53d0f3100bfabc9 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Método de pesca": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-06d7dd4e946fa87e21ce594f8e6c1233505ee0876ebc653085da3c8b1e10d1b1 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Tipo de processo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-12fcb651f06125e09f38b5563941ba93d2401fe3e66f7ac8c1ea6e0435b8e1e8 — D-12 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
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
- U-ba2bd1556fdeccfe4297c4dcfc021ca534e7a8ed6cbaa845aa995d332b97c9ba — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Meus processos": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bbd5085b9aaf3a840a3f2fe554e957a0623bac27a2f0d23d793ef9c790d23258 — F3-05 · inicial · cena 1280x900@lista-exibir · <span> "Meus processos": Tag de interação "Meus processos" (ligada, na barra acima da tabela): a superfície tem cor de fundo rgb(23, 85, 169) (#1755a9), posta em estilo inline na própria tag, em vez do azul da Tag de interação, rgb(19, 81, 180) (#1351b4). #1755a9 não é cor da paleta. A superfície da Tag de interação usa --blue-warm-vivid-70.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [background-color] fora de {rgb(19, 81, 180)}. Medido: background-color=rgb(23, 85, 169) | background-color=rgb(23, 85, 169)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-beccd6c1fc0bb0a9a9d49a79b36136b3c4abd4d2301ecd4bac8a60874e4806b6 — D-11 · sempre · cena 1280x900@filtro-removido · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, assinatura-cancelada, pagina-2, exibir-25, filtro-removido
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d339cacb503d4668ae18ec3b1745062bb4f08bba29b990b09a1619276a49d5be — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Petrecho": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
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
  "cardId": "C-f92bd6cd8c87a3c78c802fd748cf88b6bf704c29e759db7ea7228abae5e57bcc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
