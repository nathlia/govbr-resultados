# Reconta sob o domínio declarado — dev-372-b-01/primeira-passada-20261104T1

Reconta mecânica (D-168), sem novo julgamento. Política `politica-normativa-1.3.0`; referência 1.1.0 (sha256 `bbde01f90d58…`); medição `55e68c9dc104…`.
**julgada** = a detecção da 1ª passada (`specDetectada`). **com domínio** = a julgada mais os cartões recusados só pelo registro cujo registro alcançado está no `dominio` declarado da spec, re-derivados pela mesma política com só o vínculo trocado. **estrita** (sensibilidade) = com domínio sem os créditos da passada em registro fora do domínio.

## Specs de rota de registro e domínio

| spec | parada | registro da parada | registros cobertos | domínio declarado |
|---|---|---|---|---|
| B-20 | detalhe-menu | 3046 | 3039, 3040, 3041, 3042, 3043, 3044, 3045, 3046 | sim |
| B-21 | detalhe | 3038 | 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3019, 3020, 3021, 3022, 3023, 3024, 3025, 3026, 3027, 3028, 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038, 3039, 3040, 3041, 3042, 3043, 3044, 3045, 3046, 3047, 3048, 3049, 3050, 3051, 3052, 3053, 3054, 3055, 3056, 3057, 3058, 3059, 3060, 3061, 3062, 3063, 3064, 3065, 3066, 3067, 3068, 3069 | sim |
| B-22 | detalhe | 3038 | 3013, 3019, 3025, 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038, 3047, 3048, 3049, 3050, 3051, 3052, 3053, 3054, 3055, 3056, 3057, 3058, 3059, 3060, 3061, 3062, 3063, 3064, 3065, 3066, 3067, 3068, 3069 | sim |
| B-23 | detalhe | 3038 | 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038 | sim |
| B-24 | modal | 3038 | 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038 | sim |
| B-27 | modal | 3038 | 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038 | sim |

## Detecção por braço e trio

| braço | trio | julgada | com domínio | estrita | specs a mais (domínio) | fora do domínio (estrita tira) |
|---|---|---|---|---|---|---|
| sem | p01 | 17 | **18** | 18 | B-21 | — |
| sem | p02 | 15 | **15** | 15 | — | — |
| sem | p03 | 12 | **13** | 13 | B-21 | — |
| ferramentas | p01 | 11 | **12** | 12 | B-21 | — |
| ferramentas | p02 | 14 | **15** | 15 | B-21 | — |
| ferramentas | p03 | 12 | **14** | 14 | B-20, B-21 | — |
| com | p01 | 19 | **20** | 20 | B-22 | — |
| com | p02 | 18 | **20** | 20 | B-21, B-22 | — |
| com | p03 | 18 | **20** | 20 | B-20, B-22 | — |
| lb-axe | p01 | 12 | **12** | 12 | — | — |
| lb-axe | p02 | 12 | **12** | 12 | — | — |
| lb-axe | p03 | 11 | **11** | 11 | — | — |
| lb-validator | p01 | 5 | **5** | 5 | — | — |
| lb-validator | p02 | 5 | **5** | 5 | — | — |
| lb-validator | p03 | 5 | **5** | 5 | — | — |
| **sem** | mediana | 15 | **15** | 15 | | |
| **ferramentas** | mediana | 12 | **14** | 14 | | |
| **com** | mediana | 18 | **20** | 20 | | |
| **lb-axe** | mediana | 12 | **12** | 12 | | |
| **lb-validator** | mediana | 5 | **5** | 5 | | |

## Cartões afetados

- credito-pelo-dominio: 11
- dominio-nao-credita: 0
- fora-do-dominio: 2
- registro-nao-determinado: 0
- ambiguo: 0
- sem-marcador-de-registro: 0
- credito-fora-do-dominio: 0
- credito-dentro-do-dominio: 5

