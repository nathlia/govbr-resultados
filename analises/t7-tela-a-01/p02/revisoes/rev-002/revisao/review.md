# Revisão semântica — pacote fechado

Versão: flow-semantic-1.5.0 · 31 cartões únicos · 0 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 0 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 2 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 83 sujeitos · 31 cartão(ões) sem evidência verificada · 29 com unidade candidata · estimativa **186 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

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

## C-0549e204109f9a34d6f025995b485bed8ad7d03046e29172e5146984c6317185

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Selecione o arquivo' tem aria-hidden="true", mas é focável (tabindex=1) e é o único controle operável do upload, porque o input file #documentos tem display:none. O controle fica oculto para tecnologias assistivas.

Esperado: Elemento focável e operável não pode estar oculto com aria-hidden; o controle de upload precisa ser exposto com nome e papel.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página

Regra declarada: aria-hidden-focus

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-010` → identificador devolvido por ferramenta (sem arquivo)
- `F-064` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0549e204109f9a34d6f025995b485bed8ad7d03046e29172e5146984c6317185",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "O aria-hidden=\"true\" do .upload-button é escrito pelo próprio core.js do DS (BRUpload._setBehavior cria o botão com aria-hidden), não pela página; axe aria-hidden-focus aponta comportamento do componente. O tabindex=1 (da página) é outro defeito (A-02).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O botão 'Selecione o arquivo' tem aria-hidden=\"true\", mas é focável (tabindex=1) e é o único controle operável do upload, porque o input file #documentos tem display:none. O controle fica oculto para tecnologias assistivas.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button"
      ],
      "unitIds": [],
      "citation": "unsupported",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-1bfed0767256337907a7b91975df381b1d22d0c690e19c7ad61108913ca55d40

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
  "cardId": "C-1bfed0767256337907a7b91975df381b1d22d0c690e19c7ad61108913ca55d40",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Verdadeiro: 0 .br-footer/br-footer/footer no documento. O cartão não oferece unidade; seria a P-02 (área de rodapé ausente, âncora documento).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
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

## C-20eabc34e173a85ace55e325f4d1fbfbe5aa3e6185bdea3108dc857daf3fddca

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com foco por teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' não têm indicação visual: outline none, box-shadow none e borda inalterada (#888), por causa da regra própria '.campo-servico .br-input input:focus, ... { box-shadow: none; outline: none }'. Os demais inputs mostram anel de foco #C2850C.

Esperado: Todo elemento focado por teclado com indicação visual evidente (e-MAG 4.4 / WCAG 2.4.7).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar no campo CPF 3. Pressionar Tab (foco em #servico)

Regra declarada: govbr-3.7.0-accessibility-global-21fbcc2fe37b

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
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `inspeção de estilo calculado e regra CSS da folha da página` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-20eabc34e173a85ace55e325f4d1fbfbe5aa3e6185bdea3108dc857daf3fddca",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Tab a partir de #cpf: #servico e #unidade com :focus-visible têm outline none, box-shadow none, borda rgb(136,136,136); #nome mostra box-shadow 2px rgb(194,133,12). Regra da página .campo-servico/.campo-unidade (A-04).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Com foco por teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' não têm indicação visual: outline none, box-shadow none e borda inalterada (#888), por causa da regra própria '.campo-servico .br-input input:focus, ... { box-shadow: none; outline: none }'. Os demais inputs mostram anel de foco #C2850C.",
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

## C-267582e880b37e31532120223453e5b91ff9b31ada611987ddde04148543849b

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O label 'Presencial' não tem atributo for (nem envolve o input); o radio fica sem nome acessível na árvore de acessibilidade e clicar no texto ou no círculo (label::before cobre o input) não marca a opção.

Esperado: Rótulo associado ao radio (label for='forma-presencial'), dando nome acessível 'Presencial' e área de clique no texto, como nas outras duas opções.

Janela: 1280×900 · interações desde o carregamento: 1. Clique no texto 'Presencial'

Regra declarada: emag:6.2

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

- `/tmp/pw-0/page-2026-10-04T05-07-00-572Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-267582e880b37e31532120223453e5b91ff9b31ada611987ddde04148543849b",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "#forma-presencial: labels.length=0, label \"Presencial\" sem for e sem envolver o input; os outros dois radios têm 1 label (A-09).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O label 'Presencial' não tem atributo for (nem envolve o input); o radio fica sem nome acessível na árvore de acessibilidade e clicar no texto ou no círculo (label::before cobre o input) não marca a opção.",
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

