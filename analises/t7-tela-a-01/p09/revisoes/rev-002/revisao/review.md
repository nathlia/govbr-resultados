# Revisão semântica — pacote fechado

Versão: flow-semantic-1.5.0 · 28 cartões únicos · 0 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 0 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 4 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 39 sujeitos · 28 cartão(ões) sem evidência verificada · 26 com unidade candidata · estimativa **168 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 11 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

## C-0c4d65a159887141bd8c5d912d732e061cf712be25944c239fdaacc5a776cc51

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: No estado de erro, as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e os inputs #servico e #unidade só recebem aria-invalid="true", sem aria-describedby. Os outros campos com erro apontam aria-describedby para a mensagem.

Esperado: Mensagem de erro associada programaticamente ao campo (aria-describedby apontando para o id da mensagem).

Janela: 1280×900 · interações desde o carregamento: 1. Clicou em Enviar com o formulário vazio

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

- `/tmp/pw-0/erro-envio.png` → não encontrado na evidência preservada da execução
- `/tmp/pw-0/page-2026-10-04T15-01-05-343Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0c4d65a159887141bd8c5d912d732e061cf712be25944c239fdaacc5a776cc51",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido após envio vazio: #servico e #unidade com aria-invalid=true e aria-describedby=null; as mensagens 'Selecione o tipo de serviço.'/'Selecione a unidade de atendimento.' sem id; nome/cpf/descricao referenciam *-retorno.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "No estado de erro, as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e os inputs #servico e #unidade só recebem aria-invalid=\"true\", sem aria-describedby. Os outros campos com erro apontam aria-describedby para a mensagem.",
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

## C-0ce13cce311cacf487559557addb29b2dd6adbb61eafb7ed968dbda17495a684

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: tabindex="1" no botão de upload: o primeiro Tab após o carregamento leva a ele (meio do formulário), antes do skip link 'Ir para o conteúdo' e de todo o cabeçalho

Esperado: Ordem de foco que siga a sequência visual/lógica (sem tabindex positivo); o skip link deve ser o primeiro elemento focável

Janela: 1280×900 · interações desde o carregamento: 1. Tab

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

- `inspeção: document.activeElement após 1º Tab = BUTTON.upload-button` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0ce13cce311cacf487559557addb29b2dd6adbb61eafb7ed968dbda17495a684",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: button.upload-button tem tabindex=\"1\"; o primeiro Tab após o carregamento foca esse botão, antes do atalho 'Ir para o conteúdo'.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "tabindex=\"1\" no botão de upload: o primeiro Tab após o carregamento leva a ele (meio do formulário), antes do skip link 'Ir para o conteúdo' e de todo o cabeçalho",
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

## C-1a32000a74f053c3cedbf6789ef05adbfce0268a0b2aab0ee1ba1548d1c7be57

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de upload tem aria-hidden="true", mas é focável (tabindex=1) e operável (Enter abre o seletor de arquivo). O input file #documentos está com display:none, então o único controle operável do campo 'Documentos comprobatórios' fica oculto para tecnologias assistivas, sem nome nem papel expostos.

Esperado: O controle focável e operável de envio de arquivo é exposto à árvore de acessibilidade com papel de botão e nome que identifica o campo.

Janela: 1280×900 · interações desde o carregamento: 1. Pressionou Tab uma vez após o carregamento 2. Pressionou Enter no botão Selecione o arquivo (abriu seletor de arquivo)

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

- `/tmp/pw-0/tab1.png` → não encontrado na evidência preservada da execução
- `/tmp/pw-0/page-2026-10-04T14-59-42-645Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1a32000a74f053c3cedbf6789ef05adbfce0268a0b2aab0ee1ba1548d1c7be57",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: aria-hidden=\"true\" no button.upload-button é escrito pelo core do DS (upload.js), e o input #documentos display:none é do componente; a ocultação para TA é do DS. Enter abre o seletor (confirmado); o tabindex=1 autoral é A-02, não o foco da alegação.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O botão de upload tem aria-hidden=\"true\", mas é focável (tabindex=1) e operável (Enter abre o seletor de arquivo). O input file #documentos está com display:none, então o único controle operável do campo 'Documentos comprobatórios' fica oculto para tecnologias assistivas, sem nome nem papel expostos.",
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
  "rationale": "Medido: 0 .br-footer/br-footer/footer/[role=contentinfo] no DOM e shadow roots. Seria P-02, não oferecida no cartão (sujeito <html>).",
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
      "citation": "supported",
      "decisao": "defeito-novo-correto",
      "verdict": "novel"
    }
  ]
}
````

