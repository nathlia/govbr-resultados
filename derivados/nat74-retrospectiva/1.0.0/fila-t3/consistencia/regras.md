# Fila T3 — regras de consistência, desempate e confiabilidade (congeladas)

**Quando foram escritas:** DEPOIS de ver as divergências da 1ª passada (relatório de consistência dos 9 lotes, 285
átomos) e a revisão da NAT-74 (comentário 62b292fc). Não são regras pré-registradas; são congeladas a partir daqui, e
o sha256 deste arquivo vai para a chave do desempate e para o manifesto da amostra de confiabilidade.

## 1. Equivalência

- Os grupos são **triagem** de possíveis inconsistências, nunca equivalência. Um grupo não propaga veredito de um membro
  para outro e não exige unanimidade: cada membro guarda a sua própria resposta.
- **Mesma alegação (MA)**: mesma tela, mesmo conjunto de perguntas (qualidade | completa), mesmo sujeito (conjunto das
  chaves de elemento do átomo arquivado, sem o prefixo de cena), mesma regra citada (id canônico pela chave:
  `normalizarRegra` + prefixo `axe:` no id nu; sem regra = "(sem regra)") e mesmo estado (cena nomeada; cena
  `a-decidir` → a cena gravada nas chaves dos sujeitos; senão a janela). Texto observado/esperado, evidência, versão e
  receita (passos) NÃO entram: dois membros de MA podem descrever situações diferentes.
- **Mesma leitura da norma (LN)**: mesma regra citada (id canônico) × mesmo tipo de sujeito (do rótulo do sujeito no
  cartão cego), entre telas; só átomos com regra citada e pergunta de norma. Mesma tag + mesma regra ≠ mesma situação
  (ex.: `title`/`aria-labelledby` podem dar nome a um botão só com ícone).
- **Vínculo auditável de equivalência** só entre cartões cegos idênticos (mesmo JSON, salvo o id). Fora disso, nenhuma
  equivalência é afirmada.
- Os grupos saem só dos cartões cegos e da chave; nenhuma resposta entra no agrupamento.

## 2. Seleção para adjudicação

Vai à adjudicação todo grupo com ≥ 2 membros em que divergem:
- MA: `classe` derivada (inclui verdadeiro/falso positivo, exclusões do denominador — pendente / evidência
  indisponível — e pendente × final, em qualquer braço, linhas de base incluídas), `credito` (defeito creditado ou
  nenhum), `fundamentacao` ou `norma.id`;
- LN: `norma.id`, `norma.forca`, `norma.aplicabilidade` ou `norma.violada`.
Grupos selecionados que compartilham membros viram uma unidade só. Divergência só de `vinculo`/`credito` em LN não
seleciona (o defeito vinculado varia legitimamente entre elementos diferentes).

## 3. Adjudicação ("adjudicação informada")

- **Um adjudicador novo por unidade**, cego para braço, modelo, campanha, run e decisão arquivada; cartões com id novo.
- **Etapa A (leitura individual):** o adjudicador lê a norma, escreve `leituraDaNorma` — a REGRA DE INTERPRETAÇÃO: fonte
  e versão, força, antecedente (quando se aplica), exceções, evidência necessária e o que ela permite concluir — e
  responde cada membro sem ver resposta anterior alguma. O arquivo da etapa A é congelado (sha256 gravado na etapa B).
- **Etapa B (reconciliação):** só então vê as respostas anteriores dos membros (sem lote, juiz ou braço) e responde de
  novo cada membro, com evidência, e classifica a divergência: `diferenca-legitima-de-contexto` ·
  `falta-de-evidencia` · `interpretacao-normativa` · `erro-do-juiz` (uma ou mais, com ids de evidência).
- A leitura fixa a regra de interpretação (força e norma iguais em todos os membros com pergunta de norma);
  aplicabilidade e violação ficam POR MEMBRO.
- Se leituras incompatíveis continuam plausíveis, o adjudicador as lista em `leiturasAlternativasPlausiveis` e os
  membros com pergunta de norma ficam `incerta`/`incerto` (classe pendente / evidência indisponível); a leitura
  alternativa entra como sensibilidade.
- A resposta da etapa B substitui a da 1ª passada; a 1ª passada fica preservada (`julgamentos-1a-passada.json`) e toda
  substituição é registrada (átomo, antes, depois, grupo, classificação).

## 4. Parada

- Uma rodada de adjudicação por unidade. **Nunca** se repete até haver acordo.
- Segunda leitura independente (outro adjudicador novo, mesmas etapas) só para caso **material** que a primeira não
  resolve: membro que fica pendente / evidência indisponível na etapa B quando a 1ª passada de algum membro do grupo
  creditava. O resultado da segunda leitura é final; se as duas discordam na classe, o membro fica pendente e as duas
  leituras vão como sensibilidade.

## 5. Confiabilidade

- Amostra estratificada de ~40 cartões IDÊNTICOS aos da 1ª passada (só o id muda), sorteada antes da adjudicação pela
  semente declarada, com estratos tirados dos cartões e das respostas da 1ª passada (tela × resultado × situação no
  grupo), nunca do braço.
- Cada cartão é julgado de novo por 2 juízes novos e cegos, com as instruções originais do lote, antes de qualquer
  adjudicação. Concordância: % e κ de Cohen (juiz 1 × juiz 2), e κ de Fleiss com 3 avaliações iguais por cartão
  (juiz 1, juiz 2, 1ª passada).
