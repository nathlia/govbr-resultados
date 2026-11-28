# Substituição das unidades d34–d42 e d44 da adjudicação (2026-11-28)

**Por quê.** A mensagem que entregou a etapa B a estas 10 unidades trazia uma nota de formato com viés:
"if `leiturasAlternativasPlausiveis` is non-empty, every card in the unit with a norm question must come out
`incerta`/`incerto` … otherwise the file is refused". A frase pode ter empurrado as respostas para `incerta`.
d34, d38 e d40 marcaram incerto todos os cartões com pergunta de norma.

A coordenação pediu para refazer d34–d42. Ao rever as mensagens enviadas, a d44 recebeu a mesma nota e entrou
na substituição pelo mesmo motivo. A d43 e as unidades de d45 em diante já receberam a nota neutra.

A d24 e a d33 não entram. A primeira mensagem de etapa B delas era neutra. A segunda veio depois de uma recusa
da ingestão e apresentou as duas saídas ("ou as leituras alternativas continuam plausíveis… ou não…").

**O que foi feito.**
- A pasta original `../adjudicacao/` ficou intacta: é o registro da primeira versão.
- `../adjudicacao-20261128T2/` é uma cópia dela, sem quatro arquivos de cada uma das 10 unidades:
  `respostas/lote-dNN-a.json`, `respostas/lote-dNN-b.json`, `lotes/lote-dNN-b.json` e
  `chave/revelacao-lote-dNN.json`.
- Cada unidade recebeu um adjudicador cego novo, do zero, com:
  - na etapa A, a mesma instrução das outras unidades;
  - na etapa B, exatamente a nota neutra usada da d43 em diante: "the ingestion applies Etapa B item 3 to
    the whole unit, so `leiturasAlternativasPlausiveis` and the norm answers must be consistent across the
    unit (decide on the evidence which applies; the file is refused if the list is non-empty while a card
    with a norm question still has a final class)".
- `revelar` e `aplicar` rodaram sobre a pasta nova. A passada adjudicada nova é
  `../../passada-adjudicada-20261128T2/`. A `passada-adjudicada-20261127T1` fica como versão anterior.

**Resultado** (desfecho B de cada cartão, primeira versão → substituição; 103 cartões nas 10 unidades):
- 32 cartões mudaram de classe; em 9 deles mudou também o crédito. Os outros 71 ficaram iguais.
- d38 (23 cartões): a primeira versão declarou 2 leituras alternativas e deixou os 23 em `evidencia-indisponivel`.
  A nova não declarou nenhuma, e os 23 viraram `violacao-origem-indeterminada`, sem crédito.
  Por braço: com 7, ferramentas 7, sem 9.
- d40 (9 cartões, lb-validator): o mesmo padrão. Antes eram 2 alternativas e os 9 em `evidencia-indisponivel`.
  Agora não há alternativa, e os 9 viraram `violacao-pagina` creditando F3-05.
- d34 manteve as 2 alternativas, com as mesmas classes e os mesmos créditos.
- d35, d36, d37, d39, d41, d42 e d44 ficaram idênticas em classe e em crédito.
- Nenhum crédito de com, ferramentas ou sem mudou. Por isso D_fc, D_sc e D_sf não se movem.

**Arquivos aqui** (cópias dos originais da `../adjudicacao/`):
- `respostas/`: etapas A e B antigas;
- `lotes/`: os `lote-dNN-b.json` antigos;
- `chave/`: as revelações antigas, que não vão a juiz.