## C-2809458845b5e376a494802370a5990469f8e57a2fb13d359bf1c2b1bc676cec

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
  "cardId": "C-2809458845b5e376a494802370a5990469f8e57a2fb13d359bf1c2b1bc676cec",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Mesmo caso: br-button só com ícone sem aria-label = setas do flatpickr geradas pelo core.js do DS (BRDateTimePicker), não autoradas pela página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Elemento interativo apenas com ícone, sem aria-label (br-button)",
      "subjects": [
        "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(2)>button"
      ],
      "unitIds": [],
      "citation": "unsupported",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-39576de6d241d8c77bf91d7c7e5fe1c62239550455a56cbeb13f885758c9ee41

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O papel combobox (com aria-expanded/aria-controls) está no div .br-input que envolve label, input e botão; o combobox não tem nome acessível (sem aria-label/aria-labelledby) e o input editável tem papel textbox.

Esperado: Elemento com role='combobox' com nome acessível (idealmente o próprio input, nomeado pelo label).

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:4.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)" — <div> "Tipo de serviço Selecione o tipo de serviço."
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)" — <div> "Unidade de atendimento Selecione a unidade de at"

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-10-04T05-07-00-572Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-39576de6d241d8c77bf91d7c7e5fe1c62239550455a56cbeb13f885758c9ee41",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "O role=\"combobox\" sem nome no div .br-input é escrito pelo core.js do DS (BRSelect._setAria: setAttribute(\"role\",\"combobox\")), não pela página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O papel combobox (com aria-expanded/aria-controls) está no div .br-input que envolve label, input e botão; o combobox não tem nome acessível (sem aria-label/aria-labelledby) e o input editável tem papel textbox.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)",
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)"
      ],
      "unitIds": [],
      "citation": "unsupported",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-431d7f0b97cd2f114753667ba56d6fe08d4ad0846df53069584b44bd0bbc1f6a

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com o calendário aberto, os botões de mês anterior e seguinte têm só ícone (<i class="fas fa-chevron-left/right">), sem aria-label nem texto: o nome acessível fica vazio.

