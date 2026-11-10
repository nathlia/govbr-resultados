# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 215 cartões únicos · 215 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 215 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 413 sujeitos · 215 cartão(ões) sem evidência verificada · 153 com unidade candidata · estimativa **1290 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 77 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-0232044d5b4c8552a7e360f3a6955e9c358547dd119b44e5612e8df8b25325c9

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
  "cardId": "C-0232044d5b4c8552a7e360f3a6955e9c358547dd119b44e5612e8df8b25325c9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-04305a5fb1425363ed152a0a6a567cd3ed346748d8a4fa59b5e4944178843d57

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: aria-label "Avatar com dropdown" não contém o texto visível "Olá, Usuária de Teste, SUPERVISOR"

Esperado: Nome acessível contendo o texto visível

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
  "cardId": "C-04305a5fb1425363ed152a0a6a567cd3ed346748d8a4fa59b5e4944178843d57",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-04df52d7c0bd63f5216b04d08b72c64d6a27d226372984749805b86449b5ce2d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ícones clicáveis Laudo, Protocolo e Arquivos são br-icon-base com cursor:pointer, tabIndex -1, sem role nem nome

Esperado: Botões/links focáveis com nome

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003069?mock-perfil=mpa (detalhe "Concluído", aberto pelo botão olho da linha 1 da aba Concluídos)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:td.text-center br-icon-base" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-04df52d7c0bd63f5216b04d08b72c64d6a27d226372984749805b86449b5ce2d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-050fdfd40a1d0c90dbeb07663e662f5ff5b3cf82284e2cba063ec36c72df093c

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
  "cardId": "C-050fdfd40a1d0c90dbeb07663e662f5ff5b3cf82284e2cba063ec36c72df093c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-053a94ebe17a2545bf959c9aa0d8dfcd1b76ab294983a25af2f59031133d229e

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
  "cardId": "C-053a94ebe17a2545bf959c9aa0d8dfcd1b76ab294983a25af2f59031133d229e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-07d81e6b9f3caf409976f7745b76188b8bbc345794ccde9150d05bc4675ee66e

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
  "cardId": "C-07d81e6b9f3caf409976f7745b76188b8bbc345794ccde9150d05bc4675ee66e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0a553cdfa6d647d7529e3c09d86d8688284441bd7f5ee7795bc596fed963c78b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os filtros Cidade/Porto/Vistoriador/Status são <span> com cursor:pointer e listener de clique que abre a lista de opções, mas não têm tabindex nem role; a navegação por Tab pula de Concluídos direto para o campo de busca.

Esperado: Filtros operáveis por teclado (botão focável com aria-expanded).

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
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0a553cdfa6d647d7529e3c09d86d8688284441bd7f5ee7795bc596fed963c78b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0af8443435dac587520215f7e7d216c01cd87c46612dddfb4188bd3e217e62ad

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Os ícones clicáveis de Laudo (file) e Arquivos (download) não têm nome acessível: o <i> interno é aria-hidden e não há title/aria-label.

Esperado: Nome acessível que descreva a ação (ex.: "Visualizar laudo", "Baixar arquivos").

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar na aba "Concluídos" 3. Clicar no botão de olho da linha 1 (Pérola Veloz II, NAO COMPARECIMENTO)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>div>table>tbody>tr:nth-of-type(2)>td:nth-of-type(1)>span>br-icon-base" — <br-icon-base>

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0af8443435dac587520215f7e7d216c01cd87c46612dddfb4188bd3e217e62ad",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0b5143c69928fa1cdeb9a3b55cadb253bfc2ab649231731975cc46c3b82b22f5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Lista de vistorias: o único título da página é o <h2> "Vistorias"; não há <h1>.

Esperado: Hierarquia de títulos iniciada por <h1> com o título principal da página.

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-041` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0b5143c69928fa1cdeb9a3b55cadb253bfc2ab649231731975cc46c3b82b22f5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0b56f683eefe6719dcafda2569b77afdd05de5ce2be5bc3fb8447d8b67188317

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo "Atribuir Vistoriador", o <select> de vistoriadores não tem <label>, aria-label nem aria-labelledby; o texto "Selecione um Vistoriador" não está associado a ele.

Esperado: Select com rótulo associado (ex.: "Vistoriador").

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar em "Atribuir vistoriador" da linha 2

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
  "cardId": "C-0b56f683eefe6719dcafda2569b77afdd05de5ce2be5bc3fb8447d8b67188317",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0c153ae29b3d6bc33a5452b81d67ba276349a957ee6fd72f50bf6dfe275fb6b7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O ícone de lixeira ao lado de boleto.pdf no formulário de edição tem listener de clique, mas é um br-icon-base sem tabindex nem role: não é alcançável por teclado.

Esperado: Ação de remoção como botão focável.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] 2. click main br-button.pull-right (Editar)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-icon-base[icon-name=\"trash\"]" — Seletor não resolvido

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
  "cardId": "C-0c153ae29b3d6bc33a5452b81d67ba276349a957ee6fd72f50bf6dfe275fb6b7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0d15f2daab0adadccb92bda0b1c6a7b1044b139c7af9f7ff182bd0db68e12d82

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: As telas de detalhe da vistoria não têm h1 nem h2: o primeiro cabeçalho é h3 ("Programa Nacional de Regularização de Embarcação de Pesca"), seguido de h4.

Esperado: Hierarquia de cabeçalhos começando por h1, sem pular níveis.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar na aba "Concluídos" 3. Clicar no botão de olho da linha 1 (Pérola Veloz II, NAO COMPARECIMENTO)

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
  "cardId": "C-0d15f2daab0adadccb92bda0b1c6a7b1044b139c7af9f7ff182bd0db68e12d82",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0fcdd7fc26318ebb995df33032c277ccec21cf130c5189c373499fce4a469141

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
  "cardId": "C-0fcdd7fc26318ebb995df33032c277ccec21cf130c5189c373499fce4a469141",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0ff5490fdbd8e22e1b7a4c8b0a3c12650f3ac1774593f1d5c67969dc77ac7df0

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
  "cardId": "C-0ff5490fdbd8e22e1b7a4c8b0a3c12650f3ac1774593f1d5c67969dc77ac7df0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-11d70d1da12dfa8faa6198171469be6c7c7c6b66f80fa9618c985bb8a3f231be

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
  "cardId": "C-11d70d1da12dfa8faa6198171469be6c7c7c6b66f80fa9618c985bb8a3f231be",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-11e90fb96479e4f3b15cab7a8ca1ff4bcdcc19503af57aef63a1eaeead897aa2

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
  "cardId": "C-11e90fb96479e4f3b15cab7a8ca1ff4bcdcc19503af57aef63a1eaeead897aa2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-125371ac90747ce76abf1c3415d3fd7fad2bfb369394eb8ca380f6c8a0cfd196

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
  "cardId": "C-125371ac90747ce76abf1c3415d3fd7fad2bfb369394eb8ca380f6c8a0cfd196",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-12fb5759ef2713526b28b5da4119fa008331e3417ad6c27e40f0bc866fd3e2e6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão de remover o filtro aplicado "Barra Nova" só com ícone fa-times, sem texto/aria-label

Esperado: Nome acessível (ex.: "Remover filtro Barra Nova")

Janela: 1280×900 · interações desde o carregamento: 1. click pnip-filter-panel .row > .col-auto:first-child > .br-tag (filtro Cidade) 2. click pnip-filter-panel .br-item:nth-child(2) label (Barra Nova)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel .br-button.inverted.circle" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-309a156948ef` → identificador devolvido por ferramenta (sem arquivo)
- `F-115` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-12fb5759ef2713526b28b5da4119fa008331e3417ad6c27e40f0bc866fd3e2e6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1302d51d9fd80efd48e14d2866721d9fa9b2effb2c142993693d29142924f41d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Diálogo "Exportar Vistorias": 5 checkboxes de status sem fieldset/legend; "Status:" é <strong> solto

Esperado: Grupo com fieldset/legend

Janela: 1280×900 · interações desde o carregamento: 1. click main br-button[type=primary]:not([icon]) (Exportar Vistorias)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-html-container input[type=\"checkbox\"]" — Seletor não resolvido

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
  "cardId": "C-1302d51d9fd80efd48e14d2866721d9fa9b2effb2c142993693d29142924f41d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-153a1adc07b771cd2cfd952873cf6eefd10c11a37b92dd03c72eb1375280a98a

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
  "cardId": "C-153a1adc07b771cd2cfd952873cf6eefd10c11a37b92dd03c72eb1375280a98a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-154e09a1a2f203a79e33c2852f98ef1f95daee3ed81e801fe0553513bfe82517

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
  "cardId": "C-154e09a1a2f203a79e33c2852f98ef1f95daee3ed81e801fe0553513bfe82517",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-15506cc4d92e8a33954ac3d05ac9566c3538518e080fbed16af7e286511c89d4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O link do arquivo "boleto.pdf" é um <strong> com cursor:pointer e listener de clique (abre o PDF em diálogo), sem tabindex nem role: inalcançável por teclado.

Esperado: Controle nativo focável (link ou botão) com nome.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (Coral Mansa IV)

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-15506cc4d92e8a33954ac3d05ac9566c3538518e080fbed16af7e286511c89d4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-158958e9e078a95624b7ceff346f952379681822a5db69fa8f7c79c35ec45b33

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O <object type="application/pdf"> que exibe o boleto não tem title, aria-label nem conteúdo alternativo.

Esperado: Alternativa textual para o objeto (title/aria-label e link alternativo para o arquivo).

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] 2. click .text-blue-vivid-60 > strong (boleto.pdf)

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-html-container object" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-087` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-158958e9e078a95624b7ceff346f952379681822a5db69fa8f7c79c35ec45b33",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-17cafc5bf88db6f795837d6a2e3c034bf3fc5c05a6e35c5f5b42a1fafb4549ba

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Detalhe concluído: tabelas "Dados da Notificação" e de histórico sem <caption>

Esperado: caption em cada tabela

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003069?mock-perfil=mpa (detalhe "Concluído", aberto pelo botão olho da linha 1 da aba Concluídos)

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `P-15` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-17cafc5bf88db6f795837d6a2e3c034bf3fc5c05a6e35c5f5b42a1fafb4549ba",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-17e882c59d22323f485b344dc2d1cb7726d54a9e60110e8f8748cf6367ac0b9f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Nas colunas Laudo, Protocolo e Arquivos, os ícones são br-icon-base com cursor:pointer, sem tabindex nem role. O ícone Laudo abre o PDF num modal ao clique, mas nenhum deles é focável.

Esperado: Controles operáveis por teclado (button ou link).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar na aba "Concluídos" 3. Clicar no botão de olho da linha 1 (Pérola Veloz II, NAO COMPARECIMENTO)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-propesc-agendar-vistoria table br-icon-base[style*=\"cursor\"]" — Seletor não resolvido

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
  "cardId": "C-17e882c59d22323f485b344dc2d1cb7726d54a9e60110e8f8748cf6367ac0b9f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-194be61b556102e666c35510ac597aa693089d50713a299df1081c17a336fbd9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Trocar unidade", no menu do avatar, é um <span> com cursor:pointer e listener de clique, sem tabindex nem role.

Esperado: Ação como botão focável.

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

- `S-page-013` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-194be61b556102e666c35510ac597aa693089d50713a299df1081c17a336fbd9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-19e1792dec58e269d03d842f20761e53beabaf152aeb01b376dbb9bc39574b93

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo "Atribuir Vistoriador", o <select> de vistoriadores não tem label, aria-label nem aria-labelledby (o texto "Selecione um Vistoriador" não está associado).

Esperado: Select com nome acessível.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="user-plus"] (Atribuir vistoriador)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-select" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-100` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-19e1792dec58e269d03d842f20761e53beabaf152aeb01b376dbb9bc39574b93",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1a7d2f0495a6d99e775c366395755de448e659232d4f7f665997bf65b7f57231

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Nenhum .br-footer nem <br-footer> (lista e detalhes)

