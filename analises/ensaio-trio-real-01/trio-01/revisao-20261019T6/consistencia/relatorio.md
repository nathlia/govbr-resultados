# Revisão de campanha nova — consistência da 1ª passada (triagem)

40 átomos, um juiz por lote. Relatório interno: não vai aos juízes. Os grupos são **triagem** de possíveis inconsistências, não equivalência (regras: `regras.md`, sha256 `f7237f6840ef4cedc52c689ba7178502a95334f621f04029bac967408025ec04`).

## Resumo

| | mesma alegação (MA) | mesma leitura da norma (LN) |
|---|---:|---:|
| grupos (todos) | 29 | 24 |
| grupos com ≥ 2 membros | 8 | 9 |
| átomos nesses grupos | 19 | 23 |
| grupos com membros de lotes diferentes | 0 | 0 |
| grupos divergentes (algum campo) | 1 | 2 |
| grupos em que a classe diverge | 1 | 1 |
| grupos em que o crédito muda | 1 | 1 |
| grupos com resposta de norma divergente | 0 | 0 |
| grupos à adjudicação (regras §2) | 1 (2 átomos) | 0 (0 átomos) |
| pares concordantes — campos gerais¹, todos | 92.9% (13/14) | 100.0% (22/22) |
| idem, mesmo lote | 92.9% (13/14) | 100.0% (22/22) |
| idem, entre lotes | — (0/0) | — (0/0) |
| cobertura (pares comparáveis / pares) | 100.0% (14/14) | 100.0% (22/22) |

¹ MA: todos os campos; LN: só a resposta de norma (id, força, aplicabilidade, violada).

**Cartões cegos idênticos** (único vínculo auditável de equivalência): 0 grupos, 0 átomos (0 grupos com lotes diferentes); divergem 0 (classe 0, crédito 0). Pares concordantes em todos os campos: — (0/0) (mesmo lote — (0/0), entre lotes — (0/0)); na classe: — (0/0) (entre lotes — (0/0)).

## Concordância por campo — mesma alegação

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 14/14 (100.0%) | 92.9% (13/14) | 92.9% (13/14) | — (0/0) | 7/8 | 1 |
| norma.id | 14/14 (100.0%) | 100.0% (14/14) | 100.0% (14/14) | — (0/0) | 8/8 | 0 |
| norma.forca | 14/14 (100.0%) | 100.0% (14/14) | 100.0% (14/14) | — (0/0) | 8/8 | 0 |
| norma.aplicabilidade | 14/14 (100.0%) | 100.0% (14/14) | 100.0% (14/14) | — (0/0) | 8/8 | 0 |
| norma.violada | 14/14 (100.0%) | 100.0% (14/14) | 100.0% (14/14) | — (0/0) | 8/8 | 0 |
| vinculo | 14/14 (100.0%) | 100.0% (14/14) | 100.0% (14/14) | — (0/0) | 8/8 | 0 |
| vinculo.relacao | 13/14 (92.9%) | 100.0% (13/13) | 100.0% (13/13) | — (0/0) | 7/7 | 0 |
| sugestao | 0/14 (0.0%) | — (0/0) | — (0/0) | — (0/0) | 0/0 | 0 |
| classe | 14/14 (100.0%) | 92.9% (13/14) | 92.9% (13/14) | — (0/0) | 7/8 | 1 |
| credita | 14/14 (100.0%) | 92.9% (13/14) | 92.9% (13/14) | — (0/0) | 7/8 | 1 |
| credito | 14/14 (100.0%) | 92.9% (13/14) | 92.9% (13/14) | — (0/0) | 7/8 | 1 |
| fundamentacao | 14/14 (100.0%) | 92.9% (13/14) | 92.9% (13/14) | — (0/0) | 7/8 | 1 |

## Concordância por campo — mesma leitura da norma

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 22/22 (100.0%) | 95.5% (21/22) | 95.5% (21/22) | — (0/0) | 8/9 | 1 |
| norma.id | 22/22 (100.0%) | 100.0% (22/22) | 100.0% (22/22) | — (0/0) | 9/9 | 0 |
| norma.forca | 22/22 (100.0%) | 100.0% (22/22) | 100.0% (22/22) | — (0/0) | 9/9 | 0 |
| norma.aplicabilidade | 22/22 (100.0%) | 100.0% (22/22) | 100.0% (22/22) | — (0/0) | 9/9 | 0 |
| norma.violada | 22/22 (100.0%) | 100.0% (22/22) | 100.0% (22/22) | — (0/0) | 9/9 | 0 |
| vinculo | 22/22 (100.0%) | 72.7% (16/22) | 72.7% (16/22) | — (0/0) | 8/9 | 1 |
| vinculo.relacao | 20/22 (90.9%) | 100.0% (20/20) | 100.0% (20/20) | — (0/0) | 7/7 | 0 |
| sugestao | 0/22 (0.0%) | — (0/0) | — (0/0) | — (0/0) | 0/0 | 0 |
| classe | 22/22 (100.0%) | 95.5% (21/22) | 95.5% (21/22) | — (0/0) | 8/9 | 1 |
| credita | 22/22 (100.0%) | 95.5% (21/22) | 95.5% (21/22) | — (0/0) | 8/9 | 1 |
| credito | 22/22 (100.0%) | 68.2% (15/22) | 68.2% (15/22) | — (0/0) | 7/9 | 2 |
| fundamentacao | 22/22 (100.0%) | 95.5% (21/22) | 95.5% (21/22) | — (0/0) | 8/9 | 1 |

