# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 43 cartões únicos · 43 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 43 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 82 sujeitos · 43 cartão(ões) sem evidência verificada · 36 com unidade candidata · estimativa **258 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

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

## C-0861959f30964a74ebbb7e7140179eb71d43de35786c76d66aa5b8e41c103f15

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O botão de fechar dos diálogos tem aria-label="Close this dialog", em inglês, numa página lang="pt-br" e sem lang no elemento.

Esperado: O rótulo deve estar em português (ex.: "Fechar") ou marcado com o idioma correspondente.

Janela: 1280×900 · interações desde o carregamento: 1. focar o botão "Assinar" da linha 00000.000011/2026-00 (aba Tramitando) e pressionar Enter

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

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
  "cardId": "C-0861959f30964a74ebbb7e7140179eb71d43de35786c76d66aa5b8e41c103f15",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0b9f003e99c49c923df130b3adde33f7182b296607f1fc842a7b0291f431d90d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A lista de opções do seletor (div.br-list tabindex=0) recebe foco por Tab, mas o estilo não muda: outline none e o mesmo box-shadow rgba(0,0,0,.16) 0 3px 6px de antes do foco. Na mesma passagem o console registrou "TypeError: Cannot read properties of null (reading 'focus') at _handleKeydownOnInput".

Esperado: O elemento focado deve ter indicador de foco visível.

Janela: 1280×900 · interações desde o carregamento: 1. pressionar Tab a partir do carregamento até o campo "Exibir" da paginação 2. pressionar Tab mais uma vez (foco vai para a lista .br-list)

Regra declarada: wcag:2.4.7

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(2)" — <div> "10 25 50 100"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(2)" — <div> "1" · **oculto**: nao-renderizado

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(2)" — <div> "102550100" · **oculto**: nao-renderizado
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(2)" — <div> "1" · **oculto**: nao-renderizado


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
  "cardId": "C-0b9f003e99c49c923df130b3adde33f7182b296607f1fc842a7b0291f431d90d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-122d400f91cdba45446cf37c38f129e7e005766ff9e2c6dddfac2ea448b12717

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os números de processo (ex.: 00000.000010/2026-00) são <a role="button"> sem href nem tabindex, com handler de clique que abre o detalhe; focus() não os ativa e Tab os pula.

Esperado: O controle deve ser alcançável e acionável pelo teclado (link com href ou button).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-122d400f91cdba45446cf37c38f129e7e005766ff9e2c6dddfac2ea448b12717",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1232ad25ebbe4e52839bf295b144b7c61449e3b7bc51c85db661f1569447b542

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-filtro

Observado: O botão "x" que remove o filtro aplicado "Últimos 7 dias" só tem um ícone com aria-hidden; não tem aria-label, title nem texto (nome acessível vazio).

Esperado: O botão deve ter um nome acessível (ex.: "Remover filtro Últimos 7 dias").

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Aguardando análise" 2. clicar no chip de filtro "Aberto há" 3. clicar na opção "Últimos 7 dias"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@lista-filtro (/pnip-f/portal-mpa/processos)

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1232ad25ebbe4e52839bf295b144b7c61449e3b7bc51c85db661f1569447b542",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-136ce7c9fe232eec8ecdff14a8773b49805e7ed2fb5bea1e9b5afea345932360

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A aba ativa só é indicada pela classe "active" no li; os botões não têm role="tab", aria-selected nem aria-current, então a aba selecionada não chega à tecnologia assistiva.

Esperado: O estado selecionado da aba deve ser exposto programaticamente (role="tab" com aria-selected="true", ou aria-current).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-136ce7c9fe232eec8ecdff14a8773b49805e7ed2fb5bea1e9b5afea345932360",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-19b331429f888719ddaedd853d15bd65490a234f381bb97b996da7a6a50b549d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: As células "Solicitante" têm max-width:90px, white-space:nowrap e overflow:hidden; o texto é cortado sem reticências nem title (scrollWidth 187–454px contra clientWidth 120px; aparece só "Pessoa Exemp").

