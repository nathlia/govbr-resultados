# Revisão semântica — pacote fechado

Versão: flow-semantic-1.8.2 · 223 cartões únicos · 223 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 223 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 436 sujeitos · 223 cartão(ões) sem evidência verificada · 164 com unidade candidata · estimativa **1338 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 33 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-0117503d4bbbe2b39e49a8b8d67f7412872c7a2ee21e4821c2b1e0d213d6eace

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Selo de progresso '0%' da seção Conclusão: #ffffff sobre #888888, 14px = 3,54:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. click página 2 da paginação 2. click botão olho da linha 8 (status 'Vistoria preenchida')

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

- `S-page-014` → identificador devolvido por ferramenta (sem arquivo)
- `F-180` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0117503d4bbbe2b39e49a8b8d67f7412872c7a2ee21e4821c2b1e0d213d6eace",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-02534cd13d12c9e9789880bf9dafe8987593300fc6fc0e45c8e623d22f3e30e0

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
  "cardId": "C-02534cd13d12c9e9789880bf9dafe8987593300fc6fc0e45c8e623d22f3e30e0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-028670a8b008b3b7789fb46d081513b807b28df0f0d104ea43bb551cd30b81d8

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
  "cardId": "C-028670a8b008b3b7789fb46d081513b807b28df0f0d104ea43bb551cd30b81d8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-03200516ac141b8f91133b75c9235a497108cabe8c838b40bcbf35db1fa71ec2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Inicial "U" do avatar: #ffffff sobre #ff8c00 = 2,33:1, fonte 24,19px bold (texto grande).

Esperado: Contraste mínimo de 3:1 para texto grande.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
- `P-05` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-03200516ac141b8f91133b75c9235a497108cabe8c838b40bcbf35db1fa71ec2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-06241ec28187446fb1ceba05bfd23c2d9e2abb74569f99e89a2180f052881e95

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
  "cardId": "C-06241ec28187446fb1ceba05bfd23c2d9e2abb74569f99e89a2180f052881e95",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-06b805e9e82c68a6b9af6eeaf8483f2d4a92f44b823d4db8098bc9729b65cdac

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O checkbox no cabeçalho da tabela (selecionar todos) não tem nome acessível. O th que o contém não tem texto.

Esperado: O checkbox deve ter nome, por exemplo "Selecionar todas as vistorias".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-06b805e9e82c68a6b9af6eeaf8483f2d4a92f44b823d4db8098bc9729b65cdac",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0822f4eca48e5ac7f8c14f7f5bed78853f696fe180e3174fe93579461b371d20

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
  "cardId": "C-0822f4eca48e5ac7f8c14f7f5bed78853f696fe180e3174fe93579461b371d20",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-08e741b9a95c3f8cf7b82b2dcefbd08d86ded129b0a14df0f75b67bfe817bbbe

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
  "cardId": "C-08e741b9a95c3f8cf7b82b2dcefbd08d86ded129b0a14df0f75b67bfe817bbbe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0a23f00419a983bc87bb9c89436bdcffdb3ed3ec4a632eec78d29ee81e8d2e6d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo 'Atribuir Vistoriador', o <select> de vistoriadores não tem label, aria-label nem aria-labelledby; o texto 'Selecione um Vistoriador' é só a descrição do diálogo.

Esperado: Select com rótulo associado.

Janela: 1280×900 · interações desde o carregamento: 1. click botão 'Atribuir vistoriador' (user-times) da linha 2

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-select" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)
- `F-115` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0a23f00419a983bc87bb9c89436bdcffdb3ed3ec4a632eec78d29ee81e8d2e6d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0b2d0168aa77e55f9c02151f4233a5e873a24dbd604aa789e5654dac71166da0

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
  "cardId": "C-0b2d0168aa77e55f9c02151f4233a5e873a24dbd604aa789e5654dac71166da0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0c286406a17aa28d7a0a483e6f99325fbb750dbfc1d0da04a86e67028cbf8e5b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Checkbox de seleção geral no cabeçalho e as 10 checkboxes de linha não têm rótulo nem aria-label ([ferramenta citada] label).

Esperado: Cada checkbox com nome acessível (ex.: "Selecionar todas", "Selecionar Coral Mansa IV").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: [regra citada]

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
- `F-075` → identificador devolvido por ferramenta (sem arquivo)
- `F-076` → identificador devolvido por ferramenta (sem arquivo)
- `F-085` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0c286406a17aa28d7a0a483e6f99325fbb750dbfc1d0da04a86e67028cbf8e5b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0c914e715ac05ab193cbceb7725b4add6ade932eaf2b3b32b8aa40b1010aeaba

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os nomes de arquivo (por exemplo "boleto.pdf") são <strong> com cursor:pointer e tabIndex -1. O clique abre o visualizador de PDF, mas eles não são focáveis nem têm papel de link/botão. No detalhe preenchido, há 7 ocorrências, incluindo os arquivos da documentação.

Esperado: Os nomes de arquivo devem ser links ou botões focáveis e operáveis por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "1" da paginação 3. click br-button[icon=eye] da linha 1 (Coral Mansa IV, Vistoria agendada)

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
  "cardId": "C-0c914e715ac05ab193cbceb7725b4add6ade932eaf2b3b32b8aa40b1010aeaba",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0f0f45f2afc8a35b995c198c2c7b751eca3ce83e1bb0f0707d81ab3010c4063e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Nenhum .br-footer nem <br-footer> no documento (listagem, detalhe e edição).

Esperado: Região de rodapé do modelo de página do DS presente.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root" — <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root" — <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root" — <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-017` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-233` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-165` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0f0f45f2afc8a35b995c198c2c7b751eca3ce83e1bb0f0707d81ab3010c4063e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0f52a948e6c5c7e74833063f6a9b5644d79e8393a9acdeca8911026f15bad24a

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
  "cardId": "C-0f52a948e6c5c7e74833063f6a9b5644d79e8393a9acdeca8911026f15bad24a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-13d25d7d6d86e49e842d0162df5b2faae37271f4a0900934cb49b49180cbf34e

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
  "cardId": "C-13d25d7d6d86e49e842d0162df5b2faae37271f4a0900934cb49b49180cbf34e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-169a91ba818f5a9146a751fa5a7cb1663e712d6b8aa89614f6af01539580b0dd

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
  "cardId": "C-169a91ba818f5a9146a751fa5a7cb1663e712d6b8aa89614f6af01539580b0dd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-16d541be0bc0a52f1828aaad3290cb96a9283f51334cedd0b63d99e014686e44

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Os ícones de Laudo (file) e Arquivos (download) não têm title, aria-label nem texto alternativo; só o de Protocolo tem title='Protocolo de recebimento'.

Esperado: Ícones que representam ações/conteúdo têm alternativa textual.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO (aba Concluídos) 2. click botão olho da linha 10 (situação ADEQUADA)

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

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

- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-16d541be0bc0a52f1828aaad3290cb96a9283f51334cedd0b63d99e014686e44",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-17d745c66bd32a02d9f78af82bec7b66271762cf9bfeafad3374ea5f00de34ac

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
  "cardId": "C-17d745c66bd32a02d9f78af82bec7b66271762cf9bfeafad3374ea5f00de34ac",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1a80cd9a7fa7671f8925200be331f285012bc2bee900dc261b7dea4b687a13f5

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
  "cardId": "C-1a80cd9a7fa7671f8925200be331f285012bc2bee900dc261b7dea4b687a13f5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1c5bf29d70a5819efe55c337b7bfdef3dfc9f34663a703da118bf6f4d9b04444

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Selo de status 'Vistoria agendada': texto #ffffff sobre #4f97d1, 14px normal = 3,14:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

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
  "cardId": "C-1c5bf29d70a5819efe55c337b7bfdef3dfc9f34663a703da118bf6f4d9b04444",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-228ab7a2e9d79bbdb9dd8172471ecc75e9eb45eef8e253d270b0cc9b8aa87ef7

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
  "cardId": "C-228ab7a2e9d79bbdb9dd8172471ecc75e9eb45eef8e253d270b0cc9b8aa87ef7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2302cd4cdc3996b0aa107c82f2f5671c6126b31cca7531ff97b936e41d215090

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao Salvar, os campos desabilitados "Nome do vistoriador", "Registro" e "E-mail" (seção Dados do Vistoriador) são marcados como "Campo obrigatório" e impedem o envio ("Preencha todos os campos obrigatórios."), mas o usuário não consegue editá-los na tela.

Esperado: Campos que o usuário não pode editar não devem bloquear o envio, ou a tela deve indicar como resolver o erro.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "1" da paginação 3. click br-button[icon=eye] da linha 1 (Coral Mansa IV, Vistoria agendada) 4. click br-button[label=Editar] da seção Dados da vistoria 5. limpar "Nome da embarcação" 6. click Salvar

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input[formcontrolname=nomeVistoriador], br-input[formcontrolname=numConselhoClasseVistoriador], br-input[formcontrolname=emailVistoriador]" — Seletor não resolvido

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
  "cardId": "C-2302cd4cdc3996b0aa107c82f2f5671c6126b31cca7531ff97b936e41d215090",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2387a59462124f8af446c1a2475bbb5a1bd9d4c4d52bc24ea956810465f2755f

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
  "cardId": "C-2387a59462124f8af446c1a2475bbb5a1bd9d4c4d52bc24ea956810465f2755f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2609bf03d5ea7c9125a0ca764e2f44962efce4986448bdb57aa3d5e0ef158e07

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O <label> "Boleto da anotação de responsabilidade técnica - ART *" não tem for nem envolve o input; o input de arquivo não tem rótulo associado.

Esperado: Rótulo associado ao campo de upload.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click aba "Agendar" 3. click "Agendar" da linha 1

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#boletoResponsabilidadeTecnica" — Seletor não resolvido

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
  "cardId": "C-2609bf03d5ea7c9125a0ca764e2f44962efce4986448bdb57aa3d5e0ef158e07",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-271a90cdbb0a9f0166134f44fb042efcb39d73d5baa1e9ca80624ba634f8a881

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As abas Agendar, Tramitando e Concluídos são buttons sem role=tab, sem tablist e sem aria-selected/aria-current. A aba ativa (Tramitando) só é indicada pela classe "active" (borda inferior e cor).

Esperado: A aba ativa deve ser exposta programaticamente (role=tablist/tab com aria-selected, ou aria-current).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-271a90cdbb0a9f0166134f44fb042efcb39d73d5baa1e9ca80624ba634f8a881",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2998271bf4c7245943323f22bed3c0960b85543599bd8a1710691236d8099e20

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: <title> é "PNIP" na listagem e igual em /agendar-vistoria/:id e /editar-dados-vistoria/:id; não descreve o conteúdo (Vistorias, detalhe, edição).

Esperado: Título descritivo e distinto por página (ex.: "Vistorias - PNIP").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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

- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-235` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-168` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-194` → identificador devolvido por ferramenta (sem arquivo)
- `P-01` → identificador devolvido por ferramenta (sem arquivo)
- `P-07` → identificador devolvido por ferramenta (sem arquivo)
- `P-11` → identificador devolvido por ferramenta (sem arquivo)
- `P-15` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2998271bf4c7245943323f22bed3c0960b85543599bd8a1710691236d8099e20",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2a1540ecb75044b9b918bd7f7246ca336c18ea7b03805d9a3b03122a421d5cdb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na vistoria concluída, os ícones das colunas Laudo (file), Protocolo (file-invoice) e Arquivos (download) são br-icon-base com cursor:pointer, sem papel de botão/link e sem tabindex: não recebem foco por teclado.

Esperado: Ações de laudo, protocolo e download disponíveis como botões/links focáveis.

Janela: 1280×900 · interações desde o carregamento: 1. click #HISTORICO (aba Concluídos) 2. click botão olho da linha 10 (situação ADEQUADA)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:main td br-icon-base[style*=\"cursor: pointer\"]" — Seletor não resolvido

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
  "cardId": "C-2a1540ecb75044b9b918bd7f7246ca336c18ea7b03805d9a3b03122a421d5cdb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2adec7faf3a6e43dbcdcb37a5f2c8d072a2edc33d5ec96a0532d9ba09a32fcc1

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
  "cardId": "C-2adec7faf3a6e43dbcdcb37a5f2c8d072a2edc33d5ec96a0532d9ba09a32fcc1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2ca6553103eb9d9455ead88db0a758129b3a019fda6e0a136829a0094fde0fc0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O título do documento é "PNIP" na lista, no detalhe (/agendar-vistoria/…) e na edição (/editar-dados-vistoria/…). Não descreve a página nem muda entre as rotas.

Esperado: Título descritivo e específico por rota, por exemplo "Vistorias – PNIP".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-2ca6553103eb9d9455ead88db0a758129b3a019fda6e0a136829a0094fde0fc0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2ebeff3651a58203092bb0bb8c9162d06fd08d671bb71acf2860afac06975c75

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
  "cardId": "C-2ebeff3651a58203092bb0bb8c9162d06fd08d671bb71acf2860afac06975c75",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2fff25cfa42e9e7e23685c330183c09e292f765952cd336bcd7bb663378a391d

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
  "cardId": "C-2fff25cfa42e9e7e23685c330183c09e292f765952cd336bcd7bb663378a391d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-31d8598f12d8f31d184b9b3dbef817b410b8f7847cf1f0333cb7136b67452eb7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A imagem exit-icon.png dentro do botão "Sair" não tem atributo alt.

Esperado: Imagem decorativa ao lado do texto "Sair" deve ter alt="".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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
  "cardId": "C-31d8598f12d8f31d184b9b3dbef817b410b8f7847cf1f0333cb7136b67452eb7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-328ef32e801ae0d673bea0c30da45bd0969862c1c7c4534ce0a3ef627ad087db

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Na janela de 1280px, a tabela de vistorias mede 1272px a partir de x=92 (borda direita em 1364px) e ultrapassa o contêiner de 1096px. A página ganha rolagem horizontal (scrollWidth 1364) e a coluna de ações (botão "Notificar", x=1258–1336) fica cortada fora da área visível.

Esperado: A tabela deve caber no contêiner ou ficar num wrapper com rolagem própria (padrão responsivo da tabela do DS), sem rolagem horizontal da página a 1280px.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-328ef32e801ae0d673bea0c30da45bd0969862c1c7c4534ce0a3ef627ad087db",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-33669982143005ee84c7ca42fb3eca1946900494afd4bbed996cfb7ef567d1c2

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
  "cardId": "C-33669982143005ee84c7ca42fb3eca1946900494afd4bbed996cfb7ef567d1c2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3376e6ec5071f86a41d5c7de2d2f9a8315c64530d61b64402561e1bda652749d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na paginação, cada número de página é um <li> aninhado diretamente em outro <li>, sem <ul>/<ol> pai ([ferramenta citada] listitem).

Esperado: Itens de lista contidos em ul/ol válidos, um nível por item.

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
- `FAM-d2e21ab1d9dc` → identificador devolvido por ferramenta (sem arquivo)
- `F-037..F-040` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3376e6ec5071f86a41d5c7de2d2f9a8315c64530d61b64402561e1bda652749d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-35ba15f3908e0ffc87371b53eb7f77e40e541aeecf60e7115aaf76411a7f4d9d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: <img src="exit-icon.png"> do botão "Sair" sem atributo alt ([ferramenta citada] image-alt).

Esperado: alt="" (decorativa, já que o botão tem o texto "Sair").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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
- `F-232` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-35ba15f3908e0ffc87371b53eb7f77e40e541aeecf60e7115aaf76411a7f4d9d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-36cc6d88005115210821d3424f5a38405e3d41c4446e4540e85841e5dc40509e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No breadcrumb (shadow DOM), o item Home é um <a href="/portal-mpa"> que contém um <button class="br-button"> com aria-label="": dois controles interativos aninhados. A árvore mostra link "Home" > button "Home".

Esperado: O item Home deve ser um único elemento interativo (link) com nome "Página inicial".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-36cc6d88005115210821d3424f5a38405e3d41c4446e4540e85841e5dc40509e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-38852180d53344b59fda7bd1f461cd340adf43320f9e2e1ccd57fd5a87f252dc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Separador do menu do usuário com border-top-color #bbbbbb, sem token correspondente.

Esperado: Valor da escala de tokens do DS.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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
- `F-227` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-38852180d53344b59fda7bd1f461cd340adf43320f9e2e1ccd57fd5a87f252dc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3a1e1ea8f6de27a7eaf33cba5d97181f9788eaee73b7ec88f141017045677282

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
  "cardId": "C-3a1e1ea8f6de27a7eaf33cba5d97181f9788eaee73b7ec88f141017045677282",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3bb820b72628d7b1d1c1bda11fcd2d4876f59161c683fd54834095dda21a0b64

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Após Salvar com erro, o diálogo 'Atenção – Preencha todos os campos obrigatórios.' é fechado com Enter em 'OK, entendi' e o foco vai para <body>.

Esperado: Ao fechar o diálogo, o foco volta ao botão Salvar ou ao primeiro campo com erro.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR 2. click botão 'Agendar' da linha 1 3. click br-button[label=Editar] 4. fill Nome da embarcação com '' 5. click br-button[label=Salvar] 6. press Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-button[label=\"Salvar\"]" — Seletor não resolvido

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
  "cardId": "C-3bb820b72628d7b1d1c1bda11fcd2d4876f59161c683fd54834095dda21a0b64",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3c50eca6080ba18e25dee512e3fce7512e5ea8a734d40c71a581b38d4d90f030

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao cancelar o diálogo "Atribuir Vistoriador", o foco vai para <body> em vez de voltar ao botão que o abriu.

Esperado: Foco retorna ao botão "Atribuir vistoriador" ao fechar.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click botão "Atribuir vistoriador" (user-plus) da linha 1 3. click "Cancelar" no diálogo

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

- `V-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3c50eca6080ba18e25dee512e3fce7512e5ea8a734d40c71a581b38d4d90f030",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3c6846094d2a9a601e54f86f9c4296b6af192340f6abfabfe732e862a7a02cbd

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
  "cardId": "C-3c6846094d2a9a601e54f86f9c4296b6af192340f6abfabfe732e862a7a02cbd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3c95595af62b218535d23316230d415307e33e2fcd1ce03a7991fd057b9aa901

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O cabeçalho da coluna de ações é um <th scope="col"> vazio, então os botões dessa coluna ficam sem cabeçalho associado.

Esperado: O th deve ter texto (visível ou sr-only), por exemplo "Ações".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3c95595af62b218535d23316230d415307e33e2fcd1ce03a7991fd057b9aa901",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3dfdcc91ff647508b31b0bd265fdbb7fc406e615c07df7b4c333a2ee0c3cadfe

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Contêiner do avatar no cabeçalho com margin: -99px -12px 55px (fora da escala).

Esperado: Valor da escala de tokens do DS.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click #avatar-dropdown-trigger

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root>pnip-header>div>div" — <div> "U Olá, Usuária de Teste, SUPERVISOR"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root>pnip-header>div>div" — <div> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root>pnip-header>div>div" — <div> "U Olá, Usuária de Teste, SUPERVISOR"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)
- `F-224` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3dfdcc91ff647508b31b0bd265fdbb7fc406e615c07df7b4c333a2ee0c3cadfe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3efa242f10987121f4794e0a912c5c4041672d07f713b962a96980ad143666bf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os três ícones de ação não têm papel (role) de controle; Laudo e Arquivos também não têm nome (Protocolo só tem title).