## Método

Concordância descritiva: pares de membros dentro dos grupos com ≥ 2 membros; denominador = pares comparáveis (os dois responderam o campo; para vários campos, mesma forma de resposta em cada campo); cobertura = comparáveis / pares; mesmo lote (mesmo juiz) e entre lotes separados. Sem κ: cada átomo tem um julgamento só, e membros de um grupo não são avaliações repetidas do mesmo item.

Equivalência, seleção, adjudicação e parada: `regras.md`.

## Por campanha × braço (contagens)

| campanha | braço | átomos | em grupo MA divergente | em grupo MA que muda crédito | em grupo LN com norma divergente | à adjudicação |
|---|---|---:|---:|---:|---:|---:|
| ensaio-trio-real-01 | com | 14 | 1 | 1 | 0 | 1 |
| ensaio-trio-real-01 | ferramentas | 10 | 1 | 1 | 0 | 1 |
| ensaio-trio-real-01 | lb-axe | 2 | 0 | 0 | 0 | 0 |
| ensaio-trio-real-01 | lb-validator | 6 | 0 | 0 | 0 | 0 |
| ensaio-trio-real-01 | sem | 8 | 0 | 0 | 0 | 0 |

## Grupos divergentes — mesma alegação (1; 1 à adjudicação; 1 mudam o crédito)

### MA-53ad4dfb · 2 membros · lotes lote-01 · **muda crédito** · → adjudicação

Tela solicitacao · completa · regra `wcag:2.4.7` · estado `1280x900` · tipo campo de formulário  
Sujeito: `body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(1)>div>div:nth-of-type(1)>div>input ; body>div:nth-of-type(1)>div>main>form>div:nth-of-type(3)>div:nth-of-type(2)>div>div:nth-of-type(1)>div>input`

Divergem: fato, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-3a139fd43c | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-04 | direta | violacao-pagina | sim | credita A-04 | norma |
| T3-f0d1b88ac3 | 01 | indisponivel | citada | obrigatorio | aplica | sim | A-04 | direta | evidencia-indisponivel | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-3a139fd43c: Com foco por teclado (Tab), os campos Tipo de serviço e Unidade de atendimento não mostram indicador: outline none, box-shadow none e borda 
- T3-f0d1b88ac3: Com foco por teclado (classe focus-visible), outline:none, box-shadow:none e borda inalterada (#888): não há indicador de foco visível. Caus

## Grupos divergentes — mesma leitura da norma (2; 0 à adjudicação; 1 mudam o crédito)

### LN-787dc35d · 5 membros · lotes lote-01

Regra `wcag:2.4.3` × botão com texto

Divergem: vinculo, credito · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-22b719965c | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-02 | direta | violacao-pagina | sim | credita A-02 | norma |
| T3-2fcc054b6e | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-01 | direta | violacao-pagina | sim | credita A-01 | norma |
| T3-3e25b3a214 | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-02 | direta | violacao-pagina | sim | credita A-02 | norma |
| T3-9f705ac650 | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-01 | direta | violacao-pagina | sim | credita A-01 | norma |
| T3-b3d37657aa | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-02 | direta | violacao-pagina | sim | credita A-02 | norma |

Textos observados (conferência do agrupamento):
- T3-22b719965c: O botão de upload tem tabindex='1'. O primeiro Tab após o carregamento vai direto a ele, antes do atalho 'Ir para o conteúdo', do cabeçalho 
- T3-2fcc054b6e: Ao fechar o diálogo 'Descartar solicitação?' com Esc, 'Continuar preenchendo' ou o botão Fechar, o diálogo sai do DOM e o foco vai para o <b
- T3-3e25b3a214: Com tabindex="1", o botão de upload é o primeiro elemento a receber foco: o primeiro Tab após o carregamento vai para ele (a página rola até
- T3-9f705ac650: O botão Cancelar abre o diálogo "Descartar solicitação?" (role=dialog, aria-modal=true, foco preso corretamente). Ao fechar por Esc, por "Fe
- T3-b3d37657aa: tabindex="1": o primeiro Tab após o carregamento leva o foco ao botão de upload (no meio do formulário), antes do skip link, da marca, do br

### LN-ffb6e692 · 2 membros · lotes lote-01 · **muda crédito**

Regra `wcag:2.4.7` × campo de formulário

Divergem: fato, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-3a139fd43c | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-04 | direta | violacao-pagina | sim | credita A-04 | norma |
| T3-f0d1b88ac3 | 01 | indisponivel | citada | obrigatorio | aplica | sim | A-04 | direta | evidencia-indisponivel | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-3a139fd43c: Com foco por teclado (Tab), os campos Tipo de serviço e Unidade de atendimento não mostram indicador: outline none, box-shadow none e borda 
- T3-f0d1b88ac3: Com foco por teclado (classe focus-visible), outline:none, box-shadow:none e borda inalterada (#888): não há indicador de foco visível. Caus

