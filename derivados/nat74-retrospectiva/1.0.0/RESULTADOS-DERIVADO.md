# Reanálise retrospectiva NAT-74 — derivado nat74-retrospectiva-1.0.0

> **Retrospectiva · exploratória · mudança de medida.** O resultado oficial não muda: [RESULTADOS.md](../../../RESULTADOS.md), D-97, D-111 e D-112 (D-21).
> Toda mudança de precisão aqui é mudança de medida, não melhora do detector. Política principal `politica-normativa-1.2.0`; a 1.1.0 vai ao lado (S1).

## Variante principal, por campanha: D em limites (PROVISÓRIO)

Enquanto houver pendentes (E14 não rodou), D sai como **limites**: o **inferior** conta o átomo pendente como não creditado; o **superior** devolve ao átomo pendente
que o arquivo creditou o crédito arquivado. Os pendentes creditados no arquivo caem desigualmente nos braços (tabela abaixo), por isso nenhum dos dois é a manchete,
e média, IC e p de cada limite só aparecem no bloco marcado "não interpretável até a E14".

| Campanha | D por par — inferior | Média inf. | D por par — superior | Média sup. | Oficial (média) | Maturidade sem / com |
|---|---|---|---|---|---|---|
| A Opus (`t7-tela-a-01`, unidade) | -1, 1, -1, -1, -1, 0, -1, -3, 1, 1 | -0,50 | 0, 2, 0, 0, -1, 0, -1, -2, 1, 0 | -0,10 | 0,00 | PROVISORIO (22) / PROVISORIO (29) |
| A Sonnet (`t7b-sonnet-tela-a-01`, unidade) | 3, 2, -1, 0, -3, -3, 0, 1, -2, -2 | -0,50 | 3, 2, 0, 0, -3, -3, -1, 2, -2, -2 | -0,40 | -0,20 | PROVISORIO (21) / PROVISORIO (33) |
| B (`t7-tela-b-01`, spec) | -1, 0, -3, -1, 0, 0, -2, 2, -2, 2 | -0,50 | -1, 0, -3, -1, 1, 0, -2, 2, -2, 2 | -0,40 | -0,70 | PROVISORIO (66) / PROVISORIO (83) |

PROVISÓRIO = há átomos pendentes (filas T2/T3, E14 não rodou). Recall e precisão de braço com pendente ficam nulos.

### Átomos creditados no arquivo e agora pendentes (H1), por braço

| Campanha | Braço | Pendentes creditados no arquivo | Motivos |
|---|---|---|---|
| A Opus | com | 23 | T3: a unidade não declara regra: aplicabilidade da citada não decidível por tabela (11); T3: regra citada fora das tabelas (v1, checker, axe): incerta (T3) (6); T3: regra obrigatória diferente da da unidade: aplicabilidade a julgar (T3) (6) |
| A Opus | lb-axe | 2 | T3: regra obrigatória diferente da da unidade: aplicabilidade a julgar (T3) (2) |
| A Opus | lb-validator | 8 | T3: regra citada fora das tabelas (v1, checker, axe): incerta (T3) (8) |
| A Opus | sem | 8 | T3: regra obrigatória diferente da da unidade: aplicabilidade a julgar (T3) (8) |
| A Sonnet | com | 10 | T3: a unidade não declara regra: aplicabilidade da citada não decidível por tabela (6); T3: regra citada fora das tabelas (v1, checker, axe): incerta (T3) (1); T3: regra obrigatória diferente da da unidade: aplicabilidade a julgar (T3) (3) |
| A Sonnet | lb-axe | 3 | T3: regra obrigatória diferente da da unidade: aplicabilidade a julgar (T3) (3) |
| A Sonnet | lb-validator | 7 | T3: regra citada fora das tabelas (v1, checker, axe): incerta (T3) (7) |
| A Sonnet | sem | 3 | T3: regra obrigatória diferente da da unidade: aplicabilidade a julgar (T3) (3) |
| B | com | 7 | T3: regra citada fora das tabelas (v1, checker, axe): incerta (T3) (1); T3: regra obrigatória diferente da da unidade: aplicabilidade a julgar (T3) (6) |
| B | lb-axe | 30 | T3: regra obrigatória diferente da da unidade: aplicabilidade a julgar (T3) (30) |
| B | lb-validator | 20 | T3: regra obrigatória diferente da da unidade: aplicabilidade a julgar (T3) (20) |
| B | sem | 4 | T3: regra obrigatória diferente da da unidade: aplicabilidade a julgar (T3) (4) |

### M1: arquivo creditado com origem medida não-página

Átomo de arquivo creditado (defeito-do-gabarito) cuja origem medida é DS ou indeterminada segue a regra do átomo julgado: DS vira novo correto sem crédito (P3); indeterminada sai da análise I. Contagem por variante (campanha · braço):

- principal: A Opus 0 · A Sonnet 0 · B 0
- S1: A Opus 0 · A Sonnet 0 · B 0
- S2: A Opus 0 · A Sonnet 0 · B 0
- S3: A Opus 0 · A Sonnet 0 · B 0
- S4: A Opus 0 · A Sonnet 0 · B 0
- S5: A Opus 0 · A Sonnet 0 · B 0
- S6: A Opus 0 · A Sonnet 0 · B 0

