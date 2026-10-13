# Revisão semântica — pacote fechado

Versão: flow-semantic-1.5.0 · 19 cartões únicos · 0 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 0 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 3 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 61 sujeitos · 19 cartão(ões) sem evidência verificada · 17 com unidade candidata · estimativa **114 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 6 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-199e6c6e6c624e9940b71903b676604fcc0902c8bfda32296c211fbd5277efd7

Estado: concluído

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Nenhum elemento .br-header nem web component <br-header> no documento (DOM claro e shadow roots abertos).

Esperado: Uma Área de Cabeçalho com o componente Header (.br-header ou <br-header>), como o Template Base exige.

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: ds:page-header

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "Ir para o conteúdo (1/1) 1 gov.br Página inicial"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-199e6c6e6c624e9940b71903b676604fcc0902c8bfda32296c211fbd5277efd7",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: nenhum .br-header nem <br-header>; o único cabeçalho é <header class=barra-superior> com um link 'gov.br' próprio, fora do componente Header do DS. Alegação correta; sujeito <html> e nenhuma candidata oferecida. Cabe a unidade P-* de área de cabeçalho do Template Base (provavelmente P-01, a de cabeçalho).",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Nenhum elemento .br-header nem web component <br-header> no documento (DOM claro e shadow roots abertos).",
      "subjects": [
        ""
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "defeito-novo-correto",
      "verdict": "novel"
    }
  ]
}
````

## C-1ce32bfbede45cd2905c985c6afa8fa825d677b3598ef09a379a825878a5c3ed

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Após clicar em Página 2, o link ativo só se distingue pela classe/estilo; não há aria-current.

Esperado: A página atual deve ter aria-current="page".

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em 'Página 2'

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>div:nth-of-type(1)>div>main>section>div>div:nth-of-type(2)>nav>a:nth-of-type(1)" — <a> "Página 1"

### Unidades candidatas (não são crédito)

