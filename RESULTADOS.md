# Resultados de relance

> Gerado pelo painel de resultados (`npm run painel:resultados -- resumo --arquivo <clone>` ou o botão “Atualizar RESULTADOS.md”). Não edite à mão: gere de novo.

Gerado em: 12/10/2026, 21:19 (Brasília)

Os números vêm da revisão cega: cada alegação do agente virou um cartão, decidido sem saber o braço, e só então a análise contou as unidades da referência confirmadas. Cada linha usa a revisão atual do par, `analises/<campanha>/<par>/revisoes/rev-NNN/summary.json` (o arquivo exato está abaixo de cada tabela).

- **FINAL**: todos os cartões decididos; o número só muda com uma revisão nova.
- **PROVISÓRIO com N cartões pendentes**: a revisão está aberta; as confirmadas são “até agora” e o recall fica indisponível (nunca 0).
- **sem análise**: o par ainda não foi preparado no painel (ou falta um braço).
- **NÃO CONTA — par inelegível**: um braço teve falha técnica (mesmo depois de enviar o relatório), isolamento não comprovado ou identidade fora da campanha. A pontuação dele é só diagnóstico; o par nunca vira FINAL nem entra na soma.
- A soma de uma campanha usa só os pares FINAIS e diz o n. Um par provisório nunca entra na soma.

## t7b-sonnet-tela-a-01 — campanha formal

Campanha T7b — tela A (Solicitar serviço), referência 2.0.0, Sonnet 5.5 high, 10 pares sem/com em ordem contrabalançada

### Desfecho principal — **FINAL — D = confirmadas com − sem nas unidades sorteadas (A-*); n efetivo 10 de 10 pares planejados**

- D por par: p01 +3 · p02 +2 · p03 0 · p04 +1 · p05 −2 · p06 −3 · p07 −1 · p08 +2 · p09 −2 · p10 −2
- média -0,20 · mediana -0,50 · desvio-padrão 2,10
- IC 95% da média: -1,40 a 1 (bootstrap percentil sobre pares, 10000 reamostragens, gerador mulberry32, semente 1573597886 de sha256(1a4959bbce62…/bootstrap))
- teste principal — permutação exata por troca de sinal sobre a média, bicaudal: p = 0,8828
- leitura: sem diferença detectável (não estabelece equivalência)
- robustez — Wilcoxon de postos sinalizados (Pratt, postos médios, exato): p = 0,8633; zeros 1
- robustez — teste do sinal exato: 4 a favor do com, 5 do sem, 1 empates (fora); p = 1,0000

Secundários, por braço (nunca somados ao principal):

- sem: precisão média das afirmações 60,4% · incorretas 30 · defeitos novos corretos 16 · página (P-*) 0/20 (n = 10)
- com: precisão média das afirmações 46,3% · incorretas 161 · defeitos novos corretos 29 · página (P-*) 6/20 (n = 10)

### Planejado × executado (pela agenda)

- slots planejados 20 · não iniciados 0 · válidos 20 · aguardam nova tentativa 0 · perdidos 0
- tentativas 20 (extras usadas 0 de 4) · pares completos 10 de 10 · pares perdidos 0
- perdas por braço: sem 0 de 10 tentados (tempo esgotado 0) · com 0 de 10 tentados (tempo esgotado 0)

| Par | Abre com | Slot sem | Slot com | Intervalo entre inícios | D (sorteadas) |
|---|---|---|---|---|---|
| p01 | com | p01-sem: válido | p01-com: válido | 7 min | **+3** (2 → 5) |
| p02 | sem | p02-sem: válido | p02-com: válido | 9 min | **+2** (3 → 5) |
| p03 | com | p03-sem: válido | p03-com: válido | 8 min | **0** (5 → 5) |
| p04 | sem | p04-sem: válido | p04-com: válido | 10 min | **+1** (4 → 5) |
| p05 | com | p05-sem: válido | p05-com: válido | 8 min | **−2** (5 → 3) |
| p06 | sem | p06-sem: válido | p06-com: válido | 8 min | **−3** (7 → 4) |
| p07 | com | p07-sem: válido | p07-com: válido | 8 min | **−1** (5 → 4) |
| p08 | com | p08-sem: válido | p08-com: válido | 9 min | **+2** (2 → 4) |
| p09 | sem | p09-sem: válido | p09-com: válido | 9 min | **−2** (7 → 5) |
| p10 | sem | p10-sem: válido | p10-com: válido | 8 min | **−2** (3 → 1) |

