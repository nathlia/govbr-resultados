# Resultados de relance

> Gerado pelo painel de resultados (`npm run painel:resultados -- resumo --arquivo <clone>` ou o botão “Atualizar RESULTADOS.md”). Não edite à mão: gere de novo.

Gerado em: 05/10/2026, 00:04 (Brasília)

Os números vêm da revisão cega: cada alegação do agente virou um cartão, decidido sem saber o braço, e só então a análise contou as unidades da referência confirmadas. Cada linha usa a revisão atual do par, `analises/<campanha>/<par>/revisoes/rev-NNN/summary.json` (o arquivo exato está abaixo de cada tabela).

- **FINAL**: todos os cartões decididos; o número só muda com uma revisão nova.
- **PROVISÓRIO com N cartões pendentes**: a revisão está aberta; as confirmadas são “até agora” e o recall fica indisponível (nunca 0).
- **sem análise**: o par ainda não foi preparado no painel (ou falta um braço).
- **NÃO CONTA — par inelegível**: um braço teve falha técnica (mesmo depois de enviar o relatório), isolamento não comprovado ou identidade fora da campanha. A pontuação dele é só diagnóstico; o par nunca vira FINAL nem entra na soma.
- A soma de uma campanha usa só os pares FINAIS e diz o n. Um par provisório nunca entra na soma.

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

Fora desta página: 3 campanhas de ensaio (ensaio-agenda-01, ensaio-duble, ensaio-t4) — dublê, roteiro ou fixture, nunca dado científico.
