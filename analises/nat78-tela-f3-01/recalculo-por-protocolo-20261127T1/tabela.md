# Recálculo §8.5 — campanha `nat78-tela-f3-01` (tela processos-f3, referência 1.0.0)

Respostas congeladas: `primeira-passada-20261127T1` (1ª passada, julgamentos 34c61e7d…). Crédito por unidade pelo scorer do pacote; no desfecho por spec (D-102), uma spec conta quando ao menos uma unidade dela é confirmada. Valores "x [≤y]" = confirmado [máximo com os pendentes]. Todas as entradas com sha256 em `recalculo.json › entradas`.

Trios: p01 (ordem ferramentas → com → sem; linha de base lb-20261127-080113-processos-f3-a89056 do slot p01-ferramentas); p02 (ordem sem → ferramentas → com; linha de base lb-20261127-080113-processos-f3-a89056 do slot p02-sem); p03 (ordem com → sem → ferramentas; linha de base lb-20261127-080113-processos-f3-a89056 do slot p03-com); p04 (ordem ferramentas → com → sem; linha de base lb-20261127-080113-processos-f3-a89056 do slot p04-ferramentas); p05 (ordem com → sem → ferramentas; linha de base lb-20261127-080113-processos-f3-a89056 do slot p05-com); p06 (ordem sem → ferramentas → com; linha de base lb-20261127-080113-processos-f3-a89056 do slot p06-sem); p07 (ordem com → sem → ferramentas; linha de base lb-20261127-080113-processos-f3-a89056 do slot p07-com); p08 (ordem ferramentas → com → sem; linha de base lb-20261127-080113-processos-f3-a89056 do slot p08-ferramentas); p09 (ordem sem → ferramentas → com; linha de base lb-20261127-080113-processos-f3-a89056 do slot p09-sem).

> **Política do juiz: `politica-normativa-1.3.0`.** política do juiz 1.3.0 (R16: a referência secundária só resgata a citação, nunca o fato): as tabelas 'principal|1.2.0|…' usam o derivado da passada (1.3.0, crédito da 1.2.0 + R16) e as '…|1.1.0|…' tiram desse mesmo derivado o crédito da R15 e da Q1 a.

Citações pela referência secundária: 8 — T3-0530ea9d7a (sem): REF1 wcag:4.1.2 no lugar de wcag:3.3.2; T3-2898ab4b7c (sem, credita D-05): REF1 emag:6.2 no lugar de wcag:3.3.2; T3-585a6265e0 (ferramentas): REF1 wcag:4.1.2 no lugar de aria-dialog-name; T3-63a7dd7b2e (sem): REF1 wcag:1.3.1 no lugar de emag:1.1; T3-640def98e5 (ferramentas): REF1 wcag:4.1.2 no lugar de aria-dialog-name; T3-9abdb23ce4 (ferramentas): REF1 wcag:4.1.2 no lugar de aria-dialog-name; T3-9ffdc5a540 (com): REF2 wcag:1.3.1 no lugar de empty-table-header; T3-b62b794122 (com, credita F3-07): REF1 [regra citada] no lugar de [regra citada] (proveniência em `recalculo.json › citacoesPorReferencia`).

## Política 1.3.0 do juiz (principal; crédito da 1.2.0 + R16)

### D_fc — ferramentas × com (primária)

D_fc = com − ferramentas · desfecho: specs do DS semeadas (12) · δ = 2 specs

| trio | posição ferramentas/com | ferramentas | com | D_fc | estado |
|---|---|---|---|---|---|
| p01 | 1/2 | 0 [≤4] | 0 [≤5] | 0 [-4, 5] | provisorio |
| p02 | 2/3 | 0 [≤4] | 0 [≤7] | 0 [-4, 7] | provisorio |
| p03 | 3/1 | 0 [≤3] | 0 [≤4] | 0 [-3, 4] | provisorio |
| p04 | 1/2 | 0 [≤3] | 0 [≤5] | 0 [-3, 5] | provisorio |
| p05 | 3/1 | 0 [≤2] | 0 [≤6] | 0 [-2, 6] | provisorio |
| p06 | 2/3 | 0 [≤3] | 0 [≤6] | 0 [-3, 6] | provisorio |
| p07 | 3/1 | 0 [≤3] | 0 [≤7] | 0 [-3, 7] | provisorio |
| p08 | 1/2 | 0 [≤4] | 0 [≤5] | 0 [-4, 5] | provisorio |
| p09 | 2/3 | 0 [≤3] | 0 [≤6] | 0 [-3, 6] | provisorio |

- Campanha (PROVISORIO): média 0, mediana 0, DP 0; n efetivo 9, planejado 9; envoltória da média [-3,22, 5,67]
- Permutação exata por troca de sinais: p 1 (todos os D = 0: sem diferença); Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: todos os D iguais (sem variação para reamostrar)
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: todos os D iguais (sem variação para reamostrar)).