Esperado: Controle com papel de botão/link e nome acessível ("Ver laudo", "Baixar arquivos").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click aba "Concluídos" (#HISTORICO) 3. click botão olho da linha 1 (Pérola Veloz II, NAO COMPARECIMENTO)

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:td > br-icon-base[icon-name=\"file\"], td > br-icon-base[icon-name=\"file-invoice\"], td > div > br-icon-base[icon-name=\"download\"]" — Seletor não resolvido

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
  "cardId": "C-3efa242f10987121f4794e0a912c5c4041672d07f713b962a96980ad143666bf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3f2ec79e4460b21763fa1b76d324ebeb2f03a6fbef00c372b6caa78c572a090c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Ícone do botão "Sair" com margin-bottom 10px (fora da escala).

Esperado: Valor da escala de tokens do DS.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click #avatar-dropdown-trigger

Regra declarada: [regra citada]

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
- `F-229` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3f2ec79e4460b21763fa1b76d324ebeb2f03a6fbef00c372b6caa78c572a090c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3ffe421884db499002323a954d30251781b9af0df9151afda8972a046909dd00

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
  "cardId": "C-3ffe421884db499002323a954d30251781b9af0df9151afda8972a046909dd00",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4147adfbf5c907c90959006ce5173703a124d2921b4d2e4d70293c10ce5c8e32

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
  "cardId": "C-4147adfbf5c907c90959006ce5173703a124d2921b4d2e4d70293c10ce5c8e32",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-42242dba103d05bf793371058870be2a22bb2b1357c2c5b2fcd4fd5ed523fcca

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No breadcrumb (shadow DOM), o item 'Home' é um <a href='/portal-mpa'> que contém um <button> 'Home': dois elementos interativos aninhados e duas paradas de Tab consecutivas para o mesmo destino.

Esperado: Um único controle interativo por item do breadcrumb (link simples).

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-42242dba103d05bf793371058870be2a22bb2b1357c2c5b2fcd4fd5ed523fcca",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4704ed60d91e9cdef79a601517b89963099bdc54c9d239251cd324233deb75e1

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
  "cardId": "C-4704ed60d91e9cdef79a601517b89963099bdc54c9d239251cd324233deb75e1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-47960a5be2b41e7d3c122579ab179757b09afd78b137556ddaa89c802f67cf20

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo "Atribuir Vistoriador", o indicador de foco do botão OK é um box-shadow de 3px rgba(112,102,224,0.5) sobre fundo branco (cerca de rgb(184,178,240), contraste aproximado de 1,9:1 com o branco adjacente). O mesmo ocorre no Cancelar. Os demais controles da tela usam contorno tracejado de 4px rgb(194,133,12).

Esperado: O indicador de foco deve ter contraste de pelo menos 3:1 com as cores adjacentes, como o foco padrão do DS.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "2" 3. foco no checkbox da linha 11 e Tab 4. Space 5. Tab

Regra declarada: wcag:1.4.11

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-confirm" — Seletor não resolvido

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
  "cardId": "C-47960a5be2b41e7d3c122579ab179757b09afd78b137556ddaa89c802f67cf20",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-48309444b9be422d4d99ac886569a0e6707cf6d9240dd4ef09e52632f51d12b1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os acionadores dos filtros Cidade, Porto, Vistoriador e Status são <span> com cursor:pointer, sem tabindex, sem papel e sem aria-expanded; não entram na ordem de Tab (o foco vai das abas direto para a pesquisa) e só abrem com clique do mouse.

Esperado: Acionadores de filtro operáveis por teclado, com papel de botão/combobox, nome e estado expandido.

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
  "cardId": "C-48309444b9be422d4d99ac886569a0e6707cf6d9240dd4ef09e52632f51d12b1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-48e369a317c8c72400b7bd50bfe0c2782fbaa31d5fe64a1ea053b34ce519d8fc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão "Menu" (#navigation no shadow DOM de br-header) tem data-target="#main-navigation", mas esse elemento não existe na página. Ao clicar, nenhum menu aparece e o botão não ganha aria-expanded.

Esperado: O botão Menu deve abrir o menu principal (padrão Header/Menu do DS) e expor o estado com aria-expanded, ou não deve ser exibido.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click botão "Menu" do cabeçalho

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
  "cardId": "C-48e369a317c8c72400b7bd50bfe0c2782fbaa31d5fe64a1ea053b34ce519d8fc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4a3a1bd989d5c51ff960b891ff722e115b12d6d84b7fa934c95056c745b40070

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao responder "Não" no diálogo "Deseja notificar os interessados com o protocolo?", o foco vai para <body>.

Esperado: Foco retorna ao botão "Notificar interessado com protocolo".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click aba "Concluídos" 3. click botão olho da linha 1 4. click "Notificar interessado com protocolo" 5. click "Não"

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-button[label=\"Notificar interessado com protocolo\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `V-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4a3a1bd989d5c51ff960b891ff722e115b12d6d84b7fa934c95056c745b40070",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4b548b15b25d12d5c393655a73839db592c91ae25d5226a2d5cfe3a74f2da58d

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
  "cardId": "C-4b548b15b25d12d5c393655a73839db592c91ae25d5226a2d5cfe3a74f2da58d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4b96346275dd2f013ea0b319a27b09264af2813e90abc5ac320bf02cc6255f65

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
  "cardId": "C-4b96346275dd2f013ea0b319a27b09264af2813e90abc5ac320bf02cc6255f65",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4c1eb7d8e59cee5ab5604aa0a957d0a071a4478efbd60b21a05264fdbeb94046

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
  "cardId": "C-4c1eb7d8e59cee5ab5604aa0a957d0a071a4478efbd60b21a05264fdbeb94046",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4def52a6a32771230cedaf4d7b1641173d4240f0231091a3deb840f169060d90

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Tabela de vistorias sem <caption> (nem aria-label/aria-labelledby).

Esperado: Título da tabela definido por <caption>.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-4def52a6a32771230cedaf4d7b1641173d4240f0231091a3deb840f169060d90",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4f4460999e63715fa4c300f332bd791f5c0f7a00589db21681ffd9f2842b0088

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Não há link de salto para o conteúdo; o primeiro link é "Home" (href="/portal-mpa") do breadcrumb e a ordem de Tab começa por Menu e avatar.

Esperado: Primeiro elemento focável é um atalho para o conteúdo principal (#main).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

### Sujeitos

Cena `1280x900@inicial` (/pnip/portal-mpa/vistorias) — escolha com `"cena": "1280x900@inicial"`:
- "1280x900@inicial|body>pnip-root" — <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Vistorias Ex"

Cena `1280x900@detalhe-menu` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046) — escolha com `"cena": "1280x900@detalhe-menu"`:
- "1280x900@detalhe-menu|body>pnip-root" — <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Usuária de T"

Cena `1280x900@modal` (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038) — escolha com `"cena": "1280x900@modal"`:
- "1280x900@modal|body>pnip-root" — <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac"


### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-018` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-234` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4f4460999e63715fa4c300f332bd791f5c0f7a00589db21681ffd9f2842b0088",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-52ec42b43166c2a086360ae088f562317728efc2552b4232eec19d55b2896621

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
  "cardId": "C-52ec42b43166c2a086360ae088f562317728efc2552b4232eec19d55b2896621",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-52edf722ec45c30aa0f03ea9548bea30b6dc6167f6a039a3de9c134e5dc6fc74

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
  "cardId": "C-52edf722ec45c30aa0f03ea9548bea30b6dc6167f6a039a3de9c134e5dc6fc74",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-533b1c2befd8b3773e37fe8e1d0eb2b731a669916034a40abe89046b3afb2a9b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Etiqueta de status "Vistoria pré agendada": texto #ffffff sobre #888888, 14px normal = 3,54:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click aba "Agendar" (#AGENDAR)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-status-solicitacao-utils .bg-secondary-06 > .text-center" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-104` → identificador devolvido por ferramenta (sem arquivo)
- `F-105` → identificador devolvido por ferramenta (sem arquivo)
- `F-106` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-533b1c2befd8b3773e37fe8e1d0eb2b731a669916034a40abe89046b3afb2a9b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-54c293756b647f0eb62fd001501bf8105f7db783d81802da9eed020760256f8a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os dois campos de data do filtro (#br-input-8 e #br-input-9 no shadow DOM) não têm rótulo programático; os textos visíveis 'Data da vistoria:' e 'até' são spans soltos, não associados.

Esperado: Campos de data com rótulo associado (ex.: 'Data da vistoria – início' e 'Data da vistoria – fim').

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
  "cardId": "C-54c293756b647f0eb62fd001501bf8105f7db783d81802da9eed020760256f8a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-562679b84bdb89c1f3f7a0b875e85017a90941cf2a41fcf4f2041ab9f095a16a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Coluna "Situação" mostra valores crus em caixa alta e sem acento: "NAO COMPARECIMENTO", "NAO ADEQUADA", "ADEQUADA".

Esperado: Texto em linguagem natural e grafia correta (ex.: "Não comparecimento", "Não adequada").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click aba "Concluídos" (#HISTORICO)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(7)" — <td>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(7)" — <td> "Sabrina Ventura Nogueira"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(7)" — <td> "Paulo Cordeiro Paiva"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(7)" — <td> "Elisa Guedes Amaral"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(7)" — <td> "Sabrina Ventura Nogueira"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(7)" — <td>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(7)" — <td> "Iara Sampaio Teixeira"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(7)" — <td> "Heitor Quintela Nogueira"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(7)" — <td> "Paulo Cordeiro Paiva"
- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(7)" — <td>

### Unidades candidatas (não são crédito)

- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
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
  "cardId": "C-562679b84bdb89c1f3f7a0b875e85017a90941cf2a41fcf4f2041ab9f095a16a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5637668eb9fa3f3f0660d108031ec257706eeacb1992bc718fbc17c493072239

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
  "cardId": "C-5637668eb9fa3f3f0660d108031ec257706eeacb1992bc718fbc17c493072239",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-56b6c6bdaf493a37646544427056fbe071bc7f00935a01f07e04508185885866

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No detalhe da vistoria, os ícones Laudo, Protocolo e Arquivos são <br-icon-base> com cursor:pointer e clique (Laudo abre o PDF), tabIndex=-1; não são alcançáveis por Tab.

Esperado: Ações acionáveis por teclado (button/link).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click aba "Concluídos" (#HISTORICO) 3. click botão olho da linha 1 (Pérola Veloz II, NAO COMPARECIMENTO)

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:td > br-icon-base[icon-name=\"file\"], td > br-icon-base[icon-name=\"file-invoice\"], td > div > br-icon-base[icon-name=\"download\"]" — Seletor não resolvido

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
  "cardId": "C-56b6c6bdaf493a37646544427056fbe071bc7f00935a01f07e04508185885866",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-573b4ce2118506dad0b26570a11e180ffdfbdb2d290ee0efca684731ae96f7ed

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Os selos com fundo rgb(136,136,136) e texto branco têm contraste de 3,54:1 (14px). Aparecem como "Vistoria pré agendada" na aba Agendar, "Aguarda preenchimento" no detalhe agendado e "0%" no detalhe preenchido.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click #AGENDAR (aba Agendar)

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
  "cardId": "C-573b4ce2118506dad0b26570a11e180ffdfbdb2d290ee0efca684731ae96f7ed",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-57bd701bc24e16ad420faae4dcf5e1b7ccb1bf223b2c0542387e4ea4ef610516

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Cabeçalhos de coluna sem texto: o da coluna de seleção (só contém checkbox sem rótulo) e o da coluna de ações (vazio).

Esperado: Todo th tem texto acessível que identifica a coluna (ex.: 'Selecionar', 'Ações').

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
- `FAM-e66cfc681b63` → identificador devolvido por ferramenta (sem arquivo)
- `F-022` → identificador devolvido por ferramenta (sem arquivo)
- `F-023` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-57bd701bc24e16ad420faae4dcf5e1b7ccb1bf223b2c0542387e4ea4ef610516",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-58e8a98dbcacd25aa4661632027322e525cec95ce2117d8c45915758a8fd2958

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
  "cardId": "C-58e8a98dbcacd25aa4661632027322e525cec95ce2117d8c45915758a8fd2958",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5a50a789fd7db4f74bb9084393bb085abbe1fd7b88c5ad3e591c2f6fce8650f4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao acionar 'Agendar' sem arquivo, abre o diálogo 'Formulário preenchido incorretamente.'; ao fechá-lo (Enter em OK ou Escape) o foco vai para <body>, não volta ao botão nem ao campo com erro.

Esperado: Ao fechar o diálogo, o foco retorna ao botão ou é levado ao campo com erro.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR 2. click botão 'Agendar' da linha 1 (br-button[icon=calendar]) 3. focar e acionar br-button[label=Agendar] 4. press Escape

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-button[label=\"Agendar\"]" — Seletor não resolvido

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
  "cardId": "C-5a50a789fd7db4f74bb9084393bb085abbe1fd7b88c5ad3e591c2f6fce8650f4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5b180e4afc574abff2bf859ef407aab2efb3a14e4e4ca3f92a265c0cf554e694

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
  "cardId": "C-5b180e4afc574abff2bf859ef407aab2efb3a14e4e4ca3f92a265c0cf554e694",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5e0de618435130fedfb1d7a5c2b76f8d11ad54b8a2c5eac5bbc21105f897a7a4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Os nomes de arquivo (boleto.pdf, v3038-campo57-1.pdf etc., 7 itens) são <strong> com cursor:pointer e cor de link, sem href, papel ou tabindex: aparentam ser clicáveis, mas não recebem foco nem são acionáveis por teclado. No ambiente mock o clique não teve efeito visível.

Esperado: Arquivos anexados oferecidos como link ou botão focável com nome.

Janela: 1280×900 · interações desde o carregamento: 1. click página 2 da paginação 2. click botão olho da linha 8 (status 'Vistoria preenchida')

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

- `S-page-014` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5e0de618435130fedfb1d7a5c2b76f8d11ad54b8a2c5eac5bbc21105f897a7a4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5eed3ba5c0de33c0be6891af672ce6c56fc580a9be84c4d2b6930e5f8bf3f8c1

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
  "cardId": "C-5eed3ba5c0de33c0be6891af672ce6c56fc580a9be84c4d2b6930e5f8bf3f8c1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5f20fc40345d859acf02874e1818de1f78e3d4b93bc6405d529eca17523b8010

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
  "cardId": "C-5f20fc40345d859acf02874e1818de1f78e3d4b93bc6405d529eca17523b8010",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-60af8ced803b6bae553b46b52d9db9233103237252686e2ac8f1661493c40316

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
  "cardId": "C-60af8ced803b6bae553b46b52d9db9233103237252686e2ac8f1661493c40316",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-611b6bb4ffed1be7449d772ea4fabaad4c5b89e6431e0853606ae514ddcc63ff

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Depois de abrir o diálogo "Atribuir Vistoriador" pelo teclado (Space) e fechá-lo com Escape, o foco foi para o BODY em vez de voltar ao botão que o abriu. O mesmo ocorreu ao fechar o alerta "Atenção" do formulário de edição.

Esperado: Ao fechar o diálogo, o foco deve voltar ao controle que o abriu.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "2" 3. foco no checkbox da linha 11 e Tab 4. Space 5. Escape

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
  "cardId": "C-611b6bb4ffed1be7449d772ea4fabaad4c5b89e6431e0853606ae514ddcc63ff",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-63b045ea6c7ff7a429516397a898625950b7187a2d83d16f02aacce2e7df57b8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Campo de busca tem apenas placeholder "Pesquise aqui ..."; sem <label>, aria-label ou aria-labelledby.

Esperado: Rótulo visível associado ao campo.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@inicial (/pnip/portal-mpa/vistorias)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(1)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input" — <br-input#search> "Pesquise aqui ..."

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-019` → identificador devolvido por ferramenta (sem arquivo)
- `P-14` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-63b045ea6c7ff7a429516397a898625950b7187a2d83d16f02aacce2e7df57b8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-64075ca992507348ea7ca402d33bc3446f78148f416869a7763eb798af01e331

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão do usuário mostra o texto "Olá, Usuária de Teste, SUPERVISOR", mas o aria-label="Avatar com dropdown" substitui esse texto no nome acessível.

Esperado: O nome acessível deve conter o texto visível, por exemplo remover o aria-label ou usar "Olá, Usuária de Teste, SUPERVISOR – menu do usuário".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-64075ca992507348ea7ca402d33bc3446f78148f416869a7763eb798af01e331",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-64cc9db3ac1135628feebeb7066fda3e4739b00f8d605ef7a159178628c8a3fa

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
  "cardId": "C-64cc9db3ac1135628feebeb7066fda3e4739b00f8d605ef7a159178628c8a3fa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-65141a4032b16cd9b4ec467a0f59088f17243283b80f7d59107cf3f89e04d9ff

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: "Limpar Filtro" com style="margin-top: -5px" (fora da escala de espaçamento).

Esperado: Valor da escala de tokens do DS.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-65141a4032b16cd9b4ec467a0f59088f17243283b80f7d59107cf3f89e04d9ff",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-65f867b782539cc6b3fc208ac63498dffa054be5556bb0b95859e381848d81ff

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na aba Tramitando, a tabela tem 1272px dentro de um contêiner de 1096px; o documento fica com scrollWidth 1364px na janela de 1280px, e o último botão de ação de cada linha ('Notificar solicitante') é cortado na borda direita (x≈1257–1335).

Esperado: Tabela contida na área da página (rolagem horizontal própria da tabela ou layout responsivo), sem cortar controles nem criar rolagem horizontal da página em 1280px.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-65f867b782539cc6b3fc208ac63498dffa054be5556bb0b95859e381848d81ff",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-66a5b29446e2e254f9b35fadcafcb8aae498f3d70766bc43d007215ad9f038cd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os filtros Cidade, Porto, Vistoriador e Status são span.br-tag com cursor:pointer, sem role e com tabIndex -1. Na navegação por Tab o foco passou de "Concluídos" direto para o campo de busca, sem alcançar nenhum filtro.

Esperado: Os acionadores de filtro devem ser controles focáveis e operáveis por teclado (button com aria-expanded).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. Tab ×14 desde o início da página

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
  "cardId": "C-66a5b29446e2e254f9b35fadcafcb8aae498f3d70766bc43d007215ad9f038cd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6906a665c6ec38cb3a6a342744fd72aba86fc61e99c13b1d6cb5030825efee3a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao fechar com "OK, entendi" o alerta "Preencha todos os campos obrigatórios", o foco vai para <body>, nem para Salvar nem para o primeiro campo com erro.

Esperado: Foco retorna ao botão Salvar (ou vai ao primeiro campo inválido).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click botão olho da linha 1 (aba Tramitando) 3. click "Editar" 4. click "Salvar" 5. Enter em "OK, entendi"

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-button[label=\"Salvar\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `V-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6906a665c6ec38cb3a6a342744fd72aba86fc61e99c13b1d6cb5030825efee3a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-69850c267b82879ef3d73a856b9d2f320188f08a48035c85fed9f40167372ef4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Etiqueta "Nenhum filtro de data aplicado": texto #ffffff sobre #c5d4eb, 14px = 1,5:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-69850c267b82879ef3d73a856b9d2f320188f08a48035c85fed9f40167372ef4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6b4faa636cf4bde388fe2e1af35a3e18ef5de974d5ece59f27b3163c92f04406

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão do usuário mostra o texto 'Olá, Usuária de Teste, SUPERVISOR', mas o nome acessível é aria-label='Avatar com dropdown', que não contém o texto visível.

Esperado: Nome acessível contém o texto visível do rótulo.

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6b4faa636cf4bde388fe2e1af35a3e18ef5de974d5ece59f27b3163c92f04406",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6dd87634425919fa43ce7dc1eee4c284694af6e47acec17457f59f885bc52549

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No formulário de edição, nenhum campo indica obrigatoriedade antes do envio: não há asterisco, aria-required nem required (0 campos marcados). Só depois de Salvar aparece "Campo obrigatório" em "Nome da embarcação".

Esperado: Os campos obrigatórios devem ser indicados antes do envio, visualmente e programaticamente.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "1" da paginação 3. click br-button[icon=eye] da linha 1 (Coral Mansa IV, Vistoria agendada) 4. click br-button[label=Editar] da seção Dados da vistoria

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input[formcontrolname=nomeEmbarcacao]" — Seletor não resolvido

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
  "cardId": "C-6dd87634425919fa43ce7dc1eee4c284694af6e47acec17457f59f885bc52549",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6e95b59a80c5735387f45396133eb171ff76d3fe631cf96c2d85dd4b656664ae

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
  "cardId": "C-6e95b59a80c5735387f45396133eb171ff76d3fe631cf96c2d85dd4b656664ae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7223d04e33575b38e53b76b8f811ddb9384588b6d7415da7ab138e1116ac6a2c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botões de ação das linhas (atribuir, visualizar, excluir, notificar) são br-button só com ícone, sem rótulo visível e sem a variante circle.

Esperado: Botão do DS com rótulo visível ou, se só ícone, na variante circular prevista pelo DS.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
- `F-020` → identificador devolvido por ferramenta (sem arquivo)
- `F-021` → identificador devolvido por ferramenta (sem arquivo)
- `F-022` → identificador devolvido por ferramenta (sem arquivo)
- `F-023` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-093` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-132` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7223d04e33575b38e53b76b8f811ddb9384588b6d7415da7ab138e1116ac6a2c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-72c575b9b6b04de36f2d09cb88740aaaabce000adbd12820efc3a4c09505e67d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Ao fechar com Escape os diálogos abertos por 'Exportar Vistorias', 'Atribuir vistoriador' e 'Excluir vistoria', o foco vai para <body> em vez de voltar ao botão que abriu o diálogo.

Esperado: Ao fechar o diálogo, o foco retorna ao controle que o acionou.

Janela: 1280×900 · interações desde o carregamento: 1. focar e acionar 'Exportar Vistorias' 2. press Escape

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
- U-8924e356e1c09c5fbe2f5a80caa361963ccf0b8576ca48d270679e1e0c5244b8 — B-03 · inicial · cena 1280x900@inicial · <table> "# Nome da embarcação RAEP Data/Hora Vistoria Loc": A tabela de vistorias (9 colunas, 10 linhas) não tem <caption>, aria-label nem aria-labelledby: o nome acessível da tabela é vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a1e04b93c057a4cf84a662046b003d90df9ca1cfe9e9c783133defa2a0bc8787 — B-27 · modal · cena 1280x900@modal · <div> "Trocar embarcação da vistoria Busque e selecione": Escalada E-06, origem: "autora" (decisão da escalada, 2026-10-01, D-61). Com o br-modal "Trocar embarcação" aberto, Tab sai do modal depois do último controle (Trocar) e percorre os botões do detalhe, o cabeçalho e o breadcrumb por trás do scrim antes de voltar: o foco não fica contido na Modal aberta. Só existe depois do clique em "Trocar embarcação da vistoria". Sem predicado na referência; medido por Tab real em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-012` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-72c575b9b6b04de36f2d09cb88740aaaabce000adbd12820efc3a4c09505e67d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7373f3eb46ee7e733203d2e3b9f7a0d56dbca3b6df8a8a01697f082d726acfa3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Etiqueta de status "Vistoria agendada": texto #ffffff sobre #4f97d1, 14px normal = 3,14:1.

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
- `F-061` → identificador devolvido por ferramenta (sem arquivo)
- `F-070` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7373f3eb46ee7e733203d2e3b9f7a0d56dbca3b6df8a8a01697f082d726acfa3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-74cc6a2419451deeb4e8e07df2447fc52faaf87cc1e5b05526961bef04cc25eb

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
  "cardId": "C-74cc6a2419451deeb4e8e07df2447fc52faaf87cc1e5b05526961bef04cc25eb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-74d73f86f38f46a78ebac264691815563d0bb6343640e58839472c89ea43aad9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A aba ativa só é indicada pela classe 'active' no li; os botões não têm aria-selected/aria-current nem role=tab, então o estado selecionado não é exposto.

Esperado: Estado da aba atual determinável programaticamente (role=tab + aria-selected, ou aria-current).

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
- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-74d73f86f38f46a78ebac264691815563d0bb6343640e58839472c89ea43aad9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7547dcc325b9f94c2c4d956199d03361b682601f9fa759cfa8e07d548035c167

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
  "cardId": "C-7547dcc325b9f94c2c4d956199d03361b682601f9fa759cfa8e07d548035c167",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7562a671c30fd814aa455ec0cdd1584cedf2285f1d3a4f3a9fd1adcba5e7dfae

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
  "cardId": "C-7562a671c30fd814aa455ec0cdd1584cedf2285f1d3a4f3a9fd1adcba5e7dfae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-75d5895f1bb76c5ef02db82b4e4882cdb67527eac217f79d38b5e3d26f0febdd

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
  "cardId": "C-75d5895f1bb76c5ef02db82b4e4882cdb67527eac217f79d38b5e3d26f0febdd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-76a2382c11dd9a90ee19a1c40591e77c1e8af20a5b64c49ed5d0b3644983dc6b

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
  "cardId": "C-76a2382c11dd9a90ee19a1c40591e77c1e8af20a5b64c49ed5d0b3644983dc6b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-76f2551c2c28ac7093788ac0d745b7376c39b3d8c0207a1464a522e3ba4bf431

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
  "cardId": "C-76f2551c2c28ac7093788ac0d745b7376c39b3d8c0207a1464a522e3ba4bf431",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-77dd3643af91cfe017f381d579613ece3ff6cc5d93a0becb9494360d6d7d0cb2

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
  "cardId": "C-77dd3643af91cfe017f381d579613ece3ff6cc5d93a0becb9494360d6d7d0cb2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-78baa23e77886d8cb991c1e4e19bc4b0940acaa947bc5de19548bdfe80f1820a

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
  "cardId": "C-78baa23e77886d8cb991c1e4e19bc4b0940acaa947bc5de19548bdfe80f1820a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7905bf7a2f6fa19ffea60d94641cfcd0c3044831831e1d2197623929df183c30

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na edição de vistoria sem vistoriador, os campos Nome do vistoriador, Registro e E-mail estão desabilitados, vazios e obrigatórios: mesmo com todos os campos editáveis preenchidos, "Salvar" mostra "Preencha todos os campos obrigatórios" e 3x "Campo obrigatório" nesses campos que o usuário não pode preencher.

Esperado: Campos desabilitados não devem bloquear o envio, ou o usuário deve poder preenchê-los/ser orientado a atribuir um vistoriador.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click botão olho da linha 1 (aba Tramitando) 3. click "Editar" em Dados da vistoria 4. click "Salvar"

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input:is([formcontrolname=\"nomeVistoriador\"],[formcontrolname=\"numConselhoClasseVistoriador\"],[formcontrolname=\"emailVistoriador\"])" — Seletor não resolvido

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
  "cardId": "C-7905bf7a2f6fa19ffea60d94641cfcd0c3044831831e1d2197623929df183c30",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-797674f1dcdcf41dd662fc5c39b786288974cc2fee12308e4755f26b63914ee5

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
  "cardId": "C-797674f1dcdcf41dd662fc5c39b786288974cc2fee12308e4755f26b63914ee5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7a99eeb502730cfdf6d27f3c176d9359ddeeac0a1eaae8a9691b79e1debf6a8d

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
  "cardId": "C-7a99eeb502730cfdf6d27f3c176d9359ddeeac0a1eaae8a9691b79e1debf6a8d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7ae5f2bd3fa8b7de2ef37972514fa8baff7e9b9a1160cf8f75e906598920aceb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "boleto.pdf" é <strong style="cursor:pointer"> sem href, role ou tabindex; não é focável nem anunciado como link.

Esperado: Link ou botão focável para abrir/baixar o boleto.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click aba "Concluídos" (#HISTORICO) 3. click botão olho da linha 1 (Pérola Veloz II, NAO COMPARECIMENTO)

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7ae5f2bd3fa8b7de2ef37972514fa8baff7e9b9a1160cf8f75e906598920aceb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7d72a91e71cc0fc2368902068bb0a7deb5d3afbef80c21f3aa09aed708d3b9cb

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo "Atribuir Vistoriador", o select (#swal2-select) não tem label, aria-label nem aria-labelledby. O texto "Selecione um Vistoriador" é um div separado, sem associação.

Esperado: O select deve ter rótulo associado programaticamente.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "2" 3. foco no checkbox da linha 11 e Tab 4. Space no botão "Atribuir vistoriador"

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-select" — Seletor não resolvido

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
  "cardId": "C-7d72a91e71cc0fc2368902068bb0a7deb5d3afbef80c21f3aa09aed708d3b9cb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7e1c7ade4d6e491855ef7fcb9644663a3114ae12090ac0bf8e1cf715f808c513

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
  "cardId": "C-7e1c7ade4d6e491855ef7fcb9644663a3114ae12090ac0bf8e1cf715f808c513",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7f12ca98412961fb767747ed9d65d53b1cb58c8877040e3faa31fc30752e0041

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Botão "Sair" com border-radius 20px (fora da escala 0/4/8/16px, 50%, pill).

Esperado: Valor da escala de tokens do DS.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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
- `F-228` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7f12ca98412961fb767747ed9d65d53b1cb58c8877040e3faa31fc30752e0041",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7f85fa633614f818a81c3dc73bee54ef68f5e132025b09babee59bcd3a654a8a

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
  "cardId": "C-7f85fa633614f818a81c3dc73bee54ef68f5e132025b09babee59bcd3a654a8a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-800b78bbabae3b6c3151fe5e5392c58dbd1b2b208e5d422057a8785837175040

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
  "cardId": "C-800b78bbabae3b6c3151fe5e5392c58dbd1b2b208e5d422057a8785837175040",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-81a5cdabfdb2e3ac9e57727f44f2dbe769cd18c053f00def0601fb4fe8bda1f3

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
  "cardId": "C-81a5cdabfdb2e3ac9e57727f44f2dbe769cd18c053f00def0601fb4fe8bda1f3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-81c465074ca9e9d710ce7ac86a6bf1e18bbf53bace89e68cc89a5a9101bbd48b

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
  "cardId": "C-81c465074ca9e9d710ce7ac86a6bf1e18bbf53bace89e68cc89a5a9101bbd48b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-81cf948ca505057749730234941b721d5be00219f222e0830da62d4cd896a41b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No detalhe da vistoria (/agendar-vistoria/…), o primeiro título é h3 "Programa Nacional de Regularização…", seguido de h4, sem h1 nem h2. Na edição, "Editar dados da vistoria" é h4, no mesmo nível das seções que deveria conter.

Esperado: A hierarquia de títulos deve começar em h1 e não pular níveis.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "1" da paginação 3. click br-button[icon=eye] da linha 1 (Coral Mansa IV, Vistoria agendada)

Regra declarada: wcag:1.3.1

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
  "cardId": "C-81cf948ca505057749730234941b721d5be00219f222e0830da62d4cd896a41b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-822fff2cbff134a6a7ddb615302eaad33fb51f4f1883c93732a8892cfe9088e4

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
  "cardId": "C-822fff2cbff134a6a7ddb615302eaad33fb51f4f1883c93732a8892cfe9088e4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-831c4b480b7f171e134ae04eb66d225f1ab3aeddfbb70c0645c08a1fe465561e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os dois campos de data do filtro (#br-input-8 e #br-input-9 no shadow root) não têm rótulo associado; o texto "Data da vistoria:" e "até" fica fora do componente sem for/aria-labelledby ([ferramenta citada] label).

Esperado: Cada campo de data com rótulo associado (ex.: "Data inicial", "Data final").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: [regra citada]

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
  "cardId": "C-831c4b480b7f171e134ae04eb66d225f1ab3aeddfbb70c0645c08a1fe465561e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8894c25f2aa6dcb2edf1401aa681de33e6467788cc49fe4c568ec75f8dfddee7

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O logotipo gov.br no cabeçalho (img no shadow DOM de br-header) tem alt="logo", texto que não identifica a imagem.

Esperado: O alt deve descrever a marca, por exemplo "gov.br".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-8894c25f2aa6dcb2edf1401aa681de33e6467788cc49fe4c568ec75f8dfddee7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-895e073d523e203385c2c224751c8a0c9eb1a5b5a918e771f1a4c2ea272428d2

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
  "cardId": "C-895e073d523e203385c2c224751c8a0c9eb1a5b5a918e771f1a4c2ea272428d2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-89b52b90435cf2064ae00efd00a737e51b8ccd8f5a8be9b9e94d9eda6e6de6d9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: O modal "Trocar embarcação da vistoria" (div.br-modal) não tem role=dialog, aria-modal nem aria-labelledby, e o título está num div.br-modal-header.

Esperado: O modal deve ter role="dialog", aria-modal="true" e nome pelo título.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "2" da paginação 3. click br-button[icon=eye] da linha "Aurora do Norte III" (Vistoria preenchida) 4. click "Trocar embarcação da vistoria"

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
  "cardId": "C-89b52b90435cf2064ae00efd00a737e51b8ccd8f5a8be9b9e94d9eda6e6de6d9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-89b87b2add93dcec2c927217f5b2d8c992e547a507a457fb2112c647b1ffb73b

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
  "cardId": "C-89b87b2add93dcec2c927217f5b2d8c992e547a507a457fb2112c647b1ffb73b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-89e58c83b2f54c7eb12d1afafbee53da419ca54521b3a56322947e300572c34a

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
  "cardId": "C-89e58c83b2f54c7eb12d1afafbee53da419ca54521b3a56322947e300572c34a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8b025740b34260bbd5104f1acf5f513409214fe4d50d1addd07a057e94d6c02e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O botão "visualizar" (ícone fa-eye) de cada linha não tem nome acessível: o button interno tem aria-label="" e não tem title nem texto. A árvore de acessibilidade mostra "button" sem nome. O mesmo vale nas abas Tramitando e Concluídos.

Esperado: Cada botão só com ícone deve ter nome acessível, por exemplo aria-label="Visualizar vistoria <embarcação>".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-8b025740b34260bbd5104f1acf5f513409214fe4d50d1addd07a057e94d6c02e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8cfcd4b682a0588581553774ab4987779f5ace7c3d66b5457c883c29efbdc63c

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
  "cardId": "C-8cfcd4b682a0588581553774ab4987779f5ace7c3d66b5457c883c29efbdc63c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8e06d1a8c71a01109d0baab95f208325460406ae46e0c6824c434ff41677e0ac

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
  "cardId": "C-8e06d1a8c71a01109d0baab95f208325460406ae46e0c6824c434ff41677e0ac",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8e4a73cda369a48717a6e9648aa310e8c5cf89994f69e14d7fd9ee8fe60ad123

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
  "cardId": "C-8e4a73cda369a48717a6e9648aa310e8c5cf89994f69e14d7fd9ee8fe60ad123",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8f4db86f042b1813db9107290a1bb61b12de81154e5f242d295485ebc3e8c8cf

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
  "cardId": "C-8f4db86f042b1813db9107290a1bb61b12de81154e5f242d295485ebc3e8c8cf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9151608ab4c47a29631336a2ba85b402c92a8c8a346f8ed2290dcc932daf860d

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
  "cardId": "C-9151608ab4c47a29631336a2ba85b402c92a8c8a346f8ed2290dcc932daf860d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-92030aa060bcf74c9c9e9dc28cd23c493bf21a6a922eb5cc2a6ae78679310c71

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Botão do usuário exibe "Olá, Usuária de Teste, SUPERVISOR", mas aria-label="Avatar com dropdown" substitui o nome; o texto visível não está no nome acessível.

Esperado: Nome acessível que contenha o texto visível do botão.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-92030aa060bcf74c9c9e9dc28cd23c493bf21a6a922eb5cc2a6ae78679310c71",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9554218a0d333c5143998556021798faec17ecd7232cc3eb80fcb982908b437e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo "Exportar Vistorias", as 5 checkboxes de status ficam sob o texto "Status:" em <strong>, sem fieldset/legend nem role="group" com nome.

Esperado: Checkboxes agrupadas (fieldset/legend "Status").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click "Exportar Vistorias"

Regra declarada: emag:6.7

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.swal2-html-container input[type=\"checkbox\"]" — Seletor não resolvido

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
  "cardId": "C-9554218a0d333c5143998556021798faec17ecd7232cc3eb80fcb982908b437e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9571df5514e60b0c4ca86f911a52275fb5450d43750a191aabf27b508cdbdb99

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
  "cardId": "C-9571df5514e60b0c4ca86f911a52275fb5450d43750a191aabf27b508cdbdb99",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-95d07d89e7c2c479c40898a4c028656aea2be5247f93bb451b9ce094b86d6d11

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Página atual "1" é indicada apenas visualmente (classe .active); <a href="javascript:void(0)"> sem aria-current.

Esperado: Página atual com aria-current="page".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-95d07d89e7c2c479c40898a4c028656aea2be5247f93bb451b9ce094b86d6d11",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-97c49bb20a331e1b6d8e4783f6e2f06dc3a99e786006f98fa832860a7a311f75

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
  "cardId": "C-97c49bb20a331e1b6d8e4783f6e2f06dc3a99e786006f98fa832860a7a311f75",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-988bcaedd60f39d9c57cf0fcd2e2cb9dbedb367421d81ef59c26eae273dbb8da

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No menu do usuário, "Trocar unidade" é um span com cursor:pointer, tabIndex -1 e sem role. Não recebe foco por teclado.

Esperado: "Trocar unidade" deve ser button ou link focável e operável por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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
  "cardId": "C-988bcaedd60f39d9c57cf0fcd2e2cb9dbedb367421d81ef59c26eae273dbb8da",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9abc2e59291e8e5f59acce11641a7172edc86fb725797d08a98bf0b8133131c3

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: No detalhe preenchido, as áreas "Selecione o(s) arquivo(s)" (12 ocorrências) são divs com cursor:pointer, sem role e com tabIndex -1. O input type=file tem class d-none, e o label do campo não tem for.

Esperado: O envio de arquivo deve ser acessível por teclado (input file focável ou botão), com rótulo associado.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "2" da paginação 3. click br-button[icon=eye] da linha "Aurora do Norte III" (Vistoria preenchida) 4. click "Mostrar" em Envio de documentação

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
  "cardId": "C-9abc2e59291e8e5f59acce11641a7172edc86fb725797d08a98bf0b8133131c3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9abe52dd828c0ade352c6efc9b536a6255888387c319d531f8cf932cd0e4ade9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Selo de status 'Vistoria pré agendada' na aba Agendar: texto #ffffff sobre #888888, 14px normal = 3,54:1.

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR (aba Agendar)

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-status-solicitacao-utils .bg-secondary-06 > .text-secondary-01" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-084..F-093` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9abe52dd828c0ade352c6efc9b536a6255888387c319d531f8cf932cd0e4ade9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9ae55ce8bc017931d912917df4be5845a642b8aaf8d39137abfa46e6b3b473ed

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
  "cardId": "C-9ae55ce8bc017931d912917df4be5845a642b8aaf8d39137abfa46e6b3b473ed",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9bd254ff54d47a12d597e7c7166148b7bbcf1fce23186e27dcb512ad095845f9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: A inicial "U" do avatar é branca sobre laranja rgb(255,140,0), com contraste de 2,33:1 (24,2px, negrito: texto grande).

Esperado: Contraste mínimo de 3:1 para texto grande.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-a-decidir: o seletor resolve em 1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9bd254ff54d47a12d597e7c7166148b7bbcf1fce23186e27dcb512ad095845f9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9bfe72103c02910f1a4b8f6b7c074fc6647d5b3963a069efffdfe0f53db5f21c

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
  "cardId": "C-9bfe72103c02910f1a4b8f6b7c074fc6647d5b3963a069efffdfe0f53db5f21c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9d0d97443b83c025397f9a9a3c2bf2e7a810eee39cf7349edb6cdd80c38ca515

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
  "cardId": "C-9d0d97443b83c025397f9a9a3c2bf2e7a810eee39cf7349edb6cdd80c38ca515",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9d748dc8f30b408a09fbfd43c7ad6bf0344a9a95241021747b611555200cbc29

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão "×" que remove o filtro aplicado ("Barra Nova") só tem <i class="fas fa-times">, sem texto nem aria-label ([ferramenta citada] button-name).

Esperado: Botão com nome acessível (ex.: "Remover filtro Barra Nova").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click chip "Cidade" 3. click opção "Barra Nova"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel span.br-tag button.circle" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-195` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9d748dc8f30b408a09fbfd43c7ad6bf0344a9a95241021747b611555200cbc29",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9e4b940a30d15f0403080d30fc7a8bbd317a73cdf4f13007fc94e870d6aae4de

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página atual da paginação é indicada só pela classe 'active' (destaque visual); o link não tem aria-current nem outro indicador programático.

Esperado: Página atual marcada com aria-current='page'.

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
- `S-page-013` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9e4b940a30d15f0403080d30fc7a8bbd317a73cdf4f13007fc94e870d6aae4de",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9f9b8cbc13f5bc191d040dba68d09181c7ea608b808c53d574bca77b4d59b275

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No detalhe da vistoria 'Coral Mansa IV' (lista: 01/04/2026 10:30), o campo 'Hora da vistoria' é exibido vazio (sem atributo value), enquanto 'Data da vistoria' mostra 01/04/2026. O mesmo ocorre na vistoria pré-agendada (lista 14:30, detalhe vazio).

Esperado: O detalhe exibe a hora da vistoria registrada.

Janela: 1280×900 · interações desde o carregamento: 1. click botão olho da linha 1 (aba Tramitando)

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-a-decidir: o seletor resolve em 1280x900@detalhe-menu, 1280x900@modal; escolha em "cena" de qual a alegação fala — só os sujeitos dela contam

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

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9f9b8cbc13f5bc191d040dba68d09181c7ea608b808c53d574bca77b4d59b275",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9fcb14776c0358ff90e75174ad9e1325c6f88728a1544b0d5e0acc68efd985ac

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
  "cardId": "C-9fcb14776c0358ff90e75174ad9e1325c6f88728a1544b0d5e0acc68efd985ac",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a0faca63fbf2f71292f67f0f14c40f35cb8b6cfb87351613b9edfd447fa30cd3

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
  "cardId": "C-a0faca63fbf2f71292f67f0f14c40f35cb8b6cfb87351613b9edfd447fa30cd3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a1842d086e3f19735d1a5dfbccda5065cf81f5968ab59f6eccfc7b2f31e17d31

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Com o filtro Cidade aberto, as opções são <label> soltos (sem input associado, sem tabindex, sem papel); não recebem foco e Escape não fecha a lista.

Esperado: Opções selecionáveis por teclado (ex.: radios/checkboxes reais ou listbox com navegação por setas).

Janela: 1280×900 · interações desde o carregamento: 1. click span.br-tag.interaction 'Cidade'

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.row.pl-2 .br-list.d-block label" — Seletor não resolvido

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
  "cardId": "C-a1842d086e3f19735d1a5dfbccda5065cf81f5968ab59f6eccfc7b2f31e17d31",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a5a693e66a1577898e0971a379ff0f33f5f6fad0a1ff701b0d56ca6b497d7a2c

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
  "cardId": "C-a5a693e66a1577898e0971a379ff0f33f5f6fad0a1ff701b0d56ca6b497d7a2c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a663a3c44399c15e95f97e3ba4f684fad2ca46f6f2a785d62c5ed1cae0d1f5ae

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página atual da paginação ("1") só é indicada pela classe "active" (fundo escuro). Não tem aria-current="page".

Esperado: O link da página atual deve ter aria-current="page".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-a663a3c44399c15e95f97e3ba4f684fad2ca46f6f2a785d62c5ed1cae0d1f5ae",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-a6746b3c7f8e140a5b0f6195c441609a998da3d155990825264c70f495b693e2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A etiqueta "Nenhum filtro de data aplicado" tem texto branco rgb(255,255,255) sobre fundo rgb(197,212,235), com contraste de 1,50:1 (14px, peso 500).

Esperado: Contraste mínimo de 4,5:1 para texto normal.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-a6746b3c7f8e140a5b0f6195c441609a998da3d155990825264c70f495b693e2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-aa0021104919562739248f5aa2a03ef39d5adbe34a35d162c45947fe6312d8cd

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página não tem h1. O único título é h2 "Vistorias".

Esperado: A página deve ter um h1 com o título principal, e a hierarquia deve começar nele.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:1.3.1

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
  "cardId": "C-aa0021104919562739248f5aa2a03ef39d5adbe34a35d162c45947fe6312d8cd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ac93584059c42ff7014dd47d1ce99970f298948f07a991ff110fb7432938d596

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os checkboxes de seleção das linhas não têm label, aria-label nem aria-labelledby. A árvore de acessibilidade mostra "checkbox" sem nome.

Esperado: Cada checkbox deve ter nome que identifique o registro, por exemplo "Selecionar Coral Mansa IV".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-ac93584059c42ff7014dd47d1ce99970f298948f07a991ff110fb7432938d596",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ad300cb4e37cccb1872f47274429371c048d93c14f9c09c122add2c55f642e2d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: No detalhe, o primeiro cabeçalho é <h3> "Programa Nacional de Regularização de Embarcação de Pesca", sem h1/h2; seções em h4.

Esperado: Hierarquia começando em <h1>, sem saltos de nível.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click aba "Concluídos" (#HISTORICO) 3. click botão olho da linha 1 (Pérola Veloz II, NAO COMPARECIMENTO)

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-167` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ad300cb4e37cccb1872f47274429371c048d93c14f9c09c122add2c55f642e2d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-addfd4632328e71cc3c1ea80452015d1651fa6128e51716c90c0f6c56000b11d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na paginação, cada número está num <li> aninhado diretamente dentro de outro <li>, sem ul/ol intermediário. A árvore mostra listitem > listitem.

Esperado: Estrutura de lista válida: um único li por item dentro do ul.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-addfd4632328e71cc3c1ea80452015d1651fa6128e51716c90c0f6c56000b11d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ade3c4324e3dccc67cad78d8fadec6caacd4063db522d273c120f03202b3b61a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Depois de aplicar o filtro "Barra Nova", o botão "x" que remove o filtro aplicado não tem nome acessível (sem aria-label nem texto; só o ícone fa-times).

Esperado: O botão deve ter nome, por exemplo aria-label="Remover filtro Barra Nova".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click filtro "Cidade" 3. click opção "Barra Nova"

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
  "cardId": "C-ade3c4324e3dccc67cad78d8fadec6caacd4063db522d273c120f03202b3b61a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ae4976a95e8f89d8f422c645f78c8f27d53798f5df4b3b3bb864671ea4a70a60

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: Os botões Mostrar/Ocultar das seções 'Envio de documentação' e 'Conclusão' expandem/recolhem conteúdo, mas o button interno não tem aria-expanded (null antes e depois do clique) nem aria-controls.

Esperado: Botão de expandir/recolher expõe o estado com aria-expanded.

Janela: 1280×900 · interações desde o carregamento: 1. click página 2 da paginação 2. click botão olho da linha 8 (status 'Vistoria preenchida')

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-pela-resolucao: o seletor só resolve em 1280x900@modal (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003038)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(3)>div:nth-of-type(1)>div:nth-of-type(3)>br-button" — <br-button>
- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>div:nth-of-type(4)>div:nth-of-type(1)>div:nth-of-type(3)>br-button" — <br-button>

### Unidades candidatas (não são crédito)

- U-552237229d63cd6932118831391f3a7a14f8609704d062b570cbff84a41ce88d — B-01 · sempre · cena 1280x900@modal · <pnip-root> "U Olá, Usuária de Teste, SUPERVISOR Programa Nac": Defeito de ausência, ancorado no contêiner raiz da aplicação (método § 5; auditoria.md § 5). Em nenhuma das quatro paradas (lista, dois detalhes, modal) há salto para o conteúdo: nenhuma âncora "#…" nem .br-skiplink, e o primeiro ponto de Tab é o botão Menu do cabeçalho. O <main> existe e nada leva a ele. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
  - estados em que a unidade existe: inicial, detalhe-menu, detalhe, modal
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-014` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ae4976a95e8f89d8f422c645f78c8f27d53798f5df4b3b3bb864671ea4a70a60",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ae7f972750f7626ae63c8e36a2cba8cbe18c64d9218db0b5425ca361ca0cda34

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As mensagens "Campo obrigatório" (div role=alert) não estão ligadas aos campos: os inputs não têm aria-describedby nem aria-invalid, e as mensagens não têm id.

Esperado: Cada mensagem de erro deve estar associada ao campo (aria-describedby), e o campo deve ter aria-invalid="true".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "1" da paginação 3. click br-button[icon=eye] da linha 1 (Coral Mansa IV, Vistoria agendada) 4. click br-button[label=Editar] da seção Dados da vistoria 5. limpar "Nome da embarcação" 6. click Salvar

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.feedback.danger" — Seletor não resolvido

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
  "cardId": "C-ae7f972750f7626ae63c8e36a2cba8cbe18c64d9218db0b5425ca361ca0cda34",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b12a59de67b6273ac2c6b8f61b3b2f33fae9757b247e9c9d9e12b907b2f670c8

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Não há link de salto ("ir para o conteúdo") nem âncoras de bloco. O primeiro Tab vai para o botão "Menu" e são necessários vários Tabs até chegar ao conteúdo principal.

Esperado: Deve haver atalhos ou links de salto para o conteúdo principal no início da página.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: wcag:2.4.1

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
  "cardId": "C-b12a59de67b6273ac2c6b8f61b3b2f33fae9757b247e9c9d9e12b907b2f670c8",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b2982ecc52f41c1ef7b83928fcc2868e2a6737ad2d4a4fb617660da58fa9d4dc

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Opções do filtro aberto (ex.: Cidade) são div.br-item > div.br-radio > <label> sem <input type="radio">, sem role, sem estado e não focáveis (tabIndex=-1).

Esperado: Opções expostas como radio/option com estado de seleção e alcançáveis por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click chip "Cidade"

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:.br-list.d-block .br-item" — Seletor não resolvido

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
  "cardId": "C-b2982ecc52f41c1ef7b83928fcc2868e2a6737ad2d4a4fb617660da58fa9d4dc",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b2d7c2cc5cfacd5ecef9953c402a39ee59d0635c19c4e9c0e254475df143d60e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O título do documento é 'PNIP' em todas as rotas visitadas (lista de vistorias, agendar-vistoria, editar-dados-vistoria); não informa a página nem o assunto.

Esperado: Título único e descritivo por página (ex.: 'Vistorias – PNIP', 'Agendar vistoria – PNIP').

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b2d7c2cc5cfacd5ecef9953c402a39ee59d0635c19c4e9c0e254475df143d60e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b3f78ee3bcb6db56976b6b64f9e3581496057fb3e08f7370dc60326963d8b82e

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
  "cardId": "C-b3f78ee3bcb6db56976b6b64f9e3581496057fb3e08f7370dc60326963d8b82e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b540b7c0eabf10123cd6e1196175d0e7577ee6296e51b16f5eec664c2a429e7b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Os dois campos de data (input type=date, ids br-input-8 e br-input-9, no shadow DOM) não têm label associado. O texto "Data da vistoria:" e o texto "até" são spans soltos, e a árvore de acessibilidade mostra "textbox" sem nome.

Esperado: Cada campo deve ter rótulo associado programaticamente, por exemplo "Data da vistoria – início" e "Data da vistoria – fim".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-b540b7c0eabf10123cd6e1196175d0e7577ee6296e51b16f5eec664c2a429e7b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b55d48e3056b6fe9605f2d1db328b159b0f23cf5d2ea45d26275b6ed7351a8ea

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página não tem h1; o título principal 'Vistorias' é h2 ([ferramenta citada] page-has-heading-one).

Esperado: Título principal da página marcado como h1, seguindo a hierarquia de cabeçalhos.

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
  "cardId": "C-b55d48e3056b6fe9605f2d1db328b159b0f23cf5d2ea45d26275b6ed7351a8ea",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b59aec58d387c7736c4f6ff808898450280d1c603e0fba0ad3199fdb6c14edd7

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
  "cardId": "C-b59aec58d387c7736c4f6ff808898450280d1c603e0fba0ad3199fdb6c14edd7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b5ab641131c903ebfa2bd536aaa69c36398684198222ad52e830c9a1f395a021

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
  "cardId": "C-b5ab641131c903ebfa2bd536aaa69c36398684198222ad52e830c9a1f395a021",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b70336e04d5301103176fcdf2fd9274dc017ce44df54cb5f57e4ac6270836718

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
  "cardId": "C-b70336e04d5301103176fcdf2fd9274dc017ce44df54cb5f57e4ac6270836718",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b772d1a50d201135b754b64b450d1850dbb1eff75bec567f47476ac4c92403d0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao esvaziar 'Nome da embarcação' aparece 'Campo obrigatório' (role=alert) abaixo do campo, mas o input fica com aria-invalid ausente (ax invalid=false) e descrição vazia; a mensagem não nomeia o campo nem está associada a ele (sem aria-describedby/aria-errormessage). O mesmo padrão vale para os demais campos do formulário.

Esperado: Campo em erro identificado programaticamente (aria-invalid) e associado à mensagem que o descreve.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR 2. click botão 'Agendar' da linha 1 3. click br-button[label=Editar] 4. fill br-input[formcontrolname=nomeEmbarcacao] input com ''

Regra declarada: wcag:3.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input[formcontrolname=\"nomeEmbarcacao\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `V-003` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b772d1a50d201135b754b64b450d1850dbb1eff75bec567f47476ac4c92403d0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b83a0ffa0d466ef886d8571505a487933029d191d21ed8a835bb8afb4ff1a820

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
  "cardId": "C-b83a0ffa0d466ef886d8571505a487933029d191d21ed8a835bb8afb4ff1a820",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b874705c88b8726edcb743102d89b071c74560135e3d78a03205457d2abec390

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Caixas de seleção do cabeçalho e de cada linha da tabela não têm label, aria-label nem aria-labelledby ([ferramenta citada] label, 11 instâncias).

Esperado: Cada checkbox tem nome acessível (ex.: 'Selecionar todas', 'Selecionar vistoria Coral Mansa IV').

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
- `FAM-9b0e07725662` → identificador devolvido por ferramenta (sem arquivo)
- `F-026..F-036` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b874705c88b8726edcb743102d89b071c74560135e3d78a03205457d2abec390",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ba60c9e3999a42f77109f9a18cfe0afb7d18c080ddbafba7fefd429d88a62eb9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A aba ativa só é indicada pela classe .tab-item.active (cor/sublinhado); os botões Agendar/Tramitando/Concluídos não têm aria-selected nem aria-current.

Esperado: Estado da aba ativa exposto programaticamente (aria-selected="true"/"false" ou aria-current).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: [regra citada]

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ba60c9e3999a42f77109f9a18cfe0afb7d18c080ddbafba7fefd429d88a62eb9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bc3ba1bea6728bc36c6655d9f60e88871081a3c8781f558abdd26d1cf3551398

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: 16 campos obrigatórios do formulário de edição (erro "Campo obrigatório" ao esvaziar) não têm asterisco, texto "obrigatório", required nem aria-required; Número, Bairro, Complemento, Validade RAEP e Telefone são opcionais e aparecem idênticos.

Esperado: Campos obrigatórios identificados antes do envio (visualmente e programaticamente).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click botão olho da linha 1 (aba Tramitando) 3. click "Editar" em Dados da vistoria

Regra declarada: wcag:3.3.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input:is([formcontrolname=\"dataInicio\"],[formcontrolname=\"horaInicio\"],[formcontrolname=\"portoDesembarque\"],[formcontrolname=\"endereco\"],[formcontrolname=\"cep\"],[formcontrolname=\"cidade\"],[formcontrolname=\"uf\"],[formcontrolname=\"latitude\"],[formcontrolname=\"longitude\"],[formcontrolname=\"nomeEmbarcacao\"],[formcontrolname=\"numTie\"],[formcontrolname=\"numRaep\"],[formcontrolname=\"nomeResponsavelEmbarcacao\"],[formcontrolname=\"emailResponsavelEmbarcacao\"],[formcontrolname=\"nomeSolicitante\"],[formcontrolname=\"emailSolicitante\"])" — Seletor não resolvido

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
  "cardId": "C-bc3ba1bea6728bc36c6655d9f60e88871081a3c8781f558abdd26d1cf3551398",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bcc7508be6037e8f5d28d16dcfc30562ce12ea4f55aaf9b529a63577b14c51c6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: As duas tabelas do detalhe (notificações e histórico Data/Solicitante/.../Arquivos) não têm <caption>.

Esperado: Título de cada tabela em <caption>.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click aba "Concluídos" (#HISTORICO) 3. click botão olho da linha 1 (Pérola Veloz II, NAO COMPARECIMENTO)

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `P-08` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bcc7508be6037e8f5d28d16dcfc30562ce12ea4f55aaf9b529a63577b14c51c6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bedb7e4be2d940b8c27420789b217d2bd50ccddbd06b185f1674bb22a32d91f4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: A página não tem <h1>; o título visível "Vistorias" é <h2> e é o primeiro cabeçalho do documento.

Esperado: Título principal da página marcado como <h1>, com hierarquia a partir dele.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
- `F-090` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bedb7e4be2d940b8c27420789b217d2bd50ccddbd06b185f1674bb22a32d91f4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bef81225454d04f2e980e0d706ba5ba81d786c11d61797476d6e4c79334ae1ca

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
  "cardId": "C-bef81225454d04f2e980e0d706ba5ba81d786c11d61797476d6e4c79334ae1ca",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bf644e06c63955e92abfcb4160e9c3bb72f3dc7cef5118758f3ec28e7d952702

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Ao esvaziar "Nome da embarcação", a mensagem "Campo obrigatório" (div.feedback role=alert) aparece fora do shadow root do br-input; o <input> não recebe aria-invalid nem aria-describedby e o alerta não identifica o campo.

Esperado: Campo em erro marcado (aria-invalid) e associado à mensagem que o identifica.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click botão olho da linha 1 (aba Tramitando) 3. click "Editar" em Dados da vistoria 4. esvaziar "Nome da embarcação"

Regra declarada: wcag:3.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input[formcontrolname=\"nomeEmbarcacao\"]" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `V-004` → identificador devolvido por ferramenta (sem arquivo)
- `V-005` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bf644e06c63955e92abfcb4160e9c3bb72f3dc7cef5118758f3ec28e7d952702",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c079e3dc36a761c4aea55539a5387c60ac4a629bb501c5a0cc77f79b4820fd56

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Filtros Cidade, Porto, Vistoriador e Status são <span class="br-tag interaction"> com cursor:pointer e listener de clique, tabIndex=-1, sem role; não entram na ordem de Tab (sequência vai de Concluídos direto para o campo de busca).

Esperado: Filtros operáveis por teclado (button/aria-expanded ou br-select do DS).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-c079e3dc36a761c4aea55539a5387c60ac4a629bb501c5a0cc77f79b4820fd56",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c0ca54a40d4ad116a013dd81a50d6db4de6f36e21248942a6258d35367baa7fa

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
  "cardId": "C-c0ca54a40d4ad116a013dd81a50d6db4de6f36e21248942a6258d35367baa7fa",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c182a7965c5501dddcbea713bd3cc24f2ae44d7b839920214467b38a6dade274

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@detalhe-menu

Observado: O textarea "Descrever o motivo do não comparecimento" não está associado ao <label> (sem for/id nem aria-label) e fica sem nome acessível.

Esperado: O textarea deve ter rótulo associado programaticamente.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "2" 3. click br-button[icon=eye] da linha "Aurora Veloz" (Não comparecimento)

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-pela-resolucao: o seletor só resolve em 1280x900@detalhe-menu (/pnip/portal-mpa/vistorias/agendar-vistoria/00000000-0000-4000-8a01-000000003046)

### Sujeitos

- "body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>div:nth-of-type(2)>form>pnip-propesc-nao-comparecimento>div>div:nth-of-type(2)>div>div>textarea" — <textarea>

### Unidades candidatas (não são crédito)

- U-238f9e8879e41566f840160f72c03e67a02b73d7a42128f02a5935cc250e0e6f — B-20 · detalhe-menu · cena 1280x900@detalhe-menu · <textarea>: Detalhe da vistoria de não comparecimento: a <textarea> do motivo tem um <label> "Descrever o motivo do não comparecimento" como irmão, mas sem for (e a textarea sem id): o rótulo não está associado; nome acessível vazio. Sem predicado na referência; medido em tela-b/vistorias/conferir-auditoria.mjs.
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
  "cardId": "C-c182a7965c5501dddcbea713bd3cc24f2ae44d7b839920214467b38a6dade274",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c24e9c1e8c943436f0273fe99fa344669f751e606813223b8a697ee8a31cc4c3

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
  "cardId": "C-c24e9c1e8c943436f0273fe99fa344669f751e606813223b8a697ee8a31cc4c3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c25c26c66f2d8c95b37c8beca6789c639a7ee75b3562e4cd2038182b997dc24d

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Cada número de página é um <li> aninhado diretamente em outro <li> (li > li > a), sem <ul>/<ol> pai ([ferramenta citada] listitem).

Esperado: Itens de lista com pai ul/ol válido.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
- `F-086` → identificador devolvido por ferramenta (sem arquivo)
- `F-087` → identificador devolvido por ferramenta (sem arquivo)
- `F-088` → identificador devolvido por ferramenta (sem arquivo)
- `F-089` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c25c26c66f2d8c95b37c8beca6789c639a7ee75b3562e4cd2038182b997dc24d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c4ad8ebefded3ffc4f3d865022a65ae5b32e93bb865a1959853852d2647ed473

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
  "cardId": "C-c4ad8ebefded3ffc4f3d865022a65ae5b32e93bb865a1959853852d2647ed473",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c690d60c168852c556c4a94a523d0b2a1a4560c4e8ce0bea29e9e0641da3961c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: As opções da lista aberta do filtro (por exemplo "Barra Nova") são div.br-radio com <label> sem input associado, não focáveis e sem papel (radio/option). Só podem ser escolhidas com o mouse.

Esperado: As opções devem ser controles de formulário reais (radio/checkbox) ou ter role=option e ser operáveis por teclado.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click filtro "Cidade"

Regra declarada: wcag:2.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:pnip-filter-panel .br-select label" — Seletor não resolvido

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
  "cardId": "C-c690d60c168852c556c4a94a523d0b2a1a4560c4e8ce0bea29e9e0641da3961c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c6d85fe53cfc8e7ee21d0413662672a614a0fccae1cea9e9e5e6128d4cef7714

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
  "cardId": "C-c6d85fe53cfc8e7ee21d0413662672a614a0fccae1cea9e9e5e6128d4cef7714",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c703e0e5f319cbdf3742dee9096765dc9c6847cb2db9f89f3dcbe7af873ebf24

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O contêiner tem role="menu", mas não tem nenhum descendente role="menuitem": os filhos são texto, um span clicável e um button "Sair" comum.

Esperado: Ou usar o padrão menu completo (menuitem e setas) ou remover role="menu" e usar uma lista ou região simples.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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
  "cardId": "C-c703e0e5f319cbdf3742dee9096765dc9c6847cb2db9f89f3dcbe7af873ebf24",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c7cb74b2741bdc553a7d7785158b048c9ca980eba0f02012e4a5693ae8b26db4

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Na janela de 1280px a tabela tem 1272px dentro de .br-table de 1096px (overflow visible); a página ganha rolagem horizontal (scrollWidth 1364 > 1280) e o botão "Notificar" (sino) fica em x=1258–1336, cortado na borda da janela.

Esperado: Tabela contida no seu contêiner (rolagem própria ou layout responsivo), sem rolagem horizontal da página em 1280px.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-c7cb74b2741bdc553a7d7785158b048c9ca980eba0f02012e4a5693ae8b26db4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c8fd031b0dca953ed69445c3e784c4db725c23878b17f548c71c1c23f406ad0a

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
  "cardId": "C-c8fd031b0dca953ed69445c3e784c4db725c23878b17f548c71c1c23f406ad0a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cb809ab5eb600528cf6658f53390a770b4186bc857d2eb9bdaefa0d9bbd2de76

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Container com role="menu" contém <button> "Sair" e spans sem role="menuitem" ([ferramenta citada] aria-required-children).

Esperado: role="menu" apenas com itens role="menuitem", ou remover o papel menu.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click #avatar-dropdown-trigger

Regra declarada: wcag:4.1.2

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
- `F-231` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cb809ab5eb600528cf6658f53390a770b4186bc857d2eb9bdaefa0d9bbd2de76",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cbc1a39d254cf252906c3a1a2acf00a1c906183d4b64f33837904552b0b9eaad

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O <object type="application/pdf"> do visualizador não tem title, aria-label nem conteúdo alternativo interno.

Esperado: O objeto incorporado deve ter alternativa textual ou nome, além de um link alternativo para baixar o arquivo.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "1" da paginação 3. click br-button[icon=eye] da linha 1 (Coral Mansa IV, Vistoria agendada) 4. click "boleto.pdf"

Regra declarada: wcag:1.1.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:object[type=\"application/pdf\"]" — Seletor não resolvido

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
  "cardId": "C-cbc1a39d254cf252906c3a1a2acf00a1c906183d4b64f33837904552b0b9eaad",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cd932b28ea6cb2fc2632122cdee91d3cc262da5710d9c6a8f263f9342ea19524

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
  "cardId": "C-cd932b28ea6cb2fc2632122cdee91d3cc262da5710d9c6a8f263f9342ea19524",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d15eb68a15f63e10b21a562668a38f3f20944f3b9860e82eda1a0b19bba5b870

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Cabeçalho da coluna de ações é um <th> vazio ([ferramenta citada] empty-table-header).

Esperado: Cabeçalho de coluna com texto (ex.: "Ações", podendo ser visualmente oculto).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

Regra declarada: [regra citada]

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-072` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-114` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d15eb68a15f63e10b21a562668a38f3f20944f3b9860e82eda1a0b19bba5b870",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d21f7b22a1a44e94a23c8faba6e6e5ab06cf320211711b2f225b05b34e2d5f5f

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
  "cardId": "C-d21f7b22a1a44e94a23c8faba6e6e5ab06cf320211711b2f225b05b34e2d5f5f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d3ec926ce8ed03b25bf4d08e5f285e556d38655e981c5c733057e02944d78265

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
  "cardId": "C-d3ec926ce8ed03b25bf4d08e5f285e556d38655e981c5c733057e02944d78265",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d4014b6a0c674538276dc2d415b1bc413eac0c3a3baa8e4d805418f7393588c4

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
  "cardId": "C-d4014b6a0c674538276dc2d415b1bc413eac0c3a3baa8e4d805418f7393588c4",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d4f4c234252fabd5e6f6d22f85260b68f739e7f15c36b5e4683e786c7b1f3e60

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
  "cardId": "C-d4f4c234252fabd5e6f6d22f85260b68f739e7f15c36b5e4683e786c7b1f3e60",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d5d2c23ae86adf392eb1a236026bfcdb5d24ee8440f528ce11216064784ee4bb

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
  "cardId": "C-d5d2c23ae86adf392eb1a236026bfcdb5d24ee8440f528ce11216064784ee4bb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d8ad436c1dbdf625c6e265d732206cfb871b9a0cc0f54713a76f53a3bca20ae9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Em 'Editar dados da vistoria', ao clicar Salvar os campos Nome do vistoriador, Registro e E-mail do vistoriador — que estão desabilitados — exibem 'Campo obrigatório' e o diálogo 'Preencha todos os campos obrigatórios.' impede salvar; o usuário não consegue corrigir campos desabilitados.

Esperado: Campos desabilitados não bloqueiam o envio com erro de preenchimento obrigatório, ou passam a ser editáveis/ter instrução de como corrigir.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR 2. click botão 'Agendar' da linha 1 3. click br-button[label=Editar] 4. click br-button[label=Salvar]

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:br-input[formcontrolname=\"nomeVistoriador\"], br-input[formcontrolname=\"numConselhoClasseVistoriador\"], br-input[formcontrolname=\"emailVistoriador\"]" — Seletor não resolvido

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
  "cardId": "C-d8ad436c1dbdf625c6e265d732206cfb871b9a0cc0f54713a76f53a3bca20ae9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d8e2232602a3dbae56e99c3310421b7184cb0e517eb36f89fab8dc835d182138

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
  "cardId": "C-d8e2232602a3dbae56e99c3310421b7184cb0e517eb36f89fab8dc835d182138",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d97a085bc48e2d07a3678920817f207e69df922af34e304769d1a239a6756dd3

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
  "cardId": "C-d97a085bc48e2d07a3678920817f207e69df922af34e304769d1a239a6756dd3",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-da527cf8c90a8ab3d6e1bb258d29fce84b7a621d48fc3bf1df0f44cd3889faff

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
  "cardId": "C-da527cf8c90a8ab3d6e1bb258d29fce84b7a621d48fc3bf1df0f44cd3889faff",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-db999604471b8f2fa4ff57636e58f9cae7474ccf2866de55717f3e725edecdc7

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
  "cardId": "C-db999604471b8f2fa4ff57636e58f9cae7474ccf2866de55717f3e725edecdc7",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dd33114c289d7dfe30b84f6e832d15a116cb0720d94afcd650ed9286ed92f1ce

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
  "cardId": "C-dd33114c289d7dfe30b84f6e832d15a116cb0720d94afcd650ed9286ed92f1ce",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dda759ce545b011e3348fe884946aa792d3c8b353c7b83a82a289a3f45971430

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão de ícone 'olho' (abre o detalhe da vistoria) renderiza <button aria-label=""> sem texto, title ou aria-label: nome acessível vazio ([ferramenta citada] button-name, 10 instâncias por página; também na aba Concluídos).

Esperado: Cada botão de ação tem nome acessível que descreve a ação (ex.: 'Visualizar vistoria').

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
- `S-page-009 FAM-a220ec5e8010` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dda759ce545b011e3348fe884946aa792d3c8b353c7b83a82a289a3f45971430",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ddf8cae067bbb0ffebe5d74f83403d6053a122895ed73b50d68bc386e788d436

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
  "cardId": "C-ddf8cae067bbb0ffebe5d74f83403d6053a122895ed73b50d68bc386e788d436",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-de46d1d70fd77aad4d4e821c4ade4634177fbdc6f08d58e90f8243c2a436d6df

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
  "cardId": "C-de46d1d70fd77aad4d4e821c4ade4634177fbdc6f08d58e90f8243c2a436d6df",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-de5b2816ef9d183cea8279efce4f80c807a92e76d771f0be0640b064cb8d4afb

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
  "cardId": "C-de5b2816ef9d183cea8279efce4f80c807a92e76d771f0be0640b064cb8d4afb",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-dea0ce2ff1d0abf79e3f869ec49d7ec87d1529fdccb85a9bf0924b119904f255

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Na rota agendar-vistoria a hierarquia começa em h3 ('Programa Nacional de Regularização...') seguida de h4; não há h1 nem h2.

Esperado: Hierarquia de cabeçalhos iniciando em h1, sem saltos de nível.

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR 2. click botão 'Agendar' da linha 1 (br-button[icon=calendar])

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-100` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-010` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-011` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-014` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dea0ce2ff1d0abf79e3f869ec49d7ec87d1529fdccb85a9bf0924b119904f255",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-df4900b20b9f789c24279222aadc2fa7e1f4f8a9d35ebc099776f31b2778ff79

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: As opções da lista de embarcações no modal de troca são divs com cursor:pointer, tabIndex -1 e sem role. Do campo de busca, o Tab vai direto aos botões Cancelar e Trocar.

Esperado: As opções devem ser selecionáveis por teclado (listbox/option ou radios).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "2" da paginação 3. click br-button[icon=eye] da linha "Aurora do Norte III" (Vistoria preenchida) 4. click "Trocar embarcação da vistoria" 5. Tab ×3

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
  "cardId": "C-df4900b20b9f789c24279222aadc2fa7e1f4f8a9d35ebc099776f31b2778ff79",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-df9aadca620535f69ef9bcfbc4e20380ea08650e3211405a7d4fa033bcaccd38

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
  "cardId": "C-df9aadca620535f69ef9bcfbc4e20380ea08650e3211405a7d4fa033bcaccd38",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e082b7b80a1876a2be99f8c2ade55ded1da64edef06d92a45aef69d3ca72399e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O campo de busca (input#search no shadow DOM) não tem label. O único rótulo é o placeholder "Pesquise aqui ...", que some ao digitar.

Esperado: O campo deve ter label associado (visível ou aria-label) além do placeholder.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-e082b7b80a1876a2be99f8c2ade55ded1da64edef06d92a45aef69d3ca72399e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e11d33b544d538f108943c1e8174b6f8c1702954fa426c429cf64fc0aad65176

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O selo de status "Vistoria agendada" tem texto branco sobre fundo rgb(79,151,209), com contraste de 3,14:1 (14px, peso 500).

Esperado: Contraste mínimo de 4,5:1.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-e11d33b544d538f108943c1e8174b6f8c1702954fa426c429cf64fc0aad65176",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e25eab12884d126063c3116bfbd789a5c02ff351a9c48aca3d8197f719fa068a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: O campo obrigatório 'Boleto da ART' usa um <div class='upload-file'> com cursor pointer ('Selecione o(s) arquivo(s)'); o input file #boletoResponsabilidadeTecnica tem display:none e o label não está associado. O controle não recebe foco e não pode ser acionado por teclado (o mesmo componente aparece 12 vezes no detalhe de vistoria preenchida).

Esperado: Envio de arquivo operável por teclado, com rótulo associado (componente Upload do DS).

Janela: 1280×900 · interações desde o carregamento: 1. click #AGENDAR 2. click botão 'Agendar' da linha 1 (br-button[icon=calendar])

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-014` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e25eab12884d126063c3116bfbd789a5c02ff351a9c48aca3d8197f719fa068a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e3f930ddcfdf89ce24ca30278f0e5c941bec84084f5a57009ac66b061505c887

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botões "visualizar" (ícone olho) das linhas: <button> interno com aria-label="" e só um ícone; nome acessível vazio ([ferramenta citada] button-name).

Esperado: Cada botão de visualizar com nome acessível (ex.: "Visualizar vistoria").

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
- `F-050` → identificador devolvido por ferramenta (sem arquivo)
- `F-051` → identificador devolvido por ferramenta (sem arquivo)
- `F-059` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-142` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e3f930ddcfdf89ce24ca30278f0e5c941bec84084f5a57009ac66b061505c887",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e45e1f3757dc1e381b7905307174dc6f68bcfcffbd217b82fbeab3a385a8c854

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: O botão 'Menu' (#navigation no shadow DOM do br-header) aponta para data-target='#main-navigation', que não existe na página; ao clicar nada abre e o botão não tem aria-expanded.

Esperado: O botão Menu abre o menu principal (componente Menu do DS) e expõe o estado expandido, ou não é exibido.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e45e1f3757dc1e381b7905307174dc6f68bcfcffbd217b82fbeab3a385a8c854",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e58042a3af986f9e5b873d41f2b15ccddd3cc6acc2a0cd4eef08bee67ded1e98

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: Inicial 'U' do avatar: #ffffff sobre #ff8c00, 24,19px negrito = 2,33:1 (texto grande).

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

- `S-page-001 P-01` → identificador devolvido por ferramenta (sem arquivo)
- `V-001 (sem predicado; medido no navegador)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e58042a3af986f9e5b873d41f2b15ccddd3cc6acc2a0cd4eef08bee67ded1e98",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e89e9965c7d474e90f2c812733d1b18e11ab6a9fe660d6a904fa22e3648bf5c6

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O diálogo do visualizador de PDF (role=dialog) tem aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com display:none. O diálogo fica sem nome acessível.

Esperado: O diálogo deve ter nome acessível, por exemplo "Boleto da ART – boleto.pdf".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "1" da paginação 3. click br-button[icon=eye] da linha 1 (Coral Mansa IV, Vistoria agendada) 4. click "boleto.pdf"

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
  "cardId": "C-e89e9965c7d474e90f2c812733d1b18e11ab6a9fe660d6a904fa22e3648bf5c6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e9f4c254815ee6cf8b2e6325cb5e9f50d0e8eb0db1240ca83fdf1a7c8ba43ed1

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
  "cardId": "C-e9f4c254815ee6cf8b2e6325cb5e9f50d0e8eb0db1240ca83fdf1a7c8ba43ed1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ea1e7fa1d2a18bf13ba615376c2a806388c77508c9d1caeccd6b1f210ebd12b0

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
  "cardId": "C-ea1e7fa1d2a18bf13ba615376c2a806388c77508c9d1caeccd6b1f210ebd12b0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-eb5b07b41a7fbac8bced6a3154fb0f7aab97dc5bd1f08e76c8763a0d72d4f1ad

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
  "cardId": "C-eb5b07b41a7fbac8bced6a3154fb0f7aab97dc5bd1f08e76c8763a0d72d4f1ad",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ec324c7ed1277b43f10e6e18e891a7ef3c558fed9da6367706eb836c112bac8a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Tag 'Nenhum filtro de data aplicado': texto #ffffff sobre #c5d4eb, 14px peso 500 = 1,5:1.

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
  "cardId": "C-ec324c7ed1277b43f10e6e18e891a7ef3c558fed9da6367706eb836c112bac8a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f036f038e0008bc382af256f9eb35cec99b253377dc37454dd6fd3f0ad66e291

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@modal

Observado: No agendamento, a área "Selecione o(s) arquivo(s)" é um <div> com cursor:pointer, tabIndex=-1, sem role; o <input type="file"> está com display:none. Não dá para anexar o boleto ART (obrigatório) pelo teclado.

Esperado: Upload acionável por teclado (br-upload do DS ou input/botão focável).

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click aba "Agendar" 3. click "Agendar" da linha 1

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

- `S-page-008` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f036f038e0008bc382af256f9eb35cec99b253377dc37454dd6fd3f0ad66e291",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f07895ed4134832880a4622f97f1a149c0aad6d1dafa046f61576d32fabe1e90

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena a-decidir:1280x900

Observado: "Trocar unidade" é um <span> com cursor:pointer, sem role e sem tabindex; não recebe foco pelo teclado.

Esperado: Ação implementada como botão/link focável.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click #avatar-dropdown-trigger

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
  "cardId": "C-f07895ed4134832880a4622f97f1a149c0aad6d1dafa046f61576d32fabe1e90",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f1eb30d13a06a09db972d091e0ad78bb9c933200992b81e1511d475ef924be5c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: Botão "Buscar" com style="margin-top: -38px" (fora da escala de espaçamento).

Esperado: Valor da escala de tokens do DS.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa

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
  "cardId": "C-f1eb30d13a06a09db972d091e0ad78bb9c933200992b81e1511d475ef924be5c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f24accf4f037bb587bb31dab821d5fd024ab8d0355a8f0cc79a649b8664406ef

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
  "cardId": "C-f24accf4f037bb587bb31dab821d5fd024ab8d0355a8f0cc79a649b8664406ef",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f569e8512f77ed7aba9ea9b2cf840ef3e319bc364220da8749311e0121b0a763

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
  "cardId": "C-f569e8512f77ed7aba9ea9b2cf840ef3e319bc364220da8749311e0121b0a763",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f70d32ed8d9a1cae35b485374b2de0f4f4961a70cbe4d2dbac2b618b962ae0f0

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
  "cardId": "C-f70d32ed8d9a1cae35b485374b2de0f4f4961a70cbe4d2dbac2b618b962ae0f0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f963e4c66bf987afae6b5b76cd7336ad5cefe001d49648291c1a3261ec4ab396

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
  "cardId": "C-f963e4c66bf987afae6b5b76cd7336ad5cefe001d49648291c1a3261ec4ab396",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fab1b6ca824bac0c110f8a0c535fb8739d1966b744ead18ec2127efec3607cf5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: No diálogo "Atribuir Vistoriador", o <select> de vistoriadores não tem rótulo associado; "Selecione um Vistoriador" é texto solto ([ferramenta citada] select-name).

Esperado: Select com rótulo associado.

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click botão "Atribuir vistoriador" (user-plus) da linha 1

Regra declarada: [regra citada]

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: segmento-nao-resolvido: o seletor não resolve em nenhuma cena da janela (1280x900@inicial, 1280x900@detalhe-menu, 1280x900@modal)

### Sujeitos

- "unresolved:#swal2-select" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-007` → identificador devolvido por ferramenta (sem arquivo)
- `F-217` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fab1b6ca824bac0c110f8a0c535fb8739d1966b744ead18ec2127efec3607cf5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fd61f07ca88bd2c41eda99e1bac8cff5b8ebde4703c63b9470c0b8cc14a4d8ad

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900@inicial

Observado: O botão de fechar do visualizador de PDF tem aria-label="Close this dialog", em inglês, numa página com lang="pt-br" e sem atributo lang no trecho.

Esperado: O rótulo deve estar em português ("Fechar") ou ter lang="en".

Janela: 1280×900 · interações desde o carregamento: 1. load http://screens:3300/pnip/portal-mpa/vistorias?mock-perfil=mpa 2. click a.page "1" da paginação 3. click br-button[icon=eye] da linha 1 (Coral Mansa IV, Vistoria agendada) 4. click "boleto.pdf"

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
  "cardId": "C-fd61f07ca88bd2c41eda99e1bac8cff5b8ebde4703c63b9470c0b8cc14a4d8ad",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