Pares finais: **10 de 10**. Unidades confirmadas somadas só nos pares finais (n = 10): **sem 43 · com 47** (de 160 unidades da referência). Soma descritiva, sem inferência.

| Par | Tela | Modelo | Sem oráculo: confirmadas/total | Com oráculo: confirmadas/total | Diferença com − sem | Defeitos novos corretos sem / com | Incorretas sem / com | Selo |
|---|---|---|---|---|---|---|---|---|
| p01 | solicitacao | claude-sonnet-5-5 | 2/16 (recall 12,5%)<br>sorteadas × página: A-\* 2/14 (recall 14,3%) × P-\* 0/2 (recall 0,0%) | 7/16 (recall 43,8%)<br>sorteadas × página: A-\* 5/14 (recall 35,7%) × P-\* 2/2 (recall 100,0%) | +5 unidades (+31,3 p.p.) | 1 / 1 | 2 / 46 | **FINAL** |
| p02 | solicitacao | claude-sonnet-5-5 | 3/16 (recall 18,8%)<br>sorteadas × página: A-\* 3/14 (recall 21,4%) × P-\* 0/2 (recall 0,0%) | 5/16 (recall 31,3%)<br>sorteadas × página: A-\* 5/14 (recall 35,7%) × P-\* 0/2 (recall 0,0%) | +2 unidades (+12,5 p.p.) | 2 / 3 | 5 / 3 | **FINAL** |
| p03 | solicitacao | claude-sonnet-5-5 | 5/16 (recall 31,3%)<br>sorteadas × página: A-\* 5/14 (recall 35,7%) × P-\* 0/2 (recall 0,0%) | 5/16 (recall 31,3%)<br>sorteadas × página: A-\* 5/14 (recall 35,7%) × P-\* 0/2 (recall 0,0%) | 0 unidades (0,0 p.p.) | 2 / 2 | 1 / 3 | **FINAL** |
| p04 | solicitacao | claude-sonnet-5-5 | 4/16 (recall 25,0%)<br>sorteadas × página: A-\* 4/14 (recall 28,6%) × P-\* 0/2 (recall 0,0%) | 5/16 (recall 31,3%)<br>sorteadas × página: A-\* 5/14 (recall 35,7%) × P-\* 0/2 (recall 0,0%) | +1 unidade (+6,3 p.p.) | 1 / 4 | 5 / 48 | **FINAL** |
| p05 | solicitacao | claude-sonnet-5-5 | 5/16 (recall 31,3%)<br>sorteadas × página: A-\* 5/14 (recall 35,7%) × P-\* 0/2 (recall 0,0%) | 3/16 (recall 18,8%)<br>sorteadas × página: A-\* 3/14 (recall 21,4%) × P-\* 0/2 (recall 0,0%) | −2 unidades (−12,5 p.p.) | 2 / 4 | 2 / 2 | **FINAL** |
| p06 | solicitacao | claude-sonnet-5-5 | 7/16 (recall 43,8%)<br>sorteadas × página: A-\* 7/14 (recall 50,0%) × P-\* 0/2 (recall 0,0%) | 5/16 (recall 31,3%)<br>sorteadas × página: A-\* 4/14 (recall 28,6%) × P-\* 1/2 (recall 50,0%) | −2 unidades (−12,5 p.p.) | 1 / 4 | 0 / 5 | **FINAL** |
| p07 | solicitacao | claude-sonnet-5-5 | 5/16 (recall 31,3%)<br>sorteadas × página: A-\* 5/14 (recall 35,7%) × P-\* 0/2 (recall 0,0%) | 5/16 (recall 31,3%)<br>sorteadas × página: A-\* 4/14 (recall 28,6%) × P-\* 1/2 (recall 50,0%) | 0 unidades (0,0 p.p.) | 1 / 2 | 4 / 2 | **FINAL** |
| p08 | solicitacao | claude-sonnet-5-5 | 2/16 (recall 12,5%)<br>sorteadas × página: A-\* 2/14 (recall 14,3%) × P-\* 0/2 (recall 0,0%) | 4/16 (recall 25,0%)<br>sorteadas × página: A-\* 4/14 (recall 28,6%) × P-\* 0/2 (recall 0,0%) | +2 unidades (+12,5 p.p.) | 4 / 3 | 4 / 5 | **FINAL** |
| p09 | solicitacao | claude-sonnet-5-5 | 7/16 (recall 43,8%)<br>sorteadas × página: A-\* 7/14 (recall 50,0%) × P-\* 0/2 (recall 0,0%) | 6/16 (recall 37,5%)<br>sorteadas × página: A-\* 5/14 (recall 35,7%) × P-\* 1/2 (recall 50,0%) | −1 unidade (−6,3 p.p.) | 1 / 6 | 6 / 1 | **FINAL** |
| p10 | solicitacao | claude-sonnet-5-5 | 3/16 (recall 18,8%)<br>sorteadas × página: A-\* 3/14 (recall 21,4%) × P-\* 0/2 (recall 0,0%) | 2/16 (recall 12,5%)<br>sorteadas × página: A-\* 1/14 (recall 7,1%) × P-\* 1/2 (recall 50,0%) | −1 unidade (−6,3 p.p.) | 1 / 0 | 1 / 46 | **FINAL** |

