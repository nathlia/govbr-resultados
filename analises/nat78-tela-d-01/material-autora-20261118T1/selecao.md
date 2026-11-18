# Seleção para a autora (§8.4) — `nat78-tela-d-01`

> **Interno: não entregar à autora** (traz braço e estrato).

Teto 10, cotas 3/2/2/2/1; semente `campanha.design.seed=20261138`; D base por trio (ferramentas-x-com): p01 1, p02 2, p03 2, p04 2, p05 2, p06 1, p07 2, p08 2, p09 2.

| estrato | candidatos (por braço) | cota | recebida | selecionados | repassada ao 1 | sem uso |
|---|---|---|---|---|---|---|
| 1. o veredito muda o D_fc de um trio em ≥ 1 | 98 {"com":56,"ferramentas":42} | 3 | 0 | 3 | — | 0 |
| 2. alegação julgada falsa (FP) | 26 {"com":3,"ferramentas":14,"lb-axe":9} | 2 | — | 2 | 0 | — |
| 3. achado correto novo, fora da referência | 570 {"com":205,"ferramentas":166,"lb-axe":9,"lb-validator":27,"sem":163} | 2 | — | 2 | 0 | — |
| 4. origem DS (defeito atribuído ao DS, D-129) | 9 {"lb-validator":9} | 2 | — | 2 | 0 | — |
| 5. achado de linha de base (axe, validator não guiado, Stylelint) | 180 {"lb-axe":171,"lb-validator":9} | 1 | — | 1 | 0 | — |

| caso | cartão | braço | estrato | por quê | desfecho da passada |
|---|---|---|---|---|---|
| R-01 | T3-0d8abbddf5 | ferramentas | 1 | sem o crédito D-04, D_fc 2 → 3 | credita:D-04 |
| R-02 | T3-82831d4fb0 | ferramentas | 2 | erro-normativo (veredito falso na 1.2.0) | sem-violacao |
| R-03 | T3-e700a1c485 | com | 3 | violacao-origem-indeterminada sem crédito (fora da referência) | achado-novo |
| R-04 | T3-a1350fc20a | lb-validator | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-05 | T3-4ee2e34ba5 | ferramentas | 1 | creditando D-05, D_fc 2 → 1 | indisponivel |
| R-06 | T3-2be7e65738 | lb-axe | 5 | linha de base lb-axe | credita:D-04 |
| R-07 | T3-c7bbc5b179 | com | 2 | erro-normativo (veredito falso na 1.2.0) | sem-violacao |
| R-08 | T3-dacf71f76e | lb-validator | 4 | violacao-ds (origem medida ds-entregue) | violacao-ds |
| R-09 | T3-3101be6dd0 | ferramentas | 3 | violacao-pagina sem crédito (fora da referência) | achado-novo |
| R-10 | T3-123e11680a | com | 1 | sem o crédito D-10, D_fc 2 → 1 | credita:D-10 |

julgado só por LLM: 1298 cartão(ões) (lista em `selecao.json › julgadoSoPorLLM`).