- U-6b2335b7d8c3ff70b8ef3ca3533d672b6a1a6611d3db662a510e1380f65145a5 — A-07 · sempre · cena 1280x900 · <nav> "Paginação de solicitações anteriores": Estrato E · variante links-fora-de-lista. Os links de página são âncoras adjacentes soltas dentro do <nav>, sem o <ul>/<li> do exemplo oficial: nada além de espaço os separa. Sem predicado na referência (nenhuma espécie mede o elemento pai); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-6db298382eaecec8e3346bd8ea72a635adfaa9c2ebfbbe38cb860faff6759a16 — A-05 · sempre · cena 1280x900 · <div> "Solicitações anteriores Protocolo Serviço Data S": Estrato E · variante caption-removido. A tabela de solicitações anteriores não tem <caption>; o título visível é um div da barra superior do componente, fora do <table>. Sem predicado na referência (nenhuma espécie mede ausência de elemento filho); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-fa46b3b01953095c45ccd4ee7da378bc7eaab3a1936698faa3f365516a5be29e — A-12 · sempre · cena 1280x900 · <nav> "Paginação de solicitações anteriores": Estrato S · variante aria-removido. A página ativa da paginação é marcada só pela classe `active`: nenhum link carrega aria-current="page", o estado que o próprio DS escreve em tempo de execução. A trilha de navegação da mesma tela marca a página atual com aria-current.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: aria-current. Medido: ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-10-12T14-24-15-958Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1ce32bfbede45cd2905c985c6afa8fa825d677b3598ef09a379a825878a5c3ed",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido após clicar em 'Página 2': os três <a class=page> (Página 1/2/3) não têm aria-current; só a classe active passou para Página 2. Nenhum link de paginação carrega aria-current=page → A-12. Observação: o elemento nomeado é 'Página 1' (que também não tem aria-current) enquanto a frase fala do link ativo; a unidade cobre os links da paginação.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Após clicar em Página 2, o link ativo só se distingue pela classe/estilo; não há aria-current.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>section>div>div:nth-of-type(2)>nav>a:nth-of-type(1)"
      ],
      "unitIds": [
        "U-fa46b3b01953095c45ccd4ee7da378bc7eaab3a1936698faa3f365516a5be29e"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-1fdaa15df182cc4351a93cce0954a109a28c4fbe4540b71cdabaecd826a289b3

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página não tem rodapé: nenhum .br-footer, <br-footer> ou <footer>.

Esperado: Template Base com Área de Rodapé ocupada pelo componente Footer.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: ds-page-footer

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body" — <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial"

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001:F-004` → identificador devolvido por ferramenta (sem arquivo)
- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1fdaa15df182cc4351a93cce0954a109a28c4fbe4540b71cdabaecd826a289b3",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: document.querySelectorAll('.br-footer, br-footer, footer, [role=contentinfo]').length = 0 em todos os estados testados (inicial, envio vazio, diálogo aberto). Página sem área de rodapé → P-02.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A página não tem rodapé: nenhum .br-footer, <br-footer> ou <footer>.",
      "subjects": [
        "body"
      ],
      "unitIds": [
        "U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-2601ea62fc36491f8557e416ad4d5e04691ec1beaccc289031f1c9ad70167a27

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botões de mês anterior/seguinte do calendário só têm ícone, sem texto, aria-label ou title.

Esperado: Botões com nome acessível (ex.: 'Mês anterior', 'Próximo mês').

Janela: 1280×900 · interações desde o carregamento: 1. click #data-preferencial-btn

Regra declarada: button-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(1)>button" — <button> · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(2)>button" — <button> · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002:F-010` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-002:F-011` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2601ea62fc36491f8557e416ad4d5e04691ec1beaccc289031f1c9ad70167a27",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido com o calendário aberto: as setas são <span class=flatpickr-prev-month/next-month><button class='br-button circle small'><i class='fas fa-chevron-left/right'></i></button></span>, sem nome. Esse markup vem da config prevArrow/nextArrow do BRDateTimePicker no core.js do DS (internos do datepicker), não da página. Defeito do DS, não da página.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Botões de mês anterior/seguinte do calendário só têm ícone, sem texto, aria-label ou title.",
      "subjects": [
        "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(1)>button",
        "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(2)>button"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-5080eaa60f410257d59c0fde5f250637f00351703b6774fe2027cb330d8fb268

Estado: concluído

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Form elements should have a visible label

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:label-title-only

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>input" — <input#forma-presencial>

### Unidades candidatas (não são crédito)

- U-471fd34bfed8d491133fe60cfe6233aa00117fefb796768495ff7598fa7a6a5e — A-09 · sempre · cena 1280x900 · <input#forma-presencial>: Estrato S · variante label-sem-for, na primeira opção do grupo (convenção registrada em tela-a/construcao.md). O <label> de "Presencial" não tem for: o radio fica sem nome acessível e clicar no texto não o marca. As outras duas opções estão associadas.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: for, aria-label, aria-labelledby. Medido: ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5080eaa60f410257d59c0fde5f250637f00351703b6774fe2027cb330d8fb268",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Mesma execução (linha de base), mesmo elemento #forma-presencial e mesmo estado do cartão C-beb72d8b955a (axe label). label-title-only diz o mesmo: o radio não tem rótulo associado (label sem for, sem aria-label/title). Medido: label do Presencial sem for; clique no texto não marca o radio. Mesma afirmação → duplicada (A-09).",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Form elements should have a visible label",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>input"
      ],
      "unitIds": [
        "U-471fd34bfed8d491133fe60cfe6233aa00117fefb796768495ff7598fa7a6a5e"
      ],
      "citation": "uncertain",
      "decisao": "duplicada",
      "duplicateOf": {
        "cardId": "C-beb72d8b955a7a0a44fc4274ae15ffec2bfc8e46edd11a43b1a96a5a581d8af5",
        "atomId": "a1"
      },
      "verdict": "reference"
    }
  ]
}
````

## C-54c4618254979e3d86271d889e1b11b9e7451504a17373cf019397c9736c4b38

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: tabindex="1": é o primeiro item da ordem de tabulação, antes do link 'Ir para o conteúdo' e do cabeçalho.

Esperado: Sem tabindex positivo; a ordem de foco deve seguir a ordem visual (tabindex=0 ou omitido).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button" — <button> "Selecione o arquivo" · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-79d98a860b58b27827eded4bd832cd76e157230c4facd5e7fd6ac7fea5842cf9 — A-10 · sempre · cena 1280x900 · <div> "Documentos comprobatórios (opcional) Selecione o": Estrato S · variante apoio-sem-arraste. O upload aceita arrastar e soltar (comportamento do core.js), mas o texto de apoio informa só formato e tamanho — não diz que o arquivo pode ser arrastado. Sem predicado na referência (nenhuma espécie mede texto); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b3362afca6c4004dc1bfe74c6ea6d81e8a2e500a8eb931d94b772c90ee1746bd — A-02 · sempre · cena 1280x900 · <button> "Selecione o arquivo": Estrato K · variante tabindex-positivo. O botão do upload tem tabindex=1: o primeiro Tab da página cai nele, antes do atalho para o conteúdo e de todos os campos que o precedem no formulário. Sem predicado na referência (as espécies existentes medem ausência de atributo, não valor); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-10-12T14-22-35-742Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-54c4618254979e3d86271d889e1b11b9e7451504a17373cf019397c9736c4b38",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: button.upload-button tem tabindex=1 (posto pelo código da página: upload-button.tabIndex=1, não pelo core.js). Primeiro Tab da página: BUTTON.upload-button 'Selecione o arquivo'; só o segundo Tab vai ao 'Ir para o conteúdo', depois gov.br e a trilha. Corresponde a A-02.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "tabindex=\"1\": é o primeiro item da ordem de tabulação, antes do link 'Ir para o conteúdo' e do cabeçalho.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button"
      ],
      "unitIds": [
        "U-b3362afca6c4004dc1bfe74c6ea6d81e8a2e500a8eb931d94b772c90ee1746bd"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-6d2657e55492162b873ed1faf850edc8297b4b0395ed60fd5c9b1993f47088a8

Estado: concluído

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: color: rgb(51, 67, 51) (#334333) não corresponde a nenhum token do DS

Esperado: Valor de token do DS; mais próximo: --green-cool-70 (#37493b, distância RGB 10.77)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: ds:token-color

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>div:nth-of-type(1)>div>div>div" — <div> "Descartar solicitação? Os dados preenchidos nest"

### Unidades candidatas (não são crédito)

- U-07d298f4df34c286740799c74d0ebada13b65d950a4b6ad514d6f6e090153e4d — A-03 · dialogo-aberto · cena 1280x900 · <div> "Descartar solicitação? Os dados preenchidos nest": Estrato T · variante cor-fora-da-paleta. O texto do diálogo usa #334333 — a cor de texto do DS (#333333) com o canal verde acrescido de 16 —, valor que não corresponde a token algum.
  - estados em que a unidade existe: dialogo-aberto
  - predicado de aceitação: estilo-computado sustenta em dialogo-aberto — alguma propriedade de [color] em {rgb(51, 67, 51)}. Medido: color=rgb(51, 67, 51)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f29a7aeeab28c9d4933141aff94ee3d84c368205c595930db83ceec28076ec77 — A-01 · dialogo-aberto · cena 1280x900 · <div> "Descartar solicitação? Os dados preenchidos nest": Estrato K · variante fecha-sem-devolver. Ao fechar o diálogo de descarte (X, Continuar preenchendo ou Esc) o foco não volta ao botão Cancelar que o abriu: cai em <body>. Abrir o diálogo leva o foco para dentro dele, como deve. Sem predicado na referência — o observável exige fechar o diálogo e ler document.activeElement; está medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6d2657e55492162b873ed1faf850edc8297b4b0395ed60fd5c9b1993f47088a8",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido com o diálogo de descarte aberto (clique em Cancelar): getComputedStyle(color) = rgb(51, 67, 51) (#334333) em .br-modal-header, .modal-title, .br-modal-body e .br-modal-footer do .br-modal.dialogo-descarte. Não é token do DS (texto do DS = #333333) → A-03.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "color: rgb(51, 67, 51) (#334333) não corresponde a nenhum token do DS",
      "subjects": [
        "body>div:nth-of-type(1)>div>div>div"
      ],
      "unitIds": [
        "U-07d298f4df34c286740799c74d0ebada13b65d950a4b6ad514d6f6e090153e4d"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-6dd16a4576f4f46c412ed64e066a9bae17fbd7a3ef988ab962d60a3730ddf6b4

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com o calendário aberto, os dias têm tabindex="1" (valor positivo).

Esperado: Nenhum elemento com tabindex maior que 0; ordem de foco pela ordem do DOM (WCAG 2.4.3).

Janela: 1280×900 · interações desde o carregamento: 1. click #data-preferencial-btn

Regra declarada: tabindex

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(1)" — <span> "Setembro 27, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(10)" — <span> "Outubro 6, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(11)" — <span> "Outubro 7, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(12)" — <span> "Outubro 8, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(13)" — <span> "Outubro 9, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(14)" — <span> "Outubro 10, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(15)" — <span> "Outubro 11, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(16)" — <span> "Outubro 12, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(17)" — <span> "Outubro 13, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(18)" — <span> "Outubro 14, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(19)" — <span> "Outubro 15, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(2)" — <span> "Setembro 28, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(20)" — <span> "Outubro 16, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(21)" — <span> "Outubro 17, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(22)" — <span> "Outubro 18, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(23)" — <span> "Outubro 19, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(24)" — <span> "Outubro 20, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(25)" — <span> "Outubro 21, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(26)" — <span> "Outubro 22, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(27)" — <span> "Outubro 23, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(28)" — <span> "Outubro 24, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(29)" — <span> "Outubro 25, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(3)" — <span> "Setembro 29, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(30)" — <span> "Outubro 26, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(31)" — <span> "Outubro 27, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(32)" — <span> "Outubro 28, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(33)" — <span> "Outubro 29, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(34)" — <span> "Outubro 30, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(35)" — <span> "Outubro 31, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(36)" — <span> "Novembro 1, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(37)" — <span> "Novembro 2, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(38)" — <span> "Novembro 3, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(39)" — <span> "Novembro 4, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(4)" — <span> "Setembro 30, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(40)" — <span> "Novembro 5, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(41)" — <span> "Novembro 6, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(42)" — <span> "Novembro 7, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(5)" — <span> "Outubro 1, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(6)" — <span> "Outubro 2, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(7)" — <span> "Outubro 3, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(8)" — <span> "Outubro 4, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(9)" — <span> "Outubro 5, 2026" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002:F-016..F-048` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6dd16a4576f4f46c412ed64e066a9bae17fbd7a3ef988ab962d60a3730ddf6b4",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido com o calendário aberto: 42 .flatpickr-day com tabindex=1. Quem escreve é o core.js do DS (BRDateTimePicker onOpen: document.querySelectorAll('.flatpickr-day').forEach(e=>e.setAttribute('tabindex','1'))). Comportamento do DS, não defeito da página.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Com o calendário aberto, os dias têm tabindex=\"1\" (valor positivo).",
      "subjects": [
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(1)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(10)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(11)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(12)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(13)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(14)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(15)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(16)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(17)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(18)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(19)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(2)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(20)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(21)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(22)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(23)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(24)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(25)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(26)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(27)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(28)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(29)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(3)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(30)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(31)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(32)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(33)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(34)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(35)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(36)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(37)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(38)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(39)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(4)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(40)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(41)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(42)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(5)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(6)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(7)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(8)",
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(9)"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-73c58008008e4ceecd87b0f1cf3682c10f2a686ba87f5a75b00f3583a3e150c1

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O label 'Presencial' não tem atributo for; o rádio fica sem nome acessível e clicar no texto não o marca (confirmado: checked=false após o clique). Os outros dois rádios têm for.

Esperado: Label associado ao input (for=forma-presencial), dando nome acessível ao rádio e permitindo marcá-lo pelo rótulo.

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em Enviar com formulário vazio 2. Preencher campos 3. Clicar no texto 'Presencial'

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>input" — <input#forma-presencial>

### Unidades candidatas (não são crédito)

- U-471fd34bfed8d491133fe60cfe6233aa00117fefb796768495ff7598fa7a6a5e — A-09 · sempre · cena 1280x900 · <input#forma-presencial>: Estrato S · variante label-sem-for, na primeira opção do grupo (convenção registrada em tela-a/construcao.md). O <label> de "Presencial" não tem for: o radio fica sem nome acessível e clicar no texto não o marca. As outras duas opções estão associadas.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: for, aria-label, aria-labelledby. Medido: ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-10-12T14-22-35-742Z.yml` → não encontrado na evidência preservada da execução
- `/tmp/pw-0/page-2026-10-12T14-24-27-568Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-73c58008008e4ceecd87b0f1cf3682c10f2a686ba87f5a75b00f3583a3e150c1",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: clique no <label>Presencial</label> (sem for) → #forma-presencial.checked=false; o input não tem aria-label/aria-labelledby/title (axe: label). forma-video e forma-telefone têm label for. Corresponde a A-09.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O label 'Presencial' não tem atributo for; o rádio fica sem nome acessível e clicar no texto não o marca (confirmado: checked=false após o clique). Os outros dois rádios têm for.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>input"
      ],
      "unitIds": [
        "U-471fd34bfed8d491133fe60cfe6233aa00117fefb796768495ff7598fa7a6a5e"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-823a62f157f27207e68ba4bd08b169cee943ba446e86acea6a5e5c36ff105130

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O rádio 'Presencial' não tem nome acessível: o <label> não possui atributo for, e clicar nele não marca a opção. Os rádios vizinhos usam label for.

Esperado: Cada rádio com label associado (for/id) para nome acessível e clique no rótulo (WCAG 1.3.1/4.1.2; e-MAG 6.2).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>input" — <input#forma-presencial>

### Unidades candidatas (não são crédito)

- U-471fd34bfed8d491133fe60cfe6233aa00117fefb796768495ff7598fa7a6a5e — A-09 · sempre · cena 1280x900 · <input#forma-presencial>: Estrato S · variante label-sem-for, na primeira opção do grupo (convenção registrada em tela-a/construcao.md). O <label> de "Presencial" não tem for: o radio fica sem nome acessível e clicar no texto não o marca. As outras duas opções estão associadas.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: for, aria-label, aria-labelledby. Medido: ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001:F-006` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-002:F-012` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-823a62f157f27207e68ba4bd08b169cee943ba446e86acea6a5e5c36ff105130",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: o <label>Presencial</label> não tem for e o #forma-presencial não tem aria-label/aria-labelledby/title → sem nome acessível (axe: label em #forma-presencial). Clique no label: #forma-presencial.checked=false. Vizinhos forma-video e forma-telefone têm label for. Corresponde a A-09.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O rádio 'Presencial' não tem nome acessível: o <label> não possui atributo for, e clicar nele não marca a opção. Os rádios vizinhos usam label for.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>input"
      ],
      "unitIds": [
        "U-471fd34bfed8d491133fe60cfe6233aa00117fefb796768495ff7598fa7a6a5e"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-9240827c513ce434efe3eeed697daccf0121ec6c2b58c0cf60b3a831e49ed66a

Estado: concluído

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(2)>button" — <button> · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9240827c513ce434efe3eeed697daccf0121ec6c2b58c0cf60b3a831e49ed66a",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: os únicos botões só-ícone sem aria-label são as duas setas do calendário (<button class='br-button circle small'><i class='fas fa-chevron-*'></i></button>), ocultas até abrir o datepicker, geradas pelo core.js do DS (BRDateTimePicker prevArrow/nextArrow). Internos do DS, não defeito da página.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Elemento interativo apenas com ícone, sem aria-label (br-button)",
      "subjects": [
        "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(2)>button"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-a1beb9deeb08533d872fc9b87150b630ae46b72b818d5dfa375ff6ddc3199961

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão 'Selecione o arquivo' com aria-hidden="true" é focável e é o controle visível de upload; o input file real está com display:none. O botão aparece sem nome na árvore de acessibilidade.

Esperado: O controle de upload focável deve ficar exposto às tecnologias assistivas, sem aria-hidden, com nome acessível.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button" — <button> "Selecione o arquivo" · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-79d98a860b58b27827eded4bd832cd76e157230c4facd5e7fd6ac7fea5842cf9 — A-10 · sempre · cena 1280x900 · <div> "Documentos comprobatórios (opcional) Selecione o": Estrato S · variante apoio-sem-arraste. O upload aceita arrastar e soltar (comportamento do core.js), mas o texto de apoio informa só formato e tamanho — não diz que o arquivo pode ser arrastado. Sem predicado na referência (nenhuma espécie mede texto); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b3362afca6c4004dc1bfe74c6ea6d81e8a2e500a8eb931d94b772c90ee1746bd — A-02 · sempre · cena 1280x900 · <button> "Selecione o arquivo": Estrato K · variante tabindex-positivo. O botão do upload tem tabindex=1: o primeiro Tab da página cai nele, antes do atalho para o conteúdo e de todos os campos que o precedem no formulário. Sem predicado na referência (as espécies existentes medem ausência de atributo, não valor); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-10-12T14-22-35-742Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a1beb9deeb08533d872fc9b87150b630ae46b72b818d5dfa375ff6ddc3199961",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: button.upload-button tem aria-hidden=true; quem o cria assim é o core.js BRUpload do DS (setAttribute('aria-hidden','true'), input file escondido) — comportamento do DS, não da página. O que a página acrescenta é tabindex=1 (A-02), que este cartão não alega como defeito. Alegação principal (aria-hidden/sem nome) é do DS. Difícil: ratificar.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Botão 'Selecione o arquivo' com aria-hidden=\"true\" é focável e é o controle visível de upload; o input file real está com display:none. O botão aparece sem nome na árvore de acessibilidade.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-a7245e3161663c4fb75e78dd531f7d14e67c75a380e74fb2706973ef6c552558

Estado: concluído

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: br-button aplicado a <div>

Esperado: Elemento <button>

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: ds:structure-button-tag

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(1)>div>div:nth-of-type(1)>div" — <div> "Fechar a mensagem"

### Unidades candidatas (não são crédito)

- U-1891342c11520896b9770ea0694cf80073cc0559489c26af1c1a3f9af0dedee1 — A-11 · apos-envio-vazio · cena 1280x900 · <div> "Não foi possível enviar. Há 8 campo(s) obrigatór": Estrato S · variante icone-e-fechar-trocados. Na mensagem de retorno o botão Fechar está à esquerda e o ícone semântico à direita — o inverso da anatomia do componente. Sem predicado na referência (nenhuma espécie mede posição); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bbfc7654327714d26fe1c4acef5b74dd3a8b5e541d8cd630d6ebc6f9d63f8fc0 — A-06 · apos-envio-vazio · cena 1280x900 · <div> "Fechar a mensagem": Estrato E · variante nativo-para-div. O botão Fechar da mensagem de retorno é um <div role="button" tabindex="0"> com tratadores de Enter e Espaço, no lugar do <button> nativo do exemplo oficial. Continua operável por teclado e nomeado — o defeito é só o elemento.
  - estados em que a unidade existe: apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: classe-no-elemento sustenta em apos-envio-vazio, dialogo-aberto — o próprio <div> carrega a classe .br-button. Medido: <div class="br-button circle small"> | <div class="br-button circle small">
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a7245e3161663c4fb75e78dd531f7d14e67c75a380e74fb2706973ef6c552558",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido após Enviar com formulário vazio: na .br-message danger o fechar é <div class='br-button circle small' role=button tabindex=0 aria-label='Fechar a mensagem'>, não <button>. A classe br-button está num div → A-06. (A-11, ordem ícone/fechar, é outro defeito; não marcado.)",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "br-button aplicado a <div>",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(1)>div>div:nth-of-type(1)>div"
      ],
      "unitIds": [
        "U-bbfc7654327714d26fe1c4acef5b74dd3a8b5e541d8cd630d6ebc6f9d63f8fc0"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-b4dce5f44bc7ee190100e93986080c0d2182fcd3dcc49010dbff86046b4ddf2a

Estado: concluído

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Elemento interativo apenas com ícone, sem aria-label (br-button)

Esperado: aria-label descritivo (os exemplos oficiais de botão circular sempre trazem aria-label)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: emag:2.2

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(1)>button" — <button> · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b4dce5f44bc7ee190100e93986080c0d2182fcd3dcc49010dbff86046b4ddf2a",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: os únicos botões só-ícone sem aria-label na página são os dois <button class='br-button circle small'><i class='fas fa-chevron-left|right'></i></button> das setas do calendário, não renderizados até abrir o datepicker. São gerados pela config prevArrow/nextArrow do BRDateTimePicker no core.js do DS — internos do datepicker, não defeito da página.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Elemento interativo apenas com ícone, sem aria-label (br-button)",
      "subjects": [
        "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(1)>button"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-bc221a6cb10aeab605bcfc84971c26962f1d6c4df8ac3d33a0ee4585755680aa

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão 'Abrir calendário' com aria-hidden="true" e tabindex="-1": fora da ordem de tabulação e oculto das tecnologias assistivas.

Esperado: Botão do calendário acessível por teclado e exposto a leitores de tela, ou alternativa equivalente (WCAG 2.1.1/4.1.2).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(4)>div>div>div>button" — <button#data-preferencial-btn> "Abrir calendário" · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `DOM: button#data-preferencial-btn` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bc221a6cb10aeab605bcfc84971c26962f1d6c4df8ac3d33a0ee4585755680aa",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: #data-preferencial-btn tem aria-hidden=true e tabindex=-1. É o padrão do DatetimePicker do DS: o exemplo oficial traz o botão de calendário com tabindex=-1 aria-hidden=true, e o core.js (BRDateTimePicker, onOpen) reaplica aria-hidden=true/tab-index=-1 nos .br-button do componente; o campo de texto #data-preferencial continua focável e aceita digitação (alternativa por teclado). Comportamento do DS, não defeito da página. Difícil: ratificar.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Botão 'Abrir calendário' com aria-hidden=\"true\" e tabindex=\"-1\": fora da ordem de tabulação e oculto das tecnologias assistivas.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(4)>div>div>div>button"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-beb72d8b955a7a0a44fc4274ae15ffec2bfc8e46edd11a43b1a96a5a581d8af5

Estado: concluído

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Form elements must have labels

Esperado: (ausente)

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: axe:label

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>input" — <input#forma-presencial>

### Unidades candidatas (não são crédito)

- U-471fd34bfed8d491133fe60cfe6233aa00117fefb796768495ff7598fa7a6a5e — A-09 · sempre · cena 1280x900 · <input#forma-presencial>: Estrato S · variante label-sem-for, na primeira opção do grupo (convenção registrada em tela-a/construcao.md). O <label> de "Presencial" não tem for: o radio fica sem nome acessível e clicar no texto não o marca. As outras duas opções estão associadas.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: for, aria-label, aria-labelledby. Medido: ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-beb72d8b955a7a0a44fc4274ae15ffec2bfc8e46edd11a43b1a96a5a581d8af5",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: <div class=br-radio><input id=forma-presencial type=radio><label>Presencial</label></div> — o label não tem for, o input não tem aria-label/aria-labelledby/title; axe-core na página congelada reporta label em #forma-presencial. Clicar no texto 'Presencial' deixa checked=false. As outras opções (forma-video, forma-telefone) têm label for. Corresponde a A-09.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Form elements must have labels",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>input"
      ],
      "unitIds": [
        "U-471fd34bfed8d491133fe60cfe6233aa00117fefb796768495ff7598fa7a6a5e"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-cac4cff17b1e8e652cee2a6bbd10e3c47671d021d530ae63e2ed2f943e36de01

Estado: concluído

Contrato: determinístico — achado de uma linha de base da bateria, na janela do plano de estados; mesma contabilidade semântica do agente

Origem: linha de base determinística · cena 1280x900

Observado: Nenhum elemento .br-footer nem web component <br-footer> no documento (DOM claro e shadow roots abertos).

Esperado: Uma Área de Rodapé com o componente Footer (.br-footer ou <br-footer>), como o Template Base exige.

Janela: 1280×900 · interações desde o carregamento: 1. setup do plano de estados (4 passo(s))

Regra declarada: ds:page-footer

Reuso: condicionado à mesma evidência verificada, estado declarado e build original.

### Sujeitos

- "" — <html> "Ir para o conteúdo (1/1) 1 gov.br Página inicial"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cac4cff17b1e8e652cee2a6bbd10e3c47671d021d530ae63e2ed2f943e36de01",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: nenhum .br-footer, <br-footer>, <footer> ou [role=contentinfo] no documento (contagem 0). Alegação correta; sujeito <html> e nenhuma candidata oferecida. A unidade que cabe é P-02 (área de rodapé ausente).",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Nenhum elemento .br-footer nem web component <br-footer> no documento (DOM claro e shadow roots abertos).",
      "subjects": [
        ""
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "defeito-novo-correto",
      "verdict": "novel"
    }
  ]
}
````