| cartão | trio | braço | categoria | spec | registro | fonte do registro | julgada | com domínio | motivo |
|---|---|---|---|---|---|---|---|---|---|
| T3-ac7d50ad86 | p01 | sem | credito-pelo-dominio | B-21 | 3028 | lista-medida (lista-medida=3028, medida-do-juiz=3028) | — | B-21 | registro 3028 ∈ B-21.dominio; a mesma resposta com o vínculo B-21 deriva violacao-pagina (R7) |
| T3-e6178196fe | p01 | ferramentas | credito-pelo-dominio | B-21 | 3012 | lista-medida (lista-medida=3012, medida-do-juiz=3012) | — | B-21 | registro 3012 ∈ B-21.dominio; a mesma resposta com o vínculo B-21 deriva violacao-pagina (R7) |
| T3-ef7862fe44 | p01 | com | credito-dentro-do-dominio | B-21 | 3069 | lista-medida (lista-medida=3069, medida-do-juiz=3069) | B-21 | B-21 | credita B-21 no registro 3069, dentro do domínio |
| T3-fc7f1e5efd | p01 | com | credito-pelo-dominio | B-22 | 3069 | lista-medida (lista-medida=3069, medida-do-juiz=3069) | — | B-22 | registro 3069 ∈ B-22.dominio; a mesma resposta com o vínculo B-22 deriva violacao-pagina (R7) |
| T3-5b098f208e | p01 | lb-axe | credito-dentro-do-dominio | B-21 | 3046 | receita-url (receita-url=3046, medida-do-juiz=3046) | B-21 | B-21 | credita B-21 no registro 3046, dentro do domínio |
| T3-ea3ae6a96f | p02 | sem | credito-dentro-do-dominio | B-21 | 3028 | lista-medida (lista-medida=3028, medida-do-juiz=3028) | B-21 | B-21 | credita B-21 no registro 3028, dentro do domínio |
| T3-032af71b50 | p02 | sem | fora-do-dominio | B-23 | 3028 | lista-medida (lista-medida=3028, medida-do-juiz=3028) | — | — | registro 3028 fora de B-23.dominio (3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038): recusa mantida |
| T3-c9bd0fff03 | p02 | ferramentas | credito-pelo-dominio | B-21 | 3028 | receita-url (receita-url=3028, lista-medida=3028, medida-do-juiz=3028) | — | B-21 | registro 3028 ∈ B-21.dominio; a mesma resposta com o vínculo B-21 deriva violacao-pagina (R7) |
| T3-75a700c0c5 | p02 | com | credito-pelo-dominio | B-21 | 3012 | lista-medida (lista-medida=3012, medida-do-juiz=3012) | — | B-21 | registro 3012 ∈ B-21.dominio; a mesma resposta com o vínculo B-21 deriva violacao-pagina (R15) |
| T3-08e813cfa5 | p02 | com | credito-pelo-dominio | B-22 | 3034 | lista-medida (lista-medida=3034, medida-do-juiz=3034) | — | B-22 | registro 3034 ∈ B-22.dominio; a mesma resposta com o vínculo B-22 deriva violacao-pagina (R7) |
| T3-11ec55f9c7 | p02 | com | fora-do-dominio | B-23 | 3028 | lista-medida (lista-medida=3028, medida-do-juiz=3028) | — | — | registro 3028 fora de B-23.dominio (3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038): recusa mantida |
| T3-60e14b3b0b | p02 | lb-axe | credito-dentro-do-dominio | B-21 | 3046 | receita-url (receita-url=3046, medida-do-juiz=3046) | B-21 | B-21 | credita B-21 no registro 3046, dentro do domínio |
| T3-6aabc99771 | p03 | sem | credito-pelo-dominio | B-21 | 3012 | lista-medida (lista-medida=3012, medida-do-juiz=3012) | — | B-21 | registro 3012 ∈ B-21.dominio; a mesma resposta com o vínculo B-21 deriva violacao-pagina (R7) |
| T3-ee6589853e | p03 | ferramentas | credito-pelo-dominio | B-20 | 3042 | lista-medida (lista-medida=3042, medida-do-juiz=3042) | — | B-20 | registro 3042 ∈ B-20.dominio; a mesma resposta com o vínculo B-20 deriva violacao-pagina (R7) |
| T3-d7ca9c555f | p03 | ferramentas | credito-pelo-dominio | B-21 | 3012 | lista-medida (lista-medida=3012, medida-do-juiz=3012) | — | B-21 | registro 3012 ∈ B-21.dominio; a mesma resposta com o vínculo B-21 deriva violacao-pagina (R7) |
| T3-c36da7fdee | p03 | com | credito-pelo-dominio | B-20 | 3043 | receita-url (receita-url=3043, lista-medida=3043, medida-do-juiz=3043) | — | B-20 | registro 3043 ∈ B-20.dominio; a mesma resposta com o vínculo B-20 deriva violacao-pagina (R7) |
| T3-e340a16783 | p03 | com | credito-pelo-dominio | B-22 | 3025 | receita-url (receita-url=3025, lista-medida=3025, medida-do-juiz=3025) | — | B-22 | registro 3025 ∈ B-22.dominio; a mesma resposta com o vínculo B-22 deriva violacao-pagina (R7) |
| T3-26c64c7abf | p03 | lb-axe | credito-dentro-do-dominio | B-21 | 3046 | receita-url (receita-url=3046, medida-do-juiz=3046) | B-21 | B-21 | credita B-21 no registro 3046, dentro do domínio |
