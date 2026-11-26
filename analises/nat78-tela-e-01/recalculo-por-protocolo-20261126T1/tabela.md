# Recálculo §8.5 — campanha `nat78-tela-e-01` (tela cadastro-pais, referência 1.0.0)

Respostas congeladas: `passada-adjudicada-20261119T1` (adjudicada, julgamentos f7a416a7…). Crédito por unidade pelo scorer do pacote; no desfecho por spec (D-102), uma spec conta quando ao menos uma unidade dela é confirmada. Valores "x [≤y]" = confirmado [máximo com os pendentes]. Todas as entradas com sha256 em `recalculo.json › entradas`.

Trios: p01 (ordem sem → ferramentas → com; linha de base lb-20261116-231004-cadastro-pais-30a1b1 do slot p01-sem); p02 (ordem com → sem → ferramentas; linha de base lb-20261116-231004-cadastro-pais-30a1b1 do slot p02-com); p03 (ordem ferramentas → com → sem; linha de base lb-20261116-231004-cadastro-pais-30a1b1 do slot p03-ferramentas); p04 (ordem ferramentas → com → sem; linha de base lb-20261116-231004-cadastro-pais-30a1b1 do slot p04-ferramentas); p05 (ordem com → sem → ferramentas; linha de base lb-20261116-231004-cadastro-pais-30a1b1 do slot p05-com); p06 (ordem sem → ferramentas → com; linha de base lb-20261116-231004-cadastro-pais-30a1b1 do slot p06-sem); p07 (ordem com → sem → ferramentas; linha de base lb-20261116-231004-cadastro-pais-30a1b1 do slot p07-com); p08 (ordem ferramentas → com → sem; linha de base lb-20261116-231004-cadastro-pais-30a1b1 do slot p08-ferramentas); p09 (ordem sem → ferramentas → com; linha de base lb-20261116-231004-cadastro-pais-30a1b1 do slot p09-sem).

> **Política do juiz: `politica-normativa-1.3.0`.** política do juiz 1.3.0 (R16: a referência secundária só resgata a citação, nunca o fato): as tabelas 'principal|1.2.0|…' usam o derivado da passada (1.3.0, crédito da 1.2.0 + R16) e as '…|1.1.0|…' tiram desse mesmo derivado o crédito da R15 e da Q1 a.

Citações pela referência secundária: 0 (proveniência em `recalculo.json › citacoesPorReferencia`).

## Política 1.3.0 do juiz (principal; crédito da 1.2.0 + R16)

### D_fc — ferramentas × com (primária)

D_fc = com − ferramentas · desfecho: specs do DS semeadas, não expostas (6) · δ = 2 specs

| trio | posição ferramentas/com | ferramentas | com | D_fc | estado |
|---|---|---|---|---|---|
| p01 | 2/3 | 5 | 6 | 1 | final |
| p02 | 3/1 | 6 | 6 | 0 | final |
| p03 | 1/2 | 6 | 6 | 0 | final |
| p04 | 1/2 | 6 | 6 | 0 | provisorio |
| p05 | 3/1 | 5 | 6 | 1 | final |
| p06 | 2/3 | 5 | 6 | 1 | final |
| p07 | 3/1 | 5 | 6 | 1 | final |
| p08 | 1/2 | 6 | 6 | 0 | final |
| p09 | 2/3 | 5 | 6 | 1 | final |

- Campanha (PROVISORIO): média 0,56, mediana 1, DP 0,53; n efetivo 9, planejado 9; envoltória da média [0,56, 0,56]
- Permutação exata por troca de sinais: p 0,0625; Wilcoxon-Pratt p 0,0625; sinal p 0,0625
- IC 95% bootstrap: [0,22, 0,89]
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2).

### D_sc — sem × com (secundária)

D_sc = com − sem · desfecho: specs do DS semeadas, não expostas (6) · δ = 2 specs

| trio | posição sem/com | sem | com | D_sc | estado |
|---|---|---|---|---|---|
| p01 | 1/3 | 5 | 6 | 1 | final |
| p02 | 2/1 | 6 | 6 | 0 | final |
| p03 | 3/2 | 6 | 6 | 0 | provisorio |
| p04 | 3/2 | 5 | 6 | 1 | provisorio |
| p05 | 2/1 | 5 | 6 | 1 | final |
| p06 | 1/3 | 6 | 6 | 0 | final |
| p07 | 2/1 | 6 | 6 | 0 | final |
| p08 | 3/2 | 5 | 6 | 1 | final |
| p09 | 1/3 | 6 | 6 | 0 | final |

