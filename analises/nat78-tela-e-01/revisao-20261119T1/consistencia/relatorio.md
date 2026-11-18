# Revisão de campanha nova — consistência da 1ª passada (triagem)

382 átomos, um juiz por lote. Relatório interno: não vai aos juízes. Os grupos são **triagem** de possíveis inconsistências, não equivalência (regras: `regras.md`, sha256 `f7237f6840ef4cedc52c689ba7178502a95334f621f04029bac967408025ec04`).

## Resumo

| | mesma alegação (MA) | mesma leitura da norma (LN) |
|---|---:|---:|
| grupos (todos) | 65 | 35 |
| grupos com ≥ 2 membros | 42 | 20 |
| átomos nesses grupos | 359 | 279 |
| grupos com membros de lotes diferentes | 41 | 20 |
| grupos divergentes (algum campo) | 3 | 2 |
| grupos em que a classe diverge | 1 | 1 |
| grupos em que o crédito muda | 0 | 0 |
| grupos com resposta de norma divergente | 1 | 1 |
| grupos à adjudicação (regras §2) | 1 (2 átomos) | 1 (8 átomos) |
| pares concordantes — campos gerais¹, todos | 98.8% (1933/1957) | 99.6% (4658/4677) |
| idem, mesmo lote | 100.0% (153/153) | 100.0% (354/354) |
| idem, entre lotes | 98.7% (1780/1804) | 99.6% (4304/4323) |
| cobertura (pares comparáveis / pares) | 99.3% (1957/1971) | 100.0% (4677/4677) |

¹ MA: todos os campos; LN: só a resposta de norma (id, força, aplicabilidade, violada).

**Cartões cegos idênticos** (único vínculo auditável de equivalência): 13 grupos, 117 átomos (13 grupos com lotes diferentes); divergem 0 (classe 0, crédito 0). Pares concordantes em todos os campos: 100.0% (468/468) (mesmo lote 100.0% (35/35), entre lotes 100.0% (433/433)); na classe: 100.0% (468/468) (entre lotes 100.0% (433/433)).

## Concordância por campo — mesma alegação

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 1971/1971 (100.0%) | 100.0% (1971/1971) | 100.0% (153/153) | 100.0% (1818/1818) | 42/42 | 0 |
| norma.id | 1971/1971 (100.0%) | 100.0% (1971/1971) | 100.0% (153/153) | 100.0% (1818/1818) | 42/42 | 0 |
| norma.forca | 1971/1971 (100.0%) | 100.0% (1971/1971) | 100.0% (153/153) | 100.0% (1818/1818) | 42/42 | 0 |
| norma.aplicabilidade | 1971/1971 (100.0%) | 100.0% (1970/1971) | 100.0% (153/153) | 99.9% (1817/1818) | 41/42 | 1 |
| norma.violada | 1971/1971 (100.0%) | 100.0% (1970/1971) | 100.0% (153/153) | 99.9% (1817/1818) | 41/42 | 1 |
| vinculo | 1971/1971 (100.0%) | 100.0% (1971/1971) | 100.0% (153/153) | 100.0% (1818/1818) | 42/42 | 0 |
| vinculo.relacao | 1691/1971 (85.8%) | 98.3% (1663/1691) | 100.0% (127/127) | 98.2% (1536/1564) | 25/27 | 2 |
| sugestao | 0/1971 (0.0%) | — (0/0) | — (0/0) | — (0/0) | 0/0 | 0 |
| classe | 1971/1971 (100.0%) | 100.0% (1970/1971) | 100.0% (153/153) | 99.9% (1817/1818) | 41/42 | 1 |
| credita | 1971/1971 (100.0%) | 100.0% (1971/1971) | 100.0% (153/153) | 100.0% (1818/1818) | 42/42 | 0 |
| credito | 1971/1971 (100.0%) | 100.0% (1971/1971) | 100.0% (153/153) | 100.0% (1818/1818) | 42/42 | 0 |
| fundamentacao | 1971/1971 (100.0%) | 100.0% (1971/1971) | 100.0% (153/153) | 100.0% (1818/1818) | 42/42 | 0 |

