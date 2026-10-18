# Política normativa de revisão — v1.2 (NAT-73, passo 1)

**Versão:** `politica-normativa-1.2.0` · **Data:** 16/10/2026 · **Estado:** 1.1.0 **ratificada pela autora em
15/10/2026 (D-120)**: P1 b, P2 a, P3 a, P4 a, P5 a. 1.2.0 = **decisão da autora na NAT-89 em 16/10/2026 (D-130)**:
"B, e sugestão válida com regra errada não conta como falso: sai da precisão, como observação". Os pontos
**[autora]** seguem [perguntas-para-autora.md](perguntas-para-autora.md).

**Changelog**
- **1.2.0 (16/10, NAT-89, D-130):**
  - **R15 (nova):** fato que corresponde a uma unidade, citado com regra mais fraca porém verdadeira (boa prática,
    recomendação), **credita a detecção** da unidade. A fundamentação fica registrada à parte e não ganha crédito
    de norma correta.
  - **R11 e P4 alteradas (mudança de política, não aplicação da R15):** fato verdadeiro + **sugestão válida** +
    regra errada sai da precisão, como observação (classe nova `observacao-norma-errada`). Na 1.1.0 isso ficava no
    denominador, como falso. A sensibilidade 1.1.0 (como falso) é publicada sempre.
  - Campos novos por átomo: `regraCitada` (+ `forcaDaCitacao`, `aplicabilidadeDaCitada`), `qualidadeDaSugestao`.
- **1.1.0 (13/10, revisão independente Codex, NAT-88):**
  - A autoria passa a ser um campo separado da validade. Um defeito gerado por componente oficial do DS pode ser
    **violação verdadeira da interface** (WCAG 2.2 §5.2.2).
  - Cinco campos por alegação, incluindo vínculo e elegibilidade.
  - Duas análises publicadas: **desvios autorais** e **achados da interface**.
  - Classe nova **erro normativo**, que tem precedência sobre "observação".
  - R1 separa contraevidência de evidência indisponível.
  - R2 restrita à alegação "sem nome".
  - R6 exige evidência de estado exposto, não só ausência de atributo, e harmoniza a A-12.
  - Aviso: a mudança de precisão causada pela política é mudança de medida.
- **1.0.0 (13/10):** primeira proposta (commit thesis `63957e1`).

**Para que serve.** A política diz como classificar qualquer alegação revisada (cartão do agente ou da linha de
base). Vale para a **reanálise retrospectiva versionada** (NAT-74) e para as revisões futuras. **Não muda** D-97,
D-111 nem D-112 (D-21, D-114). Decisões antigas não recebem classe nova em silêncio: há trilha antigo→novo.

**Fontes.** D-27, D-52, D-80/D-87, D-97/D-111/D-112, D-113; parecer R4; instrumento §1 e §3; NAT-71 §3. WCAG 2.2,
§5.2.2 (*full pages*): a conformidade vale para a página inteira e não é obtida excluindo uma parte dela.

---

## 1. Cinco perguntas por alegação, registradas separadamente

| Campo | Pergunta | Valores | Quem decide |
|---|---|---|---|
| **verdadeFactual** | O que o cartão observa é verdade no estado declarado? | `verdadeira` · `falsa` (contraevidência medida) · `indisponivel` | Medição na página congelada |
| **norma** | Que norma o cartão invoca (ou implica)? Ela é aplicável e foi violada? | id + fonte + versão; `forca` (`obrigatorio`/`recomendado`/`exemplo`); `aplicabilidade` (`aplica`/`nao-aplica`/`incerta`); `violada` (`sim`/`nao`/`incerto`) | WCAG 2.2 / e-MAG (acessibilidade); KB do DS com `force` (*token*, anatomia, página) |
| **origem** | Quem gerou o que viola? | `pagina` · `ds-entregue` · `pagina-copiando-exemplo-ds` · `indeterminada` | Proveniência medida (D-52: folha oficial, *shadow root*, `core.js`) |
| **vinculo** | A alegação corresponde a uma unidade da referência? | unidade + relação + evidência + revisora, ou `nenhum` | Revisão (NAT-72; R7) |
| **elegibilidade** | Em qual análise ela conta, e como? | derivada das quatro acima, por análise (§3) | Esta política |