- Campanha (PROVISORIO): média 0,44, mediana 0, DP 0,53; n efetivo 9, planejado 9; envoltória da média [0,44, 0,44]
- Permutação exata por troca de sinais: p 0,1250; Wilcoxon-Pratt p 0,1250; sinal p 0,1250
- IC 95% bootstrap: [0,11, 0,78]
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2).

### D_sf — sem × ferramentas (secundária)

D_sf = ferramentas − sem · desfecho: specs do DS semeadas, não expostas (6) · δ = 2 specs

| trio | posição sem/ferramentas | sem | ferramentas | D_sf | estado |
|---|---|---|---|---|---|
| p01 | 1/2 | 5 | 5 | 0 | final |
| p02 | 2/3 | 6 | 6 | 0 | final |
| p03 | 3/1 | 6 | 6 | 0 | provisorio |
| p04 | 3/1 | 5 | 6 | 1 | provisorio |
| p05 | 2/3 | 5 | 5 | 0 | final |
| p06 | 1/2 | 6 | 5 | -1 | final |
| p07 | 2/3 | 6 | 5 | -1 | final |
| p08 | 3/1 | 5 | 6 | 1 | final |
| p09 | 1/2 | 6 | 5 | -1 | final |

- Campanha (PROVISORIO): média -0,11, mediana 0, DP 0,78; n efetivo 9, planejado 9; envoltória da média [-0,11, -0,11]
- Permutação exata por troca de sinais: p 1; Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: [-0,56, 0,33]
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2).

### Sensibilidade — todas as specs da E (8; sensibilidade)

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | p01: 1; p02: -1; p03: 1; p04: -1; p05: 1; p06: 0; p07: 0; p08: 1; p09: 1 | 0,33 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |
| D_sc | p01: 2; p02: -1; p03: 1; p04: 2; p05: 2; p06: -1; p07: -1; p08: 2; p09: 0 | 0,67 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |
| D_sf | p01: 1; p02: 0; p03: 0; p04: 3; p05: 1; p06: -1; p07: -1; p08: 1; p09: -1 | 0,33 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |

### Sensibilidade — unidades das specs do primário (6; por unidade, sensibilidade)

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | p01: 1; p02: 0; p03: 0; p04: 0; p05: 1; p06: 1; p07: 1; p08: 0; p09: 1 | 0,56 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |
| D_sc | p01: 1; p02: 0; p03: 0; p04: 1; p05: 1; p06: 0; p07: 0; p08: 1; p09: 0 | 0,44 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |
| D_sf | p01: 0; p02: 0; p03: 0; p04: 1; p05: 0; p06: -1; p07: -1; p08: 1; p09: -1 | -0,11 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |

### Sensibilidade — com a U-09 (9 specs; a U-09 no denominador com crédito zero nos três braços; sensibilidade)

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | p01: 1; p02: -1; p03: 1; p04: -1; p05: 1; p06: 0; p07: 0; p08: 1; p09: 1 | 0,33 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |
| D_sc | p01: 2; p02: -1; p03: 1; p04: 2; p05: 2; p06: -1; p07: -1; p08: 2; p09: 0 | 0,67 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |
| D_sf | p01: 1; p02: 0; p03: 0; p04: 3; p05: 1; p06: -1; p07: -1; p08: 1; p09: -1 | 0,33 | 9 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) |

## Política 1.1.0 (ao lado; sem R15 nem Q1 a)

Desfecho: specs do DS semeadas, não expostas (6).

| comparação | D por trio | média | n | leitura | leitura com δ |
|---|---|---|---|---|---|
| D_fc | p01: 4; p02: 4; p03: 4; p04: 3; p05: 4; p06: 3; p07: 3; p08: 3; p09: 3 | 3,44 | 9 | vantagem do com | IC inteiro fora da faixa de ±δ (±2); a direção é a da leitura congelada |
| D_sc | p01: 4; p02: 4; p03: 4; p04: 3; p05: 4; p06: 3; p07: 3; p08: 3; p09: 3 | 3,44 | 9 | vantagem do com | IC inteiro fora da faixa de ±δ (±2); a direção é a da leitura congelada |
| D_sf | p01: 0; p02: 0; p03: 0; p04: 0; p05: 0; p06: 0; p07: 0; p08: 0; p09: 0 | 0 | 9 | nenhuma diferença detectável | leitura com δ indisponível (indisponível: todos os D iguais (sem variação para reamostrar)) |

