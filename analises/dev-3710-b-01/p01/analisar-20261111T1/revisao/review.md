# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 260 cartões únicos · 260 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 260 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 488 sujeitos · 260 cartão(ões) sem evidência verificada · 169 com unidade candidata · estimativa **1560 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 111 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

**Este plano navega (D-60):** cada janela tem uma cena por SEGMENTO, capturada na última parada dele (1280x900@inicial = /pnip/portal-mpa/vistorias · 1280x900@detalhe-menu = /pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046 · 1280x900@modal = /pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038). Quando o seletor de uma alegação resolve em mais de um segmento, o cartão lista os sujeitos de cada um e a decisão precisa dizer em `"cena"` de qual segmento a alegação fala (pelos passos declarados e pela evidência). Só os sujeitos dessa cena contam; os dos outros segmentos não são alegação.

Um átomo = um defeito. subjects identifica cada elemento alegado; unitIds contém somente alternativas semanticamente aceitas.
Cada átomo/elemento vale no máximo uma detecção. Divida alegações compostas; contabilize também as partes falsas.
Duplicatas revisadas: no átomo repetido, acrescente duplicateOf: { "cardId": "C-...", "atomId": "..." }. A citação continua avaliada separadamente.

**Vínculo de revisão (exceção declarada):** quando a alegação está certa sobre uma unidade que a ancoragem não ofereceu (ausência global ancorada em <html>/body, host no lugar do controle interno, participante relacionado, transição), acrescente ao átomo `"links"`: [{ "contrato": "vinculo-revisao-1.0.0", "unitId", "subjects", "scene", "state" (estado medido), "relation" (ausencia-global | host-interno | participante-relacionado | transicao), "evidence", "justification", "reviewer" (você), "binding" (o do cartão) }]. Nada cria vínculo por você; o scorer recusa outra cena, estado não medido, relação que não cabe na árvore medida, falta de evidência.

## C-00985b348da491f062f6da17bcd30e6080c07edc479b00d2b0d66202143d02b2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Detalhe /agendar-vistoria/…3028 começa em <h3> "Programa Nacional de Regularização de Embarcação de Pesca" seguido de <h4>; sem <h1> nem <h2>.

Esperado: Hierarquia iniciando em <h1>, sem saltos.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3028)

Regra declarada: page-has-heading-one

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(1)>div>h3" — <h3> "Programa Nacional de Regularização de Embarcação"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(1)>div:nth-of-type(1)>h3" — <h3> "Programa Nacional de Regularização de Embarcação"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-887e985657c2b2f666f91cbb4dd6aa2bbe2359e0a96dc9e98b8f6e69f8d572bb — B-21 · detalhe · cena 1280x900@modal · <h3> "Programa Nacional de Regularização de Embarcação": Detalhe da vistoria: a hierarquia começa num <h3> ("Programa Nacional de Regularização de Embarcação de Pesca"), seguido de <h4>; não há <h1> nem <h2>. Unidade única para o template do detalhe, ancorada na parada `detalhe` (o mesmo template da parada detalhe-menu não é contado de novo; auditoria.md § 5). Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-a3cf6d98c104` → identificador devolvido por ferramenta (sem arquivo)
- `F-108` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-00985b348da491f062f6da17bcd30e6080c07edc479b00d2b0d66202143d02b2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-031c222ea6706a640bc8a42cd060a4d26695417df34cd93a5da85dab3d4d68c4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Sem link de salto para o conteúdo; o primeiro link é "Home" do breadcrumb (href="/portal-mpa").

Esperado: Primeiro link levando ao conteúdo principal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-ed03a1600e21` → identificador devolvido por ferramenta (sem arquivo)
- `F-018` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-031c222ea6706a640bc8a42cd060a4d26695417df34cd93a5da85dab3d4d68c4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-043db9d7b984e6c2884d9e9979c259398a5418cd511793067a03be28cb10b035

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Table header text should not be empty

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:empty-table-header

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>thead>tr>th:nth-of-type(9)" — <th>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b7e530416a4355be7bcf78d035eaf9bd1ffb67d4420e5cb566793a700e04d842 — B-26 · inicial · cena 1280x900@inicial · <th>: Escalada E-04, origem: "autora" (decisão da escalada, 2026-10-01, D-61). O <th scope=col> da coluna de ações (9ª) não tem texto, aria-label nem filhos: as células de ação ficam associadas a um cabeçalho sem nome. O <th> da coluna de caixas (2ª) fica fora: contém um controle, e o defeito dele já é a B-06. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-043db9d7b984e6c2884d9e9979c259398a5418cd511793067a03be28cb10b035",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0454db5039d2ff722073bcab9fabf26fd18a01bd3949b49d304903588887924a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: <img src="../../../assets/images/exit-icon.png"> do botão "Sair" sem atributo alt.

Esperado: alt="" (decorativa; o botão já tem texto).

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger (Avatar com dropdown)

Regra declarada: image-alt

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>div>button>img" — <img>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9bc6e7a1ad04bfa95826d4923672ddd61d6dec27b94086ecea975dbb3ea09d60 — B-16 · detalhe-menu · cena 1280x900@detalhe-menu · <img>: Ícone do botão "Sair" do menu do avatar (<img src="../../../assets/images/exit-icon.png">) sem atributo alt — nem texto alternativo nem alt vazio de imagem decorativa.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: atributos-ausentes sustenta em detalhe-menu — nenhum destes atributos presente: alt. Medido: ausentes: alt
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9c7e2ca111d2c9a7961c1ee8e3072a064ed3c2f32391f51ce2f7fc92f0cbd327 — B-18 · detalhe-menu · cena 1280x900@detalhe-menu · <button> "Sair": Botão "Sair" do menu do avatar fora do padrão HTML: tem atributo href (inexistente em <button>) e contém um <p>, conteúdo de fluxo que o modelo de conteúdo de <button> não admite. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-832d8c454948` → identificador devolvido por ferramenta (sem arquivo)
- `F-099` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0454db5039d2ff722073bcab9fabf26fd18a01bd3949b49d304903588887924a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-04b612e2491504dd91a9a275108012268aecd6bc47b5aec451511660e9d8fcc5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Trocar unidade" é <span> com cursor:pointer, sem role nem tabindex; Tab a partir do avatar vai direto para "Sair".

Esperado: Controle nativo (button/link) operável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger (Avatar com dropdown)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-36f88fb819f6260616479faa26400108601f7aee5c6852e700540d504041ea84 — B-19 · detalhe-menu · cena 1280x900@detalhe-menu · <span> "Trocar unidade": "Trocar unidade" no menu do avatar é um <span> com cursor:pointer que navega ao clique (para /pnip/portal-mpa), sem tabindex nem papel: não é alcançado por Tab nem Shift+Tab e Enter não faz nada. Elemento interativo da lista só operável com mouse.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: atributos-ausentes sustenta em detalhe-menu — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
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
  "cardId": "C-04b612e2491504dd91a9a275108012268aecd6bc47b5aec451511660e9d8fcc5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-05188159286c8d0f7578856be776835c92cac20a2aba46c444c95d68c72328e9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Detalhe da vistoria NAO ADEQUADA: "boleto.pdf" é um <strong> com cursor:pointer, usado como link de arquivo, sem foco nem papel.

Esperado: Link ou botão nativo focável para abrir o boleto.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(4) br-button[icon="eye"] (NAO ADEQUADA)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>strong" — <strong> "boleto.pdf"
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>pnip-propesc-nao-comparecimento>div>div:nth-of-type(3)>div>div>div>div>div>strong" — <strong> "v3046-campo2-1.jpg"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>strong" — <strong> "boleto.pdf"
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo57-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo58-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo59-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo65-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(6)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo66-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo60-1.pdf" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção DOM` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-05188159286c8d0f7578856be776835c92cac20a2aba46c444c95d68c72328e9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-057ab79ee70d4b0328328666a3c65b34443a10e23b9c910abbcde206d37829a3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No formulário Editar dados da vistoria, Endereço e Nome do responsável são obrigatórios (geram "Campo obrigatório" ao salvar vazios), mas não têm indicação visual (asterisco) nem required/aria-required antes do envio.

Esperado: Campos obrigatórios indicados no rótulo e programaticamente (required/aria-required).

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[icon="eye"] 2. click Editar (pnip-propesc-detalhes-vistoria br-button[icon="edit"])

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input[formcontrolname=\"endereco\"], br-input[formcontrolname=\"nomeResponsavelEmbarcacao\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-012` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-057ab79ee70d4b0328328666a3c65b34443a10e23b9c910abbcde206d37829a3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0603b73f870e1f5e71e6e6545dd50a28cc5a3db187d1768884f467a49a8c8b91

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-80d427f0aba5699380a544bbe2c85dbca2b581b8471d21c72c60691c2e9c6636 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0603b73f870e1f5e71e6e6545dd50a28cc5a3db187d1768884f467a49a8c8b91",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-08dcafae526388807ffe8468a76b163baeede041fcf6519c5999fb45f6eb2f9f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Após o erro, a mensagem 'Campo obrigatório' (div role=alert fora do shadow DOM) não está associada ao input: sem aria-invalid e sem aria-describedby.

Esperado: Erro associado ao campo (aria-invalid=true e descrição vinculada).

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar botão olho (br-button[icon="eye"]) da linha 1 'Coral Mansa IV' (aba Tramitando) 3. clicar 'Editar' em Dados da vistoria 4. apagar 'Nome da embarcação' 5. clicar 'Salvar' 6. fechar alerta 'OK, entendi'

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input[formcontrolname=\"nomeEmbarcacao\"]" — Seletor não resolvido

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
  "cardId": "C-08dcafae526388807ffe8468a76b163baeede041fcf6519c5999fb45f6eb2f9f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0904ccb0c9f04be9ec8b5f8b2e56dbb417767304fe5ef062513b44bc736a277c

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a80ba4fa0e4e8dcc3209bd5f984d110e3d9b52df1b836a9579647be5634914aa — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0904ccb0c9f04be9ec8b5f8b2e56dbb417767304fe5ef062513b44bc736a277c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-091c1c22b4883de5631c5cd143be52d5717da566a578b7679a106cdda53aab03

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Tabelas "Dados da Notificação" e de histórico do detalhe concluído sem <caption>.

Esperado: Título de cada tabela em <caption>.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO (aba Concluídos) 2. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3069)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>div>table" — <table> "Status Data Hora Visualizado 06/03/2026 08:21:00"

### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c62feb50f900d6f87ccab4739f0c322b7428a0be9887b106e56b9d0e280fb176 — B-22 · detalhe · cena 1280x900@modal · <table> "Status Data Hora Visualizado 06/03/2026 08:21:00": Tabela "Dados da Notificação" do detalhe (Status, Data, Hora) sem <caption>, aria-label nem aria-labelledby: nome acessível vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
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
  "cardId": "C-091c1c22b4883de5631c5cd143be52d5717da566a578b7679a106cdda53aab03",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-09eb3cf8aea99ad55960215a28ce11809b2f35dff15c2ab2d8b87a596173efe5

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone bell), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Notificar solicitante da vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-09eb3cf8aea99ad55960215a28ce11809b2f35dff15c2ab2d8b87a596173efe5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-09f85f2fcfc0c9b491c4917b3c5f23c8e8409f6c69052dda3865fc9101e3a574

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: Page should contain a level-one heading

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: axe:page-has-heading-one

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-09f85f2fcfc0c9b491c4917b3c5f23c8e8409f6c69052dda3865fc9101e3a574",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0a028741ccf65f7e675b00757639b3ca72a1e803469baf993aa0e754345d2b63

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem nome acessível (br-button)

Esperado: Nome acessível não vazio — por conteúdo, aria-labelledby, aria-label ou title

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: wcag:4.1.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-3049775918cf20de601f3ade85d8fdbdb3805ce950056f454a06a7409f6cf244 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c1a9610f089cbeee868f23860b3d533f7c2b696814cd4ac8c5af2d9a7039917f — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0a028741ccf65f7e675b00757639b3ca72a1e803469baf993aa0e754345d2b63",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0cbb16d09407fa7e6e88ca9327b334e9dd5526d2fcd322ca6c5b6b324176b9d0

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone trash), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Excluir vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0cbb16d09407fa7e6e88ca9327b334e9dd5526d2fcd322ca6c5b6b324176b9d0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0d0f1416452d9f0e561d9c59ca56e687d22a63ab4b820f385d865145ed10d809

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: border-radius: 20px fora da escala do DS

Esperado: Um de: 0px, 4px, 8px, 16px, 50% (circle) ou pill (100em/999em × font-size)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>button" — <button> "Sair"

### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9c7e2ca111d2c9a7961c1ee8e3072a064ed3c2f32391f51ce2f7fc92f0cbd327 — B-18 · detalhe-menu · cena 1280x900@detalhe-menu · <button> "Sair": Botão "Sair" do menu do avatar fora do padrão HTML: tem atributo href (inexistente em <button>) e contém um <p>, conteúdo de fluxo que o modelo de conteúdo de <button> não admite. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0d0f1416452d9f0e561d9c59ca56e687d22a63ab4b820f385d865145ed10d809",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0ec217f57458153e1ce750674977d9489a35bbd7200d4b3409b3abda8f1a330a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Tag 'Nenhum filtro de data aplicado' com texto branco sobre rgb(197,212,235), 14px: contraste ≈1,5:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>span" — <span> "Nenhum filtro de data aplicado"

### Unidades candidatas (não são crédito)

- U-294d06e9c9ac03ecc74fb602199737580e11736300a52c3df77daafce5eb8a3c — B-13 · inicial · cena 1280x900@inicial · <span> "Nenhum filtro de data aplicado": Etiqueta "Nenhum filtro de data aplicado" (br-tag primary-pastel-01 small): texto branco sobre #c5d4eb, 14 px peso 500 — contraste 1,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T13-04-26-092Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0ec217f57458153e1ce750674977d9489a35bbd7200d4b3409b3abda8f1a330a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0ffae18b286768bde1110982b0cb583ca5d37d79abdb025d5edae40866fff61a

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <li> elements must be contained in a <ul> or <ol>

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:listitem

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li" — <li> "1"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0ffae18b286768bde1110982b0cb583ca5d37d79abdb025d5edae40866fff61a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-12c8c029d2f867ffecc050df91f231da9db7e563509c2e1ae1fd5a319d45c1c7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Campos do vistoriador estão desabilitados e vazios, mas são validados como obrigatórios: o formulário já carrega ng-invalid e ao salvar exibe 'Campo obrigatório' neles, sem forma de corrigir na tela.

