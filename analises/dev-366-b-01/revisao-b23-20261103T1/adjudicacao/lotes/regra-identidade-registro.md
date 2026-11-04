# Identidade da unidade entre registros e rotas (template × registro): regra

> **Congelada em 03/11/2026**, antes de qualquer lote ir a adjudicador: este arquivo, com o sha256 dele, vai no manifesto
> da adjudicação e no derivado. Não muda a referência congelada (`ground-truth-vistorias.json` 1.0.0) nem a 1ª passada
> (`primeira-passada-20261103T1`, `julgamentos.json` f06564f8…).

**Quando foi escrita:** 03/11/2026, a partir do critério da revisão Codex na NAT-112 (decisão D-165), **depois** de ver
a divergência que a motivou (três cartões, um mesmo fato, vínculos opostos entre lotes). Não é regra pré-registrada:
fica congelada a partir daqui e vale igual para toda tela e para todo cartão, qualquer que seja a origem dele. Não cria crédito novo:
torna explícito o "mesmo sujeito, mesmo estado, mesma evidência" que a pergunta de `vinculo` do `LEIAME-juiz.md` já pede.

## 1. Termos

- **Unidade**: a da referência congelada da tela: spec × âncora × `state`. O estado da unidade é a parada nomeada da
  referência (`_meta.states`), com o `path` medido.
- **Rota de registro**: rota cujo `path` carrega o identificador de um registro de dados (ex.: `…/agendar-vistoria/<id>`).
  **Registro** = o valor desse identificador. Duas paradas na mesma rota parametrizada com ids diferentes são registros
  diferentes, mesmo que o componente e o template sejam os mesmos.
- **Receita**: os passos do `estado` do cartão. **Receita vazia** mantém o sentido já fixado: a página como carrega no
  endereço, janela 1280×900, sem nenhum passo.
- **Sujeito e estado alcançados**: o elemento e a parada (rota, registro e condição da interface: menu aberto, diálogo
  aberto…) a que a receita chega na página congelada, medidos por quem julga, nunca supostos pelo texto do cartão.
- **Observável da unidade**: o que a spec descreve e a referência mediu: o elemento, o conteúdo que o identifica (texto,
  valor, indicador) e a medida (cor, contraste, papel, nome…).

## 2. Regra

1. **Crédito requer o observável da unidade no sujeito e no estado alcançados pela receita.** Fato verdadeiro em outro
   sujeito ou em outro estado não credita a unidade.
2. **Outro registro só representa a mesma unidade se houver evidência arquivada** de que ele preserva esse sujeito e esse
   defeito, com **domínio** (quais registros a unidade cobre) e **regra de equivalência** (o que tem de ser igual para
   contar como a mesma unidade) explícitos. Valem como evidência arquivada: a referência congelada e o registro da
   auditoria dela, quando o texto declara a unidade de template, o domínio e a regra; ou medição sem modelo na página
   congelada, gravada antes da adjudicação com sha256 no derivado. Leitura do julgador, semelhança de texto ou de regra
   não são evidência de identidade.
3. **Reutilização do template, isoladamente, não permite atravessar registros.** Mesmo componente, mesma rota
   parametrizada, mesmo seletor, mesmas classes ou mesmas cores não bastam. Spec que descreve conteúdo de um registro
   (texto, valor, indicador, estado de um dado) fica presa ao registro em que a referência a mediu, salvo o item 2.
4. **Receita que alcança uma rota não credita a parte alegada em outra.** Cartão cujos sujeitos ou cujo `observado` cobrem
   mais de uma rota só pode creditar a parte da rota que a receita alcança; o resto fica fora do crédito.
5. **Sem identidade demonstrada, o fato verdadeiro permanece como achado fora daquela unidade**: `vinculo` sem aquela spec
   (`"nenhum"`, ou outra spec que o fato satisfaça pela mesma regra), nunca `verdadeFactual` falsa nem erro do agente. Com
   identidade demonstrada, o vínculo vale como de qualquer outro cartão.
