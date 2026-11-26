# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 39 cartões únicos · 39 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 39 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 80 sujeitos · 39 cartão(ões) sem evidência verificada · 34 com unidade candidata · estimativa **234 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

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

**Este plano navega (D-60):** cada janela tem uma cena por SEGMENTO, capturada na última parada dele (1280x900@lista-exibir = /pnip-f/portal-mpa/processos · 1280x900@lista-filtro = /pnip-f/portal-mpa/processos). Quando o seletor de uma alegação resolve em mais de um segmento, o cartão lista os sujeitos de cada um e a decisão precisa dizer em `"cena"` de qual segmento a alegação fala (pelos passos declarados e pela evidência). Só os sujeitos dessa cena contam; os dos outros segmentos não são alegação.

Um átomo = um defeito. subjects identifica cada elemento alegado; unitIds contém somente alternativas semanticamente aceitas.
Cada átomo/elemento vale no máximo uma detecção. Divida alegações compostas; contabilize também as partes falsas.
Duplicatas revisadas: no átomo repetido, acrescente duplicateOf: { "cardId": "C-...", "atomId": "..." }. A citação continua avaliada separadamente.

**Vínculo de revisão (exceção declarada):** quando a alegação está certa sobre uma unidade que a ancoragem não ofereceu (ausência global ancorada em <html>/body, host no lugar do controle interno, participante relacionado, transição), acrescente ao átomo `"links"`: [{ "contrato": "vinculo-revisao-1.0.0", "unitId", "subjects", "scene", "state" (estado medido), "relation" (ausencia-global | host-interno | participante-relacionado | transicao), "evidence", "justification", "reviewer" (você), "binding" (o do cartão) }]. Nada cria vínculo por você; o scorer recusa outra cena, estado não medido, relação que não cabe na árvore medida, falta de evidência.

## C-0e471de13bcb2e3b2c1f909cad8f1531699e29a5cc60fd092f579dc44d3fbef8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Depois de uma busca sem resultados ("xyz"), a tabela e a paginação somem e aparece o <p>"Não há processos para exibir."</p>, que não está em região aria-live nem tem role="status"; a contagem antiga (aria-live polite) também é removida, e a mudança não é anunciada.

Esperado: A mensagem de resultado vazio deve ser anunciada como mensagem de status (role="status" ou aria-live="polite").

Janela: 1280×900 · interações desde o carregamento: 1. foco no campo "Pesquise aqui ..." 2. digitar "xyz" 3. Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

### Sujeitos

- "unresolved:pnip-mpa-processos .mt-5.text-center > p" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-32-32-446Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0e471de13bcb2e3b2c1f909cad8f1531699e29a5cc60fd092f579dc44d3fbef8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0fdfe91495bdca24dab3e60520f7233492ec70716ccecf83b662cbb54e3c7fb5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os ícones decorativos de fonte (relógio, gráfico, ampulheta, peixe, âncora, rede dos filtros e o relógio de "Última atualização") não têm aria-hidden; o glifo de uso privado aparece como texto na árvore de acessibilidade (ex.: "", "").

Esperado: Ícones decorativos devem ter aria-hidden="true".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam · estado-nao-declarado: [ferramenta citada] só existe(m) em filtro-escolhido, lista-filtro, e a alegação não declara passo nenhum

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>i" — <i>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>i" — <i>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>i" — <i>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>i" — <i>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>i" — <i>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>i" — <i>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(1)>i" — <i>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(1)>div>span>i" — <i> · **oculto**: aria-hidden
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span>i" — <i>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span>i" — <i>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span>i" — <i>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span>i" — <i>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span>i" — <i>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span>i" — <i>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(1)>i" — <i>


### Unidades candidatas (não são crédito)

- U-03b70c230745fcab911019bee917fc96d455c9b0bdabab5cc53d0f3100bfabc9 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Método de pesca": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-06d7dd4e946fa87e21ce594f8e6c1233505ee0876ebc653085da3c8b1e10d1b1 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Tipo de processo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3a3538d0cc7b9277134f477977b3381a3624d51a2e8e94b14dffebc79bc4c6e1 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Status": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-482dc6a9c3084015dda270b8228ada9317875507a233c3309e66b29fefaa6c17 — F-11 · filtro-escolhido · cena 1280x900@lista-filtro · <span> "Últimos 60 dias": Tag do filtro escolhido (aparece depois de abrir um filtro e escolher uma opção, aqui "Aberto há" → "Últimos 60 dias"): o botão de fechar (×) fica à esquerda, antes do ícone e do rótulo, em vez de na extremidade direita da tag. Na Tag de interação, o ícone se alinha à esquerda e o botão terciário (fechar) à direita.
  - estados em que a unidade existe: filtro-escolhido, lista-filtro
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
- U-d339cacb503d4668ae18ec3b1745062bb4f08bba29b990b09a1619276a49d5be — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Petrecho": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0fdfe91495bdca24dab3e60520f7233492ec70716ccecf83b662cbb54e3c7fb5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-175adce1a09cc6e6211ba5e34d192dbde68d10caeaa4edebd7a709bdd0474d16

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A coluna "Aberto há" mostra o ícone de ordenação "sort-down" indicando que a lista está ordenada por ela, mas o th não tem aria-sort; a informação de ordenação é apenas visual.

Esperado: A ordenação vigente deve ser exposta programaticamente (aria-sort no th) ou em texto.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(1)" — <th> "Aberto há"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(1)" — <th> "Aberto há"


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-175adce1a09cc6e6211ba5e34d192dbde68d10caeaa4edebd7a709bdd0474d16",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2839cd6be4d48c188e7b7653208a540e127625bdaff3ceb283ce4f1dfb364cca

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Texto branco dos selos "Aguardando plano de ação" e "Aguardando SFPA" (e "Aguardando análise" na outra aba) sobre fundo rgb(136,136,136): contraste 3,54:1, com texto de 14 px e peso 500.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando plano de ação"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando SFPA"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando plano de ação"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguardando SFPA"


### Unidades candidatas (não são crédito)