Esperado: Não exigir campos que o usuário não pode preencher, ou permitir preenchê-los.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar botão olho (br-button[icon="eye"]) da linha 1 'Coral Mansa IV' (aba Tramitando) 3. clicar 'Editar' em Dados da vistoria 4. apagar 'Nome da embarcação' 5. clicar 'Salvar' 6. fechar alerta 'OK, entendi'

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input[formcontrolname=\"nomeVistoriador\"], br-input[formcontrolname=\"numConselhoClasseVistoriador\"], br-input[formcontrolname=\"emailVistoriador\"]" — Seletor não resolvido

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
  "cardId": "C-12c8c029d2f867ffecc050df91f231da9db7e563509c2e1ae1fd5a319d45c1c7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-15b9895619b02f6570e2d370fa94b85af87ccade1e8e638d5d5cea263cecbc73

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@modal

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até modal (8 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(4)>div:nth-of-type(1)>div:nth-of-type(2)>div>div>div" — <div> "0%"

### Unidades candidatas (não são crédito)

- U-47e455721d9db772bfcf9d81fb3760168dc6269c6849d5348ccb5207c5570bb1 — B-23 · detalhe · cena 1280x900@modal · <div> "0%": Indicador "0%" do detalhe: texto branco (text-secondary-01) sobre #888 (bg-secondary-06), 14 px peso 400 — contraste 3,54:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-15b9895619b02f6570e2d370fa94b85af87ccade1e8e638d5d5cea263cecbc73",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-173b9f635fe8ee7b25d84878518ce4991752c88b8cb5f85f650267dc458d3f9a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Detalhe preenchida: etiquetas "60%" e "0%" #ffffff sobre #888888, 14px, contraste 3,54:1.

Esperado: Contraste mínimo 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. click pnip-filter-panel span.br-tag "Cidade" 2. click opção "Barra Nova" 3. click tbody tr:nth-child(4) br-button[icon="eye"] (Vistoria preenchida, /agendar-vistoria/...3037) 4. click br-button[label="Mostrar"] (1º)

Regra declarada: color-contrast

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(4)>div:nth-of-type(1)>div:nth-of-type(2)>div>div>div" — <div> "0%"

### Unidades candidatas (não são crédito)

- U-47e455721d9db772bfcf9d81fb3760168dc6269c6849d5348ccb5207c5570bb1 — B-23 · detalhe · cena 1280x900@modal · <div> "0%": Indicador "0%" do detalhe: texto branco (text-secondary-01) sobre #888 (bg-secondary-06), 14 px peso 400 — contraste 3,54:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-94a83b88e829` → identificador devolvido por ferramenta (sem arquivo)
- `F-355` → identificador devolvido por ferramenta (sem arquivo)
- `F-356` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-173b9f635fe8ee7b25d84878518ce4991752c88b8cb5f85f650267dc458d3f9a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-19380e8204c3c82cdd6c19965ddaaf86f3f0ad8e826eca9f88523a79991433c8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão "Menu" do cabeçalho (#navigation, data-target="#main-navigation") não faz nada ao ser clicado: o alvo #main-navigation não existe no documento nem nos shadow roots, e o botão não expõe aria-expanded.

Esperado: O botão Menu deve abrir o menu principal e expor o estado expandido/recolhido.

Janela: 1280×900 · interações desde o carregamento: 1. click botão "Menu" do cabeçalho (br-header #navigation)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>br-header" — <br-header>


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-023 (findings idênticos a S-page-001; expanded=[])` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção: busca de #main-navigation retornou null` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-19380e8204c3c82cdd6c19965ddaaf86f3f0ad8e826eca9f88523a79991433c8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-19fd2d124813d92613a1a2cec9632290ae449697cba19b0d0be115344faa603f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Detalhe da vistoria NAO ADEQUADA: não há h1 nem h2; o primeiro título é o h3 "Programa Nacional de Regularização de Embarcação de Pesca", seguido de h4.

Esperado: Hierarquia de títulos com h1 principal, sem pular níveis.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(4) br-button[icon="eye"] (NAO ADEQUADA)

Regra declarada: page-has-heading-one

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-165` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-19fd2d124813d92613a1a2cec9632290ae449697cba19b0d0be115344faa603f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1af60aa835972374f8a4aa689a43350039b88e13763cf5c54d91b776bfa023e5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: <object type="application/pdf"> sem title, aria-label nem conteúdo alternativo.

Esperado: Alternativa textual/nome para o documento incorporado.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar botão olho (br-button[icon="eye"]) da linha 1 'Coral Mansa IV' (aba Tramitando) 3. clicar 'boleto.pdf'

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-popup object" — Seletor não resolvido

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
  "cardId": "C-1af60aa835972374f8a4aa689a43350039b88e13763cf5c54d91b776bfa023e5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1afa88ab1d3098325d8f82c950ed8af61d7128ef1c830737189eca7738abe605

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone user-plus), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Atribuir vistoriador" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1afa88ab1d3098325d8f82c950ed8af61d7128ef1c830737189eca7738abe605",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1bcd7e713e40548b6aff821d178a5f08b5e6b1cd00bf271fe4649f60fbe7acba

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: .br-table contém só <table>; falta a parte obrigatória "Header da Tabela".

Esperado: Header da Tabela presente no componente.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO (aba Concluídos)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)" — <div> "# Nome da embarcação RAEP Data/Hora Vistoria Loc"

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
  "cardId": "C-1bcd7e713e40548b6aff821d178a5f08b5e6b1cd00bf271fe4649f60fbe7acba",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1d0e4060edde59cab2223dd8bdc1333e0a66ecded6ab48abdf8fd86db7fc36b5

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Page should contain a level-one heading

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:page-has-heading-one

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1d0e4060edde59cab2223dd8bdc1333e0a66ecded6ab48abdf8fd86db7fc36b5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1f8658c54648c80968c8b2c807f1e146e4c2e505fa1d291661dad73253b0499c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Agendar vistoria: não há h1 nem h2; o primeiro título é o h3 "Programa Nacional de Regularização de Embarcação de Pesca", seguido de h4.

Esperado: Hierarquia de títulos com h1 principal, sem pular níveis.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR 2. click tbody tr:nth-child(1) br-button[icon="calendar"] (Agendar)

Regra declarada: page-has-heading-one

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-017` → identificador devolvido por ferramenta (sem arquivo)
- `F-215` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1f8658c54648c80968c8b2c807f1e146e4c2e505fa1d291661dad73253b0499c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-21135fac08d66c200a6f32931049302c18174b48ea1050d45c3162c19efd63d9

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem nome acessível (br-button)

Esperado: Nome acessível não vazio — por conteúdo, aria-labelledby, aria-label ou title

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: wcag:4.1.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d9d058c837d7a226ee252aedac0d3081d5e7e7d1deea30e21093ded6eb031d76 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ee5e64797680cb09161a6820073c7c7e530cf5b4d2d0ea4233d37a9fd9d356fa — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-21135fac08d66c200a6f32931049302c18174b48ea1050d45c3162c19efd63d9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-21edf4019fc5c675a39601a0cf2044d2f91df736acbc06b2db7aa10c42dfd323

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host <br-input> não recebeu label/aria-label da página: o placeholder faz o papel do rótulo

Esperado: Um rótulo associado ao campo (<label for>/<label> ancestral, aria-labelledby ou aria-label); o placeholder não substitui o rótulo

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:6.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input >>> div>input" — <input#search> "Pesquise aqui ..." [shadow]

### Unidades candidatas (não são crédito)

- U-57f591e9a5b486fca171693fe185de691ee0f63b02046c10f3e1e17133bd3ce9 — B-04 · inicial · cena 1280x900@inicial · <input#search> "Pesquise aqui ..." [shadow]: Campo de busca da lista (input#search dentro do br-input) sem <label> associado, aria-label nem aria-labelledby; só o placeholder "Pesquise aqui ...". Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-21edf4019fc5c675a39601a0cf2044d2f91df736acbc06b2db7aa10c42dfd323",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-22e89b8c22b12a281c16bb93c8038948f821b457cd9b8bfe4d602515aa3142fe

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Filtros Cidade/Porto/Vistoriador/Status são <span> com cursor:pointer e handler de clique (abrem lista), sem tabindex nem role; não aparecem na ordem de tabulação.

Esperado: Gatilhos de filtro operáveis por teclado, como <button> com aria-expanded.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(1)>span" — <span> "Cidade"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(2)>span" — <span> "Porto"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(3)>span" — <span> "Vistoriador"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(4)>span" — <span> "Status"

### Unidades candidatas (não são crédito)

- U-05b87158ac88b5d030d58ee8ec4975da77defd6f42e15bef94c2adc565bfce9f — B-11 · inicial · cena 1280x900@inicial · <span> "Cidade": As 4 etiquetas de filtro ("Cidade", "Porto", "Vistoriador", "Status"; span.br-tag.interaction) abrem o painel de opções ao clique (3/3 cargas), mas são <span> sem tabindex nem papel: não entram na ordem de Tab e Enter com foco não produz efeito (0/3). Só operáveis com mouse. O predicado mede a ausência de tabindex e role; o efeito do clique e a ausência de efeito do teclado são medidos em conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: atributos-ausentes sustenta em inicial — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-124a6e3df510b7411b1d60ba552eefccc737cd33b85d05267974881867d06c07 — B-11 · inicial · cena 1280x900@inicial · <span> "Status": As 4 etiquetas de filtro ("Cidade", "Porto", "Vistoriador", "Status"; span.br-tag.interaction) abrem o painel de opções ao clique (3/3 cargas), mas são <span> sem tabindex nem papel: não entram na ordem de Tab e Enter com foco não produz efeito (0/3). Só operáveis com mouse. O predicado mede a ausência de tabindex e role; o efeito do clique e a ausência de efeito do teclado são medidos em conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: atributos-ausentes sustenta em inicial — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6f0ac137d5bade8c86303e0afc551d4b53699c58fea6717d3a622ccd615710d1 — B-11 · inicial · cena 1280x900@inicial · <span> "Vistoriador": As 4 etiquetas de filtro ("Cidade", "Porto", "Vistoriador", "Status"; span.br-tag.interaction) abrem o painel de opções ao clique (3/3 cargas), mas são <span> sem tabindex nem papel: não entram na ordem de Tab e Enter com foco não produz efeito (0/3). Só operáveis com mouse. O predicado mede a ausência de tabindex e role; o efeito do clique e a ausência de efeito do teclado são medidos em conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: atributos-ausentes sustenta em inicial — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ffc998ab00b11ff3f14640a0556517c49967185977f90f93e3a43477569ab1a2 — B-11 · inicial · cena 1280x900@inicial · <span> "Porto": As 4 etiquetas de filtro ("Cidade", "Porto", "Vistoriador", "Status"; span.br-tag.interaction) abrem o painel de opções ao clique (3/3 cargas), mas são <span> sem tabindex nem papel: não entram na ordem de Tab e Enter com foco não produz efeito (0/3). Só operáveis com mouse. O predicado mede a ausência de tabindex e role; o efeito do clique e a ausência de efeito do teclado são medidos em conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: atributos-ausentes sustenta em inicial — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-22e89b8c22b12a281c16bb93c8038948f821b457cd9b8bfe4d602515aa3142fe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-23190438f275b1f4f2e3ae91b41b9794b366853c25b0240784d59d0844c9991e

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone user-times), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Atribuir vistoriador" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-23190438f275b1f4f2e3ae91b41b9794b366853c25b0240784d59d0844c9991e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-28a1d130fb9bc6c0bcb7cb7bb617b7fe64e0a90c97565fe4f5a5ae96cbecf5f9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Opções do filtro aberto (Areia Branca do Leste, Barra Nova…) são <div class="br-radio"><label>texto</label></div> sem input type=radio, sem role e não focáveis.

Esperado: Radios nativos do DS (input type=radio + label) ou listbox operável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. click pnip-filter-panel span.br-tag "Cidade"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel .br-radio" — Seletor não resolvido

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
  "cardId": "C-28a1d130fb9bc6c0bcb7cb7bb617b7fe64e0a90c97565fe4f5a5ae96cbecf5f9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-29a0afe353a81337da57148abe6aac112e03825a75bc651c766f41f0c1137520

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: O primeiro link da página (href="/portal-mpa", "Home") não é uma âncora interna.

Esperado: O primeiro link da página é o salto para o conteúdo: âncora interna cujo alvo existe (e-MAG 1.5).

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-29a0afe353a81337da57148abe6aac112e03825a75bc651c766f41f0c1137520",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-29af45782b189409e969491f7c678fbdd561dee4ef4c725e9178ecbd1d516be8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Página de vistorias sem <h1>; o título principal "Vistorias" é <h2>.

Esperado: Título principal em <h1>.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: page-has-heading-one

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(1)>h2" — <h2> "Vistorias"

### Unidades candidatas (não são crédito)

- U-7417abf3b736412929e5aac6c0f8edf05a3bee20d5a3aa4fee840137b342a4cd — B-02 · inicial · cena 1280x900@inicial · <h2> "Vistorias": Lista de vistorias: o único título da página é um <h2> "Vistorias"; não há nenhum <h1> (light DOM e shadow roots). A hierarquia começa no nível 2. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-46305e6af7ad` → identificador devolvido por ferramenta (sem arquivo)
- `F-090` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-29af45782b189409e969491f7c678fbdd561dee4ef4c725e9178ecbd1d516be8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2a11697e16181de960620920fcb9f2afa6a426766090062f8cb4a2fa7822bb50

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>br-input:nth-of-type(1) >>> div>input" — <input#br-input-8> [shadow]

### Unidades candidatas (não são crédito)

- U-49267d52f6c22aa972bf4b8292253c28f1c4a6470c6c247d34966a0be07ed1c4 — B-05 · inicial · cena 1280x900@inicial · <input#br-input-8> [shadow]: Os dois campos de data do filtro de período (br-input type=date) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2a11697e16181de960620920fcb9f2afa6a426766090062f8cb4a2fa7822bb50",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2b09e56bf98bd2f75ce82fce5e5c4fd0084d314e7073363b09715df1088ec378

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os cabeçalhos das colunas de seleção e de ações estão vazios (na aba Agendar, o th:nth-child(8) de ações também).

Esperado: Cabeçalhos com texto, mesmo que visualmente oculto (ex.: "Selecionar", "Ações").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: empty-table-header

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam · estado-nao-declarado: B-22 só existe(m) em detalhe, modal, e a alegação não declara passo nenhum

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>thead>tr>th:nth-of-type(2)" — <th>
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>thead>tr>th:nth-of-type(9)" — <th>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>div>table>thead>tr>th:nth-of-type(2)" — <th> "Data"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b7e530416a4355be7bcf78d035eaf9bd1ffb67d4420e5cb566793a700e04d842 — B-26 · inicial · cena 1280x900@inicial · <th>: Escalada E-04, origem: "autora" (decisão da escalada, 2026-10-01, D-61). O <th scope=col> da coluna de ações (9ª) não tem texto, aria-label nem filhos: as células de ação ficam associadas a um cabeçalho sem nome. O <th> da coluna de caixas (2ª) fica fora: contém um controle, e o defeito dele já é a B-06. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c62feb50f900d6f87ccab4739f0c322b7428a0be9887b106e56b9d0e280fb176 — B-22 · detalhe · cena 1280x900@modal · <table> "Status Data Hora Visualizado 06/03/2026 08:21:00": Tabela "Dados da Notificação" do detalhe (Status, Data, Hora) sem <caption>, aria-label nem aria-labelledby: nome acessível vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-022` → identificador devolvido por ferramenta (sem arquivo)
- `F-023` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004 F-138` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2b09e56bf98bd2f75ce82fce5e5c4fd0084d314e7073363b09715df1088ec378",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2ba03b808b9ffee6f96413cb3ce4f41909e4ae8000e8e220b380d49e59b34b74

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ícones Font Awesome dos 12 cartões da Home não têm aria-hidden; o glifo de uso privado entra no nome do link (ex.: ' PROCESSOS').

Esperado: Ícones decorativos com aria-hidden="true".

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar #avatar-dropdown-trigger (Avatar com dropdown) 3. clicar 'Trocar unidade' (navega para /pnip/portal-mpa)

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:main a[href^=\"/pnip/portal-mpa/\"] i.fa" — Seletor não resolvido

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
  "cardId": "C-2ba03b808b9ffee6f96413cb3ce4f41909e4ae8000e8e220b380d49e59b34b74",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2ca2860a5c172421b1656ac6594ae69c6a495cf9926d92484fb9b1d5f38feecd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A 1280×900 a tabela tem 1272px dentro de .br-table de 1096px sem overflow; a página rola na horizontal (scrollWidth 1364 > 1280) e o 4º botão de ação (sino, x 1258–1336) fica fora da área visível.

Esperado: Tabela contida no layout, sem rolagem horizontal da página.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table" — <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc"

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
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
  "cardId": "C-2ca2860a5c172421b1656ac6594ae69c6a495cf9926d92484fb9b1d5f38feecd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2d751f8d7887378fd6be63a18bfb113931ac2f035e9cdce14a1b18ff9b1de21e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os 10 botões de visualizar (ícone olho) da coluna de ações não têm nome acessível: o <button> interno do shadow DOM tem aria-label="" e só um ícone.

Esperado: Cada botão deve ter nome acessível (ex.: aria-label="Visualizar vistoria <embarcação>").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: button-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-c623d4d97c3a` → identificador devolvido por ferramenta (sem arquivo)
- `F-001..F-010` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-005 FAM-a220ec5e8010` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2d751f8d7887378fd6be63a18bfb113931ac2f035e9cdce14a1b18ff9b1de21e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2d763fbcc9f615af33a8ae3d9baa7f63c69457573ba07a723cd53d206d1fd099

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A caixa de seleção "selecionar todos" no cabeçalho da tabela não tem nome acessível.

Esperado: A caixa deve ter nome acessível (ex.: aria-label="Selecionar todas as vistorias").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: label

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>thead>tr>th:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-50a27493b185c0bbb0179208240a74e28e88df151508b8845c55406c1030426e — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-026` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2d763fbcc9f615af33a8ae3d9baa7f63c69457573ba07a723cd53d206d1fd099",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2e4357650416a01ec55f12f3883c237a9e194792a60590720d8a8bb6d569d2fd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na tabela do detalhe concluído, os ícones Laudo, Protocolo e Arquivos são br-icon-base clicáveis (Laudo abre PDF) com tabindex -1, sem role; Laudo e Arquivos também sem nome.

Esperado: Botões/links focáveis com nome acessível.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar aba 'Concluídos' (#HISTORICO) 3. clicar botão olho da linha 4 'Coral Veloz V' (NAO ADEQUADA)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:table br-icon-base[style*=\"cursor\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T13-02-17-626Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2e4357650416a01ec55f12f3883c237a9e194792a60590720d8a8bb6d569d2fd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2e972252fc9f2f91e13e0db49867ac71bf787796f1fd684a99eb0eb403325ce7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na Home todos os 12 cabeçalhos são h6, sem h1–h5.

Esperado: Hierarquia de cabeçalhos coerente iniciando em h1.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar #avatar-dropdown-trigger (Avatar com dropdown) 3. clicar 'Trocar unidade' (navega para /pnip/portal-mpa)

Regra declarada: emag:1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:main h6" — Seletor não resolvido

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
  "cardId": "C-2e972252fc9f2f91e13e0db49867ac71bf787796f1fd684a99eb0eb403325ce7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2f36ec09c097f6a5ad32e7b2241615743bb24b5ef1fbac1205ae3dadbbb722bd

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>pnip-propesc-nao-comparecimento>div>div:nth-of-type(2)>div>div>textarea" — <textarea>

### Unidades candidatas (não são crédito)

- U-238f9e8879e41566f840160f72c03e67a02b73d7a42128f02a5935cc250e0e6f — B-20 · detalhe-menu · cena 1280x900@detalhe-menu · <textarea>: Detalhe da vistoria de não comparecimento: a <textarea> do motivo tem um <label> "Descrever o motivo do não comparecimento" como irmão, mas sem for (e a textarea sem id): o rótulo não está associado; nome acessível vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2f36ec09c097f6a5ad32e7b2241615743bb24b5ef1fbac1205ae3dadbbb722bd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2f8a1ff7994ee0ecf833aa683428a0cadfc2723a46924d37bd14cf091ae9cc77

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-31b4d9ec28350f49ebccde7fa4125d03c35bef0f8509b31c305a4335353bcd3a — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2f8a1ff7994ee0ecf833aa683428a0cadfc2723a46924d37bd14cf091ae9cc77",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-300af94bf88e0cd76adadcc2f9a445e68b90cf236ef2a43aafb03a175c5aab80

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone bell), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Notificar solicitante da vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-300af94bf88e0cd76adadcc2f9a445e68b90cf236ef2a43aafb03a175c5aab80",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-315152ebee929a645bbb726a86e3017053608e5a917d19bb4aee6228908a38a8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Detalhe da vistoria ADEQUADA: não há h1 nem h2; o primeiro título é o h3 "Programa Nacional de Regularização de Embarcação de Pesca", seguido de h4.

Esperado: Hierarquia de títulos com h1 principal, sem pular níveis.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(10) br-button[icon="eye"] (ADEQUADA)

Regra declarada: page-has-heading-one

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-166` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-315152ebee929a645bbb726a86e3017053608e5a917d19bb4aee6228908a38a8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3257de1a64dd357c64c044f1fabfbd0b64cff663c2fb4830c706bec222a22a81

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Selo 'Aguarda preenchimento' com texto branco sobre #888888, 14px peso 400: contraste ≈3,5:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar botão olho (br-button[icon="eye"]) da linha 1 'Coral Mansa IV' (aba Tramitando)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(4)>div:nth-of-type(1)>div:nth-of-type(2)>div>div>div" — <div> "0%"

### Unidades candidatas (não são crédito)

- U-47e455721d9db772bfcf9d81fb3760168dc6269c6849d5348ccb5207c5570bb1 — B-23 · detalhe · cena 1280x900@modal · <div> "0%": Indicador "0%" do detalhe: texto branco (text-secondary-01) sobre #888 (bg-secondary-06), 14 px peso 400 — contraste 3,54:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
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
  "cardId": "C-3257de1a64dd357c64c044f1fabfbd0b64cff663c2fb4830c706bec222a22a81",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-32dde9c7f3d819f586724f952e18d0169b6f0dc8ad2987a4deccfc485b13db87

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem nome acessível (br-button)

Esperado: Nome acessível não vazio — por conteúdo, aria-labelledby, aria-label ou title

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: wcag:4.1.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-719e012653c9e138c309d9114860d8c4ca1d23331f29f580175ea72d282d9606 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b3e7529e3a437858f21a9fedcb26980f3dcedcf07f8b8e43d6d500141e508e1c — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-32dde9c7f3d819f586724f952e18d0169b6f0dc8ad2987a4deccfc485b13db87",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-32fd221f3afcdfcf055ff6d6341b6da1320334aeb004a9b075d8e3170c6bfb29

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Buttons must have discernible text

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:button-name

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d9d058c837d7a226ee252aedac0d3081d5e7e7d1deea30e21093ded6eb031d76 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ee5e64797680cb09161a6820073c7c7e530cf5b4d2d0ea4233d37a9fd9d356fa — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-32fd221f3afcdfcf055ff6d6341b6da1320334aeb004a9b075d8e3170c6bfb29",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-334cd627174fa235db4e3a46ef7957563c0ab1d233e03361dc5410cdda70c056

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: All page content should be contained by landmarks

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: axe:region

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S"

### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-334cd627174fa235db4e3a46ef7957563c0ab1d233e03361dc5410cdda70c056",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-33c392d6940fde4f1901554def920843bd1bdf3abf4306e6b1de8d170ba9911e

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone bell), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Notificar solicitante da vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-33c392d6940fde4f1901554def920843bd1bdf3abf4306e6b1de8d170ba9911e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-34dd5fcffa30d5ed8d9255faa669d6955c1f298952c69e32a3c2cf87312abb6e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Imagem do logotipo gov.br (no shadow DOM do br-header) com alt="logo", que não descreve a imagem.

Esperado: Texto alternativo equivalente (ex.: 'gov.br').

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>br-header" — <br-header>


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
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
  "cardId": "C-34dd5fcffa30d5ed8d9255faa669d6955c1f298952c69e32a3c2cf87312abb6e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-34e90fc26e177215695577fede64f2f6a3bf8bbef3cb7399b422ce9ab1820548

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <li> elements must be contained in a <ul> or <ol>

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:listitem

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(3)>li" — <li> "2"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-34e90fc26e177215695577fede64f2f6a3bf8bbef3cb7399b422ce9ab1820548",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-34e9e4f820c0a1f6c8c6a38b2a0f45e21c17bfeb871c47cf12cad9d485c32875

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-19ca16582dcc40a9305397b4cebe70cf60687de565533ab4f4d5de3991446b95 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-34e9e4f820c0a1f6c8c6a38b2a0f45e21c17bfeb871c47cf12cad9d485c32875",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-354234614c06f6a659b37a9a02c26aa58ba20b78cca7e7a25e85609b6d869f3c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Com o menu do avatar aberto, a tecla Escape não o fecha: aria-expanded continua "true" e o menu segue visível.

Esperado: Escape deve fechar o menu e devolver o foco ao gatilho (padrão de menu/disclosure).

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `interação no navegador: Escape → aria-expanded=true, display=block` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-354234614c06f6a659b37a9a02c26aa58ba20b78cca7e7a25e85609b6d869f3c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-38064c0a954839e06589d086ed31e715c1b34ca7a06063467f9704ee4c152e8b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O menu do avatar, assim como o bloco do usuário, fica fora de qualquer landmark: é irmão do banner, não está dentro dele.

Esperado: Todo o conteúdo dentro de landmarks (ex.: o bloco do usuário dentro do header/banner).

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: region

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden


### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-126` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-38064c0a954839e06589d086ed31e715c1b34ca7a06063467f9704ee4c152e8b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-387956e0e24c85665f2de151df7ac9ed87a57fca529d06210e9ff738bc1880bc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Último <th scope="col"> (coluna de ações) vazio.

Esperado: Cabeçalho com texto (p.ex. "Ações").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: empty-table-header

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam · estado-nao-declarado: B-22 só existe(m) em detalhe, modal, e a alegação não declara passo nenhum

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>thead>tr>th:nth-of-type(9)" — <th>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>div>table>thead>tr>th:nth-of-type(3)" — <th> "Hora"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b7e530416a4355be7bcf78d035eaf9bd1ffb67d4420e5cb566793a700e04d842 — B-26 · inicial · cena 1280x900@inicial · <th>: Escalada E-04, origem: "autora" (decisão da escalada, 2026-10-01, D-61). O <th scope=col> da coluna de ações (9ª) não tem texto, aria-label nem filhos: as células de ação ficam associadas a um cabeçalho sem nome. O <th> da coluna de caixas (2ª) fica fora: contém um controle, e o defeito dele já é a B-06. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c62feb50f900d6f87ccab4739f0c322b7428a0be9887b106e56b9d0e280fb176 — B-22 · detalhe · cena 1280x900@modal · <table> "Status Data Hora Visualizado 06/03/2026 08:21:00": Tabela "Dados da Notificação" do detalhe (Status, Data, Hora) sem <caption>, aria-label nem aria-labelledby: nome acessível vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-317a40e02c10` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-185` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-387956e0e24c85665f2de151df7ac9ed87a57fca529d06210e9ff738bc1880bc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-38d17fa2f2acc306eef7629d6ec4e8c9f3a1912e3d2962a6f7231ae4c05f8e62

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>span" — <span> "Nenhum filtro de data aplicado"

### Unidades candidatas (não são crédito)

- U-294d06e9c9ac03ecc74fb602199737580e11736300a52c3df77daafce5eb8a3c — B-13 · inicial · cena 1280x900@inicial · <span> "Nenhum filtro de data aplicado": Etiqueta "Nenhum filtro de data aplicado" (br-tag primary-pastel-01 small): texto branco sobre #c5d4eb, 14 px peso 500 — contraste 1,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-38d17fa2f2acc306eef7629d6ec4e8c9f3a1912e3d2962a6f7231ae4c05f8e62",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-39237de1e2a475f03134c3c0ad8010af9ff0eca46c78e6b64db3e8a79217669f

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-28dabc8a49f3528f77fddf8a2abab3ce60b6f30b3339050c6377bd1baa2c1e7d — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-39237de1e2a475f03134c3c0ad8010af9ff0eca46c78e6b64db3e8a79217669f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3c09bc7a772b687a1f223b607fa39c5ebd4a24c61880035b1a846d2fe0667cd8

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone bell), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Notificar solicitante da vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3c09bc7a772b687a1f223b607fa39c5ebd4a24c61880035b1a846d2fe0667cd8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3cd66c2c6ea526375f7934f5a0b8501c8a0efaddc16664922bd785a1cf7da557

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Após uma busca sem resultados, aparece "Não há vistorias para exibir." num <p> sem role=status/aria-live e sem receber foco; também ocorre com "…nesse periodo selecionado" no filtro de data.

Esperado: A mensagem de resultado deve estar numa região de status (role="status"/aria-live="polite").

Janela: 1280×900 · interações desde o carregamento: 1. fill #search input = "zzzz" 2. press Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>p" — <p> "Busque e selecione a embarcação que deseja vincu"

### Unidades candidatas (não são crédito)

- U-481877d30106633e91c600afd8bd63dd50156a7e8b87608f720f917f60283052 — B-24 · modal · cena 1280x900@modal · <div> "Trocar embarcação da vistoria Busque e selecione": O br-modal "Trocar embarcação" (div.br-modal medium) não declara role dialog/alertdialog, aria-modal nem nome: a árvore de acessibilidade do Chromium não expõe nenhum diálogo quando ele está aberto. Só existe depois do clique em "Trocar embarcação da vistoria".
  - estados em que a unidade existe: modal
  - predicado de aceitação: atributos-ausentes sustenta em modal — nenhum destes atributos presente: role, aria-modal, aria-label, aria-labelledby. Medido: ausentes: role, aria-modal, aria-label, aria-labelledby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a1e04b93c057a4cf84a662046b003d90df9ca1cfe9e9c783133defa2a0bc8787 — B-27 · modal · cena 1280x900@modal · <div> "Trocar embarcação da vistoria Busque e selecione": Escalada E-06, origem: "autora" (decisão da escalada, 2026-10-01, D-61). Com o br-modal "Trocar embarcação" aberto, Tab sai do modal depois do último controle (Trocar) e percorre os botões do detalhe, o cabeçalho e o breadcrumb por trás do scrim antes de voltar: o foco não fica contido na Modal aberta. Só existe depois do clique em "Trocar embarcação da vistoria". Sem predicado na referência; medido por Tab real em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-020` → identificador devolvido por ferramenta (sem arquivo)
- `V-002 (confirmed)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3cd66c2c6ea526375f7934f5a0b8501c8a0efaddc16664922bd785a1cf7da557",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3d48ef61be9a4c3d998f2f712901b91f2edcd0b0b25cf6ea3d44b3809c5cb2cf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Na tela Agendar vistoria, o seletor do boleto ART ("Selecione o(s) arquivo(s)") é uma div clicável, sem foco nem papel; o input#boletoResponsabilidadeTecnica tem display:none e o <label> não está associado (sem for). O envio do arquivo obrigatório não funciona pelo teclado.

Esperado: Controle de upload focável e operável pelo teclado, com rótulo associado ao input.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR 2. click tbody tr:nth-child(1) br-button[icon="calendar"] (Agendar)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(6)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(3)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(4)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(5)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(6)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(7)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(8)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-017` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-018` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-019 (P-05)` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção DOM` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3d48ef61be9a4c3d998f2f712901b91f2edcd0b0b25cf6ea3d44b3809c5cb2cf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3e3c9475784b3a1a087af932f2d4ee0a1abbd9d720859c98564f5704dc061e7b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Contêiner com role="menu" não possui nenhum filho role=menuitem (contém div, span, hr e button simples).

Esperado: Papel menu apenas com itens menuitem, ou remover role=menu.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar #avatar-dropdown-trigger (Avatar com dropdown)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden


### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T13-03-44-773Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3e3c9475784b3a1a087af932f2d4ee0a1abbd9d720859c98564f5704dc061e7b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3fc35863dc2f1cc8edfcffa4fb88faecb8c1755fb54dcd12ef49ec09424bbb33

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-6341b4d0d71c65cc5e698aec6269b94450f2785ffa61177947917f532001448e — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3fc35863dc2f1cc8edfcffa4fb88faecb8c1755fb54dcd12ef49ec09424bbb33",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3ff2af63e18c7b6f01ff4a6d9756c8b8184e1c2c4d8f0287fbf21890d5d71c63

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Itens <li> da paginação aninhados diretamente dentro de outro <li> (4 ocorrências), estrutura de lista inválida exposta como listitem dentro de listitem.

Esperado: Um único nível de <li> por página na lista de paginação.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li" — <li> "1"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(3)>li" — <li> "2"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(4)>li" — <li> "3"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(5)>li" — <li> "4"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T12-55-33-043Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3ff2af63e18c7b6f01ff4a6d9756c8b8184e1c2c4d8f0287fbf21890d5d71c63",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4096a71a4be43ca548d7384a509c3ac86b900d1fbda820864b6a1acfe1f697c9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao fechar os diálogos abertos por Atribuir/Excluir/Notificar (Escape ou Cancelar), o foco vai ao body em vez de voltar ao botão; o mesmo ocorre no aviso "Preencha todos os campos obrigatórios".

Esperado: Foco devolvido ao controle que abriu o diálogo.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="user-plus"] (Atribuir vistoriador) 2. press Escape

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `V-003` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4096a71a4be43ca548d7384a509c3ac86b900d1fbda820864b6a1acfe1f697c9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-420704e2406f88fba6d497e1e242404b6fbcaa6db9347abcd5956d85b2141381

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Upload "Selecione o arquivo" (Boleto da ART) é div com ícone e <i>, sem elemento focável; input type=file com class d-none.

Esperado: Controle de arquivo focável e acionável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR (aba Agendar) 2. click tbody tr:nth-child(1) br-button[icon="calendar"] (Agendar) 3. click br-button[label="Editar"] (abre /editar-dados-vistoria/...3012)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(6)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(3)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(4)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(5)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(6)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(7)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(8)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-013` → identificador devolvido por ferramenta (sem arquivo)
- `P-19` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-420704e2406f88fba6d497e1e242404b6fbcaa6db9347abcd5956d85b2141381",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-42198cddee6f31b2a415c9e7869337dec9a30a7d2a99a1496b57d01cdc8fc538

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão de remover o filtro de data ('Exibindo vistorias de 25/03/2026 até 31/03/2026') só com ícone, sem nome acessível.

Esperado: Nome acessível (ex.: 'Remover filtro de data').

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. preencher data inicial 2026-03-25 3. preencher data final 2026-03-31

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:div.align-content-center > span.br-tag.interaction > button.br-button.inverted.circle" — Seletor não resolvido

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
  "cardId": "C-42198cddee6f31b2a415c9e7869337dec9a30a7d2a99a1496b57d01cdc8fc538",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4289b40544e452b331c051f83bde9fb5fc41de8b5e26fd0579cce714d2042a4f

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem nome acessível (br-button)

Esperado: Nome acessível não vazio — por conteúdo, aria-labelledby, aria-label ou title

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: wcag:4.1.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-0e3c3cd985ca9f31b3d3465ce348f80f17e37e60b54b2f8671135a6f5e75482f — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-7f3e0abf3655e5a4a709cc014a2b7d516cdb5ccdc9697e86aba1022d0e14db65 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4289b40544e452b331c051f83bde9fb5fc41de8b5e26fd0579cce714d2042a4f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-430d13214abb28f19bbd3ad4f8bfe6965e2164d7c1c94465e6950756d9463d25

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone user-times), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Atribuir vistoriador" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-430d13214abb28f19bbd3ad4f8bfe6965e2164d7c1c94465e6950756d9463d25",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-471f1cb0bc566a8a1044c10f1830df4ba58bb3b6c825edbd856a248a0d57ab91

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-4947f781cee61c8d4e34f8fd68e6068c6ba9186a16939eaf9993f0dab21ea6cc — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-471f1cb0bc566a8a1044c10f1830df4ba58bb3b6c825edbd856a248a0d57ab91",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-47a5d4cf63ade5b191db4d0c579545626257720af47879b5ab7ef5a180bb0c48

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Formulário de edição: nenhum dos 24 rótulos indica obrigatoriedade; só após Salvar aparece "Campo obrigatório".

Esperado: Campos obrigatórios identificados antes do envio.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR (aba Agendar) 2. click tbody tr:nth-child(1) br-button[icon="calendar"] (Agendar) 3. click br-button[label="Editar"] (abre /editar-dados-vistoria/...3012)

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input[formcontrolname=\"nomeEmbarcacao\"]" — Seletor não resolvido

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
  "cardId": "C-47a5d4cf63ade5b191db4d0c579545626257720af47879b5ab7ef5a180bb0c48",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-484b2267cfcbb365c72bbd396ff2136f1a87d273d0a1b53e143a67340b65d8d1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Não há âncoras/links de salto ("Ir para o conteúdo", "Ir para o menu") no início da página; nenhum a[href^="#"] no documento.

Esperado: Âncoras no topo da página para os blocos de conteúdo principais, como recomenda o e-MAG.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.5

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>main" — <main> "Vistorias Exportar Vistorias Agendar Tramitando "

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main" — <main> "Programa Nacional de Regularização de Embarcação"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main" — <main> "Programa Nacional de Regularização de Embarcação"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `inspeção DOM: 0 links de salto` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-484b2267cfcbb365c72bbd396ff2136f1a87d273d0a1b53e143a67340b65d8d1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-498cc07f531d7980f50aa3847849116680efc373110f99ca989b2b80546d3727

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <li> elements must be contained in a <ul> or <ol>

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:listitem

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(5)>li" — <li> "4"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-498cc07f531d7980f50aa3847849116680efc373110f99ca989b2b80546d3727",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4a4c3b15a1b510db95f028f9b6178ef10dc21a37bb93d3962ff64a4df6106847

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Detalhe da vistoria Tramitando: não há h1 nem h2; o primeiro título é o h3 "Programa Nacional de Regularização de Embarcação de Pesca", seguido de h4.

Esperado: Hierarquia de títulos com h1 principal, sem pular níveis.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[icon="eye"] (aba Tramitando)

Regra declarada: page-has-heading-one

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-168` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4a4c3b15a1b510db95f028f9b6178ef10dc21a37bb93d3962ff64a4df6106847",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4b451200e45021e1f7bf2e37edb11ef74fe289db4de21f0d6e929b0565967918

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone trash), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Excluir vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4b451200e45021e1f7bf2e37edb11ef74fe289db4de21f0d6e929b0565967918",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4bdff6e04dca9f9997d05e99944368d09ee047a8bc6c209dd42dc2a8adf0e877

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Detalhe agendada: etiqueta "Aguarda preenchimento" #ffffff sobre #888888, 14px, contraste 3,54:1.