### D_sc — sem × com (secundária)

D_sc = com − sem · desfecho: specs do DS semeadas (12) · δ = 2 specs

| trio | posição sem/com | sem | com | D_sc | estado |
|---|---|---|---|---|---|
| p01 | 3/2 | 0 [≤3] | 0 [≤5] | 0 [-3, 5] | provisorio |
| p02 | 1/3 | 1 [≤2] | 0 [≤7] | -1 [-2, 6] | provisorio |
| p03 | 2/1 | 0 [≤5] | 0 [≤4] | 0 [-5, 4] | provisorio |
| p04 | 3/2 | 0 [≤5] | 0 [≤5] | 0 [-5, 5] | provisorio |
| p05 | 2/1 | 1 [≤5] | 0 [≤6] | -1 [-5, 5] | provisorio |
| p06 | 1/3 | 0 [≤4] | 0 [≤6] | 0 [-4, 6] | provisorio |
| p07 | 2/1 | 0 [≤4] | 0 [≤7] | 0 [-4, 7] | provisorio |
| p08 | 3/2 | 1 [≤6] | 0 [≤5] | -1 [-6, 4] | provisorio |
| p09 | 1/3 | 1 [≤4] | 0 [≤6] | -1 [-4, 5] | provisorio |

- Campanha (PROVISORIO): média -0,44, mediana 0, DP 0,53; n efetivo 9, planejado 9; envoltória da média [-4,22, 5,22]
- Permutação exata por troca de sinais: p 0,1250; Wilcoxon-Pratt p 0,1250; sinal p 0,1250
- IC 95% bootstrap: [-0,78, -0,11]
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2).

### D_sf — sem × ferramentas (secundária)

D_sf = ferramentas − sem · desfecho: specs do DS semeadas (12) · δ = 2 specs

| trio | posição sem/ferramentas | sem | ferramentas | D_sf | estado |
|---|---|---|---|---|---|
| p01 | 3/1 | 0 [≤3] | 0 [≤4] | 0 [-3, 4] | provisorio |
| p02 | 1/2 | 1 [≤2] | 0 [≤4] | -1 [-2, 3] | provisorio |
| p03 | 2/3 | 0 [≤5] | 0 [≤3] | 0 [-5, 3] | provisorio |
| p04 | 3/1 | 0 [≤5] | 0 [≤3] | 0 [-5, 3] | provisorio |
| p05 | 2/3 | 1 [≤5] | 0 [≤2] | -1 [-5, 1] | provisorio |
| p06 | 1/2 | 0 [≤4] | 0 [≤3] | 0 [-4, 3] | provisorio |
| p07 | 2/3 | 0 [≤4] | 0 [≤3] | 0 [-4, 3] | provisorio |
| p08 | 3/1 | 1 [≤6] | 0 [≤4] | -1 [-6, 3] | provisorio |
| p09 | 1/2 | 1 [≤4] | 0 [≤3] | -1 [-4, 2] | provisorio |

- Campanha (PROVISORIO): média -0,44, mediana 0, DP 0,53; n efetivo 9, planejado 9; envoltória da média [-4,22, 2,78]
- Permutação exata por troca de sinais: p 0,1250; Wilcoxon-Pratt p 0,1250; sinal p 0,1250
- IC 95% bootstrap: [-0,78, -0,11]
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2).

### Sensibilidade pré-declarada, sem os controles da varredura — specs semeadas que não são controle da varredura (9 de 12; 3 controle(s) fora; sensibilidade pré-declarada, sem os controles da varredura)

Arquivo de estratos: `tela-f3/estratos-1.0.0.json` (tela-f3-estratos-1.0.0, sha256 ad48fb74…, declarado em `telas.json › processos-f3.estratos`). Semeadas: 12; controles da varredura (`controleDaVarredura: true`, fora daqui): 3; nesta sensibilidade: 9. Mesmo método do primário (chave `principal|1.2.0`, por spec, permutação exata por troca de sinais), semente própria (`…|sem-controles`).

| comparação | primário: D por trio | média | p | leitura | sem os controles: D por trio | média | p | leitura | leitura com δ |
|---|---|---|---|---|---|---|---|---|---|
| D_fc | p01: 0; p02: 0; p03: 0; p04: 0; p05: 0; p06: 0; p07: 0; p08: 0; p09: 0 | 0 | 1 | nenhuma diferença detectável | p01: 0; p02: 0; p03: 0; p04: 0; p05: 0; p06: 0; p07: 0; p08: 0; p09: 0 | 0 | 1 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: todos os D iguais (sem variação para reamostrar)) |
| D_sc | p01: 0; p02: -1; p03: 0; p04: 0; p05: -1; p06: 0; p07: 0; p08: -1; p09: -1 | -0,44 | 0,1250 | nenhuma diferença detectável | p01: 0; p02: -1; p03: 0; p04: 0; p05: -1; p06: 0; p07: 0; p08: -1; p09: -1 | -0,44 | 0,1250 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |
| D_sf | p01: 0; p02: -1; p03: 0; p04: 0; p05: -1; p06: 0; p07: 0; p08: -1; p09: -1 | -0,44 | 0,1250 | nenhuma diferença detectável | p01: 0; p02: -1; p03: 0; p04: 0; p05: -1; p06: 0; p07: 0; p08: -1; p09: -1 | -0,44 | 0,1250 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |

