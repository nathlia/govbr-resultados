# Reanálise retrospectiva NAT-74 — derivado nat74-retrospectiva-1.1.0

> **Retrospectiva · exploratória · mudança de medida.** O resultado oficial não muda: [RESULTADOS.md](../../../RESULTADOS.md), D-97, D-111 e D-112 (D-21).
> Toda mudança de precisão aqui é mudança de medida, não melhora do detector. Política principal `politica-normativa-1.2.0`; a 1.1.0 vai ao lado (S1).
> Os vereditos novos da fila T3 são de LLM (assistente, subagentes cegos por lote; D-130), salvo os materiais revistos pela autora.

## Variante principal, por campanha

FINAL-DERIVADO: sem pendente nos braços; D é pontual, com IC 95% e p. PROVISÓRIO: D sai como **limites verdadeiros** por par ([mín, máx]: o
mínimo do braço com contra o máximo do braço sem, e vice-versa); média, IC e p não são manchete.

| Campanha | Estado | D por par | Média | IC 95% | p (permutação) | Oficial (média · IC · p) | Pendentes sem / com |
|---|---|---|---|---|---|---|---|
| A Opus (`t7-tela-a-01`, unidade) | PROVISORIO | [-1, 1], [1, 3], [-1, 1], [-1, 1], -1, [-1, 1], -1, [-3, -2], 1, 0 | -0,70 a 0,40 | — | — | 0,00 · -0,70 a 0,70 · 1,0000 | 1 / 6 |
| A Sonnet (`t7b-sonnet-tela-a-01`, unidade) | FINAL-DERIVADO | 3, 2, 0, 0, -3, -3, -1, 2, -2, -2 | -0,40 | -1,70 a 0,90 | 0,6563 | -0,20 · -1,40 a 1,00 · 0,8828 | 0 / 0 |
| B (`t7-tela-b-01`, spec) | PROVISORIO | [-2, -1], [-1, 1], -3, -1, 1, [0, 1], [-4, -1], [1, 3], -2, [2, 3] | -0,90 a 0,10 | — | — | -0,70 · -1,70 a 0,40 · 0,3125 | 10 / 10 |

### Átomos creditados no arquivo e ainda pendentes, por braço

| Campanha | Braço | Pendentes creditados no arquivo | Motivos |
|---|---|---|---|

### M1: arquivo creditado com origem medida não-página

Átomo de arquivo creditado (defeito-do-gabarito) cuja origem medida é DS ou indeterminada segue a regra do átomo julgado: DS vira novo correto sem crédito (P3); indeterminada sai da análise I. Contagem por variante (campanha · braço):

- principal: A Opus 0 · A Sonnet 0 · B 0
- S1: A Opus 0 · A Sonnet 0 · B 0
- S2: A Opus 0 · A Sonnet 0 · B 0
- S3: A Opus 0 · A Sonnet 0 · B 0
- S4: A Opus 0 · A Sonnet 0 · B 0
- S5: A Opus 0 · A Sonnet 0 · B 0
- S6: A Opus 0 · A Sonnet 0 · B 0
- S7: A Opus 0 · A Sonnet 0 · B 0

<details><summary>Cenários (não são limites): sem crédito pendente × com crédito arquivado restaurado</summary>

Mudam os dois braços ao mesmo tempo; por isso o segundo pode baixar D (revisão independente, NAT-74). Média, IC e p só como registro.

| Campanha | Cenário | D por par | Média | IC 95% | p |
|---|---|---|---|---|---|
| A Opus | sem crédito pendente | -1, 1, -1, -1, -1, -1, -1, -3, 1, 0 | -0,70 | -1,40 a 0,00 | 0,1445 |
| A Opus | com crédito arquivado restaurado | -1, 1, -1, -1, -1, -1, -1, -3, 1, 0 | -0,70 | -1,40 a 0,00 | 0,1445 |
| A Sonnet | sem crédito pendente | 3, 2, 0, 0, -3, -3, -1, 2, -2, -2 | -0,40 | -1,70 a 0,90 | 0,6563 |
| A Sonnet | com crédito arquivado restaurado | 3, 2, 0, 0, -3, -3, -1, 2, -2, -2 | -0,40 | -1,70 a 0,90 | 0,6563 |
| B | sem crédito pendente | -2, 0, -3, -1, 1, 0, -2, 2, -2, 2 | -0,50 | -1,50 a 0,50 | 0,4922 |
| B | com crédito arquivado restaurado | -2, 0, -3, -1, 1, 0, -2, 2, -2, 2 | -0,50 | -1,50 a 0,50 | 0,4922 |

</details>

### S7: sem-evidencia → pendente

Átomos julgados na T3 cujo cartão traz a sinalização `sem-evidencia` (nenhuma evidência resolvida, nenhum fato medido) e cujo fato verdadeiro é só inferido viram pendentes (R9): os juízes trataram fatos só de texto de modos diferentes.