Esperado: O nome do solicitante deve ficar legível (quebra de linha ou truncamento com acesso ao texto completo).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-19b331429f888719ddaedd853d15bd65490a234f381bb97b996da7a6a50b549d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-256cd6f4632e23162c755d723cc5797efb6b8134ec93ff611adee16784f4f211

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Depois da busca sem resultados aparece "Não há processos para exibir.", num <p> sem role=status nem aria-live em nenhum ancestral.

Esperado: A mensagem de resultado vazio deve ser anunciada como mensagem de status (role="status"/aria-live).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Aguardando análise" 2. clicar no chip de filtro "Aberto há" 3. clicar na opção "Últimos 7 dias" 4. digitar "zzzz" no campo de busca e pressionar Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

### Sujeitos

- "unresolved:main div.mt-5.text-center > p" — Seletor não resolvido

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
  "cardId": "C-256cd6f4632e23162c755d723cc5797efb6b8134ec93ff611adee16784f4f211",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-26c9c5a8c055bbbf8427935e10a16d6d48098452d78db79e11ed0e4bbdd3b9a0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O controle "Meus processos" é um <span class="br-tag interaction"> clicável, sem tabindex nem role; não entra na ordem de tabulação.

Esperado: O filtro "Meus processos" deve ser focável e acionável pelo teclado, com estado exposto.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam · estado-nao-declarado: [ferramenta citada] só existe(m) em filtro-escolhido, lista-filtro, e a alegação não declara passo nenhum

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(1)>div>span" — <span> "Últimos 60 dias"


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
- U-5d733d3faff011b90a59e41e70755706557e881db28e13ccd0abbb9fe0e18af0 — F-05 · inicial · cena 1280x900@lista-exibir · <span> "Meus processos": Tag de interação "Meus processos": a superfície tem forma de pílula (border-radius ≥ 16 px, var(--surface-rounder-pill)), enquanto as tags de filtro da mesma barra têm cantos de 4 px. O arredondamento da superfície da Tag de interação é --surface-rounder-sm.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [border-top-left-radius] fora de {4px}. Medido: border-top-left-radius=16783.2px | border-top-left-radius=16783.2px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ba2bd1556fdeccfe4297c4dcfc021ca534e7a8ed6cbaa845aa995d332b97c9ba — D-03 · inicial · cena 1280x900@lista-exibir · <span> "Meus processos": Etiquetas interativas "Meus processos" e os seis filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho"): <span class="br-tag interaction"> com cursor:pointer, sem role, sem tabindex (tabIndex -1), papel generic e nome "" na árvore. O clique liga/desliga o filtro "Meus processos" (a lista passa de 9 para 10 linhas) ou abre a lista de opções do filtro; nenhuma é alcançada por Tab nem acionável por teclado, e nenhuma expõe estado (aria-pressed/aria-expanded). Os exemplos oficiais da Tag 3.7.0 só usam button e input+label como elementos interativos. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
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
  "cardId": "C-26c9c5a8c055bbbf8427935e10a16d6d48098452d78db79e11ed0e4bbdd3b9a0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2a511231e7be64fe85bb8ed9c7aea9885406d3f7adc3ed14ceacd628e2898b5d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Clicar no botão "Menu" (#navigation, data-target="#main-navigation") não abre nada: #main-navigation não existe no DOM, o botão não tem aria-expanded e nada muda na tela.

Esperado: O botão Menu deve abrir o menu principal ou não ser exibido.

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão "Menu" do cabeçalho

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2a511231e7be64fe85bb8ed9c7aea9885406d3f7adc3ed14ceacd628e2898b5d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-32571b0bd93ee599aad00903c932470e7a41e9b313be95b8c484da2f55cfca7d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os chips de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span> com cursor:pointer, sem tabindex/role; focus() não os ativa e Tab os pula.