## C-1cc6cb3c9411c535760bc15dd59e519c95ef242dcf4111ead5dfee18b1da9c4a

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Não há .br-footer nem <br-footer> nem nenhuma área de rodapé na página

Esperado: Área de Rodapé do Template Base com o componente Footer do DS (.br-footer)

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1cc6cb3c9411c535760bc15dd59e519c95ef242dcf4111ead5dfee18b1da9c4a",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: 0 elementos .br-footer, br-footer, footer ou [role=contentinfo] no documento (DOM e shadow roots).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Não há .br-footer nem <br-footer> nem nenhuma área de rodapé na página",
      "subjects": [
        "body"
      ],
      "unitIds": [
        "U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-2208cf6e9899d38d87b475da029ce671757a7085035902ab391bdec6b3264f30

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Selecione o arquivo' tem tabindex="1"; o primeiro Tab após o carregamento vai para ele, antes do atalho 'Ir para o conteúdo', do link gov.br, da trilha e dos campos Nome/CPF anteriores.

Esperado: Ordem de foco seguindo a ordem lógica/visual da página (sem tabindex positivo).

Janela: 1280×900 · interações desde o carregamento: 1. Pressionou Tab uma vez após o carregamento

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

- `/tmp/pw-0/tab1.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2208cf6e9899d38d87b475da029ce671757a7085035902ab391bdec6b3264f30",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: button.upload-button tabindex=\"1\"; o primeiro Tab após o carregamento o foca, antes do atalho 'Ir para o conteúdo' e dos campos anteriores.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O botão 'Selecione o arquivo' tem tabindex=\"1\"; o primeiro Tab após o carregamento vai para ele, antes do atalho 'Ir para o conteúdo', do link gov.br, da trilha e dos campos Nome/CPF anteriores.",
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

## C-26a7fc33ecbd9f7a89f8e7c7cd041a6c2983be17ee70e6a43dada22d497b359f

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual da paginação só é indicada visualmente (círculo preenchido, classe 'active'); o link não tem aria-current nem outro texto que informe o estado. Na página 2, o link 'Página 2' também não tem aria-current.

Esperado: A página atual é exposta programaticamente, por exemplo aria-current="page" no link ativo.

Janela: 1280×900 · interações desde o carregamento: 1. Clicou em 'Página 2'

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

- `/tmp/pw-0/page-2026-10-04T15-03-16-339Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-26a7fc33ecbd9f7a89f8e7c7cd041a6c2983be17ee70e6a43dada22d497b359f",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: a.page.active ('Página 1', e 'Página 2' após clicar nela) sem aria-current; nenhum link de página tem aria-current, enquanto a trilha usa aria-current=page.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A página atual da paginação só é indicada visualmente (círculo preenchido, classe 'active'); o link não tem aria-current nem outro texto que informe o estado. Na página 2, o link 'Página 2' também não tem aria-current.",
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
  "rationale": "Medido: os únicos <button> br-button só com ícone e sem nome são as setas de mês do calendário (não renderizadas), geradas pelo core do DS (datetimepicker.js prevArrow/nextArrow); não é autoria da página.",
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
      "citation": "unsupported",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-2d5bcf1276c9526a90c054e4451679589068e999c6797c7410afe89e7dceaaa5

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O CSS da aplicação define color: rgb(51, 67, 51) (#334333) no diálogo de descarte; essa cor não é token do DS

Esperado: Cor da paleta predefinida do DS (por exemplo, o token de texto #333333)

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em Cancelar

Regra declarada: govbr-3.7.0-foundation-global-21b1a2733f7b

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)
- `F-015` → identificador devolvido por ferramenta (sem arquivo)
- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2d5bcf1276c9526a90c054e4451679589068e999c6797c7410afe89e7dceaaa5",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido após clicar Cancelar: .dialogo-descarte computed color rgb(51,67,51), definido no CSS da página (.dialogo-descarte{color:#334333}); fora da paleta do DS.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O CSS da aplicação define color: rgb(51, 67, 51) (#334333) no diálogo de descarte; essa cor não é token do DS",
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

## C-30be8772d0db4a0442b4b3d69d2f91708c9f8bbc187fcb40f621a0ae2d746505

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O radio 'Presencial' não tem nome acessível: o rótulo <label>Presencial</label> não tem atributo for e não envolve o input (árvore de acessibilidade: 'radio' sem nome). Clicar no texto 'Presencial' não marca a opção.

Esperado: O radio tem nome acessível 'Presencial', com rótulo associado programaticamente (label for="forma-presencial"), como nas outras duas opções.

Janela: 1280×900 · interações desde o carregamento: 1. Clicou no texto 'Presencial'

Regra declarada: wcag:4.1.2

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

- `/tmp/pw-0/page-2026-10-04T14-57-14-640Z.yml` → não encontrado na evidência preservada da execução
- `/tmp/pw-0/page-2026-10-04T15-00-36-928Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-30be8772d0db4a0442b4b3d69d2f91708c9f8bbc187fcb40f621a0ae2d746505",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: <label>Presencial</label> sem for e não envolve o input; #forma-presencial.labels.length=0, 'radio' sem nome no ariaSnapshot; clicar em 'Presencial' manteve checked=false.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O radio 'Presencial' não tem nome acessível: o rótulo <label>Presencial</label> não tem atributo for e não envolve o input (árvore de acessibilidade: 'radio' sem nome). Clicar no texto 'Presencial' não marca a opção.",
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
  "rationale": "Medido com o diálogo aberto: .dialogo-descarte computed color rgb(51,67,51), vindo do CSS da página (.dialogo-descarte{color:#334333}); não é token do DS.",
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
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-55087915ec32ac3f6d86249a7c52986c0e74557972cea06b51086ac6cb0b2dc3

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O radio 'Presencial' não tem nome acessível: o <label>Presencial</label> não tem for="forma-presencial" (os outros radios do grupo têm), e clicar no texto não seleciona a opção

Esperado: Rótulo associado ao campo (label for="forma-presencial")

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
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-006` → identificador devolvido por ferramenta (sem arquivo)
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-014` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-55087915ec32ac3f6d86249a7c52986c0e74557972cea06b51086ac6cb0b2dc3",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: <label>Presencial</label> sem for (as outras opções têm for), #forma-presencial.labels.length=0, radio sem nome no ariaSnapshot; clicar no texto deixou checked=false.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O radio 'Presencial' não tem nome acessível: o <label>Presencial</label> não tem for=\"forma-presencial\" (os outros radios do grupo têm), e clicar no texto não seleciona a opção",
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
  "rationale": "Medido: #forma-presencial sem label associado (input.labels.length=0; <label>Presencial</label> sem for, não envolve o input); axe 'label' falha em #forma-presencial; ariaSnapshot mostra 'radio' sem nome.",
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
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-5b22ea593239de55617704607e6e534a6309682b8ace0cd89f42eccb41abd388

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de abrir o diálogo 'Descartar solicitação?' por Cancelar e fechá-lo com Esc ou com 'Continuar preenchendo', o diálogo é removido e o foco vai para BODY em vez de voltar ao botão Cancelar.

Esperado: Ao fechar o diálogo, o foco volta ao elemento que o abriu (botão Cancelar).

Janela: 1280×900 · interações desde o carregamento: 1. Clicou em Cancelar 2. Pressionou Escape (foco ficou em BODY) 3. Clicou em Cancelar 4. Pressionou Enter em 'Continuar preenchendo' (foco ficou em BODY)

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(8)>button:nth-of-type(1)" — <button> "Cancelar"

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `/tmp/pw-0/dialogo.png` → não encontrado na evidência preservada da execução
- `/tmp/pw-0/page-2026-10-04T15-03-00-440Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5b22ea593239de55617704607e6e534a6309682b8ace0cd89f42eccb41abd388",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: após Cancelar→Esc e Cancelar→Enter em 'Continuar preenchendo', o diálogo some e document.activeElement=BODY. Defeito é o de A-01 (não oferecido no cartão; sujeito Cancelar).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Depois de abrir o diálogo 'Descartar solicitação?' por Cancelar e fechá-lo com Esc ou com 'Continuar preenchendo', o diálogo é removido e o foco vai para BODY em vez de voltar ao botão Cancelar.",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(8)>button:nth-of-type(1)"
      ],
      "unitIds": [],
      "citation": "supported",
      "decisao": "defeito-novo-correto",
      "verdict": "novel"
    }
  ]
}
````