Esperado: Contraste mínimo 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3028)

Regra declarada: color-contrast

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(4)>div:nth-of-type(1)>div:nth-of-type(2)>div>div>div" — <div> "0%"

### Unidades candidatas (não são crédito)

- U-47e455721d9db772bfcf9d81fb3760168dc6269c6849d5348ccb5207c5570bb1 — B-23 · detalhe · cena 1280x900@modal · <div> "0%": Indicador "0%" do detalhe: texto branco (text-secondary-01) sobre #888 (bg-secondary-06), 14 px peso 400 — contraste 3,54:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-8087cbe1db3f` → identificador devolvido por ferramenta (sem arquivo)
- `F-107` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4bdff6e04dca9f9997d05e99944368d09ee047a8bc6c209dd42dc2a8adf0e877",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4ca690420f4fe69e69903f38c3dc1ffc3a3886f9e1f756db6d9eed2b90d32332

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A aba ativa ('Tramitando') é indicada apenas pela classe .active no <li>; botões sem aria-selected/aria-current nem role=tab.

Esperado: Estado selecionado exposto programaticamente (role=tab + aria-selected ou aria-current).

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(1)>button" — <button#AGENDAR> "Agendar"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>button" — <button#TRAMITANDO> "Tramitando"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(3)>button" — <button#HISTORICO> "Concluídos"

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
  "cardId": "C-4ca690420f4fe69e69903f38c3dc1ffc3a3886f9e1f756db6d9eed2b90d32332",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4dda996aabbefa439e61d19c45086c0e7faee28cd1fc02a6a577ff9d06a28ac2

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Buttons must have discernible text

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:button-name

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-4f081c926e22051c0886a1266c2cedaef9f77dc4fcd663cbe7a2deb4e5217557 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2a0cc2aaaa329c1ee52c5e557a86f1e37849ffca60ba55cebf674a57ca12786 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4dda996aabbefa439e61d19c45086c0e7faee28cd1fc02a6a577ff9d06a28ac2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4ee145fd9b7965cae198ba53c19fbe80f014806013c3eda73936d08e35b29b6f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ícone de lixeira ao lado de 'boleto.pdf' abre confirmação 'Você tem certeza que deseja remover o boleto?' ao clicar, mas não é focável e não tem role nem nome.

Esperado: Botão focável com nome (ex.: 'Remover boleto').

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar botão olho (br-button[icon="eye"]) da linha 1 'Coral Mansa IV' (aba Tramitando) 3. clicar 'Editar' em Dados da vistoria

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-icon-base[icon-name=\"trash\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T12-58-43-426Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4ee145fd9b7965cae198ba53c19fbe80f014806013c3eda73936d08e35b29b6f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-51a374617be5dba86433f55ef882527de48f80cb31971e50cf7cd4f6b72976eb

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone user-times), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Atribuir vistoriador" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-51a374617be5dba86433f55ef882527de48f80cb31971e50cf7cd4f6b72976eb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-522c2ac7c1fddf69682d3e71be3c540606f2a74c978e616898f4e9e37913d2b1

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: margin: -38px 4px 0px 0px (fora da escala: -38px)

Esperado: Múltiplos de 4px

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>button" — <button> "Buscar"

### Unidades candidatas (não são crédito)

- U-3993a821217adf04163bb635bbef658eeedd7f545eec0c26ed68d7166e39e8f6 — B-09 · inicial · cena 1280x900@inicial · <button> "Buscar": Botão "Buscar" da busca: button.br-button só com ícone (lupa), 32×32, sem a classe circle — sem rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-cc6c46e167e0d20868ba66ed04918cd88020fedbf3ffcdb7395251824f07d313 — B-28 · inicial · cena 1280x900@inicial · <button> "Buscar": Escalada E-07, origem: "autora" (decisão da escalada, 2026-10-01, D-61). O botão de ícone "Buscar", montado pelo app fora do br-input, mede 32×32 px: abaixo da área de toque de 48×48. Tamanhos padrão do DS (br-button de 40 px, Menu e Home dos web components, paginação) ficam como fundo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-522c2ac7c1fddf69682d3e71be3c540606f2a74c978e616898f4e9e37913d2b1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-522d6e5949297e541988218fefc9c9ca833dd7bb45687cd9e2441121ab70a312

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: "Data da vistoria:" e "até" com font-size inline 18px, fora da escala (passo mais próximo 16,8px).

Esperado: Tamanho da escala tipográfica do DS.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>span:nth-of-type(1)" — <span> "Data da vistoria:"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>span:nth-of-type(2)" — <span> "até"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `O-01` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-522d6e5949297e541988218fefc9c9ca833dd7bb45687cd9e2441121ab70a312",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-52a8dea5b993c9a82ab9be8fbf924124420a3d5972852c13ae758151564311d5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao ativar 'Atribuir vistoriador' pelo teclado (Enter) e fechar o diálogo com Esc, o foco vai para <body> em vez de voltar ao botão.

Esperado: Foco devolvido ao controle que abriu o diálogo.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. focar checkbox da linha 1 3. Tab (foco em Atribuir vistoriador) 4. Enter 5. Escape

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
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
  "cardId": "C-52a8dea5b993c9a82ab9be8fbf924124420a3d5972852c13ae758151564311d5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-538fd039aa6be5c6690156c959471e225879c19b5260441eda053c0b99ff280e

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-3fe5e8cc28ad339c48044f5f6514da4499172e643dc7133757f61235be604ffb — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-538fd039aa6be5c6690156c959471e225879c19b5260441eda053c0b99ff280e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5395dfc4f17dc179b1e57907f201e402052632ab499e727d1bc291dccacff609

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Único cabeçalho da página é h2 'Vistorias'; não há h1.

Esperado: Hierarquia de cabeçalhos iniciando em h1.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: emag:1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(1)>h2" — <h2> "Vistorias"

### Unidades candidatas (não são crédito)

- U-7417abf3b736412929e5aac6c0f8edf05a3bee20d5a3aa4fee840137b342a4cd — B-02 · inicial · cena 1280x900@inicial · <h2> "Vistorias": Lista de vistorias: o único título da página é um <h2> "Vistorias"; não há nenhum <h1> (light DOM e shadow roots). A hierarquia começa no nível 2. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
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
  "cardId": "C-5395dfc4f17dc179b1e57907f201e402052632ab499e727d1bc291dccacff609",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-54dfa65b9d935a447ff137b826c6cb93d5db58c12c0c76ba69fa066054645ebf

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone user-times), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Atribuir vistoriador" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-54dfa65b9d935a447ff137b826c6cb93d5db58c12c0c76ba69fa066054645ebf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-574b31ae3404c1ad20f169acc1440a5c31e39b52e187aa16ce78414f545e61d6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Detalhe da vistoria NAO COMPARECIMENTO: "boleto.pdf" é um <strong> com cursor:pointer, usado como link de arquivo, sem foco nem papel.

Esperado: Link ou botão nativo focável para abrir o boleto.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(1) br-button[icon="eye"] (situação NAO COMPARECIMENTO)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>strong" — <strong> "boleto.pdf"
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>pnip-propesc-nao-comparecimento>div>div:nth-of-type(3)>div>div>div>div>div>strong" — <strong> "v3046-campo2-1.jpg"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>strong" — <strong> "boleto.pdf"
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo57-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo58-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo59-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo65-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(6)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo66-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo60-1.pdf" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção DOM: tabIndex=-1` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-574b31ae3404c1ad20f169acc1440a5c31e39b52e187aa16ce78414f545e61d6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-57b80d382ffce81f68088d8ed5b8ac35ab3ef651454f1e9a75fc01b515f60de7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Inicial "U" do avatar: #ffffff sobre #ff8c00, 24,19px bold (texto grande), contraste 2,33:1.

Esperado: Contraste mínimo 3:1 para texto grande.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"


### Unidades candidatas (não são crédito)

- U-0da734102116cfb16ecf375cff41bd3bee78f5a433e685539c6b5fb80a03d037 — B-14 · sempre · cena 1280x900@modal · <span> "U": Inicial do avatar no cabeçalho do app (span.content bg-orange-vivid-30 text-pure-0): "U" branco sobre #ff8c00, 24,2 px peso 700 — contraste 2,33:1 (abaixo também dos 3:1 de texto grande). Presente em todas as paradas. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-57b80d382ffce81f68088d8ed5b8ac35ab3ef651454f1e9a75fc01b515f60de7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-58c4a44bb1800e036f6348a6bdb364107a65bd84e7fbe3745cd62fed949bc33d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Diálogo do Laudo: o diálogo modal que mostra o PDF tem aria-labelledby="swal2-title", mas o título está oculto e vazio: o diálogo fica sem nome acessível.

Esperado: O diálogo deve ter nome acessível (ex.: "Laudo da vistoria").

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(1) br-button[icon="eye"] 3. click br-icon-base[icon-name="file"] (Laudo)

Regra declarada: aria-dialog-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-163` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-58c4a44bb1800e036f6348a6bdb364107a65bd84e7fbe3745cd62fed949bc33d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5b7573d8583bd863802d81be6528426ad4ebe9c571feea5ea21e80397eaeadde

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Valores de telefone em inputs desabilitados ficam cortados (scrollWidth 170/171 > clientWidth 163; ex.: '(00) 9-1095-915…'), sem tooltip e sem possibilidade de rolar por estarem desabilitados.

Esperado: Valor exibido por completo.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar página 2 na paginação 3. clicar botão olho da linha 7 'Aurora Veloz' (Não comparecimento)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(5)>div:nth-of-type(3)>br-input" — <br-input>
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(6)>div:nth-of-type(3)>br-input" — <br-input>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(5)>div:nth-of-type(3)>br-input" — <br-input>
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(6)>div:nth-of-type(3)>br-input" — <br-input>


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T13-01-09-011Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5b7573d8583bd863802d81be6528426ad4ebe9c571feea5ea21e80397eaeadde",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5cdc8044e8acc6737b30d3d70fef732d20f3dd236e077b538a0f9c9c96710ebb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao ativar o link "2" da paginação, a tabela muda para os itens 11–20 e o foco vai para <body>, perdendo a posição na paginação.

Esperado: O foco deve ficar no controle de paginação ativado ou ir para um ponto lógico (início da tabela).

Janela: 1280×900 · interações desde o carregamento: 1. click link "2" da paginação

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(3)>li>a" — <a> "2"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(4)>li>a" — <a> "3"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(5)>li>a" — <a> "4"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-022 (focus=null após o clique)` → identificador devolvido por ferramenta (sem arquivo)
- `interação no navegador: activeElement=BODY` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5cdc8044e8acc6737b30d3d70fef732d20f3dd236e077b538a0f9c9c96710ebb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5cef0c830ce452593c7d3a4045982505de0e2e06745943799e9625bee7ee9306

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Botão 'Menu' do cabeçalho (data-target="#main-navigation") não abre nada: não existe #main-navigation e não há mudança no DOM nem aria-expanded após o clique.

Esperado: Botão de menu que abra a navegação principal (ou removido se não houver menu).

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar 'Menu'

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>br-header" — <br-header>


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T13-04-26-092Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5cef0c830ce452593c7d3a4045982505de0e2e06745943799e9625bee7ee9306",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5d1dc79f462c22c39efb32498b19cf95a72c128563755c8b4f2b39115a704d9a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Status "Vistoria agendada": #ffffff sobre #4f97d1 (bg-blue-40), 14px peso 500, contraste 3,14:1.

Esperado: Contraste mínimo 4,5:1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: color-contrast

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-16826af28e0996f408c83115a4435f7af40ac4cc53bf08f36e9dbbac871436f1 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-28dabc8a49f3528f77fddf8a2abab3ce60b6f30b3339050c6377bd1baa2c1e7d — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-31b4d9ec28350f49ebccde7fa4125d03c35bef0f8509b31c305a4335353bcd3a — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-378ca27cdcd3ddaeff869d2dc65fb85c2dbae1863257673c49fff068452ab683 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3fe5e8cc28ad339c48044f5f6514da4499172e643dc7133757f61235be604ffb — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4947f781cee61c8d4e34f8fd68e6068c6ba9186a16939eaf9993f0dab21ea6cc — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8188a105d675aa0dc47295d0aa263c5574ae6994c59e058e2a0f7b8c4ed890e2 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-82a357f4dc0d11ac01d09f3785422081482a834ab5bd069e99d1823aec324264 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c94d9504d7c2bb1c534d9c85744bbbbe2810353f383044b076a2d9255c2b7e75 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f07a8ab3363a61b30ea8baef943842cb2689f88dfed8b214272ef7c0fe9ad32e — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-6f09a43253c2` → identificador devolvido por ferramenta (sem arquivo)
- `F-061` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5d1dc79f462c22c39efb32498b19cf95a72c128563755c8b4f2b39115a704d9a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5d42c2413965584cb1c21db34c11601ac3be8f626ed5d894619c46581cd3b493

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Ícone de saída (exit-icon.png) sem atributo alt dentro do botão 'Sair'.

Esperado: alt="" (decorativo) ou texto alternativo.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar #avatar-dropdown-trigger (Avatar com dropdown)

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>div>button>img" — <img>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9bc6e7a1ad04bfa95826d4923672ddd61d6dec27b94086ecea975dbb3ea09d60 — B-16 · detalhe-menu · cena 1280x900@detalhe-menu · <img>: Ícone do botão "Sair" do menu do avatar (<img src="../../../assets/images/exit-icon.png">) sem atributo alt — nem texto alternativo nem alt vazio de imagem decorativa.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: atributos-ausentes sustenta em detalhe-menu — nenhum destes atributos presente: alt. Medido: ausentes: alt
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9c7e2ca111d2c9a7961c1ee8e3072a064ed3c2f32391f51ce2f7fc92f0cbd327 — B-18 · detalhe-menu · cena 1280x900@detalhe-menu · <button> "Sair": Botão "Sair" do menu do avatar fora do padrão HTML: tem atributo href (inexistente em <button>) e contém um <p>, conteúdo de fluxo que o modelo de conteúdo de <button> não admite. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
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
  "cardId": "C-5d42c2413965584cb1c21db34c11601ac3be8f626ed5d894619c46581cd3b493",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5d732e9b089cf0d94926a470f2f209c32c1e3720f4b0fd0a2835985485e3be80

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As caixas de seleção das 10 linhas não têm nome acessível.

Esperado: Cada caixa deve ter nome que identifique a linha (ex.: "Selecionar Coral Mansa IV").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: label

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-07d2b621292b581da4954c5639be7a8609cf001aa47f0b34539dc3947e0274dc — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-0b56e5b10f4881a7605386c84f28bbcd225b3a6127a73c212dad3d0d8c45a4e5 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-19ca16582dcc40a9305397b4cebe70cf60687de565533ab4f4d5de3991446b95 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2b33b7eba5e9c5af4e4fbea1a344d0a19086aa2b6a02cb38d30d56d8de042000 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-47b56f8da889530a10d5db47459e51252e664d92a5cadf585b1a90afb15ed1c1 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4e1a48a085fa1848925675355c50a9f84de93f9ffbc1e0fb5f4f22caaf7a6bfa — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6341b4d0d71c65cc5e698aec6269b94450f2785ffa61177947917f532001448e — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-80d427f0aba5699380a544bbe2c85dbca2b581b8471d21c72c60691c2e9c6636 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a80ba4fa0e4e8dcc3209bd5f984d110e3d9b52df1b836a9579647be5634914aa — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f9f3d45544d87746e9a1c7094a4cc62f5d90ef5f8242736a83ca2bd7164880a8 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-027..F-036` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5d732e9b089cf0d94926a470f2f209c32c1e3720f4b0fd0a2835985485e3be80",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5d7758e985a06307c6a00aebc34cd4382eb77c7118bb6b56482690122165e881

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Rota 3069: nenhum .br-footer nem <br-footer>.