#### D_fc — ferramentas × com (primária) — sem os controles da varredura

D_fc = com − ferramentas · desfecho: specs semeadas que não são controle da varredura (9 de 12; 3 controle(s) fora; sensibilidade pré-declarada, sem os controles da varredura) · δ = 2 specs

| trio | posição ferramentas/com | ferramentas | com | D_fc | estado |
|---|---|---|---|---|---|
| p01 | 1/2 | 0 [≤3] | 0 [≤2] | 0 [-3, 2] | provisorio |
| p02 | 2/3 | 0 [≤3] | 0 [≤4] | 0 [-3, 4] | provisorio |
| p03 | 3/1 | 0 [≤3] | 0 [≤1] | 0 [-3, 1] | provisorio |
| p04 | 1/2 | 0 [≤3] | 0 [≤2] | 0 [-3, 2] | provisorio |
| p05 | 3/1 | 0 [≤2] | 0 [≤3] | 0 [-2, 3] | provisorio |
| p06 | 2/3 | 0 [≤2] | 0 [≤3] | 0 [-2, 3] | provisorio |
| p07 | 3/1 | 0 [≤2] | 0 [≤4] | 0 [-2, 4] | provisorio |
| p08 | 1/2 | 0 [≤3] | 0 [≤2] | 0 [-3, 2] | provisorio |
| p09 | 2/3 | 0 [≤2] | 0 [≤3] | 0 [-2, 3] | provisorio |

- Campanha (PROVISORIO): média 0, mediana 0, DP 0; n efetivo 9, planejado 9; envoltória da média [-2,56, 2,67]
- Permutação exata por troca de sinais: p 1 (todos os D = 0: sem diferença); Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: todos os D iguais (sem variação para reamostrar)
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: todos os D iguais (sem variação para reamostrar)).

#### D_sc — sem × com (secundária) — sem os controles da varredura

D_sc = com − sem · desfecho: specs semeadas que não são controle da varredura (9 de 12; 3 controle(s) fora; sensibilidade pré-declarada, sem os controles da varredura) · δ = 2 specs

| trio | posição sem/com | sem | com | D_sc | estado |
|---|---|---|---|---|---|
| p01 | 3/2 | 0 [≤3] | 0 [≤2] | 0 [-3, 2] | provisorio |
| p02 | 1/3 | 1 [≤2] | 0 [≤4] | -1 [-2, 3] | provisorio |
| p03 | 2/1 | 0 [≤4] | 0 [≤1] | 0 [-4, 1] | provisorio |
| p04 | 3/2 | 0 [≤4] | 0 [≤2] | 0 [-4, 2] | provisorio |
| p05 | 2/1 | 1 [≤4] | 0 [≤3] | -1 [-4, 2] | provisorio |
| p06 | 1/3 | 0 [≤4] | 0 [≤3] | 0 [-4, 3] | provisorio |
| p07 | 2/1 | 0 [≤3] | 0 [≤4] | 0 [-3, 4] | provisorio |
| p08 | 3/2 | 1 [≤4] | 0 [≤2] | -1 [-4, 1] | provisorio |
| p09 | 1/3 | 1 [≤3] | 0 [≤3] | -1 [-3, 2] | provisorio |

- Campanha (PROVISORIO): média -0,44, mediana 0, DP 0,53; n efetivo 9, planejado 9; envoltória da média [-3,44, 2,22]
- Permutação exata por troca de sinais: p 0,1250; Wilcoxon-Pratt p 0,1250; sinal p 0,1250
- IC 95% bootstrap: [-0,78, -0,11]
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2).

#### D_sf — sem × ferramentas (secundária) — sem os controles da varredura

D_sf = ferramentas − sem · desfecho: specs semeadas que não são controle da varredura (9 de 12; 3 controle(s) fora; sensibilidade pré-declarada, sem os controles da varredura) · δ = 2 specs

