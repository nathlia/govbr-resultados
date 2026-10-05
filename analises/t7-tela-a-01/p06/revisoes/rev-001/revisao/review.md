# Revisão semântica — pacote fechado

Versão: flow-semantic-1.5.0 · 34 cartões únicos · 34 pendentes · **renderização cega**

## As três filas

| Fila | Quantidade | O que ela cobra |
|---|---|---|
| **Ativa — desta bateria** | 34 cartão(ões) | **Só esta fecha a bateria.** Enquanto houver um, as métricas são provisórias. |
| Histórica — de outras baterias | 0 | Dívida declarada do projeto. Não cobra nada desta bateria, e não some por isso. |
| Descobertas para a próxima referência | 0 afirmação(ões) | Defeito correto fora do gabarito congelado. Entra na PRÓXIMA versão; não mexe no denominador desta. |

Esforço: 64 sujeitos · 34 cartão(ões) sem evidência verificada · 31 com unidade candidata · estimativa **204 min** (3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui).

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

## C-02fd94129013cfd64ba6c418783a188852f8fe2122197ddbf1b5b82f2878e5a9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Após envio vazio os campos recebem aria-invalid="true", mas a mensagem de erro ('Selecione o tipo de serviço.' / 'Selecione a unidade de atendimento.') não tem id e não é referenciada por aria-describedby; nos demais campos (nome, CPF, data, descrição, forma, declaração) a mensagem está associada.

Esperado: Mensagem de erro associada programaticamente ao campo (aria-describedby).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em Enviar (.acao-enviar) com o formulário vazio

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
  "cardId": "C-02fd94129013cfd64ba6c418783a188852f8fe2122197ddbf1b5b82f2878e5a9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-099c7b22983cdd5ffd1b002331a65b49fdf131919b4909c46e1e71c7401e16a9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Com o foco por teclado em "Tipo de serviço" e "Unidade de atendimento", não há indicador visível: outline none, box-shadow none e borda inalterada (1px #888). A regra da folha solicitacao CSS (.campo-servico/.campo-unidade .br-input input:focus-visible {box-shadow:none; outline:none}) remove o foco do DS, que os demais campos exibem (sombra de 2px #c2850c).

Esperado: Indicador de foco visível nesses campos, como no restante do formulário.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html 2. Tab 3. Tab 4. Enter no link de salto 5. Tab 6. Tab 7. Tab

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

- `../../tmp/pw-0/page-2026-10-04T09-58-02-810Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-099c7b22983cdd5ffd1b002331a65b49fdf131919b4909c46e1e71c7401e16a9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-0cf18910327b1868e5639c87136312ff85aa3403edef50fe190975b1fd0638cf

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O rótulo "Presencial" não tem atributo for, e o rádio #forma-presencial fica sem nome acessível (aparece como "radio" sem nome na árvore). Clicar no texto "Presencial" não marca a opção.

Esperado: O rádio tem um rótulo associado (label for="forma-presencial"), com nome acessível "Presencial" e o rótulo clicável.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html 2. Clique no texto "Presencial"

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

- `../../tmp/pw-0/page-2026-10-04T10-01-44-916Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-0cf18910327b1868e5639c87136312ff85aa3403edef50fe190975b1fd0638cf",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-166171b73cfdff508cdd34fe1765d4d9cef03add464a37a82bed9bc705e09b2b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A página atual da paginação só é indicada visualmente (classe active, círculo preenchido). O link não tem aria-current, e os nomes "Página 1/2/3" não dizem qual é a atual.

Esperado: A página atual é exposta programaticamente (aria-current="page").

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html

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

