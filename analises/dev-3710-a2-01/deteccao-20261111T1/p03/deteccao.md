# Specs achadas por braço — analises/dev-3710-a2-01/primeira-passada-20261111T1 · p03/analisar-20261111T1

Política do juiz: `politica-normativa-1.3.0`. Specs da referência: 14 (específicas do DS 5 · acessibilidade geral 9).
Coluna principal: **detecção**.

**Detecção** = a classe derivada credita a spec (crédito elegível: violação de origem página ou indeterminada, com vínculo e fundamentação; R7, R15, Q1). Origem DS (P3), pendente e vínculo sem crédito ficam fora.
**Fundamentada** = subconjunto da detecção: do crédito elegível, só o cartão em que a norma que deu a classe (a citada, ou, na 1.3.0, a referência secundária que deu a classe) foi julgada aplicável (`aplica`) e violada (`sim`), com o vínculo à mesma spec. Não exige força obrigatória: norma mais fraca aplicável e violada com vínculo (R15) conta como fundamentada, como a autora decidiu; Q1 (sem norma aplicada) não conta.
Braço com coleta válida e nenhum achado mostra 0; coleta ausente ou incompleta aparece como tal, sem número.

| | sem | ferramentas | com | lb-axe | lb-validator |
|---|---|---|---|---|---|
| coleta | válida | válida | válida | válida | válida |
| cartões | 10 | 14 | 13 | 8 | 1 |
| **detecção** (principal) | **7** | **9** | **10** | **1** | **1** |
| detecção · específica do DS (de 5) | 2 | 1 | 2 | 0 | 0 |
| detecção · acessibilidade geral (de 9) | 5 | 8 | 8 | 1 | 1 |
| **detecção fundamentada** | **5** | **8** | **10** | **1** | **1** |
| fundamentada · específica do DS (de 5) | 0 | 0 | 2 | 0 | 0 |
| fundamentada · acessibilidade geral (de 9) | 5 | 8 | 8 | 1 | 1 |
| fundamentada pela referência secundária | 0 | 0 | 0 | 0 | 0 |

## Specs por braço

- **sem** — detecção: U-03, U-04, U-06, U-08, U-09, U-13, U-14; fundamentada: U-06, U-08, U-09, U-13, U-14
- **ferramentas** — detecção: U-04, U-06, U-07, U-08, U-09, U-10, U-12, U-13, U-14; fundamentada: U-06, U-07, U-08, U-09, U-10, U-12, U-13, U-14
- **com** — detecção: U-03, U-04, U-06, U-07, U-08, U-09, U-10, U-11, U-13, U-14; fundamentada: U-03, U-04, U-06, U-07, U-08, U-09, U-10, U-11, U-13, U-14
- **lb-axe** — detecção: U-10; fundamentada: U-10
- **lb-validator** — detecção: U-11; fundamentada: U-11
- nenhum braço detectou: U-01, U-02, U-05

## Classe de cada spec (pela `categories` da referência)

| categorias | classe |
|---|---|
| todas em {`token`, `estrutura`} | específica do DS |
| alguma de {`acessibilidade`, `navegacao`, `formulario`} | acessibilidade geral |

U-01 DS · U-02 DS · U-03 DS · U-04 DS · U-05 DS · U-06 geral · U-07 geral · U-08 geral · U-09 geral · U-10 geral · U-11 geral · U-12 geral · U-13 geral · U-14 geral