**Regra-mãe.** A origem **não decide** a verdade nem a violação. Ela só decide a elegibilidade na análise
restrita a desvios autorais. Conformar-se ao *token* ou à anatomia do DS e cumprir WCAG/e-MAG são perguntas
distintas. Uma convenção do DS ("botão circular sempre com `aria-label`") não é o WCAG 4.1.2.

Campo extra: `forcaDoVeredito` (`medido`/`inferido`/`incerto`). Não é probabilidade (NAT-84).

Campos da 1.2.0, gravados à parte, porque o crédito de detecção não é o mesmo que fundamentação correta (D-130):
- `regraCitada`: id + `forcaDaCitacao` (`obrigatorio`/`recomendado`/`boa-pratica`/`exemplo`) +
  `aplicabilidadeDaCitada` (`aplica`/`nao-aplica`/`incerta`);
- `qualidadeDaSugestao`: `valida` · `invalida` · `generica` · `ausente` · `indeterminada`. É **válida** só se
  cumpre as três condições: (1) trata o fato verdadeiro registrado; (2) é específica do sujeito, e não o texto fixo
  de ajuda da regra; (3) aplicá-la não viola norma obrigatória. Quem julga é o assistente, com a evidência
  registrada. Uma sugestão útil **não prova** que a violação alegada existia, por isso ela não muda a classe da
  norma; só tira o átomo do denominador.

## 2. Classes

| Classe | Quando | `decisao` antiga equivalente |
|---|---|---|
| **violação de origem página** | fato verdadeiro + norma obrigatória aplicável violada + origem `pagina` ou `pagina-copiando-exemplo-ds` | `defeito-do-gabarito` / `defeito-novo-correto` |
| **violação de origem DS** | fato verdadeiro + norma obrigatória aplicável violada **na interface avaliada** + origem `ds-entregue` | hoje `incorreta` (mistura) |
| **erro factual** | contraevidência medida: o fato é falso no estado declarado | `incorreta` |
| **erro normativo** | fato verdadeiro, mas a norma invocada não se aplica, não é obrigatória ou não foi violada (ex.: "sem `aria-label`" ⇒ "sem nome" quando há nome; 3.3.1 invocado sem erro detectado; regra de *token* invocada sobre valor que o DS entrega) | `incorreta` |
| **observação** | fato verdadeiro apresentado **sem** alegação normativa indevida: nenhuma norma obrigatória é invocada, ou é invocada só como recomendação/exemplo | hoje varia |
| **observação com norma errada** (1.2.0) | o que seria **erro normativo**, mas com `qualidadeDaSugestao = valida`. Não vale para erro factual | `incorreta` |
| **evidência indisponível** | não há base para decidir: estado não alcançado pela receita, raiz fechada, vínculo recusado, medida ausente. **Pendente** | `evidencia-insuficiente` |
| **duplicata** | mesma execução + sujeito + estado + evidência + unidade/política de outro cartão | `duplicada` |

**Precedência.** Avalia-se primeiro o fato (erro factual ou indisponível). Depois a norma: **erro normativo vem
antes de observação**. Um cartão só é "observação" se **não** afirma uma violação indevida. "Fora da referência"
não é "fora do escopo": violação de origem página não listada na referência é novo correto.

## 3. Duas análises publicadas (as duas, sempre)

As duas valem para os dois braços **e** as linhas de base, com denominadores explícitos e exclusões auditáveis
(lista de ids excluídos e motivo).

