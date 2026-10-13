# Revisão semântica — pacote fechado

Versão: flow-semantic-1.5.0 · 173 cartões únicos · 173 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 173 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 291 sujeitos · 173 cartão(ões) sem evidência verificada · 129 com unidade candidata · estimativa **1038 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 35 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-0095a5b78500f9f5b30a0596e36f75e6ea4eba1df8e3bb81339f345e433a0d36

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
  "cardId": "C-0095a5b78500f9f5b30a0596e36f75e6ea4eba1df8e3bb81339f345e433a0d36",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0180c619e5a8119bd0c794e692dd277c378eb6c6c9a24447acbf972741103252

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

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
  "cardId": "C-0180c619e5a8119bd0c794e692dd277c378eb6c6c9a24447acbf972741103252",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-025a8fb83493fe3ac602f7a6a56a09ea0c8561afeaf3c7824ddb2b7821a1d5f5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O campo de pesquisa (input#search no shadow DOM) não tem label. O único texto identificador é o placeholder "Pesquise aqui ...", que some ao digitar.

Esperado: O campo deve ter uma etiqueta associada (label for/aria-labelledby ou aria-label) que identifique o que se pesquisa.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:6.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-025a8fb83493fe3ac602f7a6a56a09ea0c8561afeaf3c7824ddb2b7821a1d5f5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-03661dbf6b1fda262188fbddefc2fb135604a99aca64dfdff71ca2547cc213e3

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
  "cardId": "C-03661dbf6b1fda262188fbddefc2fb135604a99aca64dfdff71ca2547cc213e3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-07a32be8e15b0206abf581dc1821aa7fc60ab2917a182e0662c0a9dc0e265fdb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No botão "Sair", <img src="../../../assets/images/exit-icon.png"> não tem atributo alt.

Esperado: Imagem decorativa ao lado do texto "Sair" deve ter alt="".

Janela: 1280×900 · interações desde o carregamento: 1. Clique no botão do avatar

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
  "cardId": "C-07a32be8e15b0206abf581dc1821aa7fc60ab2917a182e0662c0a9dc0e265fdb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0a8a6374c2ce83911aa7a9b7f5000df4f74afb4cf4a1238c2634ad0535054e30

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c107963b013ece13fc69392f42f23faf374a86814164af59c37a7353b97fd898 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0a8a6374c2ce83911aa7a9b7f5000df4f74afb4cf4a1238c2634ad0535054e30",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0adabfa0591526281d82a32d4f854b46e90b544264cabde87011a47ff3794a1e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A trilha é renderizada como <div class="br-breadcrumb"><ul class="crumb-list">, sem elemento nav nem rótulo de região.

Esperado: A trilha deve ser uma região de navegação rotulada (nav com aria-label, ex.: "Breadcrumb"), como no componente Breadcrumb do padrão gov.br.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0adabfa0591526281d82a32d4f854b46e90b544264cabde87011a47ff3794a1e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0c29faa639fbc28afb7feaf425505cd0aaf440e6bb686aefa9260df2a4ee2be0

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
  "cardId": "C-0c29faa639fbc28afb7feaf425505cd0aaf440e6bb686aefa9260df2a4ee2be0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0d3f657f038bc41ec368a8922ce0e7745b46d959103508ae58b4b709d5d838da

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@modal

Observado: O primeiro link da página (href="/portal-mpa", "Home") não é uma âncora interna.

Esperado: O primeiro link da página é o salto para o conteúdo: âncora interna cujo alvo existe (e-MAG 1.5).

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até modal (8 passo(s))

Regra declarada: ds:page-skip-link

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
  "cardId": "C-0d3f657f038bc41ec368a8922ce0e7745b46d959103508ae58b4b709d5d838da",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0e68005fd7c0f1cfaac213dd4aeb4a90d7706cedbca94f06196a8115ed1b3e9a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O status "Vistoria agendada" (14px, peso 500) é rgb(255,255,255) sobre rgb(79,151,209): contraste de 3,14:1.

Esperado: O contraste do texto de status deve ser de pelo menos 4,5:1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.3

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

- `../../tmp/pw-0/page-2026-10-12T08-31-21-824Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0e68005fd7c0f1cfaac213dd4aeb4a90d7706cedbca94f06196a8115ed1b3e9a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0fad2111e6ce49e022034a1e40023907a667610846315a6193ee753fe440e453

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
  "cardId": "C-0fad2111e6ce49e022034a1e40023907a667610846315a6193ee753fe440e453",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-143d32200d5585a1be15b00b439e609b6d81f145dd167094ccf5456c21451070

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
  "cardId": "C-143d32200d5585a1be15b00b439e609b6d81f145dd167094ccf5456c21451070",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-150a41be68bddf881195c7fa7e189dfa5defc5a9d5f3478dbdd2126907cf9ae2

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
  "cardId": "C-150a41be68bddf881195c7fa7e189dfa5defc5a9d5f3478dbdd2126907cf9ae2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-15b90f54b53caa9bf5e42017be1492cbf587fef42622a5417733971d6c483716

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: padding: 0px 6px (fora da escala: 6px, 6px, 6px)

Esperado: Múltiplos de 4px

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: ds:token-spacing

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>br-breadcrumb >>> div>ul>li:nth-of-type(2)>a" — <a> "Vistorias" [shadow]

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-15b90f54b53caa9bf5e42017be1492cbf587fef42622a5417733971d6c483716",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-162daa9855be116bc568f1c956202f67020c658f81e7c48d2b93fea9596ad16f

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-35a1f7371e59f01053d63393c5ee402d75453afba1a50119725e8b0ef7b7ffc5 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-162daa9855be116bc568f1c956202f67020c658f81e7c48d2b93fea9596ad16f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1744e92305c850d67f3e11d221b482fe57eb28fc378c94cf86c5b8868cfca692

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

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
  "cardId": "C-1744e92305c850d67f3e11d221b482fe57eb28fc378c94cf86c5b8868cfca692",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-18012e0752ecd548c20a4347b5c0c56d852b0bcbd40786bff8e0beecc0d8fa29

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão 'Menu' (#navigation, data-target="#main-navigation") não faz nada ao ser clicado: não existe elemento #main-navigation no documento nem em shadow roots, e nenhum menu aparece.

Esperado: O botão Menu abre o menu principal (componente Menu) ou não é exibido.

Janela: 1280×900 · interações desde o carregamento: 1. Clique no botão 'Menu' do cabeçalho

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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
  "cardId": "C-18012e0752ecd548c20a4347b5c0c56d852b0bcbd40786bff8e0beecc0d8fa29",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-19fba2f7af37c4f0d835c8076f5126c9158142e2b1484718b7c081a3b7976ae0

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
  "cardId": "C-19fba2f7af37c4f0d835c8076f5126c9158142e2b1484718b7c081a3b7976ae0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1c583187890d8b9dfd18afeb2b426492db70614f27140819f088fec450046839

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: margin-top: -5px inline no botão 'Limpar Filtro' (fora da escala de espaçamento do DS).

Esperado: Espaçamento da escala do DS (múltiplos de 4px).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: ds-token-spacing

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(1)>pnip-filter-panel>div>div:nth-of-type(5)>button" — <button> "Limpar Filtro"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-221` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1c583187890d8b9dfd18afeb2b426492db70614f27140819f088fec450046839",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1c9e73a6738b8de472cb8786e33c6ffe1b24c8de5e55c65a89b0303e6579825f

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9a56858ccf8efa67d6cb2c9c8a8aaf3c02ab1069eece36e12a20fd44ae311f7a — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1c9e73a6738b8de472cb8786e33c6ffe1b24c8de5e55c65a89b0303e6579825f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1d0cf937205fa8288446ff120423b5d020908e80b415a8892467108eb72a01c9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Depois de aplicar um filtro, a tag "Barra Nova" tem um botão de remover (<button class="br-button inverted circle"><i class="fas fa-times"></i></button>) sem texto, aria-label nem title: nome acessível vazio.

Esperado: O botão de remover filtro deve ter nome acessível (ex.: aria-label="Remover filtro Barra Nova").

Janela: 1280×900 · interações desde o carregamento: 1. Clique no filtro "Cidade" 2. Clique na opção "Barra Nova"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel .br-tag button" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-12T08-34-01-203Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1d0cf937205fa8288446ff120423b5d020908e80b415a8892467108eb72a01c9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-232de7672e5e80ee45d7c9b9c613dd44c4b76ae85d3a97e34030504cc0c48745

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

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
  "cardId": "C-232de7672e5e80ee45d7c9b9c613dd44c4b76ae85d3a97e34030504cc0c48745",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-242e3306abd47e858964f2536cccd0caa9d961f55c854e55dfdec6f133131023

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-0258a2251c421932d6e11f3c0ce23150e365764ed2e697c7e9c5c6825933bb54 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-242e3306abd47e858964f2536cccd0caa9d961f55c854e55dfdec6f133131023",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-24362bcc275207987436da3e974763047beb99f1712cfc5d061d123a7ea9b20f

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
  "cardId": "C-24362bcc275207987436da3e974763047beb99f1712cfc5d061d123a7ea9b20f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2572f573b64a3f40f32517fdd6c9b7c96959b73931597e2d0e290ba73aed4739

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
  "cardId": "C-2572f573b64a3f40f32517fdd6c9b7c96959b73931597e2d0e290ba73aed4739",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-25996c94a42cfa59554b98cc43861f1af1512379db482c6e9ccae936f0eceffe

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
  "cardId": "C-25996c94a42cfa59554b98cc43861f1af1512379db482c6e9ccae936f0eceffe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-26fbbfec18e46457ae14520782172f0773dcc64a46c6063c9f0160c8c8f45a78

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão 'visualizar' (ícone fa-eye) de cada linha da tabela: o <button> interno tem aria-label="" e não tem title nem texto; nome acessível vazio (aparece como 'button' sem nome na árvore de acessibilidade). Ocorre em todas as abas.

Esperado: Botão só com ícone deve ter nome acessível descritivo (ex.: aria-label/title 'Visualizar vistoria').

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-177` → identificador devolvido por ferramenta (sem arquivo)
- `F-186` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-265` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-26fbbfec18e46457ae14520782172f0773dcc64a46c6063c9f0160c8c8f45a78",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-27794226c27e7a6cfbd86c80e32ba24e39d2b9cfa1c7977f1df1f9731de8b5ea

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: O primeiro link da página (href="/portal-mpa", "Home") não é uma âncora interna.

Esperado: O primeiro link da página é o salto para o conteúdo: âncora interna cujo alvo existe (e-MAG 1.5).

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: ds:page-skip-link

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
  "cardId": "C-27794226c27e7a6cfbd86c80e32ba24e39d2b9cfa1c7977f1df1f9731de8b5ea",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2c4ccbdd63fed6a7e61a28aa3daf0925a3e8bfe5cba0d5a4e2ec12bfe331c879

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Campo de pesquisa da tabela tem apenas placeholder 'Pesquise aqui ...' como identificação; sem <label>, aria-label ou aria-labelledby.

Esperado: Rótulo associado ao campo; placeholder não substitui etiqueta (e-MAG 6.2).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:6.2

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
  "cardId": "C-2c4ccbdd63fed6a7e61a28aa3daf0925a3e8bfe5cba0d5a4e2ec12bfe331c879",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2e3e40699e7dfb7f51cb2a8af03290ad4070d08edb58c10a01c6c824ebf7cc82

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
  "cardId": "C-2e3e40699e7dfb7f51cb2a8af03290ad4070d08edb58c10a01c6c824ebf7cc82",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-320bed2a8883b29cd40b6afbceb228b44600a4c2173f80dc7f0b23da0785f398

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
  "cardId": "C-320bed2a8883b29cd40b6afbceb228b44600a4c2173f80dc7f0b23da0785f398",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3278db857b1bd7cf076f02b5259a3c6b15ffa8a208c6b46bcb460437eb14e6a1

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
  "cardId": "C-3278db857b1bd7cf076f02b5259a3c6b15ffa8a208c6b46bcb460437eb14e6a1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-33af3b05da604dbcf46127a72b95de25781803352c4ef84791e65a8714ae3d9c

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Nenhum elemento .br-footer nem web component <br-footer> no documento (DOM claro e shadow roots abertos).

Esperado: Uma Área de Rodapé com o componente Footer (.br-footer ou <br-footer>), como o Template Base exige.

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: ds:page-footer

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
  "cardId": "C-33af3b05da604dbcf46127a72b95de25781803352c4ef84791e65a8714ae3d9c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-361292978d71f6dc63bed5dc2076072523239054395d8d0af9cf65e9936bcfde

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f723c3af7f206deab86d98a6537a4b8d0edbbcada8c6ef2af6c8570d58c6ea99 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-361292978d71f6dc63bed5dc2076072523239054395d8d0af9cf65e9936bcfde",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3a2c9ff2cfa975e316f62c474539590a7f3af4bfa6a0ba183d5aabda5065bca4

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
  "cardId": "C-3a2c9ff2cfa975e316f62c474539590a7f3af4bfa6a0ba183d5aabda5065bca4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3a2d282e8948512b1d4898bed73d4d57720589985085898e841e660906a1bf67

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
  "cardId": "C-3a2d282e8948512b1d4898bed73d4d57720589985085898e841e660906a1bf67",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3a35b7d201054367b8354b62d55e1744760d46f5c66ebd61e55500d57fcba563

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f4c4b8d4dce8ec5c0563c669076815a62a663913fd2dc5d9f0800feb47660c62 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3a35b7d201054367b8354b62d55e1744760d46f5c66ebd61e55500d57fcba563",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3bdc79c9e4d916158fa0d0c13a410ee1eebd7eabba873191c2d3cba932c7422f

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@modal

Observado: padding: 0px 6px (fora da escala: 6px, 6px, 6px)

Esperado: Múltiplos de 4px

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até modal (8 passo(s))

Regra declarada: ds:token-spacing

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>br-breadcrumb >>> div>ul>li:nth-of-type(2)>a" — <a> "Vistorias" [shadow]

### Unidades candidatas (não são crédito)

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
  "cardId": "C-3bdc79c9e4d916158fa0d0c13a410ee1eebd7eabba873191c2d3cba932c7422f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3d7a01569998a6a962f7d067d06bfb4de37f56607b58107bcf44682ab1f37fae

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-cd1bf589230dd069e95d596ab76a47f1eeff2d20a5b45d248f6be9d4a03a2fff — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3d7a01569998a6a962f7d067d06bfb4de37f56607b58107bcf44682ab1f37fae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3e9755be9fb1f43120833ee7ffd2aece3300e33ed5014caf046966efdc0b0805

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As tags de filtro 'Cidade', 'Porto', 'Vistoriador' e 'Status' são <span> com cursor:pointer, que abrem a lista de opções ao clique, mas têm tabIndex -1, nenhum papel e nenhum nome de controle; não recebem foco por teclado.

Esperado: Controles de filtro focáveis e operáveis por teclado, com papel de botão e estado expandido.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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
  "cardId": "C-3e9755be9fb1f43120833ee7ffd2aece3300e33ed5014caf046966efdc0b0805",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3ef33509b4c1cf163c56bcdcc80c7f35d42ff3b043e8d20aad9e90759c01eb34

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Não há .br-footer nem <br-footer> no documento (DOM e shadow roots).

Esperado: Área de Rodapé do Template Base com o componente Footer.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: ds-page-footer

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-218` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3ef33509b4c1cf163c56bcdcc80c7f35d42ff3b043e8d20aad9e90759c01eb34",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3f539ade5b13119dddf9e4034b54039f171fe6d7b3746a7ca29fe0bb85589195

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-7426e44eda093679f1f4893f006351774a9c67a087a32d79b722e14b9f9f8923 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-3f539ade5b13119dddf9e4034b54039f171fe6d7b3746a7ca29fe0bb85589195",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-40316d2aa07c21c895530515067c47c3e308d008f07c35176bc29dc9765d83f9

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-45c20706f1d48bc1746de862e07a2bebfa8d36d3c0e635f9b31e3bf29f73ac52 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-40316d2aa07c21c895530515067c47c3e308d008f07c35176bc29dc9765d83f9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4039c7a0a707d86129ac2213fe861263fade2f84e2973b14fd03c28b93fc90a2

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-e8a833be6f8e67c0174db0b62af794a56b992fcb720b940ff7e1902b393b2536 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4039c7a0a707d86129ac2213fe861263fade2f84e2973b14fd03c28b93fc90a2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-41ff82e7ebf4abcc6413b83c407446f2e8af29adbd32426dd20b565d549cdef9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O botão só com ícone de olho em cada linha (abre o detalhe/agendamento da vistoria) não tem nome: o botão interno tem aria-label="" e o host não tem title; o ícone tem aria-hidden.

Esperado: O botão deve ter nome acessível que descreva a ação (ex.: "Visualizar vistoria").

Janela: 1280×900 · interações desde o carregamento: nenhuma

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

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-41ff82e7ebf4abcc6413b83c407446f2e8af29adbd32426dd20b565d549cdef9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4353e5b586f99a3f195bcbd8d17fe2d91b596fea43a96a22e69cf5452be1df89

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A página não tem <h1>; o único título é <h2>Vistorias</h2>.

Esperado: Um título principal de nível 1 identificando o conteúdo da página.

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

- U-7417abf3b736412929e5aac6c0f8edf05a3bee20d5a3aa4fee840137b342a4cd — B-02 · inicial · cena 1280x900@inicial · <h2> "Vistorias": Lista de vistorias: o único título da página é um <h2> "Vistorias"; não há nenhum <h1> (light DOM e shadow roots). A hierarquia começa no nível 2. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-217` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4353e5b586f99a3f195bcbd8d17fe2d91b596fea43a96a22e69cf5452be1df89",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-43863ca486c5fa8a68752169a0e2442a2a373e0cfe7ebb176af3b35fda3605e3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao ativar pelo teclado um link de página (Enter em "1") ou escolher uma opção nos seletores "Exibir" (#total) e "Página" (#page) com setas + Enter, a lista é recarregada e o foco vai para o <body>.

Esperado: Depois de mudar de página ou a quantidade por página, o foco deve ficar no controle acionado ou ir para um ponto lógico (ex.: o início da tabela).

Janela: 1280×900 · interações desde o carregamento: 1. Foco em #total, ArrowDown, ArrowDown, Enter (25 itens) 2. Foco em #page, ArrowDown, ArrowDown, Enter (página 2) 3. Foco no link de página "1", Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(3)>li>a" — <a> "2"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(4)>li>a" — <a> "3"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(5)>li>a" — <a> "4"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#total> "Selecione"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#page> "Selecione"

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
  "cardId": "C-43863ca486c5fa8a68752169a0e2442a2a373e0cfe7ebb176af3b35fda3605e3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-451ccee9376925505389072c6ed62cec0a4e6e4380bbae5c69a8cc033ffed1bf

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
  "cardId": "C-451ccee9376925505389072c6ed62cec0a4e6e4380bbae5c69a8cc033ffed1bf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4668afd8cce61cf76cfbbed547ac10b8b1495a5b8d29cf03abf7095b60b76cc7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os dois campos de data (input type=date #br-input-8 e #br-input-9 no shadow DOM) não têm label associado; o texto visível 'Data da vistoria:' é um <span> e 'até' é texto solto, sem vínculo programático.

Esperado: Cada campo de data com rótulo associado (ex.: 'Data da vistoria – início' e 'Data da vistoria – fim').

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-200` → identificador devolvido por ferramenta (sem arquivo)
- `F-201` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4668afd8cce61cf76cfbbed547ac10b8b1495a5b8d29cf03abf7095b60b76cc7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-49964b4a070b91b4eeadf7c761e1d3f61e07f3bbefe7b604e63b5e34c22ea18c

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
  "cardId": "C-49964b4a070b91b4eeadf7c761e1d3f61e07f3bbefe7b604e63b5e34c22ea18c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4dac7e0bc9677449e31d59e65b298781c9f394c664d0c1daa156de94be145bfc

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
  "cardId": "C-4dac7e0bc9677449e31d59e65b298781c9f394c664d0c1daa156de94be145bfc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4fba8c2bffad743429f24c8106f7c16a5dfa5ac549cc9de9cdb869803df50e55

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O botão '×' para remover o filtro aplicado (chip 'Barra Nova'/'Areia Branca do Leste') contém apenas o ícone fa-times, sem aria-label ou texto; nome acessível vazio.

Esperado: Nome acessível, ex.: 'Remover filtro Barra Nova'.

Janela: 1280×900 · interações desde o carregamento: 1. Clique na tag de filtro 'Cidade' 2. Clique em uma opção da lista (ex.: 'Areia Branca do Leste')

Regra declarada: button-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel span.br-tag > button.inverted" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-283` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4fba8c2bffad743429f24c8106f7c16a5dfa5ac549cc9de9cdb869803df50e55",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-504157a709099e67a6eaf77f3b9f656abf68f05709e6ebffdc179f4109025e46

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bc94b709a32b5dc36e82b199cb34b306729bc6a42eada6adcc6c404ae056735d — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-504157a709099e67a6eaf77f3b9f656abf68f05709e6ebffdc179f4109025e46",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-50e7b3ce33bb302bc04a1a0744fa751a1fa84131be1b3e8778a00fc15088629e

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-0307b9397f820c4ffbf876ccaea7aa7d9ce4580f2b54b683cc87e86fe5edabf4 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-50e7b3ce33bb302bc04a1a0744fa751a1fa84131be1b3e8778a00fc15088629e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-52d934f991b13d1cd65af279cc15019eb9f39c99a509b08fe399548f2a1fdd78

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: Nenhum elemento .br-footer nem web component <br-footer> no documento (DOM claro e shadow roots abertos).

Esperado: Uma Área de Rodapé com o componente Footer (.br-footer ou <br-footer>), como o Template Base exige.

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: ds:page-footer

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
  "cardId": "C-52d934f991b13d1cd65af279cc15019eb9f39c99a509b08fe399548f2a1fdd78",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-53b9de2cf411263c25a7b837debfbb88fa3ee577a6bc6e37939187571b492fd8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Checkbox 'selecionar todos' no cabeçalho da tabela sem nome acessível (e o <th> que o contém fica sem texto).

Esperado: Checkbox com nome acessível, ex.: 'Selecionar todas as vistorias da página'.

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-202` → identificador devolvido por ferramenta (sem arquivo)
- `F-198` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-53b9de2cf411263c25a7b837debfbb88fa3ee577a6bc6e37939187571b492fd8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-541d683440d59f49c3581ff246adfb8c2a21edf867a0924380ebab983e96d862

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
  "cardId": "C-541d683440d59f49c3581ff246adfb8c2a21edf867a0924380ebab983e96d862",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5494b13698690bbeabffd1d403003dcc453f81479cf932e8a4f3147dad491ec1

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a536907d260e7d4c81756d2ad78e31444190463c52bbc16565eaa9564d319dd6 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5494b13698690bbeabffd1d403003dcc453f81479cf932e8a4f3147dad491ec1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-568b7d14961e1ce21230ecf59f6a4dd23fb8068224f8f6a96e1c30d7cf2dadef

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Tag de status 'Vistoria agendada': texto #ffffff sobre fundo #4f97d1, 14px normal, contraste 3,14:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal (WCAG 1.4.3 / e-MAG 4.1).

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-188` → identificador devolvido por ferramenta (sem arquivo)
- `F-197` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-568b7d14961e1ce21230ecf59f6a4dd23fb8068224f8f6a96e1c30d7cf2dadef",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-584a2f9322d71a73adad02a8f5d853cc1bfeb1ab6c2eac0a7a7594b022e48013

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
  "cardId": "C-584a2f9322d71a73adad02a8f5d853cc1bfeb1ab6c2eac0a7a7594b022e48013",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5c099a30e53856de9a23f48b11bb39eea028fa52d6576fde526dd6fc87a599e1

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-3bf71c1b9bc5e863496d0227d9b0c52b17896364fce0fa37e170ff35a34c3f1b — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-5c099a30e53856de9a23f48b11bb39eea028fa52d6576fde526dd6fc87a599e1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5e7a65693328aba3353b1bf1f91e1f354719b223bdb5122ed4551aa3a5a4f8ef

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página atual ('1') é indicada só pela classe visual 'active'; o link não tem aria-current="page" e usa href="javascript:void(0)".

Esperado: Página atual exposta programaticamente (aria-current="page").

Janela: 1280×900 · interações desde o carregamento: nenhuma

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
  "cardId": "C-5e7a65693328aba3353b1bf1f91e1f354719b223bdb5122ed4551aa3a5a4f8ef",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-602178e64780d591875896f2f7b3628016ddfd30bdb02a7eedbef7b247063c6f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: 'Trocar unidade' é um <span> com cursor:pointer, que navega para /portal-mpa ao ser clicado, mas não tem tabindex nem papel: com o menu aberto, o Tab pula do botão do avatar direto para 'Sair'.

Esperado: Controle operável por teclado (button ou link).

Janela: 1280×900 · interações desde o carregamento: 1. Clique em #avatar-dropdown-trigger 2. Tecla Tab

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
  "cardId": "C-602178e64780d591875896f2f7b3628016ddfd30bdb02a7eedbef7b247063c6f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-603544eb7f8d39d73de0aa9c24e3cfb87abe72e8a5160bb146faa4b47e1bb99f

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: padding: 0px 6px (fora da escala: 6px, 6px, 6px)

Esperado: Múltiplos de 4px

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: ds:token-spacing

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>br-breadcrumb >>> div>ul>li:nth-of-type(1)>a" — <a> "Home" [shadow]

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-603544eb7f8d39d73de0aa9c24e3cfb87abe72e8a5160bb146faa4b47e1bb99f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-606160d5eae99defde20ffd7e07da0e856c19b5c73a3c0e668eb546594cb69e3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O container tem role="menu", mas nenhum descendente tem role="menuitem": contém divs, spans e um <button> comum.

Esperado: Use um papel coerente com o conteúdo (remova role="menu") ou dê aos itens papéis de menuitem com o teclado correspondente.

Janela: 1280×900 · interações desde o carregamento: 1. Clique no botão do avatar

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-606160d5eae99defde20ffd7e07da0e856c19b5c73a3c0e668eb546594cb69e3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-60703860162cb6d7b4d7ae9a0e6c36dfe5c9315b467fbdd949afa9b378e8608e

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: br-breadcrumb aplicado a <div>

Esperado: Elemento <nav>

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: ds:structure-breadcrumb-tag

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>br-breadcrumb >>> div" — <div> "Home Vistorias Agendar vistoria" [shadow]

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-60703860162cb6d7b4d7ae9a0e6c36dfe5c9315b467fbdd949afa9b378e8608e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-627678213ca4d52983fe6b5c52e03f653c95b65ec65943420f4bac634c148078

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
  "cardId": "C-627678213ca4d52983fe6b5c52e03f653c95b65ec65943420f4bac634c148078",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-62ff7ad9ee78b6f95cb0954a603f4d37e1f539719d365402c8ccefeae0015bc2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Tag de status 'Vistoria pré agendada' na aba Agendar: texto #ffffff sobre fundo #888888, 14px normal, contraste 3,54:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. Clique na aba 'Agendar' (#AGENDAR)

Regra declarada: color-contrast

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-status-solicitacao-utils .bg-secondary-06 > .text-secondary-01" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-361` → identificador devolvido por ferramenta (sem arquivo)
- `F-370` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-62ff7ad9ee78b6f95cb0954a603f4d37e1f539719d365402c8ccefeae0015bc2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-63da3c3d02bdb980c7c948c7ad772a65a6400e4373acc1723c832c991318a4b0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Com o menu do avatar aberto, o contêiner tem role="menu", mas os filhos não são menuitem: há um <button> 'Sair' e divs/spans sem papel.

Esperado: role=menu contendo apenas itens menuitem (ou não usar role=menu).

Janela: 1280×900 · interações desde o carregamento: 1. Clique em #avatar-dropdown-trigger

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

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-304` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-63da3c3d02bdb980c7c948c7ad772a65a6400e4373acc1723c832c991318a4b0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-67d0dc735d7199a9f14e4e7b5e38c91d3a12f5b90e0474bdbef6af175b0f1023

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Checkboxes de seleção de cada linha não têm <label>, aria-label nem aria-labelledby; nome acessível vazio.

Esperado: Cada checkbox deve ter nome acessível que identifique a linha (ex.: 'Selecionar vistoria Coral Mansa IV').

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-203` → identificador devolvido por ferramenta (sem arquivo)
- `F-212` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-67d0dc735d7199a9f14e4e7b5e38c91d3a12f5b90e0474bdbef6af175b0f1023",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-67d2587b426c8e200d14fe2ced4e84f4ce6728d5f8aa7c80abfefb2891837f98

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-6ee11b5414617b1588a795c9ff95c7ee16756d82512b41d92507434edd975bfd — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-67d2587b426c8e200d14fe2ced4e84f4ce6728d5f8aa7c80abfefb2891837f98",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6b87f97f26d448e020c9dfd73892f384239d0ef1406c32ab63b9158a7f629847

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O texto "Nenhum filtro de data aplicado" (14px, peso 400) é rgb(255,255,255) sobre rgb(197,212,235): contraste de 1,50:1.

Esperado: O contraste do texto deve ser de pelo menos 4,5:1.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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

- `../../tmp/pw-0/page-2026-10-12T08-31-21-824Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6b87f97f26d448e020c9dfd73892f384239d0ef1406c32ab63b9158a7f629847",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6e59cc92dcb4469ee4331eb884775f2ef11a1069a4289b3106a115254228551f

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: border-radius: 6px fora da escala do DS

Esperado: Um de: 0px, 4px, 8px, 16px, 50% (circle) ou pill (100em/999em × font-size)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: ds:token-radius

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
  "cardId": "C-6e59cc92dcb4469ee4331eb884775f2ef11a1069a4289b3106a115254228551f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7111220a42dbebe4a83d4bd3a7f961996a6c0230b7a13889aa2db486eefcd2c7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem do logotipo gov.br no cabeçalho tem alt="logo", que não informa o conteúdo/finalidade.

Esperado: Texto alternativo que identifique o logotipo (ex.: 'gov.br').

Janela: 1280×900 · interações desde o carregamento: nenhuma

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
  "cardId": "C-7111220a42dbebe4a83d4bd3a7f961996a6c0230b7a13889aa2db486eefcd2c7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-712252dc77c9a492d7e6929ee4450cf28e665a2e1b6049737df39c110275a497

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
  "cardId": "C-712252dc77c9a492d7e6929ee4450cf28e665a2e1b6049737df39c110275a497",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-71f4e58a49ee0f321092e48a86f3da7159ba753cfd81940d08e36aa7ab620ee1

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@detalhe-menu

Observado: border-radius: 20px fora da escala do DS

Esperado: Um de: 0px, 4px, 8px, 16px, 50% (circle) ou pill (100em/999em × font-size)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até detalhe-menu (3 passo(s))

Regra declarada: ds:token-radius

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
  "cardId": "C-71f4e58a49ee0f321092e48a86f3da7159ba753cfd81940d08e36aa7ab620ee1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7237ef6a84fcb6949915d88e27a608dd2f1eed8338925cfaf62a5089f53809f2

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
  "cardId": "C-7237ef6a84fcb6949915d88e27a608dd2f1eed8338925cfaf62a5089f53809f2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-77a5e3a4734fbc5f3b98214546026cfc4e0323b7681d759b41055701e6e69c3a

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

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
  "cardId": "C-77a5e3a4734fbc5f3b98214546026cfc4e0323b7681d759b41055701e6e69c3a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-77f290fd8d60de20e955239bf00ef81ea9c9cd69bd0ae1b867b6f48a94f4a0cc

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@modal

Observado: Nenhum elemento .br-footer nem web component <br-footer> no documento (DOM claro e shadow roots abertos).

Esperado: Uma Área de Rodapé com o componente Footer (.br-footer ou <br-footer>), como o Template Base exige.

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até modal (8 passo(s))

Regra declarada: ds:page-footer

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
  "cardId": "C-77f290fd8d60de20e955239bf00ef81ea9c9cd69bd0ae1b867b6f48a94f4a0cc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-79b926626eb0e1b394ff7e74acef35ca69414c28a2079dcae09fe13c2ab0e482

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-61b0f575c57922f2491d6c2312a813385a09e1f96cd24a34a53e9b14edc5b401 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-79b926626eb0e1b394ff7e74acef35ca69414c28a2079dcae09fe13c2ab0e482",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7a96672f81c1e29a8ed4e1561ff82dd23ee218da1062fbb713e24e93cf676528

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
  "cardId": "C-7a96672f81c1e29a8ed4e1561ff82dd23ee218da1062fbb713e24e93cf676528",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7af9ba862fea42eda5d010739d5931dc81b79c4083c01c23493d14f3b771a528

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

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
  "cardId": "C-7af9ba862fea42eda5d010739d5931dc81b79c4083c01c23493d14f3b771a528",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7e0766741a88305937e77201722ca7e9bc89cc4cb1cc36bd0d7d0f14090107c5

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
  "cardId": "C-7e0766741a88305937e77201722ca7e9bc89cc4cb1cc36bd0d7d0f14090107c5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7ff22f88ef4cfc15f5a65a1139f041c655c7259c6b771e93dd7142aa021d9367

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
  "cardId": "C-7ff22f88ef4cfc15f5a65a1139f041c655c7259c6b771e93dd7142aa021d9367",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-84efa88e6b3022e27e1b55692921717ad7820a3968e084f6736e74b088648411

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
  "cardId": "C-84efa88e6b3022e27e1b55692921717ad7820a3968e084f6736e74b088648411",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-856c5053ff565ae53cbb4798d954b382e1e9685c96a3277dc3b9e8a1f06e2688

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
  "cardId": "C-856c5053ff565ae53cbb4798d954b382e1e9685c96a3277dc3b9e8a1f06e2688",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-859cd36edfcf143bb10193e75b8c26493d1699d55259ad64a9e3af43b3c687dd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Depois de preencher a data inicial, a tag "Exibindo vistorias a partir de 01/03/2026" tem um botão de remover só com ícone (fa-times com aria-hidden) e sem aria-label/title: nome acessível vazio.

Esperado: O botão de remover o filtro de data deve ter nome acessível (ex.: aria-label="Remover filtro de data").

Janela: 1280×900 · interações desde o carregamento: 1. Foco no primeiro campo de data 2. Digitar 03012026 (01/03/2026)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.col.align-content-center .br-tag.interaction > button" — Seletor não resolvido

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
  "cardId": "C-859cd36edfcf143bb10193e75b8c26493d1699d55259ad64a9e3af43b3c687dd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8afc3b346228772cf962581aa295f54fa110ad043292539f3412e6857165973d

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
  "cardId": "C-8afc3b346228772cf962581aa295f54fa110ad043292539f3412e6857165973d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8b982c99d3ce7f72dc1b9d9c2ad33d0cb3da8fc1ddb7e3b787aea20435854336

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
  "cardId": "C-8b982c99d3ce7f72dc1b9d9c2ad33d0cb3da8fc1ddb7e3b787aea20435854336",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8bade7384f3a1e7a114a903ff54ac22557fb44f8d6ff5d1d08fdcd617c17707c

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-186bf84ebe2669bf2cf857447aa4337f5a835ca376ff49d89291fa259f3be432 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-8bade7384f3a1e7a114a903ff54ac22557fb44f8d6ff5d1d08fdcd617c17707c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-90f24b517313e740fff93ad7f8e2078472588a59ae29faf91fbc9ff3374190e9

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

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
  "cardId": "C-90f24b517313e740fff93ad7f8e2078472588a59ae29faf91fbc9ff3374190e9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-912e1dac7ee8fb3165c64c090fc30643477ae8f88e41770dfbb9ca456f271027

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os seletores "Exibir" e "Página" são input type="text" expostos como textbox. Ao receber foco, abrem uma lista (.br-list) de opções, sem role="combobox", aria-expanded nem aria-controls.

Esperado: O controle deve expor papel e estado de lista suspensa (ex.: role="combobox" com aria-expanded e aria-controls apontando para a lista).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#total> "Selecione"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#page> "Selecione"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-912e1dac7ee8fb3165c64c090fc30643477ae8f88e41770dfbb9ca456f271027",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-95ba3729c064cfa39c3c35241d6c5ea6053b391719fe0fd455af323418b0d7f4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As opções da lista de filtro (ex.: 'Areia Branca do Leste', 'Barra Nova') são <div class=br-radio> com apenas <label>, sem input/role; não são focáveis e só podem ser selecionadas com mouse.

Esperado: Opções selecionáveis por teclado e expostas como opções/radios.

Janela: 1280×900 · interações desde o carregamento: 1. Clique na tag de filtro 'Cidade'

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel .br-radio" — Seletor não resolvido

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
  "cardId": "C-95ba3729c064cfa39c3c35241d6c5ea6053b391719fe0fd455af323418b0d7f4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-95c546d379257710d7c134221c2c2419e978714749f2552222090c4ee41633a3

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
  "cardId": "C-95c546d379257710d7c134221c2c2419e978714749f2552222090c4ee41633a3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-96a9177c7daabb0b7b4ccbd9c2c872e277a9d0b0b4528149c09054009f2a940e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os gatilhos de filtro Cidade, Porto, Vistoriador e Status são <span class="br-tag ..." style="cursor:pointer"> sem tabindex nem role. Funcionam com o mouse, mas o Tab passa direto da busca de Concluídos para o campo de busca.

Esperado: Os gatilhos de filtro devem receber foco e funcionar pelo teclado (ex.: elementos <button> com aria-expanded).

Janela: 1280×900 · interações desde o carregamento: 1. Tab repetido desde o carregamento (foco: Menu, Avatar, Home, Exportar, Agendar, Tramitando, Concluídos, busca, Buscar, datas, checkboxes)

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

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-96a9177c7daabb0b7b4ccbd9c2c872e277a9d0b0b4528149c09054009f2a940e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-96b5c3b102af8ea197e20e9446a326fe881e66c25645ff1694436c9e3ff2ced0

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@modal

Observado: border-radius: 20px fora da escala do DS

Esperado: Um de: 0px, 4px, 8px, 16px, 50% (circle) ou pill (100em/999em × font-size)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até modal (8 passo(s))

Regra declarada: ds:token-radius

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>button" — <button> "Sair" · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

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
  "cardId": "C-96b5c3b102af8ea197e20e9446a326fe881e66c25645ff1694436c9e3ff2ced0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9a7531c54fea4c9ff8a8d5d46061e61f939acb764d13c9a216d66fcb8be95b55

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo 'Exportar Vistorias', os 5 checkboxes de status estão em divs soltos; o título do grupo 'Status:' é um <span><strong>, sem fieldset/legend nem role=group.

Esperado: Agrupar os checkboxes em fieldset com legend 'Status' (ou role=group com nome).

Janela: 1280×900 · interações desde o carregamento: 1. Clique em 'Exportar Vistorias'

Regra declarada: emag:6.7

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-html-container input[type=\"checkbox\"]" — Seletor não resolvido

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
  "cardId": "C-9a7531c54fea4c9ff8a8d5d46061e61f939acb764d13c9a216d66fcb8be95b55",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9b28c3cd3888ac2db054cb396f361e29514ed1dfd5d9abd388d75b1f43192edc

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@modal

Observado: padding: 0px 6px (fora da escala: 6px, 6px, 6px)

Esperado: Múltiplos de 4px

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até modal (8 passo(s))

Regra declarada: ds:token-spacing

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>br-breadcrumb >>> div>ul>li:nth-of-type(1)>a" — <a> "Home" [shadow]

### Unidades candidatas (não são crédito)

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
  "cardId": "C-9b28c3cd3888ac2db054cb396f361e29514ed1dfd5d9abd388d75b1f43192edc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9c778404aa25f522f29d7476b37b1d64435f2c1ad3ed5c215288683c8288f0fd

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8e1c6e6dfaa6a3ae9b7ab34d5b2172ff399e720d098a46041fe748f07ccb9520 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9c778404aa25f522f29d7476b37b1d64435f2c1ad3ed5c215288683c8288f0fd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9d2a2a47bdefc786d35cb20ff92b6180768eff432389ddd065bb703831580508

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: margin: -5px 0px 0px (fora da escala: -5px)

Esperado: Múltiplos de 4px

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: ds:token-spacing

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
  "cardId": "C-9d2a2a47bdefc786d35cb20ff92b6180768eff432389ddd065bb703831580508",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9e3fd4a212f825a080ec00f616fdffe417f0ce4bf2961ce19dae68a05d83f828

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os dois campos de data (input type="date" no shadow DOM de br-input) não têm nome acessível (a árvore mostra "textbox" sem nome). Os textos "Data da vistoria:" e "até" são spans soltos, não associados.

Esperado: Cada campo de data deve ter nome acessível (ex.: "Data da vistoria inicial" e "Data da vistoria final") associado programaticamente.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>br-input:nth-of-type(1)" — <br-input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>br-input:nth-of-type(2)" — <br-input>

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9e3fd4a212f825a080ec00f616fdffe417f0ce4bf2961ce19dae68a05d83f828",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9ef0db0edb61862093ae49ad9b46ff3757f633a801035a7c98c85897dc9b7139

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A aba selecionada (Tramitando) só é indicada pela classe "active" no li; os botões têm só id e type, sem aria-selected, aria-current nem role="tab".

Esperado: O estado de aba selecionada deve ser exposto programaticamente (ex.: role="tab" com aria-selected="true", ou aria-current).

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

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9ef0db0edb61862093ae49ad9b46ff3757f633a801035a7c98c85897dc9b7139",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a4ed484ee759434e4651a6dd2765929232634f7902cc26a8e12141bf0e3ab5ef

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
  "cardId": "C-a4ed484ee759434e4651a6dd2765929232634f7902cc26a8e12141bf0e3ab5ef",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a67ed2e2302a124f3f01bfd28341f07054995c3c38b759fa557a70f558bb609c

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-d1ef6c8b7de732ce0cc20c8f4af61e9023217ac2944c179ffc72c2b5d7d6bf30 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a67ed2e2302a124f3f01bfd28341f07054995c3c38b759fa557a70f558bb609c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ac006d132f5a7a3cdc651fb591ea03236394bafd93e8e321295bd3212bab3426

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na paginação, cada link de página está em <li> aninhado diretamente em outro <li> (ul > li > li > a); a árvore mostra listitem dentro de listitem.

Esperado: A estrutura da lista deve ser válida: ul > li > a, sem li filho direto de li.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ac006d132f5a7a3cdc651fb591ea03236394bafd93e8e321295bd3212bab3426",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ac0284d8be6284a5d1d4379914577d3b18cccfc1c76016f2a9938feae52f79ee

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-10a37dc0d8c4dfcdb169ccb9616aa37cb63dc2ef443778ecb5719fde1e491f5c — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-ac0284d8be6284a5d1d4379914577d3b18cccfc1c76016f2a9938feae52f79ee",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-adf699b6565f5750ebf077309d284449735f3bc1c392c01051f40d58f09a59eb

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-00d1141e08ad376117efa9541fe624b5c5501835885644a09a6557220f9290e3 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-adf699b6565f5750ebf077309d284449735f3bc1c392c01051f40d58f09a59eb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ae26817ef910aba1bab19f93f74a4ed0087975c7e87077095d410ad4f35c3202

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

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
  "cardId": "C-ae26817ef910aba1bab19f93f74a4ed0087975c7e87077095d410ad4f35c3202",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ae4472065a226d38d0a74ed5417c9ac310062cd683fcef44b09d07375db18449

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
  "cardId": "C-ae4472065a226d38d0a74ed5417c9ac310062cd683fcef44b09d07375db18449",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-af65b0b3d5c9c4ffefb6662e71ab67cd5c80c6dec6cb8e9c2b4baacfc1c414ad

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As opções da lista de filtro (ex.: "Areia Branca do Leste", "Barra Nova") são div.br-item > div.br-radio > label, sem input, role nem tabindex (tabIndex -1). Só respondem ao clique do mouse.

Esperado: As opções devem ser alcançáveis e selecionáveis pelo teclado e expor papel/estado (ex.: radio/option).

Janela: 1280×900 · interações desde o carregamento: 1. Clique no filtro "Cidade"

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel .br-select .br-item" — Seletor não resolvido

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
  "cardId": "C-af65b0b3d5c9c4ffefb6662e71ab67cd5c80c6dec6cb8e9c2b4baacfc1c414ad",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b665d25c539a6e51f742b47cece7d489ce7210293c500f1af2b99d0c6a7bca86

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
  "cardId": "C-b665d25c539a6e51f742b47cece7d489ce7210293c500f1af2b99d0c6a7bca86",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b69be3d6203e0955fa7c680324af4f9b95debe7794ea8fe9be0a53caa2f6cec1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo "Atribuir Vistoriador", o <select id="swal2-select"> recebe o foco inicial, mas não tem label, aria-label nem aria-labelledby. O texto "Selecione um Vistoriador" está só no aria-describedby do diálogo.

Esperado: O select deve ter nome acessível associado (ex.: label "Vistoriador").

Janela: 1280×900 · interações desde o carregamento: 1. Clique em "Atribuir vistoriador" na linha 2

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
  "cardId": "C-b69be3d6203e0955fa7c680324af4f9b95debe7794ea8fe9be0a53caa2f6cec1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b6cf6803eb8690e36cb92472e17244bf2004bf7082e56025cc4643fd14a03931

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-3ec4428dd5adf38650270e029ad19fabdea037fa2d7ea63fc5e8caed85ad1047 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-b6cf6803eb8690e36cb92472e17244bf2004bf7082e56025cc4643fd14a03931",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b7042589d787e7513c5cd6cb707eb2009eebc95c7b7a31e66c6b9beae5654761

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As abas Agendar/Tramitando/Concluídos indicam a aba ativa só pela classe 'active' no <li>; os botões não têm aria-selected, aria-current nem papel de aba, e o estado selecionado não é exposto.

Esperado: Estado da aba ativa exposto programaticamente (role=tab + aria-selected, ou aria-current).

Janela: 1280×900 · interações desde o carregamento: nenhuma

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
  "cardId": "C-b7042589d787e7513c5cd6cb707eb2009eebc95c7b7a31e66c6b9beae5654761",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b76800b4e864457000d818313a45429db8999a67236abd62d000873c4a40ea8e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Tag informativa 'Nenhum filtro de data aplicado': texto #ffffff sobre fundo #c5d4eb, 14px, contraste 1,5:1.

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-187` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b76800b4e864457000d818313a45429db8999a67236abd62d000873c4a40ea8e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ba200de4309aa0ef1cfcde36d3c8aaf1c5dac8d5d3a8fe068ccd20d0ecf6f74f

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
  "cardId": "C-ba200de4309aa0ef1cfcde36d3c8aaf1c5dac8d5d3a8fe068ccd20d0ecf6f74f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bb1ade8652439f0480f6d97b00ac9d59a441d61a11f7a0b3bb178d8ea60a7b04

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
  "cardId": "C-bb1ade8652439f0480f6d97b00ac9d59a441d61a11f7a0b3bb178d8ea60a7b04",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bccf7c7c6b74273d6b044feb3bcb309bb7565dc8b0261e7cf4516edd1cae571f

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: O primeiro link da página (href="/portal-mpa", "Home") não é uma âncora interna.

Esperado: O primeiro link da página é o salto para o conteúdo: âncora interna cujo alvo existe (e-MAG 1.5).

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: ds:page-skip-link

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
  "cardId": "C-bccf7c7c6b74273d6b044feb3bcb309bb7565dc8b0261e7cf4516edd1cae571f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bdedfd32251461762f4de474dfa35e7e83c727bde7352ee6b8914f4bc4f81250

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
  "cardId": "C-bdedfd32251461762f4de474dfa35e7e83c727bde7352ee6b8914f4bc4f81250",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bf698169a5dba4f13e16a6bbd7ca4b7d74b46c691758f1869d082b0ac58b24bc

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

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
  "cardId": "C-bf698169a5dba4f13e16a6bbd7ca4b7d74b46c691758f1869d082b0ac58b24bc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c024d21b6403e52ed9e1e02084646cf9d9de06c482ba598ba264996f761f65ef

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O primeiro link da página é o 'Home' do breadcrumb (href="/portal-mpa"); não há link de salto para o conteúdo. O primeiro Tab vai para o botão Menu do cabeçalho.

Esperado: Primeiro link é âncora interna para o conteúdo principal (e-MAG 1.5).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: ds-page-skip-link

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-219` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c024d21b6403e52ed9e1e02084646cf9d9de06c482ba598ba264996f761f65ef",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c03a547aefb43648dce90b9776b9fb977c6315d3d8a2816e4ef37858508d64fb

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
  "cardId": "C-c03a547aefb43648dce90b9776b9fb977c6315d3d8a2816e4ef37858508d64fb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c06adeac5f2f945015e77ce8084298a78fd68c07b38a9d42163611fded134ac3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O título do documento é apenas 'PNIP' (o mesmo também na tela de detalhe agendar-vistoria/<id>); não identifica a página 'Vistorias'.

Esperado: Título descritivo da página, ex.: 'Vistorias – Plataforma Nacional da Indústria do Pescado'.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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
  "cardId": "C-c06adeac5f2f945015e77ce8084298a78fd68c07b38a9d42163611fded134ac3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c098034296d7607ec03a00cdac7494d07b231d2cbc3db632f7e76def09459088

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: padding: 0px 6px (fora da escala: 6px, 6px, 6px)

Esperado: Múltiplos de 4px

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: ds:token-spacing

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>br-breadcrumb >>> div>ul>li:nth-of-type(1)>a" — <a> "Home" [shadow]

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c098034296d7607ec03a00cdac7494d07b231d2cbc3db632f7e76def09459088",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c0f97f3c2721df0f4b66dcd63d078a38e0594ecd5c8b3446a8e873cec3b2c3dd

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
  "cardId": "C-c0f97f3c2721df0f4b66dcd63d078a38e0594ecd5c8b3446a8e873cec3b2c3dd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c4c75cd623be4c38c511516fbd712a2ef4d916be57d0541448d68875e9dd14e9

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-86758a4dd2aff0cfdd75f4a93d7d0bed35bbca8d150354009a7c12ca64d19a6c — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-c4c75cd623be4c38c511516fbd712a2ef4d916be57d0541448d68875e9dd14e9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c58c8104b212d99f2daf7d9b86421a7654459655a37a0643ea4f7e346587f65e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Na aba Agendar, o status "Vistoria pré agendada" (14px, peso 500) é rgb(255,255,255) sobre rgb(136,136,136): contraste de 3,54:1.

Esperado: O contraste do texto de status deve ser de pelo menos 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. Clique na aba "Agendar"

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
  "cardId": "C-c58c8104b212d99f2daf7d9b86421a7654459655a37a0643ea4f7e346587f65e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c842761dcd0b37fbae3f4597dc9c5b180ea4199d6c8b1f4e7a71b2d49fc01e3d

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
  "cardId": "C-c842761dcd0b37fbae3f4597dc9c5b180ea4199d6c8b1f4e7a71b2d49fc01e3d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c84f5a0fd6b763b3c50117bba47130e622423b227b5adaf5d26438d26352998e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O item 'Home' do breadcrumb é um <a href="/portal-mpa"> contendo um <button aria-label=""> (elemento interativo aninhado; link exposto com um botão filho na árvore de acessibilidade).

Esperado: Um único controle interativo (link) por item, sem botão dentro do link.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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
  "cardId": "C-c84f5a0fd6b763b3c50117bba47130e622423b227b5adaf5d26438d26352998e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c90beb059d501077b7f61810ea7cc4e125a13999d7fa04128103f844514fa098

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
  "cardId": "C-c90beb059d501077b7f61810ea7cc4e125a13999d7fa04128103f844514fa098",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c9ca9fc7c6a3ab385b87f71f0c822dc9a7ff4cd3e0188300de2e4e7929febca2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No menu do avatar, "Trocar unidade" é um <span style="cursor:pointer"> sem tabindex nem role: Tab vai do gatilho direto para "Sair".

Esperado: A ação "Trocar unidade" deve ser um controle que recebe foco e funciona pelo teclado (ex.: <button>).

Janela: 1280×900 · interações desde o carregamento: 1. Clique no botão do avatar 2. Tab

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
  "cardId": "C-c9ca9fc7c6a3ab385b87f71f0c822dc9a7ff4cd3e0188300de2e4e7929febca2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cacf3f711f4e61b702282ca65358a69aa7a1d8bd5241e3de9eedb0905738678e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No shadow DOM da trilha, o link Home (<a href="/portal-mpa">) contém um <button class="br-button small circle">: controle interativo aninhado em outro (a árvore mostra link "Home" > button "Home").

Esperado: O item Home deve ser um único controle interativo (só o link), sem botão aninhado.

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

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cacf3f711f4e61b702282ca65358a69aa7a1d8bd5241e3de9eedb0905738678e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ce3063dbf9b2b0dc38d4ca13b5193edd7ab49638f6e23f7cb348ebe8c2643dae

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: margin: -38px 4px 0px 0px (fora da escala: -38px)

Esperado: Múltiplos de 4px

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: ds:token-spacing

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
  "cardId": "C-ce3063dbf9b2b0dc38d4ca13b5193edd7ab49638f6e23f7cb348ebe8c2643dae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cf3d9240c61090b109ed27269222c7351436151f21fd9a8952e2ceb34cf2eb25

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O único cabeçalho da página é <h2> "Vistorias". Não há <h1> (o título do sistema no cabeçalho é um div.header-title).

Esperado: A hierarquia de cabeçalhos deve começar em h1 (ex.: o título principal "Vistorias" como h1).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.3

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

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cf3d9240c61090b109ed27269222c7351436151f21fd9a8952e2ceb34cf2eb25",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d069e050862e949b367582c7db66db6356a0bef5559541fd834c833d5941a130

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a940b158ce742af299cd0ad0f8ba65e2f23c6fd95f48e6da4753c1c601d7d960 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d069e050862e949b367582c7db66db6356a0bef5559541fd834c833d5941a130",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d13786f88b687f46014bd119c0632e3d4f3c0b86c865f33cf26fbc04311ff59a

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
  "cardId": "C-d13786f88b687f46014bd119c0632e3d4f3c0b86c865f33cf26fbc04311ff59a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d1f58a714993a5bb7f6968ef786beba7df7a339dd377faa03c16b1fb24f8095c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao fechar com Esc o diálogo aberto pelo botão de ação da linha, o foco vai para <body> (document.activeElement = body), em vez de voltar ao botão que abriu o diálogo.

Esperado: Ao fechar o diálogo, o foco volta ao controle que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. Clique no botão 'Atribuir vistoriador' da linha 1 2. Tecla Escape

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
  "cardId": "C-d1f58a714993a5bb7f6968ef786beba7df7a339dd377faa03c16b1fb24f8095c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d212ae651922c3f228f79e0c99d7d8a785b109736f8dcb4d80a226bff50fd3b6

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
  "cardId": "C-d212ae651922c3f228f79e0c99d7d8a785b109736f8dcb4d80a226bff50fd3b6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d4908b0e8c04a212f17dc2ab9fab3f8a736aa958c7f53dc7bf3f7eee0b922cf6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A tabela tem 1272px de largura dentro de um container de 1096px (.br-table sem overflow). A página fica com scrollWidth 1364px para viewport de 1280px, e a coluna de ações (botão "Notificar") sai da área visível.

Esperado: A tabela deve caber no container ou ter rolagem própria, sem rolagem horizontal da página em 1280px.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam · estado-nao-declarado: B-22 só existe(m) em detalhe, modal, e a alegação não declara passo nenhum

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table" — <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>div>table" — <table> "Status Data Hora Visualizado 06/03/2026 08:21:00"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c62feb50f900d6f87ccab4739f0c322b7428a0be9887b106e56b9d0e280fb176 — B-22 · detalhe · cena 1280x900@modal · <table> "Status Data Hora Visualizado 06/03/2026 08:21:00": Tabela "Dados da Notificação" do detalhe (Status, Data, Hora) sem <caption>, aria-label nem aria-labelledby: nome acessível vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-12T08-31-21-824Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d4908b0e8c04a212f17dc2ab9fab3f8a736aa958c7f53dc7bf3f7eee0b922cf6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d4e845686834cbe221d0623fd335c9f2a24b1de623fd104a6e065e81edcb25a1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão mostra o texto "Olá, Usuária de Teste, SUPERVISOR", mas aria-label="Avatar com dropdown" substitui esse texto no nome acessível.

Esperado: O nome acessível deve conter o texto visível do botão (ex.: incluir "Olá, Usuária de Teste, SUPERVISOR" ou remover o aria-label divergente).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.5.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d4e845686834cbe221d0623fd335c9f2a24b1de623fd104a6e065e81edcb25a1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d7cc91a2168a0114b342bf3677476599e68b578c688c1ebbcdfb60f20cbd79cf

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
  "cardId": "C-d7cc91a2168a0114b342bf3677476599e68b578c688c1ebbcdfb60f20cbd79cf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d84ddbb9a6196324e41f2cee13e0729b861e2ca7facbb2e334a650f750431e27

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

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
  "cardId": "C-d84ddbb9a6196324e41f2cee13e0729b861e2ca7facbb2e334a650f750431e27",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d954855f6ed9ff461e1a63337093190dec50db6cf9454a8d1dd13e87443a8434

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao fechar pelo teclado (Escape) os diálogos abertos pelos botões "Atribuir vistoriador", "Excluir vistoria" e "Notificar solicitante da vistoria", o foco vai para o <body> em vez de voltar ao botão que abriu o diálogo.

Esperado: Ao fechar o diálogo, o foco deve voltar ao botão que o acionou.

Janela: 1280×900 · interações desde o carregamento: 1. Foco no botão "Atribuir vistoriador" da linha 1 2. Enter (abre o diálogo "Atribuir Vistoriador") 3. Escape 4. Repetido com "Excluir vistoria" e "Notificar solicitante da vistoria": mesmo resultado

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d954855f6ed9ff461e1a63337093190dec50db6cf9454a8d1dd13e87443a8434",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d992f81beba78e4ad858f7ea26f56e48f50b25f90e992823675f386f87b44543

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo 'Atribuir Vistoriador', o <select> não tem label associado; o texto 'Selecione um Vistoriador' é um div (#swal2-html-container) sem vínculo com o campo.

Esperado: Select com rótulo associado (label for / aria-labelledby).

Janela: 1280×900 · interações desde o carregamento: 1. Clique no botão 'Atribuir vistoriador' da linha 1

Regra declarada: select-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-select" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-359` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d992f81beba78e4ad858f7ea26f56e48f50b25f90e992823675f386f87b44543",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-da56c2ef44f7af525e1b7def33bbbc76abeed4131ed5342d6ddf0e3feb1d220e

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
  "cardId": "C-da56c2ef44f7af525e1b7def33bbbc76abeed4131ed5342d6ddf0e3feb1d220e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-db2f1837e1467ee82a7afa8267f2e7914e053ba68de73c55d3c46586c7f7c216

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@modal

Observado: border-radius: 6px fora da escala do DS

Esperado: Um de: 0px, 4px, 8px, 16px, 50% (circle) ou pill (100em/999em × font-size)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até modal (8 passo(s))

Regra declarada: ds:token-radius

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(4)>div:nth-of-type(2)>div:nth-of-type(3)>div>textarea" — <textarea> "Complemente aqui o texto da conclusão se desejar" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

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
  "cardId": "C-db2f1837e1467ee82a7afa8267f2e7914e053ba68de73c55d3c46586c7f7c216",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dba41bf62d7738daa867cdf7d99c3e743ebd052d66782e2cb2673d2bedce11fa

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-fa4d8e390509b90a7ed8f88a4689048ece8c78b098632c14b12bea93b2ed45c7 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dba41bf62d7738daa867cdf7d99c3e743ebd052d66782e2cb2673d2bedce11fa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dccfbddf374dc7bae54c5d73629f3945bddc9ce6d846e62b5ae1944505f03da7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão "Menu" (#navigation, no shadow DOM de br-header) tem data-target="#main-navigation", mas esse elemento não existe no documento nem no shadow root. Ao clicar, nada abre nem muda (sem aria-expanded).

Esperado: O botão Menu deve abrir o menu principal ao qual se refere, ou não deve ser exibido se não houver menu.

Janela: 1280×900 · interações desde o carregamento: 1. Clique no botão "Menu" do cabeçalho

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

- `../../tmp/pw-0/page-2026-10-12T08-31-21-824Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dccfbddf374dc7bae54c5d73629f3945bddc9ce6d846e62b5ae1944505f03da7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ddca0f1d740aa98082611533b728349fd91daf4e47db0d31831fcddbdfeb2cb7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O breadcrumb renderiza <div class="br-breadcrumb"> no shadow DOM; não há <nav> nem landmark de navegação.

Esperado: Breadcrumb em elemento <nav> (com aria-label), como no componente oficial.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: ds-structure-breadcrumb-tag

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

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-224` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ddca0f1d740aa98082611533b728349fd91daf4e47db0d31831fcddbdfeb2cb7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dec68fddc700d7497f1e0a669830240bc6ce72339f48e0b4360cf8778182e900

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As caixas de seleção do cabeçalho (selecionar todas) e de cada linha não têm label, aria-label nem title (a árvore mostra "checkbox" sem nome).

Esperado: Cada checkbox deve ter nome acessível (ex.: "Selecionar todas as vistorias" e "Selecionar vistoria Coral Mansa IV").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

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

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dec68fddc700d7497f1e0a669830240bc6ce72339f48e0b4360cf8778182e900",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e040fde6cb36cec09e251e8cccdedc5f1e578eb92d6607a60958df57b5d7ba81

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão do usuário mostra o texto 'Olá, Usuária de Teste, SUPERVISOR', mas seu nome acessível é aria-label="Avatar com dropdown", que não contém o texto visível.

Esperado: Nome acessível que inclua o texto visível do rótulo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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
  "cardId": "C-e040fde6cb36cec09e251e8cccdedc5f1e578eb92d6607a60958df57b5d7ba81",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e20b9cc6168ab4aa3848304a833fc39f3a9feb4e3b8c628e6ef7b950f8f1c0e2

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@modal

Observado: br-breadcrumb aplicado a <div>

Esperado: Elemento <nav>

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até modal (8 passo(s))

Regra declarada: ds:structure-breadcrumb-tag

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>br-breadcrumb >>> div" — <div> "Home Vistorias Agendar vistoria" [shadow]

### Unidades candidatas (não são crédito)

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
  "cardId": "C-e20b9cc6168ab4aa3848304a833fc39f3a9feb4e3b8c628e6ef7b950f8f1c0e2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e2f0663812fd03d98be355ee9ed2cd4b229d721550afc9ca21d2765779748c3f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O menu do avatar aberto (e o bloco do usuário) fica fora de qualquer landmark; o banner fica só dentro do br-header.

Esperado: Todo o conteúdo dentro de landmarks (e-MAG 1.8).

Janela: 1280×900 · interações desde o carregamento: 1. Clique em #avatar-dropdown-trigger

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

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-347` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e2f0663812fd03d98be355ee9ed2cd4b229d721550afc9ca21d2765779748c3f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e5bbaf5f761b97df6e2b1946ef08d9d48e55c4b04c1c9467d7bddb49a049149a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Após preencher a data, aparece o chip 'Exibindo vistorias a partir de 01/01/2026' com botão '×' (só o ícone fa-times aria-hidden), sem aria-label/texto: nome acessível vazio.

Esperado: Nome acessível, ex.: 'Remover filtro de data'.

Janela: 1280×900 · interações desde o carregamento: 1. Digitar 01/01/2026 no primeiro campo de data (Data da vistoria)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.tab-panel > .col > .row > .col > span.br-tag > button.inverted" — Seletor não resolvido

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
  "cardId": "C-e5bbaf5f761b97df6e2b1946ef08d9d48e55c4b04c1c9467d7bddb49a049149a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e67479f77dc735ebd5be550ad856b42900cc41e97d807fc304b6d0c9fd3f6b1d

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9cb4d2d7fcd6a67dd6eb7d11ce81a26f74e902e4fe0e3e5a4bff10bc1bb57456 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e67479f77dc735ebd5be550ad856b42900cc41e97d807fc304b6d0c9fd3f6b1d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e9b10498ab75c2da83daa64c118d47a5bc654943b86bf3c7a574fff58982288a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na paginação, cada número de página é um <li> aninhado diretamente dentro de outro <li> (li > li), sem <ul>/<ol> pai.

Esperado: Itens <li> filhos diretos de <ul>/<ol>.

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-213` → identificador devolvido por ferramenta (sem arquivo)
- `F-214` → identificador devolvido por ferramenta (sem arquivo)
- `F-215` → identificador devolvido por ferramenta (sem arquivo)
- `F-216` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e9b10498ab75c2da83daa64c118d47a5bc654943b86bf3c7a574fff58982288a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ea558a56566461e6516fc92421a561717088cfe268dc3c1c73d8be21108b5072

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
  "cardId": "C-ea558a56566461e6516fc92421a561717088cfe268dc3c1c73d8be21108b5072",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eb46fcb201e11817828cb6dee1ce13d6360dc5fc9ee85e217b6516921aa757e7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem do item 'Sair' (exit-icon.png) não tem atributo alt.

Esperado: alt="" (decorativa, pois há o texto 'Sair') ou texto alternativo.

Janela: 1280×900 · interações desde o carregamento: 1. Clique em #avatar-dropdown-trigger

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

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-328` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-eb46fcb201e11817828cb6dee1ce13d6360dc5fc9ee85e217b6516921aa757e7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ec1a68469c4d90f4efa99f24188c8b79c8ffd8ac16e3919c0343def792870e26

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Cabeçalho da coluna de ações (<th scope=col>) está vazio; leitores de tela não anunciam o propósito da coluna.

Esperado: Cabeçalho com texto (visível ou visualmente oculto), ex.: 'Ações'.

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-199` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `F-371` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ec1a68469c4d90f4efa99f24188c8b79c8ffd8ac16e3919c0343def792870e26",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ed751e14d630d6ddc6f1e3b64dc71b368621e1e4db63f0eb1fb8235ecab966b1

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: border-radius: 20px fora da escala do DS

Esperado: Um de: 0px, 4px, 8px, 16px, 50% (circle) ou pill (100em/999em × font-size)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: ds:token-radius

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>pnip-header>div>div>div>button" — <button> "Sair" · **oculto**: nao-renderizado, aria-hidden

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ed751e14d630d6ddc6f1e3b64dc71b368621e1e4db63f0eb1fb8235ecab966b1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ed829db969a5b175e300e3f937b6d95f983c8fe50a99361986513a92a07a4f81

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
  "cardId": "C-ed829db969a5b175e300e3f937b6d95f983c8fe50a99361986513a92a07a4f81",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ef39648d6ec0cd56c7b169cbf3a8c483a8496fe7adfaf39b79959c89caac3a99

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-6c245502c15b87a2a3da34719c7b1d1f47aadd9a7ab7ca55ebbdfa117ae64ba8 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-ef39648d6ec0cd56c7b169cbf3a8c483a8496fe7adfaf39b79959c89caac3a99",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f001dd4e8e15db1cd0662e375eec710b37d23b6036b06715f2799f06d842cbda

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem do logotipo gov.br, no shadow DOM de br-header, tem alt="logo" (árvore de acessibilidade: img "logo").

Esperado: A alternativa textual deve indicar a identidade/função da imagem (ex.: "gov.br" ou "Portal gov.br"), não o tipo do elemento.

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

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f001dd4e8e15db1cd0662e375eec710b37d23b6036b06715f2799f06d842cbda",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f0f3862da4bda96ae890621348a0eac2260a3c8c7f224f9ee811fcf7d6ef165a

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-9bca684779864d487de252714c42d88bf603438c290f8f1035d9d643cf38aad9 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f0f3862da4bda96ae890621348a0eac2260a3c8c7f224f9ee811fcf7d6ef165a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f49da460db5943eb4c7381e10ab9a53634865476d3880cadd2f60fbbc46047d6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Uma busca sem resultados troca a tabela pela mensagem <p>Não há vistorias para exibir.</p>, fora de qualquer região viva (sem role="status"/aria-live), e o foco continua na busca.

Esperado: A mensagem de resultado vazio deve ser anunciada sem mover o foco (ex.: role="status" ou aria-live="polite").

Janela: 1280×900 · interações desde o carregamento: 1. Clique no filtro "Cidade" 2. Clique em "Barra Nova" 3. Digitar "zzzz" na busca e Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-propesc-vistorias .d-flex.flex-column.justify-content-center > p" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-12T08-34-01-203Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f49da460db5943eb4c7381e10ab9a53634865476d3880cadd2f60fbbc46047d6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f502289345805d2c77456cd3b2e8b8433c36255d2ccd7bc7ad2668e376e096b8

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-c15b6c5eebcba3398c66c3e0637a94d83df38dbadd90880ebdf2d2fc868db6b8 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f502289345805d2c77456cd3b2e8b8433c36255d2ccd7bc7ad2668e376e096b8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f53afbdb09ca9059500f24a87195c9d51219c4ef1b7f3c3f14fdebadf09a84c2

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: br-breadcrumb aplicado a <div>

Esperado: Elemento <nav>

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: ds:structure-breadcrumb-tag

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>br-breadcrumb >>> div" — <div> "Home Vistorias" [shadow]

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f53afbdb09ca9059500f24a87195c9d51219c4ef1b7f3c3f14fdebadf09a84c2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f79963f74a8b51b87b446cfb04ca8e643f39511a5b4191f5ad193a11ddb89533

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: margin-top: -38px inline no botão Buscar (fora da escala de espaçamento do DS).

Esperado: Espaçamento da escala do DS (múltiplos de 4px, base 8px).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: ds-token-spacing

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-222` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f79963f74a8b51b87b446cfb04ca8e643f39511a5b4191f5ad193a11ddb89533",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f90768f889def2e245c562b7a1ce5eb5611aadb83d3585c4361cd96de1b9f1e2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Em 1280px a tabela (largura 1272px a partir de x=92) ultrapassa o contêiner .br-table (clientWidth 1096) e a janela: documentElement.scrollWidth 1364 > 1280. A página inteira rola horizontalmente e o último botão de ação ('Notificar' em Tramitando, 'Excluir' em Concluídos) fica cortado na borda direita.

Esperado: Tabela contida no grid da página (rolagem horizontal restrita ao contêiner da tabela ou layout responsivo), sem rolagem horizontal da página em 1280px.

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
  "cardId": "C-f90768f889def2e245c562b7a1ce5eb5611aadb83d3585c4361cd96de1b9f1e2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f95aff6826f6988c7c33bcf276491b751b8ba214efdcc65eda1cf4069e4ec8b5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página atual só é indicada pela classe "active" (fundo azul). O link não tem aria-current e o href é "javascript:void(0)".

Esperado: A página atual deve ser identificada programaticamente (aria-current="page").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-12T08-27-54-249Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f95aff6826f6988c7c33bcf276491b751b8ba214efdcc65eda1cf4069e4ec8b5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fb7d941d56f68129928de892fa81e221f5d9c8622ba31ae811e9d74b14bd3c36

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
  "cardId": "C-fb7d941d56f68129928de892fa81e221f5d9c8622ba31ae811e9d74b14bd3c36",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fe1ef39dd2c6c7ed51fce216ec88a9abd842512eef420094aef87ba885e5a3c9

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

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
  "cardId": "C-fe1ef39dd2c6c7ed51fce216ec88a9abd842512eef420094aef87ba885e5a3c9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fe2e08bf9aeb8a365a65c4c19dc9f639be07c1fa617f9119eaafc34b71b94c66

Estado: pendente

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900@inicial

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados até inicial (0 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(4)>br-button >>> button" — <button> [shadow]

### Unidades candidatas (não são crédito)

- U-3709122ef551796d381883922a2608a3e1e33f879789e165d56b6c8d43a7d2b5 — B-08 · inicial · cena 1280x900@inicial · <button> [shadow]: Os 40 botões de ação das linhas (4 por linha: atribuir/remover vistoriador, abrir, excluir, notificar) são br-button só com ícone, variante secondary sem circle (classes "br-button secondary middle"): nenhum rótulo visível fora da variante circular. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-fe2e08bf9aeb8a365a65c4c19dc9f639be07c1fa617f9119eaafc34b71b94c66",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