Fontes:

- p01: `analises/t7b-sonnet-tela-a-01/p01/revisoes/rev-002/summary.json`
- p02: `analises/t7b-sonnet-tela-a-01/p02/revisoes/rev-002/summary.json`
- p03: `analises/t7b-sonnet-tela-a-01/p03/revisoes/rev-002/summary.json`
- p04: `analises/t7b-sonnet-tela-a-01/p04/revisoes/rev-002/summary.json`
- p05: `analises/t7b-sonnet-tela-a-01/p05/revisoes/rev-002/summary.json`
- p06: `analises/t7b-sonnet-tela-a-01/p06/revisoes/rev-002/summary.json`
- p07: `analises/t7b-sonnet-tela-a-01/p07/revisoes/rev-002/summary.json`
- p08: `analises/t7b-sonnet-tela-a-01/p08/revisoes/rev-002/summary.json`
- p09: `analises/t7b-sonnet-tela-a-01/p09/revisoes/rev-002/summary.json`
- p10: `analises/t7b-sonnet-tela-a-01/p10/revisoes/rev-002/summary.json`

## t7-tela-b-01 — campanha formal

Campanha T7c — tela B (Vistorias PROPESC), referência 1.0.0, Opus 5.5 high, 10 pares sem/com em ordem contrabalançada

### Desfecho principal — **FINAL — D = specs confirmadas com − sem, nas 29 specs da referência (spec confirmada = pelo menos 1 unidade confirmada; D-102 (NAT-69, opção A; protocolo §2)); n efetivo 10 de 10 pares planejados**

- D por par (em specs): p01 −1 · p02 0 · p03 −3 · p04 −2 · p05 0 · p06 0 · p07 −2 · p08 +2 · p09 −3 · p10 +2
- média -0,70 · mediana -0,50 · desvio-padrão 1,83
- IC 95% da média: -1,70 a 0,40 (bootstrap percentil sobre pares, 10000 reamostragens, gerador mulberry32, semente 2608969728 de sha256(2a0b6613af91…/bootstrap))
- teste principal — permutação exata por troca de sinal sobre a média, bicaudal: p = 0,3125
- leitura: sem diferença detectável (não estabelece equivalência)
- robustez — Wilcoxon de postos sinalizados (Pratt, postos médios, exato): p = 0,2813; zeros 3
- robustez — teste do sinal exato: 2 a favor do com, 5 do sem, 3 empates (fora); p = 0,4531

Secundários, por braço (nunca somados ao principal):

- unidades confirmadas por par (das 102), sem → com: p01 33 → 32 (−1) · p02 32 → 32 (0) · p03 35 → 32 (−3) · p04 33 → 31 (−2) · p05 33 → 33 (0) · p06 33 → 33 (0) · p07 32 → 30 (−2) · p08 31 → 33 (+2) · p09 35 → 32 (−3) · p10 30 → 32 (+2)
- sem: unidades confirmadas 327/1020 · precisão média das afirmações 89,3% · incorretas 41 · defeitos novos corretos 572 · página (P-*) indisponível (n = 10)
- com: unidades confirmadas 320/1020 · precisão média das afirmações 91,9% · incorretas 29 · defeitos novos corretos 649 · página (P-*) indisponível (n = 10)

### Planejado × executado (pela agenda)