- U-028c40bf2b8e94d520d3ae54490f5bf804d3c376054ce4a024a2018c535e78b8 — F-09 · inicial · cena 1280x900@lista-exibir · <td> "11 horas": Linhas do corpo da tabela (81 células, 9 linhas × 9 colunas): padding-top e padding-bottom de 12 px, valor que não corresponde a nenhuma densidade da Table (alta 8 px, padrão 16 px, baixa 24 px); o cabeçalho continua com 16 px. A densidade é uma só para o corpo da tabela, e uma única regra a define: uma unidade para o conjunto.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [padding-top, padding-bottom] fora de {8px, 16px, 24px}. Medido: padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
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

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2839cd6be4d48c188e7b7653208a540e127625bdaff3ceb283ce4f1dfb364cca",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3b9651e5e13e20a3854300c26884fd4bcd7f6d9ce3b9a29a26a3d1596e91da55

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span class="br-tag interaction"> com cursor:pointer que abrem listas ao clique, mas não têm tabindex nem role (tabIndex -1; element.focus() não os foca; a sequência de Tab vai de "Aguardando análise"/abas direto ao campo de busca).

Esperado: Os filtros devem ser operáveis por teclado: elementos nativos <button> (ou role="button" com tabindex="0" e tratamento de Enter/Espaço), com estado de expansão exposto.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"


### Unidades candidatas (não são crédito)

- U-03b70c230745fcab911019bee917fc96d455c9b0bdabab5cc53d0f3100bfabc9 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Método de pesca": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-06d7dd4e946fa87e21ce594f8e6c1233505ee0876ebc653085da3c8b1e10d1b1 — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Tipo de processo": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
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
- U-d339cacb503d4668ae18ec3b1745062bb4f08bba29b990b09a1619276a49d5be — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Petrecho": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3b9651e5e13e20a3854300c26884fd4bcd7f6d9ce3b9a29a26a3d1596e91da55",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-44d587939de3b8bab7ac8f40ecf20fe9dbde634d173a64aeedfa4864d5413cfe

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Trocar unidade" é um <span> com cursor:pointer que navega para /portal-mpa ao clique, mas não é focalizável: com o menu aberto, Tab vai do avatar direto para "Sair".

Esperado: A ação deve ser operável por teclado (link ou botão nativo).

