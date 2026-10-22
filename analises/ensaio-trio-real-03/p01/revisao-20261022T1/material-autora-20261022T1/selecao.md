# Seleção para a autora (§8.4) — `ensaio-trio-real-03`

> **Interno: não entregar à autora** (traz braço e estrato).

> ENSAIO fora da amostra: nenhum número daqui é resultado.

Teto 10, cotas 3/2/2/2/1; semente `campanha.design.seed=20261022`; D base por trio (ferramentas-x-com): p01 -2.

| estrato | candidatos (por braço) | cota | recebida | selecionados | repassada ao 1 | sem uso |
|---|---|---|---|---|---|---|
| 1. o veredito muda o D_fc de um trio em ≥ 1 | 12 {"com":5,"ferramentas":7} | 3 | 2 | 5 | — | 0 |
| 2. alegação julgada falsa (FP) | 0 {} | 2 | — | 0 | 2 | — |
| 3. achado correto novo, fora da referência | 4 {"com":2,"ferramentas":1,"sem":1} | 2 | — | 2 | 0 | — |
| 4. origem DS (defeito atribuído ao DS, D-129) | 4 {"com":1,"ferramentas":1,"sem":2} | 2 | — | 2 | 0 | — |
| 5. achado de linha de base (axe, validator não guiado, Stylelint) | 8 {"lb-axe":2,"lb-validator":6} | 1 | — | 1 | 0 | — |

| caso | cartão | braço | estrato | por quê | desfecho da passada |
|---|---|---|---|---|---|
| R-01 | T3-701362b5fe | ferramentas | 1 | sem o crédito A-01, D_fc -2 → -1 | credita:A-01 |
| R-02 | T3-41aad5b058 | lb-axe | 5 | linha de base lb-axe | credita:A-09 |
| R-03 | T3-cc59e61f81 | ferramentas | 1 | sem o crédito A-12, D_fc -2 → -1 | credita:A-12 |
| R-04 | T3-c169471751 | com | 1 | sem o crédito A-04, D_fc -2 → -3 | credita:A-04 |
| R-05 | T3-8234420491 | com | 3 | violacao-pagina sem crédito (fora da referência) | achado-novo |
| R-06 | T3-c4551d2639 | ferramentas | 3 | violacao-origem-indeterminada sem crédito (fora da referência) | achado-novo |
| R-07 | T3-96c4e2d8c2 | com | 1 | sem o crédito A-09, D_fc -2 → -3 | credita:A-09 |
| R-08 | T3-dd6c562602 | com | 1 | sem o crédito A-02, D_fc -2 → -3 | credita:A-02 |
| R-09 | T3-9b6a016ae8 | ferramentas | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-10 | T3-217f140318 | com | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |

julgado só por LLM: 26 cartão(ões) (lista em `selecao.json › julgadoSoPorLLM`).
