# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 157 cartões únicos · 157 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 157 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 333 sujeitos · 157 cartão(ões) sem evidência verificada · 121 com unidade candidata · estimativa **942 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 94 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-00de7c010f58b56e5827a42ff1a12e8c0e74139326e1f6c21235f357457ea337

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na paginação, cada número de página é <li> aninhado diretamente dentro de outro <li> (ul > li > li > a), estrutura de lista inválida ([ferramenta citada] listitem).

Esperado: Um único nível de <li> como filho do <ul>.

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-00de7c010f58b56e5827a42ff1a12e8c0e74139326e1f6c21235f357457ea337",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-02a5a984f1df42180b563ecabe56f07fd7a8fe86a1610a6128161d45c5afd2c5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A tabela de processos não tem caption, aria-label, aria-labelledby nem title; o h2 "Processos" não está associado a ela.

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
- `S-page-005 (P-02 violada)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-02a5a984f1df42180b563ecabe56f07fd7a8fe86a1610a6128161d45c5afd2c5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-02e4b3513484a9a4edce919fd22fc7e4050d1f69ecd98535b66a3022ff7de848

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de ir à página 2 pela paginação numérica (a.page "2" ativa, "11 – 20 de 23 itens"), o seletor "Página" continua mostrando o valor "1".

Esperado: O seletor "Página" refletir a página exibida (2).

Janela: 1280×900 · interações desde o carregamento: 1. click "Meus processos" (span.br-tag.interaction:has(> span.text-truncate)) para desligar o filtro 2. click página 2 na paginação (nav[aria-label="Paginação de resultados"] > ul > li:nth-child(3) a.page)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

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

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-02e4b3513484a9a4edce919fd22fc7e4050d1f69ecd98535b66a3022ff7de848",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-03703035871c19947367b97194b9b764fcf7b27d97e65ed81d3c36e84c565eed

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: As opções do filtro aberto ("Últimos 7 dias", "Últimos 30 dias"...) são <div class="br-item"><div class="br-radio"><label> sem input associado, sem role e com tabIndex -1; só são selecionáveis com o mouse.

Esperado: Opções focáveis e selecionáveis por teclado, com papel e estado (ex.: input radio rotulado ou role="option"/menuitemradio).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. click "Meus processos" (desativa o filtro; Tramitando, 23 itens) 3. click filtro "Aberto há" (abre lista de opções)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:#searchTableUtils .br-item .br-radio label" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T08-52-43-198Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-03703035871c19947367b97194b9b764fcf7b27d97e65ed81d3c36e84c565eed",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-05a4557170d4ffc76292756ebcf3030c07af3822f093e7f526f87b7cee6ee14b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex nem role; ao abrir o menu, Tab vai do gatilho direto para "Sair", pulando essa ação.

Esperado: Ação "Trocar unidade" focável e acionável por teclado (button).

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-05a4557170d4ffc76292756ebcf3030c07af3822f093e7f526f87b7cee6ee14b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-05ffbfdce5469213c4550eb8dff18d53cdf58d44ae604614e0d5810717fd183d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Não há rodapé (.br-footer, <br-footer> ou footer) no documento.

Esperado: Região de rodapé do modelo de página do DS presente.

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
  "cardId": "C-05ffbfdce5469213c4550eb8dff18d53cdf58d44ae604614e0d5810717fd183d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0722ee2001cc486a866bad257f0f12ea9e8be03e2742048dbcc09733f579cd6e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (rota uniao-europeia): a célula "Protocolo" contém <a role="button"> vazio, sem nome acessível

Esperado: Botão com nome acessível ou removido quando não houver protocolo

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar na aba "Concluídos" 3. clicar em "Ver processo" da 1ª linha (Deferida, 00000.000033/2026-00)

Regra declarada: wcag:4.1.2

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

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-093` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0722ee2001cc486a866bad257f0f12ea9e8be03e2742048dbcc09733f579cd6e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0de4e48872d61af29a954d3ee2545113c4bdd99a52aa42b6f67b89eaf790a9e8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Container com role="menu" contém textos, hr e um <button> sem role menuitem

Esperado: role=menu só com filhos menuitem, ou remoção do role menu

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar em #avatar-dropdown-trigger

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-052` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0de4e48872d61af29a954d3ee2545113c4bdd99a52aa42b6f67b89eaf790a9e8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-125e344fcdf293e23d42e6ecd1cca076e11ca42ce1e2228188f61485168fded5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (alteracao-certificado): "Solicitado em" exibe "NaN/NaN/NaN" (também no title); as demais células da linha estão vazias

Esperado: Data válida ou mensagem de dado indisponível

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar em "Ver processo" da 1ª linha da aba Tramitando (00000.000010/2026-00, Em análise analista)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "unresolved:main td[title=\"NaN/NaN/NaN\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-125e344fcdf293e23d42e6ecd1cca076e11ca42ce1e2228188f61485168fded5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1485d434d357a952d51484e79ea64e790d4da847b55d1440a85874413905f7b1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão "Menu" (#navigation, shadow DOM do cabeçalho) com data-target="#main-navigation", elemento inexistente: ao clicar nada abre e não há aria-expanded

Esperado: Botão de menu que abra a navegação e exponha o estado, ou seja removido

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-1485d434d357a952d51484e79ea64e790d4da847b55d1440a85874413905f7b1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-174618a6f1577b6dd9ae3e67cb637864dc39fb9ebfab3c983974a29cba146fa3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página não tem h1; o título principal "Processos" é um h2 ([ferramenta citada] page-has-heading-one).

Esperado: Título principal da página como h1.

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
  "cardId": "C-174618a6f1577b6dd9ae3e67cb637864dc39fb9ebfab3c983974a29cba146fa3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-175b3798b9104d7b4f921305dee71d71c44e5cd172c53fe507d8bc02c41a8597

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Trocar unidade" é um <span> com cursor:pointer, sem role nem tabindex (tabIndex -1); não é alcançável por teclado.

Esperado: Ação implementada como button ou link focável.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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

- `../../tmp/pw-0/page-2026-11-17T08-55-10-815Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-175b3798b9104d7b4f921305dee71d71c44e5cd172c53fe507d8bc02c41a8597",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1b0fd077f18581702ff6cb56f95551558314d986ea8208f767e296e916802fa0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Não há h1 na página; o título principal "Processos" é h2 (o título do sistema no cabeçalho é um div)

Esperado: Título principal do conteúdo como h1, com a hierarquia começando nele

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-1b0fd077f18581702ff6cb56f95551558314d986ea8208f767e296e916802fa0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1bc9b09954459f08929d3506275dc0a8c2409ea7a8050cbe816213656275550a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Logo gov.br no cabeçalho (shadow DOM de br-header): <img src="assets/images/govbr-logo.png" alt="logo">; o texto alternativo não diz o que a imagem mostra.

Esperado: alt que identifique o logo, ex.: "gov.br".

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
  "cardId": "C-1bc9b09954459f08929d3506275dc0a8c2409ea7a8050cbe816213656275550a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1f9fce1a72ad623e4f680ad1736666b6da261ac12a364a4f2bd38c33a5de2076

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cabeçalhos de coluna sem texto: coluna de seleção (só um checkbox sem rótulo) e coluna de ações (th vazio)

Esperado: Cabeçalhos com texto que identifique a coluna (ex.: "Selecionar", "Ações")

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

Regra declarada: wcag:1.3.1

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
- `F-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-010` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1f9fce1a72ad623e4f680ad1736666b6da261ac12a364a4f2bd38c33a5de2076",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2036aba6b535dda46da13defa070efa78a8415eeb32766db61f0d38749f34894

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (alteracao-certificado, 0010): após o h2 "Alteração de Certificado", as seções "1. Dados da embarcação"… são h4 (pula o nível 3)

Esperado: Hierarquia de títulos sem saltos

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar em "Ver processo" da 1ª linha da aba Tramitando (00000.000010/2026-00, Em análise analista)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:main h4" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-102` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2036aba6b535dda46da13defa070efa78a8415eeb32766db61f0d38749f34894",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2074359929a506c9a249f737b71ae6373df7ec4187f5a3dcf801ebe26dbcc528

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O cabeçalho da coluna de ações (Ver processo / Desassociar / Assinar) é um <th scope="col"> vazio ([ferramenta citada] empty-table-header).

Esperado: Cabeçalho com texto, mesmo que visualmente oculto (ex.: "Ações").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:3.10

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
- `F-019` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2074359929a506c9a249f737b71ae6373df7ec4187f5a3dcf801ebe26dbcc528",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-211fc4d18cf3d13450d8715912c847c62e7000b964c498334085c30a4f346e79

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (alteracao-certificado, registro 0010): a célula "Protocolo" contém <a role="button"> vazio, sem nome acessível

Esperado: Botão com nome acessível

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar em "Ver processo" da 1ª linha da aba Tramitando (00000.000010/2026-00, Em análise analista)

