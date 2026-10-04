# Revisão semântica — pacote fechado

Versão: flow-semantic-1.4.0 · 31 cartões únicos · 0 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 0 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 5 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 42 sujeitos · 31 cartão(ões) sem evidência verificada · 21 com unidade candidata · estimativa **186 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 13 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-00bf05a70c86b77ffe923bb10d354c61e234d5983831bbfb7d7f008e16771369

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao fechar o modal 'Descartar solicitação?' com Esc ou 'Continuar preenchendo', o foco vai para <body> em vez de voltar ao botão Cancelar que abriu o modal.

Esperado: Ao fechar o modal sem descartar, o foco volta ao botão Cancelar.

Janela: 1280×900 · interações desde o carregamento: 1. Preencher Nome completo com 'Teste' 2. Clique em Cancelar 3. Escape

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(8)>button:nth-of-type(1)" — <button> "Cancelar"

### Unidades candidatas (não são crédito)

- U-07d298f4df34c286740799c74d0ebada13b65d950a4b6ad514d6f6e090153e4d — A-03 · dialogo-aberto · cena 1280x900 · <div> "Descartar solicitação? Os dados preenchidos nest": Estrato T · variante cor-fora-da-paleta. O texto do diálogo usa #334333 — a cor de texto do DS (#333333) com o canal verde acrescido de 16 —, valor que não corresponde a token algum.
  - estados em que a unidade existe: dialogo-aberto
  - predicado de aceitação: estilo-computado sustenta em dialogo-aberto — alguma propriedade de [color] em {rgb(51, 67, 51)}. Medido: color=rgb(51, 67, 51)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f29a7aeeab28c9d4933141aff94ee3d84c368205c595930db83ceec28076ec77 — A-01 · dialogo-aberto · cena 1280x900 · <div> "Descartar solicitação? Os dados preenchidos nest": Estrato K · variante fecha-sem-devolver. Ao fechar o diálogo de descarte (X, Continuar preenchendo ou Esc) o foco não volta ao botão Cancelar que o abriu: cai em <body>. Abrir o diálogo leva o foco para dentro dele, como deve. Sem predicado na referência — o observável exige fechar o diálogo e ler document.activeElement; está medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: dialogo-aberto
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
  "cardId": "C-00bf05a70c86b77ffe923bb10d354c61e234d5983831bbfb7d7f008e16771369",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: com Nome preenchido, Cancelar abre o diálogo (foco vai a 'Continuar preenchendo'); Esc e 'Continuar preenchendo' deixam o foco em <body>. A-01.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Ao fechar o modal 'Descartar solicitação?' com Esc ou 'Continuar preenchendo', o foco vai para <body> em vez de voltar ao botão Cancelar que abriu o modal.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(8)>button:nth-of-type(1)"
      ],
      "unitIds": [
        "U-f29a7aeeab28c9d4933141aff94ee3d84c368205c595930db83ceec28076ec77"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-1bc1fb6961996ec564140d88503a04d7997f6d4195e085b2619ddebaebcfa8c9

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de upload tem tabindex='1'. No carregamento, o primeiro Tab leva o foco a ele (no meio do formulário, com rolagem), antes do link 'Ir para o conteúdo', do cabeçalho e dos campos anteriores. Na sequência natural ele não aparece entre Descrição e os checkboxes de recursos.

Esperado: Sem tabindex positivo; o controle segue a ordem do DOM (depois de 'Descrição da solicitação').

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Pressionar Tab

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button" — <button> "Selecione o arquivo" · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-b3362afca6c4004dc1bfe74c6ea6d81e8a2e500a8eb931d94b772c90ee1746bd — A-02 · sempre · cena 1280x900 · <button> "Selecione o arquivo": Estrato K · variante tabindex-positivo. O botão do upload tem tabindex=1: o primeiro Tab da página cai nele, antes do atalho para o conteúdo e de todos os campos que o precedem no formulário. Sem predicado na referência (as espécies existentes medem ausência de atributo, não valor); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
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
  "cardId": "C-1bc1fb6961996ec564140d88503a04d7997f6d4195e085b2619ddebaebcfa8c9",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: o botão de upload tem tabindex=1 (definido pelo código da página, não pelo BRUpload); o primeiro Tab após carregar foca esse botão (y=430, com rolagem), antes do link 'Ir para o conteúdo'. A-02.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O botão de upload tem tabindex='1'. No carregamento, o primeiro Tab leva o foco a ele (no meio do formulário, com rolagem), antes do link 'Ir para o conteúdo', do cabeçalho e dos campos anteriores. Na sequência natural ele não aparece entre Descrição e os checkboxes de recursos.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button"
      ],
      "unitIds": [
        "U-b3362afca6c4004dc1bfe74c6ea6d81e8a2e500a8eb931d94b772c90ee1746bd"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-244507160d311d0aba62c72e1eee5740d5a21ae6c8545feaf6080fb119e279df

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Selecione o arquivo', único controle focável do campo de documentos (o input#documentos tem display:none), tem aria-hidden='true'. Recebe foco do teclado, mas fica fora da árvore de acessibilidade, e o leitor de tela não anuncia nome, papel, rótulo 'Documentos comprobatórios (opcional)' nem a instrução de formato.

Esperado: Elemento focável não deve ter aria-hidden='true'; o controle de upload precisa expor papel e nome acessível ligados ao rótulo do campo.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Pressionar Tab

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button" — <button> "Selecione o arquivo" · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-b3362afca6c4004dc1bfe74c6ea6d81e8a2e500a8eb931d94b772c90ee1746bd — A-02 · sempre · cena 1280x900 · <button> "Selecione o arquivo": Estrato K · variante tabindex-positivo. O botão do upload tem tabindex=1: o primeiro Tab da página cai nele, antes do atalho para o conteúdo e de todos os campos que o precedem no formulário. Sem predicado na referência (as espécies existentes medem ausência de atributo, não valor); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
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
  "cardId": "C-244507160d311d0aba62c72e1eee5740d5a21ae6c8545feaf6080fb119e279df",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: aria-hidden=true no .upload-button é definido pelo BRUpload do DS ao criar o botão; o input file fica oculto pelo componente. Comportamento do DS, não da página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O botão 'Selecione o arquivo', único controle focável do campo de documentos (o input#documentos tem display:none), tem aria-hidden='true'. Recebe foco do teclado, mas fica fora da árvore de acessibilidade, e o leitor de tela não anuncia nome, papel, rótulo 'Documentos comprobatórios (opcional)' nem a instrução de formato.",
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

## C-26d7b17427662a1e315576d9bd7d8d2aa2e05819670baac40b90c99414afd161

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão Fechar da mensagem de erro é um <div class="br-button circle small" role="button" tabindex="0">, e não um <button>. Ele responde a Enter e Espaço (verificado). A mensagem de sucesso usa <button>.

Esperado: br-button aplicado a <button type="button">, como na anatomia do Message do DS.

Janela: 1280×900 · interações desde o carregamento: 1. Clique em Enviar com o formulário vazio

Regra declarada: ds-structure-button-tag

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(1)>div>div:nth-of-type(1)>div" — <div> "Fechar a mensagem"

### Unidades candidatas (não são crédito)

- U-bbfc7654327714d26fe1c4acef5b74dd3a8b5e541d8cd630d6ebc6f9d63f8fc0 — A-06 · apos-envio-vazio · cena 1280x900 · <div> "Fechar a mensagem": Estrato E · variante nativo-para-div. O botão Fechar da mensagem de retorno é um <div role="button" tabindex="0"> com tratadores de Enter e Espaço, no lugar do <button> nativo do exemplo oficial. Continua operável por teclado e nomeado — o defeito é só o elemento.
  - estados em que a unidade existe: apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: classe-no-elemento sustenta em apos-envio-vazio, dialogo-aberto — o próprio <div> carrega a classe .br-button. Medido: <div class="br-button circle small"> | <div class="br-button circle small">
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `V-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-26d7b17427662a1e315576d9bd7d8d2aa2e05819670baac40b90c99414afd161",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido após envio vazio: o fechar da mensagem de erro é <div class=br-button circle small role=button tabindex=0 aria-label='Fechar a mensagem'>; Enter o fecha. Elemento não nativo = A-06.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O botão Fechar da mensagem de erro é um <div class=\"br-button circle small\" role=\"button\" tabindex=\"0\">, e não um <button>. Ele responde a Enter e Espaço (verificado). A mensagem de sucesso usa <button>.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(1)>div>div:nth-of-type(1)>div"
      ],
      "unitIds": [
        "U-bbfc7654327714d26fe1c4acef5b74dd3a8b5e541d8cd630d6ebc6f9d63f8fc0"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-2e34183f08375d403ef361f2116cb0c296899eb1749bc995bf7c67ae0b72f14c

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de upload tem tabindex="1": o primeiro Tab após o carregamento vai para ele (no meio do formulário), antes do skip link 'Ir para o conteúdo', do link gov.br, do breadcrumb e dos campos anteriores.

Esperado: Sem tabindex positivo; ordem de foco seguindo a ordem do conteúdo (skip link primeiro).

Janela: 1280×900 · interações desde o carregamento: 1. Tab

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button" — <button> "Selecione o arquivo" · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-b3362afca6c4004dc1bfe74c6ea6d81e8a2e500a8eb931d94b772c90ee1746bd — A-02 · sempre · cena 1280x900 · <button> "Selecione o arquivo": Estrato K · variante tabindex-positivo. O botão do upload tem tabindex=1: o primeiro Tab da página cai nele, antes do atalho para o conteúdo e de todos os campos que o precedem no formulário. Sem predicado na referência (as espécies existentes medem ausência de atributo, não valor); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
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
  "cardId": "C-2e34183f08375d403ef361f2116cb0c296899eb1749bc995bf7c67ae0b72f14c",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: upload-button com tabindex=1 posto pelo código da página; primeiro Tab o foca antes do skip link, gov.br e breadcrumb. A-02.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O botão de upload tem tabindex=\"1\": o primeiro Tab após o carregamento vai para ele (no meio do formulário), antes do skip link 'Ir para o conteúdo', do link gov.br, do breadcrumb e dos campos anteriores.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button"
      ],
      "unitIds": [
        "U-b3362afca6c4004dc1bfe74c6ea6d81e8a2e500a8eb931d94b772c90ee1746bd"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-3e8b1cbd293c5f9c2af75275bdff49e4d37fc4bb939a4bd93889d29407f7eaae

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com o calendário aberto, os 42 dias (span.flatpickr-day) recebem tabindex="1" (positivo), alterando a ordem de tabulação da página.

Esperado: Sem tabindex maior que 0 (usar 0/-1 com roving tabindex).

Janela: 1280×900 · interações desde o carregamento: 1. Clique no botão do calendário (#data-preferencial-btn)

Regra declarada: tabindex

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "unresolved:.flatpickr-calendar.open .flatpickr-day" — Seletor não resolvido

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-024` → identificador devolvido por ferramenta (sem arquivo)
- `F-030` → identificador devolvido por ferramenta (sem arquivo)
- `F-065` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3e8b1cbd293c5f9c2af75275bdff49e4d37fc4bb939a4bd93889d29407f7eaae",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: calendário aberto tem 42 .flatpickr-day com tabindex=1, mas quem escreve isso é o BRDatePicker do DS (querySelectorAll('.flatpickr-day').forEach(setAttribute('tabindex','1'))). Comportamento do DS.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Com o calendário aberto, os 42 dias (span.flatpickr-day) recebem tabindex=\"1\" (positivo), alterando a ordem de tabulação da página.",
      "subjects": [
        "unresolved:.flatpickr-calendar.open .flatpickr-day"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-471bacb94df4fa8a26be91a67f48fd7eca0a9c28984bb4561c2595ef69725b1b

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
  "cardId": "C-471bacb94df4fa8a26be91a67f48fd7eca0a9c28984bb4561c2595ef69725b1b",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: 0 .br-footer/br-footer no documento (sem shadow roots relevantes). Ausência do Footer do DS ratificada como defeito; fora da referência.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
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

## C-576e79bf30fa4390aea89eb2f2497cbd62103e51001c2496a41129b8e9071a05

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões de mês anterior e mês seguinte do calendário só contêm ícone (<i class="fas fa-chevron-left/right">) e não têm aria-label nem texto: nome acessível vazio.

Esperado: Nome acessível descritivo (ex.: 'Mês anterior' / 'Próximo mês').

Janela: 1280×900 · interações desde o carregamento: 1. Clique no botão do calendário (#data-preferencial-btn)

Regra declarada: button-name

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(1)>button" — <button> · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(2)>button" — <button> · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-018` → identificador devolvido por ferramenta (sem arquivo)
- `F-019` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-576e79bf30fa4390aea89eb2f2497cbd62103e51001c2496a41129b8e9071a05",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: botões prev/next do calendário são <button class=br-button circle small><i class=fas fa-chevron-*></i></button> sem nome; essa marcação vem do prevArrow/nextArrow configurado pelo BRDatePicker do DS. Comportamento do DS, não defeito da página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Os botões de mês anterior e mês seguinte do calendário só contêm ícone (<i class=\"fas fa-chevron-left/right\">) e não têm aria-label nem texto: nome acessível vazio.",
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

## C-5b17e2d6939ece4142a059d0cb873fdbe83b72a7ae2f16ef3f33fabca593b2b0

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com foco por teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' ficam com outline: none, box-shadow: none e borda rgb(136,136,136), igual ao estado sem foco (regra da página '.campo-servico .br-input input:focus-visible, .campo-unidade ... {box-shadow:none; outline:none}'). Os outros campos mostram box-shadow 0 0 0 2px rgb(194,133,12).

Esperado: Indicador de foco visível, como nos demais campos (destaque de foco padrão do DS).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Pressionar Tab até 'Tipo de serviço' (8 vezes) e depois mais uma vez até 'Unidade de atendimento'

Regra declarada: wcag:2.4.7

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>div>input" — <input#servico> "Selecione uma opção"
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>div>input" — <input#unidade> "Selecione uma opção"

### Unidades candidatas (não são crédito)

- U-27cc0d4a8e5df91ab64931d3374ec1ea9b51d3e9b519f740b3d4b3c1a6c195d8 — A-04 · sempre · cena 1280x900 · <input#unidade> "Selecione uma opção": Estrato T · variante outline-none · COMPARTILHADA pelos dois selects. O campo de texto do select não mostra indicador de foco: a borda e o box-shadow com que o DS desenha o foco dos campos foram suprimidos (e o outline segue none). Nome, CPF, data e descrição mostram o indicador. Sem predicado na referência — o observável exige focar o elemento; medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-51a6b48fcbf886149c29705242f258a4c46c4b607bc8f80c640a3e74faea8b16 — A-08 · apos-envio-vazio · cena 1280x900 · <input#unidade> "Selecione uma opção": Estrato E · variante erro-sem-associacao · COMPARTILHADA pelos dois selects. Depois do envio vazio o texto de erro aparece sob o select, mas o campo não o referencia: não há aria-describedby. Os outros seis campos obrigatórios referenciam o próprio texto de erro. A unidade existe só neste estado, embora o campo exista desde o primeiro paint — por isso não é `conditional`.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: aria-describedby. Medido: ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a10dcb076ad236543b32667bd7e0adfec72fef26085a4924a9eb55ecf74492e3 — A-08 · apos-envio-vazio · cena 1280x900 · <input#servico> "Selecione uma opção": Estrato E · variante erro-sem-associacao · COMPARTILHADA pelos dois selects. Depois do envio vazio o texto de erro aparece sob o select, mas o campo não o referencia: não há aria-describedby. Os outros seis campos obrigatórios referenciam o próprio texto de erro. A unidade existe só neste estado, embora o campo exista desde o primeiro paint — por isso não é `conditional`.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: aria-describedby. Medido: ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a4c4e6005ce86b914ed8b58011b3f8effcee1326c119327ddd4eb9e9e0540a41 — A-04 · sempre · cena 1280x900 · <input#servico> "Selecione uma opção": Estrato T · variante outline-none · COMPARTILHADA pelos dois selects. O campo de texto do select não mostra indicador de foco: a borda e o box-shadow com que o DS desenha o foco dos campos foram suprimidos (e o outline segue none). Nome, CPF, data e descrição mostram o indicador. Sem predicado na referência — o observável exige focar o elemento; medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
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
  "cardId": "C-5b17e2d6939ece4142a059d0cb873fdbe83b72a7ae2f16ef3f33fabca593b2b0",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido via Tab: foco em #servico e #unidade sem outline/box-shadow e borda inalterada rgb(136,136,136); demais campos com box-shadow 0 0 0 2px rgb(194,133,12). A-04 nos dois selects.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Com foco por teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' ficam com outline: none, box-shadow: none e borda rgb(136,136,136), igual ao estado sem foco (regra da página '.campo-servico .br-input input:focus-visible, .campo-unidade ... {box-shadow:none; outline:none}'). Os outros campos mostram box-shadow 0 0 0 2px rgb(194,133,12).",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>div>input",
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>div>input"
      ],
      "unitIds": [
        "U-27cc0d4a8e5df91ab64931d3374ec1ea9b51d3e9b519f740b3d4b3c1a6c195d8",
        "U-a4c4e6005ce86b914ed8b58011b3f8effcee1326c119327ddd4eb9e9e0540a41"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-6cbf204d5f4c3d10c2c0ca495d8ef2b1b4a66f74c44662724218d1d5dd73fd70

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

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6cbf204d5f4c3d10c2c0ca495d8ef2b1b4a66f74c44662724218d1d5dd73fd70",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: os únicos botões sem nome são as setas prev/next do flatpickr, marcação do BRDatePicker do DS (prevArrow/nextArrow). Comportamento do DS, não da página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
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

## C-7e33385fec304738456f264be26c75a716709e98f41ad5a3af509f24afe9acf5

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com foco por teclado nos campos 'Tipo de serviço' e 'Unidade de atendimento' não há indicador visível: box-shadow none, outline none, borda inalterada rgb(136,136,136). A regra da aplicação '.campo-servico .br-input input:focus, ... :focus-visible { box-shadow:none; outline:none; border-color: var(--border-color-alternative) !important }' remove o foco do DS. Os demais campos mostram anel rgb(194,133,12) de 2px.

Esperado: Indicador de foco visível (o padrão do DS) nos dois campos.

Janela: 1280×900 · interações desde o carregamento: 1. Clique em Nome completo 2. Tab 3. Tab (foco em #servico)

Regra declarada: wcag:2.4.7

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>div>input" — <input#servico> "Selecione uma opção"
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>div>input" — <input#unidade> "Selecione uma opção"

### Unidades candidatas (não são crédito)

- U-27cc0d4a8e5df91ab64931d3374ec1ea9b51d3e9b519f740b3d4b3c1a6c195d8 — A-04 · sempre · cena 1280x900 · <input#unidade> "Selecione uma opção": Estrato T · variante outline-none · COMPARTILHADA pelos dois selects. O campo de texto do select não mostra indicador de foco: a borda e o box-shadow com que o DS desenha o foco dos campos foram suprimidos (e o outline segue none). Nome, CPF, data e descrição mostram o indicador. Sem predicado na referência — o observável exige focar o elemento; medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-51a6b48fcbf886149c29705242f258a4c46c4b607bc8f80c640a3e74faea8b16 — A-08 · apos-envio-vazio · cena 1280x900 · <input#unidade> "Selecione uma opção": Estrato E · variante erro-sem-associacao · COMPARTILHADA pelos dois selects. Depois do envio vazio o texto de erro aparece sob o select, mas o campo não o referencia: não há aria-describedby. Os outros seis campos obrigatórios referenciam o próprio texto de erro. A unidade existe só neste estado, embora o campo exista desde o primeiro paint — por isso não é `conditional`.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: aria-describedby. Medido: ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a10dcb076ad236543b32667bd7e0adfec72fef26085a4924a9eb55ecf74492e3 — A-08 · apos-envio-vazio · cena 1280x900 · <input#servico> "Selecione uma opção": Estrato E · variante erro-sem-associacao · COMPARTILHADA pelos dois selects. Depois do envio vazio o texto de erro aparece sob o select, mas o campo não o referencia: não há aria-describedby. Os outros seis campos obrigatórios referenciam o próprio texto de erro. A unidade existe só neste estado, embora o campo exista desde o primeiro paint — por isso não é `conditional`.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: aria-describedby. Medido: ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a4c4e6005ce86b914ed8b58011b3f8effcee1326c119327ddd4eb9e9e0540a41 — A-04 · sempre · cena 1280x900 · <input#servico> "Selecione uma opção": Estrato T · variante outline-none · COMPARTILHADA pelos dois selects. O campo de texto do select não mostra indicador de foco: a borda e o box-shadow com que o DS desenha o foco dos campos foram suprimidos (e o outline segue none). Nome, CPF, data e descrição mostram o indicador. Sem predicado na referência — o observável exige focar o elemento; medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
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
  "cardId": "C-7e33385fec304738456f264be26c75a716709e98f41ad5a3af509f24afe9acf5",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido via Tab: #servico e #unidade com :focus-visible têm outline none, box-shadow none, borda rgb(136,136,136) igual ao repouso (regra da página .campo-servico/.campo-unidade); #cpf mostra anel rgb(194,133,12). Dois sujeitos de A-04: crédito nas duas.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Com foco por teclado nos campos 'Tipo de serviço' e 'Unidade de atendimento' não há indicador visível: box-shadow none, outline none, borda inalterada rgb(136,136,136). A regra da aplicação '.campo-servico .br-input input:focus, ... :focus-visible { box-shadow:none; outline:none; border-color: var(--border-color-alternative) !important }' remove o foco do DS. Os demais campos mostram anel rgb(194,133,12) de 2px.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>div>input",
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>div>input"
      ],
      "unitIds": [
        "U-27cc0d4a8e5df91ab64931d3374ec1ea9b51d3e9b519f740b3d4b3c1a6c195d8",
        "U-a4c4e6005ce86b914ed8b58011b3f8effcee1326c119327ddd4eb9e9e0540a41"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-83540d54c3ca9a78e71c6f41cf4f3bdd881e16f95863697ecd2c3fae62676180

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
  "cardId": "C-83540d54c3ca9a78e71c6f41cf4f3bdd881e16f95863697ecd2c3fae62676180",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: 0 .br-header/br-header no documento; só <header class=barra-superior>. Ausência do Header do DS ratificada como defeito; fora da referência.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
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

## C-89432b18ff5ba8e8621007de149e27e0a727b3c0d9d1b8dfd933c5b0f296fb3f

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Selecione o arquivo' tem aria-hidden="true" mas é focável (tabindex="1"); o input file #documentos está com display:none, então leitores de tela não têm controle de upload exposto.

Esperado: O controle que recebe foco deve estar exposto à tecnologia assistiva (sem aria-hidden) com nome acessível.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: aria-hidden-focus

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button" — <button> "Selecione o arquivo" · **oculto**: aria-hidden

### Unidades candidatas (não são crédito)

- U-b3362afca6c4004dc1bfe74c6ea6d81e8a2e500a8eb931d94b772c90ee1746bd — A-02 · sempre · cena 1280x900 · <button> "Selecione o arquivo": Estrato K · variante tabindex-positivo. O botão do upload tem tabindex=1: o primeiro Tab da página cai nele, antes do atalho para o conteúdo e de todos os campos que o precedem no formulário. Sem predicado na referência (as espécies existentes medem ausência de atributo, não valor); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-89432b18ff5ba8e8621007de149e27e0a727b3c0d9d1b8dfd933c5b0f296fb3f",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: aria-hidden=\"true\" no .upload-button é escrito pelo próprio BRUpload do DS (_setBehavior cria o botão com aria-hidden); comportamento do DS, não da página. O tabindex=1 citado é da página (A-02), mas a alegação é a exposição à TA, que é do DS.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O botão 'Selecione o arquivo' tem aria-hidden=\"true\" mas é focável (tabindex=\"1\"); o input file #documentos está com display:none, então leitores de tela não têm controle de upload exposto.",
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

## C-89624a0bcb56078bdc7a4d5041565034c87032e37066ca2029f9bebbfa2c4f5c

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
  "cardId": "C-89624a0bcb56078bdc7a4d5041565034c87032e37066ca2029f9bebbfa2c4f5c",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: .dialogo-descarte com color rgb(51,67,51) vindo da CSS da página (.dialogo-descarte{color:#334333}), valor fora dos tokens. A-03 (A-01 não se aplica: alegação é de cor).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
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
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-8d5afea101d050fc836f922ed7af013de314c5ee3601c8dc20963a7d21cf6209

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao fechar o diálogo 'Descartar solicitação?' (por Esc, por 'Continuar preenchendo' ou por 'Descartar'), o foco vai para <body> em vez de voltar ao botão Cancelar que abriu o diálogo.

Esperado: Ao fechar o diálogo modal, o foco volta ao elemento que o abriu (Cancelar) ou a um ponto lógico do formulário.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em Cancelar 3. Pressionar Escape

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(8)>button:nth-of-type(1)" — <button> "Cancelar"

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
  "cardId": "C-8d5afea101d050fc836f922ed7af013de314c5ee3601c8dc20963a7d21cf6209",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: ao fechar o diálogo por Esc, 'Continuar preenchendo' ou 'Descartar' o foco cai em <body>. Fato correto e é o defeito de A-01, mas este cartão não tem unidade candidata (painel recusa crédito); registrado como novo, semelhante a A-01 — ratificar.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Ao fechar o diálogo 'Descartar solicitação?' (por Esc, por 'Continuar preenchendo' ou por 'Descartar'), o foco vai para <body> em vez de voltar ao botão Cancelar que abriu o diálogo.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(8)>button:nth-of-type(1)"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "defeito-novo-correto",
      "verdict": "novel"
    }
  ]
}
````

## C-986b486f6fbbce2926f8198d6be1d86d57a81e2de2d1be063d5c8f8df0b87817

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-986b486f6fbbce2926f8198d6be1d86d57a81e2de2d1be063d5c8f8df0b87817",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: #forma-presencial sem title/aria-label/aria-labelledby, labels.length=0; o <label>Presencial</label> irmão não tem for. Sujeito participa de A-09.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
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
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-9c801bbe0cb3f08ab9f9ee17780c8adc14ed98bb5075348154704d8ed611002f

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na mensagem de erro 'Não foi possível enviar.', o botão Fechar aparece à esquerda (x=201) e o ícone semântico à direita (x=1019); no DOM a ordem é close, content, icon. A mensagem de sucesso segue a ordem correta.

Esperado: Ícone semântico à esquerda e botão Fechar no topo à direita da Message.

Janela: 1280×900 · interações desde o carregamento: 1. Clique em Enviar com o formulário vazio

Regra declarada: govbr-3.7.0-component-message-66b01a712e67

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(1)>div" — <div> "Não foi possível enviar. Há 8 campo(s) obrigatór"

### Unidades candidatas (não são crédito)

- U-1891342c11520896b9770ea0694cf80073cc0559489c26af1c1a3f9af0dedee1 — A-11 · apos-envio-vazio · cena 1280x900 · <div> "Não foi possível enviar. Há 8 campo(s) obrigatór": Estrato S · variante icone-e-fechar-trocados. Na mensagem de retorno o botão Fechar está à esquerda e o ícone semântico à direita — o inverso da anatomia do componente. Sem predicado na referência (nenhuma espécie mede posição); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: apos-envio-vazio, dialogo-aberto
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
  "cardId": "C-9c801bbe0cb3f08ab9f9ee17780c8adc14ed98bb5075348154704d8ed611002f",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido após envio vazio: ordem DOM close/content/icon, close em x=201 e ícone em x=1019 na mensagem de erro. A-11.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Na mensagem de erro 'Não foi possível enviar.', o botão Fechar aparece à esquerda (x=201) e o ícone semântico à direita (x=1019); no DOM a ordem é close, content, icon. A mensagem de sucesso segue a ordem correta.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(1)>div"
      ],
      "unitIds": [
        "U-1891342c11520896b9770ea0694cf80073cc0559489c26af1c1a3f9af0dedee1"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-9f636a1dbbabf2a7e6ba832369f63650758a5fc86b20e17426d7378c3a01a6ab

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O rádio 'Presencial' não tem nome acessível: o <label>Presencial</label> irmão não tem atributo for e não envolve o input. A árvore de acessibilidade mostra 'radio' sem nome, e clicar no texto ou no círculo (o label intercepta o ponteiro) não marca a opção (checked continua false).

Esperado: Rótulo associado ao campo (label for='forma-presencial'), que dá o nome acessível e torna o rótulo clicável, como nas demais opções do grupo.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar no rótulo 'Presencial'

Regra declarada: emag:6.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>input" — <input#forma-presencial>

### Unidades candidatas (não são crédito)

- U-471fd34bfed8d491133fe60cfe6233aa00117fefb796768495ff7598fa7a6a5e — A-09 · sempre · cena 1280x900 · <input#forma-presencial>: Estrato S · variante label-sem-for, na primeira opção do grupo (convenção registrada em tela-a/construcao.md). O <label> de "Presencial" não tem for: o radio fica sem nome acessível e clicar no texto não o marca. As outras duas opções estão associadas.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: for, aria-label, aria-labelledby. Medido: ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9f636a1dbbabf2a7e6ba832369f63650758a5fc86b20e17426d7378c3a01a6ab",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: #forma-presencial sem label associado (labels=0, label sem for); clicar em 'Presencial' deixa checked=false. A-09.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O rádio 'Presencial' não tem nome acessível: o <label>Presencial</label> irmão não tem atributo for e não envolve o input. A árvore de acessibilidade mostra 'radio' sem nome, e clicar no texto ou no círculo (o label intercepta o ponteiro) não marca a opção (checked continua false).",
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

## C-a6a8834274d5288baba5468d9733b57616a8c1e8b09111d2390d94ef3737d4d1

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O rádio 'Presencial' não tem nome acessível: o <label>Presencial</label> não tem for="forma-presencial". Clicar no texto 'Presencial' não marca a opção.

Esperado: Rádio associado ao rótulo (label for="forma-presencial"), com nome acessível 'Presencial'.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: label

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>input" — <input#forma-presencial>

### Unidades candidatas (não são crédito)

- U-471fd34bfed8d491133fe60cfe6233aa00117fefb796768495ff7598fa7a6a5e — A-09 · sempre · cena 1280x900 · <input#forma-presencial>: Estrato S · variante label-sem-for, na primeira opção do grupo (convenção registrada em tela-a/construcao.md). O <label> de "Presencial" não tem for: o radio fica sem nome acessível e clicar no texto não o marca. As outras duas opções estão associadas.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: for, aria-label, aria-labelledby. Medido: ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-013` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-a6a8834274d5288baba5468d9733b57616a8c1e8b09111d2390d94ef3737d4d1",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: label 'Presencial' sem for, #forma-presencial sem nome acessível; clique no texto não marca (checked=false). A-09.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O rádio 'Presencial' não tem nome acessível: o <label>Presencial</label> não tem for=\"forma-presencial\". Clicar no texto 'Presencial' não marca a opção.",
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

## C-a970432261deace60690acfe4e76f4a7830e4fdda441da9e7b4237eed6c33a03

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões de mês anterior/seguinte do calendário só têm ícone <i class='fas fa-chevron-left/right'>, sem texto, aria-label ou title: o nome acessível é vazio.

Esperado: Botões com nome acessível, por exemplo aria-label='Mês anterior' e 'Mês seguinte'.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar no botão de calendário do campo 'Data preferencial'

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(1)>button" — <button> · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(2)>button" — <button> · **oculto**: nao-renderizado

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
  "cardId": "C-a970432261deace60690acfe4e76f4a7830e4fdda441da9e7b4237eed6c33a03",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: setas prev/next do calendário aberto sem texto, aria-label ou title; marcação vinda do prevArrow/nextArrow do BRDatePicker do DS. Comportamento do DS.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Os botões de mês anterior/seguinte do calendário só têm ícone <i class='fas fa-chevron-left/right'>, sem texto, aria-label ou title: o nome acessível é vazio.",
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

## C-b24b1d2a3de574deb924d4cd14c8389f9862b96afef9db69db60fbbea8991c4d

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A mensagem de erro geral não segue a estrutura do componente Message do DS: o fechar é um <div role='button' tabindex='0'> posicionado primeiro (à esquerda, x=201) e o ícone de estado vem por último (à direita, x=1019). A mensagem de sucesso da mesma tela usa a ordem do DS: ícone, conteúdo e <button> de fechar.

Esperado: Estrutura do br-message do DS: ícone à esquerda, conteúdo e botão nativo <button> de fechar à direita, igual à mensagem de sucesso.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em Enviar com o formulário vazio

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta · sem-evidencia

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(1)>div>div:nth-of-type(1)" — <div>

### Unidades candidatas (não são crédito)

- U-1891342c11520896b9770ea0694cf80073cc0559489c26af1c1a3f9af0dedee1 — A-11 · apos-envio-vazio · cena 1280x900 · <div> "Não foi possível enviar. Há 8 campo(s) obrigatór": Estrato S · variante icone-e-fechar-trocados. Na mensagem de retorno o botão Fechar está à esquerda e o ícone semântico à direita — o inverso da anatomia do componente. Sem predicado na referência (nenhuma espécie mede posição); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: apos-envio-vazio, dialogo-aberto
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
  "cardId": "C-b24b1d2a3de574deb924d4cd14c8389f9862b96afef9db69db60fbbea8991c4d",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido após envio vazio: .br-message.danger tem filhos na ordem close (x=201), content (x=241), icon (x=1019); a mensagem de sucesso usa ícone-conteúdo-fechar. Cita também o fechar em <div role=button>, que é A-06 (não candidata aqui). Crédito A-11.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A mensagem de erro geral não segue a estrutura do componente Message do DS: o fechar é um <div role='button' tabindex='0'> posicionado primeiro (à esquerda, x=201) e o ícone de estado vem por último (à direita, x=1019). A mensagem de sucesso da mesma tela usa a ordem do DS: ícone, conteúdo e <button> de fechar.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(1)>div>div:nth-of-type(1)"
      ],
      "unitIds": [
        "U-1891342c11520896b9770ea0694cf80073cc0559489c26af1c1a3f9af0dedee1"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-b51a4bd0fc2e9121a5905654232a9cc0bbfec8d9641a913e6fd1a745c5215c97

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página não tem .br-header nem <br-header>; a área de cabeçalho é um <header class="barra-superior"> próprio contendo só o link 'gov.br'.

Esperado: Área de Cabeçalho do Template Base ocupada pelo componente Header do DS (.br-header).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: ds-page-header

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>header" — <header> "gov.br"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-003` → identificador devolvido por ferramenta (sem arquivo)
- `V-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b51a4bd0fc2e9121a5905654232a9cc0bbfec8d9641a913e6fd1a745c5215c97",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: 0 elementos .br-header/br-header; o cabeçalho é <header class=barra-superior> com só o link gov.br. Página sem Header do DS (Template Base), defeito ratificado e ausente da referência.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A página não tem .br-header nem <br-header>; a área de cabeçalho é um <header class=\"barra-superior\"> próprio contendo só o link 'gov.br'.",
      "subjects": [
        "body>div:nth-of-type(1)>div>header"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "defeito-novo-correto",
      "verdict": "novel"
    }
  ]
}
````

## C-bb086beb084aa5a8751a9237876b569e98187876c7894f94fc537686b94a977c

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual da paginação aparece só visualmente (classe active, fundo azul-escuro). Não há aria-current nem outro indicador programático, e o nome acessível ('Página 1', 'Página 2'…) é igual ao das demais páginas.

Esperado: Página atual indicada programaticamente, por exemplo aria-current='page' no link ativo.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>div:nth-of-type(1)>div>main>section>div>div:nth-of-type(2)>nav>a:nth-of-type(1)" — <a> "Página 1"

### Unidades candidatas (não são crédito)

- U-6b2335b7d8c3ff70b8ef3ca3533d672b6a1a6611d3db662a510e1380f65145a5 — A-07 · sempre · cena 1280x900 · <nav> "Paginação de solicitações anteriores": Estrato E · variante links-fora-de-lista. Os links de página são âncoras adjacentes soltas dentro do <nav>, sem o <ul>/<li> do exemplo oficial: nada além de espaço os separa. Sem predicado na referência (nenhuma espécie mede o elemento pai); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-fa46b3b01953095c45ccd4ee7da378bc7eaab3a1936698faa3f365516a5be29e — A-12 · sempre · cena 1280x900 · <nav> "Paginação de solicitações anteriores": Estrato S · variante aria-removido. A página ativa da paginação é marcada só pela classe `active`: nenhum link carrega aria-current="page", o estado que o próprio DS escreve em tempo de execução. A trilha de navegação da mesma tela marca a página atual com aria-current.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: aria-current. Medido: ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current | ausentes: aria-current
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bb086beb084aa5a8751a9237876b569e98187876c7894f94fc537686b94a977c",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: nenhum link da .br-pagination tem aria-current; a página 1 só tem class=active, nomes 'Página 1/2/3' iguais em forma. A-12 (A-07 trata de ul/li, não desta alegação).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A página atual da paginação aparece só visualmente (classe active, fundo azul-escuro). Não há aria-current nem outro indicador programático, e o nome acessível ('Página 1', 'Página 2'…) é igual ao das demais páginas.",
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

## C-c014d9b02512c6f764dd6a01ff034d89dd669d62e7c843b2822fa5f8af54240a

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
  "cardId": "C-c014d9b02512c6f764dd6a01ff034d89dd669d62e7c843b2822fa5f8af54240a",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: classe br-button aplicada a <div role=button> (fechar da mensagem de erro) em vez de <button>. A-06.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
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
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-cf78b2a5f56efa8252a4d20d7f4687460ecc5f943062261c86fdca776c15ad98

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No estado de erro, #servico e #unidade recebem aria-invalid="true", mas não têm aria-describedby; as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' estão em spans sem id. Os demais campos (nome, cpf, data, descrição, forma, declaração) ligam a mensagem por aria-describedby.

Esperado: Cada mensagem de erro ligada programaticamente ao seu campo (id na mensagem + aria-describedby no input).

Janela: 1280×900 · interações desde o carregamento: 1. Clique em Enviar com o formulário vazio

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>div>input" — <input#servico> "Selecione uma opção"
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>div>input" — <input#unidade> "Selecione uma opção"

### Unidades candidatas (não são crédito)

- U-27cc0d4a8e5df91ab64931d3374ec1ea9b51d3e9b519f740b3d4b3c1a6c195d8 — A-04 · sempre · cena 1280x900 · <input#unidade> "Selecione uma opção": Estrato T · variante outline-none · COMPARTILHADA pelos dois selects. O campo de texto do select não mostra indicador de foco: a borda e o box-shadow com que o DS desenha o foco dos campos foram suprimidos (e o outline segue none). Nome, CPF, data e descrição mostram o indicador. Sem predicado na referência — o observável exige focar o elemento; medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-51a6b48fcbf886149c29705242f258a4c46c4b607bc8f80c640a3e74faea8b16 — A-08 · apos-envio-vazio · cena 1280x900 · <input#unidade> "Selecione uma opção": Estrato E · variante erro-sem-associacao · COMPARTILHADA pelos dois selects. Depois do envio vazio o texto de erro aparece sob o select, mas o campo não o referencia: não há aria-describedby. Os outros seis campos obrigatórios referenciam o próprio texto de erro. A unidade existe só neste estado, embora o campo exista desde o primeiro paint — por isso não é `conditional`.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: aria-describedby. Medido: ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a10dcb076ad236543b32667bd7e0adfec72fef26085a4924a9eb55ecf74492e3 — A-08 · apos-envio-vazio · cena 1280x900 · <input#servico> "Selecione uma opção": Estrato E · variante erro-sem-associacao · COMPARTILHADA pelos dois selects. Depois do envio vazio o texto de erro aparece sob o select, mas o campo não o referencia: não há aria-describedby. Os outros seis campos obrigatórios referenciam o próprio texto de erro. A unidade existe só neste estado, embora o campo exista desde o primeiro paint — por isso não é `conditional`.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: aria-describedby. Medido: ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a4c4e6005ce86b914ed8b58011b3f8effcee1326c119327ddd4eb9e9e0540a41 — A-04 · sempre · cena 1280x900 · <input#servico> "Selecione uma opção": Estrato T · variante outline-none · COMPARTILHADA pelos dois selects. O campo de texto do select não mostra indicador de foco: a borda e o box-shadow com que o DS desenha o foco dos campos foram suprimidos (e o outline segue none). Nome, CPF, data e descrição mostram o indicador. Sem predicado na referência — o observável exige focar o elemento; medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
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
  "cardId": "C-cf78b2a5f56efa8252a4d20d7f4687460ecc5f943062261c86fdca776c15ad98",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido após envio vazio: #servico e #unidade com aria-invalid=true e aria-describedby=null; mensagens sem id. Demais campos têm describedby. Os dois sujeitos participam de A-08 (unidade compartilhada): crédito nas duas.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "No estado de erro, #servico e #unidade recebem aria-invalid=\"true\", mas não têm aria-describedby; as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' estão em spans sem id. Os demais campos (nome, cpf, data, descrição, forma, declaração) ligam a mensagem por aria-describedby.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>div>input",
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>div>input"
      ],
      "unitIds": [
        "U-51a6b48fcbf886149c29705242f258a4c46c4b607bc8f80c640a3e74faea8b16",
        "U-a10dcb076ad236543b32667bd7e0adfec72fef26085a4924a9eb55ecf74492e3"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-dc018a37fad31d7f4bef3716d3c4d142c6db6fd5e7d2f5622e6da233b49541bb

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O modal tem color rgb(51,67,51) (#334333), definido pela regra da aplicação '.dialogo-descarte { color: rgb(51,67,51) }' e herdado pelo título 'Descartar solicitação?'. Esse valor não corresponde a nenhum token de cor do DS (o mais próximo é --green-cool-70 #37493b).

Esperado: Cor de texto da paleta/tokens do DS (ex.: --color, #333333).

Janela: 1280×900 · interações desde o carregamento: 1. Preencher Nome completo com 'Teste' 2. Clique em Cancelar

Regra declarada: govbr-3.7.0-foundation-global-21b1a2733f7b

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>div>div" — <div> "Descartar solicitação? Os dados preenchidos nest"

### Unidades candidatas (não são crédito)

- U-07d298f4df34c286740799c74d0ebada13b65d950a4b6ad514d6f6e090153e4d — A-03 · dialogo-aberto · cena 1280x900 · <div> "Descartar solicitação? Os dados preenchidos nest": Estrato T · variante cor-fora-da-paleta. O texto do diálogo usa #334333 — a cor de texto do DS (#333333) com o canal verde acrescido de 16 —, valor que não corresponde a token algum.
  - estados em que a unidade existe: dialogo-aberto
  - predicado de aceitação: estilo-computado sustenta em dialogo-aberto — alguma propriedade de [color] em {rgb(51, 67, 51)}. Medido: color=rgb(51, 67, 51)
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-f29a7aeeab28c9d4933141aff94ee3d84c368205c595930db83ceec28076ec77 — A-01 · dialogo-aberto · cena 1280x900 · <div> "Descartar solicitação? Os dados preenchidos nest": Estrato K · variante fecha-sem-devolver. Ao fechar o diálogo de descarte (X, Continuar preenchendo ou Esc) o foco não volta ao botão Cancelar que o abriu: cai em <body>. Abrir o diálogo leva o foco para dentro dele, como deve. Sem predicado na referência — o observável exige fechar o diálogo e ler document.activeElement; está medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-066` → identificador devolvido por ferramenta (sem arquivo)
- `V-001` → identificador devolvido por ferramenta (sem arquivo)
- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-dc018a37fad31d7f4bef3716d3c4d142c6db6fd5e7d2f5622e6da233b49541bb",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido com diálogo aberto: .dialogo-descarte e o título herdam color rgb(51,67,51) da regra da página #334333, fora dos tokens. A-03.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O modal tem color rgb(51,67,51) (#334333), definido pela regra da aplicação '.dialogo-descarte { color: rgb(51,67,51) }' e herdado pelo título 'Descartar solicitação?'. Esse valor não corresponde a nenhum token de cor do DS (o mais próximo é --green-cool-70 #37493b).",
      "subjects": [
        "body>div:nth-of-type(1)>div>div>div"
      ],
      "unitIds": [
        "U-07d298f4df34c286740799c74d0ebada13b65d950a4b6ad514d6f6e090153e4d"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-e3cd71882f1d09176d7da04eec2dcf47d1115b8301eb55ceab6950f5340821d0

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Nenhum .br-footer nem <br-footer> no documento; a página termina na paginação da tabela.

Esperado: Área de Rodapé do Template Base ocupada pelo componente Footer do DS (.br-footer).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: ds-page-footer

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body" — <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `V-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e3cd71882f1d09176d7da04eec2dcf47d1115b8301eb55ceab6950f5340821d0",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: document.querySelectorAll('.br-footer, br-footer') = 0; o body termina no conteúdo/paginação. Página sem Footer do DS (Template Base), defeito ratificado pela autora e ausente da referência.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Nenhum .br-footer nem <br-footer> no documento; a página termina na paginação da tabela.",
      "subjects": [
        "body"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "defeito-novo-correto",
      "verdict": "novel"
    }
  ]
}
````

## C-f031713ed555dee3e8adb1d484ce124a13fd6091a8d51d2acfa4d3d732619c4e

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

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f031713ed555dee3e8adb1d484ce124a13fd6091a8d51d2acfa4d3d732619c4e",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: os únicos botões sem nome na página são as setas prev/next do calendário (não renderizadas no estado inicial), marcação gerada pelo BRDatePicker do DS. Comportamento do DS.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
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

## C-f3d099af96c0fe9c047bb1a4cfcfd3122daebe7a2fd67219091c8b7c4ca0fab3

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f3d099af96c0fe9c047bb1a4cfcfd3122daebe7a2fd67219091c8b7c4ca0fab3",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Mesmo elemento (#forma-presencial), mesmo estado e mesmo defeito do cartão C-12790d54: medido sem rótulo associado (labels=0, sem for/aria-label/title). Rótulo visível ausente é a mesma falha de A-09.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
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
        "cardId": "C-986b486f6fbbce2926f8198d6be1d86d57a81e2de2d1be063d5c8f8df0b87817",
        "atomId": "a1"
      },
      "verdict": "reference"
    }
  ]
}
````

