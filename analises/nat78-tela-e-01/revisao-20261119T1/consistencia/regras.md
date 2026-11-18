# Revisão §8 de campanha nova — consistência, adjudicação e confiabilidade (regras fixas)

**Quando foram escritas:** 19/10/2026, entrega 3 do plano de revisão de campanha nova, ANTES de qualquer coleta medida
da D (só o trio de ensaio fora da amostra existia). Valem igual para toda campanha v2 nova; o sha256 deste arquivo vai
para o manifesto da amostra, da adjudicação e da passada adjudicada. Nenhuma regra de crédito nova: só procedimento.

## 1. Grupos (triagem)

- Mesmos grupos da reanálise retrospectiva (e14-consistencia, REGRAS §1), calculados dos cartões da própria passada e do
  pacote da análise de onde vieram (regra citada canônica, chaves de elemento dos sujeitos, cena), nunca das respostas:
  **mesma alegação (MA)** = mesma tela × perguntas × sujeito × regra × estado; **mesma leitura da norma (LN)** = mesma
  regra × tipo de sujeito. Grupos são triagem, nunca equivalência: não propagam veredito nem exigem unanimidade.

## 2. Unidades de adjudicação — gatilhos mecânicos

Um cartão vai à adjudicação quando ocorre qualquer um dos três; unidades que compartilham cartões se juntam:
- **(a)** está num grupo com ≥ 2 cartões em que divergem: MA — classe, crédito, fundamentação ou norma.id; LN — norma.id,
  força, aplicabilidade ou violada (mesma seleção da retrospectiva, REGRAS §2);
- **(b)** está na amostra de confiabilidade e algum juiz da amostra discorda da 1ª passada em classe, crédito, fato,
  aplicabilidade ou vínculo;
- **(c)** a 1ª passada respondeu `estadoAlcancado: "nao-alcancado"` (evidência indisponível porque a receita não chegou
  ao estado): sempre adjudicado, porque tira crédito por razão do instrumento.

## 3. Adjudicação informada

- **Um adjudicador novo por unidade**, cego para braço, modelo, campanha, run e respostas anteriores; cartões idênticos
  aos da 1ª passada, com id novo; as instruções de julgamento são as da 1ª passada (`LEIAME-juiz.md`, sem mudança).
- **Etapa A**: leitura individual (`leituraDaNorma` + resposta a cada cartão), sem ver resposta anterior. Congelada:
  o sha256 dela vai no lote B.
- **Etapa B**: vê as respostas anteriores de cada cartão (1ª passada e juízes da amostra), anônimas ("leitura 1",
  "leitura 2"…, ordem por hash), responde de novo e classifica a divergência. A resposta B é a que vale.
- Leitura incompatível que continua plausível → listada em `leiturasAlternativasPlausiveis` e os cartões com pergunta
  de norma ficam `incerta`/`incerto` (classe evidência indisponível/pendente); a alternativa vai como sensibilidade.
- Uma rodada por unidade; nunca se repete até haver acordo.
- A 1ª passada é preservada (`julgamentos-1a-passada.json`); a adjudicada vai para uma pasta nova.

## 4. Confiabilidade (antes da adjudicação)

- Amostra de até 40 cartões idênticos aos da 1ª passada (só o id muda), estratificada por braço mascarado × classe da
  1ª passada: 1 por estrato + o resto proporcional (maiores restos); dentro do estrato, ordem por sha256(semente + chave).
  Semente: a da campanha (`design.seed`); sem ela, a declarada e gravada no manifesto.
- 2 juízes novos e cegos por cartão, com as instruções da 1ª passada, medidos ANTES da adjudicação.
- κ de Fleiss para classe, crédito, fato, aplicabilidade e vínculo (avaliadores: 1ª passada + juízes da amostra; e só os
  juízes, com ≥ 2), mais a concordância descritiva por campo e por par, sempre com os denominadores.

## 5. Contestados (insumo do S4')

`contestados.json` lista cada cartão em que a 1ª passada ≠ adjudicação (resposta, crédito ou fundamentação) ou em que um
juiz da amostra discordou da 1ª passada num campo do §4; `creditoEnvolvido` marca os que creditam em alguma das duas.
