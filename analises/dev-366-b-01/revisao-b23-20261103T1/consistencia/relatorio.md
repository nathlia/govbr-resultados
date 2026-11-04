# Revisão de campanha nova — consistência da 1ª passada (triagem)

203 átomos, um juiz por lote. Relatório interno: não vai aos juízes. Os grupos são **triagem** de possíveis inconsistências, não equivalência (regras: `regras.md`, sha256 `f7237f6840ef4cedc52c689ba7178502a95334f621f04029bac967408025ec04`).

## Resumo

| | mesma alegação (MA) | mesma leitura da norma (LN) |
|---|---:|---:|
| grupos (todos) | 172 | 73 |
| grupos com ≥ 2 membros | 25 | 42 |
| átomos nesses grupos | 56 | 162 |
| grupos com membros de lotes diferentes | 22 | 41 |
| grupos divergentes (algum campo) | 2 | 15 |
| grupos em que a classe diverge | 1 | 8 |
| grupos em que o crédito muda | 1 | 4 |
| grupos com resposta de norma divergente | 0 | 4 |
| grupos à adjudicação (regras §2) | 1 (3 átomos) | 4 (17 átomos) |
| pares concordantes — campos gerais¹, todos | 97.1% (34/35) | 97.0% (414/427) |
| idem, mesmo lote | 100.0% (4/4) | 98.4% (63/64) |
| idem, entre lotes | 96.8% (30/31) | 96.7% (351/363) |
| cobertura (pares comparáveis / pares) | 94.6% (35/37) | 100.0% (427/427) |

¹ MA: todos os campos; LN: só a resposta de norma (id, força, aplicabilidade, violada).

**Cartões cegos idênticos** (único vínculo auditável de equivalência): 0 grupos, 0 átomos (0 grupos com lotes diferentes); divergem 0 (classe 0, crédito 0). Pares concordantes em todos os campos: — (0/0) (mesmo lote — (0/0), entre lotes — (0/0)); na classe: — (0/0) (entre lotes — (0/0)).

## Concordância por campo — mesma alegação

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 37/37 (100.0%) | 100.0% (37/37) | 100.0% (4/4) | 100.0% (33/33) | 25/25 | 0 |
| norma.id | 37/37 (100.0%) | 100.0% (37/37) | 100.0% (4/4) | 100.0% (33/33) | 25/25 | 0 |
| norma.forca | 37/37 (100.0%) | 100.0% (37/37) | 100.0% (4/4) | 100.0% (33/33) | 25/25 | 0 |
| norma.aplicabilidade | 37/37 (100.0%) | 100.0% (37/37) | 100.0% (4/4) | 100.0% (33/33) | 25/25 | 0 |
| norma.violada | 37/37 (100.0%) | 100.0% (37/37) | 100.0% (4/4) | 100.0% (33/33) | 25/25 | 0 |
| vinculo | 37/37 (100.0%) | 94.6% (35/37) | 100.0% (4/4) | 93.9% (31/33) | 24/25 | 1 |
| vinculo.relacao | 15/37 (40.5%) | 93.3% (14/15) | 100.0% (2/2) | 92.3% (12/13) | 10/11 | 1 |
| sugestao | 0/37 (0.0%) | — (0/0) | — (0/0) | — (0/0) | 0/0 | 0 |
| classe | 37/37 (100.0%) | 94.6% (35/37) | 100.0% (4/4) | 93.9% (31/33) | 24/25 | 1 |
| credita | 37/37 (100.0%) | 94.6% (35/37) | 100.0% (4/4) | 93.9% (31/33) | 24/25 | 1 |
| credito | 37/37 (100.0%) | 94.6% (35/37) | 100.0% (4/4) | 93.9% (31/33) | 24/25 | 1 |
| fundamentacao | 37/37 (100.0%) | 94.6% (35/37) | 100.0% (4/4) | 93.9% (31/33) | 24/25 | 1 |

