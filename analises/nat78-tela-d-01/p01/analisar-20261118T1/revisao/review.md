# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 146 cartões únicos · 146 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 146 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 235 sujeitos · 146 cartão(ões) sem evidência verificada · 114 com unidade candidata · estimativa **876 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 46 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-00758ac7f546e4cd474b0a56ca9b40d6569b1b9e1483b93f67bc55ff53d38b1b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão "×" de fechar do diálogo de assinatura com font-family: monospace e border-radius 5px.

Esperado: Família tipográfica Rawline e raio da escala do DS.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[title="Assinar"] button

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-225` → identificador devolvido por ferramenta (sem arquivo)
- `F-226` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-00758ac7f546e4cd474b0a56ca9b40d6569b1b9e1483b93f67bc55ff53d38b1b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-00cdfe0228e4873f7932a87878326f61ee55b88adab4adb5a1e1611f23ed67d3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cabeçalhos da coluna de seleção (só contém checkbox sem nome) e da coluna de ações estão vazios para leitores de tela.

Esperado: Cabeçalhos de coluna com texto (ex.: "Selecionar", "Ações").

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
- `F-018` → identificador devolvido por ferramenta (sem arquivo)
- `F-019` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-144` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-00cdfe0228e4873f7932a87878326f61ee55b88adab4adb5a1e1611f23ed67d3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0132043188d5fbcea7da775fdc495965dd924ed3a3fa63e9863eb527313f9af8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O resumo de assinatura em lote mostra códigos internos ao usuário: "HABILITACAO_TR: 2", "VINCULACAO_EMBARCACAO: 2", ao lado de nomes legíveis ("CAOL: 1", "Higiênico-Sanitário (HS): 1").

Esperado: Tipos de processo com nomes legíveis, como na tabela ("Habilitação de Técnico Responsável", "Vinculação de embarcação").

Janela: 1280×900 · interações desde o carregamento: 1. click thead input[type=checkbox] (selecionar todos) 2. click br-button[label="Assinar selecionados"] button

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "unresolved:#swal2-html-container li" — Seletor não resolvido

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
  "cardId": "C-0132043188d5fbcea7da775fdc495965dd924ed3a3fa63e9863eb527313f9af8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0238040c51af59ad801c0f2ed719075e9f86e989aa80e13aa7170417f4b02d03

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O título do documento é apenas "PNIP" na tela Processos (e igual nas demais rotas visitadas).

Esperado: Título que descreva a página, ex.: "Processos - Plataforma Nacional da Indústria do Pescado".

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
  "cardId": "C-0238040c51af59ad801c0f2ed719075e9f86e989aa80e13aa7170417f4b02d03",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-08e155ad8020d1d72df9b79659346294414272990637243f65d65617ea5bd5aa

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiquetas de status "Em análise analista/supervisor/diretor": texto #ffffff sobre #e66f0e, 14px normal = 3,16:1.

Esperado: Contraste mínimo de 4,5:1 para texto de 14px.

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
- `F-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-013` → identificador devolvido por ferramenta (sem arquivo)
- `F-015` → identificador devolvido por ferramenta (sem arquivo)
- `F-016` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-08e155ad8020d1d72df9b79659346294414272990637243f65d65617ea5bd5aa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0b03dc68165162f6655f6bc362aaba9372b3ab4762b9ce12097e915f9bb717c8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Modal de assinatura (role=dialog, aria-modal) com aria-labelledby="swal2-title" apontando para h2 vazio e oculto: diálogo sem nome acessível e sem título visível

Esperado: Diálogo com título e nome acessível (ex.: "Assinar documento")

Janela: 1280×900 · interações desde o carregamento: 1. click br-button[title="Assinar"] da linha 2 (00000.000011/2026-00)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-072` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0b03dc68165162f6655f6bc362aaba9372b3ab4762b9ce12097e915f9bb717c8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-120ceae9bbd0484de2c2f67dccf48122357b06810c362326450e4a0846704c55

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O PDF exibido na modal de assinatura é um <object type="application/pdf"> sem title, aria-label nem conteúdo alternativo

Esperado: Objeto com nome/alternativa textual (ex.: título do documento e link para download)

Janela: 1280×900 · interações desde o carregamento: 1. click br-button[title="Assinar"] da linha 2 (00000.000011/2026-00)

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-081` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-120ceae9bbd0484de2c2f67dccf48122357b06810c362326450e4a0846704c55",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1353bd68d0b9bb1df66e2b7e6682f177d19df384df67de27f32708e3fae2e73d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiquetas "Aguardando plano de ação", "Aguardando SFPA" (e "Aguardando análise" na aba correspondente): texto branco de 14px sobre rgb(136,136,136), contraste 3,54:1.

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

- `../../tmp/pw-0/page-2026-11-17T00-02-41-996Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1353bd68d0b9bb1df66e2b7e6682f177d19df384df67de27f32708e3fae2e73d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-15674892be3f2ed96dbabb23e3c1c6f6712769da479be85e24deddbcff7afde8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Meus processos" funciona como alternância (azul = ativo, branco = inativo; muda a lista de 9 para 23 itens), mas o estado ligado/desligado só é visual; não há aria-pressed.

Esperado: Estado da alternância exposto programaticamente (button com aria-pressed).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-15674892be3f2ed96dbabb23e3c1c6f6712769da479be85e24deddbcff7afde8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-17a54dc68b6490035292fcbb3b8702386de8e173c22605020c3df1e63fb7fe1e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O título principal "Processos" é um h2; não há h1 na página (nem no shadow DOM).

Esperado: Hierarquia de cabeçalhos iniciando por h1 no título principal do conteúdo.

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
  "cardId": "C-17a54dc68b6490035292fcbb3b8702386de8e173c22605020c3df1e63fb7fe1e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1b352cb6eef4f6dbbeabf90d6e4b398098dea1937e27ebb77b2240378be31897

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O cabeçalho "Aberto há" alterna a ordenação ao clique do mouse (ícone sort-down ↔ sort-up), mas o th não é focável e não contém controle focável

Esperado: Controle de ordenação operável pelo teclado (ex.: botão dentro do th)

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

- `browser: clique mudou icon-name para sort-up; th.focus() falhou` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1b352cb6eef4f6dbbeabf90d6e4b398098dea1937e27ebb77b2240378be31897",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1fb9a9339bf60f710f76c9e984017b09a7f99407b2699ce545c4cd7f987fb317

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os mesmos spans não têm papel (role) de botão; o estado ligado/desligado de "Meus processos" (azul/branco) e o aberto/fechado dos filtros só são indicados visualmente (sem aria-pressed/aria-expanded)

Esperado: Papel de botão e estado exposto (aria-pressed para o alternador, aria-expanded para os filtros)

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

- `browser: atributos só _ngcontent, class, style` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1fb9a9339bf60f710f76c9e984017b09a7f99407b2699ce545c4cd7f987fb317",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-20e0ae7cca60cd72e588633e6595a0ab88a4a353077a70729765fbaf2b9a67da

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os números de processo (9 por página) são <a role="button"> sem href nem tabindex: focus() não os foca e o Tab os pula; só abrem por clique do mouse.

Esperado: Controle focável e acionável por teclado (link com href ou button).

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
  "cardId": "C-20e0ae7cca60cd72e588633e6595a0ab88a4a353077a70729765fbaf2b9a67da",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-218243d30b1795e0a4501c845d85baaebd7422e756eb3f434eceeca95fa132dc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão Buscar/Limpar posicionado com margin-top: -38px, fora da escala de espaçamento.

Esperado: Espaçamentos múltiplos da escala do DS (ação interna do componente Input).

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
  "cardId": "C-218243d30b1795e0a4501c845d85baaebd7422e756eb3f434eceeca95fa132dc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-232c3313ce1f1e88b0022f791a9774a1a9c5ca5936ee7e2a3790015640b3beb1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A coluna "Aberto há" exibe ícone de ordenação (sort-down) indicando a ordem da tabela, mas o th não tem aria-sort e o ícone é aria-hidden: a ordenação só é transmitida visualmente.

Esperado: aria-sort="ascending" (ou valor equivalente) na coluna ordenada.

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
  "cardId": "C-232c3313ce1f1e88b0022f791a9774a1a9c5ca5936ee7e2a3790015640b3beb1",
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

## C-2911200514069d4d49a88b95c633c4fde1ff037bc421713a4e9bbef7cba4e0f9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Sair" tem atributo href="javascript:void(0)", inválido em <button>.

Esperado: HTML válido: button sem href.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger (botão "Avatar com dropdown")

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2911200514069d4d49a88b95c633c4fde1ff037bc421713a4e9bbef7cba4e0f9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2987dd02d83e0be50ffe40c9a42d4654c74ead8fb3c5591f485d748859eb8cae

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: 7 checkboxes da tabela (selecionar todos no cabeçalho e 6 de linha) sem label, aria-label ou aria-labelledby; nome acessível vazio.

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
- `F-021` → identificador devolvido por ferramenta (sem arquivo)
- `F-022` → identificador devolvido por ferramenta (sem arquivo)
- `F-023` → identificador devolvido por ferramenta (sem arquivo)
- `F-024` → identificador devolvido por ferramenta (sem arquivo)
- `F-025` → identificador devolvido por ferramenta (sem arquivo)
- `F-026` → identificador devolvido por ferramenta (sem arquivo)
- `F-027` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2987dd02d83e0be50ffe40c9a42d4654c74ead8fb3c5591f485d748859eb8cae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2bf8efe4ec8a0fc80ed76b8e47f0709914e0701f5516eae783dbb3ae7cc3db3f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: 7 checkboxes de seleção (1 no cabeçalho "selecionar todos" e 6 nas linhas) sem label, aria-label, aria-labelledby ou title: nome acessível vazio

Esperado: Cada checkbox com nome acessível (ex.: "Selecionar todos", "Selecionar processo 00000.000011/2026-00")

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
- `FAM-ed24998f473d` → identificador devolvido por ferramenta (sem arquivo)
- `F-012` → identificador devolvido por ferramenta (sem arquivo)
- `F-013` → identificador devolvido por ferramenta (sem arquivo)
- `F-014` → identificador devolvido por ferramenta (sem arquivo)
- `F-015` → identificador devolvido por ferramenta (sem arquivo)
- `F-016` → identificador devolvido por ferramenta (sem arquivo)
- `F-017` → identificador devolvido por ferramenta (sem arquivo)
- `F-018` → identificador devolvido por ferramenta (sem arquivo)
- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2bf8efe4ec8a0fc80ed76b8e47f0709914e0701f5516eae783dbb3ae7cc3db3f",
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

## C-310bae95dac4b4bae7a83b2e482ffe09249850f9d8a0838a89322f7421cd332c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selo "Aguarda complementos": texto #ffffff sobre #8289ff, 14px normal, contraste 3,01:1

Esperado: Contraste mínimo de 4,5:1

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
- `FAM-4624044b618e` → identificador devolvido por ferramenta (sem arquivo)
- `F-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-310bae95dac4b4bae7a83b2e482ffe09249850f9d8a0838a89322f7421cd332c",
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