Esperado: Rodapé do modelo de página do DS presente

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

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
- `F-017` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1a7d2f0495a6d99e775c366395755de448e659232d4f7f665997bf65b7f57231",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1c0a4f88d91e1989dafe65aa78f71fbba4e3b60dbf8804d5437812804abd1810

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Aba ativa indicada só pela classe "active" no li (cor/sublinhado); botões sem role=tab, aria-selected ou aria-current

Esperado: Aba selecionada exposta programaticamente

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

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
  "cardId": "C-1c0a4f88d91e1989dafe65aa78f71fbba4e3b60dbf8804d5437812804abd1810",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1de70ea4853c6088c2cfbaf049272586f5684969dd57023e02d5e949b58ad060

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Depois de clicar em "Notificar interessado com protocolo" e fechar o diálogo de confirmação com Escape, o foco vai para o <body>, e não para o botão que abriu o diálogo.

Esperado: Ao fechar o diálogo, o foco deve voltar ao botão que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar na aba "Concluídos" 3. Clicar no botão de olho da linha 10 (Sereia Nova V, ADEQUADA) 4. Clicar em "Notificar interessado com protocolo" 5. Pressionar Escape

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-propesc-agendar-vistoria br-button[icon=\"bell\"]" — Seletor não resolvido

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
  "cardId": "C-1de70ea4853c6088c2cfbaf049272586f5684969dd57023e02d5e949b58ad060",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1eb61c046b02cc58022e8f0b235631931bcb771648cba2c163c6db35b910e812

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
  "cardId": "C-1eb61c046b02cc58022e8f0b235631931bcb771648cba2c163c6db35b910e812",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1f8f1495df78eb6bd11e14798170fa351b3611dfbef1a803b92144db3f41b432

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
  "cardId": "C-1f8f1495df78eb6bd11e14798170fa351b3611dfbef1a803b92144db3f41b432",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-21315e9106b33b7bb680094c26947391334e054c64256c0c236eb4e1fdc50d5d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As opções da lista de filtro (ex.: "Barra Nova") são <div class="br-item"> com <label> sem input associado; não são focáveis e não têm papel de opção ou rádio. Só podem ser escolhidas com o mouse.

Esperado: Opções focáveis e selecionáveis por teclado, com papel e estado expostos (radio/option).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no filtro "Cidade"

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
  "cardId": "C-21315e9106b33b7bb680094c26947391334e054c64256c0c236eb4e1fdc50d5d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-243862929a30e8fa703cf86aafe1ca56207ac0fd8fa9f38e83fd4124d734eab4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Tag "Nenhum filtro de data aplicado": #ffffff sobre #c5d4eb, 14px, contraste 1,5:1

Esperado: Contraste mínimo 4,5:1

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-060` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-243862929a30e8fa703cf86aafe1ca56207ac0fd8fa9f38e83fd4124d734eab4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-249ffa616f39d0d1cb37ff71ea9244afbe6345fc0de7701b668e0c89fc66d700

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
  "cardId": "C-249ffa616f39d0d1cb37ff71ea9244afbe6345fc0de7701b668e0c89fc66d700",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-24d97ac5562da7278e950e40f24ad9bf41e25d5d653c4b4da9f94dc62b95bbd8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página atual só é indicada pela classe "active" (fundo azul); o link não tem aria-current="page". Conferido nas páginas 1 e 2.

Esperado: Página atual exposta programaticamente com aria-current="page".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

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
  "cardId": "C-24d97ac5562da7278e950e40f24ad9bf41e25d5d653c4b4da9f94dc62b95bbd8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-24f115e567f9365e1ab81376928fa3c309f405ee53528b077b5088eeac98d244

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
  "cardId": "C-24f115e567f9365e1ab81376928fa3c309f405ee53528b077b5088eeac98d244",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2507f4cab73565b76fe51d124b95d5514fc6a47d3de02405a3c09625bb1f71c1

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
  "cardId": "C-2507f4cab73565b76fe51d124b95d5514fc6a47d3de02405a3c09625bb1f71c1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2685516e3363768afc885c5df3fe7dab4a4635e393fed9dd59be755880afa77d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão de ação "visualizar" (ícone olho) em cada linha: o <button> interno do br-button tem aria-label="" e só um ícone aria-hidden, sem title. Nome acessível vazio (10 instâncias; o mesmo na aba Concluídos).

Esperado: Todo botão deve ter nome acessível que descreva a ação (ex.: aria-label "Visualizar vistoria").

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-c623d4d97c3a` → identificador devolvido por ferramenta (sem arquivo)
- `F-001..F-010` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-a220ec5e8010` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2685516e3363768afc885c5df3fe7dab4a4635e393fed9dd59be755880afa77d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-26a85080916d96ed98ef6d0958a177859f2db9b38004802fa4c2870bf67f73b2

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
  "cardId": "C-26a85080916d96ed98ef6d0958a177859f2db9b38004802fa4c2870bf67f73b2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-26fe75a26b4ab1dba33b36b906cac00d5e61910bdf3f0f909a000c2108e8b4e4

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
  "cardId": "C-26fe75a26b4ab1dba33b36b906cac00d5e61910bdf3f0f909a000c2108e8b4e4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2978f8c27ac1b2e539afba75df5b60e3eaa1d4e8cf6afa4af197f5f2cc784e56

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Cabeçalho da coluna de ações (9ª coluna) é um <th> vazio; as células da coluna ficam sem cabeçalho associado.

Esperado: Cabeçalho de coluna com texto (visível ou sr-only), ex.: "Ações".

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

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
- `F-023` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2978f8c27ac1b2e539afba75df5b60e3eaa1d4e8cf6afa4af197f5f2cc784e56",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-29e4c34d7d89ee124a4d7315d3e28a4a9f13f399d8fce2a52011973425754c7e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Filtros Cidade, Porto, Vistoriador e Status são <span class="br-tag interaction"> clicáveis, sem tabindex nem role, fora da ordem de tabulação; o painel aberto (.br-select) não tem input nem botão

Esperado: Filtros operáveis por teclado com controle nativo e estado expandido exposto

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
  "cardId": "C-29e4c34d7d89ee124a4d7315d3e28a4a9f13f399d8fce2a52011973425754c7e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2a908d0892f52e7c0642083f5c4373723f2071b3e9736f43fa28675e272eb3c4

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
  "cardId": "C-2a908d0892f52e7c0642083f5c4373723f2071b3e9736f43fa28675e272eb3c4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2ab811ef993391be6e42dcc4c509f187f7edc27fbe997a9500b956fe6601b7ae

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
  "cardId": "C-2ab811ef993391be6e42dcc4c509f187f7edc27fbe997a9500b956fe6601b7ae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2ad0329e3cd3aff86571145e47dd71f533b9afa8c7b167f5c0723f5219db473b

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
  "cardId": "C-2ad0329e3cd3aff86571145e47dd71f533b9afa8c7b167f5c0723f5219db473b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2c2f3893a1519da2fa092479411b246a28984b23f367eaac1c63e7c2435bc81a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Tag "Nenhum filtro de data aplicado": texto #ffffff sobre #c5d4eb, 14px = 1,5:1.

Esperado: Contraste mínimo de 4,5:1.

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-011` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2c2f3893a1519da2fa092479411b246a28984b23f367eaac1c63e7c2435bc81a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2cfee3f53a476309ab54dc47d4280cdff53e12cb73484133cf60febdd26ea9f4

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
  "cardId": "C-2cfee3f53a476309ab54dc47d4280cdff53e12cb73484133cf60febdd26ea9f4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2e76988acc748c18800ae7fb095646dd0d192e312c6f11c53371418fbbbdeebf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Etiqueta de status "Vistoria pré agendada" (aba Agendar): texto rgb(255,255,255) sobre rgb(136,136,136), 14px, contraste 3.54:1.

Esperado: Contraste de pelo menos 4.5:1.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar na aba "Agendar"

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
  "cardId": "C-2e76988acc748c18800ae7fb095646dd0d192e312c6f11c53371418fbbbdeebf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-31f91fec8d41dc6616f38f1e2bf00f5bd130af36b49b51b9d6dbd9affef77ae9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao abrir "Excluir Vistoria" pelo teclado e cancelar (Tab + Enter em Cancelar, ou Escape), o foco vai para <body> e não volta ao botão Excluir da linha.

Esperado: Ao fechar o diálogo, o foco retorna ao controle que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. focus tbody tr:nth-child(1) br-button[icon="trash"] (teclado) 2. press Enter (abre Excluir Vistoria) 3. press Tab 4. press Enter (Cancelar)

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>

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
  "cardId": "C-31f91fec8d41dc6616f38f1e2bf00f5bd130af36b49b51b9d6dbd9affef77ae9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-32ee7a43c2d5ff8f8ce8cd99866b7e49a58bb4813c5329264e8ceccdeb9f0970

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
  "cardId": "C-32ee7a43c2d5ff8f8ce8cd99866b7e49a58bb4813c5329264e8ceccdeb9f0970",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-354694aea741fa26b4dc04bc1650706b8bbc9c015700a830157696b3c01f9b6b

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
  "cardId": "C-354694aea741fa26b4dc04bc1650706b8bbc9c015700a830157696b3c01f9b6b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3695aa637d2d094742abd4cd720e2248323c79b7bd0caf98d198747679f2c158

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
  "cardId": "C-3695aa637d2d094742abd4cd720e2248323c79b7bd0caf98d198747679f2c158",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-37b90fc43b603fef26b8e6d75c4ce46428560a84dd4f59fef7f7c1946a042535

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
  "cardId": "C-37b90fc43b603fef26b8e6d75c4ce46428560a84dd4f59fef7f7c1946a042535",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-39324b3a1f558c396edbbe3aa6fec2f4b161a16ca193ab07126410158546161b

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
  "cardId": "C-39324b3a1f558c396edbbe3aa6fec2f4b161a16ca193ab07126410158546161b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3a9d6341b5051231d344e6c2b807be101ec1a40660cbf254ddd9cb53440a8bcf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Logotipo (img no shadow do br-header, govbr-logo.png) com alt="logo", que não identifica a marca

Esperado: alt descritivo (ex.: "gov.br")

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
  "cardId": "C-3a9d6341b5051231d344e6c2b807be101ec1a40660cbf254ddd9cb53440a8bcf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3d7d55a0d46bf65b89d180c43917adfcbb459600d3a252d758b05aaaae341be8

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
  "cardId": "C-3d7d55a0d46bf65b89d180c43917adfcbb459600d3a252d758b05aaaae341be8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3df5b6821918a0b05ef5e850a9678318b47690d10cee0c44925385271b0886a7

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
  "cardId": "C-3df5b6821918a0b05ef5e850a9678318b47690d10cee0c44925385271b0886a7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3e3408f0d84d3d547f2290c385ea6b79294f0e588e829cfc93a1f910ae269610

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
  "cardId": "C-3e3408f0d84d3d547f2290c385ea6b79294f0e588e829cfc93a1f910ae269610",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3fc8aef5a13d0437c2bf19f9abd8346b7021d01003a360111d03a399a2f0e8c2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No formulário de edição, os campos obrigatórios (Data da vistoria, Porto de desembarque, entre outros) não têm indicação visual (asterisco) nem required/aria-required: só se descobre ao enviar. Na tela pré agendada, o campo do boleto tem asterisco.

Esperado: Campos obrigatórios indicados no rótulo e programaticamente antes do envio.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] 2. click main br-button.pull-right (Editar)

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(2)>div:nth-of-type(1)>br-input" — <br-input>
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(3)>div:nth-of-type(1)>br-input" — <br-input>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(2)>div:nth-of-type(1)>br-input" — <br-input>
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(3)>div:nth-of-type(1)>br-input" — <br-input>


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3fc8aef5a13d0437c2bf19f9abd8346b7021d01003a360111d03a399a2f0e8c2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4202fb3906621fec4138524c2641ab537797938c42790f4d12d5c509c7ca6173

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Após Salvar com os campos vazios, a mensagem "Campo obrigatório" (div role=alert) aparece abaixo deles, mas o input não recebe aria-invalid nem aria-describedby apontando para a mensagem, e o texto não nomeia o campo.

