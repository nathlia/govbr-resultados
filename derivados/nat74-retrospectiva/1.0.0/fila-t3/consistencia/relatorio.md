# Fila T3 — consistência entre lotes (1ª passada)

285 átomos, um juiz por lote. Relatório interno: não vai aos juízes. Os grupos são **triagem** de possíveis inconsistências, não equivalência (regras: `regras.md`, sha256 `9b422a21ce0befc1b2c1c2c87cdc7e9282100ca79656d7ee12cdb35a4b325660`).

## Resumo

| | mesma alegação (MA) | mesma leitura da norma (LN) |
|---|---:|---:|
| grupos (todos) | 88 | 29 |
| grupos com ≥ 2 membros | 55 | 20 |
| átomos nesses grupos | 252 | 191 |
| grupos com membros de lotes diferentes | 50 | 20 |
| grupos divergentes (algum campo) | 17 | 9 |
| grupos em que a classe diverge | 16 | 5 |
| grupos em que o crédito muda | 4 | 4 |
| grupos com resposta de norma divergente | 10 | 4 |
| grupos à adjudicação (regras §2) | 16 (105 átomos) | 4 (53 átomos) |
| pares concordantes — campos gerais¹, todos | 69.2% (536/775) | 85.4% (1425/1669) |
| idem, mesmo lote | 96.3% (105/109) | 100.0% (186/186) |
| idem, entre lotes | 64.7% (431/666) | 83.5% (1239/1483) |
| cobertura (pares comparáveis / pares) | 83.2% (775/931) | 100.0% (1669/1669) |

¹ MA: todos os campos; LN: só a resposta de norma (id, força, aplicabilidade, violada).

**Cartões cegos idênticos** (único vínculo auditável de equivalência): 31 grupos, 108 átomos (26 grupos com lotes diferentes); divergem 9 (classe 8, crédito 4). Pares concordantes em todos os campos: 68.7% (171/249) (mesmo lote 100.0% (38/38), entre lotes 63.0% (133/211)); na classe: 69.2% (209/302) (entre lotes 64.8% (171/264)).

## Concordância por campo — mesma alegação

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 871/931 (93.6%) | 87.3% (760/871) | 99.1% (106/107) | 85.6% (654/764) | 44/51 | 7 |
| norma.id | 871/931 (93.6%) | 91.3% (795/871) | 100.0% (107/107) | 90.0% (688/764) | 46/51 | 5 |
| norma.forca | 871/931 (93.6%) | 78.9% (687/871) | 100.0% (107/107) | 75.9% (580/764) | 45/51 | 6 |
| norma.aplicabilidade | 871/931 (93.6%) | 80.1% (698/871) | 100.0% (107/107) | 77.4% (591/764) | 44/51 | 7 |
| norma.violada | 871/931 (93.6%) | 79.7% (694/871) | 100.0% (107/107) | 76.8% (587/764) | 44/51 | 7 |
| vinculo | 871/931 (93.6%) | 100.0% (871/871) | 100.0% (107/107) | 100.0% (764/764) | 51/51 | 0 |
| vinculo.relacao | 439/931 (47.1%) | 95.2% (418/439) | 100.0% (58/58) | 94.5% (360/381) | 37/38 | 1 |
| sugestao | 295/931 (31.7%) | 84.8% (250/295) | 88.2% (30/34) | 84.3% (220/261) | 11/16 | 5 |
| classe | 931/931 (100.0%) | 69.9% (651/931) | 98.2% (108/110) | 66.1% (543/821) | 39/55 | 16 |
| credita | 931/931 (100.0%) | 93.9% (874/931) | 100.0% (110/110) | 93.1% (764/821) | 51/55 | 4 |
| credito | 931/931 (100.0%) | 93.9% (874/931) | 100.0% (110/110) | 93.1% (764/821) | 51/55 | 4 |
| fundamentacao | 931/931 (100.0%) | 93.7% (872/931) | 100.0% (110/110) | 92.8% (762/821) | 51/55 | 4 |

## Concordância por campo — mesma leitura da norma

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 1669/1669 (100.0%) | 98.7% (1648/1669) | 100.0% (186/186) | 98.6% (1462/1483) | 19/20 | 1 |
| norma.id | 1669/1669 (100.0%) | 100.0% (1669/1669) | 100.0% (186/186) | 100.0% (1483/1483) | 20/20 | 0 |
| norma.forca | 1669/1669 (100.0%) | 93.5% (1561/1669) | 100.0% (186/186) | 92.7% (1375/1483) | 19/20 | 1 |
| norma.aplicabilidade | 1669/1669 (100.0%) | 89.1% (1487/1669) | 100.0% (186/186) | 87.7% (1301/1483) | 17/20 | 3 |
| norma.violada | 1669/1669 (100.0%) | 88.8% (1482/1669) | 100.0% (186/186) | 87.4% (1296/1483) | 16/20 | 4 |
| vinculo | 1669/1669 (100.0%) | 69.6% (1161/1669) | 69.3% (129/186) | 69.6% (1032/1483) | 16/20 | 4 |
| vinculo.relacao | 1432/1669 (85.8%) | 98.5% (1411/1432) | 100.0% (162/162) | 98.4% (1249/1270) | 12/13 | 1 |
| sugestao | 371/1669 (22.2%) | 77.4% (287/371) | 91.8% (45/49) | 75.2% (242/322) | 2/4 | 2 |
| classe | 1669/1669 (100.0%) | 84.6% (1412/1669) | 99.5% (185/186) | 82.7% (1227/1483) | 15/20 | 5 |
| credita | 1669/1669 (100.0%) | 93.3% (1557/1669) | 100.0% (186/186) | 92.5% (1371/1483) | 16/20 | 4 |
| credito | 1669/1669 (100.0%) | 63.3% (1056/1669) | 69.3% (129/186) | 62.5% (927/1483) | 14/20 | 6 |
| fundamentacao | 1669/1669 (100.0%) | 93.2% (1555/1669) | 100.0% (186/186) | 92.3% (1369/1483) | 16/20 | 4 |

## Método

Concordância descritiva: pares de membros dentro dos grupos com ≥ 2 membros; denominador = pares comparáveis (os dois responderam o campo; para vários campos, mesma forma de resposta em cada campo); cobertura = comparáveis / pares; mesmo lote (mesmo juiz) e entre lotes separados. Sem κ: cada átomo tem um julgamento só, e membros de um grupo não são avaliações repetidas do mesmo item.

Equivalência, seleção, adjudicação e parada: `regras.md`.

## Por campanha × braço (contagens)