Esperado: Rodapé do modelo de página do DS presente.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO (aba Concluídos) 2. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3069)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-e20386012f15` → identificador devolvido por ferramenta (sem arquivo)
- `F-198` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5d7758e985a06307c6a00aebc34cd4382eb77c7118bb6b56482690122165e881",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5e58cd608a722540cb4ad50244db567704dd5368a34811664b21d29e79006a3a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Checkboxes de seleção (cabeçalho e um por linha) sem <label>, aria-label ou aria-labelledby: nome acessível vazio.

Esperado: Cada checkbox com nome (p.ex. "Selecionar todas" / "Selecionar vistoria <nome>").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: label

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>thead>tr>th:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-07d2b621292b581da4954c5639be7a8609cf001aa47f0b34539dc3947e0274dc — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-0b56e5b10f4881a7605386c84f28bbcd225b3a6127a73c212dad3d0d8c45a4e5 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-19ca16582dcc40a9305397b4cebe70cf60687de565533ab4f4d5de3991446b95 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2b33b7eba5e9c5af4e4fbea1a344d0a19086aa2b6a02cb38d30d56d8de042000 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-47b56f8da889530a10d5db47459e51252e664d92a5cadf585b1a90afb15ed1c1 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4e1a48a085fa1848925675355c50a9f84de93f9ffbc1e0fb5f4f22caaf7a6bfa — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-50a27493b185c0bbb0179208240a74e28e88df151508b8845c55406c1030426e — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6341b4d0d71c65cc5e698aec6269b94450f2785ffa61177947917f532001448e — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-80d427f0aba5699380a544bbe2c85dbca2b581b8471d21c72c60691c2e9c6636 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a80ba4fa0e4e8dcc3209bd5f984d110e3d9b52df1b836a9579647be5634914aa — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f9f3d45544d87746e9a1c7094a4cc62f5d90ef5f8242736a83ca2bd7164880a8 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-a0656be768b2` → identificador devolvido por ferramenta (sem arquivo)
- `F-075` → identificador devolvido por ferramenta (sem arquivo)
- `F-076` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5e58cd608a722540cb4ad50244db567704dd5368a34811664b21d29e79006a3a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5e5ff04f1b9b677f9fcf8181aede11125c21e9881c02669052bdcc851c22f1f2

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone bell), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Notificar solicitante da vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5e5ff04f1b9b677f9fcf8181aede11125c21e9881c02669052bdcc851c22f1f2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5ec2e8344f817bec33ccec817ace04e7029100bd4f0dd2a797c0f8c2ee7f561a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Abas Agendar/Tramitando/Concluídos: a ativa só é indicada pela classe "active" no <li>; botões sem aria-selected, aria-current ou role=tab.

Esperado: Estado selecionado exposto programaticamente.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(1)>button" — <button#AGENDAR> "Agendar"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>button" — <button#TRAMITANDO> "Tramitando"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(3)>button" — <button#HISTORICO> "Concluídos"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5ec2e8344f817bec33ccec817ace04e7029100bd4f0dd2a797c0f8c2ee7f561a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5f1db790db72eaf2e2a5e7708fbe2fb8b9fbbe58a7dfb20bb1d99a6eb6c0dbeb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: <title> do detalhe /agendar-vistoria/…3028 é "PNIP", igual ao da lista.

Esperado: Título descritivo da página de detalhe.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3028)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|head>title" — <title> "PNIP" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-e1239ce061b0c926934b48cceda66c38d7b969c5195af4c3d94462c25ca91b88 — B-25 · sempre · cena 1280x900@modal · <title> "PNIP": Escalada E-01, origem: "autora" (decisão da escalada, 2026-10-01, D-61). O <title> é "PNIP" nas quatro paradas (lista, dois detalhes, modal): nomeia só o sistema, não muda entre rotas e não representa o conteúdo principal ("Vistorias", o detalhe de uma vistoria). Âncora não renderizada por natureza (elemento do <head>). Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-38885b4f8e0f` → identificador devolvido por ferramenta (sem arquivo)
- `F-109` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5f1db790db72eaf2e2a5e7708fbe2fb8b9fbbe58a7dfb20bb1d99a6eb6c0dbeb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5f94289a09fab7451e55f062d3c9adffc93e164a446530719a6d2c2e2d8ced74

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: <object type="application/pdf" data="blob:…"> sem title, aria-label ou alternativa.

Esperado: Nome/alternativa textual para o objeto.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3028) 2. click strong "boleto.pdf"

Regra declarada: object-alt

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-c8734f438e54` → identificador devolvido por ferramenta (sem arquivo)
- `F-144` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5f94289a09fab7451e55f062d3c9adffc93e164a446530719a6d2c2e2d8ced74",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5ff7f4ecdeab6adab5fc8641c9fdf56dfae926c172eb75a9f06712e4d7b485d0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A página de listagem não tem h1; o primeiro título é o h2 "Vistorias".

Esperado: A página deve ter um título principal h1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: page-has-heading-one

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-041` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5ff7f4ecdeab6adab5fc8641c9fdf56dfae926c172eb75a9f06712e4d7b485d0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6062872fcd7b8b327d9a4733a6e8838f87184358015dfeb73148c3ef4e7a9dde

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: Certain ARIA roles must contain particular children

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: axe:aria-required-children

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S"

### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6062872fcd7b8b327d9a4733a6e8838f87184358015dfeb73148c3ef4e7a9dde",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6170848d385d732438f3a125919d523f11931bd9e84f6ad123c5f2845c1e643e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Pré-visualização do upload na tela Agendar vistoria: o diálogo modal que mostra o PDF tem aria-labelledby="swal2-title", mas o título está oculto e vazio: o diálogo fica sem nome acessível.

Esperado: O diálogo deve ter nome acessível (ex.: "Laudo da vistoria").

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR 2. click tbody tr:nth-child(1) br-button[icon="calendar"] 3. upload #boletoResponsabilidadeTecnica foto.png image/png

Regra declarada: aria-dialog-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-019` → identificador devolvido por ferramenta (sem arquivo)
- `F-216` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6170848d385d732438f3a125919d523f11931bd9e84f6ad123c5f2845c1e643e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-638214766e7efedd93ca79d0248726c0d522cd36a461d6e44d9f41f1dfe5ab43

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Texto 'Vistoria agendada' branco (#FFFFFF) sobre rgb(79,151,209), 14px peso 500: contraste ≈3,1:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-16826af28e0996f408c83115a4435f7af40ac4cc53bf08f36e9dbbac871436f1 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-28dabc8a49f3528f77fddf8a2abab3ce60b6f30b3339050c6377bd1baa2c1e7d — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-31b4d9ec28350f49ebccde7fa4125d03c35bef0f8509b31c305a4335353bcd3a — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-378ca27cdcd3ddaeff869d2dc65fb85c2dbae1863257673c49fff068452ab683 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3fe5e8cc28ad339c48044f5f6514da4499172e643dc7133757f61235be604ffb — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4947f781cee61c8d4e34f8fd68e6068c6ba9186a16939eaf9993f0dab21ea6cc — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8188a105d675aa0dc47295d0aa263c5574ae6994c59e058e2a0f7b8c4ed890e2 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-82a357f4dc0d11ac01d09f3785422081482a834ab5bd069e99d1823aec324264 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c94d9504d7c2bb1c534d9c85744bbbbe2810353f383044b076a2d9255c2b7e75 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f07a8ab3363a61b30ea8baef943842cb2689f88dfed8b214272ef7c0fe9ad32e — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
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
  "cardId": "C-638214766e7efedd93ca79d0248726c0d522cd36a461d6e44d9f41f1dfe5ab43",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-63ac8543af8f454a2e91d566ab8eee165f7b4f872ae26bfaba8be64f78f8d5c6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Inputs date (#br-input-8 e #br-input-9 no shadow DOM) sem label; o texto 'Data da vistoria:' e 'até' são <span> não associados; nome acessível vazio.

Esperado: Campos de data com rótulos programaticamente associados (ex.: 'Data inicial da vistoria', 'Data final').

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>br-input:nth-of-type(1)" — <br-input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>br-input:nth-of-type(2)" — <br-input>

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
  "cardId": "C-63ac8543af8f454a2e91d566ab8eee165f7b4f872ae26bfaba8be64f78f8d5c6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-63e8c30713a526342d516ce37050b0c44991ebcf36ce7edaae410c2629940cec

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Após Salvar com "Nome da embarcação" vazio: 4 mensagens role=alert "Campo obrigatório" fora do br-input; o input interno não recebe aria-invalid nem aria-describedby.

Esperado: aria-invalid=true e mensagem associada por aria-describedby.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR (aba Agendar) 2. click tbody tr:nth-child(1) br-button[icon="calendar"] (Agendar) 3. click br-button[label="Editar"] (abre /editar-dados-vistoria/...3012) 4. fill br-input[label="Nome da embarcação"] input = "" 5. click br-button[label="Salvar"] 6. click .swal2-confirm "OK, entendi"

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input.ng-invalid" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `V-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-63e8c30713a526342d516ce37050b0c44991ebcf36ce7edaae410c2629940cec",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6514dd319999cec1bdfca853675721e88570ab73991886809c5997864035892b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Detalhe preenchida: anexos "v3037-campo58-1.pdf", "v3037-campo65-1.pdf", "v3037-campo66-1.pdf", "v3037-campo60-1.pdf" e "boleto.pdf" são <strong> clicáveis sem role nem tabindex.

Esperado: Links/botões nativos operáveis por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. click pnip-filter-panel span.br-tag "Cidade" 2. click opção "Barra Nova" 3. click tbody tr:nth-child(4) br-button[icon="eye"] (Vistoria preenchida, /agendar-vistoria/...3037) 4. click br-button[label="Mostrar"] (1º)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>strong" — <strong> "boleto.pdf"
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>pnip-propesc-nao-comparecimento>div>div:nth-of-type(3)>div>div>div>div>div>strong" — <strong> "v3046-campo2-1.jpg"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>strong" — <strong> "boleto.pdf"
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo57-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo58-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo59-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo65-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(6)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo66-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo60-1.pdf" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
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
  "cardId": "C-6514dd319999cec1bdfca853675721e88570ab73991886809c5997864035892b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-65cae4956d7ec650991be4b2ca10c42df2347582472cd91406c29f5f3660e90b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Botão "Sair" com border-radius 20px (fora da escala).

Esperado: Raio da escala do DS.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger (Avatar com dropdown)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>div>button" — <button> "Sair" · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>div>button" — <button> "Sair"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>div>button" — <button> "Sair" · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9c7e2ca111d2c9a7961c1ee8e3072a064ed3c2f32391f51ce2f7fc92f0cbd327 — B-18 · detalhe-menu · cena 1280x900@detalhe-menu · <button> "Sair": Botão "Sair" do menu do avatar fora do padrão HTML: tem atributo href (inexistente em <button>) e contém um <p>, conteúdo de fluxo que o modelo de conteúdo de <button> não admite. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-9dd198444e61` → identificador devolvido por ferramenta (sem arquivo)
- `F-093` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-65cae4956d7ec650991be4b2ca10c42df2347582472cd91406c29f5f3660e90b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-65f7b6ecc6a073a9543bd36eb195722122a5c6e8c43527faeb33ae5d013064cd

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone user-times), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Atribuir vistoriador" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-65f7b6ecc6a073a9543bd36eb195722122a5c6e8c43527faeb33ae5d013064cd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-66a91cad6a4f05ae0723a944655ce476f6bf03ec052693d218e97e1aabaf888a

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-2b33b7eba5e9c5af4e4fbea1a344d0a19086aa2b6a02cb38d30d56d8de042000 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-66a91cad6a4f05ae0723a944655ce476f6bf03ec052693d218e97e1aabaf888a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6747db16b543f49b3529f488aa265a216fdfe55cb8ded01de61f9695503dcef2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Título do documento é apenas 'PNIP' na lista, no detalhe, na edição e na Home.

Esperado: Título que descreva a página (ex.: 'Vistorias - PNIP').

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:2.4.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|head>title" — <title> "PNIP" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-e1239ce061b0c926934b48cceda66c38d7b969c5195af4c3d94462c25ca91b88 — B-25 · sempre · cena 1280x900@modal · <title> "PNIP": Escalada E-01, origem: "autora" (decisão da escalada, 2026-10-01, D-61). O <title> é "PNIP" nas quatro paradas (lista, dois detalhes, modal): nomeia só o sistema, não muda entre rotas e não representa o conteúdo principal ("Vistorias", o detalhe de uma vistoria). Âncora não renderizada por natureza (elemento do <head>). Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
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
  "cardId": "C-6747db16b543f49b3529f488aa265a216fdfe55cb8ded01de61f9695503dcef2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-67fd3aa7f265fd2d9b21886d43a4ee02810fec290c1f8cb3bd5c72f0774ee18b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo 'Atribuir Vistoriador' o <select> não tem label, aria-label nem aria-labelledby; o texto 'Selecione um Vistoriador' não está associado.

Esperado: Select com nome acessível associado.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar 'Atribuir vistoriador' da linha 2

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-select" — Seletor não resolvido

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
  "cardId": "C-67fd3aa7f265fd2d9b21886d43a4ee02810fec290c1f8cb3bd5c72f0774ee18b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6b6c9dceecf4689e1a288fe957c7c9b066ba20e6d45e0b5971a4c2339e1882e8

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Buttons must have discernible text

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:button-name

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-0110934d42ae3ae66442d691b2b20b23d9d07ce6f4c4c8aa8480df203d202125 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-13a157c9b6a196ee3914cb6bc301202d68f0f7a52f693739e9bc9a8f1789cfcc — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6b6c9dceecf4689e1a288fe957c7c9b066ba20e6d45e0b5971a4c2339e1882e8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6b7800cbb5d1e0bc75e673b53a3dda759f3bdeff1d1e13105678aa1e95dcce30

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Nenhum elemento .br-footer nem web component <br-footer> no documento (DOM claro e shadow roots abertos).

Esperado: Uma Área de Rodapé com o componente Footer (.br-footer ou <br-footer>), como o modelo de página do DS exige.

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6b7800cbb5d1e0bc75e673b53a3dda759f3bdeff1d1e13105678aa1e95dcce30",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6c4463c58786d549b9ba37034d0ff4e6b6f4ac029cc0b166275a54156a9d9797

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: margin: -5px 0px 0px (fora da escala: -5px)

Esperado: Múltiplos de 4px

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(5)>button" — <button> "Limpar Filtro"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6c4463c58786d549b9ba37034d0ff4e6b6f4ac029cc0b166275a54156a9d9797",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6e5daf95990935f361c5f7acb3875ce74511d39b1d40905156a6f277279238d6

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem nome acessível (br-button)

Esperado: Nome acessível não vazio — por conteúdo, aria-labelledby, aria-label ou title

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: wcag:4.1.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-4f081c926e22051c0886a1266c2cedaef9f77dc4fcd663cbe7a2deb4e5217557 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a2a0cc2aaaa329c1ee52c5e557a86f1e37849ffca60ba55cebf674a57ca12786 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6e5daf95990935f361c5f7acb3875ce74511d39b1d40905156a6f277279238d6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-711927e683a86711539aed3488ff448766ba5fdd11ab9793a48f29d4d6a16c5e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A inicial "U" do avatar é texto #ffffff sobre #ff8c00 (24,19px, peso 700): contraste de 2,33:1.

Esperado: Contraste mínimo de 3:1 para texto grande.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>button>span:nth-of-type(1)>span" — <span> "U"


### Unidades candidatas (não são crédito)

- U-0da734102116cfb16ecf375cff41bd3bee78f5a433e685539c6b5fb80a03d037 — B-14 · sempre · cena 1280x900@modal · <span> "U": Inicial do avatar no cabeçalho do app (span.content bg-orange-vivid-30 text-pure-0): "U" branco sobre #ff8c00, 24,2 px peso 700 — contraste 2,33:1 (abaixo também dos 3:1 de texto grande). Presente em todas as paradas. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001 P-01 (contrast-incomplete, ratio 2.33)` → identificador devolvido por ferramenta (sem arquivo)
- `medição: color rgb(255,255,255), bg rgb(255,140,0)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-711927e683a86711539aed3488ff448766ba5fdd11ab9793a48f29d4d6a16c5e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-716cbeed303236a5f3f799a56b14b124d3062c301bdf453b28619e6a2b31b110

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As opções do filtro aberto (ex.: Cidade: "Areia Branca do Leste" … "Vila do Farol") são <label> dentro de div.br-radio, sem <input type="radio"> associado: não recebem foco, não têm papel nem estado de seleção.

Esperado: Opções focáveis e operáveis pelo teclado, com papel (radio/option) e estado selecionado expostos.

Janela: 1280×900 · interações desde o carregamento: 1. click span.br-tag "Cidade" (pnip-filter-panel)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel .br-list .br-radio label" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção DOM: hasInput=false, tabIndex=-1` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-716cbeed303236a5f3f799a56b14b124d3062c301bdf453b28619e6a2b31b110",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-71af599671006ec5193488315060c00760c3c69505c90c8d2e19076f699a4718

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem nome acessível (br-button)

Esperado: Nome acessível não vazio — por conteúdo, aria-labelledby, aria-label ou title

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: wcag:4.1.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-02eacb6cd7eb8dedefea92feb5039dd63e1b11239e1984b948668c20a2629c38 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4e50ada7ea0559d48e3cbb150ecbb78d2afbb5cec4cbd286c632cc311c6895cb — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-71af599671006ec5193488315060c00760c3c69505c90c8d2e19076f699a4718",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-71d576199aa2fa45becd4fe705d7f677b9fd88e0bd39b19dc7f6e7c9aad147be

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Link da página atual só tem a classe "active"; sem aria-current="page".

Esperado: aria-current="page" na página atual.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"

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
  "cardId": "C-71d576199aa2fa45becd4fe705d7f677b9fd88e0bd39b19dc7f6e7c9aad147be",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7231cb1eae9b7b1858720cebfa30a6f517ec65fc99d3036847dafc39e67b4735

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botões de ação da linha (atribuir, ver, excluir, notificar, voltar para AGENDADA) são br-button secundários retangulares só com ícone, sem rótulo visível e sem o tipo circle.

Esperado: Botão só com ícone no tipo circular do DS (com aria-label) ou com rótulo visível.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-f6561ecf892f` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-f8d0bbb8e1b2` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-0147f8a07fca` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-39a4fbfceeea` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-a5a7f2a1a2c8` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7231cb1eae9b7b1858720cebfa30a6f517ec65fc99d3036847dafc39e67b4735",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-725adbe8a251a9b901df6a0d41b9e60777f9471389ffd3188c058a84bfd25628

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os dois campos de data do filtro (#br-input-8 e #br-input-9 no shadow do br-input) não têm rótulo associado; "Data da vistoria:" e "até" são spans soltos.

Esperado: Rótulos associados (p.ex. "Data inicial" e "Data final" da vistoria).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: label

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>br-input:nth-of-type(1)" — <br-input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>br-input:nth-of-type(2)" — <br-input>

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-073` → identificador devolvido por ferramenta (sem arquivo)
- `F-074` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-7fe8278d1d6a` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-725adbe8a251a9b901df6a0d41b9e60777f9471389ffd3188c058a84bfd25628",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-76387ea2e656ca7f72edbf119fdeb2b9c7f97f20123fca72706bae3c4d5af70b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo "Atribuir Vistoriador", o <select> de vistoriadores não tem rótulo; o texto "Selecione um Vistoriador" não está associado.

Esperado: O select deve ter rótulo associado.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="user-plus"] (Atribuir vistoriador)

Regra declarada: select-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-select" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-013` → identificador devolvido por ferramenta (sem arquivo)
- `F-181` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-76387ea2e656ca7f72edbf119fdeb2b9c7f97f20123fca72706bae3c4d5af70b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-76ab99696d9494ffb568e2d41f8ed9add4996fe31da9b50ce239c7bf83a02a80

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Tabela de vistorias sem <caption>.

Esperado: Título da tabela em <caption>.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table" — <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc"

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `P-02` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-76ab99696d9494ffb568e2d41f8ed9add4996fe31da9b50ce239c7bf83a02a80",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7890a488ab3bce2c896dacdd2a51434c666ff696de2987e4cb41d14e5f12658d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O título do documento é "PNIP" na listagem (e o mesmo nas rotas de detalhe, edição e agendamento): não descreve a página nem a tarefa.

Esperado: Título único e descritivo por página (ex.: "Vistorias – PNIP").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.4.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|head>title" — <title> "PNIP" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-e1239ce061b0c926934b48cceda66c38d7b969c5195af4c3d94462c25ca91b88 — B-25 · sempre · cena 1280x900@modal · <title> "PNIP": Escalada E-01, origem: "autora" (decisão da escalada, 2026-10-01, D-61). O <title> é "PNIP" nas quatro paradas (lista, dois detalhes, modal): nomeia só o sistema, não muda entre rotas e não representa o conteúdo principal ("Vistorias", o detalhe de uma vistoria). Âncora não renderizada por natureza (elemento do <head>). Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `document.title = "PNIP"` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7890a488ab3bce2c896dacdd2a51434c666ff696de2987e4cb41d14e5f12658d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7ca29aceebf0c318c68c85fac21ab2d5638f6f728ef09cdc01a72287ea168262

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na janela de 1280px a tabela (1272px) excede o contêiner .br-table (1096px) e a página fica com scrollWidth 1364px; os botões 'Notificar' ficam parcialmente fora da área visível (x até 1336px).

