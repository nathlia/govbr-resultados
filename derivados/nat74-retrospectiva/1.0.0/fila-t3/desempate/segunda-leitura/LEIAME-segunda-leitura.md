# Fila T3 · leitura de um grupo com os textos oficiais (política normativa 1.2.0)

Você recebe **um grupo** de cartões (`lote-d05-2.json`) que citam a mesma regra sobre o mesmo tipo de elemento, e os
**textos oficiais literais** ligados a essa regra (`textosOficiais`: trechos publicados em gov.br/ds, DS 3.7.0, e o
registro completo da regra citada). Reunir os cartões é só triagem: cada cartão tem a sua resposta. **Você não escreve
a classe final**: ela sai das suas respostas por regra fixa.

**Use só este arquivo.** Não abra outros arquivos nem páginas. Não tente descobrir de onde os cartões vieram. Os textos
oficiais são o que se sabe da regra; `textosOficiais.nota` diz o que a busca no corpus achou e o que não achou. Se os
textos não decidem a questão, não decida por precaução: diga isso.

1. Leia `textosOficiais` (OF1…, REGRA-BASE) e a norma citada (`grupo.norma`). Escreva em `leituraDaNorma` a regra de
   interpretação: `norma` ("citada"), `fonteEVersao`, `forca`, `antecedente`, `excecoes`, `evidenciaNecessaria`,
   `permiteConcluir` — apoiada nos textos (cite OF1… / REGRA-BASE).
2. Responda **cada cartão**. Norma e força iguais à da leitura; aplicabilidade e violação são de cada cartão. Nas
   justificativas, cite os ids do cartão e os dos textos oficiais (`OF1`…`OF6`, `REGRA-BASE`) em que se apoia.
3. Se, com os textos, leituras incompatíveis da regra continuam plausíveis, liste-as em
   `leiturasAlternativasPlausiveis` (uma frase cada) e deixe os cartões com pergunta de norma como `incerta` /
   `incerto`. Se não há, `[]`.
4. `classificacaoDaDivergencia`: de que tipo é o que pode fazer leitores divergirem sobre estes cartões — `tipos` (um ou
   mais de `diferenca-legitima-de-contexto` · `falta-de-evidencia` · `interpretacao-normativa` · `erro-do-juiz`),
   `evidencias` (`T3-…` ou `T3-…:OF1`, `T3-…:REGRA-BASE`, `T3-…:OBS`…) e `justificativa`.

## As perguntas

### `fato` → campo `verdadeFactual`
"O que o cartão observa é verdade no estado declarado?"
- `verdadeira`: o texto e as evidências do cartão, ou um fato medido, sustentam o fato.
- `falsa`: um fato medido no lote **contradiz** o cartão (contraevidência). Ausência de prova não é `falsa` (R1).
- `indisponivel`: não há base para decidir no estado declarado (estado que a receita não alcança, elemento ausente,
  medida impossível) (R9, R10).
- `indeterminado`: você não consegue decidir com o lote.

### `norma` → campo `norma` = `{ id, forca, aplicabilidade, violada }`
"Que norma o cartão invoca? Ela é obrigatória, aplica-se ao fato e foi violada?"
- `id`: se o cartão cita regra, sempre `"citada"` — é a regra citada que se julga, mesmo que outra norma
  coubesse melhor (R11, R15). Se o cartão não cita regra (`regra: null`): a norma pública que a alegação implica
  (`wcag:x.y.z` ou `emag:x.y`), ou `"nenhuma"` se ela não implica norma.
- `forca`: `obrigatorio` · `recomendado` · `boa-pratica` · `exemplo` · `nenhuma` (só com `id: "nenhuma"`) ·
  `indeterminado`. Regra do axe-core só com a etiqueta `best-practice` (sem etiqueta WCAG) é `boa-pratica`. Convenção
  do DS não é WCAG (R3); regra de *token* vale para estilo escrito pela página, não para o que o DS entrega (R4).
- `aplicabilidade`: `aplica` · `nao-aplica` · `incerta`. Ex.: WCAG 3.3.1 pressupõe erro **detectado**; aceitar um valor
  sem detectar nada não o viola (R11). "Sem nome" é refutado por nome calculado não vazio (R2).
- `violada`: `sim` · `nao` · `incerto`.

### `vinculo` → campo `vinculo`
"A alegação descreve o fato de um defeito da referência da tela (mesmo sujeito, mesmo estado, mesma evidência)?"
- `{ "spec": "B-05", "relacao": "…" }`: o id do defeito (qualquer um da lista `referencias` da tela, não só os
  candidatos) e a relação: `direta` (o sujeito é o elemento do defeito), `ausencia-global` (defeito de ausência na
  página inteira), `host-interno` (componente e seu controle interno), `participante-relacionado` (elemento ligado ao
  do defeito).