Regra declarada: wcag:4.1.2

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

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-101` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-211fc4d18cf3d13450d8715912c847c62e7000b964c498334085c30a4f346e79",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-252284e7c7adec6f90391956817a3eda5971bc705754a04691cc04f9ffade9bc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A tabela mede 1150px de largura e transborda o contêiner .br-table (1096px, x 92–1188) até x=1242, passando da margem do grid usada pelo título, pelas abas e pelo botão Exportar (overflow-x: visible).

Esperado: Tabela contida na largura do contêiner/grid (ou rolagem horizontal no próprio .br-table).

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
  "cardId": "C-252284e7c7adec6f90391956817a3eda5971bc705754a04691cc04f9ffade9bc",
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

## C-28eacce316106eebed56e908f6f849a473fb83c898f08066dbd038566bb8340e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Não existe h1 na página (nem no shadow DOM do cabeçalho); o título principal "Processos" é h2 e é o único cabeçalho da tela.

Esperado: Título principal da página marcado como h1, com hierarquia a partir dele.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-28eacce316106eebed56e908f6f849a473fb83c898f08066dbd038566bb8340e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2a577c9ae928312574ed752c1f8cca4f6e7e2fdc68fa92f9fd92ad135712044d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O menu do usuário aberto fica fora de qualquer landmark ([ferramenta citada] region): o bloco .drop-menu-login é irmão do br-header, fora do banner.

Esperado: Conteúdo contido em regiões (dentro do header/banner).

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-109` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2a577c9ae928312574ed752c1f8cca4f6e7e2fdc68fa92f9fd92ad135712044d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2a5ac5bc35b876d60df52350a1769d7f7e16b66cfc63bd344184561ecbb53ce8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Meus processos" alterna entre ligado (fundo #1351b4, texto branco) e desligado (fundo branco, borda cinza) ao clicar, mas o estado só é visual: span sem role nem aria-pressed.

Esperado: Estado de alternância exposto programaticamente (button com aria-pressed true/false).

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2a5ac5bc35b876d60df52350a1769d7f7e16b66cfc63bd344184561ecbb53ce8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2d0a5006f7ab82fa1930402404acd67d8f8be6ccb15c1dd41727b15653e880f9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiquetas de status "Em análise analista"/"Em análise supervisor": texto #ffffff sobre #e66f0e, 14px normal = 3,16:1.

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
  "cardId": "C-2d0a5006f7ab82fa1930402404acd67d8f8be6ccb15c1dd41727b15653e880f9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2d5ae5586f54f7a4c4b63ad1f77ba6cb77a19643c2eb8cab3337ed73a75b37b4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (alteracao-certificado, registro 0001 da aba Aguardando análise): <a role="button"> vazio na célula "Protocolo"

Esperado: Botão com nome acessível

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar na aba "Aguardando análise" 3. clicar em "Ver processo" da 1ª linha (00000.000001/2026-00, Aguardando análise)

Regra declarada: wcag:4.1.2

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

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-106` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2d5ae5586f54f7a4c4b63ad1f77ba6cb77a19643c2eb8cab3337ed73a75b37b4",
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

## C-313c2b44d3156f6357ac7e7874bd6d48507aec2517959cfad7e9703b2f884ac1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (uniao-europeia), com a seção expandida: <a role="button"> vazio na célula "Protocolo", sem nome acessível

Esperado: Botão com nome acessível

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar na aba "Concluídos" 3. clicar em "Ver processo" da 1ª linha (Deferida, 00000.000033/2026-00) 4. clicar em "Mostrar" da seção Dados da Embarcação

Regra declarada: wcag:4.1.2

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

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-097` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-313c2b44d3156f6357ac7e7874bd6d48507aec2517959cfad7e9703b2f884ac1",
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

## C-3658e346447e401fcf70891f03ac5652a1e8cd0908112129ea0d41db9c7ff1bf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão "Buscar" posicionado com margin: -38px 4px 0 0 (estilo inline margin-top:-38px), fora da escala de espaçamento do DS.

Esperado: Espaçamento com tokens do DS (botão integrado ao br-input pela estrutura do componente).

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
  "cardId": "C-3658e346447e401fcf70891f03ac5652a1e8cd0908112129ea0d41db9c7ff1bf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-38af1fe5280024bce60d2cd1177c093bae339589574bcc414e1390efd18fff89

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: iframe (about:blank, 1160×500, focável na ordem de tabulação) sem title, aria-label ou aria-labelledby

Esperado: Iframe com título descritivo, ou removido se não tiver conteúdo

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-38af1fe5280024bce60d2cd1177c093bae339589574bcc414e1390efd18fff89",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3a2618e30514ee4a77ff897c9e078238eab87b38f9cb886fd334a249dc328830

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiquetas de status "Em análise analista/supervisor/diretor": texto branco rgb(255,255,255) sobre rgb(230,111,14), 14px peso 500, contraste 3.16:1.

Esperado: Contraste mínimo de 4.5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3a2618e30514ee4a77ff897c9e078238eab87b38f9cb886fd334a249dc328830",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3aa641cb87a26583725196599b89a7244e08c2cbbd499487d7462a3e9433bbc1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiqueta "Vistoria agendada": texto branco sobre rgb(79,151,209), 14px peso 500, contraste 3.14:1.

Esperado: Contraste mínimo de 4.5:1.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. click "Meus processos" (desativa o filtro; Tramitando, 23 itens)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.bg-blue-40 > .text-secondary-01" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T08-52-43-198Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3aa641cb87a26583725196599b89a7244e08c2cbbd499487d7462a3e9433bbc1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3cb7ffe02b28e7742b667ef3b07f99681f0d1a8db2dd5c95648e0688b9a57c69

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com o foco no botão "Aguardando análise", ArrowRight não move o foco nem muda a aba (activeElement continua AGUARDANDO_ANALISE; aba ativa continua Tramitando). Só a tecla Tab percorre as abas.

Esperado: Navegação entre as abas pelas teclas Tab e setas esquerda/direita.

Janela: 1280×900 · interações desde o carregamento: 1. foco no botão da aba "Aguardando análise" 2. press ArrowRight

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
  "cardId": "C-3cb7ffe02b28e7742b667ef3b07f99681f0d1a8db2dd5c95648e0688b9a57c69",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-410eb7b8f8afd0bd25dc9b67ec91ce457bd81665d18a3ed0ec57a2a9b0ba14a5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiqueta "Aguarda complementos": texto branco sobre rgb(130,137,255), 14px peso 500, contraste 3.01:1.

Esperado: Contraste mínimo de 4.5:1.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-410eb7b8f8afd0bd25dc9b67ec91ce457bd81665d18a3ed0ec57a2a9b0ba14a5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-417b6b7168399b6edc4feda84796b5cdb8efbb2812f68c91bea482b278c730b8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os números de processo são <a role="button"> sem href nem tabindex: abrem o detalhe ao clique, mas não recebem foco (Tab real foi do checkbox do cabeçalho direto para "Ver processo" da linha 1).

Esperado: Elemento com papel de botão focável e acionável por teclado (button ou a com href).

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
  "cardId": "C-417b6b7168399b6edc4feda84796b5cdb8efbb2812f68c91bea482b278c730b8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-41de857a7b7e2a53e64a03ca3045382fd523a741a051f30feb0bc54676583d2c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A aba ativa é indicada só pela classe "active" no <li> (cor #0c326f e borda inferior). Os botões não têm role="tab", aria-selected nem aria-current; nav "Abas de Navegação Simples" com lista de botões.

Esperado: Aba selecionada exposta programaticamente (role="tab" + aria-selected="true", ou aria-current).

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
- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-41de857a7b7e2a53e64a03ca3045382fd523a741a051f30feb0bc54676583d2c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-43f09ba2e42c2a31a813a8b6432d4b6e75f7da8b4ca7a97f0d534bdb57b957c1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Chips "Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho" são <span> com cursor:pointer e handler de clique, sem tabindex (tabIndex=-1): não recebem foco pelo Tab nem são acionáveis por teclado

Esperado: Controles de filtro operáveis por teclado

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-43f09ba2e42c2a31a813a8b6432d4b6e75f7da8b4ca7a97f0d534bdb57b957c1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4482907d5103101addaf19c9079c137f12879abf481eef92b7e3bfff29aef94e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (uniao-europeia): o cabeçalho tem 7 colunas (Data, Protocolo, Solicitante, Status, Laudo, Plano de Ação, Parecer), mas a linha tem 6 células; o selo de status fica sob "Solicitante" e os ícones ficam deslocados

Esperado: Cada célula associada ao cabeçalho correto

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar na aba "Concluídos" 3. clicar em "Ver processo" da 1ª linha (Deferida, 00000.000033/2026-00)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)" — <tr> "11 horas 00000.000010/2026-00 Alteração de Certi"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)" — <tr> "3 dias 00000.000011/2026-00 CAOL - Cert. Acred O"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)" — <tr> "8 dias 00000.000013/2026-00 Habilitação de Técni"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)" — <tr> "15 dias 00000.000016/2026-00 Vinculação de embar"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)" — <tr> "23 dias 00000.000019/2026-00 Alteração de Certif"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)" — <tr> "38 dias 00000.000025/2026-00 Vinculação de embar"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)" — <tr> "44 dias 00000.000027/2026-00 Certificação Higiên"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)" — <tr> "45 dias 00000.000028/2026-00 Alteração de Certif"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)" — <tr> "53 dias 00000.000031/2026-00 Habilitação de Técn"

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

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4482907d5103101addaf19c9079c137f12879abf481eef92b7e3bfff29aef94e",
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

## C-45297f95919620da44bc1cc6323a9a92b27067234316167297b2803c3b8f5530

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O logotipo gov.br no cabeçalho (img no shadow DOM de br-header, src assets/images/govbr-logo.png) tem alt="logo", que não transmite o conteúdo.