- `../../tmp/pw-0/page-2026-10-04T10-00-09-730Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-166171b73cfdff508cdd34fe1765d4d9cef03add464a37a82bed9bc705e09b2b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-1bfed0767256337907a7b91975df381b1d22d0c690e19c7ad61108913ca55d40

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
  "cardId": "C-1bfed0767256337907a7b91975df381b1d22d0c690e19c7ad61108913ca55d40",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-2809458845b5e376a494802370a5990469f8e57a2fb13d359bf1c2b1bc676cec

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
  "cardId": "C-2809458845b5e376a494802370a5990469f8e57a2fb13d359bf1c2b1bc676cec",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4070c6d7ba0f0eba1bed583032fa3d1734c8b9150dca045f6b5355fa01e0303b

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os dias selecionáveis dos meses adjacentes no calendário usam rgb(19,81,180) com opacity 0.6 sobre branco (cor efetiva de cerca de rgb(113,151,210)), 14px: contraste de cerca de 2,98:1.

Esperado: Contraste de pelo menos 4,5:1 para esses números, que são datas selecionáveis.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html 2. Clique no botão do calendário da Data preferencial

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(1)" — <span> "Setembro 27, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(2)" — <span> "Setembro 28, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(3)" — <span> "Setembro 29, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(36)" — <span> "Novembro 1, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(37)" — <span> "Novembro 2, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(38)" — <span> "Novembro 3, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(39)" — <span> "Novembro 4, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(4)" — <span> "Setembro 30, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(40)" — <span> "Novembro 5, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(41)" — <span> "Novembro 6, 2026" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(42)" — <span> "Novembro 7, 2026" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-04T10-02-23-883Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4070c6d7ba0f0eba1bed583032fa3d1734c8b9150dca045f6b5355fa01e0303b",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-45e8e21849f8703c5f1c70ef5455c40e81ceed3743f5168be12a180794b4db0c

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O único controle operável do upload (o input file #documentos tem display:none) é um <button> focável com aria-hidden="true": recebe foco pelo teclado, mas fica fora da árvore de acessibilidade, sem nome nem papel para tecnologia assistiva.

Esperado: O controle focável que abre o seletor de arquivo é exposto à tecnologia assistiva com papel e nome (sem aria-hidden), ou o input file nativo fica acessível.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html 2. Tab

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

- `../../tmp/pw-0/page-2026-10-04T09-55-59-629Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-45e8e21849f8703c5f1c70ef5455c40e81ceed3743f5168be12a180794b4db0c",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-4b847b5e27018604482eddde9ee4db327c6b184e3db971b5326870abc95f7417

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O papel combobox fica no div que envolve label, input e botão, e esse elemento não tem nome acessível (a árvore mostra "combobox" sem nome). O input focado é exposto só como textbox, sem aria-expanded nem aria-controls.

Esperado: O combobox tem nome acessível ("Tipo de serviço"/"Unidade de atendimento"), de preferência com role="combobox" e aria-expanded/aria-controls no próprio input que recebe o foco.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html

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

- `../../tmp/pw-0/page-2026-10-04T10-00-48-031Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-4b847b5e27018604482eddde9ee4db327c6b184e3db971b5326870abc95f7417",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-505d5079d821ad3bb092e48d015eaa3b48c8e6af2d5e8943e17411215d64374d

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
  "cardId": "C-505d5079d821ad3bb092e48d015eaa3b48c8e6af2d5e8943e17411215d64374d",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-584d6ed4fa15d3a3ba7e97a68436207ef67cdae5d0b1812fbc97906247fd5f35

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
  "cardId": "C-584d6ed4fa15d3a3ba7e97a68436207ef67cdae5d0b1812fbc97906247fd5f35",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-595c32f0527935997430b9120e46a11a459def3fa48a0155d608082d81d76c9f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Selecione o arquivo' tem aria-hidden="true" mas é focável (tabindex="1") e é o único meio de operar o upload, pois o input#documentos está com display:none. Leitores de tela recebem foco num elemento sem nome nem papel.

Esperado: Elemento focável e operável exposto à tecnologia assistiva (sem aria-hidden) ou input de arquivo acessível rotulado.

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
- `S-page-002` → identificador devolvido por ferramenta (sem arquivo)
- `F-012` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-595c32f0527935997430b9120e46a11a459def3fa48a0155d608082d81d76c9f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5970005bb2c55867ced4fcaa4096ecf21876f9e6dcbccc375624e09eb23ce5b0

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão de upload tem tabindex="1": o primeiro Tab após o carregamento vai a ele, antes do link de salto, da marca, do breadcrumb e dos campos anteriores do formulário.

Esperado: Nenhum tabindex positivo; a ordem de foco segue a ordem visual e lógica do DOM.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html 2. Tab

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

- `../../tmp/pw-0/page-2026-10-04T09-57-44-409Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-5970005bb2c55867ced4fcaa4096ecf21876f9e6dcbccc375624e09eb23ce5b0",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-5e45d3bbe8a1f34aedf03f16c74dd392d96416533fe239a59e6b34c78d5667be

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
  "cardId": "C-5e45d3bbe8a1f34aedf03f16c74dd392d96416533fe239a59e6b34c78d5667be",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-60b925fe5215f91e1af19f50efd115d908e0e4ca18962630aa1f1975d363e267

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O dia atual (4) no calendário aparece em rgb(213,67,9) sobre rgb(253,245,230), 14px peso 600: contraste de 4,18:1.