- `"nenhum"`: não descreve defeito algum da lista. `"indeterminado"`: não dá para decidir.
- Nunca pelo id da regra nem por semelhança de texto (R7): só pelo fato.

### `sugestao` → campo `sugestao` = `{ trataOFato, especificaDoSujeito, naoViolaNormaObrigatoria, qualidade }`
"A correção que o cartão propõe (`esperado`) é válida?" Obrigatória quando a pergunta é `sugestao`; quando é
`sugestao-se-erro-normativo`, obrigatória só se as suas respostas de fato e norma derem erro normativo (tabela abaixo);
nos outros casos use `"nao-perguntado"` (ou responda, se quiser registrar).
- As três condições (`sim` · `nao` · `incerto`): (1) `trataOFato` — trata o fato verdadeiro registrado; (2)
  `especificaDoSujeito` — é específica deste sujeito, não o texto fixo de ajuda da regra; (3)
  `naoViolaNormaObrigatoria` — aplicada, não viola norma obrigatória.
- `qualidade`: `valida` (as três = `sim`) · `generica` (texto fixo de ajuda; condição 2 = `nao`) · `invalida` (alguma
  condição = `nao`) · `ausente` (o cartão não tem `esperado`) · `indeterminada` (alguma condição = `incerto`).
- Uma sugestão útil **não prova** que a violação alegada existia: ela não muda o fato nem a norma.

### Em todo cartão
- `forcaDoVeredito`: `medido` (um fato medido do lote decide) · `inferido` (decidido pelo texto e evidências do cartão) ·
  `incerto`.
- `evidencias`: lista não vazia de ids de `citaveis` em que a resposta se apoia.
- `justificativa`: 1 a 4 frases (mínimo 30 caracteres) que citam pelo menos um desses ids. Diga o que o id mostra.
- Campo não perguntado neste cartão: `"nao-perguntado"`.

## Como a classe sai das respostas (para você saber o efeito; não escreva a classe)

| Respostas | Classe (política 1.2.0) |
|---|---|
| fato `falsa` | erro factual (R1) |
| fato `indisponivel` | evidência indisponível (pendente, R9) |
| fato `indeterminado`, ou força `indeterminado` | pendente |
| fato `verdadeira` + norma `nenhuma` (cartão sem regra citada) + vínculo a um defeito | credita a detecção do defeito, sem fundamentação (regra nula; Q1) |
| fato `verdadeira` + norma `nenhuma` sem vínculo | observação (R11b) |
| fato `verdadeira` + aplicabilidade `incerta` ou violada `incerto` | evidência indisponível (R13) |
| fato `verdadeira` + `nao-aplica` ou violada `nao` | erro normativo (R11a); com sugestão `valida`: observação com norma errada (R11d) |
| fato `verdadeira` + `obrigatorio` + `aplica` + violada `sim` | violação (com vínculo, credita o defeito: R7) |
| fato `verdadeira` + norma mais fraca (`recomendado`, `boa-pratica`, `exemplo`) + `aplica` + `sim` | com vínculo: credita a detecção do defeito, sem crédito de fundamentação (R15); sem vínculo: erro normativo (R13) |

A origem (página ou DS) de uma violação **não** é perguntada: vale a medida (`fatosMedidos`) e, sem medida, fica
"indeterminada (não medida)". Nos cartões com `vereditoRegistrado`, a classe é erro normativo, ou observação com norma
errada se a sugestão é `valida`.

## O arquivo de resposta

Grave `respostas/lote-d05-2.json` (esquema `esquema-segunda-leitura.schema.json`):

```json
{
  "formato": "nat74-t3-segunda-leitura-respostas-1.0.0", "lote": "lote-d05-2", "loteSha256": "<sha256 do lote-d05-2.json>",
  "juiz": "<quem leu>", "etapa": "segunda-leitura", "grupo": "D-…",
  "leituraDaNorma": { "norma": "citada", "fonteEVersao": "…", "forca": "…", "antecedente": "…", "excecoes": "…", "evidenciaNecessaria": "…", "permiteConcluir": "…" },
  "leiturasAlternativasPlausiveis": [],
  "classificacaoDaDivergencia": { "tipos": ["interpretacao-normativa"], "evidencias": ["T3-…:OF1"], "justificativa": "…" },
  "respostas": [ { "id": "T3-…", "verdadeFactual": "…", "norma": { "id": "citada", "forca": "…", "aplicabilidade": "…", "violada": "…" },
    "vinculo": "…", "sugestao": "nao-perguntado", "forcaDoVeredito": "…", "evidencias": ["OBS", "OF1"], "justificativa": "… OF1 …" } ]
}
```
A ingestão recusa o arquivo se faltar um cartão, se um id for de fora do grupo, se um valor estiver fora das listas, se a
justificativa não citar um id, se norma ou força de um cartão diferirem da leitura, se houver leitura alternativa e um
cartão com pergunta de norma sair com classe final, ou se `loteSha256` não conferir.
