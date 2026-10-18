# Fila T3 · adjudicação de um grupo — instruções (política normativa 1.2.0)

Você recebe **um grupo** de cartões (`grupo`, `cartoes`). Os cartões de um grupo foram reunidos porque falam do mesmo
elemento no mesmo estado, ou citam a mesma norma sobre o mesmo tipo de elemento. Reunir é só triagem: **não** quer dizer
que sejam a mesma situação nem que devam ter a mesma resposta. Cada cartão tem a sua resposta. **Você não escreve a
classe final**: ela sai das suas respostas por regra fixa (tabela abaixo).

**Use só os arquivos que recebeu.** Não procure outros arquivos, não abra páginas e não tente descobrir de onde um cartão
veio nem quem o escreveu. Quando o material não basta, a resposta certa é `indeterminado` / `incerta` / `incerto` /
`indisponivel` — nunca um palpite "por precaução".

São **duas etapas**, nesta ordem:

## Etapa A — leitura individual (`lote-dNN.json` → `respostas/lote-dNN-a.json`)

1. **Leia a norma uma vez** (`grupo.norma`, ou o `normaCitada` dos cartões) e escreva em `leituraDaNorma` a **regra de
   interpretação** que vai aplicar (quando `grupo.pedeLeituraDaNorma` é `true`; senão `"nao-perguntado"`):
   - `norma`: `"citada"` se os cartões citam regra; senão a norma pública que a alegação implica (`wcag:x.y.z`,
     `emag:x.y`) ou `"nenhuma"`;
   - `fonteEVersao`: de onde vem o texto e de que versão (ex.: "WCAG 2.2, critério …");
   - `forca`: a força da norma (`obrigatorio` · `recomendado` · `boa-pratica` · `exemplo` · `nenhuma` · `indeterminado`);
   - `antecedente`: quando ela se aplica (a que elemento/situação);
   - `excecoes`: o que a afasta ou a satisfaz por outro meio;
   - `evidenciaNecessaria`: o que precisa estar no cartão para concluir;
   - `permiteConcluir`: o que essa evidência permite (e não permite) concluir.
2. Responda **cada cartão** do grupo, um por um. A leitura fixa a norma e a força (iguais em todos os cartões com
   pergunta de norma); **aplicabilidade e violação são de cada cartão**: mesma tag e mesma regra não fazem a mesma
   situação (ex.: `title` ou `aria-labelledby` podem dar nome a um botão só com ícone). Se um cartão difere, diga na
   justificativa qual fato difere.

## Etapa B — reconciliação (`lote-dNN-b.json` → `respostas/lote-dNN-b.json`)

Depois que a etapa A estiver gravada, você recebe `lote-dNN-b.json`: os mesmos cartões e as respostas que cada cartão
já recebeu antes (`respostasAnteriores`; sem dizer de quem). A sua etapa A fica congelada (o sha256 dela vai no lote B).

1. Compare as respostas anteriores com a sua leitura. Mantenha ou mude a leitura e as respostas **só com evidência** do
   cartão; nunca para chegar a acordo.
2. Classifique a divergência em `classificacaoDaDivergencia`: `tipos` (um ou mais de
   `diferenca-legitima-de-contexto` · `falta-de-evidencia` · `interpretacao-normativa` · `erro-do-juiz`),
   `evidencias` (ids `T3-…` do cartão, ou `T3-…:OBS`, `T3-…:F1`… para o item do cartão) e `justificativa`.
3. Se leituras incompatíveis da norma continuam plausíveis, liste-as em `leiturasAlternativasPlausiveis` (uma frase
   cada) e deixe os cartões com pergunta de norma como `incerta` / `incerto` (ou fato não verdadeiro): o caso fica
   pendente e a alternativa entra como sensibilidade. Se não há, `[]`.
4. Responda de novo **cada cartão** (a resposta B é a que vale).

## O que cada cartão traz

- `alegacao`: o que o cartão diz. `observado` (o fato alegado), `esperado` (a sugestão de correção; pode faltar),
  `regra` (a regra citada; pode ser nula), `seletor`, `estado` (tamanho da janela e passos até o estado), `cena`,
  `sinais` (avisos da preparação), `evidencias` (ids `E1`, `E2`…) e `sujeitos` (ids `S1`, `S2`…: os elementos de que
  o cartão fala, com a chave CSS e o rótulo; até 12 — `sujeitosNaoListados` conta os demais, do mesmo cartão).
- `normaCitada`: o texto da norma que o cartão cita (WCAG 2.2, e-MAG, regra do axe-core com as etiquetas, ou regra da
  base do Design System). Ids de regra da base do DS aparecem como `[regra citada]`; o texto dela vem junto.
- `candidatas`: defeitos da referência que a ancoragem por elemento ofereceu para este cartão. É só uma pista: o vínculo
  pode ser a outro defeito da lista da tela, ou a nenhum.
- `fatosMedidos` (ids `F1`, `F2`…): medidas já feitas na página congelada. `deste-caso` = medida feita para esta mesma
  alegação; `mesmo-elemento` = medida sobre o mesmo elemento, que pode tratar de outro defeito. `origemMedida` diz quem
  escreveu o que viola (`pagina`, `pagina-copiando-exemplo-ds`, `ds-entregue`, `indeterminada`).
- `vereditoRegistrado` (id `VR`, só em alguns cartões): fato e norma já julgados. Nesses cartões só se pergunta a
  qualidade da sugestão.
- `perguntas`: o que responder neste cartão (abaixo).
- `citaveis`: os ids que a justificativa pode citar. Além dos já listados: `OBS` (texto observado), `ESP` (texto
  esperado), `REGRA` (a regra citada), `NORMA` (o texto da norma citada) e os ids dos defeitos da referência
  (`A-01`, `B-05`…, na seção `referencias` do lote).

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

## Os arquivos de resposta

Etapa A (esquema `esquema-desempate-a.schema.json`):

```json
{
  "formato": "nat74-t3-adjudicacao-respostas-a-1.0.0", "lote": "lote-d01", "loteSha256": "<sha256 do lote-d01.json>",
  "juiz": "<quem julgou>", "etapa": "a", "grupo": "D-0123456789",
  "leituraDaNorma": { "norma": "citada", "fonteEVersao": "e-MAG 3.1, recomendação …", "forca": "obrigatorio",
    "antecedente": "…", "excecoes": "…", "evidenciaNecessaria": "…", "permiteConcluir": "…" },
  "respostas": [ { "id": "T3-0123456789", "verdadeFactual": "verdadeira", "norma": { "id": "citada", "forca": "obrigatorio",
    "aplicabilidade": "aplica", "violada": "sim" }, "vinculo": "nenhum", "sugestao": "nao-perguntado", "forcaDoVeredito": "inferido",
    "evidencias": ["OBS", "S1"], "justificativa": "OBS e S1 mostram o botão sem nome calculado; pela leitura, a norma se aplica e foi violada." } ]
}
```

Etapa B (esquema `esquema-desempate-b.schema.json`): os mesmos campos, com `"lote": "lote-d01-b"`, `"etapa": "b"`,
`loteSha256` do `lote-d01-b.json`, mais `leiturasAlternativasPlausiveis` e `classificacaoDaDivergencia`.
A ingestão recusa o arquivo se faltar um cartão, se um id se repetir ou for de fora do grupo, se um valor estiver fora das
listas, se a justificativa não citar um id do próprio cartão, se norma ou força de um cartão diferirem da leitura, se
houver leitura alternativa e um cartão com pergunta de norma sair com classe final, ou se `loteSha256` não conferir.