Esperado: Botões com nome acessível, ex.: aria-label="Mês anterior" / "Próximo mês".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar no botão de calendário #data-preferencial-btn

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-014` → identificador devolvido por ferramenta (sem arquivo)
- `F-015` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-431d7f0b97cd2f114753667ba56d6fe08d4ad0846df53069584b44bd0bbc1f6a",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Com o calendário aberto, os botões .flatpickr-prev-month/next-month de fato não têm nome, mas vêm do core.js do DS (BRDateTimePicker define prevArrow/nextArrow sem aria-label); não é defeito autorado pela página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Com o calendário aberto, os botões de mês anterior e seguinte têm só ícone (<i class=\"fas fa-chevron-left/right\">), sem aria-label nem texto: o nome acessível fica vazio.",
      "subjects": [
        "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(1)>button",
        "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(2)>button"
      ],
      "unitIds": [],
      "citation": "unsupported",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-46b19a47f7dae74d70dc3306cb753bf38d5144467a2c1550590b28892db5137e

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com o calendário aberto, os 42 dias (span.flatpickr-day) passam a ter tabindex="1", o que coloca todos à frente da ordem natural de tabulação.

Esperado: Sem tabindex maior que zero; os dias fora da ordem de Tab (tabindex=-1, com navegação por setas) ou com tabindex=0 só no dia ativo.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar no botão de calendário #data-preferencial-btn

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-020` → identificador devolvido por ferramenta (sem arquivo)
- `F-027` → identificador devolvido por ferramenta (sem arquivo)
- `F-061` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-46b19a47f7dae74d70dc3306cb753bf38d5144467a2c1550590b28892db5137e",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Os 42 .flatpickr-day recebem tabindex=\"1\" ao abrir, mas isso é feito pelo core.js do DS (BRDateTimePicker onOpen: querySelectorAll(\".flatpickr-day\").setAttribute(\"tabindex\",\"1\")), não pela página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Com o calendário aberto, os 42 dias (span.flatpickr-day) passam a ter tabindex=\"1\", o que coloca todos à frente da ordem natural de tabulação.",
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
      "citation": "unsupported",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-505d5079d821ad3bb092e48d015eaa3b48c8e6af2d5e8943e17411215d64374d

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
  "cardId": "C-505d5079d821ad3bb092e48d015eaa3b48c8e6af2d5e8943e17411215d64374d",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Modal aberto: .dialogo-descarte computa color rgb(51,67,51) (#334333), regra própria da página; não é token do DS (A-03).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
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

## C-52386d4ea64ae51f9e8d87c31a1ee80293eeb865e564d8ad76ab97ebb589e7d0

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página não tem rodapé: nenhum .br-footer, <br-footer> nem elemento footer.

Esperado: Área de Rodapé do Template Base preenchida pelo componente Footer do gov.br DS.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)
- `V-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-52386d4ea64ae51f9e8d87c31a1ee80293eeb865e564d8ad76ab97ebb589e7d0",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "0 elementos footer/.br-footer/br-footer/[role=contentinfo] no documento ao carregar: a área de rodapé do Template Base falta (P-02).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A página não tem rodapé: nenhum .br-footer, <br-footer> nem elemento footer.",
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

## C-584d6ed4fa15d3a3ba7e97a68436207ef67cdae5d0b1812fbc97906247fd5f35

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
  "cardId": "C-584d6ed4fa15d3a3ba7e97a68436207ef67cdae5d0b1812fbc97906247fd5f35",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "#forma-presencial: input.labels.length=0, sem aria-label/aria-labelledby; o <label>Presencial</label> irmão não tem for; axe \"label\" falha nesse nó.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
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

## C-5e45d3bbe8a1f34aedf03f16c74dd392d96416533fe239a59e6b34c78d5667be

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
  "cardId": "C-5e45d3bbe8a1f34aedf03f16c74dd392d96416533fe239a59e6b34c78d5667be",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Mesmo defeito, mesmo elemento e estado do cartão C-584d6ed4. #forma-presencial sem rótulo associado (labels.length=0; label irmão sem for); mesmo defeito A-09. A regra label-title-only não disparou na minha execução do axe.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
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
        "cardId": "C-584d6ed4fa15d3a3ba7e97a68436207ef67cdae5d0b1812fbc97906247fd5f35",
        "atomId": "a1"
      },
      "verdict": "reference"
    }
  ]
}
````

## C-6339ce612d3f68538b5f09c6f57644952b4d71e16fde742b930b861c250d26c9

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O radio 'Presencial' não tem nome acessível: o <label>Presencial</label> irmão não tem atributo for, e clicar no texto não marca a opção.

Esperado: Cada campo de formulário associado ao seu rótulo (label for="forma-presencial"), como nos outros dois radios.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página

Regra declarada: label

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `F-012` → identificador devolvido por ferramenta (sem arquivo)
- `F-065` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6339ce612d3f68538b5f09c6f57644952b4d71e16fde742b930b861c250d26c9",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "#forma-presencial sem nome acessível: labels.length=0, label irmão sem for; axe \"label\" falha (A-09).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O radio 'Presencial' não tem nome acessível: o <label>Presencial</label> irmão não tem atributo for, e clicar no texto não marca a opção.",
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

## C-6c2d2ae60ac74f94752364356199eedd4aaec7d685a20a7054882d6ba3f59f56

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: tabindex='1' no botão de upload: o primeiro Tab após o carregamento vai para ele (no meio do formulário), antes do link 'Ir para o conteúdo', do cabeçalho e dos campos anteriores; após fechar o modal o Tab também volta para ele.

Esperado: Ordem de foco que siga a ordem visual e do DOM (tabindex 0 ou sem tabindex positivo).

Janela: 1280×900 · interações desde o carregamento: 1. Tab (primeira tecla após o carregamento)

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

- `/tmp/pw-0/page-2026-10-04T05-07-29-286Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6c2d2ae60ac74f94752364356199eedd4aaec7d685a20a7054882d6ba3f59f56",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": ".upload-button tabindex=\"1\" (código da página); primeiro Tab após carregar cai nele, antes do skip-link (A-02). Parcial: após fechar o modal, o Tab seguinte ficou em <body> na minha medição.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "tabindex='1' no botão de upload: o primeiro Tab após o carregamento vai para ele (no meio do formulário), antes do link 'Ir para o conteúdo', do cabeçalho e dos campos anteriores; após fechar o modal o Tab também volta para ele.",
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