## C-e0ed087f9a860ebcee2d53f9bebd3dccce0930708c9facca4a1fd4a3a730838d

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A dica diz 'Somente números, 11 dígitos', mas o valor '123' foi aceito sem erro e o formulário foi enviado com sucesso (mensagem 'Solicitação enviada').

Esperado: Valor fora do formato deve ser identificado como erro, com mensagem textual associada ao campo, e impedir o envio.

Janela: 1280×900 · interações desde o carregamento: 1. Preencher CPF com 123 2. Preencher demais campos obrigatórios 3. Clicar em Enviar

Regra declarada: wcag:3.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(2)>div:nth-of-type(2)>div>input" — <input#cpf> "00000000000"

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-10-12T14-24-27-568Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e0ed087f9a860ebcee2d53f9bebd3dccce0930708c9facca4a1fd4a3a730838d",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: preenchi todos os campos obrigatórios com CPF='123' e cliquei Enviar → retorno 'Solicitação enviada. Acompanhe o andamento em Solicitações anteriores.'; #cpf sem aria-invalid e sem mensagem de erro, embora a dica #cpf-apoio diga 'Somente números, 11 dígitos.' A validação só checa campo vazio. Nenhuma candidata oferecida cobre isso (só P-02).",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A dica diz 'Somente números, 11 dígitos', mas o valor '123' foi aceito sem erro e o formulário foi enviado com sucesso (mensagem 'Solicitação enviada').",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(2)>div:nth-of-type(2)>div>input"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "defeito-novo-correto",
      "verdict": "novel"
    }
  ]
}
````

