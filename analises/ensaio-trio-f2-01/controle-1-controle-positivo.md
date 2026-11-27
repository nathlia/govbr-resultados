Controle positivo do comparador do controle 1 (mesmo método; só `passes[*].validator.unguided.findings`; oráculo 3.7.12)

| Tela | Linha de base | Achados sem guia | Specs marcadas / total | Ids (telas abertas) | Reproduz registro anterior |
|---|---|---|---|---|---|
| D (`processos`, ref. 1.1.0) | `nat78-tela-d-01/processos/lb-20261116-184336-processos-938e69` | 5 (1 passada) | 2 / 13 | D-05, D-11 | sim: `analises/nat78-tela-d-01/deteccao-20261126T1/resumo.json`, `lb-validator` detecção 2, fundamentada 2, nas 9 análises |
| F2, só as 13 naturais herdadas da D | `ensaio-trio-f2-01/processos-f2/lb-20261127-004246-processos-f2-71e21e` | 10 (5 por passada × 2; os 5 distintos iguais aos da D) | 2 / 13 | — | as mesmas da D: sim (2 de 2) |
| A (`solicitacao`) | `ensaio-trio-real-06/solicitacao/lb-20261126-191127-solicitacao-dca36c` | — | 3 / 14 (mais 2 limítrofes, não contadas) | A-03, P-01, P-02 | — |

- O comparador produz positivos: sim.
- Algo indica que o 0 de 12 da F2 é artefato: não. As passadas visitam todos os estados declarados, as âncoras resolvem com a contagem esperada, e a varredura sem guia da F2 devolve os mesmos achados que a página D sem semente.
