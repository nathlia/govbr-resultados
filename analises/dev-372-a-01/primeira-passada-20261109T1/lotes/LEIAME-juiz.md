# Primeira passada cega — instruções do juiz (política normativa 1.3.0)

Este lote faz parte de uma fila de 47 alegações, dividida em 1 lotes. Cada alegação ("cartão") afirma que
algo está errado numa tela de serviço público congelada (Tela Solicitar serviço). Você
responde perguntas fechadas sobre cada cartão. **Você não escreve a classe final**: ela sai das suas respostas por regra
fixa (no fim deste texto). Responda **um** registro por cartão, só para os cartões do seu lote.

**Use o lote e a página congelada.** O lote traz o texto do cartão, a norma citada e os defeitos da referência da tela.
O fato alegado se confere **medindo a página congelada** servida em `http://127.0.0.1:3302` + o `endereco` da tela (seção
`referencias` do lote), com Playwright headless e janela 1280×900, refazendo os passos do `estado`. Cite a medida com o id
`MEDIDA` e use `forcaDoVeredito: "medido"` só quando a medida decidiu. Abra só este LEIAME, o seu `lote-NN.json` e o
`esquema-respostas.schema.json`. **Não abra `lotes/manifesto.json`**: é da ingestão (somas de conferência), não do
julgamento, e nada nele ajuda a julgar. Não abra nenhum outro arquivo nem outra página e não tente descobrir de onde o
cartão veio nem quem o escreveu: isso não entra no julgamento. Quando o lote não basta para responder, a resposta
certa é `indeterminado` / `incerta` / `incerto` / `indisponivel` — nunca um palpite "por precaução".

## O que cada cartão traz

- `alegacao`: o que o cartão diz. `observado` (o fato alegado), `esperado` (a sugestão de correção; pode faltar),
  `regra` (a regra citada; pode ser nula), `seletor`, `estado` (tamanho da janela e passos até o estado: a receita escrita pelo autor do cartão, ou os passos da referência da tela quando o cartão veio da linha de base; refaça-a na página congelada e responda `estadoAlcancado`, em "Em todo cartão"), `cena`,
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
- `referencias` (ids `REF1`, `REF2`, só em alguns cartões): outras normas que o autor do cartão citou para o mesmo fato,
  além da `regra` (que continua a principal). Cada uma traz `regra` e `norma` (o texto, como em `normaCitada`).
- `perguntas`: o que responder neste cartão (abaixo).
- `citaveis`: os ids que a justificativa pode citar. Além dos já listados: `OBS` (texto observado), `ESP` (texto
  esperado), `REGRA` (a regra citada), `NORMA` (o texto da norma citada) e os ids dos defeitos da referência
  (`A-01`, `B-05`…, na seção `referencias` do lote).

## As perguntas

### `fato` → campo `verdadeFactual`
"O que o cartão observa é verdade no estado declarado?"
- `verdadeira`: o texto e as evidências do cartão, ou um fato medido, sustentam o fato.
- `falsa`: um fato medido no lote **contradiz** o cartão (contraevidência). Ausência de prova não é `falsa` (R1).
- `indisponivel`: não há base para decidir no estado declarado (estado que a receita não alcança — `estadoAlcancado: "nao-alcancado"` —, elemento ausente,
  medida impossível) (R9, R10).
- `indeterminado`: você não consegue decidir com o lote.

### `norma` → campo `norma` = `{ id, forca, aplicabilidade, violada }`
"Que norma o cartão invoca? Ela é obrigatória, aplica-se ao fato e foi violada?"
- `id`: se o cartão cita regra, sempre `"citada"` — é a regra citada que se julga, mesmo que outra norma
  coubesse melhor (R11, R15). Se o cartão não cita regra (`regra: null`): a norma pública que a alegação implica
  (`wcag:x.y.z` ou `emag:x.y`), ou `"nenhuma"` se ela não implica norma. **Com `id: "nenhuma"`** a norma inteira é
  `{ "id": "nenhuma", "forca": "nenhuma", "aplicabilidade": "nao-perguntado", "violada": "nao-perguntado" }`: não há norma a
  aplicar, e a ingestão recusa outro valor nesses dois campos (e recusa `nao-perguntado` neles com qualquer outro `id`).
- `forca`: `obrigatorio` · `recomendado` · `boa-pratica` · `exemplo` · `nenhuma` (com `id: "nenhuma"`; ou com regra citada quando **toda** regra da base que ela traz tem
  `forcaNoVocabulario: "nenhuma"`) · `indeterminado`. Regra do axe-core só com a etiqueta `best-practice` (sem etiqueta WCAG) é `boa-pratica`. Convenção
  do DS não é WCAG (R3); regra de *token* vale para estilo escrito pela página, não para o que o DS entrega (R4).