## C-f8bb748080d0eb79c0210cdcb36370ada9d0b641bb164cb62f8f3860a16782a4

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A caixa visual dos rádios e checkboxes (label::before, 24x24) tem borda de 1px rgb(204,204,204) sobre fundo branco: contraste de 1,61:1. A borda é a única indicação visual do controle não marcado.

Esperado: Contraste mínimo de 3:1 entre a borda do controle e o fundo adjacente.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página

Regra declarada: wcag:1.4.11

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(7)>div>label" — <label> "Declaro que as informações prestadas são verdade"
- "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>label" — <label> "Presencial"
- "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(2)>label" — <label> "Por videochamada"
- "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(3)>label" — <label> "Por telefone"
- "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(2)>div:nth-of-type(1)>label" — <label> "Intérprete de Libras"
- "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(2)>div:nth-of-type(2)>label" — <label> "Atendimento em local sem degraus"

### Unidades candidatas (não são crédito)

- U-471fd34bfed8d491133fe60cfe6233aa00117fefb796768495ff7598fa7a6a5e — A-09 · sempre · cena 1280x900 · <input#forma-presencial>: Estrato S · variante label-sem-for, na primeira opção do grupo (convenção registrada em tela-a/construcao.md). O <label> de "Presencial" não tem for: o radio fica sem nome acessível e clicar no texto não o marca. As outras duas opções estão associadas.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: for, aria-label, aria-labelledby. Medido: ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby | ausentes: for, aria-label, aria-labelledby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