Esperado: Cada filtro deve ser um controle focável e operável pelo teclado (ex.: button com aria-expanded).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-32571b0bd93ee599aad00903c932470e7a41e9b313be95b8c484da2f55cfca7d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3a8d940c21c0e33506dc0decf629834384d70ad469eaa0b160ec767e2caa650b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O ícone de saída (exit-icon.png) no botão "Sair" não tem atributo alt.

Esperado: Imagem decorativa deve ter alt="" (ou alternativa adequada).

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão "Avatar com dropdown"

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3a8d940c21c0e33506dc0decf629834384d70ad469eaa0b160ec767e2caa650b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-44de02bb21a6a642cb958baa3e122b6ae686e1c285e3ff374f19f39cfe204b23

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Etiquetas "Em análise analista/supervisor/diretor": texto rgb(255,255,255) sobre rgb(230,111,14), 14px peso 500, contraste 3,16:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-44de02bb21a6a642cb958baa3e122b6ae686e1c285e3ff374f19f39cfe204b23",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-45abc457133ebdef5a89dc2f91f1a3a7dccd86546ddf45acd83a0d141aaeea71

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Etiqueta "Aguarda complementos": texto rgb(255,255,255) sobre rgb(130,137,255), 14px peso 500, contraste 3,01:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-45abc457133ebdef5a89dc2f91f1a3a7dccd86546ddf45acd83a0d141aaeea71",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-49e344ff212e3f74c2a63fba7fe08c7d9aef7045cd5ac72f460af506993fefe4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O menu do usuário aberto tem role="menu", mas nenhum descendente tem role="menuitem": os filhos são spans, um span clicável ("Trocar unidade") e um button "Sair".

Esperado: Um contêiner role="menu" deve conter itens role="menuitem" operáveis com o teclado; senão, não deve usar role="menu".

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão "Avatar com dropdown"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-49e344ff212e3f74c2a63fba7fe08c7d9aef7045cd5ac72f460af506993fefe4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4b29c366b37d795a0284355ce7de666d5502bde316de35f1a413f8d3200521a9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os itens de número de página são <li> aninhados diretamente dentro de outro <li>, sem ul/ol intermediário (a árvore mostra listitem dentro de listitem).

Esperado: Os itens de página devem ser li filhos diretos da lista.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4b29c366b37d795a0284355ce7de666d5502bde316de35f1a413f8d3200521a9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4b72f5b4085660f68df2718e8bd0003b9d6e54fbd0a444792b01512da35fbf22

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Há um <iframe> sem title e sem src, com 500px de altura, no fim do conteúdo, e ele recebe foco pelo teclado.

Esperado: Todo iframe deve ter um title que descreva o conteúdo (ou ser removido/ocultado se vazio).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4b72f5b4085660f68df2718e8bd0003b9d6e54fbd0a444792b01512da35fbf22",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-533597a42113a6da24e9d900b8eb98840c1b116a4c4ade1ac55b90098f533e65

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A tabela mede 1150px (borda direita em x=1242) dentro de div.br-table de 1096px (borda em x=1188), com overflow visible: as colunas Status e ações invadem a margem do conteúdo.

Esperado: A tabela deve caber no contêiner br-table ou rolar dentro dele.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-533597a42113a6da24e9d900b8eb98840c1b116a4c4ade1ac55b90098f533e65",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-57f679bf0b6c7acd740f9c85c2ff0fcf0e4b329a8daa14279464fb31e4341572

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O documento PDF a assinar é exibido num <object type="application/pdf"> sem title, aria-label nem conteúdo alternativo interno. No ambiente avaliado o PDF não carregou ("Failed to load PDF document").

Esperado: O object deve ter um nome acessível e um conteúdo alternativo (ex.: link para baixar o PDF).