Esperado: Contraste de pelo menos 4,5:1 para texto de tamanho normal.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html 2. Clique no botão do calendário da Data preferencial

Regra declarada: wcag:1.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(8)" — <span> "Outubro 4, 2026" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-04T10-02-23-883Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-60b925fe5215f91e1af19f50efd115d908e0e4ca18962630aa1f1975d363e267",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-618711f8db5eed9d3095ac13d44792c18f87a8c1ef0b88539a3e32f3bb18a681

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões de mês anterior e seguinte do calendário só têm um ícone <i> sem texto, sem aria-label e sem title: não têm nome acessível.

Esperado: Nome acessível, por exemplo "Mês anterior" e "Próximo mês".

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html 2. Clique no botão do calendário da Data preferencial

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

- `../../tmp/pw-0/page-2026-10-04T10-02-23-883Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-618711f8db5eed9d3095ac13d44792c18f87a8c1ef0b88539a3e32f3bb18a681",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-70db5b298fc20d89eb5f6588219337573274646ed8cf06fb4d22d6e834d1ba15

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O rádio 'Presencial' não tem nome acessível: o <label>Presencial</label> irmão não tem atributo for (nem envolve o input). Clicar no texto 'Presencial' não marca a opção.

Esperado: Rótulo associado ao rádio (label for="forma-presencial"), dando nome acessível e área de clique.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar no texto 'Presencial'

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
  "cardId": "C-70db5b298fc20d89eb5f6588219337573274646ed8cf06fb4d22d6e834d1ba15",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-777f8e5c47322358766fbd959b8c6ab0095e73f5f26e6f61edc02f48c828b98e

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os botões de mês anterior/próximo do calendário só têm ícone (<i class="fas fa-chevron-left/right">) e não têm aria-label nem texto: nome acessível vazio.

Esperado: Nome acessível descritivo (ex.: aria-label 'Mês anterior' / 'Próximo mês').

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar no botão de calendário do campo Data preferencial

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
  "cardId": "C-777f8e5c47322358766fbd959b8c6ab0095e73f5f26e6f61edc02f48c828b98e",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-79060cc778131cac0c8d9e510f09c3857673a2b7b9caa016ee52e708ad4c36ea

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de abrir a lista com ArrowDown e escolher uma opção com Enter, a lista fecha e o foco vai para o body (document.activeElement = BODY), em vez de voltar ao campo.

Esperado: Depois da seleção, o foco volta ao input do select.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html 2. Tab 3. Tab 4. Enter no link de salto 5. Tab 6. Tab 7. Tab 8. ArrowDown 9. ArrowDown 10. Enter

Regra declarada: wcag:2.4.3

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(2)>div:nth-of-type(1)" — <div> "Emissão de certidão" · **oculto**: nao-renderizado
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(2)>div:nth-of-type(2)" — <div> "Atualização cadastral" · **oculto**: nao-renderizado
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(2)>div:nth-of-type(3)" — <div> "Agendamento de perícia" · **oculto**: nao-renderizado
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(2)>div:nth-of-type(4)" — <div> "Segunda via de documento" · **oculto**: nao-renderizado
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)" — <div> "Agência Centro" · **oculto**: nao-renderizado
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)" — <div> "Agência Norte" · **oculto**: nao-renderizado
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(3)" — <div> "Agência Sul" · **oculto**: nao-renderizado
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(4)" — <div> "Posto de atendimento móvel" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

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

- `../../tmp/pw-0/page-2026-10-04T09-58-30-641Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-79060cc778131cac0c8d9e510f09c3857673a2b7b9caa016ee52e708ad4c36ea",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-8990a3a43ac2124b8a5bdd6b1ab0e4fc04d9f9eb5f25305c0e53d8b84b1cbb85

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Na mensagem de erro, o botão Fechar (um div role="button") vem primeiro no DOM e aparece à esquerda; o ícone de status fica à direita, depois do conteúdo. A mensagem de sucesso da mesma tela segue a anatomia do DS (ícone, conteúdo, botão Fechar à direita, com <button>).