| campanha | braço | átomos | em grupo MA divergente | em grupo MA que muda crédito | em grupo LN com norma divergente | à adjudicação |
|---|---|---:|---:|---:|---:|---:|
| t7-tela-a-01 | com | 29 | 10 | 6 | 6 | 10 |
| t7-tela-a-01 | lb-axe | 2 | 0 | 0 | 0 | 0 |
| t7-tela-a-01 | lb-validator | 8 | 8 | 8 | 8 | 8 |
| t7-tela-a-01 | sem | 22 | 0 | 0 | 2 | 2 |
| t7-tela-b-01 | com | 36 | 20 | 0 | 0 | 20 |
| t7-tela-b-01 | lb-axe | 70 | 30 | 0 | 10 | 20 |
| t7-tela-b-01 | lb-validator | 20 | 12 | 6 | 20 | 20 |
| t7-tela-b-01 | sem | 34 | 20 | 0 | 0 | 20 |
| t7b-sonnet-tela-a-01 | com | 33 | 5 | 0 | 0 | 5 |
| t7b-sonnet-tela-a-01 | lb-axe | 3 | 0 | 0 | 0 | 0 |
| t7b-sonnet-tela-a-01 | lb-validator | 7 | 7 | 7 | 7 | 7 |
| t7b-sonnet-tela-a-01 | sem | 21 | 3 | 0 | 0 | 3 |

## Grupos divergentes — mesma alegação (17; 16 à adjudicação; 4 mudam o crédito)

### MA-0c71a689 · 4 membros · lotes lote-01, lote-02, lote-09 · → adjudicação

Tela B · completa · regra `(sem regra)` · estado `1280x900@detalhe-menu` · tipo div  
Sujeito: `body>pnip-root>pnip-header>div>div>div`

Divergem: fato, norma.id, norma.forca, norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-164bf77d2b | 01 | indeterminado | nenhuma | nenhuma | nao-aplica | nao | nenhum | pendente | nao | sem-credito | sem-credito |
| T3-3355e5b5ee | 02 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | observacao | nao | sem-credito | sem-credito |
| T3-34d8077bbc | 02 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | observacao | nao | sem-credito | sem-credito |
| T3-e7e4e23127 | 09 | indeterminado | wcag:2.1.1 | obrigatorio | incerta | incerto | nenhum | pendente | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-164bf77d2b: Com o menu do avatar aberto e o foco no gatilho, a tecla Escape não fecha o menu (hidden continua false e aria-expanded continua "true").
- T3-3355e5b5ee: Com o menu do usuário (role="menu") aberto e o foco em "Sair", Escape não fecha o menu (aria-expanded continua "true").
- T3-34d8077bbc: Com o painel do usuário aberto, Esc não o fecha: aria-expanded continua "true" e o painel segue visível.
- T3-e7e4e23127: Com o menu do avatar aberto e o foco no botão de abertura, Esc não fecha o menu (continua display:block).

### MA-1937a16b · 7 membros · lotes lote-01, lote-02, lote-03, lote-06, lote-07, lote-08 · → adjudicação

Tela A · qualidade · regra `axe:tabindex` · estado `1280x900` · tipo span  
Sujeito: `body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(1) ; body>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div>span:nth-of-type(10) ; body>div:nth-of-type(2)>div:nth-of-`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|
| T3-01d935bc89 | 01 | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-242b0b5085 | 02 | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-2591ec375a | 02 | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-4d0b6d6676 | 03 | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-a2fa5d7ba7 | 06 | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-be1d7eeb70 | 07 | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-e60cd8029d | 08 | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-01d935bc89: Com o calendário aberto, os 42 dias têm tabindex="1" (positivo).
- T3-242b0b5085: Com o calendário aberto, os 42 dias (span.flatpickr-day) recebem tabindex="1", alterando a ordem de tabulação de toda a página.
- T3-2591ec375a: Com o calendário aberto, os 42 dias (span.flatpickr-day) recebem tabindex="1" (positivo), o que altera a ordem de tabulação da página.
- T3-4d0b6d6676: Com o calendário aberto, os dias têm tabindex="1" (valor positivo).
- T3-a2fa5d7ba7: Com o calendário aberto, todos os 42 dias (span.flatpickr-day) recebem tabindex='1' (positivo), o que altera a ordem sequencial de foco da p
- T3-be1d7eeb70: Com o calendário aberto, os 42 dias (span.flatpickr-day) passam a ter tabindex="1", o que coloca todos à frente da ordem natural de tabulaçã
- T3-e60cd8029d: Com o calendário aberto, os 42 dias têm tabindex="1" (maior que 0).

### MA-2d4a473c · 2 membros · lotes lote-04, lote-09 · → adjudicação