## Concordância por campo — mesma leitura da norma

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 4677/4677 (100.0%) | 100.0% (4677/4677) | 100.0% (354/354) | 100.0% (4323/4323) | 20/20 | 0 |
| norma.id | 4677/4677 (100.0%) | 100.0% (4677/4677) | 100.0% (354/354) | 100.0% (4323/4323) | 20/20 | 0 |
| norma.forca | 4677/4677 (100.0%) | 100.0% (4677/4677) | 100.0% (354/354) | 100.0% (4323/4323) | 20/20 | 0 |
| norma.aplicabilidade | 4677/4677 (100.0%) | 99.9% (4670/4677) | 100.0% (354/354) | 99.8% (4316/4323) | 19/20 | 1 |
| norma.violada | 4677/4677 (100.0%) | 99.7% (4661/4677) | 100.0% (354/354) | 99.6% (4307/4323) | 19/20 | 1 |
| vinculo | 4677/4677 (100.0%) | 100.0% (4677/4677) | 100.0% (354/354) | 100.0% (4323/4323) | 20/20 | 0 |
| vinculo.relacao | 2760/4677 (59.0%) | 99.6% (2750/2760) | 100.0% (202/202) | 99.6% (2548/2558) | 14/15 | 1 |
| sugestao | 0/4677 (0.0%) | — (0/0) | — (0/0) | — (0/0) | 0/0 | 0 |
| classe | 4677/4677 (100.0%) | 99.7% (4661/4677) | 100.0% (354/354) | 99.6% (4307/4323) | 19/20 | 1 |
| credita | 4677/4677 (100.0%) | 100.0% (4677/4677) | 100.0% (354/354) | 100.0% (4323/4323) | 20/20 | 0 |
| credito | 4677/4677 (100.0%) | 100.0% (4677/4677) | 100.0% (354/354) | 100.0% (4323/4323) | 20/20 | 0 |
| fundamentacao | 4677/4677 (100.0%) | 100.0% (4677/4677) | 100.0% (354/354) | 100.0% (4323/4323) | 20/20 | 0 |

## Método

Concordância descritiva: pares de membros dentro dos grupos com ≥ 2 membros; denominador = pares comparáveis (os dois responderam o campo; para vários campos, mesma forma de resposta em cada campo); cobertura = comparáveis / pares; mesmo lote (mesmo juiz) e entre lotes separados. Sem κ: cada átomo tem um julgamento só, e membros de um grupo não são avaliações repetidas do mesmo item.

Equivalência, seleção, adjudicação e parada: `regras.md`.

## Por campanha × braço (contagens)

| campanha | braço | átomos | em grupo MA divergente | em grupo MA que muda crédito | em grupo LN com norma divergente | à adjudicação |
|---|---|---:|---:|---:|---:|---:|
| nat78-tela-e-01 | com | 82 | 10 | 0 | 2 | 2 |
| nat78-tela-e-01 | ferramentas | 89 | 9 | 0 | 3 | 3 |
| nat78-tela-e-01 | lb-axe | 108 | 0 | 0 | 0 | 0 |
| nat78-tela-e-01 | lb-validator | 9 | 0 | 0 | 0 | 0 |
| nat78-tela-e-01 | sem | 94 | 9 | 0 | 3 | 3 |

## Grupos divergentes — mesma alegação (3; 1 à adjudicação; 0 mudam o crédito)

### MA-fcf158ca · 2 membros · lotes lote-06, lote-09 · → adjudicação