Janela: 1280×900 · interações desde o carregamento: 1. focar o botão "Assinar" da linha 00000.000011/2026-00 (aba Tramitando) e pressionar Enter

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

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
  "cardId": "C-57f679bf0b6c7acd740f9c85c2ff0fcf0e4b329a8daa14279464fb31e4341572",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5a7b4ccb80a438b2c7f05ad005084e57e02c87dd0e3387bd42bb332becfa9720

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Etiquetas "Aguardando plano de ação", "Aguardando SFPA" e (na aba Aguardando análise) "Aguardando análise": texto rgb(255,255,255) sobre rgb(136,136,136), 14px peso 500, contraste 3,54:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5a7b4ccb80a438b2c7f05ad005084e57e02c87dd0e3387bd42bb332becfa9720",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5c3617c787c75468fa7d54fa2c9de113ec24156fb70c5a6bf21bc8e64a33432b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O título da página "Processos" é um h2, e a página não tem nenhum h1.

Esperado: O título principal da página deve ser h1, com hierarquia de cabeçalhos a partir dele.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5c3617c787c75468fa7d54fa2c9de113ec24156fb70c5a6bf21bc8e64a33432b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-65d918f0cf53d3a2fac7f8d2c9ec75ffede5c9106cc93abf8fec2b7241f03cc3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem do logotipo gov.br no cabeçalho (shadow DOM de br-header) tem alt="logo".

Esperado: A alternativa textual deve identificar a marca/conteúdo (ex.: "gov.br"), não o tipo da imagem.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-65d918f0cf53d3a2fac7f8d2c9ec75ffede5c9106cc93abf8fec2b7241f03cc3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6724d1e338bb8203b30f183eed40ac31efddf08060a990ca410a9884ef636203

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A página atual da paginação só é indicada pela classe "active"; o link não tem aria-current="page".

Esperado: A página atual deve ser exposta programaticamente com aria-current="page".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6724d1e338bb8203b30f183eed40ac31efddf08060a990ca410a9884ef636203",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6c2bc181d066d8e1e1b35d7959155a44b71158190bb3c8b92a05903d0053082e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os botões de aba (no shadow DOM de br-tab) têm aria-label "AGUARDANDO_ANALISE", "TRAMITANDO" e "HISTORICO", enquanto os textos visíveis são "Aguardando análise", "Tramitando" e "Concluídos".

Esperado: O nome acessível de cada aba deve conter o texto visível (ex.: "Aguardando análise", "Concluídos").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6c2bc181d066d8e1e1b35d7959155a44b71158190bb3c8b92a05903d0053082e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-73fc12c4a8dab3e9df75695d17ed1e261955ce780e0f8fc1e251a23f47d2872f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O item "Home" da trilha é um <a href="/portal-mpa/"> que contém um <button aria-label=""> (controle interativo aninhado em outro); a árvore de acessibilidade mostra link "Home" > button "Home".

Esperado: O item da trilha deve ser um único controle interativo (só o link), sem button aninhado.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-73fc12c4a8dab3e9df75695d17ed1e261955ce780e0f8fc1e251a23f47d2872f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-74cc28e692753bed6b7a008729a0c3c41b1c488b4386fc678fc8bbcc63144b54

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão do usuário mostra "Olá, Usuária de Teste, SUPERVISOR", mas tem aria-label="Avatar com dropdown", que substitui esse texto e não o contém.

Esperado: O nome acessível deve conter o texto visível do botão.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-74cc28e692753bed6b7a008729a0c3c41b1c488b4386fc678fc8bbcc63144b54",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-74ddc7648ad07e645b5485d39594410dd8a42a15ce94066212bc48f6ea95d378

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O diálogo aberto por "Assinar" (role=dialog, aria-modal=true) aponta aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com display:none: o diálogo fica sem nome acessível.

Esperado: O diálogo deve ter um nome acessível (título visível referenciado ou aria-label).