| | **(I) Desvios autorais** (restrita) | **(II) Achados verdadeiros da interface** |
|---|---|---|
| Pergunta | O agente acha o que a página errou? | O agente acha o que está errado na tela que o usuário recebe? |
| Violação de origem página | acerto | acerto |
| Violação de origem DS | **excluída** do numerador e do denominador, listada à parte com contagem por braço **[autora: P1]** | **acerto** (sem atribuir autoria à página) |
| Erro factual / erro normativo | no denominador, como falso | no denominador, como falso |
| Observação com norma errada (1.2.0) | fora; relatório à parte, com contagem por braço/linha de base | igual |
| Observação | fora; relatório à parte | fora; relatório à parte |
| Evidência indisponível | pendente; métrica provisória se houver pendente | igual |
| Crédito em unidade da referência | só via vínculo (R7); a referência só tem unidades de origem página | igual. Achados de origem DS entram como novos corretos, nunca como unidade |

**Sensibilidade obrigatória (1.2.0).** Toda tabela sai também com a política 1.1.0: observação com norma errada
como falso, e sem o crédito da R15. Publicam-se TP/FP, denominadores e observações excluídas por braço e linha de
base, nas duas políticas.

**Aviso obrigatório no texto.** Alta ou queda de precisão causada por esta política é **mudança de medida**, não
melhora do detector. A reanálise é retrospectiva e é rotulada assim. O número oficial fica (D-21).

## 4. Regras de decisão (exemplo real arquivado)

Os ids `M-xxxx` são do [inventario-casos-materiais.json](inventario-casos-materiais.json) (vista cega); o `C-…` é o
cartão em `govbr-resultados/analises/<campanha>/<par>/revisoes/<rev final>/revisao/`. **Material** = a regra
pode mudar uma unidade creditada (D, camada P ou linha de base pendente).