Esperado: Tabela contida no layout (rolagem interna no contêiner ou layout responsivo), sem rolagem horizontal da página.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table" — <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc"

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T13-04-26-092Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7ca29aceebf0c318c68c85fac21ab2d5638f6f728ef09cdc01a72287ea168262",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7d61a23044eb2dcb7d704429637f03efc5b7516ee2ce4c7fa190d0be880ae7a2

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone bell), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Notificar solicitante da vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7d61a23044eb2dcb7d704429637f03efc5b7516ee2ce4c7fa190d0be880ae7a2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7da2a98e16602c9c2fb1efbd946a620208a5e838a13836930f872b5458dd4872

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Buttons must have discernible text

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:button-name

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-02eacb6cd7eb8dedefea92feb5039dd63e1b11239e1984b948668c20a2629c38 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4e50ada7ea0559d48e3cbb150ecbb78d2afbb5cec4cbd286c632cc311c6895cb — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7da2a98e16602c9c2fb1efbd946a620208a5e838a13836930f872b5458dd4872",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7dc32981b849beb22ae6990698eec085ed7f7ca9ce7c4f698e60992c2fc219d4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão de fechar com aria-label em inglês 'Close this dialog' numa página lang=pt-br, sem lang próprio.

Esperado: Rótulo em português (ex.: 'Fechar').

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar botão olho (br-button[icon="eye"]) da linha 1 'Coral Mansa IV' (aba Tramitando) 3. clicar 'boleto.pdf'

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

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
  "cardId": "C-7dc32981b849beb22ae6990698eec085ed7f7ca9ce7c4f698e60992c2fc219d4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7e2be0a70f1e21a438ebb5eb4ee2a45b930a997054524ef4ff8657a5fccaea1a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Rota edit3012: nenhum .br-footer nem <br-footer>.

Esperado: Rodapé do modelo de página do DS presente.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR (aba Agendar) 2. click tbody tr:nth-child(1) br-button[icon="calendar"] (Agendar) 3. click br-button[label="Editar"] (abre /editar-dados-vistoria/...3012)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-013` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-1685ea4e377a` → identificador devolvido por ferramenta (sem arquivo)
- `F-491` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7e2be0a70f1e21a438ebb5eb4ee2a45b930a997054524ef4ff8657a5fccaea1a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-813456177e39e9bf94b7fc45627b808f2539ef5f35475bb1d3d959e91607078e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão interno (shadow DOM) tem aria-label="" e nenhum title/texto; a árvore de acessibilidade expõe 'button' sem nome nas 10 linhas (Tramitando).

Esperado: Botão de ícone com nome acessível (ex.: 'Visualizar vistoria').

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T12-55-33-043Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-813456177e39e9bf94b7fc45627b808f2539ef5f35475bb1d3d959e91607078e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8245dc972f3594b7f37153591c95e9cbf166712e841061e3f23dea95a0647d8e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Campo de busca só tem placeholder "Pesquise aqui ..."; sem label, aria-label ou aria-labelledby.

Esperado: Rótulo visível e associado ao campo de pesquisa.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:6.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input >>> div>input" — <input#search> "Pesquise aqui ..." [shadow]

### Unidades candidatas (não são crédito)

- U-57f591e9a5b486fca171693fe185de691ee0f63b02046c10f3e1e17133bd3ce9 — B-04 · inicial · cena 1280x900@inicial · <input#search> "Pesquise aqui ..." [shadow]: Campo de busca da lista (input#search dentro do br-input) sem <label> associado, aria-label nem aria-labelledby; só o placeholder "Pesquise aqui ...". Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-b86fc17983a1` → identificador devolvido por ferramenta (sem arquivo)
- `F-019` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8245dc972f3594b7f37153591c95e9cbf166712e841061e3f23dea95a0647d8e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-848c1f1e2aca375e73f1a98d4655494fe9a064749a51902706b306ba1c9b293e

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone user-plus), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Atribuir vistoriador" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-848c1f1e2aca375e73f1a98d4655494fe9a064749a51902706b306ba1c9b293e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-852fddfe8bb0fb13ed30267b41e5821fa22777b98da4de680fc408e355ac4e92

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Após Salvar com campos vazios, os campos ficam com state="danger" e aparece "Campo obrigatório" (role=alert). Porém o input interno não recebe aria-invalid nem aria-describedby para a mensagem, e os alertas idênticos não dizem qual campo está em erro.

Esperado: Campo em erro identificado programaticamente (aria-invalid="true") e associado à mensagem, que deve nomear o campo.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[icon="eye"] 2. click Editar 3. fill br-input[formcontrolname="endereco"] input = "" 4. fill br-input[formcontrolname="nomeResponsavelEmbarcacao"] input = "" 5. click br-button[type="primary"] (Salvar)

Regra declarada: wcag:3.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input[state=\"danger\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-012 (errors: 2 role-alert "Campo obrigatório")` → identificador devolvido por ferramenta (sem arquivo)
- `V-001 (unverifiable: o seletor não atravessou o shadow DOM)` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção: aria-invalid=null, aria-describedby=null` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-852fddfe8bb0fb13ed30267b41e5821fa22777b98da4de680fc408e355ac4e92",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-858b27c4623acb2910a0f4d52573a4e1d5f2c8b1a3392607d5acf823e05bbdd3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Diálogo do Laudo: o <object type="application/pdf"> do diálogo não tem nome nem conteúdo alternativo.

Esperado: title/aria-label e conteúdo de fallback (ex.: link para baixar o PDF).

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(1) br-button[icon="eye"] 3. click br-icon-base[icon-name="file"] (Laudo)

Regra declarada: object-alt

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-164` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-858b27c4623acb2910a0f4d52573a4e1d5f2c8b1a3392607d5acf823e05bbdd3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-86ed5528d5a995614f39d85a6467539a9b15003526532e0870cb506bcbe55902

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página atual da paginação ("1") só é indicada pela classe .active; o link não tem aria-current.

Esperado: aria-current="page" no link da página atual.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `inspeção DOM` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-86ed5528d5a995614f39d85a6467539a9b15003526532e0870cb506bcbe55902",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8843cac56171bf67c9321ee69edf499dd51e8055e252c21d15278aa99026cd28

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Após busca sem resultados ('zzzzz'), a mensagem 'Não há vistorias para exibir.' aparece num <p> fora de região viva, e a região aria-live da paginação é removida; nada é anunciado.

Esperado: Mensagem de resultado exposta como status (role=status/aria-live).

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. digitar 'zzzzz' na pesquisa 3. Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-propesc-vistorias div.align-items-center.mt-5 > p" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T13-05-35-395Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8843cac56171bf67c9321ee69edf499dd51e8055e252c21d15278aa99026cd28",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-88b3ebe7dfcedcaf218c85c346fdf785c0fdc3b4298649c4e36f0403c109228c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os dois campos de data do filtro ("Data da vistoria:" e "até") não têm rótulo programático: o texto visível é um <span> solto, e o input interno (#br-input-8/9) não tem label, aria-label nem aria-labelledby.

Esperado: Cada campo de data deve ter nome acessível ligado ao texto visível (ex.: "Data da vistoria: início" e "fim").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: label

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>br-input:nth-of-type(1)" — <br-input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>br-input:nth-of-type(2)" — <br-input>

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-024` → identificador devolvido por ferramenta (sem arquivo)
- `F-025` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-88b3ebe7dfcedcaf218c85c346fdf785c0fdc3b4298649c4e36f0403c109228c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8a45524e7892e9415ebfd3de3665c9386cd64aa4f9f742b937f9042502ad867c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Rota edit3012: sem link de salto para o conteúdo; primeiro link é "Home" do breadcrumb.

Esperado: Primeiro link levando ao conteúdo principal.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR (aba Agendar) 2. click tbody tr:nth-child(1) br-button[icon="calendar"] (Agendar) 3. click br-button[label="Editar"] (abre /editar-dados-vistoria/...3012)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-013` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-78807051bc09` → identificador devolvido por ferramenta (sem arquivo)
- `F-492` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8a45524e7892e9415ebfd3de3665c9386cd64aa4f9f742b937f9042502ad867c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8a6a08d9ad5f90d59510b9e77002b309a7721a5927168c9f6f77c8f94dece05e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Pré-visualização do upload na tela Agendar vistoria: o <object type="application/pdf"> do diálogo não tem nome nem conteúdo alternativo.

Esperado: title/aria-label e conteúdo de fallback (ex.: link para baixar o PDF).

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR 2. click tbody tr:nth-child(1) br-button[icon="calendar"] 3. upload #boletoResponsabilidadeTecnica foto.png image/png

Regra declarada: object-alt

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-019` → identificador devolvido por ferramenta (sem arquivo)
- `F-217` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8a6a08d9ad5f90d59510b9e77002b309a7721a5927168c9f6f77c8f94dece05e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8a77fb39289b8085cc3e26d7d3d5df43f2c60a547b336bb31ea431fe8a7a14e5

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem nome acessível (br-button)

Esperado: Nome acessível não vazio — por conteúdo, aria-labelledby, aria-label ou title

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: wcag:4.1.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-7dbabbfc203702ec5d6e398b0a04a8cc04ee87295ca955abff49ba0d95c4ffd1 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e3a9d62c1adea42986e20e735443ee7e824a8d1ada3b0c9f2c2320bc0834bce5 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8a77fb39289b8085cc3e26d7d3d5df43f2c60a547b336bb31ea431fe8a7a14e5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8c576ff28c4aa594263cd7810047a08f57058d83b585d93bee6acbf338fbc8de

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo "Exportar Vistorias", as 5 caixas de status ficam sob um texto "Status:" (<strong>) sem fieldset/legend nem role=group associando o grupo.

Esperado: Agrupar com fieldset/legend "Status" (ou role="group" + aria-labelledby).

Janela: 1280×900 · interações desde o carregamento: 1. click br-button[type="primary"] (Exportar Vistorias)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-html-container input[type=\"checkbox\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-016` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção DOM` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8c576ff28c4aa594263cd7810047a08f57058d83b585d93bee6acbf338fbc8de",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8c698d67dc928b82f04c21ae53f3a28d1b0c927903e434f61a4940304d83631b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Trocar unidade" é um <span> com cursor:pointer, sem foco nem papel: não é alcançável pelo teclado.

Esperado: Controle nativo (button/link) focável e operável pelo teclado.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-36f88fb819f6260616479faa26400108601f7aee5c6852e700540d504041ea84 — B-19 · detalhe-menu · cena 1280x900@detalhe-menu · <span> "Trocar unidade": "Trocar unidade" no menu do avatar é um <span> com cursor:pointer que navega ao clique (para /pnip/portal-mpa), sem tabindex nem papel: não é alcançado por Tab nem Shift+Tab e Enter não faz nada. Elemento interativo da lista só operável com mouse.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: atributos-ausentes sustenta em detalhe-menu — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção DOM` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8c698d67dc928b82f04c21ae53f3a28d1b0c927903e434f61a4940304d83631b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8cbc5f37734f986b6530ee5b794321122beaa34d4ff0626c7899cf18fd40281a

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c94d9504d7c2bb1c534d9c85744bbbbe2810353f383044b076a2d9255c2b7e75 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8cbc5f37734f986b6530ee5b794321122beaa34d4ff0626c7899cf18fd40281a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8dde4d82770feb215b7cfc742ce06151b007377420e06ef5b663c552535dbc43

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-82a357f4dc0d11ac01d09f3785422081482a834ab5bd069e99d1823aec324264 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8dde4d82770feb215b7cfc742ce06151b007377420e06ef5b663c552535dbc43",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8f1aeb7077f8a6a34ddf5d9e8af5b30cf0ea0c9b26378d6cfeb3dc141c1ec61a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: 'Trocar unidade' é <span> com cursor:pointer e ação de clique (navega para /pnip/portal-mpa), sem tabindex nem role; inalcançável por teclado.

Esperado: Item operável por teclado (button/link).

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar #avatar-dropdown-trigger (Avatar com dropdown)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>span" — <span> "Trocar unidade" · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-36f88fb819f6260616479faa26400108601f7aee5c6852e700540d504041ea84 — B-19 · detalhe-menu · cena 1280x900@detalhe-menu · <span> "Trocar unidade": "Trocar unidade" no menu do avatar é um <span> com cursor:pointer que navega ao clique (para /pnip/portal-mpa), sem tabindex nem papel: não é alcançado por Tab nem Shift+Tab e Enter não faz nada. Elemento interativo da lista só operável com mouse.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: atributos-ausentes sustenta em detalhe-menu — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
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
  "cardId": "C-8f1aeb7077f8a6a34ddf5d9e8af5b30cf0ea0c9b26378d6cfeb3dc141c1ec61a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8f4731ca555af5a753ccb0ba66cc41632eacc51b357b57042e5ef173eabe32cf

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@modal

Observado: Scrollable region must have keyboard access

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até modal (8 passo(s))

Regra declarada: axe:scrollable-region-focusable

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>div:nth-of-type(2)" — <div> "Aurora Veloz - RAEP SC99100000 / TIE 9910000000 "

### Unidades candidatas (não são crédito)

- U-481877d30106633e91c600afd8bd63dd50156a7e8b87608f720f917f60283052 — B-24 · modal · cena 1280x900@modal · <div> "Trocar embarcação da vistoria Busque e selecione": O br-modal "Trocar embarcação" (div.br-modal medium) não declara role dialog/alertdialog, aria-modal nem nome: a árvore de acessibilidade do Chromium não expõe nenhum diálogo quando ele está aberto. Só existe depois do clique em "Trocar embarcação da vistoria".
  - estados em que a unidade existe: modal
  - predicado de aceitação: atributos-ausentes sustenta em modal — nenhum destes atributos presente: role, aria-modal, aria-label, aria-labelledby. Medido: ausentes: role, aria-modal, aria-label, aria-labelledby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a1e04b93c057a4cf84a662046b003d90df9ca1cfe9e9c783133defa2a0bc8787 — B-27 · modal · cena 1280x900@modal · <div> "Trocar embarcação da vistoria Busque e selecione": Escalada E-06, origem: "autora" (decisão da escalada, 2026-10-01, D-61). Com o br-modal "Trocar embarcação" aberto, Tab sai do modal depois do último controle (Trocar) e percorre os botões do detalhe, o cabeçalho e o breadcrumb por trás do scrim antes de voltar: o foco não fica contido na Modal aberta. Só existe depois do clique em "Trocar embarcação da vistoria". Sem predicado na referência; medido por Tab real em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8f4731ca555af5a753ccb0ba66cc41632eacc51b357b57042e5ef173eabe32cf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-904259a5b3ca0489c430ecc27dba3e9d730b3fe095b1ca25c1e78d1b524a4714

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: O primeiro link da página (href="/portal-mpa", "Home") não é uma âncora interna.

Esperado: O primeiro link da página é o salto para o conteúdo: âncora interna cujo alvo existe (e-MAG 1.5).

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-904259a5b3ca0489c430ecc27dba3e9d730b3fe095b1ca25c1e78d1b524a4714",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-90ce56781b113294e6ddb3724299c552b44621a83d9b9b599299c184d346df03

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: border-radius: 6px fora da escala do DS

Esperado: Um de: 0px, 4px, 8px, 16px, 50% (circle) ou pill (100em/999em × font-size)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>pnip-propesc-nao-comparecimento>div>div:nth-of-type(2)>div>div>textarea" — <textarea>

### Unidades candidatas (não são crédito)

- U-238f9e8879e41566f840160f72c03e67a02b73d7a42128f02a5935cc250e0e6f — B-20 · detalhe-menu · cena 1280x900@detalhe-menu · <textarea>: Detalhe da vistoria de não comparecimento: a <textarea> do motivo tem um <label> "Descrever o motivo do não comparecimento" como irmão, mas sem for (e a textarea sem id): o rótulo não está associado; nome acessível vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-90ce56781b113294e6ddb3724299c552b44621a83d9b9b599299c184d346df03",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-92da546dbd7e60ccdce55a5b3465c4449705d7bca377727a62947af192e257b8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Não há link de salto para o conteúdo; a primeira parada de tabulação é o botão 'Menu' do cabeçalho.

Esperado: Âncora/atalho para ir direto ao conteúdo principal no início da página.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: emag:1.5

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header" — <pnip-header> "U Olá, Usuária de Teste, SUPERVISOR"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header" — <pnip-header> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header" — <pnip-header> "U Olá, Usuária de Teste, SUPERVISOR"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
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
  "cardId": "C-92da546dbd7e60ccdce55a5b3465c4449705d7bca377727a62947af192e257b8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-96e230715bfa61d8eef510ab5bff3a49fffe239ffb8b9806e34e91c728345f79

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone trash), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Excluir vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-96e230715bfa61d8eef510ab5bff3a49fffe239ffb8b9806e34e91c728345f79",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-971edf81d5dc1c07e2abfb27a124eee8defc65f6bc080616633fc76635da8dbb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: "Limpar Filtro" com style="margin-top:-5px".

Esperado: Espaçamento da escala do DS.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(5)>button" — <button> "Limpar Filtro"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-5f2d1ba6c5b2` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-971edf81d5dc1c07e2abfb27a124eee8defc65f6bc080616633fc76635da8dbb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-98ff273e2e73c348433584bfce09936e3eb4cfb6bdd979a8c867a04237df9720

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone trash), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Excluir vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-98ff273e2e73c348433584bfce09936e3eb4cfb6bdd979a8c867a04237df9720",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9bd8276091bb0ec23d02df26bc6ea797c08d909d2a3f5e81e77492ee4fd02100

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f9f3d45544d87746e9a1c7094a4cc62f5d90ef5f8242736a83ca2bd7164880a8 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9bd8276091bb0ec23d02df26bc6ea797c08d909d2a3f5e81e77492ee4fd02100",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9be383c09127381de5acae7a80732f1a1c8bf77dfc2d72fa660a52be75bf0b65

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Gatilhos de filtro Cidade/Porto/Vistoriador/Status são <span class="br-tag interaction"> com cursor:pointer, tabIndex -1, sem role nem aria-expanded; o Tab vai de "Concluídos" direto à busca.

Esperado: Botões focáveis com papel e aria-expanded, operáveis por teclado.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(1)>span" — <span> "Cidade"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(2)>span" — <span> "Porto"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(3)>span" — <span> "Vistoriador"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(4)>span" — <span> "Status"

### Unidades candidatas (não são crédito)

- U-05b87158ac88b5d030d58ee8ec4975da77defd6f42e15bef94c2adc565bfce9f — B-11 · inicial · cena 1280x900@inicial · <span> "Cidade": As 4 etiquetas de filtro ("Cidade", "Porto", "Vistoriador", "Status"; span.br-tag.interaction) abrem o painel de opções ao clique (3/3 cargas), mas são <span> sem tabindex nem papel: não entram na ordem de Tab e Enter com foco não produz efeito (0/3). Só operáveis com mouse. O predicado mede a ausência de tabindex e role; o efeito do clique e a ausência de efeito do teclado são medidos em conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: atributos-ausentes sustenta em inicial — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-124a6e3df510b7411b1d60ba552eefccc737cd33b85d05267974881867d06c07 — B-11 · inicial · cena 1280x900@inicial · <span> "Status": As 4 etiquetas de filtro ("Cidade", "Porto", "Vistoriador", "Status"; span.br-tag.interaction) abrem o painel de opções ao clique (3/3 cargas), mas são <span> sem tabindex nem papel: não entram na ordem de Tab e Enter com foco não produz efeito (0/3). Só operáveis com mouse. O predicado mede a ausência de tabindex e role; o efeito do clique e a ausência de efeito do teclado são medidos em conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: atributos-ausentes sustenta em inicial — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6f0ac137d5bade8c86303e0afc551d4b53699c58fea6717d3a622ccd615710d1 — B-11 · inicial · cena 1280x900@inicial · <span> "Vistoriador": As 4 etiquetas de filtro ("Cidade", "Porto", "Vistoriador", "Status"; span.br-tag.interaction) abrem o painel de opções ao clique (3/3 cargas), mas são <span> sem tabindex nem papel: não entram na ordem de Tab e Enter com foco não produz efeito (0/3). Só operáveis com mouse. O predicado mede a ausência de tabindex e role; o efeito do clique e a ausência de efeito do teclado são medidos em conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: atributos-ausentes sustenta em inicial — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ffc998ab00b11ff3f14640a0556517c49967185977f90f93e3a43477569ab1a2 — B-11 · inicial · cena 1280x900@inicial · <span> "Porto": As 4 etiquetas de filtro ("Cidade", "Porto", "Vistoriador", "Status"; span.br-tag.interaction) abrem o painel de opções ao clique (3/3 cargas), mas são <span> sem tabindex nem papel: não entram na ordem de Tab e Enter com foco não produz efeito (0/3). Só operáveis com mouse. O predicado mede a ausência de tabindex e role; o efeito do clique e a ausência de efeito do teclado são medidos em conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: atributos-ausentes sustenta em inicial — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9be383c09127381de5acae7a80732f1a1c8bf77dfc2d72fa660a52be75bf0b65",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9e6ae11c8889eeb8047bdccfe0423a474c85f647628b220c2131fc202e3547d4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão "Buscar" com style="margin-top:-38px".

Esperado: Espaçamento da escala do DS.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>button" — <button> "Buscar"

### Unidades candidatas (não são crédito)

- U-3993a821217adf04163bb635bbef658eeedd7f545eec0c26ed68d7166e39e8f6 — B-09 · inicial · cena 1280x900@inicial · <button> "Buscar": Botão "Buscar" da busca: button.br-button só com ícone (lupa), 32×32, sem a classe circle — sem rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-cc6c46e167e0d20868ba66ed04918cd88020fedbf3ffcdb7395251824f07d313 — B-28 · inicial · cena 1280x900@inicial · <button> "Buscar": Escalada E-07, origem: "autora" (decisão da escalada, 2026-10-01, D-61). O botão de ícone "Buscar", montado pelo app fora do br-input, mede 32×32 px: abaixo da área de toque de 48×48. Tamanhos padrão do DS (br-button de 40 px, Menu e Home dos web components, paginação) ficam como fundo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-f04f681736a7` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9e6ae11c8889eeb8047bdccfe0423a474c85f647628b220c2131fc202e3547d4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9e726c0ae674757c142b3b329caf2678cf4beb743cd105c0ae890580ead4a608

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>thead>tr>th:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-50a27493b185c0bbb0179208240a74e28e88df151508b8845c55406c1030426e — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9e726c0ae674757c142b3b329caf2678cf4beb743cd105c0ae890580ead4a608",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a1133cbeebe2eb0f3870622b1463592f7531d0a373a5b4a5fd95973ea246a616

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Página atual indicada apenas pela classe .active; o link não tem aria-current="page".

Esperado: Página atual com aria-current="page".

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"

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
  "cardId": "C-a1133cbeebe2eb0f3870622b1463592f7531d0a373a5b4a5fd95973ea246a616",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a142007e87f0ddf9c7d44e1738d3efb2227b4d31b329b96c3ffccfd358551ee0

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone trash), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Excluir vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a142007e87f0ddf9c7d44e1738d3efb2227b4d31b329b96c3ffccfd358551ee0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a3c6432141825286d5b532b0c9f1bebbf9f8760bc4760f14f258837c150f029b

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Buttons must have discernible text

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:button-name

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-7dbabbfc203702ec5d6e398b0a04a8cc04ee87295ca955abff49ba0d95c4ffd1 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e3a9d62c1adea42986e20e735443ee7e824a8d1ada3b0c9f2c2320bc0834bce5 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a3c6432141825286d5b532b0c9f1bebbf9f8760bc4760f14f258837c150f029b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a403af015f944f379edb2e43baccd1e5a7be3df9b9586f093a3f9a95da57889c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Rota 3037: sem link de salto para o conteúdo; primeiro link é "Home" do breadcrumb.

Esperado: Primeiro link levando ao conteúdo principal.

Janela: 1280×900 · interações desde o carregamento: 1. click pnip-filter-panel span.br-tag "Cidade" 2. click opção "Barra Nova" 3. click tbody tr:nth-child(4) br-button[icon="eye"] (Vistoria preenchida, /agendar-vistoria/...3037) 4. click br-button[label="Mostrar"] (1º)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-036c5c370077` → identificador devolvido por ferramenta (sem arquivo)
- `F-354` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a403af015f944f379edb2e43baccd1e5a7be3df9b9586f093a3f9a95da57889c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a515274f10e1177718320dc031b707c8ee46ee77dcc387bb466b1ba041bd1790

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem nome acessível (br-button)

Esperado: Nome acessível não vazio — por conteúdo, aria-labelledby, aria-label ou title

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: wcag:4.1.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d32966d9163ab3f1dd27e4670fae6cb1b4a4c1d16cd90f4f97a7e5aabc5e31d0 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d9869f3ea32b35bb4fa9584d5e128f1578dfee7ed4a5f37b8dad906257ebc811 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a515274f10e1177718320dc031b707c8ee46ee77dcc387bb466b1ba041bd1790",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a55bfd87c23b8d507405ae9e81d131ad86c089f1bbb01beba56e686cedfb70c7

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-0b56e5b10f4881a7605386c84f28bbcd225b3a6127a73c212dad3d0d8c45a4e5 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a55bfd87c23b8d507405ae9e81d131ad86c089f1bbb01beba56e686cedfb70c7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a72ab96a094ce938bab96b44f828c173fa96c91c99cb24e0b61a5aa3d77e4ff6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O "×" de fechar o diálogo do PDF é #1351b4 sobre #676767 (32px): contraste de 1,29:1.

Esperado: Contraste mínimo de 3:1 (texto grande / componente de interface).

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(1) br-button[icon="eye"] 3. click br-icon-base[icon-name="file"] (Laudo)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007 P-01 (contrast-incomplete .swal2-close ratio 1.29)` → identificador devolvido por ferramenta (sem arquivo)
- `medição no navegador` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a72ab96a094ce938bab96b44f828c173fa96c91c99cb24e0b61a5aa3d77e4ff6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a7aaf58e6732476722192d1b9f987c24854bc84b7947acf3a84bfb393c858742

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No detalhe de 'Coral Mansa IV' o campo Hora da vistoria fica vazio (sem value), embora a lista mostre 01/04/2026 10:30 e a tela de edição carregue 10:30.

Esperado: Exibir a hora registrada (10:30).

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar botão olho (br-button[icon="eye"]) da linha 1 'Coral Mansa IV' (aba Tramitando)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(2)>div:nth-of-type(2)>br-input" — <br-input>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(2)>div:nth-of-type(2)>br-input" — <br-input>


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
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
  "cardId": "C-a7aaf58e6732476722192d1b9f987c24854bc84b7947acf3a84bfb393c858742",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a8c7756c89ad6638cb50f73aa77a4d86b2e528303696d86a05b93566a862aaf5

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem nome acessível (br-button)

Esperado: Nome acessível não vazio — por conteúdo, aria-labelledby, aria-label ou title

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: wcag:4.1.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-0110934d42ae3ae66442d691b2b20b23d9d07ce6f4c4c8aa8480df203d202125 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-13a157c9b6a196ee3914cb6bc301202d68f0f7a52f693739e9bc9a8f1789cfcc — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a8c7756c89ad6638cb50f73aa77a4d86b2e528303696d86a05b93566a862aaf5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a9067d2bdeb30c14ce4f46e39da70bb32762ea61792aef5f1fe40a07e7e16b43

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-4e1a48a085fa1848925675355c50a9f84de93f9ffbc1e0fb5f4f22caaf7a6bfa — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a9067d2bdeb30c14ce4f46e39da70bb32762ea61792aef5f1fe40a07e7e16b43",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-af01fa4b5efd2f8def57a2d7abc4a97c348a0d4a28d62012492fca3fb771cfe5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na edição, o ícone de lixeira ao lado de "boleto.pdf" remove o boleto (abre a confirmação "Você tem certeza que deseja remover o boleto?"), mas não tem foco, papel nem nome.

Esperado: Botão focável com nome (ex.: "Remover boleto").

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[icon="eye"] 2. click Editar (pnip-propesc-detalhes-vistoria br-button[icon="edit"])

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-icon-base[icon-name=\"trash\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção/interação: clique abre a confirmação; tabIndex=-1` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-af01fa4b5efd2f8def57a2d7abc4a97c348a0d4a28d62012492fca3fb771cfe5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-af930e4ce9adee84988a7f11fc99237eab110e6116cb437753b21eac56656c34

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone bell), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Notificar solicitante da vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-af930e4ce9adee84988a7f11fc99237eab110e6116cb437753b21eac56656c34",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b13dcf07aecc2469af026c7055b2305631dbf7b6d39f225dd452954d5735ca88

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone trash), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Excluir vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b13dcf07aecc2469af026c7055b2305631dbf7b6d39f225dd452954d5735ca88",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b38e5effb7e49982cb2da587c7ec80dc8d926000967ab1806c7487b8ee8a27ca

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Buttons must have discernible text

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:button-name

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-0e3c3cd985ca9f31b3d3465ce348f80f17e37e60b54b2f8671135a6f5e75482f — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-7f3e0abf3655e5a4a709cc014a2b7d516cdb5ccdc9697e86aba1022d0e14db65 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b38e5effb7e49982cb2da587c7ec80dc8d926000967ab1806c7487b8ee8a27ca",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b5a75d1dc5bddf4eefdb1a83596214f1dd3a3af37ed56055f30c88ee90e2e190

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone bell), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Notificar solicitante da vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b5a75d1dc5bddf4eefdb1a83596214f1dd3a3af37ed56055f30c88ee90e2e190",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b78217714f33ae916dab5426c04588e8b3d1839329312668f21df64585c83623

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Etiqueta "Nenhum filtro de data aplicado": #ffffff sobre #c5d4eb, 14px normal, contraste 1,5:1.