| Campanha | Afetados por braço | D principal | D na S7 |
|---|---|---|---|
| A Opus | sem 2 | [-1, 1], [1, 3], [-1, 1], [-1, 1], -1, [-1, 1], -1, [-3, -2], 1, 0 | [-1, 1], [1, 3], [-1, 1], [-1, 1], -1, [-1, 1], -1, [-3, -2], 1, [-2, 3] |
| A Sonnet | sem 2 | 3, 2, 0, 0, -3, -3, -1, 2, -2, -2 | 3, 2, 0, 0, -3, -3, [-3, 0], 2, -2, -2 |
| B | com 12, sem 7 | [-2, -1], [-1, 1], -3, -1, 1, [0, 1], [-4, -1], [1, 3], -2, [2, 3] | [-2, -1], [-1, 1], -3, [-1, 0], [0, 4], [0, 1], [-5, -1], [1, 3], [-2, -1], [2, 4] |

## Fila T3 residual desta versão (E6)

| Campanha | Braço | T1 | julgado | T2 | T3 | pendente |
|---|---|---|---|---|---|---|
| A Opus | com | 61 | 54 | 0 | 0 | 0 |
| A Opus | lb-axe | 8 | 12 | 0 | 0 | 0 |
| A Opus | lb-validator | 12 | 48 | 0 | 0 | 0 |
| A Opus | sem | 57 | 41 | 0 | 0 | 0 |
| A Sonnet | com | 35 | 62 | 0 | 0 | 0 |
| A Sonnet | lb-axe | 7 | 13 | 0 | 0 | 0 |
| A Sonnet | lb-validator | 22 | 38 | 0 | 0 | 0 |
| A Sonnet | sem | 32 | 41 | 0 | 0 | 0 |
| B | com | 178 | 145 | 0 | 2 | 0 |
| B | lb-axe | 390 | 90 | 0 | 0 | 0 |
| B | lb-validator | 112 | 498 | 0 | 0 | 0 |
| B | sem | 200 | 127 | 0 | 6 | 0 |

## Linhas de base

B-16 (axe image-alt, tela B): confirmada em 10/10 pares. B-16 resolvida, mas a LB axe B segue PROVISÓRIA: há outros átomos do axe B pendentes pela triagem; o recall dela não é anunciado.

<details><summary>Sensibilidades (S1–S6)</summary>

### A Opus

| Variante | Estado | D por par | Média |
|---|---|---|---|
| principal — política 1.2.0, origem medida com o DS 3.4.1 (tela B), todos os juízes, resposta vigente da autora, Q1 a, Q3 a | PROVISORIO | [-1, 1], [1, 3], [-1, 1], [-1, 1], -1, [-1, 1], -1, [-3, -2], 1, 0 | -0,70 a 0,40 |
| S1 — política 1.1.0: observação com norma errada como falso, sem o crédito da R15 (nem o da Q1 a) | PROVISORIO | [0, 2], [1, 3], [0, 2], [0, 2], 0, [0, 2], 0, [-2, -1], 1, 0 | 0,00 a 1,10 |
| S2 — origem com o exemplo do DS 3.7.0 (22 casos da tela B passam a pagina; só a análise I) | PROVISORIO | [-1, 1], [1, 3], [-1, 1], [-1, 1], -1, [-1, 1], -1, [-3, -2], 1, 0 | -0,70 a 0,40 |
| S3 — só julgamentos cegos da autora: revisitas e correções após a orientação revertidas ao cego | PROVISORIO | [-1, 1], [1, 3], [-1, 1], [-1, 1], -1, [-1, 1], -1, [-3, -2], 2, 0 | -0,60 a 0,50 |
| S4 — só humano: classe ou vínculo decididos só por LLM (revisor novo, Q3) revertidos ao arquivo — ATENÇÃO: o arquivo é carregado mesmo quando a P7 o julga incompatível com a 1.2.0 (citação incerta, família sensível); a S4 mistura vereditos que a principal não aceitaria do arquivo | FINAL-DERIVADO | 0, 2, 0, 1, -1, 0, -1, -2, 0, 0 | -0,10 |
| S5 — Q1 b: átomo creditado com regra nula vira observação e não credita | PROVISORIO | [0, 2], [1, 3], [0, 2], [0, 2], 0, [0, 2], 0, [-2, -1], 1, 0 | 0,00 a 1,10 |
| S6 — indeterminada conta como pagina na análise I | PROVISORIO | [-1, 1], [1, 3], [-1, 1], [-1, 1], -1, [-1, 1], -1, [-3, -2], 1, 0 | -0,70 a 0,40 |
| S7 — sem-evidencia → pendente: átomo julgado na T3 cujo cartão traz a sinalização sem-evidencia (nenhuma evidência resolvida) e nenhum fato medido, com fato verdadeiro só inferido, fica pendente (R9) | PROVISORIO | [-1, 1], [1, 3], [-1, 1], [-1, 1], -1, [-1, 1], -1, [-3, -2], 1, [-2, 3] | -0,90 a 0,70 |

### A Sonnet