| trio | posição sem/ferramentas | sem | ferramentas | D_sf | estado |
|---|---|---|---|---|---|
| p01 | 3/1 | 0 [≤3] | 0 [≤3] | 0 [-3, 3] | provisorio |
| p02 | 1/2 | 1 [≤2] | 0 [≤3] | -1 [-2, 2] | provisorio |
| p03 | 2/3 | 0 [≤4] | 0 [≤3] | 0 [-4, 3] | provisorio |
| p04 | 3/1 | 0 [≤4] | 0 [≤3] | 0 [-4, 3] | provisorio |
| p05 | 2/3 | 1 [≤4] | 0 [≤2] | -1 [-4, 1] | provisorio |
| p06 | 1/2 | 0 [≤4] | 0 [≤2] | 0 [-4, 2] | provisorio |
| p07 | 2/3 | 0 [≤3] | 0 [≤2] | 0 [-3, 2] | provisorio |
| p08 | 3/1 | 1 [≤4] | 0 [≤3] | -1 [-4, 2] | provisorio |
| p09 | 1/2 | 1 [≤3] | 0 [≤2] | -1 [-3, 1] | provisorio |

- Campanha (PROVISORIO): média -0,44, mediana 0, DP 0,53; n efetivo 9, planejado 9; envoltória da média [-3,44, 2,11]
- Permutação exata por troca de sinais: p 0,1250; Wilcoxon-Pratt p 0,1250; sinal p 0,1250
- IC 95% bootstrap: [-0,78, -0,11]
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2).

### Sensibilidade — todas: as semeadas e as naturais não expostas (21; sensibilidade)

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | p01: 0; p02: 0; p03: 0; p04: 0; p05: 0; p06: 0; p07: 0; p08: 0; p09: 0 | 0 | 9 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: todos os D iguais (sem variação para reamostrar)) |
| D_sc | p01: 0; p02: -1; p03: 0; p04: 0; p05: -1; p06: 0; p07: 0; p08: -1; p09: -1 | -0,44 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |
| D_sf | p01: 0; p02: -1; p03: 0; p04: 0; p05: -1; p06: 0; p07: 0; p08: -1; p09: -1 | -0,44 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |

### Sensibilidade — unidades das specs semeadas (12; por unidade, sensibilidade)

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | p01: 0; p02: 0; p03: 0; p04: 0; p05: 0; p06: 0; p07: 0; p08: 0; p09: 0 | 0 | 9 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: todos os D iguais (sem variação para reamostrar)) |
| D_sc | p01: 0; p02: -1; p03: 0; p04: 0; p05: -1; p06: 0; p07: 0; p08: -1; p09: -1 | -0,44 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |
| D_sf | p01: 0; p02: -1; p03: 0; p04: 0; p05: -1; p06: 0; p07: 0; p08: -1; p09: -1 | -0,44 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |

### Sensibilidade — com as expostas (25 specs; sensibilidade)

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | p01: 0; p02: 0; p03: 0; p04: 0; p05: 0; p06: 0; p07: 0; p08: 0; p09: 0 | 0 | 9 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: todos os D iguais (sem variação para reamostrar)) |
| D_sc | p01: 0; p02: -1; p03: 0; p04: 0; p05: -1; p06: 0; p07: 0; p08: -1; p09: -1 | -0,44 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |
| D_sf | p01: 0; p02: -1; p03: 0; p04: 0; p05: -1; p06: 0; p07: 0; p08: -1; p09: -1 | -0,44 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |

## Política 1.1.0 (ao lado; sem R15 nem Q1 a)

Desfecho: specs do DS semeadas (12).

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | p01: 0; p02: 0; p03: 0; p04: 0; p05: 0; p06: 0; p07: 0; p08: 0; p09: 0 | 0 | 9 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: todos os D iguais (sem variação para reamostrar)) |
| D_sc | p01: 0; p02: 0; p03: 0; p04: 0; p05: 0; p06: 0; p07: 0; p08: 0; p09: 0 | 0 | 9 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: todos os D iguais (sem variação para reamostrar)) |
| D_sf | p01: 0; p02: 0; p03: 0; p04: 0; p05: 0; p06: 0; p07: 0; p08: 0; p09: 0 | 0 | 9 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: todos os D iguais (sem variação para reamostrar)) |

## S4' (crédito só de LLM contestado e não ratificado, tirado dos dois braços)

Indisponível: primeira-passada-20261127T1: sem contestados.json (passada sem adjudicação aplicada); S4' indisponível

### Checagem S4: créditos só de LLM e sinal residual de braço, por braço (1.2.0)

| braço | créditos só de LLM | em cartão com sinal residual | contestados com crédito | retirados no S4' | ratificados | cartões com sinal / cartões (resíduo) |
|---|---|---|---|---|---|---|
| com | 0 | 0 | 0 | 0 | 0 | 228/449 |
| ferramentas | 0 | 0 | 0 | 0 | 0 | 92/364 |
| sem | 4 | 1 | 0 | 0 | 0 | 147/393 |

Resíduo: resíduo da própria passada.

Decisões recusadas pelo scorer (ficaram pendentes): 18 grupo(s); ver `recalculo.json › recusasDoScorer`.

## Specs semeadas confirmadas por tipo de defeito (descritivo pré-declarado; sem D, sem teste)