Nenhuma referência de evidência declarada.

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f8bb748080d0eb79c0210cdcb36370ada9d0b641bb164cb62f8f3860a16782a4",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: label::before tem borda 1px rgb(204,204,204) sobre branco (~1,6:1), mas vem da CSS do DS (border:1px solid var(--border-color), --border-color:var(--gray-20)=#ccc); a página não sobrescreve. Valor do DS.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A caixa visual dos rádios e checkboxes (label::before, 24x24) tem borda de 1px rgb(204,204,204) sobre fundo branco: contraste de 1,61:1. A borda é a única indicação visual do controle não marcado.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(7)>div>label",
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>label",
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(2)>label",
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(3)>label",
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(2)>div:nth-of-type(1)>label",
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(2)>div:nth-of-type(2)>label"
      ],
      "unitIds": [],
      "citation": "uncertain",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-f8cbdeeff11b393af05054fde82b6f0b38b5b9e65de55da0ada54c29e6c0290f

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois do envio com erro, os campos recebem aria-invalid='true', mas as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e os inputs não têm aria-describedby. O erro não fica associado ao campo, ao contrário de Nome, CPF, Data, Descrição, Forma e Declaração.

Esperado: Mensagem de erro com id e referenciada no aria-describedby do respectivo input.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em Enviar com o formulário vazio