- slots planejados 20 · não iniciados 0 · válidos 20 · aguardam nova tentativa 0 · perdidos 0
- tentativas 21 (extras usadas 1 de 4) · pares completos 10 de 10 · pares perdidos 0
- perdas por braço: sem 0 de 10 tentados (tempo esgotado 0) · com 0 de 10 tentados (tempo esgotado 0)

| Par | Abre com | Slot sem | Slot com | Intervalo entre inícios | D (specs) |
|---|---|---|---|---|---|
| p01 | sem | p01-sem: válido | p01-com: válido | 19 min | **−1** (specs 11 → 10; unidades 33 → 32) |
| p02 | com | p02-sem: válido | p02-com: válido | 12 min | **0** (specs 10 → 10; unidades 32 → 32) |
| p03 | com | p03-sem: válido | p03-com: válido | 15 min | **−3** (specs 13 → 10; unidades 35 → 32) |
| p04 | com | p04-sem: válido | p04-com: válido | 15 min | **−2** (specs 11 → 9; unidades 33 → 31) |
| p05 | com | p05-sem: válido | p05-com: válido | 17 min | **0** (specs 11 → 11; unidades 33 → 33) |
| p06 | sem | p06-sem: válido | p06-com: válido | 15 min | **0** (specs 11 → 11; unidades 33 → 33) |
| p07 | sem | p07-sem: válido | p07-com: válido (2 tentativas) — tentativa 2 (primeira elegível) | 7 h 33 min | **−2** (specs 10 → 8; unidades 32 → 30) |
| p08 | sem | p08-sem: válido | p08-com: válido | 17 min | **+2** (specs 9 → 11; unidades 31 → 33) |
| p09 | com | p09-sem: válido | p09-com: válido | 16 min | **−3** (specs 13 → 10; unidades 35 → 32) |
| p10 | sem | p10-sem: válido | p10-com: válido | 17 min | **+2** (specs 8 → 10; unidades 30 → 32) |

Pares finais: **10 de 10**. Unidades confirmadas somadas só nos pares finais (n = 10): **sem 327 · com 320** (de 1020 unidades da referência). Soma descritiva, sem inferência.

| Par | Tela | Modelo | Sem oráculo: confirmadas/total | Com oráculo: confirmadas/total | Diferença com − sem | Defeitos novos corretos sem / com | Incorretas sem / com | Selo |
|---|---|---|---|---|---|---|---|---|
| p01 | vistorias | claude-opus-5-5 | 33/102 (recall 32,4%) | 32/102 (recall 31,4%) | −1 unidade (−1,0 p.p.) | 77 / 51 | 4 / 2 | **FINAL** |
| p02 | vistorias | claude-opus-5-5 | 32/102 (recall 31,4%) | 32/102 (recall 31,4%) | 0 unidades (0,0 p.p.) | 70 / 38 | 8 / 8 | **FINAL** |
| p03 | vistorias | claude-opus-5-5 | 35/102 (recall 34,3%) | 32/102 (recall 31,4%) | −3 unidades (−2,9 p.p.) | 44 / 64 | 3 / 3 | **FINAL** |
| p04 | vistorias | claude-opus-5-5 | 33/102 (recall 32,4%) | 31/102 (recall 30,4%) | −2 unidades (−2,0 p.p.) | 48 / 46 | 2 / 2 | **FINAL** |
| p05 | vistorias | claude-opus-5-5 | 33/102 (recall 32,4%) | 33/102 (recall 32,4%) | 0 unidades (0,0 p.p.) | 34 / 107 | 2 / 2 | **FINAL** |
| p06 | vistorias | claude-opus-5-5 | 33/102 (recall 32,4%) | 33/102 (recall 32,4%) | 0 unidades (0,0 p.p.) | 66 / 71 | 3 / 2 | **FINAL** |
| p07 | vistorias | — | 32/102 (recall 31,4%) | 30/102 (recall 29,4%) | −2 unidades (−2,0 p.p.) | 66 / 55 | 2 / 3 | **FINAL** |
| p08 | vistorias | claude-opus-5-5 | 31/102 (recall 30,4%) | 33/102 (recall 32,4%) | +2 unidades (+2,0 p.p.) | 53 / 66 | 2 / 2 | **FINAL** |
| p09 | vistorias | claude-opus-5-5 | 35/102 (recall 34,3%) | 32/102 (recall 31,4%) | −3 unidades (−2,9 p.p.) | 48 / 106 | 10 / 2 | **FINAL** |
| p10 | vistorias | claude-opus-5-5 | 30/102 (recall 29,4%) | 32/102 (recall 31,4%) | +2 unidades (+2,0 p.p.) | 66 / 45 | 5 / 3 | **FINAL** |