## C-5c860bae6b7a7c6c4926090fa9a1364e73d4761332e87d5ea5219edc78367596

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao receber foco pelo teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' não exibem indicador: a regra da página '.campo-servico .br-input input:focus, ... .campo-unidade ...' define outline:none, box-shadow:none e borda #888 (igual ao repouso). Os demais campos mostram sombra/borda #c2850c no foco.

Esperado: Indicador de foco visível quando os campos recebem foco pelo teclado, como nos demais campos (padrão de foco do DS).

Janela: 1280×900 · interações desde o carregamento: 1. Pressionou Tab 9 vezes até o foco chegar em #servico 2. Pressionou Tab mais uma vez até #unidade

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

- `/tmp/pw-0/tab9.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5c860bae6b7a7c6c4926090fa9a1364e73d4761332e87d5ea5219edc78367596",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido focando por Tab: #servico e #unidade outline none, box-shadow none, borda rgb(136,136,136) igual ao repouso (CSS da página .campo-servico/.campo-unidade input:focus); #nome mostra box-shadow 0 0 0 2px rgb(194,133,12).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Ao receber foco pelo teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' não exibem indicador: a regra da página '.campo-servico .br-input input:focus, ... .campo-unidade ...' define outline:none, box-shadow:none e borda #888 (igual ao repouso). Os demais campos mostram sombra/borda #c2850c no foco.",
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
  "rationale": "Mesmo sujeito (#forma-presencial) e mesmo defeito do cartão 584d: radio sem rótulo associado (labels.length=0). axe label-title-only não dispara na medição; a falha medida é 'label'.",
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
      "citation": "unsupported",
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

## C-7ad3ed2e3e3cf67ba4f46f818bec37df28d2616a02fff63327a784737478f6af

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A caixa de checkbox e o círculo de radio, desenhados pelo ::before do label (24x24), têm borda de 1px rgb(204,204,204) sobre fundo branco rgb(255,255,255), contraste 1,61:1. São o único limite visual do controle não marcado.

Esperado: Limite visual do controle com contraste de pelo menos 3:1 em relação às cores adjacentes.

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

- `/tmp/pw-0/estado0-full.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7ad3ed2e3e3cf67ba4f46f818bec37df28d2616a02fff63327a784737478f6af",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: label::before 24px com border 1px rgb(204,204,204) vem do core CSS do DS (.br-checkbox input+label:before{border:1px solid var(--border-color)}, --border-color=gray-20); a página não sobrescreve. Valor do DS, não defeito da página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A caixa de checkbox e o círculo de radio, desenhados pelo ::before do label (24x24), têm borda de 1px rgb(204,204,204) sobre fundo branco rgb(255,255,255), contraste 1,61:1. São o único limite visual do controle não marcado.",
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