Esperado: Campo em erro identificado programaticamente (aria-invalid=true) e associado à mensagem.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] 2. click main br-button.pull-right (Editar) 3. fill Porto de desembarque = "" 4. fill Data da vistoria = "" 5. click Salvar

Regra declarada: wcag:3.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(2)>div:nth-of-type(1)>br-input" — <br-input>
- "1280x900@detalhe-menu|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(3)>div:nth-of-type(1)>br-input" — <br-input>

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(2)>div:nth-of-type(1)>br-input" — <br-input>
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>pnip-propesc-detalhes-vistoria>div>div:nth-of-type(3)>div:nth-of-type(1)>br-input" — <br-input>


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `V-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4202fb3906621fec4138524c2641ab537797938c42790f4d12d5c509c7ca6173",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-428507a917995ca99be61503c114a21d5ac14176744801c0f9cee9f41417a552

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão interno (shadow) do br-button icon="eye" em cada linha não tem nome acessível: sem texto, aria-label="" vazio, sem title nem wrapper com rótulo (as demais ações têm "Atribuir vistoriador", "Excluir vistoria"). Também na aba Concluídos.

Esperado: Botão de visualizar detalhe com nome acessível (ex.: "Visualizar vistoria")

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-08f54319281b` → identificador devolvido por ferramenta (sem arquivo)
- `F-050` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-9883b0eaf2a0` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-428507a917995ca99be61503c114a21d5ac14176744801c0f9cee9f41417a552",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-43fd038b8f6218b98159c62f51dd78df96c2ed6896cb5002b39e361040d6d4eb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex nem role; ao clique leva a /portal-mpa, mas não é alcançável por teclado.

Esperado: Controle focável e operável por teclado (link ou botão).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no botão "Avatar com dropdown"

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
  "cardId": "C-43fd038b8f6218b98159c62f51dd78df96c2ed6896cb5002b39e361040d6d4eb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-45304ee751574b84973aaa99390069ebe5849d412d89a3f9739fa162266ef214

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
  "cardId": "C-45304ee751574b84973aaa99390069ebe5849d412d89a3f9739fa162266ef214",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-461eee0e3a625da1626a8715c1ae12f4947c9c0ef51257c90e0b41bd674949e4

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
  "cardId": "C-461eee0e3a625da1626a8715c1ae12f4947c9c0ef51257c90e0b41bd674949e4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-488988fbf0547772362bbe4f61518c30ccf97d2a0be90ff2eff9990a0cbc182a

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
  "cardId": "C-488988fbf0547772362bbe4f61518c30ccf97d2a0be90ff2eff9990a0cbc182a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4ab75cf279387b9e4630158f42e44e07463e7887ebf60b22f0555362dc552ce5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem do logotipo gov.br no cabeçalho (shadow DOM de br-header) tem alt="logo", que não identifica a marca nem o destino.

Esperado: Alternativa textual significativa (ex.: "gov.br").

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

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
  "cardId": "C-4ab75cf279387b9e4630158f42e44e07463e7887ebf60b22f0555362dc552ce5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4ad09610c6fa8315637d5a77edb8938becd5c8860c27e67eb79bfb7d5fdb6742

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Depois de aplicar o filtro "Barra Nova", o botão (x) que remove o filtro tem só o ícone fa-times, sem aria-label, title nem texto; nome acessível vazio (28x28 px).

Esperado: Botão com nome acessível (ex.: "Remover filtro Barra Nova").

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no filtro "Cidade" 3. Clicar na opção "Barra Nova"

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
  "cardId": "C-4ad09610c6fa8315637d5a77edb8938becd5c8860c27e67eb79bfb7d5fdb6742",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4c0c20ba40366e2fdcda35ab72dc5f4a718aa5ef040b5017d5f62957800cd03a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: No envio do boleto ART (vistoria pré-agendada), a área "Selecione o(s) arquivo(s)" é uma <div> com cursor:pointer que chama o input ao clique. O <input type="file" id="boletoResponsabilidadeTecnica"> tem display:none, e a div não é focável. Não dá para anexar o arquivo pelo teclado.

Esperado: Seletor de arquivo alcançável e acionável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar na aba "Agendar" 3. Clicar em "Agendar" da linha 1

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4c0c20ba40366e2fdcda35ab72dc5f4a718aa5ef040b5017d5f62957800cd03a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4d67ace514f238ea73561facffcee21495c56795334899f7f41c695bad44a43c

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
  "cardId": "C-4d67ace514f238ea73561facffcee21495c56795334899f7f41c695bad44a43c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-52488f064ad3ac712d89d4ccacf7cadf3d118aa312b74287a6af89e85d2d7718

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Select de vistoriadores do diálogo "Atribuir Vistoriador" sem label, aria-label ou aria-labelledby

Esperado: Select com rótulo associado

Janela: 1280×900 · interações desde o carregamento: 1. click tbody > tr:nth-of-type(1) > td:nth-of-type(9) > div > div:nth-of-type(1) > br-button (Atribuir vistoriador, linha 1)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-select" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-244` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-52488f064ad3ac712d89d4ccacf7cadf3d118aa312b74287a6af89e85d2d7718",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5309f9c3673207f2bcef9127c1ee1834e6cce3758f439d3ba1bb1d3a2c3d5914

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A aba ativa (Tramitando) só é marcada pela classe "active" no <li>; os botões não têm role="tab", aria-selected nem aria-current. O leitor de tela não sabe qual aba está selecionada.

Esperado: Estado selecionado exposto (role=tablist/tab com aria-selected, ou aria-current).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>button" — <button#TRAMITANDO> "Tramitando"

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
  "cardId": "C-5309f9c3673207f2bcef9127c1ee1834e6cce3758f439d3ba1bb1d3a2c3d5914",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-54cd77f586d61b856155ce201a72f8e81bd66c890653929b015338ce8330ca4f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O menu do usuário tem role="menu", mas não contém nenhum elemento role="menuitem": os filhos são div/span/hr e um <button> "Sair" comum.

Esperado: Usar role=menu só com itens menuitem, ou remover role=menu e usar uma lista/região simples.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no botão "Avatar com dropdown"

Regra declarada: wcag:1.3.1

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
  "cardId": "C-54cd77f586d61b856155ce201a72f8e81bd66c890653929b015338ce8330ca4f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5716e4e3705648a20c20a12ad457d233935b86d374c7848d6bf5a4792bc56707

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Sem link de salto; primeiro link é "Home" (href="/portal-mpa") do breadcrumb

Esperado: Primeiro link levando ao conteúdo

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

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
- `F-018` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5716e4e3705648a20c20a12ad457d233935b86d374c7848d6bf5a4792bc56707",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5b3cbae367bd35537731882ba783dc4447435846a8b731c3c414de92f3486474

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O PDF é exibido num <object type="application/pdf"> sem title, aria-label nem conteúdo alternativo.

Esperado: Objeto com nome/alternativa textual (title ou aria-label) e conteúdo de fallback (ex.: link para baixar).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar na aba "Concluídos" 3. Clicar no botão de olho da linha 1 4. Clicar no ícone da coluna "Laudo"

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

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
  "cardId": "C-5b3cbae367bd35537731882ba783dc4447435846a8b731c3c414de92f3486474",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5c4ddf22d1e931ddaa77653785a8014c1cbcc3d8b80ce4024f02f83bad399003

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
  "cardId": "C-5c4ddf22d1e931ddaa77653785a8014c1cbcc3d8b80ce4024f02f83bad399003",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5df2d9d5c809fb744da2ff285f51c2fc9a4489b460e727382ffc5e132844e017

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Letra "U" do avatar: #ffffff sobre #ff8c00, 24,19px bold, contraste 2,33:1

Esperado: Contraste mínimo 3:1 (texto grande)

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `P-05` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5df2d9d5c809fb744da2ff285f51c2fc9a4489b460e727382ffc5e132844e017",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5f6673fa4d4b331fecf882b04122f11f16d385d0c92d5ecf6d79cae15d2e11f4

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
  "cardId": "C-5f6673fa4d4b331fecf882b04122f11f16d385d0c92d5ecf6d79cae15d2e11f4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5f8816dc049b759db07003e7202a54c4483c46a1542de4f72ae9c102e0379808

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
  "cardId": "C-5f8816dc049b759db07003e7202a54c4483c46a1542de4f72ae9c102e0379808",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5fe9e5e8165d4b1f5302e0c334a315b554271ae6bcf5b007ee5df7d73130a536

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
  "cardId": "C-5fe9e5e8165d4b1f5302e0c334a315b554271ae6bcf5b007ee5df7d73130a536",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-614d48c2b75840dddd84f35965c58aa4e8b62597be48bfa550464386e7e3b5a1

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
  "cardId": "C-614d48c2b75840dddd84f35965c58aa4e8b62597be48bfa550464386e7e3b5a1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-67ad6d4a9c5ce5fe76d6f39c55d31cb5e0712d61535a4cbe15a2379cd1d17ae7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão "Menu" do cabeçalho (#navigation, data-target="#main-navigation", no shadow DOM de br-header) não abre nada ao ser clicado: não existe #main-navigation no documento e o botão não tem aria-expanded.

Esperado: O botão de menu do cabeçalho do DS deve abrir o menu principal, ou não ser exibido.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no botão "Menu" do cabeçalho

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
  "cardId": "C-67ad6d4a9c5ce5fe76d6f39c55d31cb5e0712d61535a4cbe15a2379cd1d17ae7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-67f9896db3b76ab32f45fbe20103587caca9476b0c9a733d070c26fe9bfe38c3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Com o campo em erro, o input interno não tem aria-invalid nem aria-describedby; a mensagem "Campo obrigatório" (div role=alert fora do shadow DOM) não fica associada ao campo.