Tipos: `tela-f3/estratos-1.0.0.json` (tela-f3-estratos-1.0.0, sha256 ad48fb74…, declarado em `telas.json › processos-f3.estratos`; referência ground-truth-processos-f3.json 1.0.0). Detecção = chave `principal|1.2.0` (spec confirmada = ≥ 1 unidade confirmada; "x [≤y]" = confirmado [máximo com os pendentes]); fundamentada ao lado (leitura principal). Por trio na ordem p01, p02, p03, p04, p05, p06, p07, p08, p09; — = braço ausente no trio; mediana entre os trios com o braço. `total` = o primário.

| tipo (denominador) | braço | detecção por trio | mediana | fundamentada por trio | mediana |
|---|---|---|---|---|---|
| T1 Estrutura (3) | sem | 0 [≤1], 0 [≤1], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤1], 0 [≤2], 0 [≤2], 0 [≤2] | 0 [≤2] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| T1 Estrutura (3) | ferramentas | 0 [≤2], 0 [≤2], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2] | 0 [≤2] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| T1 Estrutura (3) | com | 0 [≤3], 0 [≤3], 0 [≤2], 0 [≤3], 0 [≤3], 0 [≤3], 0 [≤3], 0 [≤3], 0 [≤2] | 0 [≤3] | 2, 3, 1, 2, 2, 2, 2, 2, 1 | 2 |
| T2 Valor fora do sistema (2) | sem | 0, 0, 0, 0, 0, 0, 0, 0 [≤1], 0 | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| T2 Valor fora do sistema (2) | ferramentas | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| T2 Valor fora do sistema (2) | com | 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2] | 0 [≤2] | 2, 2, 2, 2, 2, 2, 2, 2, 2 | 2 |
| T3 Valor do sistema no lugar errado (1) | sem | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| T3 Valor do sistema no lugar errado (1) | ferramentas | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| T3 Valor do sistema no lugar errado (1) | com | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| T4 Estado e comportamento (5) | sem | 0 [≤2], 1, 0 [≤3], 0 [≤3], 1 [≤3], 0 [≤2], 0 [≤2], 1 [≤3], 1 [≤2] | 0 [≤2] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| T4 Estado e comportamento (5) | ferramentas | 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤2], 0 [≤1] | 0 [≤2] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| T4 Estado e comportamento (5) | com | 0, 0 [≤2], 0, 0, 0 [≤1], 0 [≤1], 0 [≤2], 0, 0 [≤2] | 0 [≤1] | 0, 1, 0, 0, 0, 0, 0, 0, 0 | 0 |
| R Redação (1) | sem | 0, 0, 0, 0, 0, 0 [≤1], 0, 0, 0 | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| R Redação (1) | ferramentas | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| R Redação (1) | com | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| total (12) | sem | 0 [≤3], 1 [≤2], 0 [≤5], 0 [≤5], 1 [≤5], 0 [≤4], 0 [≤4], 1 [≤6], 1 [≤4] | 0 [≤4] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| total (12) | ferramentas | 0 [≤4], 0 [≤4], 0 [≤3], 0 [≤3], 0 [≤2], 0 [≤3], 0 [≤3], 0 [≤4], 0 [≤3] | 0 [≤3] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| total (12) | com | 0 [≤5], 0 [≤7], 0 [≤4], 0 [≤5], 0 [≤6], 0 [≤6], 0 [≤7], 0 [≤5], 0 [≤6] | 0 [≤6] | 4, 6, 3, 4, 4, 4, 4, 4, 3 | 4 |

## Specs semeadas confirmadas por nível de dificuldade (descritivo pré-declarado; sem D, sem teste)

Níveis: `tela-f3/estratos-1.0.0.json` (tela-f3-estratos-1.0.0, sha256 ad48fb74…, declarado em `telas.json › processos-f3.estratos`; referência ground-truth-processos-f3.json 1.0.0). Detecção = chave `principal|1.2.0` (spec confirmada = ≥ 1 unidade confirmada; "x [≤y]" = confirmado [máximo com os pendentes]); fundamentada ao lado (leitura principal). Por trio na ordem p01, p02, p03, p04, p05, p06, p07, p08, p09; — = braço ausente no trio; mediana entre os trios com o braço. `total` = o primário.

