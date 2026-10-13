# Revisão semântica — pacote fechado

Versão: flow-semantic-1.5.0 · 177 cartões únicos · 177 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 177 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 343 sujeitos · 177 cartão(ões) sem evidência verificada · 133 com unidade candidata · estimativa **1062 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 32 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-0177a63113efa4cf8e8e01705926010992f4e4d084364b0ca6fdd17c7da2a463

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página atual da paginação é indicada só pela classe .active, sem aria-current="page".

Esperado: A página atual deve ter aria-current="page".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0177a63113efa4cf8e8e01705926010992f4e4d084364b0ca6fdd17c7da2a463",
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

## C-03fbafd4d6885324c9f73f9544c1359f5ca311f60fa8b9367a5ebfd1cd139bd5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O nome acessível é aria-label="Avatar com dropdown", mas o texto visível é "Olá, Usuária de Teste, SUPERVISOR". O nome não contém o rótulo visível.

Esperado: O nome acessível deve conter o texto visível, por exemplo "Olá, Usuária de Teste, SUPERVISOR – menu do usuário".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-03fbafd4d6885324c9f73f9544c1359f5ca311f60fa8b9367a5ebfd1cd139bd5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-09af7ef235b835900faaf67d442d0ae3e69c58bd67fc534ec7b8b9c8cf03400b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os dois campos de data (input type=date no shadow DOM) não têm label, aria-label nem title. O texto "Data da vistoria:" e "até" são spans soltos, e a árvore de acessibilidade mostra os campos como textbox sem nome.

Esperado: Cada campo deve ter nome acessível associado, por exemplo "Data da vistoria – início" e "Data da vistoria – fim".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>br-input:nth-of-type(1)" — <br-input>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(2)>div>br-input:nth-of-type(2)" — <br-input>

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-09af7ef235b835900faaf67d442d0ae3e69c58bd67fc534ec7b8b9c8cf03400b",
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