Esperado: Contraste mínimo 4,5:1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: color-contrast

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>span" — <span> "Nenhum filtro de data aplicado"

### Unidades candidatas (não são crédito)

- U-294d06e9c9ac03ecc74fb602199737580e11736300a52c3df77daafce5eb8a3c — B-13 · inicial · cena 1280x900@inicial · <span> "Nenhum filtro de data aplicado": Etiqueta "Nenhum filtro de data aplicado" (br-tag primary-pastel-01 small): texto branco sobre #c5d4eb, 14 px peso 500 — contraste 1,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-fa2edbc791a7` → identificador devolvido por ferramenta (sem arquivo)
- `F-060` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b78217714f33ae916dab5426c04588e8b3d1839329312668f21df64585c83623",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b7d7fadca1896201c1b2a12afd22074b3a875348813c76692e22fd06e0852959

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Item Home do breadcrumb é um <a href> contendo um <button> (controles interativos aninhados); gera duas paradas de tabulação para o mesmo destino.

Esperado: Um único elemento interativo (link) por item do breadcrumb.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>br-breadcrumb" — <br-breadcrumb>

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>br-breadcrumb" — <br-breadcrumb>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>br-breadcrumb" — <br-breadcrumb>


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
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
  "cardId": "C-b7d7fadca1896201c1b2a12afd22074b3a875348813c76692e22fd06e0852959",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b841673d64d7785180827295a0ab0d81bc0a1cb98699d2d1131240ada4dfe8e4

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-8188a105d675aa0dc47295d0aa263c5574ae6994c59e058e2a0f7b8c4ed890e2 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b841673d64d7785180827295a0ab0d81bc0a1cb98699d2d1131240ada4dfe8e4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b98b0f377902fe3882e41442601da73f54fee02ac3998c3f7c04da26e4837983

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O selo "Vistoria pré agendada" (aba Agendar) tem texto #ffffff sobre #888888, 14px: contraste de 3,54:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR

Regra declarada: color-contrast

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-status-solicitacao-utils .bg-secondary-06 > .text-secondary-01" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-b0926480187c` → identificador devolvido por ferramenta (sem arquivo)
- `F-128..F-137` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b98b0f377902fe3882e41442601da73f54fee02ac3998c3f7c04da26e4837983",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bbe0b098d853e1c052fd4a589a4ffcee4b38034ab9e24147f1015fa24757ed2e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Diálogo do visualizador de PDF tem aria-labelledby="swal2-title" apontando para h2 vazio e oculto; o diálogo fica sem nome acessível.

Esperado: Diálogo com nome acessível (ex.: 'Boleto da ART - boleto.pdf').

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar botão olho (br-button[icon="eye"]) da linha 1 'Coral Mansa IV' (aba Tramitando) 3. clicar 'boleto.pdf'

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

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
  "cardId": "C-bbe0b098d853e1c052fd4a589a4ffcee4b38034ab9e24147f1015fa24757ed2e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bcf80054115ad12e5644e5cf87cd2427f879b36b33a48dee15a22a07dd7e4c1e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: No detalhe de vistoria Tramitando, o selo "Aguarda preenchimento" tem texto #ffffff sobre #888888: contraste de 3,54:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[icon="eye"] (aba Tramitando)

Regra declarada: color-contrast

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(4)>div:nth-of-type(1)>div:nth-of-type(2)>div>div>div" — <div> "0%"

### Unidades candidatas (não são crédito)

- U-47e455721d9db772bfcf9d81fb3760168dc6269c6849d5348ccb5207c5570bb1 — B-23 · detalhe · cena 1280x900@modal · <div> "0%": Indicador "0%" do detalhe: texto branco (text-secondary-01) sobre #888 (bg-secondary-06), 14 px peso 400 — contraste 3,54:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-167` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bcf80054115ad12e5644e5cf87cd2427f879b36b33a48dee15a22a07dd7e4c1e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bd01e05de6e5ffa8dfa01f46dd3bd638f387b5a801f0ad34f3ac6039eb55da30

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone trash), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Excluir vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bd01e05de6e5ffa8dfa01f46dd3bd638f387b5a801f0ad34f3ac6039eb55da30",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bed7e43ca110f762c4a359b9314155b82259aeee97abfb1828414a5c8991764e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na paginação, cada número de página é um <li> aninhado diretamente dentro de outro <li>, sem <ul>/<ol> pai.

Esperado: <li> com pai <ul>/<ol>; um único nível de item por página.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: listitem

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li" — <li> "1"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(3)>li" — <li> "2"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(4)>li" — <li> "3"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(5)>li" — <li> "4"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-037..F-040` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bed7e43ca110f762c4a359b9314155b82259aeee97abfb1828414a5c8991764e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bf71a05a5fff124a451773c095e6a1eaddc007109e18327bde29d8e80423de15

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão fechar "×" (32px) do visualizador: #1351b4 sobre #676767, contraste ≈1,3:1.

Esperado: Contraste mínimo 3:1.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3028) 2. click strong "boleto.pdf"

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

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
  "cardId": "C-bf71a05a5fff124a451773c095e6a1eaddc007109e18327bde29d8e80423de15",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c28173a5c7c2669c722b38c2ef72feed7ed0d8f031c153df8509bfd19f7263e3

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@modal

Observado: Nenhum elemento .br-footer nem web component <br-footer> no documento (DOM claro e shadow roots abertos).

Esperado: Uma Área de Rodapé com o componente Footer (.br-footer ou <br-footer>), como o modelo de página do DS exige.

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até modal (8 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c28173a5c7c2669c722b38c2ef72feed7ed0d8f031c153df8509bfd19f7263e3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c38cbffda5ceacd0bffe88641ff731462f6cbe9013ad1a54ad3efa2947a921a3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: 'boleto.pdf' é <strong> com cursor:pointer que abre o visualizador de PDF ao clicar, sem tabindex/role; inalcançável por teclado.

Esperado: Link ou botão focável para abrir o arquivo.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar botão olho (br-button[icon="eye"]) da linha 1 'Coral Mansa IV' (aba Tramitando)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>strong" — <strong> "boleto.pdf"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>strong" — <strong> "boleto.pdf"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T12-57-37-801Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c38cbffda5ceacd0bffe88641ff731462f6cbe9013ad1a54ad3efa2947a921a3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c3aa19a73d83a5363a1d616efcd15a039181a0da910bd27b71f4dc69feaf650d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Detalhe da vistoria NAO ADEQUADA: os ícones Laudo (file), Protocolo (file-invoice) e Arquivos (download) são <br-icon-base> clicáveis (o Laudo abre o PDF), sem foco (tabIndex -1), sem papel e sem nome; o <i> interno tem aria-hidden.

Esperado: Botões ou links focáveis, com nome acessível (ex.: "Ver laudo", "Protocolo de recebimento", "Baixar arquivos").

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(4) br-button[icon="eye"] (NAO ADEQUADA)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-icon-base[style*=\"cursor: pointer\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção DOM` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c3aa19a73d83a5363a1d616efcd15a039181a0da910bd27b71f4dc69feaf650d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c4e154113639695732ed2e77edb274607e045739da3bbd117781630821eda3ce

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Detalhe concluído /agendar-vistoria/…3069 começa em <h3> seguido de <h4>; sem <h1> nem <h2>.

Esperado: Hierarquia iniciando em <h1>.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO (aba Concluídos) 2. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3069)

Regra declarada: page-has-heading-one

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(1)>div>h3" — <h3> "Programa Nacional de Regularização de Embarcação"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(1)>div:nth-of-type(1)>h3" — <h3> "Programa Nacional de Regularização de Embarcação"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-887e985657c2b2f666f91cbb4dd6aa2bbe2359e0a96dc9e98b8f6e69f8d572bb — B-21 · detalhe · cena 1280x900@modal · <h3> "Programa Nacional de Regularização de Embarcação": Detalhe da vistoria: a hierarquia começa num <h3> ("Programa Nacional de Regularização de Embarcação de Pesca"), seguido de <h4>; não há <h1> nem <h2>. Unidade única para o template do detalhe, ancorada na parada `detalhe` (o mesmo template da parada detalhe-menu não é contado de novo; auditoria.md § 5). Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-f7bf50c3013a` → identificador devolvido por ferramenta (sem arquivo)
- `F-200` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c4e154113639695732ed2e77edb274607e045739da3bbd117781630821eda3ce",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c4f664ef4108067cccbe8b69db9221276900f498aee2b0b0918f20c11d5a9831

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Diálogo "Atribuir Vistoriador": <select id="swal2-select"> sem rótulo associado.

Esperado: Select com rótulo.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="user-plus"] (Atribuir vistoriador)

Regra declarada: select-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-select" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-0f9f096e65ec` → identificador devolvido por ferramenta (sem arquivo)
- `F-390` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c4f664ef4108067cccbe8b69db9221276900f498aee2b0b0918f20c11d5a9831",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c52a3c624cb96434c88e112a9821f82d8bc52996fbc0231b09aaca8eaeeee5f0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Com filtro "Barra Nova" aplicado, a etiqueta tem <button class="br-button inverted circle"> só com ícone fa-times, sem aria-label/title: nome vazio.

Esperado: Nome como "Remover filtro Barra Nova".

Janela: 1280×900 · interações desde o carregamento: 1. click pnip-filter-panel span.br-tag "Cidade" 2. click opção "Barra Nova"

Regra declarada: button-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel .br-tag button.circle" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-309a156948ef` → identificador devolvido por ferramenta (sem arquivo)
- `F-293` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c52a3c624cb96434c88e112a9821f82d8bc52996fbc0231b09aaca8eaeeee5f0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c5f00252168339874d428f8efb5a50d72068b4a7ffb26cd0f5c1b1faca1b2b93

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <li> elements must be contained in a <ul> or <ol>

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:listitem

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(4)>li" — <li> "3"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c5f00252168339874d428f8efb5a50d72068b4a7ffb26cd0f5c1b1faca1b2b93",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c6efeec453abb048fe4ee42754610fd749c1d4e93dbdc9c92ad428c87adc4c67

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Visualizador de PDF: aria-labelledby="swal2-title" aponta para h2 vazio e oculto; diálogo sem nome.

Esperado: Diálogo com nome (p.ex. "Boleto da ART").

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3028) 2. click strong "boleto.pdf"

Regra declarada: aria-dialog-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-4c21aafb89b3` → identificador devolvido por ferramenta (sem arquivo)
- `F-143` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c6efeec453abb048fe4ee42754610fd749c1d4e93dbdc9c92ad428c87adc4c67",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c75d154b455b60460a5722ffd4285cbcdaacb135103199713ea05c3b7b447e64

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Detalhe da vistoria NAO COMPARECIMENTO: não há h1 nem h2; o primeiro título é o h3 "Programa Nacional de Regularização de Embarcação de Pesca", seguido de h4.

Esperado: Hierarquia de títulos com h1 principal, sem pular níveis.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(1) br-button[icon="eye"] (situação NAO COMPARECIMENTO)

Regra declarada: page-has-heading-one

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-162` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c75d154b455b60460a5722ffd4285cbcdaacb135103199713ea05c3b7b447e64",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c76201bbd0725167bec6e8c726df4cdf68d6a6c5f0bd77a1094cca14201f208c

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-47b56f8da889530a10d5db47459e51252e664d92a5cadf585b1a90afb15ed1c1 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c76201bbd0725167bec6e8c726df4cdf68d6a6c5f0bd77a1094cca14201f208c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c794330497e83888e9f4f5d42a4c0e5609ac6e7954e4a7f2d13e02c8f3e4b85b

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone bell), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Notificar solicitante da vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c794330497e83888e9f4f5d42a4c0e5609ac6e7954e4a7f2d13e02c8f3e4b85b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c7fc4f7f20cc7a93349a11dc0a1d1690868da4a8d30597e56d3f8b3be3638206

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão interno <button aria-label=""> do br-button "olho" (abre o detalhe) só tem ícone aria-hidden; sem texto, title nem aria-label: nome acessível vazio (todas as abas).

Esperado: Nome acessível descrevendo a ação, p.ex. "Ver detalhes da vistoria <nome>".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: button-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-08f54319281b` → identificador devolvido por ferramenta (sem arquivo)
- `F-050` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-9883b0eaf2a0` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c7fc4f7f20cc7a93349a11dc0a1d1690868da4a8d30597e56d3f8b3be3638206",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c8c3e1d905f27cfa7015f023b81cc7870da8d4cb09f03f6a58941e6a0cc32c57

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O logotipo do cabeçalho (shadow DOM de br-header, img govbr-logo.png) tem alt="logo", que não identifica o logotipo.

Esperado: alt descritivo (ex.: "gov.br") ou alt="" se for decorativo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>br-header" — <br-header>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>br-header" — <br-header>


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `inspeção do shadowRoot de br-header` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c8c3e1d905f27cfa7015f023b81cc7870da8d4cb09f03f6a58941e6a0cc32c57",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cacbf7a8f51ebf37ab274038d7e4e088047c27dc6c149e931cbb7ef20efc7e71

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A aba ativa ("Tramitando", ou a escolhida) só se distingue pela classe .active do <li>; o botão não tem aria-selected nem aria-current, e as abas não usam role tablist/tab.

Esperado: O estado selecionado da aba deve ser exposto (role="tab" + aria-selected="true" ou aria-current="page").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>button" — <button#TRAMITANDO> "Tramitando"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `inspeção DOM: atributos do botão = id, type` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cacbf7a8f51ebf37ab274038d7e4e088047c27dc6c149e931cbb7ef20efc7e71",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cc43dfa0fa99c9d50067be06d55d1fb9ddbfe063cf66befb43c1e0e7b499f7a5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Rota 3069: sem link de salto para o conteúdo; primeiro link é "Home" do breadcrumb.

