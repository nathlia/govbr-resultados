# Revisão de campanha nova — consistência da 1ª passada (triagem)

46 átomos, um juiz por lote. Relatório interno: não vai aos juízes. Os grupos são **triagem** de possíveis inconsistências, não equivalência (regras: `regras.md`, sha256 `f7237f6840ef4cedc52c689ba7178502a95334f621f04029bac967408025ec04`).

## Resumo

| | mesma alegação (MA) | mesma leitura da norma (LN) |
|---|---:|---:|
| grupos (todos) | 35 | 27 |
| grupos com ≥ 2 membros | 9 | 12 |
| átomos nesses grupos | 20 | 29 |
| grupos com membros de lotes diferentes | 0 | 0 |
| grupos divergentes (algum campo) | 0 | 1 |
| grupos em que a classe diverge | 0 | 0 |
| grupos em que o crédito muda | 0 | 0 |
| grupos com resposta de norma divergente | 0 | 0 |
| grupos à adjudicação (regras §2) | 0 (0 átomos) | 0 (0 átomos) |
| pares concordantes — campos gerais¹, todos | 100.0% (13/13) | 100.0% (23/23) |
| idem, mesmo lote | 100.0% (13/13) | 100.0% (23/23) |
| idem, entre lotes | — (0/0) | — (0/0) |
| cobertura (pares comparáveis / pares) | 100.0% (13/13) | 100.0% (23/23) |

¹ MA: todos os campos; LN: só a resposta de norma (id, força, aplicabilidade, violada).

**Cartões cegos idênticos** (único vínculo auditável de equivalência): 0 grupos, 0 átomos (0 grupos com lotes diferentes); divergem 0 (classe 0, crédito 0). Pares concordantes em todos os campos: — (0/0) (mesmo lote — (0/0), entre lotes — (0/0)); na classe: — (0/0) (entre lotes — (0/0)).

## Concordância por campo — mesma alegação

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 13/13 (100.0%) | 100.0% (13/13) | 100.0% (13/13) | — (0/0) | 9/9 | 0 |
| norma.id | 13/13 (100.0%) | 100.0% (13/13) | 100.0% (13/13) | — (0/0) | 9/9 | 0 |
| norma.forca | 13/13 (100.0%) | 100.0% (13/13) | 100.0% (13/13) | — (0/0) | 9/9 | 0 |
| norma.aplicabilidade | 13/13 (100.0%) | 100.0% (13/13) | 100.0% (13/13) | — (0/0) | 9/9 | 0 |
| norma.violada | 13/13 (100.0%) | 100.0% (13/13) | 100.0% (13/13) | — (0/0) | 9/9 | 0 |
| vinculo | 13/13 (100.0%) | 100.0% (13/13) | 100.0% (13/13) | — (0/0) | 9/9 | 0 |
| vinculo.relacao | 11/13 (84.6%) | 100.0% (11/11) | 100.0% (11/11) | — (0/0) | 7/7 | 0 |
| sugestao | 0/13 (0.0%) | — (0/0) | — (0/0) | — (0/0) | 0/0 | 0 |
| classe | 13/13 (100.0%) | 100.0% (13/13) | 100.0% (13/13) | — (0/0) | 9/9 | 0 |
| credita | 13/13 (100.0%) | 100.0% (13/13) | 100.0% (13/13) | — (0/0) | 9/9 | 0 |
| credito | 13/13 (100.0%) | 100.0% (13/13) | 100.0% (13/13) | — (0/0) | 9/9 | 0 |
| fundamentacao | 13/13 (100.0%) | 100.0% (13/13) | 100.0% (13/13) | — (0/0) | 9/9 | 0 |

## Concordância por campo — mesma leitura da norma