Janela: 1280×900 · interações desde o carregamento: 1. focar o botão "Assinar" da linha 00000.000011/2026-00 (aba Tramitando) e pressionar Enter

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

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
  "cardId": "C-74ddc7648ad07e645b5485d39594410dd8a42a15ce94066212bc48f6ea95d378",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7e36a14f6cf3256014d54b43c3d7ccea65ac0e559419ba1bed53cd219eeb2be0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-filtro

Observado: As opções do filtro "Aberto há" ("Últimos 7 dias" etc.) são div.br-item > div.br-radio > label, sem input, tabindex nem role (tabIndex -1).

Esperado: As opções devem ser alcançáveis e selecionáveis pelo teclado, com papel e estado expostos.

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Aguardando análise" 2. clicar no chip de filtro "Aberto há"

Regra declarada: wcag:2.1.1

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
  "cardId": "C-7e36a14f6cf3256014d54b43c3d7ccea65ac0e559419ba1bed53cd219eeb2be0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8792dc7203dbb829cf4ab53d15a2518e0148f5028f5c7e8b646d7b670cae572c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O cabeçalho "Aberto há" mostra um ícone sort-down indicando a ordenação, mas o th não tem aria-sort.

Esperado: A ordenação indicada visualmente deve ser exposta (aria-sort="descending"/"ascending").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8792dc7203dbb829cf4ab53d15a2518e0148f5028f5c7e8b646d7b670cae572c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8ab7c4d23678bc50f9f4ec8accafa456933c4b896f33c91b86a64aa0d2e8e426

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Na tela de detalhe, os ícones "Ofício" e "Certificado" são br-icon-base com cursor:pointer, sem tabindex, role nem nome; focus() não os ativa.

Esperado: As ações Ofício/Certificado devem ser botões ou links focáveis, com nome acessível.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em "Ver processo" da linha 00000.000010/2026-00 (abre /processos/alteracao-certificado/00000000-0000-4000-8000-0000000d0010)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

### Sujeitos

- "unresolved:main td br-icon-base[icon-name=\"file\"], main td br-icon-base[icon-name=\"file-pdf\"]" — Seletor não resolvido

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
  "cardId": "C-8ab7c4d23678bc50f9f4ec8accafa456933c4b896f33c91b86a64aa0d2e8e426",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-91cacee7502fbf271000b3d8e25a00a1f2b6d7e310f46d85dee4d6628fcbe983

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O campo de busca não tem rótulo visível nem label associado; só há o placeholder "Pesquise aqui ...", que some ao digitar.

Esperado: O campo deve ter um rótulo visível e persistente associado programaticamente.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-91cacee7502fbf271000b3d8e25a00a1f2b6d7e310f46d85dee4d6628fcbe983",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-928e4ceb316a1f9a6041b2dea206e2d9ddf7a21a202d6bf2972ffbf363f6bfe1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A página não oferece atalhos para o conteúdo: o primeiro elemento focável é o botão "Menu", não há link "Ir para o conteúdo" e main não tem id/âncora de destino.

Esperado: Atalhos no início da página para o conteúdo principal, o menu e a busca (e-MAG 1.5).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.5

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main" — <main> "Processos Meus processos Aberto há Tipo de proce"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main" — <main> "Processos Meus processos Últimos 60 dias Aberto "


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
  "cardId": "C-928e4ceb316a1f9a6041b2dea206e2d9ddf7a21a202d6bf2972ffbf363f6bfe1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-96a46674732fae86eaf6710a94a8d7c3d955ba50dc5e85bed8d8584ae8c3cbe5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O cabeçalho "Téc. Adm." tem style background-color: var(--pure-0) (branco), enquanto os demais th têm fundo rgb(240,240,240), o que quebra a faixa cinza do cabeçalho.