| nível (specs) | braço | detecção por trio | mediana | fundamentada por trio | mediana |
|---|---|---|---|---|---|
| facil (4) | sem | 0 [≤2], 1, 0 [≤2], 0 [≤2], 1 [≤3], 0 [≤2], 0 [≤2], 1 [≤2], 1 [≤2] | 0 [≤2] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| facil (4) | ferramentas | 0 [≤2], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤2], 0 [≤1] | 0 [≤1] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| facil (4) | com | 0 [≤1], 0 [≤3], 0, 0 [≤1], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤1], 0 [≤2] | 0 [≤2] | 1, 2, 0, 1, 1, 1, 1, 1, 0 | 1 |
| medio (3) | sem | 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤3], 0 [≤1] | 0 [≤1] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| medio (3) | ferramentas | 0 [≤1], 0 [≤2], 0 [≤1], 0 [≤2], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1] | 0 [≤1] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| medio (3) | com | 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2] | 0 [≤2] | 1, 2, 1, 1, 2, 1, 1, 1, 1 | 1 |
| dificil (4) | sem | 0, 0, 0 [≤2], 0 [≤2], 0 [≤1], 0, 0 [≤1], 0 [≤1], 0 [≤1] | 0 [≤1] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| dificil (4) | ferramentas | 0 [≤1], 0 [≤1], 0 [≤1], 0, 0, 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1] | 0 [≤1] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| dificil (4) | com | 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤3], 0 [≤2], 0 [≤2] | 0 [≤2] | 2, 2, 2, 2, 1, 2, 2, 2, 2 | 2 |
| muito-dificil (1) | sem | 0, 0, 0, 0, 0, 0 [≤1], 0, 0, 0 | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| muito-dificil (1) | ferramentas | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| muito-dificil (1) | com | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| total (12) | sem | 0 [≤3], 1 [≤2], 0 [≤5], 0 [≤5], 1 [≤5], 0 [≤4], 0 [≤4], 1 [≤6], 1 [≤4] | 0 [≤4] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| total (12) | ferramentas | 0 [≤4], 0 [≤4], 0 [≤3], 0 [≤3], 0 [≤2], 0 [≤3], 0 [≤3], 0 [≤4], 0 [≤3] | 0 [≤3] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| total (12) | com | 0 [≤5], 0 [≤7], 0 [≤4], 0 [≤5], 0 [≤6], 0 [≤6], 0 [≤7], 0 [≤5], 0 [≤6] | 0 [≤6] | 4, 6, 3, 4, 4, 4, 4, 4, 3 | 4 |

## Specs semeadas confirmadas por exigência de interação (descritivo pré-declarado; sem D, sem teste)

Interação: `tela-f3/estratos-1.0.0.json` (tela-f3-estratos-1.0.0, sha256 ad48fb74…, declarado em `telas.json › processos-f3.estratos`; referência ground-truth-processos-f3.json 1.0.0). Detecção = chave `principal|1.2.0` (spec confirmada = ≥ 1 unidade confirmada; "x [≤y]" = confirmado [máximo com os pendentes]); fundamentada ao lado (leitura principal). Por trio na ordem p01, p02, p03, p04, p05, p06, p07, p08, p09; — = braço ausente no trio; mediana entre os trios com o braço. `total` = o primário.

| interação (specs) | braço | detecção por trio | mediana | fundamentada por trio | mediana |
|---|---|---|---|---|---|
| exige-interacao (3) | sem | 0 [≤1], 1, 0 [≤1], 0 [≤1], 1 [≤2], 0 [≤2], 0 [≤1], 1, 1 | 0 [≤1] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| exige-interacao (3) | ferramentas | 0 [≤1], 0, 0, 0, 0, 0, 0 [≤1], 0 [≤1], 0 | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| exige-interacao (3) | com | 0, 0 [≤1], 0, 0, 0, 0, 0, 0, 0 [≤1] | 0 | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| sem-interacao (9) | sem | 0 [≤2], 0 [≤1], 0 [≤4], 0 [≤4], 0 [≤3], 0 [≤2], 0 [≤3], 0 [≤5], 0 [≤3] | 0 [≤3] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| sem-interacao (9) | ferramentas | 0 [≤3], 0 [≤4], 0 [≤3], 0 [≤3], 0 [≤2], 0 [≤3], 0 [≤2], 0 [≤3], 0 [≤3] | 0 [≤3] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| sem-interacao (9) | com | 0 [≤5], 0 [≤6], 0 [≤4], 0 [≤5], 0 [≤6], 0 [≤6], 0 [≤7], 0 [≤5], 0 [≤5] | 0 [≤5] | 4, 6, 3, 4, 4, 4, 4, 4, 3 | 4 |
| total (12) | sem | 0 [≤3], 1 [≤2], 0 [≤5], 0 [≤5], 1 [≤5], 0 [≤4], 0 [≤4], 1 [≤6], 1 [≤4] | 0 [≤4] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| total (12) | ferramentas | 0 [≤4], 0 [≤4], 0 [≤3], 0 [≤3], 0 [≤2], 0 [≤3], 0 [≤3], 0 [≤4], 0 [≤3] | 0 [≤3] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| total (12) | com | 0 [≤5], 0 [≤7], 0 [≤4], 0 [≤5], 0 [≤6], 0 [≤6], 0 [≤7], 0 [≤5], 0 [≤6] | 0 [≤6] | 4, 6, 3, 4, 4, 4, 4, 4, 3 | 4 |

## Specs semeadas confirmadas por origem do defeito (descritivo pré-declarado; sem D, sem teste)