## C-38724f5de5cbaaa93e19c8f4855b2f88be2a268862ad4aad109645c3928439a7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Trocar unidade" é um <span> com cursor:pointer e handler de clique (navega para /portal-mpa), sem tabindex nem role; o Tab vai do gatilho direto para "Sair".

Esperado: Ação acessível por teclado (link ou botão).

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger (botão "Avatar com dropdown")

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
  "cardId": "C-38724f5de5cbaaa93e19c8f4855b2f88be2a268862ad4aad109645c3928439a7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3ae6f00e258d5fb2370080458762e2ad19f9040450ae9e20effc26375ac2528d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Letra "U" do avatar, 24,19px negrito, branco #FFFFFF sobre laranja rgb(255,140,0): contraste 2,33:1.

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

- `../../tmp/pw-0/page-2026-11-17T00-02-41-996Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3ae6f00e258d5fb2370080458762e2ad19f9040450ae9e20effc26375ac2528d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3b623278ab974dcfe81a528c8f913256774b912f0d9759c96432f0ea59446a71

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Meus processos" e os filtros "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho" são <span> com cursor:pointer e handler de clique, sem tabindex: não recebem foco e não podem ser operados pelo teclado

Esperado: Todos os controles de filtro operáveis por teclado

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

- `browser: focus() falhou; Tab da busca não passa pelos filtros` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3b623278ab974dcfe81a528c8f913256774b912f0d9759c96432f0ea59446a71",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3c82084f1dee2b73f679425bb53b2310ba10232f113a39e60d9d2b95213e5d25

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O título principal "Processos" é <h2>; a página não tem <h1>

Esperado: Título principal da página marcado como <h1>, com hierarquia de cabeçalhos correta

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.3

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
- `F-020` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3c82084f1dee2b73f679425bb53b2310ba10232f113a39e60d9d2b95213e5d25",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3d16abc70ff042764fa0b80d9a16bfde8863232898529b1e5f38b745976bf363

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Diálogo de assinatura do processo (PDF, "Solicitar Revisão", "Assinar com gov.br") sem título; aria-labelledby aponta para #swal2-title vazio.

Esperado: Diálogo com título e nome acessível.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[title="Assinar"] button

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-247` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3d16abc70ff042764fa0b80d9a16bfde8863232898529b1e5f38b745976bf363",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3e26960dfb178f89266da652041eacec2ca5026f7c8a435de151fe62b38682ab

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Inicial "U" do avatar no cabeçalho: #ffffff sobre #ff8c00, 24,19px bold (texto grande), contraste 2,33:1 (medido pelo [termo citado]; [ferramenta citada] deixou incompleto por texto curto)

Esperado: Contraste mínimo de 3:1 para texto grande

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `P-01` → identificador devolvido por ferramenta (sem arquivo)
- `V-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3e26960dfb178f89266da652041eacec2ca5026f7c8a435de151fe62b38682ab",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3e394313cd23c0c02efa7262fc566c0d3bdf0b34be647d7398bffd033299b27d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão com texto visível "Olá, Usuária de Teste, SUPERVISOR" tem aria-label="Avatar com dropdown", que substitui o texto visível no nome acessível.

Esperado: Nome acessível que contenha o texto visível (ex.: remover o aria-label ou iniciá-lo com o texto exibido).

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

- `../../tmp/pw-0/page-2026-11-17T00-02-41-996Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3e394313cd23c0c02efa7262fc566c0d3bdf0b34be647d7398bffd033299b27d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3e4e8478b9463ffc5788dee23a2ce11d0b43e5c3421f3904ec7b8d23ed575bca

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiquetas "Em análise analista/supervisor/diretor": texto branco de 14px (peso 500) sobre rgb(230,111,14), contraste 3,16:1.

Esperado: Contraste mínimo de 4,5:1.

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

- `../../tmp/pw-0/page-2026-11-17T00-02-41-996Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3e4e8478b9463ffc5788dee23a2ce11d0b43e5c3421f3904ec7b8d23ed575bca",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3faeb5040f536daeee3410de9ae4ae69cdb4aa56ab426405f7a1e58c486a9743

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botões das abas têm aria-label com o código interno ("AGUARDANDO_ANALISE", "TRAMITANDO", "HISTORICO"), que substitui o texto visível "Aguardando análise", "Tramitando", "Concluídos".

Esperado: Nome acessível igual ao rótulo visível (ou que o contenha).

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3faeb5040f536daeee3410de9ae4ae69cdb4aa56ab426405f7a1e58c486a9743",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-438cc6aa19e49fc7dd8bf7499486a622dc4d5c0a78d4a9cedb0f949a8242e365

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A aba ativa (li.tab-item.active, ex.: "Tramitando") só é indicada visualmente; os botões não têm role="tab" nem aria-selected em nenhum estado.

Esperado: aria-selected="true" na aba ativa e "false" nas demais (padrão tablist/tab).

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-438cc6aa19e49fc7dd8bf7499486a622dc4d5c0a78d4a9cedb0f949a8242e365",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-44ac2cbcec81d359a4d3242ad81d0cecfbc916fe7df2bae997cf9042aab2b20f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A direção de ordenação da coluna "Aberto há" é indicada só pelo ícone; o th não tem aria-sort

Esperado: Estado de ordenação exposto (aria-sort="ascending/descending")

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

- `browser: aria-sort ausente` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-44ac2cbcec81d359a4d3242ad81d0cecfbc916fe7df2bae997cf9042aab2b20f",
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

## C-455383a9e05aa67fee6c0351407110eeafb179e7e8143d22c53381edc3a1986f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os seletores "Exibir" e "Página" são input type=text (papel textbox) que abrem uma lista de opções, sem role="combobox", aria-expanded nem aria-controls; o botão "Exibir lista" tem tabindex=-1.

Esperado: Expor o papel combobox/listbox e o estado expandido.

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
  "cardId": "C-455383a9e05aa67fee6c0351407110eeafb179e7e8143d22c53381edc3a1986f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-49b0866eba4d507af9d1ca9af65705778c1664d63428f68196d94e606eab4914

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No shadow DOM do breadcrumb, o item Home é um <a href="/portal-mpa/"> que contém um <button aria-label=""> (elemento interativo aninhado em outro); são duas paradas de tabulação para o mesmo destino.

Esperado: Um único controle interativo (só o link) para o item Home.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

- `../../tmp/pw-0/page-2026-11-17T00-02-41-996Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-49b0866eba4d507af9d1ca9af65705778c1664d63428f68196d94e606eab4914",
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

