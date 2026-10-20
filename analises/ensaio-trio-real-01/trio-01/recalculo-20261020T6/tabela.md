# Recálculo §8.5 — campanha `ensaio-trio-real-01` (tela solicitacao, referência 2.0.0)

> **ENSAIO fora da amostra (§7.4): nenhum número daqui é resultado; prova só que o caminho produz a tabela.**

Respostas congeladas: `adjudicada-20261020T1` (adjudicada, julgamentos 2e89713e…). Crédito por unidade pelo scorer do pacote; no desfecho por spec (D-102), uma spec conta quando ao menos uma unidade dela é confirmada. Valores "x [≤y]" = confirmado [máximo com os pendentes]. Todas as entradas com sha256 em `recalculo.json › entradas`.

Trios: trio-01 (ordem sem → ferramentas → com; linha de base lb-20261019-081057-solicitacao-82735e do slot p01-sem).

## Política 1.2.0 (principal)

### D_fc — ferramentas × com (primária)

D_fc = com − ferramentas · desfecho: specs sorteadas A-* (12) · δ = 2 specs

| trio | posição ferramentas/com | ferramentas | com | D_fc | estado |
|---|---|---|---|---|---|
| trio-01 | 2/3 | 7 | 6 | -1 | final |

- Campanha (FINAL): média -1, mediana -1, DP n/d; n efetivo 1, planejado 1
- Permutação exata por troca de sinais: p 1; Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: n efetivo 1 < 5
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: n efetivo 1 < 5).

### D_sf — sem × ferramentas (secundária)

D_sf = ferramentas − sem · desfecho: specs sorteadas A-* (12) · δ = 2 specs

| trio | posição sem/ferramentas | sem | ferramentas | D_sf | estado |
|---|---|---|---|---|---|
| trio-01 | 1/2 | 6 | 7 | 1 | final |

- Campanha (FINAL): média 1, mediana 1, DP n/d; n efetivo 1, planejado 1
- Permutação exata por troca de sinais: p 1; Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: n efetivo 1 < 5
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: n efetivo 1 < 5).

### D_sc — sem × com (secundária)

D_sc = com − sem · desfecho: specs sorteadas A-* (12) · δ = 2 specs

| trio | posição sem/com | sem | com | D_sc | estado |
|---|---|---|---|---|---|
| trio-01 | 1/3 | 6 | 6 | 0 | final |

- Campanha (FINAL): média 0, mediana 0, DP n/d; n efetivo 1, planejado 1
- Permutação exata por troca de sinais: p 1 (todos os D = 0: sem diferença); Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: n efetivo 1 < 5
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: n efetivo 1 < 5).

### Sensibilidade — unidades sorteadas A-* (14; por instância, sensibilidade)

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | trio-01: -2 | -2 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sf | trio-01: 2 | 2 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sc | trio-01: 0 | 0 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |

### À parte (nunca somada) — camada de página P-* (2 specs; à parte, nunca somada)

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | trio-01: 2 | 2 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sf | trio-01: 0 | 0 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sc | trio-01: 2 | 2 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |

## Política 1.1.0 (ao lado; sem R15 nem Q1 a)

Desfecho: specs sorteadas A-* (12).

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | trio-01: 0 | 0 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sf | trio-01: 1 | 1 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sc | trio-01: 1 | 1 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |

## S4' (crédito só de LLM contestado e não ratificado, tirado dos dois braços)

nenhuma ratificação da autora dada (--ratificacoes ausente): nenhum crédito ratificado. Contestados: 4; créditos retirados: 2 (T3-3a139fd43c ferramentas credita A-04; T3-a33fbfae10 lb-validator credita A-06).

| comparação | D por trio (S4', 1.2.0) | média | leitura | leitura com δ | muda a leitura? |
|---|---|---|---|---|---|
| D_fc | trio-01: 0 | 0 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) | não |
| D_sf | trio-01: 0 | 0 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) | não |
| D_sc | trio-01: 0 | 0 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) | não |

### Checagem S4: créditos só de LLM e sinal residual de braço, por braço (1.2.0)

| braço | créditos só de LLM | em cartão com sinal residual | contestados com crédito | retirados no S4' | ratificados | cartões com sinal / cartões (resíduo) |
|---|---|---|---|---|---|---|
| com | 8 | 6 | 0 | 0 | 0 | 10/14 |
| ferramentas | 7 | 1 | 1 | 1 | 0 | 4/10 |
| sem | 6 | 6 | 0 | 0 | 0 | 8/8 |

Resíduo: resíduo medido em outra passada sobre os mesmos cartões (casados pelo id original + sha256 do cartão): mede o que o juiz DAQUELA passada viu (a máscara dela), não necessariamente o desta.

## Origem medida (D-129, §8.6)

Origem: `adjudicada-20261020T1` (origem.json c7d59a27…). As tabelas acima já usam a classe com a origem medida.

| braço | violação página | violação DS | origem indeterminada | creditadas (1.2.0) |
|---|---|---|---|---|
| com | 9 | 1 | 1 | 8 |
| ferramentas | 7 | 2 | 1 | 7 |
| lb-axe | 2 | 0 | 0 | 2 |
| lb-validator | 4 | 2 | 0 | 4 |
| sem | 6 | 1 | 1 | 6 |

Mudanças pela origem medida (7): T3-09778607ea ferramentas violacao-origem-indeterminada → violacao-ds; T3-2d1f6d29d4 ferramentas violacao-origem-indeterminada → violacao-ds; T3-3bc0ed8647 com violacao-origem-indeterminada → violacao-pagina; T3-7364439440 sem violacao-origem-indeterminada → violacao-ds; T3-90e276f6be com violacao-origem-indeterminada → violacao-ds; T3-a398fdda54 lb-validator violacao-origem-indeterminada → violacao-ds; T3-c28819830d lb-validator violacao-origem-indeterminada → violacao-ds.
Crédito retirado por origem DS: nenhum. Candidatos do estrato 4 (origem DS): T3-09778607ea (ferramentas), T3-2d1f6d29d4 (ferramentas), T3-7364439440 (sem), T3-90e276f6be (com), T3-a398fdda54 (lb-validator), T3-c28819830d (lb-validator).
