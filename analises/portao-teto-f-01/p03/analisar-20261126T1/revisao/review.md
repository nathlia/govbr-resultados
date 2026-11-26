# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 43 cartões únicos · 43 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 43 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 81 sujeitos · 43 cartão(ões) sem evidência verificada · 37 com unidade candidata · estimativa **258 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

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

## C-03c1cf65ffec9672899cf48313dbe772eff6fcdba2affae5b569efb36155236f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão Buscar tem margin-top:-12px e fica abaixo do campo (y 430–462) em vez de dentro dele (campo em y 402–434), separado do campo de busca.

Esperado: Botão de busca alinhado dentro/ao lado do campo, como no componente de busca do Design System.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-03c1cf65ffec9672899cf48313dbe772eff6fcdba2affae5b569efb36155236f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0b5955f7189517738f092e018d1aeaadd5f7b906ceed32fb56115f6f626a8854

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Texto branco de 14px/peso 500 sobre rgb(136,136,136) ("Aguardando plano de ação", "Aguardando SFPA"; também "Aguardando análise" na aba correspondente): contraste 3,54:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-0b5955f7189517738f092e018d1aeaadd5f7b906ceed32fb56115f6f626a8854",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-29266341691787b67656cd942edffc9e4bd0ca40c2934dd1ca82bff0e98bca7c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-filtro

Observado: As opções do filtro aberto ("Últimos 7 dias" etc.) são apenas <label> dentro de div.br-radio, sem input; não recebem foco e só funcionam com clique.

Esperado: Opções focáveis e selecionáveis por teclado (radio/checkbox nativos ou role=option com teclado).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click chip "Aberto há"

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@lista-filtro (/pnip-f/portal-mpa/processos)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>div>div>div:nth-of-type(1)>div>label" — <label> "Últimos 7 dias"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>div>div>div:nth-of-type(2)>div>label" — <label> "Últimos 30 dias"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>div>div>div:nth-of-type(3)>div>label" — <label> "Últimos 60 dias"
- "body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>div>div>div:nth-of-type(4)>div>label" — <label> "Últimos 90 dias"

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
  "cardId": "C-29266341691787b67656cd942edffc9e4bd0ca40c2934dd1ca82bff0e98bca7c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-344a74513f6763b1fe71520d4dc0e5f1377986fb6a13589340d4db62b8fb03f5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os números de processo são <a role="button"> sem href nem tabindex; element.focus() não os foca (activeElement continua outro) e eles ficam fora da sequência de Tab, embora estejam expostos como botões que abrem o processo.

Esperado: Controle focável e acionável por teclado (button nativo ou link com href).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-344a74513f6763b1fe71520d4dc0e5f1377986fb6a13589340d4db62b8fb03f5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-424c505314557c3003417e802c3466c1c8d35a6a8c9d9bb1b7bb58b936ef6802

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão exibe "Olá, Usuária de Teste, SUPERVISOR", mas aria-label="Avatar com dropdown" substitui esse texto no nome acessível.

Esperado: O nome acessível contém o texto visível do botão.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-424c505314557c3003417e802c3466c1c8d35a6a8c9d9bb1b7bb58b936ef6802",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-48072fb8f353cfc9ef9bcb305ed3db24d29b2e291d2cc79cb20612f19259cce1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O ícone de ordenação no cabeçalho "Aberto há" alterna sort-down/sort-up ao clique de mouse, mas não é focável nem tem papel de botão.

Esperado: Controle de ordenação operável por teclado (button dentro do th).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click no ícone de ordenação de "Aberto há"

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(1)>br-icon-base" — <br-icon-base>

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(1)>br-icon-base" — <br-icon-base>


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
  "cardId": "C-48072fb8f353cfc9ef9bcb305ed3db24d29b2e291d2cc79cb20612f19259cce1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4c078a95b33a656641c7a34689a7617a0e2267653a7349b976510c5e9323fed1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-filtro

Observado: O botão de remover o filtro aplicado ("Últimos 7 dias") contém só um ícone aria-hidden; não tem aria-label nem title: nome acessível vazio.

