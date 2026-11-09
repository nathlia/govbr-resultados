# Reconta sob o domínio declarado — dev-371-b-01/primeira-passada-20261103T1

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
| sem | p01 | 15 | **15** | 15 | — | — |
| sem | p02 | 15 | **15** | 15 | — | — |
| sem | p03 | 15 | **15** | 15 | — | — |
| ferramentas | p01 | 14 | **14** | 13 | — | B-23 |
| ferramentas | p02 | 13 | **13** | 13 | — | — |
| ferramentas | p03 | 15 | **15** | 14 | — | B-23 |
| com | p01 | 20 | **20** | 20 | — | — |
| com | p02 | 18 | **18** | 18 | — | — |
| com | p03 | 20 | **20** | 20 | — | — |
| lb-axe | p01 | 12 | **12** | 12 | — | — |
| lb-axe | p02 | 12 | **12** | 12 | — | — |
| lb-axe | p03 | 12 | **12** | 12 | — | — |
| lb-validator | p01 | 5 | **5** | 5 | — | — |
| lb-validator | p02 | 5 | **5** | 5 | — | — |
| lb-validator | p03 | 5 | **5** | 5 | — | — |
| **sem** | mediana | 15 | **15** | 15 | | |
| **ferramentas** | mediana | 14 | **14** | 13 | | |
| **com** | mediana | 20 | **20** | 20 | | |
| **lb-axe** | mediana | 12 | **12** | 12 | | |
| **lb-validator** | mediana | 5 | **5** | 5 | | |

## Cartões afetados

- credito-pelo-dominio: 0
- dominio-nao-credita: 0
- fora-do-dominio: 1
- registro-nao-determinado: 0
- ambiguo: 0
- sem-marcador-de-registro: 0
- credito-fora-do-dominio: 2
- credito-dentro-do-dominio: 14

| cartão | trio | braço | categoria | spec | registro | fonte do registro | julgada | com domínio | motivo |
|---|---|---|---|---|---|---|---|---|---|
| T3-93586c42d1 | p01 | sem | credito-dentro-do-dominio | B-21 | 3012 | lista-medida (lista-medida=3012, medida-do-juiz=3012) | B-21 | B-21 | credita B-21 no registro 3012, dentro do domínio |
| T3-e96aee3749 | p01 | ferramentas | credito-dentro-do-dominio | B-21 | 3028 | receita-url (receita-url=3028, lista-medida=3028, medida-do-juiz=3028) | B-21 | B-21 | credita B-21 no registro 3028, dentro do domínio |
| T3-781072fba7 | p01 | ferramentas | credito-fora-do-dominio | B-23 | 3028 | receita-url (receita-url=3028, lista-medida=3028, medida-do-juiz=3028) | B-23 | B-23 | credita B-23 no registro 3028, fora de 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038 |
| T3-b35f029e52 | p01 | com | credito-dentro-do-dominio | B-21 | 3025 | lista-medida (lista-medida=3025, medida-do-juiz=3025) | B-21 | B-21 | credita B-21 no registro 3025, dentro do domínio |
| T3-08bb561bff | p01 | com | credito-dentro-do-dominio | B-22 | 3025 | lista-medida (lista-medida=3025, medida-do-juiz=3025) | B-22 | B-22 | credita B-22 no registro 3025, dentro do domínio |
| T3-82b981905b | p01 | lb-axe | credito-dentro-do-dominio | B-21 | 3046 | receita-url (receita-url=3046, medida-do-juiz=3046) | B-21 | B-21 | credita B-21 no registro 3046, dentro do domínio |
| T3-67addd6af3 | p02 | sem | credito-dentro-do-dominio | B-21 | 3012 | receita-url (receita-url=3012, lista-medida=3012, medida-do-juiz=3012) | B-21 | B-21 | credita B-21 no registro 3012, dentro do domínio |
| T3-7336709d29 | p02 | ferramentas | credito-dentro-do-dominio | B-21 | 3012 | lista-medida | B-21 | B-21 | credita B-21 no registro 3012, dentro do domínio |
| T3-4fbe95ed0f | p02 | com | credito-dentro-do-dominio | B-21 | 3012 | lista-medida (lista-medida=3012, medida-do-juiz=3012) | B-21 | B-21 | credita B-21 no registro 3012, dentro do domínio |
| T3-2c967f17e9 | p02 | lb-axe | credito-dentro-do-dominio | B-21 | 3046 | receita-url | B-21 | B-21 | credita B-21 no registro 3046, dentro do domínio |
| T3-4079c9ad99 | p03 | sem | credito-dentro-do-dominio | B-21 | 3028 | lista-medida | B-21 | B-21 | credita B-21 no registro 3028, dentro do domínio |
| T3-e0274337af | p03 | sem | fora-do-dominio | B-23 | 3028 | lista-medida (lista-medida=3028, medida-do-juiz=3028) | — | — | registro 3028 fora de B-23.dominio (3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038): recusa mantida |
| T3-0a3a29b59a | p03 | ferramentas | credito-dentro-do-dominio | B-21 | 3028 | lista-medida (lista-medida=3028, medida-do-juiz=3028) | B-21 | B-21 | credita B-21 no registro 3028, dentro do domínio |
| T3-3d950c3512 | p03 | ferramentas | credito-fora-do-dominio | B-23 | 3028 | lista-medida (lista-medida=3028, medida-do-juiz=3028) | B-23 | B-23 | credita B-23 no registro 3028, fora de 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038 |
| T3-b6f3342af0 | p03 | com | credito-dentro-do-dominio | B-21 | 3069 | receita-url (receita-url=3069, lista-medida=3069, medida-do-juiz=3069) | B-21 | B-21 | credita B-21 no registro 3069, dentro do domínio |
| T3-baa7f6aa1e | p03 | com | credito-dentro-do-dominio | B-22 | 3069 | receita-url (receita-url=3069, lista-medida=3069, medida-do-juiz=3069) | B-22 | B-22 | credita B-22 no registro 3069, dentro do domínio |
| T3-5a595e7655 | p03 | lb-axe | credito-dentro-do-dominio | B-21 | 3046 | receita-url (receita-url=3046, medida-do-juiz=3046) | B-21 | B-21 | credita B-21 no registro 3046, dentro do domínio |