Janela: 1280×900 · interações desde o carregamento: 1. clique no botão do avatar (#avatar-dropdown-trigger)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-29-37-103Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-44d587939de3b8bab7ac8f40ecf20fe9dbde634d173a64aeedfa4864d5413cfe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4579a86402e014441719f4ea91daa02c1430751a127788755de64deeddf53425

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão "Menu" do cabeçalho (no shadow DOM de br-header, data-target="#main-navigation") não produz nenhuma mudança ao clique: não existe #main-navigation na página e o botão não tem aria-expanded.

Esperado: O botão Menu deve abrir o menu principal (componente Menu do DS), expondo o estado com aria-expanded, ou não ser exibido.

Janela: 1280×900 · interações desde o carregamento: 1. clique no botão "Menu" do cabeçalho

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>pnip-header>br-header" — <br-header>


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-29-49-835Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4579a86402e014441719f4ea91daa02c1430751a127788755de64deeddf53425",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-460a6a9cdcb3d9670c2650de29b58165a9241ef989aaf30cfe5830ab9eec3f88

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão do avatar exibe "Olá, Usuária de Teste, SUPERVISOR", mas seu aria-label é "Avatar com dropdown", que não contém o texto visível.

Esperado: O nome acessível deve conter o texto visível do botão (por exemplo, remover o aria-label ou iniciá-lo com o texto exibido).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-460a6a9cdcb3d9670c2650de29b58165a9241ef989aaf30cfe5830ab9eec3f88",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-46e317263df5d483b68cc0da85e515760a7904e42f6db5486907ffc2deb1f7a3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O campo de busca (input#search no shadow DOM de br-input) não tem <label>, aria-label nem aria-labelledby; a única identificação é o placeholder "Pesquise aqui ...", que desaparece ao digitar.

Esperado: O campo deve ter rótulo persistente associado (label visível ou, no mínimo, aria-label), não apenas placeholder.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-46e317263df5d483b68cc0da85e515760a7904e42f6db5486907ffc2deb1f7a3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-49286309cd829fdfa0e1cbdc82d9b6fb378f3f3de1c11b7fc6e382c162164578

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A aba ativa ("Tramitando") só é indicada pela classe CSS "active" no li e pelo sublinhado; os botões não têm role="tab", aria-selected nem aria-current, e não há tablist/tabpanel associados.

Esperado: O estado selecionado da aba deve ser exposto programaticamente (role="tab" com aria-selected, ou aria-current), conforme o componente Tab do DS.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-49286309cd829fdfa0e1cbdc82d9b6fb378f3f3de1c11b7fc6e382c162164578",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-62b7edf157efccb7b6ba4b8937988e149e4802dc899d9bc96c85defdbee8ab6a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A caixa "selecionar todos" do cabeçalho está em x=212 px, enquanto as caixas das linhas da mesma coluna estão em x=207 px (style margin-left:5px só no cabeçalho): desalinhamento de 5 px entre instâncias do mesmo controle.

Esperado: A caixa do cabeçalho deve ficar alinhada às das linhas da coluna.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>


### Unidades candidatas (não são crédito)

- U-028c40bf2b8e94d520d3ae54490f5bf804d3c376054ce4a024a2018c535e78b8 — F-09 · inicial · cena 1280x900@lista-exibir · <td> "11 horas": Linhas do corpo da tabela (81 células, 9 linhas × 9 colunas): padding-top e padding-bottom de 12 px, valor que não corresponde a nenhuma densidade da Table (alta 8 px, padrão 16 px, baixa 24 px); o cabeçalho continua com 16 px. A densidade é uma só para o corpo da tabela, e uma única regra a define: uma unidade para o conjunto.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [padding-top, padding-bottom] fora de {8px, 16px, 24px}. Medido: padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-0b07a906de8ee883e56577a27d50c60c9005ba66b91eb3c9a80e2096780b9c71 — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
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

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-62b7edf157efccb7b6ba4b8937988e149e4802dc899d9bc96c85defdbee8ab6a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-64591400b67689236a516852604d54daa5a259d2df131f0322c7ef336fe77b19

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Na lista da paginação, cada link de página está num <li> aninhado diretamente dentro de outro <li> (<li><li><a>1</a></li></li>), estrutura de lista inválida.

Esperado: Cada item de página deve ser um único <li> filho direto do <ul>.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li" — <li> "1"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li" — <li> "1"


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-64591400b67689236a516852604d54daa5a259d2df131f0322c7ef336fe77b19",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-668063cb29b7593b8c04128c96cda5c5e9a5d3e6df290a96a3b7b02c6efcedbd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O diálogo aberto por "Assinar" (visualização do PDF, "Solicitar Revisão" e "Assinar com gov.br") tem aria-labelledby="swal2-title", mas o título está vazio e com display:none: o diálogo fica sem nome acessível.

Esperado: O diálogo deve ter nome acessível que indique a finalidade (ex.: "Assinar processo 00000.000011/2026-00").

Janela: 1280×900 · interações desde o carregamento: 1. clique no botão "Assinar" da linha 00000.000011/2026-00

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-33-19-977Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-668063cb29b7593b8c04128c96cda5c5e9a5d3e6df290a96a3b7b02c6efcedbd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-66fd67ff5ff9502823c760809dc560f397e4beaa1e2f869ab0a8fb8708e7e6ca

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O diálogo de confirmação "Tem certeza que deseja desassociar…" tem role="dialog" e aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com display:none: o diálogo fica sem nome acessível.

Esperado: O diálogo deve ter nome acessível (título visível referenciado ou aria-label).

Janela: 1280×900 · interações desde o carregamento: 1. clique no botão "Desassociar processo do analista responsável" da linha 00000.000010/2026-00

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-31-12-395Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-66fd67ff5ff9502823c760809dc560f397e4beaa1e2f869ab0a8fb8708e7e6ca",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6a9f834a8cf7fe521df149ea1427477b064277d1a3cfb435407111f53943cbf7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O controle "Meus processos" é um <span class="br-tag interaction"> com cursor:pointer que alterna a lista (9 ↔ 10 linhas) ao clique, mas não é focalizável (tabIndex -1, sem role).

Esperado: O controle deve ser alcançável e acionável pelo teclado (botão nativo ou role/tabindex equivalentes).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-5d733d3faff011b90a59e41e70755706557e881db28e13ccd0abbb9fe0e18af0 — F-05 · inicial · cena 1280x900@lista-exibir · <span> "Meus processos": Tag de interação "Meus processos": a superfície tem forma de pílula (border-radius ≥ 16 px, var(--surface-rounder-pill)), enquanto as tags de filtro da mesma barra têm cantos de 4 px. O arredondamento da superfície da Tag de interação é --surface-rounder-sm.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [border-top-left-radius] fora de {4px}. Medido: border-top-left-radius=16783.2px | border-top-left-radius=16783.2px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ba2bd1556fdeccfe4297c4dcfc021ca534e7a8ed6cbaa845aa995d332b97c9ba — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Meus processos": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6a9f834a8cf7fe521df149ea1427477b064277d1a3cfb435407111f53943cbf7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-712e9fdbd8d9aabb40d1ee5b77fb759ce2097d48acd3c10287e1302013b03490

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No fim da tela há um <iframe> vazio (sem src), de 1160×500 px, sem title, que recebe foco por Tab (o foco sai de "Voltar" e entra nele).

Esperado: Um iframe deve ter title que descreva seu conteúdo; um iframe vazio e sem função deve ser removido ou ficar fora da ordem de foco.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe" — <iframe>


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f754cef40cc00f91f8926f0f6c764cc8fbc88b367b2c5cca1ca4e99f9b2d9f3e — D-10 · inicial · cena 1280x900@lista-exibir · <iframe>: <iframe> vazio no fim do componente (sem src, documento about:blank sem conteúdo, 1160×500 px, sem title, name nem aria-label; papel Iframe com nome "" na árvore): é ponto de Tab depois do "Voltar" e, focado, nada muda na tela (outline none, sem sombra, :focus-visible falso). Depois dele o Tab real alterna iframe ↔ body (E-01); Shift+Tab sai para o "Voltar". Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-712e9fdbd8d9aabb40d1ee5b77fb759ce2097d48acd3c10287e1302013b03490",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-724a6358a25cb0b6085c60a7367a73c9d63abb3164da4e7547001707c9f63978

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O título principal da tela, "Processos", é um <h2> e não há nenhum <h1> na página (único cabeçalho do documento).

Esperado: O título principal deve ser marcado como h1, com a hierarquia de cabeçalhos começando no nível 1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2" — <h2> "Processos"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2" — <h2> "Processos"


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-724a6358a25cb0b6085c60a7367a73c9d63abb3164da4e7547001707c9f63978",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-76cd72d9210883e0339c581aa69af0998afb6661369b45889be8a06401deb4a5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: As caixas de seleção da tabela (a de "selecionar todos" no cabeçalho e as 6 das linhas) não têm label, aria-label nem title: nome acessível vazio (aparecem como "checkbox" sem nome na árvore de acessibilidade).

Esperado: Cada caixa deve ter nome acessível (ex.: "Selecionar todos" e "Selecionar processo 00000.000011/2026-00").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>


### Unidades candidatas (não são crédito)

- U-028c40bf2b8e94d520d3ae54490f5bf804d3c376054ce4a024a2018c535e78b8 — F-09 · inicial · cena 1280x900@lista-exibir · <td> "11 horas": Linhas do corpo da tabela (81 células, 9 linhas × 9 colunas): padding-top e padding-bottom de 12 px, valor que não corresponde a nenhuma densidade da Table (alta 8 px, padrão 16 px, baixa 24 px); o cabeçalho continua com 16 px. A densidade é uma só para o corpo da tabela, e uma única regra a define: uma unidade para o conjunto.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [padding-top, padding-bottom] fora de {8px, 16px, 24px}. Medido: padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-0b07a906de8ee883e56577a27d50c60c9005ba66b91eb3c9a80e2096780b9c71 — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
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

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-76cd72d9210883e0339c581aa69af0998afb6661369b45889be8a06401deb4a5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7afabdf5c55ff318cf6622b0301d19fdc620570bf791e59731aec6e01ce00cf4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O documento do diálogo de assinatura é um <object type="application/pdf"> sem title, aria-label nem conteúdo alternativo interno (no mock o PDF não carregou e mostra "Failed to load PDF document.").

Esperado: O objeto deve ter nome acessível e conteúdo alternativo (ex.: link para baixar o PDF).

Janela: 1280×900 · interações desde o carregamento: 1. clique no botão "Assinar" da linha 00000.000011/2026-00

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-33-19-977Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7afabdf5c55ff318cf6622b0301d19fdc620570bf791e59731aec6e01ce00cf4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-803213b4304cd8bf25840776d0c8f3f79a7fe8fef38cd3e145fffe50d95902b2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem do logotipo gov.br (no shadow DOM de br-header) tem alt="logo", que não identifica o conteúdo da imagem.

Esperado: Texto alternativo que identifique a marca, por exemplo alt="gov.br".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>pnip-header>br-header" — <br-header>


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-803213b4304cd8bf25840776d0c8f3f79a7fe8fef38cd3e145fffe50d95902b2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-80d602e7f81d2aefab4785b6eeeb5ac2b4dbe12b4edd382300f3dbfc787e1c37

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O botão de fechar do diálogo de assinatura tem aria-label="Close this dialog", em inglês, numa página lang="pt-br", sem marcação de idioma.

Esperado: O nome acessível deve estar em português (ex.: "Fechar").

Janela: 1280×900 · interações desde o carregamento: 1. clique no botão "Assinar" da linha 00000.000011/2026-00

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-33-19-977Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-80d602e7f81d2aefab4785b6eeeb5ac2b4dbe12b4edd382300f3dbfc787e1c37",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-80db5135ffa66b2a0f69bbdc9c37e1578e9ea8359ba933aad8ac2413478bed0a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os números de processo são <a role="button"> sem href e sem tabindex: não recebem foco (element.focus() falha; Tab pula para os botões de ação). Ao clique levam a rotas próprias (ex.: linha 00000.000011 → /certificacao-caol/…/documentos), diferente do destino de "Ver processo".

Esperado: Os números de processo devem ser focalizáveis e acionáveis por teclado (link com href ou botão nativo).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>a" — <a> "00000.000010/2026-00"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(3)>a" — <a> "00000.000011/2026-00"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(3)>a" — <a> "00000.000013/2026-00"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>a" — <a> "00000.000016/2026-00"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(3)>a" — <a> "00000.000019/2026-00"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(3)>a" — <a> "00000.000025/2026-00"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(3)>a" — <a> "00000.000027/2026-00"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(3)>a" — <a> "00000.000028/2026-00"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(3)>a" — <a> "00000.000031/2026-00"


### Unidades candidatas (não são crédito)

- U-028c40bf2b8e94d520d3ae54490f5bf804d3c376054ce4a024a2018c535e78b8 — F-09 · inicial · cena 1280x900@lista-exibir · <td> "11 horas": Linhas do corpo da tabela (81 células, 9 linhas × 9 colunas): padding-top e padding-bottom de 12 px, valor que não corresponde a nenhuma densidade da Table (alta 8 px, padrão 16 px, baixa 24 px); o cabeçalho continua com 16 px. A densidade é uma só para o corpo da tabela, e uma única regra a define: uma unidade para o conjunto.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [padding-top, padding-bottom] fora de {8px, 16px, 24px}. Medido: padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-033900ce39792a7a975d9ede11c03d4245efb338c0d9cb851c401d2960781358 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000019/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
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
- U-d197c62611482e6c2615e9f8522e81875577b7523610f493e872ce8ead9e606c — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000010/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-db0332f8db5d16c40f65ab56e586fc66ce97654c714fe035cb91eb521da27cb0 — D-02 · inicial · cena 1280x900@lista-exibir · <a> "00000.000028/2026-00": Números de processo da coluna "Nº Processo": <a role="button" style="cursor:pointer"> sem href nem tabindex. Não são focáveis (fora do Tab real; a árvore do Chromium não os marca focusable), mas o clique navega: nas linhas 2, 3, 4, 6, 7 e 9 abre a sub-rota …/documentos do processo, que o "Ver processo" da mesma linha não abre (ele vai à rota do processo sem /documentos). Nas linhas 1, 5 e 8 o destino cai em /login com recarga — artefato do mock (adendo § C) —, mas o controle é o mesmo e igualmente inalcançável por teclado. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-80db5135ffa66b2a0f69bbdc9c37e1578e9ea8359ba933aad8ac2413478bed0a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-81600c278a64aeb12d6481d076db910a70b9488acd6f3efa66ae1323668f9ac4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O painel do avatar tem role="menu", mas não contém nenhum elemento com role="menuitem"; o conteúdo é texto, um <span> clicável e um <button> comum.

Esperado: Usar role="menu" só com itens menuitem e o teclado correspondente; senão, remover o role e usar um contêiner/lista comum.

Janela: 1280×900 · interações desde o carregamento: 1. clique no botão do avatar (#avatar-dropdown-trigger)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-29-37-103Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-81600c278a64aeb12d6481d076db910a70b9488acd6f3efa66ae1323668f9ac4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-898cb256ec58d28a48014463bb06322b291addc0083701c9494e6131b1793296

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Com o foco no botão "Desassociar processo do analista responsável", Enter abre o diálogo; ao fechá-lo com Escape (e também ao confirmar), o foco vai para o <body> em vez de voltar ao botão que abriu o diálogo.

Esperado: Ao fechar o diálogo, o foco deve voltar ao controle que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. foco no botão "Desassociar processo do analista responsável" da linha 00000.000010/2026-00 2. Enter (abre diálogo) 3. Escape (fecha diálogo)

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>


### Unidades candidatas (não são crédito)

- U-028c40bf2b8e94d520d3ae54490f5bf804d3c376054ce4a024a2018c535e78b8 — F-09 · inicial · cena 1280x900@lista-exibir · <td> "11 horas": Linhas do corpo da tabela (81 células, 9 linhas × 9 colunas): padding-top e padding-bottom de 12 px, valor que não corresponde a nenhuma densidade da Table (alta 8 px, padrão 16 px, baixa 24 px); o cabeçalho continua com 16 px. A densidade é uma só para o corpo da tabela, e uma única regra a define: uma unidade para o conjunto.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [padding-top, padding-bottom] fora de {8px, 16px, 24px}. Medido: padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-099d5b2701cbe3d230b2f3fd79ad62cd63731bcaa165d9f92b2ff7878e5869df — D-01 · inicial · cena 1280x900@lista-exibir · <br-button>: Botões de ação das linhas da tabela "Ver processo" (9) e "Desassociar processo do analista responsável" (9; 8 desabilitados): <br-button> sem `label` e sem `circle`. O <button> interno é br-button middle de 72×40 px com raio de pílula (não circular), sem nenhum texto visível — só o ícone projetado (eye, user-times) — e o nome acessível vem só do `title`. A norma exige rótulo visível em todo Button não circular. Na mesma coluna o "Assinar" tem texto visível. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
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
  "cardId": "C-898cb256ec58d28a48014463bb06322b291addc0083701c9494e6131b1793296",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8b62472f8683ca16aae25a90821ae64144e359664c6ffa0c2d67fc93cde60e7b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-filtro

Observado: O botão de remover do chip do filtro aplicado "Últimos 7 dias" contém apenas o ícone <i class="fas fa-times" aria-hidden="true"> e não tem aria-label, title nem texto: nome acessível vazio.

Esperado: O botão deve ter nome acessível, por exemplo aria-label="Remover filtro Últimos 7 dias".

Janela: 1280×900 · interações desde o carregamento: 1. clique no filtro "Aberto há" 2. clique na opção "Últimos 7 dias"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@lista-filtro (/pnip-f/portal-mpa/processos)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(1)>div>span>button" — <button>

### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-482dc6a9c3084015dda270b8228ada9317875507a233c3309e66b29fefaa6c17 — F-11 · filtro-escolhido · cena 1280x900@lista-filtro · <span> "Últimos 60 dias": Tag do filtro escolhido (aparece depois de abrir um filtro e escolher uma opção, aqui "Aberto há" → "Últimos 60 dias"): o botão de fechar (×) fica à esquerda, antes do ícone e do rótulo, em vez de na extremidade direita da tag. Na Tag de interação, o ícone se alinha à esquerda e o botão terciário (fechar) à direita.
  - estados em que a unidade existe: filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-28-08-202Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8b62472f8683ca16aae25a90821ae64144e359664c6ffa0c2d67fc93cde60e7b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-92530f245bd2295a55c25c993fdef128ee383adc29fe0a480f1b75221294f12f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Depois de ir à página 2 na aba "Concluídos" (paginação mostra "2" ativo e "11 – 14 de 14 itens"), o seletor "Página" continua mostrando o valor "1", e nenhuma opção da lista dele fica marcada.

Esperado: O seletor "Página" deve refletir a página exibida ("2").

Janela: 1280×900 · interações desde o carregamento: 1. clique na aba "Concluídos" 2. clique no link de página "2"

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#page> "Selecione"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#page> "Selecione"


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
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
  "cardId": "C-92530f245bd2295a55c25c993fdef128ee383adc29fe0a480f1b75221294f12f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a0b562fd33231bac3488c80a9efe4bb1f4e97bee0b7142ddc404e157b804ff83

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O estado ligado/desligado de "Meus processos" é comunicado só pela troca de cores (fundo azul quando ativo; classes bg-pure-0/text-gray-50 quando inativo); não há aria-pressed nem outro estado programático.

Esperado: O estado do alternador deve ser exposto programaticamente (por exemplo, button com aria-pressed="true|false").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-5d733d3faff011b90a59e41e70755706557e881db28e13ccd0abbb9fe0e18af0 — F-05 · inicial · cena 1280x900@lista-exibir · <span> "Meus processos": Tag de interação "Meus processos": a superfície tem forma de pílula (border-radius ≥ 16 px, var(--surface-rounder-pill)), enquanto as tags de filtro da mesma barra têm cantos de 4 px. O arredondamento da superfície da Tag de interação é --surface-rounder-sm.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [border-top-left-radius] fora de {4px}. Medido: border-top-left-radius=16783.2px | border-top-left-radius=16783.2px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ba2bd1556fdeccfe4297c4dcfc021ca534e7a8ed6cbaa845aa995d332b97c9ba — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Meus processos": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a0b562fd33231bac3488c80a9efe4bb1f4e97bee0b7142ddc404e157b804ff83",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a69ec1c5a4e40aeacacf1c9a1ecff871a36aeb66454bcce3d996e918ceb572ab

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os botões das abas (no shadow DOM de br-tab) têm aria-label="AGUARDANDO_ANALISE", "TRAMITANDO" e "HISTORICO", que substituem os textos visíveis "Aguardando análise", "Tramitando" e "Concluídos"; o nome acessível é um código e não contém o rótulo visível (ex.: "HISTORICO" x "Concluídos").

Esperado: O nome acessível de cada aba deve conter o texto visível (remover o aria-label ou usar o mesmo texto).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab" — <br-tab>


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a69ec1c5a4e40aeacacf1c9a1ecff871a36aeb66454bcce3d996e918ceb572ab",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a80be238d58a1b7879adb31dd367101a45f12dc627762e6ad9e534524457c0c6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No breadcrumb, o item Home é um <a href="/portal-mpa/"> que contém um <button class="br-button" aria-label="">: elemento interativo aninhado em outro, gerando duas paradas de tabulação para o mesmo destino.

Esperado: O item Home deve ser um único elemento interativo (apenas o link), sem botão aninhado.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb" — <br-breadcrumb>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb" — <br-breadcrumb>


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a80be238d58a1b7879adb31dd367101a45f12dc627762e6ad9e534524457c0c6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-af29c4f4b934aa0538e4f18d406beed7345809cc960db0712a8507c8a60fb6db

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O cabeçalho "Téc. Adm." tem style background-color:var(--pure-0) (branco), enquanto os outros 8 cabeçalhos da mesma linha têm fundo rgb(240,240,240): a faixa do cabeçalho fica interrompida.

Esperado: Todas as células do cabeçalho da tabela devem ter o mesmo fundo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(7)" — <th> "Téc. Adm."

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(7)" — <th> "Téc. Adm."


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-7901803b7a7ec507b092129e4abe5d5efa674c51c8ea8523c560c528db96cd49 — F-06 · inicial · cena 1280x900@lista-exibir · <th> "Téc. Adm.": Cabeçalho da tabela, coluna "Téc. Adm.": a célula tem fundo branco (rgb(255, 255, 255)), enquanto as demais células do cabeçalho têm fundo rgb(240, 240, 240) — um vão branco na faixa cinza do header. O fundo do header da Table é --gray-5.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [background-color] fora de {rgb(240, 240, 240)}. Medido: background-color=rgb(255, 255, 255) | background-color=rgb(255, 255, 255)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ea935ea906aacf990d819d776b85cf2dd9a1fae6ec0131b6e8487a1f7077e28a — D-08 · inicial · cena 1280x900@lista-exibir · <th>: Cabeçalho da coluna de ações (Ver processo / Desassociar / Assinar): <th scope="col"> vazio, columnheader sem nome na árvore — as células de ação ficam sem cabeçalho identificável. Precedente B-26 (D-61). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-af29c4f4b934aa0538e4f18d406beed7345809cc960db0712a8507c8a60fb6db",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c6be4d6f2d482ff9b8ee975c29e10e10310baba8ba7b5bbcd6c5acc11647d911

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-filtro

Observado: As opções da lista do filtro "Aberto há" ("Últimos 7/30/60/90 dias") são <div class="br-item"><div class="br-radio"><label>…</label></div></div> sem input, sem role (option/radio/menuitem), sem tabindex e sem estado selecionado.

Esperado: Cada opção deve ter papel e estado expostos (por exemplo, input radio real associado ao label, ou role="option" com aria-selected) e ser operável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. clique no filtro "Aberto há"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@lista-filtro (/pnip-f/portal-mpa/processos)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>div>div>div:nth-of-type(1)" — <div> "Últimos 7 dias"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>div>div>div:nth-of-type(2)" — <div> "Últimos 30 dias"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>div>div>div:nth-of-type(3)" — <div> "Últimos 60 dias"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>div>div>div:nth-of-type(4)" — <div> "Últimos 90 dias"

### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-48d0ff4d735e0634f0cf2d5cda06fd201681632b2ee782e34377e6644dd96ad2 — F-10 · lista-filtro · cena 1280x900@lista-filtro · <div> "Últimos 7 dias Últimos 30 dias Últimos 60 dias Ú": Lista de opções de um filtro da barra (aberta ao clicar a tag do filtro, aqui "Aberto há"): a lista flutua sobre a tabela sem sombra (box-shadow: none). Uma sombra deve dar contraste entre a lista flutuante do Select e o conteúdo da tela ao fundo.
  - estados em que a unidade existe: lista-filtro
  - predicado de aceitação: estilo-computado sustenta em lista-filtro — alguma propriedade de [box-shadow] em {none}. Medido: box-shadow=none
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c6be4d6f2d482ff9b8ee975c29e10e10310baba8ba7b5bbcd6c5acc11647d911",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c91247748ab4ccee5aefaca8c817fa708e752cef68a90ce346f2acc269e33937

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão "Voltar" (style margin-top:-20px) está sobre o seletor "Página" da paginação: Voltar ocupa x 1091–1188, y 1663–1703; o campo #page ocupa x 1092–1180, y 1647–1679. elementFromPoint no centro do campo devolve o botão Voltar.

Esperado: O botão Voltar não deve sobrepor nem encobrir controles da paginação.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(3)>button" — <button> "Voltar"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(3)>button" — <button> "Voltar"


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-1f0989febc61d4752c6ffe9b1e54adf85ad57cb9e924f7af29157a00b5a7ab66 — F-03 · inicial · cena 1280x900@lista-exibir · <div> "Voltar": Botão "Voltar" no fim da página: o contêiner dele sobe 20 px sobre a barra de paginação (margin-top: -20px), e a caixa do botão se sobrepõe à do seletor "Página" da paginação — as duas áreas de interação ficam encavaladas, sem espaço entre elas. A área de proteção do Button pede um espaçamento mínimo em relação aos componentes vizinhos.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [margin-top] em {-20px}. Medido: margin-top=-20px | margin-top=-20px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b75f7e5cee36d4a6f0fda8417d276e728083819ee9bc9d7bf4f931230c930253 — F-04 · inicial · cena 1280x900@lista-exibir · <button> "Voltar": Botão secundário "Voltar": a superfície tem cantos de 4 px (border-radius: var(--surface-rounder-sm)), enquanto o outro botão secundário da página, "Exportar", tem forma de pílula. A superfície do Button padrão tem arredondamento --surface-rounder-pill.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [border-top-left-radius] em {4px}. Medido: border-top-left-radius=4px | border-top-left-radius=4px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c91247748ab4ccee5aefaca8c817fa708e752cef68a90ce346f2acc269e33937",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cdfff459d0b32c2a4ec8ade2456f46ef769fbd11c9702ffa225e06cb6f98f0d8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: As células "Solicitante" têm max-width:90px, white-space:nowrap e overflow:hidden; o texto é cortado sem reticências nem title (ex.: "Pessoa Exemplo Dias / Barco Exemplo Alfa" aparece como "Pessoa Exemp"; scrollWidth 187–454 px para clientWidth 120 px).

Esperado: O conteúdo da célula deve ficar visível (quebra de linha) ou, se truncado, indicado e disponível por outro meio.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Dias / Barco Exemplo Alfa"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Esteves / Comercio Exemplo Do Mar"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Gomes"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Cardoso"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Farias / Barco Exemplo Eco"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Esteves"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Gomes / Barco Exemplo Charlie"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Alves / Barco Exemplo Delta"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Dias"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Dias / Barco Exemplo Alfa"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Esteves / Comercio Exemplo Do Mar"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Gomes"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Cardoso"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Farias / Barco Exemplo Eco"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Esteves"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Gomes / Barco Exemplo Charlie"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Alves / Barco Exemplo Delta"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(5)" — <td> "Pessoa Exemplo Dias"


### Unidades candidatas (não são crédito)

- U-028c40bf2b8e94d520d3ae54490f5bf804d3c376054ce4a024a2018c535e78b8 — F-09 · inicial · cena 1280x900@lista-exibir · <td> "11 horas": Linhas do corpo da tabela (81 células, 9 linhas × 9 colunas): padding-top e padding-bottom de 12 px, valor que não corresponde a nenhuma densidade da Table (alta 8 px, padrão 16 px, baixa 24 px); o cabeçalho continua com 16 px. A densidade é uma só para o corpo da tabela, e uma única regra a define: uma unidade para o conjunto.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [padding-top, padding-bottom] fora de {8px, 16px, 24px}. Medido: padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-043e489e48e1fb2ab6e25b0fe092e471eb86208d4df58052df0a9e9304210e6a — F-01 · inicial · cena 1280x900@lista-exibir · <td> "Pessoa Exemplo Gomes / Barco Exemplo Charlie": Coluna "Solicitante" da tabela (9 células): o texto fica numa linha só e é cortado na largura da coluna (white-space: nowrap; overflow: hidden; text-overflow: clip). Nomes longos aparecem cortados no meio da palavra, sem reticências, e a célula não tem title nem tooltip que mostre o texto completo (scrollWidth > clientWidth). O truncamento da Table pede reticências no fim do texto e o texto completo em tooltip.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — todas as propriedades de [white-space, overflow-x, text-overflow] em {nowrap, hidden, clip}. Medido: white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2b3287c64adb80225fd47b673f652c4321a6879ebc8e402beabba209d421ebfd — F-01 · inicial · cena 1280x900@lista-exibir · <td> "Pessoa Exemplo Esteves": Coluna "Solicitante" da tabela (9 células): o texto fica numa linha só e é cortado na largura da coluna (white-space: nowrap; overflow: hidden; text-overflow: clip). Nomes longos aparecem cortados no meio da palavra, sem reticências, e a célula não tem title nem tooltip que mostre o texto completo (scrollWidth > clientWidth). O truncamento da Table pede reticências no fim do texto e o texto completo em tooltip.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — todas as propriedades de [white-space, overflow-x, text-overflow] em {nowrap, hidden, clip}. Medido: white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-339f5842134d37c57c7050122c081642907e449ef1a5bd0175e09ce0e9baae40 — F-01 · inicial · cena 1280x900@lista-exibir · <td> "Pessoa Exemplo Esteves / Comercio Exemplo Do Mar": Coluna "Solicitante" da tabela (9 células): o texto fica numa linha só e é cortado na largura da coluna (white-space: nowrap; overflow: hidden; text-overflow: clip). Nomes longos aparecem cortados no meio da palavra, sem reticências, e a célula não tem title nem tooltip que mostre o texto completo (scrollWidth > clientWidth). O truncamento da Table pede reticências no fim do texto e o texto completo em tooltip.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — todas as propriedades de [white-space, overflow-x, text-overflow] em {nowrap, hidden, clip}. Medido: white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-42136bb7a081064d14787835047754fe51f6f8ee013c5e388e2c1503ef937333 — F-01 · inicial · cena 1280x900@lista-exibir · <td> "Pessoa Exemplo Dias / Barco Exemplo Alfa": Coluna "Solicitante" da tabela (9 células): o texto fica numa linha só e é cortado na largura da coluna (white-space: nowrap; overflow: hidden; text-overflow: clip). Nomes longos aparecem cortados no meio da palavra, sem reticências, e a célula não tem title nem tooltip que mostre o texto completo (scrollWidth > clientWidth). O truncamento da Table pede reticências no fim do texto e o texto completo em tooltip.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — todas as propriedades de [white-space, overflow-x, text-overflow] em {nowrap, hidden, clip}. Medido: white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4cfc3522a95c1b7f4868d738ef3ad5cac653e3649838e0da3091ec6d59a39282 — F-01 · inicial · cena 1280x900@lista-exibir · <td> "Pessoa Exemplo Gomes": Coluna "Solicitante" da tabela (9 células): o texto fica numa linha só e é cortado na largura da coluna (white-space: nowrap; overflow: hidden; text-overflow: clip). Nomes longos aparecem cortados no meio da palavra, sem reticências, e a célula não tem title nem tooltip que mostre o texto completo (scrollWidth > clientWidth). O truncamento da Table pede reticências no fim do texto e o texto completo em tooltip.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — todas as propriedades de [white-space, overflow-x, text-overflow] em {nowrap, hidden, clip}. Medido: white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-528a3c102c4d92d4e8309816f2722175184c3e8a5710ad65d47a72332627662d — F-01 · inicial · cena 1280x900@lista-exibir · <td> "Pessoa Exemplo Cardoso": Coluna "Solicitante" da tabela (9 células): o texto fica numa linha só e é cortado na largura da coluna (white-space: nowrap; overflow: hidden; text-overflow: clip). Nomes longos aparecem cortados no meio da palavra, sem reticências, e a célula não tem title nem tooltip que mostre o texto completo (scrollWidth > clientWidth). O truncamento da Table pede reticências no fim do texto e o texto completo em tooltip.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — todas as propriedades de [white-space, overflow-x, text-overflow] em {nowrap, hidden, clip}. Medido: white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-95424d8f7a7215aea240bd69bb85ed2b1426e94500477367d5607aa0cd3c1d42 — F-01 · inicial · cena 1280x900@lista-exibir · <td> "Pessoa Exemplo Dias": Coluna "Solicitante" da tabela (9 células): o texto fica numa linha só e é cortado na largura da coluna (white-space: nowrap; overflow: hidden; text-overflow: clip). Nomes longos aparecem cortados no meio da palavra, sem reticências, e a célula não tem title nem tooltip que mostre o texto completo (scrollWidth > clientWidth). O truncamento da Table pede reticências no fim do texto e o texto completo em tooltip.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — todas as propriedades de [white-space, overflow-x, text-overflow] em {nowrap, hidden, clip}. Medido: white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-dff4dcca857b30fc2e95cf6efbf42914c90b669715c65abf512a8db749d7caa7 — F-01 · inicial · cena 1280x900@lista-exibir · <td> "Pessoa Exemplo Alves / Barco Exemplo Delta": Coluna "Solicitante" da tabela (9 células): o texto fica numa linha só e é cortado na largura da coluna (white-space: nowrap; overflow: hidden; text-overflow: clip). Nomes longos aparecem cortados no meio da palavra, sem reticências, e a célula não tem title nem tooltip que mostre o texto completo (scrollWidth > clientWidth). O truncamento da Table pede reticências no fim do texto e o texto completo em tooltip.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — todas as propriedades de [white-space, overflow-x, text-overflow] em {nowrap, hidden, clip}. Medido: white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e613fcf47e864e24aa8fe4fb2a189f38841ea6e8b07d8f9b1e7103c724d89ebd — F-01 · inicial · cena 1280x900@lista-exibir · <td> "Pessoa Exemplo Farias / Barco Exemplo Eco": Coluna "Solicitante" da tabela (9 células): o texto fica numa linha só e é cortado na largura da coluna (white-space: nowrap; overflow: hidden; text-overflow: clip). Nomes longos aparecem cortados no meio da palavra, sem reticências, e a célula não tem title nem tooltip que mostre o texto completo (scrollWidth > clientWidth). O truncamento da Table pede reticências no fim do texto e o texto completo em tooltip.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — todas as propriedades de [white-space, overflow-x, text-overflow] em {nowrap, hidden, clip}. Medido: white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip | white-space=nowrap, overflow-x=hidden, text-overflow=clip
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cdfff459d0b32c2a4ec8ade2456f46ef769fbd11c9702ffa225e06cb6f98f0d8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-df6de03adf2f04b8f24002e97e97d1a58ed842c945ea899d050d459f800eebe7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem do botão "Sair" (assets/images/exit-icon.png) não tem atributo alt.

Esperado: Imagem decorativa com alt="" (ou alternativa textual adequada).

Janela: 1280×900 · interações desde o carregamento: 1. clique no botão do avatar (#avatar-dropdown-trigger)

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-29-37-103Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-df6de03adf2f04b8f24002e97e97d1a58ed842c945ea899d050d459f800eebe7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eb6461f5b74d2e9b0ae04e11564b45914f100464f5fd120b70d63d24bcca9f0c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Texto branco (#FFFFFF) dos selos laranja "Em análise analista/supervisor/diretor" sobre fundo rgb(230,111,14): contraste 3,16:1, com texto de 14 px e peso 500.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise analista"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise diretor"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise analista"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise supervisor"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Em análise diretor"


### Unidades candidatas (não são crédito)

- U-028c40bf2b8e94d520d3ae54490f5bf804d3c376054ce4a024a2018c535e78b8 — F-09 · inicial · cena 1280x900@lista-exibir · <td> "11 horas": Linhas do corpo da tabela (81 células, 9 linhas × 9 colunas): padding-top e padding-bottom de 12 px, valor que não corresponde a nenhuma densidade da Table (alta 8 px, padrão 16 px, baixa 24 px); o cabeçalho continua com 16 px. A densidade é uma só para o corpo da tabela, e uma única regra a define: uma unidade para o conjunto.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [padding-top, padding-bottom] fora de {8px, 16px, 24px}. Medido: padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-0a82f065235e39c59d71f198929c987a25280c39cfd73d435f0d3e42217df415 — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Em análise analista": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
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
- U-cfb9cc550622d9382ea0c398827a4cb876d253ae8866b8b448918be5184a908d — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Em análise diretor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e65296bb03e63c5dd9ac52453608e60dc1137cffe55643aef4573309a0069ee9 — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Em análise supervisor": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-eb6461f5b74d2e9b0ae04e11564b45914f100464f5fd120b70d63d24bcca9f0c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eb68c1c43a8999f7a2189693b58b055ec1059eca4910a1a6e2045255b9400115

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão "Buscar" fica abaixo do campo (input em y 402–434, botão em y 430–462; style margin-top:-12px), sobrepondo 4 px a borda inferior do campo e fora do alinhamento, em vez de integrado ao campo.

Esperado: No padrão de input com botão do DS, o botão de ação fica dentro/alinhado ao campo, sem sobreposição da borda.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>button" — <button> "Buscar"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>button" — <button> "Buscar"


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-84b697b62b353d6d6a9eb4508049451757f0e4e623d2b2fc44149b4e8d14418f — F-02 · inicial · cena 1280x900@lista-exibir · <button> "Buscar": Ação interna "Buscar" do campo de pesquisa da lista: o botão da lupa (32×32) fica deslocado para baixo do campo — o centro vertical dele está cerca de 26–28 px abaixo do centro vertical do campo, e a lupa aparece fora da borda inferior do campo. A ação interna do Input fica centralizada verticalmente no campo (--spacing-vertical-center).
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [margin-top] em {-12px}. Medido: margin-top=-12px | margin-top=-12px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-eb68c1c43a8999f7a2189693b58b055ec1059eca4910a1a6e2045255b9400115",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ebecc6762574cca6701814bc49f0d89f80b439cc7b9339535414309121e2cba3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Na aba "Tramitando", a tabela tem 1150 px de largura (x 92–1242) e ultrapassa em 54 px o contêiner .br-table (x 92–1188) e o alinhamento das abas e do botão Exportar; nas abas "Aguardando análise" e "Concluídos" ela termina em 1188 px.

Esperado: A tabela deve caber no contêiner (ou rolar dentro dele), alinhada ao restante do conteúdo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table" — <table> "Aberto há Nº Processo Tipo de Processo Solicitan"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table" — <table> "Aberto há Nº Processo Tipo de Processo Solicitan"


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ebecc6762574cca6701814bc49f0d89f80b439cc7b9339535414309121e2cba3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ef5d19a28f6fd418fc34d8d0db238b2ea3c4a4c264f8aca362c0644d32ab019f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Texto branco do selo "Aguarda complementos" sobre fundo rgb(130,137,255): contraste 3,01:1, com texto de 14 px e peso 500.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguarda complementos"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Aguarda complementos"


### Unidades candidatas (não são crédito)

- U-028c40bf2b8e94d520d3ae54490f5bf804d3c376054ce4a024a2018c535e78b8 — F-09 · inicial · cena 1280x900@lista-exibir · <td> "11 horas": Linhas do corpo da tabela (81 células, 9 linhas × 9 colunas): padding-top e padding-bottom de 12 px, valor que não corresponde a nenhuma densidade da Table (alta 8 px, padrão 16 px, baixa 24 px); o cabeçalho continua com 16 px. A densidade é uma só para o corpo da tabela, e uma única regra a define: uma unidade para o conjunto.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [padding-top, padding-bottom] fora de {8px, 16px, 24px}. Medido: padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px | padding-top=12px, padding-bottom=12px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b448df1351a0f04fc1be8bee506d5779b7faaf62bb960a81741f2438af47f3a4 — D-07 · inicial · cena 1280x900@lista-exibir · <table> "Aberto há Nº Processo Tipo de Processo Solicitan": A tabela de processos não tem <caption> nem aria-label/aria-labelledby (nome "" na árvore); o h2 "Processos" fica fora do contêiner da tabela, sem associação. A norma pede caption que identifique a tabela (os exemplos oficiais da Table 3.7.0 trazem caption). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-df345d6a8dd12bb3d5984839e301ee472e3ea7226f2379f074985ad5e88e6b6e — D-06 · inicial · cena 1280x900@lista-exibir · <div> "Aguarda complementos": Etiquetas de status da coluna "Status": texto branco (text-secondary-01, 14 px/500) sobre bg-orange-vivid-40 #e66f0e = 3,16:1 (5 linhas), bg-indigo-vivid-40 #8289ff = 3,01:1 (1) e bg-secondary-06 #888888 = 3,54:1 (2) — 8 de 9 abaixo de 4,5:1 (cores da paleta, combinação autoral). O status "Em revisão analista" sobre indigo-vivid-60 passa (6,49:1, controle K-08). O texto do status vem do mock; a combinação de cores é do componente da página. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ef5d19a28f6fd418fc34d8d0db238b2ea3c4a4c264f8aca362c0644d32ab019f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f44d3ae2befa91841a8f74bf820c0c5ab015e23e6654d5c161271bbd54dac387

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A página corrente da paginação é indicada só pela classe "active" (círculo azul); o link não tem aria-current="page" e tem href="javascript:void(0)".

Esperado: A página atual deve ser exposta programaticamente (aria-current="page"), como no componente Pagination do DS.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-11-26T17-24-44-437Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-11-26T17-24-36-743Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f44d3ae2befa91841a8f74bf820c0c5ab015e23e6654d5c161271bbd54dac387",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