## C-8741cb30bc83708882868d752314b901d82fc17e2e96392ceedbc99a39114903

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A área de cabeçalho é um <header class="barra-superior"> próprio, só com o link 'gov.br'; não há .br-header nem <br-header> no documento

Esperado: Área de Cabeçalho do Template Base preenchida pelo componente Header do DS (.br-header)

Janela: 1280×900 · interações desde o carregamento: nenhuma

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8741cb30bc83708882868d752314b901d82fc17e2e96392ceedbc99a39114903",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: único header é <header class=\"barra-superior\"> com só o link gov.br; 0 elementos .br-header/br-header.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "A área de cabeçalho é um <header class=\"barra-superior\"> próprio, só com o link 'gov.br'; não há .br-header nem <br-header> no documento",
      "subjects": [
        "body>div:nth-of-type(1)>div>header"
      ],
      "unitIds": [
        "U-3b0dc613459834f10f92faa9a4293beb463bd60e7dba8d3733c18e9508c32d5a"
      ],
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-975f102bc285c4dd2ca30b021cc539fe8645c617542f87de3d0a8f37a0047fa2

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O único controle visível do upload (button 'Selecione o arquivo') tem aria-hidden="true" mas é focável (tabindex=1); o input file #documentos tem display:none. O upload fica inacessível para tecnologia assistiva