| # | Regra | Exemplo real | Classe | Material? |
|---|---|---|---|---|
| **R1** | **Fato primeiro: contraevidência ≠ ausência de evidência.** É erro factual só quando uma medida no estado declarado **contradiz** o cartão. Se a receita não alcança o estado, falta o elemento ou a medida é impossível, o resultado é **evidência indisponível** (R9/R10). | Tela B p01, `C-b7d2c936…` (wcag:2.2.2), "a tabela se atualiza sozinha": 90 s no estado declarado, 0 mutações e foco estável. Isso é contraevidência. | erro factual | Não |
| **R2** | **"Sem nome" é refutado pelo nome calculado.** Se o nome calculado (accname: `aria-labelledby`, `aria-label`, conteúdo, `title`) não é vazio, a alegação específica de **ausência de nome** (4.1.2 / e-MAG 2.2) é erro normativo (D-113). Um nome não vazio **não** decide a qualidade nem a adequação do nome. Uma alegação sobre isso é julgada à parte (semântica, NAT-71 §3.1). | `M-0629` (tela B p09, `C-fe2e08bf…`, linha de base `emag:2.2`): `<button aria-label="" title="Excluir vistoria">`; o Chromium expõe o nome. | erro normativo (300 cartões) | Não para D; muda a precisão da linha de base validator |
| **R3** | **Convenção do DS não é WCAG.** "Circular com `aria-label`" e "ícone sem rótulo visível fora de circle" são perguntas do eixo do DS. Só são violação com regra `obrigatorio` aplicável na KB; nunca saem como 4.1.2. | `M-0317` (tela B p09, `C-345c4da7…`): 40 botões `secondary middle` só com ícone, B-08 (regra de componente botão), não oferecida | violação do eixo do DS (B-08) | **Sim** (B-08) |
| **R4** | **Regra de *token* vale para estilo autoral (D-52).** Invocar desvio de *token* sobre declaração que o DS entrega (seletor+propriedade+valor da folha oficial, *shadow* do componente) é **erro normativo**: a regra não se aplica. O fato fica registrado. | `M-0053` (tela B p07, `C-603544eb…`, `ds:token-spacing`): `padding: 0 6px` de `:host .crumb a` no `<br-breadcrumb>` | erro normativo (igual ao arquivado `incorreta`) | Não |
| **R5** | **DS que falha WCAG/e-MAG é violação da interface.** Se o elemento entregue pelo DS viola critério aplicável no estado medido, a classe é **violação de origem DS**, nunca erro (WCAG 2.2 §5.2.2). Ela conta na análise II e é excluída, com lista auditável, na análise I **[autora: P1]**. A autoria **não** é atribuída à página. | `M-0444` (tela A p07, `C-28094588…`): setas do calendário sem nome (`BRDateTimePicker`). `M-0008`: logo `alt="logo"` no *shadow* do `br-header`. `M-0003`: `aria-hidden` do `BRUpload`, que exige conferir se o foco chega a um controle oculto. | violação de origem DS (arquivado `incorreta`) | Não para unidades. Muda as incorretas e a precisão de **todas as tabelas** (§3) |
| **R6** | **Norma acima do exemplo, com evidência de estado exposto.** O exemplo do DS não absolve WCAG, e copiá-lo é origem `pagina-copiando-exemplo-ds`. A ausência literal de `aria-current`/`aria-selected` **não basta**. Na cena medida, conferir: (a) papel e função do controle; (b) se o estado ativo é exposto à tecnologia assistiva por algum mecanismo equivalente (`aria-current`, `aria-selected` com `role=tab`, texto oculto, nome que inclui o estado…); (c) se a informação só existe visualmente (1.3.1) ou é estado de componente (4.1.2). A **mesma regra** julga a A-12 (tela A) e a tela B **[autora: P2]**. | Tela B, abas: `M-0127` (p06, novo correto) × `M-0180` (p02, `incorreta` "marcação canônica do br-tab"). Paginação: `M-0729` × `M-0287`. | violação, se (b) falha na cena; senão erro normativo | **Sim:** A-12 é unidade da referência. Se a regra não sustentar a A-12, **a referência é revista** (NAT-75), sem prova circular "é defeito porque está na referência" |
| **R7** | **Correto sem candidata → vínculo excepcional** (NAT-72): unidade, relação (ausência global, *host*/interno, participante, transição), estado, evidência, assinatura. Sem ratificação, fica `novel` no original e **pendente** no derivado. Nunca por *regex* da justificativa. | `M-0636` (tela B p02, `C-3657f475…`): botão olho sem nome = B-07. `M-0036` (Sonnet p05, `C-dc6ca3c6…`): foco ao `body` ao fechar o diálogo = A-01. `M-0462`: sem salto para o conteúdo = B-01 | violação de origem página, vinculada após ratificação | **Sim** (60 do principal, 8 de P, 68 de linha de base; + R8) |
| **R8** | **Sujeito composto em átomos.** Cada sujeito alegado é julgado sozinho. A parte correspondente credita a sua unidade; a extra recebe a própria classe. *Host* e controle interno do mesmo componente são o mesmo sujeito funcional quando a evidência mostra qual realiza a função. | `M-0056` (tela B p03, `C-faeb5bf7…`): `input#search` sem rótulo (B-04) + *host* `<br-input>`, recusado "Unsupported subject". `M-0260` (`C-3278db85…`, axe image-alt): ícone do Sair (B-16) + logo do `br-header` | B-04 / B-16 no átomo certo; resto à parte | **Sim** (B-04 em D; B-16 na baseline axe pendente) |
| **R9** | **Evidência indisponível não é veredito.** Recusa do painel, estado não alcançado ou raiz fechada mantêm a alegação **pendente**. Revisão com pendentes não se apresenta como final. | `M-0260`: `evidencia-insuficiente` nos 10 pares; é a razão de a axe da tela B ser `provisional` | evidência indisponível até a R8 | **Sim** (baseline) |
| **R10** | **Estado declarado.** Julga-se no estado da receita. Se o fato só é verdadeiro noutro estado que a receita não alcança, o resultado é evidência indisponível (não erro factual). Se alcança, julga-se lá. | Tela B p06, `C-96b5c3b1…` (linha de base `ds:token-radius`): raio de 20 px do Sair, cena com o menu fechado; variou entre pares (D-111) | evidência indisponível | Não |
| **R11** | **Erro normativo antes de observação; sem regra, não há achado (D-27).** (a) Se o cartão **afirma** que o comportamento viola uma obrigação que não se aplica ou não foi violada, é **erro normativo**. Exemplo: WCAG 3.3.1 pressupõe erro **detectado**; aceitar "123" sem detectar nada não o viola. (b) Só é **observação** o fato verdadeiro apresentado sem essa alegação indevida. (c) Se houver norma aplicável e violada, é violação **[autora: P3]**. (d) **1.2.0:** erro normativo com sugestão válida sai da precisão como **observação com norma errada** (NAT-89). | Data "31/02" convertida em silêncio: `M-0771` (Sonnet p03, novo correto) × `M-0198` (p07, `incorreta`, cita wcag:3.3.1). CPF "123" aceito (D-112). | depende do que o cartão alega: 3.3.1 → erro normativo; sem norma → observação | Não (fora das unidades sorteadas) |
| **R12** | **Duplicata exige igualdade:** mesma execução + sujeito + estado + evidência + unidade/política. Regras diferentes do axe sobre o mesmo defeito no mesmo elemento (`label` e `label-title-only`) são duplicata. Sujeito, estado ou *build* diferentes não são. | `M-0319` (Sonnet p10, `duplicada`) × `M-0341` (p08, credita A-09) | duplicata | Não (A-09 já creditada pelo `label` em 20/20 pares de A, conferido) |
| **R13** | **Força.** Norma `recomendado`/`exemplo` invocada como obrigação é erro normativo. O fato pode ir para observação. `aplicabilidade = incerta` dá evidência indisponível, nunca violação "por precaução". | `ds-structure-*-variant` virou sinal de revisão (D-27) | erro normativo / observação | Não |
| **R15** | **Regra mais fraca, fato certo (1.2.0, NAT-89 b).** Se o átomo descreve o fato de uma unidade da referência (mesmo sujeito, estado e evidência, vínculo pela R7, nunca pelo id da regra nem por semelhança de texto) e cita uma regra **verdadeira mas mais fraca** (boa prática, recomendação) em vez da norma da unidade, ele **credita a detecção** da unidade. Não ganha crédito de fundamentação: `forcaDaCitacao` fica registrada. A regra vale igual para agentes e linhas de base. Se a regra citada **não se aplica**, não é a R15: é R11 (erro normativo, ou observação com norma errada se a sugestão for válida). | B-02 (tela B, "sem h1; 'Vistorias' é h2") citada como axe `page-has-heading-one`: R-04, R-10 e 10 cartões da linha de base axe | violação de origem página, creditada à unidade | **Sim** (B-02 em D e na linha de base axe). Sensibilidade "sem a R15" publicada |
| **R14** | **Unidade de contagem (relato).** O scorer conta por sujeito (42 dias do calendário). A reanálise publica também por cartão/família, como secundário (parecer §3). | 66 cartões de setas e 7 de dias concentram as incorretas do braço com (D-97, D-112) | — | Não |