## C-0adff26550696a061f446dd0356763114b947b4157e3cf8725a131d39fbdef42

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão 'Menu' (#navigation no shadow DOM, data-target='#main-navigation') não tem efeito ao ser clicado: #main-navigation não existe e nada se abre.

Esperado: O botão de menu abre a navegação que controla (com aria-expanded) ou não é exibido.

Janela: 1280×900 · interações desde o carregamento: 1. Clicar no botão Menu do cabeçalho

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
  "cardId": "C-0adff26550696a061f446dd0356763114b947b4157e3cf8725a131d39fbdef42",
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

## C-11884ce3dc26fed0f8a4d575bb1483ad2dbd37c727b3bcc09e755031d21d92f2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na aba Agendar, texto 'Vistoria pré agendada' #ffffff sobre #888888, 14px normal: contraste 3,54:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. Clicar na aba Agendar

Regra declarada: color-contrast

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-status-solicitacao-utils .bg-secondary-06 > .text-secondary-01" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-326` → identificador devolvido por ferramenta (sem arquivo)
- `F-335` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-11884ce3dc26fed0f8a4d575bb1483ad2dbd37c727b3bcc09e755031d21d92f2",
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

## C-20ea9e4dbe7a26962472623f53e4a42c993df9660098b9fcaed48d457703f420

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O logo no shadow DOM do br-header tem alt='logo', texto que não identifica a marca.

Esperado: Texto alternativo equivalente (ex.: 'gov.br').

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
  "cardId": "C-20ea9e4dbe7a26962472623f53e4a42c993df9660098b9fcaed48d457703f420",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-22d5d5c7ff35cf03ba7247d58805248527ebfe143cd4fc42b69b10fdb9471f4e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A aba ativa só é marcada pela classe 'active' no <li>; os botões não têm role='tab', aria-selected nem aria-current.

Esperado: Estado selecionado da aba exposto programaticamente.

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
  "cardId": "C-22d5d5c7ff35cf03ba7247d58805248527ebfe143cd4fc42b69b10fdb9471f4e",
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

## C-26938ab145d68e6746b6452ca86ffbdfdc3852ed3e06833cf474361c847a8154

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Não há link de salto para o conteúdo. A primeira parada de Tab é o botão "Menu" do cabeçalho, e depois vêm avatar, breadcrumb, Exportar etc.

Esperado: O primeiro elemento focável deve ser um atalho "Ir para o conteúdo" que leve a <main>.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Tab (foco no botão Menu, dentro do shadow DOM de br-header)

Regra declarada: emag:1.5

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-26938ab145d68e6746b6452ca86ffbdfdc3852ed3e06833cf474361c847a8154",
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

## C-30d01a1e9a7d901ce2474768affef7428a5961ea1334af48bf16e1e8cfdce1b4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Depois de abrir pelo teclado (Enter) os diálogos Atribuir vistoriador, Excluir vistoria ou Notificar e fechar com Escape, o foco vai para <body> e não volta ao botão que abriu o diálogo.

Esperado: Ao fechar o diálogo, o foco volta ao controle que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. Focar 'Excluir vistoria' da linha 1 por teclado 2. Enter 3. Escape

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
  "cardId": "C-30d01a1e9a7d901ce2474768affef7428a5961ea1334af48bf16e1e8cfdce1b4",
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

## C-345c4da7b5ab78ac7ade97348e342904594f3c6016c144d225aea1484635eee4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botões de ação das linhas usam a variante 'secondary middle' (não circular) e exibem só ícone (user-plus/user-times, eye, trash, bell), sem rótulo visível.

Esperado: Button não circular com rótulo visível; ou usar a variante circular para botões só com ícone.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: govbr-3.7.0-component-button-4d7b5f978df1

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

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-345c4da7b5ab78ac7ade97348e342904594f3c6016c144d225aea1484635eee4",
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

## C-3b08fa1bf87a96369d5d2a983f2243d3869793ddeac65d43a7a93a98a50285e0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No shadow DOM, o item Home é <a href='/portal-mpa'> contendo <button class='br-button small circle'>: elementos interativos aninhados, com duas paradas de tabulação para o mesmo destino.

Esperado: Um único elemento interativo (link) com nome 'Home'.

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
  "cardId": "C-3b08fa1bf87a96369d5d2a983f2243d3869793ddeac65d43a7a93a98a50285e0",
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

## C-3c28556a1a4902ab3bdb43dc4cf96182ff4b70858817f46dd4e2bfb4a719ca89

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O status "Vistoria agendada" é branco sobre rgb(79,151,209), com contraste de 3,14:1 (14px, peso 500).

Esperado: O contraste deve ser de pelo menos 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3c28556a1a4902ab3bdb43dc4cf96182ff4b70858817f46dd4e2bfb4a719ca89",
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

## C-3f41fbacb9f0f0bdd929e26103b65411317679269fe90eb154d4259feb895be3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Texto 'Vistoria agendada' #ffffff sobre #4f97d1, 14px normal: contraste 3,14:1.

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-190` → identificador devolvido por ferramenta (sem arquivo)
- `F-199` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3f41fbacb9f0f0bdd929e26103b65411317679269fe90eb154d4259feb895be3",
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

## C-40b2f18ddb24ee014176b59423914ea619fb1e41c44e089ab5a4f1a2c46d5814

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: 'Trocar unidade' é um <span> com cursor pointer, sem tabindex nem role, fora da ordem de tabulação.

Esperado: Ação operável por teclado (ex.: <button>).

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em #avatar-dropdown-trigger

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
  "cardId": "C-40b2f18ddb24ee014176b59423914ea619fb1e41c44e089ab5a4f1a2c46d5814",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4362f08fadf3be7109e9328cac5182df3f5429b8cf2fb8f47cbc39b13cde4a04

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo 'Atribuir Vistoriador', o <select> de vistoriadores não tem label nem aria-label.

Esperado: Select com nome acessível (ex.: 'Vistoriador').

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em 'Atribuir vistoriador' na linha 1

Regra declarada: select-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-select" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-354` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4362f08fadf3be7109e9328cac5182df3f5429b8cf2fb8f47cbc39b13cde4a04",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-44055b375b33844a3f54c7b56679d83aa88cc89868c18208f6d18b647de78289

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Mensagem de estado vazio com erro de grafia: 'nesse periodo selecionado'.

Esperado: 'período' acentuado corretamente.

Janela: 1280×900 · interações desde o carregamento: 1. Preencher data inicial 2026-03-25 2. Preencher data final 2026-03-31 3. Digitar 'zzzinexistente' na busca 4. Enter

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-propesc-vistorias div.mt-5.text-center > p" — Seletor não resolvido

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
  "cardId": "C-44055b375b33844a3f54c7b56679d83aa88cc89868c18208f6d18b647de78289",
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

## C-46518a7849626955fa65208d605443e810d6e253efdd531159f6016e4ab36f22

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Depois de abrir pelo teclado os diálogos "Excluir Vistoria" ou "Atribuir Vistoriador" e fechá-los (Cancelar ou Esc), o foco vai para <body> em vez de voltar ao botão que abriu o diálogo.

Esperado: Ao fechar o diálogo, o foco deve voltar ao botão acionador.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Focar o botão Excluir vistoria da linha 2 e pressionar Enter 3. Tab até "Cancelar" e pressionar Enter (foco em BODY) 4. Focar o botão Atribuir vistoriador (user-plus) e pressionar Enter 5. Esc (foco em BODY)

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(1)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(9)>div>div:nth-of-type(3)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-09T05-34-08-966Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-35-06-480Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-46518a7849626955fa65208d605443e810d6e253efdd531159f6016e4ab36f22",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-47876508891893b8a16cee43514dc4404b75a437298a9e940514858d22c412d9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O botão de visualizar (ícone fa-eye) não tem title, label nem aria-label (o button interno tem aria-label=""). A árvore de acessibilidade mostra "button" sem nome nas abas Tramitando e Concluídos.

Esperado: O botão deve ter nome acessível, por exemplo "Visualizar vistoria".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-47876508891893b8a16cee43514dc4404b75a437298a9e940514858d22c412d9",
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

## C-4cbea3d086d3ed3c357a455229887f71064b5a50ad25ec4f322406e37d4fc605

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A letra "U" do avatar é branca (#FFF) sobre laranja rgb(255,140,0), com contraste de 2,33:1 (24,19px, negrito).

Esperado: O contraste deve ser de pelo menos 3:1 para texto grande.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4cbea3d086d3ed3c357a455229887f71064b5a50ad25ec4f322406e37d4fc605",
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

## C-5335fe30df1a9cc766adc260858917beebe8fd132ae53aee1a40e2c32d5963c4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A área do usuário (avatar e saudação) fica visualmente no cabeçalho, mas está fora do landmark banner: o <header> está no shadow DOM de br-header e o avatar é irmão desse host.

Esperado: Todo o conteúdo do cabeçalho deve estar dentro do landmark banner.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

Regra declarada: wcag:1.3.1

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5335fe30df1a9cc766adc260858917beebe8fd132ae53aee1a40e2c32d5963c4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-537120895a4e14bf81fd6ff8d5fc8142745a718527eac1f5d68d454f506b08ae

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O título da página é apenas "PNIP" e não identifica a tela (Vistorias).

Esperado: O título deve descrever a página, por exemplo "Vistorias - Plataforma Nacional da Indústria do Pescado".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-537120895a4e14bf81fd6ff8d5fc8142745a718527eac1f5d68d454f506b08ae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-53ec5bc96e5aa13cc94dab0b5503ea7d5337fce1626b593129c008d3983bc15e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: <img src='exit-icon.png'> do botão 'Sair' não tem atributo alt.

Esperado: alt='' (imagem decorativa ao lado do texto 'Sair').

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em #avatar-dropdown-trigger

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

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-324` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-53ec5bc96e5aa13cc94dab0b5503ea7d5337fce1626b593129c008d3983bc15e",
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

## C-5486bdd293151ff12e9f82946caf6f1e42700603e77490cf5f7ff663539e54f5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao ativar uma página (Enter no link '3') ou escolher 25 itens em 'Exibir' pelo teclado, a tabela é atualizada e o foco vai para <body>.

Esperado: O foco permanece no controle acionado ou vai para um ponto lógico (ex.: início da tabela).

Janela: 1280×900 · interações desde o carregamento: 1. Focar link de página '3' 2. Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>li>a" — <a> "1"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(3)>li>a" — <a> "2"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(4)>li>a" — <a> "3"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(5)>li>a" — <a> "4"

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
  "cardId": "C-5486bdd293151ff12e9f82946caf6f1e42700603e77490cf5f7ff663539e54f5",
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

## C-5df1aeb0fcd1c4c274f6105b56247344a91e2f9582e3d9395b0d064938ee4a81

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os números de página são <li> aninhados diretamente em outro <li>, sem <ul>/<ol> pai.

Esperado: Cada <li> como filho direto de <ul> ou <ol>.

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
- `F-215` → identificador devolvido por ferramenta (sem arquivo)
- `F-218` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5df1aeb0fcd1c4c274f6105b56247344a91e2f9582e3d9395b0d064938ee4a81",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5dfb176a4843e021b20de8f7ad8117565d4a9eed1077e7fe7d1113ee014cbe51

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O texto "Nenhum filtro de data aplicado" é branco sobre rgb(197,212,235), com contraste de 1,50:1 (14px).

Esperado: O contraste deve ser de pelo menos 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5dfb176a4843e021b20de8f7ad8117565d4a9eed1077e7fe7d1113ee014cbe51",
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

## C-67e3d833fad7f9499c8c64dc318a92439a8b403908af6b3bf5a4f31aae3eb706

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A tabela de vistorias não tem <caption> nem outro título associado.

Esperado: A tabela deve ter caption ou estar associada a um título (aria-labelledby).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

Regra declarada: emag:3.9

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-67e3d833fad7f9499c8c64dc318a92439a8b403908af6b3bf5a4f31aae3eb706",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-694091957186e432e02008bd2e0e1fe8f1d137091f90e12242cec64110b2e230

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No chip 'Exibindo vistorias de 25/03/2026 até 31/03/2026', o botão de remover só tem o ícone fa-times (aria-hidden), sem aria-label: nome acessível vazio.

Esperado: Botão com nome acessível (ex.: 'Remover filtro de data').

Janela: 1280×900 · interações desde o carregamento: 1. Preencher data inicial 2026-03-25 2. Preencher data final 2026-03-31

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.br-tag button.br-button.inverted.circle" — Seletor não resolvido

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
  "cardId": "C-694091957186e432e02008bd2e0e1fe8f1d137091f90e12242cec64110b2e230",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6de309ed70e013503acb37c39f8d6508072836ea7b18ce29aa7bf89a32066a06

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Tag 'Nenhum filtro de data aplicado' com texto #ffffff sobre #c5d4eb, 14px: contraste 1,5:1.

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
- `F-189` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-325` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6de309ed70e013503acb37c39f8d6508072836ea7b18ce29aa7bf89a32066a06",
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

## C-74f01b72396c99a8d6ec5dedb2fdd42927880ac31c4f4eb72d902e111c944db3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão "Menu" (#navigation no shadow DOM de br-header) tem data-target="#main-navigation", mas esse elemento não existe. Ao clicar, nenhum menu abre e o botão não expõe aria-expanded.

Esperado: O botão Menu do cabeçalho padrão deve abrir o menu principal (br-menu) e indicar o estado expandido/recolhido.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Clicar no botão "Menu"

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

- `../../tmp/pw-0/page-2026-10-09T05-33-12-585Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-74f01b72396c99a8d6ec5dedb2fdd42927880ac31c4f4eb72d902e111c944db3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-779967aad496abc8828a8922d6c845d134ffabc3f8cfaa499bff66c824a77ac9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No chip do filtro aplicado 'Areia Branca do Leste', o botão de remover só tem o ícone fa-times, sem aria-label: nome acessível vazio.

Esperado: Botão com nome acessível (ex.: 'Remover filtro Areia Branca do Leste').

Janela: 1280×900 · interações desde o carregamento: 1. Clicar no filtro Cidade 2. Clicar na opção 'Areia Branca do Leste'

Regra declarada: button-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.br-tag button.br-button.inverted.circle" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-302` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-779967aad496abc8828a8922d6c845d134ffabc3f8cfaa499bff66c824a77ac9",
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

## C-77a972019602be9b91833672f7228fa3aca0b253b5e44121560c56e4d0535970

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Não há .br-footer nem <br-footer> no documento.

Esperado: Área de Rodapé obrigatória do Template Base preenchida pelo componente Footer.

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-177` → identificador devolvido por ferramenta (sem arquivo)
- `V-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-77a972019602be9b91833672f7228fa3aca0b253b5e44121560c56e4d0535970",
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

## C-783c79aad4eebc42dd262117ea3f2e29b66c42dd15813837f5e1cafe22d7b2a0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Quando a busca/filtro não traz resultados, a tabela e a região aria-live da paginação são removidas e aparece 'Não há vistorias para exibir nesse periodo selecionado.' num <p> sem role=status nem aria-live.

Esperado: Resultado da busca/filtro anunciado como mensagem de status.

Janela: 1280×900 · interações desde o carregamento: 1. Preencher data inicial 2026-03-25 2. Preencher data final 2026-03-31 3. Digitar 'zzzinexistente' na busca 4. Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-propesc-vistorias div.mt-5.text-center > p" — Seletor não resolvido

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
  "cardId": "C-783c79aad4eebc42dd262117ea3f2e29b66c42dd15813837f5e1cafe22d7b2a0",
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

## C-79c314594f5b37933090137f0b01f3f586a75aecf0ead2d7cf6fe83ede798ecf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Na aba Agendar, o status "Vistoria pré agendada" é branco sobre rgb(136,136,136), com contraste de 3,54:1 (14px).

Esperado: O contraste deve ser de pelo menos 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Clicar na aba "Agendar"

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-79c314594f5b37933090137f0b01f3f586a75aecf0ead2d7cf6fe83ede798ecf",
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

## C-7ab01a225c917ecaa6384f857aa1a962b66dcf1bb8a41283d961c4959e656e13

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As opções do filtro aberto (ex.: "Barra Nova") são apenas <label> dentro de div.br-radio, sem input, papel ou tabindex. Não dá para focá-las nem selecioná-las por teclado.

Esperado: As opções devem ser controles focáveis (radio/option) e operáveis por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Clicar no filtro "Cidade"

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.br-select.position-absolute .br-radio > label" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-09T05-31-20-742Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7ab01a225c917ecaa6384f857aa1a962b66dcf1bb8a41283d961c4959e656e13",
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

## C-8061656ae9390b1d80fb1ba9b32d81167019a2e70da5a62d428468a5ef38d58c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O campo de busca só é identificado pelo placeholder 'Pesquise aqui ...'; não há label visível e o placeholder some ao digitar.

Esperado: Rótulo visível e persistente, associado ao campo de busca.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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
  "cardId": "C-8061656ae9390b1d80fb1ba9b32d81167019a2e70da5a62d428468a5ef38d58c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-83d1d9c209e51bf80b822e6d7103cc30a7f65bbca992499f5573f1930d4f410b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A mesma função "Atribuir vistoriador" (o mesmo diálogo abre) usa o ícone user-plus em linhas sem vistoriador e user-times ("remover usuário") em linhas com vistoriador. A identificação visual é inconsistente e sugere uma ação de remoção.

Esperado: Componentes com a mesma função devem ser identificados de forma consistente (mesmo ícone, ou ícone e nome que reflitam "Alterar vistoriador").

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Enter no botão Atribuir vistoriador (user-times) da linha 2: abre o diálogo "Atribuir Vistoriador"

Regra declarada: wcag:3.2.4

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-83d1d9c209e51bf80b822e6d7103cc30a7f65bbca992499f5573f1930d4f410b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-841112266e5d0457908311d35d9a5958a2f50f00e8f7e4de62961b1ca644ba0e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O breadcrumb (div.br-breadcrumb no shadow DOM) não é um <nav> nem tem aria-label, e o item atual "Vistorias" não tem aria-current.

Esperado: Use <nav aria-label="Breadcrumb"> e aria-current="page" no item atual, conforme o componente Breadcrumb do DS.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

Regra declarada: wcag:1.3.1

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-841112266e5d0457908311d35d9a5958a2f50f00e8f7e4de62961b1ca644ba0e",
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

## C-9e94a254f0efac13205deeba7d979f495edc03018f12c4102ff337317af686b8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na paginação, cada <li> com link de página está dentro de outro <li> (ul > li > li), uma estrutura de lista inválida.

Esperado: Cada <li> deve ser filho direto de <ul>/<ol>.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9e94a254f0efac13205deeba7d979f495edc03018f12c4102ff337317af686b8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a2c077986e17738ce4bfc74b17a9a0e76ab37af38942f61f710828232af79fbf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Checkbox 'selecionar todos' no cabeçalho e checkboxes de cada linha sem label, aria-label ou aria-labelledby (nome acessível vazio).

Esperado: Cada checkbox com nome acessível (ex.: 'Selecionar todas' e 'Selecionar vistoria <embarcação>').

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-204` → identificador devolvido por ferramenta (sem arquivo)
- `F-214` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a2c077986e17738ce4bfc74b17a9a0e76ab37af38942f61f710828232af79fbf",
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

## C-a6ebf4099d3aa05a0754dc341fc3176fe1643551d19d8f1faf6fa7bd04990de6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As opções do filtro aberto (ex.: 'Areia Branca do Leste') são <div class='br-item'><div class='br-radio'><label> sem input nem tabindex: só funcionam por clique.

Esperado: Opções focáveis e selecionáveis por teclado, com papel e estado (ex.: radio input associado ao label).

Janela: 1280×900 · interações desde o carregamento: 1. Clicar no filtro Cidade

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.br-select.position-absolute .br-item" — Seletor não resolvido

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
  "cardId": "C-a6ebf4099d3aa05a0754dc341fc3176fe1643551d19d8f1faf6fa7bd04990de6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-aa9ed57d9707a96b7515de60f940b55f23f416fe41dadf8cdeb9398da3d3bd65

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os dois inputs de data (#br-input-8 e #br-input-9, no shadow DOM) não têm rótulo associado; os textos 'Data da vistoria:' e 'até' estão soltos.

Esperado: Cada campo de data com rótulo programaticamente associado (ex.: 'Data inicial da vistoria' e 'Data final da vistoria').

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
- `F-202` → identificador devolvido por ferramenta (sem arquivo)
- `F-203` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-aa9ed57d9707a96b7515de60f940b55f23f416fe41dadf8cdeb9398da3d3bd65",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-aafdfa61dc56cd16a72b6cdeabe1283f55e49ec7b9ff4eab64a3e0020974cf1f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os 11 checkboxes da tabela (selecionar todos no cabeçalho e um por linha) não têm label, aria-label nem title, e não têm nome acessível.

Esperado: Cada checkbox deve ter nome, por exemplo "Selecionar todas" e "Selecionar vistoria Coral Mansa IV".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-aafdfa61dc56cd16a72b6cdeabe1283f55e49ec7b9ff4eab64a3e0020974cf1f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ab7a8cd05096b80218267cd9964abadedba07c837dd9c7383de3e4432f3f9849

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O botão "×" que remove o filtro aplicado (ex.: chip "Barra Nova") contém apenas o ícone fa-times, sem aria-label nem texto, e fica sem nome acessível. O mesmo ocorre no chip "Exibindo vistorias de … até …" do filtro de data.

Esperado: O botão deve ter nome acessível, por exemplo aria-label="Remover filtro Barra Nova".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Clicar no filtro "Cidade" 3. Clicar na opção "Barra Nova"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.br-tag.interaction > button.br-button.circle" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-09T05-31-45-487Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ab7a8cd05096b80218267cd9964abadedba07c837dd9c7383de3e4432f3f9849",
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

## C-ae66b859644e46aaf9382f781f748b8000d24011b80efa32589097b83dc91c20

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Em 1280px de largura, a tabela tem 1272px dentro de div.br-table de 1096px, sem overflow próprio. A página rola na horizontal (scrollWidth 1364px na aba Tramitando) e os botões "Notificar" ficam cortados à direita da área visível.

Esperado: A tabela deve caber no container ou rolar dentro do próprio wrapper (br-table responsivo), sem rolagem horizontal da página no desktop.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ae66b859644e46aaf9382f781f748b8000d24011b80efa32589097b83dc91c20",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-af2ef393594374f7edd3071304576037e739ed234fcade719b56b3d5b77b96d4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao ativar uma página com Enter (ex.: "2") ou escolher outro valor em "Exibir", a paginação é renderizada de novo e o foco vai para <body>.

Esperado: O foco deve continuar no controle acionado (ou ir para um ponto lógico, como o início da tabela).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Focar o link de página "2" e pressionar Enter (foco em BODY)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-af2ef393594374f7edd3071304576037e739ed234fcade719b56b3d5b77b96d4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b13844abb5cf23740531e5218ccf8cd97b710460bde509d9a18620b60a91d488

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O painel do usuário tem role="menu", mas não contém nenhum elemento role="menuitem". O conteúdo é composto de textos, um span clicável e um <button>.

Esperado: Use role="menu" apenas com itens menuitem e o padrão de teclado de menu, ou remova o papel menu e use uma lista/painel comum.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Clicar em "Avatar com dropdown"

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b13844abb5cf23740531e5218ccf8cd97b710460bde509d9a18620b60a91d488",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b171ffd0063e32a0e70638c169978df213e2d524f77a8a246063455c4c318425

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No breadcrumb (shadow DOM), o link Home <a href="/portal-mpa"> contém um <button>: um controle interativo dentro de outro, com duas paradas de Tab consecutivas (a e button).

Esperado: O link Home deve ser um único elemento interativo, sem <button> aninhado.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Focar o link Home do breadcrumb 3. Tab (o foco vai para o button dentro do mesmo link)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b171ffd0063e32a0e70638c169978df213e2d524f77a8a246063455c4c318425",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b1b4df0478ed0fc5921bb95d2457a22e33d6c2ae80e765ce98cdeca4a370b7c6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página atual só é indicada pela classe visual 'active'; não há aria-current nem texto oculto.

Esperado: Página atual exposta programaticamente (ex.: aria-current='page').

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
  "cardId": "C-b1b4df0478ed0fc5921bb95d2457a22e33d6c2ae80e765ce98cdeca4a370b7c6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b2cc8ab33f3df65e608f7c23557c94b44bc3431e8b975fcd5c7e41262c3ae81a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O título da página 'Vistorias' é <h2>; o documento não tem <h1>.

Esperado: Título principal da página marcado como <h1>.

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-219` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b2cc8ab33f3df65e608f7c23557c94b44bc3431e8b975fcd5c7e41262c3ae81a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b35be18cde47aec66e3f19b14a1217aafa1b418a2a8cd60ae911f61ef44f8b8f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página não tem h1. O título principal "Vistorias" é h2 e é o único cabeçalho da tela.

Esperado: O título principal da página deve ser h1, com os níveis seguintes em hierarquia.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b35be18cde47aec66e3f19b14a1217aafa1b418a2a8cd60ae911f61ef44f8b8f",
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

## C-b72c60cf01b751056b752e1f865505be99f722dc4932347b1feb8fea1b1ebb9b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os seletores "Exibir" e "Página" são inputs de texto que abrem uma lista de opções (ArrowDown), mas não têm role="combobox", aria-expanded nem aria-controls. O foco passa para div.br-item sem papel de opção.

Esperado: O controle deve expor papel e estado (combobox com aria-expanded e listbox/option), ou usar <select> nativo.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Focar "Exibir" e pressionar ArrowDown (a lista abre e aria-expanded não existe)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#total> "Selecione"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(3)>br-select-pnip>div>div:nth-of-type(1)>div>input" — <input#page> "Selecione"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b72c60cf01b751056b752e1f865505be99f722dc4932347b1feb8fea1b1ebb9b",
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

## C-bb0b976bdfcd85262e3301d2e1672a5bddf4f3709c9823d82f51368bca5a49ea

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O cabeçalho da coluna de ações é um <th> vazio.

Esperado: Cabeçalho de coluna com texto acessível (ex.: 'Ações').

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
- `F-201` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bb0b976bdfcd85262e3301d2e1672a5bddf4f3709c9823d82f51368bca5a49ea",
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

## C-c03c6a2516ce20b6171df8bc917938e1384952b981272b6ecf84cece0db26ca3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O cabeçalho da coluna de ações é um <th> vazio.

Esperado: O cabeçalho deve ter texto, por exemplo "Ações" (visível ou visualmente oculto).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c03c6a2516ce20b6171df8bc917938e1384952b981272b6ecf84cece0db26ca3",
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

## C-c1fd3a670bc6844ec23ed0306a315c591c2a313c429dbc6be6eb0d2168a6a67e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo "Exportar Vistorias", os cinco checkboxes de status não estão em fieldset/legend nem em role="group". O título "Status:" é apenas um <strong>.

Esperado: Os checkboxes devem ser agrupados com fieldset e legend "Status" (ou role="group" com aria-labelledby).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Clicar em "Exportar Vistorias"

Regra declarada: emag:6.7

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-html-container input[type=\"checkbox\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-09T05-36-07-097Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c1fd3a670bc6844ec23ed0306a315c591c2a313c429dbc6be6eb0d2168a6a67e",
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

## C-c7507155b355b4e3509e67e0aad86cc05ec29f2f24ce7486e3f009baca014a52

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O campo de busca não tem <label> nem aria-label. A única identificação é o placeholder "Pesquise aqui ...", que some ao digitar.

Esperado: O campo deve ter rótulo associado (label visível ou aria-label), sem depender do placeholder.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

Regra declarada: emag:6.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c7507155b355b4e3509e67e0aad86cc05ec29f2f24ce7486e3f009baca014a52",
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

## C-c84f6a892101758e974e9fd21305d1c6e11f9dfd5d1ac00146f3bf6fa49d2fc2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: role='menu' contém divs, span e um <button> 'Sair', sem nenhum elemento role='menuitem'.

Esperado: Um menu com itens menuitem, ou remover role='menu' e usar um contêiner sem papel de menu.

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em #avatar-dropdown-trigger

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

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-323` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c84f6a892101758e974e9fd21305d1c6e11f9dfd5d1ac00146f3bf6fa49d2fc2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c8a51ff486285f42ccd3bf932a333c92b74a507d60996d5cc34be6449ddf818e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A tabela tem 1272 px de largura dentro do contêiner .br-table de 1096 px (overflow visível); a página rola na horizontal (scrollWidth 1364 em 1280) e o botão Notificar da coluna de ações fica cortado na borda direita.

Esperado: A tabela cabe no contêiner ou tem rolagem horizontal própria, sem cortar ações na largura de 1280 px.

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
  "cardId": "C-c8a51ff486285f42ccd3bf932a333c92b74a507d60996d5cc34be6449ddf818e",
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

## C-cb2da0c5360933ad3d0b978c3b2a5d82e6b481653865278d08c0d2cf39f43094

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão interno (shadow) só com ícone fa-eye, aria-label vazio, sem title nem texto: nome acessível vazio. Ocorre em todas as linhas das abas Tramitando e Concluídos.

Esperado: Botão com nome acessível que descreva a ação (ex.: 'Visualizar vistoria').

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
- `F-179` → identificador devolvido por ferramenta (sem arquivo)
- `F-188` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-341` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cb2da0c5360933ad3d0b978c3b2a5d82e6b481653865278d08c0d2cf39f43094",
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

## C-d7b8a0dbe601846f74e65d92b971e6350c1719da33223177dc647d2dacf01b7f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão mostra 'Olá, Usuária de Teste, SUPERVISOR', mas aria-label='Avatar com dropdown' substitui o nome, que não contém o texto visível.

Esperado: Nome acessível que contenha o texto visível do botão.

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
  "cardId": "C-d7b8a0dbe601846f74e65d92b971e6350c1719da33223177dc647d2dacf01b7f",
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

## C-d98f3a5951cf137a44672729917026d0a091c7f715ffe07effde05c1990100d5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex e sem papel, e não pode ser alcançado por teclado.

Esperado: A ação deve ser um <button> ou link focável e operável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Clicar em "Avatar com dropdown"

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d98f3a5951cf137a44672729917026d0a091c7f715ffe07effde05c1990100d5",
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

## C-e47d7b2f2b9aa699f1692f9fc7884d9d7f3ce0f79000c4a9a5e07e8169161a06

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O logotipo gov.br (img.large-img no shadow DOM de br-header) tem alt="logo", que não descreve a imagem.

Esperado: O alt deve identificar a marca, por exemplo "gov.br".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e47d7b2f2b9aa699f1692f9fc7884d9d7f3ce0f79000c4a9a5e07e8169161a06",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e5f07cc75ec78e60b4aa6db02b4505001d55e7e28aef77ebe7858fc81cbcbd02

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A aba ativa é indicada só pela classe .active no <li>. Os botões das abas não têm aria-selected nem aria-current, e não há role tablist/tab.

Esperado: O estado selecionado deve ser exposto programaticamente (role="tab" com aria-selected="true", ou aria-current).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(2)>button" — <button#TRAMITANDO> "Tramitando"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e5f07cc75ec78e60b4aa6db02b4505001d55e7e28aef77ebe7858fc81cbcbd02",
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

## C-e81fc9269447049f6c949fb974f44f57a8e87b869b50d7182c7a4a02d8ca6506

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os filtros Cidade, Porto, Vistoriador e Status são <span class='br-tag interaction'> com cursor pointer, sem tabindex nem role: abrem por clique mas ficam fora da ordem de tabulação.

Esperado: Gatilhos de filtro operáveis por teclado (ex.: <button> com aria-expanded).

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
  "cardId": "C-e81fc9269447049f6c949fb974f44f57a8e87b869b50d7182c7a4a02d8ca6506",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e8306bf3ff7d353dd7b307a9b56d93c2525776786a5b5ce0f2fbaa3bdbff8433

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem exit-icon.png do botão "Sair" não tem atributo alt.

Esperado: Por ser decorativa ao lado do texto "Sair", a imagem deve ter alt="".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Clicar em "Avatar com dropdown"

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e8306bf3ff7d353dd7b307a9b56d93c2525776786a5b5ce0f2fbaa3bdbff8433",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e96433d265b0a4168d274fb29a9b076c8521ed1190cfc38f4f8a23572af19392

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo "Atribuir Vistoriador", o <select> de vistoriadores não tem label, aria-label nem aria-labelledby. O texto "Selecione um Vistoriador" é só a descrição do diálogo.

Esperado: O select deve ter rótulo associado programaticamente.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Focar o botão Atribuir vistoriador (user-plus) da linha 1 e pressionar Enter

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-select" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-09T05-35-06-480Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e96433d265b0a4168d274fb29a9b076c8521ed1190cfc38f4f8a23572af19392",
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

## C-ea58a0ec902c8925cbe2c196fbb6d122f7bd69689e8c3884c43c3b2a6f33b9e2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Não há link de salto; o primeiro link é o 'Home' do breadcrumb (href='/portal-mpa').

Esperado: O primeiro link é uma âncora interna para o conteúdo principal (e-MAG 1.5).

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

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-178` → identificador devolvido por ferramenta (sem arquivo)
- `V-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ea58a0ec902c8925cbe2c196fbb6d122f7bd69689e8c3884c43c3b2a6f33b9e2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ec4ad4bf3abffb2848c935dc8648bbd0b8971ec1fb504eb871151f1666b09bd3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os filtros Cidade, Porto, Vistoriador e Status são <span> com cursor:pointer, sem tabindex, sem papel e sem aria-expanded. A navegação por Tab pula os quatro filtros, que só funcionam com mouse.

Esperado: Os acionadores dos filtros devem ser botões focáveis e operáveis por teclado, com aria-expanded.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Tab sequencial a partir do topo: Menu, Avatar, Home, Exportar, abas, campo de busca (os filtros não recebem foco)

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

- `../../tmp/pw-0/page-2026-10-09T05-29-03-626Z.yml` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-29-13-416Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ec4ad4bf3abffb2848c935dc8648bbd0b8971ec1fb504eb871151f1666b09bd3",
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

## C-ed7f16a489421ddc520230c0b0144b8d69740c86551b3f1508e0d751a41b80ea

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Quando a busca ou o filtro de data não retornam resultados, a tabela e a paginação (que tinha aria-live) são removidas e aparece "Não há vistorias para exibir." (ou "…nesse periodo selecionado."), fora de qualquer região viva. A mensagem não é anunciada.

Esperado: A mensagem de resultado vazio deve ficar em uma região de status (role="status"/aria-live) para ser anunciada.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a URL com ?mock-perfil=mpa (redireciona para /pnip/portal-mpa/vistorias; aba Tramitando ativa) 2. Digitar "zzzz" no campo de busca e pressionar Enter

Regra declarada: wcag:4.1.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:div.p-5 > div.flex-column > p, div.mt-5.text-center > p" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-09T05-37-47-709Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-09T05-38-30-925Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ed7f16a489421ddc520230c0b0144b8d69740c86551b3f1508e0d751a41b80ea",
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