Esperado: Elemento focável não deve ter aria-hidden; o controle de seleção de arquivo deve ser exposto com nome acessível

Janela: 1280×900 · interações desde o carregamento: nenhuma

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-975f102bc285c4dd2ca30b021cc539fe8645c617542f87de3d0a8f37a0047fa2",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: o aria-hidden=\"true\" do button.upload-button é escrito pelo próprio core do DS (upload.js cria o botão com aria-hidden) e o input #documentos display:none também é do componente; a exposição à TA vem do DS, não da página. O tabindex=1 (autoral, A-02) é só detalhe da alegação.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O único controle visível do upload (button 'Selecione o arquivo') tem aria-hidden=\"true\" mas é focável (tabindex=1); o input file #documentos tem display:none. O upload fica inacessível para tecnologia assistiva",
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

## C-985daeac2f50f1cff2aa07b40cb275287a401320bc17592d2fea8ee2f6459190

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com o calendário aberto, os botões de mês anterior/seguinte só contêm ícone <i> e não têm aria-label, title nem texto: nome acessível vazio.

Esperado: Botões com nome acessível, por exemplo 'Mês anterior' e 'Próximo mês'.

Janela: 1280×900 · interações desde o carregamento: 1. Clicou no botão 'Abrir calendário' do campo Data preferencial

Regra declarada: wcag:4.1.2

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

- `/tmp/pw-0/calendario.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-985daeac2f50f1cff2aa07b40cb275287a401320bc17592d2fea8ee2f6459190",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: as setas de mês (button.br-button.circle.small com <i fa-chevron-*>, sem nome) vêm do core do DS (datetimepicker.js prevArrow/nextArrow), não da página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Com o calendário aberto, os botões de mês anterior/seguinte só contêm ícone <i> e não têm aria-label, title nem texto: nome acessível vazio.",
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

## C-aeb7ff6c30bbc2b7d4bbe9f88cc6e4e5a6e6b555ac940a8e8a89fa19cb449bd9

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Fechar a mensagem' da mensagem de erro é <div class="br-button circle small" role="button" tabindex="0"> (na mensagem de sucesso é um <button>)

Esperado: br-button aplicado a um elemento <button type="button">

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em Enviar com o formulário vazio

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-aeb7ff6c30bbc2b7d4bbe9f88cc6e4e5a6e6b555ac940a8e8a89fa19cb449bd9",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido após envio vazio: o Fechar da .br-message.danger é <div class=\"br-button circle small\" role=\"button\" tabindex=\"0\" aria-label=\"Fechar a mensagem\">, não <button>. (Comparação com a mensagem de sucesso não medida.)",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "O botão 'Fechar a mensagem' da mensagem de erro é <div class=\"br-button circle small\" role=\"button\" tabindex=\"0\"> (na mensagem de sucesso é um <button>)",
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

## C-ba0601a72c2455f4e11ada40ff82e2774715c721a59bf9adfd3aee33f53220e0

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com foco por teclado, os inputs dos selects 'Tipo de serviço' e 'Unidade de atendimento' ficam sem indicador: outline none, box-shadow none e borda inalterada (#888). O CSS da aplicação (.campo-servico/.campo-unidade .br-input input:focus) anula o foco do DS, que os outros inputs mantêm (box-shadow 0 0 0 2px #c2850c)

Esperado: Indicador de foco visível, como o padrão do DS nos demais campos

Janela: 1280×900 · interações desde o carregamento: 1. Tab até #servico 2. Tab até #unidade

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

- `inspeção de estilo calculado no foco; screenshot /tmp/pw-0/page-2026-10-04T15-09-53-897Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ba0601a72c2455f4e11ada40ff82e2774715c721a59bf9adfd3aee33f53220e0",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido com foco por Tab: #servico e #unidade outline none, box-shadow none, borda rgb(136,136,136) inalterada (regra da página .campo-servico/.campo-unidade input:focus); #nome tem box-shadow 0 0 0 2px rgb(194,133,12).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Com foco por teclado, os inputs dos selects 'Tipo de serviço' e 'Unidade de atendimento' ficam sem indicador: outline none, box-shadow none e borda inalterada (#888). O CSS da aplicação (.campo-servico/.campo-unidade .br-input input:focus) anula o foco do DS, que os outros inputs mantêm (box-shadow 0 0 0 2px #c2850c)",
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