## C-4c7e4c93ef2d6ffa7a6e1cc82ed48d20d1086b1435c107e0a33bddd293b6c3c4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Separador do menu do usuário com border-top-color #bbbbbb, que não é token de cor do DS.

Esperado: Cor de token registrado (ou componente Divider).

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger (botão "Avatar com dropdown")

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
- `F-034` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4c7e4c93ef2d6ffa7a6e1cc82ed48d20d1086b1435c107e0a33bddd293b6c3c4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4f2753fc1a205064700d83fd717a757cb3b35f4a187fb23ed5b5c8a7b0b4c5a4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os 9 números de processo são <a role="button"> sem href e sem tabindex: focus() não os foca e a tabulação os pula; só abrem com clique do mouse

Esperado: Controle operável por teclado (button nativo ou link com href)

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

- `browser: tabindex ausente, focus() → activeElement inalterado; sequência de Tab registrada pula os links` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4f2753fc1a205064700d83fd717a757cb3b35f4a187fb23ed5b5c8a7b0b4c5a4",
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

## C-56cf8ad08ac07d589c279263a4b51b31cf5787aeacccc2edaba586798529a5ad

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na paginação, cada link de página está num <li> aninhado diretamente dentro de outro <li> (li > li), sem <ul>/<ol> pai

Esperado: Itens de lista contidos diretamente em <ul> ou <ol>

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
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-059` → identificador devolvido por ferramenta (sem arquivo)
- `F-060` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-56cf8ad08ac07d589c279263a4b51b31cf5787aeacccc2edaba586798529a5ad",
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

## C-60f67e3156d7ef8df1971ec0701b6b716ed599eaa4805f7491a28278b2fda6ed

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Após busca sem resultados, "Não há processos para exibir." aparece num <p> sem role=status/aria-live nem foco; a tabela e a paginação com aria-live somem.

Esperado: Mensagem de status determinável programaticamente (role="status"/aria-live).

Janela: 1280×900 · interações desde o carregamento: 1. fill br-input#search input = "zz" 2. press Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:div.mt-5.text-center" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `V-003` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-60f67e3156d7ef8df1971ec0701b6b716ed599eaa4805f7491a28278b2fda6ed",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-641a96a51551c537b74e2c21d0706031d24ee7749a131ab0bc3748ec0606e22b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os diálogos de confirmação "Desassociar" e "Assinar" (role="dialog", aria-modal) têm aria-labelledby="swal2-title", mas #swal2-title está vazio e com display:none: o diálogo não tem nome acessível.

Esperado: Diálogo com nome acessível (título visível referenciado ou aria-label).

Janela: 1280×900 · interações desde o carregamento: 1. focar e acionar o botão "Desassociar processo do analista responsável" da 1ª linha

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T00-07-42-198Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T00-08-05-330Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-641a96a51551c537b74e2c21d0706031d24ee7749a131ab0bc3748ec0606e22b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-64fdb363d300a94c50a6d9c6da31efb47d676d1068c69f338271a7bf34212d50

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Logotipo img.large-img (src assets/images/govbr-logo.png) no shadow DOM do cabeçalho tem alt="logo".

Esperado: Texto alternativo que identifique a marca (ex.: "gov.br").

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

- `../../tmp/pw-0/page-2026-11-17T00-02-41-996Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-64fdb363d300a94c50a6d9c6da31efb47d676d1068c69f338271a7bf34212d50",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6b73427e6bbee25f7236645a6542ad4b2ea6d9ca54cea7b0a588019d9b06901a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão de fechar das modais tem aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang="en"

Esperado: Nome acessível em português (ex.: "Fechar")

Janela: 1280×900 · interações desde o carregamento: 1. click br-button[title="Assinar"] da linha 2 (00000.000011/2026-00)

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `browser: aria-label="Close this dialog"` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6b73427e6bbee25f7236645a6542ad4b2ea6d9ca54cea7b0a588019d9b06901a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6ca95533d67a71fe88fba556f1718d103cc45101cd702a8e93fd0ab96eb69733

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A área do usuário (gatilho e menu) fica fora do banner e de qualquer landmark ([ferramenta citada] region).

Esperado: Conteúdo do cabeçalho dentro da região banner.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger (botão "Avatar com dropdown")

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

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-061` → identificador devolvido por ferramenta (sem arquivo)
- `P-04` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6ca95533d67a71fe88fba556f1718d103cc45101cd702a8e93fd0ab96eb69733",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6e896d547da6f08c24da240d292ff671ad224113eedc57c7327da8b5869e9cd5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os números de processo são <a role="button"> sem href e sem tabindex; ao chamar focus(), o foco não entra (activeElement continua BODY). Pelo mouse, o clique abre o processo.

Esperado: Controle focalizável e operável por teclado (link com href ou button).

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
  "cardId": "C-6e896d547da6f08c24da240d292ff671ad224113eedc57c7327da8b5869e9cd5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6ec036d875c38af740de0d803209cceab95153ae80114745be6b7f42acdf3e47

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Menu" (#navigation, shadow DOM de br-header) tem data-target="#main-navigation", mas esse elemento não existe; ao acioná-lo nada abre e o botão não tem aria-expanded.

Esperado: O botão Menu deve abrir o menu principal do padrão gov.br (e informar aria-expanded) ou não deve ser exibido.

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

- `../../tmp/pw-0/page-2026-11-17T00-09-00-977Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6ec036d875c38af740de0d803209cceab95153ae80114745be6b7f42acdf3e47",
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

## C-72b77231d0055ab90b6bb2bded5b36dded444b9aa448feef3616507e22aa623f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Menu" do cabeçalho (#navigation, data-target="#main-navigation") não abre nada ao ser clicado: não existe #main-navigation nem .br-menu no documento ou nos shadow roots, e o botão não tem aria-expanded.

Esperado: Botão Menu abre o menu principal (e expõe aria-expanded) ou não é exibido.

Janela: 1280×900 · interações desde o carregamento: 1. click botão "Menu" do cabeçalho

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
  "cardId": "C-72b77231d0055ab90b6bb2bded5b36dded444b9aa448feef3616507e22aa623f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-732676e2726ebdb63a2abe558220511b41c8efa60552cb3eb51d1ddf1cef55a2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cabeçalho da coluna de ações (Ver processo, Desassociar, Assinar) vazio

Esperado: Cabeçalho de coluna com texto (ex.: "Ações"), possivelmente visualmente oculto

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

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
- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-053` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-057` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-732676e2726ebdb63a2abe558220511b41c8efa60552cb3eb51d1ddf1cef55a2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-784a77ea5e5b73e882e2dc84cb1ed5754142e2dc2ae8306c4cc949385680a6b3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na paginação, o <li> da página "1" está aninhado diretamente em outro <li>, sem <ul>/<ol> pai.