## S4' (crédito só de LLM contestado e não ratificado, tirado dos dois braços)

9 cartão(ões) ratificado(s) pela autora (respostas cegas govbr-resultados/analises/nat78-tela-e-01/respostas-autora-20261126T1/respostas-autora.json: 10 respondidos, 9 concordam com a passada, 1 discordam, 0 "não sei"; desacordo não sobrescreve nada). Contestados: 12; créditos retirados: 0.

| comparação | D por trio (S4', 1.2.0) | média | leitura | leitura com δ | muda a leitura? |
|---|---|---|---|---|---|
| D_fc | p01: 1; p02: 0; p03: 0; p04: 0; p05: 1; p06: 1; p07: 1; p08: 0; p09: 1 | 0,56 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) | não |
| D_sc | p01: 1; p02: 0; p03: 0; p04: 1; p05: 1; p06: 0; p07: 0; p08: 1; p09: 0 | 0,44 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) | não |
| D_sf | p01: 0; p02: 0; p03: 0; p04: 1; p05: 0; p06: -1; p07: -1; p08: 1; p09: -1 | -0,11 | nenhuma diferença detectável | o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2) | não |

### Checagem S4: créditos só de LLM e sinal residual de braço, por braço (1.2.0)

| braço | créditos só de LLM | em cartão com sinal residual | contestados com crédito | retirados no S4' | ratificados | cartões com sinal / cartões (resíduo) |
|---|---|---|---|---|---|---|
| com | 74 | 67 | 0 | 0 | 2 | 74/82 |
| ferramentas | 70 | 20 | 0 | 0 | 3 | 30/89 |
| sem | 70 | 55 | 0 | 0 | 0 | 70/94 |

Resíduo: resíduo da própria passada.

## Origem medida (D-129, §8.6)

Origem: `passada-adjudicada-20261119T1` (origem.json c0f8643e…). As tabelas acima já usam a classe com a origem medida.

| braço | violação página | violação DS | origem indeterminada | creditadas (1.2.0) |
|---|---|---|---|---|
| com | 66 | 0 | 13 | 76 |
| ferramentas | 58 | 5 | 19 | 73 |
| lb-axe | 54 | 0 | 54 | 54 |
| lb-validator | 9 | 0 | 0 | 9 |
| sem | 55 | 4 | 25 | 72 |