## Concordância por campo — mesma leitura da norma

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 427/427 (100.0%) | 100.0% (427/427) | 100.0% (64/64) | 100.0% (363/363) | 42/42 | 0 |
| norma.id | 427/427 (100.0%) | 100.0% (427/427) | 100.0% (64/64) | 100.0% (363/363) | 42/42 | 0 |
| norma.forca | 427/427 (100.0%) | 100.0% (427/427) | 100.0% (64/64) | 100.0% (363/363) | 42/42 | 0 |
| norma.aplicabilidade | 427/427 (100.0%) | 98.4% (420/427) | 98.4% (63/64) | 98.4% (357/363) | 41/42 | 1 |
| norma.violada | 427/427 (100.0%) | 97.0% (414/427) | 98.4% (63/64) | 96.7% (351/363) | 38/42 | 4 |
| vinculo | 427/427 (100.0%) | 78.5% (335/427) | 75.0% (48/64) | 79.1% (287/363) | 33/42 | 9 |
| vinculo.relacao | 310/427 (72.6%) | 99.0% (307/310) | 100.0% (52/52) | 98.8% (255/258) | 18/20 | 2 |
| sugestao | 2/427 (0.5%) | 0.0% (0/2) | — (0/0) | 0.0% (0/2) | 0/2 | 2 |
| classe | 427/427 (100.0%) | 92.0% (393/427) | 95.3% (61/64) | 91.5% (332/363) | 34/42 | 8 |
| credita | 427/427 (100.0%) | 94.6% (404/427) | 96.9% (62/64) | 94.2% (342/363) | 38/42 | 4 |
| credito | 427/427 (100.0%) | 78.5% (335/427) | 75.0% (48/64) | 79.1% (287/363) | 33/42 | 9 |
| fundamentacao | 427/427 (100.0%) | 94.6% (404/427) | 96.9% (62/64) | 94.2% (342/363) | 38/42 | 4 |

## Método

Concordância descritiva: pares de membros dentro dos grupos com ≥ 2 membros; denominador = pares comparáveis (os dois responderam o campo; para vários campos, mesma forma de resposta em cada campo); cobertura = comparáveis / pares; mesmo lote (mesmo juiz) e entre lotes separados. Sem κ: cada átomo tem um julgamento só, e membros de um grupo não são avaliações repetidas do mesmo item.

Equivalência, seleção, adjudicação e parada: `regras.md`.

## Por campanha × braço (contagens)

| campanha | braço | átomos | em grupo MA divergente | em grupo MA que muda crédito | em grupo LN com norma divergente | à adjudicação |
|---|---|---:|---:|---:|---:|---:|
| dev-366-b-01 | com | 58 | 0 | 0 | 4 | 4 |
| dev-366-b-01 | ferramentas | 30 | 3 | 2 | 5 | 7 |
| dev-366-b-01 | lb-axe | 48 | 0 | 0 | 0 | 0 |
| dev-366-b-01 | lb-validator | 22 | 0 | 0 | 0 | 0 |
| dev-366-b-01 | sem | 45 | 2 | 1 | 8 | 9 |

## Grupos divergentes — mesma alegação (2; 1 à adjudicação; 1 mudam o crédito)

### MA-c651bf3e · 3 membros · lotes lote-03, lote-05, lote-06 · **muda crédito** · → adjudicação

Tela vistorias · completa · regra `wcag:1.4.3` · estado `1280x900@inicial` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div ; body>pnip-root>main>pnip-mpa>p`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-7796794028 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |
| T3-b980717ee2 | 05 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f0dafc5373 | 06 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |

Textos observados (conferência do agrupamento):
- T3-7796794028: A etiqueta "Vistoria agendada" (14px, peso 500) é #FFFFFF sobre rgb(79,151,209): contraste 3,14:1.
- T3-b980717ee2: Na aba Agendar, o texto da etiqueta de status "Vistoria pré agendada" é branco (#ffffff) sobre #888888 (bg-secondary-06), 14px normal: contr
- T3-f0dafc5373: Na aba Tramitando, o texto da etiqueta de status "Vistoria agendada" é branco (#ffffff) sobre #4f97d1, 14px normal: contraste 3,14:1.

### MA-3f4b8464 · 2 membros · lotes lote-02, lote-03

Tela vistorias · completa · regra `wcag:4.1.2` · estado `1280x900@inicial` · tipo componente <br-button>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button ; body>pnip-root>main>pnip-mpa>pnip-prope`

Divergem: vinculo.relacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-4aa08c2cc9 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-07 | host-interno | violacao-pagina | sim | credita B-07 | norma |
| T3-68a8f55bc6 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-07 | direta | violacao-pagina | sim | credita B-07 | norma |

Textos observados (conferência do agrupamento):
- T3-4aa08c2cc9: O botão interno (shadow DOM) de visualizar tem só o ícone fa-eye com aria-hidden, aria-label="" e nenhum title; a árvore de acessibilidade e
- T3-68a8f55bc6: Os 10 botões de ícone "olho" (visualizar) da coluna de ações não têm nome acessível: o button interno do br-button tem aria-label="" e só co

