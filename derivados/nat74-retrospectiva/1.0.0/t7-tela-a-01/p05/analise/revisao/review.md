# Revisão semântica — pacote fechado

Versão: flow-semantic-1.7.0 · 28 cartões únicos · 28 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 28 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 73 sujeitos · 28 cartão(ões) sem evidência verificada · 26 com unidade candidata · estimativa **168 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

Nenhum orçamento de revisão foi declarado. Declare antes de começar — depois de ver os cartões já não é orçamento.

Cegueira: o texto livre da execução está retido em todos os cartões. 12 deles contêm termos que nomeiam o braço, e é isso que a retenção esconde. **Não abra `package.json` enquanto decide**: ele guarda `config.arm` e o caminho do arquivo da execução.

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

**Vínculo de revisão (exceção declarada):** quando a alegação está certa sobre uma unidade que a ancoragem não ofereceu (ausência global ancorada em <html>/body, host no lugar do controle interno, participante relacionado, transição), acrescente ao átomo `"links"`: [{ "contrato": "vinculo-revisao-1.0.0", "unitId", "subjects", "scene", "state" (estado medido), "relation" (ausencia-global | host-interno | participante-relacionado | transicao), "evidence", "justification", "reviewer" (você), "binding" (o do cartão) }]. Nada cria vínculo por você; o scorer recusa outra cena, estado não medido, relação que não cabe na árvore medida, falta de evidência.

## C-06ea4a8cd4507833b76126ecf99f54caddb43f0468ae0128df7ff3046173b620

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O modal de descarte define color: #334333 (rgb(51,67,51)), herdado pelo título 'Descartar solicitação?'. Esse valor não pertence ao registro de tokens do DS.

