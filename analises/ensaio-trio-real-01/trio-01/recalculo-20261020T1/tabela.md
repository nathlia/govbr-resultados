# Recálculo §8.5 — campanha `ensaio-trio-real-01` (tela solicitacao, referência 2.0.0)

> **ENSAIO fora da amostra (§7.4): nenhum número daqui é resultado; prova só que o caminho produz a tabela.**

Respostas congeladas: `primeira-passada-20261019T4` (1ª passada, julgamentos ac524fc0…). Crédito por unidade pelo scorer do pacote; conta-se cada unidade confirmada. Valores "x [≤y]" = confirmado [máximo com os pendentes]. Todas as entradas com sha256 em `recalculo.json › entradas`.

Trios: trio-01 (ordem sem → ferramentas → com; linha de base lb-20261019-081057-solicitacao-82735e do slot p01-sem).

## Política 1.2.0 (principal)

### D_fc — ferramentas × com (primária)

D_fc = com − ferramentas · desfecho: unidades sorteadas A-* (14) · δ = 2 unidades

| trio | posição ferramentas/com | ferramentas | com | D_fc | estado |
|---|---|---|---|---|---|
| trio-01 | 2/3 | 9 | 7 | -2 | final |

- Campanha (FINAL): média -2, mediana -2, DP n/d; n efetivo 1, planejado 1
- Permutação exata por troca de sinais: p 1; Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: n efetivo 1 < 5
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: n efetivo 1 < 5).

### D_sf — sem × ferramentas (secundária)

D_sf = ferramentas − sem · desfecho: unidades sorteadas A-* (14) · δ = 2 unidades

| trio | posição sem/ferramentas | sem | ferramentas | D_sf | estado |
|---|---|---|---|---|---|
| trio-01 | 1/2 | 7 | 9 | 2 | final |

- Campanha (FINAL): média 2, mediana 2, DP n/d; n efetivo 1, planejado 1
- Permutação exata por troca de sinais: p 1; Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: n efetivo 1 < 5
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: n efetivo 1 < 5).

### D_sc — sem × com (secundária)

D_sc = com − sem · desfecho: unidades sorteadas A-* (14) · δ = 2 unidades

| trio | posição sem/com | sem | com | D_sc | estado |
|---|---|---|---|---|---|
| trio-01 | 1/3 | 7 | 7 | 0 | final |

- Campanha (FINAL): média 0, mediana 0, DP n/d; n efetivo 1, planejado 1
- Permutação exata por troca de sinais: p 1 (todos os D = 0: sem diferença); Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: n efetivo 1 < 5
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: n efetivo 1 < 5).

### Camada de página (à parte, nunca somada) — camada de página P-* (2 unidades; à parte, nunca somada)

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | trio-01: 2 | 2 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sf | trio-01: 0 | 0 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sc | trio-01: 2 | 2 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |

## Política 1.1.0 (ao lado; sem R15 nem Q1 a)

Desfecho: unidades sorteadas A-* (14).

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | trio-01: -1 | -1 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sf | trio-01: 2 | 2 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sc | trio-01: 1 | 1 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |

## S4' (crédito só de LLM contestado e não ratificado, tirado dos dois braços)

Indisponível: primeira-passada-20261019T4: sem contestados.json (passada sem adjudicação aplicada); S4' indisponível

### Checagem S4: créditos só de LLM e sinal residual de braço, por braço (1.2.0)

| braço | créditos só de LLM | em cartão com sinal residual | contestados com crédito | retirados no S4' | ratificados | cartões com sinal / cartões (resíduo) |
|---|---|---|---|---|---|---|
| com | 8 | 6 | 0 | 0 | 0 | 10/14 |
| ferramentas | 7 | 1 | 0 | 0 | 0 | 4/10 |
| sem | 6 | 6 | 0 | 0 | 0 | 8/8 |

Resíduo: resíduo medido em outra passada sobre os mesmos cartões (casados pelo id original + sha256 do cartão): mede o que o juiz DAQUELA passada viu (a máscara dela), não necessariamente o desta.