Esperado: Mensagem danger com a mesma anatomia do componente Message do DS: ícone à esquerda, conteúdo, botão Fechar (<button>) à direita.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html 2. Clique em Enviar com o formulário vazio

Regra declarada: nenhuma (atribuição incerta)

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

Sinalizações: regra-incerta

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

- `../../tmp/pw-0/page-2026-10-04T10-01-05-038Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-8990a3a43ac2124b8a5bdd6b1ab0e4fc04d9f9eb5f25305c0e53d8b84b1cbb85",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-9890ad3ffd29518840da79e8c2bfc81092c6d328dd034d7f141130151bb96c77

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Os controles de mês e ano do calendário têm aria-label em inglês ("Month", "Year") numa página lang="pt-BR", sem marcação de idioma.

Esperado: Nomes em português ("Mês", "Ano"), ou o idioma da parte identificado.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html 2. Clique no botão do calendário da Data preferencial

Regra declarada: wcag:3.1.2

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(2)>div:nth-of-type(1)>div>div>div>input" — <input> "Year" · **oculto**: nao-renderizado
- "body>div:nth-of-type(2)>div:nth-of-type(1)>div>div>select" — <select> "Month" · **oculto**: nao-renderizado

### Unidades candidatas (não são crédito)

- U-bb187f193b3bc0030146ac2fc069e20171f5ee3ac13d658d709650ed619d7351 — P-02 · sempre · cena 1280x900 · <body> "Ir para o conteúdo (1/1) 1 gov.br Página inicial": Camada de página (D-83) · não sorteada · área de rodapé. A página não tem área de rodapé: nenhum componente Footer do DS e nenhuma região de rodapé (footer ou contentinfo), em estado algum. A âncora é o documento porque a área ausente não tem elemento. Sem predicado na referência; medido em tela-a/restricoes-pagina.md.
  - estados em que a unidade existe: inicial, apos-envio-vazio, dialogo-aberto
  - predicado de aceitação: não implementado — nada foi verificado por máquina aqui; a decisão é inteiramente sua
  - o predicado prova que o DEFEITO está na página; que esta alegação o afirme é decisão sua.

### Evidência da execução

- `../../tmp/pw-0/page-2026-10-04T10-02-23-883Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-9890ad3ffd29518840da79e8c2bfc81092c6d328dd034d7f141130151bb96c77",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-affc8e182ed19d7271bb2a0e1860a0dc8472e9ae9ea1bb37e140e0724f3a25a9

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Não há .br-footer nem <br-footer> no documento: a página termina na paginação da tabela.

Esperado: Área de Rodapé do Template Base com o componente Footer do DS.

Janela: 1280×900 · interações desde o carregamento: nenhuma