## C-6da77cae48daac25ddefb12d455981d43c0071e0125883e8d18f9f4bc4924703

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual é indicada só visualmente (classe active, fundo #0c326f); o link não tem aria-current='page' nem outro indicador programático.

Esperado: Página atual identificada programaticamente (aria-current='page').

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

- `/tmp/pw-0/page-2026-10-04T05-07-00-572Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6da77cae48daac25ddefb12d455981d43c0071e0125883e8d18f9f4bc4924703",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Link da paginação <a class=\"page active\" aria-label=\"Página 1\"> sem aria-current; os únicos [aria-current] da página são o crumb e o dia do calendário (A-12).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A página atual é indicada só visualmente (classe active, fundo #0c326f); o link não tem aria-current='page' nem outro indicador programático.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>section>div>div:nth-of-type(2)>nav>a:nth-of-type(1)"
      ],
      "unitIds": [
        "U-fa46b3b01953095c45ccd4ee7da378bc7eaab3a1936698faa3f365516a5be29e"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-806406eb2bb084e0a487259e028c68d06d652e77e3a606b1baf7f8ffd92592f7

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao receber foco pelo teclado, outline:none, box-shadow:none e a borda permanece #888 (regra .campo-servico/.campo-unidade .br-input input:focus-visible); nenhum indicador de foco visível, ao contrário dos demais campos (box-shadow 2px #c2850c).

Esperado: Indicador de foco visível nos campos Tipo de serviço e Unidade de atendimento.

Janela: 1280×900 · interações desde o carregamento: 1. Tab sucessivos até 'Tipo de serviço' e depois 'Unidade de atendimento'

Regra declarada: wcag:2.4.7

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
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-10-04T05-08-23-479Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-806406eb2bb084e0a487259e028c68d06d652e77e3a606b1baf7f8ffd92592f7",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Tab até #servico/#unidade: :focus-visible com outline none, box-shadow none, borda rgb(136,136,136); #nome/#data mostram box-shadow 2px rgb(194,133,12) (A-04).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Ao receber foco pelo teclado, outline:none, box-shadow:none e a borda permanece #888 (regra .campo-servico/.campo-unidade .br-input input:focus-visible); nenhum indicador de foco visível, ao contrário dos demais campos (box-shadow 2px #c2850c).",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>div>input",
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>div>input"
      ],
      "unitIds": [
        "U-27cc0d4a8e5df91ab64931d3374ec1ea9b51d3e9b519f740b3d4b3c1a6c195d8",
        "U-a4c4e6005ce86b914ed8b58011b3f8effcee1326c119327ddd4eb9e9e0540a41"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-8835c5818d20933c2e9f21bebc5cd70dcd2375affb2bdc21fb2ecda9c4fab6db

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No calendário, o dia de hoje usa texto rgb(213,67,9) sobre rgb(253,245,230), 14px peso 600: contraste ≈4,18:1.

Esperado: Contraste mínimo de 4,5:1 para texto de tamanho normal.

Janela: 1280×900 · interações desde o carregamento: 1. Clique no botão 'Abrir calendário' do campo Data preferencial

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: sem-evidencia

### Sujeitos

- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(8)" — <span> "Outubro 4, 2026" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
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
  "cardId": "C-8835c5818d20933c2e9f21bebc5cd70dcd2375affb2bdc21fb2ecda9c4fab6db",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "O dia de hoje tem color rgb(213,67,9) sobre rgb(253,245,230) (14px/600), mas vem do CSS do DS (.flatpickr-calendar .flatpickr-day.today: --red-warm-vivid-50 sobre --orange-vivid-5), não da página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "No calendário, o dia de hoje usa texto rgb(213,67,9) sobre rgb(253,245,230), 14px peso 600: contraste ≈4,18:1.",
      "subjects": [
        "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(8)"
      ],
      "unitIds": [],
      "citation": "unsupported",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-9b4d207128b6e52264e8f0ed1330e502943bbbac351338398e70d9523f0dfbfa

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O modal 'Descartar solicitação?' tem color: rgb(51, 67, 51) (#334333), vindo da regra própria '.dialogo-descarte { color: rgb(51, 67, 51) }'. A cor é herdada pelo título do modal e não corresponde a nenhum token do DS.

Esperado: Cor de texto de um token registrado do gov.br DS (ex.: --color, #333333).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em 'Cancelar'

Regra declarada: ds-token-color

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

### Evidência da execução

- `S-page-005` → identificador devolvido por ferramenta (sem arquivo)
- `F-066` → identificador devolvido por ferramenta (sem arquivo)
- `V-007` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9b4d207128b6e52264e8f0ed1330e502943bbbac351338398e70d9523f0dfbfa",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Com o modal aberto, .br-modal.dialogo-descarte tem color rgb(51,67,51), da regra da página \".dialogo-descarte{color:rgb(51,67,51)}\" em solicitacao-*.css; título herda a cor (A-03).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O modal 'Descartar solicitação?' tem color: rgb(51, 67, 51) (#334333), vindo da regra própria '.dialogo-descarte { color: rgb(51, 67, 51) }'. A cor é herdada pelo título do modal e não corresponde a nenhum token do DS.",
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

## C-af561ed5cf4cc82d1eb8d1e6af8cb1b809f4539fe0a5154eed40dac80c30a2aa

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A caixa/círculo visível dos radios e checkboxes (label::before) tem borda 1px rgb(204,204,204) sobre branco: contraste ≈1,6:1 no estado não marcado.

Esperado: Contorno do controle com contraste mínimo de 3:1 com o fundo adjacente.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: wcag:1.4.11

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-10-04T05-07-29-286Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-af561ed5cf4cc82d1eb8d1e6af8cb1b809f4539fe0a5154eed40dac80c30a2aa",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "A borda 1px rgb(204,204,204) do label::before vem do CSS do DS (.br-radio/.br-checkbox input+label:before, --border-color: var(--gray-20)); a página não a sobrescreve. Não é defeito da página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A caixa/círculo visível dos radios e checkboxes (label::before) tem borda 1px rgb(204,204,204) sobre branco: contraste ≈1,6:1 no estado não marcado.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(7)>div>label",
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(1)>label",
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(2)>label",
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(1)>div:nth-of-type(3)>label",
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(2)>div:nth-of-type(1)>label",
        "body>div:nth-of-type(1)>div>main>form>fieldset:nth-of-type(2)>div:nth-of-type(2)>label"
      ],
      "unitIds": [],
      "citation": "unsupported",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-b77fe865a4838d28bfbf34a40ff293f84af647b77ea0094c3b046ac7be83a012

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Selecione o arquivo' tem aria-hidden='true', mas é focável e é o único controle operável do upload (o input file está com display:none); tecnologia assistiva recebe foco num elemento sem nome nem papel.

Esperado: Controle de upload exposto à tecnologia assistiva com papel de botão e nome (sem aria-hidden em elemento focável e operável).

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

- `/tmp/pw-0/page-2026-10-04T05-07-00-572Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b77fe865a4838d28bfbf34a40ff293f84af647b77ea0094c3b046ac7be83a012",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "aria-hidden=\"true\" no .upload-button é posto pelo core.js do DS (BRUpload._setBehavior); comportamento do componente, não da página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O botão 'Selecione o arquivo' tem aria-hidden='true', mas é focável e é o único controle operável do upload (o input file está com display:none); tecnologia assistiva recebe foco num elemento sem nome nem papel.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>div>button"
      ],
      "unitIds": [],
      "citation": "unsupported",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-c133a6ef2ebd8cc925f609a96c04b80f7fff932d7fb0c9e525c7b85611a483d7

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No estado de erro, #servico e #unidade recebem aria-invalid="true", mas não têm aria-describedby. As mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não estão associadas ao campo, ao contrário dos demais campos (ex.: nome → nome-retorno).

