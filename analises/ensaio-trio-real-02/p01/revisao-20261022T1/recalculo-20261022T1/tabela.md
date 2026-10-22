# Recálculo §8.5 — campanha `ensaio-trio-real-02` (tela solicitacao, referência 2.0.0)

> **ENSAIO fora da amostra (§7.4): nenhum número daqui é resultado; prova só que o caminho produz a tabela.**

Respostas congeladas: `adjudicada-20261022T1` (adjudicada, julgamentos ee5e9c07…). Crédito por unidade pelo scorer do pacote; no desfecho por spec (D-102), uma spec conta quando ao menos uma unidade dela é confirmada. Valores "x [≤y]" = confirmado [máximo com os pendentes]. Todas as entradas com sha256 em `recalculo.json › entradas`.

Trios: p01 (ordem sem → ferramentas → com; linha de base lb-20261021-151847-solicitacao-050031 do slot p01-sem).

## Política 1.2.0 (principal)

### D_fc — ferramentas × com (primária)

D_fc = com − ferramentas · desfecho: specs sorteadas A-* (12) · δ = 2 specs

| trio | posição ferramentas/com | ferramentas | com | D_fc | estado |
|---|---|---|---|---|---|
| p01 | 2/3 | 7 | 7 | 0 | final |

- Campanha (FINAL): média 0, mediana 0, DP n/d; n efetivo 1, planejado 1
- Permutação exata por troca de sinais: p 1 (todos os D = 0: sem diferença); Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: n efetivo 1 < 5
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: n efetivo 1 < 5).

### D_sf — sem × ferramentas (secundária)

D_sf = ferramentas − sem · desfecho: specs sorteadas A-* (12) · δ = 2 specs

| trio | posição sem/ferramentas | sem | ferramentas | D_sf | estado |
|---|---|---|---|---|---|
| p01 | 1/2 | 7 | 7 | 0 | final |

- Campanha (FINAL): média 0, mediana 0, DP n/d; n efetivo 1, planejado 1
- Permutação exata por troca de sinais: p 1 (todos os D = 0: sem diferença); Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: n efetivo 1 < 5
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: n efetivo 1 < 5).

### D_sc — sem × com (secundária)

D_sc = com − sem · desfecho: specs sorteadas A-* (12) · δ = 2 specs

| trio | posição sem/com | sem | com | D_sc | estado |
|---|---|---|---|---|---|
| p01 | 1/3 | 7 | 7 | 0 | final |

- Campanha (FINAL): média 0, mediana 0, DP n/d; n efetivo 1, planejado 1
- Permutação exata por troca de sinais: p 1 (todos os D = 0: sem diferença); Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: n efetivo 1 < 5
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: n efetivo 1 < 5).

### Sensibilidade — unidades sorteadas A-* (14; por instância, sensibilidade)

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | p01: 0 | 0 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sf | p01: 1 | 1 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sc | p01: 1 | 1 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |

### À parte (nunca somada) — camada de página P-* (2 specs; à parte, nunca somada)

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | p01: 2 | 2 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sf | p01: 0 | 0 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sc | p01: 2 | 2 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |

## Política 1.1.0 (ao lado; sem R15 nem Q1 a)

Desfecho: specs sorteadas A-* (12).

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | p01: 1 | 1 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sf | p01: 0 | 0 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |
| D_sc | p01: 1 | 1 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) |

## S4' (crédito só de LLM contestado e não ratificado, tirado dos dois braços)

nenhuma ratificação da autora dada (--ratificacoes ausente): nenhum crédito ratificado. Contestados: 2; créditos retirados: 0.

| comparação | D por trio (S4', 1.2.0) | média | leitura | leitura com δ | muda a leitura? |
|---|---|---|---|---|---|
| D_fc | p01: 0 | 0 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) | não |
| D_sf | p01: 0 | 0 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) | não |
| D_sc | p01: 0 | 0 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: n efetivo 1 < 5) | não |

### Checagem S4: créditos só de LLM e sinal residual de braço, por braço (1.2.0)

| braço | créditos só de LLM | em cartão com sinal residual | contestados com crédito | retirados no S4' | ratificados | cartões com sinal / cartões (resíduo) |
|---|---|---|---|---|---|---|
| com | 9 | 7 | 0 | 0 | 0 | 10/13 |
| ferramentas | 8 | 6 | 0 | 0 | 0 | 13/15 |
| sem | 7 | 0 | 0 | 0 | 0 | 0/10 |

Resíduo: resíduo da própria passada.

## Origem medida (D-129, §8.6)

Origem: `adjudicada-20261022T1` (origem.json 2e48653f…). As tabelas acima já usam a classe com a origem medida.

| braço | violação página | violação DS | origem indeterminada | creditadas (1.2.0) |
|---|---|---|---|---|
| com | 10 | 1 | 1 | 9 |
| ferramentas | 8 | 4 | 1 | 8 |
| lb-axe | 2 | 0 | 0 | 2 |
| lb-validator | 4 | 0 | 0 | 4 |
| sem | 7 | 3 | 0 | 7 |

Mudanças pela origem medida (9): T3-102d51c202 sem violacao-origem-indeterminada → violacao-ds; T3-42e2252a1a sem violacao-origem-indeterminada → violacao-ds; T3-5994c00d74 ferramentas violacao-origem-indeterminada → violacao-ds; T3-a88de20869 ferramentas violacao-origem-indeterminada → violacao-ds; T3-d8c423e047 ferramentas violacao-origem-indeterminada → violacao-ds; T3-df335eafa2 ferramentas violacao-origem-indeterminada → violacao-ds; T3-ea424758db com violacao-origem-indeterminada → violacao-ds; T3-efb3b44bd4 sem violacao-origem-indeterminada → violacao-ds; T3-fe2fdf596a com violacao-origem-indeterminada → violacao-pagina.
Crédito retirado por origem DS: nenhum. Candidatos do estrato 4 (origem DS): T3-102d51c202 (sem), T3-42e2252a1a (sem), T3-5994c00d74 (ferramentas), T3-a88de20869 (ferramentas), T3-d8c423e047 (ferramentas), T3-df335eafa2 (ferramentas), T3-ea424758db (com), T3-efb3b44bd4 (sem).