- **Força declarada da base do DS → `forca`.** Cada regra da base em `normaCitada.regrasDaBase` (e nas normas dos
  defeitos) traz `forcaDeclarada` (a palavra da própria base) e `forcaNoVocabulario` (a mesma força já posta nesta lista,
  por uma tabela fixa, feita antes de qualquer julgamento e só pelas palavras da base). Use `forcaNoVocabulario` como
  `forca` da regra; com várias regras, a força da norma citada é a da regra que trata o fato. `null` = a base não dá
  correspondência: decida pela leitura do texto (ou `indeterminado`). Com `nenhuma` a regra **permite**, não obriga:
  responda `forca: "nenhuma"` com `aplicabilidade`/`violada` = `nao-perguntado` (não há obrigação a aplicar).
  Se o cartão cita essa regra como violada, ele alega uma obrigação que não existe: erro normativo (R11a), e a
  `sugestao` passa a ser obrigatória (com sugestão `valida`: observação com norma errada, R11d).

  | `forcaDeclarada` (base) | `forcaNoVocabulario` |
  |---|---|
  | obrigatorio | `obrigatorio` |
  | obrigatorio (proibição) | `obrigatorio` |
  | recomendado | `recomendado` |
  | recomendado (desaconselha) | `recomendado` |
  | permitido (opcional) | `nenhuma` |
  | opcional | `nenhuma` |
  | exemplo | `exemplo` |
  | informativo | `null` (sem correspondência) |
  | não declarada | `null` (sem correspondência) |
- `aplicabilidade`: `aplica` · `nao-aplica` · `incerta`. Ex.: WCAG 3.3.1 pressupõe erro **detectado**; aceitar um valor
  sem detectar nada não o viola (R11). "Sem nome" é refutado por nome calculado não vazio (R2).
- `violada`: `sim` · `nao` · `incerto`.
- **Cabeçalho de tabela vazio.** Um cabeçalho (`th`) sem texto e sem nome acessível, numa coluna (ou linha) que tem
  células de dados com conteúdo, deixa essas células sem o cabeçalho que as relaciona: é falha da WCAG 1.3.1
  (informações e relações), que é obrigatória. Com a WCAG 1.3.1 citada, ou implicada num cartão sem regra, responda
  `aplica` e violada `sim`, mesmo que a regra do axe-core que aponta o cabeçalho vazio seja só `best-practice`; a
  referência da tela pode descrever esse defeito pela WCAG 1.3.1. Se nenhuma célula de dados daquela coluna (ou
  linha) tem conteúdo, não há relação a transmitir: `nao-aplica`. O cartão que cita só a regra do axe-core continua
  com a força dela (`boa-pratica`).

### `vinculo` → campo `vinculo`
"A alegação descreve o fato de um defeito da referência da tela (mesmo sujeito, mesmo estado, mesma evidência)?"
- `{ "spec": "B-05", "relacao": "…" }`: o id do defeito (qualquer um da lista `referencias` da tela, não só os
  candidatos) e a relação: `direta` (o sujeito é o elemento do defeito), `ausencia-global` (defeito de ausência na
  página inteira), `host-interno` (componente e seu controle interno), `participante-relacionado` (elemento ligado ao
  do defeito).