Esperado: Mensagem de erro de cada campo associada programaticamente a ele (aria-describedby apontando para o id da mensagem).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em 'Enviar' com o formulário vazio

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
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção do DOM no estado de erro` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c133a6ef2ebd8cc925f609a96c04b80f7fff932d7fb0c9e525c7b85611a483d7",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Após envio vazio: #servico e #unidade aria-invalid=\"true\", aria-describedby=null; os spans \"Selecione o tipo de serviço.\"/\"Selecione a unidade...\" sem id; #nome -> nome-retorno (A-08).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "No estado de erro, #servico e #unidade recebem aria-invalid=\"true\", mas não têm aria-describedby. As mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não estão associadas ao campo, ao contrário dos demais campos (ex.: nome → nome-retorno).",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>div>input",
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>div>input"
      ],
      "unitIds": [
        "U-51a6b48fcbf886149c29705242f258a4c46c4b607bc8f80c640a3e74faea8b16",
        "U-a10dcb076ad236543b32667bd7e0adfec72fef26085a4924a9eb55ecf74492e3"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-cedd4e088b835254b582984985a03c615de6d584fdd974d488a564ce95468941

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página não tem componente Header do DS (.br-header ou <br-header>). O cabeçalho é um <header class="barra-superior"> próprio, que contém só a marca gov.br.

Esperado: Área de Cabeçalho do Template Base preenchida pelo componente Header do gov.br DS.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página

Regra declarada: ds-page-header

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>header" — <header> "gov.br"

### Unidades candidatas (não são crédito)

- U-3b0dc613459834f10f92faa9a4293beb463bd60e7dba8d3733c18e9508c32d5a — P-01 · sempre · cena 1280x900 · <header> "gov.br": Camada de página (D-83) · não sorteada · área de cabeçalho. A região de cabeçalho da página é um <header> que contém só a marca gov.br (um link); o componente Header do DS não é usado nessa área. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

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
  "cardId": "C-cedd4e088b835254b582984985a03c615de6d584fdd974d488a564ce95468941",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Único cabeçalho é <header class=\"barra-superior\"> com só o link da marca gov.br; 0 .br-header/br-header no documento (P-01).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A página não tem componente Header do DS (.br-header ou <br-header>). O cabeçalho é um <header class=\"barra-superior\"> próprio, que contém só a marca gov.br.",
      "subjects": [
        "body>div:nth-of-type(1)>div>header"
      ],
      "unitIds": [
        "U-3b0dc613459834f10f92faa9a4293beb463bd60e7dba8d3733c18e9508c32d5a"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-cef0e0980ead998fda59790c9209ef5787ba9b0d089251e61a7dd4dd96c6d1d8

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de fechar o modal de descarte (com Esc ou com 'Continuar preenchendo'), o foco vai para <body> em vez de voltar ao botão 'Cancelar' que abriu o modal.

Esperado: Ao fechar o diálogo, o foco volta ao elemento que o abriu, mantendo a ordem de foco.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em 'Cancelar' 3. Pressionar Esc

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(8)>button:nth-of-type(1)" — <button> "Cancelar"

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

### Evidência da execução

- `inspeção: document.activeElement = BODY após Esc e após Enter em 'Continuar preenchendo'` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cef0e0980ead998fda59790c9209ef5787ba9b0d089251e61a7dd4dd96c6d1d8",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Cancelar -> Esc: document.activeElement = BODY, não volta ao botão Cancelar (A-01).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Depois de fechar o modal de descarte (com Esc ou com 'Continuar preenchendo'), o foco vai para <body> em vez de voltar ao botão 'Cancelar' que abriu o modal.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(8)>button:nth-of-type(1)"
      ],
      "unitIds": [
        "U-f29a7aeeab28c9d4933141aff94ee3d84c368205c595930db83ceec28076ec77"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-d2f320400b065eb477296eb5fb7abe72bc96e29613bf06da4152d07d00d1d25f

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
  "cardId": "C-d2f320400b065eb477296eb5fb7abe72bc96e29613bf06da4152d07d00d1d25f",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Os únicos br-button só com ícone e sem nome são os prev/next do calendário (não renderizados ao carregar), criados pelo core.js do DS (prevArrow/nextArrow); os demais têm aria-label. Não é defeito da página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Elemento interativo apenas com ícone, sem aria-label (br-button)",
      "subjects": [
        "body>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(1)>button"
      ],
      "unitIds": [],
      "citation": "unsupported",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-d6f8ca4d8722543912f351afc4be72b61dce8e95b37d5a58e7cd790dc6fabb25

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O texto de apoio do upload diz só 'Um arquivo PDF, JPG ou PNG de até 5 MB.' e não informa que é possível arrastar arquivos.

Esperado: Upload com recurso de arrastar arquivos, informado no texto de apoio abaixo do campo.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página

Regra declarada: govbr-3.7.0-component-upload-985fd2775586

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>p" — <p#documentos-apoio> "Um arquivo PDF, JPG ou PNG de até 5 MB."

### Unidades candidatas (não são crédito)

- U-79d98a860b58b27827eded4bd832cd76e157230c4facd5e7fd6ac7fea5842cf9 — A-10 · sempre · cena 1280x900 · <div> "Documentos comprobatórios (opcional) Selecione o": Estrato S · variante apoio-sem-arraste. O upload aceita arrastar e soltar (comportamento do core.js), mas o texto de apoio informa só formato e tamanho — não diz que o arquivo pode ser arrastado. Sem predicado na referência (nenhuma espécie mede texto); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `govbr-3.7.0-component-upload-985fd2775586` → identificador devolvido por ferramenta (sem arquivo)
- `inspeção do DOM` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d6f8ca4d8722543912f351afc4be72b61dce8e95b37d5a58e7cd790dc6fabb25",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "#documentos-apoio = \"Um arquivo PDF, JPG ou PNG de até 5 MB.\" sem menção a arrastar; o core.js registra dragenter/dragover/drop no .upload-button (A-10).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O texto de apoio do upload diz só 'Um arquivo PDF, JPG ou PNG de até 5 MB.' e não informa que é possível arrastar arquivos.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(6)>p"
      ],
      "unitIds": [
        "U-79d98a860b58b27827eded4bd832cd76e157230c4facd5e7fd6ac7fea5842cf9"
      ],
      "citation": "uncertain",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-e6c6fc97f62bbbf3e2bf0f84514de5f189140ff3cdc3b9887db9281f27189e36

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na mensagem de erro, o botão 'Fechar a mensagem' é um <div class="br-button circle small" role="button" tabindex="0">. A mensagem de sucesso usa <button>.

Esperado: br-button aplicado a um elemento <button type="button">, como nos exemplos oficiais do componente Message.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em 'Enviar' com o formulário vazio

Regra declarada: ds-structure-button-tag

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

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

### Evidência da execução

- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-007` → identificador devolvido por ferramenta (sem arquivo)
- `V-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e6c6fc97f62bbbf3e2bf0f84514de5f189140ff3cdc3b9887db9281f27189e36",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Após Enviar vazio, o fechar da .br-message danger é <div class=\"br-button circle small\" role=\"button\" tabindex=\"0\" aria-label=\"Fechar a mensagem\"> em vez de <button> (A-06).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Na mensagem de erro, o botão 'Fechar a mensagem' é um <div class=\"br-button circle small\" role=\"button\" tabindex=\"0\">. A mensagem de sucesso usa <button>.",
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

## C-e9160bdec96c3992758639cf5c1eca97394c2d8b52f49617b9c885c0a2e7bb56

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
  "cardId": "C-e9160bdec96c3992758639cf5c1eca97394c2d8b52f49617b9c885c0a2e7bb56",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Verdadeiro: 0 .br-header/br-header no documento (só <header class=\"barra-superior\">). O cartão não oferece unidade; seria a P-01 (área de cabeçalho).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
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

## C-e94ccca1b77a3bd24c3c3439c32a2fc75e50c5468ac73f2a00553272a3b8c8c3

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Após envio vazio, os campos recebem aria-invalid='true', mas as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e os inputs não têm aria-describedby; nos demais campos a mensagem está associada (ex.: nome-retorno).

Esperado: Mensagem de erro associada programaticamente ao campo (aria-describedby apontando para o id da mensagem).

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
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/page-2026-10-04T05-10-41-360Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e94ccca1b77a3bd24c3c3439c32a2fc75e50c5468ac73f2a00553272a3b8c8c3",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Após envio vazio: #servico/#unidade aria-invalid=true sem aria-describedby; mensagens sem id, ao contrário de nome-retorno/cpf-retorno (A-08).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Após envio vazio, os campos recebem aria-invalid='true', mas as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e os inputs não têm aria-describedby; nos demais campos a mensagem está associada (ex.: nome-retorno).",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>div>input",
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>div>input"
      ],
      "unitIds": [
        "U-51a6b48fcbf886149c29705242f258a4c46c4b607bc8f80c640a3e74faea8b16",
        "U-a10dcb076ad236543b32667bd7e0adfec72fef26085a4924a9eb55ecf74492e3"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-ecc0f1fa96f3dc26d51e86e9bab9677cb62ba153ea15d801ce23d8be220574d4

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao fechar o modal 'Descartar solicitação?' por Escape, 'Continuar preenchendo', 'Fechar' ou 'Descartar', o foco vai para o body em vez de voltar ao botão Cancelar; o Tab seguinte sai da página e depois recomeça pelo botão de upload.

Esperado: Ao fechar o diálogo, foco devolvido ao botão que o abriu (Cancelar) ou a ponto lógico.

Janela: 1280×900 · interações desde o carregamento: 1. Clique em Cancelar 2. Escape (repetido com Enter em 'Continuar preenchendo', clique em 'Fechar' e Enter em 'Descartar')

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(8)>button:nth-of-type(1)" — <button> "Cancelar"

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

### Evidência da execução

- `/tmp/pw-0/page-2026-10-04T05-12-14-459Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ecc0f1fa96f3dc26d51e86e9bab9677cb62ba153ea15d801ce23d8be220574d4",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Fechar o modal por Esc, Continuar preenchendo, Fechar e Descartar: activeElement = BODY nos quatro casos, não Cancelar (A-01).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Ao fechar o modal 'Descartar solicitação?' por Escape, 'Continuar preenchendo', 'Fechar' ou 'Descartar', o foco vai para o body em vez de voltar ao botão Cancelar; o Tab seguinte sai da página e depois recomeça pelo botão de upload.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(8)>button:nth-of-type(1)"
      ],
      "unitIds": [
        "U-f29a7aeeab28c9d4933141aff94ee3d84c368205c595930db83ceec28076ec77"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-f0927b429f1ff0fcb182ef1b482dc0a4b8257a52f6fbe9235bbdaed5113816fd

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
  "cardId": "C-f0927b429f1ff0fcb182ef1b482dc0a4b8257a52f6fbe9235bbdaed5113816fd",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Estado após envio vazio: o fechar da mensagem é <div class=\"br-button ...\" role=\"button\" tabindex=\"0\">, não <button> (A-06).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
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

## C-ff9792e295b4bfe0e8c8b3279abc51f4abe6cfd106d537a23a7d8587efb27560

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de upload tem tabindex="1": o primeiro Tab depois do carregamento leva ao botão 'Selecione o arquivo' (no meio do formulário, com rolagem da página), antes do link 'Ir para o conteúdo'.

Esperado: Ordem de tabulação seguindo a ordem lógica do DOM, sem tabindex positivo (e-MAG 1.4).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Pressionar Tab

Regra declarada: govbr-3.7.0-accessibility-global-79db88c7f55d

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

- `inspeção: document.activeElement após 1º Tab = button.upload-button; 2º Tab = a.br-item (skip link)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ff9792e295b4bfe0e8c8b3279abc51f4abe6cfd106d537a23a7d8587efb27560",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": ".upload-button tem tabindex=\"1\" (definido pelo código da página: upload-button.tabIndex=1); primeiro Tab após o carregamento foca o botão (scrollY=518), antes do skip-link (A-02).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)",
    "código-fonte dos assets congelados"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O botão de upload tem tabindex=\"1\": o primeiro Tab depois do carregamento leva ao botão 'Selecione o arquivo' (no meio do formulário, com rolagem da página), antes do link 'Ir para o conteúdo'.",
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