| campo | pares comparáveis / pares (cobertura) | todos | mesmo lote | entre lotes | grupos unânimes | grupos divergentes |
|---|---|---:|---:|---:|---:|---:|
| fato | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 12/12 | 0 |
| norma.id | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 12/12 | 0 |
| norma.forca | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 12/12 | 0 |
| norma.aplicabilidade | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 12/12 | 0 |
| norma.violada | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 12/12 | 0 |
| vinculo | 23/23 (100.0%) | 82.6% (19/23) | 82.6% (19/23) | — (0/0) | 11/12 | 1 |
| vinculo.relacao | 19/23 (82.6%) | 100.0% (19/19) | 100.0% (19/19) | — (0/0) | 8/8 | 0 |
| sugestao | 0/23 (0.0%) | — (0/0) | — (0/0) | — (0/0) | 0/0 | 0 |
| classe | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 12/12 | 0 |
| credita | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 12/12 | 0 |
| credito | 23/23 (100.0%) | 82.6% (19/23) | 82.6% (19/23) | — (0/0) | 11/12 | 1 |
| fundamentacao | 23/23 (100.0%) | 100.0% (23/23) | 100.0% (23/23) | — (0/0) | 12/12 | 0 |

## Método

Concordância descritiva: pares de membros dentro dos grupos com ≥ 2 membros; denominador = pares comparáveis (os dois responderam o campo; para vários campos, mesma forma de resposta em cada campo); cobertura = comparáveis / pares; mesmo lote (mesmo juiz) e entre lotes separados. Sem κ: cada átomo tem um julgamento só, e membros de um grupo não são avaliações repetidas do mesmo item.

Equivalência, seleção, adjudicação e parada: `regras.md`.

## Por campanha × braço (contagens)

| campanha | braço | átomos | em grupo MA divergente | em grupo MA que muda crédito | em grupo LN com norma divergente | à adjudicação |
|---|---|---:|---:|---:|---:|---:|
| ensaio-trio-real-02 | com | 13 | 0 | 0 | 0 | 0 |
| ensaio-trio-real-02 | ferramentas | 15 | 0 | 0 | 0 | 0 |
| ensaio-trio-real-02 | lb-axe | 2 | 0 | 0 | 0 | 0 |
| ensaio-trio-real-02 | lb-validator | 6 | 0 | 0 | 0 | 0 |
| ensaio-trio-real-02 | sem | 10 | 0 | 0 | 0 | 0 |

## Grupos divergentes — mesma alegação (0; 0 à adjudicação; 0 mudam o crédito)

## Grupos divergentes — mesma leitura da norma (1; 0 à adjudicação; 0 mudam o crédito)

### LN-787dc35d · 4 membros · lotes lote-01

Regra `wcag:2.4.3` × botão com texto

Divergem: vinculo, credito · classificação da divergência: (a preencher pelo adjudicador)

| átomo | lote | fato | norma.id | norma.forca | norma.aplicabilidade | norma.violada | vinculo | vinculo.relacao | classe | credita | credito | fundamentacao |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T3-22ac1e8ad4 | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-01 | direta | violacao-pagina | sim | credita A-01 | norma |
| T3-3930b5dce2 | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-02 | direta | violacao-pagina | sim | credita A-02 | norma |
| T3-7172a30655 | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-01 | direta | violacao-pagina | sim | credita A-01 | norma |
| T3-ee02a94bec | 01 | verdadeira | citada | obrigatorio | aplica | sim | A-02 | direta | violacao-pagina | sim | credita A-02 | norma |

Textos observados (conferência do agrupamento):
- T3-22ac1e8ad4: Ao fechar o diálogo "Descartar solicitação?" (Esc, botão "Continuar preenchendo" ou "Fechar"), o foco vai para o body em vez de voltar ao bo
- T3-3930b5dce2: O botão de upload tem tabindex="1". O primeiro Tab após o carregamento leva o foco a ele, no meio do formulário, antes do link "Ir para o co
- T3-7172a30655: Ao fechar o diálogo "Descartar solicitação?" por Esc ou por "Continuar preenchendo", o foco vai para o body. O Tab seguinte não volta ao for
- T3-ee02a94bec: tabindex="1" no botão de upload: o primeiro Tab após o carregamento leva ao botão de upload (meio do formulário), antes do link "Ir para o c