Mudanças pela origem medida (57): T3-05d407df53 com violacao-pagina → violacao-origem-indeterminada; T3-076f230bfa ferramentas violacao-pagina → violacao-origem-indeterminada; T3-07ce6fb389 com violacao-origem-indeterminada → violacao-pagina; T3-0eb932c520 com violacao-pagina → violacao-origem-indeterminada; T3-177b018516 com violacao-pagina → violacao-origem-indeterminada; T3-179bb43517 com violacao-pagina → violacao-origem-indeterminada; T3-1820926122 sem violacao-pagina → violacao-origem-indeterminada; T3-191fa5107d sem violacao-pagina → violacao-origem-indeterminada; T3-1b4e1a09c0 ferramentas violacao-origem-indeterminada → violacao-ds; T3-1c344ed09e sem violacao-origem-indeterminada → violacao-ds; T3-2dfe29776e ferramentas violacao-pagina → violacao-origem-indeterminada; T3-33ad71820c ferramentas violacao-origem-indeterminada → violacao-ds; T3-342dde4b94 ferramentas violacao-pagina → violacao-origem-indeterminada; T3-36bc4805b7 sem violacao-pagina → violacao-origem-indeterminada; T3-50e5fdc559 com violacao-pagina → violacao-origem-indeterminada; T3-5376f459ea sem violacao-pagina → violacao-origem-indeterminada; T3-55d4113b7f sem violacao-pagina → violacao-origem-indeterminada; T3-5b2f77337d com violacao-pagina → violacao-origem-indeterminada; T3-5d9bd1137a ferramentas violacao-origem-indeterminada → violacao-ds; T3-65dea9e3c0 ferramentas violacao-pagina → violacao-origem-indeterminada; T3-6bf684765d com violacao-pagina → violacao-origem-indeterminada; T3-6fbe78a93b sem violacao-pagina → violacao-origem-indeterminada; T3-74644ecf4e sem violacao-pagina → violacao-origem-indeterminada; T3-77344b52e6 com violacao-pagina → violacao-origem-indeterminada; T3-7ede88c13e sem violacao-pagina → violacao-origem-indeterminada; T3-8087fd5ba3 sem violacao-pagina → violacao-origem-indeterminada; T3-81a07673d6 ferramentas violacao-pagina → violacao-origem-indeterminada; T3-8433edae0c sem violacao-pagina → violacao-origem-indeterminada; T3-9a75559cdd com violacao-pagina → violacao-origem-indeterminada; T3-9bddc4f086 ferramentas violacao-origem-indeterminada → violacao-ds; T3-a2b8eabab4 sem violacao-pagina → violacao-origem-indeterminada; T3-a36734484f com violacao-origem-indeterminada → violacao-pagina; T3-a394fd842c ferramentas violacao-pagina → violacao-origem-indeterminada; T3-a986daad02 ferramentas violacao-pagina → violacao-origem-indeterminada; T3-ad009991f3 sem violacao-origem-indeterminada → violacao-ds; T3-ad773bd500 sem violacao-pagina → violacao-origem-indeterminada; T3-aff3ee9c83 com violacao-pagina → violacao-origem-indeterminada; T3-b11bd1eaaf ferramentas violacao-pagina → violacao-origem-indeterminada; T3-b1717e4901 ferramentas violacao-pagina → violacao-origem-indeterminada; T3-b299b1e23b ferramentas violacao-pagina → violacao-origem-indeterminada; T3-b54896c5e0 sem violacao-pagina → violacao-origem-indeterminada; T3-bbdcd18014 sem violacao-pagina → violacao-origem-indeterminada; T3-cc0807fce6 sem violacao-origem-indeterminada → violacao-ds; T3-d3998a7628 ferramentas violacao-pagina → violacao-origem-indeterminada; T3-da81962dad ferramentas violacao-pagina → violacao-origem-indeterminada; T3-dba3a2419a sem violacao-pagina → violacao-origem-indeterminada; T3-e10cb88ebe com violacao-pagina → violacao-origem-indeterminada; T3-e373167f50 ferramentas violacao-pagina → violacao-origem-indeterminada; T3-e700ad7a2f sem violacao-pagina → violacao-origem-indeterminada; T3-ef8627be33 ferramentas violacao-pagina → violacao-origem-indeterminada; T3-f7c0d2a569 sem violacao-origem-indeterminada → violacao-pagina; T3-fa86316465 sem violacao-pagina → violacao-origem-indeterminada; T3-fa9dd92151 ferramentas violacao-origem-indeterminada → violacao-ds; T3-fb731cfbf5 ferramentas violacao-pagina → violacao-origem-indeterminada; T3-fc924226e5 sem violacao-origem-indeterminada → violacao-ds; T3-fd8ebefa41 sem violacao-pagina → violacao-origem-indeterminada; T3-feea23e790 com violacao-pagina → violacao-origem-indeterminada.
Crédito retirado por origem DS: nenhum. Candidatos do estrato 4 (origem DS): T3-1b4e1a09c0 (ferramentas), T3-1c344ed09e (sem), T3-33ad71820c (ferramentas), T3-5d9bd1137a (ferramentas), T3-9bddc4f086 (ferramentas), T3-ad009991f3 (sem), T3-cc0807fce6 (sem), T3-fa9dd92151 (ferramentas), T3-fc924226e5 (sem).

Decisões recusadas pelo scorer (ficaram pendentes): 8 grupo(s); ver `recalculo.json › recusasDoScorer`.

## Coluna fundamentada (descritiva, sem teste) e a sensibilidade "sem ids expostos"

Regra: fundamentada = specFundamentada (e14-deteccao.ts) sobre o derivado da passada (com a origem medida, se dada); sensibilidade "sem ids expostos": o cartão cuja norma que deu a classe (a regra do achado, ou a referência secundária do achado em citacaoPor), na forma canônica, é id exposto da spec creditada sai da coluna ("fundamentada por norma exposta"); o cartão cuja norma é id de verificação (ds:<verificação>, alias de várias regras) numa spec com ids expostos fica contado como na principal e listado em porAlias, porque a passada resolve esse id pelo checker-aliases.json e pela base do validador, que o recálculo não lê; a mesma passada, sem juiz novo; a detecção e as tabelas não mudam.