Fontes:

- p01: `analises/t7-tela-b-01/p01/revisoes/rev-002/summary.json`
- p02: `analises/t7-tela-b-01/p02/revisoes/rev-002/summary.json`
- p03: `analises/t7-tela-b-01/p03/revisoes/rev-003/summary.json`
- p04: `analises/t7-tela-b-01/p04/revisoes/rev-003/summary.json`
- p05: `analises/t7-tela-b-01/p05/revisoes/rev-002/summary.json`
- p06: `analises/t7-tela-b-01/p06/revisoes/rev-002/summary.json`
- p07: `analises/t7-tela-b-01/p07/revisoes/rev-003/summary.json`
- p08: `analises/t7-tela-b-01/p08/revisoes/rev-002/summary.json`
- p09: `analises/t7-tela-b-01/p09/revisoes/rev-002/summary.json`
- p10: `analises/t7-tela-b-01/p10/revisoes/rev-002/summary.json`

## prova-vistorias-01 — calibração — não é resultado (D-67)

Prova de tempo e custo da tela B (Vistorias) — braço com, Opus high, 1 execução fora do resultado

Campanha de um braço só (pelo desenho): não há comparação com × sem.

| Par | Tela | Modelo | Sem oráculo: confirmadas/total | Com oráculo: confirmadas/total | Diferença com − sem | Defeitos novos corretos sem / com | Incorretas sem / com | Selo |
|---|---|---|---|---|---|---|---|---|
| par-01 | vistorias | claude-opus-5-5 | — | — | indisponível | — | — | **um braço só (desenho da campanha)** |

## t7-tela-a-01 — campanha formal

Campanha T7 — tela A (Solicitar serviço), referência 2.0.0, Opus high, 10 pares sem/com em ordem contrabalançada

### Desfecho principal — **FINAL — D = confirmadas com − sem nas unidades sorteadas (A-*); n efetivo 10 de 10 pares planejados**

- D por par: p01 0 · p02 +2 · p03 0 · p04 +1 · p05 −1 · p06 0 · p07 −1 · p08 −2 · p09 +1 · p10 0
- média 0 · mediana 0 · desvio-padrão 1,15
- IC 95% da média: -0,70 a 0,70 (bootstrap percentil sobre pares, 10000 reamostragens, gerador mulberry32, semente 3675791356 de sha256(0d30fbc15e18…/bootstrap))
- teste principal — permutação exata por troca de sinal sobre a média, bicaudal: p = 1,0000
- leitura: sem diferença detectável (não estabelece equivalência)
- robustez — Wilcoxon de postos sinalizados (Pratt, postos médios, exato): p = 1,0000; zeros 4
- robustez — teste do sinal exato: 3 a favor do com, 3 do sem, 4 empates (fora); p = 1,0000

Secundários, por braço (nunca somados ao principal):

- sem: precisão média das afirmações 52,7% · incorretas 97 · defeitos novos corretos 2 · página (P-*) 0/20 (n = 10)
- com: precisão média das afirmações 50,7% · incorretas 208 · defeitos novos corretos 5 · página (P-*) 17/20 (n = 10)

### Planejado × executado (pela agenda)

- slots planejados 20 · não iniciados 0 · válidos 20 · aguardam nova tentativa 0 · perdidos 0
- tentativas 20 (extras usadas 0 de 4) · pares completos 10 de 10 · pares perdidos 0
- perdas por braço: sem 0 de 10 tentados (tempo esgotado 0) · com 0 de 10 tentados (tempo esgotado 0)

| Par | Abre com | Slot sem | Slot com | Intervalo entre inícios | D (sorteadas) |
|---|---|---|---|---|---|
| p01 | sem | p01-sem: válido | p01-com: válido | 14 min | **0** (9 → 9) |
| p02 | com | p02-sem: válido | p02-com: válido | 12 min | **+2** (8 → 10) |
| p03 | sem | p03-sem: válido | p03-com: válido | 12 min | **0** (9 → 9) |
| p04 | com | p04-sem: válido | p04-com: válido | 11 min | **+1** (8 → 9) |
| p05 | com | p05-sem: válido | p05-com: válido | 12 min | **−1** (9 → 8) |
| p06 | sem | p06-sem: válido | p06-com: válido | 15 min | **0** (9 → 9) |
| p07 | com | p07-sem: válido | p07-com: válido | 15 min | **−1** (9 → 8) |
| p08 | sem | p08-sem: válido | p08-com: válido | 11 min | **−2** (9 → 7) |
| p09 | sem | p09-sem: válido | p09-com: válido | 11 min | **+1** (7 → 8) |
| p10 | com | p10-sem: válido | p10-com: válido | 12 min | **0** (8 → 8) |