Esperado: Todos os cabeçalhos da tabela devem ter o mesmo fundo do componente.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-96a46674732fae86eaf6710a94a8d7c3d955ba50dc5e85bed8d8584ae8c3cbe5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a167bdcafe056b175ff02f249059645fcd1df7623aa378172ead5f15b65a7d99

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão "Voltar" (x 1091–1188, y 1663–1703) fica sobre o seletor "Página" da paginação (#page, x 1092–1180, y 1647–1679); elementFromPoint no centro de #page devolve o botão Voltar.

Esperado: O botão Voltar não deve sobrepor os controles de paginação.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a167bdcafe056b175ff02f249059645fcd1df7623aa378172ead5f15b65a7d99",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a7eb7b37c4978623468eec415d19b4a2fa6f6f6a7aa2adb2c6f055747936541a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: As caixas de seleção das linhas não têm label, aria-label nem title (nome acessível vazio).

Esperado: Cada caixa deve ter um nome que identifique o processo (ex.: "Selecionar processo 00000.000011/2026-00").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>


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
- U-d97754c6db40f8145fd723f3490c7b0a5233ce20f9d29be65270d11614f79c32 — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f81b94823997f73cdbdb13738bfc9f1340348d311ca850faeff9c7b848fd04ee — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
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
  "cardId": "C-a7eb7b37c4978623468eec415d19b4a2fa6f6f6a7aa2adb2c6f055747936541a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ab1d330adbe2dbf9da99ba78ce29ce8ea1481c839e0b746681196551ae7006b6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O diálogo de confirmação "Tem certeza que deseja desassociar esse processo do analista responsável?" aponta aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com display:none: o diálogo fica sem nome acessível.

Esperado: O diálogo deve ter um nome acessível.

Janela: 1280×900 · interações desde o carregamento: 1. focar o botão "Desassociar processo do analista responsável" da linha 00000.000010/2026-00 e pressionar Enter

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

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
  "cardId": "C-ab1d330adbe2dbf9da99ba78ce29ce8ea1481c839e0b746681196551ae7006b6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b13bf37fd9923fbcf625d4307a1aaa6cec5d51221b427861a4145ab31cad4243

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os seletores "Exibir" e "Página" são input type=text com lista suspensa, mas sem role="combobox", aria-expanded nem aria-controls; a árvore os expõe como textbox.

Esperado: Expor o papel e o estado de seletor (combobox com aria-expanded e listbox associada).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#total> "Selecione"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#page> "Selecione"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#total> "Selecione"
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
  "cardId": "C-b13bf37fd9923fbcf625d4307a1aaa6cec5d51221b427861a4145ab31cad4243",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-be8a5d79bd0f754dc838d0793bb4c3127582ac3bae738adc5c3b10d33194fb4b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Trocar unidade" é um <span> com cursor:pointer e ação de clique, sem tabindex nem role; focus() não o torna elemento ativo.

Esperado: A ação "Trocar unidade" deve ser um botão/link alcançável e acionável pelo teclado.

Janela: 1280×900 · interações desde o carregamento: 1. clicar no botão "Avatar com dropdown"

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-be8a5d79bd0f754dc838d0793bb4c3127582ac3bae738adc5c3b10d33194fb4b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-beefcc74a580b71ac25910aad7c32e6d6fb0a51667ad165ff5705d39b96bdfcf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A caixa "selecionar todos" no cabeçalho da tabela não tem label, aria-label nem title (nome acessível vazio).

Esperado: A caixa deve ter um nome acessível (ex.: "Selecionar todos os processos").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input" — <input>


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
- U-d60362290b6706e23c1997aa80708bf17c52f51899da6ac7c14d369c62e62a5f — D-04 · inicial · cena 1280x900@lista-exibir · <input>: Checkboxes de seleção da tabela — um no cabeçalho (coluna sem texto) e um em cada uma das 6 linhas selecionáveis: <input type="checkbox"> sem <label>, aria-label, aria-labelledby ou title; labels.length = 0 e nome "" na árvore. Estão no Tab (operáveis), sem nome. Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
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
  "cardId": "C-beefcc74a580b71ac25910aad7c32e6d6fb0a51667ad165ff5705d39b96bdfcf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bf54a46da6a68b8de3f452ea6119ef0e409fd748d38353c534b169fce4e4d23e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Ao fechar pelo teclado o diálogo aberto com Enter em "Assinar" (fechado pelo botão ×) ou em "Desassociar" (fechado com Escape), o foco vai para o BODY em vez de voltar ao botão que abriu o diálogo.

Esperado: Ao fechar o diálogo, o foco deve voltar ao controle que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. focar o botão "Assinar" da linha 00000.000011/2026-00 (aba Tramitando) e pressionar Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"


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
  "cardId": "C-bf54a46da6a68b8de3f452ea6119ef0e409fd748d38353c534b169fce4e4d23e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c0dd6d415c8f477a1089b93287d34ab6f94cd8601575578e40df6c364af4fddb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O título do documento é só "PNIP" na lista de processos e também nas telas de detalhe.

Esperado: O título deve descrever a página (ex.: "Processos - Plataforma Nacional da Indústria do Pescado").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.4.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|head>title" — <title> "PNIP" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-5ac1c3645c3b7fd64475e99a2fe0e7f37aadc3bd08ca669575a374971a565b96 — D-13 · sempre · cena 1280x900@lista-filtro · <title> "PNIP": <title>PNIP</title> nas 2 paradas: nomeia só o sistema, não o conteúdo principal ("Processos"). **exposto** (casco; B-25, C-06). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
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
  "cardId": "C-c0dd6d415c8f477a1089b93287d34ab6f94cd8601575578e40df6c364af4fddb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c1094a3319d2bb617c352be4852f24d8680cb40ec1e12ffa8ef39f822c3f0ab7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A última coluna (ações: Ver processo, Desassociar, Assinar) tem um <th> sem texto.

Esperado: O cabeçalho da coluna de ações deve ter texto, ainda que visualmente oculto (ex.: "Ações").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(9)" — <th>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(9)" — <th>


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
- U-ea935ea906aacf990d819d776b85cf2dd9a1fae6ec0131b6e8487a1f7077e28a — D-08 · inicial · cena 1280x900@lista-exibir · <th>: Cabeçalho da coluna de ações (Ver processo / Desassociar / Assinar): <th scope="col"> vazio, columnheader sem nome na árvore — as células de ação ficam sem cabeçalho identificável. Precedente B-26 (D-61). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
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
  "cardId": "C-c1094a3319d2bb617c352be4852f24d8680cb40ec1e12ffa8ef39f822c3f0ab7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cc85acd1d707a5fce57a6eecf28f3eeb43620d328dfa074154393271eca82278

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Depois de ir à página 2 pelo link "2" (texto "11– 14 de 14 itens"), o seletor "Página" continua mostrando o valor "1".

Esperado: O seletor "Página" deve refletir a página atual (2).

Janela: 1280×900 · interações desde o carregamento: 1. clicar na aba "Concluídos" 2. focar o link de página "2" e pressionar Enter

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
  "cardId": "C-cc85acd1d707a5fce57a6eecf28f3eeb43620d328dfa074154393271eca82278",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d0a9ae5ce59423cc884321b6a86a270c2b4c9838fd2f8f5449e4e7ca19f2a590

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Na tela de detalhe, depois do h2 "Alteração de Certificado", as seções "1. Dados da embarcação" a "4. Dados do técnico responsável" são h4, pulando o nível h3.

Esperado: Os níveis de cabeçalho devem seguir a hierarquia sem pular níveis.

Janela: 1280×900 · interações desde o carregamento: 1. clicar em "Ver processo" da linha 00000.000010/2026-00 (abre /processos/alteracao-certificado/00000000-0000-4000-8000-0000000d0010)

Regra declarada: emag:1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

### Sujeitos

- "unresolved:main h4" — Seletor não resolvido

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
  "cardId": "C-d0a9ae5ce59423cc884321b6a86a270c2b4c9838fd2f8f5449e4e7ca19f2a590",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
