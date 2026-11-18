# Seleção para a autora (§8.4) — `nat78-tela-e-01`

> **Interno: não entregar à autora** (traz braço e estrato).

Teto 10, cotas 3/2/2/2/1; semente `campanha.design.seed=20261139`; D base por trio (ferramentas-x-com): p01 1, p02 0, p03 0, p04 0, p05 1, p06 1, p07 1, p08 0, p09 1.

| estrato | candidatos (por braço) | cota | recebida | selecionados | repassada ao 1 | sem uso |
|---|---|---|---|---|---|---|
| 1. o veredito muda o D_fc de um trio em ≥ 1 | 85 {"com":45,"ferramentas":40} | 3 | 2 | 5 | — | 0 |
| 2. alegação julgada falsa (FP) | 0 {} | 2 | — | 0 | 2 | — |
| 3. achado correto novo, fora da referência | 69 {"com":3,"ferramentas":4,"lb-axe":54,"sem":8} | 2 | — | 2 | 0 | — |
| 4. origem DS (defeito atribuído ao DS, D-129) | 9 {"ferramentas":5,"sem":4} | 2 | — | 2 | 0 | — |
| 5. achado de linha de base (axe, validator não guiado, Stylelint) | 63 {"lb-axe":54,"lb-validator":9} | 1 | — | 1 | 0 | — |

| caso | cartão | braço | estrato | por quê | desfecho da passada |
|---|---|---|---|---|---|
| R-01 | T3-a36734484f | com | 3 | violacao-pagina sem crédito (fora da referência) | achado-novo |
| R-02 | T3-36141d6015 | com | 1 | sem o crédito U-05, D_fc 1 → 0 | credita:U-05 |
| R-03 | T3-8159f0df99 | ferramentas | 3 | violacao-origem-indeterminada sem crédito (fora da referência) | achado-novo |
| R-04 | T3-57e2b2dbc1 | com | 1 | sem o crédito U-02, D_fc 1 → 0 | credita:U-02 |
| R-05 | T3-342dde4b94 | ferramentas | 1 | sem o crédito U-03, D_fc 0 → 1 | credita:U-03 |
| R-06 | T3-33ad71820c | ferramentas | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-07 | T3-61bf0bd235 | ferramentas | 1 | sem o crédito U-02, D_fc 0 → 1 | credita:U-02 |
| R-08 | T3-fa9dd92151 | ferramentas | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-09 | T3-f5f26819bf | lb-axe | 5 | linha de base lb-axe | credita:U-07 |
| R-10 | T3-5912ef75ca | ferramentas | 1 | sem o crédito U-02, D_fc 1 → 2 | credita:U-02 |

julgado só por LLM: 372 cartão(ões) (lista em `selecao.json › julgadoSoPorLLM`).
