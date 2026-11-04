# Specs achadas por braço — analises/dev-366-b-01/primeira-passada-20261103T1

Política do juiz: `politica-normativa-1.3.0`. Specs da referência: 29 (específicas do DS 7 · acessibilidade geral 22).
Coluna principal: **ainda não fixada** (decisão da autora: `--coluna-principal` ou `design.colunaPrincipal` na campanha).

**Detecção** = a classe derivada credita a spec (crédito elegível: violação de origem página ou indeterminada, com vínculo e fundamentação; R7, R15, Q1). Origem DS (P3), pendente e vínculo sem crédito ficam fora.
**Fundamentada** = subconjunto da detecção: do crédito elegível, só o cartão em que a norma que deu a classe (a citada, ou, na 1.3.0, a referência secundária que deu a classe) foi julgada aplicável (`aplica`) e violada (`sim`), com o vínculo à mesma spec. Não exige força obrigatória: norma mais fraca aplicável e violada com vínculo (R15) conta como fundamentada, como a autora decidiu; Q1 (sem norma aplicada) não conta.
Braço com coleta válida e nenhum achado mostra 0; coleta ausente ou incompleta aparece como tal, sem número.

| | sem | ferramentas | com | lb-axe | lb-validator |
|---|---|---|---|---|---|
| coleta | válida | válida | válida | válida | válida |
| cartões | 45 | 30 | 58 | 48 | 22 |
| **detecção** | **13** | **13** | **17** | **12** | **4** |
| detecção · específica do DS (de 7) | 0 | 0 | 1 | 0 | 1 |
| detecção · acessibilidade geral (de 22) | 13 | 13 | 16 | 12 | 3 |
| **detecção fundamentada** | **13** | **13** | **17** | **12** | **4** |
| fundamentada · específica do DS (de 7) | 0 | 0 | 1 | 0 | 1 |
| fundamentada · acessibilidade geral (de 22) | 13 | 13 | 16 | 12 | 3 |
| fundamentada pela referência secundária | 0 | 0 | 0 | 0 | 0 |

## Specs por braço

- **sem** — detecção: B-01, B-02, B-04, B-05, B-06, B-07, B-11, B-12, B-13, B-14, B-16, B-17, B-19; fundamentada: B-01, B-02, B-04, B-05, B-06, B-07, B-11, B-12, B-13, B-14, B-16, B-17, B-19
- **ferramentas** — detecção: B-02, B-05, B-06, B-07, B-11, B-12, B-13, B-14, B-16, B-17, B-19, B-25, B-26; fundamentada: B-02, B-05, B-06, B-07, B-11, B-12, B-13, B-14, B-16, B-17, B-19, B-25, B-26
- **com** — detecção: B-01, B-02, B-03, B-04, B-05, B-06, B-07, B-11, B-12, B-13, B-14, B-15, B-16, B-17, B-19, B-25, B-26; fundamentada: B-01, B-02, B-03, B-04, B-05, B-06, B-07, B-11, B-12, B-13, B-14, B-15, B-16, B-17, B-19, B-25, B-26
- **lb-axe** — detecção: B-02, B-05, B-06, B-07, B-12, B-13, B-16, B-17, B-20, B-21, B-23, B-26; fundamentada: B-02, B-05, B-06, B-07, B-12, B-13, B-16, B-17, B-20, B-21, B-23, B-26
- **lb-validator** — detecção: B-01, B-04, B-07, B-15; fundamentada: B-01, B-04, B-07, B-15
- nenhum braço detectou: B-08, B-09, B-10, B-18, B-22, B-24, B-27, B-28, B-29

## Classe de cada spec (pela `categories` da referência)

| categorias | classe |
|---|---|
| todas em {`token`, `estrutura`} | específica do DS |
| alguma de {`acessibilidade`, `navegacao`, `formulario`} | acessibilidade geral |

B-01 geral · B-02 geral · B-03 geral · B-04 geral · B-05 geral · B-06 geral · B-07 geral · B-08 DS · B-09 DS · B-10 DS · B-11 geral · B-12 geral · B-13 geral · B-14 geral · B-15 DS · B-16 geral · B-17 geral · B-18 DS · B-19 geral · B-20 geral · B-21 geral · B-22 geral · B-23 geral · B-24 geral · B-25 geral · B-26 geral · B-27 geral · B-28 DS · B-29 DS

## Sensibilidade da regra publicada (gatilho d)

Regra `regra-identidade-registro.md` (sha256 `589eec8ac1bede002b21e8f2be16f0c3ac235dd70b661b2be4633c5b84d4431a`). detecção (specDetectada) por braço; em cada leitura da regra, cada cartão das unidades (d) é re-derivado pela mesma política (a resposta adotada com só o vínculo trocado pela spec da leitura); os demais contam como nos julgamentos.

| cenário | sem | ferramentas | com | lb-axe | lb-validator |
|---|---|---|---|---|---|
| 1a-passada | 15 | 14 | 18 | 12 | 4 |
| julgamentos | 13 | 13 | 17 | 12 | 4 |
| identidade-demonstrada | 15 | 14 | 19 | 12 | 4 |
| identidade-nao-demonstrada | 13 | 13 | 17 | 12 | 4 |

| cartão | braço | unidade | leitura adotada | 1a-passada | julgamentos | identidade-demonstrada | identidade-nao-demonstrada |
|---|---|---|---|---|---|---|---|
| T3-03958467fc | sem | D-8fe520d063 | identidade-nao-demonstrada | — | — | — | — |
| T3-04eebbf7d6 | com | D-fbb3001149 | identidade-nao-demonstrada | B-25 | B-25 | B-25 | B-25 |
| T3-0595431e63 | lb-axe | D-931fc3ac4c | identidade-nao-demonstrada | B-20 | B-20 | B-20 | B-20 |
| T3-2f69cfef10 | ferramentas | D-3caeaba874 | identidade-nao-demonstrada | B-25 | B-25 | B-25 | B-25 |
| T3-4a84444512 | lb-validator | D-931fc3ac4c | identidade-nao-demonstrada | — | — | — | — |
| T3-6616e32cb7 | sem | D-af8c370eda | identidade-nao-demonstrada | B-21 | — | B-21 | — |
| T3-6e9d59e4a4 | ferramentas | D-4c22359244 | identidade-nao-demonstrada | B-23 | — | B-23 | — |
| T3-7cfe341162 | sem | D-4c22359244 | identidade-nao-demonstrada | B-23 | — | B-23 | — |
| T3-8a51b4042a | lb-axe | D-af8c370eda | identidade-nao-demonstrada | B-21 | B-21 | B-21 | B-21 |
| T3-8fcadb0eda | com | D-4c22359244 | identidade-nao-demonstrada | — | — | B-23 | — |
| T3-97b427e865 | lb-axe | D-8f00bb28d7 | identidade-nao-demonstrada | — | — | — | — |
| T3-bb98a2be48 | ferramentas | D-8fe520d063 | identidade-nao-demonstrada | B-26 | B-26 | B-26 | B-26 |
| T3-c8eaa55823 | lb-axe | D-4c22359244 | identidade-nao-demonstrada | B-23 | B-23 | B-23 | B-23 |
| T3-fe4106e116 | com | D-af8c370eda | identidade-nao-demonstrada | B-21 | — | B-21 | — |
