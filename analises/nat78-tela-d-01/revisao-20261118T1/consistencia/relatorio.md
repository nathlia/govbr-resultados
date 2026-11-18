# Revisão de campanha nova — consistência da 1ª passada (triagem)

1308 átomos, um juiz por lote. Relatório interno: não vai aos juízes. Os grupos são **triagem** de possíveis inconsistências, não equivalência (regras: `regras.md`, sha256 `f7237f6840ef4cedc52c689ba7178502a95334f621f04029bac967408025ec04`).

## Resumo

| | mesma alegação (MA) | mesma leitura da norma (LN) |
|---|---:|---:|
| grupos (todos) | 239 | 108 |
| grupos com ≥ 2 membros | 142 | 85 |
| átomos nesses grupos | 1211 | 1224 |
| grupos com membros de lotes diferentes | 141 | 85 |
| grupos divergentes (algum campo) | 25 | 28 |
| grupos em que a classe diverge | 24 | 27 |
| grupos em que o crédito muda | 11 | 14 |
| grupos com resposta de norma divergente | 13 | 12 |
| grupos à adjudicação (regras §2) | 24 (220 átomos) | 12 (180 átomos) |
| pares concordantes — campos gerais¹, todos | 97.6% (7112/7290) | 94.7% (18241/19266) |
| idem, mesmo lote | 100.0% (164/164) | 95.7% (427/446) |
| idem, entre lotes | 97.5% (6948/7126) | 94.7% (17814/18820) |
| cobertura (pares comparáveis / pares) | 94.7% (7290/7698) | 100.0% (19266/19266) |

¹ MA: todos os campos; LN: só a resposta de norma (id, força, aplicabilidade, violada).

**Cartões cegos idênticos** (único vínculo auditável de equivalência): 26 grupos, 234 átomos (26 grupos com lotes diferentes); divergem 2 (classe 2, crédito 2). Pares concordantes em todos os campos: 99.8% (908/910) (mesmo lote 100.0% (18/18), entre lotes 99.8% (890/892)); na classe: 97.2% (910/936) (entre lotes 97.2% (892/918)).

## Concordância por campo — mesma alegação

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 7698/7698 (100.0%) | 100.0% (7698/7698) | 100.0% (168/168) | 100.0% (7530/7530) | 142/142 | 0 |
| norma.id | 7698/7698 (100.0%) | 99.9% (7693/7698) | 99.4% (167/168) | 100.0% (7526/7530) | 141/142 | 1 |
| norma.forca | 7698/7698 (100.0%) | 99.9% (7693/7698) | 99.4% (167/168) | 100.0% (7526/7530) | 141/142 | 1 |
| norma.aplicabilidade | 7698/7698 (100.0%) | 95.2% (7331/7698) | 98.2% (165/168) | 95.2% (7166/7530) | 132/142 | 10 |
| norma.violada | 7698/7698 (100.0%) | 94.3% (7262/7698) | 98.2% (165/168) | 94.3% (7097/7530) | 130/142 | 12 |
| vinculo | 7698/7698 (100.0%) | 98.4% (7576/7698) | 99.4% (167/168) | 98.4% (7409/7530) | 132/142 | 10 |
| vinculo.relacao | 3090/7698 (40.1%) | 100.0% (3090/3090) | 100.0% (61/61) | 100.0% (3029/3029) | 58/58 | 0 |
| sugestao | 139/7698 (1.8%) | 83.5% (116/139) | 100.0% (3/3) | 83.1% (113/136) | 12/17 | 5 |
| classe | 7698/7698 (100.0%) | 92.7% (7133/7698) | 97.6% (164/168) | 92.5% (6969/7530) | 118/142 | 24 |
| credita | 7698/7698 (100.0%) | 98.2% (7558/7698) | 99.4% (167/168) | 98.2% (7391/7530) | 131/142 | 11 |
| credito | 7698/7698 (100.0%) | 98.2% (7558/7698) | 99.4% (167/168) | 98.2% (7391/7530) | 131/142 | 11 |
| fundamentacao | 7698/7698 (100.0%) | 98.1% (7550/7698) | 99.4% (167/168) | 98.0% (7383/7530) | 131/142 | 11 |

## Concordância por campo — mesma leitura da norma

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 19266/19266 (100.0%) | 100.0% (19266/19266) | 100.0% (446/446) | 100.0% (18820/18820) | 85/85 | 0 |
| norma.id | 19266/19266 (100.0%) | 100.0% (19266/19266) | 100.0% (446/446) | 100.0% (18820/18820) | 85/85 | 0 |
| norma.forca | 19266/19266 (100.0%) | 100.0% (19266/19266) | 100.0% (446/446) | 100.0% (18820/18820) | 85/85 | 0 |
| norma.aplicabilidade | 19266/19266 (100.0%) | 95.1% (18317/19266) | 95.7% (427/446) | 95.1% (17890/18820) | 77/85 | 8 |
| norma.violada | 19266/19266 (100.0%) | 94.7% (18244/19266) | 95.7% (427/446) | 94.7% (17817/18820) | 74/85 | 11 |
| vinculo | 19266/19266 (100.0%) | 90.0% (17330/19266) | 89.7% (400/446) | 90.0% (16930/18820) | 72/85 | 13 |
| vinculo.relacao | 10825/19266 (56.2%) | 100.0% (10825/10825) | 100.0% (247/247) | 100.0% (10578/10578) | 32/32 | 0 |
| sugestao | 148/19266 (0.8%) | 80.4% (119/148) | 100.0% (3/3) | 80.0% (116/145) | 11/17 | 6 |
| classe | 19266/19266 (100.0%) | 84.6% (16295/19266) | 85.4% (381/446) | 84.6% (15914/18820) | 58/85 | 27 |
| credita | 19266/19266 (100.0%) | 89.9% (17312/19266) | 89.7% (400/446) | 89.9% (16912/18820) | 71/85 | 14 |
| credito | 19266/19266 (100.0%) | 89.9% (17312/19266) | 89.7% (400/446) | 89.9% (16912/18820) | 71/85 | 14 |
| fundamentacao | 19266/19266 (100.0%) | 89.8% (17304/19266) | 89.7% (400/446) | 89.8% (16904/18820) | 71/85 | 14 |

## Método

Concordância descritiva: pares de membros dentro dos grupos com ≥ 2 membros; denominador = pares comparáveis (os dois responderam o campo; para vários campos, mesma forma de resposta em cada campo); cobertura = comparáveis / pares; mesmo lote (mesmo juiz) e entre lotes separados. Sem κ: cada átomo tem um julgamento só, e membros de um grupo não são avaliações repetidas do mesmo item.

Equivalência, seleção, adjudicação e parada: `regras.md`.

## Por campanha × braço (contagens)

| campanha | braço | átomos | em grupo MA divergente | em grupo MA que muda crédito | em grupo LN com norma divergente | à adjudicação |
|---|---|---:|---:|---:|---:|---:|
| nat78-tela-d-01 | com | 398 | 74 | 22 | 71 | 100 |
| nat78-tela-d-01 | ferramentas | 327 | 58 | 27 | 32 | 65 |
| nat78-tela-d-01 | lb-axe | 189 | 18 | 18 | 9 | 18 |
| nat78-tela-d-01 | lb-validator | 45 | 0 | 0 | 9 | 9 |
| nat78-tela-d-01 | sem | 349 | 81 | 38 | 59 | 95 |

## Grupos divergentes — mesma alegação (25; 24 à adjudicação; 11 mudam o crédito)

### MA-07f6a581 · 2 membros · lotes lote-05, lote-31 · → adjudicação

