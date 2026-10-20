# Adjudicação de uma unidade — instruções (política normativa 1.2.0)

Você recebe **uma unidade** (`grupo`, `cartoes`): um ou mais cartões que uma regra mecânica, fixada antes de qualquer
resultado, mandou a uma segunda leitura. Reunir cartões numa unidade é só triagem: **não** quer dizer que sejam a mesma
situação nem que devam ter a mesma resposta. Cada cartão tem a sua resposta. **Você não escreve a classe final**: ela sai
das suas respostas por regra fixa (a tabela do `LEIAME-juiz.md`).

**Como julgar cada cartão:** exatamente como manda o `LEIAME-juiz.md` (o mesmo da primeira passada, sem mudança): meça a
página congelada, refaça a receita do `estado` e responda as perguntas fechadas. Só os nomes dos arquivos mudam (abaixo).
Abra só este LEIAME, o `LEIAME-juiz.md`, o seu `lote-dNN.json` (e, na etapa B, o `lote-dNN-b.json`) e os esquemas. Não abra
`manifesto.json`, `chave/` nem outro arquivo, e não tente descobrir de onde um cartão veio nem quem o escreveu.

São **duas etapas**, nesta ordem:

## Etapa A — leitura individual (`lotes/lote-dNN.json` → `respostas/lote-dNN-a.json`)

1. Quando `grupo.pedeLeituraDaNorma` é `true`, leia a norma uma vez e escreva em `leituraDaNorma` a **regra de
   interpretação** que vai aplicar (senão `"nao-perguntado"`): `norma` (`"citada"` se os cartões citam regra; senão a
   norma pública que a alegação implica, `wcag:x.y.z`/`emag:x.y`, ou `"nenhuma"`), `fonteEVersao`, `forca`,
   `antecedente` (quando se aplica), `excecoes`, `evidenciaNecessaria` e `permiteConcluir`.
2. Responda **cada cartão**. Com `grupo.normaUnica` = `true`, `norma.id` e `norma.forca` de cada cartão são os da sua
   leitura; aplicabilidade e violação são de cada cartão.

## Etapa B — reconciliação (`lotes/lote-dNN-b.json` → `respostas/lote-dNN-b.json`)

Depois que a etapa A estiver gravada, você recebe `lote-dNN-b.json`: os mesmos cartões e, em `leiturasAnteriores`, as
respostas que cada cartão já recebeu de outros leitores ("leitura 1", "leitura 2"…, sem dizer de quem nem em que ordem
foram dadas). A sua etapa A fica congelada (o sha256 dela vai no lote B).

1. Compare as leituras anteriores com a sua. Mantenha ou mude **só com evidência** (cartão ou medida da página); nunca
   para chegar a acordo.
2. Classifique a divergência em `classificacaoDaDivergencia`: `tipos` (um ou mais de
   `diferenca-legitima-de-contexto` · `falta-de-evidencia` · `interpretacao-normativa` · `erro-do-juiz`),
   `evidencias` (ids `T3-…` do cartão, ou `T3-…:OBS`, `T3-…:S1`… para o item do cartão) e `justificativa`.
3. Se leituras incompatíveis continuam plausíveis (ex.: a receita traz uma contagem e um alvo que não coincidem, e as duas
   leituras são defensáveis), liste-as em `leiturasAlternativasPlausiveis` (uma frase cada) e deixe os cartões com
   pergunta de norma `incerta`/`incerto` (ou fato não verdadeiro): o caso fica sem crédito e a alternativa vai como
   sensibilidade. Se não há, `[]`.
4. Responda de novo **cada cartão**: a resposta B é a que vale.

## Os arquivos de resposta

Etapa A (`esquema-adjudicacao-a.schema.json`): `{"formato": "nat78-adjudicacao-respostas-a-1.0.0", "lote": "lote-d01", "loteSha256": "<sha256 do
lote-d01.json>", "juiz": "<quem julgou>", "etapa": "a", "grupo": "D-…", "leituraDaNorma": {…} | "nao-perguntado", "respostas": [ … ]}`
— cada resposta tem exatamente os campos do `LEIAME-juiz.md`, com o `id` do cartão deste lote.

Etapa B (`esquema-adjudicacao-b.schema.json`): os mesmos campos, com `"formato": "nat78-adjudicacao-respostas-b-1.0.0"`, `"lote": "lote-d01-b"`,
`"etapa": "b"`, `loteSha256` do `lote-d01-b.json`, mais `leiturasAlternativasPlausiveis` e `classificacaoDaDivergencia`.

Grave as respostas em `respostas/` **na pasta da adjudicação** (ao lado de `lotes/`). A ingestão recusa o arquivo se faltar
um cartão, se um id se repetir ou for de fora da unidade, se um valor estiver fora das listas, se a justificativa não citar
um id do próprio cartão, se norma ou força diferirem da leitura (com `normaUnica`), se houver leitura alternativa e um
cartão com pergunta de norma sair com classe final, ou se `loteSha256` não conferir.