Esperado: Cor de texto a partir de um token do DS (por exemplo, a cor padrão de texto #333333).

Janela: 1280×900 · interações desde o carregamento: 1. Clique em Cancelar

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

- `S-page-004` → identificador devolvido por ferramenta (sem arquivo)
- `F-062` → identificador devolvido por ferramenta (sem arquivo)
- `V-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-06ea4a8cd4507833b76126ecf99f54caddb43f0468ae0128df7ff3046173b620",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-09b6031a054adda60d2ffa418f97b4d1413c6c0f0d01ab24a30e2c64a9cc595c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão Fechar da Message de erro é um <div class="br-button circle small" role="button" tabindex="0">. Na Message de sucesso, o mesmo botão é um <button>.

Esperado: br-button aplicado a um elemento <button type="button">.

Janela: 1280×900 · interações desde o carregamento: 1. Clique em Enviar com o formulário vazio

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
  "cardId": "C-09b6031a054adda60d2ffa418f97b4d1413c6c0f0d01ab24a30e2c64a9cc595c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-13231419f6bbf838be3c30afc8319e7e6b3777855986a0e96e7ba13a1f7ff97b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Selecione o arquivo' tem aria-hidden="true", mas recebe foco (tabindex=1). Como o input file #documentos está com display:none, o upload fica sem controle acessível para leitores de tela (o botão aparece sem nome).

Esperado: O controle de upload focável fica exposto na árvore de acessibilidade, com nome, e sem aria-hidden.

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
  "cardId": "C-13231419f6bbf838be3c30afc8319e7e6b3777855986a0e96e7ba13a1f7ff97b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1e2cff9336e4293ea18a4d2b41cdb0bfe57a5bf69db5e0f001182b4d030a122d

Estado: pendente

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
  "cardId": "C-1e2cff9336e4293ea18a4d2b41cdb0bfe57a5bf69db5e0f001182b4d030a122d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1fcbf57e900134a0d4c914349d47b17a6ce017f44076ba96f8f8c95427295ba9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões de mês anterior e mês seguinte do calendário contêm só um ícone <i> e não têm aria-label nem texto, por isso ficam sem nome acessível.

Esperado: Nome acessível descritivo, por exemplo aria-label="Mês anterior" / "Próximo mês".

Janela: 1280×900 · interações desde o carregamento: 1. Clique no botão de calendário #data-preferencial-btn

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
- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-1fcbf57e900134a0d4c914349d47b17a6ce017f44076ba96f8f8c95427295ba9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-294e35e4eac04e94cf8c44074c5219233b8f31d44a0718c5d7974b21805583be

Estado: pendente

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
  "cardId": "C-294e35e4eac04e94cf8c44074c5219233b8f31d44a0718c5d7974b21805583be",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2f247d5a66edd9f84a95f76879dffac74e5d2f9db3d269256763956a20d88d38

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O rádio 'Presencial' não tem nome acessível: o <label>Presencial</label> não tem atributo for e não envolve o input (a árvore de acessibilidade mostra 'radio' sem nome). Clicar no texto 'Presencial' não marca a opção (checked continua false).

Esperado: O rádio deve ter o rótulo associado de forma programática (label for='forma-presencial'), com o nome 'Presencial' e área de clique no rótulo, como as outras opções do grupo.

Janela: 1280×900 · interações desde o carregamento: nenhuma

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

- `Playwright browser_evaluate (DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `Playwright browser_snapshot (árvore de acessibilidade)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-2f247d5a66edd9f84a95f76879dffac74e5d2f9db3d269256763956a20d88d38",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-384df7828dafc71e3da77160a60e1635b08c5397dafab59676c9ad9ec4fecb21

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Selecione o arquivo' tem aria-hidden='true', mas é focável e operável (abre o seletor de arquivos). O input file #documentos tem display:none, então este botão é o único acesso ao upload e fica oculto para tecnologias assistivas.

Esperado: Um elemento focável e operável não deve ter aria-hidden='true'; o controle de upload deve ser exposto com papel e nome (ex.: 'Selecione o arquivo — Documentos comprobatórios').

Janela: 1280×900 · interações desde o carregamento: 1. Tab (o foco vai para o botão de upload)

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

- `Playwright browser_evaluate (DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `Playwright browser_snapshot (árvore de acessibilidade)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-384df7828dafc71e3da77160a60e1635b08c5397dafab59676c9ad9ec4fecb21",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-3ff3ca701a7789a801b1f8e7e6501e32bc29d60a1d6a7492095f3a6fa98e1aa1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao fechar o modal 'Descartar solicitação?' por Escape ou por 'Continuar preenchendo', o foco vai para <body> e não volta ao botão Cancelar que abriu o modal.

Esperado: Ao fechar o modal, o foco volta ao elemento que o abriu (Cancelar).

Janela: 1280×900 · interações desde o carregamento: 1. Clique em Cancelar 2. Escape

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

- `Inspeção: document.activeElement = body após fechar` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-3ff3ca701a7789a801b1f8e7e6501e32bc29d60a1d6a7492095f3a6fa98e1aa1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5e52feea3498dfd5b26a70573eb955161c05d4a1adcdc1f4080bfe1b5226a357

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A Área de Cabeçalho é um <header class="barra-superior"> próprio, só com a marca gov.br; não há .br-header nem <br-header> no documento.

Esperado: Área de Cabeçalho do Template Base preenchida pelo componente Header (.br-header ou <br-header>).

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
- `V-006` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5e52feea3498dfd5b26a70573eb955161c05d4a1adcdc1f4080bfe1b5226a357",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-6079d1246370944fc3e7f8d463e4a62205021e2769034dfd985567c458ceabf5

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual da paginação é indicada só visualmente (classe 'active', fundo escuro). O link não tem aria-current='page' nem outra indicação programática; a árvore de acessibilidade mostra 'Página 1', 'Página 2' e 'Página 3' sem diferença.

Esperado: A página atual deve ser exposta de forma programática (aria-current='page' no link ativo).

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

- `Playwright browser_evaluate (DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `Playwright browser_snapshot (árvore de acessibilidade)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-6079d1246370944fc3e7f8d463e4a62205021e2769034dfd985567c458ceabf5",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-60fed3c7b134a175d9972bc003eb47d1fa01fde4a8a58ea1327cfa391a83ed12

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na Message de erro, o botão Fechar fica à esquerda (x=201) e o ícone semântico fa-times-circle fica à direita (x=1019). A ordem no DOM é close, content, icon.

Esperado: Ícone semântico à esquerda e botão Fechar no topo à direita da Message, como na Message de sucesso.

Janela: 1280×900 · interações desde o carregamento: 1. Clique em Enviar com o formulário vazio

Regra declarada: govbr-3.7.0-component-message-66b01a712e67

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(1)>div>div:nth-of-type(1)" — <div>

### Unidades candidatas (não são crédito)

- U-1891342c11520896b9770ea0694cf80073cc0559489c26af1c1a3f9af0dedee1 — A-11 · apos-envio-vazio · cena 1280x900 · <div> "Não foi possível enviar. Há 8 campo(s) obrigatór": Estrato S · variante icone-e-fechar-trocados. Na mensagem de retorno o botão Fechar está à esquerda e o ícone semântico à direita — o inverso da anatomia do componente. Sem predicado na referência (nenhuma espécie mede posição); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `Inspeção getBoundingClientRect` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-60fed3c7b134a175d9972bc003eb47d1fa01fde4a8a58ea1327cfa391a83ed12",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-73e8720a55bee59f92e8d482983a2fce16a68eaba642cd6deb18601cf6e6bb8e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: tabindex="1" no botão de upload: o primeiro Tab após o carregamento vai para esse botão, no meio do formulário, antes do skip link 'Ir para o conteúdo', da marca e do breadcrumb.

Esperado: Sem tabindex positivo; a ordem de foco segue a ordem do DOM e começa pelo salto para o conteúdo.

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

- `Inspeção: document.activeElement após o 1º Tab = button.upload-button` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-73e8720a55bee59f92e8d482983a2fce16a68eaba642cd6deb18601cf6e6bb8e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-766c6e5e18320d024c01a5ca93c746a4314349b553dbc3c8ac3952948f58b347

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com o calendário aberto, os 42 dias (span.flatpickr-day) recebem tabindex="1", alterando a ordem de tabulação de toda a página.

Esperado: Sem tabindex positivo; no máximo um dia com tabindex=0 e os demais com -1 (roving tabindex).

Janela: 1280×900 · interações desde o carregamento: 1. Clique no botão de calendário #data-preferencial-btn

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
  "cardId": "C-766c6e5e18320d024c01a5ca93c746a4314349b553dbc3c8ac3952948f58b347",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-790c979262caee3348e8fb63aa41bb07e28377011c9c6d50465dad88433b3dd0

Estado: pendente

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
  "cardId": "C-790c979262caee3348e8fb63aa41bb07e28377011c9c6d50465dad88433b3dd0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7c3717f423602ced8340a63e8ac567ba5c586ff84c66cb303df4305b772c2532

Estado: pendente

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
  "cardId": "C-7c3717f423602ced8340a63e8ac567ba5c586ff84c66cb303df4305b772c2532",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-7d5ef7fff64f01a67c47348520b315886a0a6b8318536d5aa8c2805094415d2e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O radio 'Presencial' não tem nome acessível: o <label> 'Presencial' não tem for="forma-presencial" (os outros dois radios têm), e clicar no texto não seleciona a opção.

Esperado: Rótulo associado ao campo (label for="forma-presencial").

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
- `F-012` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-7d5ef7fff64f01a67c47348520b315886a0a6b8318536d5aa8c2805094415d2e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-804350580cd9bc9f01d20eb13444e95fb43af27df9914ab93fe223f88ae5959a

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Após o envio inválido, #servico e #unidade ficam com aria-invalid="true", mas sem aria-describedby; as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não estão associadas aos campos. Os demais campos têm a associação (por exemplo, #nome -> nome-retorno).

Esperado: A mensagem de erro de cada select fica associada programaticamente ao campo (id na mensagem e aria-describedby no input).

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

- `Inspeção DOM: aria-describedby=null nos dois inputs; feedback sem id` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-804350580cd9bc9f01d20eb13444e95fb43af27df9914ab93fe223f88ae5959a",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9119df18fc74dd55e57bbbcdf00c2bac67c03d0deb57c30f71524f0a9cacb125

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O documento não tem Área de Rodapé: nenhum .br-footer, <br-footer> nem <footer>.

Esperado: Área de Rodapé obrigatória do Template Base com o componente Footer.

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
- `V-005` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9119df18fc74dd55e57bbbcdf00c2bac67c03d0deb57c30f71524f0a9cacb125",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-92b9fa6970b2f530c2df76dfa0f35f94289f1f636f34fd02c8c77996cbdbbdfe

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de abrir o modal 'Descartar solicitação?' pelo botão Cancelar e fechá-lo com Escape, 'Continuar preenchendo' ou 'Fechar', o foco vai para o BODY (document.activeElement = BODY) em vez de voltar ao botão Cancelar.

Esperado: Ao fechar o diálogo, o foco deve voltar ao elemento que o abriu (Cancelar), mantendo a sequência de navegação.

Janela: 1280×900 · interações desde o carregamento: 1. Preencher Nome 2. Foco em Cancelar e Enter 3. Enter em 'Continuar preenchendo' (também testados Escape e 'Fechar')

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

- `Playwright browser_evaluate (DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `Playwright browser_snapshot (árvore de acessibilidade)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-92b9fa6970b2f530c2df76dfa0f35f94289f1f636f34fd02c8c77996cbdbbdfe",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ae27b35941e269967cd72137aa5361088bb7be2084ce4ad67bc1630f2a09adf6

Estado: pendente

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
  "cardId": "C-ae27b35941e269967cd72137aa5361088bb7be2084ce4ad67bc1630f2a09adf6",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b3e520e534183ef8a20c95b8aa8ef149db099176b5a585dd38f88c9ede2f12b1

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os campos 'Tipo de serviço' e 'Unidade de atendimento' não mostram indicador de foco: outline none, box-shadow none e borda inalterada (regra '.campo-servico .br-input input:focus, ... { box-shadow: none; outline: none; border-color: var(--border-color-alternative) !important }'). Os demais campos têm um box-shadow de 2px rgb(194,133,12).

Esperado: Todo componente que recebe foco pelo teclado deve ter um indicador de foco visível, como o padrão do DS aplicado aos outros campos.

Janela: 1280×900 · interações desde o carregamento: 1. Tab até 'Tipo de serviço' 2. Tab até 'Unidade de atendimento'

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

- `Playwright browser_evaluate (DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `Playwright browser_snapshot (árvore de acessibilidade)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b3e520e534183ef8a20c95b8aa8ef149db099176b5a585dd38f88c9ede2f12b1",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-bf077919b71b9a6a92d8cdb4358968bc6b53bc910cbca635cfa657c943762683

Estado: pendente

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
  "cardId": "C-bf077919b71b9a6a92d8cdb4358968bc6b53bc910cbca635cfa657c943762683",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-de3cd7868d75a6d036274be6d8b36f147f6a88271c35b9a33cb89623a627a4bf

Estado: pendente

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
  "cardId": "C-de3cd7868d75a6d036274be6d8b36f147f6a88271c35b9a33cb89623a627a4bf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e8963373fa9970d2d4b669fe8faf900e880d2a227a72c11fcc2d3828b77db199

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na mensagem de erro geral, o bloco .close é o primeiro filho e aparece à esquerda; o ícone de status fica no fim, à direita; o fechar é um <div role='button' tabindex='0'>. Na mensagem de sucesso da mesma tela, a ordem é ícone, conteúdo e fechar, com <button> nativo.

Esperado: A mensagem deve seguir a estrutura do componente br-message do DS (ícone, conteúdo e botão fechar à direita, com elemento <button>), igual à variante de sucesso.

Janela: 1280×900 · interações desde o carregamento: 1. Clicar em Enviar com o formulário vazio

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(1)>div>div:nth-of-type(1)" — <div>

### Unidades candidatas (não são crédito)

- U-1891342c11520896b9770ea0694cf80073cc0559489c26af1c1a3f9af0dedee1 — A-11 · apos-envio-vazio · cena 1280x900 · <div> "Não foi possível enviar. Há 8 campo(s) obrigatór": Estrato S · variante icone-e-fechar-trocados. Na mensagem de retorno o botão Fechar está à esquerda e o ícone semântico à direita — o inverso da anatomia do componente. Sem predicado na referência (nenhuma espécie mede posição); medido em tela-a/conferir-construcao.mjs.
  - estados em que a unidade existe: apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.
- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `Playwright browser_evaluate (DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `Playwright browser_snapshot (árvore de acessibilidade)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-e8963373fa9970d2d4b669fe8faf900e880d2a227a72c11fcc2d3828b77db199",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f2c2dd541059bb08267bedc620c858ca61c3a567c93998e37e8c2d5426b85360

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de upload tem tabindex='1'. O primeiro Tab depois do carregamento leva o foco a ele, no meio do formulário, antes do skiplink 'Ir para o conteúdo', do cabeçalho e dos campos anteriores.

Esperado: A ordem de foco deve seguir a ordem visual e lógica (tabindex 0 ou nativo), sem tabindex positivo.

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

- `Playwright browser_evaluate (DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `Playwright browser_snapshot (árvore de acessibilidade)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f2c2dd541059bb08267bedc620c858ca61c3a567c93998e37e8c2d5426b85360",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f9455a59631852ad425e1e9103574eab09002d45fb1110a9940d0999e2897980

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois do envio com erro, os inputs ficam com aria-invalid='true', mas não têm aria-describedby; as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não ficam associadas ao campo. Nos outros campos, a mensagem tem id (ex.: nome-retorno) e está em aria-describedby.

Esperado: A mensagem de erro de cada campo deve ficar associada de forma programática ao input (id na mensagem e referência em aria-describedby), como nos outros campos.

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

- `Playwright browser_evaluate (DOM/estilos calculados)` → não encontrado na evidência preservada da execução
- `Playwright browser_snapshot (árvore de acessibilidade)` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-f9455a59631852ad425e1e9103574eab09002d45fb1110a9940d0999e2897980",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-faf2bfb1b7e6966b143b2fc3cab5bf0e3a6aaf10ba2a2ec71619810913c452f0

Estado: pendente

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
  "cardId": "C-faf2bfb1b7e6966b143b2fc3cab5bf0e3a6aaf10ba2a2ec71619810913c452f0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