Pares finais: **10 de 10**. Unidades confirmadas somadas só nos pares finais (n = 10): **sem 85 · com 102** (de 160 unidades da referência). Soma descritiva, sem inferência.

| Par | Tela | Modelo | Sem oráculo: confirmadas/total | Com oráculo: confirmadas/total | Diferença com − sem | Defeitos novos corretos sem / com | Incorretas sem / com | Selo |
|---|---|---|---|---|---|---|---|---|
| p01 | solicitacao | claude-opus-5-5 | 9/16 (recall 56,3%)<br>sorteadas × página: A-\* 9/14 (recall 64,3%) × P-\* 0/2 (recall 0,0%) | 10/16 (recall 62,5%)<br>sorteadas × página: A-\* 9/14 (recall 64,3%) × P-\* 1/2 (recall 50,0%) | +1 unidade (+6,3 p.p.) | 0 / 1 | 9 / 3 | **FINAL** |
| p02 | solicitacao | claude-opus-5-5 | 8/16 (recall 50,0%)<br>sorteadas × página: A-\* 8/14 (recall 57,1%) × P-\* 0/2 (recall 0,0%) | 12/16 (recall 75,0%)<br>sorteadas × página: A-\* 10/14 (recall 71,4%) × P-\* 2/2 (recall 100,0%) | +4 unidades (+25,0 p.p.) | 0 / 0 | 10 / 45 | **FINAL** |
| p03 | solicitacao | claude-opus-5-5 | 9/16 (recall 56,3%)<br>sorteadas × página: A-\* 9/14 (recall 64,3%) × P-\* 0/2 (recall 0,0%) | 11/16 (recall 68,8%)<br>sorteadas × página: A-\* 9/14 (recall 64,3%) × P-\* 2/2 (recall 100,0%) | +2 unidades (+12,5 p.p.) | 0 / 0 | 7 / 3 | **FINAL** |
| p04 | solicitacao | claude-opus-5-5 | 8/16 (recall 50,0%)<br>sorteadas × página: A-\* 8/14 (recall 57,1%) × P-\* 0/2 (recall 0,0%) | 11/16 (recall 68,8%)<br>sorteadas × página: A-\* 9/14 (recall 64,3%) × P-\* 2/2 (recall 100,0%) | +3 unidades (+18,8 p.p.) | 1 / 0 | 5 / 47 | **FINAL** |
| p05 | solicitacao | claude-opus-5-5 | 9/16 (recall 56,3%)<br>sorteadas × página: A-\* 9/14 (recall 64,3%) × P-\* 0/2 (recall 0,0%) | 10/16 (recall 62,5%)<br>sorteadas × página: A-\* 8/14 (recall 57,1%) × P-\* 2/2 (recall 100,0%) | +1 unidade (+6,3 p.p.) | 0 / 0 | 1 / 45 | **FINAL** |
| p06 | solicitacao | claude-opus-5-5 | 9/16 (recall 56,3%)<br>sorteadas × página: A-\* 9/14 (recall 64,3%) × P-\* 0/2 (recall 0,0%) | 10/16 (recall 62,5%)<br>sorteadas × página: A-\* 9/14 (recall 64,3%) × P-\* 1/2 (recall 50,0%) | +1 unidade (+6,3 p.p.) | 0 / 1 | 33 / 3 | **FINAL** |
| p07 | solicitacao | claude-opus-5-5 | 9/16 (recall 56,3%)<br>sorteadas × página: A-\* 9/14 (recall 64,3%) × P-\* 0/2 (recall 0,0%) | 10/16 (recall 62,5%)<br>sorteadas × página: A-\* 8/14 (recall 57,1%) × P-\* 2/2 (recall 100,0%) | +1 unidade (+6,3 p.p.) | 0 / 1 | 7 / 11 | **FINAL** |
| p08 | solicitacao | claude-opus-5-5 | 9/16 (recall 56,3%)<br>sorteadas × página: A-\* 9/14 (recall 64,3%) × P-\* 0/2 (recall 0,0%) | 9/16 (recall 56,3%)<br>sorteadas × página: A-\* 7/14 (recall 50,0%) × P-\* 2/2 (recall 100,0%) | 0 unidades (0,0 p.p.) | 0 / 0 | 7 / 3 | **FINAL** |
| p09 | solicitacao | claude-opus-5-5 | 7/16 (recall 43,8%)<br>sorteadas × página: A-\* 7/14 (recall 50,0%) × P-\* 0/2 (recall 0,0%) | 10/16 (recall 62,5%)<br>sorteadas × página: A-\* 8/14 (recall 57,1%) × P-\* 2/2 (recall 100,0%) | +3 unidades (+18,8 p.p.) | 1 / 1 | 9 / 3 | **FINAL** |
| p10 | solicitacao | claude-opus-5-5 | 8/16 (recall 50,0%)<br>sorteadas × página: A-\* 8/14 (recall 57,1%) × P-\* 0/2 (recall 0,0%) | 9/16 (recall 56,3%)<br>sorteadas × página: A-\* 8/14 (recall 57,1%) × P-\* 1/2 (recall 50,0%) | +1 unidade (+6,3 p.p.) | 0 / 1 | 9 / 45 | **FINAL** |