Esperado: Primeiro link levando ao conteúdo principal.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO (aba Concluídos) 2. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3069)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-acba9bd43b25` → identificador devolvido por ferramenta (sem arquivo)
- `F-199` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cc43dfa0fa99c9d50067be06d55d1fb9ddbfe063cf66befb43c1e0e7b499f7a5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ccedee76ebaf47787a79e88db9a773c1a8dfdc19816f018147571fedcb6e3774

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Buttons must have discernible text

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:button-name

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d32966d9163ab3f1dd27e4670fae6cb1b4a4c1d16cd90f4f97a7e5aabc5e31d0 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d9869f3ea32b35bb4fa9584d5e128f1578dfee7ed4a5f37b8dad906257ebc811 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ccedee76ebaf47787a79e88db9a773c1a8dfdc19816f018147571fedcb6e3774",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cdf5551b6fb8c2b816a3668eafd39d014038cf55fb38fcc69724dc8a24ec5092

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Rótulo visível 'Olá, Usuária de Teste, SUPERVISOR' mas aria-label='Avatar com dropdown' substitui o nome acessível, que não contém o texto visível.

Esperado: Nome acessível que contenha o texto visível do botão.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>button" — <button#avatar-dropdown-trigger> "Avatar com dropdown"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
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
  "cardId": "C-cdf5551b6fb8c2b816a3668eafd39d014038cf55fb38fcc69724dc8a24ec5092",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ce6739e83f7f3294500a192803fadc2cbcac60976ac058af28c68200df62e64a

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone trash), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Excluir vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ce6739e83f7f3294500a192803fadc2cbcac60976ac058af28c68200df62e64a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cf159dd42dd029df788c1751d068e621e19ad22633cd02b15bb7bd7f1c3a3a77

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Etiqueta "Vistoria pré agendada" (aba Agendar): texto #ffffff sobre #888888 (bg-secondary-06), 14px, contraste 3,54:1.

Esperado: Contraste mínimo 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR (aba Agendar)

Regra declarada: color-contrast

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(4)>div:nth-of-type(1)>div:nth-of-type(2)>div>div>div" — <div> "0%"

### Unidades candidatas (não são crédito)

- U-47e455721d9db772bfcf9d81fb3760168dc6269c6849d5348ccb5207c5570bb1 — B-23 · detalhe · cena 1280x900@modal · <div> "0%": Indicador "0%" do detalhe: texto branco (text-secondary-01) sobre #888 (bg-secondary-06), 14 px peso 400 — contraste 3,54:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-012` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-5d4ce3c2c7ad` → identificador devolvido por ferramenta (sem arquivo)
- `F-466` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cf159dd42dd029df788c1751d068e621e19ad22633cd02b15bb7bd7f1c3a3a77",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d075c7bcd3c9c1fbbb533375338b81309e8ebd7d3fd28d882df71195f8539267

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O selo "Vistoria agendada" tem texto #ffffff sobre #4f97d1, 14px normal: contraste de 3,14:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: color-contrast

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-16826af28e0996f408c83115a4435f7af40ac4cc53bf08f36e9dbbac871436f1 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-28dabc8a49f3528f77fddf8a2abab3ce60b6f30b3339050c6377bd1baa2c1e7d — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-31b4d9ec28350f49ebccde7fa4125d03c35bef0f8509b31c305a4335353bcd3a — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-378ca27cdcd3ddaeff869d2dc65fb85c2dbae1863257673c49fff068452ab683 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3fe5e8cc28ad339c48044f5f6514da4499172e643dc7133757f61235be604ffb — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4947f781cee61c8d4e34f8fd68e6068c6ba9186a16939eaf9993f0dab21ea6cc — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8188a105d675aa0dc47295d0aa263c5574ae6994c59e058e2a0f7b8c4ed890e2 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-82a357f4dc0d11ac01d09f3785422081482a834ab5bd069e99d1823aec324264 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c94d9504d7c2bb1c534d9c85744bbbbe2810353f383044b076a2d9255c2b7e75 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f07a8ab3363a61b30ea8baef943842cb2689f88dfed8b214272ef7c0fe9ad32e — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-5dae5cc6f34c` → identificador devolvido por ferramenta (sem arquivo)
- `F-012..F-021` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d075c7bcd3c9c1fbbb533375338b81309e8ebd7d3fd28d882df71195f8539267",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d172d4a6483aef12d5b6bdbeb31c8c3c2f6db92794fe3d45c1f510aaee4d9ba7

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Buttons must have discernible text

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:button-name

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-3049775918cf20de601f3ade85d8fdbdb3805ce950056f454a06a7409f6cf244 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c1a9610f089cbeee868f23860b3d533f7c2b696814cd4ac8c5af2d9a7039917f — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d172d4a6483aef12d5b6bdbeb31c8c3c2f6db92794fe3d45c1f510aaee4d9ba7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d187402b7ceb1b113998edab70c993e33fb976bce271e4c0acc71fe1571a090b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Nome do arquivo de evidência 'v3046-campo2-1.jpg' é <strong> clicável (abre visualizador), sem tabindex/role.

Esperado: Link/botão focável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar página 2 na paginação 3. clicar botão olho da linha 7 'Aurora Veloz' (Não comparecimento)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>pnip-propesc-nao-comparecimento>div>div:nth-of-type(3)>div>div>div>div>div>strong" — <strong> "v3046-campo2-1.jpg"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo57-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo58-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo59-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo65-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(6)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo66-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo60-1.pdf" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
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
  "cardId": "C-d187402b7ceb1b113998edab70c993e33fb976bce271e4c0acc71fe1571a090b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d3e1e47669177821d2db1f982c9076be69d2bda92aa165c62795ef45e5a710b5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Nenhum .br-footer nem <br-footer> no documento, em nenhuma rota.

Esperado: Rodapé do modelo de página do DS presente.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-a4cefb0fae15` → identificador devolvido por ferramenta (sem arquivo)
- `F-017` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d3e1e47669177821d2db1f982c9076be69d2bda92aa165c62795ef45e5a710b5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d43ed135de9ed3a4d3992d5c5b7256486653769ca3862546088a9f1fa91c1fd9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Links do breadcrumb apontam para '/portal-mpa' (Home) e '/portal-mpa/vistorias', sem o prefixo /pnip; ao clicar, a navegação vai para páginas 404.

Esperado: Links do breadcrumb que levem às rotas válidas (/pnip/portal-mpa...).

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar botão olho (br-button[icon="eye"]) da linha 1 'Coral Mansa IV' (aba Tramitando) 3. clicar 'Vistorias' no breadcrumb

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>br-breadcrumb" — <br-breadcrumb>

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>br-breadcrumb" — <br-breadcrumb>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>br-breadcrumb" — <br-breadcrumb>


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T13-10-41-180Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d43ed135de9ed3a4d3992d5c5b7256486653769ca3862546088a9f1fa91c1fd9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d81ddfd98cf0fb83a2c1bbf776c256347ecc04dca3d2de57b2994a35ff341738

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Na página de detalhe o primeiro cabeçalho é h3 ('Programa Nacional de Regularização...'), seguido de h4; não há h1 nem h2.

Esperado: Hierarquia de cabeçalhos iniciando em h1 sem saltos.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar botão olho (br-button[icon="eye"]) da linha 1 'Coral Mansa IV' (aba Tramitando)

Regra declarada: emag:1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(1)>div>h3" — <h3> "Programa Nacional de Regularização de Embarcação"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(1)>div:nth-of-type(1)>h3" — <h3> "Programa Nacional de Regularização de Embarcação"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-887e985657c2b2f666f91cbb4dd6aa2bbe2359e0a96dc9e98b8f6e69f8d572bb — B-21 · detalhe · cena 1280x900@modal · <h3> "Programa Nacional de Regularização de Embarcação": Detalhe da vistoria: a hierarquia começa num <h3> ("Programa Nacional de Regularização de Embarcação de Pesca"), seguido de <h4>; não há <h1> nem <h2>. Unidade única para o template do detalhe, ancorada na parada `detalhe` (o mesmo template da parada detalhe-menu não é contado de novo; auditoria.md § 5). Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
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
  "cardId": "C-d81ddfd98cf0fb83a2c1bbf776c256347ecc04dca3d2de57b2994a35ff341738",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d832224b9250498ed0f8004fec6259179b585933b397b3f3fff8b167e4ce8ad9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Detalhe de vistoria concluída: ícones Laudo/Protocolo/Arquivos (file, file-invoice, download) clicáveis, sem role, sem tabindex e sem nome (só protocolo tem title).

Esperado: Botões/links nativos focáveis com nome.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO (aba Concluídos) 2. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3069)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:td br-icon-base[style*=\"cursor\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d832224b9250498ed0f8004fec6259179b585933b397b3f3fff8b167e4ce8ad9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d84310d6a2a899da31bf17b6f2ab4a7fd14e88f61c58ec1c2898449d74b6c0b1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Checkbox 'selecionar todos' sem label, aria-label ou title; nome acessível vazio.

Esperado: Checkbox com nome acessível (ex.: 'Selecionar todas as vistorias').

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>thead>tr>th:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-50a27493b185c0bbb0179208240a74e28e88df151508b8845c55406c1030426e — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
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
  "cardId": "C-d84310d6a2a899da31bf17b6f2ab4a7fd14e88f61c58ec1c2898449d74b6c0b1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d9fa56c999518a051be01b63be71b191c121853bab5b0b98b19b0cde6c663f30

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Texto 'Vistoria pré agendada' branco sobre #888888, 14px: contraste ≈3,5:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar aba 'Agendar'

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-status-solicitacao-utils .bg-secondary-06 > .text-secondary-01" — Seletor não resolvido

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
  "cardId": "C-d9fa56c999518a051be01b63be71b191c121853bab5b0b98b19b0cde6c663f30",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d9feb9e302b31fbfb4bdeeafe9e725bdfd9a5d74429a675e20e098c171c791a4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "boleto.pdf" é <strong> com cursor:pointer, tabIndex -1, sem role; o clique abre visualizador de PDF, inalcançável por teclado; ao fechar o visualizador o foco vai ao body.

Esperado: Link ou botão nativo operável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3028)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>strong" — <strong> "boleto.pdf"
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>pnip-propesc-nao-comparecimento>div>div:nth-of-type(3)>div>div>div>div>div>strong" — <strong> "v3046-campo2-1.jpg"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(1)>div>strong" — <strong> "boleto.pdf"
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo57-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo58-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo59-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo65-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(6)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo66-1.pdf" · **oculto**: nao-renderizado
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(3)>div>div>strong" — <strong> "v3038-campo60-1.pdf" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d9feb9e302b31fbfb4bdeeafe9e725bdfd9a5d74429a675e20e098c171c791a4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-da68a4dfedef9a55952114e50939c4e43f569b373c79907886c249355089d2f4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Campo de pesquisa sem label; único identificador é o placeholder 'Pesquise aqui ...', que some ao digitar.

Esperado: Rótulo visível e associado ao campo de busca.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."

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
  "cardId": "C-da68a4dfedef9a55952114e50939c4e43f569b373c79907886c249355089d2f4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-da84a83f964fd27176f893ca9058935c6e1202819d4040492bc830972b4f5a88

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: Nenhum elemento .br-footer nem web component <br-footer> no documento (DOM claro e shadow roots abertos).

Esperado: Uma Área de Rodapé com o componente Footer (.br-footer ou <br-footer>), como o modelo de página do DS exige.

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-da84a83f964fd27176f893ca9058935c6e1202819d4040492bc830972b4f5a88",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-de1e057583dea9cbba49e4556b44e5372c60455d6e45a223b5bb87b84142cc67

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f07a8ab3363a61b30ea8baef943842cb2689f88dfed8b214272ef7c0fe9ad32e — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-de1e057583dea9cbba49e4556b44e5372c60455d6e45a223b5bb87b84142cc67",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-de5479c43f19293bdf1996140a29d7b5443d1e17121bda1bddf2c496f8fb32a5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: <title> da lista de vistorias é "PNIP", igual ao das demais rotas; não identifica a página.

Esperado: Título descritivo de cada página (p.ex. "Vistorias - PNIP").

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO (aba Concluídos)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|head>title" — <title> "PNIP" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-e1239ce061b0c926934b48cceda66c38d7b969c5195af4c3d94462c25ca91b88 — B-25 · sempre · cena 1280x900@modal · <title> "PNIP": Escalada E-01, origem: "autora" (decisão da escalada, 2026-10-01, D-61). O <title> é "PNIP" nas quatro paradas (lista, dois detalhes, modal): nomeia só o sistema, não muda entre rotas e não representa o conteúdo principal ("Vistorias", o detalhe de uma vistoria). Âncora não renderizada por natureza (elemento do <head>). Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-28bbbd8d240d` → identificador devolvido por ferramenta (sem arquivo)
- `F-192` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-de5479c43f19293bdf1996140a29d7b5443d1e17121bda1bddf2c496f8fb32a5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-de845388b76e176cb2a01e9bf68625c94f157da777ec46542e9f0ef47843148b

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: border-top-color: rgb(187, 187, 187) (#bbbbbb) não corresponde a nenhum token do DS

Esperado: Valor de token do DS; mais próximo: --gray-warm-20 (#cac9c0, distância RGB 21.12)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>hr" — <hr>

### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3d0bba33b34bc2711e9509cef93869bc9ba7b669e225cdf1054b589bb4d6f2dd — B-15 · detalhe-menu · cena 1280x900@detalhe-menu · <hr>: Separador do menu do avatar (<hr class="solid">): borda superior de 2 px na cor #bbb (rgb 187,187,187), que não é cor predefinida do Design System; declarada no CSS do componente do cabeçalho do app.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: cor-de-borda-pintada sustenta em detalhe-menu — alguma borda PINTADA (largura > 0) na cor {rgb(187, 187, 187)}. Medido: top: rgb(187, 187, 187) em 2px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-de845388b76e176cb2a01e9bf68625c94f157da777ec46542e9f0ef47843148b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e0b32fe7b3ddb5f780df3d7b804d10f98d99ee5c6069999c58d3a6c84fc8339a

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone user-times), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Atribuir vistoriador" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e0b32fe7b3ddb5f780df3d7b804d10f98d99ee5c6069999c58d3a6c84fc8339a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e0b3866c59b288b76224a74d6a198db7271458b53054cd32908aa253960f683f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O botão "×" que remove o filtro de data aplicado ("Exibindo vistorias a partir de 25/03/2026") não tem nome acessível.

Esperado: Nome acessível (ex.: aria-label="Remover filtro de data").

Janela: 1280×900 · interações desde o carregamento: 1. fill br-input[type="date"]:nth-child(2) input = 2026-03-25

Regra declarada: button-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.br-tag.interaction button.inverted" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-021` → identificador devolvido por ferramenta (sem arquivo)
- `F-222` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e0b3866c59b288b76224a74d6a198db7271458b53054cd32908aa253960f683f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e203393f0b52d3a527598fd41bb94617a366680e092fe48d091d66b061916849

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Buttons must have discernible text

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:button-name

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-12016f38bbfe6f3d2ddf321f52931758cf1254bf4eeefc27fb37ce683c6c5ce2 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-377e0c75de9f9a39252a341918da83b93669c82f954178b59b446ff438c5d245 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e203393f0b52d3a527598fd41bb94617a366680e092fe48d091d66b061916849",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e20b8202ed2173476a6f72ab2ea34279f0f4e9d2291a30a832d0d374ebad51ae

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: <title> do detalhe concluído /agendar-vistoria/…3069 é "PNIP".

Esperado: Título descritivo da página de detalhe.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO (aba Concluídos) 2. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3069)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|head>title" — <title> "PNIP" · **oculto**: nao-renderizado

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|head>title" — <title> "PNIP" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-e1239ce061b0c926934b48cceda66c38d7b969c5195af4c3d94462c25ca91b88 — B-25 · sempre · cena 1280x900@modal · <title> "PNIP": Escalada E-01, origem: "autora" (decisão da escalada, 2026-10-01, D-61). O <title> é "PNIP" nas quatro paradas (lista, dois detalhes, modal): nomeia só o sistema, não muda entre rotas e não representa o conteúdo principal ("Vistorias", o detalhe de uma vistoria). Âncora não renderizada por natureza (elemento do <head>). Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-2cbbf42128e1` → identificador devolvido por ferramenta (sem arquivo)
- `F-201` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e20b8202ed2173476a6f72ab2ea34279f0f4e9d2291a30a832d0d374ebad51ae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e33e7ed4f8b8a9b57b3875ac0a79627f71c0a569001e64aebcbcb24dfaf2b4de

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@modal

Observado: O primeiro link da página (href="/portal-mpa", "Home") não é uma âncora interna.

Esperado: O primeiro link da página é o salto para o conteúdo: âncora interna cujo alvo existe (e-MAG 1.5).

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até modal (8 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e33e7ed4f8b8a9b57b3875ac0a79627f71c0a569001e64aebcbcb24dfaf2b4de",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e3424b46fa9edd10e732525b855df7b36724e36a366bf1ec62bff0f80890bbc2

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone user-times), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Atribuir vistoriador" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e3424b46fa9edd10e732525b855df7b36724e36a366bf1ec62bff0f80890bbc2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e878409dcda65d608ef479dc281175c2805b21091f01467263db9a09a43a3a84

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os filtros Cidade, Porto, Vistoriador e Status são <span> com cursor:pointer e handler de clique, sem tabindex, sem papel e sem aria-expanded. Ficam fora da ordem de tabulação e não abrem pelo teclado.

Esperado: Controles operáveis pelo teclado, com papel de botão e estado expandido/recolhido.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(1)>span" — <span> "Cidade"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(2)>span" — <span> "Porto"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(3)>span" — <span> "Vistoriador"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(4)>span" — <span> "Status"

### Unidades candidatas (não são crédito)

- U-05b87158ac88b5d030d58ee8ec4975da77defd6f42e15bef94c2adc565bfce9f — B-11 · inicial · cena 1280x900@inicial · <span> "Cidade": As 4 etiquetas de filtro ("Cidade", "Porto", "Vistoriador", "Status"; span.br-tag.interaction) abrem o painel de opções ao clique (3/3 cargas), mas são <span> sem tabindex nem papel: não entram na ordem de Tab e Enter com foco não produz efeito (0/3). Só operáveis com mouse. O predicado mede a ausência de tabindex e role; o efeito do clique e a ausência de efeito do teclado são medidos em conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: atributos-ausentes sustenta em inicial — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-124a6e3df510b7411b1d60ba552eefccc737cd33b85d05267974881867d06c07 — B-11 · inicial · cena 1280x900@inicial · <span> "Status": As 4 etiquetas de filtro ("Cidade", "Porto", "Vistoriador", "Status"; span.br-tag.interaction) abrem o painel de opções ao clique (3/3 cargas), mas são <span> sem tabindex nem papel: não entram na ordem de Tab e Enter com foco não produz efeito (0/3). Só operáveis com mouse. O predicado mede a ausência de tabindex e role; o efeito do clique e a ausência de efeito do teclado são medidos em conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: atributos-ausentes sustenta em inicial — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6f0ac137d5bade8c86303e0afc551d4b53699c58fea6717d3a622ccd615710d1 — B-11 · inicial · cena 1280x900@inicial · <span> "Vistoriador": As 4 etiquetas de filtro ("Cidade", "Porto", "Vistoriador", "Status"; span.br-tag.interaction) abrem o painel de opções ao clique (3/3 cargas), mas são <span> sem tabindex nem papel: não entram na ordem de Tab e Enter com foco não produz efeito (0/3). Só operáveis com mouse. O predicado mede a ausência de tabindex e role; o efeito do clique e a ausência de efeito do teclado são medidos em conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: atributos-ausentes sustenta em inicial — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-ffc998ab00b11ff3f14640a0556517c49967185977f90f93e3a43477569ab1a2 — B-11 · inicial · cena 1280x900@inicial · <span> "Porto": As 4 etiquetas de filtro ("Cidade", "Porto", "Vistoriador", "Status"; span.br-tag.interaction) abrem o painel de opções ao clique (3/3 cargas), mas são <span> sem tabindex nem papel: não entram na ordem de Tab e Enter com foco não produz efeito (0/3). Só operáveis com mouse. O predicado mede a ausência de tabindex e role; o efeito do clique e a ausência de efeito do teclado são medidos em conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: atributos-ausentes sustenta em inicial — nenhum destes atributos presente: tabindex, role. Medido: ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role | ausentes: tabindex, role
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `inspeção DOM: tabindex=null, role=null nos 4 spans; sequência tabulável sem os filtros` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e878409dcda65d608ef479dc281175c2805b21091f01467263db9a09a43a3a84",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e8a85a3e7367662993a42342cfbe138fa95f6573c2d04454425b897089fab35a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Menu do avatar tem role="menu" mas o filho interativo é <button> "Sair" sem role="menuitem" ("Trocar unidade" é span).

Esperado: role=menu só com menuitem, ou remover role=menu.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger (Avatar com dropdown)

Regra declarada: aria-required-children

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden


### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-74113d615e85` → identificador devolvido por ferramenta (sem arquivo)
- `F-098` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e8a85a3e7367662993a42342cfbe138fa95f6573c2d04454425b897089fab35a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e8c127daf0de2a685843737900db2e25bd60cfaefed7c1f3db8ac981d9df0a79

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A tag "Nenhum filtro de data aplicado" tem texto #ffffff sobre #c5d4eb, 14px: contraste de 1,5:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: color-contrast

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>span" — <span> "Nenhum filtro de data aplicado"

### Unidades candidatas (não são crédito)

- U-294d06e9c9ac03ecc74fb602199737580e11736300a52c3df77daafce5eb8a3c — B-13 · inicial · cena 1280x900@inicial · <span> "Nenhum filtro de data aplicado": Etiqueta "Nenhum filtro de data aplicado" (br-tag primary-pastel-01 small): texto branco sobre #c5d4eb, 14 px peso 500 — contraste 1,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
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
  "cardId": "C-e8c127daf0de2a685843737900db2e25bd60cfaefed7c1f3db8ac981d9df0a79",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e905d32f9e329b04bec09a9da4b3bb4434309ac9631a7b79721e83a1c12d709d

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>br-input:nth-of-type(2) >>> div>input" — <input#br-input-9> [shadow]

### Unidades candidatas (não são crédito)

- U-f554dfad4ebdad41d4ce634506fd6d19a50a6051c8cafaa6b835f9ef49d5620d — B-05 · inicial · cena 1280x900@inicial · <input#br-input-9> [shadow]: Os dois campos de data do filtro de período (br-input type=date) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e905d32f9e329b04bec09a9da4b3bb4434309ac9631a7b79721e83a1c12d709d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e9bbc2d2ab1f571429054a83c6c43cb5c89c8aa2d2d5ca450dc2bf9caef09483

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Buttons must have discernible text

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:button-name

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-719e012653c9e138c309d9114860d8c4ca1d23331f29f580175ea72d282d9606 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b3e7529e3a437858f21a9fedcb26980f3dcedcf07f8b8e43d6d500141e508e1c — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e9bbc2d2ab1f571429054a83c6c43cb5c89c8aa2d2d5ca450dc2bf9caef09483",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e9e0b3f69b12df64c87eeced3451d03b80e39a725649ba6e910618f25b0f0cfe

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone trash), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Excluir vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e9e0b3f69b12df64c87eeced3451d03b80e39a725649ba6e910618f25b0f0cfe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ea105c27ccc8c577c0f14a4279d65e649368f6f0a1d05040a1523a9e0f0d1cc0

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-07d2b621292b581da4954c5639be7a8609cf001aa47f0b34539dc3947e0274dc — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ea105c27ccc8c577c0f14a4279d65e649368f6f0a1d05040a1523a9e0f0d1cc0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eb861babd227fdbfc4fc58041d074d5a726638eea67b5127ca9a57719dbf910f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Contador '7' de novos processos tem aria-hidden="true" e a informação fica só no title do span; o nome do link não inclui a contagem.

