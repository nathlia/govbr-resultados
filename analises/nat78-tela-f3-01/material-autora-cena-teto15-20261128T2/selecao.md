# Seleção para a autora (§8.4) — `nat78-tela-f3-01`

> **Interno: não entregar à autora** (traz braço e estrato).

Estrato 1 medido com a regra de cena `cena-pela-spec-1.0.0` (opção --cena-pela-spec): os cartões com segmentos entram no D do trio.

Teto 15, cotas 5/3/3/2/2; semente `campanha.design.seed=20261143`; D base por trio (ferramentas-x-com): p01 2, p02 3, p03 1, p04 2, p05 5, p06 3, p07 6, p08 2, p09 0.

| estrato | candidatos (por braço) | cota | recebida | selecionados | repassada ao 1 | sem uso |
|---|---|---|---|---|---|---|
| 1. o veredito muda o D_fc de um trio em ≥ 1 | 60 {"com":41,"ferramentas":19} | 5 | 0 | 5 | — | 0 |
| 2. alegação julgada falsa (FP) | 121 {"com":7,"ferramentas":12,"lb-axe":63,"lb-validator":36,"sem":3} | 3 | — | 3 | 0 | — |
| 3. achado correto novo, fora da referência | 1042 {"com":213,"ferramentas":159,"lb-axe":369,"lb-validator":144,"sem":157} | 3 | — | 3 | 0 | — |
| 4. origem DS (defeito atribuído ao DS, D-129) | 9 {"lb-validator":9} | 2 | — | 2 | 0 | — |
| 5. achado de linha de base (axe, validator não guiado, Stylelint) | 387 {"lb-axe":243,"lb-validator":144} | 2 | — | 2 | 0 | — |

| caso | cartão | braço | estrato | por quê | desfecho da passada |
|---|---|---|---|---|---|
| R-01 | T3-f89df1b643 | ferramentas | 3 | violacao-pagina sem crédito (fora da referência) | achado-novo |
| R-02 | T3-4108c85341 | ferramentas | 2 | erro-normativo (veredito falso na 1.2.0) | sem-violacao |
| R-03 | T3-672e54851a | com | 2 | erro-normativo (veredito falso na 1.2.0) | sem-violacao |
| R-04 | T3-2c5fd343ca | lb-validator | 5 | linha de base lb-validator | indisponivel |
| R-05 | T3-2ad60ca52c | ferramentas | 1 | sem o crédito F3-04, D_fc 2 → 3 | credita:F3-04 |
| R-06 | T3-87592dce87 | lb-validator | 5 | linha de base lb-validator | indisponivel |
| R-07 | T3-3241ad2127 | lb-validator | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-08 | T3-4f63a1d977 | lb-validator | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-09 | T3-5ed33a7f51 | com | 3 | violacao-pagina sem crédito (fora da referência) | achado-novo |
| R-10 | T3-23552f4875 | com | 1 | sem o crédito F3-06, D_fc 0 → -1 | credita:F3-06 |
| R-11 | T3-7fb8e96548 | ferramentas | 1 | sem o crédito F3-01, D_fc 0 → 1 | credita:F3-01 |
| R-12 | T3-14a13c15fc | ferramentas | 3 | violacao-pagina sem crédito (fora da referência) | achado-novo |
| R-13 | T3-1f3786347f | com | 1 | sem o crédito F3-05, D_fc 5 → 4 | credita:F3-05 |
| R-14 | T3-dfeceb6789 | com | 2 | erro-normativo (veredito falso na 1.2.0) | sem-violacao |
| R-15 | T3-545c8cfd92 | com | 1 | sem o crédito F3-02, D_fc 2 → 1 | credita:F3-02 |

julgado só por LLM: 2199 cartão(ões) (lista em `selecao.json › julgadoSoPorLLM`).
