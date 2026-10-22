# Amostra de confiabilidade — como responder

As instruções de julgamento são as do `LEIAME-juiz.md` (o da primeira passada, sem mudança): página congelada, medida,
perguntas fechadas, tabela de classes. Só muda o nome dos arquivos:

- o lote que você recebeu chama-se `amostra-NN.json` (amostra-01.json, amostra-02.json); responda **todos** os cartões dele;
- grave a resposta em `respostas/amostra-NN-<juiz>.json` **na pasta da amostra** (ao lado de `lotes/`, nunca dentro dela);
  `<juiz>` é `j1` ou `j2`, dado por quem lhe passou o lote;
- no arquivo de resposta, `"formato": "nat78-primeira-passada-respostas-1.2.0"`, `lote` é `"amostra-NN"` e `loteSha256` é o sha256 do
  `amostra-NN.json` recebido;
- o esquema é `esquema-respostas-amostra.schema.json` (o da primeira passada, salvo o nome do lote).
- Não abra `manifesto.json`, `chave/` nem nenhum outro arquivo: só este LEIAME, o `LEIAME-juiz.md`, o seu lote e o esquema.