Origens: `tela-f3/estratos-1.0.0.json` (tela-f3-estratos-1.0.0, sha256 ad48fb74…, declarado em `telas.json › processos-f3.estratos`; referência ground-truth-processos-f3.json 1.0.0). Detecção = chave `principal|1.2.0` (spec confirmada = ≥ 1 unidade confirmada; "x [≤y]" = confirmado [máximo com os pendentes]); fundamentada ao lado (leitura principal). Por trio na ordem p01, p02, p03, p04, p05, p06, p07, p08, p09; — = braço ausente no trio; mediana entre os trios com o braço. `total` = o primário.

| origem (denominador) | braço | detecção por trio | mediana | fundamentada por trio | mediana |
|---|---|---|---|---|---|
| mantido (5) | sem | 0 [≤1], 0 [≤1], 0 [≤2], 0 [≤2], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤2], 0 [≤1] | 0 [≤1] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| mantido (5) | ferramentas | 0 [≤1], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1] | 0 [≤1] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| mantido (5) | com | 0 [≤2], 0 [≤2], 0 [≤1], 0 [≤2], 0 [≤2], 0 [≤2], 0 [≤3], 0 [≤2], 0 [≤1] | 0 [≤2] | 1, 2, 0, 1, 2, 1, 1, 1, 0 | 1 |
| trocado (6) | sem | 0 [≤1], 1, 0 [≤2], 0 [≤2], 1 [≤3], 0 [≤2], 0 [≤2], 1 [≤3], 1 [≤2] | 0 [≤2] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| trocado (6) | ferramentas | 0 [≤2], 0 [≤1], 0, 0, 0, 0 [≤1], 0 [≤2], 0 [≤2], 0 [≤1] | 0 [≤1] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| trocado (6) | com | 0 [≤3], 0 [≤4], 0 [≤3], 0 [≤3], 0 [≤3], 0 [≤3], 0 [≤3], 0 [≤3], 0 [≤4] | 0 [≤3] | 3, 3, 3, 3, 2, 3, 3, 3, 3 | 3 |
| novo (1) | sem | 0 [≤1], 0, 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1] | 0 [≤1] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| novo (1) | ferramentas | 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0 [≤1], 0, 0 [≤1], 0 [≤1] | 0 [≤1] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| novo (1) | com | 0, 0 [≤1], 0, 0, 0 [≤1], 0 [≤1], 0 [≤1], 0, 0 [≤1] | 0 [≤1] | 0, 1, 0, 0, 0, 0, 0, 0, 0 | 0 |
| total (12) | sem | 0 [≤3], 1 [≤2], 0 [≤5], 0 [≤5], 1 [≤5], 0 [≤4], 0 [≤4], 1 [≤6], 1 [≤4] | 0 [≤4] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| total (12) | ferramentas | 0 [≤4], 0 [≤4], 0 [≤3], 0 [≤3], 0 [≤2], 0 [≤3], 0 [≤3], 0 [≤4], 0 [≤3] | 0 [≤3] | 0, 0, 0, 0, 0, 0, 0, 0, 0 | 0 |
| total (12) | com | 0 [≤5], 0 [≤7], 0 [≤4], 0 [≤5], 0 [≤6], 0 [≤6], 0 [≤7], 0 [≤5], 0 [≤6] | 0 [≤6] | 4, 6, 3, 4, 4, 4, 4, 4, 3 | 4 |

## ANÁLISE DE SENSIBILIDADE — por protocolo (NAT-78 §4.5); não é o primário, nunca no lugar dele

Leitura `sensibilidade-por-protocolo` (tipo `sensibilidade`, `nat78-deteccao-por-protocolo-1.0.0`, definição `nat78-aderencia-por-protocolo-1.0.0`): ANÁLISE DE SENSIBILIDADE (por protocolo, NAT-78 §4.5), não o primário: ao lado do primário (intenção de tratar), nunca no lugar dele nem somada a ele. Conjunto por protocolo: `sem` com `absent-verified`; `ferramentas` com `used-adherent`; `com` com `used-adherent`. Trio com slot fora: **sai de todas as comparações desta leitura** (listado). Desfecho: specs do DS semeadas (12), política 1.2.0 (a chave do principal). Semente própria (`…|sensibilidade-por-protocolo|recalculo|…`).

### Exclusões por braço

| braço | slots com estado do oráculo | no conjunto por protocolo | excluídos | estado que excluiu |
|---|---|---|---|---|
| ferramentas | 9 | 5 | 4 | `used-with-errors` 4 |
| com | 9 | 5 | 4 | `unverified` 2, `used-with-errors` 2 |
| sem | 9 | 9 | 0 | — |

### Estado do oráculo por trio e slot

