# Seleção para a autora (§8.4) — `ensaio-trio-real-01`

> **Interno: não entregar à autora** (traz braço e estrato).

> ENSAIO fora da amostra: nenhum número daqui é resultado.

Teto 10, cotas 3/2/2/2/1; semente `sem-semente-declarada|ensaio-trio-real-01`; D base por trio (ferramentas-x-com): trio-01 -1.

| estrato | candidatos (por braço) | cota | recebida | selecionados | repassada ao 1 | sem uso |
|---|---|---|---|---|---|---|
| 1. o veredito muda o D_fc de um trio em ≥ 1 | 15 {"com":8,"ferramentas":7} | 3 | 2 | 5 | — | 0 |
| 2. alegação julgada falsa (FP) | 0 {} | 2 | — | 0 | 2 | — |
| 3. achado correto novo, fora da referência | 4 {"com":2,"ferramentas":1,"sem":1} | 2 | — | 2 | 0 | — |
| 4. origem DS (defeito atribuído ao DS, D-129) | 6 {"com":1,"ferramentas":2,"lb-validator":2,"sem":1} | 2 | — | 2 | 0 | — |
| 5. achado de linha de base (axe, validator não guiado, Stylelint) | 6 {"lb-axe":2,"lb-validator":4} | 1 | — | 1 | 0 | — |

| caso | cartão | braço | estrato | por quê | desfecho da passada |
|---|---|---|---|---|---|
| R-01 | T3-cdc837f082 | com | 3 | violacao-origem-indeterminada sem crédito (fora da referência) | achado-novo |
| R-02 | T3-af30a2d09a | com | 1 | sem o crédito A-03, D_fc -1 → -2 | credita:A-03 |
| R-03 | T3-f0d1b88ac3 | com | 1 | creditando A-04, D_fc -1 → 0 | indisponivel |
| R-04 | T3-3a139fd43c | ferramentas | 1 | sem o crédito A-04, D_fc -1 → 0 | credita:A-04 |
| R-05 | T3-90e276f6be | com | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-06 | T3-a33fbfae10 | lb-validator | 5 | linha de base lb-validator | credita:A-06 |
| R-07 | T3-f06d6e8017 | ferramentas | 1 | sem o crédito A-11, D_fc -1 → 0 | credita:A-11 |
| R-08 | T3-9b902112b5 | com | 1 | creditando A-06, D_fc -1 → 0 | sem-violacao |
| R-09 | T3-09778607ea | ferramentas | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-10 | T3-30e07cb831 | ferramentas | 3 | violacao-origem-indeterminada sem crédito (fora da referência) | achado-novo |

julgado só por LLM: 30 cartão(ões) (lista em `selecao.json › julgadoSoPorLLM`).
