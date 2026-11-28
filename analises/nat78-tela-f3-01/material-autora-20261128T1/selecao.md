# Seleção para a autora (§8.4) — `nat78-tela-f3-01`

> **Interno: não entregar à autora** (traz braço e estrato).

Teto 10, cotas 3/2/2/2/1; semente `campanha.design.seed=20261143`; D base por trio (ferramentas-x-com): p01 0, p02 0, p03 0, p04 0, p05 0, p06 0, p07 0, p08 0, p09 0.

| estrato | candidatos (por braço) | cota | recebida | selecionados | repassada ao 1 | sem uso |
|---|---|---|---|---|---|---|
| 1. o veredito muda o D_fc de um trio em ≥ 1 | 0 {} | 3 | 0 | 0 | — | 3 |
| 2. alegação julgada falsa (FP) | 121 {"com":7,"ferramentas":12,"lb-axe":63,"lb-validator":36,"sem":3} | 2 | — | 2 | 0 | — |
| 3. achado correto novo, fora da referência | 1019 {"com":206,"ferramentas":152,"lb-axe":369,"lb-validator":144,"sem":148} | 2 | — | 2 | 0 | — |
| 4. origem DS (defeito atribuído ao DS, D-129) | 9 {"lb-validator":9} | 2 | — | 2 | 0 | — |
| 5. achado de linha de base (axe, validator não guiado, Stylelint) | 387 {"lb-axe":243,"lb-validator":144} | 1 | — | 1 | 0 | — |

| caso | cartão | braço | estrato | por quê | desfecho da passada |
|---|---|---|---|---|---|
| R-01 | T3-4108c85341 | ferramentas | 2 | erro-normativo (veredito falso na 1.2.0) | sem-violacao |
| R-02 | T3-672e54851a | com | 2 | erro-normativo (veredito falso na 1.2.0) | sem-violacao |
| R-03 | T3-2c5fd343ca | lb-validator | 5 | linha de base lb-validator | indisponivel |
| R-04 | T3-3241ad2127 | lb-validator | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-05 | T3-4f63a1d977 | lb-validator | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-06 | T3-5ed33a7f51 | com | 3 | violacao-pagina sem crédito (fora da referência) | achado-novo |
| R-07 | T3-14a13c15fc | ferramentas | 3 | violacao-pagina sem crédito (fora da referência) | achado-novo |

julgado só por LLM: 2207 cartão(ões) (lista em `selecao.json › julgadoSoPorLLM`).
