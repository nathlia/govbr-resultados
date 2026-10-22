# Seleção para a autora (§8.4) — `ensaio-trio-real-02`

> **Interno: não entregar à autora** (traz braço e estrato).

> ENSAIO fora da amostra: nenhum número daqui é resultado.

Teto 10, cotas 3/2/2/2/1; semente `campanha.design.seed=20261021`; D base por trio (ferramentas-x-com): p01 0.

| estrato | candidatos (por braço) | cota | recebida | selecionados | repassada ao 1 | sem uso |
|---|---|---|---|---|---|---|
| 1. o veredito muda o D_fc de um trio em ≥ 1 | 13 {"com":7,"ferramentas":6} | 3 | 1 | 4 | — | 0 |
| 2. alegação julgada falsa (FP) | 1 {"com":1} | 2 | — | 1 | 1 | — |
| 3. achado correto novo, fora da referência | 3 {"com":2,"ferramentas":1} | 2 | — | 2 | 0 | — |
| 4. origem DS (defeito atribuído ao DS, D-129) | 8 {"com":1,"ferramentas":4,"sem":3} | 2 | — | 2 | 0 | — |
| 5. achado de linha de base (axe, validator não guiado, Stylelint) | 8 {"lb-axe":2,"lb-validator":6} | 1 | — | 1 | 0 | — |

| caso | cartão | braço | estrato | por quê | desfecho da passada |
|---|---|---|---|---|---|
| R-01 | T3-daba4948d6 | ferramentas | 1 | sem o crédito A-04, D_fc 0 → 1 | credita:A-04 |
| R-02 | T3-a2873b51d1 | ferramentas | 3 | violacao-origem-indeterminada sem crédito (fora da referência) | achado-novo |
| R-03 | T3-fe2fdf596a | com | 3 | violacao-pagina sem crédito (fora da referência) | achado-novo |
| R-04 | T3-df335eafa2 | ferramentas | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-05 | T3-139da6096f | com | 2 | erro-normativo (veredito falso na 1.2.0) | sem-violacao |
| R-06 | T3-ea424758db | com | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-07 | T3-4f85e957f9 | com | 1 | sem o crédito A-06, D_fc 0 → -1 | credita:A-06 |
| R-08 | T3-ee02a94bec | ferramentas | 1 | sem o crédito A-02, D_fc 0 → 1 | credita:A-02 |
| R-09 | T3-d4af324a58 | lb-validator | 5 | linha de base lb-validator | indisponivel |
| R-10 | T3-a1d018d2f9 | com | 1 | sem o crédito A-03, D_fc 0 → -1 | credita:A-03 |

julgado só por LLM: 36 cartão(ões) (lista em `selecao.json › julgadoSoPorLLM`).