Tela B · completa · regra `(sem regra)` · estado `1280x900@inicial` · tipo td  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(7) ; body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(`

Divergem: fato, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-6e4389edc9 | 04 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | observacao | nao | sem-credito | sem-credito |
| T3-ede988fdde | 09 | indisponivel | nenhuma | nenhuma | nao-aplica | nao | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-6e4389edc9: Na aba Concluídos, a coluna "Situação" mostra o valor bruto "NAO COMPARECIMENTO", em caixa alta e sem acento.
- T3-ede988fdde: Na aba Concluídos, a coluna "Situação" mostra valores crus de enumeração em caixa alta e sem acentos: "NAO COMPARECIMENTO", "NAO ADEQUADA", 

### MA-3eefbb84 · 5 membros · lotes lote-01, lote-02, lote-06, lote-09 · → adjudicação

Tela A · completa · regra `(sem regra)` · estado `1280x900` · tipo campo de formulário  
Sujeito: `body>div:nth-of-type(1)>div>main>form>div:nth-of-type(2)>div:nth-of-type(2)>div>input`

Divergem: fato, norma.id, norma.forca, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-2265ee9916 | 01 | indeterminado | wcag:3.3.1 | obrigatorio | nao-aplica | nao | nenhum | — | pendente | nao | sem-credito | sem-credito |
| T3-31a98e0771 | 02 | verdadeira | wcag:3.3.1 | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-9317ea18a0 | 06 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-f2b4f8ffb7 | 09 | indeterminado | wcag:3.3.1 | obrigatorio | nao-aplica | nao | nenhum | — | pendente | nao | sem-credito | sem-credito |
| T3-f465e35803 | 09 | verdadeira | wcag:3.3.1 | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-2265ee9916: A ajuda diz 'Somente números, 11 dígitos', mas o formulário foi enviado com sucesso com CPF '123': nenhum erro foi mostrado.
- T3-31a98e0771: CPF '123' é aceito e a solicitação é enviada com sucesso, apesar do texto de apoio 'Somente números, 11 dígitos.'. Nenhuma validação de form
- T3-9317ea18a0: Com CPF "123" (a instrução diz 11 dígitos), o envio foi aceito e exibiu "Solicitação enviada." sem erro no campo.
- T3-f2b4f8ffb7: Com CPF '123' (3 dígitos) o envio foi aceito com mensagem de sucesso, sem erro de formato, embora o texto de apoio diga 'Somente números, 11
- T3-f465e35803: O campo CPF aceitou o valor '123' e o formulário foi enviado com sucesso, embora o texto de apoio exija 11 dígitos numéricos.

### MA-51bfbb34 · 13 membros · lotes lote-01, lote-02, lote-04, lote-05, lote-06, lote-07, lote-08, lote-09 · → adjudicação

Tela B · completa · regra `axe:region` · estado `1280x900@detalhe-menu` · tipo div  
Sujeito: `body>pnip-root>pnip-header>div>div>div`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0df086b625 | 01 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-2b1d44ea1a | 02 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-2fbe5f8671 | 02 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-65f27b172b | 04 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-6fd649adec | 04 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-6fe114de69 | 05 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-7cfcf2a656 | 05 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-7ff8537a4e | 05 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-9e0cb0c527 | 06 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-bc7a238023 | 07 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-bfb5bedb8b | 07 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-d46586287e | 08 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-ffbbf2b7bc | 09 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0df086b625: All page content should be contained by landmarks
- T3-2b1d44ea1a: All page content should be contained by landmarks
- T3-2fbe5f8671: O menu do usuário aberto (e o gatilho do avatar, em div.container-lg) fica fora de qualquer landmark; o banner fica só dentro do shadow de b
- T3-65f27b172b: All page content should be contained by landmarks
- T3-6fd649adec: All page content should be contained by landmarks
- T3-6fe114de69: O menu do avatar aberto (e o bloco do usuário) fica fora de qualquer landmark; o banner fica só dentro do br-header.
- T3-7cfcf2a656: All page content should be contained by landmarks
- T3-7ff8537a4e: All page content should be contained by landmarks
- T3-9e0cb0c527: All page content should be contained by landmarks
- T3-bc7a238023: O conteúdo do menu do usuário aberto fica fora de qualquer landmark (a área de login está fora do banner do br-header).
- T3-bfb5bedb8b: All page content should be contained by landmarks
- T3-d46586287e: All page content should be contained by landmarks
- T3-ffbbf2b7bc: All page content should be contained by landmarks

### MA-5ec3f8f2 · 2 membros · lotes lote-05, lote-08 · → adjudicação

Tela B · completa · regra `emag:2.2` · estado `1280x900@inicial` · tipo botão sem texto visível  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(4)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-89e5e94b64 | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-db59bdc938 | 08 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-89e5e94b64: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-db59bdc938: Elemento interativo apenas com ícone, sem aria-label (br-button)

### MA-678f5038 · 2 membros · lotes lote-02, lote-07 · **muda crédito** · → adjudicação

Tela B · completa · regra `emag:2.2` · estado `1280x900@inicial` · tipo botão sem texto visível  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(8)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button`

Divergem: norma.aplicabilidade, norma.violada, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-26e2846e36 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-07 | direta | — | violacao-pagina | sim | credita B-07 | norma |
| T3-b3c6421db7 | 07 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-26e2846e36: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-b3c6421db7: Elemento interativo apenas com ícone, sem aria-label (br-button)

### MA-78a76bba · 2 membros · lotes lote-03, lote-05 · → adjudicação

Tela B · completa · regra `emag:2.2` · estado `1280x900@inicial` · tipo botão sem texto visível  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-51ef422e45 | 03 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-734de1d150 | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-51ef422e45: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-734de1d150: Elemento interativo apenas com ícone, sem aria-label (br-button)

### MA-811ebd40 · 2 membros · lotes lote-02, lote-08 · **muda crédito** · → adjudicação

Tela B · completa · regra `emag:2.2` · estado `1280x900@inicial` · tipo botão sem texto visível  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(6)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button`

Divergem: norma.aplicabilidade, norma.violada, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-29172c1031 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-07 | direta | — | violacao-pagina | sim | credita B-07 | norma |
| T3-cc81f9fd87 | 08 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-29172c1031: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-cc81f9fd87: Elemento interativo apenas com ícone, sem aria-label (br-button)

### MA-cc389194 · 14 membros · lotes lote-01, lote-03, lote-04, lote-05, lote-06, lote-07, lote-09 · → adjudicação

Tela B · completa · regra `(sem regra)` · estado `1280x900@inicial` · tipo table  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table`

Divergem: fato, norma.id, norma.forca, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-1a4cb46f64 | 01 | indeterminado | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | pendente | nao | sem-credito | sem-credito |
| T3-4308b70c64 | 03 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-4f0902fc62 | 03 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-59c36d1b35 | 04 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-6018bc8329 | 04 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-67e10affa8 | 04 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-77ca3ee935 | 05 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-8343640085 | 05 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-869724fa91 | 05 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-8d6dc0826f | 05 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-91688fb291 | 05 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-9f43fbbd61 | 06 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-c1ffb17af0 | 07 | verdadeira | wcag:1.4.10 | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-ea2c40a01e | 09 | indeterminado | wcag:1.4.10 | obrigatorio | nao-aplica | nao | nenhum | — | pendente | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-1a4cb46f64: A tabela (largura 1272px) ultrapassa o contêiner .br-table (1096px, overflow visible) e a página fica com scrollWidth 1364px na janela de 12
- T3-4308b70c64: A tabela tem 1272px de largura e termina em x=1364, além do contêiner .br-table (1096px), que tem overflow visível. O documento ganha rolage
- T3-4f0902fc62: Na janela de 1280 px, a tabela (largura 1272 px, borda direita em 1364 px) ultrapassa o contêiner e a página: documentElement.scrollWidth = 
- T3-59c36d1b35: A tabela tem 1272px de largura num contêiner que termina em x=1188; com a janela de 1280px a página rola na horizontal (scrollWidth 1364) e 
- T3-6018bc8329: Em 1280px de largura, a tabela tem 1272px dentro de div.br-table de 1096px, sem overflow próprio. A página rola na horizontal (scrollWidth 1
- T3-67e10affa8: A tabela tem 1272px de largura dentro de um contêiner .br-table de 1096px, sem overflow; a página rola na horizontal (scrollWidth 1364 > 128
- T3-77ca3ee935: A tabela tem 1272px de largura dentro de um container de 1096px (.br-table sem overflow). A página fica com scrollWidth 1364px para viewport
- T3-8343640085: Em 1280px a tabela (largura 1272px a partir de x=92) ultrapassa o contêiner .br-table (clientWidth 1096) e a janela: documentElement.scrollW
- T3-869724fa91: Em 1280px a tabela tem 1272px de largura e termina em x=1364; a página fica com scrollWidth=1364 (rolagem horizontal) e a coluna de ações (b
- T3-8d6dc0826f: A tabela tem 1272 px de largura dentro do contêiner .br-table de 1096 px (overflow visível); a página rola na horizontal (scrollWidth 1364 e
- T3-91688fb291: Com viewport de 1280px a tabela (1272px) estoura o contêiner .br-table (1096px) sem rolagem própria; o documento fica com scrollWidth 1364px
- T3-9f43fbbd61: Em 1280×900 a tabela (largura 1272px) ultrapassa o contêiner .br-table (1096px, overflow visível) e termina em x=1364. O documento fica com 
- T3-c1ffb17af0: Em 1280×900, a tabela ultrapassa a largura disponível (borda direita em x≈1364px; documentElement.scrollWidth=1364); a coluna de ações fica 
- T3-ea2c40a01e: Na aba Tramitando, a tabela tem 1272px de largura dentro de .br-table com 1096px e overflow visível; o documento fica com scrollWidth 1364px

### MA-db5b970f · 2 membros · lotes lote-05, lote-08 · → adjudicação

Tela B · completa · regra `emag:2.2` · estado `1280x900@inicial` · tipo botão sem texto visível  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button`

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-80310ce61c | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-d3e798a2c8 | 08 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-80310ce61c: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-d3e798a2c8: Elemento interativo apenas com ícone, sem aria-label (br-button)

### MA-ecaafd76 · 15 membros · lotes lote-02, lote-03, lote-04, lote-05, lote-06, lote-07, lote-08, lote-09 · → adjudicação

Tela B · completa · regra `(sem regra)` · estado `1280x900@inicial` · tipo componente <br-header>  
Sujeito: `body>pnip-root>pnip-header>br-header`

Divergem: fato, norma.id, norma.forca, norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-25698287fc | 02 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-30aa7cfaaa | 02 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-5122d1a210 | 03 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-55c22755d2 | 04 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-8e4083d636 | 05 | verdadeira | wcag:4.1.2 | obrigatorio | nao-aplica | nao | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-9b7ecf2269 | 06 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-a2eca0727b | 06 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | observacao | nao | sem-credito | sem-credito |
| T3-aad18fe58d | 07 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | valida | observacao | nao | sem-credito | sem-credito |
| T3-b4201ff0ab | 07 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | valida | observacao | nao | sem-credito | sem-credito |
| T3-c8a15f2484 | 08 | indeterminado | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | pendente | nao | sem-credito | sem-credito |
| T3-d3693925f1 | 08 | indeterminado | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | pendente | nao | sem-credito | sem-credito |
| T3-d5a0e00250 | 08 | indeterminado | nenhuma | nenhuma | nao-aplica | nao | nenhum | — | pendente | nao | sem-credito | sem-credito |
| T3-eda1c53016 | 09 | indeterminado | wcag:4.1.2 | obrigatorio | incerta | incerto | nenhum | — | pendente | nao | sem-credito | sem-credito |
| T3-f4735a05d1 | 09 | indeterminado | wcag:4.1.2 | obrigatorio | incerta | incerto | nenhum | — | pendente | nao | sem-credito | sem-credito |
| T3-ffc8b04c4d | 09 | indeterminado | wcag:4.1.2 | obrigatorio | incerta | incerto | nenhum | — | pendente | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-25698287fc: O botão "Menu" (button#navigation no shadow root de br-header) aponta para data-target="#main-navigation", que não existe. Ao clicar, nenhum
- T3-30aa7cfaaa: O botão "Menu" (#navigation, data-target="#main-navigation") do cabeçalho não faz nada: o alvo #main-navigation não existe no documento nem 
- T3-5122d1a210: O botão "Menu" (hambúrguer, #navigation, data-target="#main-navigation") não faz nada ao ser clicado ou ativado com Enter: não existe #main-
- T3-55c22755d2: O botão "Menu" (#navigation, data-target="#main-navigation") não faz nada quando acionado com Enter: nenhum painel abre e aria-expanded não 
- T3-8e4083d636: O botão "Menu" (#navigation, no shadow DOM do br-header) tem data-target="#main-navigation", mas esse elemento não existe; ao clicar nada ab
- T3-9b7ecf2269: O botão "Menu" (hambúrguer, #navigation no shadow DOM) tem data-target="#main-navigation", mas esse elemento não existe; clique ou Enter não
- T3-a2eca0727b: O botão 'Menu' (#navigation, data-target="#main-navigation") não faz nada ao ser clicado: não existe elemento #main-navigation no documento 
- T3-aad18fe58d: O botão "Menu" (hambúrguer, #navigation no shadow DOM do br-header) tem data-target="#main-navigation", mas esse elemento não existe; clicar
- T3-b4201ff0ab: O botão 'Menu' (#navigation no shadow DOM, data-target='#main-navigation') não tem efeito ao ser clicado: #main-navigation não existe e nada
- T3-c8a15f2484: O botão 'Menu' (#navigation, data-target=#main-navigation) não abre nada ao ser clicado: não existe #main-navigation nem painel br-menu no d
- T3-d3693925f1: O botão "Menu" do cabeçalho (#navigation, data-target="#main-navigation") não abre nada, nem com clique nem com Enter: #main-navigation não 
- T3-d5a0e00250: O botão "Menu" (#navigation no shadow do br-header, data-target="#main-navigation") não faz nada ao ser acionado: não existe #main-navigatio
- T3-eda1c53016: O botão "Menu" (#navigation no shadow DOM de br-header) tem data-target="#main-navigation", mas esse elemento não existe. Ao clicar, nenhum 
- T3-f4735a05d1: O botão "Menu" (#navigation no shadow DOM de br-header, data-target="#main-navigation") não abre nenhum conteúdo ao ser acionado por clique 
- T3-ffc8b04c4d: O botão "Menu" (#navigation, no shadow DOM de br-header) tem data-target="#main-navigation", mas esse elemento não existe no documento nem n

### MA-f4716761 · 2 membros · lotes lote-05, lote-09 · → adjudicação

Tela B · completa · regra `(sem regra)` · estado `1280x900@inicial` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)`

Divergem: fato, norma.id, norma.forca, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-8b59cd7dcf | 05 | verdadeira | nenhuma | nenhuma | nao-aplica | nao | nenhum | observacao | nao | sem-credito | sem-credito |
| T3-ee03bed4cc | 09 | indeterminado | wcag:1.4.10 | obrigatorio | nao-aplica | nao | nenhum | pendente | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-8b59cd7dcf: Na janela de 1280px, a tabela (1272px de largura) transborda o contêiner .br-table (1096px), que não tem overflow, e gera rolagem horizontal
- T3-ee03bed4cc: A tabela (1272px) ultrapassa o contêiner .br-table (1096px, overflow-x: visible). A página fica com scrollWidth 1364px em janela de 1280px, 

### MA-f73efb3f · 10 membros · lotes lote-01, lote-05, lote-06, lote-08, lote-09 · → adjudicação

Tela B · completa · regra `axe:scrollable-region-focusable` · estado `1280x900@modal` · tipo div  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-agendar-vistoria>div>pnip-propesc-trocar-embarcacao>div>div>div:nth-of-type(2)>div:nth-of-type(2)`

Divergem: fato, norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-04effebddf | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-06953386fd | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0f053a364c | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-115bb81264 | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-75151225cf | 05 | verdadeira | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-76c9f24fdf | 05 | verdadeira | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-a204af83d8 | 06 | indeterminado | citada | obrigatorio | incerta | incerto | nenhum | pendente | nao | sem-credito | sem-credito |
| T3-d251c54a50 | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fa5eada8e3 | 09 | indeterminado | citada | obrigatorio | incerta | incerto | nenhum | pendente | nao | sem-credito | sem-credito |
| T3-fb31abb418 | 09 | indeterminado | citada | obrigatorio | incerta | incerto | nenhum | pendente | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-04effebddf: Scrollable region must have keyboard access
- T3-06953386fd: Scrollable region must have keyboard access
- T3-0f053a364c: Scrollable region must have keyboard access
- T3-115bb81264: Scrollable region must have keyboard access
- T3-75151225cf: Scrollable region must have keyboard access
- T3-76c9f24fdf: Scrollable region must have keyboard access
- T3-a204af83d8: Scrollable region must have keyboard access
- T3-d251c54a50: Scrollable region must have keyboard access
- T3-fa5eada8e3: Scrollable region must have keyboard access
- T3-fb31abb418: Scrollable region must have keyboard access

### MA-fd2fc960 · 21 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05, lote-06, lote-07, lote-09 · **muda crédito** · → adjudicação

Tela A · completa · regra `ds:structure-button-tag` · estado `1280x900` · tipo div  
Sujeito: `body>div:nth-of-type(1)>div>main>form>div:nth-of-type(1)>div>div:nth-of-type(1)>div`

Divergem: norma.forca, norma.aplicabilidade, norma.violada, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0fa1aba9cb | 01 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-22a553196d | 01 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-32d53e94eb | 02 | verdadeira | citada | exemplo | aplica | sim | A-06 | direta | — | violacao-pagina | sim | credita A-06 | mais-fraca |
| T3-36019bf511 | 02 | verdadeira | citada | exemplo | aplica | sim | A-06 | direta | — | violacao-pagina | sim | credita A-06 | mais-fraca |
| T3-3e5a57970f | 03 | verdadeira | citada | obrigatorio | aplica | sim | A-06 | direta | — | violacao-pagina | sim | credita A-06 | norma |
| T3-68f03243dd | 04 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-6cb1878e2e | 04 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-7bcdb9123a | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-869581183c | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-875206e8d4 | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-92196d7b08 | 06 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-99985b528d | 06 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-99ad380a0d | 06 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-9fda37707c | 06 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-a1dccfc0d7 | 06 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-b4358e8cfc | 07 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-bcf0f3799c | 07 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-e78f41907c | 09 | verdadeira | citada | obrigatorio | incerta | incerto | A-06 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-eb8312a968 | 09 | verdadeira | citada | obrigatorio | incerta | incerto | A-06 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-f0dad275e3 | 09 | verdadeira | citada | obrigatorio | incerta | incerto | A-06 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-fb35b8dd59 | 09 | verdadeira | citada | obrigatorio | incerta | incerto | A-06 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0fa1aba9cb: br-button aplicado a <div>
- T3-22a553196d: br-button aplicado a <div>
- T3-32d53e94eb: br-button aplicado a <div>
- T3-36019bf511: br-button aplicado a <div>
- T3-3e5a57970f: Na mensagem de erro (br-message danger), o botão de fechar é um <div class='br-button circle small' role='button' tabindex='0'>. A mensagem 
- T3-68f03243dd: br-button aplicado a <div>
- T3-6cb1878e2e: br-button aplicado a <div>
- T3-7bcdb9123a: Na mensagem de erro, o botão 'Fechar a mensagem' é um <div class="br-button circle small" role="button" tabindex="0">. A mensagem de sucesso
- T3-869581183c: O botão 'Fechar a mensagem' da mensagem de erro é um <div class="br-button circle small" role="button" tabindex="0">; a mensagem de sucesso 
- T3-875206e8d4: br-button aplicado a <div>
- T3-92196d7b08: Na mensagem de erro, o botão 'Fechar a mensagem' é um <div class="br-button circle small" role="button" tabindex="0">; na mensagem de sucess
- T3-99985b528d: br-button aplicado a <div>
- T3-99ad380a0d: br-button aplicado a <div>
- T3-9fda37707c: br-button aplicado a <div>
- T3-a1dccfc0d7: br-button aplicado a <div>
- T3-b4358e8cfc: Na mensagem de erro (br-message danger), o botão 'Fechar a mensagem' é um <div class='br-button circle small' role='button' tabindex='0'>. A
- T3-bcf0f3799c: br-button aplicado a <div>
- T3-e78f41907c: O controle 'Fechar a mensagem' da mensagem de erro é <div class="br-button circle small" role="button" tabindex="0">. A mensagem de sucesso 
- T3-eb8312a968: br-button aplicado a <div>
- T3-f0dad275e3: br-button aplicado a <div>
- T3-fb35b8dd59: br-button aplicado a <div>

### MA-ffff6dbb · 2 membros · lotes lote-01, lote-02 · **muda crédito** · → adjudicação

Tela B · completa · regra `emag:2.2` · estado `1280x900@inicial` · tipo botão sem texto visível  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>tbody>tr:nth-of-type(10)>td:nth-of-type(9)>div>div:nth-of-type(2)>br-button >>> button`

Divergem: norma.aplicabilidade, norma.violada, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-09cb0b78ea | 01 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-27cf2d6ad7 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-07 | direta | — | violacao-pagina | sim | credita B-07 | norma |

Textos observados (conferência do agrupamento):
- T3-09cb0b78ea: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-27cf2d6ad7: Elemento interativo apenas com ícone, sem aria-label (br-button)

### MA-899743e6 · 10 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-06, lote-08, lote-09

Tela B · completa · regra `axe:empty-table-header` · estado `1280x900@inicial` · tipo th  
Sujeito: `body>pnip-root>main>pnip-mpa>pnip-propesc-vistorias>div>div:nth-of-type(3)>div>div:nth-of-type(4)>table>thead>tr>th:nth-of-type(2)`

Divergem: vinculo.relacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0a301c555f | 01 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-349d8ebf94 | 02 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-410a33f2bd | 03 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | host-interno | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-449e499901 | 03 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | host-interno | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-4edbdcf347 | 03 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | host-interno | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-6f1fcc8b4b | 04 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-939c6fd5f5 | 06 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-94dd8145f6 | 06 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-e4e93cbacb | 08 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-ec16a4f382 | 09 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-0a301c555f: Table header text should not be empty
- T3-349d8ebf94: Table header text should not be empty
- T3-410a33f2bd: Table header text should not be empty
- T3-449e499901: Table header text should not be empty
- T3-4edbdcf347: Table header text should not be empty
- T3-6f1fcc8b4b: Table header text should not be empty
- T3-939c6fd5f5: Table header text should not be empty
- T3-94dd8145f6: Table header text should not be empty
- T3-e4e93cbacb: Table header text should not be empty
- T3-ec16a4f382: Table header text should not be empty

## Grupos divergentes — mesma leitura da norma (9; 4 à adjudicação; 4 mudam o crédito)

### LN-27fc438f · 20 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05, lote-06, lote-07, lote-08 · **muda crédito** · → adjudicação

Regra `emag:2.2` × botão sem texto visível

Divergem: norma.aplicabilidade, norma.violada, sugestao, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-09cb0b78ea | 01 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-26e2846e36 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-07 | direta | — | violacao-pagina | sim | credita B-07 | norma |
| T3-27cf2d6ad7 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-07 | direta | — | violacao-pagina | sim | credita B-07 | norma |
| T3-29172c1031 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-07 | direta | — | violacao-pagina | sim | credita B-07 | norma |
| T3-51ef422e45 | 03 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-5b73a865fe | 04 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-60beaacb52 | 04 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-734de1d150 | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-80310ce61c | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-89e5e94b64 | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-a96a351a53 | 06 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-aab7849ed6 | 07 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-b15445cbd7 | 07 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-b3c6421db7 | 07 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-b99bdf9bdb | 07 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-ca23c038d3 | 08 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-cc81f9fd87 | 08 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-cf76366907 | 08 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-d3e798a2c8 | 08 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-db59bdc938 | 08 | verdadeira | citada | obrigatorio | nao-aplica | nao | B-07 | direta | generica | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-09cb0b78ea: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-26e2846e36: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-27cf2d6ad7: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-29172c1031: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-51ef422e45: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-5b73a865fe: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-60beaacb52: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-734de1d150: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-80310ce61c: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-89e5e94b64: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-a96a351a53: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-aab7849ed6: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-b15445cbd7: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-b3c6421db7: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-b99bdf9bdb: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-ca23c038d3: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-cc81f9fd87: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-cf76366907: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-d3e798a2c8: Elemento interativo apenas com ícone, sem aria-label (br-button)
- T3-db59bdc938: Elemento interativo apenas com ícone, sem aria-label (br-button)

### LN-9518e880 · 2 membros · lotes lote-02, lote-05 · **muda crédito** · → adjudicação

Regra `wcag:2.4.3` × div

Divergem: norma.violada, vinculo, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-22a797d676 | 02 | verdadeira | citada | obrigatorio | aplica | sim | A-01 | direta | — | violacao-pagina | sim | credita A-01 | norma |
| T3-869e7cfa4a | 05 | verdadeira | citada | obrigatorio | aplica | nao | nenhum | — | valida | observacao-norma-errada | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-22a797d676: Ao fechar o diálogo "Descartar solicitação?" com Escape, com "Continuar preenchendo" ou com "Descartar", o foco vai para o body em vez de vo
- T3-869e7cfa4a: Depois de abrir a lista com ArrowDown e escolher uma opção com Enter, a lista fecha e o foco vai para o body (document.activeElement = BODY)

### LN-c5900816 · 10 membros · lotes lote-01, lote-05, lote-06, lote-08, lote-09 · → adjudicação

Regra `axe:scrollable-region-focusable` × div

Divergem: fato, norma.aplicabilidade, norma.violada, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-04effebddf | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-06953386fd | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-0f053a364c | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-115bb81264 | 01 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-75151225cf | 05 | verdadeira | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-76c9f24fdf | 05 | verdadeira | citada | obrigatorio | aplica | incerto | nenhum | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-a204af83d8 | 06 | indeterminado | citada | obrigatorio | incerta | incerto | nenhum | pendente | nao | sem-credito | sem-credito |
| T3-d251c54a50 | 08 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | violacao-origem-indeterminada | nao | sem-credito | sem-credito |
| T3-fa5eada8e3 | 09 | indeterminado | citada | obrigatorio | incerta | incerto | nenhum | pendente | nao | sem-credito | sem-credito |
| T3-fb31abb418 | 09 | indeterminado | citada | obrigatorio | incerta | incerto | nenhum | pendente | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-04effebddf: Scrollable region must have keyboard access
- T3-06953386fd: Scrollable region must have keyboard access
- T3-0f053a364c: Scrollable region must have keyboard access
- T3-115bb81264: Scrollable region must have keyboard access
- T3-75151225cf: Scrollable region must have keyboard access
- T3-76c9f24fdf: Scrollable region must have keyboard access
- T3-a204af83d8: Scrollable region must have keyboard access
- T3-d251c54a50: Scrollable region must have keyboard access
- T3-fa5eada8e3: Scrollable region must have keyboard access
- T3-fb31abb418: Scrollable region must have keyboard access

### LN-ee872566 · 21 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05, lote-06, lote-07, lote-09 · **muda crédito** · → adjudicação

Regra `ds:structure-button-tag` × div

Divergem: norma.forca, norma.aplicabilidade, norma.violada, classe, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0fa1aba9cb | 01 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-22a553196d | 01 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-32d53e94eb | 02 | verdadeira | citada | exemplo | aplica | sim | A-06 | direta | — | violacao-pagina | sim | credita A-06 | mais-fraca |
| T3-36019bf511 | 02 | verdadeira | citada | exemplo | aplica | sim | A-06 | direta | — | violacao-pagina | sim | credita A-06 | mais-fraca |
| T3-3e5a57970f | 03 | verdadeira | citada | obrigatorio | aplica | sim | A-06 | direta | — | violacao-pagina | sim | credita A-06 | norma |
| T3-68f03243dd | 04 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-6cb1878e2e | 04 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-7bcdb9123a | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-869581183c | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-875206e8d4 | 05 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-92196d7b08 | 06 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-99985b528d | 06 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-99ad380a0d | 06 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-9fda37707c | 06 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-a1dccfc0d7 | 06 | verdadeira | citada | exemplo | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-b4358e8cfc | 07 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-bcf0f3799c | 07 | verdadeira | citada | obrigatorio | nao-aplica | nao | A-06 | direta | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-e78f41907c | 09 | verdadeira | citada | obrigatorio | incerta | incerto | A-06 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-eb8312a968 | 09 | verdadeira | citada | obrigatorio | incerta | incerto | A-06 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-f0dad275e3 | 09 | verdadeira | citada | obrigatorio | incerta | incerto | A-06 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |
| T3-fb35b8dd59 | 09 | verdadeira | citada | obrigatorio | incerta | incerto | A-06 | direta | — | evidencia-indisponivel | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0fa1aba9cb: br-button aplicado a <div>
- T3-22a553196d: br-button aplicado a <div>
- T3-32d53e94eb: br-button aplicado a <div>
- T3-36019bf511: br-button aplicado a <div>
- T3-3e5a57970f: Na mensagem de erro (br-message danger), o botão de fechar é um <div class='br-button circle small' role='button' tabindex='0'>. A mensagem 
- T3-68f03243dd: br-button aplicado a <div>
- T3-6cb1878e2e: br-button aplicado a <div>
- T3-7bcdb9123a: Na mensagem de erro, o botão 'Fechar a mensagem' é um <div class="br-button circle small" role="button" tabindex="0">. A mensagem de sucesso
- T3-869581183c: O botão 'Fechar a mensagem' da mensagem de erro é um <div class="br-button circle small" role="button" tabindex="0">; a mensagem de sucesso 
- T3-875206e8d4: br-button aplicado a <div>
- T3-92196d7b08: Na mensagem de erro, o botão 'Fechar a mensagem' é um <div class="br-button circle small" role="button" tabindex="0">; na mensagem de sucess
- T3-99985b528d: br-button aplicado a <div>
- T3-99ad380a0d: br-button aplicado a <div>
- T3-9fda37707c: br-button aplicado a <div>
- T3-a1dccfc0d7: br-button aplicado a <div>
- T3-b4358e8cfc: Na mensagem de erro (br-message danger), o botão 'Fechar a mensagem' é um <div class='br-button circle small' role='button' tabindex='0'>. A
- T3-bcf0f3799c: br-button aplicado a <div>
- T3-e78f41907c: O controle 'Fechar a mensagem' da mensagem de erro é <div class="br-button circle small" role="button" tabindex="0">. A mensagem de sucesso 
- T3-eb8312a968: br-button aplicado a <div>
- T3-f0dad275e3: br-button aplicado a <div>
- T3-fb35b8dd59: br-button aplicado a <div>

### LN-21702389 · 13 membros · lotes lote-01, lote-02, lote-04, lote-05, lote-06, lote-07, lote-08, lote-09

Regra `axe:region` × div

Divergem: sugestao, classe · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | sugestao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0df086b625 | 01 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-2b1d44ea1a | 02 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-2fbe5f8671 | 02 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | valida | observacao-norma-errada | nao | sem-credito | sem-credito |
| T3-65f27b172b | 04 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-6fd649adec | 04 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-6fe114de69 | 05 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-7cfcf2a656 | 05 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-7ff8537a4e | 05 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-9e0cb0c527 | 06 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-bc7a238023 | 07 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | generica | erro-normativo | nao | sem-credito | sem-credito |
| T3-bfb5bedb8b | 07 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-d46586287e | 08 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |
| T3-ffbbf2b7bc | 09 | verdadeira | citada | boa-pratica | aplica | sim | nenhum | ausente | erro-normativo | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-0df086b625: All page content should be contained by landmarks
- T3-2b1d44ea1a: All page content should be contained by landmarks
- T3-2fbe5f8671: O menu do usuário aberto (e o gatilho do avatar, em div.container-lg) fica fora de qualquer landmark; o banner fica só dentro do shadow de b
- T3-65f27b172b: All page content should be contained by landmarks
- T3-6fd649adec: All page content should be contained by landmarks
- T3-6fe114de69: O menu do avatar aberto (e o bloco do usuário) fica fora de qualquer landmark; o banner fica só dentro do br-header.
- T3-7cfcf2a656: All page content should be contained by landmarks
- T3-7ff8537a4e: All page content should be contained by landmarks
- T3-9e0cb0c527: All page content should be contained by landmarks
- T3-bc7a238023: O conteúdo do menu do usuário aberto fica fora de qualquer landmark (a área de login está fora do banner do br-header).
- T3-bfb5bedb8b: All page content should be contained by landmarks
- T3-d46586287e: All page content should be contained by landmarks
- T3-ffbbf2b7bc: All page content should be contained by landmarks

### LN-345fa778 · 10 membros · lotes lote-01, lote-03, lote-05, lote-08, lote-09

Regra `axe:page-has-heading-one` × raiz

Divergem: vinculo, credito · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-198a1f51f5 | 01 | verdadeira | citada | boa-pratica | aplica | sim | B-21 | ausencia-global | violacao-pagina | sim | credita B-21 | mais-fraca |
| T3-3b6897ffea | 03 | verdadeira | citada | boa-pratica | aplica | sim | B-21 | ausencia-global | violacao-pagina | sim | credita B-21 | mais-fraca |
| T3-3f9b9b33fb | 03 | verdadeira | citada | boa-pratica | aplica | sim | B-21 | ausencia-global | violacao-pagina | sim | credita B-21 | mais-fraca |
| T3-4ca017ffa2 | 03 | verdadeira | citada | boa-pratica | aplica | sim | B-21 | ausencia-global | violacao-pagina | sim | credita B-21 | mais-fraca |
| T3-75fa9735c6 | 05 | verdadeira | citada | boa-pratica | aplica | sim | B-21 | ausencia-global | violacao-pagina | sim | credita B-21 | mais-fraca |
| T3-8713722037 | 05 | verdadeira | citada | boa-pratica | aplica | sim | B-21 | ausencia-global | violacao-pagina | sim | credita B-21 | mais-fraca |
| T3-c6b42e708d | 08 | verdadeira | citada | boa-pratica | aplica | sim | B-21 | ausencia-global | violacao-pagina | sim | credita B-21 | mais-fraca |
| T3-db709c4c28 | 08 | verdadeira | citada | boa-pratica | aplica | sim | B-21 | ausencia-global | violacao-pagina | sim | credita B-21 | mais-fraca |
| T3-ddbe0cceea | 08 | verdadeira | citada | boa-pratica | aplica | sim | B-21 | ausencia-global | violacao-pagina | sim | credita B-21 | mais-fraca |
| T3-e8914befe5 | 09 | verdadeira | citada | boa-pratica | aplica | sim | B-02 | ausencia-global | violacao-pagina | sim | credita B-02 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-198a1f51f5: Page should contain a level-one heading
- T3-3b6897ffea: Page should contain a level-one heading
- T3-3f9b9b33fb: Page should contain a level-one heading
- T3-4ca017ffa2: Page should contain a level-one heading
- T3-75fa9735c6: Page should contain a level-one heading
- T3-8713722037: Page should contain a level-one heading
- T3-c6b42e708d: Page should contain a level-one heading
- T3-db709c4c28: Page should contain a level-one heading
- T3-ddbe0cceea: Page should contain a level-one heading
- T3-e8914befe5: Page should contain a level-one heading

### LN-8a4e84ad · 42 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-05, lote-06, lote-07, lote-08, lote-09

Regra `axe:label` × campo de formulário

Divergem: vinculo, credito · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-07130191ed | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-085f0ac805 | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-0966f47509 | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-05 | direta | violacao-pagina | sim | credita B-05 | norma |
| T3-0a2acf13ff | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-0a55f86751 | 01 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-17d71314ad | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-23894101a1 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-28e52dba10 | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-05 | direta | violacao-pagina | sim | credita B-05 | norma |
| T3-2965130fef | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-367a6d5cd0 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-3ba504579c | 03 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-3df72f92c8 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-05 | direta | violacao-pagina | sim | credita B-05 | norma |
| T3-4f730b0aa2 | 03 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-580c1e445f | 04 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-5e35679d43 | 04 | verdadeira | citada | obrigatorio | aplica | sim | B-05 | direta | violacao-pagina | sim | credita B-05 | norma |
| T3-683e20ade8 | 04 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-6e9730bab3 | 04 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-74bed017c5 | 05 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-8c07e9d1da | 05 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-95597b8d6e | 06 | verdadeira | citada | obrigatorio | aplica | sim | B-20 | direta | violacao-pagina | sim | credita B-20 | norma |
| T3-95edc6a6a2 | 06 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-9abb75e681 | 06 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-9d36fbb165 | 06 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-abbf53b51e | 07 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-ad11011da7 | 07 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-b472d0f7a9 | 07 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-b5b0fd2ed0 | 07 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-b7edf8fb1a | 07 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-c134ff433f | 07 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-c168cea741 | 07 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-c4403cfb8f | 07 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-cd11b489d5 | 08 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-ceef8e234a | 08 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-cf65b55c81 | 08 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-d406fd54f1 | 08 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-d89e551f2c | 08 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-dd80c4313d | 08 | verdadeira | citada | obrigatorio | aplica | sim | B-20 | direta | violacao-pagina | sim | credita B-20 | norma |
| T3-e389d31a71 | 08 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-e9e00fa649 | 09 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-f09b8b9dbb | 09 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-f618716e43 | 09 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-f6b6c7d15a | 09 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |

Textos observados (conferência do agrupamento):
- T3-07130191ed: Form elements must have labels
- T3-085f0ac805: Form elements must have labels
- T3-0966f47509: Form elements must have labels
- T3-0a2acf13ff: Form elements must have labels
- T3-0a55f86751: Form elements must have labels
- T3-17d71314ad: Form elements must have labels
- T3-23894101a1: Form elements must have labels
- T3-28e52dba10: Form elements must have labels
- T3-2965130fef: Form elements must have labels
- T3-367a6d5cd0: Form elements must have labels
- T3-3ba504579c: O rádio 'Presencial' não tem nome acessível: o <label>Presencial</label> irmão não tem atributo for (nem envolve o input). Clicar no texto '
- T3-3df72f92c8: Form elements must have labels
- T3-4f730b0aa2: Form elements must have labels
- T3-580c1e445f: Checkboxes de seleção de cada linha não têm <label>, aria-label nem aria-labelledby; nome acessível vazio.
- T3-5e35679d43: Form elements must have labels
- T3-683e20ade8: Form elements must have labels
- T3-6e9730bab3: O rádio 'Presencial' não tem nome acessível: o <label> irmão não possui atributo for (os outros dois rádios têm). A árvore de acessibilidade
- T3-74bed017c5: Form elements must have labels
- T3-8c07e9d1da: Form elements must have labels
- T3-95597b8d6e: Form elements must have labels
- T3-95edc6a6a2: Checkbox 'selecionar todos' no cabeçalho da tabela sem nome acessível (e o <th> que o contém fica sem texto).
- T3-9abb75e681: Caixa "selecionar todas" no cabeçalho da tabela não tem rótulo (sem label, aria-label nem title); por isso o th da coluna também fica sem te
- T3-9d36fbb165: Form elements must have labels
- T3-abbf53b51e: Form elements must have labels
- T3-ad11011da7: O radio 'Presencial' não tem nome acessível: o <label> não possui atributo for e não envolve o input; clicar no texto 'Presencial' não marca
- T3-b472d0f7a9: Form elements must have labels
- T3-b5b0fd2ed0: Rádio 'Presencial' sem nome acessível: o <label>Presencial</label> não tem atributo for nem envolve o input; clicar no texto não marca a opç
- T3-b7edf8fb1a: Form elements must have labels
- T3-c134ff433f: Form elements must have labels
- T3-c168cea741: Form elements must have labels
- T3-c4403cfb8f: Form elements must have labels
- T3-cd11b489d5: Form elements must have labels
- T3-ceef8e234a: Form elements must have labels
- T3-cf65b55c81: Radio 'Presencial' sem nome acessível: o <label> não tem atributo for nem envolve o input; a árvore de acessibilidade mostra radio sem nome.
- T3-d406fd54f1: Form elements must have labels
- T3-d89e551f2c: Form elements must have labels
- T3-dd80c4313d: Form elements must have labels
- T3-e389d31a71: Caixas de seleção das linhas não têm rótulo (sem label, aria-label, aria-labelledby nem title).
- T3-e9e00fa649: Form elements must have labels
- T3-f09b8b9dbb: Form elements must have labels
- T3-f618716e43: Form elements must have labels
- T3-f6b6c7d15a: Form elements must have labels

### LN-a04f70e2 · 10 membros · lotes lote-01, lote-02, lote-03, lote-04, lote-06, lote-08, lote-09

Regra `axe:empty-table-header` × th

Divergem: vinculo.relacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-0a301c555f | 01 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-349d8ebf94 | 02 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-410a33f2bd | 03 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | host-interno | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-449e499901 | 03 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | host-interno | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-4edbdcf347 | 03 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | host-interno | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-6f1fcc8b4b | 04 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-939c6fd5f5 | 06 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-94dd8145f6 | 06 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-e4e93cbacb | 08 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |
| T3-ec16a4f382 | 09 | verdadeira | citada | boa-pratica | aplica | sim | B-06 | participante-relacionado | violacao-pagina | sim | credita B-06 | mais-fraca |

Textos observados (conferência do agrupamento):
- T3-0a301c555f: Table header text should not be empty
- T3-349d8ebf94: Table header text should not be empty
- T3-410a33f2bd: Table header text should not be empty
- T3-449e499901: Table header text should not be empty
- T3-4edbdcf347: Table header text should not be empty
- T3-6f1fcc8b4b: Table header text should not be empty
- T3-939c6fd5f5: Table header text should not be empty
- T3-94dd8145f6: Table header text should not be empty
- T3-e4e93cbacb: Table header text should not be empty
- T3-ec16a4f382: Table header text should not be empty

### LN-e2972868 · 7 membros · lotes lote-02, lote-03, lote-06, lote-07, lote-09 · **muda crédito**

Regra `wcag:4.1.2` × campo de formulário

Divergem: vinculo, credita, credito, fundamentacao · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-2647eb60bf | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-2fc9a4185f | 02 | verdadeira | citada | obrigatorio | aplica | sim | B-06 | direta | violacao-pagina | sim | credita B-06 | norma |
| T3-34054a6c15 | 02 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-3ba9e10fb1 | 03 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-9b1c0bf574 | 06 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-bdc475c803 | 07 | verdadeira | citada | obrigatorio | aplica | sim | A-09 | direta | violacao-pagina | sim | credita A-09 | norma |
| T3-eec361b163 | 09 | verdadeira | citada | obrigatorio | aplica | sim | nenhum | — | violacao-pagina | nao | sem-credito | sem-credito |

Textos observados (conferência do agrupamento):
- T3-2647eb60bf: As caixas de seleção do cabeçalho (selecionar todas) e de cada linha não têm label, aria-label nem title (a árvore mostra "checkbox" sem nom
- T3-2fc9a4185f: Os checkboxes de seleção de linha e o de "selecionar todos" no cabeçalho são <input type="checkbox"> sem label, aria-label ou title. A árvor
- T3-34054a6c15: O rádio 'Presencial' não tem nome acessível (árvore de acessibilidade: 'radio' sem nome); o <label>Presencial</label> não tem atributo for e
- T3-3ba9e10fb1: O radio 'Presencial' tem um label sem atributo for e não está associado ao input; o radio fica sem nome acessível (os outros dois radios têm
- T3-9b1c0bf574: O input radio 'Presencial' não tem nome acessível: o <label> não tem atributo for e não envolve o input; a árvore de acessibilidade mostra r
- T3-bdc475c803: O rótulo "Presencial" não tem atributo for, e o rádio #forma-presencial fica sem nome acessível (aparece como "radio" sem nome na árvore). C
- T3-eec361b163: Os seletores "Exibir" e "Página" são inputs de texto que abrem uma lista ao receber foco, mas não têm role="combobox", aria-expanded nem ari