Esperado: Contagem disponível para tecnologia assistiva (ex.: texto oculto '7 novos processos').

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar #avatar-dropdown-trigger (Avatar com dropdown) 3. clicar 'Trocar unidade' (navega para /pnip/portal-mpa)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:a[href=\"/pnip/portal-mpa/processos\"] .br-tag.count" — Seletor não resolvido

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
  "cardId": "C-eb861babd227fdbfc4fc58041d074d5a726638eea67b5127ca9a57719dbf910f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ec0a5a4852763fd4592a087e590e68abda18e4b56a891977c2b25fee0d462c47

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-378ca27cdcd3ddaeff869d2dc65fb85c2dbae1863257673c49fff068452ab683 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ec0a5a4852763fd4592a087e590e68abda18e4b56a891977c2b25fee0d462c47",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ed0876ebcc166f8cad15e966f8fbacce4a549f62ffaf3dc68c1afc97c9e17a2c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Rota 3028: nenhum .br-footer nem <br-footer>.

Esperado: Rodapé do modelo de página do DS presente.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3028)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-2532f64176bc` → identificador devolvido por ferramenta (sem arquivo)
- `F-105` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ed0876ebcc166f8cad15e966f8fbacce4a549f62ffaf3dc68c1afc97c9e17a2c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ed51c3947b9f320eb7cc3d0dda217c3a535400bbb902a248643deb21791ecb36

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Table header text should not be empty

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:empty-table-header

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>thead>tr>th:nth-of-type(2)" — <th>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ed51c3947b9f320eb7cc3d0dda217c3a535400bbb902a248643deb21791ecb36",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ee2fa307c3afd13c51fa210d96b9acc4fc4527922c6ea1ab71ac4d6268a5b5bb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Ao fechar o diálogo "Atenção – Preencha todos os campos obrigatórios" com "OK, entendi", o foco vai para <body>: não volta ao botão Salvar nem ao primeiro campo em erro.

Esperado: Ao fechar o diálogo, o foco deve voltar ao controle de origem ou ao primeiro campo com erro.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[icon="eye"] 2. click Editar 3. fill Endereço = "" 4. fill Nome do responsável = "" 5. click Salvar 6. click "OK, entendi"

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(1)>div>br-button" — <br-button> "Exportar Vistorias"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(2)>br-button:nth-of-type(2)" — <br-button>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(1)>div:nth-of-type(2)>br-button" — <br-button>
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(5)>br-button:nth-of-type(2)" — <br-button>
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(3)>br-button:nth-of-type(2)" — <br-button>


### Unidades candidatas (não são crédito)

- U-481877d30106633e91c600afd8bd63dd50156a7e8b87608f720f917f60283052 — B-24 · modal · cena 1280x900@modal · <div> "Trocar embarcação da vistoria Busque e selecione": O br-modal "Trocar embarcação" (div.br-modal medium) não declara role dialog/alertdialog, aria-modal nem nome: a árvore de acessibilidade do Chromium não expõe nenhum diálogo quando ele está aberto. Só existe depois do clique em "Trocar embarcação da vistoria".
  - estados em que a unidade existe: modal
  - predicado de aceitação: atributos-ausentes sustenta em modal — nenhum destes atributos presente: role, aria-modal, aria-label, aria-labelledby. Medido: ausentes: role, aria-modal, aria-label, aria-labelledby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a1e04b93c057a4cf84a662046b003d90df9ca1cfe9e9c783133defa2a0bc8787 — B-27 · modal · cena 1280x900@modal · <div> "Trocar embarcação da vistoria Busque e selecione": Escalada E-06, origem: "autora" (decisão da escalada, 2026-10-01, D-61). Com o br-modal "Trocar embarcação" aberto, Tab sai do modal depois do último controle (Trocar) e percorre os botões do detalhe, o cabeçalho e o breadcrumb por trás do scrim antes de voltar: o foco não fica contido na Modal aberta. Só existe depois do clique em "Trocar embarcação da vistoria". Sem predicado na referência; medido por Tab real em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `interação no navegador: document.activeElement=BODY` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ee2fa307c3afd13c51fa210d96b9acc4fc4527922c6ea1ab71ac4d6268a5b5bb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ee4fa66cbb71b6d5ec5b47c77fdeb5fc22662764e4758986e1002f3dfa33552c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O menu do avatar tem role="menu", mas contém um <button> e conteúdo não estruturados como menuitem.

Esperado: Os filhos de role=menu devem ser menuitem; ou não usar role=menu.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: aria-required-children

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>div" — <div#avatar-menu> "Usuária de Testeusuaria.teste@exemplo.invalid SU" · **oculto**: nao-renderizado, aria-hidden, atributo hidden


### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-083` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ee4fa66cbb71b6d5ec5b47c77fdeb5fc22662764e4758986e1002f3dfa33552c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eedd5f346c55d96e31aba4794a21ef76621d9b67a53a853cbbc7de5af5b98b01

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Checkboxes de seleção de linha sem rótulo; nome acessível vazio (10 instâncias).

Esperado: Cada checkbox com nome que identifique a vistoria (ex.: 'Selecionar Coral Mansa IV').

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(2)>input" — <input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input" — <input>

### Unidades candidatas (não são crédito)

- U-07d2b621292b581da4954c5639be7a8609cf001aa47f0b34539dc3947e0274dc — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-0b56e5b10f4881a7605386c84f28bbcd225b3a6127a73c212dad3d0d8c45a4e5 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-19ca16582dcc40a9305397b4cebe70cf60687de565533ab4f4d5de3991446b95 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-2b33b7eba5e9c5af4e4fbea1a344d0a19086aa2b6a02cb38d30d56d8de042000 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-47b56f8da889530a10d5db47459e51252e664d92a5cadf585b1a90afb15ed1c1 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4e1a48a085fa1848925675355c50a9f84de93f9ffbc1e0fb5f4f22caaf7a6bfa — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6341b4d0d71c65cc5e698aec6269b94450f2785ffa61177947917f532001448e — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-80d427f0aba5699380a544bbe2c85dbca2b581b8471d21c72c60691c2e9c6636 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a80ba4fa0e4e8dcc3209bd5f984d110e3d9b52df1b836a9579647be5634914aa — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f9f3d45544d87746e9a1c7094a4cc62f5d90ef5f8242736a83ca2bd7164880a8 — B-06 · inicial · cena 1280x900@inicial · <input>: As 11 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e uma por linha) não têm rótulo: nenhum <label>, aria-label nem aria-labelledby; nome acessível vazio na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
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
  "cardId": "C-eedd5f346c55d96e31aba4794a21ef76621d9b67a53a853cbbc7de5af5b98b01",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eef9346cf35e10687b0fdce9f5f464f995b605175998a58c53c451225956e7c4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Diálogos Atribuir ("OK" x=709), Excluir ("Sim, excluir" x=646) e Notificar ("Sim, notificar" x=635): botão primário à esquerda de "Cancelar" (x=776).

Esperado: Ação de maior ênfase sempre à direita, de forma consistente.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="user-plus"] (Atribuir vistoriador)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-confirm" — Seletor não resolvido

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
  "cardId": "C-eef9346cf35e10687b0fdce9f5f464f995b605175998a58c53c451225956e7c4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f0e855bd6a11cadf625ecd96b23e31f0544a28c20fc174999b2f3909793df03b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem do item "Sair" (exit-icon.png) não tem atributo alt.

Esperado: alt="" (decorativa, já que há o texto "Sair") ou alt descritivo.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: image-alt

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>div>button>img" — <img>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>div>button>img" — <img> · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9bc6e7a1ad04bfa95826d4923672ddd61d6dec27b94086ecea975dbb3ea09d60 — B-16 · detalhe-menu · cena 1280x900@detalhe-menu · <img>: Ícone do botão "Sair" do menu do avatar (<img src="../../../assets/images/exit-icon.png">) sem atributo alt — nem texto alternativo nem alt vazio de imagem decorativa.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: atributos-ausentes sustenta em detalhe-menu — nenhum destes atributos presente: alt. Medido: ausentes: alt
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9c7e2ca111d2c9a7961c1ee8e3072a064ed3c2f32391f51ce2f7fc92f0cbd327 — B-18 · detalhe-menu · cena 1280x900@detalhe-menu · <button> "Sair": Botão "Sair" do menu do avatar fora do padrão HTML: tem atributo href (inexistente em <button>) e contém um <p>, conteúdo de fluxo que o modelo de conteúdo de <button> não admite. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-107` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f0e855bd6a11cadf625ecd96b23e31f0544a28c20fc174999b2f3909793df03b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f15526d737db965f84146414d7e795d51318ee79f374ebf84ed9e49a486a22ea

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Rota 3028: sem link de salto para o conteúdo; primeiro link é "Home" do breadcrumb.

Esperado: Primeiro link levando ao conteúdo principal.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3028)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-43b44d2da380` → identificador devolvido por ferramenta (sem arquivo)
- `F-106` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f15526d737db965f84146414d7e795d51318ee79f374ebf84ed9e49a486a22ea",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f17139e62f3d52462ba98ef53ae362514c704956c0d92a5977f8ca890f9e25f1

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: Images must have alternative text

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: axe:image-alt

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>pnip-header>br-header >>> header>div>div:nth-of-type(1)>div>img" — <img> [shadow]
- "body>pnip-root>pnip-header>div>div>div>button>img" — <img>

### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9bc6e7a1ad04bfa95826d4923672ddd61d6dec27b94086ecea975dbb3ea09d60 — B-16 · detalhe-menu · cena 1280x900@detalhe-menu · <img>: Ícone do botão "Sair" do menu do avatar (<img src="../../../assets/images/exit-icon.png">) sem atributo alt — nem texto alternativo nem alt vazio de imagem decorativa.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: atributos-ausentes sustenta em detalhe-menu — nenhum destes atributos presente: alt. Medido: ausentes: alt
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9c7e2ca111d2c9a7961c1ee8e3072a064ed3c2f32391f51ce2f7fc92f0cbd327 — B-18 · detalhe-menu · cena 1280x900@detalhe-menu · <button> "Sair": Botão "Sair" do menu do avatar fora do padrão HTML: tem atributo href (inexistente em <button>) e contém um <p>, conteúdo de fluxo que o modelo de conteúdo de <button> não admite. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f17139e62f3d52462ba98ef53ae362514c704956c0d92a5977f8ca890f9e25f1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f1cae1c0dee91dc41811ebc3b69542460e964c2ca28ccee0cdea07526ecf5678

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Nome do botão fechar é aria-label="Close this dialog" (inglês) em página lang="pt-br", sem lang.

Esperado: Rótulo em português ("Fechar") ou lang="en".

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (abre /agendar-vistoria/...3028) 2. click strong "boleto.pdf"

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

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
  "cardId": "C-f1cae1c0dee91dc41811ebc3b69542460e964c2ca28ccee0cdea07526ecf5678",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f1e7f52849e8d20ac4187e5b6230938d4a69f3c7d0b07171696809dff4b5fefd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão de remover o filtro aplicado ('Vila do Farol') contém só ícone fa-times, sem aria-label/título; nome vazio.

Esperado: Nome acessível (ex.: 'Remover filtro Vila do Farol').

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar filtro 'Cidade' 3. clicar 'Vila do Farol'

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel .br-tag button.br-button.inverted.circle" — Seletor não resolvido

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
  "cardId": "C-f1e7f52849e8d20ac4187e5b6230938d4a69f3c7d0b07171696809dff4b5fefd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f36bb62f937c50afeb24d97562bc26d7691baf653847206ddf798ec2be8a7129

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Área 'Selecione o(s) arquivo(s)' do boleto obrigatório repassa o clique ao input file, que tem display:none; nada na seção é focável, então o agendamento não pode ser concluído por teclado.

Esperado: Controle de upload focável e operável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar aba 'Agendar' (#AGENDAR) 3. clicar botão 'Agendar' (br-button[icon="calendar"]) da linha 1

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(6)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(3)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(4)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(5)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(6)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(7)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(8)>div>div:nth-of-type(1)" — <div> "Selecione o(s) arquivo(s)" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T13-06-53-184Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f36bb62f937c50afeb24d97562bc26d7691baf653847206ddf798ec2be8a7129",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f42c106b9a1932fbda092acf885a3b3e74f728d2fd9b0659b7d3f87bebe03e1e

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elements must meet minimum color contrast ratio thresholds

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: axe:color-contrast

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

### Unidades candidatas (não são crédito)

- U-16826af28e0996f408c83115a4435f7af40ac4cc53bf08f36e9dbbac871436f1 — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f42c106b9a1932fbda092acf885a3b3e74f728d2fd9b0659b7d3f87bebe03e1e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f5d030d66a1632aaac35647f3309c212d146a41958ab37ab1a3e3397976a7497

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Divisor do menu do avatar com border-top-color #bbbbbb (sem token do DS).

Esperado: Cor de token do DS.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger (Avatar com dropdown)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>hr" — <hr> · **oculto**: nao-renderizado, aria-hidden

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>hr" — <hr>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div>div>div:nth-of-type(2)>hr" — <hr> · **oculto**: nao-renderizado, aria-hidden


### Unidades candidatas (não são crédito)

- U-060619c23f438737b6ceda1f36f200d1431c490df3fd7941c57b2f4a1a8679bc — B-17 · detalhe-menu · cena 1280x900@detalhe-menu · <div#avatar-menu> "Usuária de Teste usuaria.teste@exemplo.invalid S": Menu do avatar (div#avatar-menu.br-list) declara role="menu" e não tem nenhum descendente com papel menuitem: o "Sair" é um <button> sem papel e "Trocar unidade" um <span>. O papel declarado não corresponde ao conteúdo. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-3d0bba33b34bc2711e9509cef93869bc9ba7b669e225cdf1054b589bb4d6f2dd — B-15 · detalhe-menu · cena 1280x900@detalhe-menu · <hr>: Separador do menu do avatar (<hr class="solid">): borda superior de 2 px na cor #bbb (rgb 187,187,187), que não é cor predefinida do Design System; declarada no CSS do componente do cabeçalho do app.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: cor-de-borda-pintada sustenta em detalhe-menu — alguma borda PINTADA (largura > 0) na cor {rgb(187, 187, 187)}. Medido: top: rgb(187, 187, 187) em 2px
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-c3f9be4c2392` → identificador devolvido por ferramenta (sem arquivo)
- `F-092` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f5d030d66a1632aaac35647f3309c212d146a41958ab37ab1a3e3397976a7497",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f700f7c9308c1b9973343046a3cefec6c6842506506c6fab70b406ff1b4de554

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Detalhe da vistoria NAO COMPARECIMENTO: os ícones Laudo (file), Protocolo (file-invoice) e Arquivos (download) são <br-icon-base> clicáveis (o Laudo abre o PDF), sem foco (tabIndex -1), sem papel e sem nome; o <i> interno tem aria-hidden.

Esperado: Botões ou links focáveis, com nome acessível (ex.: "Ver laudo", "Protocolo de recebimento", "Baixar arquivos").

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(1) br-button[icon="eye"] (situação NAO COMPARECIMENTO)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-icon-base[style*=\"cursor: pointer\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção DOM` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f700f7c9308c1b9973343046a3cefec6c6842506506c6fab70b406ff1b4de554",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f788db18194e556b2b55ebf5adce7d3525db991f1ddb47c53436c2bcae135dd8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Rota 3037: nenhum .br-footer nem <br-footer>.

Esperado: Rodapé do modelo de página do DS presente.

Janela: 1280×900 · interações desde o carregamento: 1. click pnip-filter-panel span.br-tag "Cidade" 2. click opção "Barra Nova" 3. click tbody tr:nth-child(4) br-button[icon="eye"] (Vistoria preenchida, /agendar-vistoria/...3037) 4. click br-button[label="Mostrar"] (1º)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body" — <body> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-4d487205fb14` → identificador devolvido por ferramenta (sem arquivo)
- `F-353` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f788db18194e556b2b55ebf5adce7d3525db991f1ddb47c53436c2bcae135dd8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f88159a581379df653c068697adc87d2453f72ca3ccbd9963e74f05d3c1968ec

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Editar dados da vistoria: não há h1 nem h2; o primeiro título é o h3 "Programa Nacional de Regularização de Embarcação de Pesca", seguido de h4.

Esperado: Hierarquia de títulos com h1 principal, sem pular níveis.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(2) br-button[icon="eye"] 2. click Editar (pnip-propesc-detalhes-vistoria br-button[icon="edit"])

Regra declarada: page-has-heading-one

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|" — <html> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-169` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f88159a581379df653c068697adc87d2453f72ca3ccbd9963e74f05d3c1968ec",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f93e21eeeaf86b0afcd997ac8ea3aa39dbd4694ee572252c9b8e01750365da9d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Opções da lista de filtro (6 cidades) são <label> sem input/role nem tabindex; só podem ser escolhidas com mouse.

Esperado: Opções focáveis e selecionáveis por teclado (ex.: radio/listbox).

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar filtro 'Cidade'

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel .br-select .br-radio label" — Seletor não resolvido

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
  "cardId": "C-f93e21eeeaf86b0afcd997ac8ea3aa39dbd4694ee572252c9b8e01750365da9d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f96034830da5eb5e82a17910171a75e12e824760863d9bc3bf67ba7429337490

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na paginação, cada link de página está num <li> aninhado diretamente em outro <li>, sem <ul>/<ol> pai.

Esperado: Um único <li> por item dentro do <ul>.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: listitem

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li" — <li> "1"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(3)>li" — <li> "2"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(4)>li" — <li> "3"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(5)>li" — <li> "4"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-a7458b215734` → identificador devolvido por ferramenta (sem arquivo)
- `F-086` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f96034830da5eb5e82a17910171a75e12e824760863d9bc3bf67ba7429337490",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fa723f2b373168e37d8fdbb5e3239d7b8c7296b0f455d5106294a2fd174d82d7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Campo é obrigatório (vazio gera 'Campo obrigatório'), mas o rótulo não tem asterisco nem indicação e o input não tem required/aria-required.

Esperado: Indicação visível e programática de campo obrigatório antes do envio.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar botão olho (br-button[icon="eye"]) da linha 1 'Coral Mansa IV' (aba Tramitando) 3. clicar 'Editar' em Dados da vistoria

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input[formcontrolname=\"nomeEmbarcacao\"]" — Seletor não resolvido

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
  "cardId": "C-fa723f2b373168e37d8fdbb5e3239d7b8c7296b0f455d5106294a2fd174d82d7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fc5d01d9eabd1638019c84404382ef132e8d9a91a5fbf28c95dc7c2b03b56471

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Textarea 'Descrever o motivo do não comparecimento' sem id/for nem aria-label; o <label> irmão não está associado (labels.length=0).

Esperado: Rótulo associado ao textarea.

Janela: 1280×900 · interações desde o carregamento: 1. carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. clicar página 2 na paginação 3. clicar botão olho da linha 7 'Aurora Veloz' (Não comparecimento)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>pnip-propesc-nao-comparecimento>div>div:nth-of-type(2)>div>div>textarea" — <textarea>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(4)>div:nth-of-type(2)>div:nth-of-type(3)>div>textarea" — <textarea> "Complemente aqui o texto da conclusão se desejar" · **oculto**: nao-renderizado


### Unidades candidatas (não são crédito)

- U-238f9e8879e41566f840160f72c03e67a02b73d7a42128f02a5935cc250e0e6f — B-20 · detalhe-menu · cena 1280x900@detalhe-menu · <textarea>: Detalhe da vistoria de não comparecimento: a <textarea> do motivo tem um <label> "Descrever o motivo do não comparecimento" como irmão, mas sem for (e a textarea sem id): o rótulo não está associado; nome acessível vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-11-11T13-01-09-011Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fc5d01d9eabd1638019c84404382ef132e8d9a91a5fbf28c95dc7c2b03b56471",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fcb7c01d49a7010989951f71720437587f7808e5c22a454e4215e9636ccd21b1

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone bell), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Notificar solicitante da vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fcb7c01d49a7010989951f71720437587f7808e5c22a454e4215e9636ccd21b1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fe41909e27a1069722f6c0362365ff89b7a0b609f4a0ae2b2c68cc880d63cb23

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone user-plus), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Atribuir vistoriador" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fe41909e27a1069722f6c0362365ff89b7a0b609f4a0ae2b2c68cc880d63cb23",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fee0c02a724f32f24227e648bbe3a46886373b2cf86d6eb652f9499c157c2da4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No breadcrumb (shadow DOM), o item Home é um <a href="/portal-mpa"> que contém um <button aria-label="">: controles interativos aninhados, com duas paradas de tabulação ("A Home" e "BUTTON Home") para um mesmo destino.

Esperado: Um único controle interativo (link) para Home, sem botão aninhado.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>br-breadcrumb" — <br-breadcrumb>

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>br-breadcrumb" — <br-breadcrumb>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>br-breadcrumb" — <br-breadcrumb>


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `inspeção do shadowRoot de br-breadcrumb; sequência tabulável` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fee0c02a724f32f24227e648bbe3a46886373b2cf86d6eb652f9499c157c2da4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ff19d6ec279a418e1155c116fc3f4eb52c3b1a994dc501f2b4797156302ef67c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O botão de fechar do diálogo tem aria-label="Close this dialog", em inglês, numa página lang="pt-br" e sem marcação de idioma.

Esperado: Nome em português (ex.: "Fechar") ou trecho marcado com lang="en".

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(1) br-button[icon="eye"] 3. click br-icon-base[icon-name="file"] (Laudo)

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção DOM` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ff19d6ec279a418e1155c116fc3f4eb52c3b1a994dc501f2b4797156302ef67c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ff2df9ea12a381809967e84c354d61c6fb987993192120e83720a56045afb524

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem nome acessível (br-button)

Esperado: Nome acessível não vazio — por conteúdo, aria-labelledby, aria-label ou title

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: wcag:4.1.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-12016f38bbfe6f3d2ddf321f52931758cf1254bf4eeefc27fb37ce683c6c5ce2 — B-07 · inicial · cena 1280x900@inicial · <button> [shadow]: O botão de abrir a vistoria (ícone de olho) de cada linha não tem nome acessível: sem texto, aria-label vazio, sem title (o hospedeiro br-button também não tem title, ao contrário das outras três ações da linha). Papel button com nome "" na árvore do Chromium. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-377e0c75de9f9a39252a341918da83b93669c82f954178b59b446ff438c5d245 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ff2df9ea12a381809967e84c354d61c6fb987993192120e83720a56045afb524",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ff9ecd1185b2bf8d4533bb3d2b6a4ba381710ef35681f95b73d40a668f6de6be

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: <br-button> só com ícone (ícone trash), sem label nem texto visível no slot e sem o atributo circle; nome acessível "Excluir vistoria" não é rótulo visível

Esperado: Rótulo visível no botão (o check não acusa a variante circular, classe circle, pela exceção do legado citado na descrição)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: [regra citada]

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ff9ecd1185b2bf8d4533bb3d2b6a4ba381710ef35681f95b73d40a668f6de6be",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