Esperado: Itens de lista filhos diretos de ul/ol.

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
- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-146` → identificador devolvido por ferramenta (sem arquivo)
- `F-147` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-784a77ea5e5b73e882e2dc84cb1ed5754142e2dc2ae8306c4cc949385680a6b3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-788f6573ae12762e5a1f69038d247f1262eea1411c314ca77304e04c6a7d0e2b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: document.title = "PNIP" em todos os estados da tela; não identifica a tela de Processos.

Esperado: Título do documento descritivo do conteúdo principal (ex.: "Processos - PNIP").

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

- `S-page-012` → identificador devolvido por ferramenta (sem arquivo)
- `P-01` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-788f6573ae12762e5a1f69038d247f1262eea1411c314ca77304e04c6a7d0e2b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-79f2b3e2e840605af0a2076f4b3aa49412be6f42a73d6df7caf8fe3966bb5c24

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O painel aberto tem role="menu", mas nenhum filho tem role="menuitem": contém texto, um span clicável "Trocar unidade" e um button "Sair" comum.

Esperado: Usar role="menu" só com itens menuitem e navegação por setas, ou remover o role menu e usar uma lista/agrupamento comum.

Janela: 1280×900 · interações desde o carregamento: 1. acionar o botão do avatar (#avatar-dropdown-trigger)

Regra declarada: wcag:4.1.2

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
  "cardId": "C-79f2b3e2e840605af0a2076f4b3aa49412be6f42a73d6df7caf8fe3966bb5c24",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7aac17cec9cdb4c7c43e4e97d9c844ef818a28972de92ecdfc8e9b70b869ee71

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A aba ativa é indicada só pela classe li.tab-item.active (sublinhado visual); os botões não têm role="tab"/aria-selected nem aria-current, então o estado selecionado não é exposto.

Esperado: Expor programaticamente a aba selecionada (role tab + aria-selected="true", ou aria-current no item ativo).

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

- `../../tmp/pw-0/page-2026-11-17T00-02-41-996Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7aac17cec9cdb4c7c43e4e97d9c844ef818a28972de92ecdfc8e9b70b869ee71",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7b2d554b2dde7145e6ba8b4079c573ac5cd594158376f23f7051224b580a8f2f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Trocar unidade" é um span com cursor:pointer e handler de clique (ao clicar navega para /portal-mpa), sem tabindex nem role: tabIndex -1, inalcançável pelo teclado.