- `sem-ids-expostos`: sem ids expostos (3 spec(s) mudam; só a coluna fundamentada: crédito fundamentado só por id exposto da spec sai da coluna; a detecção não muda; sensibilidade).

### specs do DS semeadas, não expostas (6)

| leitura | sem (por trio) | ferramentas (por trio) | com (por trio) |
|---|---|---|---|
| principal | 2, 2, 2, 2, 2, 2, 2, 2, 2 | 2, 2, 2, 2, 2, 2, 2, 2, 2 | 6, 6, 6, 6, 6, 6, 6, 6, 6 |
| sem-ids-expostos | 2, 2, 2, 2, 2, 2, 2, 2, 2 | 2, 2, 2, 2, 2, 2, 2, 2, 2 | 6, 6, 6, 6, 6, 6, 6, 6, 6 |

### todas as specs da E (8; sensibilidade)

| leitura | sem (por trio) | ferramentas (por trio) | com (por trio) |
|---|---|---|---|
| principal | 3, 4, 4, 3, 3, 4, 4, 3, 3 | 4, 4, 3, 4, 4, 4, 4, 3, 3 | 8, 7, 8, 7, 8, 7, 7, 8, 7 |
| sem-ids-expostos | 3, 4, 4, 3, 3, 4, 4, 3, 3 | 4, 4, 3, 4, 4, 4, 4, 3, 3 | 8, 7, 8, 7, 8, 7, 7, 8, 7 |

### com a U-09 (9 specs; a U-09 no denominador com crédito zero nos três braços; sensibilidade)

| leitura | sem (por trio) | ferramentas (por trio) | com (por trio) |
|---|---|---|---|
| principal | 3, 4, 4, 3, 3, 4, 4, 3, 3 | 4, 4, 3, 4, 4, 4, 4, 3, 3 | 8, 7, 8, 7, 8, 7, 7, 8, 7 |
| sem-ids-expostos | 3, 4, 4, 3, 3, 4, 4, 3, 3 | 4, 4, 3, 4, 4, 4, 4, 3, 3 | 8, 7, 8, 7, 8, 7, 7, 8, 7 |

Fundamentados só por norma exposta: nenhum.

Por id de verificação (alias; contados como na principal, não resolvidos aqui): nenhum.

## ANÁLISE DE SENSIBILIDADE — por protocolo (NAT-78 §4.5); não é o primário, nunca no lugar dele

Leitura `sensibilidade-por-protocolo` (tipo `sensibilidade`, `nat78-deteccao-por-protocolo-1.0.0`, definição `nat78-aderencia-por-protocolo-1.0.0`): ANÁLISE DE SENSIBILIDADE (por protocolo, NAT-78 §4.5), não o primário: ao lado do primário (intenção de tratar), nunca no lugar dele nem somada a ele. Conjunto por protocolo: `sem` com `absent-verified`; `ferramentas` com `used-adherent`; `com` com `used-adherent`. Trio com slot fora: **sai de todas as comparações desta leitura** (listado). Desfecho: specs do DS semeadas, não expostas (6), política 1.2.0 (a chave do principal). Semente própria (`…|sensibilidade-por-protocolo|recalculo|…`).

### Exclusões por braço

| braço | slots com estado do oráculo | no conjunto por protocolo | excluídos | estado que excluiu |
|---|---|---|---|---|
| ferramentas | 9 | 9 | 0 | — |
| com | 9 | 8 | 1 | `used-with-errors` 1 |
| sem | 9 | 9 | 0 | — |

### Estado do oráculo por trio e slot

| trio | sem | ferramentas | com |
|---|---|---|---|
| p01 | `absent-verified` | `used-adherent` | `used-adherent` |
| p02 | `absent-verified` | `used-adherent` | `used-adherent` |
| p03 | `absent-verified` | `used-adherent` | `used-adherent` |
| p04 | `absent-verified` | `used-adherent` | `used-adherent` |
| p05 | `absent-verified` | `used-adherent` | `used-adherent` |
| p06 | `absent-verified` | `used-adherent` | **fora: `used-with-errors`** |
| p07 | `absent-verified` | `used-adherent` | `used-adherent` |
| p08 | `absent-verified` | `used-adherent` | `used-adherent` |
| p09 | `absent-verified` | `used-adherent` | `used-adherent` |