## 5. Como entra no sistema (sem implementar agora)

- **NAT-72:** gravar, por **átomo**, os cinco campos do §1 + `classe` + `forcaDoVeredito`; retirar o *regex* de
  justificativas como fonte definitiva.
- **NAT-74:** aplicar a v1.1 aos dois braços e às linhas de base. Publicar as análises I **e** II, com trilha
  antigo→novo, lista de exclusões e contagens por braço. Rotular "retrospectiva; mudança de medida".
- **NAT-75:** rever a A-12 (e qualquer unidade que a R6 não sustente) com evidência independente da
  referência.
- **Testes de aceite:**
  - mesma evidência com origem DS diferente não muda a verdade WCAG (R5);
  - verdade de origem DS não vira falso (R5);
  - fato verdadeiro com norma indevida continua no denominador (R11a, R4, R2), **salvo** sugestão válida (1.2.0),
    caso em que sai como observação com norma errada e reaparece como falso na sensibilidade 1.1.0;
  - boa prática verdadeira sobre o fato de uma unidade credita a detecção, não a fundamentação (R15);
  - revisão incompleta não se apresenta final (R9);
  - seleção, acordos e desacordos publicados ([selecao-ratificacao.md](selecao-ratificacao.md)).
- **Versão:** cada resposta da autora ou regra nova gera `1.2.0`. A trilha registra qual versão classificou cada
  átomo.
