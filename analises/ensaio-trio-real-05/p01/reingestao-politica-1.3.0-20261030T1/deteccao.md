# Specs achadas por braço — ensaio-trio-real-05/p01/primeira-passada-20261029T1

Política do juiz: `politica-normativa-1.3.0`. Specs da referência: 14 (específicas do DS 5 · acessibilidade geral 9).
**Detecção** = a classe derivada credita a spec. **Fundamentada** = fato verdadeiro + norma violada = sim + vínculo (norma citada, ou a referência secundária que deu a classe na 1.3.0).

| | sem | ferramentas | com | lb-axe | lb-validator |
|---|---|---|---|---|---|
| cartões | 12 | 10 | 15 | 2 | 5 |
| **detecção** | **7** | **8** | **9** | **1** | **4** |
| detecção · específica do DS (de 5) | 1 | 1 | 3 | 0 | 3 |
| detecção · acessibilidade geral (de 9) | 6 | 7 | 6 | 1 | 1 |
| **detecção fundamentada** | **6** | **6** | **9** | **1** | **4** |
| fundamentada · específica do DS (de 5) | 0 | 0 | 3 | 0 | 3 |
| fundamentada · acessibilidade geral (de 9) | 6 | 6 | 6 | 1 | 1 |
| fundamentada pela referência secundária | 0 | 0 | 0 | 0 | 0 |

## Specs por braço

- **sem** — detecção: A-01, A-02, A-04, A-08, A-09, A-11, A-12; fundamentada: A-01, A-02, A-04, A-08, A-09, A-12
- **ferramentas** — detecção: A-01, A-02, A-04, A-06, A-08, A-09, A-11, A-12; fundamentada: A-01, A-02, A-04, A-08, A-09, A-12
- **com** — detecção: A-01, A-03, A-04, A-06, A-08, A-09, A-12, P-01, P-02; fundamentada: A-01, A-03, A-04, A-06, A-08, A-09, A-12, P-01, P-02
- **lb-axe** — detecção: A-09; fundamentada: A-09
- **lb-validator** — detecção: A-03, A-06, P-01, P-02; fundamentada: A-03, A-06, P-01, P-02
- nenhum braço detectou: A-05, A-07, A-10

## Classe de cada spec (pela `categories` da referência)

| categorias | classe |
|---|---|
| todas em {`token`, `estrutura`} | específica do DS |
| alguma de {`acessibilidade`, `navegacao`, `formulario`} | acessibilidade geral |

A-01 geral · A-02 geral · A-03 DS · A-04 geral · A-05 geral · A-06 geral · A-07 geral · A-08 geral · A-09 geral · A-10 DS · A-11 DS · A-12 geral · P-01 DS · P-02 DS