Esperado: Nome acessível como "Remover filtro Últimos 7 dias".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click chip "Aberto há" 3. click "Últimos 7 dias"

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
  "cardId": "C-4c078a95b33a656641c7a34689a7617a0e2267653a7349b976510c5e9323fed1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-53dba63043bc2a9cacd5b4ff2432d63e1285188ca7999b4245dac4cc2a7b7f96

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: As 6 caixas de seleção das linhas não têm label, aria-label nem title: nome acessível vazio.

Esperado: Nome acessível que identifique o processo (p.ex. "Selecionar processo 00000.000011/2026-00").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-53dba63043bc2a9cacd5b4ff2432d63e1285188ca7999b4245dac4cc2a7b7f96",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-53fba5820fee7a89e897528e5d088da6dac1ec446130385e2003393b478ed3d5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem do logotipo gov.br (no shadow root de br-header, src assets/images/govbr-logo.png) tem alt="logo", que não descreve a marca.

Esperado: Texto alternativo que identifique o logotipo (p.ex. "gov.br").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-53fba5820fee7a89e897528e5d088da6dac1ec446130385e2003393b478ed3d5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-551261f5abcd2111daac7a79766add3dc500e9553a4237dc4fd3f7489a2ecf39

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Texto branco de 14px/peso 500 sobre rgb(130,137,255) ("Aguarda complementos"): contraste 3,01:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-551261f5abcd2111daac7a79766add3dc500e9553a4237dc4fd3f7489a2ecf39",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-55e37d101e729e74898ccef9dcfa2b319bee6ad95745ad4920f6d00822e0e642

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Depois de abrir o diálogo de assinatura e fechá-lo com Escape, o foco vai para o <body>, não para o botão "Assinar".

Esperado: O foco volta ao botão que abriu o diálogo.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click "Assinar" (linha 00000.000011/2026-00) 3. Tab x4 até o botão fechar 4. Escape

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>br-button:nth-of-type(3)" — <br-button> "Assinar"


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

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-55e37d101e729e74898ccef9dcfa2b319bee6ad95745ad4920f6d00822e0e642",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-572a639c8448c6f31d0362eeba5a622ab61f3a13a11c2af1530460387345b13e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem exit-icon.png dentro do botão "Sair" não tem atributo alt.

Esperado: alt="" (decorativa, pois o botão já tem o texto "Sair").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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
  "cardId": "C-572a639c8448c6f31d0362eeba5a622ab61f3a13a11c2af1530460387345b13e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5a8e193dd60fabd0f09ad664b778b370f10c7dccd63e70a4323ef741105758f0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Na paginação, cada número de página é um <li> aninhado diretamente dentro de outro <li> (ul > li > li), estrutura de lista inválida.