6. **Mesmo critério para todos os cartões afetados** (§ 3), para todo cartão, qualquer que seja a origem, decidido cartão a cartão
   sem saber de onde ele veio, antes de qualquer comparação, e nunca escolhido pela origem do cartão nem pelo efeito no total.

## 3. Abrangência (mecânica, antes de julgar)

- **Specs abrangidas:** toda spec da referência cujo `state` é uma parada em rota de registro.
- **Cartões afetados:** todo cartão da passada que, na 1ª passada, credita uma spec abrangida, ou a tem em `candidatas`,
  ou cujo `observado` descreve conteúdo de rota de registro. A lista sai dos cartões e da chave, nunca das respostas, e é
  gravada com sha256 antes de ir a quem julga. Quem julga mede a que rota e registro a receita de cada cartão chega; o
  cartão cuja receita chega à parada da unidade passa pelo item 1 como qualquer outro.
- **Casca da aplicação (fixado ao congelar: escolha (b)):** componentes da casca da aplicação (cabeçalho, menu do
  avatar) que persistem entre rotas e cuja unidade foi ancorada numa parada de rota de registro **ficam fora desta regra**,
  porque não pertencem ao template do registro. A escolha vale para toda tela. Mecanicamente: spec cuja âncora começa num
  componente da casca declarado no § 6 (na tela Vistorias, `pnip-header`: B-15…B-19).

## 4. Publicação

- Derivado novo, nunca sobre a 1ª passada: regra (este arquivo, sha256), evidência de identidade usada (ou a ausência
  dela) por spec abrangida, lista de cartões afetados (sha256), as respostas da adjudicação e o resultado.
- A 1ª passada e a tabela de detecção dela ficam como estão. A sensibilidade mostra a contagem por condição nas duas
  leituras (identidade demonstrada × não demonstrada), cada uma com a regra que a produz.

## 5. Evidência arquivada já existente na tela B (Vistorias), para a leitura do item 2

Isto é inventário do que está arquivado, não decisão:

- `ground-truth-vistorias.json` 1.0.0: paradas `detalhe-menu` (registro …3046), `detalhe` e `modal` (registro …3038).
- **B-21** (h3 sem h1/h2): a descrição da spec e `tela-b/vistorias/auditoria.md`, "Escolhas de forma", declaram unidade
  única "para o template do detalhe": "Mesmo template em dois segmentos conta uma vez. Os dois detalhes (não
  comparecimento e preenchido) são a mesma rota e o mesmo componente; defeitos do template comum (títulos) são ancorados
  só na parada `detalhe`". Regra de equivalência explícita (defeito do template comum: títulos); domínio declarado: os
  dois detalhes medidos (…3046 e …3038). Outro registro (ex.: o da 1ª linha da aba padrão, `detalhe@1`, que a auditoria
  inventariou e deixou fora por "nenhum tipo novo") não está no domínio declarado.
- **B-22** (tabela do detalhe sem nome): nenhuma declaração de domínio entre registros.
- **B-23** (contraste 3,54:1): a spec descreve o **indicador "0%" do detalhe** (registro …3038); nenhuma declaração de
  domínio entre registros.
- B-15…B-20 têm `state: detalhe-menu` (…3046). B-20 (textarea do motivo) é do template do registro; B-15…B-19 são do
  cabeçalho da aplicação (fora desta regra pelo § 3).

## 6. Bloco mecânico (lido pela adjudicação; coberto pelo mesmo sha256)

O § 3 aplicado sem julgamento: parada em rota de registro = parada da referência cujo `path` termina num identificador
(`identificadorDeRegistro`); casca = primeiro seletor composto da âncora, por tela; o `observado` "descreve conteúdo de rota
de registro" quando contém o segmento da rota que precede o identificador ou o identificador de um registro da referência.

```json regra-mecanica
{
  "formato": "nat78-regra-publicada-mecanica-1.0.0",
  "derivacao": "template-x-registro-1.0.0",
  "identificadorDeRegistro": "^(?:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|\\d+)$",
  "casca": { "vistorias": ["pnip-header"] }
}
```