Esperado: Alternativa textual equivalente, ex.: alt="gov.br".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-45297f95919620da44bc1cc6323a9a92b27067234316167297b2803c3b8f5530",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-45c570fea895df71f25e4e70ed90d3a9203159408a8e2c9bb6b95f943d41b109

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (uniao-europeia): "Mostrar"/"Ocultar" das seções são <span> com cursor:pointer, sem tabindex: inalcançáveis pelo teclado

Esperado: Controles de expandir/recolher operáveis por teclado

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar na aba "Concluídos" 3. clicar em "Ver processo" da 1ª linha (Deferida, 00000.000033/2026-00)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-45c570fea895df71f25e4e70ed90d3a9203159408a8e2c9bb6b95f943d41b109",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-48f113c1289c02eadeb7b6725e69dcd97eb4e6134095e7ce89387facb44e183d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Esses ícones clicáveis não têm papel de botão/link nem nome acessível (só o glifo com aria-hidden)

Esperado: Papel e nome acessível (ex.: "Abrir ofício", "Abrir certificado em PDF")

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar em "Ver processo" da 1ª linha da aba Tramitando (00000.000010/2026-00, Em análise analista)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>

### Unidades candidatas (não são crédito)

- U-13e14da6881fd7317599c22e4d841d1e88a8e81256d5fe8461a7ceebd14226ff — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-186f4c9409d537825e7336561234ccfb7fd1ebb2f8f8f27e87d4bbad19ab2381 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2d4ae36199b807ce44fb69d185d59fbd726394d6b1af1cf0529ea1653617d561 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-341624fb3a5c6b6ba8834bda55b367126a76f1917216f7f774a3072f99af6f70 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3b1ce1702834fd908a0774e74a829e23aa750cdfbd309af5d03e1749cb22c126 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-58d7cb60f6329b3943cc33a14bdfc03608e893f7ded7331325ea7b18511f0d80 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-5e55a4f1907056346b456c0dfe9b68a4cc70b74cd09c59aedf415de930b1696c — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
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
- U-dd7e104bdc5ea9d09dca144559e44d558bc4430cadef99dae7c8c015d87c79e0 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e81cbf3acc7a5fecb506b96d5b0a694c6e0ababb94e3924ed87185d438c7adb5 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-48f113c1289c02eadeb7b6725e69dcd97eb4e6134095e7ce89387facb44e183d",
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

## C-4b4ca6c71f2cda54e283a007723bd4ac5f2e9c51c2cb6e9ea91c07789b49f98e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (uniao-europeia): selo de status "SUCCESS" com texto branco sobre #888888, 14px = 3,54:1

Esperado: Contraste mínimo de 4,5:1

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar na aba "Concluídos" 3. clicar em "Ver processo" da 1ª linha (Deferida, 00000.000033/2026-00)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise analista"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguarda complementos"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em revisão analista"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando plano de ação"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise diretor"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando SFPA"

### Unidades candidatas (não são crédito)

- U-020360fe0ac1b486fa68bac1572f06684b64bbf0c16f9ef7e3d693f04d91b193 — D-06 · inicial · cena 1280x900 · <div> "Em análise diretor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-039cdeb0126715207688cb7da2f3306eef77199fc525db06185fbad80f0e6b4a — D-06 · inicial · cena 1280x900 · <div> "Aguarda complementos": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2a31c652c1de15ddca1e64fbcf431a95e403b5fed0a267279beb5e376abb3a19 — D-06 · inicial · cena 1280x900 · <div> "Aguardando SFPA": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
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
- U-ffa2c82ff6e2dd53e7e93f117cc3ebea7778b7172fc04853bba8da04f3a8ec19 — D-06 · inicial · cena 1280x900 · <div> "Aguardando plano de ação": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-094` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4b4ca6c71f2cda54e283a007723bd4ac5f2e9c51c2cb6e9ea91c07789b49f98e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4b614cc4606b7e5f97eda769495b4ccf242b185585d1d6a21058dde145417197

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão do usuário mostra "Olá, Usuária de Teste, SUPERVISOR", mas aria-label="Avatar com dropdown" substitui esse texto no nome acessível.

Esperado: Nome acessível que contenha o texto visível (ex.: remover aria-label ou usar "Olá, Usuária de Teste, SUPERVISOR – menu do usuário").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4b614cc4606b7e5f97eda769495b4ccf242b185585d1d6a21058dde145417197",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4cbf0c980039abb719afc8b2826eaca0753452794bdc169f55c6a5fa0efdcdc2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O diálogo de confirmação do Desassociar (role="dialog", aria-modal) tem aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com display:none; o diálogo fica sem nome acessível.

Esperado: Diálogo com nome acessível (título visível ou aria-label, ex.: "Desassociar processo").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. focus botão Desassociar (linha 00000.000010/2026-00) 3. press Enter

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T08-56-23-312Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4cbf0c980039abb719afc8b2826eaca0753452794bdc169f55c6a5fa0efdcdc2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4d4947eb8dd550b25b5352796304f58f04a54a98cae3ed0de9442c158f4cbac3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os diálogos de "Assinar" e de "Desassociar" (SweetAlert2, role="dialog" aria-modal="true") têm aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e display:none: o diálogo fica sem nome acessível ([ferramenta citada] aria-dialog-name).

Esperado: Diálogo com título visível ou aria-label (ex.: "Assinar documento", "Desassociar processo").

Janela: 1280×900 · interações desde o carregamento: 1. click "Assinar" da linha 2 (tbody tr:nth-child(2) br-button[title=Assinar] >>> button)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-159` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-169` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4d4947eb8dd550b25b5352796304f58f04a54a98cae3ed0de9442c158f4cbac3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4d607a46d09e4ed092e8f17f6e425ee97bd7de4ea28529263ce7daecb30f324f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O menu do usuário aberto tem role="menu", mas nenhum descendente com role="menuitem"; contém divs de texto, um span clicável ("Trocar unidade") e um button comum ("Sair").

Esperado: Papel coerente com o conteúdo: menuitems de fato com navegação por setas, ou remover role="menu" e usar uma lista/disclosure simples.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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

- `../../tmp/pw-0/page-2026-11-17T08-55-10-815Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4d607a46d09e4ed092e8f17f6e425ee97bd7de4ea28529263ce7daecb30f324f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4de6bb524292ee8790fd851dda32060f4d0ef4ddb3c91c667fdf85ef332448f6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <object type="application/pdf"> sem title, aria-label nem conteúdo alternativo

Esperado: Alternativa textual/título para o documento incorporado

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar em "Ver processo" da 1ª linha da aba Tramitando (00000.000010/2026-00, Em análise analista) 3. clicar no ícone da coluna "Ofício"

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-105` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4de6bb524292ee8790fd851dda32060f4d0ef4ddb3c91c667fdf85ef332448f6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4e34f5dba4eb7d4390cd7f2290df7bf30a597250e910fd98849c1d679e187783

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Inicial "U" do avatar: branco #ffffff sobre #ff8c00, 24,19px negrito = 2,33:1

Esperado: Contraste mínimo de 3:1 para texto grande

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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
- `V-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4e34f5dba4eb7d4390cd7f2290df7bf30a597250e910fd98849c1d679e187783",
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

## C-52ecc638135e3b79639d356705c5176005a64b036f587308001851f5c42b98e6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão "Sair" do menu do usuário com border-radius: 20px, fora da escala de raio do DS.

Esperado: Raio da escala do DS (tokens de borda).

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-078` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-52ecc638135e3b79639d356705c5176005a64b036f587308001851f5c42b98e6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5594792fec94369fb40575de8a0223494a60518d7f878a8d964d06c7290b30bd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões das abas (no shadow DOM de br-tab) têm aria-label com o identificador interno: "AGUARDANDO_ANALISE", "TRAMITANDO", "HISTORICO", enquanto o rótulo visível é "Aguardando análise", "Tramitando", "Concluídos". O aria-label substitui o texto visível no nome acessível.

Esperado: Nome acessível que contenha o rótulo visível (remover o aria-label ou usar o texto da aba).

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
  "cardId": "C-5594792fec94369fb40575de8a0223494a60518d7f878a8d964d06c7290b30bd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5748c603b6ffd8d3ca1df9532b0fd3d1302057ba0dfc0a6e9d6b38efbdeab01d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O cabeçalho "Aberto há" exibe o ícone de ordenação sort-down (a tabela está ordenada por essa coluna), mas o th não tem aria-sort; o clique no th não altera a ordem e ele não é focável.

Esperado: Ordenação exposta programaticamente (aria-sort="ascending"/"descending" no th ordenado).

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
  "cardId": "C-5748c603b6ffd8d3ca1df9532b0fd3d1302057ba0dfc0a6e9d6b38efbdeab01d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-57bb57268933b9ce376564fc80b514e975bf569a1ed41811a99cfcb8a7dff2b9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Separador do menu do usuário com border-top-color #bbbbbb, que não corresponde a nenhum token de cor do DS.

Esperado: Cor de token do DS (ou componente br-divider).

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-082` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-57bb57268933b9ce376564fc80b514e975bf569a1ed41811a99cfcb8a7dff2b9",
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

## C-59bf6b140f152c7f81740f32f91ae7f4baa38227f36edccf74379168ac93d621

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: <iframe style="border:none;width:100%;height:500px"> sem title, aria-label nem aria-labelledby ([ferramenta citada] frame-title).

