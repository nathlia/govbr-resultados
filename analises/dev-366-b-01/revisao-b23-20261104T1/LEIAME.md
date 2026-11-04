# revisao-b23-20261104T1 — substitui revisao-b23-20261103T1

Esta pasta substitui `revisao-b23-20261103T1` como a adjudicação do gatilho (d) (regra publicada, D-165) da
dev-366-b-01. A pasta anterior fica como está, intocada, como registro: nenhum adjudicador respondeu nada nela, e nenhum
lote dela deve ir a adjudicador.

**Por quê:** revisão de método do Codex (`d0d554fa`):

1. **[P1] A sensibilidade podia transformar fato falso em detecção.** A validação conferia só a spec da leitura adotada e
   aceitava qualquer spec da referência na outra leitura; a tabulação contava a spec da leitura direto. Corrigido em
   `govbr-eval` (`revisao-campanha.ts` `validarEtapa`, `e14-deteccao.ts` `cenariosDaRegra`): cada leitura é derivada
   pela mesma política da 1ª passada, com a mesma resposta e só o vínculo trocado; uma leitura que credita sem que essa
   derivação credite (fato falso, estado não alcançado, norma não aplicável ou não violada, origem DS, pendência) ou que
   credita spec alheia ao fato do cartão (fora das specs da unidade e das `candidatas`) é recusada. O LEIAME do
   adjudicador e `regras-gatilho-d.md` dizem isso; por isso os sha256 deles mudaram.
2. **Redação da regra entregue.** `regra-identidade-registro.md` ganhou, no § 3, duas frases e nada mais (o resto é byte a
   byte o da regra anterior, `cdd5356a…`): a lista de cartões afetados sai dos cartões, da chave, da referência e do
   crédito da primeira passada congelada — nunca das respostas da nova adjudicação; a primeira passada é entrada
   congelada; e o marcador de texto no `observado` é triagem declarada, não prova de cobertura exaustiva.

**O que é igual à pasta anterior (mesmos bytes, mesmos sha256):** `evidencia/` e `consistencia/` (copiadas), a lista de
cartões afetados e as unidades (`adjudicacao/chave/afetados.json` difere só no sha256 da regra), os esquemas e o
`LEIAME-juiz.md`. **O que mudou:** a regra (sha256 `589eec8a…`), `LEIAME-adjudicacao.md`, `regras-gatilho-d.md`, os
lotes (sha256 da regra e do LEIAME), a chave e o manifesto.

Preparada com:

```
npm run revisao:adjudicacao -- preparar --passada ../govbr-resultados/analises/dev-366-b-01/primeira-passada-20261103T1 \
  --analise ../govbr-resultados/analises/dev-366-b-01/p03/analisar-20261103T1 \
  --saida ../govbr-resultados/analises/dev-366-b-01/revisao-b23-20261104T1 \
  --regra-publicada ../govbr-resultados/analises/dev-366-b-01/revisao-b23-20261104T1/regra-identidade-registro.md \
  --regra-sha256 589eec8ac1bede002b21e8f2be16f0c3ac235dd70b661b2be4633c5b84d4431a \
  --evidencia ../govbr-resultados/analises/dev-366-b-01/revisao-b23-20261104T1/evidencia/medicao-3028-3038.json \
  --evidencia ../govbr-resultados/analises/dev-366-b-01/revisao-b23-20261104T1/evidencia/medicao-3028-3038.md
```

Cegueira: OK (0 falhas). 7 unidades, 14 cartões, todas só do gatilho (d), sem amostra de confiabilidade (motivo no
manifesto).