Tela cadastro-pais · completa · regra `wcag:2.4.3` · estado `1280x900` · tipo div  
Sujeito: `body>main>div:nth-of-type(2)>form>div:nth-of-type(4)>div>div:nth-of-type(2)>div:nth-of-type(2)`

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-86e09343f3 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bc10b6f2b5 | 09 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-86e09343f3: Com a lista aberta, ArrowDown, ArrowDown e Enter selecionam 'América do Norte' e fecham a lista. O foco vai para o body (document.activeElem
- T3-bc10b6f2b5: Com a lista aberta, ArrowDown leva o foco às opções. Enter na opção 'América do Norte' a seleciona e fecha a lista. Em seguida document.acti

### MA-14f60d63 · 7 membros · lotes lote-02, lote-03, lote-07, lote-08, lote-12

Tela cadastro-pais · completa · regra `govbr-3.7.0-component-message-54514c2350ca` · estado `1280x900` · tipo i  
Sujeito: `body>main>div:nth-of-type(2)>form>div:nth-of-type(1)>div:nth-of-type(2)>i`

Divergem: vinculo.relacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-214a4f64c0 | 02 | verdadeira | citada | recomendado | aplica | sim | U-06 | direta | — | violacao-pagina | sim | credita U-06 | mais-fraca |
| T3-21863ff09d | 02 | verdadeira | citada | recomendado | aplica | sim | U-06 | direta | — | violacao-pagina | sim | credita U-06 | mais-fraca |
| T3-34ff32c97f | 03 | verdadeira | citada | recomendado | aplica | sim | U-06 | direta | — | violacao-pagina | sim | credita U-06 | mais-fraca |
| T3-37bdf3f548 | 03 | verdadeira | citada | recomendado | aplica | sim | U-06 | direta | — | violacao-pagina | sim | credita U-06 | mais-fraca |
| T3-92347e7a0b | 07 | verdadeira | citada | recomendado | aplica | sim | U-06 | direta | — | violacao-pagina | sim | credita U-06 | mais-fraca |
| T3-a233a633f2 | 08 | verdadeira | citada | recomendado | aplica | sim | U-06 | host-interno | — | violacao-pagina | sim | credita U-06 | mais-fraca |
| T3-fad7665e40 | 12 | verdadeira | citada | recomendado | aplica | sim | U-06 | host-interno | valida | violacao-pagina | sim | credita U-06 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-214a4f64c0: Dentro do conteúdo da mensagem de erro há um ícone de "check" (i.fas.fa-check.marca-retorno) visível antes do título "Não foi possível salva
- T3-21863ff09d: Dentro do conteúdo da mensagem de erro 'Não foi possível salvar o país.' há um ícone fa-check (marca de sucesso, branco), além do ícone fa-t
- T3-34ff32c97f: A mensagem de erro exibe, antes do título 'Não foi possível salvar o país.', um ícone fa-check (marca de sucesso) visível em branco, além do
- T3-37bdf3f548: Dentro do conteúdo da mensagem de erro há um ícone fa-check (marca de sucesso), visível em (120,29) antes do título 'Não foi possível salvar
- T3-92347e7a0b: Dentro do conteúdo da mensagem de erro há um ícone fa-check visível (24x16, branco) antes do título "Não foi possível salvar o país.", ou se
- T3-a233a633f2: Dentro do conteúdo da mensagem de erro há um ícone extra fa-check (marca de sucesso), branco, antes de 'Não foi possível salvar o país.', o 
- T3-fad7665e40: Dentro do conteúdo da mensagem de erro "Não foi possível salvar o país." há um ícone fa-check (visto de sucesso), visível antes do título, a

### MA-b8754557 · 19 membros · lotes lote-02, lote-03, lote-04, lote-06, lote-07, lote-09, lote-10, lote-11, lote-12

Tela cadastro-pais · completa · regra `(sem regra)` · estado `1280x900` · tipo i  
Sujeito: `body>main>div:nth-of-type(2)>form>div:nth-of-type(1)>div:nth-of-type(2)>i`

Divergem: vinculo.relacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1b497f7a77 | 02 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-26ed994ce2 | 02 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-2e53798600 | 02 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-3ab175e47b | 03 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-474472e62f | 04 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-7dd7e1f75a | 06 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-813ca192a8 | 06 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-83150121ba | 06 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-96012a4ee5 | 07 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-972969bb96 | 07 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-974de81781 | 07 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-b4456fc793 | 09 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-bd7da43bd7 | 09 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-bf53df166b | 09 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-c007978399 | 09 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-ce0dfc1c0a | 10 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-e6aad93d65 | 11 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-ecdf2a7874 | 11 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | direta | violacao-pagina | sim | credita U-06 | nenhuma |
| T3-f1b52ee82b | 12 | verdadeira | nenhuma | nenhuma | nao-perguntado | nao-perguntado | U-06 | host-interno | violacao-pagina | sim | credita U-06 | nenhuma |

Textos observados (conferência do agrupamento):
- T3-1b497f7a77: Dentro da mensagem de erro 'Não foi possível salvar o país.' aparece um ícone de check (fas fa-check, branco, 24×16 px) antes do título. Na 
- T3-26ed994ce2: Dentro da mensagem de erro "Não foi possível salvar o país." aparece um ícone de check (fas fa-check, branco, 24×16 px) antes do título, con
- T3-2e53798600: O conteúdo da mensagem de erro "Não foi possível salvar o país." começa com um ícone de check (fas fa-check), que sugere sucesso, além do íc
- T3-3ab175e47b: Dentro da mensagem de erro, antes do título "Não foi possível salvar o país.", aparece um ícone de check (fa-check, branco, 24×16 px) que vi
- T3-474472e62f: Dentro da mensagem de erro, antes do título 'Não foi possível salvar o país.', aparece um ícone de check (fa-check), que indica sucesso. A m
- T3-7dd7e1f75a: Dentro do conteúdo da mensagem de erro há um ícone extra fa-check (marca de confirmação/sucesso), visível em branco antes de "Não foi possív
- T3-813ca192a8: Dentro da mensagem de erro, antes do título, há um ícone de "check" de sucesso (i.fas.fa-check.marca-retorno), além do ícone de erro (fa-tim
- T3-83150121ba: Dentro da mensagem de erro 'Não foi possível salvar o país.' aparece um ícone de check (fas fa-check, branco, 24×16px) antes do título. Esse
- T3-96012a4ee5: Dentro do conteúdo da mensagem de erro há um ícone fa-check (marca de sucesso), visível antes do título "Não foi possível salvar o país.", a
- T3-972969bb96: Dentro do conteúdo da mensagem de erro há um ícone de confirmação (fas fa-check) antes de 'Não foi possível salvar o país.', ícone que sinal
- T3-974de81781: Dentro do conteúdo da mensagem de erro aparece um ícone de check (fas fa-check, 24×16 px, visível) antes do título "Não foi possível salvar 
- T3-b4456fc793: Dentro do conteúdo da mensagem de erro há um ícone fa-check (marca de sucesso, branco, 24×16 px) antes do título "Não foi possível salvar o 
- T3-bd7da43bd7: Ícone fas fa-check (marca de sucesso) visível antes do título "Não foi possível salvar o país." dentro da mensagem de erro.
- T3-bf53df166b: Dentro do conteúdo da mensagem de erro há um ícone extra fa-check (marca de sucesso), visível em branco (24×16 px) antes do título "Não foi 
- T3-c007978399: Dentro da mensagem de erro, antes do título "Não foi possível salvar o país.", aparece um ícone de check (fa-check), que é o símbolo de suce
- T3-ce0dfc1c0a: Dentro do conteúdo da mensagem de erro aparece um ícone de check (fas fa-check, 24px, x=120) antes de 'Não foi possível salvar o país.', sin
- T3-e6aad93d65: Dentro da mensagem de erro aparece um ícone de check (fas fa-check, branco e visível) antes do título 'Não foi possível salvar o país.', alé
- T3-ecdf2a7874: Dentro do conteúdo da mensagem de erro há um ícone 'fas fa-check' (sinal de confirmação) antes do título 'Não foi possível salvar o país.'. 
- T3-f1b52ee82b: Dentro do conteúdo da mensagem de erro aparece um ícone de confirmação (fa-check, branco, visível) antes de "Não foi possível salvar o país.

## Grupos divergentes — mesma leitura da norma (2; 1 à adjudicação; 0 mudam o crédito)

### LN-9518e880 · 8 membros · lotes lote-03, lote-06, lote-07, lote-08, lote-09 · → adjudicação

Regra `wcag:2.4.3` × div

Divergem: norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-32909e868b | 03 | verdadeira | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-3d3115d546 | 03 | verdadeira | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-403ebf4b73 | 03 | verdadeira | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-86e09343f3 | 06 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-9688ce438a | 07 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a064da1c2b | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-a562959adf | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-bc10b6f2b5 | 09 | verdadeira | citada | obrigatorio | incerta | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-32909e868b: Com a lista aberta, ArrowDown seguido de Enter ou Espaço seleciona a opção e fecha a lista, mas o foco vai para BODY (document.activeElement
- T3-3d3115d546: Ao abrir a lista de continentes, navegar com ArrowDown e escolher uma opção com Enter, o valor é preenchido e a lista fecha, mas document.ac
- T3-403ebf4b73: Ao escolher uma opção pelo teclado (ArrowDown até a opção e Enter ou Espaço), a lista fecha e document.activeElement passa a ser <body>; o f
- T3-86e09343f3: Com a lista aberta, ArrowDown, ArrowDown e Enter selecionam 'América do Norte' e fecham a lista. O foco vai para o body (document.activeElem
- T3-9688ce438a: Com a lista aberta, as setas levam o foco às opções. Ao escolher uma opção com Enter, a lista fecha e o foco vai para o BODY (document.activ
- T3-a064da1c2b: Ao escolher uma opção com Enter (foco na opção), a lista fecha, o valor é preenchido e o foco vai para <body> (document.activeElement = BODY
- T3-a562959adf: Ao selecionar uma opção pelo teclado (clicar em #continente, ArrowDown, Enter), o valor é aplicado ('África') e a lista fecha, mas o foco va
- T3-bc10b6f2b5: Com a lista aberta, ArrowDown leva o foco às opções. Enter na opção 'América do Norte' a seleciona e fecha a lista. Em seguida document.acti

### LN-a9db32db · 7 membros · lotes lote-02, lote-03, lote-07, lote-08, lote-12

Regra `govbr-3.7.0-component-message-54514c2350ca` × i

Divergem: vinculo.relacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-214a4f64c0 | 02 | verdadeira | citada | recomendado | aplica | sim | U-06 | direta | — | violacao-pagina | sim | credita U-06 | mais-fraca |
| T3-21863ff09d | 02 | verdadeira | citada | recomendado | aplica | sim | U-06 | direta | — | violacao-pagina | sim | credita U-06 | mais-fraca |
| T3-34ff32c97f | 03 | verdadeira | citada | recomendado | aplica | sim | U-06 | direta | — | violacao-pagina | sim | credita U-06 | mais-fraca |
| T3-37bdf3f548 | 03 | verdadeira | citada | recomendado | aplica | sim | U-06 | direta | — | violacao-pagina | sim | credita U-06 | mais-fraca |
| T3-92347e7a0b | 07 | verdadeira | citada | recomendado | aplica | sim | U-06 | direta | — | violacao-pagina | sim | credita U-06 | mais-fraca |
| T3-a233a633f2 | 08 | verdadeira | citada | recomendado | aplica | sim | U-06 | host-interno | — | violacao-pagina | sim | credita U-06 | mais-fraca |
| T3-fad7665e40 | 12 | verdadeira | citada | recomendado | aplica | sim | U-06 | host-interno | valida | violacao-pagina | sim | credita U-06 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-214a4f64c0: Dentro do conteúdo da mensagem de erro há um ícone de "check" (i.fas.fa-check.marca-retorno) visível antes do título "Não foi possível salva
- T3-21863ff09d: Dentro do conteúdo da mensagem de erro 'Não foi possível salvar o país.' há um ícone fa-check (marca de sucesso, branco), além do ícone fa-t
- T3-34ff32c97f: A mensagem de erro exibe, antes do título 'Não foi possível salvar o país.', um ícone fa-check (marca de sucesso) visível em branco, além do
- T3-37bdf3f548: Dentro do conteúdo da mensagem de erro há um ícone fa-check (marca de sucesso), visível em (120,29) antes do título 'Não foi possível salvar
- T3-92347e7a0b: Dentro do conteúdo da mensagem de erro há um ícone fa-check visível (24x16, branco) antes do título "Não foi possível salvar o país.", ou se
- T3-a233a633f2: Dentro do conteúdo da mensagem de erro há um ícone extra fa-check (marca de sucesso), branco, antes de 'Não foi possível salvar o país.', o 
- T3-fad7665e40: Dentro do conteúdo da mensagem de erro "Não foi possível salvar o país." há um ícone fa-check (visto de sucesso), visível antes do título, a