Esperado: Frame com nome acessível (title) ou removido se não tiver conteúdo.

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
  "cardId": "C-59bf6b140f152c7f81740f32f91ae7f4baa38227f36edccf74379168ac93d621",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5a1f721d72bde669f2b0f97decb47ac5284e9d98c66662e633b0d2181abf683b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiquetas de status cinza ("Aguardando plano de ação", "Aguardando SFPA" e todas as "Aguardando análise" da aba Aguardando análise): texto #ffffff sobre #888888, 14px normal = 3,54:1.

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
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-065` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5a1f721d72bde669f2b0f97decb47ac5284e9d98c66662e633b0d2181abf683b",
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

## C-5bc2f9f559e11f02bc5bdc28b1ad0d4bbcdd7f4ea1b29158a78b8d214fbc0f88

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiqueta de status com fundo bg-blue-40: texto #ffffff sobre #4f97d1, 14px normal = 3,14:1 (lista sem o filtro "Meus processos", página 2).

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. click "Meus processos" (span.br-tag.interaction:has(> span.text-truncate)) para desligar o filtro 2. click página 2 na paginação (nav[aria-label="Paginação de resultados"] > ul > li:nth-child(3) a.page)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.bg-blue-40 > .text-secondary-01" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-120` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5bc2f9f559e11f02bc5bdc28b1ad0d4bbcdd7f4ea1b29158a78b8d214fbc0f88",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6247b41710575536ffdd7a2c1c4ee9e8e5ca2f7e22aaacc031d0d9dc29daa3e3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Item "Home" da trilha é um <a href> contendo um <button>: controles aninhados, duas paradas de Tab para o mesmo destino

Esperado: Um único elemento interativo por item da trilha

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-6247b41710575536ffdd7a2c1c4ee9e8e5ca2f7e22aaacc031d0d9dc29daa3e3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-65562b2f28ae8d31ab07bf1912515f60eba73f607b28185fd5e9491018e146cc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O controle "Meus processos" é um <span class="br-tag interaction"> sem role nem tabindex; só funciona por clique de mouse e não recebe foco por Tab.

Esperado: Controle alcançável e acionável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

Regra declarada: wcag:2.1.1

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-65562b2f28ae8d31ab07bf1912515f60eba73f607b28185fd5e9491018e146cc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-68b5071cbf71ccefc415f82941267172ffa3ae1297330eb419bed0f80f7d7335

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Opções da lista de filtro são div.br-item com <label> solto (sem input associado), sem tabindex nem role option; a lista rolável não recebe foco

Esperado: Opções focáveis e selecionáveis por teclado

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar no chip de filtro "Tipo de processo"

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:#searchTableUtils .br-list .br-item" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-041` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-68b5071cbf71ccefc415f82941267172ffa3ae1297330eb419bed0f80f7d7335",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6bf226027f37260f63f710c589407f6a011e69975eab41b8dfe132a3469a3f9e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os seletores "Exibir" e "Página" são input type="text" que abrem uma lista (ArrowDown abre a lista de 10/25/50/100), mas não têm role="combobox", aria-expanded nem aria-controls.

Esperado: Papel e estado de combobox/listbox expostos (role="combobox", aria-expanded, aria-controls).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6bf226027f37260f63f710c589407f6a011e69975eab41b8dfe132a3469a3f9e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6e99d5198a2a7735019e303266347dbc9101887f452d3634bc3b85b9ea8a1cd3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de fechar dos diálogos tem aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang="en".

Esperado: Nome em português (ex.: "Fechar") ou trecho em outro idioma identificado.

Janela: 1280×900 · interações desde o carregamento: 1. click "Assinar" da linha 2 (tbody tr:nth-child(2) br-button[title=Assinar] >>> button)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6e99d5198a2a7735019e303266347dbc9101887f452d3634bc3b85b9ea8a1cd3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6fb8cbbddd6f1b725a0bfd7cb9e9a13bc3fe1723c993c84bf126faf5b8cf2774

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os diálogos usam SweetAlert2 em vez do br-modal do DS, com valores fora dos tokens: botão de fechar com font-family monospace e border-radius 5px; botões de ação com border-radius 20px e margens de 10px.

Esperado: Diálogos com o componente Modal do DS e tokens de tipografia, raio e espaçamento.

Janela: 1280×900 · interações desde o carregamento: 1. click "Assinar" da linha 2 (tbody tr:nth-child(2) br-button[title=Assinar] >>> button)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-135` → identificador devolvido por ferramenta (sem arquivo)
- `F-136` → identificador devolvido por ferramenta (sem arquivo)
- `F-137` → identificador devolvido por ferramenta (sem arquivo)
- `F-138` → identificador devolvido por ferramenta (sem arquivo)
- `F-139` → identificador devolvido por ferramenta (sem arquivo)
- `F-140` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6fb8cbbddd6f1b725a0bfd7cb9e9a13bc3fe1723c993c84bf126faf5b8cf2774",
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

## C-70e9bd9ac56fb1112191f710f7f28480f460cf08a41a8ca5830d278a3e42c3f0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (alteracao-certificado, 0001): seções h4 logo após o h2 (salto de nível)

Esperado: Hierarquia de títulos sem saltos

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar na aba "Aguardando análise" 3. clicar em "Ver processo" da 1ª linha (00000.000001/2026-00, Aguardando análise)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:main h4" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-107` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-70e9bd9ac56fb1112191f710f7f28480f460cf08a41a8ca5830d278a3e42c3f0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-71b176e677911337c98d5ba524dcf4d618f8e843271af0ecf5838f47e2813e29

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No diálogo de "Assinar selecionados" a ordem dos botões é primário "Assinar" à esquerda e secundário "Cancelar" à direita; nos diálogos de Desassociar ("Não" | "Sim") e de Assinar ("Solicitar Revisão" | "Assinar com gov.br") o primário fica à direita.

Esperado: Ordem consistente dos botões de ação entre os diálogos (primário sempre na mesma posição).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. focus checkbox do cabeçalho da tabela 3. press Space 4. focus "Assinar selecionados" 5. press Enter

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "unresolved:.swal2-actions" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T09-00-19-015Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-71b176e677911337c98d5ba524dcf4d618f8e843271af0ecf5838f47e2813e29",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-74579f948657fed001b0814e4497a7e6a97fe0aae60e0cc0f79a1be0fca5d5f1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O número do processo é <a role="button"> sem href e sem tabindex: Tab vai do checkbox do cabeçalho direto para "Ver processo"; o clique executa ação própria (navega para /pnip-d/login), inacessível por teclado

Esperado: Controle focável e acionável por teclado

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-74579f948657fed001b0814e4497a7e6a97fe0aae60e0cc0f79a1be0fca5d5f1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-76b9434346624bb18a967be95c866c1c9ef36af8182b03271d2877b29c2f6587

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (alteracao-certificado): os ícones das colunas "Ofício" e "Certificado" abrem o documento ao clicar, mas são br-icon-base sem tabindex (inacessíveis pelo teclado); ao fechar o diálogo o foco vai para o body

Esperado: Controles focáveis e acionáveis por teclado, com retorno do foco ao gatilho

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar em "Ver processo" da 1ª linha da aba Tramitando (00000.000010/2026-00, Em análise analista)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>br-button:nth-of-type(1)>br-icon-base" — <br-icon-base>

### Unidades candidatas (não são crédito)

- U-13e14da6881fd7317599c22e4d841d1e88a8e81256d5fe8461a7ceebd14226ff — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-186f4c9409d537825e7336561234ccfb7fd1ebb2f8f8f27e87d4bbad19ab2381 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2d4ae36199b807ce44fb69d185d59fbd726394d6b1af1cf0529ea1653617d561 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-341624fb3a5c6b6ba8834bda55b367126a76f1917216f7f774a3072f99af6f70 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3b1ce1702834fd908a0774e74a829e23aa750cdfbd309af5d03e1749cb22c126 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-58d7cb60f6329b3943cc33a14bdfc03608e893f7ded7331325ea7b18511f0d80 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-5e55a4f1907056346b456c0dfe9b68a4cc70b74cd09c59aedf415de930b1696c — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
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
- U-dd7e104bdc5ea9d09dca144559e44d558bc4430cadef99dae7c8c015d87c79e0 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e81cbf3acc7a5fecb506b96d5b0a694c6e0ababb94e3924ed87185d438c7adb5 — D-01 · inicial · cena 1280x900 · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-76b9434346624bb18a967be95c866c1c9ef36af8182b03271d2877b29c2f6587",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-77308b8f2cdf2c1c2b1e37364e0548f8892ac4b968bb1cec79380e219a186795

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Imagem exit-icon.png dentro do botão "Sair" sem atributo alt ([ferramenta citada] image-alt).