## C-bb0126a72c9152778b299509d8a8a4a662dc69222a8dc0e1346801a7372be63f

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao fechar o diálogo 'Descartar solicitação?' (Esc ou 'Continuar preenchendo') o foco vai para <body>, não volta ao botão Cancelar que o abriu

Esperado: Ao fechar o modal, o foco volta ao elemento que o acionou

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em Cancelar 2. Pressionar Escape

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(8)>button:nth-of-type(1)" — <button> "Cancelar"

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `inspeção: document.activeElement = BODY após fechar` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-bb0126a72c9152778b299509d8a8a4a662dc69222a8dc0e1346801a7372be63f",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: Cancelar→Esc e Cancelar→'Continuar preenchendo' removem o diálogo e deixam document.activeElement=BODY. Defeito é o de A-01 (não oferecida no cartão; sujeito Cancelar).",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Ao fechar o diálogo 'Descartar solicitação?' (Esc ou 'Continuar preenchendo') o foco vai para <body>, não volta ao botão Cancelar que o abriu",
      "subjects": [
        "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(8)>button:nth-of-type(1)"
      ],
      "unitIds": [],
      "citation": "supported",
      "decisao": "defeito-novo-correto",
      "verdict": "novel"
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
  "rationale": "Medido: os únicos <button> br-button só com ícone e sem nome são as setas de mês do calendário (não renderizadas), geradas pelo core do DS (datetimepicker.js prevArrow/nextArrow); não é autoria da página.",
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
      "citation": "unsupported",
      "decisao": "incorreta",
      "verdict": "false"
    }
  ]
}
````

## C-e1f188e3cbd9f6459b7f63ed741189be7ab011fb0688eef248091b260e557c01

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões de mês anterior/seguinte do calendário só têm ícone (<i class="fas fa-chevron-left/right">), sem aria-label nem texto

Esperado: Nome acessível descritivo, por exemplo aria-label='Mês anterior' / 'Próximo mês'

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: emag-2.2

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e1f188e3cbd9f6459b7f63ed741189be7ab011fb0688eef248091b260e557c01",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido: os botões de mês (button.br-button.circle.small com <i fa-chevron-left/right>, sem nome) são gerados pelo core do DS (datetimepicker.js, prevArrow/nextArrow do flatpickr), não pela página.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Os botões de mês anterior/seguinte do calendário só têm ícone (<i class=\"fas fa-chevron-left/right\">), sem aria-label nem texto",
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
  "rationale": "Medido: 0 .br-header/br-header no DOM e shadow roots; o único header é .barra-superior só com o link gov.br. Seria P-01, não oferecida no cartão (sujeito <html>).",
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
      "citation": "supported",
      "decisao": "defeito-novo-correto",
      "verdict": "novel"
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
  "rationale": "Medido após envio vazio: o Fechar da mensagem é <div class=\"br-button circle small\" role=\"button\" tabindex=\"0\" aria-label=\"Fechar a mensagem\">, br-button em <div> em vez de <button>.",
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
      "citation": "supported",
      "decisao": "defeito-do-gabarito",
      "verdict": "reference"
    }
  ]
}
````

## C-f54bf64eb4dc1e6b57d8cdcdef8125de2cfc4db53e78bdf391b9c76b84a3a885

Estado: concluído

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Após o envio inválido, as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não estão em aria-describedby dos campos (os demais campos referenciam seu *-retorno)

Esperado: Mensagem de erro associada programaticamente ao campo (id + aria-describedby)

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em Enviar com o formulário vazio

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

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f54bf64eb4dc1e6b57d8cdcdef8125de2cfc4db53e78bdf391b9c76b84a3a885",
  "status": "reviewed",
  "reviewer": "agente-revisor-opus (cego)",
  "rationale": "Medido após envio vazio: mensagens de #servico e #unidade sem id; ambos sem aria-describedby, enquanto nome/cpf/descricao referenciam *-retorno.",
  "complete": true,
  "evidenceRefs": [
    "medição própria na página congelada (Playwright headless 1280x900)"
  ],
  "atoms": [
    {
      "id": "a1",
      "text": "Após o envio inválido, as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não estão em aria-describedby dos campos (os demais campos referenciam seu *-retorno)",
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