Esperado: Campo em erro com aria-invalid="true" e a mensagem associada (aria-describedby).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no botão de olho da linha 2 3. Clicar no primeiro "Editar" 4. Apagar o campo "Nome da embarcação" 5. Clicar em "Salvar" 6. Fechar o alerta "Preencha todos os campos obrigatórios"

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-propesc-editar-dados-vistoria br-input[formcontrolname=\"nomeEmbarcacao\"]" — Seletor não resolvido

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
  "cardId": "C-67f9896db3b76ab32f45fbe20103587caca9476b0c9a733d070c26fe9bfe38c3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-67fd3bbc962aae34da6449545a810c33478f03d7758980f40c519fee9859abeb

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
  "cardId": "C-67fd3bbc962aae34da6449545a810c33478f03d7758980f40c519fee9859abeb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-684d9c6036b6de983cce5b2f33dca79762ab3dcf899f33d75dc5364873297bbc

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
  "cardId": "C-684d9c6036b6de983cce5b2f33dca79762ab3dcf899f33d75dc5364873297bbc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-69c29de9e45a5247fa6c7c1dfffbe1b7bb3e8f7ff61a6f8bd67868e2cfda6632

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "boleto.pdf" é <strong> clicável com cursor:pointer, tabIndex -1, sem link/botão (o mesmo nos nomes de foto do não comparecimento)

Esperado: Link ou botão focável

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003037?mock-perfil=mpa (detalhe "Vistoria preenchida", aberto pelo botão olho da linha Âncora do Norte I com filtro Cidade=Barra Nova)

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-69c29de9e45a5247fa6c7c1dfffbe1b7bb3e8f7ff61a6f8bd67868e2cfda6632",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6ca72086bb113e97d588b3ea573bf3211244bc1ef2466762481fc32332403831

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
  "cardId": "C-6ca72086bb113e97d588b3ea573bf3211244bc1ef2466762481fc32332403831",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6e4be068e0e24d35c46c5c74d3faf25b59f16702b2ebd4895610056a8ef10d57

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O diálogo do PDF (role=dialog, aria-modal) tem aria-labelledby="swal2-title", mas o título está vazio e oculto: o diálogo fica sem nome acessível.

Esperado: Diálogo com nome acessível (ex.: "Boleto da ART - boleto.pdf").

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] 2. click .text-blue-vivid-60 > strong (boleto.pdf)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-popup" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-085` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6e4be068e0e24d35c46c5c74d3faf25b59f16702b2ebd4895610056a8ef10d57",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6f17148dc38e579f0a94349f31957f4cc22a2372c519dd9a02fd4aae5fe5e9f9

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
  "cardId": "C-6f17148dc38e579f0a94349f31957f4cc22a2372c519dd9a02fd4aae5fe5e9f9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6f42da4df3d73609bb8b687604bd016a44c9eb1ccd7879bafa128556ee5e0a9a

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
  "cardId": "C-6f42da4df3d73609bb8b687604bd016a44c9eb1ccd7879bafa128556ee5e0a9a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7080832add1eb42b34d42c72a079227237073194721e447d8e1141f15c3283c3

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
  "cardId": "C-7080832add1eb42b34d42c72a079227237073194721e447d8e1141f15c3283c3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-718683fa158526926c44a562cf918f46b9503330a8d93898cd734596c0907011

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O botão de fechar o modal tem aria-label="Close this dialog", em inglês, numa página lang="pt-br", sem marcação de idioma.

Esperado: Rótulo em português (ex.: "Fechar") ou trecho marcado com lang="en".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar na aba "Concluídos" 3. Clicar no botão de olho da linha 1 4. Clicar no ícone da coluna "Laudo"

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
  "cardId": "C-718683fa158526926c44a562cf918f46b9503330a8d93898cd734596c0907011",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7224f81610954462cfba16e360cbe7a29429d458eb9c033a561c871428d6a682

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão de visualizar (ícone olho) em cada linha não tem nome acessível: o <button> interno tem aria-label="" e só contém ícone aria-hidden; o host não tem title. A árvore de acessibilidade mostra "button" sem nome.

Esperado: Botão de ícone com nome acessível que descreva a ação (ex.: "Visualizar vistoria").

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7224f81610954462cfba16e360cbe7a29429d458eb9c033a561c871428d6a682",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7230524c8f357166a76ed3094fc40cf06c0447ad3936cf1b96e5804860eca1b9

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
  "cardId": "C-7230524c8f357166a76ed3094fc40cf06c0447ad3936cf1b96e5804860eca1b9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-738467148f1b9e433a7809575e852dd2f1c220f9260333cd7156b612126a3721

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na paginação, cada número de página é um <li> aninhado diretamente em outro <li> (sem <ul>/<ol>): estrutura de lista inválida.