| Variante | Estado | D por par | Média |
|---|---|---|---|
| principal — política 1.2.0, origem medida com o DS 3.4.1 (tela B), todos os juízes, resposta vigente da autora, Q1 a, Q3 a | FINAL-DERIVADO | 3, 2, 0, 0, -3, -3, -1, 2, -2, -2 | -0,40 |
| S1 — política 1.1.0: observação com norma errada como falso, sem o crédito da R15 (nem o da Q1 a) | FINAL-DERIVADO | 0, -1, 1, 0, -4, -1, 0, 2, -2, -2 | -0,70 |
| S2 — origem com o exemplo do DS 3.7.0 (22 casos da tela B passam a pagina; só a análise I) | FINAL-DERIVADO | 3, 2, 0, 0, -3, -3, -1, 2, -2, -2 | -0,40 |
| S3 — só julgamentos cegos da autora: revisitas e correções após a orientação revertidas ao cego | FINAL-DERIVADO | 3, 2, 0, 1, -2, -3, -1, 2, -2, -2 | -0,20 |
| S4 — só humano: classe ou vínculo decididos só por LLM (revisor novo, Q3) revertidos ao arquivo — ATENÇÃO: o arquivo é carregado mesmo quando a P7 o julga incompatível com a 1.2.0 (citação incerta, família sensível); a S4 mistura vereditos que a principal não aceitaria do arquivo | PROVISORIO | 3, 3, 0, 0, -3, -3, -1, 2, -2, -2 | -0,30 a -0,30 |
| S5 — Q1 b: átomo creditado com regra nula vira observação e não credita | FINAL-DERIVADO | 0, -1, 1, 0, -4, -1, 0, 2, -2, -2 | -0,70 |
| S6 — indeterminada conta como pagina na análise I | FINAL-DERIVADO | 3, 2, 0, 0, -3, -3, -1, 2, -2, -2 | -0,40 |
| S7 — sem-evidencia → pendente: átomo julgado na T3 cujo cartão traz a sinalização sem-evidencia (nenhuma evidência resolvida) e nenhum fato medido, com fato verdadeiro só inferido, fica pendente (R9) | PROVISORIO | 3, 2, 0, 0, -3, -3, [-3, 0], 2, -2, -2 | -0,60 a -0,30 |

### B

| Variante | Estado | D por par | Média |
|---|---|---|---|
| principal — política 1.2.0, origem medida com o DS 3.4.1 (tela B), todos os juízes, resposta vigente da autora, Q1 a, Q3 a | PROVISORIO | [-2, -1], [-1, 1], -3, -1, 1, [0, 1], [-4, -1], [1, 3], -2, [2, 3] | -0,90 a 0,10 |
| S1 — política 1.1.0: observação com norma errada como falso, sem o crédito da R15 (nem o da Q1 a) | PROVISORIO | [-2, -1], [-1, 1], -3, -1, 0, [0, 1], [-4, -1], [1, 3], -2, [2, 3] | -1,00 a 0,00 |
| S2 — origem com o exemplo do DS 3.7.0 (22 casos da tela B passam a pagina; só a análise I) | PROVISORIO | [-2, -1], [-1, 1], -3, -1, 1, [0, 1], [-4, -1], [1, 3], -2, [2, 3] | -0,90 a 0,10 |
| S3 — só julgamentos cegos da autora: revisitas e correções após a orientação revertidas ao cego | PROVISORIO | -3, [-1, 0], -3, -2, 0, 0, [-4, -2], [1, 2], -3, [2, 3] | -1,30 a -0,80 |
| S4 — só humano: classe ou vínculo decididos só por LLM (revisor novo, Q3) revertidos ao arquivo — ATENÇÃO: o arquivo é carregado mesmo quando a P7 o julga incompatível com a 1.2.0 (citação incerta, família sensível); a S4 mistura vereditos que a principal não aceitaria do arquivo | PROVISORIO | [0, 1], [-1, 1], -4, -2, 1, [0, 1], [-4, 2], [1, 3], -2, 2 | -0,90 a 0,30 |
| S5 — Q1 b: átomo creditado com regra nula vira observação e não credita | PROVISORIO | [-2, -1], [-1, 1], -3, -1, 2, [0, 1], [-4, -1], [1, 3], -2, [2, 3] | -0,80 a 0,20 |
| S6 — indeterminada conta como pagina na análise I | PROVISORIO | [-2, -1], [-1, 1], -3, -1, 1, [0, 1], [-4, -1], [1, 3], -2, [2, 3] | -0,90 a 0,10 |
| S7 — sem-evidencia → pendente: átomo julgado na T3 cujo cartão traz a sinalização sem-evidencia (nenhuma evidência resolvida) e nenhum fato medido, com fato verdadeiro só inferido, fica pendente (R9) | PROVISORIO | [-2, -1], [-1, 1], -3, [-1, 0], [0, 4], [0, 1], [-5, -1], [1, 3], [-2, -1], [2, 4] | -1,10 a 0,70 |

</details>

## Histórico

D-111 adendo (regex aproximado, não recalculado): D = 1, 1, −3, 0, 1, 1, 0, 2, −2, 3; média +0,40; p = 0,60.