Fontes:

- p01: `analises/t7-tela-a-01/p01/revisoes/rev-002/summary.json`
- p02: `analises/t7-tela-a-01/p02/revisoes/rev-002/summary.json`
- p03: `analises/t7-tela-a-01/p03/revisoes/rev-002/summary.json`
- p04: `analises/t7-tela-a-01/p04/revisoes/rev-002/summary.json`
- p05: `analises/t7-tela-a-01/p05/revisoes/rev-002/summary.json`
- p06: `analises/t7-tela-a-01/p06/revisoes/rev-002/summary.json`
- p07: `analises/t7-tela-a-01/p07/revisoes/rev-002/summary.json`
- p08: `analises/t7-tela-a-01/p08/revisoes/rev-002/summary.json`
- p09: `analises/t7-tela-a-01/p09/revisoes/rev-002/summary.json`
- p10: `analises/t7-tela-a-01/p10/revisoes/rev-002/summary.json`

## piloto-01 — calibração — não é resultado (D-67)

Piloto de calibração do benchmark isolado — tela A (Solicitar serviço), Opus high, 2 pares sem/com

Pares finais: **2 de 2**. Unidades confirmadas somadas só nos pares finais (n = 2): **sem 17 · com 19** (de 28 unidades da referência). Soma descritiva, sem inferência.

| Par | Tela | Modelo | Sem oráculo: confirmadas/total | Com oráculo: confirmadas/total | Diferença com − sem | Defeitos novos corretos sem / com | Incorretas sem / com | Selo |
|---|---|---|---|---|---|---|---|---|
| par-01 | solicitacao | claude-opus-5-5 | 9/14 (recall 64,3%) | 9/14 (recall 64,3%) | 0 unidades (0,0 p.p.) | 0 / 2 | 1 / 1 | **FINAL** |
| par-02 | solicitacao | claude-opus-5-5 | 8/14 (recall 57,1%) | 10/14 (recall 71,4%) | +2 unidades (+14,3 p.p.) | 1 / 2 | 9 / 4 | **FINAL** |

Fontes:

- par-01: `analises/piloto-01/par-01/revisoes/rev-004/summary.json`
- par-02: `analises/piloto-01/par-02/revisoes/rev-002/summary.json`

## prova-cliente-01 — calibração — não é resultado (D-67)

Prova do cliente real com a credencial da assinatura — tela A, braço com, Opus high, 1 execução fora do resultado

Campanha de um braço só (pelo desenho): não há comparação com × sem.

| Par | Tela | Modelo | Sem oráculo: confirmadas/total | Com oráculo: confirmadas/total | Diferença com − sem | Defeitos novos corretos sem / com | Incorretas sem / com | Selo |
|---|---|---|---|---|---|---|---|---|
| par-01 | solicitacao | claude-opus-5-5 | — | — | indisponível | — | — | **um braço só (desenho da campanha)** |

Fora desta página: 4 campanhas de ensaio (ensaio-vistorias-01, ensaio-agenda-01, ensaio-duble, ensaio-t4) — dublê, roteiro ou fixture, nunca dado científico.