- `"nenhum"`: não descreve defeito algum da lista. `"indeterminado"`: não dá para decidir.
- Nunca pelo id da regra nem por semelhança de texto (R7): só pelo fato.
- **Registro × template.** Uma rota de registro é uma rota cujo caminho termina no identificador de um registro de
  dados (um número ou um código, ex.: `…/detalhe/<id>`); o **registro** é esse identificador. Duas paradas na mesma
  rota com identificadores diferentes são registros diferentes, mesmo com o mesmo componente e o mesmo template.
  Refaça a receita e meça a que rota e a que registro ela chega. Então:
  1. O vínculo a um defeito exige o observável do defeito (o elemento, o conteúdo que o identifica — texto, valor,
     indicador — e a medida que o defeito descreve) **no sujeito e no estado a que a receita chega**, medidos por você
     na página congelada, nunca supostos pelo texto do cartão. Fato verdadeiro em outro sujeito ou em outro estado não
     vincula o defeito.
  2. Outro registro só representa o mesmo defeito se o lote trouxer a prova: o texto do defeito em `referencias`
     declara a unidade de template, quais registros ela cobre e o que tem de ser igual para contar como o mesmo
     defeito. A sua leitura e a semelhança de texto ou de regra não provam essa identidade.
  3. Reaproveitar o template, sozinho, não atravessa registros: mesmo componente, mesma rota com outro identificador,
     mesmo seletor, mesmas classes ou mesmas cores não bastam. Defeito que descreve conteúdo de um registro (texto,
     valor, indicador, situação de um dado) fica preso ao registro em que a referência o mediu, salvo o item 2.
  4. Receita que chega a uma rota não vincula o que o cartão alega em outra: se os sujeitos ou o `observado` cobrem
     mais de uma rota, só a parte da rota a que a receita chega pode ter vínculo.
  5. Sem identidade provada, o fato verdadeiro continua verdadeiro: `vinculo` fica sem aquele defeito (`"nenhum"`, ou
     outro defeito que o fato satisfaça por estas mesmas regras), nunca `verdadeFactual: "falsa"`. Com a identidade
     provada, o vínculo vale como o de qualquer outro cartão.
  6. O critério é o mesmo para todo cartão, qualquer que seja a origem do cartão: decidido cartão a cartão, sem saber
     de onde ele veio, e nunca pelo efeito no total.
  Valem para os defeitos da referência cujo estado é uma parada em rota de registro e para todo cartão que tenha um
  deles em `candidatas`, que o vincularia, ou cujo `observado` descreve conteúdo de rota de registro. Ficam fora os
  componentes da casca da aplicação (cabeçalho, menu do avatar) que persistem entre rotas: não pertencem ao template
  do registro.