| trio | ferramentas | com | sem |
|---|---|---|---|
| p01 | `used-adherent` | `used-adherent` | `absent-verified` |
| p02 | **fora: `used-with-errors`** | `used-adherent` | `absent-verified` |
| p03 | `used-adherent` | **fora: `used-with-errors`** | `absent-verified` |
| p04 | `used-adherent` | **fora: `unverified`** | `absent-verified` |
| p05 | **fora: `used-with-errors`** | `used-adherent` | `absent-verified` |
| p06 | `used-adherent` | `used-adherent` | `absent-verified` |
| p07 | **fora: `used-with-errors`** | **fora: `used-with-errors`** | `absent-verified` |
| p08 | `used-adherent` | **fora: `unverified`** | `absent-verified` |
| p09 | **fora: `used-with-errors`** | `used-adherent` | `absent-verified` |

### D_fc — ferramentas × com (primária) — sensibilidade-por-protocolo

D_fc = com − ferramentas · desfecho: specs do DS semeadas (12) · δ = 2 specs

| trio | posição ferramentas/com | ferramentas | com | D_fc | estado |
|---|---|---|---|---|---|
| p01 | 1/2 | 0 [≤4] | 0 [≤5] | 0 [-4, 5] | provisorio |
| p06 | 2/3 | 0 [≤3] | 0 [≤6] | 0 [-3, 6] | provisorio |

- Campanha (PROVISORIO): média 0, mediana 0, DP 0; n efetivo 2, planejado 9; envoltória da média [-3,50, 5,50]
- Permutação exata por troca de sinais: p 1 (todos os D = 0: sem diferença); Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: n efetivo 2 < 5
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: n efetivo 2 < 5).

- Fora desta comparação por protocolo: p02 (ferramentas `used-with-errors`); p03 (com `used-with-errors`); p04 (com `unverified`); p05 (ferramentas `used-with-errors`); p07 (com `used-with-errors`, ferramentas `used-with-errors`); p08 (com `unverified`); p09 (ferramentas `used-with-errors`).

### D_sc — sem × com (secundária) — sensibilidade-por-protocolo

D_sc = com − sem · desfecho: specs do DS semeadas (12) · δ = 2 specs

| trio | posição sem/com | sem | com | D_sc | estado |
|---|---|---|---|---|---|
| p01 | 3/2 | 0 [≤3] | 0 [≤5] | 0 [-3, 5] | provisorio |
| p06 | 1/3 | 0 [≤4] | 0 [≤6] | 0 [-4, 6] | provisorio |

- Campanha (PROVISORIO): média 0, mediana 0, DP 0; n efetivo 2, planejado 9; envoltória da média [-3,50, 5,50]
- Permutação exata por troca de sinais: p 1 (todos os D = 0: sem diferença); Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: n efetivo 2 < 5
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: n efetivo 2 < 5).

- Fora desta comparação por protocolo: p02 (ferramentas `used-with-errors`); p03 (com `used-with-errors`); p04 (com `unverified`); p05 (ferramentas `used-with-errors`); p07 (com `used-with-errors`, ferramentas `used-with-errors`); p08 (com `unverified`); p09 (ferramentas `used-with-errors`).

### D_sf — sem × ferramentas (secundária) — sensibilidade-por-protocolo

D_sf = ferramentas − sem · desfecho: specs do DS semeadas (12) · δ = 2 specs

| trio | posição sem/ferramentas | sem | ferramentas | D_sf | estado |
|---|---|---|---|---|---|
| p01 | 3/1 | 0 [≤3] | 0 [≤4] | 0 [-3, 4] | provisorio |
| p06 | 1/2 | 0 [≤4] | 0 [≤3] | 0 [-4, 3] | provisorio |

- Campanha (PROVISORIO): média 0, mediana 0, DP 0; n efetivo 2, planejado 9; envoltória da média [-3,50, 3,50]
- Permutação exata por troca de sinais: p 1 (todos os D = 0: sem diferença); Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: indisponível: n efetivo 2 < 5
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** leitura com δ indisponível (indisponível: n efetivo 2 < 5).

- Fora desta comparação por protocolo: p02 (ferramentas `used-with-errors`); p03 (com `used-with-errors`); p04 (com `unverified`); p05 (ferramentas `used-with-errors`); p07 (com `used-with-errors`, ferramentas `used-with-errors`); p08 (com `unverified`); p09 (ferramentas `used-with-errors`).

### Usado com erros (`used-with-errors`): fora do conjunto por protocolo, à parte

| trio | braço | execução | contagem no primário (1.2.0) |
|---|---|---|---|
| p02 | ferramentas | 20261127-092659-processos-f3-ferramentas-1e6a | 0 [≤4] |
| p03 | com | 20261127-100349-processos-f3-com-80f8 | 0 [≤4] |
| p05 | ferramentas | 20261127-123459-processos-f3-ferramentas-ace0 | 0 [≤2] |
| p07 | com | 20261127-134757-processos-f3-com-29f7 | 0 [≤7] |
| p07 | ferramentas | 20261127-142647-processos-f3-ferramentas-895c | 0 [≤3] |
| p09 | ferramentas | 20261127-160559-processos-f3-ferramentas-3493 | 0 [≤3] |
