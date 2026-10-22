# Revisão de campanha nova — consistência da 1ª passada (triagem)

36 átomos, um juiz por lote. Relatório interno: não vai aos juízes. Os grupos são **triagem** de possíveis inconsistências, não equivalência (regras: `regras.md`, sha256 `f7237f6840ef4cedc52c689ba7178502a95334f621f04029bac967408025ec04`).

## Resumo

| | mesma alegação (MA) | mesma leitura da norma (LN) |
|---|---:|---:|
| grupos (todos) | 23 | 20 |
| grupos com ≥ 2 membros | 9 | 8 |
| átomos nesses grupos | 22 | 22 |
| grupos com membros de lotes diferentes | 0 | 0 |
| grupos divergentes (algum campo) | 0 | 1 |
| grupos em que a classe diverge | 0 | 0 |
| grupos em que o crédito muda | 0 | 0 |
| grupos com resposta de norma divergente | 0 | 0 |
| grupos à adjudicação (regras §2) | 0 (0 átomos) | 0 (0 átomos) |
| pares concordantes — campos gerais¹, todos | 100.0% (17/17) | 100.0% (23/23) |
| idem, mesmo lote | 100.0% (17/17) | 100.0% (23/23) |
| idem, entre lotes | — (0/0) | — (0/0) |
| cobertura (pares comparáveis / pares) | 100.0% (17/17) | 100.0% (23/23) |

¹ MA: todos os campos; LN: só a resposta de norma (id, força, aplicabilidade, violada).

**Cartões cegos idênticos** (único vínculo auditável de equivalência): 0 grupos, 0 átomos (0 grupos com lotes diferentes); divergem 0 (classe 0, crédito 0). Pares concordantes em todos os campos: — (0/0) (mesmo lote — (0/0), entre lotes — (0/0)); na classe: — (0/0) (entre lotes — (0/0)).

## Concordância por campo — mesma alegação

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 17/17 (100.0%) | 100.0% (17/17) | 100.0% (17/17) | — (0/0) | 9/9 | 0 |
| norma.id | 17/17 (100.0%) | 100.0% (17/17) | 100.0% (17/17) | — (0/0) | 9/9 | 0 |
| norma.forca | 17/17 (100.0%) | 100.0% (17/17) | 100.0% (17/17) | — (0/0) | 9/9 | 0 |
| norma.aplicabilidade | 17/17 (100.0%) | 100.0% (17/17) | 100.0% (17/17) | — (0/0) | 9/9 | 0 |
| norma.violada | 17/17 (100.0%) | 100.0% (17/17) | 100.0% (17/17) | — (0/0) | 9/9 | 0 |
| vinculo | 17/17 (100.0%) | 100.0% (17/17) | 100.0% (17/17) | — (0/0) | 9/9 | 0 |
| vinculo.relacao | 15/17 (88.2%) | 100.0% (15/15) | 100.0% (15/15) | — (0/0) | 7/7 | 0 |
| sugestao | 0/17 (0.0%) | — (0/0) | — (0/0) | — (0/0) | 0/0 | 0 |
| classe | 17/17 (100.0%) | 100.0% (17/17) | 100.0% (17/17) | — (0/0) | 9/9 | 0 |
| credita | 17/17 (100.0%) | 100.0% (17/17) | 100.0% (17/17) | — (0/0) | 9/9 | 0 |
| credito | 17/17 (100.0%) | 100.0% (17/17) | 100.0% (17/17) | — (0/0) | 9/9 | 0 |
| fundamentacao | 17/17 (100.0%) | 100.0% (17/17) | 100.0% (17/17) | — (0/0) | 9/9 | 0 |

## Concordância por campo — mesma leitura da norma

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 8/8 | 0 |
| norma.id | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 8/8 | 0 |
| norma.forca | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 8/8 | 0 |
| norma.aplicabilidade | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 8/8 | 0 |
| norma.violada | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 8/8 | 0 |
| vinculo | 23/23 (100.0%) | 73.9% (17/23) | 73.9% (17/23) | — (0/0) | 7/8 | 1 |
| vinculo.relacao | 20/23 (87.0%) | 100.0% (20/20) | 100.0% (20/20) | — (0/0) | 5/5 | 0 |
| sugestao | 0/23 (0.0%) | — (0/0) | — (0/0) | — (0/0) | 0/0 | 0 |
| classe | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 8/8 | 0 |
| credita | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 8/8 | 0 |
| credito | 23/23 (100.0%) | 73.9% (17/23) | 73.9% (17/23) | — (0/0) | 7/8 | 1 |
| fundamentacao | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 8/8 | 0 |

## Método

Concordância descritiva: pares de membros dentro dos grupos com ≥ 2 membros; denominador = pares comparáveis (os dois responderam o campo; para vários campos, mesma forma de resposta em cada campo); cobertura = comparáveis / pares; mesmo lote (mesmo juiz) e entre lotes separados. Sem κ: cada átomo tem um julgamento só, e membros de um grupo não são avaliações repetidas do mesmo item.

Equivalência, seleção, adjudicação e parada: `regras.md`.

## Por campanha × braço (contagens)

| campanha | braço | átomos | em grupo MA divergente | em grupo MA que muda crédito | em grupo LN com norma divergente | à adjudicação |
|---|---|---:|---:|---:|---:|---:|
| ensaio-trio-real-03 | com | 8 | 0 | 0 | 0 | 0 |
| ensaio-trio-real-03 | ferramentas | 10 | 0 | 0 | 0 | 0 |
| ensaio-trio-real-03 | lb-axe | 2 | 0 | 0 | 0 | 0 |
| ensaio-trio-real-03 | lb-validator | 6 | 0 | 0 | 0 | 0 |
| ensaio-trio-real-03 | sem | 10 | 0 | 0 | 0 | 0 |

## Grupos divergentes — mesma alegação (0; 0 à adjudicação; 0 mudam o crédito)

## Grupos divergentes — mesma leitura da norma (1; 0 à adjudicação; 0 mudam o crédito)

### LN-787dc35d · 5 membros · lotes lote-01

Regra `wcag:2.4.3` × botão com texto

Divergem: vinculo, credito · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-3380f14138 | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-02 | direta | violacao-pagina | sim | credita A-02 | norma |
| T3-701362b5fe | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-01 | direta | violacao-pagina | sim | credita A-01 | norma |
| T3-c98157397d | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-01 | direta | violacao-pagina | sim | credita A-01 | norma |
| T3-d2e418a0d8 | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-02 | direta | violacao-pagina | sim | credita A-02 | norma |
| T3-dd6c562602 | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-02 | direta | violacao-pagina | sim | credita A-02 | norma |

Textos observados (conferência do agrupamento):
- T3-3380f14138: tabindex='1' no botão de upload: o primeiro Tab após o carregamento vai para 'Selecione o arquivo', no meio do formulário, antes do skiplink
- T3-701362b5fe: Cancelar abre o modal 'Descartar solicitação?' (foco em 'Continuar preenchendo', com foco preso no modal). Ao fechar com Esc ou com 'Continu
- T3-c98157397d: Cancelar abre o diálogo "Descartar solicitação?". Ao fechá-lo por Esc, "Continuar preenchendo", X ou "Descartar", document.activeElement pas
- T3-d2e418a0d8: O botão "Selecione o arquivo" tem tabindex="1". O primeiro Tab após o carregamento leva o foco a ele (no meio do formulário), antes do skipl
- T3-dd6c562602: tabindex="1" no botão de upload: o primeiro Tab desde o carregamento leva ao botão 'Selecione o arquivo' (no meio do formulário), antes do l