### D_fc — ferramentas × com (primária) — sensibilidade-por-protocolo

D_fc = com − ferramentas · desfecho: specs do DS semeadas, não expostas (6) · δ = 2 specs

| trio | posição ferramentas/com | ferramentas | com | D_fc | estado |
|---|---|---|---|---|---|
| p01 | 2/3 | 5 | 6 | 1 | final |
| p02 | 3/1 | 6 | 6 | 0 | final |
| p03 | 1/2 | 6 | 6 | 0 | final |
| p04 | 1/2 | 6 | 6 | 0 | provisorio |
| p05 | 3/1 | 5 | 6 | 1 | final |
| p07 | 3/1 | 5 | 6 | 1 | final |
| p08 | 1/2 | 6 | 6 | 0 | final |
| p09 | 2/3 | 5 | 6 | 1 | final |

- Campanha (PROVISORIO): média 0,50, mediana 0,50, DP 0,53; n efetivo 8, planejado 9; envoltória da média [0,50, 0,50]
- Permutação exata por troca de sinais: p 0,1250; Wilcoxon-Pratt p 0,1250; sinal p 0,1250
- IC 95% bootstrap: [0,13, 0,88]
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2).

- Fora desta comparação por protocolo: p06 (com `used-with-errors`).

### D_sc — sem × com (secundária) — sensibilidade-por-protocolo

D_sc = com − sem · desfecho: specs do DS semeadas, não expostas (6) · δ = 2 specs

| trio | posição sem/com | sem | com | D_sc | estado |
|---|---|---|---|---|---|
| p01 | 1/3 | 5 | 6 | 1 | final |
| p02 | 2/1 | 6 | 6 | 0 | final |
| p03 | 3/2 | 6 | 6 | 0 | provisorio |
| p04 | 3/2 | 5 | 6 | 1 | provisorio |
| p05 | 2/1 | 5 | 6 | 1 | final |
| p07 | 2/1 | 6 | 6 | 0 | final |
| p08 | 3/2 | 5 | 6 | 1 | final |
| p09 | 1/3 | 6 | 6 | 0 | final |

- Campanha (PROVISORIO): média 0,50, mediana 0,50, DP 0,53; n efetivo 8, planejado 9; envoltória da média [0,50, 0,50]
- Permutação exata por troca de sinais: p 0,1250; Wilcoxon-Pratt p 0,1250; sinal p 0,1250
- IC 95% bootstrap: [0,13, 0,88]
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2).

- Fora desta comparação por protocolo: p06 (com `used-with-errors`).

### D_sf — sem × ferramentas (secundária) — sensibilidade-por-protocolo

D_sf = ferramentas − sem · desfecho: specs do DS semeadas, não expostas (6) · δ = 2 specs

| trio | posição sem/ferramentas | sem | ferramentas | D_sf | estado |
|---|---|---|---|---|---|
| p01 | 1/2 | 5 | 5 | 0 | final |
| p02 | 2/3 | 6 | 6 | 0 | final |
| p03 | 3/1 | 6 | 6 | 0 | provisorio |
| p04 | 3/1 | 5 | 6 | 1 | provisorio |
| p05 | 2/3 | 5 | 5 | 0 | final |
| p07 | 2/3 | 6 | 5 | -1 | final |
| p08 | 3/1 | 5 | 6 | 1 | final |
| p09 | 1/2 | 6 | 5 | -1 | final |

- Campanha (PROVISORIO): média 0, mediana 0, DP 0,76; n efetivo 8, planejado 9; envoltória da média [0, 0]
- Permutação exata por troca de sinais: p 1; Wilcoxon-Pratt p 1; sinal p 1
- IC 95% bootstrap: [-0,50, 0,50]
- **Leitura congelada (§6.3):** nenhuma diferença detectável. **Leitura com δ:** o IC estimado caiu dentro da faixa pré-especificada de ±δ (±2).

- Fora desta comparação por protocolo: p06 (com `used-with-errors`).

### Usado com erros (`used-with-errors`): fora do conjunto por protocolo, à parte

| trio | braço | execução | contagem no primário (1.2.0) |
|---|---|---|---|
| p06 | com | 20261118-195935-cadastro-pais-com-bc3f | 6 |