## C-eaffce1cf7cb1b080b87ae0ab337d9ad890f3d0829ed26fd0184bcc8a864ad8d

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Botão 'Selecione o arquivo' com aria-hidden="true" e tabindex="1", portanto focável e oculto da árvore de acessibilidade; o input file nativo está com display:none.

Esperado: Controle de upload focável não deve ter aria-hidden e deve ser exposto a tecnologias assistivas (axe aria-hidden-focus; WCAG 4.1.2).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button" — <button> "Selecione o arquivo" · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-79d98a860b58b27827eded4bd832cd76e157230c4facd5e7fd6ac7fea5842cf9 — A-10 · sempre · cena 1280x900 · <div> "Documentos comprobatórios (opcional) Selecione o": Estrato S · variante apoio-sem-arraste. O upload aceita arrastar e soltar (comportamento do core.js), mas o texto de apoio informa só formato e tamanho — não diz que o arquivo pode ser arrastado. Sem predicado na referência (nenhuma espécie mede texto); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-b3362afca6c4004dc1bfe74c6ea6d81e8a2e500a8eb931d94b772c90ee1746bd — A-02 · sempre · cena 1280x900 · <button> "Selecione o arquivo": Estrato K · variante tabindex-positivo. O botão do upload tem tabindex=1: o primeiro Tab da página cai nele, antes do atalho para o conteúdo e de todos os campos que o precedem no formulário. Sem predicado na referência (as espécies existentes medem ausência de atributo, não valor); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001:F-005` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-002:F-009` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-eaffce1cf7cb1b080b87ae0ab337d9ad890f3d0829ed26fd0184bcc8a864ad8d",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Alegação principal (aria-hidden no botão de upload) é comportamento do DS: o core.js BRUpload cria o <button class=upload-button> com setAttribute('aria-hidden','true') e esconde o input file — não é defeito da página. Parte secundária procede: tabindex=1 é atribuído pelo código da página (upload-button.tabIndex=1) e o primeiro Tab cai nele (medido) — isso é A-02, mas o cartão culpa o aria-hidden (aria-hidden-focus), não a ordem de foco. Composto: ratificar.",
  "complete": true,
  "evidenceRefs": [
    "cartão",
    "medição Playwright headless 1280x900 na página congelada"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Botão 'Selecione o arquivo' com aria-hidden=\"true\" e tabindex=\"1\", portanto focável e oculto da árvore de acessibilidade; o input file nativo está com display:none.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````