<details><summary>Não interpretável até a E14: média, IC 95% e p (permutação) de cada limite</summary>

| Campanha | Limite | Média | IC 95% | p | Oficial (média · IC · p) |
|---|---|---|---|---|---|
| A Opus | inferior | -0,50 | -1,20 a 0,20 | 0,3672 | 0,00 · -0,70 a 0,70 · 1,0000 |
| A Opus | superior | -0,10 | -0,70 a 0,50 | 1,0000 | 0,00 · -0,70 a 0,70 · 1,0000 |
| A Sonnet | inferior | -0,50 | -1,70 a 0,80 | 0,5547 | -0,20 · -1,40 a 1,00 · 0,8828 |
| A Sonnet | superior | -0,40 | -1,70 a 0,90 | 0,6563 | -0,20 · -1,40 a 1,00 · 0,8828 |
| B | inferior | -0,50 | -1,40 a 0,50 | 0,4531 | -0,70 · -1,70 a 0,40 · 0,3125 |
| B | superior | -0,40 | -1,40 a 0,60 | 0,5859 | -0,70 · -1,70 a 0,40 · 0,3125 |

</details>

## Filas T2/T3 (E6, antes de qualquer julgamento)

| Campanha | Braço | T1 | julgado | T2 | T3 | pendente |
|---|---|---|---|---|---|---|
| A Opus | com | 61 | 25 | 0 | 29 | 0 |
| A Opus | lb-axe | 8 | 10 | 0 | 2 | 0 |
| A Opus | lb-validator | 12 | 40 | 0 | 8 | 0 |
| A Opus | sem | 57 | 19 | 0 | 22 | 0 |
| A Sonnet | com | 35 | 29 | 0 | 33 | 0 |
| A Sonnet | lb-axe | 7 | 10 | 0 | 3 | 0 |
| A Sonnet | lb-validator | 22 | 31 | 0 | 7 | 0 |
| A Sonnet | sem | 32 | 20 | 0 | 21 | 0 |
| B | com | 178 | 70 | 41 | 36 | 0 |
| B | lb-axe | 390 | 20 | 0 | 70 | 0 |
| B | lb-validator | 112 | 429 | 49 | 20 | 0 |
| B | sem | 200 | 69 | 30 | 34 | 0 |

## Linhas de base

B-16 (axe image-alt, tela B): confirmada em 10/10 pares. B-16 resolvida, mas a LB axe B segue PROVISÓRIA: há outros átomos do axe B pendentes pela triagem; o recall dela não é anunciado.

<details><summary>Sensibilidades (S1–S6)</summary>

### A Opus

| Variante | D inferior | Média inf. | D superior | Média sup. |
|---|---|---|---|---|
| principal — política 1.2.0, origem medida com o DS 3.4.1 (tela B), todos os juízes, resposta vigente da autora, Q1 a, Q3 a | -1, 1, -1, -1, -1, 0, -1, -3, 1, 1 | -0,50 | 0, 2, 0, 0, -1, 0, -1, -2, 1, 0 | -0,10 |
| S1 — política 1.1.0: observação com norma errada como falso, sem o crédito da R15 (nem o da Q1 a) | 0, 1, 0, 0, 0, 1, 0, -2, 1, 1 | 0,20 | 1, 2, 1, 1, 0, 1, 0, -1, 1, 0 | 0,60 |
| S2 — origem com o exemplo do DS 3.7.0 (22 casos da tela B passam a pagina; só a análise I) | -1, 1, -1, -1, -1, 0, -1, -3, 1, 1 | -0,50 | 0, 2, 0, 0, -1, 0, -1, -2, 1, 0 | -0,10 |
| S3 — só julgamentos cegos da autora: revisitas e correções após a orientação revertidas ao cego | -1, 1, -1, -1, -1, 0, -1, -3, 2, 1 | -0,40 | 0, 2, 0, 0, -1, 0, -1, -2, 2, 0 | 0,00 |
| S4 — só humano: classe ou vínculo decididos só por LLM (revisor novo, Q3) revertidos ao arquivo — ATENÇÃO: o arquivo é carregado mesmo quando a P7 o julga incompatível com a 1.2.0 (citação incerta, família sensível); a S4 mistura vereditos que a principal não aceitaria do arquivo | -1, 1, -1, 0, -1, 0, -1, -3, 0, 1 | -0,50 | 0, 2, 0, 1, -1, 0, -1, -2, 0, 0 | -0,10 |
| S5 — Q1 b: átomo creditado com regra nula vira observação e não credita | 0, 1, 0, 0, 0, 1, 0, -2, 1, 1 | 0,20 | 1, 2, 1, 1, 0, 1, 0, -1, 1, 0 | 0,60 |
| S6 — indeterminada conta como pagina na análise I | -1, 1, -1, -1, -1, 0, -1, -3, 1, 1 | -0,50 | 0, 2, 0, 0, -1, 0, -1, -2, 1, 0 | -0,10 |