Esperado: alt="" (ícone decorativo ao lado do texto "Sair").

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-099` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-77308b8f2cdf2c1c2b1e37364e0548f8892ac4b968bb1cec79380e219a186795",
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

## C-7cd5a8ecce6ff61f2b8dd0f036253ff54e3e111ba039017b4f6b02deb5090b33

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiquetas "Aguardando plano de ação" e "Aguardando SFPA" (e "Aguardando análise" na aba correspondente): texto branco sobre rgb(136,136,136), 14px peso 500, contraste 3.54:1.

Esperado: Contraste mínimo de 4.5:1.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7cd5a8ecce6ff61f2b8dd0f036253ff54e3e111ba039017b4f6b02deb5090b33",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7dc02df2d83c540cbfbcbfd33d7a6e8d20924c970c6c2014eea3cda1430cd9ed

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Checkbox nativo do cabeçalho com style inline transform: scale(1.5); margin-left: 5px (margin 0 0 4px 5px, fora da escala); não usa o componente br-checkbox.

Esperado: Checkbox do DS (br-checkbox) com espaçamentos da escala.

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
  "cardId": "C-7dc02df2d83c540cbfbcbfd33d7a6e8d20924c970c6c2014eea3cda1430cd9ed",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-82bb5de13812a56f623c9bbe18c5d940a486f1a3393cf35007dd67765c9291aa

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (uniao-europeia): "Mostrar"/"Ocultar" sem role de botão nem aria-expanded; o estado só muda no texto e no ícone

Esperado: Papel button e aria-expanded refletindo o estado

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar na aba "Concluídos" 3. clicar em "Ver processo" da 1ª linha (Deferida, 00000.000033/2026-00)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-82bb5de13812a56f623c9bbe18c5d940a486f1a3393cf35007dd67765c9291aa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8395da6621fca0665673ca858bdff3d2feeec8719b5b57209b32026cf6f00595

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os gatilhos de filtro abrem uma lista suspensa (o ícone muda de caret-down para caret-up), mas não têm role de botão nem aria-expanded/aria-controls; a abertura e o fechamento não são expostos.

Esperado: Gatilho com papel de botão e aria-expanded refletindo a lista aberta/fechada.

Janela: 1280×900 · interações desde o carregamento: 1. click span.br-tag "Aberto há" (#searchTableUtils .row.align-items-center > .col-auto:nth-child(1) > span.br-tag)

Regra declarada: wcag:4.1.2

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
  "cardId": "C-8395da6621fca0665673ca858bdff3d2feeec8719b5b57209b32026cf6f00595",
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

## C-87a9639932dfd94daade12120956788fc18c5918d745db6708457344887e76e4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na aba Tramitando, a tabela mede 1150 px dentro do container .br-table de 1096 px (overflow visible); o cabeçalho cinza e a coluna de ações passam 54 px da margem direita do conteúdo (até x=1242, contra 1188 das abas e da pesquisa). Nas abas Aguardando análise e Concluídos a tabela cabe nos 1096 px.

Esperado: A tabela caber na coluna de conteúdo ou rolar dentro do container.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-87a9639932dfd94daade12120956788fc18c5918d745db6708457344887e76e4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-88722c0b72fdd35cc46ad1647d7e69a54ab81437c995876b69dad1ca47830c4d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O checkbox do cabeçalho (seleciona todas as linhas e mostra "Assinar selecionados") e os 6 checkboxes das linhas não têm label, aria-label nem aria-labelledby; nome acessível vazio.

Esperado: Cada checkbox com nome acessível (ex.: "Selecionar todos os processos", "Selecionar processo 00000.000011/2026-00").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-88722c0b72fdd35cc46ad1647d7e69a54ab81437c995876b69dad1ca47830c4d",
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

## C-8a955349da2bb0c50bb520706eb0a5c0454f4f0a8d54dbd5b34f3bc0a1c7dc9d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão "Menu" (#navigation, data-target="#main-navigation") não abre nada ao ser clicado: não existe elemento #main-navigation nem br-menu no documento; o botão também não tem aria-expanded.

Esperado: Botão de menu que abra o menu principal (e exponha aria-expanded) ou que não seja exibido quando não há menu.

Janela: 1280×900 · interações desde o carregamento: 1. click botão "Menu" do cabeçalho (br-header >>> #navigation)

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
  "cardId": "C-8a955349da2bb0c50bb520706eb0a5c0454f4f0a8d54dbd5b34f3bc0a1c7dc9d",
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

## C-8f63fbb950c7335eba42fd90f9e60a3283c7e760ce07e09ec3e4863e2c365096

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Abrindo o diálogo com Enter no botão "Assinar" da linha 2 e fechando com Esc (o mesmo acontece em "Desassociar" da linha 1), o foco vai para <body>, não volta ao botão que abriu o diálogo.

Esperado: Ao fechar o diálogo, o foco volta ao controle que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. foco no botão "Assinar" da linha 2 2. press Enter 3. press Shift+Tab (foco sai do PDF para .swal2-close) 4. press Escape

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

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

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `V-001 (unverifiable: localizador em shadow DOM)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8f63fbb950c7335eba42fd90f9e60a3283c7e760ce07e09ec3e4863e2c365096",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8f8d7c411012cabbeada07ab51d0aadc9bf0536cc2f578ab9caf4b4aad2d3196

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O documento é exibido num <object type="application/pdf"> (1091×600) sem title, sem aria-label e sem conteúdo alternativo; neste ambiente o PDF não carregou ("Failed to load PDF document").

Esperado: object com nome (title/aria-label) e conteúdo alternativo, ex.: link para baixar o PDF.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. focus botão Assinar (linha 00000.000011/2026-00) 3. press Enter

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T08-57-23-064Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8f8d7c411012cabbeada07ab51d0aadc9bf0536cc2f578ab9caf4b4aad2d3196",
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

## C-9413b63fc5bc4de0093f6d2dc871510d6eb33517c0abafd51c9d85a56fbe5b98

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O checkbox "selecionar todos" do cabeçalho e os checkboxes de cada linha não têm rótulo (sem label, aria-label nem aria-labelledby) — 7 elementos no estado inicial ([ferramenta citada] label).

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
  "cardId": "C-9413b63fc5bc4de0093f6d2dc871510d6eb33517c0abafd51c9d85a56fbe5b98",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-963f3de0fb836a758a550d4a85dac01567a6d3d2969857c7ed91d991f8728059

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (uniao-europeia): depois do h2 do título, as seções "Dados da Embarcação" etc. são h4 (pula o nível 3)

Esperado: Hierarquia de títulos sem saltos (h3 após h2)

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar na aba "Concluídos" 3. clicar em "Ver processo" da 1ª linha (Deferida, 00000.000033/2026-00)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:main h4" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-095` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-963f3de0fb836a758a550d4a85dac01567a6d3d2969857c7ed91d991f8728059",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-964efc5894d51f3b45def7def54a74f63d837ed11afd303603e66f0319fcf376

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual é indicada só pela classe "active" no link (href="javascript:void(0)"); sem aria-current="page". Vale também após ir à página 2.

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
  "cardId": "C-964efc5894d51f3b45def7def54a74f63d837ed11afd303603e66f0319fcf376",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-96bd5eec7a56052ff96737f84d800e5f405f2f1f4c5bc0b59f4dd648fed357ae

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os 9 números de processo são <a role="button"> sem href e sem tabindex; a.focus() não move o foco (activeElement permanece no body) e a sequência de Tab vai do checkbox do cabeçalho direto ao botão "Ver processo", pulando-os. O clique leva a outra rota.

Esperado: Controle acionável pelo teclado (button nativo ou link com href / tabindex="0" com tratamento de Enter/Espaço).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-96bd5eec7a56052ff96737f84d800e5f405f2f1f4c5bc0b59f4dd648fed357ae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-982b079cc6e65dd53a7f7e11be34b3b68054f87a7dc0cacd2f4029bec1854efc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Meus processos" funciona como alternância (ativo = fundo azul; inativo = bg-pure-0/text-gray-50 e a lista passa de 9 para 23 itens), mas o estado é só visual: sem role="button" nem aria-pressed antes ou depois do clique.

Esperado: Estado ligado/desligado exposto programaticamente (ex.: button com aria-pressed="true|false").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. click "Meus processos" (desativa o filtro; Tramitando, 23 itens)

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