Esperado: Cada <li> filho direto de <ul>/<ol>.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-5a8e193dd60fabd0f09ad664b778b370f10c7dccd63e70a4323ef741105758f0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5f635b6f3b5ba4745e4357dd2a7ca29a700196e0f9ff6377962ac73651e2b3cf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Texto branco rgb(255,255,255) de 14px/peso 500 sobre rgb(230,111,14) (Em análise analista/supervisor/diretor): contraste 3,16:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-5f635b6f3b5ba4745e4357dd2a7ca29a700196e0f9ff6377962ac73651e2b3cf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-61236bd32f706810fbdd67606178faae1c404aa21f2bed44a4b50c15401a48a4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão "Menu" (#navigation no shadow root de br-header) tem data-target="#main-navigation", mas esse elemento não existe; ao clicar, nada é aberto nem muda de estado.

Esperado: O botão abre o menu de navegação ou não é exibido.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click botão Menu

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
  "cardId": "C-61236bd32f706810fbdd67606178faae1c404aa21f2bed44a4b50c15401a48a4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-612b29c2b9ca37514c835b2706c6fffc1edbea0702ac54e68e65f27a8a74c839

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O cabeçalho "Téc. Adm." tem style="background-color: var(--pure-0)" (branco), enquanto os outros th do mesmo thead são rgb(240,240,240); a faixa do cabeçalho fica interrompida.

Esperado: Os cabeçalhos da mesma tabela com o mesmo fundo do padrão de tabela.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-612b29c2b9ca37514c835b2706c6fffc1edbea0702ac54e68e65f27a8a74c839",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-61784cce581bb30edfc1be685738e8a4be7afc5b7dfce7979bc1c369f8fd1cc1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Meus processos" funciona como alternância (ligado: fundo rgb(19,81,180); desligado: fundo branco e 9→10 linhas), mas não tem role="button" nem aria-pressed; o estado não é exposto.

Esperado: Estado de alternância exposto (p.ex. button com aria-pressed="true/false").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click "Meus processos"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-61784cce581bb30edfc1be685738e8a4be7afc5b7dfce7979bc1c369f8fd1cc1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6ee5ef1cbf2995218cb84a13f8e1869ff3a06aa599193476e527da4247cb0cd1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Há um iframe sem title (sem src, documento vazio, 1160x500px, no fim do main) que recebe foco na sequência de navegação.

Esperado: iframe com title descritivo, ou remoção do iframe vazio.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-6ee5ef1cbf2995218cb84a13f8e1869ff3a06aa599193476e527da4247cb0cd1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-71dab671eded0adbf3e542fcd3680c5f4347965be3c265a2ddc754920a18cede

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Na página de detalhe (Vinculação de embarcação), os 4 campos da seção "Dados estruturais" têm o mesmo rótulo "Armazenamento total".

Esperado: Cada campo com rótulo distinto que descreva seu conteúdo.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click aba "Concluídos" 3. página 2 4. click "Ver processo" (00000.000043/2026-00, Cancelada)

Regra declarada: wcag:2.4.6

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

### Sujeitos

- "unresolved:br-input[label=\"Armazenamento total\"]" — Seletor não resolvido

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
  "cardId": "C-71dab671eded0adbf3e542fcd3680c5f4347965be3c265a2ddc754920a18cede",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-72f574c2317317aeb9518fc123ea9af673929f6187b5cf962691c2aa9d39e39c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: As células de Solicitante têm max-width:90px com overflow:hidden e white-space:nowrap; o texto é cortado ("Pessoa Exemp", scrollWidth 332 vs clientWidth 120) e não há title nem outro meio de ver o conteúdo completo.

Esperado: Conteúdo integral visível (quebra de linha) ou acessível visualmente.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-72f574c2317317aeb9518fc123ea9af673929f6187b5cf962691c2aa9d39e39c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7efc9dfe555f2ef95c9c6bde9457408dbb388fab6f32818aa102e8f9e2656f3c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex nem role: não é alcançável por teclado.

Esperado: Controle focável e acionável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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
  "cardId": "C-7efc9dfe555f2ef95c9c6bde9457408dbb388fab6f32818aa102e8f9e2656f3c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7fd3ef041aa3afe5bc2ecb28da14f7b9bd66a9d8f07592607317a132592b6ae6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O botão de fechar do diálogo de assinatura tem aria-label="Close this dialog" em inglês, numa página com lang="pt-br" e sem lang no elemento.

Esperado: Rótulo em português ("Fechar") ou lang="en" no trecho.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click "Assinar" (linha 00000.000011/2026-00)

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
  "cardId": "C-7fd3ef041aa3afe5bc2ecb28da14f7b9bd66a9d8f07592607317a132592b6ae6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-84756ce4be71f2b47f70e05df5a153759477df038286d061e647569884865788

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O diálogo de confirmação "Tem certeza que deseja desassociar…" (role=dialog, aria-modal) usa aria-labelledby="swal2-title", que aponta para um h2 vazio com display:none: o diálogo fica sem nome acessível.

Esperado: Diálogo com nome acessível (título visível referenciado ou aria-label).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click "Desassociar processo do analista responsável" (linha 00000.000010/2026-00)

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
  "cardId": "C-84756ce4be71f2b47f70e05df5a153759477df038286d061e647569884865788",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8d590df3b3922e33b2edc734c343ae9dd3b6e97a980b63a49f17d499bb5f1841

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O campo de busca (input#search no shadow root) não tem <label> nem aria-label; a única identificação é o placeholder "Pesquise aqui ...", que desaparece ao digitar.

Esperado: Rótulo visível e associado ao campo, persistente durante a digitação.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-8d590df3b3922e33b2edc734c343ae9dd3b6e97a980b63a49f17d499bb5f1841",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8dcf445607db41b072839b1b54d459309cf26db47d6669067668e77c5e859cb6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A tabela vai de x=92 a x=1242px, mas o contêiner .br-table vai de x=92 a x=1188 (overflow visible): 54px passam do alinhamento da página (botão Exportar e divisória terminam em 1188/1220).

Esperado: A tabela cabe no contêiner ou rola dentro dele.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-8dcf445607db41b072839b1b54d459309cf26db47d6669067668e77c5e859cb6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9306cc21a4f7d9763e4d03323de5672753bfe9d87404b8d6f73c520dc3694066

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O último cabeçalho da tabela (coluna de ações) é um th vazio, sem texto nem nome acessível.

Esperado: Cabeçalho com texto (visível ou sr-only), p.ex. "Ações".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-9306cc21a4f7d9763e4d03323de5672753bfe9d87404b8d6f73c520dc3694066",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-96d96d14d9af4960fad70e5ea9ee71ad37983c9d0006d34b24890ed506844878

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A caixa de seleção do cabeçalho (seleciona todas as linhas) não tem label, aria-label nem title: nome acessível vazio.

Esperado: Nome acessível como "Selecionar todos os processos".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-96d96d14d9af4960fad70e5ea9ee71ad37983c9d0006d34b24890ed506844878",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9dfe97aac9bd5bab17cd62b21c87d3347c07e86d31f121a6cb4c7f63f16a2e15

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A letra "U" do avatar (24,19px, negrito, branca) sobre rgb(255,140,0): contraste 2,33:1.

Esperado: Contraste mínimo de 3:1 para texto grande.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"


### Unidades candidatas (não são crédito)

- U-1153a89f323ac27271693ae3d5efafa84a3a6702f55d91f3e9137bb1e92e4815 — D-12 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Um só título visível na página, <h2> "Processos"; nenhum <h1> (light DOM e shadow roots), nas 2 paradas. Ausência global, ancorada na raiz. **exposto** (casco: ordem de títulos, como C-05). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2c805500ab3adc70c23baa74ada22e74d032af269390391695d26929569729c6 — D-11 · sempre · cena 1280x900@lista-filtro · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Processos Me": Nenhum salto para o conteúdo: 0 âncoras "#…" e 0 .br-skiplink nas 2 paradas; o primeiro ponto de Tab é o botão Menu do cabeçalho. Casco da aplicação: **exposto** (adendo § E; C-04, B-01). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, lista-exibir, filtro-escolhido, lista-filtro
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-74f9f935e493bc4e2b4c75db69de57356bc3337e7883cfa35f2e443170d4f070 — F-07 · inicial · cena 1280x900@lista-exibir · <span> "U": Avatar de letra no cabeçalho ("U"): a superfície de 40×40 tem cantos de 4 px (border-radius: var(--surface-rounder-sm)) — um quadrado de cantos arredondados, não um círculo. A representação do usuário no Avatar fica contida numa superfície circular.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [border-top-left-radius] fora de {50%}. Medido: border-top-left-radius=4px | border-top-left-radius=4px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-76c656b4e5607a28ce26d6780aad18ace731e16bd0ec39fdae0ae1198d1c9c64 — D-14 · sempre · cena 1280x900@lista-filtro · <span> "U": Inicial do avatar "U" branco sobre #ff8c00 = 2,33:1 (24,2 px/700). **exposto** (casco; B-14, C-07). Sem predicado na referência; medido em tela-d/conferir-auditoria.mjs.
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
  "cardId": "C-9dfe97aac9bd5bab17cd62b21c87d3347c07e86d31f121a6cb4c7f63f16a2e15",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b56bffe96483e452eb843053a2e27e25c242d970857bfb1b8f93f22b83baea01

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No shadow root de br-breadcrumb, o item Home é um <a href="/portal-mpa/"> que contém um <button aria-label="">; controle interativo aninhado em outro, com duas paradas de Tab para o mesmo destino.

Esperado: Um único elemento interativo (link) para o item Home.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-b56bffe96483e452eb843053a2e27e25c242d970857bfb1b8f93f22b83baea01",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b72b1014071917b329f8c2d8ccc0effb31bf49473315055a3a9f8b90d52f04a3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A página atual é indicada só pela classe "active"; o link não tem aria-current="page".

Esperado: aria-current="page" no link da página atual.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-b72b1014071917b329f8c2d8ccc0effb31bf49473315055a3a9f8b90d52f04a3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bcaa1f3f5c12314d4e8b439fcd9ea5da4fc27a3f4cfd9620216bfc3986acb713

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O cabeçalho "Aberto há" mostra o ícone de direção de ordenação (sort-down/sort-up) sem aria-sort.

Esperado: aria-sort="ascending/descending" no th ordenado.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-bcaa1f3f5c12314d4e8b439fcd9ea5da4fc27a3f4cfd9620216bfc3986acb713",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c49325f2f602ece3f5726a6dd2c334b865e27fa5169294c9b0f42cdaba003bb3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os botões das abas (no shadow root de br-tab) têm aria-label="AGUARDANDO_ANALISE", "TRAMITANDO" e "HISTORICO", que substituem o texto visível "Aguardando análise", "Tramitando" e "Concluídos"; o nome acessível não contém o rótulo visível.

Esperado: O nome acessível de cada aba contém (de preferência, igual a) o texto visível.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-c49325f2f602ece3f5726a6dd2c334b865e27fa5169294c9b0f42cdaba003bb3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ce0fd8aff712ad9042c5da5c2f71ed445c361948aff73ec11046eb7ea29f3ce4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Ao escolher "25" no seletor "Exibir" com ArrowDown e Enter, o valor é aplicado e o foco vai para o <body>.

Esperado: O foco volta ao seletor (ou fica num ponto lógico) depois da escolha.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. focus #total 3. ArrowDown 4. ArrowDown 5. Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#total> "Selecione"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#total> "Selecione"


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
  "cardId": "C-ce0fd8aff712ad9042c5da5c2f71ed445c361948aff73ec11046eb7ea29f3ce4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d07ba1db89bc8422121da1768c906a0d5fcc44bf9b87a03b21ad0778cd204e8b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A página não tem h1; o único título é o h2 "Processos".

Esperado: Hierarquia de títulos iniciada por h1 identificando o conteúdo principal.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-d07ba1db89bc8422121da1768c906a0d5fcc44bf9b87a03b21ad0778cd204e8b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-da4cbdd54f21279d261bba8abaf74b5496b2c5fe851a96b0e54cd631c410d345

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Com o menu do usuário aberto e o foco no gatilho, Escape não fecha o menu (hidden=false; aria-expanded continua "true").

Esperado: Escape fecha o menu e mantém o foco no gatilho.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click #avatar-dropdown-trigger 3. Escape

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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
  "cardId": "C-da4cbdd54f21279d261bba8abaf74b5496b2c5fe851a96b0e54cd631c410d345",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e0a697649cd9edcbf658f900622bf6109e5e68e367ff22623cd562b7348e534a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: A pré-visualização do documento é um <object type="application/pdf"> sem title, aria-label nem conteúdo alternativo.

Esperado: Nome/alternativa textual para o documento incorporado (title/aria-label e conteúdo de fallback).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click "Assinar" (linha 00000.000011/2026-00)

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
  "cardId": "C-e0a697649cd9edcbf658f900622bf6109e5e68e367ff22623cd562b7348e534a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e479ba161182ca130d77987a97cd0d647c4c88e449f1b80ffbabf2284ea6cdec

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: Na busca sem resultados ("xq"), a tabela e a paginação (que tinha aria-live) são removidas e aparece "Não há processos para exibir." num <p> fora de qualquer região viva ou role=status.

Esperado: Mensagem de status anunciada por tecnologia assistiva (role="status"/aria-live).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. digitar "xq" no campo de busca 3. Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@lista-exibir, 1280x900@lista-filtro)

### Sujeitos

- "unresolved:pnip-mpa-processos div.mt-5.text-center > p" — Seletor não resolvido

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
  "cardId": "C-e479ba161182ca130d77987a97cd0d647c4c88e449f1b80ffbabf2284ea6cdec",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e6801b9b792c5625a7b87ac4da4bcbcb9d39d8fb62b8070134867962486bb09b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os seletores "Exibir" e "Página" são input type=text que abrem uma lista (br-list); não têm role="combobox", aria-expanded nem aria-controls.

Esperado: Semântica de combobox/listbox com estado expandido exposto.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

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
  "cardId": "C-e6801b9b792c5625a7b87ac4da4bcbcb9d39d8fb62b8070134867962486bb09b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e99be67289eb5fb89fc01fa2bcb26c836d2c5e4ab0e39ade325fc88794be30f8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Depois de abrir o diálogo de desassociação a partir deste botão e fechá-lo com Escape, o foco vai para o <body>, não para o gatilho.

Esperado: O foco volta ao botão que abriu o diálogo.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click "Desassociar processo do analista responsável" 3. Escape

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
  "cardId": "C-e99be67289eb5fb89fc01fa2bcb26c836d2c5e4ab0e39ade325fc88794be30f8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e9f38cabe42233b4379f06a9005fdc311cac7bd80d898257f16d5b50265f4368

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os 6 filtros (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) e o "Meus processos" são <span> com click e cursor:pointer, sem role nem tabindex (tabIndex -1); na sequência de Tab o foco passa das abas direto para o campo de busca.

Esperado: Controles operáveis por teclado (button ou role/tabindex com Enter/Espaço).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. Tab x12 desde o body

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@lista-exibir, 1280x900@lista-filtro; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@lista-exibir` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-exibir"`:
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span" — <span> "Aberto há"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Tipo de processo"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(3)>span" — <span> "Status"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(4)>span" — <span> "Espécie alvo"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(5)>span" — <span> "Método de pesca"
- "1280x900@lista-exibir|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(6)>span" — <span> "Petrecho"

Cena `1280x900@lista-filtro` (/pnip-f/portal-mpa/processos) — escolha com `"cena": "1280x900@lista-filtro"`:
- "1280x900@lista-filtro|body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span" — <span> "Meus processos"
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
- U-5d733d3faff011b90a59e41e70755706557e881db28e13ccd0abbb9fe0e18af0 — F-05 · inicial · cena 1280x900@lista-exibir · <span> "Meus processos": Tag de interação "Meus processos": a superfície tem forma de pílula (border-radius ≥ 16 px, var(--surface-rounder-pill)), enquanto as tags de filtro da mesma barra têm cantos de 4 px. O arredondamento da superfície da Tag de interação é --surface-rounder-sm.
  - estados em que a unidade existe: inicial, lista-exibir
  - predicado de aceitação: estilo-computado sustenta em inicial, lista-exibir — alguma propriedade de [border-top-left-radius] fora de {4px}. Medido: border-top-left-radius=16783.2px | border-top-left-radius=16783.2px
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
  "cardId": "C-e9f38cabe42233b4379f06a9005fdc311cac7bd80d898257f16d5b50265f4368",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eea68259cdfe82b6242ebc1def1dd0b5dc03a01cfe376c7311b4040fe76d71eb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@lista-exibir

Observado: O diálogo de assinatura (pré-visualização em PDF + "Solicitar Revisão"/"Assinar com gov.br") usa aria-labelledby="swal2-title", que aponta para um h2 vazio e oculto: sem nome acessível.

Esperado: Diálogo com nome acessível, p.ex. "Assinar processo 00000.000011/2026-00".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click "Assinar" (linha 00000.000011/2026-00)

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
  "cardId": "C-eea68259cdfe82b6242ebc1def1dd0b5dc03a01cfe376c7311b4040fe76d71eb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f0243dccf197ab3eaee0523d2c794a732c6689636348891ea33ef8e65ec5b4b8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O menu do usuário tem role="menu", mas não contém elementos role="menuitem": "Trocar unidade" é um span e "Sair" é um button sem papel de item.

Esperado: Itens com role="menuitem" (e navegação por setas), ou sem role="menu".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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
  "cardId": "C-f0243dccf197ab3eaee0523d2c794a732c6689636348891ea33ef8e65ec5b4b8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f989e92e23355a6eb101e28a30d7edf9aee32ea827e9da5c817d4e820d3fc7af

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A aba ativa (Tramitando) é indicada só visualmente (classe "active", borda inferior de 4px em rgb(12,50,111)); os botões não têm aria-selected, aria-current nem aria-pressed.

Esperado: O estado de aba atual é exposto programaticamente (p.ex. aria-current="page" ou role="tab" + aria-selected="true").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip-f/portal-mpa/processos?mock-perfil=mpa

Regra declarada: wcag:1.3.1

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
  "cardId": "C-f989e92e23355a6eb101e28a30d7edf9aee32ea827e9da5c817d4e820d3fc7af",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
