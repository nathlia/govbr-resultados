# Specs achadas por braço — analises/nat78-tela-d-01/passada-adjudicada-20261118T1 · p05/analisar-20261118T1

Política do juiz: `politica-normativa-1.3.0`. Specs da referência: 13 (específicas do DS 1 · acessibilidade geral 12).
Coluna principal: **detecção**.

**Detecção** = a classe derivada credita a spec (crédito elegível: violação de origem página ou indeterminada, com vínculo e fundamentação; R7, R15, Q1). Origem DS (P3), pendente e vínculo sem crédito ficam fora.
**Fundamentada** = subconjunto da detecção: do crédito elegível, só o cartão em que a norma que deu a classe (a citada, ou, na 1.3.0, a referência secundária que deu a classe) foi julgada aplicável (`aplica`) e violada (`sim`), com o vínculo à mesma spec. Não exige força obrigatória: norma mais fraca aplicável e violada com vínculo (R15) conta como fundamentada, como a autora decidiu; Q1 (sem norma aplicada) não conta.
Braço com coleta válida e nenhum achado mostra 0; coleta ausente ou incompleta aparece como tal, sem número.

| | sem | ferramentas | com | lb-axe | lb-validator |
|---|---|---|---|---|---|
| coleta | válida | válida | válida | válida | válida |
| cartões | 35 | 34 | 40 | 21 | 5 |
| **detecção** (principal) | **8** | **8** | **12** | **5** | **2** |
| detecção · específica do DS (de 1) | 0 | 0 | 0 | 0 | 0 |
| detecção · acessibilidade geral (de 12) | 8 | 8 | 12 | 5 | 2 |
| **detecção fundamentada** | **8** | **8** | **12** | **5** | **2** |
| fundamentada · específica do DS (de 1) | 0 | 0 | 0 | 0 | 0 |
| fundamentada · acessibilidade geral (de 12) | 8 | 8 | 12 | 5 | 2 |
| fundamentada pela referência secundária | 0 | 0 | 0 | 0 | 0 |

## Specs por braço

- **sem** — detecção: D-02, D-03, D-04, D-06, D-10, D-11, D-12, D-13; fundamentada: D-02, D-03, D-04, D-06, D-10, D-11, D-12, D-13
- **ferramentas** — detecção: D-02, D-03, D-04, D-06, D-08, D-10, D-12, D-14; fundamentada: D-02, D-03, D-04, D-06, D-08, D-10, D-12, D-14
- **com** — detecção: D-02, D-03, D-04, D-05, D-06, D-07, D-08, D-10, D-11, D-12, D-13, D-14; fundamentada: D-02, D-03, D-04, D-05, D-06, D-07, D-08, D-10, D-11, D-12, D-13, D-14
- **lb-axe** — detecção: D-04, D-06, D-08, D-10, D-12; fundamentada: D-04, D-06, D-08, D-10, D-12
- **lb-validator** — detecção: D-05, D-11; fundamentada: D-05, D-11
- nenhum braço detectou: D-01

## Classe de cada spec (pela `categories` da referência)

| categorias | classe |
|---|---|
| todas em {`token`, `estrutura`} | específica do DS |
| alguma de {`acessibilidade`, `navegacao`, `formulario`} | acessibilidade geral |

D-01 DS · D-02 geral · D-03 geral · D-04 geral · D-05 geral · D-06 geral · D-07 geral · D-08 geral · D-10 geral · D-11 geral · D-12 geral · D-13 geral · D-14 geral