Esperado: Itens <li> filhos diretos de <ul>/<ol>.

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-037..F-040` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-738467148f1b9e433a7809575e852dd2f1c220f9260333cd7156b612126a3721",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-74326efd4d936826e9e7fc4e7589a6a59c73d12f06ac04e190c4845666ce1d7b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No formulário de edição, "boleto.pdf" é um <strong> com cursor:pointer que abre o PDF em modal ao clique; não é focável.

Esperado: Link ou botão operável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no botão de olho da linha 2 3. Clicar no primeiro "Editar" (Dados da vistoria)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-propesc-editar-dados-vistoria strong" — Seletor não resolvido

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
  "cardId": "C-74326efd4d936826e9e7fc4e7589a6a59c73d12f06ac04e190c4845666ce1d7b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7586e4cca6e993852feed3522f67ddfbc8500d3e9ac2f28ea35025a236d8645f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O mesmo ícone de lixeira não tem nome acessível (sem aria-label/title; o <i> interno é aria-hidden).

Esperado: Nome acessível como "Remover boleto.pdf".

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] 2. click main br-button.pull-right (Editar)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-icon-base[icon-name=\"trash\"]" — Seletor não resolvido

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
  "cardId": "C-7586e4cca6e993852feed3522f67ddfbc8500d3e9ac2f28ea35025a236d8645f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-75a7ae0683ca9817d13b708aab5b8ed310ba563581451c4e2aa7110eaaf016ac

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
  "cardId": "C-75a7ae0683ca9817d13b708aab5b8ed310ba563581451c4e2aa7110eaaf016ac",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-76bf7b4b586bb6aa5c6b8ac0688131faf9649111fbd468f558aa0fe5366a3c97

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Aba Agendar: badge "Vistoria pré agendada" com texto #ffffff sobre #888888, 14px = 3,54:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR

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

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-b0926480187c` → identificador devolvido por ferramenta (sem arquivo)
- `F-102..F-111` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-76bf7b4b586bb6aa5c6b8ac0688131faf9649111fbd468f558aa0fe5366a3c97",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-76e30311a32cd5d7e701b7f4a1d849d7033b1d5638c723f13ed806152c28d4aa

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os dois campos de data (input#br-input-8 e #br-input-9 no shadow) sem rótulo associado; "Data da vistoria:" e "até" são spans soltos

Esperado: Campos de data com label associado (início e fim)

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:6.2

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-76e30311a32cd5d7e701b7f4a1d849d7033b1d5638c723f13ed806152c28d4aa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-773d89b2613c677acf3d962497b4bf344cc7879ad242c7f78c4d6cec5e372f27

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Etiquetas "Aguarda preenchimento" (seção Vistoria) e "0%" (Conclusão, na vistoria preenchida): texto rgb(255,255,255) sobre rgb(136,136,136), 14px, contraste 3.54:1.

Esperado: Contraste de pelo menos 4.5:1.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no botão de olho da linha 2 (Maresia Nova I, Vistoria agendada)

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
  "cardId": "C-773d89b2613c677acf3d962497b4bf344cc7879ad242c7f78c4d6cec5e372f27",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-78ac14c1e1b846c7cd94d45b23f3ea5fda09302c74e82ea7a772992cdb89b39c

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
  "cardId": "C-78ac14c1e1b846c7cd94d45b23f3ea5fda09302c74e82ea7a772992cdb89b39c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-795094d70a90f280cbcc7326d92390006bd088de8c3de2951205f3188fe19d26

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
  "cardId": "C-795094d70a90f280cbcc7326d92390006bd088de8c3de2951205f3188fe19d26",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7a792497eb5eab0949a23e4f5a6cc5fb43c2f9b98c1b2054ef2ee6ebf9c87d6a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Detalhe da vistoria: a hierarquia começa em <h3> "Programa Nacional de Regularização..." seguida de <h4>; não há <h1> nem <h2> (o mesmo padrão aparece em editar-dados-vistoria e nos outros detalhes).

Esperado: Hierarquia de títulos sem saltos, começando por <h1>.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (Coral Mansa IV)

Regra declarada: emag:1.3

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
- `F-084` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7a792497eb5eab0949a23e4f5a6cc5fb43c2f9b98c1b2054ef2ee6ebf9c87d6a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7a85e481853b5d54d80b7c7c1928ed6cfbdd12ea5731cbadc53c3ae482898a82

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
  "cardId": "C-7a85e481853b5d54d80b7c7c1928ed6cfbdd12ea5731cbadc53c3ae482898a82",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7cdb168ac30db63decadca7606262d20419fcd3dec561549138580b18bf3c715

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
  "cardId": "C-7cdb168ac30db63decadca7606262d20419fcd3dec561549138580b18bf3c715",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7df0b260f4ab723de33aa93530cba12b08985f925abcf092e57b9d480e7d81a6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na paginação, cada número de página é um <li> aninhado diretamente dentro de outro <li>, sem <ul> intermediário: estrutura de lista inválida (listitem dentro de listitem).

Esperado: Cada página como um único <li> filho direto do <ul>.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li" — <li> "1"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(3)>li" — <li> "2"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(4)>li" — <li> "3"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(5)>li" — <li> "4"

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
  "cardId": "C-7df0b260f4ab723de33aa93530cba12b08985f925abcf092e57b9d480e7d81a6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7ed37b093d36209e410c217ed11f6284144e86e84b511002675ba2b6fb038e7e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Vistoria pré agendada: o seletor de arquivo "Selecione o(s) arquivo(s)" é uma div com listener de clique, sem tabindex nem role, e o input file está com display:none (d-none). Não dá para anexar o boleto ART obrigatório pelo teclado.

Esperado: Upload operável por teclado (botão ou input file focável) com nome associado ao rótulo.

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

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7ed37b093d36209e410c217ed11f6284144e86e84b511002675ba2b6fb038e7e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7ee9b18a0bd476be47f25ed51c2e37ec6404a4af74a37fd9c3ecd5cd9d53acda

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
  "cardId": "C-7ee9b18a0bd476be47f25ed51c2e37ec6404a4af74a37fd9c3ecd5cd9d53acda",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-82249fd83a7bb2912e8c5eac3e9cbf15dc36ac742c3ad1060eecfae980bc3fea

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ações da linha (user-plus/user-times, trash, bell) são br-button só com ícone, sem rótulo e sem o atributo circle (pílulas de 78px)

Esperado: Botão só-ícone no tipo circular do DS

Janela: 1280×900 · interações desde o carregamento: nenhuma

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-f6561ecf892f` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-f8d0bbb8e1b2` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-0147f8a07fca` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-39a4fbfceeea` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-82249fd83a7bb2912e8c5eac3e9cbf15dc36ac742c3ad1060eecfae980bc3fea",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-824c8658a3084c23deda8d62da489a965ba53792940b74081638f59c05446f2c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Campo de busca só tem o placeholder "Pesquise aqui ..." como rótulo; host br-input sem label/aria-label

Esperado: Rótulo associado ao campo de busca, não só placeholder

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:6.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-019` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-824c8658a3084c23deda8d62da489a965ba53792940b74081638f59c05446f2c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-824ce9b10b75a4bf91df1de6a743427f74b820795870f79709d44bfccd4720fe

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Tag "Vistoria pré agendada" (aba Agendar): #ffffff sobre #888888, 14px, contraste 3,54:1 (a mesma classe aparece em "Aguarda preenchimento", "60%", "0%" nos detalhes)

Esperado: Contraste mínimo 4,5:1

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR (aba Agendar)

Regra declarada: wcag:1.4.3

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-5d4ce3c2c7ad` → identificador devolvido por ferramenta (sem arquivo)
- `F-164` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-824ce9b10b75a4bf91df1de6a743427f74b820795870f79709d44bfccd4720fe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8314b0d85be873439940060ca5666e72ad70a3f73211dde072638d2dcb98bb0f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "boleto.pdf" (e, na vistoria preenchida, os arquivos v3038-campoNN-1.pdf) são <strong> com cursor:pointer que abrem o PDF ao clique, mas não são focáveis (tabIndex -1, sem role).

Esperado: Link ou botão focável e operável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar na aba "Concluídos" 3. Clicar no botão de olho da linha 1 (Pérola Veloz II, NAO COMPARECIMENTO)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8314b0d85be873439940060ca5666e72ad70a3f73211dde072638d2dcb98bb0f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8721dee21cac38946a3b6559d06d99f477b1aa1b04b5964d2ecbfda4674dc334

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Imagem exit-icon.png no botão "Sair" sem atributo alt

Esperado: alt="" (decorativa)

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: wcag:1.1.1

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
- `F-313` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8721dee21cac38946a3b6559d06d99f477b1aa1b04b5964d2ecbfda4674dc334",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-87625006ef669188f48f01435f989940232a317439b630c11925dc5dfc3da1f7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem do botão "Sair" (assets/images/exit-icon.png) não tem atributo alt.

Esperado: alt="" (decorativa, pois o texto "Sair" já nomeia o botão).

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

Regra declarada: wcag:1.1.1

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

- `S-page-013` → identificador devolvido por ferramenta (sem arquivo)
- `F-162` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-87625006ef669188f48f01435f989940232a317439b630c11925dc5dfc3da1f7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-88c19907b0df6846c8f2e8e6d33c7b1332275e15c2341a0abb9d8e2def7698bf

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
  "cardId": "C-88c19907b0df6846c8f2e8e6d33c7b1332275e15c2341a0abb9d8e2def7698bf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-89463b1f0031123cd1dffcaa12489c84fabf2fdbd683a3afa2745c4f10a1ab6b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As opções da lista de filtro (ex.: Areia Branca do Leste...) são <div class="br-radio"><label> sem input, com listener de clique na div, tabindex -1 e sem role nem estado.

Esperado: Opções focáveis e selecionáveis por teclado, com papel e estado (radio/option com aria-checked/aria-selected).

Janela: 1280×900 · interações desde o carregamento: 1. click filtro Cidade (.row.pl-2 > .col-auto:nth-child(1) > span.br-tag.interaction)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.br-select.position-absolute .br-radio" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-89463b1f0031123cd1dffcaa12489c84fabf2fdbd683a3afa2745c4f10a1ab6b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-89b4bd9b4baefe947e11038f7ca6fd34000c7333fcfe1dd0f72c13a17f9f3e57

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
  "cardId": "C-89b4bd9b4baefe947e11038f7ca6fd34000c7333fcfe1dd0f72c13a17f9f3e57",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8b059cfdfb2f4eb51d8d1081b4dec9f71a61807c07af3f28c84d2714a6fe3997

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
  "cardId": "C-8b059cfdfb2f4eb51d8d1081b4dec9f71a61807c07af3f28c84d2714a6fe3997",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8ec1d540bb73267594e81151743c24a846ff835ec9a02e89eca1cae73965d551

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
  "cardId": "C-8ec1d540bb73267594e81151743c24a846ff835ec9a02e89eca1cae73965d551",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8f175e8d4c798f8d1b5f985feb64445bb4eb9db05d4cb05c512d668314f24f1e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Busca "Coral" a partir da página 2 mostra "Não há vistorias para exibir." e remove a paginação, embora a mesma busca da página 1 retorne 3 vistorias: a busca não volta à página 1

Esperado: Nova busca reinicia na página 1

Janela: 1280×900 · interações desde o carregamento: 1. click button[aria-label="Página seguinte"] 2. fill input[name=search] (dentro de br-input#search) = "Coral" 3. press Enter

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."

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
  "cardId": "C-8f175e8d4c798f8d1b5f985feb64445bb4eb9db05d4cb05c512d668314f24f1e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8f3f6ffd8ad8dd02efa9e1149b6f61ca8658b795dedde2959e0d00daaa8af35c

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
  "cardId": "C-8f3f6ffd8ad8dd02efa9e1149b6f61ca8658b795dedde2959e0d00daaa8af35c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-93d3f2d3c8f2c53bdfbf1f80fea4609874b08a1be47409132494c7d63d6f956b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Etiqueta informativa "Nenhum filtro de data aplicado": texto rgb(255,255,255) sobre rgb(197,212,235), 14px, contraste 1.5:1.

Esperado: Contraste de pelo menos 4.5:1.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>span" — <span> "Nenhum filtro de data aplicado"

### Unidades candidatas (não são crédito)

- U-294d06e9c9ac03ecc74fb602199737580e11736300a52c3df77daafce5eb8a3c — B-13 · inicial · cena 1280x900@inicial · <span> "Nenhum filtro de data aplicado": Etiqueta "Nenhum filtro de data aplicado" (br-tag primary-pastel-01 small): texto branco sobre #c5d4eb, 14 px peso 500 — contraste 1,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-93d3f2d3c8f2c53bdfbf1f80fea4609874b08a1be47409132494c7d63d6f956b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-972c6ec84a08327fa6216f32a7c260f103e86238a82789ade05686e76cb3902a

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
  "cardId": "C-972c6ec84a08327fa6216f32a7c260f103e86238a82789ade05686e76cb3902a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9793902c897a5b39a8a4a9a6432c81c4118378a3418a591726608e9b5f60aa30

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
  "cardId": "C-9793902c897a5b39a8a4a9a6432c81c4118378a3418a591726608e9b5f60aa30",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-987d2146f49d86000787903059b83cc23b856d06b479b52da18e1e9ab49ac471

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
  "cardId": "C-987d2146f49d86000787903059b83cc23b856d06b479b52da18e1e9ab49ac471",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-998f25c4bcb2a6a491a053f66fa47dfcca800c55b8dac59b0391e8e4847a8f23

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Cabeçalhos da coluna de seleção (só checkbox) e da coluna de ações sem texto

Esperado: th com texto (visível ou sr-only), ex.: "Selecionar", "Ações"

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

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
- `FAM-317a40e02c10` → identificador devolvido por ferramenta (sem arquivo)
- `F-071` → identificador devolvido por ferramenta (sem arquivo)
- `F-072` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-998f25c4bcb2a6a491a053f66fa47dfcca800c55b8dac59b0391e8e4847a8f23",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9ab19a1a5bee4d848eb813e50d3e4ba0dd7c035e946585f277dc43a51871390d

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
  "cardId": "C-9ab19a1a5bee4d848eb813e50d3e4ba0dd7c035e946585f277dc43a51871390d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9b325fe4180edf10184459abde9f4278d3a7db00a5dd1fbe940370ccea5dc161

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os dois campos de data do filtro ("Data da vistoria:" ... "até") não têm <label> nem aria-label; os textos visíveis são <span> soltos, sem associação. O nome acessível do input é vazio.

Esperado: Rótulos associados programaticamente (ex.: "Data da vistoria inicial" e "Data da vistoria final").

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

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
  "cardId": "C-9b325fe4180edf10184459abde9f4278d3a7db00a5dd1fbe940370ccea5dc161",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9dd673eb766499c711dd8070b6367f238d4be679298eae229f23eeaff3d79d56

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Com a janela de 1280x900, a tabela tem 1272px de largura num contêiner .br-table de 1096px (overflow visible). O documento fica com scrollWidth de 1364px, rolagem horizontal, e a coluna de ações corta o botão "Notificar".

Esperado: A tabela deve caber na área do conteúdo ou rolar dentro do próprio contêiner, sem cortar ações nem gerar rolagem horizontal da página.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

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
  "cardId": "C-9dd673eb766499c711dd8070b6367f238d4be679298eae229f23eeaff3d79d56",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a036b44592e5f6d174f9c14f9a8a94758bf2997f57d9ddcd5377140c0c70534f

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
  "cardId": "C-a036b44592e5f6d174f9c14f9a8a94758bf2997f57d9ddcd5377140c0c70534f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a12ceb88659055841de14fc7823875d4ded3f6625efd7935e585c7155b9e71c0

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
  "cardId": "C-a12ceb88659055841de14fc7823875d4ded3f6625efd7935e585c7155b9e71c0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a14f523fe5318f770e31373f4da0f256aa9b1223193f0928652d5d7152e04c3c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Busca sem resultados: "Não há vistorias para exibir." aparece em <div><p> sem role=status nem aria-live, e a região aria-live da paginação é removida, então a mensagem não é anunciada.

Esperado: Mensagem de resultado em região role=status/aria-live.

Janela: 1280×900 · interações desde o carregamento: 1. fill campo Pesquise aqui = "zzzz" 2. press Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.align-items-center.mt-5" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-016` → identificador devolvido por ferramenta (sem arquivo)
- `V-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a14f523fe5318f770e31373f4da0f256aa9b1223193f0928652d5d7152e04c3c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a2ea896ed4844d5b68883ff60e6bf57ceb21386365b333ef57e5206f84ce26b5

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
  "cardId": "C-a2ea896ed4844d5b68883ff60e6bf57ceb21386365b333ef57e5206f84ce26b5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a2fc194b632dfccaced79e2bfdad218a0fda758c948dd8e5db6cf92727f910a8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: 11 checkboxes (selecionar todos e um por linha) sem label, aria-label ou aria-labelledby: nome acessível vazio

Esperado: Cada checkbox com nome acessível (ex.: "Selecionar vistoria Coral Mansa IV")

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
  "cardId": "C-a2fc194b632dfccaced79e2bfdad218a0fda758c948dd8e5db6cf92727f910a8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a38521199714463a8577077e38e7dab8dad5bec6b54f1d63b0157ff5cf5caaae

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Vistoria concluída: os ícones Laudo, Protocolo e Arquivos da tabela têm cursor:pointer e listener de clique, mas são br-icon-base sem tabindex nem role e ficam inalcançáveis por teclado (igual nas situações NAO COMPARECIMENTO, NAO ADEQUADA e ADEQUADA).

Esperado: Ações como botões ou links focáveis.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(1) br-button[icon="eye"] (Pérola Veloz II, NAO COMPARECIMENTO)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:main table td br-icon-base[icon-name=\"file\"], main table td br-icon-base[icon-name=\"file-invoice\"], main table td div > br-icon-base[icon-name=\"download\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-012` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a38521199714463a8577077e38e7dab8dad5bec6b54f1d63b0157ff5cf5caaae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a4c71d7549e46f02cb55a463e90246dd518e507c0661c38f77524e98a384e183

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
  "cardId": "C-a4c71d7549e46f02cb55a463e90246dd518e507c0661c38f77524e98a384e183",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a58379c1b25a11703cd60e33a4a646ace8f44b2d340ee6055ea6dfb4e6e53760

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Trocar unidade" é <span> com cursor:pointer, sem tabindex nem role

Esperado: button/link focável

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

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a58379c1b25a11703cd60e33a4a646ace8f44b2d340ee6055ea6dfb4e6e53760",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a6104217bcfb9b63676d0bc80460c90fa1667563b4a12b839f8c59440e0fbbe6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Página atual (link com classe active) indicada só visualmente, sem aria-current="page" (também na página 2)

Esperado: aria-current="page" na página atual

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
  "cardId": "C-a6104217bcfb9b63676d0bc80460c90fa1667563b4a12b839f8c59440e0fbbe6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a780a4cfb896b10b8763a9dcb96f883afe4ae7ab0ac68eed33ed4b75031e8c99

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao fechar o diálogo "Atribuir Vistoriador" com Escape o foco vai para o body, não ao botão que o abriu

Esperado: Foco retorna ao invocador

Janela: 1280×900 · interações desde o carregamento: 1. click tbody > tr:nth-of-type(1) > td:nth-of-type(9) > div > div:nth-of-type(1) > br-button (Atribuir vistoriador, linha 1) 2. press Escape

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `V-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a780a4cfb896b10b8763a9dcb96f883afe4ae7ab0ac68eed33ed4b75031e8c99",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-aae12228c810954b1bd9e5a3bd35b88c8ee4ff0f2700afaca386c64f66457cd0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: "Limpar Filtro" com margin-top -5px, fora da escala

Esperado: Espaçamento por token

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
- `F-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-aae12228c810954b1bd9e5a3bd35b88c8ee4ff0f2700afaca386c64f66457cd0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ab882089eac85c6dcd9f1e9f636575b936742caa6119dc841d9e65ac7641e73a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Cada número de página é um <li> aninhado diretamente em outro <li>, sem ul/ol pai

Esperado: Um li por página dentro de ul/ol

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-a7458b215734` → identificador devolvido por ferramenta (sem arquivo)
- `F-086` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ab882089eac85c6dcd9f1e9f636575b936742caa6119dc841d9e65ac7641e73a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-abe553a4ad0cb18a0c5d0d59fb90014c55f59e5453c8c028ca6f2950d93c5b5f

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
  "cardId": "C-abe553a4ad0cb18a0c5d0d59fb90014c55f59e5453c8c028ca6f2950d93c5b5f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ac93d5cf72c1074405ab2348affa2d10e957eac85f94acfd50e8be4891bf65c0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Em "Editar dados da vistoria" de um registro sem vistoriador, os campos Nome do vistoriador, Registro e E-mail estão desabilitados, mas ao Salvar recebem "Campo obrigatório". Mesmo com os demais campos válidos, o envio continua bloqueado ("Preencha todos os campos obrigatórios") e o usuário não consegue corrigir.

Esperado: Campos desabilitados não devem ser validados como obrigatórios, ou a mensagem deve indicar como resolver (atribuir vistoriador).

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] 2. click main br-button.pull-right (Editar) 3. fill Porto de desembarque = "" 4. fill Data da vistoria = "" 5. click Salvar

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-propesc-editar-dados-vistoria form > div:nth-of-type(9) br-input" — Seletor não resolvido

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
  "cardId": "C-ac93d5cf72c1074405ab2348affa2d10e957eac85f94acfd50e8be4891bf65c0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ae1a219e7fafc6c21341cc154554284ececeb2a1afe4b394bce19cff7f01ee26

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
  "cardId": "C-ae1a219e7fafc6c21341cc154554284ececeb2a1afe4b394bce19cff7f01ee26",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ae1aa09070850905868b14601b947d94f9e92aa6a65d7b9b22e800218efde7fc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No breadcrumb, o item Home é um <a href="/portal-mpa"> que contém um <button> (elementos interativos aninhados), com duas paradas de foco e papéis conflitantes.

Esperado: Um único elemento interativo (link) para o item Home.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>br-breadcrumb" — <br-breadcrumb>

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
  "cardId": "C-ae1aa09070850905868b14601b947d94f9e92aa6a65d7b9b22e800218efde7fc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ae509fdd66f51b29336cfa059969914bd2b9e480e4599f116d47ce3e03417083

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: "Buscar" com margin-top -38px, fora da escala

Esperado: Espaçamento por token

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
- `F-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ae509fdd66f51b29336cfa059969914bd2b9e480e4599f116d47ce3e03417083",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b0cff07c9e1f026bd2e90b903839d8f63cff86678b489e7f00f0c254663eb012

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Separador com border-top-color #bbbbbb, fora dos tokens de cor

Esperado: Cor por token

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

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

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-257` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b0cff07c9e1f026bd2e90b903839d8f63cff86678b489e7f00f0c254663eb012",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b1ef3a896bf206dba55225c5e76921b06411810da31ebad28dc995ef508164ac

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
  "cardId": "C-b1ef3a896bf206dba55225c5e76921b06411810da31ebad28dc995ef508164ac",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b371b27f5593c88f3a73764ad6907888f5decdf70c082420e5d55dad8cab5077

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Checkbox do cabeçalho (selecionar todos) e checkboxes de cada linha não têm label, aria-label nem title; nome acessível vazio.

Esperado: Cada checkbox com nome acessível (ex.: "Selecionar todas", "Selecionar Coral Mansa IV").

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b371b27f5593c88f3a73764ad6907888f5decdf70c082420e5d55dad8cab5077",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b42d4bc17c0645d7946c62b04496356172ed3cd4b15acc49efa408ea67f5de78

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
  "cardId": "C-b42d4bc17c0645d7946c62b04496356172ed3cd4b15acc49efa408ea67f5de78",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b5181301649455b8615e04a03698e2766f27c291fa897ae1bb126b83fc9a184f

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
  "cardId": "C-b5181301649455b8615e04a03698e2766f27c291fa897ae1bb126b83fc9a184f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b6d071a1fc8412a9dfd7a88cfa228a013836853c87de5db3962b3cca72ed1603

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os ícones Laudo (file) e Arquivos (download) não têm nome acessível (sem aria-label/title); só o de Protocolo tem title.

Esperado: Nome acessível que descreva a ação (ex.: "Baixar laudo").

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO 2. click tbody tr:nth-child(1) br-button[icon="eye"] (Pérola Veloz II, NAO COMPARECIMENTO)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:main table td br-icon-base[icon-name=\"file\"], main table td div > br-icon-base[icon-name=\"download\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-012` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b6d071a1fc8412a9dfd7a88cfa228a013836853c87de5db3962b3cca72ed1603",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b89c738db2488f27b6169ccbbf8c7f2993c47214ca90fd5d868463f1329101b4

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
  "cardId": "C-b89c738db2488f27b6169ccbbf8c7f2993c47214ca90fd5d868463f1329101b4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b9ecbfb22f5576db785a89872c4bd3fabd95344bf1f7612a8c4e763402f0c077

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Tag "Vistoria agendada": #ffffff sobre #4f97d1, 14px peso 500, contraste 3,14:1

Esperado: Contraste mínimo 4,5:1

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-6f09a43253c2` → identificador devolvido por ferramenta (sem arquivo)
- `F-061` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b9ecbfb22f5576db785a89872c4bd3fabd95344bf1f7612a8c4e763402f0c077",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bb1adc0a0a285a249900d15a836233451960823e43a6bee8e3f14259fc98fecb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: "Não há vistorias para exibir." aparece sem role=status/alert nem aria-live

Esperado: Resultado anunciado por região de status

Janela: 1280×900 · interações desde o carregamento: 1. click button[aria-label="Página seguinte"] 2. fill input[name=search] (dentro de br-input#search) = "Coral" 3. press Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:div.flex-column.justify-content-center.align-items-center.mt-5 > p" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `V-005` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bb1adc0a0a285a249900d15a836233451960823e43a6bee8e3f14259fc98fecb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bb2c813583dd557bc375bda555fcafa470f53b0baa89efc1b49b3f73c7272a9f

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
  "cardId": "C-bb2c813583dd557bc375bda555fcafa470f53b0baa89efc1b49b3f73c7272a9f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bdec8ebf4accb203d9606d8b1978fda63dba7590827234de5f6e0300d7f6deff

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
  "cardId": "C-bdec8ebf4accb203d9606d8b1978fda63dba7590827234de5f6e0300d7f6deff",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-be2aaa98a4b4d54c3488c1c26e693e272e45eb221f887abe0c09cb1562c21eef

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
  "cardId": "C-be2aaa98a4b4d54c3488c1c26e693e272e45eb221f887abe0c09cb1562c21eef",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bef2124fe561b39ff2f901b940f9040a335632d4dd6ac38d506f3c12ba1f2eb1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página atual da paginação é indicada só pela classe visual "active"; o link não tem aria-current="page".

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
  "cardId": "C-bef2124fe561b39ff2f901b940f9040a335632d4dd6ac38d506f3c12ba1f2eb1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c11a30056ab291f167b74e633069f600d781e8ea991acb1e787478ee8b8103b6

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
  "cardId": "C-c11a30056ab291f167b74e633069f600d781e8ea991acb1e787478ee8b8103b6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c137611bfb890ccc3d2914218aa579b1db1d9606548234bf50c4bcd180b677f2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão fechar "×" do diálogo do PDF no estado inicial (recebe o foco ao abrir): glifo #1351b4 sobre fundo #676767 = 1,29:1 (32px).

Esperado: Pelo menos 3:1 para o glifo grande do controle.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] 2. click .text-blue-vivid-60 > strong (boleto.pdf)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-close" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `P-01` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c137611bfb890ccc3d2914218aa579b1db1d9606548234bf50c4bcd180b677f2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c23eac8d9239997aad81c0aeb9489f00a0fa2e5f29abfa37abe584e7b976e274

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Inicial "U" do avatar no cabeçalho: #ffffff sobre #ff8c00 (bg-orange-vivid-30), 24,19px bold = 2,33:1 ([ferramenta citada] incompleto P-01; medido no navegador). Mesmo componente em todas as rotas.

Esperado: Pelo menos 3:1 para texto grande (4,5:1 para texto normal).

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `P-01` → identificador devolvido por ferramenta (sem arquivo)
- `V-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c23eac8d9239997aad81c0aeb9489f00a0fa2e5f29abfa37abe584e7b976e274",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c3270805d78dea1f9ece21100c83f77ff81875dce5b2931e749461d4e53f3dd3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Badge de status "Vistoria agendada": texto #ffffff sobre #4f97d1, 14px normal = 3,14:1.

Esperado: Contraste mínimo de 4,5:1 para texto de 14px.

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `FAM-5dae5cc6f34c` → identificador devolvido por ferramenta (sem arquivo)
- `F-012..F-021` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c3270805d78dea1f9ece21100c83f77ff81875dce5b2931e749461d4e53f3dd3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c423e83669e9a5523e1cd60b9b0d6f48736a37becc1dc805b8d2de16e87146ab

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Botão "Sair" com border-radius 20px, fora da escala

Esperado: Raio por token

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

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

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-256` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c423e83669e9a5523e1cd60b9b0d6f48736a37becc1dc805b8d2de16e87146ab",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c467f3d67de9416ca5ce67eb9cc3122fbd0b12c218ef26f69a2b2951c1a3d700

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
  "cardId": "C-c467f3d67de9416ca5ce67eb9cc3122fbd0b12c218ef26f69a2b2951c1a3d700",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c64d1b323789051825130298acc1be33d135da192521b71517d225ea314ab2f0

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
  "cardId": "C-c64d1b323789051825130298acc1be33d135da192521b71517d225ea314ab2f0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c6e228de2f00a73831bbd3cb15459917ce352b26dcbcdbc9f40ece2084345536

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
  "cardId": "C-c6e228de2f00a73831bbd3cb15459917ce352b26dcbcdbc9f40ece2084345536",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c7c6d8f06b9c71ada0202ef1a3aa02656e93f09771768659289fab36d884b7bc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Na trilha (br-breadcrumb), o item Home é um <a href="/portal-mpa"> que contém um <button> (aria-label="" com span sr-only "Home"); a navegação por Tab para duas vezes (A "Home" e depois BUTTON "Home").

Esperado: Um único controle interativo por item, sem botão aninhado em link.

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
  "cardId": "C-c7c6d8f06b9c71ada0202ef1a3aa02656e93f09771768659289fab36d884b7bc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c8bd9452ab6bfaae2a55f5188549d5a9c6bec6e00c347dc3d9491c4c56053a51

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
  "cardId": "C-c8bd9452ab6bfaae2a55f5188549d5a9c6bec6e00c347dc3d9491c4c56053a51",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c8daace65e4d8446ece7689ee7a6f6ac2ec5e948a6d9f708d7267ace18bf6d92

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
  "cardId": "C-c8daace65e4d8446ece7689ee7a6f6ac2ec5e948a6d9f708d7267ace18bf6d92",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cb5bc8afbe8fd38483727ceae10d4aa7bcf9f68c151c3c3de5922c1da6dba6ce

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os filtros Cidade, Porto, Vistoriador e Status são <span> com cursor:pointer, sem tabindex nem role; abrem a lista ao clique, mas o Tab passa da aba "Concluídos" direto para o campo de busca e pula os quatro filtros.

Esperado: Gatilhos de filtro operáveis por teclado (ex.: <button> com aria-expanded).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

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
  "cardId": "C-cb5bc8afbe8fd38483727ceae10d4aa7bcf9f68c151c3c3de5922c1da6dba6ce",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cbae80100bce1d3b9f8ca5aa73f6cac9777546c5f12f0c03793f6566c2b5bbcd

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
  "cardId": "C-cbae80100bce1d3b9f8ca5aa73f6cac9777546c5f12f0c03793f6566c2b5bbcd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ce510301e4eb18b11615fd5540331febe0ad380e3d9b41a187044e54b3629749

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
  "cardId": "C-ce510301e4eb18b11615fd5540331febe0ad380e3d9b41a187044e54b3629749",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d074b8bbeff4fb829b982955f31f1013524a26240111adf551e0ad79046547a2

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
  "cardId": "C-d074b8bbeff4fb829b982955f31f1013524a26240111adf551e0ad79046547a2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d0d31ef35f9a344674a17dead64964c99ef6840b9b1fccd12cf62568ebf4f2fb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O menu do avatar tem role="menu", mas não contém menuitem: os filhos diretos são divs de texto, o span "Trocar unidade" e o <button> "Sair".

Esperado: role=menu só com itens menuitem, ou remover role=menu e usar lista/botões comuns.

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

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

- `S-page-013` → identificador devolvido por ferramenta (sem arquivo)
- `F-138` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d0d31ef35f9a344674a17dead64964c99ef6840b9b1fccd12cf62568ebf4f2fb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d160cd106ef18b33bb85e2475f07611aa4215d833b758f1ccbe197800915e903

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão mostra o texto "Olá, Usuária de Teste, SUPERVISOR", mas o aria-label="Avatar com dropdown" substitui o nome acessível, que não contém o texto visível.

Esperado: O nome acessível deve conter o rótulo visível (ex.: remover o aria-label ou incluir o texto visível nele).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

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
  "cardId": "C-d160cd106ef18b33bb85e2475f07611aa4215d833b758f1ccbe197800915e903",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d2e2ac70af8b570c4e28528748d1679a4396ee1c51d04d8e333886a3da7974d6

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
  "cardId": "C-d2e2ac70af8b570c4e28528748d1679a4396ee1c51d04d8e333886a3da7974d6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d30dc842d732a830262cd52577f93175c80e4013041f8997cf6c17dcae90db15

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A tabela (1272px) ultrapassa o contêiner .br-table (direita 1188px) até 1364px; scrollWidth 1364 > 1280 e o botão "Notificar" fica cortado na borda

Esperado: Tabela contida no contêiner, sem rolagem horizontal da página

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
  "cardId": "C-d30dc842d732a830262cd52577f93175c80e4013041f8997cf6c17dcae90db15",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d64181256a66758d3e92ede55f3c2a8a38a94d9ea80a095d816cf9d265559c01

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
  "cardId": "C-d64181256a66758d3e92ede55f3c2a8a38a94d9ea80a095d816cf9d265559c01",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d79603e68d8a56de53b044fac3c8bdc2e69cdaf1a6f91b89a6091ba54e1044f7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: O modal "Trocar embarcação da vistoria" é uma div.br-modal sem role="dialog", aria-modal nem nome acessível; o título é uma div sem relação programática.

Esperado: Contêiner com role="dialog", aria-modal="true" e aria-labelledby apontando para o título.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no link de página "2" 3. Clicar no botão de olho da linha 18 (Aurora do Norte III, Vistoria preenchida) 4. Clicar em "Trocar embarcação da vistoria"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div" — <div> "Trocar embarcação da vistoria Busque e selecione"

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d79603e68d8a56de53b044fac3c8bdc2e69cdaf1a6f91b89a6091ba54e1044f7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d804edffbec0870362beab5709281a6c978ad845ec00164839347ffbe649be27

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: <title> "PNIP" no detalhe da vistoria, igual ao da lista e da edição; não descreve o conteúdo

Esperado: Título descritivo por página

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003037?mock-perfil=mpa (detalhe "Vistoria preenchida", aberto pelo botão olho da linha Âncora do Norte I com filtro Cidade=Barra Nova)

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
- `F-147` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d804edffbec0870362beab5709281a6c978ad845ec00164839347ffbe649be27",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d84b4baee5d659aef3d5ff21c6c75db796ab5c495d09084277f4ce62966237f8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O modal de visualização do PDF (role="dialog", aria-labelledby="swal2-title") tem o título #swal2-title vazio e com display:none, então o diálogo fica sem nome acessível.

Esperado: Diálogo com nome acessível (ex.: "Laudo da vistoria").

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar na aba "Concluídos" 3. Clicar no botão de olho da linha 1 4. Clicar no ícone da coluna "Laudo"

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
  "cardId": "C-d84b4baee5d659aef3d5ff21c6c75db796ab5c495d09084277f4ce62966237f8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d9de6db43ee41ada29e87400760226c141bf0b0efde19d7ac810e51275b63137

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Abas Agendar/Tramitando/Concluídos: a aba ativa só tem a classe "active" no <li>; os botões não têm aria-selected, aria-current nem role=tab, e o estado selecionado não é exposto (testado nas 3 abas).

Esperado: Estado da aba ativa determinável programaticamente (role=tab + aria-selected, ou aria-current).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>button" — <button#TRAMITANDO> "Tramitando"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d9de6db43ee41ada29e87400760226c141bf0b0efde19d7ac810e51275b63137",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-da46c3786b7f3238dafbb2abc47efc432436998e2c4b85b69984706773d11e6f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: "Nome da embarcação" é obrigatório (ao salvar vazio aparecem "Campo obrigatório" e o alerta "Preencha todos os campos obrigatórios"), mas o rótulo não tem asterisco nem indicação e o input não tem required/aria-required. Nenhum campo do formulário indica obrigatoriedade.

Esperado: Campos obrigatórios indicados no rótulo e programaticamente (required/aria-required).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no botão de olho da linha 2 3. Clicar no primeiro "Editar" 4. Apagar o campo "Nome da embarcação" 5. Clicar em "Salvar" 6. Fechar o alerta "Preencha todos os campos obrigatórios"

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-propesc-editar-dados-vistoria br-input[formcontrolname=\"nomeEmbarcacao\"]" — Seletor não resolvido

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
  "cardId": "C-da46c3786b7f3238dafbb2abc47efc432436998e2c4b85b69984706773d11e6f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dcd51049737f894199a9cdc3635dbca5e3f3cf78efbbe70f12bdd39e3ba95218

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
  "cardId": "C-dcd51049737f894199a9cdc3635dbca5e3f3cf78efbbe70f12bdd39e3ba95218",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dd0ccb0586c549127ee474df2ced9a54ec6a1f94ad56774081481458a94f8d31

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os dois campos de data do filtro ("Data da vistoria:" ... "até") não têm label associado: o input interno não tem label, aria-label nem aria-labelledby, e o texto visível não está vinculado.

Esperado: Cada campo de data com rótulo programático (ex.: "Data da vistoria inicial" / "final").

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

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
  "cardId": "C-dd0ccb0586c549127ee474df2ced9a54ec6a1f94ad56774081481458a94f8d31",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dde4c03ec28ceccc56832831b9add46137977c8f28fe91f020cb488ec6af608b

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
  "cardId": "C-dde4c03ec28ceccc56832831b9add46137977c8f28fe91f020cb488ec6af608b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-df9ae3a21373f7e371e63057eec40e25a75507efc4767278b763117fe92d969b

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
  "cardId": "C-df9ae3a21373f7e371e63057eec40e25a75507efc4767278b763117fe92d969b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dfa1c3babc0dc80d0ba6e8020a8376e855eca2bb8b9ee3a89c02fa0adf23205e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O ícone de lixeira ao lado de "boleto.pdf" abre a confirmação "Você tem certeza que deseja remover o boleto?" ao clique, mas não é focável nem tem role ou nome acessível.

Esperado: Botão focável com nome (ex.: "Remover boleto").

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no botão de olho da linha 2 3. Clicar no primeiro "Editar" (Dados da vistoria)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-propesc-editar-dados-vistoria br-icon-base[icon-name=\"trash\"]" — Seletor não resolvido

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
  "cardId": "C-dfa1c3babc0dc80d0ba6e8020a8376e855eca2bb8b9ee3a89c02fa0adf23205e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e045067feb146f6e7edf6eb87a35c4c3d73bf4913406566534f61f0ca0fe5a01

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Etiqueta de status "Vistoria agendada": texto rgb(255,255,255) sobre rgb(79,151,209), 14px peso 500, contraste 3.14:1.

Esperado: Contraste de pelo menos 4.5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

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
  "cardId": "C-e045067feb146f6e7edf6eb87a35c4c3d73bf4913406566534f61f0ca0fe5a01",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e170eb79c10c1321eb492e600fc1df0c4ab668940e9cd496be597c66ad4cd87b

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
  "cardId": "C-e170eb79c10c1321eb492e600fc1df0c4ab668940e9cd496be597c66ad4cd87b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e1aef05bf0ece63cda4a8912a16a2b826087670b815819d746f84d2d0e7c3fb4

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
  "cardId": "C-e1aef05bf0ece63cda4a8912a16a2b826087670b815819d746f84d2d0e7c3fb4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e25f471c49d2ee68aa44fabb561d94314a96ed8d1aaa65377cec50dbeb9cd9c2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A tela de listagem não tem <h1>; o único cabeçalho é o h2 "Vistorias".

Esperado: Hierarquia de cabeçalhos começando por h1 com o título principal do conteúdo.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão)

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
  "cardId": "C-e25f471c49d2ee68aa44fabb561d94314a96ed8d1aaa65377cec50dbeb9cd9c2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e3cd9abcadb1409138e0d832646c1803a5f54dac5d420e6e236b3fbe55f3b2b8

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
  "cardId": "C-e3cd9abcadb1409138e0d832646c1803a5f54dac5d420e6e236b3fbe55f3b2b8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e4487f7c19e6ab644977bf26587bdc6b08256d67ee0675b037be4cf69c7efabb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem do ícone de saída (exit-icon.png) dentro do botão "Sair" não tem atributo alt.

Esperado: Imagem decorativa com alt="" (ou alternativa adequada).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no botão "Avatar com dropdown"

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
  "cardId": "C-e4487f7c19e6ab644977bf26587bdc6b08256d67ee0675b037be4cf69c7efabb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e4dcdc55cf257107f9816fe19b5188e3258d25b9d7a0d2e1037a2ef14c2ec5c9

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
  "cardId": "C-e4dcdc55cf257107f9816fe19b5188e3258d25b9d7a0d2e1037a2ef14c2ec5c9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e999c63e34f5fab9d2d3ba954f5e3ac9a9ee83f1f96dc3d164d3dc541ad732c6

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
  "cardId": "C-e999c63e34f5fab9d2d3ba954f5e3ac9a9ee83f1f96dc3d164d3dc541ad732c6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e9cd76a7ecc70a163773b30521b0abf188780ed5dd81c41eebe4fd14073e7ffa

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
  "cardId": "C-e9cd76a7ecc70a163773b30521b0abf188780ed5dd81c41eebe4fd14073e7ffa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ec9f1500c2358c600e414f6ab6ac3a9ffb742a16914ff6f6224d7b061a39e0cb

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
  "cardId": "C-ec9f1500c2358c600e414f6ab6ac3a9ffb742a16914ff6f6224d7b061a39e0cb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-edd7cd459a0af80951fcb2398b39f935d4c6b5580326e6b0348f9282569dbe00

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na aba Tramitando, o botão "Atribuir vistoriador" usa o ícone user-times (remover usuário) nas linhas com vistoriador e user-plus nas demais; os dois abrem o mesmo diálogo "Atribuir Vistoriador".

Esperado: A mesma função identificada de forma consistente (mesmo ícone e rótulo).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>

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
  "cardId": "C-edd7cd459a0af80951fcb2398b39f935d4c6b5580326e6b0348f9282569dbe00",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-edeaf5473395e750affc3dd824724ffee4f2d3e4a7a9be0ae66dd83483ec49e9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Opções do filtro aberto são div.br-radio só com <label>, sem input radio: sem papel, estado ou foco; não há caixa de opção

Esperado: Opções como input type=radio + label, focáveis e com estado

Janela: 1280×900 · interações desde o carregamento: 1. click pnip-filter-panel .row > .col-auto:first-child > .br-tag (filtro Cidade)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel .br-radio" — Seletor não resolvido

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
  "cardId": "C-edeaf5473395e750affc3dd824724ffee4f2d3e4a7a9be0ae66dd83483ec49e9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ef49440442416bcd6e718ac3542dda5bb11b49b186f067f532a61e86c0c3f6d9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A caixa "selecionar todas" do cabeçalho e as 10 caixas das linhas não têm nome acessível (sem label, aria-label ou aria-labelledby).

Esperado: Cada checkbox com nome acessível (ex.: "Selecionar todas", "Selecionar vistoria Coral Mansa IV").

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-022` → identificador devolvido por ferramenta (sem arquivo)
- `F-026..F-036` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ef49440442416bcd6e718ac3542dda5bb11b49b186f067f532a61e86c0c3f6d9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ef8a2a0df28698151f91b2074824eeb6564fd3c053ab239897dad22767d20e34

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Não há link para saltar ao conteúdo: a primeira parada de Tab é o botão "Menu" do cabeçalho e não existe âncora para o <main> antes dele.

Esperado: Atalhos ("Ir para o conteúdo", menu, busca) no início da página.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag:1.5

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ef8a2a0df28698151f91b2074824eeb6564fd3c053ab239897dad22767d20e34",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f017d40a9cdb018965466e56374fb002c34a8f2b181c13231526d570d0d94260

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
  "cardId": "C-f017d40a9cdb018965466e56374fb002c34a8f2b181c13231526d570d0d94260",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f1d386b3b1dcf07f149718d026a8d24007ee811be9d6a2269f7c37ae7de24a21

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
  "cardId": "C-f1d386b3b1dcf07f149718d026a8d24007ee811be9d6a2269f7c37ae7de24a21",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f4e2e208bb15b8d39cf9c501e17e917148fded897210e167cc45cbb004779ee8

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
  "cardId": "C-f4e2e208bb15b8d39cf9c501e17e917148fded897210e167cc45cbb004779ee8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f5806daf2c32d0a332ca43b659276274ae41a537be5a17866847ee230e4c71da

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: \#avatar-menu com role="menu" sem nenhum filho menuitem (divs, span e button)

Esperado: role=menu com menuitems, ou sem role=menu

Janela: 1280×900 · interações desde o carregamento: 1. click #avatar-dropdown-trigger

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

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-289` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f5806daf2c32d0a332ca43b659276274ae41a537be5a17866847ee230e4c71da",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f59c818b5f9a552ada9db3a8667dcb7e750cfd5cd58f006a20a18c468290b605

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Detalhe da vistoria: status "Aguarda preenchimento" em #ffffff sobre #888888, 14px = 3,54:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. click tbody tr:nth-child(1) br-button[icon="eye"] (Coral Mansa IV)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"
- "1280x900@inicial|body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div" — <div> "Vistoria agendada"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div>div" — <div> "100%"
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(1)>div:nth-of-type(2)>div>div>div" — <div> "100%"
- "1280x900@modal|body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(4)>div:nth-of-type(1)>div:nth-of-type(2)>div>div>div" — <div> "0%"


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
- U-47e455721d9db772bfcf9d81fb3760168dc6269c6849d5348ccb5207c5570bb1 — B-23 · detalhe · cena 1280x900@modal · <div> "0%": Indicador "0%" do detalhe: texto branco (text-secondary-01) sobre #888 (bg-secondary-06), 14 px peso 400 — contraste 3,54:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-4947f781cee61c8d4e34f8fd68e6068c6ba9186a16939eaf9993f0dab21ea6cc — B-12 · inicial · cena 1280x900@inicial · <div> "Vistoria agendada": Etiqueta de status "Vistoria agendada" de cada linha: texto branco (rgb 255,255,255; classe text-secondary-01) sobre fundo #4f97d1 (bg-blue-40), 14 px peso 500 — contraste 3,14:1, abaixo de 4,5:1. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
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
- `F-083` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f59c818b5f9a552ada9db3a8667dcb7e750cfd5cd58f006a20a18c468290b605",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f5ca4694ab75d58bbd6ac6285b92311310a8d99d562727e36e9ca9cd5d02bf1f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Os itens da lista de embarcações são <div> com cursor:pointer, sem tabindex nem role; ao clique ganham só a classe "selecionada", sem aria-selected. Não dá para selecioná-los pelo teclado.

Esperado: Opções focáveis e selecionáveis por teclado, com estado selecionado exposto.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa (aba Tramitando ativa por padrão) 2. Clicar no link de página "2" 3. Clicar no botão de olho da linha 18 (Aurora do Norte III, Vistoria preenchida) 4. Clicar em "Trocar embarcação da vistoria"

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(1)" — <div> "Aurora Veloz - RAEP SC99100000 / TIE 9910000000"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(10)" — <div> "Estrela Prateada IV - RAEP RS99101233 / TIE 9910"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)" — <div> "Maresia do Norte III - RAEP PE99100137 / TIE 991"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(3)" — <div> "Onda Veloz III - RAEP PA99100274 / TIE 991001583"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(4)" — <div> "Âncora Clara I - RAEP RS99100411 / TIE 991002375"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(5)" — <div> "Aurora Nova - RAEP CE99100548 / TIE 9910031676"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(6)" — <div> "Pérola Veloz V - RAEP BA99100685 / TIE 991003959"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(7)" — <div> "Âncora Dourada - RAEP SC99100822 / TIE 991004751"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(8)" — <div> "Aurora Prateada I - RAEP PE99100959 / TIE 991005"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(9)" — <div> "Maresia Mansa - RAEP PA99101096 / TIE 9910063352"

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f5ca4694ab75d58bbd6ac6285b92311310a8d99d562727e36e9ca9cd5d02bf1f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fb3252720faf2061cccf2f941d301c25d33b6d3d997952bc2cc871b6b04b038b

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
  "cardId": "C-fb3252720faf2061cccf2f941d301c25d33b6d3d997952bc2cc871b6b04b038b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fb7c83ba24a357af174d860532ec0de106206ed1407574162801a7b072e8fdb0

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
  "cardId": "C-fb7c83ba24a357af174d860532ec0de106206ed1407574162801a7b072e8fdb0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fcaa72c2c582aef10cc4dc3896072399a04872c722506c39ecc30b3fc363108d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@detalhe-menu

Observado: Textarea "Descrever o motivo do não comparecimento": label sem for e textarea sem id/aria-label

Esperado: Label associado

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003043?mock-perfil=mpa (detalhe "Não comparecimento", aberto pelo botão olho da linha Gaivota Dourada IV com filtro Cidade=Barra Nova)

Regra declarada: emag:6.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@detalhe-menu (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>pnip-propesc-nao-comparecimento>div>div:nth-of-type(2)>div>div>textarea" — <textarea>

### Unidades candidatas (não são crédito)

- U-238f9e8879e41566f840160f72c03e67a02b73d7a42128f02a5935cc250e0e6f — B-20 · detalhe-menu · cena 1280x900@detalhe-menu · <textarea>: Detalhe da vistoria de não comparecimento: a <textarea> do motivo tem um <label> "Descrever o motivo do não comparecimento" como irmão, mas sem for (e a textarea sem id): o rótulo não está associado; nome acessível vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: detalhe-menu
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-149` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fcaa72c2c582aef10cc4dc3896072399a04872c722506c39ecc30b3fc363108d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fd75be8905e1925469a300ba7f1a992c797e56bb9f64b5890f2ebeebade1f50f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Página sem h1; o título principal "Vistorias" é h2 (nos detalhes o primeiro título é h3)

Esperado: Título principal em h1

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: [regra citada]

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
- `F-090` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fd75be8905e1925469a300ba7f1a992c797e56bb9f64b5890f2ebeebade1f50f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ff8871e90c8c433786dfc6e2facab79b4d0e91799fcc44bd588a946682102d6c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Tabela de vistorias sem <caption>

Esperado: Título da tabela em caption

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
  "cardId": "C-ff8871e90c8c433786dfc6e2facab79b4d0e91799fcc44bd588a946682102d6c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
