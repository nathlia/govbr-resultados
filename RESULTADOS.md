# Resultados de relance

> Gerado pelo painel de resultados (`npm run painel:resultados -- resumo --arquivo <clone>` ou o botão “Atualizar RESULTADOS.md”). Não edite à mão: gere de novo.

Gerado em: 03/10/2026, 22:42 (Brasília)

Os números vêm da revisão cega: cada alegação do agente virou um cartão, decidido sem saber o braço, e só então a análise contou as unidades da referência confirmadas. Cada linha usa a revisão atual do par, `analises/<campanha>/<par>/revisoes/rev-NNN/summary.json` (o arquivo exato está abaixo de cada tabela).

- **FINAL**: todos os cartões decididos; o número só muda com uma revisão nova.
- **PROVISÓRIO com N cartões pendentes**: a revisão está aberta; as confirmadas são “até agora” e o recall fica indisponível (nunca 0).
- **sem análise**: o par ainda não foi preparado no painel (ou falta um braço).
- A soma de uma campanha usa só os pares FINAIS e diz o n. Um par provisório nunca entra na soma.

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

Fora desta página: 2 campanhas de ensaio (ensaio-duble, ensaio-t4) — dublê, roteiro ou fixture, nunca dado científico.
