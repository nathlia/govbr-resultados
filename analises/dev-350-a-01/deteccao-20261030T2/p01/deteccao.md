# Specs achadas por braço — analises/dev-350-a-01/primeira-passada-20261030T2 · p01/analisar-20261030T1

Política do juiz: `politica-normativa-1.3.0`. Specs da referência: 14 (específicas do DS 5 · acessibilidade geral 9).
Coluna principal: **ainda não fixada** (decisão da autora: `--coluna-principal` ou `design.colunaPrincipal` na campanha).

**Detecção** = a classe derivada credita a spec (crédito elegível: violação de origem página ou indeterminada, com vínculo e fundamentação; R7, R15, Q1). Origem DS (P3), pendente e vínculo sem crédito ficam fora.
**Fundamentada** = subconjunto da detecção: do crédito elegível, só o cartão em que a norma que deu a classe (a citada, ou, na 1.3.0, a referência secundária que deu a classe) foi julgada aplicável (`aplica`) e violada (`sim`), com o vínculo à mesma spec. Não exige força obrigatória: norma mais fraca aplicável e violada com vínculo (R15) conta como fundamentada, como a autora decidiu; Q1 (sem norma aplicada) não conta.
Braço com coleta válida e nenhum achado mostra 0; coleta ausente ou incompleta aparece como tal, sem número.

| | sem | ferramentas | com | lb-axe | lb-validator |
|---|---|---|---|---|---|
| coleta | válida | válida | válida | válida | válida |
| cartões | 10 | 7 | 12 | 2 | 5 |
| **detecção** | **7** | **6** | **8** | **1** | **3** |
| detecção · específica do DS (de 5) | 1 | 0 | 4 | 0 | 3 |
| detecção · acessibilidade geral (de 9) | 6 | 6 | 4 | 1 | 0 |
| **detecção fundamentada** | **6** | **6** | **8** | **1** | **3** |
| fundamentada · específica do DS (de 5) | 0 | 0 | 4 | 0 | 3 |
| fundamentada · acessibilidade geral (de 9) | 6 | 6 | 4 | 1 | 0 |
| fundamentada pela referência secundária | 1 | 0 | 1 | 0 | 0 |

## Specs por braço

- **sem** — detecção: A-01, A-02, A-04, A-08, A-09, A-11, A-12; fundamentada: A-01, A-02, A-04, A-08, A-09, A-12; pela referência: A-08 (REF2)
- **ferramentas** — detecção: A-01, A-02, A-04, A-08, A-09, A-12; fundamentada: A-01, A-02, A-04, A-08, A-09, A-12
- **com** — detecção: A-01, A-03, A-08, A-09, A-11, A-12, P-01, P-02; fundamentada: A-01, A-03, A-08, A-09, A-11, A-12, P-01, P-02; pela referência: A-08 (REF1)
- **lb-axe** — detecção: A-09; fundamentada: A-09
- **lb-validator** — detecção: A-03, P-01, P-02; fundamentada: A-03, P-01, P-02
- nenhum braço detectou: A-05, A-06, A-07, A-10

## Classe de cada spec (pela `categories` da referência)

| categorias | classe |
|---|---|
| todas em {`token`, `estrutura`} | específica do DS |
| alguma de {`acessibilidade`, `navegacao`, `formulario`} | acessibilidade geral |

A-01 geral · A-02 geral · A-03 DS · A-04 geral · A-05 geral · A-06 geral · A-07 geral · A-08 geral · A-09 geral · A-10 DS · A-11 DS · A-12 geral · P-01 DS · P-02 DS
