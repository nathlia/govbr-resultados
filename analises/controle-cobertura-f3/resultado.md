# Coverage check (controle de cobertura, addendum 3 §5.1): screen F3, unguided scan

**The unguided scan flags 3 of the 12 seeded specs: F3-05, F3-06 and F3-07.**
The pre-declared condition "total ≥ 1 and < 12" **holds**. It would still hold at 2 if F3-07 were reclassified as doubtful (see its caveat).

## Flagged specs

| Spec | Type | Scanner control | Matching unguided finding (scene, id, rule, target, message) | Why it matches |
|---|---|---|---|---|
| F3-05 | T2 | yes | lista-exibir, F-001, `govbr-3.7.0-foundation-global-21b1a2733f7b`, `div:nth-of-type(2) > div > div:nth-of-type(1) > div > span`: "background-color: rgb(23, 85, 169) (#1755a9) não corresponde a nenhum token do DS" | Same property (background-color) with the same seeded off-palette value (#1755a9), on a span, in the initial state. The finding is absent in the pagina-2 and exibir-25 scenes. |
| F3-06 | T2 | yes | lista-exibir, F-004, `govbr-3.7.0-development-global-137c50bea6ca`, `div:nth-of-type(2) > nav > ul > li:nth-of-type(2) > button`: "border-radius: 7px fora da escala do DS" | Same property and the same seeded value (border-radius 7px), on a button in nav > ul > li. That is where the arrow after the page numbers sits: li 2 on page 1, and li 3 in the pagina-2 scene. |
| F3-07 | T1 | yes | lista-exibir, F-010, `govbr-3.7.0-component-breadcrumb-478cffdbb111`, `… > br-breadcrumb >>> div`: "o último item ("Processos") é link para outra página e não é "PNIP" (título da página atual ausente)" | The target is the breadcrumb root, an ancestor region. The message explicitly names the seeded element (the last item, "Processos") and the seeded structure (it is a link, not the current-page text). |

F3-07 caveat: the finding counts under "same property", not "same rule".
- Its rule id is neither of the two rules the spec lists (`c54865b466d0`, `53db61fa81f9`).
- It says the link goes "para outra página" (to another page). The seeded link points to the page itself.
- It does not mention `data-active`.

Each of these findings also appears in every other scene that renders the same element (for example, F-010 on the breadcrumb appears in all 5 scenes).

## Count by type (strata)
- T1 Estrutura: 1 of 3 (F3-07)
- T2 Valor fora do sistema: 2 of 2 (F3-05, F3-06)
- T3 Valor do sistema no lugar errado: 0 of 1
- T4 Estado e comportamento: 0 of 5
- R Redação: 0 of 1

**Scanner controls (`controleDaVarredura: true`):** all 3 are flagged (F3-05, F3-06, F3-07).

## Doubtful matches (not counted)
None. A conservative reader could move F3-07 here because of the caveat above. That would give a total of 2.

## Specs not flagged: was there any unguided finding on the element?
- **F3-01** (missing previous arrow): yes. The only finding on the pagination is F-004, border-radius 7px on the "Página seguinte" arrow. That is a different property, already counted for F3-06. Nothing about the missing arrow.
- **F3-02** (avatar without `content` class): no.
- **F3-03** (the tag's × does not remove the filter): probably yes. In the filtro-removido scene, F-010 `wcag:4.1.2` "Elemento interativo apenas com ícone, sem nome acessível (br-button)" targets `#searchTableUtils > div > div:nth-of-type(1) > div > span > button`, which looks like the tag's ×. It is about the accessible name, not about the removal behaviour.
- **F3-04** (Solicitante cells clipped without ellipsis): no. The F-003 finding (margin 5px) targets an input in `thead th:nth-of-type(2)`, which is a different element.
- **F3-08** (tab label font-size): no.
- **F3-09** (the "Exibir" select keeps showing 10): no.
- **F3-10** (disabled buttons at opacity 1): no.
- **F3-11** (wrong active tab): no.
- **F3-12** ("Confirmar" label on the sign action): no.

The other unguided findings are not seeded F3 specs:
- missing footer and first link not a skip link, both on `html`;
- margin -38px on the `pnip-search-table-utils` button;
- placeholder used as the label of `#search`.

## Technical facts
- **Source:** `bruta.json`, path `passes[*].validator.unguided.findings`. Each pass's unguided settings were mode `nao-guiada`, `selectors: null`, checks tokens+structure+page, policy "pagina-inteira … sem seletor do gabarito".
- **`baseline.json`:** a 2.7 KB summary with no `passes`. I read only its top-level keys.
- **Passes/scenes:** 5, all at 1280x900.

| Scene | Unguided findings | Seeded F3 specs in that scene |
|---|---|---|
| lista-exibir (states inicial + lista-exibir) | 8 | F3-02, F3-04, F3-05, F3-06, F3-07, F3-08, F3-10, F3-11 |
| assinatura-cancelada | 8 | F3-12 |
| pagina-2 | 6 | none |
| exibir-25 | 6 | F3-09 |
| filtro-removido | 9 | F3-01, F3-03 |

**sha256 of the inputs:**
- `bruta.json`: `e114e6325eee0089014e6cf57a79eec27e27994e77b90afab0dbbbfbb2da1848`
- `baseline.json`: `cc2121feade570e6b18ac275a71038768859fc849c178db270def21e81f1ed01`
- `ground-truth-processos-f3.json`: `14baee19d40b8818e9d44d2b00b6636b94fbaee5d79cefddedc97307ebfbd7b0` (the strata file cites the same sha)
- `estratos-1.0.0.json`: `ad48fb747aecc897f20985bda0a6994f36d00bf992f9e02441d6353e08806f54`

**Sealed data:** I did not read the values of `validator.guided`, `axe` or each pass's `resolution`. Only their key names appeared when I listed the structure.

**Blockers:** none. All inputs were readable.