### A Sonnet

| Variante | D inferior | Média inf. | D superior | Média sup. |
|---|---|---|---|---|
| principal — política 1.2.0, origem medida com o DS 3.4.1 (tela B), todos os juízes, resposta vigente da autora, Q1 a, Q3 a | 3, 2, -1, 0, -3, -3, 0, 1, -2, -2 | -0,50 | 3, 2, 0, 0, -3, -3, -1, 2, -2, -2 | -0,40 |
| S1 — política 1.1.0: observação com norma errada como falso, sem o crédito da R15 (nem o da Q1 a) | 0, -1, 0, 0, -4, -1, 1, 1, -2, -2 | -0,80 | 0, -1, 1, 0, -4, -1, 0, 2, -2, -2 | -0,70 |
| S2 — origem com o exemplo do DS 3.7.0 (22 casos da tela B passam a pagina; só a análise I) | 3, 2, -1, 0, -3, -3, 0, 1, -2, -2 | -0,50 | 3, 2, 0, 0, -3, -3, -1, 2, -2, -2 | -0,40 |
| S3 — só julgamentos cegos da autora: revisitas e correções após a orientação revertidas ao cego | 3, 2, -1, 1, -2, -3, 0, 1, -2, -2 | -0,30 | 3, 2, 0, 1, -2, -3, -1, 2, -2, -2 | -0,20 |
| S4 — só humano: classe ou vínculo decididos só por LLM (revisor novo, Q3) revertidos ao arquivo — ATENÇÃO: o arquivo é carregado mesmo quando a P7 o julga incompatível com a 1.2.0 (citação incerta, família sensível); a S4 mistura vereditos que a principal não aceitaria do arquivo | 3, 3, -1, 0, -3, -3, 0, 1, -2, -2 | -0,40 | 3, 3, 0, 0, -3, -3, -1, 2, -2, -2 | -0,30 |
| S5 — Q1 b: átomo creditado com regra nula vira observação e não credita | 0, -1, 0, 0, -4, -1, 1, 1, -2, -2 | -0,80 | 0, -1, 1, 0, -4, -1, 0, 2, -2, -2 | -0,70 |
| S6 — indeterminada conta como pagina na análise I | 3, 2, -1, 0, -3, -3, 0, 1, -2, -2 | -0,50 | 3, 2, 0, 0, -3, -3, -1, 2, -2, -2 | -0,40 |

### B

| Variante | D inferior | Média inf. | D superior | Média sup. |
|---|---|---|---|---|
| principal — política 1.2.0, origem medida com o DS 3.4.1 (tela B), todos os juízes, resposta vigente da autora, Q1 a, Q3 a | -1, 0, -3, -1, 0, 0, -2, 2, -2, 2 | -0,50 | -1, 0, -3, -1, 1, 0, -2, 2, -2, 2 | -0,40 |
| S1 — política 1.1.0: observação com norma errada como falso, sem o crédito da R15 (nem o da Q1 a) | -1, 0, -3, -1, -1, 0, -2, 2, -2, 2 | -0,60 | -1, 0, -3, -1, 0, 0, -2, 2, -2, 2 | -0,50 |
| S2 — origem com o exemplo do DS 3.7.0 (22 casos da tela B passam a pagina; só a análise I) | -1, 0, -3, -1, 0, 0, -2, 2, -2, 2 | -0,50 | -1, 0, -3, -1, 1, 0, -2, 2, -2, 2 | -0,40 |
| S3 — só julgamentos cegos da autora: revisitas e correções após a orientação revertidas ao cego | -2, 0, -3, -2, -1, 0, -2, 2, -3, 2 | -0,90 | -2, 0, -3, -2, 0, 0, -2, 2, -3, 2 | -0,80 |
| S4 — só humano: classe ou vínculo decididos só por LLM (revisor novo, Q3) revertidos ao arquivo — ATENÇÃO: o arquivo é carregado mesmo quando a P7 o julga incompatível com a 1.2.0 (citação incerta, família sensível); a S4 mistura vereditos que a principal não aceitaria do arquivo | 0, 0, -4, -2, 0, 0, -2, 2, -2, 2 | -0,60 | 0, 0, -4, -2, 1, 0, -2, 2, -2, 2 | -0,50 |
| S5 — Q1 b: átomo creditado com regra nula vira observação e não credita | -1, 0, -3, -1, 1, 0, -2, 2, -2, 2 | -0,40 | -1, 0, -3, -1, 2, 0, -2, 2, -2, 2 | -0,30 |
| S6 — indeterminada conta como pagina na análise I | -1, 0, -3, -1, 0, 0, -2, 2, -2, 2 | -0,50 | -1, 0, -3, -1, 1, 0, -2, 2, -2, 2 | -0,40 |

</details>

## Histórico

D-111 adendo (regex aproximado, não recalculado): D = 1, 1, −3, 0, 1, 1, 0, 2, −2, 3; média +0,40; p = 0,60.