Regra declarada: wcag:3.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>div>input" — <input#servico> "Selecione uma opção"
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>div>input" — <input#unidade> "Selecione uma opção"

### Unidades candidatas (não são crédito)

- U-27cc0d4a8e5df91ab64931d3374ec1ea9b51d3e9b519f740b3d4b3c1a6c195d8 — A-04 · sempre · cena 1280x900 · <input#unidade> "Selecione uma opção": Estrato T · variante outline-none · COMPARTILHADA pelos dois selects. O campo de texto do select não mostra indicador de foco: a borda e o box-shadow com que o DS desenha o foco dos campos foram suprimidos (e o outline segue none). Nome, CPF, data e descrição mostram o indicador. Sem predicado na referência — o observável exige focar o elemento; medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-51a6b48fcbf886149c29705242f258a4c46c4b607bc8f80c640a3e74faea8b16 — A-08 · apos-envio-vazio · cena 1280x900 · <input#unidade> "Selecione uma opção": Estrato E · variante erro-sem-associacao · COMPARTILHADA pelos dois selects. Depois do envio vazio o texto de erro aparece sob o select, mas o campo não o referencia: não há aria-describedby. Os outros seis campos obrigatórios referenciam o próprio texto de erro. A unidade existe só neste estado, embora o campo exista desde o primeiro paint — por isso não é `conditional`.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: aria-describedby. Medido: ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a10dcb076ad236543b32667bd7e0adfec72fef26085a4924a9eb55ecf74492e3 — A-08 · apos-envio-vazio · cena 1280x900 · <input#servico> "Selecione uma opção": Estrato E · variante erro-sem-associacao · COMPARTILHADA pelos dois selects. Depois do envio vazio o texto de erro aparece sob o select, mas o campo não o referencia: não há aria-describedby. Os outros seis campos obrigatórios referenciam o próprio texto de erro. A unidade existe só neste estado, embora o campo exista desde o primeiro paint — por isso não é `conditional`.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: atributos-ausentes sustenta em inicial, apos-envio-vazio, dialogo-aberto — nenhum destes atributos presente: aria-describedby. Medido: ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby | ausentes: aria-describedby
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-a4c4e6005ce86b914ed8b58011b3f8effcee1326c119327ddd4eb9e9e0540a41 — A-04 · sempre · cena 1280x900 · <input#servico> "Selecione uma opção": Estrato T · variante outline-none · COMPARTILHADA pelos dois selects. O campo de texto do select não mostra indicador de foco: a borda e o box-shadow com que o DS desenha o foco dos campos foram suprimidos (e o outline segue none). Nome, CPF, data e descrição mostram o indicador. Sem predicado na referência — o observável exige focar o elemento; medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
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
  "cardId": "C-f8cbdeeff11b393af05054fde82b6f0b38b5b9e65de55da0ada54c29e6c0290f",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido após envio vazio: #servico e #unidade aria-invalid=true sem aria-describedby; spans de erro sem id; os outros 6 campos ligam o retorno. A-08 nos dois selects.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Depois do envio com erro, os campos recebem aria-invalid='true', mas as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e os inputs não têm aria-describedby. O erro não fica associado ao campo, ao contrário de Nome, CPF, Data, Descrição, Forma e Declaração.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>div>input",
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>div>input"
      ],
      "unitIds": [
        "U-51a6b48fcbf886149c29705242f258a4c46c4b607bc8f80c640a3e74faea8b16",
        "U-a10dcb076ad236543b32667bd7e0adfec72fef26085a4924a9eb55ecf74492e3"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````