Esperado: Controle nativo focalizável (button ou link) operável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. acionar o botão do avatar (#avatar-dropdown-trigger)

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
  "cardId": "C-7b2d554b2dde7145e6ba8b4079c573ac5cd594158376f23f7051224b580a8f2f",
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

## C-7c319923dea49eda4c09f15408382c42d4d402662c3267a3babb33fc8006a19a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Não há links/âncoras de salto (ex.: "Ir para o conteúdo") para main ou para outros blocos; nenhum a[href^="#"] na página.

Esperado: Âncoras no início da página para ir direto ao conteúdo, menu e busca.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.5

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main" — <main> "Processos Meus processos Aberto há Tipo de proce"

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
  "cardId": "C-7c319923dea49eda4c09f15408382c42d4d402662c3267a3babb33fc8006a19a",
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

## C-7cfe23278843a4d3b3c914958e27afc226536b294f5bd20ef6c4a20a6b61b2e4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão "×" que remove o filtro aplicado "Últimos 30 dias" só contém ícone aria-hidden; sem aria-label: nome acessível vazio.

Esperado: Nome acessível (ex.: "Remover filtro Últimos 30 dias").

Janela: 1280×900 · interações desde o carregamento: 1. click span.br-tag.interaction "Aberto há" 2. click .br-list.d-block .br-item:nth-child(2) .br-radio ("Últimos 30 dias")

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.br-tag.interaction .br-button.inverted.circle" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-101` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7cfe23278843a4d3b3c914958e27afc226536b294f5bd20ef6c4a20a6b61b2e4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7f12a1743957d263b857027f3c51a5660ed74c17ef766f9eeee9358d501311dd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O cabeçalho "Aberto há" mostra o ícone sort-down indicando a ordenação da tabela, mas não tem aria-sort; o ícone não tem texto alternativo.

Esperado: aria-sort="ascending|descending" no th ordenado (ou texto equivalente).

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
  "cardId": "C-7f12a1743957d263b857027f3c51a5660ed74c17ef766f9eeee9358d501311dd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7f3ee71e5ace2408930be9084ef5651ee7f23bf1d8686e7493cc81f7164324b1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Diálogo "Tem certeza que deseja desassociar esse processo do analista responsável?" (role=dialog) com aria-labelledby="swal2-title", que está vazio: o diálogo não tem nome acessível.

Esperado: Diálogo com nome acessível (título visível referenciado).

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:first-child br-button[title^="Desassociar"] button

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-206` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7f3ee71e5ace2408930be9084ef5651ee7f23bf1d8686e7493cc81f7164324b1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-80966071cd0cca387ac76610bfe18aca8c4a268d918ef402650f7a239c1280c5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os diálogos de confirmação são SweetAlert2, não o Modal do DS: botões com border-radius 20px e margens de 10px, fora das escalas de tokens.

Esperado: Modal e Button do DS com tokens de raio e espaçamento.

Janela: 1280×900 · interações desde o carregamento: 1. click thead input[type=checkbox] (selecionar todos) 2. click br-button[label="Assinar selecionados"] button

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-confirm, .swal2-cancel" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-174` → identificador devolvido por ferramenta (sem arquivo)
- `F-175` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-227` → identificador devolvido por ferramenta (sem arquivo)
- `F-228` → identificador devolvido por ferramenta (sem arquivo)
- `F-229` → identificador devolvido por ferramenta (sem arquivo)
- `F-230` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-80966071cd0cca387ac76610bfe18aca8c4a268d918ef402650f7a239c1280c5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8099c21ec679e4ded34f62a456e742d3dc8e0bd0384dc4c5273b621f5b8b9b4a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selos de status laranja ("Em análise analista", "Em análise supervisor", "Em análise diretor"): texto #ffffff sobre #e66f0e, 14px normal, contraste 3,16:1 (5 ocorrências)

Esperado: Contraste mínimo de 4,5:1 para texto de 14px

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
- `FAM-4c5ffd83389c` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `V-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8099c21ec679e4ded34f62a456e742d3dc8e0bd0384dc4c5273b621f5b8b9b4a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-816e8c44aef542d0eaf9b43eaef3bdc99ca572a3c320a0a9262550dfbe892fec

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: As tags de filtro "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são spans com cursor:pointer, sem tabindex nem role (tabIndex -1); ficam fora da ordem de tabulação. As opções abertas (ex.: "Últimos 7 dias") são só <label>, também não focalizáveis.

Esperado: Filtros e opções operáveis por teclado, como botões ou selects nativos/do Design System.

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
  "cardId": "C-816e8c44aef542d0eaf9b43eaef3bdc99ca572a3c320a0a9262550dfbe892fec",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-81cf00d58f4aed3c90e4ab77b093e89e8fe76175f82ae52c428eccfafaaa08cc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <iframe> (about:blank, 100% x 500px) sem title, aria-label ou aria-labelledby; presente em todos os estados

Esperado: Iframe com nome acessível que descreva o conteúdo, ou removido/oculto se não tiver conteúdo

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
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-058` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-81cf00d58f4aed3c90e4ab77b093e89e8fe76175f82ae52c428eccfafaaa08cc",
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

## C-8bf2ad13b9cd4242af69d3197714f4768bb472f59a2a7f7ff0f7e7225653667c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Meus processos" e os 6 filtros (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span> com cursor:pointer e handler de clique, sem tabindex, role ou aria-expanded; focus() não os foca e a sequência de Tab vai das abas direto ao campo de busca.

Esperado: Controles operáveis por teclado, com papel de botão e estado expandido/recolhido exposto.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8bf2ad13b9cd4242af69d3197714f4768bb472f59a2a7f7ff0f7e7225653667c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8d2412e07f7101f8f8006d3ca7cc6424436511c4c9fda2a19b44df87ab86967d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão do usuário mostra "Olá, Usuária de Teste, SUPERVISOR", mas seu aria-label é "Avatar com dropdown", que substitui o texto visível.

Esperado: Nome acessível que contenha o texto visível.

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
  "cardId": "C-8d2412e07f7101f8f8006d3ca7cc6424436511c4c9fda2a19b44df87ab86967d",
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

## C-8d47e10dfa1de214aa23a113839ccd3e088509c637e4632d0ee4f818f587521a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O logotipo gov.br no cabeçalho tem alt="logo", que não identifica a imagem.

Esperado: Texto alternativo que identifique o logotipo (ex.: "gov.br").

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
  "cardId": "C-8d47e10dfa1de214aa23a113839ccd3e088509c637e4632d0ee4f818f587521a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8d79b633906d33b69a8cef42525397191d61b0e9ae155fd7b8dd9aad45e39b95

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões das abas (no shadow DOM de br-tab) têm aria-label com o identificador interno ("AGUARDANDO_ANALISE", "TRAMITANDO", "HISTORICO"), que substitui o texto visível "Aguardando análise", "Tramitando", "Concluídos"; o nome acessível não contém o rótulo visível.

Esperado: Nome acessível igual ao (ou iniciando pelo) texto visível da aba; remover o aria-label técnico.

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

- `../../tmp/pw-0/page-2026-11-17T00-02-41-996Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8d79b633906d33b69a8cef42525397191d61b0e9ae155fd7b8dd9aad45e39b95",
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

## C-8fdbaddbacc9c3321c333a944c1e1ef95ec648aa2255d05a18a9f45fab7bc322

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Inicial "U" do avatar: #ffffff sobre #ff8c00, 24,2px bold = 2,33:1.

Esperado: Pelo menos 3:1 (texto grande).

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8fdbaddbacc9c3321c333a944c1e1ef95ec648aa2255d05a18a9f45fab7bc322",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9133d127da12dadb6411f9054a23c16a7a1157c9109b205b0896e4fdcac3d02e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões das abas têm aria-label com o código interno: "AGUARDANDO_ANALISE" (rótulo visível "Aguardando análise") e "HISTORICO" (rótulo visível "Concluídos"); o nome acessível não contém o texto visível

Esperado: Nome acessível que contenha o rótulo visível (remover aria-label ou usar o texto visível)

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

- `browser: aria-label="AGUARDANDO_ANALISE", "TRAMITANDO", "HISTORICO"` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9133d127da12dadb6411f9054a23c16a7a1157c9109b205b0896e4fdcac3d02e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-917d4939c46d0e4a1b45553e22443ad63388b3ee859362705194ebc0fffd36f7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com o foco no botão de origem, abrir e fechar o diálogo (Escape em Desassociar; × em Assinar) deixa o foco em BODY; ele não volta ao botão que abriu o diálogo.

Esperado: Ao fechar o diálogo, devolver o foco ao controle que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. focar e acionar o botão "Desassociar processo do analista responsável" da 1ª linha

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
  "cardId": "C-917d4939c46d0e4a1b45553e22443ad63388b3ee859362705194ebc0fffd36f7",
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

## C-9309ed736e577f8a4f17640ff9e9ce99f94c01456b3b40eb3100ae7cbc3f378c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: iframe (about:blank, 500px de altura, abaixo do conteúdo) sem title, aria-label ou aria-labelledby.

Esperado: iframe com título que descreva seu conteúdo, ou removido/oculto se não tiver conteúdo.

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
  "cardId": "C-9309ed736e577f8a4f17640ff9e9ce99f94c01456b3b40eb3100ae7cbc3f378c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-93e9eac1c9ede8a667309ef6caa8d75c2430d40508144e14a948bfdee3a744ec

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Campo de busca (input#search no shadow root de br-input) só tem placeholder "Pesquise aqui ..."; sem label, aria-label nem aria-labelledby.

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
- `P-22` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-93e9eac1c9ede8a667309ef6caa8d75c2430d40508144e14a948bfdee3a744ec",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9640d82fef4f23f8e491f5897f63ada0782d2e4c3714b53f7d51755b32977903

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiqueta "Aguarda complementos": texto branco de 14px sobre rgb(130,137,255), contraste 3,01:1.

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

- `../../tmp/pw-0/page-2026-11-17T00-02-41-996Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9640d82fef4f23f8e491f5897f63ada0782d2e4c3714b53f7d51755b32977903",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9800380929c6785c3c213d7c4af8da57bba795966690e1b0a4702ff64ddabdf1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A tag "Meus processos" (alterna o filtro) é um span clicável sem tabindex nem role; não recebe foco pelo teclado.

Esperado: Controle focalizável e operável por teclado.

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
  "cardId": "C-9800380929c6785c3c213d7c4af8da57bba795966690e1b0a4702ff64ddabdf1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-992aa0a67f2fae5501307722ade0bb213519f1ee21071791e8851d99cbc91e84

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ícone img src="../../../assets/images/exit-icon.png" dentro do botão "Sair" sem atributo alt.

Esperado: alt="" (decorativo, pois o botão já tem o texto "Sair").

Janela: 1280×900 · interações desde o carregamento: 1. acionar o botão do avatar (#avatar-dropdown-trigger)

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
  "cardId": "C-992aa0a67f2fae5501307722ade0bb213519f1ee21071791e8851d99cbc91e84",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-99f20faae2f2613caacceaec3ac7a2bdf8c8d021da823e90bbca5518e1c7918d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de ir para a página 2 pelo link "2" (texto "11–20 de 23 itens"), o seletor "Página" continua mostrando o valor "1".

Esperado: O seletor de página deve mostrar a página atual (2).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na tag "Meus processos" (desativa) 2. selecionar 10 em "Exibir" 3. acionar o link de página "2"

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

### Sujeitos

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
  "cardId": "C-99f20faae2f2613caacceaec3ac7a2bdf8c8d021da823e90bbca5518e1c7918d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9b77e687c477f83e2fa588d817cecfbc51f449c36938b3537c20505a4fd16fba

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de pesquisar "xyz", a tabela é trocada pela mensagem "Não há processos para exibir." num div sem role=status/aria-live, e a região aria-live da paginação é removida; o resultado não é anunciado.

Esperado: Mensagem de resultado anunciada por região de status (role="status"/aria-live).

Janela: 1280×900 · interações desde o carregamento: 1. digitar "xyz" no campo de pesquisa 2. pressionar Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:pnip-mpa-processos div.mt-5.text-center" — Seletor não resolvido

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
  "cardId": "C-9b77e687c477f83e2fa588d817cecfbc51f449c36938b3537c20505a4fd16fba",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9c2ada31bb05a3d87fe2aebea0a326eeb8a95351880fd3ad31e7db62bdbea38b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Iframe vazio (sem src, documento em branco, 1160×500px) no fim de main, sem atributo title; recebe foco.

Esperado: Iframe com title descritivo, ou removido/oculto quando não há conteúdo.

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

- `../../tmp/pw-0/page-2026-11-17T00-02-41-996Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9c2ada31bb05a3d87fe2aebea0a326eeb8a95351880fd3ad31e7db62bdbea38b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9d533b935d8634cfd9a123724261e12f83a8eb6502078f0d2090e4e75de8fdeb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: As opções dos filtros (ex.: "Últimos 7/30/60/90 dias", também em Tipo de processo e Status) são .br-radio só com <label> sem for, sem input radio: não recebem foco, não têm papel nem estado selecionado, e não há a caixa de opção.

Esperado: Radios nativos (input type=radio com label associado) navegáveis por Tab e acionáveis por Espaço.

Janela: 1280×900 · interações desde o carregamento: 1. click span.br-tag.interaction "Aberto há"

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.br-list .br-radio:not(:has(input))" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9d533b935d8634cfd9a123724261e12f83a8eb6502078f0d2090e4e75de8fdeb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9defe57e981d347f429aa90a2cfc1f525d9488366b563046792cef761133dac5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Nas abas (shadow DOM de br-tab), a aba ativa "Tramitando" é indicada só pela classe "active" (cor e borda); os botões não têm role=tab, aria-selected nem aria-current

Esperado: Estado selecionado da aba exposto programaticamente

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

- `browser: li.tab-item.active; button sem aria-selected/aria-current` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9defe57e981d347f429aa90a2cfc1f525d9488366b563046792cef761133dac5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a04d7116bda0c933766eb090bede38f6a0ae27e55123d13e7a72657e663de20a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O diálogo "Assinar" exibe o documento num <object type="application/pdf"> sem title/aria-label e sem conteúdo alternativo; o PDF não carregou ("Failed to load PDF document") e não há alternativa textual nem link.

Esperado: Nome acessível e conteúdo alternativo (ex.: link para baixar o documento).

Janela: 1280×900 · interações desde o carregamento: 1. focar e acionar o botão "Assinar" da linha 00000.000011/2026-00

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T00-08-05-330Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a04d7116bda0c933766eb090bede38f6a0ae27e55123d13e7a72657e663de20a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a6275f92340135479b82bcffe74779e686b022994e7a0577ea283336ac62c445

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiqueta "Vistoria agendada" (visível ao desativar "Meus processos"): #ffffff sobre #4f97d1, 14px = 3,14:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. click span.br-tag "Meus processos" (desativa o filtro)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.bg-blue-40 > .text-secondary-01" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-161` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a6275f92340135479b82bcffe74779e686b022994e7a0577ea283336ac62c445",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a641a29922c3f61ce05043c081adf0a9549040173c47d4b57811195d9f1b4391

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O menu do usuário tem role="menu", mas seus filhos são div/span/button sem role=menuitem

Esperado: Papel compatível com o conteúdo (role=menu só com menuitem, ou sem role=menu)

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

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

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-021` → identificador devolvido por ferramenta (sem arquivo)
- `V-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a641a29922c3f61ce05043c081adf0a9549040173c47d4b57811195d9f1b4391",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-aa2a556ce20b6b0132dcc8586e9b2ec9725c7fdf6ed58b49cc44d617da44d0c5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: As opções da lista do filtro "Aberto há" ("Últimos 7/30/60/90 dias") são <label> sem input associado (for vazio, 0 inputs na lista), sem tabindex e sem papel: só selecionáveis com o mouse

Esperado: Opções focáveis e selecionáveis pelo teclado, com papel e estado de seleção expostos

Janela: 1280×900 · interações desde o carregamento: 1. click span.br-tag "Aberto há" 2. click opção "Últimos 7 dias"

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(2)>div:nth-of-type(1)>div>label" — <label> "10"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(2)>div:nth-of-type(2)>div>label" — <label> "25"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(2)>div:nth-of-type(3)>div>label" — <label> "50"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(2)>div:nth-of-type(4)>div>label" — <label> "100"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(2)>div>div>label" — <label> "1" · **oculto**: nao-renderizado

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `browser: label.htmlFor="", inputs=0, focus() falhou` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-aa2a556ce20b6b0132dcc8586e9b2ec9725c7fdf6ed58b49cc44d617da44d0c5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-af1b6e73af3698798dc59e46fe0335ec7658f1cbbeac6c7fb65caf7f17025ff1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Checkbox do cabeçalho com margin-left 5px (fora da escala) e transform: scale(1.5); checkbox nativo em vez do componente Checkbox.

Esperado: Espaçamentos da escala do DS.

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
  "cardId": "C-af1b6e73af3698798dc59e46fe0335ec7658f1cbbeac6c7fb65caf7f17025ff1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-affe09d2fef8ba260e52275174944bc5868bd5599a462e8682babb25c7ef6cc1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O estado ligado/desligado de "Meus processos" só aparece pela cor (fundo azul x branco); não há role de botão nem aria-pressed.

Esperado: Expor papel e estado (ex.: button com aria-pressed="true|false").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

- `../../tmp/pw-0/page-2026-11-17T00-09-00-977Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-affe09d2fef8ba260e52275174944bc5868bd5599a462e8682babb25c7ef6cc1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b12a08ebd45499cda361fa45f9a5f69fb7f730cb9a148414e4846987df16ba21

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Trocar unidade" no menu do usuário é um <span> com cursor:pointer, sem tabindex; Tab a partir do botão do avatar vai direto para "Sair"

Esperado: Opção operável pelo teclado (button ou link)

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
- `browser: focus() falhou; Tab foi para button.dropdown-button "Sair"` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b12a08ebd45499cda361fa45f9a5f69fb7f730cb9a148414e4846987df16ba21",
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

## C-b22bf7bc2e07693c49090aa2ce79871e6ab57842526c6c7f111bd77d8f9e152d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Tabela de processos sem caption, aria-label, aria-labelledby ou title.

Esperado: Título da tabela definido por <caption>.

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
- `S-page-012` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b22bf7bc2e07693c49090aa2ce79871e6ab57842526c6c7f111bd77d8f9e152d",
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

## C-b8d02990a60ec0b0d3d5b1dc2cb7e83d45d214bc2b4a16600ed0ff92939b1e47

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão de remover o filtro aplicado "Últimos 7 dias" contém só o ícone fa-times (aria-hidden) e não tem nome acessível

Esperado: Nome acessível, ex.: "Remover filtro Últimos 7 dias"

Janela: 1280×900 · interações desde o carregamento: 1. click span.br-tag "Aberto há" 2. click opção "Últimos 7 dias"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:span.br-tag .br-button.inverted" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-062` → identificador devolvido por ferramenta (sem arquivo)
- `V-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b8d02990a60ec0b0d3d5b1dc2cb7e83d45d214bc2b4a16600ed0ff92939b1e47",
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

## C-b93c44e222c572a546448fc7cfa85c9b48800d10780dc4a1a780c440ff10cc67

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão do usuário mostra "Olá, Usuária de Teste, SUPERVISOR", mas seu aria-label é "Avatar com dropdown", que não contém o texto visível

Esperado: Nome acessível que contenha o rótulo visível

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

- `browser: aria-label="Avatar com dropdown"` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b93c44e222c572a546448fc7cfa85c9b48800d10780dc4a1a780c440ff10cc67",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bca0dda1a52fa64e59b3db18679dc3392b8b9e4ec63299277b401569a2688505

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de fechar (×) do diálogo de assinatura tem aria-label="Close this dialog", em inglês, sem lang, numa página pt-br.

Esperado: Rótulo em português (ex.: "Fechar") ou marcação de idioma.

Janela: 1280×900 · interações desde o carregamento: 1. focar e acionar o botão "Assinar" da linha 00000.000011/2026-00

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T00-08-05-330Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bca0dda1a52fa64e59b3db18679dc3392b8b9e4ec63299277b401569a2688505",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bdfd896d545c9a1420a534e9b95d662d1c5f43b538b26211b1e3550c356dafd5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Imagem exit-icon.png do botão "Sair" sem atributo alt

Esperado: alt="" (decorativa, o botão já tem texto "Sair")

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
- `F-033` → identificador devolvido por ferramenta (sem arquivo)
- `V-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bdfd896d545c9a1420a534e9b95d662d1c5f43b538b26211b1e3550c356dafd5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-be9987ad6ee2148b702ddb9cf2e13631a85293952663b9b339b874669d1d0122

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao fechar os diálogos (Escape em "Assinar selecionados" e "Desassociar", × no de assinatura) o foco vai para <body>, não para o botão que os abriu.

Esperado: Foco retorna ao controle que abriu o diálogo.

Janela: 1280×900 · interações desde o carregamento: 1. click thead input[type=checkbox] 2. click br-button[label="Assinar selecionados"] button 3. press Escape

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:br-button[label=\"Assinar selecionados\"]" — Seletor não resolvido

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

- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-be9987ad6ee2148b702ddb9cf2e13631a85293952663b9b339b874669d1d0122",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bed1161b0302027e69837563565576d2418788910fdecf727f7059dd5872edbd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <object type="application/pdf"> do documento a assinar sem aria-label, title nem conteúdo alternativo.

Esperado: Nome/alternativa textual para o documento incorporado (e link para baixá-lo).

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[title="Assinar"] button

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-256` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bed1161b0302027e69837563565576d2418788910fdecf727f7059dd5872edbd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c06e0267d5a70b4da5fa47805afdd399e68a9d4141c08914c01bfeef26b4cef5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O container do menu do usuário tem role="menu", mas os filhos são divs/spans e um <button> sem role="menuitem" ([ferramenta citada] aria-required-children).

Esperado: Filhos com role menuitem, ou o container sem role="menu".

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger (botão "Avatar com dropdown")

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
- `F-039` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c06e0267d5a70b4da5fa47805afdd399e68a9d4141c08914c01bfeef26b4cef5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c0cbfd868e4f6a8c54373e2e4d46b00c55122eb3470307596bca1f3e33b27e26

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Campo de texto do motivo na modal "Solicitar Revisão" sem label, aria-label ou aria-labelledby (o texto de instrução não está associado)

Esperado: Campo com rótulo associado (ex.: "Motivo da revisão")

Janela: 1280×900 · interações desde o carregamento: 1. click br-button[title="Assinar"] da linha 2 (00000.000011/2026-00) 2. click .swal2-cancel "Solicitar Revisão"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:#swal2-textarea" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-090` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c0cbfd868e4f6a8c54373e2e4d46b00c55122eb3470307596bca1f3e33b27e26",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c5a80b07adf00fa06da8030b549bdd78598f497ca3f85d7405f6448d92d77136

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na tag do filtro aplicado "Últimos 7 dias", o botão de remover contém só o ícone <i class="fas fa-times" aria-hidden="true"> e não tem aria-label: nome acessível vazio.

Esperado: Nome acessível como "Remover filtro Últimos 7 dias".

Janela: 1280×900 · interações desde o carregamento: 1. clicar na tag de filtro "Aberto há" 2. clicar na opção "Últimos 7 dias"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:span.br-tag.interaction > button.br-button.circle" — Seletor não resolvido

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
  "cardId": "C-c5a80b07adf00fa06da8030b549bdd78598f497ca3f85d7405f6448d92d77136",
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

## C-c9b97b1f692c9857939fda11dc24d7965864a8ab49bb1ad5d412a8200d7e2aed

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A ordem dos botões varia entre os diálogos de confirmação: em "Desassociar" fica "Não" (secundário) à esquerda e "Sim" (primário) à direita; em "Assinar selecionados", "Assinar" (primário) à esquerda e "Cancelar" à direita.

Esperado: Ordem consistente dos botões primário/secundário em todos os diálogos.

Janela: 1280×900 · interações desde o carregamento: 1. marcar a caixa de seleção do cabeçalho da tabela 2. acionar "Assinar selecionados"

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "unresolved:.swal2-actions" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T00-07-42-198Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T00-11-21-257Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c9b97b1f692c9857939fda11dc24d7965864a8ab49bb1ad5d412a8200d7e2aed",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ca6734732d49d74ebb1d680392df96eb182758e2792ce862ce41110457365e0a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo de busca não tem rótulo: só o placeholder "Pesquise aqui ...", que some ao digitar

Esperado: Rótulo visível e associado ao campo de busca

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

- `browser: input#search sem label/aria-label, só placeholder` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ca6734732d49d74ebb1d680392df96eb182758e2792ce862ce41110457365e0a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ca8fcc5bc104d2d5b4534c1f89e946ca28c4e113feefe112f2102a30608541d9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiqueta "Aguarda complementos": #ffffff sobre #8289ff, 14px = 3,01:1.

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
- `F-012` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ca8fcc5bc104d2d5b4534c1f89e946ca28c4e113feefe112f2102a30608541d9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cf42fc451dab45960e67f85b89bf26f4c03cfc934b6dac6fac5d47264a05caed

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual é indicada só pela classe "active" (fundo azul); o link não tem aria-current="page" (confirmado nas páginas 1 e 2).

Esperado: aria-current="page" no link da página atual.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na tag "Meus processos" (desativa) 2. selecionar 10 em "Exibir" 3. acionar o link de página "2"

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
  "cardId": "C-cf42fc451dab45960e67f85b89bf26f4c03cfc934b6dac6fac5d47264a05caed",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d0dee2360ebe6cd657940be287cc85e2d1dead88fe970bb501947ce7cfc7e6cb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Busca sem resultados: a tabela e a região aria-live da paginação são removidas e aparece "Não há processos para exibir." num <p> sem role=status/aria-live; o foco permanece no campo de busca

Esperado: Mensagem de resultado exposta como mensagem de status (role=status ou aria-live)

Janela: 1280×900 · interações desde o carregamento: 1. fill br-input#search input "zzzxxx" 2. press Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:pnip-mpa-processos .mt-5.text-center p" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `V-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d0dee2360ebe6cd657940be287cc85e2d1dead88fe970bb501947ce7cfc7e6cb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d10d95fdd94d12bd7210491d28880bb12cc58d7bccc70fd50c18a0be9fe21dc6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiqueta "Vistoria agendada": texto branco de 14px sobre rgb(79,151,209), contraste 3,14:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na tag "Meus processos" (desativa o filtro; 23 itens)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:.bg-blue-40 > .text-secondary-01" — Seletor não resolvido

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
  "cardId": "C-d10d95fdd94d12bd7210491d28880bb12cc58d7bccc70fd50c18a0be9fe21dc6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d17507b89f684ac2db8b0d98b49caca544bca7d400b3988b4aab63a5f9e228ad

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: border-radius: 20px no botão "Sair", fora da escala do DS.

Esperado: Raio da escala de tokens do DS.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger (botão "Avatar com dropdown")

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
- `F-030` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d17507b89f684ac2db8b0d98b49caca544bca7d400b3988b4aab63a5f9e228ad",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d2535644785fec38f4693cd0397f914b0dc97500cd490bd9818f29aebe6ff828

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No breadcrumb (shadow DOM), o item Home é um <a href="/portal-mpa/"> com um <button> dentro (controles interativos aninhados), e a lista não está num nav com rótulo

Esperado: Um único controle interativo por item (só o link), dentro de nav com aria-label

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

- `browser: <a href><button class="br-button small circle">` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d2535644785fec38f4693cd0397f914b0dc97500cd490bd9818f29aebe6ff828",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d39976378b2875abd35e15389088cace245d23faccb1df73dd642f55e80ee3de

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O item Home do breadcrumb é um <a href="/portal-mpa/"> que contém um <button> (aria-label="" e span sr-only "Home"): controle interativo aninhado em outro, com duas paradas de Tab.

Esperado: Um único elemento interativo (link) para o item Home.

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
  "cardId": "C-d39976378b2875abd35e15389088cace245d23faccb1df73dd642f55e80ee3de",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d754fd51f40f2f9ae6adb6fe925eb99c9b31da805c4086e5128e5ec75d53046a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Nenhum .br-footer nem <br-footer> no documento (DOM claro e shadow roots abertos); a página termina no botão Voltar e num iframe vazio.

Esperado: Área de Rodapé do modelo de página do DS com o componente Footer.

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
  "cardId": "C-d754fd51f40f2f9ae6adb6fe925eb99c9b31da805c4086e5128e5ec75d53046a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d8a3b1c1f73c81bdc390af83dac43c207e1560a26163724c5f9b4b036be18649

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual só é indicada visualmente (classe "active"); o link não tem aria-current="page" e usa href="javascript:void(0)".

Esperado: Página atual exposta programaticamente (aria-current="page").

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
  "cardId": "C-d8a3b1c1f73c81bdc390af83dac43c207e1560a26163724c5f9b4b036be18649",
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

## C-dbdda29110aa664b51f870b9a01103325ddae46908b2a6e61b17336201517827

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiquetas "Aguardando plano de ação", "Aguardando SFPA" (e "Aguardando análise" na aba Aguardando análise): #ffffff sobre #888888, 14px = 3,54:1.

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
- `F-014` → identificador devolvido por ferramenta (sem arquivo)
- `F-017` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-123` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dbdda29110aa664b51f870b9a01103325ddae46908b2a6e61b17336201517827",
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

## C-df6af6ac54454d39db73a74b815cf7273f36041bed8f9e0951b574473fc3de97

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Modal de confirmação "Tem certeza que deseja desassociar…" (role=dialog) com aria-labelledby apontando para h2 vazio e oculto: sem nome acessível

Esperado: Diálogo com título e nome acessível

Janela: 1280×900 · interações desde o carregamento: 1. click br-button[title^="Desassociar"] da linha 1 (00000.000010/2026-00)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-091` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-df6af6ac54454d39db73a74b815cf7273f36041bed8f9e0951b574473fc3de97",
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

## C-e12482ea061a467e9c1db618dcd49149e7f6f76fbc7a1561dcbccfb0d5c94976

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo de pesquisa (input#search no shadow DOM) não tem label, aria-label nem aria-labelledby; o único rótulo é o placeholder "Pesquise aqui ...", que some ao digitar.

Esperado: Rótulo visível e associado ao campo (ou ao menos aria-label persistente).

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
  "cardId": "C-e12482ea061a467e9c1db618dcd49149e7f6f76fbc7a1561dcbccfb0d5c94976",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e944fa6fe1878695b979abf4e109316a2a2850a664ca1c0493cb157014535c9c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selos cinza ("Aguardando plano de ação", "Aguardando SFPA"; e os 9 selos "Aguardando análise" da aba Aguardando análise): texto #ffffff sobre #888888, 14px normal, contraste 3,54:1

Esperado: Contraste mínimo de 4,5:1

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
- `FAM-d62990002653` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-008` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-c94ea8dae746` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e944fa6fe1878695b979abf4e109316a2a2850a664ca1c0493cb157014535c9c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e962f85055dcd1e9b46ed412ba372028666fceac0b774ab0aed56eae054a8f2b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao escolher uma opção do seletor "Exibir" pelo teclado (ArrowDown e Enter), o valor muda para 25, mas o foco vai para BODY.

Esperado: O foco deve voltar ao campo "Exibir" depois da seleção.

Janela: 1280×900 · interações desde o carregamento: 1. focar o campo "Exibir" da paginação 2. pressionar ArrowDown duas vezes 3. pressionar Enter (seleciona 25)

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#total> "Selecione"

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
  "cardId": "C-e962f85055dcd1e9b46ed412ba372028666fceac0b774ab0aed56eae054a8f2b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ea4982e72bbfa0c5f0fc899fa9543756e36362c33c5dddc6e0b1c0c4c2233e30

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A caixa "selecionar todos" no cabeçalho da tabela não tem label, aria-label nem title: nome acessível vazio.

Esperado: Nome acessível como "Selecionar todos os processos".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ea4982e72bbfa0c5f0fc899fa9543756e36362c33c5dddc6e0b1c0c4c2233e30",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ea7d22822ba645f507740e660212744b1807b0b959de2066a658b42fd098cb1a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O cabeçalho da coluna de ações (Ver processo, Desassociar, Assinar) é um th scope="col" vazio.

Esperado: Texto de cabeçalho (ex.: "Ações"), mesmo que visualmente oculto.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

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
  "cardId": "C-ea7d22822ba645f507740e660212744b1807b0b959de2066a658b42fd098cb1a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eb103b7fe21ba02fdcd118c5878b74089f8c625de877f998ae295f9c9a91e748

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página não tem h1; o título visível "Processos" é h2 e é o único cabeçalho do documento.

Esperado: Título principal da página marcado como h1, com hierarquia de cabeçalhos a partir dele.

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
  "cardId": "C-eb103b7fe21ba02fdcd118c5878b74089f8c625de877f998ae295f9c9a91e748",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ecfda25ac0c3b4926f92a6eb8f027b83cd2dc014380cef0517e1d442061544d8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ícone de saída (exit-icon.png) no botão "Sair" sem atributo alt.

Esperado: alt="" (decorativo) ou texto alternativo.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger (botão "Avatar com dropdown")

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
- `F-051` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ecfda25ac0c3b4926f92a6eb8f027b83cd2dc014380cef0517e1d442061544d8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-efe5e6ac12ca9f6fee6aedbacac903594dd6fb30ea777cfd108ad315fb5af444

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Após abrir pelo teclado a modal de "Assinar" (ou "Desassociar") e fechá-la (Esc ou "Não"), o foco vai para <body>; o botão que abriu a modal continua no DOM (isConnected=true)

Esperado: Ao fechar a modal, o foco volta ao controle que a abriu

Janela: 1280×900 · interações desde o carregamento: 1. click br-button[title="Assinar"] da linha 2 (00000.000011/2026-00) 2. press Escape

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"

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

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `browser: activeElement=BODY, host.isConnected=true` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-efe5e6ac12ca9f6fee6aedbacac903594dd6fb30ea777cfd108ad315fb5af444",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f1897ab75ebb0959b64f7aaa637f48752a2d36b0f1206091cc9163a00252fbd1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão fechar com aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang="en".

Esperado: Rótulo em português ("Fechar") ou trecho em outro idioma identificado por lang.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[title="Assinar"] button

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f1897ab75ebb0959b64f7aaa637f48752a2d36b0f1206091cc9163a00252fbd1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f1bfaf7bc8b2cae3aee58dc88baaa20656830eddb313c2369d95a79c1a3c6c19

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página não tem links de salto (ex.: "Ir para o conteúdo"); o primeiro Tab vai para o botão Menu do cabeçalho

Esperado: Âncoras para ir direto ao conteúdo principal, menu e busca

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.5

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

- `browser: sequência de Tab começa em br-header>button[Menu]` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f1bfaf7bc8b2cae3aee58dc88baaa20656830eddb313c2369d95a79c1a3c6c19",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f51d5a9f94f93e4d8b28e0dc1a67e72197c82174cca14461cd1426bbb2d5cafc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O resumo da assinatura em lote mostra códigos internos do sistema: "HABILITACAO_TR: 2" e "VINCULACAO_EMBARCACAO: 2", misturados a nomes legíveis ("Higiênico-Sanitário (HS): 1").

Esperado: Nomes dos tipos de processo em linguagem do usuário (ex.: "Habilitação de Técnico Responsável").

Janela: 1280×900 · interações desde o carregamento: 1. marcar a caixa de seleção do cabeçalho da tabela 2. acionar "Assinar selecionados"

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "unresolved:.swal2-html-container ul" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T00-11-21-257Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f51d5a9f94f93e4d8b28e0dc1a67e72197c82174cca14461cd1426bbb2d5cafc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f8fdb39fda506a70de66545414886fd81de6dfe78de978d08d5e4f16569e2f0a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual é indicada só pela classe visual "active"; o link não tem aria-current (medido nas páginas 1 e 2 de Concluídos)

Esperado: Página atual exposta programaticamente (aria-current="page")

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
- `S-page-012` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f8fdb39fda506a70de66545414886fd81de6dfe78de978d08d5e4f16569e2f0a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fa435f31c99ccf790e1fde6b9acbd3549150f6d048581d31bc840a9ba2c1c422

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O menu do usuário (e o botão do avatar) ficam fora de qualquer landmark (fora de br-header e de main)

Esperado: Conteúdo contido em landmarks (ex.: dentro do banner)

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

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
- `F-043` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fa435f31c99ccf790e1fde6b9acbd3549150f6d048581d31bc840a9ba2c1c422",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fad3621d54e4a1ba3641f5377a47f51318e4739adcd794419274dfdebb2cb83e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: As caixas de seleção das linhas não têm rótulo; o nome acessível é vazio e não identifica o processo.

Esperado: Nome acessível que identifique a linha (ex.: "Selecionar processo 00000.000011/2026-00").

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
  "cardId": "C-fad3621d54e4a1ba3641f5377a47f51318e4739adcd794419274dfdebb2cb83e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fba11c1cfd1c0d2f6bf2d86ab31212d6c46db5c21ae192a8cbd487a4e8034c44

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Não existe link de salto para o conteúdo; o primeiro link da página é o "Home" do breadcrumb (href="/portal-mpa/"); a ordem de Tab começa em Menu, avatar, Home.

Esperado: Primeiro link da página é âncora interna para o conteúdo principal (#id existente).

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fba11c1cfd1c0d2f6bf2d86ab31212d6c46db5c21ae192a8cbd487a4e8034c44",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fe2c4aae2d9c544688178f09f8342e4b7b776ba66bb88229218d6c80d8bd3cfa

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cada número de página é um <li> aninhado diretamente em outro <li> (li > li sem ul), estrutura de lista inválida.

Esperado: Um único li por item dentro do ul.

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
  "cardId": "C-fe2c4aae2d9c544688178f09f8342e4b7b776ba66bb88229218d6c80d8bd3cfa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