- `../../tmp/pw-0/page-2026-11-17T08-52-29-848Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-982b079cc6e65dd53a7f7e11be34b3b68054f87a7dc0cacd2f4029bec1854efc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9a7e43c20026e54894fe85f2083ba3f43b8437a3dc64359d7d11b8beae6a60ea

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O diálogo aberto por "Assinar" (visualização do PDF com "Solicitar Revisão"/"Assinar com gov.br") tem aria-labelledby apontando para o h2#swal2-title vazio e oculto; o diálogo fica sem nome acessível.

Esperado: Diálogo com nome acessível (ex.: "Assinar processo 00000.000011/2026-00").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. focus botão Assinar (linha 00000.000011/2026-00) 3. press Enter

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T08-57-23-064Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9a7e43c20026e54894fe85f2083ba3f43b8437a3dc64359d7d11b8beae6a60ea",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9ef973276a9f171632c427c44b328d0dd43860c721bca3b1a452a95ece92526d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: aria-label="Avatar com dropdown" substitui o texto visível "Olá, Usuária de Teste, SUPERVISOR"

Esperado: Nome acessível que contenha o texto visível do botão

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9ef973276a9f171632c427c44b328d0dd43860c721bca3b1a452a95ece92526d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9f8492351e0a0d5965143581260c65a9eb00782313ece5eece38ff13b76c5901

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual só é indicada pela classe "active"; o link não tem aria-current="page"

Esperado: Página corrente identificada programaticamente (aria-current="page")

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-9f8492351e0a0d5965143581260c65a9eb00782313ece5eece38ff13b76c5901",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a4c44fc9dca23c04d2000a34721b506c3057490304114f1a08fe5352f8a4a6dc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botões das abas (shadow DOM de br-tab) têm aria-label com o identificador interno ("AGUARDANDO_ANALISE", "TRAMITANDO", "HISTORICO"), enquanto o texto visível é "Aguardando análise", "Tramitando", "Concluídos"

Esperado: Nome acessível igual ao texto visível da aba ou contendo esse texto

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-a4c44fc9dca23c04d2000a34721b506c3057490304114f1a08fe5352f8a4a6dc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a6057b77b04fc50406c67a8f6f72d28527193112d1ab78fba7dd71bddef8a9e2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de ir para a página 2 (e para a 3) pela paginação numérica, a informação mostra "11– 20 de 23 itens" e o link 2 fica ativo, mas o seletor "Página" continua mostrando o valor "1".

Esperado: O seletor "Página" refletir a página exibida.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. click "Meus processos" (desativa o filtro; Tramitando, 23 itens) 3. click página "2" da paginação

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
  "cardId": "C-a6057b77b04fc50406c67a8f6f72d28527193112d1ab78fba7dd71bddef8a9e2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a7105f54fff4ca392ca05e0d5cd37e116a4fcbd0acb3b9ee1ea2bca64101d1aa

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de fechar tem aria-label="Close this dialog", em inglês, numa página lang="pt-br", sem lang próprio

Esperado: Nome em português (ex.: "Fechar") ou marcação lang="en"

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar em "Ver processo" da 1ª linha da aba Tramitando (00000.000010/2026-00, Em análise analista) 3. clicar no ícone da coluna "Ofício"

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a7105f54fff4ca392ca05e0d5cd37e116a4fcbd0acb3b9ee1ea2bca64101d1aa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ab2acd302b355317e296acc2581c4bc5fc2676d6888940b810462f561b0a3c99

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selo "Vistoria agendada": branco sobre #4f97d1, 14px = 3,14:1

Esperado: Contraste mínimo de 4,5:1

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar no chip "Meus processos" (desativa o filtro)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:pnip-status-solicitacao-utils .bg-blue-40 > .text-secondary-01" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-012` → identificador devolvido por ferramenta (sem arquivo)
- `F-113` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ab2acd302b355317e296acc2581c4bc5fc2676d6888940b810462f561b0a3c99",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-afcecd5e6a2ccb6039d73764e3b9bac20f332407595f06459b66f954331bf0ad

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os 7 filtros ("Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span class="br-tag interaction"> com cursor:pointer e clique por mouse, sem tabindex nem role; a navegação por Tab pula todos (lista de tabuláveis e Tab real: do campo de busca e abas não há parada nos filtros).

Esperado: Filtros operáveis por teclado (elemento <button> ou equivalente focável que responda a Enter/Espaço).

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
  "cardId": "C-afcecd5e6a2ccb6039d73764e3b9bac20f332407595f06459b66f954331bf0ad",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b0cde40e2d35ad18d0db449cea893f457282d05f74a7bde52ddcbfab50f164ee

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Há um <iframe> vazio (sem src) com 1160×500 px no fim de main, sem atributo title.

Esperado: iframe com title descritivo, ou removido/oculto quando não tem conteúdo.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b0cde40e2d35ad18d0db449cea893f457282d05f74a7bde52ddcbfab50f164ee",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b0f4418a4b197bd1b8b7efdb891877cf7e7079d1713f5cbd84695b0de3e65d55

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de remover a etiqueta do filtro aplicado ("Últimos 7 dias") só contém o ícone fa-times com aria-hidden; não tem texto, aria-label nem title ([ferramenta citada] button-name).

Esperado: Botão com nome acessível, ex.: aria-label="Remover filtro Últimos 7 dias".

Janela: 1280×900 · interações desde o carregamento: 1. click span.br-tag "Aberto há" (#searchTableUtils .row.align-items-center > .col-auto:nth-child(1) > span.br-tag) 2. click opção "Últimos 7 dias" (#searchTableUtils .br-select .br-item:nth-child(1) .br-radio)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:#searchTableUtils .br-button.inverted.circle" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-040` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b0f4418a4b197bd1b8b7efdb891877cf7e7079d1713f5cbd84695b0de3e65d55",
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

## C-b2c649315554eb5e40d166061e2fd8fa73132c06d2eb00f405e96bd639f47ad3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Não há link de salto para o conteúdo; o primeiro link é "Home" do breadcrumb (href="/portal-mpa/") e o primeiro foco vai ao botão "Menu" do cabeçalho.

Esperado: Primeiro link da página levando ao conteúdo principal (#main).

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
  "cardId": "C-b2c649315554eb5e40d166061e2fd8fa73132c06d2eb00f405e96bd639f47ad3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b3e0edb3cf05f3247603fc7e9568af8e0889c33a8303da86efc318c58586a254

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A coluna "Aberto há" mostra o ícone sort-down indicando ordenação, mas o th não tem aria-sort; a ordenação só é transmitida visualmente.

Esperado: aria-sort="ascending"/"descending" no cabeçalho da coluna ordenada.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b3e0edb3cf05f3247603fc7e9568af8e0889c33a8303da86efc318c58586a254",
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

## C-b91b441fbe5412aa2482ad12f56794a413fdcf073d625078b1309b98a27ae3a7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selos de status laranja ("Em análise analista/supervisor/diretor"): texto branco #ffffff sobre #e66f0e, 14px normal = 3,16:1

Esperado: Contraste mínimo de 4,5:1 para texto de 14px

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b91b441fbe5412aa2482ad12f56794a413fdcf073d625078b1309b98a27ae3a7",
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

## C-bae8129b71197e72548f32c0de755022cf609a33d0f8f313ad51abd1ba81f074

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O painel do avatar tem role="menu", mas seus filhos são div/span e um <button> sem role="menuitem" ([ferramenta citada] aria-required-children: "Element has children which are not allowed: button").

Esperado: Papel coerente com o conteúdo: sem role="menu" (painel/disclosure) ou itens com role="menuitem" e o padrão de teclado de menu.

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-087` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bae8129b71197e72548f32c0de755022cf609a33d0f8f313ad51abd1ba81f074",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bba475cf53ef26382e7c00a2c2b9f93e75a00a78e13ef3edad198d5d5b95c7fd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No breadcrumb (shadow DOM), o item Home é <a href="/portal-mpa/"> que contém um <button> (aria-label="", texto sr-only "Home"): controle interativo aninhado em outro; a árvore mostra link "Home" > button "Home".

Esperado: Um único controle (só o link) para o item Home.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bba475cf53ef26382e7c00a2c2b9f93e75a00a78e13ef3edad198d5d5b95c7fd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c50dfc45a9d20a2f023f0e636ee104179279db7bd137b00d2afe2049dced78f4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Detalhe (uniao-europeia), com a seção expandida: as seções continuam h4 após o h2 (salto de nível)

Esperado: Hierarquia de títulos sem saltos

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar na aba "Concluídos" 3. clicar em "Ver processo" da 1ª linha (Deferida, 00000.000033/2026-00) 4. clicar em "Mostrar" da seção Dados da Embarcação

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:main h4" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-099` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c50dfc45a9d20a2f023f0e636ee104179279db7bd137b00d2afe2049dced78f4",
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

## C-c747e6859af23f2a3e11e21a68c530d64ec9f3b83cbfb21ca2b7a9964d2028f2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Texto visível do botão: "Olá, Usuária de Teste, SUPERVISOR" (com a inicial "U"); aria-label="Avatar com dropdown" substitui esse texto no nome acessível.

Esperado: Nome acessível que comece pelo/contenha o texto visível (ex.: remover aria-label ou usar "Olá, Usuária de Teste, SUPERVISOR – menu do usuário").

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c747e6859af23f2a3e11e21a68c530d64ec9f3b83cbfb21ca2b7a9964d2028f2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c997746f9bc7139933cb947b779ff3c42aba279f13f92984d7dce207f43c00b8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A imagem exit-icon.png do botão "Sair" não tem atributo alt

Esperado: alt="" (o texto "Sair" já nomeia o botão)

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar em #avatar-dropdown-trigger

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-064` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c997746f9bc7139933cb947b779ff3c42aba279f13f92984d7dce207f43c00b8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cdc9786d9d602323f7f4f9ef38e50b956f062bf93342015e61fcb7f261a1b0cc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão "×" de fechar o diálogo: cor #1351b4 sobre o fundo próprio #676767, 32px = 1,29:1

Esperado: Contraste mínimo de 3:1 (texto grande)

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar em "Ver processo" da 1ª linha da aba Tramitando (00000.000010/2026-00, Em análise analista) 3. clicar no ícone da coluna "Ofício"

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `V-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cdc9786d9d602323f7f4f9ef38e50b956f062bf93342015e61fcb7f261a1b0cc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ced61dc6f8355d014d7a0a6b4022dfd8ec6afeeb36de316e0fe40653c3aa122b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de fechar do diálogo de assinatura tem aria-label="Close this dialog" (inglês) numa página lang="pt-br", sem marcação de idioma.

Esperado: Rótulo em português (ex.: "Fechar") ou idioma da parte indicado.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. focus botão Assinar (linha 00000.000011/2026-00) 3. press Enter

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T08-57-23-064Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ced61dc6f8355d014d7a0a6b4022dfd8ec6afeeb36de316e0fe40653c3aa122b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cf2123b0367676cb1e267702cc42295c7b6813f8b1c8b1c90cb2073b4bb4885d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Chips sem papel de botão; os de filtro abrem lista sem aria-expanded/aria-controls e "Meus processos" alterna ativo/inativo só pela aparência (preenchido vs contorno), sem aria-pressed

Esperado: Papel de botão e estado exposto (aria-expanded / aria-pressed)

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

Regra declarada: wcag:4.1.2

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
  "cardId": "C-cf2123b0367676cb1e267702cc42295c7b6813f8b1c8b1c90cb2073b4bb4885d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cf8903ec823945b362e02501b72c869de4897d042f0626b026a9583b2ca2ab3c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: "Trocar unidade" no menu do usuário é um <span> com cursor:pointer, sem tabindex nem role: não recebe foco pelo teclado

Esperado: Controle focável e acionável por teclado

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar em #avatar-dropdown-trigger

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cf8903ec823945b362e02501b72c869de4897d042f0626b026a9583b2ca2ab3c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cfc70052ea0ec932c540f4148d70c14a5be05f78bb5be0e3065f0c5c2094bbd2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O resumo da assinatura em lote mostra códigos internos "HABILITACAO_TR: 2" e "VINCULACAO_EMBARCACAO: 2", enquanto os outros itens usam rótulos legíveis ("CAOL: 1", "Higiênico-Sanitário (HS): 1").

Esperado: Tipos de processo com o nome legível usado na tabela (ex.: "Habilitação de Técnico Responsável", "Vinculação de embarcação").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. focus checkbox do cabeçalho da tabela 3. press Space 4. focus "Assinar selecionados" 5. press Enter

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "unresolved:#swal2-html-container li:nth-child(2), #swal2-html-container li:nth-child(3)" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T09-00-19-015Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cfc70052ea0ec932c540f4148d70c14a5be05f78bb5be0e3065f0c5c2094bbd2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cfe0d16d31fdb418eb31dcdc919248763dbaf41008202105a1c8f18108403ca1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O título do documento é "PNIP" na lista e nos detalhes; não identifica a página

Esperado: Título que descreva a página (ex.: "Processos - Plataforma Nacional da Indústria do Pescado")

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-cfe0d16d31fdb418eb31dcdc919248763dbaf41008202105a1c8f18108403ca1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d242a21e92f97cb79400dca3ad96f429338c28b7851cac2809bded08457153ed

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A imagem exit-icon.png dentro do botão "Sair" não tem atributo alt.

Esperado: alt="" (ícone decorativo ao lado do texto "Sair").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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

- `../../tmp/pw-0/page-2026-11-17T08-55-10-815Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d242a21e92f97cb79400dca3ad96f429338c28b7851cac2809bded08457153ed",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d598e1f1c1f27f2d2bcd65aa2558da3a682be025b275bcb298b572c777a2b022

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com o foco no botão Desassociar, Enter abre o diálogo; ao fechar com Esc, o foco vai para o body em vez de voltar ao botão. O mesmo ocorre com o diálogo de "Assinar" (fechar pelo X) e com o de "Assinar selecionados" (Esc).

Esperado: Ao fechar o diálogo, o foco volta ao controle que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. focus botão Desassociar (linha 00000.000010/2026-00) 3. press Enter 4. press Escape

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>

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

- `../../tmp/pw-0/page-2026-11-17T08-56-50-050Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d598e1f1c1f27f2d2bcd65aa2558da3a682be025b275bcb298b572c777a2b022",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d7c3fdb75fabc70b61a6955c4248ef854ddc8aec66f8f5a5763af6d78524ecf8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Busca sem resultado ("zzzzz"): a mensagem "Não há processos para exibir." aparece num <p> sem role="status"/aria-live, e a única região aria-live (contagem da paginação) é removida; nada é anunciado.

Esperado: Resultado da busca anunciado por região viva (role="status").

Janela: 1280×900 · interações desde o carregamento: 1. fill #search >>> input com "zzzzz" 2. press Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:pnip-mpa-processos .mt-5.text-center > p" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `V-002` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d7c3fdb75fabc70b61a6955c4248ef854ddc8aec66f8f5a5763af6d78524ecf8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d861b91ce9409adf92628221b05ae27d61b718b112e96f7959a4e5bc1ee0de78

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Aba Aguardando análise: os 9 selos "Aguardando análise" têm texto branco sobre #888888, 14px = 3,54:1

Esperado: Contraste mínimo de 4,5:1

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar na aba "Aguardando análise"

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-075` → identificador devolvido por ferramenta (sem arquivo)
- `F-076` → identificador devolvido por ferramenta (sem arquivo)
- `F-077` → identificador devolvido por ferramenta (sem arquivo)
- `F-078` → identificador devolvido por ferramenta (sem arquivo)
- `F-079` → identificador devolvido por ferramenta (sem arquivo)
- `F-080` → identificador devolvido por ferramenta (sem arquivo)
- `F-081` → identificador devolvido por ferramenta (sem arquivo)
- `F-082` → identificador devolvido por ferramenta (sem arquivo)
- `F-083` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d861b91ce9409adf92628221b05ae27d61b718b112e96f7959a4e5bc1ee0de78",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d9369332d642b36b5ab7d6649f11f77049bacdb49534691f733da47d2afc9440

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões das abas (no shadow DOM de br-tab) têm aria-label igual ao id do br-tab-item: "AGUARDANDO_ANALISE", "TRAMITANDO", "HISTORICO", enquanto o texto visível é "Aguardando análise", "Tramitando", "Concluídos". O nome acessível não contém o rótulo visível ("Concluídos" vira "HISTORICO").

Esperado: Nome acessível igual ao rótulo visível (remover o aria-label ou usar o title do br-tab-item).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d9369332d642b36b5ab7d6649f11f77049bacdb49534691f733da47d2afc9440",
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

## C-daeba2b52c6ca7b314e3c263ad2dcdaef4110fe75f0cd4cf3c050688b5ab31ad

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Diálogo do documento (role=dialog, aria-modal): aria-labelledby aponta para h2#swal2-title vazio e oculto; o diálogo fica sem nome acessível

Esperado: Diálogo com nome acessível (ex.: "Ofício")

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar em "Ver processo" da 1ª linha da aba Tramitando (00000.000010/2026-00, Em análise analista) 3. clicar no ícone da coluna "Ofício"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-104` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-daeba2b52c6ca7b314e3c263ad2dcdaef4110fe75f0cd4cf3c050688b5ab31ad",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dbc7e81a4b42a9f97b2ff493570a704494192665f6fcc12ad9f732fd91978742

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Campo de busca da tabela sem rótulo: só placeholder "Pesquise aqui ..."; br-input sem label/aria-label.

Esperado: Rótulo associado ao campo (label visível ou, no mínimo, aria-label).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:6.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."
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

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dbc7e81a4b42a9f97b2ff493570a704494192665f6fcc12ad9f732fd91978742",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dc5348d83167325e3b7dd76de3731c17009e50a40b116bafbbd91df9fbbeec36

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selos cinza "Aguardando plano de ação" e "Aguardando SFPA": branco sobre #888888, 14px = 3,54:1

Esperado: Contraste mínimo de 4,5:1

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dc5348d83167325e3b7dd76de3731c17009e50a40b116bafbbd91df9fbbeec36",
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

## C-dd200a96712815823206362e930377fe392b18e7460be177008a8f8510c67ecb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de remover o filtro aplicado ("Últimos 7 dias") contém só o ícone fa-times com aria-hidden="true"; não tem aria-label, title nem texto, então o nome acessível fica vazio (28×28 px).

Esperado: Nome acessível que descreva a ação, ex.: aria-label="Remover filtro Últimos 7 dias".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. click "Meus processos" (desativa o filtro; Tramitando, 23 itens) 3. click filtro "Aberto há" (abre lista de opções) 4. click opção "Últimos 7 dias"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:#searchTableUtils span.br-tag button.br-button.inverted" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T08-53-21-886Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dd200a96712815823206362e930377fe392b18e7460be177008a8f8510c67ecb",
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

## C-e08eedb1674fe63f8bf7a547dd4e217582897639f37efa684006fb5da0c0ca77

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O título do documento é "PNIP" (sigla) em todos os estados; não descreve a página "Processos".

Esperado: Título descritivo do conteúdo, ex.: "Processos - Plataforma Nacional da Indústria do Pescado".

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

- `S-page-005 (P-01 violada)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e08eedb1674fe63f8bf7a547dd4e217582897639f37efa684006fb5da0c0ca77",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e31dba1b3640b5764498294ec8870e7be696ae9d87855e57ec3dc2f54cf7049b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Inicial "U" do avatar: texto #ffffff sobre #ff8c00 (bg-orange-vivid-30), 24,19px bold = 2,33:1.

Esperado: Contraste mínimo de 3:1 para texto grande (WCAG 1.4.3).

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
- `S-page-007 (P-05 violada)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e31dba1b3640b5764498294ec8870e7be696ae9d87855e57ec3dc2f54cf7049b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e42b27aa0421fc15bae620888ff16605d3328033e62d77cc00719b2821a2afd2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Selo "Aguarda complementos": branco #ffffff sobre #8289ff, 14px = 3,01:1

Esperado: Contraste mínimo de 4,5:1

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e42b27aa0421fc15bae620888ff16605d3328033e62d77cc00719b2821a2afd2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e4528a925f24885fe9b80de33e6acdd911023b5994515cf8d814ecc51233da37

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo de busca só tem o placeholder "Pesquise aqui ..." como rótulo (sem label nem aria-label); o texto some ao digitar

Esperado: Rótulo persistente associado ao campo

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-e4528a925f24885fe9b80de33e6acdd911023b5994515cf8d814ecc51233da37",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e47cd1cbec29cbd38e5d70e5c84ce41dfcb878a455d839d1452110e093332a12

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os 6 filtros (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span class="br-tag interaction"> com apenas cursor:pointer, sem role, sem tabindex; não entram na sequência de Tab (Tab vai de "Aguardando análise" para o campo de pesquisa).

Esperado: Filtros operáveis por teclado, como botões que abrem o menu (button com aria-expanded).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e47cd1cbec29cbd38e5d70e5c84ce41dfcb878a455d839d1452110e093332a12",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e8fd1769dc3f67d7ed6176abcfd53411050712a18954afff4566e3e9b84218e6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Cada número de página é um <li> aninhado diretamente em outro <li> (ul > li > li > a), estrutura de lista inválida que aparece na árvore como listitem dentro de listitem.

Esperado: Um único nível de li dentro do ul.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e8fd1769dc3f67d7ed6176abcfd53411050712a18954afff4566e3e9b84218e6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e96f1774ec1a43aaea0687ff15476da97bc3f6b6c4efefbdedce8988d3456e84

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Etiqueta de status "Em análise diretor": texto #ffffff sobre #8289ff, 14px normal = 3,01:1.

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
  "cardId": "C-e96f1774ec1a43aaea0687ff15476da97bc3f6b6c4efefbdedce8988d3456e84",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e9a513b852e8fb9d841c1868f20bf629f91f25ef000877db367e5097bcf11258

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão de remover o filtro aplicado ("Alteração de Certificado HS") só contém o ícone fa-times com aria-hidden: nome acessível vazio

Esperado: Botão com nome acessível (ex.: "Remover filtro Alteração de Certificado HS")

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. clicar no chip de filtro "Tipo de processo" 3. clicar na opção "Alteração de Certificado HS"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:#searchTableUtils .row.pl-2 button.inverted" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-042` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e9a513b852e8fb9d841c1868f20bf629f91f25ef000877db367e5097bcf11258",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eac8c2386810aaa5945db3d8385a96c4a5005006679fe0d6703fac3cc3f4e18e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: 7 checkboxes de seleção (cabeçalho e linhas) sem label, aria-label nem aria-labelledby: nome acessível vazio

Esperado: Cada checkbox com nome acessível (ex.: "Selecionar todos", "Selecionar processo 00000.000011/2026-00")

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-eac8c2386810aaa5945db3d8385a96c4a5005006679fe0d6703fac3cc3f4e18e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eca21e1987af4e453f63aecde6eb72830cf70b19e446c2124baf9aba24e96359

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O campo de pesquisa (input#search no shadow DOM de br-input) não tem label visível nem aria-label; o único rótulo é o placeholder "Pesquise aqui ...", que some ao digitar.

Esperado: Rótulo persistente associado ao campo (label visível ou, no mínimo, aria-label, além do placeholder).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

Regra declarada: wcag:3.3.2

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-eca21e1987af4e453f63aecde6eb72830cf70b19e446c2124baf9aba24e96359",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ecb4d11416e81c64e425452d22060102d24fe83a57daf36604f68f4f16acfba2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na paginação, o <li> da página está aninhado diretamente dentro de outro <li> (sem ul/ol pai)

Esperado: li filho direto de ul/ol

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ecb4d11416e81c64e425452d22060102d24fe83a57daf36604f68f4f16acfba2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ecc4ba971e084b3045858656efc44901077894a02f5def5654d243eae7ea74f7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na pesquisa sem resultado, a tabela e a paginação (que tinha aria-live) são removidas e aparece "Não há processos para exibir." num <p> sem role="status" nem aria-live; nenhuma região viva permanece na página.

Esperado: Mensagem de resultado anunciada por região viva (role="status").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. focus campo de pesquisa 3. type "zz" 4. press Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:div.mt-5.text-center > p" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-17T08-58-05-665Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ecc4ba971e084b3045858656efc44901077894a02f5def5654d243eae7ea74f7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ee0f955bb16b243f88974566890176cab459dc01ff080c80418c341543fa4323

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O PDF do documento a assinar é exibido num <object type="application/pdf"> sem title, aria-label nem conteúdo alternativo ([ferramenta citada] object-alt).

Esperado: Nome acessível/alternativa textual para o documento (title ou conteúdo de fallback com link para download).

Janela: 1280×900 · interações desde o carregamento: 1. click "Assinar" da linha 2 (tbody tr:nth-child(2) br-button[title=Assinar] >>> button)

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-168` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ee0f955bb16b243f88974566890176cab459dc01ff080c80418c341543fa4323",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eea43e64dcadc96f4e0512fb726c01c3f5ceb6c559adcf711b826bdfb25957a9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ícones Font Awesome dos chips de filtro (e setas) sem aria-hidden: o glifo de uso privado aparece como texto na árvore de acessibilidade (generic "")

Esperado: Ícones decorativos ocultos de tecnologias assistivas (aria-hidden="true")

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>i" — <i>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>span:nth-of-type(2)" — <span>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>i" — <i>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>span:nth-of-type(2)" — <span>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>i" — <i>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>span:nth-of-type(2)" — <span>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>i" — <i>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>span:nth-of-type(2)" — <span>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>i" — <i>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>span:nth-of-type(2)" — <span>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>i" — <i>
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>span:nth-of-type(2)" — <span>

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
  "cardId": "C-eea43e64dcadc96f4e0512fb726c01c3f5ceb6c559adcf711b826bdfb25957a9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ef397e1748d96c572a13869bbed3c6ec052bfbb017481e87df49670780e1d648

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Não há link de salto ("Ir para o conteúdo") nem âncora para o conteúdo principal; o primeiro item focável é o botão Menu

Esperado: Âncoras/atalhos para ir direto ao conteúdo, ao menu e à busca

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-ef397e1748d96c572a13869bbed3c6ec052bfbb017481e87df49670780e1d648",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f0b83eef5b71e590215cff7f0d63d3d87cfe75ceb77a34cf33dc81d41f64c94a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No breadcrumb (shadow DOM), o item Home é <a href="/portal-mpa/"><button aria-label="" class="br-button circle">Home</button></a>: controle interativo dentro de link, com duas paradas de Tab consecutivas para o mesmo destino.

Esperado: Um único controle interativo (link com o ícone e texto "Home"), sem botão aninhado.

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
  "cardId": "C-f0b83eef5b71e590215cff7f0d63d3d87cfe75ceb77a34cf33dc81d41f64c94a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f13e75f1eba927cc51776f366d303a48a9edaeb81fa39f2a6f55e9f62ceeb571

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: As opções do filtro "Aberto há" ("Últimos 7 dias", "Últimos 30 dias", "Últimos 60 dias", "Últimos 90 dias") são <div class="br-radio"><label> sem <input type="radio"> associado (label sem for, tabIndex -1): sem papel, sem estado selecionado e sem foco por teclado; só o clique de mouse aplica o filtro.

Esperado: Opções com semântica de radio/option, estado checked/selected e operáveis por teclado, como no br-select do DS (input radio + label).

Janela: 1280×900 · interações desde o carregamento: 1. click span.br-tag "Aberto há" (#searchTableUtils .row.align-items-center > .col-auto:nth-child(1) > span.br-tag)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "unresolved:#searchTableUtils .br-select .br-radio" — Seletor não resolvido

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
  "cardId": "C-f13e75f1eba927cc51776f366d303a48a9edaeb81fa39f2a6f55e9f62ceeb571",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fa59e3a8a77e5c3402299ba6456d665674536fa2d075142c4ef3d3576c2b48a5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A aba ativa ("Tramitando") só é indicada pela classe CSS "active" no li; os botões não têm role="tab" nem aria-selected/aria-current, e os painéis não têm role="tabpanel"

Esperado: Estado selecionado da aba exposto programaticamente

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-fa59e3a8a77e5c3402299ba6456d665674536fa2d075142c4ef3d3576c2b48a5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fe92f2571e58656e3c5d8d3d53c61d0ad0e2ecb59797ed075ad4e88ed6dfb513

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao escolher "25" na lista do "Exibir" com teclado (ArrowDown, Enter), a lista fecha e o foco vai para o body; o usuário perde a posição.

Esperado: Depois da seleção, o foco volta ao campo "Exibir".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa 2. focus #total (Exibir) 3. press ArrowDown 4. press ArrowDown 5. press Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

- `../../tmp/pw-0/page-2026-11-17T08-59-26-263Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fe92f2571e58656e3c5d8d3d53c61d0ad0e2ecb59797ed075ad4e88ed6dfb513",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ff39a5eb68fa77191a9ddf621c579d2940109f4f6d067553a62a5906cda38cdd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual da paginação é indicada só pela classe "active" (fundo azul); sem aria-current="page". Os itens são <a href="javascript:void(0)">.

Esperado: aria-current="page" na página atual.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ff39a5eb68fa77191a9ddf621c579d2940109f4f6d067553a62a5906cda38cdd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ff9ae176382399a5094c017c9cfb29ca4dff97960dff1dd47cad48c447215960

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A aba ativa é indicada só pela classe "active" no <li>; os botões não têm role="tab", aria-selected nem aria-current, e o container não tem role="tablist".

Esperado: Estado da aba selecionada exposto programaticamente (role="tab" + aria-selected, ou aria-current).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-d/portal-mpa/processos?mock-perfil=mpa

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

- `../../tmp/pw-0/page-2026-11-17T08-50-12-582Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-17T08-50-43-992Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ff9ae176382399a5094c017c9cfb29ca4dff97960dff1dd47cad48c447215960",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
