# Specs achadas por braço — analises/dev-362-b-01/primeira-passada-20261031T1 · p03/analisar-20261031T1

Política do juiz: `politica-normativa-1.3.0`. Specs da referência: 29 (específicas do DS 7 · acessibilidade geral 22).
Coluna principal: **detecção**.

**Detecção** = a classe derivada credita a spec (crédito elegível: violação de origem página ou indeterminada, com vínculo e fundamentação; R7, R15, Q1). Origem DS (P3), pendente e vínculo sem crédito ficam fora.
**Fundamentada** = subconjunto da detecção: do crédito elegível, só o cartão em que a norma que deu a classe (a citada, ou, na 1.3.0, a referência secundária que deu a classe) foi julgada aplicável (`aplica`) e violada (`sim`), com o vínculo à mesma spec. Não exige força obrigatória: norma mais fraca aplicável e violada com vínculo (R15) conta como fundamentada, como a autora decidiu; Q1 (sem norma aplicada) não conta.
Braço com coleta válida e nenhum achado mostra 0; coleta ausente ou incompleta aparece como tal, sem número.

| | sem | ferramentas | com | lb-axe | lb-validator |
|---|---|---|---|---|---|
| coleta | válida | válida | válida | válida | válida |
| cartões | 40 | 33 | 41 | 48 | 22 |
| **detecção** (principal) | **13** | **15** | **18** | **12** | **4** |
| detecção · específica do DS (de 7) | 0 | 0 | 1 | 0 | 1 |
| detecção · acessibilidade geral (de 22) | 13 | 15 | 17 | 12 | 3 |
| **detecção fundamentada** | **13** | **15** | **18** | **12** | **4** |
| fundamentada · específica do DS (de 7) | 0 | 0 | 1 | 0 | 1 |
| fundamentada · acessibilidade geral (de 22) | 13 | 15 | 17 | 12 | 3 |
| fundamentada pela referência secundária | 0 | 0 | 0 | 0 | 0 |

## Specs por braço

- **sem** — detecção: B-01, B-02, B-05, B-06, B-07, B-11, B-12, B-13, B-16, B-17, B-19, B-21, B-25; fundamentada: B-01, B-02, B-05, B-06, B-07, B-11, B-12, B-13, B-16, B-17, B-19, B-21, B-25
- **ferramentas** — detecção: B-02, B-05, B-06, B-07, B-11, B-12, B-13, B-14, B-16, B-17, B-19, B-21, B-23, B-25, B-26; fundamentada: B-02, B-05, B-06, B-07, B-11, B-12, B-13, B-14, B-16, B-17, B-19, B-21, B-23, B-25, B-26
- **com** — detecção: B-01, B-02, B-03, B-04, B-05, B-06, B-07, B-11, B-12, B-13, B-14, B-15, B-16, B-17, B-19, B-21, B-25, B-26; fundamentada: B-01, B-02, B-03, B-04, B-05, B-06, B-07, B-11, B-12, B-13, B-14, B-15, B-16, B-17, B-19, B-21, B-25, B-26
- **lb-axe** — detecção: B-02, B-05, B-06, B-07, B-12, B-13, B-16, B-17, B-20, B-21, B-23, B-26; fundamentada: B-02, B-05, B-06, B-07, B-12, B-13, B-16, B-17, B-20, B-21, B-23, B-26
- **lb-validator** — detecção: B-01, B-04, B-07, B-15; fundamentada: B-01, B-04, B-07, B-15
- nenhum braço detectou: B-08, B-09, B-10, B-18, B-22, B-24, B-27, B-28, B-29

## Classe de cada spec (pela `categories` da referência)

| categorias | classe |
|---|---|
| todas em {`token`, `estrutura`} | específica do DS |
| alguma de {`acessibilidade`, `navegacao`, `formulario`} | acessibilidade geral |

B-01 geral · B-02 geral · B-03 geral · B-04 geral · B-05 geral · B-06 geral · B-07 geral · B-08 DS · B-09 DS · B-10 DS · B-11 geral · B-12 geral · B-13 geral · B-14 geral · B-15 DS · B-16 geral · B-17 geral · B-18 DS · B-19 geral · B-20 geral · B-21 geral · B-22 geral · B-23 geral · B-24 geral · B-25 geral · B-26 geral · B-27 geral · B-28 DS · B-29 DS