Regra declarada: ds-page-footer

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "" — <html> "Ir para o conteúdo (1/1) 1 gov.br Página inicial"

### Unidades candidatas (não são crédito)

Nenhuma âncora candidata; um achado novo correto continua sendo possível.

### Evidência da execução

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)
- `F-004` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-affc8e182ed19d7271bb2a0e1860a0dc8472e9ae9ea1bb37e140e0724f3a25a9",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-b70e63d440724484e3a934e542835a29769b5a0f8a716ab1b58e187e840bbc62

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao enviar vazio, as mensagens "Selecione o tipo de serviço." e "Selecione a unidade de atendimento." não têm id, e #servico/#unidade (aria-invalid="true") não têm aria-describedby. Os outros campos ligam a mensagem (por exemplo, nome -> nome-retorno).

Esperado: A mensagem de erro de cada select fica associada programaticamente ao campo (aria-describedby), como nos demais campos.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html 2. Clique em Enviar com o formulário vazio

Regra declarada: wcag:1.3.1

Reuso: restrito à execução de origem; evidência/estado/build insuficientes para equivalência entre execuções.

### Sujeitos

- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>span" — <span> "Selecione o tipo de serviço."
- "body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>span" — <span> "Selecione a unidade de atendimento."

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

- `../../tmp/pw-0/page-2026-10-04T10-00-55-802Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-b70e63d440724484e3a934e542835a29769b5a0f8a716ab1b58e187e840bbc62",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-c769c23ed1f5b9aab9b2265bc1f3d514bb7081916c10d30d99609c1457a40287

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: tabindex="1" coloca o botão de upload como primeiro item da ordem de tabulação: o 1º Tab após o carregamento foca 'Selecione o arquivo' (no meio do formulário), antes do link de salto 'Ir para o conteúdo'.

Esperado: Ordem de foco que siga a ordem visual/lógica (tabindex 0 ou ausente).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Pressionar Tab

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-c769c23ed1f5b9aab9b2265bc1f3d514bb7081916c10d30d99609c1457a40287",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cb7288b9f9c74abfe324922f4ea0a475df21e2c8f61c13f453dde67444501ca2

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O botão 'Fechar a mensagem' da mensagem de erro é um <div class="br-button circle small" role="button" tabindex="0">; a mensagem de sucesso usa <button>.

Esperado: br-button aplicado a <button type="button">, conforme a anatomia do DS.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em Enviar (.acao-enviar) com o formulário vazio

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
  "cardId": "C-cb7288b9f9c74abfe324922f4ea0a475df21e2c8f61c13f453dde67444501ca2",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cd146b00712830692f8c2384c249b5e411eb093de5ce6b0fe03ceebb3eea2089

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Depois de abrir o diálogo 'Descartar solicitação?' por Cancelar e fechá-lo (Esc ou 'Continuar preenchendo'), o foco vai para o <body>, não volta para Cancelar; o Tab seguinte recomeça do início do documento.

Esperado: Ao fechar o diálogo, o foco volta ao elemento que o abriu (botão Cancelar).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em Cancelar 3. Pressionar Esc

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

- `S-page-003` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cd146b00712830692f8c2384c249b5e411eb093de5ce6b0fe03ceebb3eea2089",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-cf41f319a52de6af6e8be36371de850654c9a9fe6d0f8205b19342124d798833

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O diálogo define color rgb(51,67,51) (#334333), herdado pelo título 'Descartar solicitação?', pelo cabeçalho e pelo rodapé; esse valor não está no registro de tokens (o mais próximo é --green-cool-70 #37493b).

Esperado: Cor de texto da paleta do DS (ex.: --color #333333).

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar em Cancelar

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
- `V-001` → identificador devolvido por ferramenta (sem arquivo)
- `V-002` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-cf41f319a52de6af6e8be36371de850654c9a9fe6d0f8205b19342124d798833",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d2f320400b065eb477296eb5fb7abe72bc96e29613bf06da4152d07d00d1d25f

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
  "cardId": "C-d2f320400b065eb477296eb5fb7abe72bc96e29613bf06da4152d07d00d1d25f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d3b8ed94adbe01b8884f49aecd8a39333edac8588842f1d13ff12c76c7e98eff

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: A Área de Cabeçalho é um <header class="barra-superior"> próprio, só com a marca gov.br; não há .br-header nem <br-header> no documento.

Esperado: Área de Cabeçalho do Template Base com o componente Header do DS.

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
  "cardId": "C-d3b8ed94adbe01b8884f49aecd8a39333edac8588842f1d13ff12c76c7e98eff",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-d4ec143358ef605832529b4b900fbe250defb45079ddc8bdd7f8acb60978d34f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao receber foco por teclado (Tab a partir do CPF), os campos 'Tipo de serviço' e 'Unidade de atendimento' não mudam: outline none, box-shadow none, borda #888 inalterada. Os demais campos mostram borda e sombra #c2850c.

Esperado: Indicador de foco visível, como nos outros campos do DS.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar a página 2. Clicar no campo CPF 3. Pressionar Tab

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

- `S-page-001` → identificador devolvido por ferramenta (sem arquivo)

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-d4ec143358ef605832529b4b900fbe250defb45079ddc8bdd7f8acb60978d34f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-e9160bdec96c3992758639cf5c1eca97394c2d8b52f49617b9c885c0a2e7bb56

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
  "cardId": "C-e9160bdec96c3992758639cf5c1eca97394c2d8b52f49617b9c885c0a2e7bb56",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-ea8d7edfc1865cc314007ec8f518be969de232666b80fc5605d4149f1202428f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: Ao fechar o diálogo "Descartar solicitação?" com Escape, com "Continuar preenchendo" ou com "Descartar", o foco vai para o body em vez de voltar ao botão Cancelar que abriu o diálogo.

Esperado: Ao fechar o modal, o foco volta ao elemento que o abriu (Cancelar) ou a um ponto lógico.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html 2. Foco em Cancelar 3. Enter 4. Escape

Regra declarada: wcag:2.4.3

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

- `../../tmp/pw-0/page-2026-10-04T10-04-08-404Z.png` → não encontrado na evidência preservada da execução
- `../../tmp/pw-0/page-2026-10-04T10-04-41-203Z.yml` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-ea8d7edfc1865cc314007ec8f518be969de232666b80fc5605d4149f1202428f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-f0927b429f1ff0fcb182ef1b482dc0a4b8257a52f6fbe9235bbdaed5113816fd

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
  "cardId": "C-f0927b429f1ff0fcb182ef1b482dc0a4b8257a52f6fbe9235bbdaed5113816fd",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````

## C-fb1df143e6cfdde4747496f9baf7be952499dba341e9e7abb0c5e8ac431ea42f

Estado: pendente

Contrato: achado-2 — observado, esperado, estado e evidência declarados pelo agente

Origem: execução do agente · cena 1280x900

Observado: O contorno visual dos rádios e checkboxes (label::before) é 1px #ccc (--border-color) sobre fundo branco: contraste de 1,61:1.

Esperado: Contraste de pelo menos 3:1 para o contorno que identifica o controle e o seu estado desmarcado.

Janela: 1280×900 · interações desde o carregamento: 1. Carregar http://screens:3300/solicitacao.html

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

- `../../tmp/pw-0/page-2026-10-04T09-59-03-205Z.png` → não encontrado na evidência preservada da execução

### Evidência declarada

_(retido na renderização cega: este texto pode nomear o braço da execução)_

Peça a renderização completa DEPOIS de decidir, se precisar do texto integral.

### Decisão

````json
{
  "cardId": "C-fb1df143e6cfdde4747496f9baf7be952499dba341e9e7abb0c5e8ac431ea42f",
  "status": "pending",
  "reviewer": "",
  "rationale": "",
  "complete": false,
  "evidenceRefs": [],
  "atoms": []
}
````