- **Paradas da referência.** Em `referencias`, cada tela traz `paradas`: para cada estado da referência (o nome que
  cada defeito traz em `estado`), a rota (`path`), o `registro` (o identificador no fim da rota, ou `null` quando a
  rota não é de registro), os passos da referência até ali (`receita`) e a nota da referência (`nota`). Cada defeito
  traz em `registro` o registro da parada do seu `estado` (`null` em `sempre`, que vale em todas as paradas, e em
  parada fora de rota de registro). O registro da referência de que a regra acima fala ("o registro em que a
  referência o mediu") é esse: leia-o ali, nunca o deduza do texto do defeito, de um indicador da página ou da
  posição na lista. Sem `dominio` declarado no defeito, a unidade cobre só o registro listado na sua parada: outro
  registro não é o mesmo defeito. Com `dominio` (`{ regra, registros }`), ela cobre os registros listados em
  `registros`, pelo critério escrito em `regra`: é essa a prova do item 2.

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

### `referencias` → campo `referencias` (só em cartão com `referencias`)
"As outras normas que o cartão cita são obrigatórias, aplicam-se ao fato e foram violadas?" A `norma` continua a julgar
**só** a regra principal (`regra`), como sempre. As referências entram só quando a principal cai por citação (R16).
- Quando o fato é `verdadeira` e as suas respostas da `norma` dão erro normativo (não se aplica, não violada, mais fraca
  sem vínculo, ou só permite), `referencias` é **obrigatório**: uma lista com um item por referência do cartão,
  `{ "id": "REF1", "forca": …, "aplicabilidade": …, "violada": … }`, com o mesmo vocabulário e as mesmas regras de
  `norma` (`forca: "nenhuma"` só quando a referência só permite, e então `aplicabilidade`/`violada` = `nao-perguntado`).
- Nos outros casos use `"nao-perguntado"` (ou julgue, se quiser registrar: não muda a classe). Em cartão sem `referencias`
  o campo não existe: não o escreva.
- Uma referência nunca muda o fato: com fato `falsa`, `indisponivel` ou `indeterminado` ela não é usada.

### Em todo cartão
- `estadoAlcancado` (sempre): refaça a receita do `estado` e julgue **só no estado a que ela chega** (R10). `receita` =
  ela chega ao estado que o cartão descreve (o que o `observado` pressupõe: diálogo aberto, calendário aberto, foco em
  tal campo…). `nao-alcancado` = ela não chega a esse estado: então `verdadeFactual` = `indisponivel` (evidência
  indisponível, R9/R10), mesmo que, com outros passos, você veja o fato. O que viu noutro estado pode ir à
  `justificativa`, mas nunca muda a resposta.
- **Receita vazia** (lista de passos vazia): o estado é a página tal como carrega no `endereco`, janela 1280×900, sem
  nenhum passo. Julgue nela e responda `estadoAlcancado: "receita"`; receita vazia nunca é `nao-alcancado`.
- `forcaDoVeredito`: `medido` (um fato medido do lote decide) · `inferido` (decidido pelo texto e evidências do cartão) ·
  `incerto`. Diz como você decidiu; não muda a classe.
- `evidencias`: lista não vazia de ids de `citaveis` em que a resposta se apoia.
- `justificativa`: 1 a 4 frases (mínimo 30 caracteres) que citam pelo menos um desses ids. Diga o que o id mostra.
- Campo não perguntado neste cartão: `"nao-perguntado"`.

## Como a classe sai das respostas (para você saber o efeito; não escreva a classe)

| Respostas | Classe (política 1.3.0) |
|---|---|
| fato `falsa` | erro factual (R1) |
| fato `indisponivel` (também o que `estadoAlcancado: "nao-alcancado"` exige) | evidência indisponível (pendente, R9/R10) |
| fato `indeterminado`, ou `norma.forca` = `indeterminado` (o campo `forca` dentro de `norma`; o `forcaDoVeredito` não entra nesta tabela) | pendente |
| fato `verdadeira` + norma `nenhuma` (cartão sem regra citada; `aplicabilidade`/`violada` = `nao-perguntado`) + vínculo a um defeito | credita a detecção do defeito, sem fundamentação (regra nula; Q1) |
| fato `verdadeira` + norma `nenhuma` sem vínculo | observação (R11b) |
| fato `verdadeira` + regra citada com `forca: "nenhuma"` (a base só permite; `aplicabilidade`/`violada` = `nao-perguntado`), com ou sem vínculo | erro normativo (R11a); com sugestão `valida`: observação com norma errada (R11d) |
| fato `verdadeira` + norma com `id` ≠ `nenhuma` + aplicabilidade `incerta` ou violada `incerto` | evidência indisponível (R13) |
| fato `verdadeira` + norma com `id` ≠ `nenhuma` + `nao-aplica` ou violada `nao` | erro normativo (R11a); com sugestão `valida`: observação com norma errada (R11d) |
| fato `verdadeira` + `obrigatorio` + `aplica` + violada `sim` | violação (com vínculo, credita o defeito: R7) |
| fato `verdadeira` + norma mais fraca (`recomendado`, `boa-pratica`, `exemplo`) + `aplica` + `sim` | com vínculo: credita a detecção do defeito, sem crédito de fundamentação (R15); sem vínculo: erro normativo (R13) |
| (só cartão com `referencias`) fato `verdadeira` + as respostas da `norma` dão erro normativo + uma referência, na ordem `REF1`, `REF2`, julgada como se fosse a citada, dá violação | a classe dessa violação, como se a referência fosse a norma citada; a citação fica registrada como vinda da referência (R16) |
| (só cartão com `referencias`) fato `falsa`, `indisponivel` ou `indeterminado` | as referências não mudam nada: a classe é a do fato (R16) |

A origem (página ou DS) de uma violação **não** é perguntada: vale a medida (`fatosMedidos`) e, sem medida, fica
"indeterminada (não medida)". Nos cartões com `vereditoRegistrado`, a classe é erro normativo, ou observação com norma
errada se a sugestão é `valida`.

## O arquivo de resposta

Grave `respostas/lote-NN.json` **na pasta da passada**: a pasta `respostas/` fica ao lado de `lotes/`, nunca dentro dela
(`respostaEm` no lote dá o caminho relativo ao próprio lote: `../respostas/lote-NN.json`; a ingestão recusa arquivos em
`lotes/respostas/`). Exatamente um registro por cartão do lote,
na mesma ordem ou não, sem cartões a mais. O esquema é `esquema-respostas.schema.json`; a ingestão recusa o arquivo
inteiro se faltar um cartão, se um id se repetir, se aparecer id fora do lote, se um valor estiver fora das listas, se a
justificativa não citar um id ou se `loteSha256` não for o sha256 do lote recebido.

```json
{
  "formato": "nat78-primeira-passada-respostas-1.3.0",
  "lote": "lote-01",
  "loteSha256": "<sha256 do arquivo lote-01.json, em hex minúsculo>",
  "juiz": "<quem julgou, ex.: assistente, subagente novo e cego>",
  "respostas": [
    {
      "id": "T3-0123456789",
      "verdadeFactual": "verdadeira",
      "norma": { "id": "citada", "forca": "obrigatorio", "aplicabilidade": "aplica", "violada": "sim" },
      "vinculo": { "spec": "B-05", "relacao": "direta" },
      "sugestao": "nao-perguntado",
      "forcaDoVeredito": "inferido",
      "estadoAlcancado": "receita",
      "evidencias": ["OBS", "S1", "B-05"],
      "justificativa": "OBS e S1 mostram o mesmo campo sem rótulo que a B-05 descreve; a norma citada exige rótulo e não há nenhum."
    }
  ]
}
```