## Grupos divergentes — mesma leitura da norma (15; 4 à adjudicação; 4 mudam o crédito)

### LN-4a41d85f · 8 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05, lote-06 · → adjudicação

Regra `wcag:4.1.2` × não resolvido

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-11f36c750d | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-52aa04ba59 | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-588cfc5208 | 03 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-59050b55fd | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-95c4f721a8 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-afdc5a7d80 | 05 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bf252286aa | 05 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fea0035135 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-11f36c750d: O botão de remover o filtro de data ("Exibindo vistorias de 25/03/2026 até 20/03/2026") tem só o ícone fa-times com aria-hidden; o nome aces
- T3-52aa04ba59: O botão "×" do tag "Exibindo vistorias a partir de …" (filtro de data) contém apenas o ícone fa-times aria-hidden, sem nome acessível
- T3-588cfc5208: O diálogo de visualização do PDF (role="dialog", aria-modal) usa aria-labelledby="swal2-title", mas esse h2 está vazio e oculto: o diálogo f
- T3-59050b55fd: As opções do dropdown de filtro são div.br-radio com <label> e sem <input> de rádio, sem role nem tabindex; aplicam o filtro só com clique
- T3-95c4f721a8: Após aplicar um filtro (Cidade > Barra Nova), a tag do filtro ganha um botão com ícone "x" (fa-times) sem texto, sem aria-label e sem title:
- T3-afdc5a7d80: No diálogo "Atribuir Vistoriador", o <select> não tem label, aria-label nem aria-labelledby. O texto "Selecione um Vistoriador" é um div de 
- T3-bf252286aa: O botão de remover o filtro aplicado ("Barra Nova") contém só o ícone fa-times, sem aria-label, title ou texto: nome acessível vazio.
- T3-fea0035135: No diálogo "Atribuir Vistoriador", a lista de vistoriadores (select#swal2-select) não tem rótulo associado; o texto "Selecione um Vistoriado

### LN-5b808d88 · 3 membros · lotes lote-02, lote-03, lote-06 · → adjudicação

Regra `wcag:2.4.3` × não resolvido

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-431e0a6d3c | 02 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-5fc1eebc2e | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d4fb5e960a | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-431e0a6d3c: Ao acionar com Enter o botão de remover o filtro aplicado, a tag some e o foco vai para <body>: a posição de foco do usuário se perde.
- T3-5fc1eebc2e: Ao fechar o diálogo de erro "Atenção – Preencha todos os campos obrigatórios", o foco vai para o <body>, sem voltar a "Salvar" nem ir ao pri
- T3-d4fb5e960a: Ao clicar em Agendar sem o arquivo, abre o diálogo "Atenção / Formulário preenchido incorretamente."; ao fechá-lo com OK, o foco vai para <b

### LN-e2972868 · 4 membros · lotes lote-01, lote-03, lote-06 · **muda crédito** · → adjudicação

Regra `wcag:4.1.2` × campo de formulário

Divergem: norma.violada, vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0b52164404 | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-6a1ac664fd | 03 | verdadeira | citada | obrigatorio | aplica | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-dd6448ae01 | 06 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-ed96b23679 | 06 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |

Textos observados (conferência do agrupamento):
- T3-0b52164404: A caixa "selecionar todas" no cabeçalho da tabela não tem rótulo nem aria-label; o columnheader e o checkbox ficam sem nome.
- T3-6a1ac664fd: Os seletores "Exibir" e "Página" são input type=text sem role="combobox", aria-expanded ou aria-controls; a lista aberta tem itens div sem p
- T3-dd6448ae01: A caixa "selecionar todos" do cabeçalho e as caixas de seleção de cada linha não têm nome acessível (sem label, aria-label ou aria-labelledb
- T3-ed96b23679: As caixas de seleção de cada linha não têm rótulo nem aria-label (checkbox sem nome).

### LN-e88d4899 · 2 membros · lotes lote-04, lote-06 · → adjudicação

Regra `wcag:1.3.1` × não resolvido

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-a52a7cc112 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e7fff7ac37 | 06 | verdadeira | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-a52a7cc112: Contador "7" do card PROCESSOS está com aria-hidden e a informação fica só no title="7 novo(s) processos(s)" do span; o nome do link é " PRO
- T3-e7fff7ac37: No diálogo "Exportar Vistorias", as 5 caixas de status ficam sob o texto "Status:" (strong), sem fieldset/legend nem role=group rotulado

### LN-21702389 · 2 membros · lotes lote-04, lote-05

Regra `axe:region` × div

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-a94b38eb31 | 04 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-bec8e9ef88 | 05 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-a94b38eb31: Conteúdo do menu do avatar (e o próprio acionador) fica fora de qualquer landmark
- T3-bec8e9ef88: All page content should be contained by landmarks

### LN-345fa778 · 2 membros · lotes lote-04, lote-05

Regra `axe:page-has-heading-one` × raiz

Divergem: vinculo, credito · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-8a51b4042a | 04 | verdadeira | citada | boa-pratica | aplica | sim | B-21 | ausencia-global | violacao-pagina | sim | credita B-21 | mais-fraca |
| T3-c7f8372d88 | 05 | verdadeira | citada | boa-pratica | aplica | sim | B-02 | ausencia-global | violacao-pagina | sim | credita B-02 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-8a51b4042a: Page should contain a level-one heading
- T3-c7f8372d88: Page should contain a level-one heading

### LN-3cfa1aa1 · 5 membros · lotes lote-01, lote-04, lote-05, lote-06 · **muda crédito**

Regra `wcag:2.1.1` × não resolvido

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1a7100e20b | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-96e17c7838 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bf87d70436 | 05 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e788bba6aa | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-eaaa3f33b4 | 06 | verdadeira | citada | obrigatorio | aplica | sim | B-11 | participante-relacionado | violacao-pagina | sim | credita B-11 | norma |

Textos observados (conferência do agrupamento):
- T3-1a7100e20b: Na edição, "boleto.pdf" é um <strong> com cursor:pointer que abre o PDF ao clicar, sem foco por teclado nem papel.
- T3-96e17c7838: A lista aberta do filtro Cidade tem opções em div.br-item com apenas <label> sem controle associado, sem tabindex e sem papel de opção: não 
- T3-bf87d70436: O ícone de lixeira ao lado de "boleto.pdf" abre a confirmação "remover o boleto" ao clicar, mas é um br-icon-base com <i aria-hidden="true">
- T3-e788bba6aa: Na edição, a lixeira ao lado de "boleto.pdf" é um br-icon-base (ícone aria-hidden) que abre a confirmação "remover o boleto?" com o mouse; n
- T3-eaaa3f33b4: As opções do filtro aberto (ex.: "Barra Nova") são <div class="br-item"> com <label> sem input; nenhum elemento é focável (0 com tabIndex>=0

### LN-5aa9c98b · 2 membros · lotes lote-02, lote-03

Regra `wcag:4.1.2` × componente <br-button>

Divergem: vinculo.relacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-4aa08c2cc9 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-07 | host-interno | violacao-pagina | sim | credita B-07 | norma |
| T3-68a8f55bc6 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-07 | direta | violacao-pagina | sim | credita B-07 | norma |

Textos observados (conferência do agrupamento):
- T3-4aa08c2cc9: O botão interno (shadow DOM) de visualizar tem só o ícone fa-eye com aria-hidden, aria-label="" e nenhum title; a árvore de acessibilidade e
- T3-68a8f55bc6: Os 10 botões de ícone "olho" (visualizar) da coluna de ações não têm nome acessível: o button interno do br-button tem aria-label="" e só co

### LN-84b1ebf8 · 5 membros · lotes lote-03, lote-05, lote-06 · **muda crédito**

Regra `wcag:1.4.3` × div

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-6e9d59e4a4 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-23 | direta | violacao-pagina | sim | credita B-23 | norma |
| T3-7796794028 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |
| T3-7cfe341162 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-23 | direta | violacao-pagina | sim | credita B-23 | norma |
| T3-b980717ee2 | 05 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f0dafc5373 | 06 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |

Textos observados (conferência do agrupamento):
- T3-6e9d59e4a4: Na rota de detalhe da vistoria (/vistorias/agendar-vistoria/<id>, aberta pelo botão olho), a etiqueta de status tem texto branco sobre #8888
- T3-7796794028: A etiqueta "Vistoria agendada" (14px, peso 500) é #FFFFFF sobre rgb(79,151,209): contraste 3,14:1.
- T3-7cfe341162: A etiqueta "Aguarda preenchimento" (14px) é #FFFFFF sobre rgb(136,136,136): contraste 3,54:1.
- T3-b980717ee2: Na aba Agendar, o texto da etiqueta de status "Vistoria pré agendada" é branco (#ffffff) sobre #888888 (bg-secondary-06), 14px normal: contr
- T3-f0dafc5373: Na aba Tramitando, o texto da etiqueta de status "Vistoria agendada" é branco (#ffffff) sobre #4f97d1, 14px normal: contraste 3,14:1.

### LN-8a4e84ad · 15 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05

Regra `axe:label` × campo de formulário

Divergem: vinculo, credito · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0049e09d8b | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-0595431e63 | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-20 | direta | violacao-pagina | sim | credita B-20 | norma |
| T3-078bc4d8ac | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-0a16b90cc9 | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-05 | direta | violacao-pagina | sim | credita B-05 | norma |
| T3-11e806dc7a | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-20569a3c3b | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-2bb2d045e0 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-506760b854 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-61a3a89ee3 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-6d10495cba | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-a83e6ba740 | 04 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-a8bfe3d920 | 04 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-bb706cdb63 | 05 | verdadeira | citada | obrigatorio | aplica | sim | B-05 | direta | violacao-pagina | sim | credita B-05 | norma |
| T3-c98d42c2bd | 05 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-d10b54c956 | 05 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |

Textos observados (conferência do agrupamento):
- T3-0049e09d8b: Form elements must have labels
- T3-0595431e63: Form elements must have labels
- T3-078bc4d8ac: Form elements must have labels
- T3-0a16b90cc9: Form elements must have labels
- T3-11e806dc7a: Form elements must have labels
- T3-20569a3c3b: Form elements must have labels
- T3-2bb2d045e0: Form elements must have labels
- T3-506760b854: Form elements must have labels
- T3-61a3a89ee3: Form elements must have labels
- T3-6d10495cba: Form elements must have labels
- T3-a83e6ba740: Form elements must have labels
- T3-a8bfe3d920: As 11 caixas de seleção da tabela (selecionar todas e uma por linha) não têm nome acessível
- T3-bb706cdb63: Form elements must have labels
- T3-c98d42c2bd: Form elements must have labels
- T3-d10b54c956: Form elements must have labels

### LN-8aac65f4 · 2 membros · lotes lote-01, lote-05

Regra `axe:page-has-heading-one` × não resolvido

Divergem: sugestao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-18076c7a24 | 01 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c066d8c2b1 | 05 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-18076c7a24: Rota Home: os 12 títulos dos cards são h6 e não há h1–h5
- T3-c066d8c2b1: Rota de edição sem h1; o primeiro título é h3, seguido de h4

### LN-a04f70e2 · 3 membros · lotes lote-03, lote-04, lote-06

Regra `axe:empty-table-header` × th

Divergem: vinculo, vinculo.relacao, credito · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-5cdd7ad584 | 03 | verdadeira | citada | boa-pratica | aplica | sim | B-26 | direta | violacao-pagina | sim | credita B-26 | mais-fraca |
| T3-9f056a4798 | 04 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-d5575b6a11 | 06 | verdadeira | citada | boa-pratica | aplica | sim | B-26 | direta | violacao-pagina | sim | credita B-26 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-5cdd7ad584: Table header text should not be empty
- T3-9f056a4798: Table header text should not be empty
- T3-d5575b6a11: Cabeçalhos da coluna de seleção e da coluna de ações sem texto

### LN-a302b71a · 4 membros · lotes lote-01, lote-02, lote-05, lote-06

Regra `wcag:1.4.3` × span

Divergem: vinculo, credito · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1eda1688d0 | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-13 | direta | violacao-pagina | sim | credita B-13 | norma |
| T3-36d7e74752 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-14 | direta | violacao-pagina | sim | credita B-14 | norma |
| T3-c86d044f87 | 05 | verdadeira | citada | obrigatorio | aplica | sim | B-13 | direta | violacao-pagina | sim | credita B-13 | norma |
| T3-f0bb2603c4 | 06 | verdadeira | citada | obrigatorio | aplica | sim | B-14 | direta | violacao-pagina | sim | credita B-14 | norma |

Textos observados (conferência do agrupamento):
- T3-1eda1688d0: O texto "Nenhum filtro de data aplicado" (14px, peso 500) é #FFFFFF sobre rgb(197,212,235): contraste 1,50:1.
- T3-36d7e74752: A inicial "U" do avatar (24,2px, negrito) é #FFFFFF sobre rgb(255,140,0): contraste 2,33:1.
- T3-c86d044f87: O texto "Nenhum filtro de data aplicado" é branco (#ffffff) sobre #c5d4eb, 14px normal: contraste 1,5:1.
- T3-f0bb2603c4: A inicial "U" do avatar é branca (#ffffff) sobre #ff8c00, 24,19px negrito (texto grande): contraste 2,33:1. O [ferramenta citada] deixou inc

### LN-a5023bd6 · 6 membros · lotes lote-01, lote-02, lote-05, lote-06

Regra `wcag:2.1.1` × span

Divergem: vinculo, credito · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0de82ef7d8 | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-11 | direta | violacao-pagina | sim | credita B-11 | norma |
| T3-1bc2b7d7de | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-19 | direta | violacao-pagina | sim | credita B-19 | norma |
| T3-31e0e46934 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-19 | direta | violacao-pagina | sim | credita B-19 | norma |
| T3-b26d220168 | 05 | verdadeira | citada | obrigatorio | aplica | sim | B-11 | direta | violacao-pagina | sim | credita B-11 | norma |
| T3-baefee3d59 | 05 | verdadeira | citada | obrigatorio | aplica | sim | B-11 | direta | violacao-pagina | sim | credita B-11 | norma |
| T3-ee6798e6c3 | 06 | verdadeira | citada | obrigatorio | aplica | sim | B-19 | direta | violacao-pagina | sim | credita B-19 | norma |

Textos observados (conferência do agrupamento):
- T3-0de82ef7d8: Os filtros Cidade, Porto, Vistoriador e Status são <span class="br-tag"> com cursor:pointer, sem tabindex nem role: abrem o dropdown com o m
- T3-1bc2b7d7de: "Trocar unidade" é um <span> com cursor:pointer que navega para /portal-mpa ao clicar; não é focável (tabIndex -1) e não tem papel.
- T3-31e0e46934: "Trocar unidade" é um <span> com cursor:pointer que navega para /pnip/portal-mpa com o mouse; sem tabindex nem role, o Tab passa do acionado
- T3-b26d220168: Os filtros Cidade, Porto, Vistoriador e Status são <span> com cursor:pointer e tratador de clique, sem tabindex e sem papel: não recebem foc
- T3-baefee3d59: Os filtros Cidade, Porto, Vistoriador e Status são <span> com cursor:pointer que abrem a lista ao clicar, mas não têm tabindex nem papel: fi
- T3-ee6798e6c3: No menu do usuário, "Trocar unidade" é um <span> com cursor:pointer e tratador de clique (leva a /pnip/portal-mpa); não é focável: o Tab vai

### LN-fea37aec · 13 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05, lote-06 · **muda crédito**

Regra `axe:color-contrast` × div

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-01599c9bec | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |
| T3-1294b8b7eb | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |
| T3-4fca556b63 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |
| T3-7adf153a71 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |
| T3-826ee56136 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |
| T3-82e32ffb26 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |
| T3-8aa5e2a056 | 04 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |
| T3-8fcadb0eda | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b62e541359 | 05 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |
| T3-c8eaa55823 | 05 | verdadeira | citada | obrigatorio | aplica | sim | B-23 | direta | violacao-pagina | sim | credita B-23 | norma |
| T3-cd8d7c2ff7 | 05 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |
| T3-d6fad82a43 | 06 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |
| T3-ee6e05c630 | 06 | verdadeira | citada | obrigatorio | aplica | sim | B-12 | direta | violacao-pagina | sim | credita B-12 | norma |

Textos observados (conferência do agrupamento):
- T3-01599c9bec: Elements must meet minimum color contrast ratio thresholds
- T3-1294b8b7eb: Elements must meet minimum color contrast ratio thresholds
- T3-4fca556b63: Elements must meet minimum color contrast ratio thresholds
- T3-7adf153a71: Elements must meet minimum color contrast ratio thresholds
- T3-826ee56136: Elements must meet minimum color contrast ratio thresholds
- T3-82e32ffb26: Elements must meet minimum color contrast ratio thresholds
- T3-8aa5e2a056: Status "Vistoria agendada": #ffffff sobre #4f97d1, 14px, contraste 3,14:1
- T3-8fcadb0eda: Status "Aguarda preenchimento": #ffffff sobre #888888, 14px, contraste 3,54:1
- T3-b62e541359: Elements must meet minimum color contrast ratio thresholds
- T3-c8eaa55823: Elements must meet minimum color contrast ratio thresholds
- T3-cd8d7c2ff7: Elements must meet minimum color contrast ratio thresholds
- T3-d6fad82a43: Elements must meet minimum color contrast ratio thresholds
- T3-ee6e05c630: Elements must meet minimum color contrast ratio thresholds

