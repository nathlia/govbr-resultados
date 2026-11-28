# Revisão de campanha nova — consistência da 1ª passada (triagem)

2214 átomos, um juiz por lote. Relatório interno: não vai aos juízes. Os grupos são **triagem** de possíveis inconsistências, não equivalência (regras: `regras.md`, sha256 `f7237f6840ef4cedc52c689ba7178502a95334f621f04029bac967408025ec04`).

## Resumo

| | mesma alegação (MA) | mesma leitura da norma (LN) |
|---|---:|---:|
| grupos (todos) | 377 | 124 |
| grupos com ≥ 2 membros | 255 | 84 |
| átomos nesses grupos | 2092 | 2032 |
| grupos com membros de lotes diferentes | 254 | 84 |
| grupos divergentes (algum campo) | 70 | 32 |
| grupos em que a classe diverge | 68 | 30 |
| grupos em que o crédito muda | 55 | 21 |
| grupos com resposta de norma divergente | 19 | 11 |
| grupos à adjudicação (regras §2) | 68 (650 átomos) | 11 (275 átomos) |
| pares concordantes — campos gerais¹, todos | 95.4% (9607/10070) | 97.8% (77379/79124) |
| idem, mesmo lote | 98.7% (155/157) | 99.5% (1142/1148) |
| idem, entre lotes | 95.3% (9452/9913) | 97.8% (76237/77976) |
| cobertura (pares comparáveis / pares) | 88.7% (10070/11352) | 100.0% (79124/79124) |

¹ MA: todos os campos; LN: só a resposta de norma (id, força, aplicabilidade, violada).

**Cartões cegos idênticos** (único vínculo auditável de equivalência): 112 grupos, 1008 átomos (112 grupos com lotes diferentes); divergem 44 (classe 44, crédito 43). Pares concordantes em todos os campos: 97.8% (3390/3468) (mesmo lote 100.0% (62/62), entre lotes 97.7% (3328/3406)); na classe: 85.4% (3444/4032) (entre lotes 85.2% (3382/3970)).

## Concordância por campo — mesma alegação

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 11352/11352 (100.0%) | 99.2% (11256/11352) | 100.0% (161/161) | 99.1% (11095/11191) | 248/255 | 7 |
| norma.id | 11352/11352 (100.0%) | 98.4% (11172/11352) | 99.4% (160/161) | 98.4% (11012/11191) | 253/255 | 2 |
| norma.forca | 11352/11352 (100.0%) | 98.4% (11172/11352) | 99.4% (160/161) | 98.4% (11012/11191) | 253/255 | 2 |
| norma.aplicabilidade | 11352/11352 (100.0%) | 94.1% (10683/11352) | 99.4% (160/161) | 94.0% (10523/11191) | 245/255 | 10 |
| norma.violada | 11352/11352 (100.0%) | 92.6% (10508/11352) | 99.4% (160/161) | 92.5% (10348/11191) | 237/255 | 18 |
| vinculo | 11352/11352 (100.0%) | 91.9% (10433/11352) | 97.5% (157/161) | 91.8% (10276/11191) | 201/255 | 54 |
| vinculo.relacao | 3424/11352 (30.2%) | 98.3% (3365/3424) | 100.0% (57/57) | 98.3% (3308/3367) | 120/128 | 8 |
| sugestao | 507/11352 (4.5%) | 87.6% (444/507) | 100.0% (11/11) | 87.3% (433/496) | 20/29 | 9 |
| classe | 11352/11352 (100.0%) | 85.5% (9708/11352) | 96.3% (155/161) | 85.4% (9553/11191) | 187/255 | 68 |
| credita | 11352/11352 (100.0%) | 91.7% (10409/11352) | 96.9% (156/161) | 91.6% (10253/11191) | 200/255 | 55 |
| credito | 11352/11352 (100.0%) | 91.7% (10409/11352) | 96.9% (156/161) | 91.6% (10253/11191) | 200/255 | 55 |
| fundamentacao | 11352/11352 (100.0%) | 91.6% (10403/11352) | 96.9% (156/161) | 91.6% (10247/11191) | 200/255 | 55 |

## Concordância por campo — mesma leitura da norma

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 79124/79124 (100.0%) | 99.3% (78578/79124) | 100.0% (1148/1148) | 99.3% (77430/77976) | 82/84 | 2 |
| norma.id | 79124/79124 (100.0%) | 100.0% (79124/79124) | 100.0% (1148/1148) | 100.0% (77976/77976) | 84/84 | 0 |
| norma.forca | 79124/79124 (100.0%) | 100.0% (79124/79124) | 100.0% (1148/1148) | 100.0% (77976/77976) | 84/84 | 0 |
| norma.aplicabilidade | 79124/79124 (100.0%) | 98.5% (77950/79124) | 99.7% (1144/1148) | 98.5% (76806/77976) | 79/84 | 5 |
| norma.violada | 79124/79124 (100.0%) | 97.8% (77403/79124) | 99.5% (1142/1148) | 97.8% (76261/77976) | 74/84 | 10 |
| vinculo | 79124/79124 (100.0%) | 60.3% (47704/79124) | 65.7% (754/1148) | 60.2% (46950/77976) | 64/84 | 20 |
| vinculo.relacao | 19021/79124 (24.0%) | 99.3% (18894/19021) | 100.0% (318/318) | 99.3% (18576/18703) | 34/39 | 5 |
| sugestao | 2815/79124 (3.6%) | 89.7% (2526/2815) | 94.1% (48/51) | 89.6% (2478/2764) | 6/14 | 8 |
| classe | 79124/79124 (100.0%) | 58.6% (46385/79124) | 64.9% (745/1148) | 58.5% (45640/77976) | 54/84 | 30 |
| credita | 79124/79124 (100.0%) | 60.3% (47680/79124) | 65.6% (753/1148) | 60.2% (46927/77976) | 63/84 | 21 |
| credito | 79124/79124 (100.0%) | 60.3% (47680/79124) | 65.6% (753/1148) | 60.2% (46927/77976) | 63/84 | 21 |
| fundamentacao | 79124/79124 (100.0%) | 60.3% (47674/79124) | 65.6% (753/1148) | 60.2% (46921/77976) | 63/84 | 21 |

## Método

Concordância descritiva: pares de membros dentro dos grupos com ≥ 2 membros; denominador = pares comparáveis (os dois responderam o campo; para vários campos, mesma forma de resposta em cada campo); cobertura = comparáveis / pares; mesmo lote (mesmo juiz) e entre lotes separados. Sem κ: cada átomo tem um julgamento só, e membros de um grupo não são avaliações repetidas do mesmo item.

Equivalência, seleção, adjudicação e parada: `regras.md`.

## Por campanha × braço (contagens)

| campanha | braço | átomos | em grupo MA divergente | em grupo MA que muda crédito | em grupo LN com norma divergente | à adjudicação |
|---|---|---:|---:|---:|---:|---:|
| nat78-tela-f3-01 | com | 449 | 101 | 60 | 61 | 121 |
| nat78-tela-f3-01 | ferramentas | 364 | 78 | 36 | 50 | 101 |
| nat78-tela-f3-01 | lb-axe | 675 | 297 | 297 | 45 | 297 |
| nat78-tela-f3-01 | lb-validator | 333 | 99 | 90 | 45 | 99 |
| nat78-tela-f3-01 | sem | 393 | 82 | 33 | 74 | 106 |

## Grupos divergentes — mesma alegação (70; 68 à adjudicação; 55 mudam o crédito)

### MA-011720c4 · 37 membros · lotes lote-01, lote-02, lote-05, lote-06, lote-10, lote-11, lote-12, lote-13, lote-14, lote-15, lote-17, lote-18, lote-24, lote-25, lote-27, lote-28, lote-30, lote-36, lote-37, lote-39, lote-42, lote-43, lote-46, lote-57, lote-58, lote-61, lote-62, lote-65, lote-67, lote-68, lote-69 · → adjudicação

Tela processos-f3 · completa · regra `wcag:4.1.2` · estado `1280x900@lista-exibir` · tipo não resolvido  
Sujeito: `unresolved:.swal2-popup`