Tela processos · completa · regra `emag:1.8` · estado `1280x900` · tipo div  
Sujeito: `body>pnip-root>pnip-header>div>div>div`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1febc09781 | 05 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-c48b14f4e7 | 31 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1febc09781: O menu do avatar (e o gatilho) ficam fora das regiões banner/main/nav: o conteúdo não está em nenhum landmark.
- T3-c48b14f4e7: O menu do avatar (e o gatilho #avatar-dropdown-trigger) fica fora de qualquer landmark: é irmão de <br-header> dentro de pnip-header, fora d

### MA-09d8c3eb · 22 membros · lotes lote-06, lote-08, lote-10, lote-11, lote-12, lote-13, lote-14, lote-16, lote-21, lote-25, lote-26, lote-27, lote-29, lote-30, lote-31, lote-32, lote-34, lote-39, lote-41 · **muda crédito** · → adjudicação

Tela processos · completa · regra `wcag:1.4.3` · estado `1280x900` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div ; body>pnip-root>`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-23b29c074b | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3096d29ae1 | 08 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3f186d453c | 10 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-412d4a10ad | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-4cbcb9dc40 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-52642d7559 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-56252374d1 | 14 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-6293d5e8c6 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-65745c247f | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-84b9755990 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9c05b1b55b | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9f48d0e724 | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9f98b41ef8 | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a093a0e796 | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a5e5e2e17e | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-b736b7074d | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bf29f9a8bd | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-c2f0af0593 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ce3deccae1 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d4b60b3f06 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-f3a5c2400f | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-fd2ccd6513 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |

Textos observados (conferência do agrupamento):
- T3-23b29c074b: Etiquetas "Aguardando plano de ação" e "Aguardando SFPA" (e "Aguardando análise" na aba correspondente): texto branco sobre rgb(136,136,136)
- T3-3096d29ae1: Etiquetas de status cinza ("Aguardando plano de ação", "Aguardando SFPA", e na aba Aguardando análise as 9 etiquetas "Aguardando análise"): 
- T3-3f186d453c: Badges "Aguardando plano de ação" e "Aguardando SFPA" (e "Aguardando análise" na aba Aguardando análise): texto branco sobre rgb(136,136,136
- T3-412d4a10ad: Selos cinza ("Aguardando plano de ação", "Aguardando SFPA"; e os 9 selos "Aguardando análise" da aba Aguardando análise): texto #ffffff sobr
- T3-4cbcb9dc40: Na aba 'Aguardando análise', as 9 etiquetas 'Aguardando análise' têm #ffffff sobre #888888 (14px): contraste 3,54:1
- T3-52642d7559: Selos cinza "Aguardando plano de ação" e "Aguardando SFPA": branco sobre #888888, 14px = 3,54:1
- T3-56252374d1: Tags de status cinza ("Aguardando plano de ação", "Aguardando SFPA"; também as 9 tags "Aguardando análise" da aba Aguardando análise): #ffff
- T3-6293d5e8c6: Os selos "Aguardando plano de ação" e "Aguardando SFPA" (e "Aguardando análise" na aba correspondente) têm texto branco 14px/500 sobre rgb(1
- T3-65745c247f: Etiquetas 'Aguardando plano de ação' e 'Aguardando SFPA' #ffffff sobre #888888 (14px): contraste 3,54:1
- T3-84b9755990: Etiquetas "Aguardando plano de ação", "Aguardando SFPA" (e "Aguardando análise" na aba Aguardando análise): #ffffff sobre #888888, 14px = 3,
- T3-9c05b1b55b: Etiquetas 'Aguardando plano de ação', 'Aguardando SFPA' e, na aba Aguardando análise, as 9 etiquetas 'Aguardando análise': texto #ffffff sob
- T3-9f48d0e724: Texto branco sobre cinza rgb(136,136,136), 14px peso 500: contraste 3,54:1 ("Aguardando plano de ação", "Aguardando SFPA"; também "Aguardand
- T3-9f98b41ef8: Selos 'Aguardando SFPA', 'Aguardando plano de ação' e 'Aguardando análise' (esta na aba Aguardando análise): #fff de 14px sobre rgb(136,136,
- T3-a093a0e796: Etiquetas de status cinza ("Aguardando plano de ação", "Aguardando SFPA" e, na aba Aguardando análise, "Aguardando análise" ×9): texto #ffff
- T3-a5e5e2e17e: Texto branco em fundo rgb(136,136,136), 14px peso 500: contraste 3,54:1 ("Aguardando plano de ação", "Aguardando SFPA"; o mesmo selo "Aguard
- T3-b736b7074d: Aba Aguardando análise: os 9 selos "Aguardando análise" têm texto branco sobre #888888, 14px = 3,54:1
- T3-bf29f9a8bd: Selos cinza ('Aguardando plano de ação', 'Aguardando SFPA'; na aba 'Aguardando análise', os 9 selos 'Aguardando análise'): texto #ffffff sob
- T3-c2f0af0593: Etiquetas "Aguardando plano de ação", "Aguardando SFPA" (e "Aguardando análise" na aba correspondente): texto branco de 14px sobre rgb(136,1
- T3-ce3deccae1: Texto branco sobre fundo #888888 (tags cinza "Aguardando plano de ação", "Aguardando SFPA"), 14px: contraste 3.54:1.
- T3-d4b60b3f06: Texto branco sobre cinza rgb(136,136,136), 14px peso 500: contraste 3,54:1 ("Aguardando plano de ação", "Aguardando SFPA"; também "Aguardand
- T3-f3a5c2400f: Etiquetas de status cinza ("Aguardando plano de ação", "Aguardando SFPA" e todas as "Aguardando análise" da aba Aguardando análise): texto #
- T3-fd2ccd6513: Etiquetas "Aguardando plano de ação" e "Aguardando SFPA" (e "Aguardando análise" na outra aba): texto branco sobre cinza rgb(136,136,136), 1

### MA-0d06c46f · 9 membros · lotes lote-04, lote-13, lote-20, lote-21, lote-23, lote-27, lote-29, lote-38 · **muda crédito** · → adjudicação

Tela processos · completa · regra `axe:page-has-heading-one` · estado `1280x900` · tipo não resolvido  
Sujeito: `unresolved:iframe html`

Divergem: norma.aplicabilidade, norma.violada, vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-146b75092a | 04 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-5321c8f113 | 13 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-7fa1bee370 | 20 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-7fb8e84467 | 20 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-8215ab55ea | 21 | verdadeira | citada | boa-pratica | nao-aplica | nao | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-908e4e0e9e | 23 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-aa3fe27a5a | 27 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-b350558637 | 29 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-ed46fbbb2f | 38 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-146b75092a: Page should contain a level-one heading
- T3-5321c8f113: Page should contain a level-one heading
- T3-7fa1bee370: Page should contain a level-one heading
- T3-7fb8e84467: Page should contain a level-one heading
- T3-8215ab55ea: Page should contain a level-one heading
- T3-908e4e0e9e: Page should contain a level-one heading
- T3-aa3fe27a5a: Page should contain a level-one heading
- T3-b350558637: Page should contain a level-one heading
- T3-ed46fbbb2f: Page should contain a level-one heading

### MA-16d246a4 · 3 membros · lotes lote-15, lote-20, lote-31 · → adjudicação

Tela processos · completa · regra `emag:1.1` · estado `1280x900` · tipo botão com texto  
Sujeito: `body>pnip-root>pnip-header>div>div>div>button`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-5e190bc88e | 15 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-7d93cc0d43 | 20 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-c7bbc5b179 | 31 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-5e190bc88e: <button type=button href='javascript:void(0)'> contendo <p>Sair</p>: href não é atributo de button e <p> não é conteúdo permitido em button.
- T3-7d93cc0d43: Botão "Sair" (<button>) tem atributo href="javascript:void(0)" (inválido em button) e um <p> como filho (conteúdo de fluxo não permitido em 
- T3-c7bbc5b179: <button type=button href="javascript:void(0)"> com <p> dentro: atributo href e conteúdo de bloco não permitidos em button

### MA-3efef2bd · 2 membros · lotes lote-04, lote-22 · → adjudicação

Tela processos · completa · regra `wcag:4.1.2` · estado `1280x900` · tipo não resolvido  
Sujeito: `unresolved:.swal2-popup[role=dialog]`

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-14aaac2432 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8b1cd7bd70 | 22 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-14aaac2432: O diálogo de assinatura (role="dialog", aria-modal="true") usa aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com display:
- T3-8b1cd7bd70: O diálogo de confirmação "Tem certeza que deseja desassociar esse processo do analista responsável?" usa aria-labelledby="swal2-title" apont

### MA-3f8ae66a · 13 membros · lotes lote-01, lote-04, lote-06, lote-11, lote-12, lote-16, lote-17, lote-21, lote-27, lote-28, lote-35, lote-40 · **muda crédito** · → adjudicação

Tela processos · completa · regra `wcag:2.4.2` · estado `1280x900` · tipo title  
Sujeito: `head>title`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-005fd1be13 | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-1595d03386 | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-2457da01fd | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-44a27a3ad3 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-4e159c0865 | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-673541bf3a | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-6c7dda52a4 | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-827989816d | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-855880d2f6 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-a9e6383bde | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-af06468c21 | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-da171dfea4 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-f538d9dbde | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-005fd1be13: O título do documento é apenas 'PNIP' (o mesmo na tela de login e no detalhe de processo), sem indicar a página 'Processos'.
- T3-1595d03386: O título do documento é "PNIP" na lista e nos detalhes; não identifica a página
- T3-2457da01fd: O título do documento é "PNIP" (só a sigla), igual nas rotas de detalhe e de exportação; não descreve a página "Processos".
- T3-44a27a3ad3: document.title = 'PNIP' na lista de processos e também nas rotas de detalhe e exportação; não identifica a página.
- T3-4e159c0865: O título do documento é apenas "PNIP", idêntico nas rotas /processos, /processos/exportar e nas de detalhe.
- T3-673541bf3a: O título do documento é só "PNIP" nesta tela (e também nas telas de detalhe e de exportação).
- T3-6c7dda52a4: O título do documento é apenas "PNIP" e não muda com a tela (igual na lista e nos detalhes).
- T3-827989816d: O título do documento é apenas "PNIP" nesta tela e também nas telas de detalhe e de exportação; não descreve o tema da página.
- T3-855880d2f6: O título do documento é apenas "PNIP" em todos os estados da tela (inclusive nas abas, diálogos e no detalhe), sem identificar a página "Pro
- T3-a9e6383bde: O título do documento é apenas "PNIP" na tela Processos (e igual nas demais rotas visitadas).
- T3-af06468c21: Título do documento é só "PNIP" nesta tela (e também no detalhe e na exportação), sem identificar a página "Processos".
- T3-da171dfea4: O título do documento é apenas "PNIP" e não descreve a página "Processos".
- T3-f538d9dbde: No detalhe do processo, o título do documento continua "PNIP", igual ao da lista; não identifica a página.

### MA-44f77d40 · 4 membros · lotes lote-15, lote-26, lote-27, lote-32 · → adjudicação

Tela processos · completa · regra `wcag:1.3.1` · estado `1280x900` · tipo não resolvido  
Sujeito: `unresolved:main h4`

Divergem: norma.aplicabilidade, sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-6045c4a175 | 15 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-a4cc51d643 | 26 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-a71ece49f2 | 27 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-ccba849b21 | 32 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-6045c4a175: Detalhe (uniao-europeia): depois do h2 do título, as seções "Dados da Embarcação" etc. são h4 (pula o nível 3)
- T3-a4cc51d643: Detalhe (alteracao-certificado, 0001): seções h4 logo após o h2 (salto de nível)
- T3-a71ece49f2: Detalhe (uniao-europeia), com a seção expandida: as seções continuam h4 após o h2 (salto de nível)
- T3-ccba849b21: Detalhe (alteracao-certificado, 0010): após o h2 "Alteração de Certificado", as seções "1. Dados da embarcação"… são h4 (pula o nível 3)

### MA-498d1bb5 · 10 membros · lotes lote-11, lote-18, lote-22, lote-23, lote-24, lote-30, lote-34, lote-35, lote-39, lote-40 · **muda crédito** · → adjudicação

Tela processos · completa · regra `wcag:2.1.1` · estado `1280x900` · tipo span  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span ; body>pnip-root>main>pnip-`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-42123df569 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-7588d55841 | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8798cd4e8e | 22 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-913d80dd6f | 23 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-95a2d962b6 | 24 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-c1a7efc8c4 | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-d54cb8ce7c | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-dc8437ec7d | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-f4cc2849b3 | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-f6dce3b19c | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |

Textos observados (conferência do agrupamento):
- T3-42123df569: As tags de filtro "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são spans com cursor:pointer, se
- T3-7588d55841: No detalhe, os controles "Mostrar"/"Ocultar" das seções são <span> clicáveis, tabIndex -1, sem role nem aria-expanded.
- T3-8798cd4e8e: Os 6 filtros (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span class="br-tag interaction"> com apenas
- T3-913d80dd6f: Detalhe (uniao-europeia): "Mostrar"/"Ocultar" das seções são <span> com cursor:pointer, sem tabindex: inalcançáveis pelo teclado
- T3-95a2d962b6: Os 6 chips de filtro ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span> com cursor:pointe
- T3-c1a7efc8c4: Os 6 filtros (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são span com cursor:pointer, tabIndex -1 e sem r
- T3-d54cb8ce7c: Os 6 filtros ('Aberto há', 'Tipo de processo', 'Status', 'Espécie alvo', 'Método de pesca', 'Petrecho') são span com cursor:pointer, sem tab
- T3-dc8437ec7d: Os 6 filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span> com cursor:pointer, sem t
- T3-f4cc2849b3: Os 6 filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span class="br-tag interaction"
- T3-f6dce3b19c: Os 6 filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span> com cursor:pointer que ab

### MA-4b5479b4 · 9 membros · lotes lote-01, lote-04, lote-07, lote-09, lote-15, lote-17, lote-19, lote-22, lote-24 · → adjudicação

Tela processos · completa · regra `axe:aria-dialog-name` · estado `1280x900` · tipo não resolvido  
Sujeito: `unresolved:.swal2-popup`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-04b151128f | 01 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-15a9b9d822 | 04 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2e779a79eb | 07 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-39cc742cdf | 09 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-5f170f278f | 15 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-6e08d85c26 | 17 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-7857ef48ec | 19 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8c802ecd0a | 22 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-9979c29fcd | 24 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-04b151128f: Diálogo de confirmação de desassociação (role="dialog", aria-modal) tem aria-labelledby="swal2-title" apontando para <h2> vazio e oculto: o 
- T3-15a9b9d822: Diálogo de assinatura (role=dialog, aria-modal=true) com aria-labelledby='swal2-title', mas h2#swal2-title está vazio e display:none; o diál
- T3-2e779a79eb: O diálogo de assinatura (role=dialog, aria-modal=true) tem aria-labelledby="swal2-title", mas o h2 #swal2-title está vazio e com display:non
- T3-39cc742cdf: Diálogo de assinatura (PDF + "Solicitar Revisão"/"Assinar com gov.br") tem role=dialog sem nome acessível (título vazio e oculto).
- T3-5f170f278f: Diálogo de confirmação "Tem certeza que deseja desassociar..." tem role=dialog com aria-labelledby apontando para h2#swal2-title vazio e ocu
- T3-6e08d85c26: Diálogo de confirmação 'Tem certeza que deseja desassociar esse processo do analista responsável?' (role=dialog) com aria-labelledby apontan
- T3-7857ef48ec: Diálogo de confirmação de desassociação (role="dialog", aria-modal="true") com aria-labelledby="swal2-title" apontando para h2 vazio e displ
- T3-8c802ecd0a: Diálogo de assinatura (visualizador de PDF com "Solicitar Revisão"/"Assinar com gov.br") com aria-labelledby="swal2-title" vazio e oculto; s
- T3-9979c29fcd: Diálogo de confirmação (role=dialog, aria-modal) aponta aria-labelledby para h2#swal2-title vazio e oculto: diálogo sem nome. O mesmo ocorre

### MA-53870c9b · 13 membros · lotes lote-07, lote-08, lote-09, lote-10, lote-15, lote-21, lote-22, lote-24, lote-25, lote-27, lote-36 · **muda crédito** · → adjudicação

Tela processos · completa · regra `emag:1.3` · estado `1280x900` · tipo h2  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-2e8237ce4c | 07 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-35003a4197 | 08 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-37de07259d | 09 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-3cde7f15c2 | 10 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-617baa4951 | 15 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-61998ebe74 | 15 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-846186acff | 21 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-8d5e6b962b | 22 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-97139d6ae3 | 24 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-9db620fed3 | 25 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-a6cc521357 | 27 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-aa46420ccb | 27 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-e029271f30 | 36 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-2e8237ce4c: A página não tem h1; o título principal "Processos" é h2 e é o único cabeçalho da tela.
- T3-35003a4197: O título principal "Processos" é h2 e não há h1 na página.
- T3-37de07259d: A página não tem h1: o título principal "Processos" é h2 e é o único cabeçalho da tela.
- T3-3cde7f15c2: O único cabeçalho da página é o <h2> "Processos"; não há <h1>.
- T3-617baa4951: O único cabeçalho da página é <h2>Processos</h2>; não existe nenhum h1.
- T3-61998ebe74: O título principal "Processos" é h2 e não há h1 na página (único cabeçalho do documento).
- T3-846186acff: O título principal "Processos" é <h2>; a página não tem <h1>
- T3-8d5e6b962b: O título principal "Processos" é um h2; não há h1 na página (nem no shadow DOM).
- T3-97139d6ae3: O detalhe (uniao-europeia) não tem h1; o título principal é h2.
- T3-9db620fed3: O único cabeçalho da página é h2 'Processos'; não existe h1.
- T3-a6cc521357: Não existe h1 na página (nem no shadow DOM do cabeçalho); o título principal "Processos" é h2 e é o único cabeçalho da tela.
- T3-aa46420ccb: A página não tem nenhum h1; o único cabeçalho do conteúdo é <h2>Processos</h2>.
- T3-e029271f30: Não há h1 na página; o título principal "Processos" é h2 (o título do sistema no cabeçalho é um div)

### MA-6149191b · 30 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05, lote-06, lote-09, lote-10, lote-12, lote-15, lote-16, lote-20, lote-23, lote-24, lote-25, lote-27, lote-30, lote-32, lote-33, lote-35, lote-36, lote-37, lote-39 · → adjudicação

Tela processos · completa · regra `wcag:4.1.2` · estado `1280x900` · tipo não resolvido  
Sujeito: `unresolved:.swal2-popup`

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-03c4d403d9 | 01 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-051abbc185 | 01 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-09e18dced7 | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0e63cdf597 | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-18d04507c3 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1aabeff51f | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1cf2c5ea3e | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-23cae24e51 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-388ac09e16 | 09 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-3f13f28009 | 10 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-4a7f6e71cf | 12 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-4ad3707f68 | 12 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-5e7fd013f5 | 15 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-6662bfb1ee | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7fad33bf6e | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8e183bf8e3 | 23 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-960c5c97d1 | 24 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-9e09c29d7b | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9e2dfb1d88 | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a594e2d41e | 27 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-a6e045d1d7 | 27 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-a7e2b388ac | 27 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-c06ad7c991 | 30 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-ce28641122 | 32 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-d192d2539d | 33 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-daad8d801b | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e34437a371 | 36 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-e463bec1dd | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e5add5f8d3 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f2e932242c | 39 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-03c4d403d9: O diálogo de confirmação de 'Desassociar processo' (role='dialog', aria-labelledby='swal2-title') tem o título vazio: o diálogo não tem nome
- T3-051abbc185: Diálogo de assinatura do processo (PDF, "Solicitar Revisão", "Assinar com gov.br") sem título; aria-labelledby aponta para #swal2-title vazi
- T3-09e18dced7: O diálogo "Assinar" (role=dialog, aria-modal) tem aria-labelledby="swal2-title", mas #swal2-title está vazio e com display:none: o diálogo n
- T3-0e63cdf597: Modal de assinatura (role=dialog, aria-modal) com aria-labelledby="swal2-title" apontando para h2 vazio e oculto: diálogo sem nome acessível
- T3-18d04507c3: Os diálogos de confirmação "Desassociar" e "Assinar" (role="dialog", aria-modal) têm aria-labelledby="swal2-title", mas #swal2-title está va
- T3-1aabeff51f: O diálogo aberto por "Assinar" (PDF + "Solicitar Revisão"/"Assinar com gov.br", role=dialog) referencia por aria-labelledby o h2#swal2-title
- T3-1cf2c5ea3e: Diálogo "Tem certeza que deseja desassociar esse processo do analista responsável?" (role=dialog) com aria-labelledby="swal2-title", que est
- T3-23cae24e51: Modal de confirmação "Tem certeza que deseja desassociar…" (role=dialog) com aria-labelledby apontando para h2 vazio e oculto: sem nome aces
- T3-388ac09e16: Diálogo do documento (role=dialog, aria-modal): aria-labelledby aponta para h2#swal2-title vazio e oculto; o diálogo fica sem nome acessível
- T3-3f13f28009: O diálogo de confirmação de "Desassociar" tem role="dialog" e aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com display:n
- T3-4a7f6e71cf: Diálogo de assinatura (role='dialog'): aria-labelledby='swal2-title', mas o h2#swal2-title está vazio e com display:none; o diálogo fica sem
- T3-4ad3707f68: Os diálogos (confirmação de "Desassociar" e assinatura em "Assinar") têm role=dialog com aria-labelledby="swal2-title", mas o h2#swal2-title
- T3-5e7fd013f5: O diálogo de confirmação "Tem certeza que deseja desassociar..." (role=dialog, aria-modal) tem aria-labelledby="swal2-title" apontando para 
- T3-6662bfb1ee: O diálogo de assinatura (pré-visualização do PDF, botões "Solicitar Revisão"/"Assinar com gov.br") tem aria-labelledby apontando para o h2#s
- T3-7fad33bf6e: O diálogo de confirmação "Tem certeza que deseja desassociar esse processo do analista responsável?" aponta aria-labelledby para #swal2-titl
- T3-8e183bf8e3: Os diálogos de "Assinar" e de "Desassociar" (SweetAlert2, role="dialog" aria-modal="true") têm aria-labelledby="swal2-title", mas o h2#swal2
- T3-960c5c97d1: O diálogo de assinatura (role=dialog, aria-modal) aponta aria-labelledby para #swal2-title, que está vazio e com display:none: diálogo sem n
- T3-9e09c29d7b: O diálogo de confirmação "Tem certeza que deseja desassociar…" (role=dialog, aria-modal) tem aria-labelledby="swal2-title", mas o título est
- T3-9e2dfb1d88: O diálogo de confirmação "Tem certeza que deseja desassociar esse processo do analista responsável?" (role=dialog) tem aria-labelledby="swal
- T3-a594e2d41e: O diálogo de confirmação "Tem certeza que deseja desassociar esse processo do analista responsável?" (role=dialog, aria-modal) tem aria-labe
- T3-a6e045d1d7: Diálogo de confirmação 'Tem certeza que deseja desassociar...' (role=dialog) com aria-labelledby apontando para #swal2-title vazio e oculto:
- T3-a7e2b388ac: Diálogo de assinatura (pré-visualização em PDF) com role=dialog, aria-labelledby para #swal2-title vazio e oculto: sem nome acessível
- T3-c06ad7c991: Diálogo de assinatura (SweetAlert2, role=dialog, aria-modal) com aria-labelledby="swal2-title" apontando para h2 vazio e oculto: diálogo sem
- T3-ce28641122: O diálogo de 'Assinar' (visualização do PDF com 'Solicitar Revisão' e 'Assinar com gov.br') tem o h2#swal2-title vazio e oculto: o diálogo n
- T3-d192d2539d: Diálogo de confirmação 'Tem certeza que deseja desassociar…' (role='dialog'): aria-labelledby aponta para o h2#swal2-title vazio e oculto; o
- T3-daad8d801b: O diálogo de assinatura individual (PDF + "Solicitar Revisão"/"Assinar com gov.br") tem aria-labelledby para um h2 vazio: sem nome acessível
- T3-e34437a371: O diálogo aberto por "Assinar" (visualização do PDF com "Solicitar Revisão"/"Assinar com gov.br") tem aria-labelledby apontando para o h2#sw
- T3-e463bec1dd: Diálogo de confirmação "Tem certeza que deseja desassociar…" com aria-labelledby apontando para h2#swal2-title vazio e oculto: sem nome aces
- T3-e5add5f8d3: Diálogos SweetAlert (confirmação de Desassociar e assinatura) com role=dialog e aria-labelledby='swal2-title', mas #swal2-title está vazio e
- T3-f2e932242c: O diálogo de confirmação do Desassociar (role="dialog", aria-modal) tem aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com

### MA-6d93e20a · 8 membros · lotes lote-10, lote-14, lote-20, lote-23, lote-24, lote-30, lote-31, lote-32 · → adjudicação

Tela processos · completa · regra `govbr-3.7.0-development-global-137c50bea6ca` · estado `1280x900` · tipo botão com texto  
Sujeito: `body>pnip-root>pnip-header>div>div>div>button`

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-3d0114a0dc | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-54aa9a3acb | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7bec1c8d16 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-90d1f36b46 | 23 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-95bd10ed1f | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c0d4da4c7f | 30 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c3f6e35933 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ca58217725 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-3d0114a0dc: Botão "Sair" com border-radius 20px, fora da escala de raio do DS.
- T3-54aa9a3acb: Botão "Sair" do menu do usuário com border-radius: 20px, fora da escala de raio do DS.
- T3-7bec1c8d16: Botão "Sair" com border-radius 20px, fora da escala de raio do DS.
- T3-90d1f36b46: O botão "Sair" usa border-radius 20px, fora da escala de raios do DS.
- T3-95bd10ed1f: Botão 'Sair' com border-radius 20px, fora da escala do DS.
- T3-c0d4da4c7f: border-radius: 20px no botão 'Sair', fora da escala de tokens
- T3-c3f6e35933: Botão "Sair" (br-item) com border-radius 20px, fora da escala do DS.
- T3-ca58217725: border-radius: 20px no botão "Sair", fora da escala do DS.

### MA-6e35d162 · 20 membros · lotes lote-01, lote-03, lote-04, lote-10, lote-13, lote-15, lote-20, lote-21, lote-25, lote-26, lote-28, lote-31, lote-34, lote-39, lote-41 · → adjudicação

Tela processos · completa · regra `wcag:4.1.2` · estado `1280x900` · tipo componente <br-breadcrumb>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb`

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-05a2d86f4c | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1445d1191d | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-15208153f4 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3d9b75807d | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4f89c5fa3a | 13 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5e3c6aa7b5 | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7cd4f5a7cc | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-80f416b8e6 | 21 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-9bff83c080 | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a1c7879e72 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a4a13c9831 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a4ccc6ef86 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-adaeb1b15a | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-af19f6432c | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b15ade7522 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c586224e7f | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d7fc40c7e2 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d8985db8bf | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f526d78b27 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fea718e447 | 41 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-05a2d86f4c: No shadow DOM do breadcrumb, o item Home é um <a href="/portal-mpa/"> que contém um <button aria-label=""> (elemento interativo aninhado em 
- T3-1445d1191d: No shadow DOM, o item Home é <a href='/portal-mpa/'> contendo <button aria-label=''>: um controle interativo aninhado em outro, que gera dua
- T3-15208153f4: No breadcrumb (shadow DOM), o item Home é <a href="/portal-mpa/"> que contém um <button> (aria-label="", texto sr-only "Home"): controle int
- T3-3d9b75807d: Na trilha, o item "Home" é um <a href="/portal-mpa/"> que contém um <button> (aninhamento de controles interativos); ambos recebem foco e o 
- T3-4f89c5fa3a: No breadcrumb (shadow DOM), o item Home é um <a href="/portal-mpa/"> com um <button> dentro (controles interativos aninhados), e a lista não
- T3-5e3c6aa7b5: No breadcrumb (shadow DOM), o item Home é <a href="/portal-mpa/"><button aria-label="" class="br-button circle">Home</button></a>: controle 
- T3-7cd4f5a7cc: No breadcrumb, o item Home é um <a href="/portal-mpa/"> que contém um <button aria-label=""> (interativo aninhado): a sequência de Tab para 
- T3-80f416b8e6: No breadcrumb, o "Home" é um <a href="/portal-mpa/"> com um <button aria-label=""> dentro: elemento interativo aninhado; a sequência de Tab 
- T3-9bff83c080: O item Home do breadcrumb é um <a href="/portal-mpa/"> contendo um <button> (aria-label="", texto sr-only "Home"): controle interativo aninh
- T3-a1c7879e72: Na trilha (shadow DOM do br-breadcrumb), o item Home é um <a href="/portal-mpa/"> contendo um <button>: o teclado passa por duas paradas con
- T3-a4a13c9831: No shadow DOM do breadcrumb, o item Home é <a href="/portal-mpa/"><button aria-label="" class="br-button small circle">…</button></a>: contr
- T3-a4ccc6ef86: No shadow DOM, o item Home é um <a href="/portal-mpa/"> com um <button> dentro (interativo aninhado). Isso cria dois pontos de tabulação par
- T3-adaeb1b15a: O item "Home" da trilha é um <a href="/portal-mpa/"> contendo um <button aria-label=""> (elementos interativos aninhados; dois alvos de foco
- T3-af19f6432c: No breadcrumb, o item Home é <a href="/portal-mpa/"> contendo um <button class=br-button>: controle interativo aninhado, gerando duas parada
- T3-b15ade7522: O item Home da trilha é um <a href="/portal-mpa/"> com um <button> dentro (controle interativo aninhado); a árvore expõe link "Home" com but
- T3-c586224e7f: No breadcrumb, o item Home é <a href="/portal-mpa/"> que contém <button aria-label="">: são dois controles interativos aninhados e duas para
- T3-d7fc40c7e2: Item Home do breadcrumb é <a href='/portal-mpa/'> contendo <button aria-label=''> (interativo aninhado): o Home recebe duas paradas de Tab s
- T3-d8985db8bf: O item Home da trilha é um <a href="/portal-mpa/"> contendo um <button aria-label=""> (elementos interativos aninhados), gerando duas parada
- T3-f526d78b27: No breadcrumb, o item Home é um <a href> que contém um <button> (aria-label="") — controle interativo aninhado em outro, com duas paradas de
- T3-fea718e447: O item Home do breadcrumb é um <a href="/portal-mpa/"> que contém um <button> (aria-label="" e span sr-only "Home"): controle interativo ani

### MA-6fbbea03 · 10 membros · lotes lote-02, lote-04, lote-08, lote-12, lote-28, lote-32, lote-34, lote-38 · **muda crédito** · → adjudicação

Tela processos · completa · regra `govbr-3.7.0-accessibility-global-9a6edd7d551e` · estado `1280x900` · tipo title  
Sujeito: `head>title`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0a260c66a0 | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-179af0e83e | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-2fc3d9461a | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-324b3dce0e | 08 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-4a6a96102e | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-afa1a3baac | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-b184692bc9 | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-cb831bd473 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-d2ea0b94b7 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-eb60aea637 | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |

Textos observados (conferência do agrupamento):
- T3-0a260c66a0: O título do documento é apenas "PNIP" — o mesmo nas rotas de detalhe e exportação — e não descreve a tela "Processos".
- T3-179af0e83e: O título do documento é "PNIP" (sigla) em todos os estados; não descreve a página "Processos".
- T3-2fc3d9461a: Detalhe "Alteração de Certificado" mantém <title> "PNIP", igual ao da lista.
- T3-324b3dce0e: document.title = "PNIP" em todos os estados da tela; não identifica a tela de Processos.
- T3-4a6a96102e: document.title = 'PNIP' (o mesmo nas rotas /processos, /processos/exportar e detalhe); não descreve a página Processos.
- T3-afa1a3baac: document.title = "PNIP" (sigla genérica, igual em outras rotas como /login), sem referência à tela "Processos".
- T3-b184692bc9: document.title = 'PNIP' em todos os estados; não identifica a tela de Processos
- T3-cb831bd473: document.title = "PNIP" — não identifica a página (Processos); o mesmo título é usado na rota de detalhe.
- T3-d2ea0b94b7: <title> é apenas a sigla "PNIP" na lista de Processos; não identifica a página.
- T3-eb60aea637: document.title = "PNIP" em todos os estados da tela; não identifica a página (Processos).

### MA-77f8573d · 4 membros · lotes lote-10, lote-35, lote-37 · **muda crédito** · → adjudicação

Tela processos · completa · regra `emag:1.3` · estado `1280x900` · tipo raiz  
Sujeito: `(raiz)`

Divergem: vinculo, sugestao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-3c880fb7ae | 10 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-3df6bf704c | 10 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-d93ae0e2e3 | 35 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-e5cf50a9bd | 37 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-3c880fb7ae: O detalhe alteracao-certificado (d0010) não tem h1 (page-has-heading-one).
- T3-3df6bf704c: O detalhe certificacao-caol não tem h1 (page-has-heading-one).
- T3-d93ae0e2e3: A página não tem <h1>; o único cabeçalho é <h2> 'Processos'.
- T3-e5cf50a9bd: O detalhe alteracao-certificado (d0001) não tem h1 (page-has-heading-one).

### MA-7991db10 · 2 membros · lotes lote-16, lote-37 · → adjudicação

Tela processos · completa · regra `govbr-3.7.0-accessibility-global-de4271a11af7` · estado `1280x900` · tipo div  
Sujeito: `body>pnip-root>pnip-header>div>div>div`

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-623d37e857 | 16 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-e5f9ef5f95 | 37 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-623d37e857: O bloco do usuário (.drop-menu-login com o disparador e o #avatar-menu) fica fora de qualquer landmark: o banner envolve só o br-header; com
- T3-e5f9ef5f95: A área do usuário (gatilho e menu) fica fora do banner e de qualquer landmark ([ferramenta citada] region).

### MA-9698d8af · 6 membros · lotes lote-15, lote-20, lote-39, lote-40, lote-41 · → adjudicação

Tela processos · completa · regra `(sem regra)` · estado `1280x900` · tipo componente <br-breadcrumb>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb`

Divergem: norma.id, norma.forca, norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-5e9e3f14e7 | 15 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-7f282dc2b7 | 20 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-f4277ab4f9 | 39 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-f5e7fea68e | 40 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-fc47e7bf35 | 41 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-fe6728c929 | 41 | verdadeira | emag:1.1 | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-5e9e3f14e7: O link "Home" do breadcrumb aponta para href="/portal-mpa/" (fora da base /pnip-d/); ao acioná-lo a navegação vai para http://screens:3300/p
- T3-7f282dc2b7: A trilha está em div.br-breadcrumb > ul, sem elemento nav e sem aria-label. O item atual "Processos" não tem aria-current.
- T3-f4277ab4f9: A trilha é div.br-breadcrumb > ul, sem nav nem aria-label; o item atual 'Processos' não tem aria-current.
- T3-f5e7fea68e: Item "Home" da trilha é um <a href> contendo um <button>: controles aninhados, duas paradas de Tab para o mesmo destino
- T3-fc47e7bf35: A trilha (ul.crumb-list no shadow DOM) não está num elemento nav/landmark com rótulo, e o item atual "Processos" não tem aria-current="page"
- T3-fe6728c929: No breadcrumb, o item 'Home' é um <a href='/portal-mpa/'> que contém um <button>: dois pontos de foco seguidos (link e botão) para o mesmo i

### MA-b3a1dcf2 · 7 membros · lotes lote-11, lote-16, lote-17, lote-33, lote-34, lote-36 · → adjudicação

Tela processos · completa · regra `wcag:2.4.3` · estado `1280x900` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(1)>div>input`

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-421f0964b6 | 11 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-62a281290a | 16 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-6858dab1b3 | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d1a572163c | 33 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d56af26cd2 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ddecc3b36a | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e1d54b1f8b | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-421f0964b6: Ao escolher "25" com teclado (ArrowDown, Enter) na lista "Exibir", o foco vai para <body> em vez de voltar ao campo.
- T3-62a281290a: Ao escolher uma opção do seletor "Exibir" pelo teclado (ArrowDown e Enter), o valor muda para 25, mas o foco vai para BODY.
- T3-6858dab1b3: No select 'Exibir', ao escolher '25' pelo teclado (ArrowDown, ArrowDown, Enter) a lista fecha e o foco vai para <body>.
- T3-d1a572163c: Seletor "Exibir" da paginação: Tab no campo dispara TypeError no console e leva o foco para a lista; Tab de novo fecha a lista e o foco cai 
- T3-d56af26cd2: Ao escolher "25" na lista do "Exibir" com teclado (ArrowDown, Enter), a lista fecha e o foco vai para o body; o usuário perde a posição.
- T3-ddecc3b36a: Ao escolher "25" no seletor "Exibir" por teclado (ArrowDown e Enter), a lista fecha e o foco vai para o <body>, perdendo a posição.
- T3-e1d54b1f8b: Ao escolher "25" na lista do seletor "Exibir" pelo teclado (setas + Enter), a lista fecha e o foco vai para o <body>.

### MA-c75be526 · 4 membros · lotes lote-05, lote-12, lote-15, lote-28 · **muda crédito** · → adjudicação

Tela processos · completa · regra `wcag:4.1.2` · estado `1280x900` · tipo span  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>pnip-multiple-search-table-utils>div>div:nth-of-type(2)>div:nth-of-type(1)>span ; body>pnip-root>main>pnip-`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1c9ae5a65e | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-4b1804eef5 | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-614dcf6618 | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-b217d1ae58 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1c9ae5a65e: Os chips de filtro abrem uma lista suspensa (caret muda de fa-caret-down para fa-caret-up), mas não têm role de botão nem aria-expanded/aria
- T3-4b1804eef5: Os gatilhos de filtro abrem uma lista suspensa (o ícone muda de caret-down para caret-up), mas não têm role de botão nem aria-expanded/aria-
- T3-614dcf6618: Os 6 filtros abrem uma lista ao clique, mas são <span> sem papel (button), sem aria-expanded e sem aria-controls; o estado aberto só é indic
- T3-b217d1ae58: Detalhe (uniao-europeia): "Mostrar"/"Ocultar" sem role de botão nem aria-expanded; o estado só muda no texto e no ícone

### MA-d02660c9 · 9 membros · lotes lote-04, lote-07, lote-08, lote-12, lote-17, lote-23, lote-31, lote-38, lote-40 · **muda crédito** · → adjudicação

Tela processos · completa · regra `axe:label` · estado `1280x900` · tipo campo de formulário  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(2)>input`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-19984817c7 | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-2be7e65738 | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-325f7a20e1 | 08 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-4cbd7a04d9 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6ef1a224d5 | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-910c83c8f5 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-c6aa868a8b | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e9d146c060 | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f8dc924ee0 | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |

Textos observados (conferência do agrupamento):
- T3-19984817c7: Form elements must have labels
- T3-2be7e65738: Form elements must have labels
- T3-325f7a20e1: Form elements must have labels
- T3-4cbd7a04d9: Form elements must have labels
- T3-6ef1a224d5: Form elements must have labels
- T3-910c83c8f5: Form elements must have labels
- T3-c6aa868a8b: Form elements must have labels
- T3-e9d146c060: Form elements must have labels
- T3-f8dc924ee0: Form elements must have labels

### MA-d9507f0e · 19 membros · lotes lote-03, lote-06, lote-07, lote-11, lote-13, lote-16, lote-18, lote-24, lote-25, lote-26, lote-27, lote-31, lote-36, lote-39 · → adjudicação

Tela processos · completa · regra `wcag:3.1.2` · estado `1280x900` · tipo não resolvido  
Sujeito: `unresolved:.swal2-close`

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1440f0e694 | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-231c25254b | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2492bfb5f3 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-29a49b2ff8 | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-44adbfbf88 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-503d53252f | 13 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-65d59a3ac5 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-709bad1f9d | 18 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-941180397b | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9a40d55d9c | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9e8f91394e | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9ea632a3cf | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9fa3758795 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a2660ca272 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a3135b3a75 | 26 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-a966588742 | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c3684ef384 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-de6ef5a2b0 | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ef92b20594 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1440f0e694: O botão de fechar dos diálogos tem aria-label='Close this dialog' (inglês) numa página lang='pt-br', sem lang próprio; o mesmo ocorre no diá
- T3-231c25254b: O botão de fechar do diálogo de assinatura tem aria-label="Close this dialog" (inglês) numa página lang="pt-br", sem marcação de idioma.
- T3-2492bfb5f3: No diálogo de assinatura, o botão de fechar visível (×) tem aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang próp
- T3-29a49b2ff8: Botão de fechar do diálogo de assinatura com aria-label 'Close this dialog' (inglês) numa página lang=pt-br, sem lang próprio.
- T3-44adbfbf88: O botão de fechar do diálogo de assinatura tem aria-label="Close this dialog" (inglês) numa página lang="pt-br", sem marcação de idioma.
- T3-503d53252f: Botão de fechar do diálogo de assinatura com aria-label="Close this dialog" (inglês) numa página lang="pt-br", sem lang="en".
- T3-65d59a3ac5: O botão de fechar tem aria-label="Close this dialog", em inglês, numa página lang="pt-br", sem lang próprio
- T3-709bad1f9d: Botão fechar dos diálogos com aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang próprio.
- T3-941180397b: O botão de fechar tem aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang="en".
- T3-9a40d55d9c: Botão de fechar das modais tem aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang="en"
- T3-9e8f91394e: O botão de fechar (×) do diálogo de assinatura tem aria-label="Close this dialog", em inglês, sem lang, numa página pt-br.
- T3-9ea632a3cf: O botão de fechar (×) do diálogo de assinatura tem aria-label="Close this dialog", em inglês, numa página lang="pt-br".
- T3-9fa3758795: O botão de fechar do diálogo "Assinar" tem aria-label="Close this dialog" (inglês) numa página lang="pt-br", sem lang="en".
- T3-a2660ca272: Botão de fechar do diálogo "Assinar" tem aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang="en".
- T3-a3135b3a75: O botão de fechar do diálogo tem aria-label em inglês, "Close this dialog", numa página lang="pt-br", sem lang="en".
- T3-a966588742: O botão de fechar do diálogo "Assinar" tem aria-label="Close this dialog", em inglês, numa página lang="pt-br", sem lang="en" no trecho.
- T3-c3684ef384: O botão de fechar o diálogo tem aria-label="Close this dialog", em inglês, numa página lang="pt-br", e o trecho não tem lang="en".
- T3-de6ef5a2b0: O botão de fechar (×) do diálogo 'Assinar' tem aria-label 'Close this dialog', em inglês, numa página com lang='pt-br'.
- T3-ef92b20594: O botão de fechar do diálogo de assinatura tem aria-label="Close this dialog" (inglês) numa página lang="pt-br", sem marcação de idioma.

### MA-e543a7da · 3 membros · lotes lote-02, lote-28, lote-36 · → adjudicação

Tela processos · completa · regra `govbr-3.7.0-development-global-137c50bea6ca` · estado `1280x900` · tipo não resolvido  
Sujeito: `unresolved:.swal2-actions > button.swal2-cancel, .swal2-actions > button.swal2-confirm`

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0ae41eb01c | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-af781d4160 | 28 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-dfbd597dbf | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0ae41eb01c: Botões 'Não' e 'Sim' do diálogo de desassociar com border-radius 20px
- T3-af781d4160: Botões 'Solicitar Revisão' e 'Assinar com gov.br' com border-radius 20px
- T3-dfbd597dbf: Margens 0 10px 10px 0 e 0 0 10px nos botões do diálogo de assinatura (10px fora da escala)

### MA-fd6577ae · 9 membros · lotes lote-05, lote-10, lote-12, lote-13, lote-17, lote-19, lote-23, lote-34, lote-41 · **muda crédito** · → adjudicação

Tela processos · completa · regra `wcag:3.3.2` · estado `1280x900` · tipo componente <br-input>  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>pnip-search-table-utils>div>div>div>br-input`

Divergem: norma.violada, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1d4a952530 | 05 | verdadeira | citada | obrigatorio | aplica | nao | D-05 | direta | valida | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-3df83915aa | 10 | verdadeira | citada | obrigatorio | aplica | incerto | D-05 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-47a555da61 | 12 | verdadeira | citada | obrigatorio | aplica | incerto | D-05 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-4ee2e34ba5 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-68bf88c6a5 | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-7b1e248625 | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-93e31ca3cf | 23 | verdadeira | citada | obrigatorio | aplica | incerto | D-05 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-d56a34ae1f | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-fa9583862c | 41 | verdadeira | citada | obrigatorio | aplica | nao | D-05 | direta | valida | violacao-pagina | sim | credita D-05 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-1d4a952530: O campo de pesquisa (input#search no shadow DOM) não tem label, aria-label nem aria-labelledby; o único rótulo é o placeholder "Pesquise aqu
- T3-3df83915aa: Campo de busca só tem placeholder "Pesquise aqui ..." como rótulo; sem <label>, aria-label ou title.
- T3-47a555da61: O campo de busca (input no shadow DOM de br-input#search) não tem label nem aria-label. A única identificação é o placeholder "Pesquise aqui
- T3-4ee2e34ba5: Campo de busca identificado apenas pelo placeholder "Pesquise aqui ..." (sem label visível), que desaparece ao digitar.
- T3-68bf88c6a5: O campo de busca não tem <label> nem aria-label; o único rótulo é o placeholder "Pesquise aqui ...", que desaparece ao digitar.
- T3-7b1e248625: O campo de busca (input interno do br-input) não tem rótulo: nenhum label/aria-label; o único indicativo é o placeholder "Pesquise aqui ..."
- T3-93e31ca3cf: O campo de busca (input#search no shadow DOM) tem só placeholder='Pesquise aqui ...', sem label visível nem associado.
- T3-d56a34ae1f: O campo de busca só tem o placeholder "Pesquise aqui ..." como rótulo (sem label nem aria-label); o texto some ao digitar
- T3-fa9583862c: O campo de pesquisa (input#search no shadow DOM de br-input) não tem label visível nem aria-label; o único rótulo é o placeholder "Pesquise 

### MA-fe11685f · 2 membros · lotes lote-02, lote-24 · **muda crédito** · → adjudicação

Tela processos · completa · regra `wcag-1.4.3` · estado `1280x900` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(2)>div>div:nth-of-type(3)>div:nth-of-type(2)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(8)>pnip-status-solicitacao-utils>div>div>div ; body>pnip-root>`

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-08adeddfb0 | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-995ccda09e | 24 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |

Textos observados (conferência do agrupamento):
- T3-08adeddfb0: No detalhe (uniao-europeia), o selo de status "SUCCESS" tem texto #ffffff 14px sobre #888888, contraste 3,54:1.
- T3-995ccda09e: Selos cinza ("Aguardando plano de ação", "Aguardando SFPA"): texto #ffffff 14px sobre #888888, contraste 3,54:1.

### MA-8218f639 · 11 membros · lotes lote-01, lote-05, lote-06, lote-12, lote-14, lote-34, lote-35, lote-36, lote-40

Tela processos · completa · regra `wcag:4.1.2` · estado `1280x900` · tipo div  
Sujeito: `body>pnip-root>pnip-header>div>div>div`

Divergem: norma.aplicabilidade, norma.violada · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-02b6918da3 | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-21a852abbb | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-26d5f2141f | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-49e7215cad | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-574d0e94ce | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-57d9cd8620 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d37fd44557 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-db18311c78 | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e404dfe2db | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f745668f7c | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f84d6ba907 | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-02b6918da3: O menu do usuário aberto tem role="menu", mas nenhum descendente com role="menuitem"; contém divs de texto, um span clicável ("Trocar unidad
- T3-21a852abbb: Menu do avatar tem role="menu" mas seus filhos são div/span/button sem role="menuitem".
- T3-26d5f2141f: role=menu cujos filhos não são menuitem (button nativo 'Sair', span 'Trocar unidade', textos)
- T3-49e7215cad: Menu do usuário aberto: role="menu" sem nenhum filho role="menuitem"; contém <div>, <span> e <button> comuns.
- T3-574d0e94ce: O menu do avatar tem role="menu", mas não contém menuitem: os filhos são div, span e um <button> "Sair".
- T3-57d9cd8620: Contêiner com role="menu" cujos filhos não têm role menuitem (span "Trocar unidade", button "Sair", textos de perfil).
- T3-d37fd44557: O painel aberto tem role="menu", mas nenhum filho tem role="menuitem": contém texto, um span clicável "Trocar unidade" e um button "Sair" co
- T3-db18311c78: O menu do usuário aberto tem role="menu", mas seus filhos são div/span/button sem role=menuitem.
- T3-e404dfe2db: div#avatar-menu tem role="menu", mas não tem nenhum filho role="menuitem". Os itens são um span clicável e um button comum.
- T3-f745668f7c: O menu do usuário aberto tem role="menu", mas nenhum filho tem role="menuitem": contém um texto em <span> "Trocar unidade" e um <button> "Sa
- T3-f84d6ba907: O container do menu do usuário tem role="menu", mas os filhos são divs/spans e um <button> sem role="menuitem" ([ferramenta citada] aria-req

## Grupos divergentes — mesma leitura da norma (28; 12 à adjudicação; 14 mudam o crédito)

### LN-00fbd88a · 10 membros · lotes lote-02, lote-20, lote-22, lote-23, lote-28, lote-30, lote-35, lote-36, lote-37, lote-41 · → adjudicação

Regra `govbr-3.7.0-development-global-137c50bea6ca` × não resolvido

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0ae41eb01c | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7d82eb4144 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-88aed7b062 | 22 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-93f1e77573 | 23 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-af781d4160 | 28 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-c2531a9276 | 30 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-db82d30ce2 | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dfbd597dbf | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e700a1c485 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fdfaf09637 | 41 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0ae41eb01c: Botões 'Não' e 'Sim' do diálogo de desassociar com border-radius 20px
- T3-7d82eb4144: Diálogos usam SweetAlert2 com estilos fora dos tokens do DS: texto #545454, ícone de alerta #f8bb86/#facea8, padding 10px, botões com radius
- T3-88aed7b062: Botão fechar '×' com border-radius 5px
- T3-93f1e77573: Botão '×' do diálogo com border-radius 5px, fora da escala do DS.
- T3-af781d4160: Botões 'Solicitar Revisão' e 'Assinar com gov.br' com border-radius 20px
- T3-c2531a9276: Os diálogos de confirmação são SweetAlert2, não o Modal do DS: botões com border-radius 20px e margens de 10px, fora das escalas de tokens.
- T3-db82d30ce2: Botões de ação dos diálogos (Não/Sim; Solicitar Revisão/Assinar com gov.br) com border-radius 20px, fora da escala do DS.
- T3-dfbd597dbf: Margens 0 10px 10px 0 e 0 0 10px nos botões do diálogo de assinatura (10px fora da escala)
- T3-e700a1c485: Os diálogos usam SweetAlert2 em vez do br-modal do DS, com valores fora dos tokens: botão de fechar com font-family monospace e border-radiu
- T3-fdfaf09637: Botões de ação do diálogo de assinatura com margens de 10px ('0 10px 10px 0' e '0 0 10px'), fora da escala de espaçamento.

### LN-063d544c · 25 membros · lotes lote-01, lote-03, lote-06, lote-07, lote-10, lote-12, lote-13, lote-14, lote-17, lote-18, lote-20, lote-21, lote-23, lote-24, lote-30, lote-31, lote-32, lote-35, lote-37, lote-38, lote-39 · → adjudicação

Regra `govbr-3.7.0-development-global-137c50bea6ca` × botão com texto

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-01621c538f | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0484d85352 | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0fbb4d546d | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2293b63f10 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-289bbe4ca4 | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3d0114a0dc | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4dc30f6342 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-52d8b6d86b | 13 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-54aa9a3acb | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6f499bbe3c | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-736ab450aa | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7bec1c8d16 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7dc62c44fc | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-832f6f3f4a | 21 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-90d1f36b46 | 23 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-95bd10ed1f | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c0d4da4c7f | 30 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c3f6e35933 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ca58217725 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cb6f5f7ecb | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dc196d3343 | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e6f7f67ca2 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ee6fb41f50 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f067124be9 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f0fc7c0b38 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-01621c538f: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-0484d85352: Botão Buscar/Limpar posicionado com margin-top: -38px, fora da escala de espaçamento.
- T3-0fbb4d546d: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-2293b63f10: Botão Buscar/Limpar da busca com margin '-38px 4px 0 0' (inline style margin-top:-38px), fora da escala de espaçamento.
- T3-289bbe4ca4: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-3d0114a0dc: Botão "Sair" com border-radius 20px, fora da escala de raio do DS.
- T3-4dc30f6342: Botão "Buscar" posicionado com margin: -38px 4px 0 0 (estilo inline margin-top:-38px), fora da escala de espaçamento do DS.
- T3-52d8b6d86b: Botão de busca posicionado com margin -38px 4px 0 0 (inline), fora da escala de espaçamento.
- T3-54aa9a3acb: Botão "Sair" do menu do usuário com border-radius: 20px, fora da escala de raio do DS.
- T3-6f499bbe3c: margin: -38px 4px 0 0 (margem negativa fora da escala de espaçamento)
- T3-736ab450aa: O botão Buscar é posicionado com margin-top -38px (margin: -38px 4px 0 0), fora da escala de espaçamento do DS.
- T3-7bec1c8d16: Botão "Sair" com border-radius 20px, fora da escala de raio do DS.
- T3-7dc62c44fc: Botão Buscar posicionado com margin: -38px 4px 0 0 (inline style), valor fora da escala de espaçamento.
- T3-832f6f3f4a: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-90d1f36b46: O botão "Sair" usa border-radius 20px, fora da escala de raios do DS.
- T3-95bd10ed1f: Botão 'Sair' com border-radius 20px, fora da escala do DS.
- T3-c0d4da4c7f: border-radius: 20px no botão 'Sair', fora da escala de tokens
- T3-c3f6e35933: Botão "Sair" (br-item) com border-radius 20px, fora da escala do DS.
- T3-ca58217725: border-radius: 20px no botão "Sair", fora da escala do DS.
- T3-cb6f5f7ecb: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-dc196d3343: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-e6f7f67ca2: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-ee6fb41f50: Botão Buscar com margin -38px 4px 0px 0px (-38px fora da escala de espaçamento).
- T3-f067124be9: margin: -38px 4px 0px 0px (fora da escala: -38px)
- T3-f0fc7c0b38: margin: -38px 4px 0px 0px (fora da escala: -38px)

### LN-17deeef2 · 9 membros · lotes lote-05, lote-10, lote-12, lote-13, lote-17, lote-19, lote-23, lote-34, lote-41 · **muda crédito** · → adjudicação

Regra `wcag:3.3.2` × componente <br-input>

Divergem: norma.violada, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1d4a952530 | 05 | verdadeira | citada | obrigatorio | aplica | nao | D-05 | direta | valida | violacao-pagina | sim | credita D-05 | mais-fraca |
| T3-3df83915aa | 10 | verdadeira | citada | obrigatorio | aplica | incerto | D-05 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-47a555da61 | 12 | verdadeira | citada | obrigatorio | aplica | incerto | D-05 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-4ee2e34ba5 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-68bf88c6a5 | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-7b1e248625 | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-93e31ca3cf | 23 | verdadeira | citada | obrigatorio | aplica | incerto | D-05 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-d56a34ae1f | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-05 | direta | — | violacao-pagina | sim | credita D-05 | norma |
| T3-fa9583862c | 41 | verdadeira | citada | obrigatorio | aplica | nao | D-05 | direta | valida | violacao-pagina | sim | credita D-05 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-1d4a952530: O campo de pesquisa (input#search no shadow DOM) não tem label, aria-label nem aria-labelledby; o único rótulo é o placeholder "Pesquise aqu
- T3-3df83915aa: Campo de busca só tem placeholder "Pesquise aqui ..." como rótulo; sem <label>, aria-label ou title.
- T3-47a555da61: O campo de busca (input no shadow DOM de br-input#search) não tem label nem aria-label. A única identificação é o placeholder "Pesquise aqui
- T3-4ee2e34ba5: Campo de busca identificado apenas pelo placeholder "Pesquise aqui ..." (sem label visível), que desaparece ao digitar.
- T3-68bf88c6a5: O campo de busca não tem <label> nem aria-label; o único rótulo é o placeholder "Pesquise aqui ...", que desaparece ao digitar.
- T3-7b1e248625: O campo de busca (input interno do br-input) não tem rótulo: nenhum label/aria-label; o único indicativo é o placeholder "Pesquise aqui ..."
- T3-93e31ca3cf: O campo de busca (input#search no shadow DOM) tem só placeholder='Pesquise aqui ...', sem label visível nem associado.
- T3-d56a34ae1f: O campo de busca só tem o placeholder "Pesquise aqui ..." como rótulo (sem label nem aria-label); o texto some ao digitar
- T3-fa9583862c: O campo de pesquisa (input#search no shadow DOM de br-input) não tem label visível nem aria-label; o único rótulo é o placeholder "Pesquise 

### LN-3688d71e · 19 membros · lotes lote-03, lote-06, lote-07, lote-11, lote-13, lote-16, lote-18, lote-24, lote-25, lote-26, lote-27, lote-31, lote-36, lote-39 · → adjudicação

Regra `wcag:3.1.2` × não resolvido

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1440f0e694 | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-231c25254b | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2492bfb5f3 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-29a49b2ff8 | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-44adbfbf88 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-503d53252f | 13 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-65d59a3ac5 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-709bad1f9d | 18 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-941180397b | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9a40d55d9c | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9e8f91394e | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9ea632a3cf | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9fa3758795 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a2660ca272 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a3135b3a75 | 26 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-a966588742 | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c3684ef384 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-de6ef5a2b0 | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ef92b20594 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1440f0e694: O botão de fechar dos diálogos tem aria-label='Close this dialog' (inglês) numa página lang='pt-br', sem lang próprio; o mesmo ocorre no diá
- T3-231c25254b: O botão de fechar do diálogo de assinatura tem aria-label="Close this dialog" (inglês) numa página lang="pt-br", sem marcação de idioma.
- T3-2492bfb5f3: No diálogo de assinatura, o botão de fechar visível (×) tem aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang próp
- T3-29a49b2ff8: Botão de fechar do diálogo de assinatura com aria-label 'Close this dialog' (inglês) numa página lang=pt-br, sem lang próprio.
- T3-44adbfbf88: O botão de fechar do diálogo de assinatura tem aria-label="Close this dialog" (inglês) numa página lang="pt-br", sem marcação de idioma.
- T3-503d53252f: Botão de fechar do diálogo de assinatura com aria-label="Close this dialog" (inglês) numa página lang="pt-br", sem lang="en".
- T3-65d59a3ac5: O botão de fechar tem aria-label="Close this dialog", em inglês, numa página lang="pt-br", sem lang próprio
- T3-709bad1f9d: Botão fechar dos diálogos com aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang próprio.
- T3-941180397b: O botão de fechar tem aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang="en".
- T3-9a40d55d9c: Botão de fechar das modais tem aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang="en"
- T3-9e8f91394e: O botão de fechar (×) do diálogo de assinatura tem aria-label="Close this dialog", em inglês, sem lang, numa página pt-br.
- T3-9ea632a3cf: O botão de fechar (×) do diálogo de assinatura tem aria-label="Close this dialog", em inglês, numa página lang="pt-br".
- T3-9fa3758795: O botão de fechar do diálogo "Assinar" tem aria-label="Close this dialog" (inglês) numa página lang="pt-br", sem lang="en".
- T3-a2660ca272: Botão de fechar do diálogo "Assinar" tem aria-label em inglês "Close this dialog" numa página lang="pt-br", sem lang="en".
- T3-a3135b3a75: O botão de fechar do diálogo tem aria-label em inglês, "Close this dialog", numa página lang="pt-br", sem lang="en".
- T3-a966588742: O botão de fechar do diálogo "Assinar" tem aria-label="Close this dialog", em inglês, numa página lang="pt-br", sem lang="en" no trecho.
- T3-c3684ef384: O botão de fechar o diálogo tem aria-label="Close this dialog", em inglês, numa página lang="pt-br", e o trecho não tem lang="en".
- T3-de6ef5a2b0: O botão de fechar (×) do diálogo 'Assinar' tem aria-label 'Close this dialog', em inglês, numa página com lang='pt-br'.
- T3-ef92b20594: O botão de fechar do diálogo de assinatura tem aria-label="Close this dialog" (inglês) numa página lang="pt-br", sem marcação de idioma.

### LN-4a41d85f · 59 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05, lote-06, lote-07, lote-08, lote-09, lote-10, lote-12, lote-15, lote-16, lote-17, lote-20, lote-22, lote-23, lote-24, lote-25, lote-26, lote-27, lote-29, lote-30, lote-31, lote-32, lote-33, lote-35, lote-36, lote-37, lote-39, lote-41 · → adjudicação

Regra `wcag:4.1.2` × não resolvido

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0129d8e0d4 | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-03c4d403d9 | 01 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-051abbc185 | 01 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-09e18dced7 | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0e63cdf597 | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-14aaac2432 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-18d04507c3 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1aabeff51f | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1cf2c5ea3e | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-1d6f89b729 | 05 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-23cae24e51 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-27d3deb5db | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-30d781f189 | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-334c4306ef | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-37f827c469 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-388ac09e16 | 09 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-3d7bdf03bc | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3ddba778d9 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3eab9bf9a4 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3eca9c45fe | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3f13f28009 | 10 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-487a5f32dd | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4a7f6e71cf | 12 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-4ad3707f68 | 12 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-5e7fd013f5 | 15 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-62b12c13d7 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6662bfb1ee | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-69f57d5640 | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6e6a2621fe | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7fad33bf6e | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8b1cd7bd70 | 22 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-8e183bf8e3 | 23 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-92496432e8 | 23 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-960c5c97d1 | 24 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-9e09c29d7b | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9e2dfb1d88 | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9ef3dcded0 | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a4ba2d16bb | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a594e2d41e | 27 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-a6e045d1d7 | 27 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-a7e2b388ac | 27 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-a9e3dade34 | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b390f9a6dc | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b410b4abb2 | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b7dc39d840 | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c06ad7c991 | 30 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-c882c8e00a | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ce28641122 | 32 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-ce63d4ae48 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d03fc61ff0 | 33 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d192d2539d | 33 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-d2077bec16 | 33 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-daad8d801b | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e34437a371 | 36 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-e463bec1dd | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e5add5f8d3 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e6a33c2a77 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f2e932242c | 39 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-ff52fa784b | 41 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0129d8e0d4: O botão '×' que remove o filtro aplicado 'Últimos 7 dias' não tem aria-label, title nem texto (o ícone tem aria-hidden): nome acessível vazi
- T3-03c4d403d9: O diálogo de confirmação de 'Desassociar processo' (role='dialog', aria-labelledby='swal2-title') tem o título vazio: o diálogo não tem nome
- T3-051abbc185: Diálogo de assinatura do processo (PDF, "Solicitar Revisão", "Assinar com gov.br") sem título; aria-labelledby aponta para #swal2-title vazi
- T3-09e18dced7: O diálogo "Assinar" (role=dialog, aria-modal) tem aria-labelledby="swal2-title", mas #swal2-title está vazio e com display:none: o diálogo n
- T3-0e63cdf597: Modal de assinatura (role=dialog, aria-modal) com aria-labelledby="swal2-title" apontando para h2 vazio e oculto: diálogo sem nome acessível
- T3-14aaac2432: O diálogo de assinatura (role="dialog", aria-modal="true") usa aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com display:
- T3-18d04507c3: Os diálogos de confirmação "Desassociar" e "Assinar" (role="dialog", aria-modal) têm aria-labelledby="swal2-title", mas #swal2-title está va
- T3-1aabeff51f: O diálogo aberto por "Assinar" (PDF + "Solicitar Revisão"/"Assinar com gov.br", role=dialog) referencia por aria-labelledby o h2#swal2-title
- T3-1cf2c5ea3e: Diálogo "Tem certeza que deseja desassociar esse processo do analista responsável?" (role=dialog) com aria-labelledby="swal2-title", que est
- T3-1d6f89b729: O botão de remover o filtro aplicado ("Últimos 7 dias") contém só o ícone fa-times com aria-hidden="true"; não tem aria-label, title nem tex
- T3-23cae24e51: Modal de confirmação "Tem certeza que deseja desassociar…" (role=dialog) com aria-labelledby apontando para h2 vazio e oculto: sem nome aces
- T3-27d3deb5db: O botão de remover a etiqueta do filtro aplicado ("Últimos 7 dias") só contém o ícone fa-times com aria-hidden; não tem texto, aria-label ne
- T3-30d781f189: Após aplicar o filtro, a tag "Últimos 7 dias" tem botão de remover só com ícone fa-times (aria-hidden) e sem aria-label/title: botão sem nom
- T3-334c4306ef: O botão de remover o filtro aplicado ("Últimos 7 dias") tem só um ícone com aria-hidden e não tem nome acessível.
- T3-37f827c469: O botão "×" para remover o filtro aplicado "Últimos 30 dias" contém só um ícone com aria-hidden e não tem aria-label, title nem texto: não t
- T3-388ac09e16: Diálogo do documento (role=dialog, aria-modal): aria-labelledby aponta para h2#swal2-title vazio e oculto; o diálogo fica sem nome acessível
- T3-3d7bdf03bc: Depois de aplicar um filtro, o chip ganha um botão "×" só com ícone (i.fa-times aria-hidden) e sem aria-label/title: o botão não tem nome ac
- T3-3ddba778d9: Botão de remover o filtro aplicado ("Alteração de Certificado HS") só contém o ícone fa-times com aria-hidden: nome acessível vazio
- T3-3eab9bf9a4: Campo de texto do motivo na modal "Solicitar Revisão" sem label, aria-label ou aria-labelledby (o texto de instrução não está associado)
- T3-3eca9c45fe: Botão "×" que remove o filtro aplicado "Últimos 30 dias" só contém ícone aria-hidden; sem aria-label: nome acessível vazio.
- T3-3f13f28009: O diálogo de confirmação de "Desassociar" tem role="dialog" e aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com display:n
- T3-487a5f32dd: Com o filtro "Em análise supervisor" aplicado, o botão de remover do chip (ícone ×) não tem texto, aria-label nem title: nome acessível vazi
- T3-4a7f6e71cf: Diálogo de assinatura (role='dialog'): aria-labelledby='swal2-title', mas o h2#swal2-title está vazio e com display:none; o diálogo fica sem
- T3-4ad3707f68: Os diálogos (confirmação de "Desassociar" e assinatura em "Assinar") têm role=dialog com aria-labelledby="swal2-title", mas o h2#swal2-title
- T3-5e7fd013f5: O diálogo de confirmação "Tem certeza que deseja desassociar..." (role=dialog, aria-modal) tem aria-labelledby="swal2-title" apontando para 
- T3-62b12c13d7: No diálogo "Solicitar Revisão", o <textarea> do motivo não tem label, aria-label, aria-labelledby nem placeholder: nome acessível vazio (a i
- T3-6662bfb1ee: O diálogo de assinatura (pré-visualização do PDF, botões "Solicitar Revisão"/"Assinar com gov.br") tem aria-labelledby apontando para o h2#s
- T3-69f57d5640: Após aplicar o filtro, o chip "Últimos 7 dias" ganha um botão de remover (ícone fa-times aria-hidden) sem aria-label, title ou texto: nome a
- T3-6e6a2621fe: As opções dos filtros (ex.: "Últimos 7 dias"…"Últimos 90 dias"; o mesmo em Tipo de processo, Status, Petrecho) são só <label> dentro de .br-
- T3-7fad33bf6e: O diálogo de confirmação "Tem certeza que deseja desassociar esse processo do analista responsável?" aponta aria-labelledby para #swal2-titl
- T3-8b1cd7bd70: O diálogo de confirmação "Tem certeza que deseja desassociar esse processo do analista responsável?" usa aria-labelledby="swal2-title" apont
- T3-8e183bf8e3: Os diálogos de "Assinar" e de "Desassociar" (SweetAlert2, role="dialog" aria-modal="true") têm aria-labelledby="swal2-title", mas o h2#swal2
- T3-92496432e8: Com o filtro "Últimos 7 dias" aplicado, o chip mostra um botão de remover (ícone "×" com aria-hidden) sem aria-label, title ou texto: nome a
- T3-960c5c97d1: O diálogo de assinatura (role=dialog, aria-modal) aponta aria-labelledby para #swal2-title, que está vazio e com display:none: diálogo sem n
- T3-9e09c29d7b: O diálogo de confirmação "Tem certeza que deseja desassociar…" (role=dialog, aria-modal) tem aria-labelledby="swal2-title", mas o título est
- T3-9e2dfb1d88: O diálogo de confirmação "Tem certeza que deseja desassociar esse processo do analista responsável?" (role=dialog) tem aria-labelledby="swal
- T3-9ef3dcded0: Botão de remover o filtro aplicado 'Últimos 7 dias' só tem ícone fa-times aria-hidden: nome acessível vazio
- T3-a4ba2d16bb: O botão de remover o filtro ativo "Últimos 7 dias" contém só o ícone <i aria-hidden="true" class="fas fa-times"> e não tem aria-label: nome 
- T3-a594e2d41e: O diálogo de confirmação "Tem certeza que deseja desassociar esse processo do analista responsável?" (role=dialog, aria-modal) tem aria-labe
- T3-a6e045d1d7: Diálogo de confirmação 'Tem certeza que deseja desassociar...' (role=dialog) com aria-labelledby apontando para #swal2-title vazio e oculto:
- T3-a7e2b388ac: Diálogo de assinatura (pré-visualização em PDF) com role=dialog, aria-labelledby para #swal2-title vazio e oculto: sem nome acessível
- T3-a9e3dade34: Botão de remover o filtro aplicado "Últimos 7 dias" contém só o ícone fa-times (aria-hidden) e não tem nome acessível
- T3-b390f9a6dc: No diálogo 'Solicitar Revisão', o campo de texto do motivo (#swal2-textarea) não tem label, aria-label nem aria-labelledby; o texto 'Informe
- T3-b410b4abb2: O botão "×" que remove o filtro aplicado ("Últimos 7 dias") contém só um ícone aria-hidden, sem aria-label/title: nome acessível vazio.
- T3-b7dc39d840: Com o filtro 'Em análise supervisor' aplicado, o botão de remover o filtro (ícone ×, button.br-button.inverted.circle) não tem nome acessíve
- T3-c06ad7c991: Diálogo de assinatura (SweetAlert2, role=dialog, aria-modal) com aria-labelledby="swal2-title" apontando para h2 vazio e oculto: diálogo sem
- T3-c882c8e00a: As opções do filtro "Aberto há" ("Últimos 7 dias", "Últimos 30 dias", "Últimos 60 dias", "Últimos 90 dias") são <div class="br-radio"><label
- T3-ce28641122: O diálogo de 'Assinar' (visualização do PDF com 'Solicitar Revisão' e 'Assinar com gov.br') tem o h2#swal2-title vazio e oculto: o diálogo n
- T3-ce63d4ae48: Botão "x" para remover o filtro aplicado ("Em análise supervisor") contém só o ícone fa-times aria-hidden; sem texto, aria-label ou title: n
- T3-d03fc61ff0: Depois de aplicar um filtro, o botão × que remove a tag "Últimos 7 dias" só tem um ícone aria-hidden e não tem nome acessível.
- T3-d192d2539d: Diálogo de confirmação 'Tem certeza que deseja desassociar…' (role='dialog'): aria-labelledby aponta para o h2#swal2-title vazio e oculto; o
- T3-d2077bec16: Na tag do filtro aplicado "Últimos 7 dias", o botão de remover contém só o ícone <i class="fas fa-times" aria-hidden="true"> e não tem aria-
- T3-daad8d801b: O diálogo de assinatura individual (PDF + "Solicitar Revisão"/"Assinar com gov.br") tem aria-labelledby para um h2 vazio: sem nome acessível
- T3-e34437a371: O diálogo aberto por "Assinar" (visualização do PDF com "Solicitar Revisão"/"Assinar com gov.br") tem aria-labelledby apontando para o h2#sw
- T3-e463bec1dd: Diálogo de confirmação "Tem certeza que deseja desassociar…" com aria-labelledby apontando para h2#swal2-title vazio e oculto: sem nome aces
- T3-e5add5f8d3: Diálogos SweetAlert (confirmação de Desassociar e assinatura) com role=dialog e aria-labelledby='swal2-title', mas #swal2-title está vazio e
- T3-e6a33c2a77: O diálogo aberto por "Assinar" (pré-visualização do PDF) aponta aria-labelledby para h2#swal2-title vazio e oculto: sem nome acessível.
- T3-f2e932242c: O diálogo de confirmação do Desassociar (role="dialog", aria-modal) tem aria-labelledby="swal2-title", mas o h2#swal2-title está vazio e com
- T3-ff52fa784b: "Mostrar"/"Ocultar" expande e recolhe a seção sem expor o estado: não há aria-expanded nem aria-controls.

### LN-4f275be1 · 20 membros · lotes lote-01, lote-03, lote-04, lote-10, lote-13, lote-15, lote-20, lote-21, lote-25, lote-26, lote-28, lote-31, lote-34, lote-39, lote-41 · → adjudicação

Regra `wcag:4.1.2` × componente <br-breadcrumb>

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-05a2d86f4c | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1445d1191d | 03 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-15208153f4 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3d9b75807d | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4f89c5fa3a | 13 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5e3c6aa7b5 | 15 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-7cd4f5a7cc | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-80f416b8e6 | 21 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-9bff83c080 | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a1c7879e72 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a4a13c9831 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a4ccc6ef86 | 26 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-adaeb1b15a | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-af19f6432c | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b15ade7522 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c586224e7f | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d7fc40c7e2 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d8985db8bf | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f526d78b27 | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fea718e447 | 41 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-05a2d86f4c: No shadow DOM do breadcrumb, o item Home é um <a href="/portal-mpa/"> que contém um <button aria-label=""> (elemento interativo aninhado em 
- T3-1445d1191d: No shadow DOM, o item Home é <a href='/portal-mpa/'> contendo <button aria-label=''>: um controle interativo aninhado em outro, que gera dua
- T3-15208153f4: No breadcrumb (shadow DOM), o item Home é <a href="/portal-mpa/"> que contém um <button> (aria-label="", texto sr-only "Home"): controle int
- T3-3d9b75807d: Na trilha, o item "Home" é um <a href="/portal-mpa/"> que contém um <button> (aninhamento de controles interativos); ambos recebem foco e o 
- T3-4f89c5fa3a: No breadcrumb (shadow DOM), o item Home é um <a href="/portal-mpa/"> com um <button> dentro (controles interativos aninhados), e a lista não
- T3-5e3c6aa7b5: No breadcrumb (shadow DOM), o item Home é <a href="/portal-mpa/"><button aria-label="" class="br-button circle">Home</button></a>: controle 
- T3-7cd4f5a7cc: No breadcrumb, o item Home é um <a href="/portal-mpa/"> que contém um <button aria-label=""> (interativo aninhado): a sequência de Tab para 
- T3-80f416b8e6: No breadcrumb, o "Home" é um <a href="/portal-mpa/"> com um <button aria-label=""> dentro: elemento interativo aninhado; a sequência de Tab 
- T3-9bff83c080: O item Home do breadcrumb é um <a href="/portal-mpa/"> contendo um <button> (aria-label="", texto sr-only "Home"): controle interativo aninh
- T3-a1c7879e72: Na trilha (shadow DOM do br-breadcrumb), o item Home é um <a href="/portal-mpa/"> contendo um <button>: o teclado passa por duas paradas con
- T3-a4a13c9831: No shadow DOM do breadcrumb, o item Home é <a href="/portal-mpa/"><button aria-label="" class="br-button small circle">…</button></a>: contr
- T3-a4ccc6ef86: No shadow DOM, o item Home é um <a href="/portal-mpa/"> com um <button> dentro (interativo aninhado). Isso cria dois pontos de tabulação par
- T3-adaeb1b15a: O item "Home" da trilha é um <a href="/portal-mpa/"> contendo um <button aria-label=""> (elementos interativos aninhados; dois alvos de foco
- T3-af19f6432c: No breadcrumb, o item Home é <a href="/portal-mpa/"> contendo um <button class=br-button>: controle interativo aninhado, gerando duas parada
- T3-b15ade7522: O item Home da trilha é um <a href="/portal-mpa/"> com um <button> dentro (controle interativo aninhado); a árvore expõe link "Home" com but
- T3-c586224e7f: No breadcrumb, o item Home é <a href="/portal-mpa/"> que contém <button aria-label="">: são dois controles interativos aninhados e duas para
- T3-d7fc40c7e2: Item Home do breadcrumb é <a href='/portal-mpa/'> contendo <button aria-label=''> (interativo aninhado): o Home recebe duas paradas de Tab s
- T3-d8985db8bf: O item Home da trilha é um <a href="/portal-mpa/"> contendo um <button aria-label=""> (elementos interativos aninhados), gerando duas parada
- T3-f526d78b27: No breadcrumb, o item Home é um <a href> que contém um <button> (aria-label="") — controle interativo aninhado em outro, com duas paradas de
- T3-fea718e447: O item Home do breadcrumb é um <a href="/portal-mpa/"> que contém um <button> (aria-label="" e span sr-only "Home"): controle interativo ani

### LN-5b808d88 · 5 membros · lotes lote-14, lote-20, lote-22, lote-24, lote-33 · → adjudicação

Regra `wcag:2.4.3` × não resolvido

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-5abc95ea48 | 14 | verdadeira | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-7c6cd1d403 | 20 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8a622ff3db | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-99cb21e041 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d1ade19ea0 | 33 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-5abc95ea48: Ao acionar o botão de remover filtro pelo teclado (Enter), o chip some e o foco vai para <body>; o usuário de teclado perde a posição.
- T3-7c6cd1d403: Ao abrir o diálogo de confirmação com Enter em "Assinar selecionados" e fechá-lo (Escape ou "Cancelar"), o foco vai para o <body>, não para 
- T3-8a622ff3db: Ao fechar o diálogo 'Confirma a assinatura de 1 processo(s)?' por 'Cancelar' (ou Esc), o foco vai para <body> em vez de voltar ao botão 'Ass
- T3-99cb21e041: Diálogo de Desassociar aberto pelo teclado (foco no botão + Enter); ao fechar com 'Não' (ou Escape) o foco vai para <body> em vez de voltar 
- T3-d1ade19ea0: Ao fechar os diálogos (Escape em "Assinar selecionados" e "Desassociar", × no de assinatura) o foco vai para <body>, não para o botão que os

### LN-8aac65f4 · 9 membros · lotes lote-04, lote-13, lote-20, lote-21, lote-23, lote-27, lote-29, lote-38 · **muda crédito** · → adjudicação

Regra `axe:page-has-heading-one` × não resolvido

Divergem: norma.aplicabilidade, norma.violada, vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-146b75092a | 04 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-5321c8f113 | 13 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-7fa1bee370 | 20 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-7fb8e84467 | 20 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-8215ab55ea | 21 | verdadeira | citada | boa-pratica | nao-aplica | nao | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-908e4e0e9e | 23 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-aa3fe27a5a | 27 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-b350558637 | 29 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-ed46fbbb2f | 38 | verdadeira | citada | boa-pratica | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-146b75092a: Page should contain a level-one heading
- T3-5321c8f113: Page should contain a level-one heading
- T3-7fa1bee370: Page should contain a level-one heading
- T3-7fb8e84467: Page should contain a level-one heading
- T3-8215ab55ea: Page should contain a level-one heading
- T3-908e4e0e9e: Page should contain a level-one heading
- T3-aa3fe27a5a: Page should contain a level-one heading
- T3-b350558637: Page should contain a level-one heading
- T3-ed46fbbb2f: Page should contain a level-one heading

### LN-d1ebc4a2 · 7 membros · lotes lote-11, lote-16, lote-17, lote-33, lote-34, lote-36 · → adjudicação

Regra `wcag:2.4.3` × campo de formulário

Divergem: norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-421f0964b6 | 11 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-62a281290a | 16 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-6858dab1b3 | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d1a572163c | 33 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d56af26cd2 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ddecc3b36a | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e1d54b1f8b | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-421f0964b6: Ao escolher "25" com teclado (ArrowDown, Enter) na lista "Exibir", o foco vai para <body> em vez de voltar ao campo.
- T3-62a281290a: Ao escolher uma opção do seletor "Exibir" pelo teclado (ArrowDown e Enter), o valor muda para 25, mas o foco vai para BODY.
- T3-6858dab1b3: No select 'Exibir', ao escolher '25' pelo teclado (ArrowDown, ArrowDown, Enter) a lista fecha e o foco vai para <body>.
- T3-d1a572163c: Seletor "Exibir" da paginação: Tab no campo dispara TypeError no console e leva o foco para a lista; Tab de novo fecha a lista e o foco cai 
- T3-d56af26cd2: Ao escolher "25" na lista do "Exibir" com teclado (ArrowDown, Enter), a lista fecha e o foco vai para o body; o usuário perde a posição.
- T3-ddecc3b36a: Ao escolher "25" no seletor "Exibir" por teclado (ArrowDown e Enter), a lista fecha e o foco vai para o <body>, perdendo a posição.
- T3-e1d54b1f8b: Ao escolher "25" na lista do seletor "Exibir" pelo teclado (setas + Enter), a lista fecha e o foco vai para o <body>.

### LN-d44e13b2 · 11 membros · lotes lote-01, lote-05, lote-06, lote-12, lote-14, lote-34, lote-35, lote-36, lote-40 · → adjudicação

Regra `wcag:4.1.2` × div

Divergem: norma.aplicabilidade, norma.violada · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-02b6918da3 | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-21a852abbb | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-26d5f2141f | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-49e7215cad | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-574d0e94ce | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-57d9cd8620 | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d37fd44557 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-db18311c78 | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e404dfe2db | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f745668f7c | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f84d6ba907 | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-02b6918da3: O menu do usuário aberto tem role="menu", mas nenhum descendente com role="menuitem"; contém divs de texto, um span clicável ("Trocar unidad
- T3-21a852abbb: Menu do avatar tem role="menu" mas seus filhos são div/span/button sem role="menuitem".
- T3-26d5f2141f: role=menu cujos filhos não são menuitem (button nativo 'Sair', span 'Trocar unidade', textos)
- T3-49e7215cad: Menu do usuário aberto: role="menu" sem nenhum filho role="menuitem"; contém <div>, <span> e <button> comuns.
- T3-574d0e94ce: O menu do avatar tem role="menu", mas não contém menuitem: os filhos são div, span e um <button> "Sair".
- T3-57d9cd8620: Contêiner com role="menu" cujos filhos não têm role menuitem (span "Trocar unidade", button "Sair", textos de perfil).
- T3-d37fd44557: O painel aberto tem role="menu", mas nenhum filho tem role="menuitem": contém texto, um span clicável "Trocar unidade" e um button "Sair" co
- T3-db18311c78: O menu do usuário aberto tem role="menu", mas seus filhos são div/span/button sem role=menuitem.
- T3-e404dfe2db: div#avatar-menu tem role="menu", mas não tem nenhum filho role="menuitem". Os itens são um span clicável e um button comum.
- T3-f745668f7c: O menu do usuário aberto tem role="menu", mas nenhum filho tem role="menuitem": contém um texto em <span> "Trocar unidade" e um <button> "Sa
- T3-f84d6ba907: O container do menu do usuário tem role="menu", mas os filhos são divs/spans e um <button> sem role="menuitem" ([ferramenta citada] aria-req

### LN-e88d4899 · 4 membros · lotes lote-15, lote-26, lote-27, lote-32 · → adjudicação

Regra `wcag:1.3.1` × não resolvido

Divergem: norma.aplicabilidade, sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-6045c4a175 | 15 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-a4cc51d643 | 26 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-a71ece49f2 | 27 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-ccba849b21 | 32 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-6045c4a175: Detalhe (uniao-europeia): depois do h2 do título, as seções "Dados da Embarcação" etc. são h4 (pula o nível 3)
- T3-a4cc51d643: Detalhe (alteracao-certificado, 0001): seções h4 logo após o h2 (salto de nível)
- T3-a71ece49f2: Detalhe (uniao-europeia), com a seção expandida: as seções continuam h4 após o h2 (salto de nível)
- T3-ccba849b21: Detalhe (alteracao-certificado, 0010): após o h2 "Alteração de Certificado", as seções "1. Dados da embarcação"… são h4 (pula o nível 3)

### LN-f3dab833 · 2 membros · lotes lote-16, lote-37 · → adjudicação

Regra `govbr-3.7.0-accessibility-global-de4271a11af7` × div

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-623d37e857 | 16 | verdadeira | citada | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-e5f9ef5f95 | 37 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | — | evidencia-indisponivel | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-623d37e857: O bloco do usuário (.drop-menu-login com o disparador e o #avatar-menu) fica fora de qualquer landmark: o banner envolve só o br-header; com
- T3-e5f9ef5f95: A área do usuário (gatilho e menu) fica fora do banner e de qualquer landmark ([ferramenta citada] region).

### LN-0e9139d6 · 13 membros · lotes lote-07, lote-08, lote-09, lote-10, lote-15, lote-21, lote-22, lote-24, lote-25, lote-27, lote-36 · **muda crédito**

Regra `emag:1.3` × h2

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-2e8237ce4c | 07 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-35003a4197 | 08 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-37de07259d | 09 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-3cde7f15c2 | 10 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-617baa4951 | 15 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-61998ebe74 | 15 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-846186acff | 21 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-8d5e6b962b | 22 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-97139d6ae3 | 24 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-9db620fed3 | 25 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-a6cc521357 | 27 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-aa46420ccb | 27 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-e029271f30 | 36 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-2e8237ce4c: A página não tem h1; o título principal "Processos" é h2 e é o único cabeçalho da tela.
- T3-35003a4197: O título principal "Processos" é h2 e não há h1 na página.
- T3-37de07259d: A página não tem h1: o título principal "Processos" é h2 e é o único cabeçalho da tela.
- T3-3cde7f15c2: O único cabeçalho da página é o <h2> "Processos"; não há <h1>.
- T3-617baa4951: O único cabeçalho da página é <h2>Processos</h2>; não existe nenhum h1.
- T3-61998ebe74: O título principal "Processos" é h2 e não há h1 na página (único cabeçalho do documento).
- T3-846186acff: O título principal "Processos" é <h2>; a página não tem <h1>
- T3-8d5e6b962b: O título principal "Processos" é um h2; não há h1 na página (nem no shadow DOM).
- T3-97139d6ae3: O detalhe (uniao-europeia) não tem h1; o título principal é h2.
- T3-9db620fed3: O único cabeçalho da página é h2 'Processos'; não existe h1.
- T3-a6cc521357: Não existe h1 na página (nem no shadow DOM do cabeçalho); o título principal "Processos" é h2 e é o único cabeçalho da tela.
- T3-aa46420ccb: A página não tem nenhum h1; o único cabeçalho do conteúdo é <h2>Processos</h2>.
- T3-e029271f30: Não há h1 na página; o título principal "Processos" é h2 (o título do sistema no cabeçalho é um div)

### LN-13e318aa · 3 membros · lotes lote-15, lote-20, lote-31

Regra `emag:1.1` × botão com texto

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-5e190bc88e | 15 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-7d93cc0d43 | 20 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-c7bbc5b179 | 31 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-5e190bc88e: <button type=button href='javascript:void(0)'> contendo <p>Sair</p>: href não é atributo de button e <p> não é conteúdo permitido em button.
- T3-7d93cc0d43: Botão "Sair" (<button>) tem atributo href="javascript:void(0)" (inválido em button) e um <p> como filho (conteúdo de fluxo não permitido em 
- T3-c7bbc5b179: <button type=button href="javascript:void(0)"> com <p> dentro: atributo href e conteúdo de bloco não permitidos em button

### LN-3f840669 · 5 membros · lotes lote-02, lote-12, lote-24, lote-36 · **muda crédito**

Regra `wcag-1.4.3` × div

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-08adeddfb0 | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0bac1f1c3c | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-49277bdf59 | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-995ccda09e | 24 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-df8ea99edd | 36 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-08adeddfb0: No detalhe (uniao-europeia), o selo de status "SUCCESS" tem texto #ffffff 14px sobre #888888, contraste 3,54:1.
- T3-0bac1f1c3c: Selo "Aguarda complementos": texto #ffffff 14px sobre #8289ff, contraste 3,01:1.
- T3-49277bdf59: Selos de status laranja ("Em análise analista/supervisor/diretor"): texto #ffffff 14px normal sobre #e66f0e, contraste 3,16:1 (5 selos na ab
- T3-995ccda09e: Selos cinza ("Aguardando plano de ação", "Aguardando SFPA"): texto #ffffff 14px sobre #888888, contraste 3,54:1.
- T3-df8ea99edd: No detalhe certificacao-caol, o selo de status tem texto #ffffff 14px sobre #888888, contraste 3,54:1.

### LN-405b05e9 · 13 membros · lotes lote-01, lote-04, lote-06, lote-11, lote-12, lote-16, lote-17, lote-21, lote-27, lote-28, lote-35, lote-40 · **muda crédito**

Regra `wcag:2.4.2` × title

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-005fd1be13 | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-1595d03386 | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-2457da01fd | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-44a27a3ad3 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-4e159c0865 | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-673541bf3a | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-6c7dda52a4 | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-827989816d | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-855880d2f6 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-a9e6383bde | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-af06468c21 | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-da171dfea4 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-f538d9dbde | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-005fd1be13: O título do documento é apenas 'PNIP' (o mesmo na tela de login e no detalhe de processo), sem indicar a página 'Processos'.
- T3-1595d03386: O título do documento é "PNIP" na lista e nos detalhes; não identifica a página
- T3-2457da01fd: O título do documento é "PNIP" (só a sigla), igual nas rotas de detalhe e de exportação; não descreve a página "Processos".
- T3-44a27a3ad3: document.title = 'PNIP' na lista de processos e também nas rotas de detalhe e exportação; não identifica a página.
- T3-4e159c0865: O título do documento é apenas "PNIP", idêntico nas rotas /processos, /processos/exportar e nas de detalhe.
- T3-673541bf3a: O título do documento é só "PNIP" nesta tela (e também nas telas de detalhe e de exportação).
- T3-6c7dda52a4: O título do documento é apenas "PNIP" e não muda com a tela (igual na lista e nos detalhes).
- T3-827989816d: O título do documento é apenas "PNIP" nesta tela e também nas telas de detalhe e de exportação; não descreve o tema da página.
- T3-855880d2f6: O título do documento é apenas "PNIP" em todos os estados da tela (inclusive nas abas, diálogos e no detalhe), sem identificar a página "Pro
- T3-a9e6383bde: O título do documento é apenas "PNIP" na tela Processos (e igual nas demais rotas visitadas).
- T3-af06468c21: Título do documento é só "PNIP" nesta tela (e também no detalhe e na exportação), sem identificar a página "Processos".
- T3-da171dfea4: O título do documento é apenas "PNIP" e não descreve a página "Processos".
- T3-f538d9dbde: No detalhe do processo, o título do documento continua "PNIP", igual ao da lista; não identifica a página.

### LN-4a8f3a80 · 9 membros · lotes lote-01, lote-04, lote-07, lote-09, lote-15, lote-17, lote-19, lote-22, lote-24

Regra `axe:aria-dialog-name` × não resolvido

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-04b151128f | 01 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-15a9b9d822 | 04 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-2e779a79eb | 07 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-39cc742cdf | 09 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-5f170f278f | 15 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-6e08d85c26 | 17 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-7857ef48ec | 19 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8c802ecd0a | 22 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-9979c29fcd | 24 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-04b151128f: Diálogo de confirmação de desassociação (role="dialog", aria-modal) tem aria-labelledby="swal2-title" apontando para <h2> vazio e oculto: o 
- T3-15a9b9d822: Diálogo de assinatura (role=dialog, aria-modal=true) com aria-labelledby='swal2-title', mas h2#swal2-title está vazio e display:none; o diál
- T3-2e779a79eb: O diálogo de assinatura (role=dialog, aria-modal=true) tem aria-labelledby="swal2-title", mas o h2 #swal2-title está vazio e com display:non
- T3-39cc742cdf: Diálogo de assinatura (PDF + "Solicitar Revisão"/"Assinar com gov.br") tem role=dialog sem nome acessível (título vazio e oculto).
- T3-5f170f278f: Diálogo de confirmação "Tem certeza que deseja desassociar..." tem role=dialog com aria-labelledby apontando para h2#swal2-title vazio e ocu
- T3-6e08d85c26: Diálogo de confirmação 'Tem certeza que deseja desassociar esse processo do analista responsável?' (role=dialog) com aria-labelledby apontan
- T3-7857ef48ec: Diálogo de confirmação de desassociação (role="dialog", aria-modal="true") com aria-labelledby="swal2-title" apontando para h2 vazio e displ
- T3-8c802ecd0a: Diálogo de assinatura (visualizador de PDF com "Solicitar Revisão"/"Assinar com gov.br") com aria-labelledby="swal2-title" vazio e oculto; s
- T3-9979c29fcd: Diálogo de confirmação (role=dialog, aria-modal) aponta aria-labelledby para h2#swal2-title vazio e oculto: diálogo sem nome. O mesmo ocorre

### LN-84b1ebf8 · 63 membros · lotes lote-03, lote-05, lote-06, lote-08, lote-10, lote-11, lote-12, lote-13, lote-14, lote-15, lote-16, lote-17, lote-19, lote-20, lote-21, lote-22, lote-23, lote-25, lote-26, lote-27, lote-29, lote-30, lote-31, lote-32, lote-34, lote-35, lote-37, lote-38, lote-39, lote-41 · **muda crédito**

Regra `wcag:1.4.3` × div

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0dd898e4d0 | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-20ef9514b8 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-2335098936 | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-23b29c074b | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-25166c3e66 | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3096d29ae1 | 08 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3c240eecf6 | 10 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3f186d453c | 10 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-3f63e5012b | 10 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-412d4a10ad | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-42457c3855 | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4cbcb9dc40 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4d36d35292 | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-52642d7559 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-56252374d1 | 14 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-5722d09f41 | 14 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-57e0bb3e44 | 14 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-5b0cc9bff1 | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-60353416c4 | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-6293d5e8c6 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-65745c247f | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-690c8cb80a | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-7b3c52ba71 | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-7f88853bc6 | 20 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-8026851e5e | 20 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-807e2d4593 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-8388309f34 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-8389c98cd7 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-84b9755990 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-88d92d9e46 | 22 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-8961476aac | 22 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9144573d64 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9c05b1b55b | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9eba14234d | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9f48d0e724 | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-9f98b41ef8 | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a093a0e796 | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a5634d6189 | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-a5e5e2e17e | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-b736b7074d | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b765632883 | 29 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ba6c618e41 | 29 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-bdb1dfaadc | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-bf29f9a8bd | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-bf56a508d2 | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-c2f0af0593 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-c793cc9023 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ca89d46b6b | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-cbfda7e2e2 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ce3deccae1 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d4b60b3f06 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-d895f9e36b | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-da312f0d20 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-e417f3605f | 37 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-e80c8d5379 | 37 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-e8b5018427 | 37 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-ea05cb5725 | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-f1cb96ce41 | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-f31118eea6 | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-f3a5c2400f | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-fc539f13ca | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-fd2ccd6513 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |
| T3-fd9d2d2d40 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-06 | direta | violacao-pagina | sim | credita D-06 | norma |

Textos observados (conferência do agrupamento):
- T3-0dd898e4d0: Selos de status laranja ("Em análise analista", "Em análise supervisor", "Em análise diretor"): texto #ffffff sobre #e66f0e, 14px normal, co
- T3-20ef9514b8: Badge "Aguarda complementos": texto branco sobre rgb(130,137,255), 14px peso 500, contraste 3,01:1.
- T3-2335098936: Etiquetas de status laranja ("Em análise analista/supervisor/diretor"): texto #ffffff sobre #e66f0e, 14px normal = 3,16:1.
- T3-23b29c074b: Etiquetas "Aguardando plano de ação" e "Aguardando SFPA" (e "Aguardando análise" na aba correspondente): texto branco sobre rgb(136,136,136)
- T3-25166c3e66: Tags de status ("Em análise analista/supervisor/diretor"): texto #ffffff sobre #e66f0e, 14px normal = 3.16:1.
- T3-3096d29ae1: Etiquetas de status cinza ("Aguardando plano de ação", "Aguardando SFPA", e na aba Aguardando análise as 9 etiquetas "Aguardando análise"): 
- T3-3c240eecf6: Texto branco em fundo rgb(130,137,255), 14px peso 500: contraste 3,01:1 ("Aguarda complementos").
- T3-3f186d453c: Badges "Aguardando plano de ação" e "Aguardando SFPA" (e "Aguardando análise" na aba Aguardando análise): texto branco sobre rgb(136,136,136
- T3-3f63e5012b: Selos de status laranja ('Em análise analista', 'Em análise supervisor', 'Em análise diretor'): texto #ffffff sobre #e66f0e, 14px normal, co
- T3-412d4a10ad: Selos cinza ("Aguardando plano de ação", "Aguardando SFPA"; e os 9 selos "Aguardando análise" da aba Aguardando análise): texto #ffffff sobr
- T3-42457c3855: Detalhe (uniao-europeia): selo de status "SUCCESS" com texto branco sobre #888888, 14px = 3,54:1
- T3-4cbcb9dc40: Na aba 'Aguardando análise', as 9 etiquetas 'Aguardando análise' têm #ffffff sobre #888888 (14px): contraste 3,54:1
- T3-4d36d35292: Etiqueta "Aguarda complementos": texto branco sobre rgb(130,137,255), 14px peso 500, contraste 3.01:1.
- T3-52642d7559: Selos cinza "Aguardando plano de ação" e "Aguardando SFPA": branco sobre #888888, 14px = 3,54:1
- T3-56252374d1: Tags de status cinza ("Aguardando plano de ação", "Aguardando SFPA"; também as 9 tags "Aguardando análise" da aba Aguardando análise): #ffff
- T3-5722d09f41: Etiqueta "Aguarda complementos": texto branco sobre rgb(130,137,255), 14px peso 500, contraste 3,01:1.
- T3-57e0bb3e44: Etiquetas "Em análise analista/supervisor/diretor": texto branco de 14px (peso 500) sobre rgb(230,111,14), contraste 3,16:1.
- T3-5b0cc9bff1: Etiquetas de status (Em análise analista/supervisor, Aguarda complementos, Em revisão analista): texto #ffffff sobre #e66f0e, 14px normal = 
- T3-60353416c4: Etiqueta de status "Em análise diretor": texto #ffffff sobre #8289ff, 14px normal = 3,01:1.
- T3-6293d5e8c6: Os selos "Aguardando plano de ação" e "Aguardando SFPA" (e "Aguardando análise" na aba correspondente) têm texto branco 14px/500 sobre rgb(1
- T3-65745c247f: Etiquetas 'Aguardando plano de ação' e 'Aguardando SFPA' #ffffff sobre #888888 (14px): contraste 3,54:1
- T3-690c8cb80a: Etiqueta "Aguarda complementos": texto branco de 14px sobre rgb(130,137,255), contraste 3,01:1.
- T3-7b3c52ba71: Texto branco rgb(255,255,255) em fundo rgb(230,111,14), 14px peso 500: contraste 3,16:1 ("Em análise analista", "Em análise supervisor", "Em
- T3-7f88853bc6: Etiquetas de status "Em análise analista/supervisor/diretor": texto #ffffff sobre #e66f0e, 14px normal = 3,16:1.
- T3-8026851e5e: Etiquetas de status laranja ("Em análise analista", "Em análise supervisor" etc.): texto #ffffff sobre #e66f0e, 14px normal, contraste 3,16:
- T3-807e2d4593: Texto branco #ffffff sobre fundo #e66f0e (tag de status laranja: "Em análise analista", "Em análise supervisor"), 14px peso 500: contraste 3
- T3-8388309f34: Selo 'Aguarda complementos': #fff de 14px sobre rgb(130,137,255) = 3,01:1.
- T3-8389c98cd7: Texto branco (#fff) sobre laranja rgb(230,111,14), 14px peso 500: contraste 3,16:1 ("Em análise analista/supervisor/diretor").
- T3-84b9755990: Etiquetas "Aguardando plano de ação", "Aguardando SFPA" (e "Aguardando análise" na aba Aguardando análise): #ffffff sobre #888888, 14px = 3,
- T3-88d92d9e46: Etiquetas de status "Em análise analista"/"Em análise supervisor": texto #ffffff sobre #e66f0e, 14px normal = 3,16:1.
- T3-8961476aac: Selo "Aguarda complementos": texto #ffffff sobre #8289ff, 14px normal, contraste 3,01:1
- T3-9144573d64: Etiqueta "Aguarda complementos": #ffffff sobre #8289ff, 14px = 3,01:1.
- T3-9c05b1b55b: Etiquetas 'Aguardando plano de ação', 'Aguardando SFPA' e, na aba Aguardando análise, as 9 etiquetas 'Aguardando análise': texto #ffffff sob
- T3-9eba14234d: Selos de status laranja ("Em análise analista/supervisor/diretor"): texto branco #ffffff sobre #e66f0e, 14px normal = 3,16:1
- T3-9f48d0e724: Texto branco sobre cinza rgb(136,136,136), 14px peso 500: contraste 3,54:1 ("Aguardando plano de ação", "Aguardando SFPA"; também "Aguardand
- T3-9f98b41ef8: Selos 'Aguardando SFPA', 'Aguardando plano de ação' e 'Aguardando análise' (esta na aba Aguardando análise): #fff de 14px sobre rgb(136,136,
- T3-a093a0e796: Etiquetas de status cinza ("Aguardando plano de ação", "Aguardando SFPA" e, na aba Aguardando análise, "Aguardando análise" ×9): texto #ffff
- T3-a5634d6189: Etiqueta 'Em análise diretor': texto #ffffff sobre #8289ff, 14px normal = 3,01:1.
- T3-a5e5e2e17e: Texto branco em fundo rgb(136,136,136), 14px peso 500: contraste 3,54:1 ("Aguardando plano de ação", "Aguardando SFPA"; o mesmo selo "Aguard
- T3-b736b7074d: Aba Aguardando análise: os 9 selos "Aguardando análise" têm texto branco sobre #888888, 14px = 3,54:1
- T3-b765632883: Texto branco sobre rgb(130,137,255), 14px peso 500: contraste 3,01:1 ("Aguarda complementos").
- T3-ba6c618e41: Etiqueta 'Aguarda complementos' #ffffff sobre #8289ff (14px): contraste 3,01:1
- T3-bdb1dfaadc: Texto branco sobre rgb(130,137,255), 14px peso 500: contraste 3,01:1 ("Aguarda complementos").
- T3-bf29f9a8bd: Selos cinza ('Aguardando plano de ação', 'Aguardando SFPA'; na aba 'Aguardando análise', os 9 selos 'Aguardando análise'): texto #ffffff sob
- T3-bf56a508d2: Selos 'Em análise analista/supervisor/diretor': texto #fff de 14px (peso 500) sobre rgb(230,111,14) = 3,16:1.
- T3-c2f0af0593: Etiquetas "Aguardando plano de ação", "Aguardando SFPA" (e "Aguardando análise" na aba correspondente): texto branco de 14px sobre rgb(136,1
- T3-c793cc9023: Selo "Aguarda complementos": branco #ffffff sobre #8289ff, 14px = 3,01:1
- T3-ca89d46b6b: Selo 'Aguarda complementos': texto #ffffff sobre #8289ff, 14px normal, contraste 3,01:1.
- T3-cbfda7e2e2: Texto de status (14px, normal) #ffffff sobre #e66f0e: contraste 3,16:1 (5 etiquetas 'Em análise analista/supervisor/diretor')
- T3-ce3deccae1: Texto branco sobre fundo #888888 (tags cinza "Aguardando plano de ação", "Aguardando SFPA"), 14px: contraste 3.54:1.
- T3-d4b60b3f06: Texto branco sobre cinza rgb(136,136,136), 14px peso 500: contraste 3,54:1 ("Aguardando plano de ação", "Aguardando SFPA"; também "Aguardand
- T3-d895f9e36b: Badges de status "Em análise analista/supervisor/diretor": texto branco sobre rgb(230,111,14), 14px peso 500, contraste 3,16:1.
- T3-da312f0d20: Etiquetas de status "Em análise analista/supervisor/diretor": texto branco rgb(255,255,255) sobre laranja rgb(230,111,14), 14px peso 500, co
- T3-e417f3605f: Os selos de status "Em análise…" têm texto branco 14px/500 sobre rgb(230,111,14): contraste de 3,16:1.
- T3-e80c8d5379: Etiqueta de status índigo ("Em análise diretor"): texto #ffffff sobre #8289ff, 14px, contraste 3,01:1.
- T3-e8b5018427: O selo "Aguarda complementos" tem texto branco 14px/500 sobre rgb(130,137,255): contraste de 3,01:1.
- T3-ea05cb5725: Etiquetas de status "Em análise analista/supervisor/diretor": texto branco rgb(255,255,255) sobre rgb(230,111,14), 14px peso 500, contraste 
- T3-f1cb96ce41: Tag de status "Aguarda complementos": texto #ffffff sobre #8289ff, 14px normal = 3.01:1.
- T3-f31118eea6: Etiqueta de status "Aguarda complementos": texto #ffffff sobre #8289ff, 14px normal = 3,01:1.
- T3-f3a5c2400f: Etiquetas de status cinza ("Aguardando plano de ação", "Aguardando SFPA" e todas as "Aguardando análise" da aba Aguardando análise): texto #
- T3-fc539f13ca: Texto branco sobre fundo #8289ff (tag "Aguarda complementos"), 14px: contraste 3.01:1.
- T3-fd2ccd6513: Etiquetas "Aguardando plano de ação" e "Aguardando SFPA" (e "Aguardando análise" na outra aba): texto branco sobre cinza rgb(136,136,136), 1
- T3-fd9d2d2d40: Texto branco rgb(255,255,255) sobre laranja rgb(230,111,14), 14px peso 500: contraste 3,16:1 ("Em análise analista/supervisor/diretor").

### LN-8a4e84ad · 69 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05, lote-06, lote-07, lote-08, lote-09, lote-10, lote-12, lote-13, lote-14, lote-15, lote-16, lote-17, lote-19, lote-20, lote-21, lote-23, lote-24, lote-25, lote-26, lote-27, lote-28, lote-29, lote-30, lote-31, lote-32, lote-33, lote-34, lote-36, lote-38, lote-40, lote-41 · **muda crédito**

Regra `axe:label` × campo de formulário

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-05cfbbaf91 | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-0be18ca477 | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-107c5e2ef5 | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-19984817c7 | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-1b2cd343bd | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-1d902ffd3f | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-1d9f560238 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-2325739456 | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-279168ddfc | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-290ed06f9c | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-2be7e65738 | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-2eaf5758e8 | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-325f7a20e1 | 08 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-3856178bda | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-3c00789a21 | 10 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-3e0a7cbc67 | 10 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-3f49a63d74 | 10 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-4cbd7a04d9 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4e25cf4122 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-50dfea6bfb | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-52c2510810 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-5a53cbd86d | 14 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-5c9d472e7e | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-5db7fc377f | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-6403b56f49 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-6ef1a224d5 | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-783ab180cb | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-78de15daf0 | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-7960f0db25 | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-799c6cfd85 | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-7daa0b15cf | 20 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-800ba348d3 | 20 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-85bf8b9db2 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-90d32f64a3 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-910c83c8f5 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-97ef169751 | 24 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-998e0a9f8d | 24 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-9be9870d68 | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-a25d82e7b1 | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-a45f275ab1 | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-a76e8cd524 | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-a97fc167c6 | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-aa698a6850 | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-af73aef5ce | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-afdd29c901 | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-b5b0680667 | 29 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-b6e813002a | 29 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-b7ce1f9d6f | 29 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-b8014edc6c | 29 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-c2a024d7e4 | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-c407c234d8 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-c6aa868a8b | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-c717e59ddf | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-c9d1fbe63a | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-cd1092c085 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-d14556b53c | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-d2c4b471fd | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-d2edf1d6a9 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-d4cb3e0ea0 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e1c16bcc8a | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e3356f978e | 36 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e90fb74959 | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e9d146c060 | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-edfa3563d8 | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f5487de64e | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f769d71518 | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f8dc924ee0 | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-f8f67d53fb | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-fe1e9c70d6 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |

Textos observados (conferência do agrupamento):
- T3-05cfbbaf91: Form elements must have labels
- T3-0be18ca477: Form elements must have labels
- T3-107c5e2ef5: Form elements must have labels
- T3-19984817c7: Form elements must have labels
- T3-1b2cd343bd: Form elements must have labels
- T3-1d902ffd3f: Os 7 checkboxes da tabela (o "selecionar todos" no cabeçalho e os 6 das linhas) não têm rótulo: sem label, aria-label nem aria-labelledby; a
- T3-1d9f560238: Form elements must have labels
- T3-2325739456: Form elements must have labels
- T3-279168ddfc: Form elements must have labels
- T3-290ed06f9c: Form elements must have labels
- T3-2be7e65738: Form elements must have labels
- T3-2eaf5758e8: Form elements must have labels
- T3-325f7a20e1: Form elements must have labels
- T3-3856178bda: Form elements must have labels
- T3-3c00789a21: Form elements must have labels
- T3-3e0a7cbc67: Form elements must have labels
- T3-3f49a63d74: Form elements must have labels
- T3-4cbd7a04d9: Form elements must have labels
- T3-4e25cf4122: Caixa "selecionar todos" no cabeçalho e caixas de seleção de cada linha sem label, aria-label ou aria-labelledby: nome acessível vazio
- T3-50dfea6bfb: Form elements must have labels
- T3-52c2510810: Form elements must have labels
- T3-5a53cbd86d: Form elements must have labels
- T3-5c9d472e7e: Form elements must have labels
- T3-5db7fc377f: Form elements must have labels
- T3-6403b56f49: Form elements must have labels
- T3-6ef1a224d5: Form elements must have labels
- T3-783ab180cb: Form elements must have labels
- T3-78de15daf0: Form elements must have labels
- T3-7960f0db25: Form elements must have labels
- T3-799c6cfd85: Form elements must have labels
- T3-7daa0b15cf: Form elements must have labels
- T3-800ba348d3: 7 checkboxes (selecionar todos no cabeçalho + 6 de linha) sem label, aria-label ou aria-labelledby.
- T3-85bf8b9db2: Form elements must have labels
- T3-90d32f64a3: Form elements must have labels
- T3-910c83c8f5: Form elements must have labels
- T3-97ef169751: Form elements must have labels
- T3-998e0a9f8d: Form elements must have labels
- T3-9be9870d68: 7 checkboxes da tabela (selecionar todos no cabeçalho e um por linha) sem label, aria-label nem aria-labelledby.
- T3-a25d82e7b1: Form elements must have labels
- T3-a45f275ab1: Form elements must have labels
- T3-a76e8cd524: Form elements must have labels
- T3-a97fc167c6: Form elements must have labels
- T3-aa698a6850: Form elements must have labels
- T3-af73aef5ce: Checkbox "selecionar todos" do cabeçalho e checkboxes das linhas (7) sem label, aria-label ou aria-labelledby; nome acessível vazio.
- T3-afdd29c901: Form elements must have labels
- T3-b5b0680667: Form elements must have labels
- T3-b6e813002a: Form elements must have labels
- T3-b7ce1f9d6f: Form elements must have labels
- T3-b8014edc6c: Form elements must have labels
- T3-c2a024d7e4: Form elements must have labels
- T3-c407c234d8: Form elements must have labels
- T3-c6aa868a8b: Form elements must have labels
- T3-c717e59ddf: Form elements must have labels
- T3-c9d1fbe63a: Form elements must have labels
- T3-cd1092c085: Form elements must have labels
- T3-d14556b53c: Form elements must have labels
- T3-d2c4b471fd: Checkbox "selecionar todos" do cabeçalho e os 6 checkboxes das linhas não têm label, aria-label nem aria-labelledby.
- T3-d2edf1d6a9: Form elements must have labels
- T3-d4cb3e0ea0: Form elements must have labels
- T3-e1c16bcc8a: Form elements must have labels
- T3-e3356f978e: Form elements must have labels
- T3-e90fb74959: Form elements must have labels
- T3-e9d146c060: Form elements must have labels
- T3-edfa3563d8: Form elements must have labels
- T3-f5487de64e: Form elements must have labels
- T3-f769d71518: Form elements must have labels
- T3-f8dc924ee0: Form elements must have labels
- T3-f8f67d53fb: Form elements must have labels
- T3-fe1e9c70d6: Form elements must have labels

### LN-9e382883 · 2 membros · lotes lote-05, lote-31

Regra `emag:1.8` × div

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1febc09781 | 05 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-c48b14f4e7 | 31 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1febc09781: O menu do avatar (e o gatilho) ficam fora das regiões banner/main/nav: o conteúdo não está em nenhum landmark.
- T3-c48b14f4e7: O menu do avatar (e o gatilho #avatar-dropdown-trigger) fica fora de qualquer landmark: é irmão de <br-header> dentro de pnip-header, fora d

### LN-a04f70e2 · 24 membros · lotes lote-01, lote-02, lote-03, lote-06, lote-09, lote-13, lote-17, lote-19, lote-20, lote-26, lote-27, lote-29, lote-30, lote-34, lote-35, lote-37, lote-40 · **muda crédito**

Regra `axe:empty-table-header` × th

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0422f3002e | 01 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-0a1dd56f4e | 02 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-1232229fe6 | 03 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-2460986dd6 | 06 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-25f29cfa92 | 06 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-364813e301 | 09 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-3a66e20b17 | 09 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-528785b194 | 13 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-67d6f171c9 | 17 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-77a99aef60 | 19 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-7b75b22398 | 19 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-7dd87da933 | 20 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-a42875b818 | 26 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-aa9e418c79 | 27 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-b378e69ac3 | 29 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-b95839a77b | 29 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-bd902b3f33 | 30 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-d4abd899dc | 34 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-dcfc59bb66 | 35 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-e4f0b9b47e | 37 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-e58f773e2a | 37 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-e762048699 | 37 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |
| T3-f772452d7e | 40 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | — | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-f7ffa62c03 | 40 | verdadeira | citada | boa-pratica | aplica | sim | D-08 | direta | — | violacao-pagina | sim | credita D-08 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-0422f3002e: Table header text should not be empty
- T3-0a1dd56f4e: Table header text should not be empty
- T3-1232229fe6: Table header text should not be empty
- T3-2460986dd6: Cabeçalhos da coluna de seleção e da coluna de ações não têm texto acessível; as células dessas colunas ficam sem cabeçalho (também th:nth-c
- T3-25f29cfa92: Table header text should not be empty
- T3-364813e301: Table header text should not be empty
- T3-3a66e20b17: Table header text should not be empty
- T3-528785b194: Cabeçalhos da coluna de seleção e da coluna de ações estão vazios (sem texto para leitor de tela).
- T3-67d6f171c9: Table header text should not be empty
- T3-77a99aef60: Table header text should not be empty
- T3-7b75b22398: Cabeçalhos da coluna de seleção e da coluna de ações sem texto.
- T3-7dd87da933: Table header text should not be empty
- T3-a42875b818: Table header text should not be empty
- T3-aa9e418c79: Table header text should not be empty
- T3-b378e69ac3: Table header text should not be empty
- T3-b95839a77b: Table header text should not be empty
- T3-bd902b3f33: Table header text should not be empty
- T3-d4abd899dc: Cabeçalhos da coluna de seleção e da coluna de ações sem texto acessível (as abas Aguardando análise e Concluídos repetem o cabeçalho vazio 
- T3-dcfc59bb66: Table header text should not be empty
- T3-e4f0b9b47e: Cabeçalhos de coluna sem texto: coluna de seleção (só contém checkbox) e coluna de ações (vazia).
- T3-e58f773e2a: Table header text should not be empty
- T3-e762048699: Cabeçalho da coluna de ações (Ver processo, Desassociar, Assinar) é <th scope="col"> vazio. O mesmo ocorre nas abas Aguardando análise (th 6
- T3-f772452d7e: Table header text should not be empty
- T3-f7ffa62c03: Table header text should not be empty

### LN-a5023bd6 · 64 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05, lote-07, lote-08, lote-09, lote-10, lote-11, lote-12, lote-13, lote-14, lote-16, lote-17, lote-18, lote-21, lote-22, lote-23, lote-24, lote-26, lote-28, lote-29, lote-30, lote-32, lote-33, lote-34, lote-35, lote-37, lote-38, lote-39, lote-40, lote-41 · **muda crédito**

Regra `wcag:2.1.1` × span

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-01691528fe | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-0203ba3277 | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-051079411b | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-07354777e6 | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-0940aad316 | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-09c877bef3 | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-1178e18bd4 | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-15a31815d9 | 04 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1e58d3ffa3 | 05 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-1eb29b5bf5 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-293e419418 | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-2bb73e4b90 | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-309ffd54e4 | 08 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-3a69eb6718 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3de4627849 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-42123df569 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-4459bda045 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-480fb4a8fb | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-49f3145f29 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4c717c9c66 | 12 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-5033c79904 | 13 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-588d81f7de | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-667ab543b7 | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6db7699e68 | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-741614e0b9 | 18 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-7588d55841 | 18 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-75d45392f5 | 18 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-805722b378 | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-84cbd4047d | 21 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-8798cd4e8e | 22 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-8a199e6290 | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8c73670e3d | 22 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-913d80dd6f | 23 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-95a2d962b6 | 24 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-96b340f364 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-973b5d74a6 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-991fd78209 | 24 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a318fe7e6c | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-a385d8a5a9 | 26 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-ad2b39af5b | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-b23e2698ff | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ba7dbef1fa | 29 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-bf8e3fc493 | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-c0a9d1a479 | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-c1a7efc8c4 | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-ca09c281d1 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cbbac8870e | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-cbbbfbfb30 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-d2744c90ce | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-d54cb8ce7c | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-dadb11c532 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-db1cc3ee21 | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-dc8437ec7d | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-e47751402b | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e62570aa0b | 37 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-e9a35cff2e | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ede38e14ec | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-f0549a433c | 39 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f4cc2849b3 | 39 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-f6dce3b19c | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-f856ea481a | 40 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f85c650990 | 40 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-fb7a69125f | 41 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ff758f9110 | 41 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |

Textos observados (conferência do agrupamento):
- T3-01691528fe: "Meus processos" e os 6 filtros (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span> com cursor:pointer
- T3-0203ba3277: "Trocar unidade" no menu do usuário é um <span> com cursor:pointer, tabIndex -1, sem role: Tab a partir do botão do avatar vai direto para "
- T3-051079411b: "Trocar unidade" é um span com cursor:pointer, sem tabindex e sem role (tabIndex -1), por isso não recebe foco pelo teclado.
- T3-07354777e6: 'Meus processos' e os filtros Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca e Petrecho são <span class='br-tag interact
- T3-0940aad316: "Trocar unidade" no menu do avatar é um <span> clicável sem tabindex nem role. Com o menu aberto, o Tab vai do gatilho direto para "Sair".
- T3-09c877bef3: Os 7 filtros ("Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span class="b
- T3-1178e18bd4: O controle "Meus processos" é um <span class="br-tag interaction"> sem role nem tabindex; só funciona por clique de mouse e não recebe foco 
- T3-15a31815d9: "Trocar unidade" é um span com cursor:pointer e handler de clique (ao clicar navega para /portal-mpa), sem tabindex nem role: tabIndex -1, i
- T3-1e58d3ffa3: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex nem role; ao abrir o menu, Tab vai do gatilho direto para "Sair", pulando essa
- T3-1eb29b5bf5: Os 7 controles "Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são <span> com cu
- T3-293e419418: Os chips "Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são <span class="br-tag
- T3-2bb73e4b90: A tag "Meus processos" (alterna o filtro) é um span clicável sem tabindex nem role; não recebe foco pelo teclado.
- T3-309ffd54e4: "Meus processos" é um <span class="br-tag interaction"> com cursor:pointer e tratador de clique, sem tabindex nem papel; não recebe foco pel
- T3-3a69eb6718: No menu do avatar, 'Trocar unidade' é um <span> com cursor:pointer, sem tabindex nem role; ao clicar navega para /pnip-d/portal-mpa. Não rec
- T3-3de4627849: 'Trocar unidade' é um span com cursor:pointer, sem tabindex nem papel; focus() não o focaliza e ele fica fora da ordem de Tab.
- T3-42123df569: As tags de filtro "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são spans com cursor:pointer, se
- T3-4459bda045: Os chips de filtro ("Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span> c
- T3-480fb4a8fb: O controle "Meus processos" é um span.br-tag com cursor:pointer, tabIndex -1 e sem role. Ele não recebe foco pelo teclado (não aparece na se
- T3-49f3145f29: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex nem role (tabIndex -1): não recebe foco por teclado.
- T3-4c717c9c66: 'Trocar unidade' é <span> com cursor:pointer, sem tabindex nem papel: não alcançável por teclado
- T3-5033c79904: "Trocar unidade" no menu do usuário é um <span> com cursor:pointer, sem tabindex/role; com o menu aberto, Tab vai do disparador direto para 
- T3-588d81f7de: "Trocar unidade" no menu do avatar é um <span> com cursor:pointer, sem role nem tabindex (tabIndex -1), inalcançável por teclado.
- T3-667ab543b7: 'Trocar unidade' é <span> com cursor:pointer, sem role nem tabindex: não recebe foco.
- T3-6db7699e68: "Trocar unidade" é um <span> com cursor:pointer e handler de clique (navega para /portal-mpa), sem tabindex nem role; o Tab vai do gatilho d
- T3-741614e0b9: Chips "Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são <span> com cursor:poin
- T3-7588d55841: No detalhe, os controles "Mostrar"/"Ocultar" das seções são <span> clicáveis, tabIndex -1, sem role nem aria-expanded.
- T3-75d45392f5: O alternador "Meus processos" é um <span> clicável que liga/desliga o filtro (9↔10 linhas). Não recebe foco por teclado e o estado ligado só
- T3-805722b378: O alternador 'Meus processos' é um span com cursor:pointer, sem tabindex nem papel; não recebe foco e o Tab o pula.
- T3-84cbd4047d: "Meus processos" (alterna filtro) e os 6 filtros (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span cl
- T3-8798cd4e8e: Os 6 filtros (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span class="br-tag interaction"> com apenas
- T3-8a199e6290: "Trocar unidade" no menu do usuário é um <span> com cursor:pointer, sem tabindex nem role: não recebe foco pelo teclado
- T3-8c73670e3d: 7 controles clicáveis ('Meus processos' e os 6 filtros Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <sp
- T3-913d80dd6f: Detalhe (uniao-europeia): "Mostrar"/"Ocultar" das seções são <span> com cursor:pointer, sem tabindex: inalcançáveis pelo teclado
- T3-95a2d962b6: Os 6 chips de filtro ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span> com cursor:pointe
- T3-96b340f364: 'Trocar unidade' é <span style="cursor:pointer"> com manipulador de clique (navega para /pnip-d/portal-mpa); sem role, sem tabindex, focus()
- T3-973b5d74a6: "Trocar unidade" no menu do usuário é um <span> com cursor:pointer, sem tabindex; Tab a partir do botão do avatar vai direto para "Sair"
- T3-991fd78209: A ação "Trocar unidade" do menu do usuário é um <span> com cursor:pointer, sem tabindex nem role (tabIndex=-1): não é alcançável por teclado
- T3-a318fe7e6c: "Meus processos" e os filtros (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span class="br-tag interac
- T3-a385d8a5a9: Etiqueta "Meus processos" (alterna o filtro) e as 6 etiquetas de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca,
- T3-ad2b39af5b: "Trocar unidade" é um <span> com cursor:pointer, sem role nem tabindex (tabIndex -1); não é alcançável por teclado.
- T3-b23e2698ff: "Trocar unidade" no menu do avatar é <span> com cursor:pointer que navega para /portal-mpa ao clique, mas não é focável: Tab sai do gatilho 
- T3-ba7dbef1fa: "Meus processos" e os filtros "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho" são <span> com cursor
- T3-bf8e3fc493: Os 7 controles 'Meus processos', 'Aberto há', 'Tipo de processo', 'Status', 'Espécie alvo', 'Método de pesca' e 'Petrecho' são <span class="
- T3-c0a9d1a479: Os 7 chips de filtro ('Meus processos', 'Aberto há', 'Tipo de processo', 'Status', 'Espécie alvo', 'Método de pesca', 'Petrecho') são <span>
- T3-c1a7efc8c4: Os 6 filtros (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são span com cursor:pointer, tabIndex -1 e sem r
- T3-ca09c281d1: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex nem role (tabIndex -1): inacessível por teclado.
- T3-cbbac8870e: Chips "Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho" são <span> com cursor:point
- T3-cbbbfbfb30: No menu do avatar, "Trocar unidade" é um <span> com cursor:pointer, sem role nem tabindex (tabIndex -1); o Tab a partir do gatilho vai diret
- T3-d2744c90ce: Os 7 controles de filtro ("Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <s
- T3-d54cb8ce7c: Os 6 filtros ('Aberto há', 'Tipo de processo', 'Status', 'Espécie alvo', 'Método de pesca', 'Petrecho') são span com cursor:pointer, sem tab
- T3-dadb11c532: "Meus processos" e os filtros Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca e Petrecho são <span> clicáveis sem role, s
- T3-db1cc3ee21: "Trocar unidade" no menu do avatar é <span> com cursor:pointer, tabIndex -1, sem role; navega para outra página só com clique.
- T3-dc8437ec7d: Os 6 filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span> com cursor:pointer, sem t
- T3-e47751402b: "Trocar unidade" é um <span> com cursor:pointer, sem role, sem tabindex (tabIndex -1); ao pressionar Tab a partir do gatilho o foco vai dire
- T3-e62570aa0b: "Meus processos" é um alternador (clicar muda a tabela de 9 para 10 linhas e o fundo de #1351b4 para branco) implementado como <span> sem ta
- T3-e9a35cff2e: "Trocar unidade" no menu do usuário é um <span> com cursor:pointer, sem tabindex nem role: não recebe foco por teclado.
- T3-ede38e14ec: O chip "Meus processos" é um <span> com cursor:pointer e handler de clique, sem tabindex (tabIndex -1); não aparece na sequência de Tab. Cli
- T3-f0549a433c: "Trocar unidade" é um <span> com cursor:pointer que navega para /pnip-d/portal-mpa ao clicar; Tab vai do botão do avatar direto para "Sair",
- T3-f4cc2849b3: Os 6 filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span class="br-tag interaction"
- T3-f6dce3b19c: Os 6 filtros ("Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca", "Petrecho") são <span> com cursor:pointer que ab
- T3-f856ea481a: "Trocar unidade" é um <span> com cursor:pointer, sem tabindex nem papel; com o menu aberto, Tab vai do botão do avatar direto para "Sair".
- T3-f85c650990: Os chips "Meus processos", "Aberto há", "Tipo de processo", "Status", "Espécie alvo", "Método de pesca" e "Petrecho" são <span> com cursor:p
- T3-fb7a69125f: "Trocar unidade" é um <span> com cursor:pointer e tabIndex -1: não recebe foco por teclado.
- T3-ff758f9110: A tag "Meus processos" e os chips de filtro (Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho) são <span> com cu

### LN-bb41b326 · 5 membros · lotes lote-06, lote-21, lote-25, lote-37, lote-40

Regra `emag:1.3` × não resolvido

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-27000b1abc | 06 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-82831d4fb0 | 21 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-9cf1c7a8d5 | 25 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-e56a530117 | 37 | verdadeira | citada | recomendado | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-f7056c53f0 | 40 | verdadeira | citada | recomendado | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-27000b1abc: No detalhe alteracao-certificado (d0010), há um h4 depois do h2, sem h3 (heading-order).
- T3-82831d4fb0: No detalhe certificacao-caol, os cards usam h5 sem os níveis intermediários (heading-order).
- T3-9cf1c7a8d5: No detalhe do processo (uniao-europeia), depois do h2 do título vêm h4 ("Dados da Embarcação", …), sem h3: a hierarquia pula um nível.
- T3-e56a530117: No detalhe, as seções "Dados da Embarcação" etc. são h4 logo após o h2 do título, pulando o nível h3.
- T3-f7056c53f0: No detalhe alteracao-certificado (d0001), há um h4 depois do h2, sem h3 (heading-order).

### LN-c30b5022 · 4 membros · lotes lote-10, lote-35, lote-37 · **muda crédito**

Regra `emag:1.3` × raiz

Divergem: vinculo, sugestao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-3c880fb7ae | 10 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-3df6bf704c | 10 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-d93ae0e2e3 | 35 | verdadeira | citada | recomendado | aplica | sim | D-12 | ausencia-global | — | violacao-pagina | sim | credita D-12 | mais-fraca |
| T3-e5cf50a9bd | 37 | verdadeira | citada | recomendado | aplica | sim | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-3c880fb7ae: O detalhe alteracao-certificado (d0010) não tem h1 (page-has-heading-one).
- T3-3df6bf704c: O detalhe certificacao-caol não tem h1 (page-has-heading-one).
- T3-d93ae0e2e3: A página não tem <h1>; o único cabeçalho é <h2> 'Processos'.
- T3-e5cf50a9bd: O detalhe alteracao-certificado (d0001) não tem h1 (page-has-heading-one).

### LN-daaa7430 · 30 membros · lotes lote-02, lote-06, lote-07, lote-09, lote-10, lote-11, lote-13, lote-14, lote-17, lote-22, lote-25, lote-28, lote-29, lote-30, lote-33, lote-34, lote-35, lote-37, lote-38, lote-41 · **muda crédito**

Regra `wcag:1.3.1` × th

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-067cf704cd | 02 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0a366e1211 | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-220531cee0 | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-2939face5e | 07 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-295a36259c | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3860c3e635 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-3c60115b69 | 10 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-4443afe4bb | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-469cae904d | 11 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-53cae868ee | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-58da371d1f | 14 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-6ca3bd1e6c | 17 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-8939a1a54d | 22 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-898ee35854 | 22 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-9b2e81105b | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-9c0f7bf404 | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-9d5de8618d | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9d6fc06aae | 25 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ad6ed8abc3 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-aef34cd1e1 | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-b4e7366284 | 29 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bc959d665f | 30 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bcaaec263a | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-cfb556a42d | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-08 | direta | violacao-pagina | sim | credita D-08 | norma |
| T3-d54de33b36 | 34 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-db5918a0fd | 35 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-e86852bf48 | 37 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-eb11c35411 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-f903707de2 | 41 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fe01ccbbd8 | 41 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-067cf704cd: A coluna "Aberto há" mostra o ícone sort-down indicando ordenação, mas o th não tem aria-sort; a ordenação só é transmitida visualmente.
- T3-0a366e1211: Cabeçalhos de coluna sem texto: coluna de seleção (só um checkbox sem rótulo) e coluna de ações (th vazio)
- T3-220531cee0: O cabeçalho da coluna de ações (com "Ver processo", "Desassociar", "Assinar") é um <th scope="col"> vazio.
- T3-2939face5e: A coluna de ações (Ver processo, Desassociar, Assinar) tem um th vazio.
- T3-295a36259c: A coluna "Aberto há" é ordenável e alterna crescente/decrescente, mas o th não tem aria-sort; a direção só aparece pelo ícone.
- T3-3860c3e635: Cabeçalho "Aberto há" indica a ordenação só pelo ícone (aria-hidden) sort-down/sort-up; não há aria-sort.
- T3-3c60115b69: O cabeçalho "Aberto há" mostra a direção da ordenação só pelo ícone (sort-down/sort-up, aria-hidden); o th não tem aria-sort.
- T3-4443afe4bb: Último cabeçalho de coluna (coluna de ações "Ver processo"/"Desassociar"/"Assinar") é um <th> vazio, sem texto nem nome acessível.
- T3-469cae904d: Coluna 'Aberto há' tem ordenação ativa indicada só visualmente pelo ícone sort-down/sort-up; o th não tem aria-sort em nenhum dos dois senti
- T3-53cae868ee: O cabeçalho da coluna de ações (Ver processo, Desassociar, Assinar) é um <th scope='col'> vazio; o mesmo ocorre nas abas 'Aguardando análise
- T3-58da371d1f: O cabeçalho "Aberto há" mostra o ícone sort-down indicando a ordenação da tabela, mas não tem aria-sort; o ícone não tem texto alternativo.
- T3-6ca3bd1e6c: O cabeçalho "Aberto há" indica a ordenação só pelo ícone visual sort-down/sort-up; o <th> não tem aria-sort.
- T3-8939a1a54d: A direção de ordenação da coluna "Aberto há" é indicada só pelo ícone; o th não tem aria-sort
- T3-898ee35854: Cabeçalhos de coluna sem texto: a coluna do checkbox e a coluna de ações (última) não têm texto acessível.
- T3-9b2e81105b: Cabeçalhos de coluna sem texto: coluna de seleção (th 2) e coluna de ações (th 9, scope=col) vazias.
- T3-9c0f7bf404: Cabeçalhos de coluna sem texto: a 2ª (só contém o checkbox) e a última (coluna de ações) são <th> vazios
- T3-9d5de8618d: A coluna "Aberto há" mostra o ícone sort-down (ordenação decrescente), mas o th não tem aria-sort; a ordenação só é transmitida visualmente.
- T3-9d6fc06aae: A coluna "Aberto há" exibe ícone de ordenação (sort-down, aria-hidden) mas o th não tem aria-sort; a ordenação só é transmitida visualmente.
- T3-ad6ed8abc3: A coluna "Aberto há" exibe ícone de ordenação (sort-down) indicando a ordem da tabela, mas o th não tem aria-sort e o ícone é aria-hidden: a
- T3-aef34cd1e1: Cabeçalho da coluna de ações (Ver processo, Desassociar, Assinar/Assumir) é um <th> vazio, sem texto para leitores de tela (também nas abas 
- T3-b4e7366284: A coluna "Aberto há" (e "Data/Hora" em Concluídos) mostra o ícone de ordenação sort-down, mas o <th> não tem aria-sort; o ícone é exposto co
- T3-bc959d665f: A coluna "Aberto há" mostra o ícone sort-down indicando ordenação decrescente, mas o th não tem aria-sort nem texto alternativo para o estad
- T3-bcaaec263a: Os cabeçalhos da coluna de seleção (contém só o checkbox) e da coluna de ações estão vazios, sem texto para leitores de tela.
- T3-cfb556a42d: O cabeçalho da coluna de ações (Ver processo, Desassociar, Assinar) é um th scope="col" vazio.
- T3-d54de33b36: A coluna "Aberto há" mostra o ícone sort-down (ordenação) apenas visualmente; o <th> não tem aria-sort.
- T3-db5918a0fd: A coluna 'Aberto há' (ou 'Data/Hora' em Concluídos) mostra o ícone sort-down indicando a ordenação, mas nenhum th tem aria-sort
- T3-e86852bf48: Coluna "Aberto há" mostra indicador visual de ordenação (ícone sort-down) mas o <th> não tem aria-sort
- T3-eb11c35411: O cabeçalho ordenável não tem aria-sort. A direção só é mostrada pelo ícone sort-down/sort-up.
- T3-f903707de2: O cabeçalho "Aberto há" exibe o ícone de ordenação sort-down (a tabela está ordenada por essa coluna), mas o th não tem aria-sort; o clique 
- T3-fe01ccbbd8: A direção da ordenação só aparece no ícone; o th não tem aria-sort.

### LN-e2972868 · 36 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-08, lote-09, lote-10, lote-11, lote-13, lote-14, lote-15, lote-16, lote-17, lote-18, lote-19, lote-21, lote-24, lote-27, lote-30, lote-31, lote-32, lote-33, lote-34, lote-37, lote-38, lote-41 · **muda crédito**

Regra `wcag:4.1.2` × campo de formulário

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-008e7ed311 | 01 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-0d8abbddf5 | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-108d28f1e1 | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-14d89b3ee6 | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-3313e89af6 | 08 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-366520a830 | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-38a2aa4a5f | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-39e3174d42 | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-401cd5e9d4 | 10 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-42f943fb21 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-461b4b4a48 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-50f9036973 | 13 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-585ac6efd8 | 14 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-5d558738b0 | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-61040c3026 | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-6252ee29db | 16 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-64a8d36358 | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-67f93df547 | 17 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-75a8d3ca8f | 18 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-7b2ed54d28 | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-87323766ca | 21 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-99ac169c3f | 24 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-a7a9e7df7d | 27 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bf890c5d54 | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-c155c35c04 | 30 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-c5d44762c5 | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c6e532cd8e | 31 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cd119986b6 | 32 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-cf7b71bbd6 | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-d47b809e22 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-d638217773 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e4052ca67f | 37 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-e406a418cf | 37 | verdadeira | citada | obrigatorio | aplica | sim | D-04 | direta | violacao-pagina | sim | credita D-04 | norma |
| T3-ee6fa94b87 | 38 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fc6d056adf | 41 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-ff23369d82 | 41 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-008e7ed311: As caixas de seleção (selecionar todas no cabeçalho e as de cada linha) não têm label, aria-label nem aria-labelledby: o nome acessível é va
- T3-0d8abbddf5: Os 7 checkboxes da tabela (1 de 'selecionar todos' no cabeçalho e 6 nas linhas) não têm <label>, aria-label nem aria-labelledby: nome acessí
- T3-108d28f1e1: Os 7 checkboxes da tabela (selecionar todos no cabeçalho e 6 de linha) não têm nome acessível (sem label, aria-label ou aria-labelledby).
- T3-14d89b3ee6: As caixas de seleção das linhas não têm rótulo; o nome acessível é vazio e não identifica o processo.
- T3-3313e89af6: A caixa "selecionar todos" no cabeçalho não tem label, aria-label nem title; o <th> que a contém não tem texto: nome acessível vazio.
- T3-366520a830: 7 checkboxes (o 'selecionar todos' do cabeçalho e os das linhas) sem label, aria-label nem title: nome acessível vazio.
- T3-38a2aa4a5f: A checkbox "selecionar todos" no cabeçalho da tabela não tem nome acessível (sem label/aria-label, th sem texto).
- T3-39e3174d42: Caixas de seleção das linhas sem label/aria-label (labels.length = 0); nome acessível vazio.
- T3-401cd5e9d4: 7 caixas de seleção (cabeçalho 'selecionar todos' e linhas) sem label, aria-label nem aria-labelledby: nome acessível vazio
- T3-42f943fb21: 7 checkboxes de seleção (1 no cabeçalho "selecionar todos" e 6 nas linhas) sem label, aria-label, aria-labelledby ou title: nome acessível v
- T3-461b4b4a48: As caixas de seleção das linhas não têm label, aria-label nem title: nome acessível vazio.
- T3-50f9036973: 7 checkboxes de seleção (cabeçalho e linhas) sem label, aria-label nem aria-labelledby: nome acessível vazio
- T3-585ac6efd8: Checkbox "selecionar todos" no cabeçalho e as 6 checkboxes de linha não têm nome acessível: sem <label>, aria-label ou aria-labelledby (árvo
- T3-5d558738b0: A caixa "selecionar todos" no cabeçalho da tabela não tem label, aria-label nem title: nome acessível vazio.
- T3-61040c3026: As 6 caixas de seleção das linhas não têm rótulo nem nome acessível.
- T3-6252ee29db: Os seletores "Exibir" e "Página" são input type="text" que abrem uma lista (ArrowDown abre a lista de 10/25/50/100), mas não têm role="combo
- T3-64a8d36358: O checkbox do cabeçalho (seleciona todas as linhas e mostra "Assinar selecionados") e os 6 checkboxes das linhas não têm label, aria-label n
- T3-67f93df547: A caixa "selecionar todos" no cabeçalho da tabela não tem rótulo nem nome acessível (o th também não tem texto); marcá-la seleciona as 6 lin
- T3-75a8d3ca8f: 7 checkboxes de seleção (cabeçalho "selecionar todos" e linhas) sem rótulo: sem label, aria-label ou aria-labelledby; nome acessível vazio.
- T3-7b2ed54d28: Caixa de seleção do cabeçalho (selecionar todos) sem label, aria-label nem title; o th que a contém não tem texto. Nome acessível vazio.
- T3-87323766ca: Os seletores "Exibir" e "Página" são input type=text com lista de radios; o input não tem role="combobox", aria-expanded nem aria-controls, 
- T3-99ac169c3f: As 6 caixas de seleção das linhas não têm nome acessível (sem label/aria-label); o leitor anuncia apenas "caixa de seleção".
- T3-a7a9e7df7d: Os seletores "Exibir" e "Página" são <input type="text"> sem role="combobox" e sem aria-expanded/aria-controls; ao receber foco abrem uma li
- T3-bf890c5d54: 7 checkboxes da tabela (selecionar todos no cabeçalho e 6 de linha) sem label, aria-label ou aria-labelledby; nome acessível vazio.
- T3-c155c35c04: 7 checkboxes (seleção de todos no cabeçalho e seleção por linha) sem label, aria-label ou aria-labelledby: nome acessível vazio.
- T3-c5d44762c5: Os campos 'Exibir' e 'Página' abrem uma lista de opções, mas são input type=text sem role='combobox', aria-expanded nem aria-controls; os ra
- T3-c6e532cd8e: Os seletores "Exibir" e "Página" são input type=text sem role="combobox"/aria-expanded/aria-controls. A lista (div.br-list tabindex=0) e os 
- T3-cd119986b6: Os campos "Exibir" e "Página" abrem uma lista de opções, mas o input não tem role="combobox" nem aria-expanded (continua null com a lista ab
- T3-cf7b71bbd6: Checkbox de seleção de todas as linhas (thead) e checkboxes de cada linha: input nativo sem <label>, aria-label ou aria-labelledby; nome ace
- T3-d47b809e22: As 6 checkboxes de seleção de linha não têm nome acessível.
- T3-d638217773: Caixa de seleção "selecionar todos" do cabeçalho da tabela não tem nome acessível (sem label, aria-label nem title; <th> sem texto).
- T3-e4052ca67f: O checkbox "selecionar todos" do cabeçalho e os checkboxes de cada linha não têm rótulo (sem label, aria-label nem aria-labelledby) — 7 elem
- T3-e406a418cf: 7 checkboxes da tabela (o de 'selecionar todos' no thead e os das linhas) sem label, aria-label ou aria-labelledby: nome acessível vazio.
- T3-ee6fa94b87: Os seletores "Exibir" e "Página" são input type=text (papel textbox) que abrem uma lista de opções, sem role="combobox", aria-expanded nem a
- T3-fc6d056adf: Os seletores 'Exibir' e 'Página' da paginação são <input type='text'> que abrem uma lista por seta/clique, mas não expõem role='combobox' ne
- T3-ff23369d82: Os seletores "Exibir" e "Página" são input type=text que abrem uma lista; o input não tem role=combobox nem aria-expanded/aria-controls, e o

### LN-edda30ef · 27 membros · lotes lote-03, lote-04, lote-05, lote-06, lote-09, lote-11, lote-12, lote-14, lote-15, lote-16, lote-18, lote-19, lote-23, lote-24, lote-25, lote-27, lote-28, lote-31, lote-32, lote-33, lote-35 · **muda crédito**

Regra `wcag:4.1.2` × span

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0fe62c928e | 03 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-17ebf673ab | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-1c9ae5a65e | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-1ed906af91 | 05 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-221fcf34af | 06 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-3bc22a5536 | 09 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-45a4982349 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-45b5ca742a | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-46c60d0df7 | 11 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-4b1804eef5 | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-59c79ebd45 | 14 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-614dcf6618 | 15 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-66ad0fd07d | 16 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-75ed3dae37 | 18 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-786a72e4cf | 19 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-8f912603f8 | 23 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-9a0b0accf4 | 24 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-9f8369c534 | 25 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-ac153ab154 | 27 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-b217d1ae58 | 28 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-c583b69242 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-c85260e081 | 31 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-ca0befc267 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-cf97fc0fef | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-d27ce1dd51 | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-d2b3328469 | 33 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |
| T3-db25cec483 | 35 | verdadeira | citada | obrigatorio | aplica | sim | D-03 | direta | violacao-pagina | sim | credita D-03 | norma |

Textos observados (conferência do agrupamento):
- T3-0fe62c928e: "Meus processos" funciona como alternância (ao clicar, o fundo passa de rgb(19,81,180) para branco e a lista vai de 9 para 10 linhas), mas o
- T3-17ebf673ab: 'Meus processos' alterna a listagem (fundo azul rgb(19,81,180) ativo → branco inativo), mas é <span> sem papel e sem aria-pressed; o estado 
- T3-1c9ae5a65e: Os chips de filtro abrem uma lista suspensa (caret muda de fa-caret-down para fa-caret-up), mas não têm role de botão nem aria-expanded/aria
- T3-1ed906af91: "Meus processos" funciona como alternador (ativo: fundo rgb(19,81,180); inativo: fundo branco), mas não tem role nem aria-pressed; o estado 
- T3-221fcf34af: "Meus processos" é um filtro liga/desliga: o clique alterna entre o fundo azul (ativo) e o branco (inativo) e muda o resultado de 9 para 10 
- T3-3bc22a5536: Chips sem papel de botão; os de filtro abrem lista sem aria-expanded/aria-controls e "Meus processos" alterna ativo/inativo só pela aparênci
- T3-45a4982349: "Meus processos" é um alternador: ao clicar muda só a cor (fundo #1351b4 ↔ #ffffff); sem aria-pressed nem outro estado programático.
- T3-45b5ca742a: Ligado = fundo azul; desligado = classes bg-pure-0/text-gray-50. Nenhum aria-pressed ou equivalente expõe o estado.
- T3-46c60d0df7: Os chips são <span> sem role nem estado: "Meus processos" alterna (fundo azul/branco e lista muda de 9 para 10 itens) sem aria-pressed; os c
- T3-4b1804eef5: Os gatilhos de filtro abrem uma lista suspensa (o ícone muda de caret-down para caret-up), mas não têm role de botão nem aria-expanded/aria-
- T3-59c79ebd45: "Meus processos" funciona como alternância (azul = só meus, 9 itens; branco = todos, 23 itens), mas o estado ativo é só visual: sem aria-pre
- T3-614dcf6618: Os 6 filtros abrem uma lista ao clique, mas são <span> sem papel (button), sem aria-expanded e sem aria-controls; o estado aberto só é indic
- T3-66ad0fd07d: "Meus processos" é um alternador: ativo, fundo azul rgb(19,81,180); inativo, fundo branco e texto cinza. O clique muda a lista (2→3 itens). 
- T3-75ed3dae37: "Meus processos" alterna entre ligado (fundo #1351b4) e desligado (fundo branco) e muda a lista (9↔10 linhas). O estado só aparece na cor: n
- T3-786a72e4cf: Os mesmos controles não têm papel nem estado: "Meus processos" alterna filtro (ativo=fundo azul, inativo=branco) sem aria-pressed; os chips 
- T3-8f912603f8: "Meus processos" é um alternador: ao clicar a etiqueta muda de fundo azul (rgb(19,81,180)) para branco e a lista passa de 9 para 12 itens, m
- T3-9a0b0accf4: Os chips são <span> sem role nem estado: os chips de lista não expõem aria-expanded (o estado aberto só aparece na troca do ícone caret-down
- T3-9f8369c534: O estado ligado/desligado de "Meus processos" só aparece pela cor (fundo azul x branco); não há role de botão nem aria-pressed.
- T3-ac153ab154: "Meus processos" alterna entre ligado (fundo #1351b4, texto branco) e desligado (fundo branco, borda cinza) ao clicar, mas o estado só é vis
- T3-b217d1ae58: Detalhe (uniao-europeia): "Mostrar"/"Ocultar" sem role de botão nem aria-expanded; o estado só muda no texto e no ícone
- T3-c583b69242: Os mesmos chips não expõem papel (sem role=button) nem estado: "Meus processos" alterna ligado/desligado só pela cor (azul/branco) sem aria-
- T3-c85260e081: 'Meus processos' é um alternador (ligado = fundo azul; desligado = fundo branco/borda cinza e a lista muda de 9 para 23 itens), mas o estado
- T3-ca0befc267: "Meus processos" funciona como alternador (ligado: fundo azul, 9 itens; desligado: fundo branco, 10 itens), mas o estado não é exposto (sem 
- T3-cf97fc0fef: 'Meus processos' funciona como alternância: ligado = fundo rgb(19,81,180) e texto branco; desligado = fundo branco e texto cinza, e a tabela
- T3-d27ce1dd51: "Meus processos" funciona como alternância (azul = ativo, branco = inativo; muda a lista de 9 para 23 itens), mas o estado ligado/desligado 
- T3-d2b3328469: "Meus processos" funciona como alternância (ativo = fundo azul; inativo = bg-pure-0/text-gray-50 e a lista passa de 9 para 23 itens), mas o 
- T3-db25cec483: Os mesmos spans não têm papel (role) de botão; o estado ligado/desligado de "Meus processos" (azul/branco) e o aberto/fechado dos filtros só

### LN-ef0645ee · 10 membros · lotes lote-02, lote-04, lote-08, lote-12, lote-28, lote-32, lote-34, lote-38 · **muda crédito**

Regra `govbr-3.7.0-accessibility-global-9a6edd7d551e` × title

Divergem: vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0a260c66a0 | 02 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-179af0e83e | 04 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-2fc3d9461a | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-324b3dce0e | 08 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-4a6a96102e | 12 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-afa1a3baac | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-b184692bc9 | 28 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-cb831bd473 | 32 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-d2ea0b94b7 | 34 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |
| T3-eb60aea637 | 38 | verdadeira | citada | obrigatorio | aplica | sim | D-13 | direta | violacao-pagina | sim | credita D-13 | norma |

Textos observados (conferência do agrupamento):
- T3-0a260c66a0: O título do documento é apenas "PNIP" — o mesmo nas rotas de detalhe e exportação — e não descreve a tela "Processos".
- T3-179af0e83e: O título do documento é "PNIP" (sigla) em todos os estados; não descreve a página "Processos".
- T3-2fc3d9461a: Detalhe "Alteração de Certificado" mantém <title> "PNIP", igual ao da lista.
- T3-324b3dce0e: document.title = "PNIP" em todos os estados da tela; não identifica a tela de Processos.
- T3-4a6a96102e: document.title = 'PNIP' (o mesmo nas rotas /processos, /processos/exportar e detalhe); não descreve a página Processos.
- T3-afa1a3baac: document.title = "PNIP" (sigla genérica, igual em outras rotas como /login), sem referência à tela "Processos".
- T3-b184692bc9: document.title = 'PNIP' em todos os estados; não identifica a tela de Processos
- T3-cb831bd473: document.title = "PNIP" — não identifica a página (Processos); o mesmo título é usado na rota de detalhe.
- T3-d2ea0b94b7: <title> é apenas a sigla "PNIP" na lista de Processos; não identifica a página.
- T3-eb60aea637: document.title = "PNIP" em todos os estados da tela; não identifica a página (Processos).

