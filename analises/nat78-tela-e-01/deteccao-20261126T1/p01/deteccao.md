# Specs achadas por braço — analises/nat78-tela-e-01/passada-adjudicada-20261119T1 · p01/analisar-20261119T1

Política do juiz: `politica-normativa-1.3.0`. Specs da referência: 8 (específicas do DS 6 · acessibilidade geral 2).
Coluna principal: **detecção**.

**Detecção** = a classe derivada credita a spec (crédito elegível: violação de origem página ou indeterminada, com vínculo e fundamentação; R7, R15, Q1). Origem DS (P3), pendente e vínculo sem crédito ficam fora.
**Fundamentada** = subconjunto da detecção: do crédito elegível, só o cartão em que a norma que deu a classe (a citada, ou, na 1.3.0, a referência secundária que deu a classe) foi julgada aplicável (`aplica`) e violada (`sim`), com o vínculo à mesma spec. Não exige força obrigatória: norma mais fraca aplicável e violada com vínculo (R15) conta como fundamentada, como a autora decidiu; Q1 (sem norma aplicada) não conta.
Braço com coleta válida e nenhum achado mostra 0; coleta ausente ou incompleta aparece como tal, sem número.

| | sem | ferramentas | com | lb-axe | lb-validator |
|---|---|---|---|---|---|
| coleta | válida | válida | válida | válida | válida |
| cartões | 8 | 10 | 9 | 12 | 1 |
| **detecção** (principal) | **6** | **7** | **8** | **1** | **1** |
| detecção · específica do DS (de 6) | 5 | 5 | 6 | 0 | 1 |
| detecção · acessibilidade geral (de 2) | 1 | 2 | 2 | 1 | 0 |
| **detecção fundamentada** | **3** | **4** | **8** | **1** | **1** |
| fundamentada · específica do DS (de 6) | 2 | 2 | 6 | 0 | 1 |
| fundamentada · acessibilidade geral (de 2) | 1 | 2 | 2 | 1 | 0 |
| fundamentada pela referência secundária | 0 | 0 | 0 | 0 | 0 |

## Specs por braço

- **sem** — detecção: U-01, U-02, U-03, U-05, U-06, U-07; fundamentada: U-01, U-02, U-07
- **ferramentas** — detecção: U-01, U-02, U-03, U-05, U-06, U-07, U-08; fundamentada: U-01, U-02, U-07, U-08
- **com** — detecção: U-01, U-02, U-03, U-04, U-05, U-06, U-07, U-08; fundamentada: U-01, U-02, U-03, U-04, U-05, U-06, U-07, U-08
- **lb-axe** — detecção: U-07; fundamentada: U-07
- **lb-validator** — detecção: U-04; fundamentada: U-04
- nenhum braço detectou: —

## Classe de cada spec (pela `categories` da referência)

| categorias | classe |
|---|---|
| todas em {`token`, `estrutura`} | específica do DS |
| alguma de {`acessibilidade`, `navegacao`, `formulario`} | acessibilidade geral |

U-01 DS · U-02 DS · U-03 DS · U-04 DS · U-05 DS · U-06 DS · U-07 geral · U-08 geral