Divergem: norma.aplicabilidade, norma.violada, sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-033f162b08 | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-04046dd5b1 | 02 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-0d7e34d660 | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-108d268402 | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-131bb8196c | 06 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-1f7964daf2 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-231aa06e0a | 11 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-2727cfd376 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2a8324520b | 13 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-2f8ad87706 | 14 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-352da3a244 | 15 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-3cc4d7e5b7 | 17 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-3d71c54f29 | 18 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-3e1f58139c | 18 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-54752b8ddb | 24 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-5891b8a514 | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6111e79f19 | 27 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-63fceba90a | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-66a618dc70 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6ccbd26e6e | 30 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-6ee3a1c2e2 | 30 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-81f98f210b | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-870551c09f | 37 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-90502e207f | 39 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-9a8848cf11 | 42 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9d82d7fa3a | 43 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9fc4e9ebd7 | 43 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9fcd77a36c | 43 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a9d8e56f38 | 46 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-d1ff3b23bf | 57 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d7c40e407a | 58 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e07d0998e3 | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e564f2e778 | 62 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-ee9ddddde4 | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f5f9f93b11 | 67 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fa1daba279 | 68 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fed9a30726 | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-033f162b08: O diálogo "Tem certeza que deseja desassociar esse processo do analista responsável?" também tem aria-labelledby apontando para o h2#swal2-t
- T3-04046dd5b1: O diálogo de confirmação "Tem certeza que deseja desassociar..." também tem aria-labelledby para um título vazio e oculto: sem nome acessíve
- T3-0d7e34d660: Diálogo de assinatura (visualização do PDF, botões "Solicitar Revisão"/"Assinar com gov.br") com aria-labelledby para h2 oculto e vazio: sem
- T3-108d268402: O diálogo de assinatura (SweetAlert2, role=dialog aria-modal) usa aria-labelledby="swal2-title", que aponta para um h2 vazio e oculto (displ
- T3-131bb8196c: O diálogo "Assinar" (role="dialog") referencia o h2 #swal2-title vazio e oculto: fica sem nome acessível.
- T3-1f7964daf2: Diálogo de assinatura (PDF + "Solicitar Revisão"/"Assinar com gov.br") também sem nome: aria-labelledby aponta para h2#swal2-title vazio e o
- T3-231aa06e0a: O diálogo aberto por "Assinar" (role=dialog, aria-modal) tem aria-labelledby="swal2-title", mas esse h2 está vazio e oculto, e o diálogo fic
- T3-2727cfd376: O diálogo de assinatura (Solicitar Revisão / Assinar com gov.br) tem aria-labelledby="swal2-title" com título vazio e oculto: fica sem nome 
- T3-2a8324520b: Diálogo de confirmação de desassociação aponta aria-labelledby para o h2 #swal2-title vazio: o diálogo fica sem nome acessível
- T3-2f8ad87706: O diálogo "Tem certeza que deseja desassociar esse processo do analista responsável?" (role=dialog) aponta aria-labelledby para o #swal2-tit
- T3-352da3a244: Diálogo "Assinar" (pré-visualização de PDF) com aria-labelledby="swal2-title" vazio e oculto: sem nome acessível.
- T3-3cc4d7e5b7: Diálogo de assinatura (PDF + "Solicitar Revisão"/"Assinar com gov.br"): role=dialog com aria-labelledby apontando para o #swal2-title vazio 
- T3-3d71c54f29: O modal de assinatura (aberto por "Assinar") tem role="dialog" e aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e oculto (di
- T3-3e1f58139c: O diálogo de assinatura (role=dialog, aria-modal) usa aria-labelledby="swal2-title", mas esse h2 está vazio e com display:none: o diálogo nã
- T3-54752b8ddb: Diálogo de confirmação "Tem certeza que deseja desassociar…": role=dialog, aria-labelledby=swal2-title, mas o h2 #swal2-title está vazio e c
- T3-5891b8a514: O diálogo 'Assinar' (role=dialog, aria-modal=true) usa aria-labelledby='swal2-title', mas o h2#swal2-title está vazio e com display:none: na
- T3-6111e79f19: Modal de assinatura (role=dialog, aria-modal) com aria-labelledby='swal2-title' apontando para h2 vazio e oculto: diálogo sem nome acessível
- T3-63fceba90a: O diálogo de confirmação de "Desassociar" (role="dialog") tem aria-labelledby="swal2-title", mas o h2 está vazio e oculto: o diálogo fica se
- T3-66a618dc70: O diálogo de confirmação de "Desassociar processo do analista responsável" tem role="dialog" com aria-labelledby apontando para h2#swal2-tit
- T3-6ccbd26e6e: O diálogo de confirmação "Tem certeza que deseja desassociar...?" (role=dialog) aponta aria-labelledby para #swal2-title, que está vazio e o
- T3-6ee3a1c2e2: O diálogo de "Assinar" (role="dialog", aria-modal) aponta aria-labelledby para #swal2-title, que está vazio e com display:none: o diálogo nã
- T3-81f98f210b: Diálogo de confirmação de desassociar (SweetAlert2, role=dialog, aria-modal=true) referencia aria-labelledby="swal2-title", elemento vazio e
- T3-870551c09f: O diálogo de confirmação aberto por "Desassociar processo do analista responsável" também tem o título #swal2-title vazio, e o aria-labelled
- T3-90502e207f: Diálogo de confirmação "Tem certeza que deseja desassociar..." (role=dialog, aria-modal=true) com aria-labelledby="swal2-title" apontando pa
- T3-9a8848cf11: Diálogo de confirmação 'Tem certeza que deseja desassociar...' (role=dialog) com aria-labelledby apontando para título vazio e oculto: sem n
- T3-9d82d7fa3a: Diálogo de assinatura (role=dialog, aria-modal) com aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com display:none: diálo
- T3-9fc4e9ebd7: O diálogo de confirmação "Tem certeza que deseja desassociar..." tem aria-labelledby="swal2-title", e #swal2-title está vazio e oculto (disp
- T3-9fcd77a36c: O diálogo de assinatura (role="dialog", aria-modal="true") tem aria-labelledby="swal2-title", mas h2#swal2-title está vazio e com display:no
- T3-a9d8e56f38: Diálogo de confirmação "Tem certeza que deseja desassociar..." (role=dialog) com aria-labelledby apontando para h2#swal2-title vazio e ocult
- T3-d1ff3b23bf: O diálogo de assinatura (role="dialog") aponta aria-labelledby para #swal2-title vazio e oculto: o diálogo fica sem nome acessível.
- T3-d7c40e407a: O diálogo de confirmação 'Desassociar' ('Tem certeza que deseja desassociar…') usa aria-labelledby='swal2-title', que aponta para um h2 vazi
- T3-e07d0998e3: O diálogo de assinatura (role="dialog", aria-modal) tem aria-labelledby="swal2-title", mas esse h2 está vazio e com display:none: o diálogo 
- T3-e564f2e778: Diálogo de assinatura (role=dialog, aria-modal) tem aria-labelledby="swal2-title", mas o h2 está vazio e oculto: o diálogo fica sem nome ace
- T3-ee9ddddde4: Diálogo de confirmação "Tem certeza que deseja desassociar..." (role=dialog, aria-modal) com aria-labelledby="swal2-title" apontando para h2
- T3-f5f9f93b11: Diálogo de assinatura (pré-visualização do PDF + "Solicitar Revisão"/"Assinar com gov.br") com role=dialog e aria-labelledby para h2#swal2-t
- T3-fa1daba279: Diálogo de confirmação de desassociação (role=dialog, aria-modal) com aria-labelledby="swal2-title" apontando para h2 vazio e oculto: sem no
- T3-fed9a30726: O diálogo de confirmação "Tem certeza que deseja desassociar esse processo...?" (role="dialog") referencia por aria-labelledby o h2#swal2-ti

### MA-0a58232f · 9 membros · lotes lote-07, lote-15, lote-19, lote-23, lote-27, lote-37, lote-40, lote-59, lote-60 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@filtro-removido` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-14b628b1ff | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-32d1d075b0 | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-44bdc02e89 | 19 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-533edc7882 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-627fed6eb9 | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-857e6ef418 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-95d920426e | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dc0378942f | 59 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dc64fed6c6 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-14b628b1ff: Form elements must have labels
- T3-32d1d075b0: Form elements must have labels
- T3-44bdc02e89: Form elements must have labels
- T3-533edc7882: Form elements must have labels
- T3-627fed6eb9: Form elements must have labels
- T3-857e6ef418: Form elements must have labels
- T3-95d920426e: Form elements must have labels
- T3-dc0378942f: Form elements must have labels
- T3-dc64fed6c6: Form elements must have labels

### MA-0d2dd976 · 9 membros · lotes lote-09, lote-19, lote-36, lote-37, lote-40, lote-50, lote-51, lote-61, lote-66 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@lista-exibir` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1f1e5d5e28 | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-41660ea583 | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-834d84c180 | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-86359e42a2 | 37 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-9315d23241 | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-b9f03ea411 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-bb6206b3ba | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e20fb78095 | 61 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f456ed1489 | 66 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |

Textos observados (conferência do agrupamento):
- T3-1f1e5d5e28: Form elements must have labels
- T3-41660ea583: Form elements must have labels
- T3-834d84c180: Form elements must have labels
- T3-86359e42a2: Form elements must have labels
- T3-9315d23241: Form elements must have labels
- T3-b9f03ea411: Form elements must have labels
- T3-bb6206b3ba: Form elements must have labels
- T3-e20fb78095: Form elements must have labels
- T3-f456ed1489: Form elements must have labels

### MA-1bcdbdee · 9 membros · lotes lote-07, lote-12, lote-16, lote-24, lote-39, lote-49, lote-50, lote-56, lote-58 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:color-contrast` · estado `1280x900@assinatura-cancelada` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-15b49b33b3 | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-27bd1e299f | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-371794f71c | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-545dad6d72 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8d0320ea03 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b56ae385f0 | 49 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b95ecf86ea | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d03d933104 | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d8263a9721 | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |

Textos observados (conferência do agrupamento):
- T3-15b49b33b3: Elements must meet minimum color contrast ratio thresholds
- T3-27bd1e299f: Elements must meet minimum color contrast ratio thresholds
- T3-371794f71c: Elements must meet minimum color contrast ratio thresholds
- T3-545dad6d72: Elements must meet minimum color contrast ratio thresholds
- T3-8d0320ea03: Elements must meet minimum color contrast ratio thresholds
- T3-b56ae385f0: Elements must meet minimum color contrast ratio thresholds
- T3-b95ecf86ea: Elements must meet minimum color contrast ratio thresholds
- T3-d03d933104: Elements must meet minimum color contrast ratio thresholds
- T3-d8263a9721: Elements must meet minimum color contrast ratio thresholds

### MA-1ef24d2b · 9 membros · lotes lote-27, lote-34, lote-36, lote-45, lote-50, lote-55, lote-63, lote-65, lote-69 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-foundation-global-21b1a2733f7b` · estado `1280x900@lista-exibir` · tipo span  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-600f71af4d | 27 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-7a26062d34 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-826403a49a | 36 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-a683c8ed82 | 45 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-b92d1d3163 | 50 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-cc62812c30 | 55 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-e7e5cf284c | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f03971aa28 | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fcefcac0a9 | 69 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |

Textos observados (conferência do agrupamento):
- T3-600f71af4d: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-7a26062d34: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-826403a49a: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-a683c8ed82: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-b92d1d3163: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-cc62812c30: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-e7e5cf284c: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-f03971aa28: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-fcefcac0a9: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS

### MA-26aab563 · 9 membros · lotes lote-29, lote-31, lote-45, lote-46, lote-51, lote-53, lote-57, lote-58, lote-60 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:page-has-heading-one` · estado `1280x900@lista-exibir` · tipo não resolvido  
Sujeito: `unresolved:iframe html`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-6a7b3af6ee | 29 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-7228b73603 | 31 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-a53789b415 | 45 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-aa77e6a850 | 46 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-bb1467e94d | 51 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-c5b71e48c9 | 53 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-d423bbb3f8 | 57 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-d85eca83e7 | 58 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-de660d4e38 | 60 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-6a7b3af6ee: Page should contain a level-one heading
- T3-7228b73603: Page should contain a level-one heading
- T3-a53789b415: Page should contain a level-one heading
- T3-aa77e6a850: Page should contain a level-one heading
- T3-bb1467e94d: Page should contain a level-one heading
- T3-c5b71e48c9: Page should contain a level-one heading
- T3-d423bbb3f8: Page should contain a level-one heading
- T3-d85eca83e7: Page should contain a level-one heading
- T3-de660d4e38: Page should contain a level-one heading

### MA-280c82cf · 9 membros · lotes lote-08, lote-15, lote-17, lote-25, lote-28, lote-37, lote-39, lote-52 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-component-breadcrumb-478cffdbb111` · estado `1280x900@filtro-removido` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb >>> div`

Divergem: fato, norma.violada, vinculo, vinculo.relacao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1835277b34 | 08 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-19d9d8c8a5 | 08 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-3214f98b36 | 15 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-3b9749411f | 17 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-5b3585c6ba | 25 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-6548542e2d | 28 | falsa | citada | obrigatorio | aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-85241d9b6d | 37 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | host-interno | violacao-pagina | sim | credita F3-07 | norma |
| T3-8e8dcf96f8 | 39 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | host-interno | violacao-pagina | sim | credita F3-07 | norma |
| T3-c032ce693a | 52 | falsa | citada | obrigatorio | aplica | sim | nenhum | — | erro-factual | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1835277b34: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-19d9d8c8a5: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-3214f98b36: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-3b9749411f: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-5b3585c6ba: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-6548542e2d: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-85241d9b6d: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-8e8dcf96f8: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-c032ce693a: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua

### MA-30d9e61b · 17 membros · lotes lote-02, lote-03, lote-07, lote-09, lote-11, lote-21, lote-26, lote-38, lote-44, lote-48, lote-52, lote-54, lote-66 · → adjudicação

Tela processos-f3 · completa · regra `wcag:4.1.2` · estado `1280x900` · tipo componente <br-breadcrumb>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb`

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-075224253b | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-07ed27e845 | 03 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-0975331aa2 | 03 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-1472f77d4d | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-14c24961f0 | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-165d047c60 | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1e5fe68ab3 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1e9601ed79 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-25967b37df | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4ac407e738 | 21 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-5f45a49034 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-89b4efc3bb | 38 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-a1139080dc | 44 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b184a5d307 | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bf1fb287ad | 52 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c79da8c556 | 54 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f3c70843ff | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-075224253b: No shadow DOM de br-breadcrumb, o link "Home" (<a href>) contém um <button> "Home": um controle interativo dentro de outro. São dois pontos 
- T3-07ed27e845: No shadow DOM, o item Home é <a href='/portal-mpa/'><button class='br-button small circle' aria-label=''>Home</button></a>: controle interat
- T3-0975331aa2: Item Home do breadcrumb: <a href="/portal-mpa/"> envolve um <button aria-label="">; controles interativos aninhados com duas paradas de Tab 
- T3-1472f77d4d: No breadcrumb, o item "Home" é um <button> dentro de um <a href="/portal-mpa/">: elemento interativo aninhado em outro.
- T3-14c24961f0: No breadcrumb, o item "Home" é um <a href="/portal-mpa/"> que contém um <button class="br-button circle" aria-label=""> (interativo aninhado
- T3-165d047c60: No breadcrumb, o item Home é <a href="/portal-mpa/"> que contém um <button> (controle interativo aninhado em link).
- T3-1e5fe68ab3: No breadcrumb, o item Home é um <a href="/portal-mpa/"> que contém um <button aria-label=""> (elementos interativos aninhados); o Tab para d
- T3-1e9601ed79: No breadcrumb (shadow DOM), o item Home é um <button> aninhado dentro de <a href="/portal-mpa/">: controle interativo dentro de outro.
- T3-25967b37df: No breadcrumb, o item Home é um <a href="/portal-mpa/"> contendo um <button aria-label="">: interativo aninhado, com duas paradas de Tab con
- T3-4ac407e738: No shadow DOM, o item Home é um <a href> que contém um <button> (controle interativo aninhado em outro).
- T3-5f45a49034: O item Home do breadcrumb é <a href="/portal-mpa/"> contendo um <button class="br-button circle">: controle interativo aninhado em link
- T3-89b4efc3bb: Item "Home" do breadcrumb é <a href> contendo <button aria-label=""> (elemento interativo aninhado em link)
- T3-a1139080dc: O item Home é um <a href="/portal-mpa/"> que contém um <button> (aninhamento interativo); a navegação por Tab passa por dois alvos para o me
- T3-b184a5d307: No shadow DOM, o item Home é um <a href='/portal-mpa/'> contendo um <button> (elemento interativo aninhado); o Tab para duas vezes (link 44×
- T3-bf1fb287ad: No shadow DOM do br-breadcrumb, o item Home é um <a href="/portal-mpa/"> com um <button aria-label=""> dentro (interativo aninhado). O Tab p
- T3-c79da8c556: No shadow DOM do breadcrumb, o link "Home" (<a href="/portal-mpa/">) contém um <button class="br-button small circle" aria-label=""> — contr
- T3-f3c70843ff: No shadow root do breadcrumb, o item Home é <a href="/portal-mpa/"> contendo <button class="br-button circle" aria-label="">: elemento inter

### MA-3257daa3 · 9 membros · lotes lote-11, lote-12, lote-16, lote-19, lote-26, lote-36, lote-50, lote-61, lote-65 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@assinatura-cancelada` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-2395db7db8 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-274bdc990f | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3756149e20 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-41f07e4e1a | 19 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5fc77a43a8 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-83bb566752 | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-b8106976b0 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e2759d4f6e | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-eedce16f4f | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-2395db7db8: Form elements must have labels
- T3-274bdc990f: Form elements must have labels
- T3-3756149e20: Form elements must have labels
- T3-41f07e4e1a: Form elements must have labels
- T3-5fc77a43a8: Form elements must have labels
- T3-83bb566752: Form elements must have labels
- T3-b8106976b0: Form elements must have labels
- T3-e2759d4f6e: Form elements must have labels
- T3-eedce16f4f: Form elements must have labels

### MA-32aa1d4c · 9 membros · lotes lote-22, lote-23, lote-38, lote-50, lote-51, lote-54, lote-61, lote-63 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@assinatura-cancelada` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-4ef226f5d3 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-525a0b9cfd | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-8c259d8fc3 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b7d35f6cfe | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-bdd70817b7 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c8d09a9516 | 54 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e199806ab2 | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e206675643 | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e759ce9b06 | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-4ef226f5d3: Form elements must have labels
- T3-525a0b9cfd: Form elements must have labels
- T3-8c259d8fc3: Form elements must have labels
- T3-b7d35f6cfe: Form elements must have labels
- T3-bdd70817b7: Form elements must have labels
- T3-c8d09a9516: Form elements must have labels
- T3-e199806ab2: Form elements must have labels
- T3-e206675643: Form elements must have labels
- T3-e759ce9b06: Form elements must have labels

### MA-32f3abec · 5 membros · lotes lote-27, lote-38, lote-47, lote-50, lote-65 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `wcag:1.3.1` · estado `1280x900` · tipo th  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(9) ; body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:n`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-6302c7b90d | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-8bea7f274f | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-ad81b2b9ff | 47 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b818dba132 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-ef84d286f8 | 65 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |

Textos observados (conferência do agrupamento):
- T3-6302c7b90d: Cabeçalho da coluna de ações (th scope=col) vazio
- T3-8bea7f274f: O cabeçalho da coluna de ações (Ver processo/Desassociar/Assinar) é um th vazio, sem texto
- T3-ad81b2b9ff: Na aba Concluídos, o cabeçalho da coluna de ações (último th) está vazio.
- T3-b818dba132: O cabeçalho da coluna de ações (Ver processo, Desassociar, Assinar) é um th vazio ([ferramenta citada] empty-table-header), também em "Concl
- T3-ef84d286f8: O cabeçalho da coluna de ações (Ver processo/Desassociar/Assinar) é um th vazio, sem texto nem nome acessível.

### MA-39afc031 · 9 membros · lotes lote-04, lote-25, lote-26, lote-29, lote-32, lote-36, lote-51, lote-56, lote-67 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@lista-exibir` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0d013bd5ab | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-58d2b0d0fa | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-5f7bac805c | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-6c129a1e50 | 29 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-74bb7ab368 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-84e91046ea | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-bd7523360b | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ceb9cefe73 | 56 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f496e81476 | 67 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |

Textos observados (conferência do agrupamento):
- T3-0d013bd5ab: Form elements must have labels
- T3-58d2b0d0fa: Form elements must have labels
- T3-5f7bac805c: Form elements must have labels
- T3-6c129a1e50: Form elements must have labels
- T3-74bb7ab368: Form elements must have labels
- T3-84e91046ea: Form elements must have labels
- T3-bd7523360b: Form elements must have labels
- T3-ceb9cefe73: Form elements must have labels
- T3-f496e81476: Form elements must have labels

### MA-39d89f3b · 4 membros · lotes lote-10, lote-34, lote-50, lote-68 · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-accessibility-global-f12b1bae5784` · estado `1280x900` · tipo botão com texto  
Sujeito: `body>pnip-root>pnip-header>div>div>div>button`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-213884776b | 10 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-7a80901bf1 | 34 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-b893975ba3 | 50 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-fa9930f744 | 68 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-213884776b: Botão 'Sair' tem atributo href='javascript:void(0)' e um <p> como filho, marcação que o HTML não admite em <button>.
- T3-7a80901bf1: Botão "Sair" tem atributo href="javascript:void(0)" (não permitido em button) e contém <p> (conteúdo de fluxo).
- T3-b893975ba3: Botão "Sair" tem atributo href="javascript:void(0)" e filho <p> (conteúdo de fluxo), inválidos em <button>
- T3-fa9930f744: O <button> "Sair" tem atributo href="javascript:void(0)" (inválido em button) e um <p> como filho (conteúdo de fluxo dentro de button).

### MA-3c224221 · 5 membros · lotes lote-01, lote-12, lote-36, lote-38, lote-48 · → adjudicação

Tela processos-f3 · completa · regra `axe:region` · estado `1280x900` · tipo div  
Sujeito: `body>pnip-root>pnip-header>div>div>div`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-01bbf21b04 | 01 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-27c85b8309 | 12 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-84075d0736 | 36 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-89b63a247a | 38 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-b1a388edfa | 48 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-01bbf21b04: Conteúdo do menu do avatar aberto fica fora de qualquer landmark (fora do banner)
- T3-27c85b8309: Conteúdo do menu do avatar fora de qualquer região (landmark); a área do avatar fica fora do banner.
- T3-84075d0736: Menu do usuário aberto fica fora de qualquer landmark
- T3-89b63a247a: O menu do usuário aberto fica fora de qualquer landmark (fora do banner e do main).
- T3-b1a388edfa: O conteúdo do menu do avatar aberto fica fora de qualquer região (landmark).

### MA-43559820 · 5 membros · lotes lote-01, lote-05, lote-37, lote-47, lote-61 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `emag-6.2` · estado `1280x900` · tipo componente <br-input>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input ; body>pnip-root>main>pnip-mpa>pnip-mpa-process`

Divergem: vinculo, vinculo.relacao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-02fdcfe536 | 01 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-0dfba9c3de | 05 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-87b2b54506 | 37 | verdadeira | citada | recomendado | aplica | sim | D-05 | host-interno | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-acdc8575d3 | 47 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-e2dfed2fc4 | 61 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-02fdcfe536: Campo de busca da listagem sem rótulo: só placeholder "Pesquise aqui ..."; sem <label>, aria-label ou aria-labelledby (nome acessível vem do
- T3-0dfba9c3de: Campo de busca só tem placeholder "Pesquise aqui ..."; o input interno (#search) não tem label, aria-label nem aria-labelledby
- T3-87b2b54506: O campo de busca tem só placeholder "Pesquise aqui ..."; sem <label>, aria-label ou aria-labelledby; o host <br-input> não recebe label
- T3-acdc8575d3: Com o filtro "Últimos 7 dias" aplicado, o campo de busca continua só com placeholder como rótulo.
- T3-e2dfed2fc4: Campo de pesquisa com placeholder "Pesquise aqui ..." e nenhum rótulo (sem label, aria-label ou aria-labelledby).

### MA-43588930 · 9 membros · lotes lote-06, lote-08, lote-27, lote-41, lote-44, lote-51, lote-66, lote-68 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-component-breadcrumb-478cffdbb111` · estado `1280x900@pagina-2` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb >>> div`

Divergem: fato, norma.violada, vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-116f7c02a9 | 06 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-1a0cc8170b | 08 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-6014facf0c | 27 | falsa | citada | obrigatorio | aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-9650a2313c | 41 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-a113a97ae9 | 44 | falsa | citada | obrigatorio | aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-bc4332ac7f | 51 | falsa | citada | obrigatorio | aplica | incerto | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-f22e7c09cd | 66 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-f3fb28dbcd | 66 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-fa61705f25 | 68 | falsa | citada | obrigatorio | aplica | incerto | nenhum | — | erro-factual | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-116f7c02a9: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-1a0cc8170b: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-6014facf0c: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-9650a2313c: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-a113a97ae9: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-bc4332ac7f: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-f22e7c09cd: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-f3fb28dbcd: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-fa61705f25: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua

### MA-4681dad5 · 9 membros · lotes lote-02, lote-03, lote-10, lote-13, lote-20, lote-21, lote-35, lote-43, lote-55 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:color-contrast` · estado `1280x900@assinatura-cancelada` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-049de9bd11 | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0806bc9fde | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-21df2065f6 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2a65d411b9 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-489cb87c32 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-49f8757206 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-7e4201fa63 | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9ce4673000 | 43 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cdee6ca44d | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |

Textos observados (conferência do agrupamento):
- T3-049de9bd11: Elements must meet minimum color contrast ratio thresholds
- T3-0806bc9fde: Elements must meet minimum color contrast ratio thresholds
- T3-21df2065f6: Elements must meet minimum color contrast ratio thresholds
- T3-2a65d411b9: Elements must meet minimum color contrast ratio thresholds
- T3-489cb87c32: Elements must meet minimum color contrast ratio thresholds
- T3-49f8757206: Elements must meet minimum color contrast ratio thresholds
- T3-7e4201fa63: Elements must meet minimum color contrast ratio thresholds
- T3-9ce4673000: Elements must meet minimum color contrast ratio thresholds
- T3-cdee6ca44d: Elements must meet minimum color contrast ratio thresholds

### MA-475bab22 · 9 membros · lotes lote-05, lote-08, lote-21, lote-26, lote-29, lote-40, lote-44, lote-52, lote-54 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:page-has-heading-one` · estado `1280x900@pagina-2` · tipo não resolvido  
Sujeito: `unresolved:iframe html`

Divergem: norma.aplicabilidade, norma.violada, vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0ef8552120 | 05 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-1a4663a8c7 | 08 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-4c56f54a6d | 21 | verdadeira | citada | boa-pratica | nao-aplica | nao | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-5ee7b59674 | 26 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-6ad0afa4e4 | 29 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-91429b2dc3 | 40 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-a28db904f7 | 44 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-c2cb536721 | 52 | verdadeira | citada | boa-pratica | nao-aplica | nao | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-c8128d8e1e | 54 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-0ef8552120: Page should contain a level-one heading
- T3-1a4663a8c7: Page should contain a level-one heading
- T3-4c56f54a6d: Page should contain a level-one heading
- T3-5ee7b59674: Page should contain a level-one heading
- T3-6ad0afa4e4: Page should contain a level-one heading
- T3-91429b2dc3: Page should contain a level-one heading
- T3-a28db904f7: Page should contain a level-one heading
- T3-c2cb536721: Page should contain a level-one heading
- T3-c8128d8e1e: Page should contain a level-one heading

### MA-4b7bed1d · 11 membros · lotes lote-05, lote-16, lote-26, lote-27, lote-35, lote-46, lote-51, lote-54, lote-62, lote-64 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-accessibility-global-9a6edd7d551e` · estado `1280x900` · tipo title  
Sujeito: `head>title`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0e8d8864fd | 05 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-388bc6c2d2 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-5f24cecfec | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-60c13763fe | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-7e3a4985f5 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-7f03d1aeda | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-abafc4f8bc | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bd24314a97 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c7c9d62772 | 54 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-e4e43fea89 | 62 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-edf0523f14 | 64 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0e8d8864fd: No detalhe do processo, o <title> continua "PNIP", igual ao da listagem; não descreve o conteúdo ("Certificado Oficial de Conformidade...").
- T3-388bc6c2d2: <title> = "PNIP" na listagem e também nas rotas de detalhe/exportação; não descreve a página "Processos"
- T3-5f24cecfec: <title> é apenas 'PNIP' (sigla do sistema), igual em todas as rotas (listagem, detalhe, exportar); não descreve a página 'Processos'.
- T3-60c13763fe: O <title> da listagem é apenas "PNIP"; não descreve a página "Processos".
- T3-7e3a4985f5: document.title = "PNIP" na tela de Processos (mesmo título genérico em todas as rotas visitadas).
- T3-7f03d1aeda: O <title> da listagem é "PNIP", sem descrever a página "Processos".
- T3-abafc4f8bc: O <title> do detalhe "Solicitação de CAOL" é "PNIP", o mesmo da listagem e do outro detalhe.
- T3-bd24314a97: O <title> do detalhe "Alteração de Certificado" é "PNIP", o mesmo da listagem.
- T3-c7c9d62772: <title> é só "PNIP", igual na listagem e no detalhe; não identifica a página "Processos".
- T3-e4e43fea89: document.title = "PNIP" (sigla genérica, igual nas outras rotas visitadas, como o detalhe de processo)
- T3-edf0523f14: No detalhe (/processos/certificacao-caol/...0011, assunto "Solicitação de CAOL -") o <title> continua "PNIP", igual ao da listagem.

### MA-4f0e59d7 · 9 membros · lotes lote-03, lote-09, lote-22, lote-27, lote-39, lote-41, lote-47, lote-51, lote-60 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:color-contrast` · estado `1280x900@filtro-removido` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-09accfb211 | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1b5ffb6571 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4e071ea2d0 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5fe9ed3659 | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8ee20b1eac | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-97bff6ebe8 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ac83284d71 | 47 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bdec418c63 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dedd669850 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-09accfb211: Elements must meet minimum color contrast ratio thresholds
- T3-1b5ffb6571: Elements must meet minimum color contrast ratio thresholds
- T3-4e071ea2d0: Elements must meet minimum color contrast ratio thresholds
- T3-5fe9ed3659: Elements must meet minimum color contrast ratio thresholds
- T3-8ee20b1eac: Elements must meet minimum color contrast ratio thresholds
- T3-97bff6ebe8: Elements must meet minimum color contrast ratio thresholds
- T3-ac83284d71: Elements must meet minimum color contrast ratio thresholds
- T3-bdec418c63: Elements must meet minimum color contrast ratio thresholds
- T3-dedd669850: Elements must meet minimum color contrast ratio thresholds

### MA-4f8f9d1c · 9 membros · lotes lote-20, lote-23, lote-24, lote-28, lote-33, lote-47, lote-57, lote-61 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:page-has-heading-one` · estado `1280x900@assinatura-cancelada` · tipo não resolvido  
Sujeito: `unresolved:iframe html`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-46557c9bd9 | 20 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-518c8b3822 | 23 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-54c38c8b79 | 24 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-66cbb1366d | 28 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-79c9c3c4aa | 33 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-ade38703ed | 47 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-aef5e71e3f | 47 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-d1ddbd2761 | 57 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-e29404b6ec | 61 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-46557c9bd9: Page should contain a level-one heading
- T3-518c8b3822: Page should contain a level-one heading
- T3-54c38c8b79: Page should contain a level-one heading
- T3-66cbb1366d: Page should contain a level-one heading
- T3-79c9c3c4aa: Page should contain a level-one heading
- T3-ade38703ed: Page should contain a level-one heading
- T3-aef5e71e3f: Page should contain a level-one heading
- T3-d1ddbd2761: Page should contain a level-one heading
- T3-e29404b6ec: Page should contain a level-one heading

### MA-4ff40ed9 · 3 membros · lotes lote-10, lote-51, lote-59 · → adjudicação

Tela processos-f3 · completa · regra `wcag:2.4.3` · estado `1280x900` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input`

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-20776debc5 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-be51d50b0c | 51 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-d998625866 | 59 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-20776debc5: No seletor "Exibir", escolher uma opção pelo teclado (ArrowDown, ArrowDown, Enter) fecha a lista e manda o foco para <body>.
- T3-be51d50b0c: Ao confirmar uma opção do seletor "Exibir" com Enter, a lista fecha e o foco vai para o body.
- T3-d998625866: Abrindo a lista "Exibir" com seta para baixo (foco vai à opção) e fechando com Esc, o foco vai para body em vez de voltar ao campo.

### MA-55e23446 · 9 membros · lotes lote-01, lote-03, lote-08, lote-09, lote-17, lote-19, lote-40, lote-42, lote-66 · → adjudicação

Tela processos-f3 · completa · regra `emag:6.2` · estado `1280x900@exibir-25` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input >>> div>input`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-01a2224278 | 01 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-07a5284767 | 03 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-173dce90b1 | 08 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-1e46fc267a | 09 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-3aaa31f738 | 17 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-41ff0ed864 | 19 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-95535b93ac | 40 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-98fb31709e | 42 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-f29473321b | 66 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-01a2224278: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-07a5284767: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-173dce90b1: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-1e46fc267a: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-3aaa31f738: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-41ff0ed864: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-95535b93ac: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-98fb31709e: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-f29473321b: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host

### MA-572a76ad · 19 membros · lotes lote-04, lote-09, lote-10, lote-14, lote-25, lote-26, lote-40, lote-43, lote-45, lote-46, lote-49, lote-56, lote-58, lote-59, lote-63, lote-65, lote-69 · → adjudicação

Tela processos-f3 · completa · regra `(sem regra)` · estado `1280x900` · tipo componente <br-header>  
Sujeito: `body>pnip-root>pnip-header>br-header`

Divergem: norma.id, norma.forca, norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0b5b13f0e0 | 04 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-1e44690122 | 09 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-217ea59427 | 10 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-310b7de1c4 | 14 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-5afe975bc6 | 25 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-5d9aeebca8 | 26 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-931c63aedc | 40 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-9d27496a8c | 43 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-a6f50494f7 | 45 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-ab29af4d69 | 46 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-b6b6625147 | 49 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-d036005b14 | 56 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-d732989457 | 58 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-d9d66ddb16 | 59 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-e8271d468c | 63 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-ea9811ff68 | 63 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-ef37f5d828 | 65 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-f00d16756b | 65 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-fb9b41d282 | 69 | verdadeira | wcag:4.1.2 | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0b5b13f0e0: O botão "Menu" do cabeçalho (#navigation, data-target="#main-navigation") não abre nada ao ser clicado: não existe #main-navigation no docum
- T3-1e44690122: Botão "Menu" (#navigation, no shadow DOM do br-header) aponta data-target="#main-navigation", que não existe; ao clicar nada abre e não há a
- T3-217ea59427: O botão "Menu" (hambúrguer) do cabeçalho tem data-target="#main-navigation", mas esse elemento não existe; ao clicar, nada abre e não há ari
- T3-310b7de1c4: O botão "Menu" (#navigation no shadow DOM, data-target="#main-navigation") não produz efeito ao ser acionado: não existe #main-navigation ne
- T3-5afe975bc6: Botão "Menu" (#navigation, data-target="#main-navigation") não tem efeito ao ser acionado: não existe #main-navigation na página e nada é ex
- T3-5d9aeebca8: Botão "Menu" (#navigation no shadow root) com data-target="#main-navigation", que não existe no documento; o clique não abre nada e não há a
- T3-931c63aedc: O botão 'Menu' (#navigation, data-target='#main-navigation') não abre nada ao ser acionado: #main-navigation não existe na página e o botão 
- T3-9d27496a8c: O botão "Menu" (hambúrguer) do cabeçalho tem data-target="#main-navigation", mas esse elemento não existe no documento: o clique não abre ne
- T3-a6f50494f7: O botão "Menu" (hambúrguer) do cabeçalho aponta para data-target="#main-navigation", que não existe; ao clicar, nada abre e não há aria-expa
- T3-ab29af4d69: Botão "Menu" (button#navigation, data-target="#main-navigation") do cabeçalho não produz efeito ao ser clicado: não existe #main-navigation 
- T3-b6b6625147: O botão "Menu" (button#navigation, shadow DOM do br-header) tem data-target="#main-navigation", mas esse elemento não existe no documento. A
- T3-d036005b14: O botão 'Menu' (#navigation, data-target='#main-navigation') não abre nada ao ser clicado: não existe #main-navigation no documento nem no s
- T3-d732989457: O botão "Menu" (#navigation, data-target="#main-navigation") não abre nada: não existe #main-navigation no documento, não há aria-expanded n
- T3-d9d66ddb16: Botão "Menu" (#navigation, data-target="#main-navigation") não tem efeito ao clicar: #main-navigation não existe no documento nem no shadow 
- T3-e8271d468c: O botão "Menu" (#navigation no shadow DOM) tem data-target="#main-navigation", um alvo inexistente; clicar não abre nada nem muda aria-expan
- T3-ea9811ff68: Botão "Menu" do cabeçalho (data-target="#main-navigation") não faz nada: #main-navigation não existe no documento, nenhum menu abre e não há
- T3-ef37f5d828: O botão 'Menu' (#navigation, data-target='#main-navigation') não abre nada ao ser clicado: #main-navigation não existe no documento e o botã
- T3-f00d16756b: Botão "Menu" (hambúrguer) tem data-target="#main-navigation", mas esse elemento não existe; ao clicar nada abre e não há aria-expanded
- T3-fb9b41d282: O botão "Menu" (#navigation no shadow DOM) tem data-target="#main-navigation", mas esse elemento não existe; clicar não abre nenhum menu e o

### MA-5a59ac83 · 9 membros · lotes lote-06, lote-07, lote-08, lote-11, lote-13, lote-17, lote-35, lote-38, lote-56 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:color-contrast` · estado `1280x900@assinatura-cancelada` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-11ab0b68b2 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-143653a94a | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-178bd00324 | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-22c7c55a25 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-29a367084c | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-397b62ba8c | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7e19ca0c7f | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8b3e2890d5 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d0091b882c | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-11ab0b68b2: Elements must meet minimum color contrast ratio thresholds
- T3-143653a94a: Elements must meet minimum color contrast ratio thresholds
- T3-178bd00324: Elements must meet minimum color contrast ratio thresholds
- T3-22c7c55a25: Elements must meet minimum color contrast ratio thresholds
- T3-29a367084c: Elements must meet minimum color contrast ratio thresholds
- T3-397b62ba8c: Elements must meet minimum color contrast ratio thresholds
- T3-7e19ca0c7f: Elements must meet minimum color contrast ratio thresholds
- T3-8b3e2890d5: Elements must meet minimum color contrast ratio thresholds
- T3-d0091b882c: Elements must meet minimum color contrast ratio thresholds

### MA-5a5c354c · 9 membros · lotes lote-02, lote-16, lote-38, lote-48, lote-50, lote-60, lote-64 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@assinatura-cancelada` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-039ebf6f24 | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-074af3413d | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3730d2969a | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8b85db2999 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8bea4d8ad7 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b109c05515 | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b9514df693 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-df06ef89b0 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ed1e654b59 | 64 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |

Textos observados (conferência do agrupamento):
- T3-039ebf6f24: Form elements must have labels
- T3-074af3413d: Form elements must have labels
- T3-3730d2969a: Form elements must have labels
- T3-8b85db2999: Form elements must have labels
- T3-8bea4d8ad7: Form elements must have labels
- T3-b109c05515: Form elements must have labels
- T3-b9514df693: Form elements must have labels
- T3-df06ef89b0: Form elements must have labels
- T3-ed1e654b59: Form elements must have labels

### MA-5dfc35f4 · 9 membros · lotes lote-03, lote-07, lote-24, lote-29, lote-31, lote-50, lote-51, lote-52, lote-66 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-foundation-global-21b1a2733f7b` · estado `1280x900@filtro-removido` · tipo span  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div>span`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0a56f8420a | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1493e50ae8 | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-55df3d0fb7 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6b5c0cc505 | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6fb72df9a5 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b7bfdc8a77 | 50 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-bec1ba5825 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bf148e89ce | 52 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f20a9df9a1 | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0a56f8420a: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-1493e50ae8: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-55df3d0fb7: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-6b5c0cc505: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-6fb72df9a5: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-b7bfdc8a77: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-bec1ba5825: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-bf148e89ce: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-f20a9df9a1: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS

### MA-64fe1d2f · 8 membros · lotes lote-12, lote-14, lote-24, lote-49, lote-54, lote-55, lote-65 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-component-breadcrumb-478cffdbb111` · estado `1280x900` · tipo componente <br-breadcrumb>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb`

Divergem: norma.violada, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-26ef136864 | 12 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | — | violacao-pagina | sim | credita F3-07 | norma |
| T3-31907b3e84 | 14 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | — | violacao-pagina | sim | credita F3-07 | norma |
| T3-54acf8a5b9 | 24 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | — | violacao-pagina | sim | credita F3-07 | norma |
| T3-b50f0f80b9 | 49 | verdadeira | citada | obrigatorio | aplica | nao | F3-07 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-b62b794122 | 49 | verdadeira | citada | obrigatorio | aplica | nao | F3-07 | direta | valida | violacao-pagina | sim | credita F3-07 | norma |
| T3-c842e51e58 | 54 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | — | violacao-pagina | sim | credita F3-07 | norma |
| T3-ccfcd1b17c | 55 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | — | violacao-pagina | sim | credita F3-07 | norma |
| T3-f031986934 | 65 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | — | violacao-pagina | sim | credita F3-07 | norma |

Textos observados (conferência do agrupamento):
- T3-26ef136864: O último item do breadcrumb ("Processos", página atual) é link (href="portal-mpa/processos"), sem aria-current.
- T3-31907b3e84: O último item do breadcrumb, "Processos", é um link (href="portal-mpa/processos", relativo, que resolve para /pnip-f3/portal-mpa/portal-mpa/
- T3-54acf8a5b9: O último item do breadcrumb ("Processos") é um link (<a href="portal-mpa/processos">); não há item da página atual como texto não interativo
- T3-b50f0f80b9: O último item do breadcrumb ('Processos', página atual) é um link (href='portal-mpa/processos') sem aria-current.
- T3-b62b794122: Último item do breadcrumb "Processos" é um link (<a href="portal-mpa/processos">) para a própria página.
- T3-c842e51e58: O último item do breadcrumb, "Processos" (página atual), é um link <a href="portal-mpa/processos">, sem aria-current; não há item de página 
- T3-ccfcd1b17c: O último item do breadcrumb ("Processos", página atual) é link (<a href="portal-mpa/processos">).
- T3-f031986934: O último item da trilha, "Processos", é um link (<a href="portal-mpa/processos">) para a própria página, em vez de texto da página atual.

### MA-67941506 · 9 membros · lotes lote-12, lote-13, lote-20, lote-24, lote-29, lote-37, lote-50, lote-54, lote-59 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:page-has-heading-one` · estado `1280x900@filtro-removido` · tipo não resolvido  
Sujeito: `unresolved:iframe html`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-2800574664 | 12 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-2a03bd817a | 13 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-48fd0ba5d0 | 20 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-551488ff7d | 24 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-6a40c2093c | 29 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-865ec76c76 | 37 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-bade6fb576 | 50 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-c7de573598 | 54 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-dc42e1c3d2 | 59 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-2800574664: Page should contain a level-one heading
- T3-2a03bd817a: Page should contain a level-one heading
- T3-48fd0ba5d0: Page should contain a level-one heading
- T3-551488ff7d: Page should contain a level-one heading
- T3-6a40c2093c: Page should contain a level-one heading
- T3-865ec76c76: Page should contain a level-one heading
- T3-bade6fb576: Page should contain a level-one heading
- T3-c7de573598: Page should contain a level-one heading
- T3-dc42e1c3d2: Page should contain a level-one heading

### MA-69ceb1f2 · 9 membros · lotes lote-04, lote-08, lote-14, lote-30, lote-36, lote-37, lote-49, lote-57, lote-60 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@assinatura-cancelada` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0ca5262e74 | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-1a56cddb0d | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2f3a89e2d6 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6dc5f660a3 | 30 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-849b8bfeab | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-85c7e7eaec | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b3ee138e04 | 49 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d49302205f | 57 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dd8de55b65 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0ca5262e74: Form elements must have labels
- T3-1a56cddb0d: Form elements must have labels
- T3-2f3a89e2d6: Form elements must have labels
- T3-6dc5f660a3: Form elements must have labels
- T3-849b8bfeab: Form elements must have labels
- T3-85c7e7eaec: Form elements must have labels
- T3-b3ee138e04: Form elements must have labels
- T3-d49302205f: Form elements must have labels
- T3-dd8de55b65: Form elements must have labels

### MA-6a5e95c6 · 9 membros · lotes lote-32, lote-34, lote-36, lote-39, lote-45, lote-46, lote-55, lote-63, lote-66 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@assinatura-cancelada` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-76598d3281 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7e0d7d04c0 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-81439eb9c3 | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-8c7efb45c1 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a50aa31625 | 45 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a9ea06337d | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cb5605417f | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e865db5866 | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f2531e9c01 | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-76598d3281: Form elements must have labels
- T3-7e0d7d04c0: Form elements must have labels
- T3-81439eb9c3: Form elements must have labels
- T3-8c7efb45c1: Form elements must have labels
- T3-a50aa31625: Form elements must have labels
- T3-a9ea06337d: Form elements must have labels
- T3-cb5605417f: Form elements must have labels
- T3-e865db5866: Form elements must have labels
- T3-f2531e9c01: Form elements must have labels

### MA-6e081f86 · 9 membros · lotes lote-12, lote-13, lote-15, lote-26, lote-37, lote-39, lote-56, lote-58, lote-69 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@filtro-removido` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-297e396832 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2ab76165d1 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-31d18babbb | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5dfe7ebe21 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-86d3e537ec | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-91263d3a96 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d110f582ff | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d55247504d | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-fdc31ec2b8 | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-297e396832: Form elements must have labels
- T3-2ab76165d1: Form elements must have labels
- T3-31d18babbb: Form elements must have labels
- T3-5dfe7ebe21: Form elements must have labels
- T3-86d3e537ec: Form elements must have labels
- T3-91263d3a96: Form elements must have labels
- T3-d110f582ff: Form elements must have labels
- T3-d55247504d: Form elements must have labels
- T3-fdc31ec2b8: Form elements must have labels

### MA-70b29071 · 9 membros · lotes lote-06, lote-16, lote-25, lote-30, lote-41, lote-51, lote-58, lote-62 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@filtro-removido` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1337f46455 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-360b3859dd | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-57ee8703cf | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5a0b5eec76 | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6ca70920be | 30 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-982b2f399a | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-bb10a44976 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d7f2597cea | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e644085338 | 62 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1337f46455: Form elements must have labels
- T3-360b3859dd: Form elements must have labels
- T3-57ee8703cf: Form elements must have labels
- T3-5a0b5eec76: Form elements must have labels
- T3-6ca70920be: Form elements must have labels
- T3-982b2f399a: Form elements must have labels
- T3-bb10a44976: Form elements must have labels
- T3-d7f2597cea: Form elements must have labels
- T3-e644085338: Form elements must have labels

### MA-715542fd · 2 membros · lotes lote-11, lote-69 · → adjudicação

Tela processos-f3 · completa · regra `wcag:4.1.2` · estado `1280x900@lista-exibir` · tipo não resolvido  
Sujeito: `unresolved:.swal2-popup[role='dialog']`

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-2628449773 | 11 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-fee83c2ed9 | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-2628449773: O diálogo 'Tem certeza que deseja desassociar esse processo do analista responsável?' tem aria-labelledby='swal2-title', mas o h2#swal2-titl
- T3-fee83c2ed9: O diálogo de assinatura individual (PDF + 'Solicitar Revisão' / 'Assinar com gov.br') tem aria-labelledby='swal2-title', mas o título está v

### MA-7208ea52 · 23 membros · lotes lote-02, lote-03, lote-04, lote-10, lote-11, lote-14, lote-16, lote-21, lote-23, lote-24, lote-26, lote-38, lote-39, lote-45, lote-51, lote-52, lote-53, lote-58, lote-65, lote-68, lote-69 · → adjudicação

Tela processos-f3 · completa · regra `wcag:1.3.1` · estado `1280x900` · tipo a  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(2)>nav>ul>li:nth-of-type(1)>li>a ; body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-o`

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0608c82a11 | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-09bff9d081 | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0c7cc51182 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-200df6095c | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-247cbf4381 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-25ba6c5b66 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-317973f655 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-383a40c701 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4ad7501b96 | 21 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-537e06d7c3 | 23 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-57429decf9 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5e885b804d | 26 | verdadeira | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-8bb67ef63f | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-900bb201b2 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a8d8ea6c14 | 45 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bc6a68794d | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bcbbb59d54 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c24a82f042 | 52 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c432793a1a | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d5d5de6ca6 | 58 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f0d07e98e3 | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fb3e260341 | 68 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ffd1bde6ed | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0608c82a11: A página atual é indicada só pela classe visual "active"; o link não tem aria-current e tem href="javascript:void(0)"
- T3-09bff9d081: A página atual na paginação ("1", classe active) não tem aria-current; o link usa href="javascript:void(0)".
- T3-0c7cc51182: A página atual só é indicada pela classe "active" (destaque visual); o link não tem aria-current="page".
- T3-200df6095c: A página atual só é indicada pela classe "active". O link não tem aria-current="page"; no s13 a página 2 ativa também não tem.
- T3-247cbf4381: Página atual da paginação indicada só pela classe "active"; sem aria-current="page"
- T3-25ba6c5b66: Página atual indicada só pela classe 'active'; sem aria-current; link com href='javascript:void(0)'
- T3-317973f655: A página atual é indicada só pela classe "active" (estilo visual); o link não tem aria-current="page" e usa href="javascript:void(0)".
- T3-383a40c701: A página atual só é indicada pela classe "active"; o link "1" (href="javascript:void(0)") não tem aria-current="page" nem rótulo do tipo "Pá
- T3-4ad7501b96: A página atual só é indicada pela classe "active"; o link não tem aria-current="page" (e todos os números usam href="javascript:void(0)").
- T3-537e06d7c3: A página atual é indicada só pela classe 'active' (círculo azul). O link não tem aria-current='page' e usa href='javascript:void(0)'.
- T3-57429decf9: Página atual indicada só pela classe active (círculo preenchido); o link não tem aria-current
- T3-5e885b804d: Página atual da paginação indicada só pela classe "active"; sem aria-current (medido também na página 2).
- T3-8bb67ef63f: A página atual só é indicada pela classe visual "active"; o link não tem aria-current="page" e tem href="javascript:void(0)".
- T3-900bb201b2: A página atual só é indicada pela classe 'active'. O link tem href='javascript:void(0)' e não tem aria-current.
- T3-a8d8ea6c14: Página atual da paginação indicada só pela classe "active" (estilo visual); link sem aria-current
- T3-bc6a68794d: A página atual ("1") só é indicada pela classe active (estilo); sem aria-current; href="javascript:void(0)"
- T3-bcbbb59d54: A página atual é indicada só pela classe "active" e pelo fundo; o link não tem aria-current="page".
- T3-c24a82f042: A página atual só é indicada pela classe 'active'; o link não tem aria-current (medido nas páginas 1 e 2).
- T3-c432793a1a: A página atual é indicada só pela classe "active" (fundo azul); sem aria-current.
- T3-d5d5de6ca6: Página atual indicada só pela classe visual "active"; link "1" sem aria-current e com href="javascript:void(0)"
- T3-f0d07e98e3: O link da página atual ("1", href="javascript:void(0)") só é marcado pela classe active; não tem aria-current="page".
- T3-fb3e260341: A página atual na paginação só é indicada pela classe 'active' (destaque visual); o link não tem aria-current.
- T3-ffd1bde6ed: A página atual só é indicada pela classe "active" (estilo visual); o link não tem aria-current="page".

### MA-75ab064f · 9 membros · lotes lote-05, lote-15, lote-19, lote-26, lote-34, lote-38, lote-41, lote-47 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `emag:1.3` · estado `1280x900` · tipo raiz  
Sujeito: `(raiz)`

Divergem: vinculo, sugestao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1078a1bc64 | 05 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-34a9a27f0a | 15 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-4108c85341 | 19 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-5bf8f82237 | 26 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-5cb478256d | 26 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-7cc7ba8dbe | 34 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-88fddac814 | 38 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-96c934cb7f | 41 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-aee198f70a | 47 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1078a1bc64: Detalhe 0010 sem h1 (título é h2)
- T3-34a9a27f0a: Página de detalhe de Vinculação de embarcação sem h1
- T3-4108c85341: Detalhe 0011 sem h1
- T3-5bf8f82237: A tela não tem h1; o título "Processos" é h2 e é o único cabeçalho
- T3-5cb478256d: Página de detalhe CAOL sem h1
- T3-7cc7ba8dbe: Detalhe 0033 sem h1
- T3-88fddac814: Detalhe 0014 sem h1
- T3-96c934cb7f: A página de listagem não tem h1; o título "Processos" é h2
- T3-aee198f70a: Página de detalhe de Alteração de Certificado sem h1 (título em h2)

### MA-78f59741 · 9 membros · lotes lote-09, lote-16, lote-20, lote-34, lote-49, lote-50, lote-63, lote-66, lote-68 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-foundation-global-21b1a2733f7b` · estado `1280x900@assinatura-cancelada` · tipo span  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div>span`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1ef2fd3a97 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-357af96c60 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-468666df33 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7d2baddb34 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b67af22013 | 49 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b8be720f5a | 50 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-e84dab7d37 | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f22878f9ce | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f877364fa9 | 68 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1ef2fd3a97: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-357af96c60: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-468666df33: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-7d2baddb34: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-b67af22013: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-b8be720f5a: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-e84dab7d37: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-f22878f9ce: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-f877364fa9: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS

### MA-7a896fe6 · 10 membros · lotes lote-05, lote-06, lote-18, lote-27, lote-39, lote-43, lote-50, lote-56, lote-62, lote-68 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-accessibility-global-29bd6bf04fc5` · estado `1280x900` · tipo table  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table ; body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-o`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0eeefcce95 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-131ce154f3 | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-3f229c749a | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6379618684 | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-8fc016b3a3 | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-9e63b16476 | 43 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-b98f23f12d | 50 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d0adf71e4b | 56 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-e5437b79a6 | 62 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-f9aaaa5532 | 68 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |

Textos observados (conferência do agrupamento):
- T3-0eeefcce95: Tabela de processos sem <caption>, aria-label, aria-labelledby ou title; o título "Processos" (h2) não está associado
- T3-131ce154f3: Tabela de processos sem <caption>, aria-label, aria-labelledby ou title.
- T3-3f229c749a: Detalhe CAOL: as 2 tabelas (histórico; espécies) não têm caption, aria-label nem aria-labelledby.
- T3-6379618684: A tabela de processos não tem caption, aria-label, aria-labelledby nem title (o h2 "Processos" não está associado).
- T3-8fc016b3a3: Tabela de processos sem caption, aria-label, aria-labelledby ou title.
- T3-9e63b16476: A tabela de processos não tem caption, aria-label nem aria-labelledby; o h2 "Processos" não está associado
- T3-b98f23f12d: Detalhe Deferido: a tabela não tem caption, aria-label nem aria-labelledby.
- T3-d0adf71e4b: A tabela de processos não tem caption, aria-label, aria-labelledby nem title.
- T3-e5437b79a6: A tabela de processos não tem caption, aria-label nem aria-labelledby; o h2 "Processos" não está associado a ela.
- T3-f9aaaa5532: A tabela de processos não tem caption, aria-label, aria-labelledby nem title, e o h2 "Processos" não está associado a ela.

### MA-816620f5 · 9 membros · lotes lote-07, lote-08, lote-09, lote-28, lote-32, lote-35, lote-36, lote-53 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `emag:6.2` · estado `1280x900@filtro-removido` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input >>> div>input`

Divergem: vinculo, sugestao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-15b6d05e3e | 07 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-1891d1c426 | 08 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-1d288ec4fc | 09 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-65f15ffd2f | 28 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-75c037d430 | 32 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-809395896d | 35 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-843a92d4f8 | 36 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-84680ba216 | 36 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-c6faaf44ae | 53 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-15b6d05e3e: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-1891d1c426: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-1d288ec4fc: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-65f15ffd2f: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-75c037d430: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-809395896d: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-843a92d4f8: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-84680ba216: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-c6faaf44ae: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host

### MA-8853d199 · 9 membros · lotes lote-11, lote-21, lote-29, lote-33, lote-37, lote-47, lote-55, lote-57, lote-66 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-component-breadcrumb-478cffdbb111` · estado `1280x900@assinatura-cancelada` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb >>> div`

Divergem: fato, norma.aplicabilidade, norma.violada, vinculo, vinculo.relacao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-2432ab355b | 11 | falsa | citada | obrigatorio | aplica | incerto | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-4a5b46cc36 | 21 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-69a38a4867 | 29 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-7725f804e0 | 33 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-87592dce87 | 37 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | host-interno | violacao-pagina | sim | credita F3-07 | norma |
| T3-af1fa99e1f | 47 | falsa | citada | obrigatorio | nao-aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-ce097cf6d8 | 55 | falsa | citada | obrigatorio | aplica | sim | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-d4406bf612 | 57 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | host-interno | violacao-pagina | sim | credita F3-07 | norma |
| T3-f3b39f6a32 | 66 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |

Textos observados (conferência do agrupamento):
- T3-2432ab355b: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-4a5b46cc36: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-69a38a4867: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-7725f804e0: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-87592dce87: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-af1fa99e1f: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-ce097cf6d8: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-d4406bf612: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-f3b39f6a32: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua

### MA-9930f505 · 9 membros · lotes lote-27, lote-42, lote-45, lote-50, lote-57, lote-58, lote-69 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:color-contrast` · estado `1280x900@filtro-removido` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(9)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-63634d2e3b | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9bbb9072b9 | 42 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a658d23fb7 | 45 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a752f59ade | 45 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a8cb4dea3c | 45 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ba30f34021 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d2f54f8c2b | 57 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d94b6c8eb1 | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-fc3ea4912f | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-63634d2e3b: Elements must meet minimum color contrast ratio thresholds
- T3-9bbb9072b9: Elements must meet minimum color contrast ratio thresholds
- T3-a658d23fb7: Elements must meet minimum color contrast ratio thresholds
- T3-a752f59ade: Elements must meet minimum color contrast ratio thresholds
- T3-a8cb4dea3c: Elements must meet minimum color contrast ratio thresholds
- T3-ba30f34021: Elements must meet minimum color contrast ratio thresholds
- T3-d2f54f8c2b: Elements must meet minimum color contrast ratio thresholds
- T3-d94b6c8eb1: Elements must meet minimum color contrast ratio thresholds
- T3-fc3ea4912f: Elements must meet minimum color contrast ratio thresholds

### MA-9ef70798 · 9 membros · lotes lote-05, lote-21, lote-22, lote-25, lote-51, lote-52, lote-54, lote-60, lote-66 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:frame-title` · estado `1280x900@filtro-removido` · tipo iframe  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0e5c0d6ed7 | 05 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4c9277635b | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-4d22263e1f | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-581f0e5396 | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bdd34cc9a9 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bf51d0e49f | 52 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ca4a1cc3ca | 54 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-df168ba5f5 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f4147534c0 | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0e5c0d6ed7: Frames must have an accessible name
- T3-4c9277635b: Frames must have an accessible name
- T3-4d22263e1f: Frames must have an accessible name
- T3-581f0e5396: Frames must have an accessible name
- T3-bdd34cc9a9: Frames must have an accessible name
- T3-bf51d0e49f: Frames must have an accessible name
- T3-ca4a1cc3ca: Frames must have an accessible name
- T3-df168ba5f5: Frames must have an accessible name
- T3-f4147534c0: Frames must have an accessible name

### MA-a087971f · 7 membros · lotes lote-04, lote-18, lote-25, lote-28, lote-42, lote-56, lote-64 · → adjudicação

Tela processos-f3 · completa · regra `axe:aria-dialog-name` · estado `1280x900@lista-exibir` · tipo não resolvido  
Sujeito: `unresolved:.swal2-popup`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0c97d9b346 | 04 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-3f6dcec3b5 | 18 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-585a6265e0 | 25 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-640def98e5 | 28 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9abdb23ce4 | 42 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d013a6f361 | 56 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-ebf2a8e2a5 | 64 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0c97d9b346: Diálogo de assinatura (PDF + "Solicitar Revisão"/"Assinar com gov.br") com aria-labelledby para #swal2-title vazio e oculto; sem nome acessí
- T3-3f6dcec3b5: Diálogo de confirmação 'Desassociar' (role=dialog) com #swal2-title vazio e oculto: sem nome acessível
- T3-585a6265e0: Diálogo de 'Assinar' (role=dialog) aponta aria-labelledby para #swal2-title vazio e oculto: sem nome acessível
- T3-640def98e5: Diálogo de confirmação de "Desassociar" (role=dialog) sem nome: aria-labelledby aponta para #swal2-title vazio e oculto.
- T3-9abdb23ce4: Diálogo de confirmação "Tem certeza que deseja desassociar...?" com role=dialog e aria-labelledby apontando para #swal2-title vazio e oculto
- T3-d013a6f361: Diálogo de confirmação 'Tem certeza que deseja desassociar…' tem aria-labelledby apontando para h2#swal2-title vazio e oculto; sem nome aces
- T3-ebf2a8e2a5: Diálogo de "Assinar" (pré-visualização do PDF, botões "Solicitar Revisão"/"Assinar com gov.br") sem nome: título vazio e oculto.

### MA-a409f4d0 · 9 membros · lotes lote-15, lote-21, lote-23, lote-28, lote-37, lote-44, lote-66 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:color-contrast` · estado `1280x900@assinatura-cancelada` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-33da6e7dba | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-355ce3f3f6 | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4c4f6f4c58 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-54427266d4 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-6455886057 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-86d348eb92 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a0be2c67d4 | 44 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a243a939c3 | 44 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-f320d32b35 | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-33da6e7dba: Elements must meet minimum color contrast ratio thresholds
- T3-355ce3f3f6: Elements must meet minimum color contrast ratio thresholds
- T3-4c4f6f4c58: Elements must meet minimum color contrast ratio thresholds
- T3-54427266d4: Elements must meet minimum color contrast ratio thresholds
- T3-6455886057: Elements must meet minimum color contrast ratio thresholds
- T3-86d348eb92: Elements must meet minimum color contrast ratio thresholds
- T3-a0be2c67d4: Elements must meet minimum color contrast ratio thresholds
- T3-a243a939c3: Elements must meet minimum color contrast ratio thresholds
- T3-f320d32b35: Elements must meet minimum color contrast ratio thresholds

### MA-a8444a8c · 3 membros · lotes lote-11, lote-16, lote-29 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-accessibility-global-88d6a1a5da75` · estado `1280x900` · tipo raiz  
Sujeito: `(raiz)`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-23fe593d00 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-38fb5b6f03 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-12 | ausencia-global | violacao-pagina | sim | credita D-12 | norma |
| T3-6977826c95 | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-23fe593d00: O detalhe "Alteração de Certificado" não tem h1: o título principal é h2.
- T3-38fb5b6f03: A listagem não tem h1: o título "Processos" é h2.
- T3-6977826c95: O detalhe "Solicitação de CAOL" não tem h1: o título principal é h2.

### MA-ab79cba6 · 9 membros · lotes lote-11, lote-18, lote-21, lote-48, lote-53, lote-56, lote-62, lote-66, lote-68 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@assinatura-cancelada` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>thead>tr>th:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-2516475f16 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3f79c4bac3 | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4b6e352d0b | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-afa7d9b90f | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c5fed53588 | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cefb27f806 | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e4f4095ace | 62 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f28d10ac9a | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fad63fd55a | 68 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-2516475f16: Form elements must have labels
- T3-3f79c4bac3: Form elements must have labels
- T3-4b6e352d0b: Form elements must have labels
- T3-afa7d9b90f: Form elements must have labels
- T3-c5fed53588: Form elements must have labels
- T3-cefb27f806: Form elements must have labels
- T3-e4f4095ace: Form elements must have labels
- T3-f28d10ac9a: Form elements must have labels
- T3-fad63fd55a: Form elements must have labels

### MA-af3fe9ed · 9 membros · lotes lote-10, lote-16, lote-20, lote-23, lote-24, lote-30, lote-40, lote-61, lote-69 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:frame-title` · estado `1280x900@assinatura-cancelada` · tipo iframe  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-21e9db1ec4 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3583d89363 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-498755e915 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-537ccbab71 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-56e769e421 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6e548df44d | 30 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-95d7ddae26 | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e2a72752b5 | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ff93472d04 | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-21e9db1ec4: Frames must have an accessible name
- T3-3583d89363: Frames must have an accessible name
- T3-498755e915: Frames must have an accessible name
- T3-537ccbab71: Frames must have an accessible name
- T3-56e769e421: Frames must have an accessible name
- T3-6e548df44d: Frames must have an accessible name
- T3-95d7ddae26: Frames must have an accessible name
- T3-e2a72752b5: Frames must have an accessible name
- T3-ff93472d04: Frames must have an accessible name

### MA-b99d81c4 · 9 membros · lotes lote-10, lote-22, lote-23, lote-32, lote-48, lote-53, lote-55, lote-57, lote-62 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:color-contrast` · estado `1280x900@assinatura-cancelada` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(7)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-2038248657 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4dfb68c2c2 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-51944efe70 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-73845e6242 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b296052b3b | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c6b81ae4c8 | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ce0a2acf4c | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d3b81b820d | 57 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e57117f5bc | 62 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-2038248657: Elements must meet minimum color contrast ratio thresholds
- T3-4dfb68c2c2: Elements must meet minimum color contrast ratio thresholds
- T3-51944efe70: Elements must meet minimum color contrast ratio thresholds
- T3-73845e6242: Elements must meet minimum color contrast ratio thresholds
- T3-b296052b3b: Elements must meet minimum color contrast ratio thresholds
- T3-c6b81ae4c8: Elements must meet minimum color contrast ratio thresholds
- T3-ce0a2acf4c: Elements must meet minimum color contrast ratio thresholds
- T3-d3b81b820d: Elements must meet minimum color contrast ratio thresholds
- T3-e57117f5bc: Elements must meet minimum color contrast ratio thresholds

### MA-b9f8d0f5 · 9 membros · lotes lote-04, lote-13, lote-17, lote-28, lote-29, lote-31, lote-39, lote-43 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@filtro-removido` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0c58439962 | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-2bbe759297 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-3c098d77d9 | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3c0a7d6b0f | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-642b5fee47 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6a934fa25c | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6fd06be7c2 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-90acf2d604 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9e60afa7f8 | 43 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0c58439962: Form elements must have labels
- T3-2bbe759297: Form elements must have labels
- T3-3c098d77d9: Form elements must have labels
- T3-3c0a7d6b0f: Form elements must have labels
- T3-642b5fee47: Form elements must have labels
- T3-6a934fa25c: Form elements must have labels
- T3-6fd06be7c2: Form elements must have labels
- T3-90acf2d604: Form elements must have labels
- T3-9e60afa7f8: Form elements must have labels

### MA-bd370e95 · 10 membros · lotes lote-03, lote-11, lote-12, lote-31, lote-35, lote-38, lote-58, lote-65, lote-67, lote-68 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `wcag:3.3.2` · estado `1280x900` · tipo componente <br-input>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input ; body>pnip-root>main>pnip-mpa>pnip-mpa-process`

Divergem: norma.violada, vinculo.relacao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0834683c92 | 03 | verdadeira | citada | obrigatorio | aplica | incerto | D-05 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-232f09f77a | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-2898ab4b7c | 12 | verdadeira | citada | obrigatorio | aplica | nao | D-05 | direta | valida | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-6ff29debe7 | 31 | verdadeira | citada | obrigatorio | aplica | incerto | D-05 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-80986c0b20 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | host-interno | — | violacao-pagina | sim | credita D-05 | norma |
| T3-8b0d3a3268 | 38 | verdadeira | citada | obrigatorio | aplica | incerto | D-05 | host-interno | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-d6468df79d | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-f1ca37d03a | 65 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-f5e15655e0 | 67 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-fa05f8bcd2 | 68 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |

Textos observados (conferência do agrupamento):
- T3-0834683c92: Campo de busca sem rótulo visível; identificado só pelo placeholder "Pesquise aqui ...", que some ao digitar.
- T3-232f09f77a: O campo de busca (input#search, shadow DOM do br-input) não tem <label> nem aria-label; a única indicação é o placeholder "Pesquise aqui ...
- T3-2898ab4b7c: O input interno do campo de busca (name="search") não tem label, aria-label nem aria-labelledby. O único rótulo é o placeholder "Pesquise aq
- T3-6ff29debe7: O campo de busca (input#search no shadow DOM de br-input) não tem label nem aria-label; a única identificação é o placeholder "Pesquise aqui
- T3-80986c0b20: Campo de busca (input#search no shadow DOM) não tem label visível nem aria-label; o único rótulo é o placeholder "Pesquise aqui ...", que de
- T3-8b0d3a3268: O campo de pesquisa não tem rótulo visível nem label associado; a única identificação é o placeholder "Pesquise aqui ...", que some ao digit
- T3-d6468df79d: O campo de pesquisa não tem label associado nem aria-label; o único nome é o placeholder "Pesquise aqui ...", que desaparece ao digitar.
- T3-f1ca37d03a: O campo de busca (input#search no shadow DOM) não tem label nem aria-label; a única identificação é o placeholder "Pesquise aqui ...", que s
- T3-f5e15655e0: O campo de busca (input#search no shadow de br-input) não tem <label> nem aria-label; o único rótulo é o placeholder 'Pesquise aqui ...', qu
- T3-fa05f8bcd2: Campo de busca (input#search no shadow DOM) sem label/aria-label; o único nome vem do placeholder 'Pesquise aqui ...', que some ao digitar.

### MA-bda9a810 · 9 membros · lotes lote-01, lote-09, lote-12, lote-20, lote-22, lote-23, lote-55, lote-65 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:color-contrast` · estado `1280x900@filtro-removido` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-006869226a | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1cc2ae6e3a | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2729f57105 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-46a0c372ff | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4f5550ad61 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-53cc15febd | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-cb42c1bc2d | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-f0fd314c82 | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f194be78e9 | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-006869226a: Elements must meet minimum color contrast ratio thresholds
- T3-1cc2ae6e3a: Elements must meet minimum color contrast ratio thresholds
- T3-2729f57105: Elements must meet minimum color contrast ratio thresholds
- T3-46a0c372ff: Elements must meet minimum color contrast ratio thresholds
- T3-4f5550ad61: Elements must meet minimum color contrast ratio thresholds
- T3-53cc15febd: Elements must meet minimum color contrast ratio thresholds
- T3-cb42c1bc2d: Elements must meet minimum color contrast ratio thresholds
- T3-f0fd314c82: Elements must meet minimum color contrast ratio thresholds
- T3-f194be78e9: Elements must meet minimum color contrast ratio thresholds

### MA-c322f656 · 9 membros · lotes lote-03, lote-22, lote-24, lote-26, lote-32, lote-50, lote-57, lote-59 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:color-contrast` · estado `1280x900@assinatura-cancelada` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-09e8651794 | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4dbc0b2543 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4ddc304f99 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-545f7dc7f0 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5dbbeef996 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-72d10d2fef | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b84cc05f09 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d3b0d58fc5 | 57 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d9d2e26d29 | 59 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-09e8651794: Elements must meet minimum color contrast ratio thresholds
- T3-4dbc0b2543: Elements must meet minimum color contrast ratio thresholds
- T3-4ddc304f99: Elements must meet minimum color contrast ratio thresholds
- T3-545f7dc7f0: Elements must meet minimum color contrast ratio thresholds
- T3-5dbbeef996: Elements must meet minimum color contrast ratio thresholds
- T3-72d10d2fef: Elements must meet minimum color contrast ratio thresholds
- T3-b84cc05f09: Elements must meet minimum color contrast ratio thresholds
- T3-d3b0d58fc5: Elements must meet minimum color contrast ratio thresholds
- T3-d9d2e26d29: Elements must meet minimum color contrast ratio thresholds

### MA-c4899995 · 9 membros · lotes lote-09, lote-10, lote-12, lote-13, lote-17, lote-24, lote-39, lote-46, lote-58 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-component-breadcrumb-478cffdbb111` · estado `1280x900@exibir-25` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb >>> div`

Divergem: fato, norma.aplicabilidade, norma.violada, vinculo, vinculo.relacao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1d8a72b89b | 09 | falsa | citada | obrigatorio | aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-21d5c7336e | 10 | falsa | citada | obrigatorio | aplica | incerto | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-28874b05e9 | 12 | falsa | citada | obrigatorio | aplica | sim | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-2c5fd343ca | 13 | falsa | citada | obrigatorio | nao-aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-3914381aa1 | 17 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-57151c2e9b | 24 | falsa | citada | obrigatorio | aplica | sim | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-9055c47230 | 39 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | host-interno | violacao-pagina | sim | credita F3-07 | norma |
| T3-abcff01ac0 | 46 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-d8d14805d8 | 58 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |

Textos observados (conferência do agrupamento):
- T3-1d8a72b89b: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-21d5c7336e: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-28874b05e9: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-2c5fd343ca: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-3914381aa1: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-57151c2e9b: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-9055c47230: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-abcff01ac0: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-d8d14805d8: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua

### MA-c5e9f895 · 21 membros · lotes lote-01, lote-03, lote-04, lote-05, lote-11, lote-12, lote-14, lote-17, lote-18, lote-28, lote-31, lote-33, lote-35, lote-42, lote-43, lote-44, lote-45, lote-52, lote-55, lote-57 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `wcag:1.4.3` · estado `1280x900` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div ; `

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0282e89283 | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-09de866806 | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-0c44b8ae60 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0db2609401 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-0e324a8d08 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-2571b330c9 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-27fda93232 | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-2cfb07063a | 14 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3c114f6ade | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3ed735c757 | 18 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-66357ed2e9 | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-704f8c5679 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-77d048ae62 | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-7eb753ba40 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-993e56a27c | 42 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9e46ce0911 | 43 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a31b884514 | 44 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a8c58990b0 | 45 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-c1da83a1b9 | 52 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-cd4140f4a4 | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d44f3bdcf5 | 57 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |

Textos observados (conferência do agrupamento):
- T3-0282e89283: Detalhe CAOL: selo de status #ffffff sobre #888888, 14px: 3,54:1
- T3-09de866806: Texto branco sobre cinza rgb(136,136,136) em 14px, peso 500 ("Aguardando plano de ação", "Aguardando SFPA"): contraste medido de 3,54:1.
- T3-0c44b8ae60: Detalhe 0033: selo de status #ffffff sobre #888888, 14px: 3,54:1
- T3-0db2609401: Selos "Aguardando SFPA" e "Aguardando plano de ação": texto branco sobre rgb(136,136,136), 14px, contraste de 3,54:1.
- T3-0e324a8d08: Selos "Aguardando plano de ação" e "Aguardando SFPA": texto branco sobre rgb(136,136,136), 14px, contraste 3,54:1.
- T3-2571b330c9: Selos "Aguardando plano de ação", "Aguardando SFPA" (e "Aguardando análise" na aba Aguardando análise): #ffffff sobre #888888, 14px = 3,54:1
- T3-27fda93232: Tags "Aguardando plano de ação"/"Aguardando SFPA": #ffffff sobre #888888, 14px normal: contraste 3,54:1
- T3-2cfb07063a: Selos 'Aguardando plano de ação' e 'Aguardando SFPA': texto rgb(255,255,255) sobre rgb(136,136,136), 14px peso 500, contraste 3,54:1.
- T3-3c114f6ade: Status 'Aguardando plano de ação' e 'Aguardando SFPA' (e 'Aguardando análise' na aba correspondente): texto branco sobre rgb(136,136,136), 1
- T3-3ed735c757: Selos "Aguardando plano de ação" e "Aguardando SFPA": #ffffff sobre #888888, 14px normal: 3.54:1
- T3-66357ed2e9: Texto branco sobre rgb(136,136,136), 14px, nos status "Aguardando plano de ação" e "Aguardando SFPA": contraste 3,54:1.
- T3-704f8c5679: Selos "Aguardando plano de ação" e "Aguardando SFPA": texto branco de 14px sobre rgb(136,136,136), contraste 3,54:1.
- T3-77d048ae62: Etiquetas cinza ("Aguardando plano de ação", "Aguardando SFPA"): #ffffff sobre #888888, 14px: contraste 3,54:1.
- T3-7eb753ba40: Status "Aguardando plano de ação"/"Aguardando SFPA": #ffffff sobre #888888, 14px normal, contraste 3,54:1.
- T3-993e56a27c: Status "Aguardando plano de ação" e "Aguardando SFPA": texto #ffffff de 14px sobre #888888 = 3.54:1
- T3-9e46ce0911: Selos "Aguardando plano de ação" e "Aguardando SFPA": #ffffff sobre #888888, 14px = 3,54:1.
- T3-a31b884514: Selos "Aguardando plano de ação" e "Aguardando SFPA": #ffffff sobre #888888, 14px normal: 3,54:1
- T3-a8c58990b0: Tags de status cinza ("Aguardando plano de ação", "Aguardando SFPA"): #ffffff sobre #888888, 14px normal, contraste de 3,54:1.
- T3-c1da83a1b9: Etiquetas "Aguardando plano de ação" e "Aguardando SFPA": texto #ffffff sobre #888888, 14px, contraste 3,54:1.
- T3-cd4140f4a4: Os selos "Aguardando plano de ação" e "Aguardando SFPA" têm texto branco sobre rgb(136,136,136), 14px peso 500: contraste 3,54:1.
- T3-d44f3bdcf5: Badges "Aguardando plano de ação" e "Aguardando SFPA": texto #ffffff sobre #888888, 14px, contraste 3,54:1

### MA-c6b86909 · 2 membros · lotes lote-54, lote-65 · → adjudicação

Tela processos-f3 · completa · regra `emag:1.3` · estado `1280x900@lista-exibir` · tipo não resolvido  
Sujeito: `unresolved:h4:nth-child(3)`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-c9b573980e | 54 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-efb9524ef8 | 65 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-c9b573980e: Detalhe 0010: após o h2 "Alteração de Certificado" as seções usam h4 ("1. Dados da embarcação"), pulando h3
- T3-efb9524ef8: Detalhe de Alteração de Certificado: após o h2 "Alteração de Certificado", as seções usam h4 (salto de nível h2→h4)

### MA-c7adf451 · 9 membros · lotes lote-11, lote-13, lote-25, lote-33, lote-34, lote-35, lote-43, lote-58, lote-62 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `emag:6.2` · estado `1280x900@assinatura-cancelada` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input >>> div>input`

Divergem: vinculo, sugestao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-23e4ab49cb | 11 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-2a45dfb123 | 13 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-580be72a75 | 25 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-783015d393 | 33 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-7da8cf9350 | 34 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-80008d339a | 35 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-a0442defc7 | 43 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-d5c242099a | 58 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-e742c7727b | 62 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-23e4ab49cb: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-2a45dfb123: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-580be72a75: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-783015d393: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-7da8cf9350: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-80008d339a: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-a0442defc7: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-d5c242099a: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-e742c7727b: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host

### MA-c8d88758 · 9 membros · lotes lote-02, lote-23, lote-32, lote-36, lote-41, lote-51, lote-53, lote-54 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:frame-title` · estado `1280x900@pagina-2` · tipo iframe  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>iframe`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-058f5523db | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-52342d63b1 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-73a14256ef | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-81760a2132 | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-97df20dd40 | 41 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bba1c2f6ce | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c301e50dde | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c31ab983f8 | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c7a3600109 | 54 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-058f5523db: Frames must have an accessible name
- T3-52342d63b1: Frames must have an accessible name
- T3-73a14256ef: Frames must have an accessible name
- T3-81760a2132: Frames must have an accessible name
- T3-97df20dd40: Frames must have an accessible name
- T3-bba1c2f6ce: Frames must have an accessible name
- T3-c301e50dde: Frames must have an accessible name
- T3-c31ab983f8: Frames must have an accessible name
- T3-c7a3600109: Frames must have an accessible name

### MA-cbab8700 · 4 membros · lotes lote-18, lote-20, lote-34, lote-67 · → adjudicação

Tela processos-f3 · completa · regra `wcag:2.4.3` · estado `1280x900` · tipo componente <br-button>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>br-button:nth-of-type(2) ; body>pnip-root>ma`

Divergem: fato, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-3d29786a5e | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4700771edb | 20 | indisponivel | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-7a802255f7 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f795227fcb | 67 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-3d29786a5e: Ao fechar os diálogos de 'Assinar' (botão fechar) e 'Desassociar' (Esc), o foco vai para o body, não volta ao botão que abriu o diálogo
- T3-4700771edb: Quando o diálogo aberto por "Assinar" (Escape) ou por "Desassociar" (botão "Não") é fechado, o foco vai para o body em vez de voltar ao botã
- T3-7a802255f7: Ao fechar com Escape os diálogos abertos por 'Desassociar processo do analista responsável' (linha 1) e 'Assinar' (linha 2), o foco vai para
- T3-f795227fcb: Depois de abrir pelo teclado (Enter) o diálogo de "Assinar" ou de "Desassociar" e fechá-lo (botão fechar com Enter ou Escape), o foco vai pa

### MA-cd047220 · 6 membros · lotes lote-02, lote-17, lote-21, lote-41, lote-55 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-accessibility-global-538e57855252` · estado `1280x900` · tipo raiz  
Sujeito: `(raiz)`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-03e842b51d | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-0541c13f2e | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-3a0d6bbb1e | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-4aa8ae01cf | 21 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-98486dac33 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-cb8bb1e0e4 | 55 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-03e842b51d: Não há link de salto para o conteúdo; o primeiro link da página é o "Home" do breadcrumb (href="/portal-mpa/").
- T3-0541c13f2e: Não há link de salto para o conteúdo: o primeiro link é "Home" do breadcrumb (href /portal-mpa/), e a tabulação começa no botão Menu do cabe
- T3-3a0d6bbb1e: O primeiro link da página é "Home" (href="/portal-mpa/"); não há link de salto para o conteúdo; o primeiro elemento focável por Tab é o botã
- T3-4aa8ae01cf: O detalhe "Solicitação de CAOL" não tem link de salto: o primeiro link é "Home" (href /portal-mpa).
- T3-98486dac33: Não há link de salto para o conteúdo; o primeiro link da página é o 'Home' do breadcrumb (href='/portal-mpa/').
- T3-cb8bb1e0e4: O detalhe "Alteração de Certificado" não tem link de salto: o primeiro link é "Home" (href /portal-mpa).

### MA-d4ce1c97 · 9 membros · lotes lote-02, lote-06, lote-09, lote-25, lote-33, lote-40, lote-46, lote-59, lote-69 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:page-has-heading-one` · estado `1280x900@exibir-25` · tipo não resolvido  
Sujeito: `unresolved:iframe html`

Divergem: norma.aplicabilidade, norma.violada, vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-06d588e2f2 | 02 | verdadeira | citada | boa-pratica | nao-aplica | nao | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-136f8821d6 | 06 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-1cd84c08e4 | 09 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-58bb1ca5a3 | 25 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-790533057a | 33 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-93844b34e0 | 40 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-ab2b191800 | 46 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-dafecd0ed8 | 59 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-fd933617bf | 69 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-06d588e2f2: Page should contain a level-one heading
- T3-136f8821d6: Page should contain a level-one heading
- T3-1cd84c08e4: Page should contain a level-one heading
- T3-58bb1ca5a3: Page should contain a level-one heading
- T3-790533057a: Page should contain a level-one heading
- T3-93844b34e0: Page should contain a level-one heading
- T3-ab2b191800: Page should contain a level-one heading
- T3-dafecd0ed8: Page should contain a level-one heading
- T3-fd933617bf: Page should contain a level-one heading

### MA-d572f421 · 2 membros · lotes lote-20, lote-32 · → adjudicação

Tela processos-f3 · completa · regra `wcag:2.4.3` · estado `1280x900` · tipo componente <br-button>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>br-button:nth-of-type(3) ; body>pnip-root>ma`

Divergem: fato, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-47586da855 | 20 | indisponivel | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-7449a9863f | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-47586da855: Depois de abrir o modal de assinatura pelo teclado (foco no botão "Assinar", Enter) e fechá-lo pelo botão de fechar (Enter), o foco vai para
- T3-7449a9863f: Os diálogos foram abertos pelo teclado a partir do botão 'Assinar' (fechado com Escape) e do botão 'Desassociar' (fechado com 'Não'). Ao fec

### MA-d6fa361c · 9 membros · lotes lote-10, lote-12, lote-20, lote-27, lote-37, lote-41, lote-53, lote-58, lote-67 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:color-contrast` · estado `1280x900@assinatura-cancelada` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1f7467934d | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-28f1fa5acb | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-47c8753c6b | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-637a36dc67 | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-879c080bd2 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-97879ff081 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-c396c34dfc | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d630105cf0 | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-f561470c25 | 67 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1f7467934d: Elements must meet minimum color contrast ratio thresholds
- T3-28f1fa5acb: Elements must meet minimum color contrast ratio thresholds
- T3-47c8753c6b: Elements must meet minimum color contrast ratio thresholds
- T3-637a36dc67: Elements must meet minimum color contrast ratio thresholds
- T3-879c080bd2: Elements must meet minimum color contrast ratio thresholds
- T3-97879ff081: Elements must meet minimum color contrast ratio thresholds
- T3-c396c34dfc: Elements must meet minimum color contrast ratio thresholds
- T3-d630105cf0: Elements must meet minimum color contrast ratio thresholds
- T3-f561470c25: Elements must meet minimum color contrast ratio thresholds

### MA-dcb74b72 · 9 membros · lotes lote-08, lote-17, lote-20, lote-21, lote-36, lote-44, lote-45, lote-47, lote-52 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `govbr-3.7.0-component-breadcrumb-478cffdbb111` · estado `1280x900@lista-exibir` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb >>> div`

Divergem: fato, norma.aplicabilidade, norma.violada, vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-17d2f9e0b3 | 08 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-3bc86605c2 | 17 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-494f9fbea2 | 20 | falsa | citada | obrigatorio | aplica | incerto | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-4a7252f5ab | 21 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-81dfd5ea31 | 36 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-a0d37ac7bf | 44 | falsa | citada | obrigatorio | aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-a7f0b8fc63 | 45 | falsa | citada | obrigatorio | nao-aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-acfe3697b1 | 47 | falsa | citada | obrigatorio | nao-aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-c239277560 | 52 | falsa | citada | obrigatorio | aplica | sim | nenhum | — | erro-factual | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-17d2f9e0b3: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-3bc86605c2: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-494f9fbea2: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-4a7252f5ab: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-81dfd5ea31: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-a0d37ac7bf: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-a7f0b8fc63: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-acfe3697b1: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-c239277560: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua

### MA-e031192f · 9 membros · lotes lote-07, lote-11, lote-13, lote-18, lote-21, lote-40, lote-47, lote-48, lote-69 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:color-contrast` · estado `1280x900@filtro-removido` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1428d216cb | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-246780c077 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2a1da66a1f | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3cd11fa5f4 | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4a08c3b8bb | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-951fe66ae7 | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-adfb035e20 | 47 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b031620bf3 | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fb9ae40f0c | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1428d216cb: Elements must meet minimum color contrast ratio thresholds
- T3-246780c077: Elements must meet minimum color contrast ratio thresholds
- T3-2a1da66a1f: Elements must meet minimum color contrast ratio thresholds
- T3-3cd11fa5f4: Elements must meet minimum color contrast ratio thresholds
- T3-4a08c3b8bb: Elements must meet minimum color contrast ratio thresholds
- T3-951fe66ae7: Elements must meet minimum color contrast ratio thresholds
- T3-adfb035e20: Elements must meet minimum color contrast ratio thresholds
- T3-b031620bf3: Elements must meet minimum color contrast ratio thresholds
- T3-fb9ae40f0c: Elements must meet minimum color contrast ratio thresholds

### MA-e0f0df35 · 8 membros · lotes lote-19, lote-32, lote-38, lote-40, lote-52, lote-57, lote-59, lote-69 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `(sem regra)` · estado `1280x900` · tipo table  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table ; body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-o`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-4459d941aa | 19 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-735cd40a7d | 32 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-8b927242f1 | 38 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-94e42c2f5e | 40 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-bf286d9e31 | 52 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | F3-11 | participante-relacionado | violacao-pagina | sim | credita F3-11 | nenhuma |
| T3-d297869ac1 | 57 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-db558c9a19 | 59 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-fef678a608 | 69 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-4459d941aa: A tabela tem 1180px de largura dentro de .br-table com 1096px e overflow visível: transborda 84px à direita (até x=1272), além do container 
- T3-735cd40a7d: No estado inicial, a tabela vai até x=1272px e passa da borda do .br-table (x=1188px, overflow visible) e do main (x=1260px); a coluna de aç
- T3-8b927242f1: A tabela tem 1180px de largura e transborda o contêiner .br-table (1096px, overflow visível): vai até x=1272, além da margem do conteúdo (bo
- T3-94e42c2f5e: Na lista com coluna de checkbox (estado inicial), a tabela vai até x=1272 px, enquanto o contêiner .br-table termina em x=1188 px (overflow 
- T3-bf286d9e31: No carregamento, a aba 'Aguardando análise' aparece ativa, mas a tabela lista processos 'Em análise analista/supervisor/diretor', 'Aguarda c
- T3-d297869ac1: Tabela com 1180px de largura transborda o contêiner .br-table (1096px; borda direita 1272 vs 1188) e ultrapassa o main (1260).
- T3-db558c9a19: A tabela (1180px) transborda o contêiner .br-table (1096px, overflow visible) e vai até x=1272, além da margem direita do conteúdo (1188/122
- T3-fef678a608: A tabela (1180px) ultrapassa o painel das abas (1096px): a borda direita fica em x=1272, e o painel e o divisor terminam em x=1188.

### MA-e5649de5 · 9 membros · lotes lote-17, lote-31, lote-41, lote-42, lote-46, lote-47, lote-48, lote-56, lote-63 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:color-contrast` · estado `1280x900@assinatura-cancelada` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-3ada8aab09 | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6f926b4618 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9662420a53 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-99b64e49c4 | 42 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a932400922 | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ae69ac2c2c | 47 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b175690c11 | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cf5b39955c | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ea3c210da1 | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-3ada8aab09: Elements must meet minimum color contrast ratio thresholds
- T3-6f926b4618: Elements must meet minimum color contrast ratio thresholds
- T3-9662420a53: Elements must meet minimum color contrast ratio thresholds
- T3-99b64e49c4: Elements must meet minimum color contrast ratio thresholds
- T3-a932400922: Elements must meet minimum color contrast ratio thresholds
- T3-ae69ac2c2c: Elements must meet minimum color contrast ratio thresholds
- T3-b175690c11: Elements must meet minimum color contrast ratio thresholds
- T3-cf5b39955c: Elements must meet minimum color contrast ratio thresholds
- T3-ea3c210da1: Elements must meet minimum color contrast ratio thresholds

### MA-f53911b7 · 33 membros · lotes lote-04, lote-08, lote-09, lote-10, lote-13, lote-15, lote-17, lote-19, lote-24, lote-30, lote-32, lote-33, lote-36, lote-39, lote-40, lote-41, lote-43, lote-44, lote-45, lote-46, lote-48, lote-50, lote-54, lote-60, lote-61, lote-63, lote-64, lote-69 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `(sem regra)` · estado `1280x900` · tipo componente <br-breadcrumb>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb`

Divergem: norma.id, norma.forca, norma.aplicabilidade, norma.violada, vinculo, vinculo.relacao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0abd13ce69 | 04 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | F3-07 | host-interno | violacao-pagina | sim | credita F3-07 | nenhuma |
| T3-0c870cb4e6 | 04 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-196d0d5609 | 08 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-1d905ae403 | 09 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | F3-07 | direta | violacao-pagina | sim | credita F3-07 | nenhuma |
| T3-20b553d33b | 10 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-2b0c0b5da6 | 13 | verdadeira | wcag:4.1.2 | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-344457c31e | 15 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | F3-07 | direta | violacao-pagina | sim | credita F3-07 | nenhuma |
| T3-396d00e173 | 17 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | F3-07 | direta | violacao-pagina | sim | credita F3-07 | nenhuma |
| T3-4056520d4b | 19 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-45a1f09f1c | 19 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-54c6996c49 | 24 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-6e52b8a02e | 30 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-7351916964 | 32 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-75556883f3 | 32 | verdadeira | wcag:4.1.2 | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-768ed64ac4 | 33 | verdadeira | wcag:4.1.2 | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-84e4679c52 | 36 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-8e36d31543 | 39 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-9335e95d74 | 40 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-93883c8d33 | 40 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | F3-07 | direta | violacao-pagina | sim | credita F3-07 | nenhuma |
| T3-95c4e53542 | 40 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | F3-07 | direta | violacao-pagina | sim | credita F3-07 | nenhuma |
| T3-984a4bb9a0 | 41 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | F3-07 | direta | violacao-pagina | sim | credita F3-07 | nenhuma |
| T3-9e7386676c | 43 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-a46d9fdcea | 44 | verdadeira | wcag:4.1.2 | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a75a5dcd40 | 45 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-a92bac55ed | 46 | verdadeira | wcag:4.1.2 | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b2b583b031 | 48 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-b8158fdaa8 | 50 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | F3-07 | host-interno | violacao-pagina | sim | credita F3-07 | nenhuma |
| T3-cab688fcad | 54 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | F3-07 | direta | violacao-pagina | sim | credita F3-07 | nenhuma |
| T3-dc7052bcc8 | 60 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | F3-07 | direta | violacao-pagina | sim | credita F3-07 | nenhuma |
| T3-e31227c663 | 61 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-eab6782e6e | 63 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-ebd50f2713 | 64 | verdadeira | wcag:4.1.2 | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fc31b86216 | 69 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0abd13ce69: Trilha em <div class="br-breadcrumb"><ul> sem <nav>/aria-label; a página atual "Processos" é link (href relativo) sem aria-current
- T3-0c870cb4e6: A lista do breadcrumb (div.br-breadcrumb > ul.crumb-list) não está dentro de um <nav> nem de uma região com nome; não aparece como ponto de 
- T3-196d0d5609: O link "Home" da trilha aponta para "/portal-mpa/" (resolve para http://screens:3300/portal-mpa/, fora da base /pnip-f3/); um GET nesse ende
- T3-1d905ae403: Último item do breadcrumb 'Processos' (página atual) é um link para a própria página, sem aria-current; o breadcrumb é div/ul, sem nav
- T3-20b553d33b: Link "Home" do breadcrumb aponta para "/portal-mpa/" (fora da base /pnip-f3/); ao clicar, navega para http://screens:3300/portal-mpa/, que r
- T3-2b0c0b5da6: Item "Home" é <a href="/portal-mpa/"> contendo <button> (conteúdo interativo aninhado); Tab para duas vezes no mesmo item (link e botão) e o
- T3-344457c31e: O último item do breadcrumb, 'Processos' (página atual), é um link (href='portal-mpa/processos') sem aria-current; o breadcrumb não está em 
- T3-396d00e173: O último item ('Processos', página atual) é um link (href resolve para a própria página) sem aria-current='page'.
- T3-4056520d4b: O link 'Home' do breadcrumb aponta para '/portal-mpa/', fora da base '/pnip-f3/'; GET nessa URL retorna 404.
- T3-45a1f09f1c: O link "Home" do breadcrumb aponta para "/portal-mpa/" (fora da base /pnip-f3/); GET nesse endereço retorna HTTP 404.
- T3-54c6996c49: Link "Home" da trilha aponta para href="/portal-mpa/" (resolve para http://screens:3300/portal-mpa/, fora da base /pnip-f3/), que responde 4
- T3-6e52b8a02e: O link Home do breadcrumb aponta para "/portal-mpa/" (fora da base /pnip-f3/); GET http://screens:3300/portal-mpa/ devolve 404.
- T3-7351916964: O link "Home" do breadcrumb aponta para /portal-mpa/, fora da base /pnip-f3/. Ao clicar, o navegador vai para http://screens:3300/portal-mpa
- T3-75556883f3: O item Home é um <button class="br-button circle" aria-label=""> dentro de <a href>: controle interativo aninhado em link, com duas paradas 
- T3-768ed64ac4: Item "Home" é <a href> contendo <button aria-label="">: conteúdo interativo aninhado, gerando duas paradas de Tab ("Home" link e "Home" botã
- T3-84e4679c52: O breadcrumb é renderizado em <div class='br-breadcrumb'> sem <nav> nem aria-label; não há landmark de navegação para a trilha.
- T3-8e36d31543: O link "Home" do breadcrumb aponta para "/portal-mpa/" (caminho absoluto que ignora o base href /pnip-f3/); ativá-lo leva a http://screens:3
- T3-9335e95d74: O link Home do breadcrumb aponta para href="/portal-mpa/", resolvido como http://screens:3300/portal-mpa/, que responde 404 (a aplicação est
- T3-93883c8d33: O último item ("Processos") é um link para a própria página atual, sem aria-current="page".
- T3-95c4e53542: O último item da trilha, 'Processos' (página atual), é um link com href relativo 'portal-mpa/processos' e sem aria-current.
- T3-984a4bb9a0: A trilha (no shadow DOM) não está num nav com rótulo; o item atual "Processos" é um link sem aria-current, ao contrário da tela Exportar, em
- T3-9e7386676c: Link "Home" aponta para /portal-mpa/ (fora da base /pnip-f3/); requisição GET retorna 404.
- T3-a46d9fdcea: No shadow root de br-breadcrumb, o item Home é <a href="/portal-mpa/"> contendo um <button class="br-button"> (controles interativos aninhad
- T3-a75a5dcd40: O item "Home" da trilha aponta para href="/portal-mpa/" (fora da base /pnip-f3/); ao acioná-lo o navegador vai para http://screens:3300/port
- T3-a92bac55ed: No breadcrumb (shadow DOM), o item Home é um <button> dentro de <a href='/portal-mpa/'> (elemento interativo aninhado)
- T3-b2b583b031: O breadcrumb é uma div.br-breadcrumb com ul, sem elemento nav nem aria-label que o identifique como trilha de navegação.
- T3-b8158fdaa8: O último item "Processos" (página atual) é um link (href="portal-mpa/processos") sem aria-current="page".
- T3-cab688fcad: O último item do breadcrumb ("Processos", página atual) é um link comum (href="portal-mpa/processos") sem aria-current="page", e a lista do 
- T3-dc7052bcc8: No breadcrumb (shadow DOM), o item Home é <a href="/portal-mpa/"> contendo <button aria-label="">: controle interativo aninhado em link (doi
- T3-e31227c663: O link "Home" da trilha aponta para http://screens:3300/portal-mpa/, que responde 404
- T3-eab6782e6e: A trilha (shadow DOM) é um div.br-breadcrumb com ul, sem elemento nav nem rótulo; não há região de navegação para a trilha.
- T3-ebd50f2713: No breadcrumb (shadow DOM), o link 'Home' contém um button (<a href='/portal-mpa/'><button aria-label=''>…Home</button></a>): conteúdo inter
- T3-fc31b86216: O link 'Home' do breadcrumb tem href='/portal-mpa/' (absoluto, fora do base href /pnip-f3/), que resolve para http://screens:3300/portal-mpa

### MA-f567bea4 · 9 membros · lotes lote-14, lote-20, lote-32, lote-35, lote-43, lote-44, lote-46, lote-65, lote-66 · **muda crédito** · → adjudicação

Tela processos-f3 · completa · regra `axe:label` · estado `1280x900@assinatura-cancelada` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-2e8f40bc93 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4755016925 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-731941c78f | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7e969b71a3 | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9e548ad837 | 43 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a38ef00c03 | 44 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-aaa5c16d49 | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f15034297f | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f2c85a1871 | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-2e8f40bc93: Form elements must have labels
- T3-4755016925: Form elements must have labels
- T3-731941c78f: Form elements must have labels
- T3-7e969b71a3: Form elements must have labels
- T3-9e548ad837: Form elements must have labels
- T3-a38ef00c03: Form elements must have labels
- T3-aaa5c16d49: Form elements must have labels
- T3-f15034297f: Form elements must have labels
- T3-f2c85a1871: Form elements must have labels

### MA-aa55eb5d · 4 membros · lotes lote-04, lote-46, lote-48, lote-51

Tela processos-f3 · completa · regra `wcag:1.3.1` · estado `1280x900` · tipo componente <br-breadcrumb>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb`

Divergem: norma.aplicabilidade, vinculo, vinculo.relacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0b4e5c3ad9 | 04 | verdadeira | citada | obrigatorio | nao-aplica | nao | F3-07 | host-interno | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-a9c062a07d | 46 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-b02efc824a | 48 | verdadeira | citada | obrigatorio | nao-aplica | nao | F3-07 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-bd150f2f57 | 51 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0b4e5c3ad9: Item atual "Processos" é link comum (href="portal-mpa/processos") sem aria-current="page".
- T3-a9c062a07d: A trilha é <div class="br-breadcrumb"><ul class="crumb-list">, sem <nav> nem role=navigation/aria-label.
- T3-b02efc824a: Na lista, o último item do breadcrumb ("Processos", a página atual) é um link (href "portal-mpa/processos") sem aria-current. No detalhe, o 
- T3-bd150f2f57: Breadcrumb renderizado como <div class="br-breadcrumb"><ul> sem <nav> nem aria-label.

### MA-d7e8b119 · 3 membros · lotes lote-16, lote-35, lote-64

Tela processos-f3 · completa · regra `emag:6.2` · estado `1280x900` · tipo componente <br-input>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input ; body>pnip-root>main>pnip-mpa>pnip-mpa-process`

Divergem: vinculo.relacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-3604de1402 | 16 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-7ebf9792a1 | 35 | verdadeira | citada | recomendado | aplica | sim | D-05 | host-interno | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-ed99498d3e | 64 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | violacao-pagina | sim | credita D-05 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-3604de1402: O campo de pesquisa (input#search no shadow DOM) não tem label nem aria-label; a única identificação é o placeholder "Pesquise aqui ...".
- T3-7ebf9792a1: O campo de busca (input#search no shadow DOM) não tem label nem aria-label; o único rótulo é o placeholder 'Pesquise aqui ...', que some ao 
- T3-ed99498d3e: Campo de busca (input no shadow root) sem label; identificado só pelo placeholder "Pesquise aqui ...", que some ao digitar

## Grupos divergentes — mesma leitura da norma (32; 11 à adjudicação; 21 mudam o crédito)

### LN-17deeef2 · 10 membros · lotes lote-03, lote-11, lote-12, lote-31, lote-35, lote-38, lote-58, lote-65, lote-67, lote-68 · **muda crédito** · → adjudicação

Regra `wcag:3.3.2` × componente <br-input>

Divergem: norma.violada, vinculo.relacao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0834683c92 | 03 | verdadeira | citada | obrigatorio | aplica | incerto | D-05 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-232f09f77a | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-2898ab4b7c | 12 | verdadeira | citada | obrigatorio | aplica | nao | D-05 | direta | valida | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-6ff29debe7 | 31 | verdadeira | citada | obrigatorio | aplica | incerto | D-05 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-80986c0b20 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | host-interno | — | violacao-pagina | sim | credita D-05 | norma |
| T3-8b0d3a3268 | 38 | verdadeira | citada | obrigatorio | aplica | incerto | D-05 | host-interno | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-d6468df79d | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-f1ca37d03a | 65 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-f5e15655e0 | 67 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-fa05f8bcd2 | 68 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |

Textos observados (conferência do agrupamento):
- T3-0834683c92: Campo de busca sem rótulo visível; identificado só pelo placeholder "Pesquise aqui ...", que some ao digitar.
- T3-232f09f77a: O campo de busca (input#search, shadow DOM do br-input) não tem <label> nem aria-label; a única indicação é o placeholder "Pesquise aqui ...
- T3-2898ab4b7c: O input interno do campo de busca (name="search") não tem label, aria-label nem aria-labelledby. O único rótulo é o placeholder "Pesquise aq
- T3-6ff29debe7: O campo de busca (input#search no shadow DOM de br-input) não tem label nem aria-label; a única identificação é o placeholder "Pesquise aqui
- T3-80986c0b20: Campo de busca (input#search no shadow DOM) não tem label visível nem aria-label; o único rótulo é o placeholder "Pesquise aqui ...", que de
- T3-8b0d3a3268: O campo de pesquisa não tem rótulo visível nem label associado; a única identificação é o placeholder "Pesquise aqui ...", que some ao digit
- T3-d6468df79d: O campo de pesquisa não tem label associado nem aria-label; o único nome é o placeholder "Pesquise aqui ...", que desaparece ao digitar.
- T3-f1ca37d03a: O campo de busca (input#search no shadow DOM) não tem label nem aria-label; a única identificação é o placeholder "Pesquise aqui ...", que s
- T3-f5e15655e0: O campo de busca (input#search no shadow de br-input) não tem <label> nem aria-label; o único rótulo é o placeholder 'Pesquise aqui ...', qu
- T3-fa05f8bcd2: Campo de busca (input#search no shadow DOM) sem label/aria-label; o único nome vem do placeholder 'Pesquise aqui ...', que some ao digitar.

### LN-4a41d85f · 56 membros · lotes lote-01, lote-02, lote-04, lote-05, lote-06, lote-10, lote-11, lote-12, lote-13, lote-14, lote-15, lote-17, lote-18, lote-20, lote-24, lote-25, lote-27, lote-28, lote-29, lote-30, lote-33, lote-36, lote-37, lote-38, lote-39, lote-42, lote-43, lote-46, lote-57, lote-58, lote-61, lote-62, lote-63, lote-65, lote-67, lote-68, lote-69 · → adjudicação

Regra `wcag:4.1.2` × não resolvido

Divergem: norma.aplicabilidade, norma.violada, sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-033f162b08 | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-04046dd5b1 | 02 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-0aed74aa45 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0cdffa07dc | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0d7e34d660 | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-108d268402 | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-131bb8196c | 06 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-138c4c31ad | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1f7964daf2 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-231aa06e0a | 11 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-254d9a62c1 | 11 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-2628449773 | 11 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-2727cfd376 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-297ec246ca | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2a8324520b | 13 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-2f8ad87706 | 14 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-32066becda | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-352da3a244 | 15 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-3cc4d7e5b7 | 17 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-3d71c54f29 | 18 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-3e1f58139c | 18 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-47cf8b9be1 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-54752b8ddb | 24 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-5891b8a514 | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6111e79f19 | 27 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-631a2189c6 | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-63fceba90a | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-66a618dc70 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-68a2fa5821 | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6ccbd26e6e | 30 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-6ee3a1c2e2 | 30 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-77c6e4f579 | 33 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-81f98f210b | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-845f702014 | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-870551c09f | 37 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-87126d7c84 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-88d5603f01 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-90502e207f | 39 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-9a8848cf11 | 42 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9d82d7fa3a | 43 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9fc4e9ebd7 | 43 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9fcd77a36c | 43 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a9d8e56f38 | 46 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-d1ff3b23bf | 57 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d6be0018b6 | 58 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d7c40e407a | 58 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e07d0998e3 | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e564f2e778 | 62 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-ea0ea78ec4 | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ee9ddddde4 | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f5f9f93b11 | 67 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f773184ad7 | 67 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f93d5af560 | 68 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fa1daba279 | 68 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fed9a30726 | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fee83c2ed9 | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-033f162b08: O diálogo "Tem certeza que deseja desassociar esse processo do analista responsável?" também tem aria-labelledby apontando para o h2#swal2-t
- T3-04046dd5b1: O diálogo de confirmação "Tem certeza que deseja desassociar..." também tem aria-labelledby para um título vazio e oculto: sem nome acessíve
- T3-0aed74aa45: No detalhe do processo 00000.000033/2026-00, a célula Protocolo tem <a role="button"> vazio, sem nome acessível.
- T3-0cdffa07dc: Os mesmos ícones acionáveis só contêm <i aria-hidden="true">, sem texto nem aria-label: não têm nome acessível nem papel.
- T3-0d7e34d660: Diálogo de assinatura (visualização do PDF, botões "Solicitar Revisão"/"Assinar com gov.br") com aria-labelledby para h2 oculto e vazio: sem
- T3-108d268402: O diálogo de assinatura (SweetAlert2, role=dialog aria-modal) usa aria-labelledby="swal2-title", que aponta para um h2 vazio e oculto (displ
- T3-131bb8196c: O diálogo "Assinar" (role="dialog") referencia o h2 #swal2-title vazio e oculto: fica sem nome acessível.
- T3-138c4c31ad: Opções da lista de filtro "Aberto há" (Últimos 7/30/60/90 dias) são div.br-radio contendo só <label>, sem <input type=radio>, sem role nem t
- T3-1f7964daf2: Diálogo de assinatura (PDF + "Solicitar Revisão"/"Assinar com gov.br") também sem nome: aria-labelledby aponta para h2#swal2-title vazio e o
- T3-231aa06e0a: O diálogo aberto por "Assinar" (role=dialog, aria-modal) tem aria-labelledby="swal2-title", mas esse h2 está vazio e oculto, e o diálogo fic
- T3-254d9a62c1: O diálogo de confirmação "Tem certeza que deseja desassociar…" tem aria-labelledby apontando para #swal2-title vazio e oculto: sem nome aces
- T3-2628449773: O diálogo 'Tem certeza que deseja desassociar esse processo do analista responsável?' tem aria-labelledby='swal2-title', mas o h2#swal2-titl
- T3-2727cfd376: O diálogo de assinatura (Solicitar Revisão / Assinar com gov.br) tem aria-labelledby="swal2-title" com título vazio e oculto: fica sem nome 
- T3-297ec246ca: Na tela de detalhe de Alteração de Certificado (processo 00000.000010/2026-00, Em análise analista) há um <a role="button"> vazio, sem nome 
- T3-2a8324520b: Diálogo de confirmação de desassociação aponta aria-labelledby para o h2 #swal2-title vazio: o diálogo fica sem nome acessível
- T3-2f8ad87706: O diálogo "Tem certeza que deseja desassociar esse processo do analista responsável?" (role=dialog) aponta aria-labelledby para o #swal2-tit
- T3-32066becda: Opções do filtro aberto ("Últimos 7 dias", "30", "60", "90") são <div class="br-radio"><label> sem input, papel ou tabindex: não focáveis e 
- T3-352da3a244: Diálogo "Assinar" (pré-visualização de PDF) com aria-labelledby="swal2-title" vazio e oculto: sem nome acessível.
- T3-3cc4d7e5b7: Diálogo de assinatura (PDF + "Solicitar Revisão"/"Assinar com gov.br"): role=dialog com aria-labelledby apontando para o #swal2-title vazio 
- T3-3d71c54f29: O modal de assinatura (aberto por "Assinar") tem role="dialog" e aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e oculto (di
- T3-3e1f58139c: O diálogo de assinatura (role=dialog, aria-modal) usa aria-labelledby="swal2-title", mas esse h2 está vazio e com display:none: o diálogo nã
- T3-47cf8b9be1: No diálogo "Solicitar Revisão", o textarea do motivo não tem label, aria-label nem aria-labelledby (placeholder vazio); a instrução "Informe
- T3-54752b8ddb: Diálogo de confirmação "Tem certeza que deseja desassociar…": role=dialog, aria-labelledby=swal2-title, mas o h2 #swal2-title está vazio e c
- T3-5891b8a514: O diálogo 'Assinar' (role=dialog, aria-modal=true) usa aria-labelledby='swal2-title', mas o h2#swal2-title está vazio e com display:none: na
- T3-6111e79f19: Modal de assinatura (role=dialog, aria-modal) com aria-labelledby='swal2-title' apontando para h2 vazio e oculto: diálogo sem nome acessível
- T3-631a2189c6: Opções do dropdown de filtro são <div class="br-radio"><label>texto</label></div> sem input radio: sem papel, estado selecionado ou foco
- T3-63fceba90a: O diálogo de confirmação de "Desassociar" (role="dialog") tem aria-labelledby="swal2-title", mas o h2 está vazio e oculto: o diálogo fica se
- T3-66a618dc70: O diálogo de confirmação de "Desassociar processo do analista responsável" tem role="dialog" com aria-labelledby apontando para h2#swal2-tit
- T3-68a2fa5821: As opções da lista de filtro são <div class="br-item"> com <label> sem input associado: sem papel (option/radio), sem estado de seleção, tab
- T3-6ccbd26e6e: O diálogo de confirmação "Tem certeza que deseja desassociar...?" (role=dialog) aponta aria-labelledby para #swal2-title, que está vazio e o
- T3-6ee3a1c2e2: O diálogo de "Assinar" (role="dialog", aria-modal) aponta aria-labelledby para #swal2-title, que está vazio e com display:none: o diálogo nã
- T3-77c6e4f579: Na tela de detalhe de CAOL (00000.000011/2026-00, Em análise supervisor) há um <a role="button"> vazio, sem nome acessível
- T3-81f98f210b: Diálogo de confirmação de desassociar (SweetAlert2, role=dialog, aria-modal=true) referencia aria-labelledby="swal2-title", elemento vazio e
- T3-845f702014: Os mesmos ícones de 'Ofício' e 'Certificado' só contêm <i aria-hidden='true'> (fa-file, fa-file-pdf), sem aria-label/title. Não têm nome ace
- T3-870551c09f: O diálogo de confirmação aberto por "Desassociar processo do analista responsável" também tem o título #swal2-title vazio, e o aria-labelled
- T3-87126d7c84: As opções da lista de filtro (ex.: "Em análise supervisor" no filtro Status) são div.br-item > div.br-radio > label sem input, sem papel (op
- T3-88d5603f01: Na tela de detalhe Desvínculo (registro Cancelado 00000.000035/2026-00), o botão dentro de br-button na 6ª coluna tem aria-label="" e nenhum
- T3-90502e207f: Diálogo de confirmação "Tem certeza que deseja desassociar..." (role=dialog, aria-modal=true) com aria-labelledby="swal2-title" apontando pa
- T3-9a8848cf11: Diálogo de confirmação 'Tem certeza que deseja desassociar...' (role=dialog) com aria-labelledby apontando para título vazio e oculto: sem n
- T3-9d82d7fa3a: Diálogo de assinatura (role=dialog, aria-modal) com aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com display:none: diálo
- T3-9fc4e9ebd7: O diálogo de confirmação "Tem certeza que deseja desassociar..." tem aria-labelledby="swal2-title", e #swal2-title está vazio e oculto (disp
- T3-9fcd77a36c: O diálogo de assinatura (role="dialog", aria-modal="true") tem aria-labelledby="swal2-title", mas h2#swal2-title está vazio e com display:no
- T3-a9d8e56f38: Diálogo de confirmação "Tem certeza que deseja desassociar..." (role=dialog) com aria-labelledby apontando para h2#swal2-title vazio e ocult
- T3-d1ff3b23bf: O diálogo de assinatura (role="dialog") aponta aria-labelledby para #swal2-title vazio e oculto: o diálogo fica sem nome acessível.
- T3-d6be0018b6: Ao abrir o filtro 'Status', as 18 opções são <label> soltos dentro de div.br-radio, sem <input type='radio'> e sem role. Não são focáveis (t
- T3-d7c40e407a: O diálogo de confirmação 'Desassociar' ('Tem certeza que deseja desassociar…') usa aria-labelledby='swal2-title', que aponta para um h2 vazi
- T3-e07d0998e3: O diálogo de assinatura (role="dialog", aria-modal) tem aria-labelledby="swal2-title", mas esse h2 está vazio e com display:none: o diálogo 
- T3-e564f2e778: Diálogo de assinatura (role=dialog, aria-modal) tem aria-labelledby="swal2-title", mas o h2 está vazio e oculto: o diálogo fica sem nome ace
- T3-ea0ea78ec4: As opções do dropdown de filtro ("Últimos 7/30/60/90 dias") são <label> sem input associado (sem for, sem input), em div.br-item sem role ne
- T3-ee9ddddde4: Diálogo de confirmação "Tem certeza que deseja desassociar..." (role=dialog, aria-modal) com aria-labelledby="swal2-title" apontando para h2
- T3-f5f9f93b11: Diálogo de assinatura (pré-visualização do PDF + "Solicitar Revisão"/"Assinar com gov.br") com role=dialog e aria-labelledby para h2#swal2-t
- T3-f773184ad7: No diálogo "Solicitar Revisão", o textarea do motivo não tem label, aria-label nem aria-labelledby; a instrução "Informe no campo abaixo, o(
- T3-f93d5af560: O diálogo de assinatura (role="dialog", aria-modal) tem aria-labelledby="swal2-title", mas #swal2-title está vazio e com display:none: o diá
- T3-fa1daba279: Diálogo de confirmação de desassociação (role=dialog, aria-modal) com aria-labelledby="swal2-title" apontando para h2 vazio e oculto: sem no
- T3-fed9a30726: O diálogo de confirmação "Tem certeza que deseja desassociar esse processo...?" (role="dialog") referencia por aria-labelledby o h2#swal2-ti
- T3-fee83c2ed9: O diálogo de assinatura individual (PDF + 'Solicitar Revisão' / 'Assinar com gov.br') tem aria-labelledby='swal2-title', mas o título está v

### LN-4da3d52f · 45 membros · lotes lote-06, lote-08, lote-09, lote-10, lote-11, lote-12, lote-13, lote-15, lote-17, lote-20, lote-21, lote-24, lote-25, lote-27, lote-28, lote-29, lote-33, lote-36, lote-37, lote-39, lote-41, lote-44, lote-45, lote-46, lote-47, lote-51, lote-52, lote-55, lote-57, lote-58, lote-66, lote-68 · **muda crédito** · → adjudicação

Regra `govbr-3.7.0-component-breadcrumb-478cffdbb111` × div

Divergem: fato, norma.aplicabilidade, norma.violada, vinculo, vinculo.relacao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-116f7c02a9 | 06 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-17d2f9e0b3 | 08 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-1835277b34 | 08 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-19d9d8c8a5 | 08 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-1a0cc8170b | 08 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-1d8a72b89b | 09 | falsa | citada | obrigatorio | aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-21d5c7336e | 10 | falsa | citada | obrigatorio | aplica | incerto | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-2432ab355b | 11 | falsa | citada | obrigatorio | aplica | incerto | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-28874b05e9 | 12 | falsa | citada | obrigatorio | aplica | sim | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-2c5fd343ca | 13 | falsa | citada | obrigatorio | nao-aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-3214f98b36 | 15 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-3914381aa1 | 17 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-3b9749411f | 17 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-3bc86605c2 | 17 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-494f9fbea2 | 20 | falsa | citada | obrigatorio | aplica | incerto | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-4a5b46cc36 | 21 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-4a7252f5ab | 21 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-57151c2e9b | 24 | falsa | citada | obrigatorio | aplica | sim | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-5b3585c6ba | 25 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-6014facf0c | 27 | falsa | citada | obrigatorio | aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-6548542e2d | 28 | falsa | citada | obrigatorio | aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-69a38a4867 | 29 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-7725f804e0 | 33 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-81dfd5ea31 | 36 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-85241d9b6d | 37 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | host-interno | violacao-pagina | sim | credita F3-07 | norma |
| T3-87592dce87 | 37 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | host-interno | violacao-pagina | sim | credita F3-07 | norma |
| T3-8e8dcf96f8 | 39 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | host-interno | violacao-pagina | sim | credita F3-07 | norma |
| T3-9055c47230 | 39 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | host-interno | violacao-pagina | sim | credita F3-07 | norma |
| T3-9650a2313c | 41 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-a0d37ac7bf | 44 | falsa | citada | obrigatorio | aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-a113a97ae9 | 44 | falsa | citada | obrigatorio | aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-a7f0b8fc63 | 45 | falsa | citada | obrigatorio | nao-aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-abcff01ac0 | 46 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-acfe3697b1 | 47 | falsa | citada | obrigatorio | nao-aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-af1fa99e1f | 47 | falsa | citada | obrigatorio | nao-aplica | nao | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-bc4332ac7f | 51 | falsa | citada | obrigatorio | aplica | incerto | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-c032ce693a | 52 | falsa | citada | obrigatorio | aplica | sim | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-c239277560 | 52 | falsa | citada | obrigatorio | aplica | sim | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-ce097cf6d8 | 55 | falsa | citada | obrigatorio | aplica | sim | nenhum | — | erro-factual | nao | sem-credito | sem-credito |
| T3-d4406bf612 | 57 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | host-interno | violacao-pagina | sim | credita F3-07 | norma |
| T3-d8d14805d8 | 58 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-f22e7c09cd | 66 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-f3b39f6a32 | 66 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-f3fb28dbcd | 66 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | violacao-pagina | sim | credita F3-07 | norma |
| T3-fa61705f25 | 68 | falsa | citada | obrigatorio | aplica | incerto | nenhum | — | erro-factual | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-116f7c02a9: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-17d2f9e0b3: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-1835277b34: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-19d9d8c8a5: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-1a0cc8170b: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-1d8a72b89b: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-21d5c7336e: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-2432ab355b: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-28874b05e9: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-2c5fd343ca: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-3214f98b36: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-3914381aa1: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-3b9749411f: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-3bc86605c2: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-494f9fbea2: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-4a5b46cc36: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-4a7252f5ab: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-57151c2e9b: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-5b3585c6ba: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-6014facf0c: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-6548542e2d: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-69a38a4867: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-7725f804e0: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-81dfd5ea31: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-85241d9b6d: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-87592dce87: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-8e8dcf96f8: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-9055c47230: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-9650a2313c: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-a0d37ac7bf: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-a113a97ae9: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-a7f0b8fc63: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-abcff01ac0: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-acfe3697b1: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-af1fa99e1f: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-bc4332ac7f: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-c032ce693a: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-c239277560: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-ce097cf6d8: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-d4406bf612: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-d8d14805d8: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-f22e7c09cd: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-f3b39f6a32: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-f3fb28dbcd: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua
- T3-fa61705f25: Parte obrigatória ausente na raiz .br-breadcrumb: o último item ("Processos") é link para outra página e não é "PNIP" (título da página atua

### LN-4f275be1 · 17 membros · lotes lote-02, lote-03, lote-07, lote-09, lote-11, lote-21, lote-26, lote-38, lote-44, lote-48, lote-52, lote-54, lote-66 · → adjudicação

Regra `wcag:4.1.2` × componente <br-breadcrumb>

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-075224253b | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-07ed27e845 | 03 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-0975331aa2 | 03 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-1472f77d4d | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-14c24961f0 | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-165d047c60 | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1e5fe68ab3 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1e9601ed79 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-25967b37df | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4ac407e738 | 21 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-5f45a49034 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-89b4efc3bb | 38 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-a1139080dc | 44 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b184a5d307 | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bf1fb287ad | 52 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c79da8c556 | 54 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f3c70843ff | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-075224253b: No shadow DOM de br-breadcrumb, o link "Home" (<a href>) contém um <button> "Home": um controle interativo dentro de outro. São dois pontos 
- T3-07ed27e845: No shadow DOM, o item Home é <a href='/portal-mpa/'><button class='br-button small circle' aria-label=''>Home</button></a>: controle interat
- T3-0975331aa2: Item Home do breadcrumb: <a href="/portal-mpa/"> envolve um <button aria-label="">; controles interativos aninhados com duas paradas de Tab 
- T3-1472f77d4d: No breadcrumb, o item "Home" é um <button> dentro de um <a href="/portal-mpa/">: elemento interativo aninhado em outro.
- T3-14c24961f0: No breadcrumb, o item "Home" é um <a href="/portal-mpa/"> que contém um <button class="br-button circle" aria-label=""> (interativo aninhado
- T3-165d047c60: No breadcrumb, o item Home é <a href="/portal-mpa/"> que contém um <button> (controle interativo aninhado em link).
- T3-1e5fe68ab3: No breadcrumb, o item Home é um <a href="/portal-mpa/"> que contém um <button aria-label=""> (elementos interativos aninhados); o Tab para d
- T3-1e9601ed79: No breadcrumb (shadow DOM), o item Home é um <button> aninhado dentro de <a href="/portal-mpa/">: controle interativo dentro de outro.
- T3-25967b37df: No breadcrumb, o item Home é um <a href="/portal-mpa/"> contendo um <button aria-label="">: interativo aninhado, com duas paradas de Tab con
- T3-4ac407e738: No shadow DOM, o item Home é um <a href> que contém um <button> (controle interativo aninhado em outro).
- T3-5f45a49034: O item Home do breadcrumb é <a href="/portal-mpa/"> contendo um <button class="br-button circle">: controle interativo aninhado em link
- T3-89b4efc3bb: Item "Home" do breadcrumb é <a href> contendo <button aria-label=""> (elemento interativo aninhado em link)
- T3-a1139080dc: O item Home é um <a href="/portal-mpa/"> que contém um <button> (aninhamento interativo); a navegação por Tab passa por dois alvos para o me
- T3-b184a5d307: No shadow DOM, o item Home é um <a href='/portal-mpa/'> contendo um <button> (elemento interativo aninhado); o Tab para duas vezes (link 44×
- T3-bf1fb287ad: No shadow DOM do br-breadcrumb, o item Home é um <a href="/portal-mpa/"> com um <button aria-label=""> dentro (interativo aninhado). O Tab p
- T3-c79da8c556: No shadow DOM do breadcrumb, o link "Home" (<a href="/portal-mpa/">) contém um <button class="br-button small circle" aria-label=""> — contr
- T3-f3c70843ff: No shadow root do breadcrumb, o item Home é <a href="/portal-mpa/"> contendo <button class="br-button circle" aria-label="">: elemento inter

### LN-75fa38c8 · 8 membros · lotes lote-12, lote-14, lote-24, lote-49, lote-54, lote-55, lote-65 · **muda crédito** · → adjudicação

Regra `govbr-3.7.0-component-breadcrumb-478cffdbb111` × componente <br-breadcrumb>

Divergem: norma.violada, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-26ef136864 | 12 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | — | violacao-pagina | sim | credita F3-07 | norma |
| T3-31907b3e84 | 14 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | — | violacao-pagina | sim | credita F3-07 | norma |
| T3-54acf8a5b9 | 24 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | — | violacao-pagina | sim | credita F3-07 | norma |
| T3-b50f0f80b9 | 49 | verdadeira | citada | obrigatorio | aplica | nao | F3-07 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-b62b794122 | 49 | verdadeira | citada | obrigatorio | aplica | nao | F3-07 | direta | valida | violacao-pagina | sim | credita F3-07 | norma |
| T3-c842e51e58 | 54 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | — | violacao-pagina | sim | credita F3-07 | norma |
| T3-ccfcd1b17c | 55 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | — | violacao-pagina | sim | credita F3-07 | norma |
| T3-f031986934 | 65 | verdadeira | citada | obrigatorio | aplica | sim | F3-07 | direta | — | violacao-pagina | sim | credita F3-07 | norma |

Textos observados (conferência do agrupamento):
- T3-26ef136864: O último item do breadcrumb ("Processos", página atual) é link (href="portal-mpa/processos"), sem aria-current.
- T3-31907b3e84: O último item do breadcrumb, "Processos", é um link (href="portal-mpa/processos", relativo, que resolve para /pnip-f3/portal-mpa/portal-mpa/
- T3-54acf8a5b9: O último item do breadcrumb ("Processos") é um link (<a href="portal-mpa/processos">); não há item da página atual como texto não interativo
- T3-b50f0f80b9: O último item do breadcrumb ('Processos', página atual) é um link (href='portal-mpa/processos') sem aria-current.
- T3-b62b794122: Último item do breadcrumb "Processos" é um link (<a href="portal-mpa/processos">) para a própria página.
- T3-c842e51e58: O último item do breadcrumb, "Processos" (página atual), é um link <a href="portal-mpa/processos">, sem aria-current; não há item de página 
- T3-ccfcd1b17c: O último item do breadcrumb ("Processos", página atual) é link (<a href="portal-mpa/processos">).
- T3-f031986934: O último item da trilha, "Processos", é um link (<a href="portal-mpa/processos">) para a própria página, em vez de texto da página atual.

### LN-7f92f549 · 4 membros · lotes lote-04, lote-46, lote-48, lote-51 · → adjudicação

Regra `wcag:1.3.1` × componente <br-breadcrumb>

Divergem: norma.aplicabilidade, vinculo, vinculo.relacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0b4e5c3ad9 | 04 | verdadeira | citada | obrigatorio | nao-aplica | nao | F3-07 | host-interno | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-a9c062a07d | 46 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-b02efc824a | 48 | verdadeira | citada | obrigatorio | nao-aplica | nao | F3-07 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-bd150f2f57 | 51 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0b4e5c3ad9: Item atual "Processos" é link comum (href="portal-mpa/processos") sem aria-current="page".
- T3-a9c062a07d: A trilha é <div class="br-breadcrumb"><ul class="crumb-list">, sem <nav> nem role=navigation/aria-label.
- T3-b02efc824a: Na lista, o último item do breadcrumb ("Processos", a página atual) é um link (href "portal-mpa/processos") sem aria-current. No detalhe, o 
- T3-bd150f2f57: Breadcrumb renderizado como <div class="br-breadcrumb"><ul> sem <nav> nem aria-label.

### LN-8aac65f4 · 45 membros · lotes lote-02, lote-05, lote-06, lote-08, lote-09, lote-12, lote-13, lote-20, lote-21, lote-23, lote-24, lote-25, lote-26, lote-28, lote-29, lote-31, lote-33, lote-37, lote-40, lote-44, lote-45, lote-46, lote-47, lote-50, lote-51, lote-52, lote-53, lote-54, lote-57, lote-58, lote-59, lote-60, lote-61, lote-69 · **muda crédito** · → adjudicação

Regra `axe:page-has-heading-one` × não resolvido

Divergem: norma.aplicabilidade, norma.violada, vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-06d588e2f2 | 02 | verdadeira | citada | boa-pratica | nao-aplica | nao | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-0ef8552120 | 05 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-136f8821d6 | 06 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-1a4663a8c7 | 08 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-1cd84c08e4 | 09 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-2800574664 | 12 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-2a03bd817a | 13 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-46557c9bd9 | 20 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-48fd0ba5d0 | 20 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-4c56f54a6d | 21 | verdadeira | citada | boa-pratica | nao-aplica | nao | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-518c8b3822 | 23 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-54c38c8b79 | 24 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-551488ff7d | 24 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-58bb1ca5a3 | 25 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-5ee7b59674 | 26 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-66cbb1366d | 28 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-6a40c2093c | 29 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-6a7b3af6ee | 29 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-6ad0afa4e4 | 29 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-7228b73603 | 31 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-790533057a | 33 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-79c9c3c4aa | 33 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-865ec76c76 | 37 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-91429b2dc3 | 40 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-93844b34e0 | 40 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-a28db904f7 | 44 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-a53789b415 | 45 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-aa77e6a850 | 46 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-ab2b191800 | 46 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-ade38703ed | 47 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-aef5e71e3f | 47 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-bade6fb576 | 50 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-bb1467e94d | 51 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-c2cb536721 | 52 | verdadeira | citada | boa-pratica | nao-aplica | nao | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-c5b71e48c9 | 53 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-c7de573598 | 54 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-c8128d8e1e | 54 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-d1ddbd2761 | 57 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-d423bbb3f8 | 57 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-d85eca83e7 | 58 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-dafecd0ed8 | 59 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-dc42e1c3d2 | 59 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-de660d4e38 | 60 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-e29404b6ec | 61 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-fd933617bf | 69 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-06d588e2f2: Page should contain a level-one heading
- T3-0ef8552120: Page should contain a level-one heading
- T3-136f8821d6: Page should contain a level-one heading
- T3-1a4663a8c7: Page should contain a level-one heading
- T3-1cd84c08e4: Page should contain a level-one heading
- T3-2800574664: Page should contain a level-one heading
- T3-2a03bd817a: Page should contain a level-one heading
- T3-46557c9bd9: Page should contain a level-one heading
- T3-48fd0ba5d0: Page should contain a level-one heading
- T3-4c56f54a6d: Page should contain a level-one heading
- T3-518c8b3822: Page should contain a level-one heading
- T3-54c38c8b79: Page should contain a level-one heading
- T3-551488ff7d: Page should contain a level-one heading
- T3-58bb1ca5a3: Page should contain a level-one heading
- T3-5ee7b59674: Page should contain a level-one heading
- T3-66cbb1366d: Page should contain a level-one heading
- T3-6a40c2093c: Page should contain a level-one heading
- T3-6a7b3af6ee: Page should contain a level-one heading
- T3-6ad0afa4e4: Page should contain a level-one heading
- T3-7228b73603: Page should contain a level-one heading
- T3-790533057a: Page should contain a level-one heading
- T3-79c9c3c4aa: Page should contain a level-one heading
- T3-865ec76c76: Page should contain a level-one heading
- T3-91429b2dc3: Page should contain a level-one heading
- T3-93844b34e0: Page should contain a level-one heading
- T3-a28db904f7: Page should contain a level-one heading
- T3-a53789b415: Page should contain a level-one heading
- T3-aa77e6a850: Page should contain a level-one heading
- T3-ab2b191800: Page should contain a level-one heading
- T3-ade38703ed: Page should contain a level-one heading
- T3-aef5e71e3f: Page should contain a level-one heading
- T3-bade6fb576: Page should contain a level-one heading
- T3-bb1467e94d: Page should contain a level-one heading
- T3-c2cb536721: Page should contain a level-one heading
- T3-c5b71e48c9: Page should contain a level-one heading
- T3-c7de573598: Page should contain a level-one heading
- T3-c8128d8e1e: Page should contain a level-one heading
- T3-d1ddbd2761: Page should contain a level-one heading
- T3-d423bbb3f8: Page should contain a level-one heading
- T3-d85eca83e7: Page should contain a level-one heading
- T3-dafecd0ed8: Page should contain a level-one heading
- T3-dc42e1c3d2: Page should contain a level-one heading
- T3-de660d4e38: Page should contain a level-one heading
- T3-e29404b6ec: Page should contain a level-one heading
- T3-fd933617bf: Page should contain a level-one heading

### LN-a1b5df89 · 23 membros · lotes lote-02, lote-03, lote-04, lote-10, lote-11, lote-14, lote-16, lote-21, lote-23, lote-24, lote-26, lote-38, lote-39, lote-45, lote-51, lote-52, lote-53, lote-58, lote-65, lote-68, lote-69 · → adjudicação

Regra `wcag:1.3.1` × a

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0608c82a11 | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-09bff9d081 | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0c7cc51182 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-200df6095c | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-247cbf4381 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-25ba6c5b66 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-317973f655 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-383a40c701 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4ad7501b96 | 21 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-537e06d7c3 | 23 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-57429decf9 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5e885b804d | 26 | verdadeira | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-8bb67ef63f | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-900bb201b2 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a8d8ea6c14 | 45 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bc6a68794d | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bcbbb59d54 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c24a82f042 | 52 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c432793a1a | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d5d5de6ca6 | 58 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f0d07e98e3 | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fb3e260341 | 68 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ffd1bde6ed | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0608c82a11: A página atual é indicada só pela classe visual "active"; o link não tem aria-current e tem href="javascript:void(0)"
- T3-09bff9d081: A página atual na paginação ("1", classe active) não tem aria-current; o link usa href="javascript:void(0)".
- T3-0c7cc51182: A página atual só é indicada pela classe "active" (destaque visual); o link não tem aria-current="page".
- T3-200df6095c: A página atual só é indicada pela classe "active". O link não tem aria-current="page"; no s13 a página 2 ativa também não tem.
- T3-247cbf4381: Página atual da paginação indicada só pela classe "active"; sem aria-current="page"
- T3-25ba6c5b66: Página atual indicada só pela classe 'active'; sem aria-current; link com href='javascript:void(0)'
- T3-317973f655: A página atual é indicada só pela classe "active" (estilo visual); o link não tem aria-current="page" e usa href="javascript:void(0)".
- T3-383a40c701: A página atual só é indicada pela classe "active"; o link "1" (href="javascript:void(0)") não tem aria-current="page" nem rótulo do tipo "Pá
- T3-4ad7501b96: A página atual só é indicada pela classe "active"; o link não tem aria-current="page" (e todos os números usam href="javascript:void(0)").
- T3-537e06d7c3: A página atual é indicada só pela classe 'active' (círculo azul). O link não tem aria-current='page' e usa href='javascript:void(0)'.
- T3-57429decf9: Página atual indicada só pela classe active (círculo preenchido); o link não tem aria-current
- T3-5e885b804d: Página atual da paginação indicada só pela classe "active"; sem aria-current (medido também na página 2).
- T3-8bb67ef63f: A página atual só é indicada pela classe visual "active"; o link não tem aria-current="page" e tem href="javascript:void(0)".
- T3-900bb201b2: A página atual só é indicada pela classe 'active'. O link tem href='javascript:void(0)' e não tem aria-current.
- T3-a8d8ea6c14: Página atual da paginação indicada só pela classe "active" (estilo visual); link sem aria-current
- T3-bc6a68794d: A página atual ("1") só é indicada pela classe active (estilo); sem aria-current; href="javascript:void(0)"
- T3-bcbbb59d54: A página atual é indicada só pela classe "active" e pelo fundo; o link não tem aria-current="page".
- T3-c24a82f042: A página atual só é indicada pela classe 'active'; o link não tem aria-current (medido nas páginas 1 e 2).
- T3-c432793a1a: A página atual é indicada só pela classe "active" (fundo azul); sem aria-current.
- T3-d5d5de6ca6: Página atual indicada só pela classe visual "active"; link "1" sem aria-current e com href="javascript:void(0)"
- T3-f0d07e98e3: O link da página atual ("1", href="javascript:void(0)") só é marcado pela classe active; não tem aria-current="page".
- T3-fb3e260341: A página atual na paginação só é indicada pela classe 'active' (destaque visual); o link não tem aria-current.
- T3-ffd1bde6ed: A página atual só é indicada pela classe "active" (estilo visual); o link não tem aria-current="page".

### LN-d1ebc4a2 · 3 membros · lotes lote-10, lote-51, lote-59 · → adjudicação

Regra `wcag:2.4.3` × campo de formulário

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-20776debc5 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-be51d50b0c | 51 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-d998625866 | 59 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-20776debc5: No seletor "Exibir", escolher uma opção pelo teclado (ArrowDown, ArrowDown, Enter) fecha a lista e manda o foco para <body>.
- T3-be51d50b0c: Ao confirmar uma opção do seletor "Exibir" com Enter, a lista fecha e o foco vai para o body.
- T3-d998625866: Abrindo a lista "Exibir" com seta para baixo (foco vai à opção) e fechando com Esc, o foco vai para body em vez de voltar ao campo.

### LN-daaa7430 · 36 membros · lotes lote-12, lote-20, lote-22, lote-23, lote-24, lote-25, lote-27, lote-31, lote-32, lote-34, lote-35, lote-37, lote-38, lote-39, lote-43, lote-45, lote-47, lote-50, lote-52, lote-56, lote-60, lote-65, lote-66, lote-68 · **muda crédito** · → adjudicação

Regra `wcag:1.3.1` × th

Divergem: norma.aplicabilidade, norma.violada, vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-26a6e4ca5d | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-270a54cad9 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-28a77ba19f | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |
| T3-4732c8c538 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-48565df6ae | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4f1b16b85c | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4ff9039f5a | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-519e4bd6e2 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |
| T3-52d00dd474 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |
| T3-5702a0f01d | 24 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |
| T3-5a8727b10b | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6302c7b90d | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |
| T3-6f8c30ac99 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-732807df12 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7b51466f7e | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7cbdf4e0d6 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7d9cfd8b73 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7e70e4a18c | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |
| T3-86aac6b429 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8bea7f274f | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |
| T3-8facc273a8 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8fbc9f6697 | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |
| T3-a05f260060 | 43 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-a61abfd61f | 45 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |
| T3-ad81b2b9ff | 47 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-aebe9773b8 | 47 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |
| T3-af30470fde | 47 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b818dba132 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |
| T3-c1d82bf216 | 52 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d194e9e43b | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-df85aec4be | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dfdd3adf2b | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ef84d286f8 | 65 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |
| T3-f47476e941 | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f7bae6756d | 68 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f8375e60bd | 68 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | norma |

Textos observados (conferência do agrupamento):
- T3-26a6e4ca5d: A coluna 'Aberto há' mostra ordenação ativa (ícone sort-down; sort-up depois do clique), mas o th não tem aria-sort.
- T3-270a54cad9: Coluna 'Aberto há' mostra ícone de ordenação decrescente (sort-down, aria-hidden) mas o th não tem aria-sort
- T3-28a77ba19f: Cabeçalhos de coluna sem texto: a coluna de seleção (só contém o checkbox) e a coluna de ações (vazia).
- T3-4732c8c538: A coluna "Aberto há" mostra ícone sort-down indicando a ordenação, mas o th não tem aria-sort.
- T3-48565df6ae: A coluna 'Aberto há' mostra ícone sort-down indicando a ordenação, mas o th não tem aria-sort; o ícone não tem texto alternativo.
- T3-4f1b16b85c: O cabeçalho ordenável "Aberto há" não tem aria-sort, nem antes nem depois de alternar a ordenação.
- T3-4ff9039f5a: A coluna "Aberto há" mostra ícone sort-down (ordenação), mas o th não tem aria-sort; o clique não muda a ordem.
- T3-519e4bd6e2: Cabeçalho da coluna de ações (Ver processo/Desassociar/Assinar) é um th vazio; o mesmo ocorre nas abas Aguardando análise (th 6) e Concluído
- T3-52d00dd474: Cabeçalhos de coluna sem texto: a coluna de seleção (só o checkbox) e a coluna de ações (th vazio).
- T3-5702a0f01d: Cabeçalhos de coluna sem texto: coluna de seleção (só checkbox sem rótulo) e coluna de ações (vazia).
- T3-5a8727b10b: A coluna "Aberto há" mostra o ícone de ordenação (sort-down/sort-up), mas o th não tem aria-sort; a direção de ordenação só é transmitida vi
- T3-6302c7b90d: Cabeçalho da coluna de ações (th scope=col) vazio
- T3-6f8c30ac99: Cabeçalho "Aberto há" mostra ícone de ordenação (sort-down) mas o th não tem aria-sort; a ordenação só é transmitida visualmente
- T3-732807df12: Cabeçalho "Aberto há" mostra ícone de ordenação sort-down, mas não tem aria-sort; clicar no cabeçalho não muda a ordem
- T3-7b51466f7e: A coluna "Aberto há" é ordenável (ícone sort-down/sort-up), mas o th não tem aria-sort; a direção só aparece no ícone
- T3-7cbdf4e0d6: A coluna "Aberto há" (e "Data/Hora" em Concluídos) mostra o ícone sort-down indicando ordenação, mas o th não tem aria-sort; o ícone é aria-
- T3-7d9cfd8b73: Cabeçalho "Aberto há" exibe ícone de ordenação (sort-down) indicando a ordenação da coluna, mas o th não tem aria-sort e o ícone é aria-hidd
- T3-7e70e4a18c: Dois cabeçalhos de coluna sem texto: o da coluna de seleção (só a caixa) e o da coluna de ações.
- T3-86aac6b429: A coluna "Aberto há" mostra ícone sort-down indicando ordenação, mas o th não tem aria-sort; o ícone (br-icon-base) não tem texto alternativ
- T3-8bea7f274f: O cabeçalho da coluna de ações (Ver processo/Desassociar/Assinar) é um th vazio, sem texto
- T3-8facc273a8: A coluna "Aberto há" mostra o ícone sort-down (ordenação visual), mas o <th> não tem aria-sort; clicar no th ou no ícone não muda a ordem.
- T3-8fbc9f6697: Cabeçalhos de coluna sem texto: a coluna da seleção (só checkbox sem nome) e a coluna de ações (th vazio). Na aba Concluídos a coluna de açõ
- T3-a05f260060: Na tela de detalhe CAOL, cabeçalho de tabela (6ª coluna) sem texto.
- T3-a61abfd61f: O 2º cabeçalho (só um checkbox sem nome) e o 9º (coluna de ações) não têm texto acessível ([ferramenta citada] empty-table-header).
- T3-ad81b2b9ff: Na aba Concluídos, o cabeçalho da coluna de ações (último th) está vazio.
- T3-aebe9773b8: Dois cabeçalhos de coluna sem texto: o da coluna de seleção (contém só um checkbox) e o da coluna de ações (vazio).
- T3-af30470fde: A coluna "Aberto há" indica a ordenação só com o ícone visual (sort-down); o th não tem aria-sort.
- T3-b818dba132: O cabeçalho da coluna de ações (Ver processo, Desassociar, Assinar) é um th vazio ([ferramenta citada] empty-table-header), também em "Concl
- T3-c1d82bf216: O cabeçalho 'Aberto há' mostra o ícone sort-down (ordem decrescente), mas o th não tem aria-sort; a ordenação só é comunicada visualmente.
- T3-d194e9e43b: Coluna "Aberto há" mostra ícone sort-down (ordenação) apenas visual; th sem aria-sort.
- T3-df85aec4be: Cabeçalho "Aberto há" mostra seta de ordenação (sort-down) mas não tem aria-sort; a ordenação só é comunicada visualmente.
- T3-dfdd3adf2b: Coluna "Aberto há" ordenada indicada só pelo ícone; th sem aria-sort
- T3-ef84d286f8: O cabeçalho da coluna de ações (Ver processo/Desassociar/Assinar) é um th vazio, sem texto nem nome acessível.
- T3-f47476e941: O th "Aberto há" mostra a direção de ordenação só pelo ícone; não há aria-sort.
- T3-f7bae6756d: Cabeçalho 'Aberto há' exibe ícone de ordenação (sort-down) indicando a ordenação atual, mas não tem aria-sort.
- T3-f8375e60bd: Cabeçalhos de coluna da seleção e das ações sem texto acessível

### LN-fe02ed3e · 28 membros · lotes lote-05, lote-06, lote-10, lote-11, lote-15, lote-18, lote-19, lote-20, lote-21, lote-23, lote-32, lote-34, lote-36, lote-39, lote-56, lote-59, lote-60, lote-61, lote-64, lote-67, lote-69 · → adjudicação

Regra `wcag:2.4.3` × componente <br-button>

Divergem: fato, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0f2be08860 | 05 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-127509ac8c | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-21c86863b9 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-25c16a0042 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-347bac1076 | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3d29786a5e | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-435beab06a | 19 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4700771edb | 20 | indisponivel | citada | obrigatorio | aplica | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-47586da855 | 20 | indisponivel | citada | obrigatorio | aplica | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-4cbadf9778 | 21 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-52c246a9b5 | 23 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-53f99a11f6 | 23 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7449a9863f | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7588170532 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7a802255f7 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7c93c0f3cb | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-847d6a722d | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8fb1e64820 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d071831aba | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d9d7dc49b5 | 59 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dad1375ae6 | 59 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dcb21e5dd2 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-df0527b471 | 60 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-e2258325f4 | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ee82e905ba | 64 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f6eb286237 | 67 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f795227fcb | 67 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fe33fbd9ef | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0f2be08860: Com foco no botão "Desassociar processo do analista responsável", Enter abre o diálogo; ao fechá-lo com Esc o foco vai para <body> em vez de
- T3-127509ac8c: Acionados pelo teclado (Enter), os diálogos de Desassociar (fechado com Esc) e de Assinar (fechado pelo botão ×) devolvem o foco ao body, e 
- T3-21c86863b9: Após abrir o diálogo de assinatura com Enter no botão Assinar e fechá-lo com Enter no botão fechar, document.activeElement = body: o foco nã
- T3-25c16a0042: Ao fechar com Escape o diálogo de confirmação aberto pelo teclado a partir de "Confirmar", o foco vai para o body, e não para o botão que ab
- T3-347bac1076: Ao abrir o diálogo de desassociação pelo teclado e fechá-lo com Esc, o foco vai para o body, não volta ao botão que o abriu.
- T3-3d29786a5e: Ao fechar os diálogos de 'Assinar' (botão fechar) e 'Desassociar' (Esc), o foco vai para o body, não volta ao botão que abriu o diálogo
- T3-435beab06a: Ao fechar os diálogos abertos por esses botões (Desassociar: Enter e depois Esc; Assinar: botão fechar; Confirmar em lote: Cancelar) o foco 
- T3-4700771edb: Quando o diálogo aberto por "Assinar" (Escape) ou por "Desassociar" (botão "Não") é fechado, o foco vai para o body em vez de voltar ao botã
- T3-47586da855: Depois de abrir o modal de assinatura pelo teclado (foco no botão "Assinar", Enter) e fechá-lo pelo botão de fechar (Enter), o foco vai para
- T3-4cbadf9778: Depois de ativar "Limpar filtros", o botão fica desabilitado e o foco vai para o body.
- T3-52c246a9b5: Depois de clicar em 'Limpar filtros', o botão fica disabled e o foco vai para o <body>.
- T3-53f99a11f6: Abrindo o diálogo "Assinar" pelo teclado (Enter) e fechando-o, o foco vai para o body em vez de voltar ao botão "Assinar"; o mesmo aconteceu
- T3-7449a9863f: Os diálogos foram abertos pelo teclado a partir do botão 'Assinar' (fechado com Escape) e do botão 'Desassociar' (fechado com 'Não'). Ao fec
- T3-7588170532: Depois de fechar o diálogo de desassociar com Escape, o foco vai para <body> em vez de voltar ao botão "Desassociar" que o abriu.
- T3-7a802255f7: Ao fechar com Escape os diálogos abertos por 'Desassociar processo do analista responsável' (linha 1) e 'Assinar' (linha 2), o foco vai para
- T3-7c93c0f3cb: Abrindo o diálogo "Desassociar" pelo teclado e fechando com Escape, o foco vai para o body em vez de voltar ao botão que o abriu.
- T3-847d6a722d: Ao fechar o diálogo de desassociação com Escape, o foco vai para <body>, não volta ao botão que o abriu
- T3-8fb1e64820: Ao fechar com Escape o diálogo 'Confirma a assinatura de 6 processo(s)?' aberto pelo botão 'Confirmar', o foco vai para o <body>, não volta 
- T3-d071831aba: Com o foco no botão 'Ver processo' da primeira linha, a atualização automática substituiu as linhas e o foco foi para o <body> (medido aos 2
- T3-d9d7dc49b5: A tabela é renderizada de novo automaticamente a cada minuto (164 mutações às 09:31:00 e 09:32:00, relógio da página); o botão focado é remo
- T3-dad1375ae6: Após abrir o diálogo pelo teclado (foco no botão Desassociar + Enter) e fechá-lo com Escape, o foco vai para BODY em vez de voltar ao botão;
- T3-dcb21e5dd2: Com o foco no botão Desassociar, ao abrir o diálogo e fechá-lo com Escape, o foco foi para o BODY, não voltou ao botão que o abriu.
- T3-df0527b471: Depois de acionar "Limpar filtros", o botão fica desabilitado e o foco vai para o body (document.activeElement = BODY).
- T3-e2258325f4: Ao fechar o diálogo de confirmação com Esc, o foco vai para <body>, não volta ao botão que o abriu. O mesmo acontece ao cancelar o diálogo a
- T3-ee82e905ba: Abrindo o diálogo pelo teclado (Enter no botão Desassociar) e fechando com Esc, o foco vai para body. O mesmo ocorre com o diálogo do botão 
- T3-f6eb286237: Ao abrir o diálogo de assinatura em lote pelo botão 'Confirmar' (teclado) e fechá-lo com Esc, o foco vai para o body.
- T3-f795227fcb: Depois de abrir pelo teclado (Enter) o diálogo de "Assinar" ou de "Desassociar" e fechá-lo (botão fechar com Enter ou Escape), o foco vai pa
- T3-fe33fbd9ef: Depois de abrir o diálogo pelo teclado (Enter no botão) e fechá-lo com Escape, o foco vai para <body> e não volta ao botão. O mesmo ocorreu 

### LN-063d544c · 114 membros · lotes lote-01, lote-03, lote-04, lote-07, lote-08, lote-09, lote-10, lote-11, lote-13, lote-14, lote-15, lote-17, lote-18, lote-19, lote-21, lote-22, lote-23, lote-24, lote-25, lote-27, lote-28, lote-30, lote-31, lote-32, lote-34, lote-35, lote-36, lote-37, lote-38, lote-39, lote-40, lote-42, lote-43, lote-44, lote-45, lote-46, lote-48, lote-49, lote-50, lote-52, lote-53, lote-54, lote-55, lote-56, lote-58, lote-59, lote-60, lote-61, lote-62, lote-63, lote-64, lote-65, lote-67, lote-68, lote-69 · **muda crédito**

Regra `govbr-3.7.0-development-global-137c50bea6ca` × botão com texto

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0098368c77 | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-01037fe08d | 01 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-021a5aa8bb | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-07f1912b38 | 03 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-094fe832f8 | 03 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-09594ebda8 | 03 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-0a787a3339 | 04 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-0c737ca52c | 04 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-0d3f2ae996 | 04 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-140859877d | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-163633bdc1 | 07 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-17252a7adc | 07 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-18dab58b3c | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-19254a4c18 | 08 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-1c1718bc84 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1e83aa27d3 | 09 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-1f469c203a | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2221624bf1 | 10 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-23552f4875 | 11 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-2ba53fab3e | 13 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-2f7dcbd3dd | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2fe4c3affa | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3084a1c135 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3429f54553 | 15 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-3b5b6535a8 | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3d7883ab9a | 18 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-3d9079f8e9 | 18 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-3dd528787c | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4032d2b49a | 19 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-41793141ad | 19 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-42a5790cf0 | 19 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4a21da0d21 | 21 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-4c8ec8d155 | 21 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-4d753acef8 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4da256b0ac | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4fa75f3d76 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5010dd0324 | 22 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-5095bdadb2 | 22 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-50cb3f6db3 | 23 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5368b1c275 | 23 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-566be5ff0d | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5962f8f29f | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5b533210b4 | 25 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-61d3370759 | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-62d70728ff | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6404bc5836 | 28 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-6428b46d31 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-67fc2d2506 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6cda133323 | 30 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-6e357249c3 | 30 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6e52886ea8 | 30 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-71d1727216 | 31 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-71fdc81fdf | 31 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-7537b7bab5 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7dda20ea89 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7f634880ee | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-82f21e69d0 | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-83fcf59258 | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-860f6e7acb | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-871cfe9006 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-88971f6b60 | 38 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-8a1d58f083 | 38 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-8a1d7f19c0 | 38 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-8ca59387ee | 39 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-90c0d013d9 | 39 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-93bf264d43 | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9c406195a8 | 42 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9c5222ada8 | 43 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-9dbdf3598e | 43 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-9e48c326ce | 43 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-a1b0345756 | 44 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-a2870f19ac | 44 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a315df8617 | 44 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-a39d28c495 | 44 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a5837a8db2 | 45 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-aa25a19c8b | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ab59b1bdcc | 46 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-abd4b28d3a | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ac22642373 | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b1714777d0 | 48 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-b526f01082 | 49 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b8f41dd008 | 50 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-b9164c82bc | 50 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c02b94c2a4 | 52 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c2a0cca783 | 52 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-c4b2388c3c | 53 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-c68bf6e517 | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c8fe45a540 | 54 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c985e6d371 | 54 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cd7f310a29 | 55 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-ce66a8a8ac | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d0e4967f1c | 56 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-d5e238fa67 | 58 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d62365561f | 58 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d869d1d111 | 58 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dba6709397 | 59 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dfdd030a3e | 60 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-e023e9177f | 60 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-e13f3eb7a7 | 61 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-e2a17383f8 | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e4a8a9f052 | 62 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e5ea370be8 | 62 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-e6a2f80e74 | 62 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-e6e8f8bd90 | 62 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e76540be32 | 63 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-e8e8a817ea | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ebb19d2c9f | 64 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-ecf872d740 | 64 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-edf222dc72 | 64 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ee041545f9 | 64 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f1b1c7964f | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f4edabff69 | 67 | verdadeira | citada | obrigatorio | aplica | sim | F3-06 | direta | violacao-pagina | sim | credita F3-06 | norma |
| T3-fb15344068 | 68 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fb8c60f0f4 | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0098368c77: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-01037fe08d: border-radius: 7px fora da escala do DS
- T3-021a5aa8bb: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-07f1912b38: Botão "Página seguinte" com style="border-radius: 7px", fora da escala do DS.
- T3-094fe832f8: border-radius: 7px fora da escala do DS
- T3-09594ebda8: border-radius: 7px fora da escala do DS
- T3-0a787a3339: border-radius: 7px fora da escala do DS
- T3-0c737ca52c: border-radius: 7px fora da escala do DS
- T3-0d3f2ae996: border-radius: 7px fora da escala do DS
- T3-140859877d: Botão da busca com margin-top inline -38px (fora da escala de espaçamento) para sobrepor o campo.
- T3-163633bdc1: border-radius: 7px fora da escala do DS
- T3-17252a7adc: border-radius: 7px fora da escala do DS
- T3-18dab58b3c: Botão "Sair" do menu do avatar com border-radius 20px, fora da escala do DS.
- T3-19254a4c18: border-radius: 7px fora da escala do DS
- T3-1c1718bc84: Botão "Sair" com border-radius 20px, fora da escala de raios do DS.
- T3-1e83aa27d3: Botão "Página seguinte" com border-radius inline 7px, fora da escala do DS.
- T3-1f469c203a: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-2221624bf1: border-radius: 7px fora da escala do DS
- T3-23552f4875: O botão "Página seguinte" tem border-radius 7px inline, fora da escala de raios
- T3-2ba53fab3e: border-radius: 7px fora da escala do DS
- T3-2f7dcbd3dd: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-2fe4c3affa: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-3084a1c135: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-3429f54553: border-radius: 7px fora da escala do DS
- T3-3b5b6535a8: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-3d7883ab9a: border-radius: 7px fora da escala do DS
- T3-3d9079f8e9: border-radius: 7px fora da escala do DS
- T3-3dd528787c: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-4032d2b49a: border-radius: 7px fora da escala do DS
- T3-41793141ad: border-radius: 7px fora da escala do DS
- T3-42a5790cf0: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-4a21da0d21: border-radius: 7px fora da escala do DS
- T3-4c8ec8d155: border-radius: 7px fora da escala do DS
- T3-4d753acef8: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-4da256b0ac: Botão "Sair" com border-radius 20px, fora da escala do DS.
- T3-4fa75f3d76: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-5010dd0324: border-radius: 7px fora da escala do DS
- T3-5095bdadb2: Botão "Página seguinte" com border-radius inline 7px, fora da escala do DS.
- T3-50cb3f6db3: Botão Buscar posicionado com margin-top -38px inline, fora da escala de espaçamento.
- T3-5368b1c275: border-radius: 7px fora da escala do DS
- T3-566be5ff0d: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-5962f8f29f: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-5b533210b4: border-radius: 7px fora da escala do DS
- T3-61d3370759: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-62d70728ff: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-6404bc5836: Botão "Página seguinte" com border-radius inline de 7px, fora da escala do DS.
- T3-6428b46d31: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-67fc2d2506: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-6cda133323: border-radius: 7px fora da escala do DS
- T3-6e357249c3: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-6e52886ea8: border-radius: 7px fora da escala do DS
- T3-71d1727216: Na aba Concluídos (2 páginas), o botão "Página seguinte" também tem border-radius 7px inline.
- T3-71fdc81fdf: Botão circular "Página seguinte" com border-radius 7px inline (fora da escala e deixa de ser circular).
- T3-7537b7bab5: Botão Buscar com margin inline -38px 4px 0 0 (-38px fora da escala de espaçamento).
- T3-7dda20ea89: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-7f634880ee: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-82f21e69d0: O botão Buscar tem margin inline -38px 4px 0 0 (margin-top:-38px), fora da escala de espaçamento
- T3-83fcf59258: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-860f6e7acb: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-871cfe9006: Botão "Sair" com border-radius 20px, fora da escala do DS.
- T3-88971f6b60: border-radius: 7px fora da escala do DS
- T3-8a1d58f083: border-radius: 7px fora da escala do DS
- T3-8a1d7f19c0: border-radius: 7px fora da escala do DS
- T3-8ca59387ee: border-radius: 7px fora da escala do DS
- T3-90c0d013d9: Botão 'Página seguinte' (br-button circle) com border-radius inline 7px, fora da escala do DS.
- T3-93bf264d43: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-9c406195a8: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-9c5222ada8: border-radius: 7px fora da escala do DS
- T3-9dbdf3598e: border-radius: 7px fora da escala do DS
- T3-9e48c326ce: border-radius: 7px fora da escala do DS
- T3-a1b0345756: border-radius: 7px fora da escala do DS
- T3-a2870f19ac: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-a315df8617: Botão "Página seguinte" do tipo circular com border-radius inline 7px (fica quadrado arredondado)
- T3-a39d28c495: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-a5837a8db2: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-aa25a19c8b: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-ab59b1bdcc: O botão circular "Página seguinte" tem border-radius inline de 7px, fora da escala do DS.
- T3-abd4b28d3a: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-ac22642373: O botão "Sair" do menu do avatar tem border-radius 20px, fora da escala
- T3-b1714777d0: border-radius: 7px fora da escala do DS
- T3-b526f01082: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-b8f41dd008: border-radius: 7px fora da escala do DS
- T3-b9164c82bc: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-c02b94c2a4: Botão Buscar com margin -38px 4px 0 0 (-38px fora da escala de espaçamento).
- T3-c2a0cca783: border-radius: 7px fora da escala do DS
- T3-c4b2388c3c: border-radius: 7px fora da escala do DS
- T3-c68bf6e517: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-c8fe45a540: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-c985e6d371: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-cd7f310a29: border-radius: 7px fora da escala do DS
- T3-ce66a8a8ac: Botão "Buscar" posicionado com margin-top -38px (fora da escala de espaçamento).
- T3-d0e4967f1c: border-radius: 7px fora da escala do DS
- T3-d5e238fa67: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-d62365561f: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-d869d1d111: Botão de busca com margin -38px 4px 0 0 (-38px fora da escala de espaçamento).
- T3-dba6709397: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-dfdd030a3e: border-radius: 7px fora da escala do DS
- T3-e023e9177f: border-radius: 7px fora da escala do DS
- T3-e13f3eb7a7: border-radius: 7px fora da escala do DS
- T3-e2a17383f8: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-e4a8a9f052: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-e5ea370be8: border-radius: 7px fora da escala do DS
- T3-e6a2f80e74: border-radius: 7px fora da escala do DS
- T3-e6e8f8bd90: Botão 'Sair' com border-radius 20px, fora da escala do DS.
- T3-e76540be32: border-radius: 7px fora da escala do DS
- T3-e8e8a817ea: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-ebb19d2c9f: border-radius: 7px fora da escala do DS
- T3-ecf872d740: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-edf222dc72: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-ee041545f9: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-f1b1c7964f: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-f4edabff69: border-radius: 7px fora da escala do DS
- T3-fb15344068: O botão Buscar tem margin -38px 4px 0 0; -38px está fora da escala de espaçamento do DS.
- T3-fb8c60f0f4: margin: -38px 4px 0px 0px (fora da escala: -38px)

### LN-21702389 · 5 membros · lotes lote-01, lote-12, lote-36, lote-38, lote-48

Regra `axe:region` × div

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-01bbf21b04 | 01 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-27c85b8309 | 12 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-84075d0736 | 36 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-89b63a247a | 38 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-b1a388edfa | 48 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-01bbf21b04: Conteúdo do menu do avatar aberto fica fora de qualquer landmark (fora do banner)
- T3-27c85b8309: Conteúdo do menu do avatar fora de qualquer região (landmark); a área do avatar fica fora do banner.
- T3-84075d0736: Menu do usuário aberto fica fora de qualquer landmark
- T3-89b63a247a: O menu do usuário aberto fica fora de qualquer landmark (fora do banner e do main).
- T3-b1a388edfa: O conteúdo do menu do avatar aberto fica fora de qualquer região (landmark).

### LN-2313333d · 5 membros · lotes lote-01, lote-05, lote-37, lote-47, lote-61 · **muda crédito**

Regra `emag-6.2` × componente <br-input>

Divergem: vinculo, vinculo.relacao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-02fdcfe536 | 01 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-0dfba9c3de | 05 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-87b2b54506 | 37 | verdadeira | citada | recomendado | aplica | sim | D-05 | host-interno | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-acdc8575d3 | 47 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-e2dfed2fc4 | 61 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-02fdcfe536: Campo de busca da listagem sem rótulo: só placeholder "Pesquise aqui ..."; sem <label>, aria-label ou aria-labelledby (nome acessível vem do
- T3-0dfba9c3de: Campo de busca só tem placeholder "Pesquise aqui ..."; o input interno (#search) não tem label, aria-label nem aria-labelledby
- T3-87b2b54506: O campo de busca tem só placeholder "Pesquise aqui ..."; sem <label>, aria-label ou aria-labelledby; o host <br-input> não recebe label
- T3-acdc8575d3: Com o filtro "Últimos 7 dias" aplicado, o campo de busca continua só com placeholder como rótulo.
- T3-e2dfed2fc4: Campo de pesquisa com placeholder "Pesquise aqui ..." e nenhum rótulo (sem label, aria-label ou aria-labelledby).

### LN-26a9f37d · 54 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-08, lote-09, lote-11, lote-13, lote-16, lote-17, lote-19, lote-21, lote-23, lote-27, lote-29, lote-30, lote-31, lote-32, lote-33, lote-35, lote-36, lote-40, lote-41, lote-42, lote-43, lote-44, lote-48, lote-49, lote-51, lote-52, lote-54, lote-55, lote-59, lote-63, lote-64, lote-66, lote-67 · **muda crédito**

Regra `govbr-3.7.0-accessibility-global-538e57855252` × raiz

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-012af553ca | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-01e71f49e7 | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-03e842b51d | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-0541c13f2e | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-063ca09c06 | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-06438fae01 | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-08df9734be | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-0d5cb24132 | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-1a9dc157bf | 08 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-1bf8231961 | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-2529bb148e | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-2a2cba5f6b | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-355e23b434 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-3a0d6bbb1e | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-421877465d | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-4aa8ae01cf | 21 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-53b79c5796 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-53d7cf8f75 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-633afda0a2 | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-69294384b6 | 29 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-6e8b0eb7ed | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-706b51abf0 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-73aee4a308 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-744a0c69e9 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-77c4675f74 | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-791be8bd09 | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-7ede8cb4e4 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-7f0c868628 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-82551004ef | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-91ea594de1 | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-94674191a0 | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-98486dac33 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-996ffc67d0 | 42 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-9aa0431830 | 42 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-9ffe01b8ee | 43 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-a415aa5a1d | 44 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-b0a0e87c07 | 48 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-b47e47b55a | 49 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-b6295c8a5b | 49 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-bd5b096a91 | 51 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-c0cf9a8529 | 52 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-c86f32c128 | 54 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-c9f5835ec9 | 54 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-cb8bb1e0e4 | 55 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cd91b29f27 | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-da5c860703 | 59 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-dbb3dfb2cc | 59 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-e96f600aa4 | 63 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-ee0a425ea9 | 64 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-f21e304ea8 | 66 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-f22525dd0f | 66 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-f32cceecf6 | 66 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-f36bdac4aa | 66 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |
| T3-f67fb197f8 | 67 | verdadeira | citada | obrigatorio | aplica | sim | D-11 | ausencia-global | violacao-pagina | sim | credita D-11 | norma |

Textos observados (conferência do agrupamento):
- T3-012af553ca: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-01e71f49e7: Não há link de salto para o conteúdo; o primeiro link é "Home" (href="/portal-mpa/") e o primeiro foco vai para o botão Menu.
- T3-03e842b51d: Não há link de salto para o conteúdo; o primeiro link da página é o "Home" do breadcrumb (href="/portal-mpa/").
- T3-0541c13f2e: Não há link de salto para o conteúdo: o primeiro link é "Home" do breadcrumb (href /portal-mpa/), e a tabulação começa no botão Menu do cabe
- T3-063ca09c06: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-06438fae01: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-08df9734be: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-0d5cb24132: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-1a9dc157bf: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-1bf8231961: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-2529bb148e: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-2a2cba5f6b: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-355e23b434: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-3a0d6bbb1e: O primeiro link da página é "Home" (href="/portal-mpa/"); não há link de salto para o conteúdo; o primeiro elemento focável por Tab é o botã
- T3-421877465d: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-4aa8ae01cf: O detalhe "Solicitação de CAOL" não tem link de salto: o primeiro link é "Home" (href /portal-mpa).
- T3-53b79c5796: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-53d7cf8f75: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-633afda0a2: Não há link de salto para o conteúdo; o primeiro link da página é "Home" do breadcrumb (href="/portal-mpa/"), e a ordem de foco começa por M
- T3-69294384b6: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-6e8b0eb7ed: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-706b51abf0: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-73aee4a308: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-744a0c69e9: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-77c4675f74: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-791be8bd09: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-7ede8cb4e4: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-7f0c868628: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-82551004ef: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-91ea594de1: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-94674191a0: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-98486dac33: Não há link de salto para o conteúdo; o primeiro link da página é o 'Home' do breadcrumb (href='/portal-mpa/').
- T3-996ffc67d0: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-9aa0431830: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-9ffe01b8ee: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-a415aa5a1d: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-b0a0e87c07: Não há link para saltar ao conteúdo; o primeiro link é "Home" do breadcrumb (href="/portal-mpa/") e o primeiro foco é o botão Menu
- T3-b47e47b55a: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-b6295c8a5b: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-bd5b096a91: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-c0cf9a8529: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-c86f32c128: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-c9f5835ec9: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-cb8bb1e0e4: O detalhe "Alteração de Certificado" não tem link de salto: o primeiro link é "Home" (href /portal-mpa).
- T3-cd91b29f27: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-da5c860703: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-dbb3dfb2cc: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-e96f600aa4: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-ee0a425ea9: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-f21e304ea8: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-f22525dd0f: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-f32cceecf6: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-f36bdac4aa: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.
- T3-f67fb197f8: O primeiro link da página (href="/portal-mpa/", "Home") não é uma âncora interna.

### LN-4a8f3a80 · 7 membros · lotes lote-04, lote-18, lote-25, lote-28, lote-42, lote-56, lote-64

Regra `axe:aria-dialog-name` × não resolvido

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0c97d9b346 | 04 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-3f6dcec3b5 | 18 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-585a6265e0 | 25 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-640def98e5 | 28 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9abdb23ce4 | 42 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d013a6f361 | 56 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-ebf2a8e2a5 | 64 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0c97d9b346: Diálogo de assinatura (PDF + "Solicitar Revisão"/"Assinar com gov.br") com aria-labelledby para #swal2-title vazio e oculto; sem nome acessí
- T3-3f6dcec3b5: Diálogo de confirmação 'Desassociar' (role=dialog) com #swal2-title vazio e oculto: sem nome acessível
- T3-585a6265e0: Diálogo de 'Assinar' (role=dialog) aponta aria-labelledby para #swal2-title vazio e oculto: sem nome acessível
- T3-640def98e5: Diálogo de confirmação de "Desassociar" (role=dialog) sem nome: aria-labelledby aponta para #swal2-title vazio e oculto.
- T3-9abdb23ce4: Diálogo de confirmação "Tem certeza que deseja desassociar...?" com role=dialog e aria-labelledby apontando para #swal2-title vazio e oculto
- T3-d013a6f361: Diálogo de confirmação 'Tem certeza que deseja desassociar…' tem aria-labelledby apontando para h2#swal2-title vazio e oculto; sem nome aces
- T3-ebf2a8e2a5: Diálogo de "Assinar" (pré-visualização do PDF, botões "Solicitar Revisão"/"Assinar com gov.br") sem nome: título vazio e oculto.

### LN-58dcdcfe · 45 membros · lotes lote-01, lote-03, lote-05, lote-07, lote-08, lote-09, lote-11, lote-13, lote-15, lote-17, lote-19, lote-22, lote-25, lote-28, lote-30, lote-31, lote-32, lote-33, lote-34, lote-35, lote-36, lote-40, lote-42, lote-43, lote-48, lote-53, lote-56, lote-58, lote-62, lote-66, lote-68 · **muda crédito**

Regra `emag:6.2` × campo de formulário

Divergem: vinculo, sugestao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-01a2224278 | 01 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-07644258f7 | 03 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-07a5284767 | 03 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-0e81e65a1b | 05 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-15b6d05e3e | 07 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-173dce90b1 | 08 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-1891d1c426 | 08 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-1ad801b477 | 08 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-1d288ec4fc | 09 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-1e46fc267a | 09 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-23e4ab49cb | 11 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-2a45dfb123 | 13 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-3241ad2127 | 15 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-3aaa31f738 | 17 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-41ff0ed864 | 19 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-4f63a1d977 | 22 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-580be72a75 | 25 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-65f15ffd2f | 28 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-6cf813d21f | 30 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-7064a79459 | 31 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-75c037d430 | 32 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-783015d393 | 33 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-7da8cf9350 | 34 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-80008d339a | 35 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-809395896d | 35 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-80c6e187b3 | 36 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-843a92d4f8 | 36 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-84680ba216 | 36 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-95535b93ac | 40 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-9581cdc337 | 40 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-96238c9f00 | 40 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-98fb31709e | 42 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-99a5d7c566 | 42 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-a0442defc7 | 43 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-b00f1db52b | 48 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-b0ee222dc0 | 48 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-c6ba210813 | 53 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-c6faaf44ae | 53 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-cfa0fd4d98 | 56 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-d5c242099a | 58 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-e5a77bb6c8 | 62 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-e742c7727b | 62 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-f29473321b | 66 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-f3ca030231 | 66 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-fa73fbb68d | 68 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-01a2224278: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-07644258f7: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-07a5284767: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-0e81e65a1b: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-15b6d05e3e: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-173dce90b1: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-1891d1c426: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-1ad801b477: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-1d288ec4fc: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-1e46fc267a: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-23e4ab49cb: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-2a45dfb123: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-3241ad2127: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-3aaa31f738: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-41ff0ed864: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-4f63a1d977: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-580be72a75: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-65f15ffd2f: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-6cf813d21f: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-7064a79459: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-75c037d430: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-783015d393: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-7da8cf9350: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-80008d339a: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-809395896d: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-80c6e187b3: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-843a92d4f8: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-84680ba216: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-95535b93ac: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-9581cdc337: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-96238c9f00: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-98fb31709e: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-99a5d7c566: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-a0442defc7: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-b00f1db52b: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-b0ee222dc0: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-c6ba210813: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-c6faaf44ae: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-cfa0fd4d98: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-d5c242099a: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-e5a77bb6c8: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-e742c7727b: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-f29473321b: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-f3ca030231: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host
- T3-fa73fbb68d: Campo com placeholder "Pesquise aqui ..." e nenhum rótulo associado (sem <label> com texto, aria-labelledby com texto ou aria-label); o host

### LN-7e5c0c6c · 3 membros · lotes lote-11, lote-16, lote-29 · **muda crédito**

Regra `govbr-3.7.0-accessibility-global-88d6a1a5da75` × raiz

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-23fe593d00 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-38fb5b6f03 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-12 | ausencia-global | violacao-pagina | sim | credita D-12 | norma |
| T3-6977826c95 | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-23fe593d00: O detalhe "Alteração de Certificado" não tem h1: o título principal é h2.
- T3-38fb5b6f03: A listagem não tem h1: o título "Processos" é h2.
- T3-6977826c95: O detalhe "Solicitação de CAOL" não tem h1: o título principal é h2.

### LN-84b1ebf8 · 67 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05, lote-09, lote-10, lote-11, lote-12, lote-14, lote-17, lote-18, lote-19, lote-20, lote-22, lote-25, lote-26, lote-28, lote-30, lote-31, lote-33, lote-34, lote-35, lote-39, lote-40, lote-41, lote-42, lote-43, lote-44, lote-45, lote-48, lote-50, lote-51, lote-52, lote-55, lote-56, lote-57, lote-59, lote-61, lote-63 · **muda crédito**

Regra `wcag:1.4.3` × div

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0282e89283 | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0297f14c0a | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-039c12a851 | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-03ad579a58 | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-095ff63b03 | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-09de866806 | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-0c44b8ae60 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0db2609401 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-0e324a8d08 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-1056b2bc77 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-109cc487e4 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-1ede6ed7b6 | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-2154ce3554 | 10 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-2571b330c9 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-27fda93232 | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-2cfb07063a | 14 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3be3b468ec | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3c114f6ade | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3ed735c757 | 18 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3f2658a718 | 18 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3ff8ecd92b | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-426a3e18cf | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-457c9af0b3 | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-473d771a38 | 20 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-4d862aee79 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-58aa54b428 | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-5a9e9ddbd6 | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-5d0d104f24 | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-5e9466d0cb | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-645b96c15e | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-64b9e636ce | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-66357ed2e9 | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-6f2f8fbad4 | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-704f8c5679 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-71a2888f36 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-7222057ab2 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-72343f7c0d | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-777b4b41af | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-77d048ae62 | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-784f8458d2 | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-78d1413f4e | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-7b937dc16b | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-7c484ae1be | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-7eb753ba40 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-8e2425e39c | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-920ea04e56 | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-95ec07f4a7 | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9668091a48 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-993e56a27c | 42 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9e46ce0911 | 43 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a31b884514 | 44 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a7afebc566 | 45 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a8c58990b0 | 45 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-b0b1132742 | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b96fa78fe2 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-bb63cf7c50 | 51 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-c102a99e19 | 52 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-c1da83a1b9 | 52 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-cd4140f4a4 | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-cdaaefd89a | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d117000c93 | 56 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d3fa081f27 | 57 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d44f3bdcf5 | 57 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d992eaecf9 | 59 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e2308b7cf4 | 61 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-e263ddc638 | 61 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-e90624ce58 | 63 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |

Textos observados (conferência do agrupamento):
- T3-0282e89283: Detalhe CAOL: selo de status #ffffff sobre #888888, 14px: 3,54:1
- T3-0297f14c0a: Selos 'Em análise analista/supervisor/diretor': texto rgb(255,255,255) sobre rgb(230,111,14), 14px peso 500, contraste 3,16:1.
- T3-039c12a851: Selo "Aguarda complementos": #ffffff sobre #8289ff, 14px normal: 3,01:1
- T3-03ad579a58: Selos "Em análise analista/supervisor/diretor": texto branco sobre rgb(230,111,14), 14px peso 500, contraste 3,16:1.
- T3-095ff63b03: Etiquetas de status com texto branco 14px normal: sobre #e66f0e = 3,16:1 ("Em análise analista/supervisor/diretor", "Em revisão analista"), 
- T3-09de866806: Texto branco sobre cinza rgb(136,136,136) em 14px, peso 500 ("Aguardando plano de ação", "Aguardando SFPA"): contraste medido de 3,54:1.
- T3-0c44b8ae60: Detalhe 0033: selo de status #ffffff sobre #888888, 14px: 3,54:1
- T3-0db2609401: Selos "Aguardando SFPA" e "Aguardando plano de ação": texto branco sobre rgb(136,136,136), 14px, contraste de 3,54:1.
- T3-0e324a8d08: Selos "Aguardando plano de ação" e "Aguardando SFPA": texto branco sobre rgb(136,136,136), 14px, contraste 3,54:1.
- T3-1056b2bc77: Os rótulos de status "Em análise analista/supervisor/diretor" são texto branco sobre rgb(230,111,14), com contraste de 3,16:1 a 14px/500.
- T3-109cc487e4: Selo 'Aguarda complementos': texto rgb(255,255,255) sobre rgb(130,137,255), 14px peso 500, contraste 3,01:1.
- T3-1ede6ed7b6: O selo "Aguarda complementos" tem texto branco sobre rgb(130,137,255), 14px peso 500: contraste 3,01:1.
- T3-2154ce3554: Badges de status "Em análise analista/supervisor/diretor": texto #ffffff sobre #e66f0e, 14px normal, contraste 3,16:1 (5 instâncias)
- T3-2571b330c9: Selos "Aguardando plano de ação", "Aguardando SFPA" (e "Aguardando análise" na aba Aguardando análise): #ffffff sobre #888888, 14px = 3,54:1
- T3-27fda93232: Tags "Aguardando plano de ação"/"Aguardando SFPA": #ffffff sobre #888888, 14px normal: contraste 3,54:1
- T3-2cfb07063a: Selos 'Aguardando plano de ação' e 'Aguardando SFPA': texto rgb(255,255,255) sobre rgb(136,136,136), 14px peso 500, contraste 3,54:1.
- T3-3be3b468ec: Etiqueta "Aguarda complementos": texto #ffffff sobre #8289ff, 14px normal, contraste 3,01:1.
- T3-3c114f6ade: Status 'Aguardando plano de ação' e 'Aguardando SFPA' (e 'Aguardando análise' na aba correspondente): texto branco sobre rgb(136,136,136), 1
- T3-3ed735c757: Selos "Aguardando plano de ação" e "Aguardando SFPA": #ffffff sobre #888888, 14px normal: 3.54:1
- T3-3f2658a718: O rótulo de status "Aguarda complementos" é texto branco sobre rgb(130,137,255), com contraste de 3,01:1 a 14px/500.
- T3-3ff8ecd92b: Detalhe CAOL: badge de status com texto #ffffff sobre #888888, 14px, contraste 3,54:1
- T3-426a3e18cf: Texto branco #ffffff sobre #e66f0e nos selos de status ("Em análise analista/supervisor/diretor"), 14px normal: contraste 3,16:1
- T3-457c9af0b3: Selo "Aguarda complementos": #ffffff sobre #8289ff, 14px normal: 3.01:1
- T3-473d771a38: Etiqueta "Aguarda complementos": #ffffff sobre #8289ff, 14px: contraste 3,01:1.
- T3-4d862aee79: Na tela de detalhe CAOL, selo de status com #ffffff sobre #888888, 14px = 3,54:1.
- T3-58aa54b428: Status "Em análise analista/supervisor/diretor": texto #ffffff de 14px normal sobre #e66f0e = 3.16:1 (5 linhas)
- T3-5a9e9ddbd6: Status 'Em análise analista/supervisor/diretor': texto branco rgb(255,255,255) sobre rgb(230,111,14), 14px peso 500. Contraste de 3,16:1.
- T3-5d0d104f24: Selo "Aguarda complementos": #ffffff sobre #8289ff, 14px = 3,01:1.
- T3-5e9466d0cb: Texto dos selos de status (Em análise analista/supervisor/diretor) branco #ffffff sobre #e66f0e, 14px normal: contraste 3.16:1
- T3-645b96c15e: Texto das tags de status laranja (ex.: "Em análise analista", "Em análise supervisor") #ffffff sobre #e66f0e, 14px normal: contraste 3,16:1
- T3-64b9e636ce: Selo "Aguarda complementos": texto branco sobre rgb(130,137,255), 14px, contraste 3,01:1.
- T3-66357ed2e9: Texto branco sobre rgb(136,136,136), 14px, nos status "Aguardando plano de ação" e "Aguardando SFPA": contraste 3,54:1.
- T3-6f2f8fbad4: Etiquetas de status laranja ("Em análise analista/supervisor/diretor"): texto #ffffff sobre #e66f0e, 14px normal, contraste 3,16:1.
- T3-704f8c5679: Selos "Aguardando plano de ação" e "Aguardando SFPA": texto branco de 14px sobre rgb(136,136,136), contraste 3,54:1.
- T3-71a2888f36: Selo "Aguarda complementos": texto branco sobre rgb(130,137,255), 14px, contraste de 3,01:1.
- T3-7222057ab2: Selo "Aguarda complementos": #ffffff sobre #8289ff, 14px = 3,01:1
- T3-72343f7c0d: Os selos de status laranja ("Em análise analista", "Em análise supervisor", "Em análise diretor") têm texto branco rgb(255,255,255) sobre rg
- T3-777b4b41af: Status "Aguarda complementos": #ffffff sobre #8289ff, 14px normal, contraste 3,01:1.
- T3-77d048ae62: Etiquetas cinza ("Aguardando plano de ação", "Aguardando SFPA"): #ffffff sobre #888888, 14px: contraste 3,54:1.
- T3-784f8458d2: Status "Aguarda complementos": texto #ffffff de 14px sobre #8289ff = 3.01:1
- T3-78d1413f4e: Etiqueta de status laranja: texto #ffffff sobre #e66f0e, 14px normal: contraste 3,16:1 (5 ocorrências).
- T3-7b937dc16b: Selo "Aguarda complementos": texto branco de 14px sobre rgb(130,137,255), contraste 3,01:1.
- T3-7c484ae1be: Selos de status laranja ("Em análise analista", "Em análise supervisor" ×3, "Em análise diretor"): texto #ffffff sobre #e66f0e, 14px peso no
- T3-7eb753ba40: Status "Aguardando plano de ação"/"Aguardando SFPA": #ffffff sobre #888888, 14px normal, contraste 3,54:1.
- T3-8e2425e39c: Texto branco rgb(255,255,255) de 14px/500 sobre fundo rgb(230,111,14) nos selos de status "Em análise analista/supervisor/diretor": contrast
- T3-920ea04e56: Texto branco rgb(255,255,255) sobre rgb(230,111,14), 14px peso 500, nos status "Em análise analista/supervisor/diretor": contraste 3,16:1.
- T3-95ec07f4a7: Selos de status "Em análise analista/supervisor/diretor": texto #ffffff sobre #e66f0e, 14px normal = 3,16:1 (5 ocorrências)
- T3-9668091a48: Texto branco sobre rgb(130,137,255), 14px, no status "Aguarda complementos": contraste 3,01:1.
- T3-993e56a27c: Status "Aguardando plano de ação" e "Aguardando SFPA": texto #ffffff de 14px sobre #888888 = 3.54:1
- T3-9e46ce0911: Selos "Aguardando plano de ação" e "Aguardando SFPA": #ffffff sobre #888888, 14px = 3,54:1.
- T3-a31b884514: Selos "Aguardando plano de ação" e "Aguardando SFPA": #ffffff sobre #888888, 14px normal: 3,54:1
- T3-a7afebc566: Status 'Aguarda complementos': texto branco sobre rgb(130,137,255), 14px peso 500. Contraste de 3,01:1.
- T3-a8c58990b0: Tags de status cinza ("Aguardando plano de ação", "Aguardando SFPA"): #ffffff sobre #888888, 14px normal, contraste de 3,54:1.
- T3-b0b1132742: Na aba Aguardando análise (depois de voltar a ela), os 9 selos "Aguardando análise" são #ffffff sobre #888888, 14px: 3.54:1
- T3-b96fa78fe2: Texto branco sobre rgb(130,137,255) em 14px, peso 500 ("Aguarda complementos"): contraste medido de 3,01:1.
- T3-bb63cf7c50: Tag "Aguarda complementos": #ffffff sobre #8289ff, 14px normal: contraste 3,01:1
- T3-c102a99e19: Tag de status "Aguarda complementos": #ffffff sobre #8289ff, 14px normal, contraste de 3,01:1.
- T3-c1da83a1b9: Etiquetas "Aguardando plano de ação" e "Aguardando SFPA": texto #ffffff sobre #888888, 14px, contraste 3,54:1.
- T3-cd4140f4a4: Os selos "Aguardando plano de ação" e "Aguardando SFPA" têm texto branco sobre rgb(136,136,136), 14px peso 500: contraste 3,54:1.
- T3-cdaaefd89a: Selos de status laranja ("Em análise analista/supervisor/diretor"): texto branco sobre rgb(230,111,14), 14px peso 500, contraste de 3,16:1.
- T3-d117000c93: Texto das tags de status laranja ("Em análise analista", "Em análise supervisor", "Em revisão analista", "Em análise diretor"): #ffffff sobr
- T3-d3fa081f27: Texto branco (#FFFFFF) sobre laranja rgb(230,111,14) em 14px, peso 500 ("Em análise analista", "Em análise supervisor", "Em análise diretor"
- T3-d44f3bdcf5: Badges "Aguardando plano de ação" e "Aguardando SFPA": texto #ffffff sobre #888888, 14px, contraste 3,54:1
- T3-d992eaecf9: Na tela de detalhe União Europeia, selo de status #ffffff sobre #888888, 14px = 3,54:1.
- T3-e2308b7cf4: Os rótulos "Aguardando plano de ação" e "Aguardando SFPA" são texto branco sobre rgb(136,136,136), com contraste de 3,54:1 a 14px/500.
- T3-e263ddc638: Status "Em análise analista"/"Em análise supervisor": texto #ffffff sobre #e66f0e, 14px normal, contraste 3,16:1.
- T3-e90624ce58: Badge "Aguarda complementos": texto #ffffff sobre #8289ff, 14px normal, contraste 3,01:1

### LN-8a4e84ad · 195 membros · lotes lote-01, lote-02, lote-04, lote-06, lote-07, lote-08, lote-09, lote-11, lote-12, lote-13, lote-14, lote-15, lote-16, lote-17, lote-18, lote-19, lote-20, lote-21, lote-22, lote-23, lote-24, lote-25, lote-26, lote-27, lote-28, lote-29, lote-30, lote-31, lote-32, lote-34, lote-35, lote-36, lote-37, lote-38, lote-39, lote-40, lote-41, lote-43, lote-44, lote-45, lote-46, lote-47, lote-48, lote-49, lote-50, lote-51, lote-52, lote-53, lote-54, lote-55, lote-56, lote-57, lote-58, lote-59, lote-60, lote-61, lote-62, lote-63, lote-64, lote-65, lote-66, lote-67, lote-68, lote-69 · **muda crédito**

Regra `axe:label` × campo de formulário

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-00deec3c83 | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-039ebf6f24 | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-074af3413d | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0c58439962 | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-0ca5262e74 | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-0ca97c743f | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-0d013bd5ab | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-1337f46455 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-14b628b1ff | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-168e03c31b | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-188054b2d6 | 08 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-1a56cddb0d | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1b0208c726 | 08 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-1b45b26497 | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1c0d6f93ff | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1e63dbf4d2 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1f1e5d5e28 | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-2395db7db8 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2516475f16 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-25311cb54c | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-271208548b | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-274bdc990f | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2878363a5a | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-297e396832 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2aa3dd9b38 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-2ab76165d1 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-2bbe759297 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-2e8f40bc93 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2f3a89e2d6 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-317e649e93 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-31b737c225 | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-31d18babbb | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-32592668e0 | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-32d1d075b0 | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-33daf96a78 | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-35c83587a9 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-35e183f3e4 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-360b3859dd | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-36cf1ecb10 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-3730d2969a | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3756149e20 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3757c49e35 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-38f4bc516a | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-395e5ca6e3 | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-3c098d77d9 | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3c0a7d6b0f | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3dcb18668d | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3f79c4bac3 | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-41660ea583 | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-41f07e4e1a | 19 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-44bdc02e89 | 19 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-46def999af | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4755016925 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4b6e352d0b | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-4b7424720a | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-4dd5222233 | 22 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-4ef226f5d3 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-525a0b9cfd | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-533edc7882 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-54cbb8b4b8 | 24 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-5632edeb23 | 24 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-57ee8703cf | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-58d2b0d0fa | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-5a0b5eec76 | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5b393b5e7c | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-5dfe7ebe21 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5f7bac805c | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-5fc77a43a8 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6111448829 | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-627fed6eb9 | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-642b5fee47 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-69c706b7e1 | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6a934fa25c | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6bdb124295 | 29 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-6c129a1e50 | 29 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-6c2fe8a35c | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-6ca70920be | 30 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6dc5f660a3 | 30 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6fd06be7c2 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-72e9222c21 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-731941c78f | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-74bb7ab368 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-76598d3281 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7a9d1cda86 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-7a9fc281b1 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-7b7d12a371 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-7d0692dcb3 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-7d88b5d99c | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-7e0d7d04c0 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7e969b71a3 | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7f0d47532d | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-80c0239468 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-80e06be2f5 | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-81439eb9c3 | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-834d84c180 | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-83bb566752 | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-845fa922fe | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-849b8bfeab | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-84e91046ea | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-857e6ef418 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-85c7e7eaec | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-86359e42a2 | 37 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-86d3e537ec | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-86e3e1c37c | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-877307341d | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8b85db2999 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8bea4d8ad7 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8c259d8fc3 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8c7efb45c1 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8faf5a7b8e | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-90acf2d604 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-91263d3a96 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9315d23241 | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-95d920426e | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-982b2f399a | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-9e1a16bfbc | 43 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-9e548ad837 | 43 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9e60afa7f8 | 43 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a072806d4b | 43 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-a38ef00c03 | 44 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-a50aa31625 | 45 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a8b8f58717 | 45 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-a94ae2667d | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a9ea06337d | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-aaa5c16d49 | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-aeb38f2fe3 | 47 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-af6585af16 | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-afa7d9b90f | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b109c05515 | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b3ee138e04 | 49 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b7d35f6cfe | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-b8106976b0 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-b9514df693 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-b96454c060 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-b9f03ea411 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-bb10a44976 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bb6206b3ba | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bd7523360b | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bdd70817b7 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bef699a6b3 | 51 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-c0894a3a35 | 52 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-c2d18c92af | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c5fed53588 | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c8d09a9516 | 54 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c8da1edcb9 | 54 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-ca6228d7d3 | 54 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ca912c863c | 54 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-cb5605417f | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-ceb6382463 | 56 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-ceb9cefe73 | 56 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-cefb27f806 | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cff3d14de1 | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d110f582ff | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d40305181b | 57 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-d49302205f | 57 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d55247504d | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-d7f2597cea | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-db340fc95c | 59 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-dc0378942f | 59 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dc5633985b | 60 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-dc64fed6c6 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dd1fe2dc5f | 60 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-dd8de55b65 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-de07675af6 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-df06ef89b0 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-df612be027 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e04947679d | 61 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e199806ab2 | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e206675643 | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e20fb78095 | 61 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e2759d4f6e | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e4b39720d1 | 62 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e4f4095ace | 62 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e644085338 | 62 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e759ce9b06 | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e865db5866 | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ed1e654b59 | 64 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-eedce16f4f | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f13086bd39 | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f15034297f | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f2531e9c01 | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f28d10ac9a | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f2c3b9694c | 66 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f2c85a1871 | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f456ed1489 | 66 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f496e81476 | 67 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f4edd784c0 | 67 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f59acf752f | 67 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f670cab402 | 67 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f6f7c0ddf2 | 67 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f70fb31ce8 | 67 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-fad63fd55a | 68 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fb322c9a36 | 68 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fdc31ec2b8 | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fe193b965e | 69 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |

Textos observados (conferência do agrupamento):
- T3-00deec3c83: Form elements must have labels
- T3-039ebf6f24: Form elements must have labels
- T3-074af3413d: Form elements must have labels
- T3-0c58439962: Form elements must have labels
- T3-0ca5262e74: Form elements must have labels
- T3-0ca97c743f: Form elements must have labels
- T3-0d013bd5ab: Form elements must have labels
- T3-1337f46455: Form elements must have labels
- T3-14b628b1ff: Form elements must have labels
- T3-168e03c31b: Caixas de seleção da tabela (cabeçalho "selecionar todos" e linhas) sem rótulo, aria-label ou aria-labelledby; nome acessível vazio.
- T3-188054b2d6: Form elements must have labels
- T3-1a56cddb0d: Form elements must have labels
- T3-1b0208c726: Form elements must have labels
- T3-1b45b26497: Form elements must have labels
- T3-1c0d6f93ff: Form elements must have labels
- T3-1e63dbf4d2: Form elements must have labels
- T3-1f1e5d5e28: Form elements must have labels
- T3-2395db7db8: Form elements must have labels
- T3-2516475f16: Form elements must have labels
- T3-25311cb54c: Form elements must have labels
- T3-271208548b: Form elements must have labels
- T3-274bdc990f: Form elements must have labels
- T3-2878363a5a: Form elements must have labels
- T3-297e396832: Form elements must have labels
- T3-2aa3dd9b38: Form elements must have labels
- T3-2ab76165d1: Form elements must have labels
- T3-2bbe759297: Form elements must have labels
- T3-2e8f40bc93: Form elements must have labels
- T3-2f3a89e2d6: Form elements must have labels
- T3-317e649e93: Form elements must have labels
- T3-31b737c225: Form elements must have labels
- T3-31d18babbb: Form elements must have labels
- T3-32592668e0: Form elements must have labels
- T3-32d1d075b0: Form elements must have labels
- T3-33daf96a78: Form elements must have labels
- T3-35c83587a9: Form elements must have labels
- T3-35e183f3e4: Form elements must have labels
- T3-360b3859dd: Form elements must have labels
- T3-36cf1ecb10: Form elements must have labels
- T3-3730d2969a: Form elements must have labels
- T3-3756149e20: Form elements must have labels
- T3-3757c49e35: Form elements must have labels
- T3-38f4bc516a: Form elements must have labels
- T3-395e5ca6e3: Form elements must have labels
- T3-3c098d77d9: Form elements must have labels
- T3-3c0a7d6b0f: Form elements must have labels
- T3-3dcb18668d: Form elements must have labels
- T3-3f79c4bac3: Form elements must have labels
- T3-41660ea583: Form elements must have labels
- T3-41f07e4e1a: Form elements must have labels
- T3-44bdc02e89: Form elements must have labels
- T3-46def999af: Form elements must have labels
- T3-4755016925: Form elements must have labels
- T3-4b6e352d0b: Form elements must have labels
- T3-4b7424720a: Form elements must have labels
- T3-4dd5222233: Form elements must have labels
- T3-4ef226f5d3: Form elements must have labels
- T3-525a0b9cfd: Form elements must have labels
- T3-533edc7882: Form elements must have labels
- T3-54cbb8b4b8: Form elements must have labels
- T3-5632edeb23: Form elements must have labels
- T3-57ee8703cf: Form elements must have labels
- T3-58d2b0d0fa: Form elements must have labels
- T3-5a0b5eec76: Form elements must have labels
- T3-5b393b5e7c: Form elements must have labels
- T3-5dfe7ebe21: Form elements must have labels
- T3-5f7bac805c: Form elements must have labels
- T3-5fc77a43a8: Form elements must have labels
- T3-6111448829: Caixa 'selecionar todos' do cabeçalho e caixas de seleção das linhas sem label, aria-label, aria-labelledby nem title (nome acessível vazio)
- T3-627fed6eb9: Form elements must have labels
- T3-642b5fee47: Form elements must have labels
- T3-69c706b7e1: Form elements must have labels
- T3-6a934fa25c: Form elements must have labels
- T3-6bdb124295: Form elements must have labels
- T3-6c129a1e50: Form elements must have labels
- T3-6c2fe8a35c: Checkbox "selecionar todos" no cabeçalho e checkboxes de linha sem label, aria-label ou aria-labelledby (nome acessível vazio)
- T3-6ca70920be: Form elements must have labels
- T3-6dc5f660a3: Form elements must have labels
- T3-6fd06be7c2: Form elements must have labels
- T3-72e9222c21: Form elements must have labels
- T3-731941c78f: Form elements must have labels
- T3-74bb7ab368: Form elements must have labels
- T3-76598d3281: Form elements must have labels
- T3-7a9d1cda86: Form elements must have labels
- T3-7a9fc281b1: 7 checkboxes da tabela (seleção de todos no cabeçalho e de linha) sem label, aria-label nem aria-labelledby.
- T3-7b7d12a371: Form elements must have labels
- T3-7d0692dcb3: Form elements must have labels
- T3-7d88b5d99c: Caixa 'selecionar todos' no cabeçalho da tabela sem label, aria-label nem aria-labelledby; nome acessível vazio.
- T3-7e0d7d04c0: Form elements must have labels
- T3-7e969b71a3: Form elements must have labels
- T3-7f0d47532d: Form elements must have labels
- T3-80c0239468: Form elements must have labels
- T3-80e06be2f5: Form elements must have labels
- T3-81439eb9c3: Form elements must have labels
- T3-834d84c180: Form elements must have labels
- T3-83bb566752: Form elements must have labels
- T3-845fa922fe: Form elements must have labels
- T3-849b8bfeab: Form elements must have labels
- T3-84e91046ea: Form elements must have labels
- T3-857e6ef418: Form elements must have labels
- T3-85c7e7eaec: Form elements must have labels
- T3-86359e42a2: Form elements must have labels
- T3-86d3e537ec: Form elements must have labels
- T3-86e3e1c37c: Form elements must have labels
- T3-877307341d: Form elements must have labels
- T3-8b85db2999: Form elements must have labels
- T3-8bea4d8ad7: Form elements must have labels
- T3-8c259d8fc3: Form elements must have labels
- T3-8c7efb45c1: Form elements must have labels
- T3-8faf5a7b8e: Form elements must have labels
- T3-90acf2d604: Form elements must have labels
- T3-91263d3a96: Form elements must have labels
- T3-9315d23241: Form elements must have labels
- T3-95d920426e: Form elements must have labels
- T3-982b2f399a: Form elements must have labels
- T3-9e1a16bfbc: Form elements must have labels
- T3-9e548ad837: Form elements must have labels
- T3-9e60afa7f8: Form elements must have labels
- T3-a072806d4b: Form elements must have labels
- T3-a38ef00c03: Form elements must have labels
- T3-a50aa31625: Form elements must have labels
- T3-a8b8f58717: Form elements must have labels
- T3-a94ae2667d: Form elements must have labels
- T3-a9ea06337d: Form elements must have labels
- T3-aaa5c16d49: Form elements must have labels
- T3-aeb38f2fe3: Form elements must have labels
- T3-af6585af16: Form elements must have labels
- T3-afa7d9b90f: Form elements must have labels
- T3-b109c05515: Form elements must have labels
- T3-b3ee138e04: Form elements must have labels
- T3-b7d35f6cfe: Form elements must have labels
- T3-b8106976b0: Form elements must have labels
- T3-b9514df693: Form elements must have labels
- T3-b96454c060: Form elements must have labels
- T3-b9f03ea411: Form elements must have labels
- T3-bb10a44976: Form elements must have labels
- T3-bb6206b3ba: Form elements must have labels
- T3-bd7523360b: Form elements must have labels
- T3-bdd70817b7: Form elements must have labels
- T3-bef699a6b3: As 6 caixas de seleção das linhas não têm rótulo; nome acessível vazio.
- T3-c0894a3a35: Form elements must have labels
- T3-c2d18c92af: Form elements must have labels
- T3-c5fed53588: Form elements must have labels
- T3-c8d09a9516: Form elements must have labels
- T3-c8da1edcb9: Form elements must have labels
- T3-ca6228d7d3: Form elements must have labels
- T3-ca912c863c: Form elements must have labels
- T3-cb5605417f: Form elements must have labels
- T3-ceb6382463: Form elements must have labels
- T3-ceb9cefe73: Form elements must have labels
- T3-cefb27f806: Form elements must have labels
- T3-cff3d14de1: Form elements must have labels
- T3-d110f582ff: Form elements must have labels
- T3-d40305181b: Form elements must have labels
- T3-d49302205f: Form elements must have labels
- T3-d55247504d: Form elements must have labels
- T3-d7f2597cea: Form elements must have labels
- T3-db340fc95c: Form elements must have labels
- T3-dc0378942f: Form elements must have labels
- T3-dc5633985b: Form elements must have labels
- T3-dc64fed6c6: Form elements must have labels
- T3-dd1fe2dc5f: Form elements must have labels
- T3-dd8de55b65: Form elements must have labels
- T3-de07675af6: Form elements must have labels
- T3-df06ef89b0: Form elements must have labels
- T3-df612be027: Form elements must have labels
- T3-e04947679d: Form elements must have labels
- T3-e199806ab2: Form elements must have labels
- T3-e206675643: Form elements must have labels
- T3-e20fb78095: Form elements must have labels
- T3-e2759d4f6e: Form elements must have labels
- T3-e4b39720d1: Form elements must have labels
- T3-e4f4095ace: Form elements must have labels
- T3-e644085338: Form elements must have labels
- T3-e759ce9b06: Form elements must have labels
- T3-e865db5866: Form elements must have labels
- T3-ed1e654b59: Form elements must have labels
- T3-eedce16f4f: Form elements must have labels
- T3-f13086bd39: Form elements must have labels
- T3-f15034297f: Form elements must have labels
- T3-f2531e9c01: Form elements must have labels
- T3-f28d10ac9a: Form elements must have labels
- T3-f2c3b9694c: Form elements must have labels
- T3-f2c85a1871: Form elements must have labels
- T3-f456ed1489: Form elements must have labels
- T3-f496e81476: Form elements must have labels
- T3-f4edd784c0: Form elements must have labels
- T3-f59acf752f: Form elements must have labels
- T3-f670cab402: Form elements must have labels
- T3-f6f7c0ddf2: Form elements must have labels
- T3-f70fb31ce8: Form elements must have labels
- T3-fad63fd55a: Form elements must have labels
- T3-fb322c9a36: Form elements must have labels
- T3-fdc31ec2b8: Form elements must have labels
- T3-fe193b965e: Form elements must have labels

### LN-95b2cbc9 · 4 membros · lotes lote-10, lote-34, lote-50, lote-68

Regra `govbr-3.7.0-accessibility-global-f12b1bae5784` × botão com texto

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-213884776b | 10 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-7a80901bf1 | 34 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-b893975ba3 | 50 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-fa9930f744 | 68 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-213884776b: Botão 'Sair' tem atributo href='javascript:void(0)' e um <p> como filho, marcação que o HTML não admite em <button>.
- T3-7a80901bf1: Botão "Sair" tem atributo href="javascript:void(0)" (não permitido em button) e contém <p> (conteúdo de fluxo).
- T3-b893975ba3: Botão "Sair" tem atributo href="javascript:void(0)" e filho <p> (conteúdo de fluxo), inválidos em <button>
- T3-fa9930f744: O <button> "Sair" tem atributo href="javascript:void(0)" (inválido em button) e um <p> como filho (conteúdo de fluxo dentro de button).

### LN-9cc0b739 · 10 membros · lotes lote-05, lote-06, lote-18, lote-27, lote-39, lote-43, lote-50, lote-56, lote-62, lote-68 · **muda crédito**

Regra `govbr-3.7.0-accessibility-global-29bd6bf04fc5` × table

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0eeefcce95 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-131ce154f3 | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-3f229c749a | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6379618684 | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-8fc016b3a3 | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-9e63b16476 | 43 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-b98f23f12d | 50 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d0adf71e4b | 56 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-e5437b79a6 | 62 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |
| T3-f9aaaa5532 | 68 | verdadeira | citada | obrigatorio | aplica | sim | D-07 | direta | violacao-pagina | sim | credita D-07 | norma |

Textos observados (conferência do agrupamento):
- T3-0eeefcce95: Tabela de processos sem <caption>, aria-label, aria-labelledby ou title; o título "Processos" (h2) não está associado
- T3-131ce154f3: Tabela de processos sem <caption>, aria-label, aria-labelledby ou title.
- T3-3f229c749a: Detalhe CAOL: as 2 tabelas (histórico; espécies) não têm caption, aria-label nem aria-labelledby.
- T3-6379618684: A tabela de processos não tem caption, aria-label, aria-labelledby nem title (o h2 "Processos" não está associado).
- T3-8fc016b3a3: Tabela de processos sem caption, aria-label, aria-labelledby ou title.
- T3-9e63b16476: A tabela de processos não tem caption, aria-label nem aria-labelledby; o h2 "Processos" não está associado
- T3-b98f23f12d: Detalhe Deferido: a tabela não tem caption, aria-label nem aria-labelledby.
- T3-d0adf71e4b: A tabela de processos não tem caption, aria-label, aria-labelledby nem title.
- T3-e5437b79a6: A tabela de processos não tem caption, aria-label nem aria-labelledby; o h2 "Processos" não está associado a ela.
- T3-f9aaaa5532: A tabela de processos não tem caption, aria-label, aria-labelledby nem title, e o h2 "Processos" não está associado a ela.

### LN-9cc4193a · 3 membros · lotes lote-16, lote-35, lote-64

Regra `emag:6.2` × componente <br-input>

Divergem: vinculo.relacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-3604de1402 | 16 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-7ebf9792a1 | 35 | verdadeira | citada | recomendado | aplica | sim | D-05 | host-interno | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-ed99498d3e | 64 | verdadeira | citada | recomendado | aplica | sim | D-05 | direta | violacao-pagina | sim | credita D-05 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-3604de1402: O campo de pesquisa (input#search no shadow DOM) não tem label nem aria-label; a única identificação é o placeholder "Pesquise aqui ...".
- T3-7ebf9792a1: O campo de busca (input#search no shadow DOM) não tem label nem aria-label; o único rótulo é o placeholder 'Pesquise aqui ...', que some ao 
- T3-ed99498d3e: Campo de busca (input no shadow root) sem label; identificado só pelo placeholder "Pesquise aqui ...", que some ao digitar

### LN-a04f70e2 · 79 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05, lote-06, lote-09, lote-10, lote-12, lote-14, lote-16, lote-17, lote-18, lote-21, lote-22, lote-23, lote-25, lote-26, lote-28, lote-29, lote-30, lote-31, lote-33, lote-34, lote-36, lote-38, lote-39, lote-41, lote-43, lote-47, lote-49, lote-51, lote-52, lote-54, lote-55, lote-56, lote-57, lote-58, lote-59, lote-60, lote-62, lote-64, lote-65, lote-66, lote-67, lote-69 · **muda crédito**

Regra `axe:empty-table-header` × th

Divergem: vinculo, sugestao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-01e63daed8 | 01 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-03c504ecdf | 02 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-04c90bbeaf | 02 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-080ff8cf7b | 03 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-0a65c90006 | 03 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-0b17fbc38f | 04 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-0da1f04162 | 05 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-10d1f64068 | 06 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-11630b7550 | 06 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-123d981e79 | 06 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-1b6b809952 | 09 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-21c082137a | 10 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-28665081de | 12 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-286b339d11 | 12 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-2f4a9f5a7e | 14 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-303ec1ce90 | 14 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-3142b64ad1 | 14 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-37f75dda8f | 16 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-3b59c66121 | 17 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-3c9fcba1e9 | 17 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-3e65590b37 | 18 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-4b79620b65 | 21 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-4d1ac72772 | 21 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-4f095a9203 | 22 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-508dab4cf8 | 22 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-50fba38e3f | 23 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-53b72686c8 | 23 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-5af951bd30 | 25 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-5c07ac7ddf | 26 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-5e4cb1868b | 26 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-666844cc68 | 28 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-668b5de50e | 28 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-66d2961863 | 28 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-67f32e3305 | 28 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-6894f34eb5 | 29 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-6a902d506c | 29 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-6bb306eac5 | 29 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-6eb59dfd09 | 30 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-7096c384f0 | 31 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-7a018f0576 | 33 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-7c83dcee54 | 34 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-84dcff943e | 36 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-8be3d9cdb8 | 38 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-8d3e9bcdab | 39 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-8e98feb436 | 39 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-96c376f17d | 41 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-96f7531190 | 41 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-97818f719f | 41 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-98a01ac47d | 41 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-9cd435de13 | 43 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-9ebffdba65 | 43 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-9ffdc5a540 | 43 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | valida | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ad5f5ec693 | 47 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-aecf8f7fcc | 47 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-b4c3ca6240 | 49 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-bb3b4e34b1 | 51 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-beebbec02f | 51 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-c015104982 | 52 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-c0bcd3bec7 | 52 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-c8bf971f96 | 54 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-c91187cb84 | 54 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-cae75f1bc7 | 54 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-cd3777ca70 | 55 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-d00793d8a9 | 56 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-d12426681e | 56 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-d25e9010ce | 57 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-d336fbb667 | 57 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-d846f90fc7 | 58 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-da82f6639d | 59 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-dc57f89c22 | 60 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-de507a345d | 60 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-e4d33e9823 | 62 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-ecfe5ea050 | 64 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-ef3e087eb0 | 65 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-f492550f5a | 66 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-f581506ca2 | 67 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-f5e8f35572 | 67 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-f6d457a550 | 67 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-fda0fa11ba | 69 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-01e63daed8: Table header text should not be empty
- T3-03c504ecdf: Table header text should not be empty
- T3-04c90bbeaf: Table header text should not be empty
- T3-080ff8cf7b: Cabeçalhos da coluna de seleção (só contém checkbox sem nome) e da coluna de ações sem texto
- T3-0a65c90006: Table header text should not be empty
- T3-0b17fbc38f: Table header text should not be empty
- T3-0da1f04162: Table header text should not be empty
- T3-10d1f64068: Table header text should not be empty
- T3-11630b7550: Table header text should not be empty
- T3-123d981e79: Table header text should not be empty
- T3-1b6b809952: Table header text should not be empty
- T3-21c082137a: Table header text should not be empty
- T3-28665081de: Table header text should not be empty
- T3-286b339d11: Table header text should not be empty
- T3-2f4a9f5a7e: Table header text should not be empty
- T3-303ec1ce90: Table header text should not be empty
- T3-3142b64ad1: Table header text should not be empty
- T3-37f75dda8f: Table header text should not be empty
- T3-3b59c66121: Cabeçalhos da coluna de seleção (só contém checkbox) e da coluna de ações estão sem texto acessível.
- T3-3c9fcba1e9: Table header text should not be empty
- T3-3e65590b37: Table header text should not be empty
- T3-4b79620b65: Table header text should not be empty
- T3-4d1ac72772: Table header text should not be empty
- T3-4f095a9203: Table header text should not be empty
- T3-508dab4cf8: Table header text should not be empty
- T3-50fba38e3f: Table header text should not be empty
- T3-53b72686c8: Table header text should not be empty
- T3-5af951bd30: Table header text should not be empty
- T3-5c07ac7ddf: Table header text should not be empty
- T3-5e4cb1868b: Table header text should not be empty
- T3-666844cc68: Table header text should not be empty
- T3-668b5de50e: Table header text should not be empty
- T3-66d2961863: Table header text should not be empty
- T3-67f32e3305: Table header text should not be empty
- T3-6894f34eb5: Table header text should not be empty
- T3-6a902d506c: Table header text should not be empty
- T3-6bb306eac5: Table header text should not be empty
- T3-6eb59dfd09: Cabeçalhos da coluna de seleção (só contém o checkbox) e da coluna de ações (vazio) não têm texto.
- T3-7096c384f0: Table header text should not be empty
- T3-7a018f0576: Table header text should not be empty
- T3-7c83dcee54: Table header text should not be empty
- T3-84dcff943e: Table header text should not be empty
- T3-8be3d9cdb8: Table header text should not be empty
- T3-8d3e9bcdab: Table header text should not be empty
- T3-8e98feb436: Table header text should not be empty
- T3-96c376f17d: Table header text should not be empty
- T3-96f7531190: Table header text should not be empty
- T3-97818f719f: Table header text should not be empty
- T3-98a01ac47d: Table header text should not be empty
- T3-9cd435de13: Table header text should not be empty
- T3-9ebffdba65: Table header text should not be empty
- T3-9ffdc5a540: Aba Concluídos: o cabeçalho da coluna de ações (8ª coluna; não há coluna de seleção nesta aba) não tem texto acessível.
- T3-ad5f5ec693: Table header text should not be empty
- T3-aecf8f7fcc: Table header text should not be empty
- T3-b4c3ca6240: Table header text should not be empty
- T3-bb3b4e34b1: Table header text should not be empty
- T3-beebbec02f: Cabeçalhos de coluna sem texto: coluna de seleção (só contém checkbox) e coluna de ações (vazia).
- T3-c015104982: Table header text should not be empty
- T3-c0bcd3bec7: Table header text should not be empty
- T3-c8bf971f96: Table header text should not be empty
- T3-c91187cb84: Table header text should not be empty
- T3-cae75f1bc7: Table header text should not be empty
- T3-cd3777ca70: Table header text should not be empty
- T3-d00793d8a9: Table header text should not be empty
- T3-d12426681e: Table header text should not be empty
- T3-d25e9010ce: Table header text should not be empty
- T3-d336fbb667: Detalhe CAOL: o 6º cabeçalho da tabela de histórico (Data\|Protocolo\|Solicitante\|Status\|Parecer\|vazio) não tem texto.
- T3-d846f90fc7: Table header text should not be empty
- T3-da82f6639d: Table header text should not be empty
- T3-dc57f89c22: Table header text should not be empty
- T3-de507a345d: Table header text should not be empty
- T3-e4d33e9823: Table header text should not be empty
- T3-ecfe5ea050: Table header text should not be empty
- T3-ef3e087eb0: Table header text should not be empty
- T3-f492550f5a: Table header text should not be empty
- T3-f581506ca2: Table header text should not be empty
- T3-f5e8f35572: Table header text should not be empty
- T3-f6d457a550: Table header text should not be empty
- T3-fda0fa11ba: Cabeçalhos da coluna de seleção e da coluna de ações sem texto disponível a leitores de tela

### LN-a5023bd6 · 66 membros · lotes lote-05, lote-07, lote-09, lote-10, lote-11, lote-12, lote-13, lote-14, lote-15, lote-17, lote-18, lote-19, lote-20, lote-21, lote-24, lote-26, lote-27, lote-31, lote-32, lote-33, lote-34, lote-35, lote-37, lote-38, lote-39, lote-41, lote-42, lote-45, lote-46, lote-47, lote-48, lote-49, lote-50, lote-51, lote-52, lote-53, lote-55, lote-58, lote-61, lote-63, lote-64, lote-66, lote-67, lote-69 · **muda crédito**

Regra `wcag:2.1.1` × span

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0dcb755d97 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-0e8e102cbe | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-151a19f912 | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1bc4bbc1bb | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-1c6c4e5691 | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-20666c6e28 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-22c35cc309 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-284898733d | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2a52146428 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-2a87bc81a4 | 13 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2c960d1f2d | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-308ae4e0cf | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-32ff7cd229 | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-3939d5e08d | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3b6d6ae446 | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-3c6d553669 | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-3c9aa684ac | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-3d338c27d7 | 18 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-3e5a4570c9 | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3ffb46274d | 18 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-459e280808 | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-486dc06ed0 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4b99d8fc91 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-4cacd06be9 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-4cd1480033 | 21 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5672478494 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-574888ec4a | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5e95c60206 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-610679e7eb | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-622577e4da | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-70dd89bdf0 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-737ba6d775 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-7749a7ef07 | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-777009ac2f | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-7b0226b9bf | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-7e40095d48 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-85d768c7d0 | 37 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-888f763a05 | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-891818854d | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-891e830907 | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-892aed2b95 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-90e326f7d5 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9741f8a3f2 | 41 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-97f3c9a7c0 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-9a4d6cf806 | 42 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a4cb2258ad | 45 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-aa60be51cf | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-af0f55ee29 | 47 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-b016988cde | 48 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-b464a0ef85 | 49 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-b78e59dc08 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-bb3e4b2555 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-be7a134a4d | 51 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-c20bc92488 | 52 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c3400a1942 | 53 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-caed9248cb | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-d6573cc3d2 | 58 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d82e2907b7 | 58 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e1de2a8bfc | 61 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-e200c3e66e | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e89520d169 | 63 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-ed4f353b79 | 64 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f1e6ad6373 | 66 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-f506b5a98b | 67 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-f5e2e80467 | 67 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fcd466309c | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0dcb755d97: "Meus processos" é um span com cursor:pointer sem tabindex nem papel; o filtro só pode ser ligado/desligado com o mouse.
- T3-0e8e102cbe: Alternador "Meus processos" é <span> clicável (tabIndex -1, sem role); clicar alterna a lista de 9 para 23 itens, mas não é alcançável por t
- T3-151a19f912: 'Trocar unidade' é um span com cursor:pointer, sem tabindex nem papel; não recebe foco pelo teclado
- T3-1bc4bbc1bb: O controle "Meus processos" é um <span> clicável (alterna a listagem) sem tabindex e sem papel; não entra na ordem de Tab.
- T3-1c6c4e5691: Os chips de filtro ('Meus processos', 'Aberto há', 'Tipo de processo', 'Status', 'Espécie alvo', 'Método de pesca', 'Petrecho') são <span> c
- T3-20666c6e28: No menu do usuário, 'Trocar unidade' é um <span> com cursor:pointer, sem tabindex nem role (tabIndex=-1); não é alcançável por teclado.
- T3-22c35cc309: "Trocar unidade" é um span com cursor pointer, sem tabindex nem role; o Tab vai do gatilho direto para "Sair"
- T3-284898733d: 'Trocar unidade' é <span> com cursor:pointer, sem tabindex nem role (tabIndex -1): não operável por teclado.
- T3-2a52146428: 'Meus processos' e as tags de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são span clicáveis sem t
- T3-2a87bc81a4: "Trocar unidade" é um <span> com cursor pointer, tabIndex -1 e sem papel; não recebe foco por teclado.
- T3-2c960d1f2d: "Meus processos" e os filtros "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são <span class="br-
- T3-308ae4e0cf: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex nem role; element.focus() não o foca.
- T3-32ff7cd229: Os filtros "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são spans com cursor:pointer, sem tabin
- T3-3939d5e08d: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex nem role; com o menu aberto, o Tab vai do acionador direto para "Sair", sem pa
- T3-3b6d6ae446: Chips de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span> com cursor:pointer e handler de cl
- T3-3c6d553669: "Meus processos" e os filtros "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho" são <span> com cursor
- T3-3c9aa684ac: O controle "Meus processos" é um span (cursor:pointer, sem tabindex nem role); alterna o filtro pelo clique (9 para 23 itens), mas não é foc
- T3-3d338c27d7: Os seis acionadores de filtro ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span> com curs
- T3-3e5a4570c9: "Trocar unidade" no menu do avatar é <span> com cursor:pointer, sem tabindex nem role; não é alcançável por teclado
- T3-3ffb46274d: Os chips de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span> com cursor:pointer, sem tabinde
- T3-459e280808: "Meus processos" e os 6 filtros (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span> com click, sem tab
- T3-486dc06ed0: "Trocar unidade" é <span> com cursor:pointer, sem tabindex nem role; inalcançável por teclado
- T3-4b99d8fc91: Os 6 chips de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são span com clique, tabIndex -1; Tab va
- T3-4cacd06be9: "Meus processos" é um span com cursor pointer (tabIndex -1, sem role) que liga/desliga o filtro; o estado só é mostrado pela cor de fundo (a
- T3-4cd1480033: "Trocar unidade" é <span> com cursor:pointer (tabIndex -1, sem role); ao clicar navega para /pnip-f3/portal-mpa, mas não é alcançável por te
- T3-5672478494: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex nem role: não recebe foco pelo teclado.
- T3-574888ec4a: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex e sem role; não recebe foco pelo teclado (tabIndex -1).
- T3-5e95c60206: "Trocar unidade" é um span com cursor:pointer, sem tabindex nem papel; não é alcançável pelo teclado.
- T3-610679e7eb: "Meus processos" é um <span> clicável (cursor:pointer) que liga/desliga o filtro (9 vs 23 itens), mas não recebe foco por Tab, não tem papel
- T3-622577e4da: 'Trocar unidade' é um span com cursor pointer e ação de clique (navega para /pnip-f3/portal-mpa), sem tabindex nem role; tabIndex -1, não re
- T3-70dd89bdf0: Os chips de filtro ("Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span cl
- T3-737ba6d775: Chips de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span> com cursor:pointer, sem tabindex, 
- T3-7749a7ef07: Os 7 chips de filtro ("Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span 
- T3-777009ac2f: O chip "Meus processos" alterna o filtro (9 → 23 itens) ao clicar, mas é um <span> sem tabindex nem role, inalcançável por teclado.
- T3-7b0226b9bf: "Meus processos" e os 6 chips de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span> com cursor
- T3-7e40095d48: Chips de filtro ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span> com cursor:pointer, se
- T3-85d768c7d0: Os 6 controles de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são spans clicáveis sem tabindex, pa
- T3-888f763a05: Alternância "Meus processos" é <span> sem tabindex/role; o estado ligado/desligado é só visual (fundo azul × branco, sem aria-pressed); ao c
- T3-891818854d: Os 6 filtros ('Aberto há', 'Tipo de processo', 'Status', 'Espécie alvo', 'Método de pesca', 'Petrecho') são <span> com cursor:pointer, sem t
- T3-891e830907: "Meus processos" e os filtros "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho" são <span> com cursor
- T3-892aed2b95: "Trocar unidade" no menu do usuário é um <span> com cursor:pointer, sem tabindex e sem papel; não é alcançável por teclado.
- T3-90e326f7d5: "Trocar unidade" é <span> com cursor:pointer e ação de clique (navega para /portal-mpa), sem tabindex nem role; focus() não o foca
- T3-9741f8a3f2: "Trocar unidade" é um <span> com cursor:pointer (tabIndex -1, sem role); não recebe foco pelo teclado.
- T3-97f3c9a7c0: Os 6 chips de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span> que abrem listas ao clique, s
- T3-9a4d6cf806: "Trocar unidade" é um span com cursor:pointer que navega ao ser clicado (para /pnip-f3/portal-mpa), mas não recebe foco (focus() falha) e nã
- T3-a4cb2258ad: Filtros "Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho" são <span> clicáveis (tab
- T3-aa60be51cf: "Trocar unidade" é <span> com cursor:pointer, tabIndex -1 e sem papel: não alcançável por teclado.
- T3-af0f55ee29: 'Meus processos' alterna o filtro da tabela (9 ↔ 23 itens) por clique em span, tabIndex -1; não é alcançável por Tab.
- T3-b016988cde: Chip 'Meus processos' e os 6 chips de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span> com c
- T3-b464a0ef85: A tag 'Meus processos', que alterna a listagem (9→23 itens), é um <span> com cursor:pointer, sem tabindex nem role; não é alcançável pelo te
- T3-b78e59dc08: Os filtros "Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são <span> com cursor
- T3-bb3e4b2555: "Trocar unidade" é um span com cursor:pointer, sem tabindex nem papel; não recebe foco por teclado (focus() não o torna ativo).
- T3-be7a134a4d: "Meus processos" é <span> clicável sem tabindex nem role; não é alcançável por Tab.
- T3-c20bc92488: 'Trocar unidade' é um <span> com cursor:pointer e tabIndex -1, sem role nem tratamento de teclado.
- T3-c3400a1942: Os 7 chips clicáveis (Meus processos, Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span class="br-tag 
- T3-caed9248cb: O filtro "Meus processos" é um <span> clicável (cursor:pointer) sem tabindex nem role; não recebe foco pelo teclado.
- T3-d6573cc3d2: "Trocar unidade" é <span> com cursor:pointer, sem tabindex nem papel; não é alcançável por teclado
- T3-d82e2907b7: "Trocar unidade", no menu do avatar, é um <span> com cursor:pointer, sem role, tabindex nem href, e não é alcançável por Tab. Certeza média:
- T3-e1de2a8bfc: "Meus processos" e os filtros "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são <span> com curso
- T3-e200c3e66e: "Trocar unidade" é um <span> com cursor pointer, sem tabindex nem role; não recebe foco.
- T3-e89520d169: Os 6 gatilhos de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span> com cursor:pointer e trata
- T3-ed4f353b79: "Trocar unidade" no menu do avatar é <span> com cursor:pointer, sem tabindex/role: não recebe foco por teclado
- T3-f1e6ad6373: Filtros "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho" são span com cursor pointer, tabIndex -1, s
- T3-f506b5a98b: Os chips "Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são spans com cursor:po
- T3-f5e2e80467: "Trocar unidade" é um <span style="cursor:pointer"> com clique (navega para /portal-mpa), sem tabindex nem papel; focus() não o foca.
- T3-fcd466309c: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex nem papel. Não é focável, mas o clique navega para /portal-mpa.

### LN-afbd95f2 · 36 membros · lotes lote-03, lote-06, lote-07, lote-09, lote-16, lote-20, lote-24, lote-25, lote-27, lote-28, lote-29, lote-31, lote-34, lote-36, lote-43, lote-45, lote-49, lote-50, lote-51, lote-52, lote-55, lote-58, lote-63, lote-65, lote-66, lote-68, lote-69 · **muda crédito**

Regra `govbr-3.7.0-foundation-global-21b1a2733f7b` × span

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0a56f8420a | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-12330e53c3 | 06 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-1493e50ae8 | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1ef2fd3a97 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1f3786347f | 09 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-357af96c60 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-468666df33 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4992e4433e | 20 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-55df3d0fb7 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5b4d917925 | 25 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-600f71af4d | 27 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-661914fe71 | 28 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-669eb510cf | 28 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-6b5c0cc505 | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6fb72df9a5 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7a26062d34 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7d2baddb34 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-826403a49a | 36 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-a088ef973d | 43 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-a683c8ed82 | 45 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-b67af22013 | 49 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b7bfdc8a77 | 50 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-b8be720f5a | 50 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-b92d1d3163 | 50 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-bec1ba5825 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bf148e89ce | 52 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cc62812c30 | 55 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-d6f69680d4 | 58 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-e77d481f83 | 63 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |
| T3-e7e5cf284c | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e84dab7d37 | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f03971aa28 | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f20a9df9a1 | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f22878f9ce | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f877364fa9 | 68 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fcefcac0a9 | 69 | verdadeira | citada | obrigatorio | aplica | sim | F3-05 | direta | violacao-pagina | sim | credita F3-05 | norma |

Textos observados (conferência do agrupamento):
- T3-0a56f8420a: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-12330e53c3: Chip "Meus processos" ativo com background-color inline rgb(23,85,169) (#1755a9), que não é token de cor do DS
- T3-1493e50ae8: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-1ef2fd3a97: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-1f3786347f: background-color inline rgb(23,85,169) (#1755a9), que não corresponde a nenhum token de cor do DS.
- T3-357af96c60: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-468666df33: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-4992e4433e: "Meus processos" ativo usa background-color inline rgb(23,85,169) (#1755a9), fora do registro de tokens (o mais próximo é --blue-warm-vivid-
- T3-55df3d0fb7: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-5b4d917925: Chip "Meus processos" com background-color inline rgb(23,85,169) (#1755a9), que não é token do DS.
- T3-600f71af4d: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-661914fe71: "Meus processos" com background-color inline rgb(23,85,169) (#1755a9), cor que não é token do DS.
- T3-669eb510cf: background-color inline rgb(23,85,169) #1755a9 no chip "Meus processos", que não corresponde a token do DS.
- T3-6b5c0cc505: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-6fb72df9a5: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-7a26062d34: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-7d2baddb34: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-826403a49a: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-a088ef973d: Etiqueta "Meus processos" com background-color rgb(23,85,169) (#1755a9) inline, que não é token do DS.
- T3-a683c8ed82: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-b67af22013: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-b7bfdc8a77: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-b8be720f5a: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-b92d1d3163: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-bec1ba5825: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-bf148e89ce: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-cc62812c30: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-d6f69680d4: O chip "Meus processos" ativo usa background-color inline rgb(23, 85, 169) (#1755a9), que não é token de cor do DS.
- T3-e77d481f83: Fundo do alternador "Meus processos" definido em estilo inline: background-color #1755a9, que não é token do DS.
- T3-e7e5cf284c: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-e84dab7d37: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-f03971aa28: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-f20a9df9a1: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-f22878f9ce: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-f877364fa9: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS
- T3-fcefcac0a9: background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS

### LN-bb41b326 · 8 membros · lotes lote-03, lote-23, lote-42, lote-44, lote-54, lote-60, lote-65, lote-68

Regra `emag:1.3` × não resolvido

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-099523b702 | 03 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-52e169768e | 23 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-9979e28f86 | 42 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-a3f6eb1da2 | 44 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-c9b573980e | 54 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-df734dd0cc | 60 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-efb9524ef8 | 65 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-f826783fce | 68 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-099523b702: Detalhe CAOL: cards com h5 depois de cabeçalho de nível superior não consecutivo (salto de nível)
- T3-52e169768e: No detalhe 'Alteração de Certificado', o título h2 é seguido direto de h4 ('1. Dados da embarcação' … '4. Dados do técnico responsável'), pu
- T3-9979e28f86: No detalhe do processo, os cabeçalhos das seções saltam de h2 (título) para h4 ("Dados da Embarcação", "Dados do Responsável da Embarcação"…
- T3-a3f6eb1da2: Detalhe 0033: h4 após h2, pulando h3
- T3-c9b573980e: Detalhe 0010: após o h2 "Alteração de Certificado" as seções usam h4 ("1. Dados da embarcação"), pulando h3
- T3-df734dd0cc: No detalhe, os cabeçalhos saltam de h2 (título do processo) para h4 ("Dados da Embarcação" etc.), sem h3.
- T3-efb9524ef8: Detalhe de Alteração de Certificado: após o h2 "Alteração de Certificado", as seções usam h4 (salto de nível h2→h4)
- T3-f826783fce: Detalhe CAOL: cabeçalhos h5 dos cards saltam níveis

### LN-c30b5022 · 9 membros · lotes lote-05, lote-15, lote-19, lote-26, lote-34, lote-38, lote-41, lote-47 · **muda crédito**

Regra `emag:1.3` × raiz

Divergem: vinculo, sugestao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1078a1bc64 | 05 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-34a9a27f0a | 15 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-4108c85341 | 19 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-5bf8f82237 | 26 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-5cb478256d | 26 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-7cc7ba8dbe | 34 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-88fddac814 | 38 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-96c934cb7f | 41 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-aee198f70a | 47 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1078a1bc64: Detalhe 0010 sem h1 (título é h2)
- T3-34a9a27f0a: Página de detalhe de Vinculação de embarcação sem h1
- T3-4108c85341: Detalhe 0011 sem h1
- T3-5bf8f82237: A tela não tem h1; o título "Processos" é h2 e é o único cabeçalho
- T3-5cb478256d: Página de detalhe CAOL sem h1
- T3-7cc7ba8dbe: Detalhe 0033 sem h1
- T3-88fddac814: Detalhe 0014 sem h1
- T3-96c934cb7f: A página de listagem não tem h1; o título "Processos" é h2
- T3-aee198f70a: Página de detalhe de Alteração de Certificado sem h1 (título em h2)

### LN-e2972868 · 36 membros · lotes lote-03, lote-06, lote-07, lote-09, lote-11, lote-13, lote-15, lote-21, lote-22, lote-24, lote-27, lote-31, lote-33, lote-39, lote-42, lote-44, lote-45, lote-49, lote-50, lote-51, lote-52, lote-53, lote-54, lote-55, lote-58, lote-59, lote-64, lote-66 · **muda crédito**

Regra `wcag:4.1.2` × campo de formulário

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-07bac32bf7 | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-07bdd2e4a4 | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-07d6844d07 | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-1134e7ed12 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-15c3df1b04 | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-17184d2b00 | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-1baaee184f | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-1eef647aff | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-24e85bb7b0 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-2c49307396 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-352b5c6aa4 | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4bea5245e5 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-506ab5650e | 22 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-55709d9e68 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-634a402dde | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-702c46be9c | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-79d1c4c65a | 33 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8f60c6a07a | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-905f2287cb | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-995c13019d | 42 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-9aca4fd045 | 42 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-a2305354b2 | 44 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-a8693a0ac2 | 45 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-b5a2f47506 | 49 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-ba55e874eb | 50 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bb689120c1 | 51 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-c2a55f2490 | 52 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-c6a262bf65 | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c761f4630b | 54 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-cbfa532fa4 | 55 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d669f73d47 | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-d74c51a8c5 | 58 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dc321ebe33 | 59 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-ee0c403456 | 64 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-ee51b6cccf | 64 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f32a59c5cd | 66 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |

Textos observados (conferência do agrupamento):
- T3-07bac32bf7: A caixa de seleção do cabeçalho e as 6 caixas de seleção das linhas não têm rótulo nem nome acessível.
- T3-07bdd2e4a4: 7 checkboxes de seleção (cabeçalho "selecionar todos" e 6 linhas) sem nome acessível: sem label, aria-label ou aria-labelledby.
- T3-07d6844d07: Os 7 checkboxes (1 no cabeçalho, 6 nas linhas) não têm label, aria-label nem aria-labelledby; o nome acessível está vazio (a árvore de acess
- T3-1134e7ed12: Os rádios das opções de "Exibir" não têm atributo name comum. Depois de escolher 25 e depois 50, os dois ficam checked ao mesmo tempo ("10:f
- T3-15c3df1b04: 7 checkboxes (cabeçalho + 6 linhas) sem label, aria-label ou aria-labelledby: sem nome acessível.
- T3-17184d2b00: Os checkboxes de seleção das linhas (6 no estado inicial) não têm label, aria-label nem title: nome acessível vazio.
- T3-1baaee184f: 7 checkboxes (selecionar todos no thead e 6 nas linhas) sem label, aria-label nem title ([ferramenta citada] label, crítico)
- T3-1eef647aff: As 7 caixas de seleção (a do cabeçalho, que marca todas, e as 6 das linhas) não têm label, aria-label, title nem id associado: o nome acessí
- T3-24e85bb7b0: A checkbox "selecionar todos" no cabeçalho da tabela não tem label, aria-label nem title (nome acessível vazio).
- T3-2c49307396: Os checkboxes de seleção das linhas não têm label nem aria-label: nome acessível vazio.
- T3-352b5c6aa4: Seletores 'Exibir' e 'Página' são input text sem role=combobox; ao abrir a lista, nenhum aria-expanded no input ou no botão 'Exibir lista' (
- T3-4bea5245e5: As 6 checkboxes de seleção das linhas não têm label, aria-label nem title (nome acessível vazio).
- T3-506ab5650e: 7 checkboxes (selecionar todos no cabeçalho e 6 de linha) sem label, aria-label ou aria-labelledby.
- T3-55709d9e68: Seletor "Exibir" é input type=text que abre lista de opções (10/25/50/100) sem role=combobox e sem aria-expanded no input ou no botão "Exibi
- T3-634a402dde: Checkbox "selecionar todos" no cabeçalho da tabela sem label, aria-label ou aria-labelledby: sem nome acessível
- T3-702c46be9c: Checkbox "selecionar todos" no cabeçalho e checkboxes das linhas sem label, aria-label ou aria-labelledby (nome acessível vazio)
- T3-79d1c4c65a: Campos "Exibir" e "Página" abrem lista de opções mas não têm role combobox, aria-expanded nem aria-controls (scan do estado aberto sem nenhu
- T3-8f60c6a07a: 7 caixas de seleção (selecionar todos no cabeçalho e 6 por linha) sem label, aria-label nem aria-labelledby; o nome acessível fica vazio
- T3-905f2287cb: Os seletores "Exibir" e "Página" são <input type="text"> sem role="combobox", aria-expanded nem aria-controls. A lista abre com ArrowDown, o
- T3-995c13019d: O checkbox "selecionar todos" no cabeçalho da tabela não tem label, aria-label nem title: nome acessível vazio.
- T3-9aca4fd045: Os 7 checkboxes da tabela (selecionar todos no cabeçalho e 6 de linha) não têm label, aria-label nem title: nome acessível vazio.
- T3-a2305354b2: Caixa "selecionar todos" do cabeçalho e caixas das linhas sem label, aria-label ou aria-labelledby: nome acessível vazio
- T3-a8693a0ac2: As 7 caixas de seleção da tabela (a do cabeçalho, que seleciona todas, e as 6 das linhas) não têm label, aria-label nem title; o nome acessí
- T3-b5a2f47506: 7 checkboxes da tabela (seleção de todas e de cada linha) sem nome acessível: sem label, aria-label nem aria-labelledby.
- T3-ba55e874eb: Os seletores "Exibir" e "Página" são input type=text com lista suspensa, sem role="combobox", aria-expanded nem aria-controls; a abertura da
- T3-bb689120c1: O checkbox de 'selecionar todos' no cabeçalho da tabela não tem label, aria-label nem title; o th dele não tem texto. Nome acessível vazio.
- T3-c2a55f2490: Os checkboxes de seleção (cabeçalho e linhas) não têm label, aria-label nem title; o nome acessível é vazio. A coluna também não tem texto d
- T3-c6a262bf65: O seletor "Exibir" é um input de texto que abre uma lista (ArrowDown/botão), mas não tem role="combobox", aria-expanded nem aria-controls; o
- T3-c761f4630b: 7 caixas de seleção (selecionar todos no cabeçalho e por linha) sem label, aria-label ou aria-labelledby: nome acessível vazio
- T3-cbfa532fa4: Os campos 'Exibir' e 'Página' funcionam como seletor de lista (ArrowDown abre a lista de opções), mas são input type=text sem role=combobox,
- T3-d669f73d47: O checkbox "selecionar todos" no cabeçalho não tem label, aria-label nem texto: nome acessível vazio.
- T3-d74c51a8c5: Os campos "Exibir" e "Página" abrem uma lista com ArrowDown, mas o input não tem role="combobox", aria-expanded nem aria-controls; a abertur
- T3-dc321ebe33: 6 checkboxes de seleção de linha sem rótulo nem nome acessível
- T3-ee0c403456: Os 7 checkboxes da tabela (cabeçalho e linhas) não têm label, aria-label nem aria-labelledby: o nome acessível é vazio ([ferramenta citada] 
- T3-ee51b6cccf: 7 checkboxes (selecionar todos no cabeçalho e seleção por linha) sem label, aria-label ou aria-labelledby: nome acessível vazio.
- T3-f32a59c5cd: Os checkboxes de seleção das linhas (6 no estado inicial) não têm label, aria-label nem title. Nome acessível vazio.

### LN-e4b265af · 50 membros · lotes lote-01, lote-02, lote-05, lote-10, lote-11, lote-12, lote-13, lote-14, lote-16, lote-20, lote-21, lote-22, lote-23, lote-24, lote-25, lote-29, lote-30, lote-31, lote-32, lote-33, lote-34, lote-36, lote-37, lote-38, lote-39, lote-40, lote-41, lote-49, lote-51, lote-52, lote-53, lote-54, lote-57, lote-60, lote-61, lote-63, lote-66, lote-67, lote-69 · **muda crédito**

Regra `axe:frame-title` × iframe

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0173bf0da3 | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-058f5523db | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0e5c0d6ed7 | 05 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-21e9db1ec4 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2599a8c369 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-2989a30899 | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-2b301b7e47 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-2cd5eafbed | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-2e151d4254 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3583d89363 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-36ce2708e0 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-498755e915 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4c9277635b | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-4d22263e1f | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-509cd3b49a | 22 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-52342d63b1 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-537ccbab71 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-56e769e421 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-581f0e5396 | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6b8a4f2c95 | 29 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-6cf95be99f | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-6e548df44d | 30 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7086c8d178 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-73a14256ef | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-787e562cee | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-7c76c6d45f | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-81760a2132 | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8666defc12 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8a61014f91 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8dd5b762a5 | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-95d7ddae26 | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-97df20dd40 | 41 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b5ccb89a0d | 49 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bba1c2f6ce | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bdd34cc9a9 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bf51d0e49f | 52 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c301e50dde | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c31ab983f8 | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c61b7234f1 | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c7a3600109 | 54 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ca4a1cc3ca | 54 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d4f12e95db | 57 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-de671ccb11 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-df168ba5f5 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e2a72752b5 | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e9bb685287 | 63 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-f2666bb481 | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f4147534c0 | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f78840d7a7 | 67 | verdadeira | citada | obrigatorio | aplica | sim | D-10 | direta | violacao-pagina | sim | credita D-10 | norma |
| T3-ff93472d04 | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0173bf0da3: iframe (about:blank, 1160×500px no fim da página) sem title, aria-label ou aria-labelledby
- T3-058f5523db: Frames must have an accessible name
- T3-0e5c0d6ed7: Frames must have an accessible name
- T3-21e9db1ec4: Frames must have an accessible name
- T3-2599a8c369: Frames must have an accessible name
- T3-2989a30899: <iframe> (about:blank, 1160×500px no fim da página, na ordem de tabulação) sem title, aria-label ou aria-labelledby
- T3-2b301b7e47: Frames must have an accessible name
- T3-2cd5eafbed: Frames must have an accessible name
- T3-2e151d4254: Frames must have an accessible name
- T3-3583d89363: Frames must have an accessible name
- T3-36ce2708e0: Frames must have an accessible name
- T3-498755e915: Frames must have an accessible name
- T3-4c9277635b: Frames must have an accessible name
- T3-4d22263e1f: Frames must have an accessible name
- T3-509cd3b49a: iframe vazio (src ausente, about:blank, 1160×500 px abaixo de "Voltar") sem title/aria-label.
- T3-52342d63b1: Frames must have an accessible name
- T3-537ccbab71: Frames must have an accessible name
- T3-56e769e421: Frames must have an accessible name
- T3-581f0e5396: Frames must have an accessible name
- T3-6b8a4f2c95: Frames must have an accessible name
- T3-6cf95be99f: iframe vazio (about:blank) de 1160×500px no fim do conteúdo, sem title, aria-label ou aria-labelledby.
- T3-6e548df44d: Frames must have an accessible name
- T3-7086c8d178: iframe (about:blank, 1160×500, visível e na ordem de tabulação) sem title, aria-label nem aria-labelledby.
- T3-73a14256ef: Frames must have an accessible name
- T3-787e562cee: Frames must have an accessible name
- T3-7c76c6d45f: Frames must have an accessible name
- T3-81760a2132: Frames must have an accessible name
- T3-8666defc12: Frames must have an accessible name
- T3-8a61014f91: Frames must have an accessible name
- T3-8dd5b762a5: Frames must have an accessible name
- T3-95d7ddae26: Frames must have an accessible name
- T3-97df20dd40: Frames must have an accessible name
- T3-b5ccb89a0d: Frames must have an accessible name
- T3-bba1c2f6ce: Frames must have an accessible name
- T3-bdd34cc9a9: Frames must have an accessible name
- T3-bf51d0e49f: Frames must have an accessible name
- T3-c301e50dde: Frames must have an accessible name
- T3-c31ab983f8: Frames must have an accessible name
- T3-c61b7234f1: Frames must have an accessible name
- T3-c7a3600109: Frames must have an accessible name
- T3-ca4a1cc3ca: Frames must have an accessible name
- T3-d4f12e95db: Frames must have an accessible name
- T3-de671ccb11: Frames must have an accessible name
- T3-df168ba5f5: Frames must have an accessible name
- T3-e2a72752b5: Frames must have an accessible name
- T3-e9bb685287: Frames must have an accessible name
- T3-f2666bb481: Frames must have an accessible name
- T3-f4147534c0: Frames must have an accessible name
- T3-f78840d7a7: Frames must have an accessible name
- T3-ff93472d04: Frames must have an accessible name

### LN-ef0645ee · 11 membros · lotes lote-05, lote-16, lote-26, lote-27, lote-35, lote-46, lote-51, lote-54, lote-62, lote-64 · **muda crédito**

Regra `govbr-3.7.0-accessibility-global-9a6edd7d551e` × title

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0e8d8864fd | 05 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-388bc6c2d2 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-5f24cecfec | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-60c13763fe | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-7e3a4985f5 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-7f03d1aeda | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-abafc4f8bc | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bd24314a97 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c7c9d62772 | 54 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-e4e43fea89 | 62 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-edf0523f14 | 64 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0e8d8864fd: No detalhe do processo, o <title> continua "PNIP", igual ao da listagem; não descreve o conteúdo ("Certificado Oficial de Conformidade...").
- T3-388bc6c2d2: <title> = "PNIP" na listagem e também nas rotas de detalhe/exportação; não descreve a página "Processos"
- T3-5f24cecfec: <title> é apenas 'PNIP' (sigla do sistema), igual em todas as rotas (listagem, detalhe, exportar); não descreve a página 'Processos'.
- T3-60c13763fe: O <title> da listagem é apenas "PNIP"; não descreve a página "Processos".
- T3-7e3a4985f5: document.title = "PNIP" na tela de Processos (mesmo título genérico em todas as rotas visitadas).
- T3-7f03d1aeda: O <title> da listagem é "PNIP", sem descrever a página "Processos".
- T3-abafc4f8bc: O <title> do detalhe "Solicitação de CAOL" é "PNIP", o mesmo da listagem e do outro detalhe.
- T3-bd24314a97: O <title> do detalhe "Alteração de Certificado" é "PNIP", o mesmo da listagem.
- T3-c7c9d62772: <title> é só "PNIP", igual na listagem e no detalhe; não identifica a página "Processos".
- T3-e4e43fea89: document.title = "PNIP" (sigla genérica, igual nas outras rotas visitadas, como o detalhe de processo)
- T3-edf0523f14: No detalhe (/processos/certificacao-caol/...0011, assunto "Solicitação de CAOL -") o <title> continua "PNIP", igual ao da listagem.

### LN-fea37aec · 233 membros · lotes lote-01, lote-02, lote-03, lote-05, lote-06, lote-07, lote-08, lote-09, lote-10, lote-11, lote-12, lote-13, lote-14, lote-15, lote-16, lote-17, lote-18, lote-19, lote-20, lote-21, lote-22, lote-23, lote-24, lote-26, lote-27, lote-28, lote-30, lote-31, lote-32, lote-33, lote-34, lote-35, lote-36, lote-37, lote-38, lote-39, lote-40, lote-41, lote-42, lote-43, lote-44, lote-45, lote-46, lote-47, lote-48, lote-49, lote-50, lote-51, lote-52, lote-53, lote-54, lote-55, lote-56, lote-57, lote-58, lote-59, lote-60, lote-61, lote-62, lote-63, lote-64, lote-65, lote-66, lote-67, lote-68, lote-69 · **muda crédito**

Regra `axe:color-contrast` × div

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-006869226a | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0109cde4db | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-01770145d2 | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-01f2675b4c | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-0476601caa | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-049de9bd11 | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-052eacebc4 | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-05d54d9582 | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-0806bc9fde | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-094e92d147 | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-09accfb211 | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-09e8651794 | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0d7afda8a9 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-104af31f76 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-10cf0f4b81 | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-11538a21a7 | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-11ab0b68b2 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1254293172 | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-12fc496d6b | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-132ffdd7be | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-136971910b | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1428d216cb | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-143653a94a | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-143c17205d | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-15b49b33b3 | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-16fa91c990 | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-171fcd5bdd | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-178bd00324 | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1a86cf3d1c | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1b5ffb6571 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1cc2ae6e3a | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1f0cbeec82 | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-1f7467934d | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2038248657 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2135707b8a | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2154e86adc | 10 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-21df2065f6 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-22c7c55a25 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-22f6b519dd | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-23714bd846 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-23d1b2809d | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-246780c077 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2729f57105 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-27bd1e299f | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-27f9421f97 | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-28f1fa5acb | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-29a367084c | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-2a1da66a1f | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-2a65d411b9 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-2b47856cf7 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-2bb58e951c | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-2e58ee7f58 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2f5e934763 | 14 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-302acbdde3 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-31a1cb0d2e | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-321c3ab92a | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3329f93294 | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-33da6e7dba | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-33ed63d1bd | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-341e59a7c0 | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-35441b26b4 | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-355ce3f3f6 | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-359a87d7a5 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-35bdf3e53e | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-371794f71c | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3813948229 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-397b62ba8c | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-39df03b58a | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3ada8aab09 | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3cc60df78c | 18 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3cd11fa5f4 | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3d538f9d8d | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-436ee24980 | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-44d719a68f | 19 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-46a0c372ff | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-47c8753c6b | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-489cb87c32 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-49f8757206 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-4a08c3b8bb | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-4c4f6f4c58 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-4dbc0b2543 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4ddc304f99 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4dfb68c2c2 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4e071ea2d0 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4f5550ad61 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-507dc96f83 | 22 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-51944efe70 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-53cc15febd | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-54427266d4 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-545dad6d72 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-545f7dc7f0 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5642390924 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5da856fbfa | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5dbbeef996 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5e85c8bca3 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5f3411d210 | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-5fe9ed3659 | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-603e7646be | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-630394f3bf | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-63634d2e3b | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-637a36dc67 | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6444b40767 | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-6455886057 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6670aac2c0 | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-6808a89bd4 | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-6f2a14f4f8 | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-6f926b4618 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6fc1e9129b | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-703b92e076 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-72d10d2fef | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-73845e6242 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-74618dee50 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-74f757b1e5 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7641d91ee6 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-7a11e98782 | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-7d4f9eb60d | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-7dbf954ec0 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-7e19ca0c7f | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7e4201fa63 | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7eafef2bfb | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7ed4e05c57 | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8327e2bb94 | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-850b66de43 | 37 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-8627b33ce8 | 37 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-86d348eb92 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-879c080bd2 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8a83a0ee6d | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8b3e2890d5 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8d0320ea03 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8ee20b1eac | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8f1005705e | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-8fe72347b8 | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-951fe66ae7 | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9631f847eb | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9662420a53 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-96fa60bc54 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-97879ff081 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-97bff6ebe8 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-99b64e49c4 | 42 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-99fa48a9f4 | 42 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9a9185064e | 42 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9ab16fc947 | 42 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9ad531b94c | 42 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9bbb9072b9 | 42 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9ce4673000 | 43 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9f6041ac4a | 43 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a0be2c67d4 | 44 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a0c2fde2d9 | 44 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a243a939c3 | 44 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a3a83c6a8a | 44 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a6298a7a49 | 45 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a658d23fb7 | 45 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a752f59ade | 45 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a8b30a190e | 45 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a8cb4dea3c | 45 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a932400922 | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a942448d17 | 46 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-aaa45a0e5d | 46 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ac0465d2a4 | 46 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ac508de9b0 | 46 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ac83284d71 | 47 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ad13656653 | 47 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-adfb035e20 | 47 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ae69ac2c2c | 47 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b031620bf3 | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b175690c11 | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b28f6a9800 | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b296052b3b | 48 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b2b9597ace | 48 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-b3b178b121 | 49 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-b4ad5754d0 | 49 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b4c51926fa | 49 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-b5324be9da | 49 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-b56ae385f0 | 49 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b6034f572f | 49 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b84cc05f09 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-b95ecf86ea | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-b99936e40e | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ba30f34021 | 50 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-bdec418c63 | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bf147cf83f | 51 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c184c43d4c | 52 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-c396c34dfc | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c6b81ae4c8 | 53 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c7a7136b96 | 54 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cb42c1bc2d | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-cbdb867dc7 | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ccf627a149 | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-cdee6ca44d | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ce0a2acf4c | 55 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ce9c8c5ee5 | 56 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-cf45f92240 | 56 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-cf5b39955c | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d0091b882c | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d03d933104 | 56 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d29d9d0604 | 57 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d2bb4eb770 | 57 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d2f54f8c2b | 57 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d3b0d58fc5 | 57 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d3b81b820d | 57 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d4c741e0a2 | 57 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d630105cf0 | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d8263a9721 | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d94b6c8eb1 | 58 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d9c0b25b0d | 59 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d9d2e26d29 | 59 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d9de517974 | 59 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-daf7397a33 | 59 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-dc45aedd69 | 59 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-dedd669850 | 60 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e1ad352d3b | 61 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e2b49c0ad3 | 61 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-e34aa424fb | 62 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-e49b57c246 | 62 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-e57117f5bc | 62 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e796618931 | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ea3c210da1 | 63 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ea64a11678 | 63 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-eb3afef681 | 63 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ed4b7d42a1 | 64 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-f010c8a0ec | 65 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-f05cb15174 | 65 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-f0fd314c82 | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f194be78e9 | 65 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f320d32b35 | 66 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f4c1bcece1 | 67 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-f561470c25 | 67 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f67e9e16b0 | 67 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-fb17839749 | 68 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-fb9ae40f0c | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fc3ea4912f | 69 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fd827f3775 | 69 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-fe4b1bc737 | 69 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |

Textos observados (conferência do agrupamento):
- T3-006869226a: Elements must meet minimum color contrast ratio thresholds
- T3-0109cde4db: Elements must meet minimum color contrast ratio thresholds
- T3-01770145d2: Elements must meet minimum color contrast ratio thresholds
- T3-01f2675b4c: Elements must meet minimum color contrast ratio thresholds
- T3-0476601caa: Elements must meet minimum color contrast ratio thresholds
- T3-049de9bd11: Elements must meet minimum color contrast ratio thresholds
- T3-052eacebc4: Elements must meet minimum color contrast ratio thresholds
- T3-05d54d9582: Elements must meet minimum color contrast ratio thresholds
- T3-0806bc9fde: Elements must meet minimum color contrast ratio thresholds
- T3-094e92d147: Elements must meet minimum color contrast ratio thresholds
- T3-09accfb211: Elements must meet minimum color contrast ratio thresholds
- T3-09e8651794: Elements must meet minimum color contrast ratio thresholds
- T3-0d7afda8a9: Elements must meet minimum color contrast ratio thresholds
- T3-104af31f76: Etiquetas "Aguardando plano de ação" e "Aguardando SFPA": texto #ffffff sobre #888888, 14px normal = 3,54:1
- T3-10cf0f4b81: Elements must meet minimum color contrast ratio thresholds
- T3-11538a21a7: Selos de status 'Em análise analista/supervisor/diretor': texto #ffffff sobre #e66f0e, 14px peso normal, contraste 3,16:1
- T3-11ab0b68b2: Elements must meet minimum color contrast ratio thresholds
- T3-1254293172: Elements must meet minimum color contrast ratio thresholds
- T3-12fc496d6b: Elements must meet minimum color contrast ratio thresholds
- T3-132ffdd7be: Elements must meet minimum color contrast ratio thresholds
- T3-136971910b: Elements must meet minimum color contrast ratio thresholds
- T3-1428d216cb: Elements must meet minimum color contrast ratio thresholds
- T3-143653a94a: Elements must meet minimum color contrast ratio thresholds
- T3-143c17205d: Elements must meet minimum color contrast ratio thresholds
- T3-15b49b33b3: Elements must meet minimum color contrast ratio thresholds
- T3-16fa91c990: Elements must meet minimum color contrast ratio thresholds
- T3-171fcd5bdd: Etiquetas 'Aguardando plano de ação' e 'Aguardando SFPA': texto #ffffff sobre #888888, 14px, contraste 3,54:1.
- T3-178bd00324: Elements must meet minimum color contrast ratio thresholds
- T3-1a86cf3d1c: Elements must meet minimum color contrast ratio thresholds
- T3-1b5ffb6571: Elements must meet minimum color contrast ratio thresholds
- T3-1cc2ae6e3a: Elements must meet minimum color contrast ratio thresholds
- T3-1f0cbeec82: Elements must meet minimum color contrast ratio thresholds
- T3-1f7467934d: Elements must meet minimum color contrast ratio thresholds
- T3-2038248657: Elements must meet minimum color contrast ratio thresholds
- T3-2135707b8a: Elements must meet minimum color contrast ratio thresholds
- T3-2154e86adc: Elements must meet minimum color contrast ratio thresholds
- T3-21df2065f6: Elements must meet minimum color contrast ratio thresholds
- T3-22c7c55a25: Elements must meet minimum color contrast ratio thresholds
- T3-22f6b519dd: Elements must meet minimum color contrast ratio thresholds
- T3-23714bd846: Etiquetas de status ('Em análise analista/supervisor/diretor'): texto #ffffff sobre #e66f0e, 14px normal, contraste 3,16:1.
- T3-23d1b2809d: Elements must meet minimum color contrast ratio thresholds
- T3-246780c077: Elements must meet minimum color contrast ratio thresholds
- T3-2729f57105: Elements must meet minimum color contrast ratio thresholds
- T3-27bd1e299f: Elements must meet minimum color contrast ratio thresholds
- T3-27f9421f97: Etiquetas "Aguardando plano de ação"/"Aguardando SFPA": #ffffff sobre #888888, 14px, contraste 3,54:1.
- T3-28f1fa5acb: Elements must meet minimum color contrast ratio thresholds
- T3-29a367084c: Elements must meet minimum color contrast ratio thresholds
- T3-2a1da66a1f: Elements must meet minimum color contrast ratio thresholds
- T3-2a65d411b9: Elements must meet minimum color contrast ratio thresholds
- T3-2b47856cf7: Elements must meet minimum color contrast ratio thresholds
- T3-2bb58e951c: Elements must meet minimum color contrast ratio thresholds
- T3-2e58ee7f58: Elements must meet minimum color contrast ratio thresholds
- T3-2f5e934763: Elements must meet minimum color contrast ratio thresholds
- T3-302acbdde3: Elements must meet minimum color contrast ratio thresholds
- T3-31a1cb0d2e: Detalhe Deferido: etiqueta de status branco #ffffff sobre #888888, 14px normal: contraste 3,54:1.
- T3-321c3ab92a: Detalhe CAOL: etiqueta de status branco #ffffff sobre #888888, 14px normal: contraste 3,54:1.
- T3-3329f93294: Texto branco #ffffff sobre cinza #888888 nas etiquetas "Aguardando plano de ação" e "Aguardando SFPA", 14px normal: contraste 3,54:1.
- T3-33da6e7dba: Elements must meet minimum color contrast ratio thresholds
- T3-33ed63d1bd: Elements must meet minimum color contrast ratio thresholds
- T3-341e59a7c0: Elements must meet minimum color contrast ratio thresholds
- T3-35441b26b4: Elements must meet minimum color contrast ratio thresholds
- T3-355ce3f3f6: Elements must meet minimum color contrast ratio thresholds
- T3-359a87d7a5: Elements must meet minimum color contrast ratio thresholds
- T3-35bdf3e53e: Elements must meet minimum color contrast ratio thresholds
- T3-371794f71c: Elements must meet minimum color contrast ratio thresholds
- T3-3813948229: Elements must meet minimum color contrast ratio thresholds
- T3-397b62ba8c: Elements must meet minimum color contrast ratio thresholds
- T3-39df03b58a: Elements must meet minimum color contrast ratio thresholds
- T3-3ada8aab09: Elements must meet minimum color contrast ratio thresholds
- T3-3cc60df78c: Elements must meet minimum color contrast ratio thresholds
- T3-3cd11fa5f4: Elements must meet minimum color contrast ratio thresholds
- T3-3d538f9d8d: Elements must meet minimum color contrast ratio thresholds
- T3-436ee24980: Elements must meet minimum color contrast ratio thresholds
- T3-44d719a68f: Elements must meet minimum color contrast ratio thresholds
- T3-46a0c372ff: Elements must meet minimum color contrast ratio thresholds
- T3-47c8753c6b: Elements must meet minimum color contrast ratio thresholds
- T3-489cb87c32: Elements must meet minimum color contrast ratio thresholds
- T3-49f8757206: Elements must meet minimum color contrast ratio thresholds
- T3-4a08c3b8bb: Elements must meet minimum color contrast ratio thresholds
- T3-4c4f6f4c58: Elements must meet minimum color contrast ratio thresholds
- T3-4dbc0b2543: Elements must meet minimum color contrast ratio thresholds
- T3-4ddc304f99: Elements must meet minimum color contrast ratio thresholds
- T3-4dfb68c2c2: Elements must meet minimum color contrast ratio thresholds
- T3-4e071ea2d0: Elements must meet minimum color contrast ratio thresholds
- T3-4f5550ad61: Elements must meet minimum color contrast ratio thresholds
- T3-507dc96f83: Elements must meet minimum color contrast ratio thresholds
- T3-51944efe70: Elements must meet minimum color contrast ratio thresholds
- T3-53cc15febd: Elements must meet minimum color contrast ratio thresholds
- T3-54427266d4: Elements must meet minimum color contrast ratio thresholds
- T3-545dad6d72: Elements must meet minimum color contrast ratio thresholds
- T3-545f7dc7f0: Elements must meet minimum color contrast ratio thresholds
- T3-5642390924: Elements must meet minimum color contrast ratio thresholds
- T3-5da856fbfa: Elements must meet minimum color contrast ratio thresholds
- T3-5dbbeef996: Elements must meet minimum color contrast ratio thresholds
- T3-5e85c8bca3: Elements must meet minimum color contrast ratio thresholds
- T3-5f3411d210: Elements must meet minimum color contrast ratio thresholds
- T3-5fe9ed3659: Elements must meet minimum color contrast ratio thresholds
- T3-603e7646be: Elements must meet minimum color contrast ratio thresholds
- T3-630394f3bf: Elements must meet minimum color contrast ratio thresholds
- T3-63634d2e3b: Elements must meet minimum color contrast ratio thresholds
- T3-637a36dc67: Elements must meet minimum color contrast ratio thresholds
- T3-6444b40767: Elements must meet minimum color contrast ratio thresholds
- T3-6455886057: Elements must meet minimum color contrast ratio thresholds
- T3-6670aac2c0: Elements must meet minimum color contrast ratio thresholds
- T3-6808a89bd4: Etiqueta "Aguarda complementos": texto #ffffff sobre #8289ff, 14px normal = 3,01:1
- T3-6f2a14f4f8: Texto branco #ffffff sobre laranja #e66f0e nas etiquetas de status (Em análise analista/supervisor/diretor), 14px normal: contraste 3,16:1.
- T3-6f926b4618: Elements must meet minimum color contrast ratio thresholds
- T3-6fc1e9129b: Elements must meet minimum color contrast ratio thresholds
- T3-703b92e076: Elements must meet minimum color contrast ratio thresholds
- T3-72d10d2fef: Elements must meet minimum color contrast ratio thresholds
- T3-73845e6242: Elements must meet minimum color contrast ratio thresholds
- T3-74618dee50: Elements must meet minimum color contrast ratio thresholds
- T3-74f757b1e5: Elements must meet minimum color contrast ratio thresholds
- T3-7641d91ee6: Elements must meet minimum color contrast ratio thresholds
- T3-7a11e98782: Elements must meet minimum color contrast ratio thresholds
- T3-7d4f9eb60d: Elements must meet minimum color contrast ratio thresholds
- T3-7dbf954ec0: Elements must meet minimum color contrast ratio thresholds
- T3-7e19ca0c7f: Elements must meet minimum color contrast ratio thresholds
- T3-7e4201fa63: Elements must meet minimum color contrast ratio thresholds
- T3-7eafef2bfb: Elements must meet minimum color contrast ratio thresholds
- T3-7ed4e05c57: Elements must meet minimum color contrast ratio thresholds
- T3-8327e2bb94: Elements must meet minimum color contrast ratio thresholds
- T3-850b66de43: Elements must meet minimum color contrast ratio thresholds
- T3-8627b33ce8: Elements must meet minimum color contrast ratio thresholds
- T3-86d348eb92: Elements must meet minimum color contrast ratio thresholds
- T3-879c080bd2: Elements must meet minimum color contrast ratio thresholds
- T3-8a83a0ee6d: Elements must meet minimum color contrast ratio thresholds
- T3-8b3e2890d5: Elements must meet minimum color contrast ratio thresholds
- T3-8d0320ea03: Elements must meet minimum color contrast ratio thresholds
- T3-8ee20b1eac: Elements must meet minimum color contrast ratio thresholds
- T3-8f1005705e: Elements must meet minimum color contrast ratio thresholds
- T3-8fe72347b8: Selos 'Aguardando plano de ação' e 'Aguardando SFPA': texto #ffffff sobre #888888, 14px, contraste 3,54:1
- T3-951fe66ae7: Elements must meet minimum color contrast ratio thresholds
- T3-9631f847eb: Elements must meet minimum color contrast ratio thresholds
- T3-9662420a53: Elements must meet minimum color contrast ratio thresholds
- T3-96fa60bc54: Etiquetas de status laranja ("Em análise analista/supervisor/diretor"): #ffffff sobre #e66f0e, 14px normal, contraste 3,16:1.
- T3-97879ff081: Elements must meet minimum color contrast ratio thresholds
- T3-97bff6ebe8: Elements must meet minimum color contrast ratio thresholds
- T3-99b64e49c4: Elements must meet minimum color contrast ratio thresholds
- T3-99fa48a9f4: Elements must meet minimum color contrast ratio thresholds
- T3-9a9185064e: Elements must meet minimum color contrast ratio thresholds
- T3-9ab16fc947: Elements must meet minimum color contrast ratio thresholds
- T3-9ad531b94c: Elements must meet minimum color contrast ratio thresholds
- T3-9bbb9072b9: Elements must meet minimum color contrast ratio thresholds
- T3-9ce4673000: Elements must meet minimum color contrast ratio thresholds
- T3-9f6041ac4a: Elements must meet minimum color contrast ratio thresholds
- T3-a0be2c67d4: Elements must meet minimum color contrast ratio thresholds
- T3-a0c2fde2d9: Elements must meet minimum color contrast ratio thresholds
- T3-a243a939c3: Elements must meet minimum color contrast ratio thresholds
- T3-a3a83c6a8a: Etiqueta 'Aguarda complementos': texto #ffffff sobre #8289ff, 14px, contraste 3,01:1.
- T3-a6298a7a49: Elements must meet minimum color contrast ratio thresholds
- T3-a658d23fb7: Elements must meet minimum color contrast ratio thresholds
- T3-a752f59ade: Elements must meet minimum color contrast ratio thresholds
- T3-a8b30a190e: Elements must meet minimum color contrast ratio thresholds
- T3-a8cb4dea3c: Elements must meet minimum color contrast ratio thresholds
- T3-a932400922: Elements must meet minimum color contrast ratio thresholds
- T3-a942448d17: Elements must meet minimum color contrast ratio thresholds
- T3-aaa45a0e5d: Elements must meet minimum color contrast ratio thresholds
- T3-ac0465d2a4: Etiquetas de status ("Em análise analista", "Em análise supervisor", "Em análise diretor"): texto #ffffff sobre #e66f0e, 14px normal = 3,16:
- T3-ac508de9b0: Elements must meet minimum color contrast ratio thresholds
- T3-ac83284d71: Elements must meet minimum color contrast ratio thresholds
- T3-ad13656653: Elements must meet minimum color contrast ratio thresholds
- T3-adfb035e20: Elements must meet minimum color contrast ratio thresholds
- T3-ae69ac2c2c: Elements must meet minimum color contrast ratio thresholds
- T3-b031620bf3: Elements must meet minimum color contrast ratio thresholds
- T3-b175690c11: Elements must meet minimum color contrast ratio thresholds
- T3-b28f6a9800: Elements must meet minimum color contrast ratio thresholds
- T3-b296052b3b: Elements must meet minimum color contrast ratio thresholds
- T3-b2b9597ace: Elements must meet minimum color contrast ratio thresholds
- T3-b3b178b121: Elements must meet minimum color contrast ratio thresholds
- T3-b4ad5754d0: Elements must meet minimum color contrast ratio thresholds
- T3-b4c51926fa: Elements must meet minimum color contrast ratio thresholds
- T3-b5324be9da: Elements must meet minimum color contrast ratio thresholds
- T3-b56ae385f0: Elements must meet minimum color contrast ratio thresholds
- T3-b6034f572f: Elements must meet minimum color contrast ratio thresholds
- T3-b84cc05f09: Elements must meet minimum color contrast ratio thresholds
- T3-b95ecf86ea: Elements must meet minimum color contrast ratio thresholds
- T3-b99936e40e: Elements must meet minimum color contrast ratio thresholds
- T3-ba30f34021: Elements must meet minimum color contrast ratio thresholds
- T3-bdec418c63: Elements must meet minimum color contrast ratio thresholds
- T3-bf147cf83f: Elements must meet minimum color contrast ratio thresholds
- T3-c184c43d4c: Elements must meet minimum color contrast ratio thresholds
- T3-c396c34dfc: Elements must meet minimum color contrast ratio thresholds
- T3-c6b81ae4c8: Elements must meet minimum color contrast ratio thresholds
- T3-c7a7136b96: Elements must meet minimum color contrast ratio thresholds
- T3-cb42c1bc2d: Elements must meet minimum color contrast ratio thresholds
- T3-cbdb867dc7: Elements must meet minimum color contrast ratio thresholds
- T3-ccf627a149: Elements must meet minimum color contrast ratio thresholds
- T3-cdee6ca44d: Elements must meet minimum color contrast ratio thresholds
- T3-ce0a2acf4c: Elements must meet minimum color contrast ratio thresholds
- T3-ce9c8c5ee5: Elements must meet minimum color contrast ratio thresholds
- T3-cf45f92240: Elements must meet minimum color contrast ratio thresholds
- T3-cf5b39955c: Elements must meet minimum color contrast ratio thresholds
- T3-d0091b882c: Elements must meet minimum color contrast ratio thresholds
- T3-d03d933104: Elements must meet minimum color contrast ratio thresholds
- T3-d29d9d0604: Elements must meet minimum color contrast ratio thresholds
- T3-d2bb4eb770: Etiqueta "Aguarda complementos": #ffffff sobre #8289ff, 14px, contraste 3,01:1.
- T3-d2f54f8c2b: Elements must meet minimum color contrast ratio thresholds
- T3-d3b0d58fc5: Elements must meet minimum color contrast ratio thresholds
- T3-d3b81b820d: Elements must meet minimum color contrast ratio thresholds
- T3-d4c741e0a2: Elements must meet minimum color contrast ratio thresholds
- T3-d630105cf0: Elements must meet minimum color contrast ratio thresholds
- T3-d8263a9721: Elements must meet minimum color contrast ratio thresholds
- T3-d94b6c8eb1: Elements must meet minimum color contrast ratio thresholds
- T3-d9c0b25b0d: Elements must meet minimum color contrast ratio thresholds
- T3-d9d2e26d29: Elements must meet minimum color contrast ratio thresholds
- T3-d9de517974: Elements must meet minimum color contrast ratio thresholds
- T3-daf7397a33: Selo 'Aguarda complementos': texto #ffffff sobre #8289ff, 14px, contraste 3,01:1
- T3-dc45aedd69: Elements must meet minimum color contrast ratio thresholds
- T3-dedd669850: Elements must meet minimum color contrast ratio thresholds
- T3-e1ad352d3b: Elements must meet minimum color contrast ratio thresholds
- T3-e2b49c0ad3: Elements must meet minimum color contrast ratio thresholds
- T3-e34aa424fb: Elements must meet minimum color contrast ratio thresholds
- T3-e49b57c246: Elements must meet minimum color contrast ratio thresholds
- T3-e57117f5bc: Elements must meet minimum color contrast ratio thresholds
- T3-e796618931: Elements must meet minimum color contrast ratio thresholds
- T3-ea3c210da1: Elements must meet minimum color contrast ratio thresholds
- T3-ea64a11678: Elements must meet minimum color contrast ratio thresholds
- T3-eb3afef681: Elements must meet minimum color contrast ratio thresholds
- T3-ed4b7d42a1: Texto branco #ffffff sobre #8289ff na etiqueta "Aguarda complementos", 14px normal: contraste 3,01:1.
- T3-f010c8a0ec: Elements must meet minimum color contrast ratio thresholds
- T3-f05cb15174: Elements must meet minimum color contrast ratio thresholds
- T3-f0fd314c82: Elements must meet minimum color contrast ratio thresholds
- T3-f194be78e9: Elements must meet minimum color contrast ratio thresholds
- T3-f320d32b35: Elements must meet minimum color contrast ratio thresholds
- T3-f4c1bcece1: Elements must meet minimum color contrast ratio thresholds
- T3-f561470c25: Elements must meet minimum color contrast ratio thresholds
- T3-f67e9e16b0: Elements must meet minimum color contrast ratio thresholds
- T3-fb17839749: Elements must meet minimum color contrast ratio thresholds
- T3-fb9ae40f0c: Elements must meet minimum color contrast ratio thresholds
- T3-fc3ea4912f: Elements must meet minimum color contrast ratio thresholds
- T3-fd827f3775: Elements must meet minimum color contrast ratio thresholds
- T3-fe4b1bc737: Elements must meet minimum color contrast ratio thresholds

